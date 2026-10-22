// Gerçek Hayat Fotoğrafları ile 9-12. Sınıf Soru Havuzu (Emoji/Çizim YOK, Tamamen Gerçek Fotoğraflar)

const questionsData = [
  // ==========================================
  // 9. SINIF (EASY) - GERÇEK FOTOĞRAFLAR
  // ==========================================
  {
    theme: "Emergency and Health",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "AMBULANCE",
    translation: "Ambulans",
    options: [
      { id: "ambulance", label: "Ambulance", img: "/images/ambulance.jpg" },
      { id: "bicycle", label: "Bicycle", img: "/images/bicycle.jpg" },
      { id: "airplane", label: "Airplane", img: "/images/airplane.jpg" },
      { id: "backpack", label: "Backpack", img: "/images/backpack.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Emergency and Health",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "THERMOMETER",
    translation: "Termometre",
    options: [
      { id: "bandage", label: "Bandage", img: "/images/bandage.jpg" },
      { id: "thermometer", label: "Thermometer", img: "/images/thermometer.jpg" },
      { id: "skyscraper", label: "Skyscraper", img: "/images/skyscraper.jpg" },
      { id: "camera", label: "Camera", img: "/images/camera.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Emergency and Health",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "BANDAGE",
    translation: "Yara Bandı",
    options: [
      { id: "popcorn", label: "Popcorn", img: "/images/popcorn.jpg" },
      { id: "passport", label: "Passport", img: "/images/passport.jpg" },
      { id: "bandage", label: "Bandage", img: "/images/bandage.jpg" },
      { id: "waterfall", label: "Waterfall", img: "/images/waterfall.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Human in Nature",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "VOLCANO",
    translation: "Yanardağ",
    options: [
      { id: "waterfall", label: "Waterfall", img: "/images/waterfall.jpg" },
      { id: "skyscraper", label: "Skyscraper", img: "/images/skyscraper.jpg" },
      { id: "desert", label: "Desert", img: "/images/desert.jpg" },
      { id: "volcano", label: "Volcano", img: "/images/volcano.jpg" }
    ],
    correctIndex: 3
  },
  {
    theme: "Human in Nature",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "WATERFALL",
    translation: "Şelale",
    options: [
      { id: "waterfall", label: "Waterfall", img: "/images/waterfall.jpg" },
      { id: "airplane", label: "Airplane", img: "/images/airplane.jpg" },
      { id: "balloons", label: "Balloons", img: "/images/balloons.jpg" },
      { id: "backpack", label: "Backpack", img: "/images/backpack.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Studying Abroad",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "PASSPORT",
    translation: "Pasaport",
    options: [
      { id: "popcorn", label: "Popcorn", img: "/images/popcorn.jpg" },
      { id: "passport", label: "Passport", img: "/images/passport.jpg" },
      { id: "thermometer", label: "Thermometer", img: "/images/thermometer.jpg" },
      { id: "guitar", label: "Guitar", img: "/images/guitar.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Studying Abroad",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "BACKPACK",
    translation: "Sırt Çantası",
    options: [
      { id: "ambulance", label: "Ambulance", img: "/images/ambulance.jpg" },
      { id: "bicycle", label: "Bicycle", img: "/images/bicycle.jpg" },
      { id: "backpack", label: "Backpack", img: "/images/backpack.jpg" },
      { id: "volcano", label: "Volcano", img: "/images/volcano.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Studying Abroad",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "AIRPLANE",
    translation: "Uçak",
    options: [
      { id: "balloons", label: "Balloons", img: "/images/balloons.jpg" },
      { id: "skyscraper", label: "Skyscraper", img: "/images/skyscraper.jpg" },
      { id: "bridge", label: "Bridge", img: "/images/bridge.jpg" },
      { id: "airplane", label: "Airplane", img: "/images/airplane.jpg" }
    ],
    correctIndex: 3
  },
  {
    theme: "My Environment",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "SKYSCRAPER",
    translation: "Gökdelen",
    options: [
      { id: "skyscraper", label: "Skyscraper", img: "/images/skyscraper.jpg" },
      { id: "popcorn", label: "Popcorn", img: "/images/popcorn.jpg" },
      { id: "bandage", label: "Bandage", img: "/images/bandage.jpg" },
      { id: "pizza", label: "Pizza", img: "/images/pizza.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "My Environment",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "BICYCLE",
    translation: "Bisiklet",
    options: [
      { id: "airplane", label: "Airplane", img: "/images/airplane.jpg" },
      { id: "bicycle", label: "Bicycle", img: "/images/bicycle.jpg" },
      { id: "passport", label: "Passport", img: "/images/passport.jpg" },
      { id: "basketball", label: "Basketball", img: "/images/basketball.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Movies and Media",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "POPCORN",
    translation: "Patlamış Mısır",
    options: [
      { id: "volcano", label: "Volcano", img: "/images/volcano.jpg" },
      { id: "balloons", label: "Balloons", img: "/images/balloons.jpg" },
      { id: "popcorn", label: "Popcorn", img: "/images/popcorn.jpg" },
      { id: "backpack", label: "Backpack", img: "/images/backpack.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Party Time",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "BALLOONS",
    translation: "Balonlar",
    options: [
      { id: "waterfall", label: "Waterfall", img: "/images/waterfall.jpg" },
      { id: "skyscraper", label: "Skyscraper", img: "/images/skyscraper.jpg" },
      { id: "bicycle", label: "Bicycle", img: "/images/bicycle.jpg" },
      { id: "balloons", label: "Balloons", img: "/images/balloons.jpg" }
    ],
    correctIndex: 3
  },
  {
    theme: "Music and Arts",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "GUITAR",
    translation: "Gitar",
    options: [
      { id: "guitar", label: "Guitar", img: "/images/guitar.jpg" },
      { id: "headphones", label: "Headphones", img: "/images/headphones.jpg" },
      { id: "laptop", label: "Laptop", img: "/images/laptop.jpg" },
      { id: "camera", label: "Camera", img: "/images/camera.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Sports & Hobbies",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "BASKETBALL",
    translation: "Basketbol Topu",
    options: [
      { id: "bicycle", label: "Bicycle", img: "/images/bicycle.jpg" },
      { id: "basketball", label: "Basketball", img: "/images/basketball.jpg" },
      { id: "balloons", label: "Balloons", img: "/images/balloons.jpg" },
      { id: "backpack", label: "Backpack", img: "/images/backpack.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Technology & Daily Life",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "LAPTOP",
    translation: "Dizüstü Bilgisayar",
    options: [
      { id: "camera", label: "Camera", img: "/images/camera.jpg" },
      { id: "clock", label: "Clock", img: "/images/clock.jpg" },
      { id: "laptop", label: "Laptop", img: "/images/laptop.jpg" },
      { id: "guitar", label: "Guitar", img: "/images/guitar.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Photography",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "CAMERA",
    translation: "Fotoğraf Makinesi",
    options: [
      { id: "passport", label: "Passport", img: "/images/passport.jpg" },
      { id: "headphones", label: "Headphones", img: "/images/headphones.jpg" },
      { id: "laptop", label: "Laptop", img: "/images/laptop.jpg" },
      { id: "camera", label: "Camera", img: "/images/camera.jpg" }
    ],
    correctIndex: 3
  },
  {
    theme: "Architecture",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "BRIDGE",
    translation: "Köprü",
    options: [
      { id: "bridge", label: "Bridge", img: "/images/bridge.jpg" },
      { id: "skyscraper", label: "Skyscraper", img: "/images/skyscraper.jpg" },
      { id: "castle", label: "Castle", img: "/images/castle.jpg" },
      { id: "waterfall", label: "Waterfall", img: "/images/waterfall.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Nature and Geography",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "DESERT",
    translation: "Çöl",
    options: [
      { id: "waterfall", label: "Waterfall", img: "/images/waterfall.jpg" },
      { id: "desert", label: "Desert", img: "/images/desert.jpg" },
      { id: "volcano", label: "Volcano", img: "/images/volcano.jpg" },
      { id: "bridge", label: "Bridge", img: "/images/bridge.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Daily Routine",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "CLOCK",
    translation: "Saat",
    options: [
      { id: "camera", label: "Camera", img: "/images/camera.jpg" },
      { id: "laptop", label: "Laptop", img: "/images/laptop.jpg" },
      { id: "clock", label: "Clock", img: "/images/clock.jpg" },
      { id: "guitar", label: "Guitar", img: "/images/guitar.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Food Culture",
    grade: "9. Sınıf",
    difficulty: "easy",
    word: "PIZZA",
    translation: "Pizza",
    options: [
      { id: "popcorn", label: "Popcorn", img: "/images/popcorn.jpg" },
      { id: "backpack", label: "Backpack", img: "/images/backpack.jpg" },
      { id: "bandage", label: "Bandage", img: "/images/bandage.jpg" },
      { id: "pizza", label: "Pizza", img: "/images/pizza.jpg" }
    ],
    correctIndex: 3
  },

  // ==========================================
  // 10. SINIF (MEDIUM) - GERÇEK FOTOĞRAFLAR
  // ==========================================
  {
    theme: "Future Technology",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "SATELLITE",
    translation: "Uydu",
    options: [
      { id: "satellite", label: "Satellite", img: "/images/satellite.jpg" },
      { id: "drone", label: "Drone", img: "/images/drone.jpg" },
      { id: "headphones", label: "Headphones", img: "/images/headphones.jpg" },
      { id: "robot", label: "Robot", img: "/images/robot.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Future Technology",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "DRONE",
    translation: "İnsansız Hava Aracı (Dron)",
    options: [
      { id: "sword", label: "Sword", img: "/images/sword.jpg" },
      { id: "drone", label: "Drone", img: "/images/drone.jpg" },
      { id: "crown", label: "Crown", img: "/images/crown.jpg" },
      { id: "tent", label: "Tent", img: "/images/tent.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Legendary Figures & History",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "SWORD",
    translation: "Kılıç",
    options: [
      { id: "shield", label: "Shield", img: "/images/shield.jpg" },
      { id: "lantern", label: "Lantern", img: "/images/lantern.jpg" },
      { id: "sword", label: "Sword", img: "/images/sword.jpg" },
      { id: "satellite", label: "Satellite", img: "/images/satellite.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Legendary Figures & History",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "SHIELD",
    translation: "Kalkan",
    options: [
      { id: "crown", label: "Crown", img: "/images/crown.jpg" },
      { id: "headphones", label: "Headphones", img: "/images/headphones.jpg" },
      { id: "tent", label: "Tent", img: "/images/tent.jpg" },
      { id: "shield", label: "Shield", img: "/images/shield.jpg" }
    ],
    correctIndex: 3
  },
  {
    theme: "Monarchy & Power",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "CROWN",
    translation: "Krallık Tacı",
    options: [
      { id: "crown", label: "Crown", img: "/images/crown.jpg" },
      { id: "satellite", label: "Satellite", img: "/images/satellite.jpg" },
      { id: "sword", label: "Sword", img: "/images/sword.jpg" },
      { id: "castle", label: "Castle", img: "/images/castle.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Travel & Camping",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "TENT",
    translation: "Çadır",
    options: [
      { id: "drone", label: "Drone", img: "/images/drone.jpg" },
      { id: "tent", label: "Tent", img: "/images/tent.jpg" },
      { id: "shield", label: "Shield", img: "/images/shield.jpg" },
      { id: "lighthouse", label: "Lighthouse", img: "/images/lighthouse.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Digital Era",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "HEADPHONES",
    translation: "Kulaklık",
    options: [
      { id: "crown", label: "Crown", img: "/images/crown.jpg" },
      { id: "sword", label: "Sword", img: "/images/sword.jpg" },
      { id: "headphones", label: "Headphones", img: "/images/headphones.jpg" },
      { id: "robot", label: "Robot", img: "/images/robot.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Traditions & Light",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "LANTERN",
    translation: "Fener",
    options: [
      { id: "tent", label: "Tent", img: "/images/tent.jpg" },
      { id: "drone", label: "Drone", img: "/images/drone.jpg" },
      { id: "shield", label: "Shield", img: "/images/shield.jpg" },
      { id: "lantern", label: "Lantern", img: "/images/lantern.jpg" }
    ],
    correctIndex: 3
  },
  {
    theme: "Modern Robotics",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "ROBOT",
    translation: "İnsansı Robot",
    options: [
      { id: "robot", label: "Robot", img: "/images/robot.jpg" },
      { id: "satellite", label: "Satellite", img: "/images/satellite.jpg" },
      { id: "drone", label: "Drone", img: "/images/drone.jpg" },
      { id: "headphones", label: "Headphones", img: "/images/headphones.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Historic Architecture",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "CASTLE",
    translation: "Tarihi Şato / Kale",
    options: [
      { id: "bridge", label: "Bridge", img: "/images/bridge.jpg" },
      { id: "castle", label: "Castle", img: "/images/castle.jpg" },
      { id: "skyscraper", label: "Skyscraper", img: "/images/skyscraper.jpg" },
      { id: "lighthouse", label: "Lighthouse", img: "/images/lighthouse.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Maritime & Navigation",
    grade: "10. Sınıf",
    difficulty: "medium",
    word: "LIGHTHOUSE",
    translation: "Deniz Feneri",
    options: [
      { id: "tent", label: "Tent", img: "/images/tent.jpg" },
      { id: "castle", label: "Castle", img: "/images/castle.jpg" },
      { id: "lighthouse", label: "Lighthouse", img: "/images/lighthouse.jpg" },
      { id: "crown", label: "Crown", img: "/images/crown.jpg" }
    ],
    correctIndex: 2
  },

  // ==========================================
  // 11. SINIF (HARD) - GERÇEK FOTOĞRAFLAR
  // ==========================================
  {
    theme: "Space & Science",
    grade: "11. Sınıf",
    difficulty: "hard",
    word: "TELESCOPE",
    translation: "Teleskop",
    options: [
      { id: "telescope", label: "Telescope", img: "/images/telescope.jpg" },
      { id: "microscope", label: "Microscope", img: "/images/microscope.jpg" },
      { id: "dna", label: "DNA", img: "/images/dna.jpg" },
      { id: "astronaut", label: "Astronaut", img: "/images/astronaut.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Space & Science",
    grade: "11. Sınıf",
    difficulty: "hard",
    word: "METEORITE",
    translation: "Göktaşı / Meteorit",
    options: [
      { id: "wildfire", label: "Wildfire", img: "/images/wildfire.jpg" },
      { id: "meteorite", label: "Meteorite", img: "/images/meteorite.jpg" },
      { id: "drought", label: "Drought", img: "/images/drought.jpg" },
      { id: "medal", label: "Medal", img: "/images/medal.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Genetics & Biology",
    grade: "11. Sınıf",
    difficulty: "hard",
    word: "DNA DOUBLE HELIX",
    translation: "DNA Sarmalı",
    options: [
      { id: "telescope", label: "Telescope", img: "/images/telescope.jpg" },
      { id: "hourglass", label: "Hourglass", img: "/images/hourglass.jpg" },
      { id: "dna", label: "DNA", img: "/images/dna.jpg" },
      { id: "microscope", label: "Microscope", img: "/images/microscope.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Global Crises & Disasters",
    grade: "11. Sınıf",
    difficulty: "hard",
    word: "WILDFIRE",
    translation: "Orman Yangını",
    options: [
      { id: "drought", label: "Drought", img: "/images/drought.jpg" },
      { id: "medal", label: "Medal", img: "/images/medal.jpg" },
      { id: "meteorite", label: "Meteorite", img: "/images/meteorite.jpg" },
      { id: "wildfire", label: "Wildfire", img: "/images/wildfire.jpg" }
    ],
    correctIndex: 3
  },
  {
    theme: "Climate Change",
    grade: "11. Sınıf",
    difficulty: "hard",
    word: "DROUGHT",
    translation: "Kuraklık",
    options: [
      { id: "drought", label: "Drought", img: "/images/drought.jpg" },
      { id: "wildfire", label: "Wildfire", img: "/images/wildfire.jpg" },
      { id: "telescope", label: "Telescope", img: "/images/telescope.jpg" },
      { id: "dna", label: "DNA", img: "/images/dna.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Achievements & Honors",
    grade: "11. Sınıf",
    difficulty: "hard",
    word: "MEDAL",
    translation: "Onur Madalyası",
    options: [
      { id: "microscope", label: "Microscope", img: "/images/microscope.jpg" },
      { id: "medal", label: "Medal", img: "/images/medal.jpg" },
      { id: "hourglass", label: "Hourglass", img: "/images/hourglass.jpg" },
      { id: "meteorite", label: "Meteorite", img: "/images/meteorite.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Laboratory Medicine",
    grade: "11. Sınıf",
    difficulty: "hard",
    word: "MICROSCOPE",
    translation: "Mikroskop",
    options: [
      { id: "telescope", label: "Telescope", img: "/images/telescope.jpg" },
      { id: "dna", label: "DNA", img: "/images/dna.jpg" },
      { id: "microscope", label: "Microscope", img: "/images/microscope.jpg" },
      { id: "drought", label: "Drought", img: "/images/drought.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Time & History",
    grade: "11. Sınıf",
    difficulty: "hard",
    word: "HOURGLASS",
    translation: "Kum Saati",
    options: [
      { id: "medal", label: "Medal", img: "/images/medal.jpg" },
      { id: "wildfire", label: "Wildfire", img: "/images/wildfire.jpg" },
      { id: "meteorite", label: "Meteorite", img: "/images/meteorite.jpg" },
      { id: "hourglass", label: "Hourglass", img: "/images/hourglass.jpg" }
    ],
    correctIndex: 3
  },
  {
    theme: "Space Exploration",
    grade: "11. Sınıf",
    difficulty: "hard",
    word: "ASTRONAUT",
    translation: "Astronot",
    options: [
      { id: "astronaut", label: "Astronaut", img: "/images/astronaut.jpg" },
      { id: "telescope", label: "Telescope", img: "/images/telescope.jpg" },
      { id: "meteorite", label: "Meteorite", img: "/images/meteorite.jpg" },
      { id: "microscope", label: "Microscope", img: "/images/microscope.jpg" }
    ],
    correctIndex: 0
  },

  // ==========================================
  // 12. SINIF (IMPOSSIBLE) - GERÇEK FOTOĞRAFLAR
  // ==========================================
  {
    theme: "Alternative Energy",
    grade: "12. Sınıf",
    difficulty: "impossible",
    word: "WIND TURBINE",
    translation: "Rüzgar Türbini",
    options: [
      { id: "wind_turbine", label: "Wind Turbine", img: "/images/wind_turbine.jpg" },
      { id: "microchip", label: "Microchip", img: "/images/microchip.jpg" },
      { id: "blockchain", label: "Blockchain", img: "/images/blockchain.jpg" },
      { id: "quantum_atom", label: "Quantum", img: "/images/quantum_atom.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Cyber World & Hardware",
    grade: "12. Sınıf",
    difficulty: "impossible",
    word: "MICROCHIP",
    translation: "Entegre Mikroçip",
    options: [
      { id: "canvas_art", label: "Canvas", img: "/images/canvas_art.jpg" },
      { id: "microchip", label: "Microchip", img: "/images/microchip.jpg" },
      { id: "justice_scales", label: "Scales of Justice", img: "/images/justice_scales.jpg" },
      { id: "peace_dove", label: "Peace Dove", img: "/images/peace_dove.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Law & Human Rights",
    grade: "12. Sınıf",
    difficulty: "impossible",
    word: "SCALES OF JUSTICE",
    translation: "Adalet Terazisi",
    options: [
      { id: "symphony", label: "Symphony", img: "/images/symphony.jpg" },
      { id: "blockchain", label: "Blockchain", img: "/images/blockchain.jpg" },
      { id: "justice_scales", label: "Scales of Justice", img: "/images/justice_scales.jpg" },
      { id: "wind_turbine", label: "Wind Turbine", img: "/images/wind_turbine.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Peace & Diplomacy",
    grade: "12. Sınıf",
    difficulty: "impossible",
    word: "PEACE DOVE",
    translation: "Barış Güvercini",
    options: [
      { id: "quantum_atom", label: "Quantum", img: "/images/quantum_atom.jpg" },
      { id: "canvas_art", label: "Canvas", img: "/images/canvas_art.jpg" },
      { id: "microchip", label: "Microchip", img: "/images/microchip.jpg" },
      { id: "peace_dove", label: "Peace Dove", img: "/images/peace_dove.jpg" }
    ],
    correctIndex: 3
  },
  {
    theme: "Modern Physics",
    grade: "12. Sınıf",
    difficulty: "impossible",
    word: "QUANTUM MODEL",
    translation: "Kuantum Modeli",
    options: [
      { id: "quantum_atom", label: "Quantum", img: "/images/quantum_atom.jpg" },
      { id: "symphony", label: "Symphony", img: "/images/symphony.jpg" },
      { id: "justice_scales", label: "Scales of Justice", img: "/images/justice_scales.jpg" },
      { id: "wind_turbine", label: "Wind Turbine", img: "/images/wind_turbine.jpg" }
    ],
    correctIndex: 0
  },
  {
    theme: "Fine Arts & Music",
    grade: "12. Sınıf",
    difficulty: "impossible",
    word: "SYMPHONY ORCHESTRA",
    translation: "Senfoni Orkestrası",
    options: [
      { id: "blockchain", label: "Blockchain", img: "/images/blockchain.jpg" },
      { id: "symphony", label: "Symphony", img: "/images/symphony.jpg" },
      { id: "microchip", label: "Microchip", img: "/images/microchip.jpg" },
      { id: "peace_dove", label: "Peace Dove", img: "/images/peace_dove.jpg" }
    ],
    correctIndex: 1
  },
  {
    theme: "Visual Arts",
    grade: "12. Sınıf",
    difficulty: "impossible",
    word: "CANVAS PAINTING",
    translation: "Tuval Yağlı Boya Sanatı",
    options: [
      { id: "justice_scales", label: "Scales of Justice", img: "/images/justice_scales.jpg" },
      { id: "quantum_atom", label: "Quantum", img: "/images/quantum_atom.jpg" },
      { id: "canvas_art", label: "Canvas", img: "/images/canvas_art.jpg" },
      { id: "wind_turbine", label: "Wind Turbine", img: "/images/wind_turbine.jpg" }
    ],
    correctIndex: 2
  },
  {
    theme: "Fintech & Cryptography",
    grade: "12. Sınıf",
    difficulty: "impossible",
    word: "BLOCKCHAIN",
    translation: "Blokzincir Ağı",
    options: [
      { id: "symphony", label: "Symphony", img: "/images/symphony.jpg" },
      { id: "peace_dove", label: "Peace Dove", img: "/images/peace_dove.jpg" },
      { id: "microchip", label: "Microchip", img: "/images/microchip.jpg" },
      { id: "blockchain", label: "Blockchain", img: "/images/blockchain.jpg" }
    ],
    correctIndex: 3
  }
];

const gradeDifficultyMap = {
  easy: {
    label: "Easy (9. Sınıf)",
    grade: "9. Sınıf",
    color: "#22C55E",
    badge: "🟢 Kolay (9. Sınıf)"
  },
  medium: {
    label: "Medium (10. Sınıf)",
    grade: "10. Sınıf",
    color: "#EAB308",
    badge: "🟡 Orta (10. Sınıf)"
  },
  hard: {
    label: "Hard (11. Sınıf)",
    grade: "11. Sınıf",
    color: "#EF4444",
    badge: "🔴 Zor (11. Sınıf)"
  },
  impossible: {
    label: "Impossible (12. Sınıf)",
    grade: "12. Sınıf",
    color: "#A855F7",
    badge: "🟣 İmkansız (12. Sınıf)"
  }
};

module.exports = {
  questionsData,
  gradeDifficultyMap
};
