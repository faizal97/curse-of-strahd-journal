// Inventory, from each player's Roll20 sheet. Update after every session.
// Each item: [name, quantity, optional note]
window.INVENTORY = {
  updated: "22 Okt 2026, setelah sesi 6 (emas dan barang belum berubah sejak sheet Roll20)",
  asOf: 6,

  // Quest items and things the whole party should know about
  shared: [
    { item: "Surat jalan dari meja Kolyan", holder: "Pemegang belum dicatat", note: "Berisi nama-nama yang dikenali salah satu dari kita. Mungkin berguna di Vallaki." },
    { item: "Barang lain dari meja Kolyan", holder: "Belum dicatat", note: "Jurnal menyebut ada barang lain yang disembunyikan. Catat apa saja isinya." },
    { item: "Pedang keluarga Indirovich", holder: "Ismark", note: "Pedang yang biasa dipakai Ismark." },
    { item: "Pedang cadangan, hadiah dari Kolyan", holder: "Belum dicatat", note: "Belum diketahui di mana sekarang." },
    { item: "Air suci dari gereja", holder: "Jayn", note: "Jumlahnya belum dicatat. Bisa juga diminta dari Father Donavich." },
    { item: "Makanan untuk gagak", holder: "Siapa saja", note: "Gagak ikut kita selama diberi makan. Duff sudah memberinya makan pagi ini. Bawa daging atau ransum ekstra." }
  ],

  people: {
    duff: {
      gp: 110,
      items: [
        ["Longsword", 1], ["Shield", 1, "+2 AC"], ["Chain Mail", 1, "Disadvantage untuk Stealth"],
        ["Javelin", 5, "Senjata lempar, 30/120 ft"], ["Emblem (holy symbol)", 1, "Fokus mantra"],
        ["Torch", 10], ["Rations", 10], ["Hempen rope (50 ft)", 1], ["Tinderbox", 1],
        ["Bedroll", 1], ["Mess kit", 1], ["Waterskin", 1], ["Backpack", 1], ["Pouch", 1],
        ["Playing card set", 1], ["Insignia of rank", 1], ["Trophy dari musuh yang gugur", 1], ["Common clothes", 1]
      ]
    },
    bromli: {
      gp: 130,
      items: [
        ["Greataxe", 1], ["Handaxe", 2, "Bisa dilempar"], ["Javelin", 4, "Bisa dilempar"],
        ["Torch", 10], ["Rations", 10], ["Waterskin", 3], ["Hempen rope (50 ft)", 1],
        ["Tinderbox", 1], ["Bedroll", 1], ["Mess kit", 1], ["Backpack", 1]
      ]
    },
    "dan-garr": {
      gp: 100,
      items: [
        ["Light crossbow", 1, "Tidak ada bolt di inventory"], ["Dart", 11, "Senjata lempar"], ["Mace", 1],
        ["Torch", 10], ["Rations", 10], ["Hempen rope (50 ft)", 1], ["Tinderbox", 1],
        ["Bedroll", 1], ["Mess kit", 1], ["Waterskin", 1], ["Backpack", 1], ["Pouch", 1],
        ["Playing card set", 1], ["Insignia of rank", 1], ["Trophy dari musuh yang gugur", 1], ["Common clothes", 1]
      ]
    },
    jayn: {
      gp: 60,
      items: [
        ["Dagger", 2, "Bisa dilempar"], ["Leather armor", 1], ["Thieves' tools", 2, "Tercatat dua kali di sheet"],
        ["Disguise kit", 1], ["Deck of marked cards", 1], ["Fine clothes", 1], ["Pouch", 1]
      ]
    },
    "cha-garr": {
      gp: 10,
      items: [
        ["Warhammer", 1], ["Shield", 1, "+2 AC"], ["Chain Mail", 1, "Speed turun jadi 20"],
        ["Light crossbow", 1], ["Crossbow bolts", 20], ["Amulet (holy symbol)", 1, "Fokus mantra"],
        ["Candle", 10], ["Rations", 2], ["Herbalism kit", 1], ["Scroll case penuh catatan", 1],
        ["Blanket", 1], ["Winter blanket", 1], ["Waterskin", 1], ["Tinderbox", 1], ["Backpack", 1], ["Common clothes", 1]
      ]
    }
  }
};
