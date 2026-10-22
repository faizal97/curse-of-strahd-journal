// Per-character tips, built from each player's Roll20 sheet (exported 22 Oct 2026).
// Keyed by the party member's id in content.js. Rules follow the sheets: 5e 2014 plus Tasha's options.
window.GUIDES = {
  duff: {
    asOf: 6,
    stats: "AC 18 · HP 25 · Init -1 · Speed 30 · DC mantra 13",
    turn: [
      "Ronde pertama: Bless (action) kalau teman-teman sedang menyerang. Kalau tidak, serang lalu pakai Compelled Duel atau Shield of Faith (bonus action).",
      "Ronde berikutnya: serang dengan longsword. Kalau kena mayat hidup, pakai Divine Smite (3d8 radiant).",
      "Ada teman tumbang: Lay on Hands (action), cukup 5–10 HP untuk membangunkannya.",
      "Slot mantra habis: Harness Divine Power (bonus action) untuk mengembalikan satu slot."
    ],
    abilities: [
      ["Longsword + perisai", "+5 untuk kena, 1d8+5 slashing. Dueling sudah menambah +2; cek apakah macro Roll20 masih menulis +3."],
      ["Divine Smite", "Setelah serangan jarak dekat kena, habiskan satu slot: +2d8 radiant, +3d8 melawan mayat hidup atau iblis. Kalau kritis, dadunya digandakan."],
      ["Divine Sense", "Action, 4 kali. Tahu lokasi mayat hidup, iblis, atau celestial dalam 60 ft yang tidak tertutup penuh."],
      ["Sentinel", "Musuh di sebelahmu menyerang orang lain? Pakai reaction untuk menyerangnya. Opportunity attack yang kena membuat kecepatannya jadi 0."],
      ["Channel Divinity (1 kali per istirahat pendek)", "Nature's Wrath: jerat satu musuh dalam 10 ft. Turn the Faithless: usir fey dan iblis, tapi tidak mempan pada mayat hidup, dan membuka wujud asli makhluk yang menyamar."],
      ["Lay on Hands", "15 HP per istirahat panjang. Bisa juga menyembuhkan racun atau penyakit. Tidak berguna pada mayat hidup."],
      ["Mantra (3 slot level 1)", "Bless, Shield of Faith, Compelled Duel, Heroism, Ensnaring Strike, Speak with Animals. Semua concentration kecuali Speak with Animals, jadi hanya satu yang bisa aktif."]
    ],
    outside: [
      "Speak with Animals untuk bicara dengan gagak berbulu biru.",
      "Persuasion dan Intimidation +5. Kamu cocok jadi juru bicara ke Bildrath.",
      "Insight +3 untuk membaca apakah seseorang berbohong."
    ],
    tonight: [
      "Kamu di gereja bersama Cha Garr dan Ireena. Dengarkan permintaan Father Donavich sampai selesai, lalu tanya imbalan dan risikonya.",
      "Sisa sumber dayamu: 3 slot mantra, 3 dari 4 Divine Sense, 15 Lay on Hands, 1 Channel Divinity. Simpan Turn the Faithless untuk Seriach, Sykane, atau Zantras kalau mereka muncul.",
      "Kamu selalu merasa diawasi. Perankan pelan-pelan, dan beri tahu DM kalau perasaan itu tiba-tiba menguat.",
      "Bicara dengan Ireena soal Vallaki. Persuasion +5, tapi dengarkan dulu kenapa ia tidak ingin pergi.",
      "Doakan makam Kolyan bersama Cha Garr. Divine Sense bisa memeriksa apakah tanah makamnya suci."
    ],
    careful: [
      "Concentration Save cuma +1. Bless mudah buyar saat kamu terkena serangan.",
      "Initiative -1, jadi kamu sering bergerak belakangan.",
      "Tidak punya darkvision. Bawa obor."
    ]
  },

  bromli: {
    asOf: 6,
    stats: "AC 12 · HP 26 · Init +0 · Speed 25 · Str +3",
    turn: [
      "Bonus action: Rage. Kerusakan +2, tahan separuh kerusakan senjata, keuntungan pada cek dan save Strength.",
      "Saat Rage, pilih bentuk Beast: Bite, Claws, atau Tail (lihat di bawah). Kalau tidak, pakai greataxe.",
      "Reckless Attack kalau musuh sudah lemah. Kamu dapat advantage, tapi musuh juga dapat advantage menyerangmu.",
      "Lempar handaxe atau javelin ke musuh yang jauh (+5, 1d6+3)."
    ],
    abilities: [
      ["Greataxe", "+5 untuk kena, 1d12+3 slashing, +2 saat Rage."],
      ["Rage (3 kali per istirahat panjang)", "Bonus action, 1 menit. Berhenti kalau satu giliran kamu tidak menyerang dan tidak terkena serangan."],
      ["Form of the Beast: Bite", "1d8. Kalau HP kamu di bawah setengah, sekali per giliran kamu sembuh 2 HP saat gigitan kena. Cocok untuk bertahan."],
      ["Form of the Beast: Claws", "1d6 per cakar, dan dapat satu serangan cakar tambahan. Cocok untuk banyak musuh kecil."],
      ["Form of the Beast: Tail", "1d8, jangkauan 10 ft. Saat diserang, reaction untuk menambah 1d8 ke AC."],
      ["Danger Sense", "Advantage pada save Dexterity terhadap jebakan dan mantra yang bisa kamu lihat."],
      ["Dwarf", "Darkvision, advantage melawan racun, dan tahan kerusakan racun."]
    ],
    outside: [
      "Perception dan Insight +2. Kamu bisa melihat dalam gelap, jadi kamu penjaga malam yang bagus.",
      "Athletics +3 untuk mendobrak pintu, mengangkat, atau bergulat.",
      "Julukanmu 'Never Knock'. DM jelas sedang menunggu kamu di depan pintu itu."
    ],
    tonight: [
      "Malam panjang sudah lewat, dan semalam dihitung istirahat panjang. Rage kembali penuh: 3 kali.",
      "Ceritakan ke yang lain semua yang terjadi saat giliran jagamu, supaya semua tahu.",
      "Di perjalanan ke Vallaki kamu di barisan depan. Darkvision-mu penting saat bermalam di jalan.",
      "Bawa daging atau ransum ekstra untuk gagak. Kamu punya 10 ransum."
    ],
    careful: [
      "AC cuma 12. Reckless Attack membuatmu sangat mudah dipukul.",
      "Constitution +0, jadi HP-mu tidak setebal barbarian biasa.",
      "Saat Rage kamu tidak bisa merapal mantra atau menjaga concentration."
    ]
  },

  "dan-garr": {
    asOf: 6,
    stats: "AC 13 · HP 21 · Init +3 · Speed 40 · Ki 3",
    turn: [
      "Action: Attack dengan pukulan (+5, 1d4+3). Lalu bonus action untuk satu pukulan lagi, gratis.",
      "Atau bayar 1 ki untuk Flurry of Blows: dua pukulan sebagai bonus action.",
      "Setiap pukulan Flurry yang kena bisa menjatuhkan, mendorong 15 ft, atau mencegah musuh memakai reaction.",
      "Kalau terkepung: 1 ki untuk Patient Defense (Dodge) atau Step of the Wind (Disengage atau Dash)."
    ],
    abilities: [
      ["Pukulan (Martial Arts)", "+5 untuk kena, 1d4+3 bludgeoning. Pukulan tambahan sebagai bonus action setiap kali kamu Attack."],
      ["Ki (3 poin per istirahat pendek)", "Flurry of Blows, Patient Defense, atau Step of the Wind. Kembali penuh setelah istirahat pendek."],
      ["Open Hand Technique", "Saat Flurry kena: musuh jatuh (save Dex), terdorong 15 ft (save Str), atau tidak bisa reaction. DC-nya rendah (9) karena Wisdom -1, jadi jangan terlalu mengandalkan efek jatuh."],
      ["Deflect Missiles", "Reaction saat kena senjata jarak jauh: kurangi kerusakan 1d10+6. Kalau jadi 0, tangkap dan lempar balik (1 ki). Pas untuk pemanah tanpa daging itu."],
      ["Kecepatan 40 ft", "Paling cepat di party. Kamu yang mengejar, mengintai, atau lari minta tolong."],
      ["Half-Elf", "Darkvision. Advantage melawan charm, dan tidak bisa ditidurkan dengan sihir."],
      ["Light crossbow", "+5, 1d8+3 untuk jarak jauh."]
    ],
    outside: [
      "Intimidation +5. Kamu cocok untuk menekan orang seperti Bildrath.",
      "Acrobatics +5 untuk memanjat, melompat, dan menjaga keseimbangan.",
      "Kamu yang mendengar sesuatu menabrak jendela di sesi 4. Ceritakan ke yang lain."
    ],
    tonight: [
      "Kamu yang tahu tentang Seriach, Sykane, dan Zantras. Ceritakan mana yang menginginkan jiwa, mana yang menginginkan kepala, dan siapa sang kingmaker.",
      "Beli bolt di toko Bildrath sebelum berangkat. Light crossbow-mu belum punya bolt.",
      "Di jalan ke Vallaki kamu yang mengintai di depan, bersama gagak. Kecepatanmu 40 ft.",
      "Jangan berjaga malam sendirian. Passive Perception-mu cuma 9."
    ],
    careful: [
      "Passive Perception cuma 9. Jangan jaga malam sendirian.",
      "AC 13 dan HP 21. Jangan jadi garis depan terlalu lama.",
      "Ki cuma 3. Simpan satu untuk kabur atau Deflect Missiles.",
      "Light crossbow-mu tidak punya bolt di inventory. Beli di toko Bildrath, atau pakai dart dulu."
    ]
  },

  jayn: {
    asOf: 6,
    stats: "AC 16 · HP 24 · Init +5 · Speed 25 · Sneak Attack 2d6",
    turn: [
      "Cari advantage atau pastikan ada teman di sebelah musuh, lalu tusuk atau lempar belati (+7, 1d4+5) untuk Sneak Attack +2d6.",
      "Kalau belum bergerak: Steady Aim (bonus action) untuk advantage.",
      "Setelah menyerang: Cunning Action untuk Hide, Disengage, atau Dash.",
      "Fast Hands: lempar air suci ke mayat hidup sebagai bonus action. Banyak DM mengizinkan ini, tapi tanyakan dulu."
    ],
    abilities: [
      ["Sneak Attack", "Sekali per giliran, +2d6 kalau kamu punya advantage, atau ada teman dalam 5 ft dari target."],
      ["Cunning Action", "Bonus action: Dash, Disengage, atau Hide."],
      ["Fast Hands", "Bonus action: Sleight of Hand, buka kunci atau jinakkan jebakan, atau Use an Object (air suci, obor, minyak)."],
      ["Steady Aim", "Bonus action, advantage pada serangan berikutnya kalau kamu tidak bergerak giliran ini."],
      ["Second-Story Work", "Memanjat tanpa biaya gerak tambahan, dan melompat lebih jauh."],
      ["Halfling", "Lucky: angka 1 di d20 boleh diulang. Brave: advantage melawan rasa takut. Bisa bersembunyi di balik makhluk yang lebih besar."],
      ["Charlatan: False Identity", "Kamu bisa memalsukan dokumen. Ingat surat jalan dari meja Kolyan."]
    ],
    outside: [
      "Sleight of Hand +7. Kamu yang membuka kunci dan memeriksa jebakan.",
      "Deception +3. Kamu bisa menggertak atau mengalihkan perhatian.",
      "Kamu membawa thieves' tools dan disguise kit. Pakai Fast Hands untuk membuka kunci sebagai bonus action."
    ],
    tonight: [
      "HP-mu sudah penuh lagi (24) setelah istirahat panjang.",
      "Sebelum berangkat, beli bedroll, waterskin, dan ransum. Kamu tidak punya satu pun.",
      "Kamu yang membobol meja Kolyan. Pastikan semua tahu apa saja yang ada di sana, termasuk siapa yang menyimpan surat jalan.",
      "Cek berapa air suci yang masih kamu bawa dari gereja."
    ],
    careful: [
      "HP-mu paling sedikit di party. Tetap di jarak jauh dan jangan jadi sasaran pertama, seperti waktu melawan serigala.",
      "Tidak punya darkvision. Butuh cahaya.",
      "Strength -1. Jangan bergulat atau mendorong."
    ]
  },

  "cha-garr": {
    asOf: 6,
    stats: "AC 18 · HP 24 · Init +0 · Speed 20 · DC mantra 14",
    turn: [
      "Ronde pertama: Spiritual Weapon (bonus action, tanpa concentration), lalu Sacred Flame (action).",
      "Ronde berikutnya: gerakkan Spiritual Weapon untuk menyerang lagi (bonus action), lalu Sacred Flame.",
      "Ada teman tumbang: Healing Word dari jarak 60 ft (bonus action).",
      "Banyak mayat hidup: Turn Undead. Banyak serigala atau hewan: Charm Animals and Plants."
    ],
    abilities: [
      ["Sacred Flame", "Cantrip, 60 ft, save Dex DC 14, 1d8 radiant. Tidak bisa dihalangi perlindungan."],
      ["Spiritual Weapon", "Level 2, bonus action, tanpa concentration. Senjata melayang yang menyerang setiap giliran selama 1 menit (+6, 1d8+4)."],
      ["Healing Word", "Level 1, bonus action, 60 ft. Cara terbaik membangunkan teman yang tumbang."],
      ["Spike Growth", "Level 2, concentration. Area duri radius 20 ft, 2d4 kerusakan per 5 ft yang dilewati. Bagus untuk menutup jalan ke Ireena."],
      ["Barkskin", "Level 2, concentration. AC target minimal 16. Lebih berguna untuk Bromli atau Dan Garr daripada untukmu."],
      ["Channel Divinity (1 kali per istirahat pendek)", "Turn Undead: mayat hidup dalam 30 ft harus save Wis atau lari. Charm Animals and Plants: hewan dan tumbuhan dalam 30 ft menjadi charmed."],
      ["Slot mantra", "4 slot level 1, 2 slot level 2. Guidance (cantrip) untuk menambah 1d4 ke cek kemampuan teman."]
    ],
    outside: [
      "Speak with Animals (ritual) untuk bicara dengan gagak berbulu biru. Animal Friendship untuk menenangkan hewan.",
      "Medicine +6 dan Insight +4. Passive Perception 14, yang terbaik di party.",
      "Kamu bisa bahasa Infernal. Simpan informasi ini."
    ],
    tonight: [
      "Kamu di gereja bersama Duff dan Ireena. Dengarkan permintaan Father Donavich, dan tanyakan apa yang membuatnya tidak bisa tidur.",
      "Sosok besar di cermin muncul di belakangmu. Jangan sendirian di dekat cermin, dan jangan keluar sendirian.",
      "Speak with Animals sebagai ritual (10 menit, tanpa slot) untuk bicara dengan gagak: apa yang ia lihat malam itu?",
      "HP-mu sudah penuh lagi (24) setelah istirahat panjang. Slot mantra juga penuh: 4 level 1, 2 level 2."
    ],
    careful: [
      "Shillelagh hanya bekerja dengan club atau quarterstaff, bukan warhammer.",
      "Speed cuma 20 karena chain mail lebih berat dari kekuatanmu. Kamu lambat.",
      "Spike Growth dan Barkskin sama-sama concentration. Hanya satu yang bisa aktif."
    ]
  }
};
