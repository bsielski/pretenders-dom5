export function getPretenders() {
    const vanilla_pretenders_data = {
	1025: {
	    F: 1,
	    S: 2,
	    name: "Divine Glyph",
	    pathcost: 40,
	    pointcost: 120,
	    startdom: 4
	},
	1026: {
	    D: 1,
	    N: 1,
	    name: "Carrion Dragon",
	    pathcost: 80,
	    pointcost: 150,
	    shapechange: 1027,
	    startdom: 2
	},
	109: {
	    E: 2,
	    W: 1,
	    name: "Dagon",
	    pathcost: 60,
	    pointcost: 290,
	    realm1: 9,
	    startdom: 3
	},
	1096: {
	    A: 2,
	    D: 1,
	    name: "Destroyer of Worlds",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 8,
	    startdom: 3
	},
	1097: {
	    F: 1,
	    D: 2,
	    name: "Lord of The Summer Plague",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 5,
	    startdom: 3
	},
	1098: {
	    A: 2,
	    E: 1,
	    name: "Asynja",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 1,
	    startdom: 3
	},
	120: {
	    F: 2,
	    B: 1,
	    name: "Moloch",
	    pathcost: 80,
	    pointcost: 280,
	    realm1: 5,
	    startdom: 2
	},
	1229: {
	    N: 1,
	    W: 1,
	    name: "Son of Fenrer",
	    pathcost: 80,
	    pointcost: 150,
	    realm1: 1,
	    startdom: 2
	},
	1230: {
	    F: 1,
	    E: 2,
	    name: "Titan of the Forge",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 3,
	    startdom: 3
	},
	1231: {
	    W: 1,
	    D: 1,
	    N: 1,
	    name: "Drakaina",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 9,
	    startdom: 3
	},
	1232: {
	    S: 1,
	    W: 2,
	    name: "Old Man of the Sea",
	    pathcost: 30,
	    pointcost: 270,
	    realm1: 9,
	    startdom: 3
	},
	1233: {
	    A: 1,
	    N: 1,
	    W: 1,
	    name: "Lord of the Waves",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 9,
	    startdom: 3
	},
	1339: {
	    E: 2,
	    S: 1,
	    name: "Nyorai",
	    pathcost: 60,
	    pointcost: 220,
	    realm1: 4,
	    startdom: 3
	},
	1340: {
	    F: 1,
	    A: 1,
	    E: 1,
	    name: "Tiwaz of War",
	    pathcost: 60,
	    pointcost: 240,
	    startdom: 3
	},
	1341: {
	    B: 2,
	    E: 1,
	    name: "Devi of Darkness",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 8,
	    startdom: 3
	},
	1342: {
	    S: 1,
	    W: 2,
	    name: "Titan of Rivers",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 3,
	    startdom: 3
	},
	1343: {
	    N: 2,
	    W: 1,
	    name: "Titan of Love",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 3,
	    startdom: 3
	},
	1344: {
	    S: 2,
	    W: 1,
	    name: "Devi of Good Fortunes",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 8,
	    startdom: 3
	},
	1345: {
	    A: 1,
	    E: 1,
	    S: 1,
	    name: "Celestial General",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 4,
	    startdom: 3
	},
	1346: {
	    E: 2,
	    N: 1,
	    name: "Colossal Fetish",
	    pathcost: 40,
	    pointcost: 270,
	    startdom: 4
	},
	1348: {
	    D: 1,
	    N: 2,
	    name: "Titan of Serpents and Medicine",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 3,
	    startdom: 3
	},
	1349: {
	    E: 1,
	    D: 1,
	    name: "Devourer of Souls",
	    pathcost: 80,
	    pointcost: 140,
	    startdom: 2
	},
	1370: {
	    N: 1,
	    W: 2,
	    name: "Volla of the Bountiful Forest",
	    pathcost: 60,
	    pointcost: 210,
	    startdom: 3
	},
	1371: {
	    E: 1,
	    D: 1,
	    N: 1,
	    name: "Titan of Death and Rebirth",
	    pathcost: 60,
	    pointcost: 230,
	    realm1: 3,
	    startdom: 3
	},
	1372: {
	    A: 3,
	    name: "Annunaki of the Sky",
	    pathcost: 60,
	    pointcost: 280,
	    realm1: 5,
	    startdom: 3
	},
	1373: {
	    E: 1,
	    W: 2,
	    name: "Annunaki of Sweet Waters",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 5,
	    startdom: 3
	},
	1374: {
	    A: 1,
	    E: 1,
	    S: 1,
	    name: "Annunaki of the Morning Star",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 5,
	    startdom: 3
	},
	1378: {
	    E: 1,
	    N: 2,
	    name: "Lord of the Forest",
	    pathcost: 60,
	    pointcost: 210,
	    realm1: 2,
	    startdom: 3
	},
	1379: {
	    A: 1,
	    E: 1,
	    N: 1,
	    name: "Keeper of the Bridge",
	    pathcost: 60,
	    pointcost: 220,
	    realm1: 1,
	    startdom: 3
	},
	138: {
	    E: 2,
	    N: 1,
	    name: "Gorgon",
	    pathcost: 80,
	    pointcost: 240,
	    realm1: 3,
	    startdom: 2
	},
	1384: {
	    F: 3,
	    name: "Solar Disc",
	    pathcost: 60,
	    pointcost: 230,
	    realm1: 5,
	    startdom: 3
	},
	1402: {
	    S: 2,
	    W: 1,
	    name: "Polypal Queen",
	    pathcost: 20,
	    pointcost: 170,
	    startdom: 4
	},
	1428: {
	    F: 1,
	    D: 1,
	    name: "Bakemono Kunshu",
	    pathcost: 40,
	    pointcost: 150,
	    startdom: 1
	},
	156: {
	    E: 3,
	    name: "Cyclops",
	    pathcost: 60,
	    pointcost: 280,
	    startdom: 3
	},
	1561: {
	    A: 1,
	    W: 2,
	    name: "Father of Winters",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 1,
	    startdom: 3
	},
	157: {
	    D: 1,
	    N: 1,
	    B: 1,
	    name: "Mother of Monsters",
	    pathcost: 60,
	    pointcost: 220,
	    realm1: 3,
	    startdom: 3
	},
	158: {
	    S: 2,
	    W: 1,
	    name: "Oracle",
	    pathcost: 40,
	    pointcost: 150,
	    realm1: 10,
	    startdom: 4
	},
	1581: {
	    E: 1,
	    D: 1,
	    name: "Risen Oracle",
	    pathcost: 60,
	    pointcost: 240,
	    startdom: 2
	},
	159: {
	    E: 2,
	    S: 1,
	    name: "Monument",
	    pathcost: 40,
	    pointcost: 140,
	    realm1: 7,
	    startdom: 4
	},
	1590: {
	    E: 1,
	    W: 1,
	    name: "Ageless Olm",
	    pathcost: 60,
	    pointcost: 130,
	    startdom: 2
	},
	179: {
	    D: 3,
	    name: "Master Lich",
	    pathcost: 40,
	    pointcost: 240,
	    realm1: 10,
	    startdom: 2
	},
	180: {
	    D: 3,
	    name: "Demilich",
	    pathcost: 20,
	    pointcost: 120,
	    realm1: 10,
	    startdom: 3
	},
	1896: {
	    A: 1,
	    N: 1,
	    S: 1,
	    name: "Lawgiver",
	    pathcost: 40,
	    pointcost: 80,
	    shapechange: 1897,
	    startdom: 1
	},
	1898: {
	    A: 1,
	    name: "Fomorian Sorcerer",
	    pathcost: 20,
	    pointcost: 110,
	    startdom: 1
	},
	1899: {
	    W: 1,
	    D: 2,
	    name: "Fomorian God King",
	    pathcost: 60,
	    pointcost: 290,
	    startdom: 3
	},
	1905: {
	    A: 1,
	    D: 1,
	    name: "Great Sorceress",
	    pathcost: 10,
	    pointcost: 110,
	    startdom: 1
	},
	2082: {
	    B: 3,
	    name: "Son of the Fallen",
	    pathcost: 60,
	    pointcost: 260,
	    startdom: 3
	},
	2137: {
	    A: 1,
	    S: 1,
	    name: "Urmahlullu",
	    pathcost: 60,
	    pointcost: 180,
	    realm1: 5,
	    startdom: 2
	},
	2138: {
	    S: 1,
	    D: 1,
	    name: "Sphinx",
	    pathcost: 60,
	    pointcost: 190,
	    realm1: 5,
	    startdom: 2
	},
	215: {
	    F: 1,
	    A: 2,
	    name: "Virtue",
	    pathcost: 80,
	    pointcost: 240,
	    startdom: 2
	},
	216: {
	    W: 2,
	    name: "Dragon",
	    pathcost: 80,
	    pointcost: 240,
	    realm1: 10,
	    shapechange: 226,
	    startdom: 2
	},
	2202: {
	    A: 1,
	    S: 2,
	    name: "Great Siddha",
	    pathcost: 80,
	    pointcost: 160,
	    realm1: 8,
	    startdom: 2
	},
	2203: {
	    F: 1,
	    E: 1,
	    D: 1,
	    name: "Oni Kunshu",
	    pathcost: 60,
	    pointcost: 250,
	    startdom: 3
	},
	2205: {
	    D: 2,
	    name: "Great Sauromancer",
	    pointcost: 90,
	    startdom: 1
	},
	2206: {
	    E: 1,
	    name: "Eldest Dwarf",
	    pathcost: 20,
	    pointcost: 80,
	    realm1: 1,
	    startdom: 1
	},
	2207: {
	    D: 1,
	    name: "Great Sorcerer",
	    pathcost: 10,
	    pointcost: 80,
	    startdom: 1
	},
	2234: {
	    N: 3,
	    name: "Irminsul",
	    pathcost: 60,
	    pointcost: 170,
	    realm1: 1,
	    startdom: 4
	},
	2239: {
	    A: 1,
	    N: 2,
	    name: "Asynja",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 1,
	    startdom: 3
	},
	2315: {
	    B: 3,
	    name: "Melqart",
	    pathcost: 60,
	    pointcost: 230,
	    startdom: 2
	},
	2316: {
	    W: 2,
	    name: "Dragon King",
	    pathcost: 60,
	    pointcost: 200,
	    realm1: 4,
	    shapechange: 2317,
	    startdom: 2
	},
	2318: {
	    A: 1,
	    S: 1,
	    name: "Celestial Dragon",
	    pathcost: 60,
	    pointcost: 200,
	    realm1: 4,
	    shapechange: 2319,
	    startdom: 2
	},
	2426: {
	    F: 1,
	    E: 1,
	    D: 1,
	    name: "Bouda Father",
	    pathcost: 20,
	    pointcost: 110,
	    shapechange: 2427,
	    startdom: 1
	},
	2431: {
	    E: 1,
	    D: 2,
	    name: "Titan of the Underworld",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 3,
	    startdom: 3
	},
	2434: {
	    B: 1,
	    E: 1,
	    N: 1,
	    name: "Teteo Inan",
	    pathcost: 60,
	    pointcost: 270,
	    realm1: 6,
	    startdom: 3
	},
	2435: {
	    A: 1,
	    E: 1,
	    N: 1,
	    name: "Annunaki of Love and War",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 5,
	    startdom: 3
	},
	2436: {
	    A: 1,
	    S: 2,
	    name: "Annunaki of the Moon",
	    pathcost: 60,
	    pointcost: 270,
	    realm1: 5,
	    startdom: 3
	},
	2437: {
	    E: 1,
	    N: 2,
	    name: "Annunaki of Growth and Rebirth",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 5,
	    startdom: 3
	},
	2438: {
	    D: 3,
	    name: "Annunaki of the Underworld",
	    pathcost: 60,
	    pointcost: 270,
	    realm1: 5,
	    startdom: 3
	},
	244: {
	    F: 1,
	    name: "Arch Mage",
	    pointcost: 90,
	    realm1: 10,
	    startdom: 1
	},
	2440: {
	    W: 2,
	    name: "Sea Dragon",
	    pathcost: 80,
	    pointcost: 140,
	    realm1: 9,
	    shapechange: 2441,
	    startdom: 2
	},
	2442: {
	    F: 1,
	    B: 1,
	    N: 1,
	    name: "Teotl of War",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 6,
	    startdom: 3
	},
	2443: {
	    F: 1,
	    A: 1,
	    N: 1,
	    name: "Teotl of the Sky",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 6,
	    startdom: 3
	},
	2444: {
	    S: 1,
	    D: 2,
	    name: "Teotl of the Underworld",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 6,
	    startdom: 3
	},
	2445: {
	    D: 3,
	    name: "Neter of the Underworld",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 7,
	    startdom: 3
	},
	2446: {
	    F: 1,
	    W: 1,
	    S: 1,
	    name: "Neter of Kings",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 7,
	    startdom: 3
	},
	2447: {
	    F: 1,
	    A: 1,
	    N: 1,
	    name: "Idol of Men",
	    pathcost: 40,
	    pointcost: 150,
	    realm1: 1,
	    startdom: 4
	},
	2448: {
	    A: 1,
	    N: 2,
	    name: "Idol of Beasts",
	    pathcost: 40,
	    pointcost: 150,
	    realm1: 1,
	    startdom: 4
	},
	2449: {
	    D: 1,
	    S: 2,
	    name: "Idol of Sorcery",
	    pathcost: 40,
	    pointcost: 160,
	    realm1: 1,
	    startdom: 4
	},
	245: {
	    N: 1,
	    name: "Master Enchanter",
	    pointcost: 100,
	    realm1: 10,
	    startdom: 1
	},
	2450: {
	    N: 3,
	    name: "Horned One",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 2,
	    startdom: 3
	},
	2457: {
	    A: 2,
	    S: 1,
	    name: "Bodhisattva of Mercy",
	    pathcost: 80,
	    pointcost: 250,
	    realm1: 4,
	    startdom: 2
	},
	246: {
	    B: 1,
	    name: "Freak Lord",
	    pointcost: 100,
	    realm1: 10,
	    startdom: 1
	},
	2460: {
	    E: 1,
	    N: 2,
	    name: "Statue of Fertility",
	    pathcost: 40,
	    pointcost: 150,
	    realm1: 3,
	    startdom: 4
	},
	2461: {
	    B: 2,
	    N: 1,
	    name: "Statue of the Bloody Mother",
	    pathcost: 40,
	    pointcost: 160,
	    realm1: 6,
	    startdom: 4
	},
	2462: {
	    B: 1,
	    E: 2,
	    name: "Golden Idol",
	    pathcost: 40,
	    pointcost: 120,
	    realm1: 5,
	    startdom: 4
	},
	2463: {
	    F: 2,
	    E: 1,
	    name: "Statue of War",
	    pathcost: 40,
	    pointcost: 150,
	    realm1: 3,
	    startdom: 4
	},
	2464: {
	    S: 3,
	    name: "Neter of the Moon",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 7,
	    startdom: 3
	},
	2465: {
	    F: 2,
	    E: 1,
	    name: "Statue of War",
	    pathcost: 40,
	    pointcost: 150,
	    realm1: 4,
	    startdom: 4
	},
	2466: {
	    N: 1,
	    S: 1,
	    name: "Kamadhenu",
	    pathcost: 80,
	    pointcost: 240,
	    realm1: 8,
	    startdom: 2
	},
	248: {
	    W: 1,
	    name: "Arch Mage",
	    pointcost: 90,
	    realm1: 9,
	    startdom: 1
	},
	249: {
	    D: 1,
	    name: "Crone",
	    pointcost: 90,
	    realm1: 10,
	    startdom: 1
	},
	250: {
	    A: 1,
	    W: 1,
	    name: "Frost Father",
	    pointcost: 100,
	    realm1: 1,
	    startdom: 1
	},
	2502: {
	    E: 3,
	    W: 1,
	    name: "Earth made Flesh",
	    pathcost: 60,
	    pointcost: 280,
	    startdom: 3
	},
	2503: {
	    E: 3,
	    name: "Golden Pillar",
	    pathcost: 40,
	    pointcost: 150,
	    startdom: 4
	},
	251: {
	    S: 1,
	    name: "Great Sage",
	    pointcost: 100,
	    realm1: 10,
	    startdom: 1
	},
	2549: {
	    S: 1,
	    name: "Maharishi",
	    pointcost: 90,
	    realm1: 8,
	    startdom: 1
	},
	2550: {
	    D: 1,
	    B: 1,
	    N: 1,
	    name: "Raksharani",
	    pathcost: 40,
	    pointcost: 160,
	    shapechange: 2551,
	    startdom: 2
	},
	2552: {
	    S: 3,
	    name: "Ahura of Wisdom",
	    pathcost: 60,
	    pointcost: 290,
	    startdom: 3
	},
	2553: {
	    F: 2,
	    S: 1,
	    name: "Ahura of the Oath",
	    pathcost: 80,
	    pointcost: 260,
	    startdom: 2
	},
	2554: {
	    S: 1,
	    W: 2,
	    name: "Ahura of the Waters",
	    pathcost: 80,
	    pointcost: 260,
	    startdom: 2
	},
	2555: {
	    A: 1,
	    S: 2,
	    name: "Spenta Mainyu",
	    pathcost: 80,
	    pointcost: 260,
	    startdom: 2
	},
	2556: {
	    S: 1,
	    W: 2,
	    name: "Celestial Carp",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 4,
	    startdom: 3
	},
	2578: {
	    A: 1,
	    S: 1,
	    W: 1,
	    name: "Yazad King",
	    pathcost: 40,
	    pointcost: 210,
	    startdom: 2
	},
	2608: {
	    F: 1,
	    D: 1,
	    name: "Azi",
	    pathcost: 80,
	    pointcost: 220,
	    shapechange: 2609,
	    startdom: 2
	},
	2610: {
	    F: 1,
	    D: 1,
	    B: 1,
	    name: "Angra Mainyu",
	    pathcost: 60,
	    pointcost: 280,
	    startdom: 3
	},
	2611: {
	    F: 1,
	    D: 2,
	    name: "Gannag Menog",
	    pathcost: 80,
	    pointcost: 250,
	    startdom: 2
	},
	2627: {
	    F: 2,
	    B: 1,
	    name: "Daeva of Wrath",
	    pathcost: 80,
	    pointcost: 240,
	    startdom: 2
	},
	265: {
	    W: 2,
	    name: "Dragon",
	    pathcost: 80,
	    pointcost: 220,
	    realm1: 10,
	    shapechange: 267,
	    startdom: 2
	},
	266: {
	    N: 2,
	    name: "Dragon",
	    pathcost: 80,
	    pointcost: 220,
	    realm1: 10,
	    shapechange: 268,
	    startdom: 2
	},
	2685: {
	    F: 1,
	    A: 1,
	    W: 1,
	    name: "Viracocha",
	    pathcost: 60,
	    pointcost: 290,
	    startdom: 3
	},
	2686: {
	    F: 3,
	    name: "Apu Inti",
	    pathcost: 60,
	    pointcost: 290,
	    startdom: 3
	},
	269: {
	    E: 1,
	    W: 1,
	    name: "Wyrm",
	    pathcost: 80,
	    pointcost: 299,
	    realm1: 1,
	    startdom: 2
	},
	2693: {
	    A: 2,
	    name: "Heavenly Condor",
	    pathcost: 80,
	    pointcost: 180,
	    startdom: 2
	},
	2695: {
	    F: 1,
	    A: 1,
	    S: 1,
	    name: "Sapa Inca",
	    pathcost: 40,
	    pointcost: 200,
	    startdom: 2
	},
	2696: {
	    A: 1,
	    E: 2,
	    name: "Stone Huaca",
	    pathcost: 40,
	    pointcost: 120,
	    startdom: 4
	},
	2698: {
	    A: 3,
	    name: "Apu Illapa",
	    pathcost: 60,
	    pointcost: 280,
	    startdom: 3
	},
	2699: {
	    F: 1,
	    E: 2,
	    name: "Ayar",
	    pathcost: 80,
	    pointcost: 240,
	    startdom: 2
	},
	270: {
	    N: 1,
	    name: "Arch Druid",
	    pointcost: 90,
	    realm1: 2,
	    startdom: 1
	},
	2737: {
	    E: 1,
	    D: 2,
	    name: "Immortal Coya",
	    pathcost: 30,
	    pointcost: 160,
	    startdom: 2
	},
	2755: {
	    E: 1,
	    D: 2,
	    name: "Hun Came",
	    pathcost: 60,
	    pointcost: 290,
	    realm1: 6,
	    startdom: 3
	},
	2756: {
	    D: 2,
	    B: 1,
	    name: "Bolon-ti-ku",
	    pathcost: 80,
	    pointcost: 230,
	    realm1: 6,
	    startdom: 2
	},
	2764: {
	    F: 1,
	    B: 1,
	    name: "Hun Balam",
	    pathcost: 80,
	    pointcost: 170,
	    realm1: 6,
	    startdom: 2
	},
	2777: {
	    F: 1,
	    S: 1,
	    name: "Demon Macaw",
	    pathcost: 80,
	    pointcost: 170,
	    realm1: 6,
	    startdom: 2
	},
	2783: {
	    E: 1,
	    N: 1,
	    name: "Drakon",
	    pathcost: 80,
	    pointcost: 220,
	    realm1: 3,
	    startdom: 2
	},
	2784: {
	    E: 1,
	    N: 1,
	    name: "Thrice Horned Boar",
	    pathcost: 80,
	    pointcost: 150,
	    realm1: 2,
	    startdom: 2
	},
	2785: {
	    F: 1,
	    A: 1,
	    name: "Solar Eagle",
	    pathcost: 80,
	    pointcost: 230,
	    realm1: 10,
	    startdom: 2
	},
	2786: {
	    A: 2,
	    name: "Celestial Gryphon",
	    pathcost: 80,
	    pointcost: 180,
	    realm1: 5,
	    startdom: 2
	},
	2787: {
	    F: 1,
	    S: 1,
	    name: "Celestial Lion",
	    pathcost: 80,
	    pointcost: 160,
	    realm1: 5,
	    startdom: 2
	},
	2788: {
	    B: 1,
	    E: 1,
	    name: "Man-Eater",
	    pathcost: 80,
	    pointcost: 200,
	    realm1: 5,
	    startdom: 2
	},
	2789: {
	    D: 2,
	    name: "Raven of the Underworld",
	    pathcost: 80,
	    pointcost: 140,
	    realm1: 10,
	    startdom: 2
	},
	2790: {
	    F: 1,
	    E: 1,
	    name: "Myrmecoleon",
	    pathcost: 80,
	    pointcost: 150,
	    realm1: 7,
	    startdom: 2
	},
	2791: {
	    E: 2,
	    name: "Earth Serpent",
	    pathcost: 80,
	    pointcost: 240,
	    realm1: 10,
	    startdom: 2
	},
	2792: {
	    F: 2,
	    name: "Solar Serpent",
	    pathcost: 80,
	    pointcost: 180,
	    realm1: 7,
	    startdom: 2
	},
	2793: {
	    D: 2,
	    name: "Serpent of Chaos",
	    pathcost: 80,
	    pointcost: 230,
	    realm1: 7,
	    startdom: 2
	},
	2795: {
	    W: 1,
	    D: 1,
	    name: "Dog of the Underworld",
	    pathcost: 80,
	    pointcost: 120,
	    realm1: 2,
	    startdom: 2
	},
	2796: {
	    E: 1,
	    D: 1,
	    name: "Hound of Hades",
	    pathcost: 80,
	    pointcost: 170,
	    realm1: 3,
	    startdom: 2
	},
	2797: {
	    F: 1,
	    A: 1,
	    name: "Hieracosphinx",
	    pathcost: 80,
	    pointcost: 190,
	    realm1: 7,
	    startdom: 2
	},
	2798: {
	    A: 1,
	    N: 1,
	    name: "Criosphinx",
	    pathcost: 80,
	    pointcost: 120,
	    realm1: 7,
	    startdom: 2
	},
	2799: {
	    N: 1,
	    W: 1,
	    name: "Wadjet",
	    pathcost: 80,
	    pointcost: 170,
	    realm1: 7,
	    startdom: 2
	},
	2800: {
	    E: 1,
	    W: 1,
	    name: "Ormr",
	    pathcost: 80,
	    pointcost: 180,
	    realm1: 1,
	    startdom: 2
	},
	2801: {
	    W: 1,
	    D: 1,
	    name: "Linnormr",
	    pathcost: 80,
	    pointcost: 210,
	    realm1: 1,
	    startdom: 2
	},
	2802: {
	    E: 1,
	    D: 1,
	    name: "Svartalf Mastersmith",
	    pathcost: 20,
	    pointcost: 200,
	    realm1: 1,
	    shapechange: 2803,
	    startdom: 1
	},
	2847: {
	    W: 3,
	    name: "Protogenos of the Sea",
	    pathcost: 80,
	    pointcost: 230,
	    realm1: 9,
	    startdom: 4
	},
	2848: {
	    W: 3,
	    name: "Father of the Sea",
	    pathcost: 80,
	    pointcost: 220,
	    realm1: 2,
	    startdom: 4
	},
	2849: {
	    F: 1,
	    W: 1,
	    D: 1,
	    name: "Father of Monsters",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 9,
	    startdom: 3
	},
	2850: {
	    D: 3,
	    name: "Statue of the Underworld",
	    pathcost: 40,
	    pointcost: 170,
	    realm1: 3,
	    startdom: 4
	},
	2851: {
	    A: 2,
	    W: 1,
	    name: "Titan of Winds and Waves",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 3,
	    startdom: 3
	},
	2852: {
	    W: 1,
	    D: 1,
	    name: "King of Frozen Bones",
	    pathcost: 20,
	    pointcost: 140,
	    startdom: 1
	},
	2853: {
	    D: 1,
	    name: "Ghost King",
	    pathcost: 20,
	    pointcost: 240,
	    startdom: 2
	},
	2855: {
	    S: 1,
	    W: 1,
	    name: "Floating Mind",
	    pathcost: 80,
	    pointcost: 80,
	    realm1: 9,
	    startdom: 2
	},
	2856: {
	    A: 1,
	    W: 1,
	    D: 1,
	    name: "Son of the Sea",
	    pathcost: 60,
	    pointcost: 280,
	    realm1: 2,
	    startdom: 3
	},
	2881: {
	    A: 1,
	    E: 1,
	    W: 1,
	    name: "Telkhine God-King",
	    pathcost: 40,
	    pointcost: 290,
	    shapechange: 2882,
	    startdom: 2
	},
	2922: {
	    A: 1,
	    W: 1,
	    name: "Morgen High Queen",
	    pathcost: 10,
	    pointcost: 130,
	    startdom: 1
	},
	2930: {
	    E: 1,
	    N: 1,
	    W: 1,
	    name: "Hooded Spirit",
	    pathcost: 80,
	    pointcost: 290,
	    realm1: 2,
	    startdom: 2
	},
	294: {
	    N: 2,
	    W: 1,
	    name: "Nerid",
	    pathcost: 60,
	    pointcost: 200,
	    realm1: 9,
	    startdom: 3
	},
	2955: {
	    E: 1,
	    name: "Leader of the Closed Council",
	    pathcost: 10,
	    pointcost: 140,
	    startdom: 1
	},
	2958: {
	    F: 1,
	    N: 1,
	    name: "Golden Lion",
	    pathcost: 80,
	    pointcost: 160,
	    realm1: 7,
	    startdom: 2
	},
	2959: {
	    S: 1,
	    name: "Chiranjivi",
	    pointcost: 190,
	    startdom: 1
	},
	2960: {
	    A: 1,
	    E: 1,
	    S: 1,
	    W: 1,
	    name: "Apkallu",
	    pathcost: 80,
	    pointcost: 280,
	    startdom: 2
	},
	2961: {
	    N: 1,
	    name: "Centauride Enchantress",
	    pointcost: 120,
	    startdom: 1
	},
	2977: {
	    S: 1,
	    name: "Centaur Great Sage",
	    pointcost: 140,
	    startdom: 1
	},
	2978: {
	    D: 1,
	    name: "Master Sorcerer",
	    pointcost: 90,
	    startdom: 1
	},
	2979: {
	    S: 1,
	    name: "Onmyo Hakase",
	    pointcost: 100,
	    startdom: 1
	},
	2980: {
	    S: 3,
	    name: "Uttervast",
	    pathcost: 80,
	    pointcost: 340,
	    startdom: 3,
	    cantbeawake: true,
	},
	3053: {
	    S: 1,
	    name: "Grand Hierophant",
	    pointcost: 100,
	    startdom: 1
	},
	3054: {
	    S: 2,
	    name: "Firstborn of the Star",
	    pointcost: 130,
	    startdom: 1
	},
	3055: {
	    W: 1,
	    name: "Grand Hydromancer",
	    pointcost: 100,
	    realm1: 9,
	    startdom: 1
	},
	3056: {
	    N: 1,
	    name: "Aphroi Sage",
	    pointcost: 140,
	    startdom: 1
	},
	3057: {
	    N: 1,
	    name: "Aphroi Sage",
	    pointcost: 140,
	    startdom: 1
	},
	3058: {
	    S: 1,
	    W: 1,
	    name: "God-King of the Deep",
	    pathcost: 20,
	    pointcost: 130,
	    startdom: 1
	},
	3059: {
	    A: 1,
	    name: "Magister Supreme",
	    pointcost: 80,
	    startdom: 1
	},
	3060: {
	    S: 1,
	    name: "Master",
	    pointcost: 110,
	    startdom: 1
	},
	3072: {
	    F: 2,
	    S: 1,
	    name: "Kami of the Sun",
	    pathcost: 60,
	    pointcost: 280,
	    realm1: 4,
	    startdom: 3
	},
	3073: {
	    S: 2,
	    D: 1,
	    name: "Kami of the Moon",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 4,
	    startdom: 3
	},
	3074: {
	    A: 2,
	    W: 1,
	    name: "Kami of Storms",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 4,
	    startdom: 3
	},
	3076: {
	    A: 1,
	    S: 1,
	    D: 1,
	    name: "Morrigna",
	    pathcost: 60,
	    pointcost: 380,
	    realm1: 2,
	    startdom: 3
	},
	3079: {
	    F: 1,
	    A: 1,
	    W: 1,
	    name: "Duiu of Thunder",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 2,
	    startdom: 3
	},
	3080: {
	    N: 2,
	    W: 1,
	    name: "Duiu of Farming",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 2,
	    startdom: 3
	},
	3081: {
	    F: 1,
	    B: 1,
	    N: 1,
	    name: "Duiu of War",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 2,
	    startdom: 3
	},
	3082: {
	    N: 1,
	    S: 1,
	    W: 1,
	    name: "Matrona of the Healing Spring",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 2,
	    startdom: 3
	},
	3086: {
	    F: 2,
	    N: 1,
	    name: "Deives of the Sun",
	    pathcost: 60,
	    pointcost: 220,
	    realm1: 1,
	    startdom: 3
	},
	3088: {
	    F: 1,
	    D: 2,
	    name: "Dharmapala of the Underworld",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 4,
	    startdom: 3
	},
	3098: {
	    S: 1,
	    W: 1,
	    name: "First Spawn",
	    pathcost: 40,
	    pointcost: 110,
	    startdom: 2
	},
	320: {
	    D: 3,
	    name: "Saurolich",
	    pathcost: 40,
	    pointcost: 240,
	    startdom: 2
	},
	383: {
	    D: 3,
	    name: "Prince of Death",
	    pathcost: 80,
	    pointcost: 270,
	    realm1: 3,
	    startdom: 2
	},
	384: {
	    E: 2,
	    S: 1,
	    name: "Neter of Crafts",
	    pathcost: 60,
	    pointcost: 230,
	    realm1: 7,
	    startdom: 3
	},
	385: {
	    E: 2,
	    N: 1,
	    name: "Neteret of Joy",
	    pathcost: 60,
	    pointcost: 220,
	    realm1: 7,
	    startdom: 3
	},
	386: {
	    F: 2,
	    S: 1,
	    name: "Neter of the Sun",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 7,
	    startdom: 3
	},
	387: {
	    S: 1,
	    name: "Neteret of Many Names",
	    pathcost: 20,
	    pointcost: 250,
	    realm1: 7,
	    startdom: 3
	},
	388: {
	    F: 1,
	    A: 1,
	    D: 1,
	    name: "Neter of Chaos",
	    pathcost: 60,
	    pointcost: 230,
	    realm1: 7,
	    startdom: 3
	},
	395: {
	    D: 3,
	    name: "Lich Queen",
	    pathcost: 40,
	    pointcost: 160,
	    realm1: 7,
	    startdom: 2
	},
	401: {
	    N: 1,
	    name: "Bitch Queen",
	    pointcost: 160,
	    realm1: 1,
	    shapechange: 402,
	    startdom: 1
	},
	472: {
	    E: 1,
	    S: 2,
	    name: "Statue of Order",
	    pathcost: 40,
	    pointcost: 150,
	    realm1: 3,
	    startdom: 4
	},
	485: {
	    S: 1,
	    name: "Great Enchantress",
	    pointcost: 90,
	    realm1: 10,
	    startdom: 1
	},
	486: {
	    B: 1,
	    name: "Great Warlock",
	    pathcost: 10,
	    pointcost: 100,
	    startdom: 1
	},
	499: {
	    F: 1,
	    E: 1,
	    S: 1,
	    name: "Nataraja",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 8,
	    startdom: 3
	},
	500: {
	    B: 1,
	    name: "Skratti",
	    pathcost: 10,
	    pointcost: 140,
	    startdom: 1
	},
	501: {
	    A: 1,
	    S: 1,
	    D: 1,
	    name: "Allfather",
	    pathcost: 40,
	    pointcost: 280,
	    realm1: 1,
	    startdom: 3
	},
	509: {
	    A: 1,
	    name: "Arch Seraph",
	    pathcost: 10,
	    pointcost: 90,
	    startdom: 1
	},
	546: {
	    S: 3,
	    name: "Void Lurker",
	    pathcost: 20,
	    pointcost: 150,
	    startdom: 4
	},
	550: {
	    E: 1,
	    name: "Master Alchemist",
	    pathcost: 10,
	    pointcost: 90,
	    startdom: 1
	},
	600: {
	    A: 1,
	    E: 1,
	    S: 1,
	    name: "Titan of War and Wisdom",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 3,
	    startdom: 3
	},
	601: {
	    S: 1,
	    W: 2,
	    name: "Devi of Fortunes",
	    pathcost: 60,
	    pointcost: 240,
	    startdom: 3
	},
	602: {
	    A: 2,
	    E: 1,
	    name: "Titan of Heaven",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 3,
	    startdom: 3
	},
	603: {
	    B: 1,
	    N: 1,
	    W: 1,
	    name: "Teotl of Rain",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 6,
	    startdom: 3
	},
	604: {
	    D: 1,
	    B: 2,
	    name: "Teotl of the Night",
	    pathcost: 60,
	    pointcost: 290,
	    realm1: 6,
	    startdom: 3
	},
	605: {
	    W: 2,
	    D: 1,
	    name: "Son of Niefel",
	    pathcost: 60,
	    pointcost: 260,
	    startdom: 3
	},
	606: {
	    E: 1,
	    N: 2,
	    name: "Great Mother",
	    pathcost: 60,
	    pointcost: 280,
	    realm1: 2,
	    startdom: 3
	},
	607: {
	    F: 2,
	    B: 1,
	    S: 1,
	    name: "Baphomet",
	    pathcost: 40,
	    pointcost: 160,
	    startdom: 4
	},
	608: {
	    F: 1,
	    A: 1,
	    name: "Phoenix",
	    pathcost: 80,
	    pointcost: 110,
	    realm1: 7,
	    startdom: 2
	},
	643: {
	    D: 1,
	    B: 1,
	    name: "Bog Mummy",
	    pathcost: 40,
	    pointcost: 240,
	    startdom: 2
	},
	644: {
	    D: 2,
	    name: "Dracolich",
	    pathcost: 80,
	    pointcost: 180,
	    shapechange: 645,
	    startdom: 2
	},
	652: {
	    S: 2,
	    W: 1,
	    name: "Void Lord",
	    pathcost: 60,
	    pointcost: 250,
	    startdom: 3
	},
	653: {
	    N: 1,
	    name: "Serpent King",
	    pointcost: 80,
	    realm1: 7,
	    shapechange: 654,
	    startdom: 1
	},
	655: {
	    F: 1,
	    E: 1,
	    name: "Scorpion King",
	    pathcost: 60,
	    pointcost: 160,
	    realm1: 5,
	    startdom: 2
	},
	656: {
	    B: 3,
	    name: "Fountain of Blood",
	    pathcost: 40,
	    pointcost: 150,
	    realm1: 10,
	    startdom: 4
	},
	657: {
	    E: 1,
	    N: 1,
	    S: 1,
	    name: "Monolith",
	    pathcost: 40,
	    pointcost: 160,
	    realm1: 2,
	    realm2: 1,
	    startdom: 4
	},
	661: {
	    E: 1,
	    S: 1,
	    name: "Shedu",
	    pathcost: 80,
	    pointcost: 200,
	    realm1: 5,
	    startdom: 2
	},
	779: {
	    N: 2,
	    name: "Rams-Headed Serpent",
	    pathcost: 80,
	    pointcost: 180,
	    realm1: 2,
	    startdom: 2
	},
	812: {
	    B: 1,
	    N: 2,
	    name: "Lord of the Wild",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 3,
	    startdom: 3
	},
	857: {
	    F: 1,
	    D: 1,
	    B: 1,
	    name: "Smoking Mirror",
	    pathcost: 20,
	    pointcost: 90,
	    shapechange: 858,
	    startdom: 1
	},
	862: {
	    D: 1,
	    B: 2,
	    name: "Vampire Queen",
	    pathcost: 40,
	    pointcost: 210,
	    startdom: 1
	},
	872: {
	    D: 1,
	    name: "Ghost King",
	    pathcost: 20,
	    pointcost: 220,
	    realm1: 10,
	    startdom: 2
	},
	873: {
	    S: 1,
	    name: "Great Seer of the Deeps",
	    pointcost: 100,
	    startdom: 1
	},
	874: {
	    S: 1,
	    name: "Divine Emperor",
	    pointcost: 110,
	    startdom: 2
	},
	905: {
	    A: 1,
	    S: 1,
	    W: 1,
	    name: "Jade Emperor",
	    pathcost: 60,
	    pointcost: 220,
	    realm1: 4,
	    startdom: 3
	},
	956: {
	    A: 2,
	    N: 1,
	    name: "Mother of Tuathas",
	    pathcost: 60,
	    pointcost: null,
	    startdom: 3
	},
	957: {
	    F: 2,
	    N: 1,
	    name: "Lord of The Desert Sun",
	    pathcost: 60,
	    pointcost: 250,
	    realm1: 5,
	    startdom: 3
	},
	958: {
	    B: 2,
	    E: 1,
	    name: "Colossal Head",
	    pathcost: 40,
	    pointcost: 170,
	    realm1: 6,
	    startdom: 4
	},
	961: {
	    E: 1,
	    W: 2,
	    name: "Titan of the Sea",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 3,
	    startdom: 3
	},
	964: {
	    E: 1,
	    N: 2,
	    name: "Lord of Fertility",
	    pathcost: 60,
	    pointcost: null,
	    startdom: 3
	},
	973: {
	    E: 1,
	    S: 1,
	    name: "Ancient Kraken",
	    pathcost: 80,
	    pointcost: 200,
	    realm1: 9,
	    startdom: 2
	},
	978: {
	    B: 1,
	    N: 1,
	    name: "Great Black Bull",
	    pathcost: 80,
	    pointcost: 190,
	    realm1: 3,
	    startdom: 2
	},
	979: {
	    E: 1,
	    N: 1,
	    name: "Great White Bull",
	    pathcost: 80,
	    pointcost: 190,
	    realm1: 3,
	    startdom: 2
	},
	3121: {
	    F: 1,
	    A: 1,
	    E: 1,
	    name: "Eldest Cyclops",
	    pathcost: 60,
	    pointcost: 240,
	    realm1: 3,
	    startdom: 2
	},
	3124: {
	    F: 1,
	    W: 1,
	    S: 1,
	    name: "Titan of Forethough",
	    pathcost: 60,
	    pointcost: 260,
	    realm1: 3,
	    startdom: 3
	},

	3190: {
	    D: 1,
	    name: "Bone Mother",
	    pathcost: 10,
	    pointcost: 110,
	    startdom: 1
	},
	3191: {
	    S: 1,
	    name: "Enkidu Great Sage",
	    pathcost: 10,
	    pointcost: 130,
	    startdom: 1
	},
	3192: {
	    D: 1,
	    B: 1,
	    name: "Great Camazotz",
	    pathcost: 10,
	    pointcost: 100,
	    startdom: 1
	},

	3204: {
	    W: 1,
	    D: 1,
	    name: "Grey One",
	    pathcost: 10,
	    pointcost: 90,
	    startdom: 1,
	    realm1: 3
	},
	3203: {
	    N: 3,
	    name: "Titan of the Hunt",
	    pathcost: 60,
	    pointcost: 260,
	    startdom: 3,
	    realm1: 3
	},
	3209: {
	    E: 1,
	    N: 2,
	    name: "Titan of the Growth",
	    pathcost: 60,
	    pointcost: 200,
	    startdom: 3,
	    realm1: 3
	},
	3208: {
	    D: 2,
	    N: 1,
	    name: "Titan of the Spring",
	    pathcost: 60,
	    pointcost: 220,
	    startdom: 3,
	    realm1: 3
	},
	3205: {
	    S: 1,
	    D: 1,
	    N: 1,
	    name: "Titan of the Crossroads",
	    pathcost: 60,
	    pointcost: 340,
	    startdom: 3,
	    realm1: 3
	},

	
    }
    Object.keys(vanilla_pretenders_data).forEach(pretenderId => {
	if (!vanilla_pretenders_data[pretenderId].F) {
	    vanilla_pretenders_data[pretenderId].F = 0;
	}
	if (!vanilla_pretenders_data[pretenderId].A) {
	    vanilla_pretenders_data[pretenderId].A = 0;
	}
	if (!vanilla_pretenders_data[pretenderId].W) {
	    vanilla_pretenders_data[pretenderId].W = 0;
	}
	if (!vanilla_pretenders_data[pretenderId].E) {
	    vanilla_pretenders_data[pretenderId].E = 0;
	}
	if (!vanilla_pretenders_data[pretenderId].S) {
	    vanilla_pretenders_data[pretenderId].S = 0;
	}
	if (!vanilla_pretenders_data[pretenderId].D) {
	    vanilla_pretenders_data[pretenderId].D = 0;
	}
	if (!vanilla_pretenders_data[pretenderId].N) {
	    vanilla_pretenders_data[pretenderId].N = 0;
	}
	if (!vanilla_pretenders_data[pretenderId].B) {
	    vanilla_pretenders_data[pretenderId].B = 0;
	}
	if (!vanilla_pretenders_data[pretenderId].pathcost) {
	    vanilla_pretenders_data[pretenderId].pathcost = 10;
	}
	if (!vanilla_pretenders_data[pretenderId].cantbeawake) {
	    vanilla_pretenders_data[pretenderId].cantbeawake = false;
	}
    });

    return vanilla_pretenders_data;
}

// const prets = getPretenders()
// console.log(
//   prets[2797]
// );
