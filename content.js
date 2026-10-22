// Everything the page shows lives here. Add a session, NPC or thread by editing this file.
window.CAMPAIGN = {
  title: "Curse of Strahd",
  table: "Meja kita di Roll20",
  nextSession: "2026-10-22T21:00:00+07:00",

  leftOff: {
    session: 5,
    text: "Giliran jaga ketiga. Bromli duduk sendirian di dekat pintu rumah Burgomaster sementara yang lain tidur. Ireena turun dari tangga dan bicara padanya. Lalu Ismark juga. Keduanya meminta hal yang sama.",
    quote: "Buka pintunya."
  },

  quest: {
    name: "Bawa Ireena ke tempat yang lebih aman",
    from: "Permintaan terakhir Kolyan Indirovich, disampaikan oleh Ismark"
  },

  threads: [
    "Apa isi surat jalan dari meja Kolyan, dan nama siapa yang dikenali salah satu dari kita?",
    "Siapa anak di balik jendela, dan kenapa ia hanya memanggil Ca Gar untuk mencari papanya?",
    "Apa yang berjalan melewati lilin-lilin di lorong atas?",
    "Apakah yang di depan pintu itu benar-benar Ireena dan Ismark?",
    "Kenapa mayat hidup itu hanya mengincar Kolyan, lalu kembali ke hutan?",
    "Ke mana warga membawa jasad Kolyan, dan di mana pedang keluarga Indirovich?",
    "Kenapa serigala-serigala itu tidak gentar pada api?",
    "Kenapa para wanita Vistani membenci Ismark?",
    "Siapa penulis jurnal ini, dan kenapa ia terus mengawasi kita?"
  ],

  party: [
    { name: "Ca Gar", note: "Membobol kunci meja Kolyan. Anak di balik jendela hanya bicara padanya." },
    { name: "Jayn", note: "Berlari sendirian ke gereja mencari air suci saat desa jatuh." },
    { name: "Bromli", note: "Berjaga sendirian di giliran ketiga. Dialah yang mendengar permintaan di depan pintu." },
    { name: "Duff Tareezy", note: "Paladin Sumpah Para Leluhur dari Evergreen Dawn. Bergabung di malam panjang itu." }
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
      n: 4, date: "", title: "Sesi yang sunyi", lang: "id", quiet: true,
      text: "Tak ada yang dianggap layak ditulis oleh jurnal."
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
    }
  ],

  npcs: [
    { name: "Kolyan Indirovich", role: "Burgomaster desa Barovia", status: "dead", fate: "Gugur mempertahankan desa, sesi 2", img: "img/kolyan.png",
      text: "Ayah Ismark dan Ireena. Ahli pedang dan panah yang setia pada Dewa Morninglord. Ia menyelamatkan kita dari kepungan serigala, lalu gugur mempertahankan desa. Pedang keluarganya belum terlihat lagi sejak itu. Ia meminta agar Ireena dibawa ke tempat yang lebih aman." },
    { name: "Ireena Kolyana", role: "Putri Kolyan", img: "img/ireena.webp",
      text: "Adik Ismark. Ia menyaksikan ayahnya mati dan tetap berdiri tegak. Berani menghadapi rasa takutnya sendiri demi orang-orang yang ia sayangi. Dialah yang kita sumpah untuk lindungi." },
    { name: "Ismark Kolyanovich", role: "Putra Kolyan, kini kepala keluarga", img: "img/ismark.webp",
      text: "Melucu untuk menutupi rasa takutnya dan membiarkan hinaan berlalu. Bukan petarung terbaik, tapi rela melakukan apa saja demi Ireena. Kita menemukannya menenggelamkan duka di Blood of the Vine." },
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
