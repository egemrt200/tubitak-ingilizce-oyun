const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');
const QRCode = require('qrcode');
const { questionsData, gradeDifficultyMap } = require('./data/questions');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Yerel Ağ IP Adresini Bul
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const localIp = getLocalIpAddress();
let publicTunnelUrl = null;

// Cloudflare Tunnel Başlatıcı (Evden Dışarıya Açılma)
function startPublicTunnel() {
  try {
    console.log('🌍 İnternet tüneli başlatılıyor (Cloudflare Tunnel)...');
    const tunnelProcess = spawn('npx.cmd', ['cloudflared', 'tunnel', '--url', `http://localhost:${PORT}`], {
      shell: true
    });

    tunnelProcess.stderr.on('data', (data) => {
      const output = data.toString();
      const match = output.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/);
      if (match && !publicTunnelUrl) {
        publicTunnelUrl = match[0];
        console.log(`\n=============================================================`);
        console.log(`🎉 GENEL İNTERNET LİNKİ AKTİF (TÜM TÜRKİYE'DEN ERİŞİLEBİLİR):`);
        console.log(`👉 ${publicTunnelUrl}`);
        console.log(`=============================================================\n`);
        console.log(` 1. Oyuncu Mobil Linki: ${publicTunnelUrl}/play?slot=1`);
        console.log(` 2. Oyuncu Mobil Linki: ${publicTunnelUrl}/play?slot=2`);
        console.log(` A4 Baskı Sayfası     : http://localhost:${PORT}/print`);
        console.log(` Stand Arenası Ekranı : ${publicTunnelUrl}/stand`);
        console.log(`=============================================================\n`);
      }
    });

    tunnelProcess.on('error', (err) => {
      console.warn('Cloudflare tünel başlatılamadı, yerel ağ modunda devam ediliyor:', err.message);
    });
  } catch (e) {
    console.warn('Tünel başlatılamadı:', e.message);
  }
}

// QR Kod Üretim API
app.get('/api/qr', async (req, res) => {
  try {
    const text = req.query.text || (publicTunnelUrl || `http://${localIp}:${PORT}`);
    const qrDataUrl = await QRCode.toDataURL(text, {
      margin: 1,
      width: 340,
      color: {
        dark: '#0f172a',
        light: '#ffffff'
      }
    });
    res.json({ url: qrDataUrl, text });
  } catch (err) {
    res.status(500).json({ error: 'QR kod üretilemedi' });
  }
});

// Sistem Bilgileri API
app.get('/api/info', (req, res) => {
  const effectiveBase = publicTunnelUrl || `http://${localIp}:${PORT}`;
  res.json({
    ip: localIp,
    port: PORT,
    publicUrl: publicTunnelUrl,
    activeUrl: effectiveBase,
    player1Url: `${effectiveBase}/play?slot=1`,
    player2Url: `${effectiveBase}/play?slot=2`,
    standUrl: `${effectiveBase}/stand`,
    localStandUrl: `http://localhost:${PORT}/stand`,
    printUrl: `http://localhost:${PORT}/print`
  });
});

const publicDir = path.resolve(__dirname, 'public');
app.use(express.static(publicDir));
app.use(express.json());

// Sayfa Rotaları
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: publicDir });
});
app.get('/stand', (req, res) => {
  res.sendFile('stand.html', { root: publicDir });
});
app.get('/play', (req, res) => {
  res.sendFile('play.html', { root: publicDir });
});
app.get('/print', (req, res) => {
  res.sendFile('print.html', { root: publicDir });
});

// ==========================================
// OYUN DURUMU (GAME STATE MANAGEMENT)
// ==========================================
const TOTAL_QUESTIONS_PER_GAME = 20;
const QUESTION_DURATION_SEC = 10;

let gameState = {
  status: 'waiting', // 'waiting', 'voting', 'intro', 'playing', 'result', 'gameover'
  players: {
    1: { id: null, slot: 1, name: '1. Oyuncu', score: 0, vote: null, answered: false, connected: false },
    2: { id: null, slot: 2, name: '2. Oyuncu', score: 0, vote: null, answered: false, connected: false }
  },
  difficulty: null,
  questions: [],
  currentQuestionIndex: 0,
  timer: QUESTION_DURATION_SEC,
  timerInterval: null,
  questionWinner: null,
  correctOptionIndex: null
};

function getPublicGameState() {
  const currentQ = gameState.questions[gameState.currentQuestionIndex];
  return {
    status: gameState.status,
    players: {
      1: {
        slot: 1,
        name: gameState.players[1].name,
        score: gameState.players[1].score,
        connected: gameState.players[1].connected,
        vote: gameState.players[1].vote,
        answered: gameState.players[1].answered
      },
      2: {
        slot: 2,
        name: gameState.players[2].name,
        score: gameState.players[2].score,
        connected: gameState.players[2].connected,
        vote: gameState.players[2].vote,
        answered: gameState.players[2].answered
      }
    },
    difficulty: gameState.difficulty ? gradeDifficultyMap[gameState.difficulty] : null,
    currentQuestionIndex: gameState.currentQuestionIndex,
    totalQuestions: gameState.questions.length || TOTAL_QUESTIONS_PER_GAME,
    timer: gameState.timer,
    questionWinner: gameState.questionWinner,
    correctOptionIndex: (gameState.status === 'result' || gameState.status === 'gameover') ? gameState.correctOptionIndex : null,
    question: currentQ ? {
      word: currentQ.word,
      theme: currentQ.theme,
      grade: currentQ.grade,
      translation: (gameState.status === 'result' || gameState.status === 'gameover') ? currentQ.translation : null,
      options: currentQ.options.map(opt => ({
        id: opt.id,
        label: opt.label,
        img: opt.img
      }))
    } : null
  };
}

function broadcastState() {
  io.emit('state_update', getPublicGameState());
}

function checkReadyToVote() {
  if (gameState.players[1].connected && gameState.players[2].connected) {
    gameState.status = 'voting';
    gameState.players[1].vote = null;
    gameState.players[2].vote = null;
    gameState.players[1].score = 0;
    gameState.players[2].score = 0;
    broadcastState();
  } else {
    gameState.status = 'waiting';
    broadcastState();
  }
}

function resolveVotesAndStart() {
  const vote1 = gameState.players[1].vote;
  const vote2 = gameState.players[2].vote;

  let chosenDifficulty = 'easy';
  if (vote1 && vote2) {
    if (vote1 === vote2) {
      chosenDifficulty = vote1;
    } else {
      chosenDifficulty = Math.random() < 0.5 ? vote1 : vote2;
    }
  } else {
    chosenDifficulty = vote1 || vote2 || 'easy';
  }

  gameState.difficulty = chosenDifficulty;

  let pool = questionsData.filter(q => q.difficulty === chosenDifficulty);
  if (pool.length < TOTAL_QUESTIONS_PER_GAME) {
    pool = [...pool, ...questionsData.filter(q => q.difficulty !== chosenDifficulty)];
  }

  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  gameState.questions = shuffled.slice(0, TOTAL_QUESTIONS_PER_GAME);
  gameState.currentQuestionIndex = 0;

  gameState.status = 'intro';
  broadcastState();

  setTimeout(() => {
    startNextQuestion();
  }, 3500);
}

function startNextQuestion() {
  if (gameState.currentQuestionIndex >= gameState.questions.length) {
    endGame();
    return;
  }

  const currentQ = gameState.questions[gameState.currentQuestionIndex];
  gameState.status = 'playing';
  gameState.timer = QUESTION_DURATION_SEC;
  gameState.questionWinner = null;
  gameState.correctOptionIndex = currentQ.correctIndex;
  gameState.players[1].answered = false;
  gameState.players[2].answered = false;

  broadcastState();

  if (gameState.timerInterval) clearInterval(gameState.timerInterval);

  gameState.timerInterval = setInterval(() => {
    gameState.timer -= 1;
    io.emit('timer_tick', { timer: gameState.timer });

    if (gameState.timer <= 0) {
      clearInterval(gameState.timerInterval);
      handleQuestionTimeout();
    }
  }, 1000);
}

function handleQuestionTimeout() {
  gameState.status = 'result';
  gameState.questionWinner = 0;
  broadcastState();

  setTimeout(() => {
    gameState.currentQuestionIndex += 1;
    startNextQuestion();
  }, 2500);
}

function endGame() {
  if (gameState.timerInterval) clearInterval(gameState.timerInterval);
  gameState.status = 'gameover';
  broadcastState();

  // 8 saniye sonra iki oyuncuyu da oyundan çıkar ve standı sıradaki oyuncular için sıfırla!
  setTimeout(() => {
    io.emit('kicked_to_qr', {
      message: '🎮 Oyun Tamamlandı! Standda sıradaki arkadaşlar için yer açıldı. Tekrar oynamak için standdaki QR kodu okutun!'
    });
    resetGame();
  }, 8000);
}

function resetGame() {
  if (gameState.timerInterval) clearInterval(gameState.timerInterval);
  gameState.status = 'waiting';
  gameState.players[1].id = null;
  gameState.players[1].connected = false;
  gameState.players[1].score = 0;
  gameState.players[1].vote = null;
  gameState.players[1].answered = false;
  gameState.players[2].id = null;
  gameState.players[2].connected = false;
  gameState.players[2].score = 0;
  gameState.players[2].vote = null;
  gameState.players[2].answered = false;
  gameState.questions = [];
  gameState.currentQuestionIndex = 0;
  broadcastState();
}

// ==========================================
// SOCKET.IO ETKİNLİKLERİ
// ==========================================
io.on('connection', (socket) => {
  socket.emit('state_update', getPublicGameState());

  socket.on('join_slot', (requestedSlot) => {
    const slot = parseInt(requestedSlot);
    if (slot !== 1 && slot !== 2) return;

    gameState.players[slot].id = socket.id;
    gameState.players[slot].connected = true;
    socket.slot = slot;

    socket.emit('slot_assigned', { slot, player: gameState.players[slot] });
    checkReadyToVote();
  });

  socket.on('submit_vote', (difficulty) => {
    if (!socket.slot || gameState.status !== 'voting') return;
    if (!['easy', 'medium', 'hard', 'impossible'].includes(difficulty)) return;

    gameState.players[socket.slot].vote = difficulty;
    broadcastState();

    if (gameState.players[1].vote && gameState.players[2].vote) {
      setTimeout(() => {
        resolveVotesAndStart();
      }, 1000);
    }
  });

  socket.on('submit_answer', (selectedIndex) => {
    if (!socket.slot || gameState.status !== 'playing') return;
    const slot = socket.slot;

    if (gameState.players[slot].answered) return;

    const currentQ = gameState.questions[gameState.currentQuestionIndex];
    if (!currentQ) return;

    const isCorrect = selectedIndex === currentQ.correctIndex;

    if (isCorrect) {
      if (gameState.timerInterval) clearInterval(gameState.timerInterval);

      gameState.players[slot].score += 1;
      gameState.players[slot].answered = true;
      gameState.questionWinner = slot;
      gameState.status = 'result';

      broadcastState();

      socket.emit('answer_feedback', { correct: true, points: 1 });
      const opponentSlot = slot === 1 ? 2 : 1;
      const opponentSocketId = gameState.players[opponentSlot].id;
      if (opponentSocketId) {
        io.to(opponentSocketId).emit('answer_feedback', { correct: false, opponentWon: true });
      }

      setTimeout(() => {
        gameState.currentQuestionIndex += 1;
        startNextQuestion();
      }, 2500);
    } else {
      gameState.players[slot].answered = true;
      socket.emit('answer_feedback', { correct: false, locked: true });
      broadcastState();

      if (gameState.players[1].answered && gameState.players[2].answered) {
        if (gameState.timerInterval) clearInterval(gameState.timerInterval);
        handleQuestionTimeout();
      }
    }
  });

  socket.on('restart_game', () => {
    resetGame();
  });

  socket.on('disconnect', () => {
    if (socket.slot) {
      const slot = socket.slot;
      gameState.players[slot].connected = false;
      gameState.players[slot].id = null;
      gameState.players[slot].vote = null;

      if (gameState.status !== 'waiting') {
        if (gameState.timerInterval) clearInterval(gameState.timerInterval);
        gameState.status = 'waiting';
      }
      broadcastState();
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Yerel Sunucu Hazır: http://localhost:${PORT}`);
  startPublicTunnel();
});
