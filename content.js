// Everything the page shows lives here. Add a session, NPC or thread by editing this file.
window.CAMPAIGN = {
  title: "Curse of Strahd",
  table: "Meja kita di Roll20",
  // ISO date-time of the next game, or null when it isn't set yet.
  nextSession: "2026-10-29T21:00:00+07:00",

  // Which session each part was last checked against. Run `node check.mjs` after every update:
  // anything older than the latest session in `sessions` is reported as outdated.
  lastUpdate: { session: 6, date: "22 Okt 2026" },
  reviewed: { leftOff: 6, nextSteps: 6, teamwork: 6, reminders: 6, threads: 6, quest: 6, party: 6, npcs: 6 },

  leftOff: {
    session: 6,
    text: "Pagi di Barovia. Kolyan sudah dimakamkan di gereja di atas bukit, tanpa satu mantra pun. Father Donavich, yang mengaku sudah dua minggu tidak tidur, hendak meminta sesuatu dari kita. Duff, Cha Garr, dan Ireena masih berdiri di gereja.",
    quote: "Apa yang diminta Donavich?"
  },

  quest: {
    name: "Antar Ireena ke Vallaki dan temui Danica",
    from: "Permintaan terakhir Kolyan agar Ireena dibawa ke tempat yang lebih aman. Ismark menyuruh kita menemui Danica di Vallaki, sekitar 14 jam jalan kaki."
  },

  // What the table could do next, grouped by when. Only uses what we've seen at the table.
  nextSteps: [
    {
      when: "Di awal sesi berikutnya, di gereja",
      steps: [
        "Dengarkan permintaan Father Donavich sampai selesai sebelum menjawab. Tanya apa imbalannya, dan apa risikonya.",
        "Tanya kenapa ia tidak bisa tidur selama dua minggu. Pakai Insight untuk melihat apakah ia menyembunyikan sesuatu.",
        "Doakan makam Kolyan, karena ia dimakamkan tanpa mantra. Duff dan Cha Garr bisa melakukannya.",
        "Tanya Donavich tentang Seriach, Sykane, dan Zantras, tentang Danica, dan minta air suci untuk perjalanan.",
        "Duff tetap di sebelah Ireena selama di gereja."
      ]
    },
    {
      when: "Sebelum berangkat ke Vallaki",
      steps: [
        "Bicara dengan Ireena. Ia sebenarnya tidak ingin pergi. Tanyakan alasannya dan jawab alasan itu, jangan memaksanya.",
        "Putuskan apakah Ismark ikut atau tetap memimpin desa.",
        "Temui Mary: nama anaknya, ciri-cirinya, dan sejak kapan hilang, supaya gagak tahu apa yang dicari.",
        "Baca surat jalan dari meja Kolyan bersama-sama, dan catat siapa yang menyimpannya.",
        "Tanya Dan Garr: dari ketiga nama itu, siapa yang menginginkan jiwa, siapa yang menginginkan kepala, dan siapa sang kingmaker?",
        "Belanja di toko Bildrath: ransum (juga untuk Ireena dan gagak), bedroll dan waterskin untuk Jayn, bolt untuk Dan Garr, air suci, minyak lampu. Tanyakan kuda atau gerobak."
      ]
    },
    {
      when: "Di jalan ke Vallaki",
      steps: [
        "Berangkat sepagi mungkin. 14 jam jalan kaki berarti setidaknya satu malam di jalan.",
        "Biarkan gagak terbang di depan untuk mengintai, dan beri makan setiap hari.",
        "Berkemah sebelum gelap. Api unggun, obor, dan jaga malam berdua-dua. Dan Garr jangan berjaga sendirian.",
        "Formasi: Bromli di depan, Duff di sebelah Ireena, Jayn dan Cha Garr di tengah, Dan Garr mengintai."
      ]
    }
  ],

  // Who to lean on for what, from everyone's character sheet.
  teamwork: [
    { need: "Melawan mayat hidup", who: "Cha Garr memakai Turn Undead dan Sacred Flame. Duff memakai Divine Smite, 3d8 radiant melawan mayat hidup." },
    { need: "Melawan iblis (fiend)", who: "Duff memakai Turn the Faithless untuk mengusir fey dan iblis dalam 30 ft dan membuka wujud aslinya. Divine Smite juga 3d8 melawan iblis." },
    { need: "Merasakan yang tak terlihat", who: "Duff memakai Divine Sense: mayat hidup, iblis, celestial, dan tempat yang suci atau dinodai dalam 60 ft." },
    { need: "Ada yang tumbang", who: "Cha Garr memakai Healing Word dari jarak 60 ft sebagai bonus action. Duff memakai Lay on Hands, 15 HP per istirahat panjang." },
    { need: "Menjaga Ireena", who: "Duff berdiri di sebelahnya (AC 18, Sentinel). Cha Garr bisa menutup jalan dengan Spike Growth." },
    { need: "Diserang panah dari jauh", who: "Dan Garr bisa menangkis panah dengan Deflect Missiles dan paling cepat mengejar pemanah." },
    { need: "Pintu terkunci atau jebakan", who: "Jayn. Thieves' tools dan Sleight of Hand +7." },
    { need: "Bicara dengan gagak", who: "Cha Garr merapal Speak with Animals sebagai ritual, 10 menit, tanpa memakai slot mantra. Duff juga bisa, tapi memakai slot." },
    { need: "Bertarung dalam gelap", who: "Bromli, Cha Garr, dan Dan Garr punya darkvision. Jayn dan Duff butuh obor." },
    { need: "Belanja di toko Bildrath", who: "Gabungan emas kita sekitar 410 gp menurut sheet: Bromli 130, Duff 110, Dan Garr 100, Jayn 60, Cha Garr 10." }
  ],

  // Things the table tends to forget.
  reminders: [
    "Seriach (hellhound), Sykane (di balik cermin), dan Zantras ada di sekitar ruangan jasad Kolyan. Satu menginginkan jiwa, satu menginginkan kepala, satu adalah kingmaker. Mereka dari domain yang sama tapi saling bermusuhan. Jangan terima tawaran apa pun dari mereka.",
    "Sejak pagi ini, Duff selalu merasa ada yang mengawasinya.",
    "Kolyan dimakamkan tanpa mantra atau berkat apa pun.",
    "Father Donavich sangat kelelahan dan belum tidur dua minggu.",
    "Gagak sekarang ikut kita selama diberi makan. Bawa daging atau ransum ekstra.",
    "Yang menabrak jendela di sesi 4 bukan burung. Gagak melihat sesuatu malam itu.",
    "Vallaki 14 jam jalan kaki. Kita pasti bermalam di jalan.",
    "Ireena sebenarnya tidak ingin meninggalkan desa.",
    "Serigala di sini tidak gentar pada api. Jangan mengandalkan obor untuk mengusir mereka.",
    "Pemanah tanpa daging di jarinya masih berkeliaran di sekitar hutan.",
    "Gerbang hanya terbuka bagi yang sudah diklaim kabut. Jalan pulang mungkin tidak ada.",
    "Semalam dihitung istirahat panjang. Semua HP dan slot mantra kembali penuh, tapi Duff sudah memakai 1 dari 4 Divine Sense pagi ini."
  ],

  threads: [
    "Apa yang ingin diminta Father Donavich setelah pemakaman?",
    "Kenapa Donavich tidak bisa tidur selama dua minggu?",
    "Siapa Seriach, Sykane, dan Zantras? Mana yang menginginkan jiwa, mana yang menginginkan kepala, dan siapa sang kingmaker?",
    "Siapa yang terus mengawasi Duff, dan apakah ia sama dengan penulis jurnal ini?",
    "Siapa Danica di Vallaki? Apakah ia salah satu dari dua pendeta kuat yang disebut?",
    "Di mana anak Mary?",
    "Apa yang dilihat gagak malam itu, dan apa yang sebenarnya menabrak jendela di sesi 4?",
    "Apa isi surat jalan dari meja Kolyan, siapa yang menyimpannya, dan nama siapa yang dikenali salah satu dari kita?",
    "Siapa anak di balik jendela, dan kenapa ia hanya memanggil Cha Garr untuk mencari papanya?",
    "Apakah yang meminta Bromli membuka pintu semalam benar-benar Ireena dan Ismark?",
    "Di mana pedang cadangan hadiah dari Kolyan?",
    "Kenapa Ireena sebenarnya tidak ingin pergi?",
    "Kenapa mayat hidup itu hanya mengincar Kolyan?",
    "Kenapa serigala-serigala itu tidak gentar pada api?",
    "Kenapa para wanita Vistani membenci Ismark?"
  ],

  party: [
    { id: "bromli", short: "Bromli", name: "Bromli \"Never Knock\" Beerhammer", img: "img/bromli.webp", cls: "Dwarf Gunung · Barbarian 3 (Path of the Beast)",
      note: "Si pemabuk yang datang lewat gerbang. Dari keluarga penambang Gold and Hammer Company. Berjaga sendirian di giliran ketiga, mencegah Ireena membuka pintu depan pagi itu.",
      role: "Pemukul utama. Rage dan greataxe. Bisa melihat dalam gelap." },
    { id: "cha-garr", short: "Cha Garr", name: "Cha Garr", img: "img/cha-garr.webp", cls: "Half-Elf · Cleric 3 (Nature Domain)",
      note: "Si ulama yang merasakan sihir tua di batu-batu Barovia. Anak di balik jendela hanya bicara padanya. Melihat sosok besar di belakangnya lewat cermin di ruangan jasad Kolyan.",
      role: "Penyembuh dan pengusir mayat hidup. Turn Undead, Healing Word, Spike Growth, bisa bicara dengan hewan." },
    { id: "dan-garr", short: "Dan Garr", name: "Dan Garr", img: "img/dan-garr.webp", cls: "Half-Elf · Monk 3 (Way of the Open Hand)",
      note: "Si biarawan yang seolah sudah berdamai dengan kematian. Mendengar sesuatu menabrak jendela di sesi 4. Tahu sedikit tentang Seriach, Sykane, dan Zantras.",
      role: "Paling cepat (40 ft). Deflect Missiles untuk menangkis panah. Bisa melihat dalam gelap." },
    { id: "jayn", short: "Jayn", name: "Jayn Azza", img: "img/jayn.webp", cls: "Halfling · Rogue 3 (Thief)",
      note: "Si pencuri yang tak percaya siapa pun. Berlari sendirian ke gereja mencari air suci. Membobol kunci meja Kolyan.",
      role: "Kunci, jebakan, menyelinap. Sneak Attack. Butuh cahaya, tidak punya darkvision." },
    { id: "duff", short: "Duff", name: "Duff Tareezy", img: "img/duff.webp", cls: "Human · Paladin 3 (Oath of the Ancients)",
      note: "Paladin Evergreen Dawn. Bergabung di malam panjang itu. Divine Sense-nya menemukan tiga nama di ruangan jasad Kolyan, dan sejak itu ia selalu merasa diawasi.",
      role: "Pelindung Ireena. AC 18, Sentinel, Divine Smite, Lay on Hands, Turn the Faithless." }
  ],

  sessions: [
    {
      n: 1, date: "17 Sep 2026", title: "Ke Dalam Kabut", lang: "id",
      text: `Mereka datang melewati gerbang saat senja, empat orang, seperti biasanya mereka datang, tanpa tahu apa-apa.

Tembok itu telah berdiri sejak sebelum aku bisa menghitung tahun, dan di tengahnya ada gerbang yang hanya terbuka bagi mereka yang sudah diklaim oleh kabut. Dua patung mengapitnya, kini tanpa kepala, wajah mereka sudah lama diambil oleh tangan-tangan yang tak ingin kusebut namanya. Gerbang itu berderit terbuka dengan sendirinya saat para pengembara mendekat, seperti biasanya. Ia tidak menunggu diminta.

Seorang pemabuk yang mengayunkan senjata seolah masih berutang pada kedai yang ia tinggalkan. Seorang biarawan yang bergerak seolah sudah berdamai dengan kematian. Seorang pencuri yang tak memercayai apa pun, mengikuti perintah bosnya. Dan seorang ulama, satu-satunya di antara mereka yang merasakannya, sihir tua yang tertanam di setiap batu tempat ini, meski ia tak bisa menjelaskan apa yang diinginkan sihir itu darinya.

Mereka menyusuri Jalan Tua Svalich tanpa tahu hutan di sekitar mereka sengaja menjadi sunyi. Tak ada burung. Tak ada serangga. Tak ada yang hidup di sini yang bersuara kecuali ia ingin ditemukan, dan serigala-serigala itu belum ingin ditemukan. Mereka mencium bau darah di angin dan tetap berjalan. Aku pasti sudah berhenti.

Di tepi hutan, serigala-serigala itu berhenti berpura-pura. Seekor alfa dan kawanannya menutup lingkaran sebelum rombongan itu selesai berbalik. Pertarungan berlangsung lebih lama dari seharusnya. Si pencuri tumbang lebih dulu, seperti yang kecil-kecil selalu begitu, dan sesaat kukira kabut akan mendapat empat nama baru sebelum pagi.

Lalu sebatang anak panah datang dari kegelapan, dan yang mereka sebut Kolyan melangkah keluar dari pepohonan seolah hutan itu sendiri memutuskan belum selesai dengan mereka. Api menyusul para pemanahnya, dan serigala-serigala itu tampak tak terganggu.

Para pengembara hidup untuk melihat desa. Entah itu belas kasihan, atau sekadar jalan yang lebih panjang menuju akhir yang sama.

Aku akan terus mengawasi.`,
      original: `They came through the gate at dusk, four of them, the way they always come, unknowing.

The wall has stood since before I could count the years, and at its center the gate that only opens for those the mists have already claimed. Two statues flank it, headless now, their faces long since taken by hands I do not care to name. The gate groaned open on its own as the travelers approached, as it always does. It does not wait to be asked.

A drunkard swinging like he still owed something to the tavern he left behind. A monk who moved like he'd already made peace with dying. A thief who trusted nothing, follows the order of her boss. And a cleric, the only one among them who felt it, the old magic pressed into every stone of this place, though he could not have said what it wanted from him.

They walked the Old Svalich Road not knowing the forest had gone quiet around them on purpose. No birds. No insects. Nothing that lives here makes a sound unless it wants to be found, and the wolves did not want to be found, not yet. They smelled the blood on the wind and kept walking anyway. I would have stopped walking.

At the tree line the wolves stopped pretending. An alpha and its pack closed the circle before the party had finished turning around. The fight went longer than it should have. The thief went down first, the way the small ones always seem to, and for a moment I thought the mist would have four more names by morning.

Then the arrow came from the dark, and the one they call Kolyan stepped out of the trees like the forest itself had decided it wasn't finished with them yet. Fire followed his archers, and the wolves seems unbothered.

The travelers live to see the village. Whether that is mercy, or simply a longer road to the same end

I will keep watching.`
    },
    {
      n: 2, date: "27 Sep 2026", title: "Hujan Panah", lang: "id",
      text: `Mereka keluar dari hutan masih bernapas, sesuatu yang tak kuduga.

Serigala-serigala itu mengepung mereka di tepi hutan, jumlahnya jauh lebih banyak dari yang seharusnya dihadapi empat pengembara sendirian, dan sempat kupikir aku akan menambah nama baru ke daftar kabut malam itu juga. Lalu seorang pria menunggang keluar dari kegelapan di tanahnya sendiri seolah memiliki setiap akar dan batu di sana, Kolyan Indirovich, memanggil orang-orang yang tak kusangka masih ia miliki, dan rombongan itu berlari menuju desa dengan pasukannya melindungi punggung mereka. Sesuatu dengan busur dan tak bersisa daging di jarinya menembakkan anak panah ke arah mereka yang kabur menuju desa. Anak buah Kolyan menahan sebagian besar panah itu supaya para pengembara tak perlu menahannya sendiri.

Desa itu sudah kalah saat mereka tiba, dan aku menyaksikan keempatnya memilih tinggal dan ikut kalah bersama desa itu daripada terus berlari. Yang mereka panggil Jane berlari sendiri menuju gereja mencari air suci, sementara yang lain bertahan di garis pertahanan yang tersisa. Semua itu menghabiskan anak buah Kolyan. Dan menghabiskan Kolyan sendiri. Aku menyaksikan mayat hidup mengatupkan gigi mereka padanya, dan aku menyaksikan anak-anaknya menyaksikan itu terjadi, seorang putra dan seorang putri berdiri cukup dekat untuk melihat ayah mereka berhenti menjadi ayah mereka. Begitu tubuhnya diam, makhluk-makhluk yang membunuhnya berbalik dan berjalan kembali ke hutan, seolah mereka memang hanya menginginkan dirinya.

Tak ada lagi tanah di Barovia yang cukup lunak untuk mengubur yang hilang malam itu, jadi mereka membakarnya, satu api demi satu api untuk orang-orang yang dulu punya nama. Kolyan tidak mereka bakar. Mereka membawanya ke dalam hutan, yang memberitahuku bahwa masih ada yang di desa itu ingat bagaimana adat lama seharusnya dijalankan, bahkan sekarang.`
    },
    {
      n: 3, date: "30 Sep 2026", title: "Kesedihan, Kebahagiaan, Ketamakan", lang: "id",
      text: `Kesedihan desa Barovia menanti mereka yang baru saja berjuang mempertahankan tempat yang bahkan bukan rumah. Kondisi rumah-rumah hancur digerus oleh waktu, makhluk bercakar, dan keangkuhan penduduk akan keyakinannya menjaga satu-satunya harta. Perlahan langkah derap kaki terdengar dari desa yang berasal dari pria tua bernama Bildrath Canthemir dan Sepupunya Parriwimple, mereka bertujuan mengambil sisa-sisa dari yang tergeletak hasil pertarungan yang baru saja terjadi. konfrontasi party membuahkan kesimpulan bahwa bildrath adalah bajingan tak berperasaan yang mementingkan dirinya sendiri

Memilih untuk mencari anak lemah itu, Ismark ternyata melepaskan kesedihannya ditemani beberapa Ale dan Mead di Tavern Blood of the Vine. Saat memasuki tavern party disambut hangat bersama alunan cerita dan aroma manis oleh tiga wanita vistani Alenka, Mirabel, dan Sorvia. Bercerita mengenai kebencian mereka terhadap Ismark dan Bildrath.

Ditengah kisah canda tawa yang diberikan vistani terdapat ismark yang sedang berduka, meminta party untuk mengentaskan permintaan Ayahnya.

Semakin malam, semakin larut, party memutuskan untuk bergegas tidur dirumah Burgomaster, sembari berharap Kolyan tidak bangkit kembali`
    },
    {
      n: 4, date: "", title: "Burung di jendela", lang: "id", fromTable: true,
      text: `Jurnal tidak mencatat sesi ini. Ini yang diingat meja kita.

Kita bertemu seekor gagak. Ia meminta kita memberikan daging keesokan paginya kepada gagak berbulu biru.

Malamnya, Dan Garr mendengar sesuatu menabrak jendela, sepertinya burung. Saat dicek, tidak ada apa-apa. Dan Garr langsung tidur tanpa menyelidikinya.`
    },
    {
      n: 5, date: "17 Okt 2026", title: "Tengah Malam yang Panjang", lang: "id",
      text: `Giliran jaga pertama berlalu dengan tenang. Terlalu tenang.

Di giliran jaga kedua, Ca Gar, Jayn, dan Duft (baru tiba, seorang paladin yang terikat Sumpah Para Leluhur) menyelinap ke ruang kerja Kolyan. Di belakang mereka, Duft melihat sosok kecil di luar jendela, seorang anak di tempat yang mustahil bagi anak mana pun untuk berdiri. Ia melangkah keluar dan menutup pintu. Ca Gar dan Jayn membobol kunci meja Kolyan dan menemukan apa yang disembunyikan burgomaster tua itu, termasuk sepucuk surat jalan berisi nama-nama yang dikenali salah satu dari mereka.

Saat mereka menggeledah rak-rak, anak itu melayang naik di balik kaca. Ia tidak menatap yang lain. Ia menatap Ca Gar dan menanyakan papanya.

Di akhir giliran jaga itu, lilin-lilin di sepanjang lorong atas mulai berkedip satu per satu, seolah ada seseorang yang berjalan melewatinya. Rombongan itu pun tidur.

Bromli mengambil giliran jaga ketiga sendirian. Ireena turun dari tangga dan bicara padanya. Lalu Ismark juga. Keduanya meminta hal yang sama: "Buka pintunya."`,
      original: `The first watch passed quietly. Too quietly.

On the second watch, Ca Gar, Jayn, and Duft (newly arrived, a paladin sworn to the Oath of the Ancients) slipped into Kolyan's study. Behind them, Duft saw a small figure outside the window, a child where no child could stand. He stepped out and shut the door. Ca Gar and Jayn picked the lock on Kolyan's desk and found what the old burgomaster had hidden, including a writ of passage with names on it that someone in the room recognized.

While they searched the shelves, the child floated up outside the glass. It didn't look at the others. It looked at Ca Gar and asked for its papa.

At the end of the watch, the candles along the upstairs hall began to flicker one by one, as if someone were walking past them. The party went to sleep.

Bromli took the third watch alone. Ireena came down the stairs and talked to him. Then Ismark did. Both of them asked for the same thing: "Open the door."`
    },
    {
      n: 6, date: "22 Okt 2026", title: "Pagi Setelah Malam Panjang", lang: "id", fromTable: true,
      text: `Jurnal belum menulis sesi ini. Ini yang diingat meja kita.

Yang menepuk pundak Bromli ternyata Ireena. Ia berterima kasih karena Bromli menemaninya sampai pagi, lalu mencoba membuka pintu depan. Bromli mencegahnya dan menutupnya kembali. Ireena naik ke atas dan membangunkan kita semua. Malam itu dihitung sebagai istirahat panjang.

Ismark biasa memakai pedang keluarga Indirovich. Ada satu pedang lagi, pedang cadangan hadiah dari ayah mereka. Ireena lebih suka pedangnya sendiri, yang ia pakai sejak kecil.

Di ruangan tempat jasad Kolyan dibaringkan, Cha Garr melihat lewat cermin sesosok besar berdiri di belakangnya. Divine Sense Duff menangkap tiga nama: Seriach, seekor hellhound, Sykane di balik cermin, dan Zantras. Menurut Dan Garr, satu dari mereka menginginkan jiwa, satu menginginkan kepala, dan satu adalah kingmaker. Mereka berasal dari domain yang sama tapi saling bermusuhan. Sejak saat itu Duff selalu merasa ada yang mengawasinya.

Kita mendengar ada dua pendeta kuat, satu di Vallaki dan satu di Krezk (ejaan belum pasti). Ismark menyuruh kita menemui seseorang bernama Danica di Vallaki, sekitar 14 jam jalan kaki. Kita memutuskan membawa Ireena ke sana, walau dalam hatinya ia tidak ingin pergi.

Duff memberi makan gagak. Gagak itu melihat sesuatu malam itu, tapi tidak melihat burung apa pun menabrak jendela. Kita menitipkan pencarian anak Mary, warga desa yang menangis semalaman. Gagak itu akan menemani kita selama diberi makan.

Duff, Cha Garr, dan Ireena pergi ke gereja di atas bukit. Father Donavich memakamkan Kolyan tanpa merapal mantra apa pun. Ia tampak sangat kelelahan dan mengaku sudah dua minggu tidak tidur. Setelah pemakaman, ia hendak meminta sesuatu dari kita.`
    }
  ],

  npcs: [
    { name: "Kolyan Indirovich", role: "Burgomaster desa Barovia", status: "dead", fate: "Gugur mempertahankan desa, sesi 2. Dimakamkan di gereja di atas bukit, sesi 6.", img: "img/kolyan.png",
      text: "Ayah Ismark dan Ireena. Ahli pedang dan panah yang setia pada Dewa Morninglord. Ia menyelamatkan kita dari kepungan serigala, lalu gugur mempertahankan desa. Ia meminta agar Ireena dibawa ke tempat yang lebih aman. Ia dimakamkan tanpa mantra atau berkat, dan sesuatu tampaknya tertarik pada jasadnya." },
    { name: "Ireena Kolyana", role: "Putri Kolyan", img: "img/ireena.webp",
      text: "Adik Ismark. Ia menyaksikan ayahnya mati dan tetap berdiri tegak. Lebih suka pedangnya sendiri, yang ia pakai sejak kecil. Akan kita antar ke Vallaki, walau dalam hatinya ia tidak ingin pergi." },
    { name: "Ismark Kolyanovich", role: "Putra Kolyan, kini kepala keluarga", img: "img/ismark.webp",
      text: "Melucu untuk menutupi rasa takutnya. Bukan petarung terbaik, tapi rela melakukan apa saja demi Ireena. Biasa memakai pedang keluarga Indirovich. Menyuruh kita menemui Danica di Vallaki, dan ingin memeriksa keadaan desa." },
    { name: "Father Donavich", role: "Pendeta gereja di atas bukit",
      text: "Memakamkan Kolyan tanpa merapal mantra apa pun. Sangat kelelahan, mengaku sudah dua minggu tidak tidur. Hendak meminta sesuatu dari kita setelah pemakaman. (Ejaan nama belum pasti.)" },
    { name: "Danica", role: "Di Vallaki, belum kita temui",
      text: "Ismark menyuruh kita menemuinya di Vallaki. Belum diketahui siapa dia, dan apakah dia salah satu dari dua pendeta kuat yang disebut." },
    { name: "Mary", role: "Warga desa Barovia",
      text: "Menangis semalaman karena anaknya hilang. Kita menitipkan pencarian anaknya pada gagak." },
    { name: "Gagak", role: "Teman perjalanan kita",
      text: "Meminta daging untuk gagak berbulu biru di sesi 4. Sekarang ikut bersama kita selama diberi makan. Melihat sesuatu malam itu, tapi bukan burung yang menabrak jendela." },
    { name: "Seriach, Sykane, dan Zantras", role: "Tiga kehadiran yang ditangkap Divine Sense",
      text: "Ditemukan di ruangan jasad Kolyan. Seriach adalah hellhound, Sykane berada di balik cermin. Satu menginginkan jiwa, satu menginginkan kepala, satu adalah kingmaker. Berasal dari domain yang sama tapi saling bermusuhan." },
    { name: "Bildrath Cantemir", role: "Pemilik toko", img: "img/bildrath.webp",
      text: "Pemilik toko serba ada di desa, mengisi dagangannya dengan barang dari mayat. Baginya, yang hidup berhak mengambil apa pun yang ditinggalkan orang mati. Licik dalam tawar-menawar dan meraup untung dari kepanikan warga." },
    { name: "Parriwimple", role: "Sepupu Bildrath", img: "img/parriwimple.webp",
      text: "Besar, kuat, dan pendiam. Baru bergerak kalau disuruh, dan menuruti Bildrath nyaris tanpa bertanya, sering tanpa tahu alasannya." },
    { name: "Alenka", role: "Vistani, Blood of the Vine", img: "img/alenka.webp",
      text: "Salah satu dari tiga wanita yang menyambut kita di kedai dengan cerita dan aroma manis. Tidak suka pada Ismark maupun Bildrath." },
    { name: "Mirabel", role: "Vistani, Blood of the Vine", img: "img/mirabel.webp",
      text: "Yang kedua dari tiga wanita itu. Sambutan yang sama hangatnya, dendam yang sama pada Ismark dan Bildrath." },
    { name: "Sorvia", role: "Vistani, Blood of the Vine", img: "img/sorvia.webp",
      text: "Yang ketiga. Kenapa mereka membenci putra Burgomaster masih belum diketahui." }
  ]
};
