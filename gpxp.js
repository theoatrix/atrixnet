var rswikiPrefix = "http://2007.runescape.wikia.com/wiki/";

var globalItems = [
	{
		"item": "Marrentill",
		"itemID": 251,
	},
	{
		"item": "Teleport to house",
		"itemID": 8013,
	},
	{
		"item": "Pure essence",
		"itemID": 7936,
	},
	{
		"item": "Stamina potion (4)",
		"itemID": 12625,
	},
	{
		"item": "Vial of water",
		"itemID": 227,
	},
	{
		"item": "Gold bar",
		"itemID": 2357,
	},
	{
		"item": "Uncut sapphire",
		"itemID": 1623,
	},
	{
		"item": "Uncut emerald",
		"itemID": 1621,
	},
	{
		"item": "Uncut ruby",
		"itemID": 1619,
	},
	{
		"item": "Uncut diamond",
		"itemID": 1617,
	},
	{
		"item": "Uncut dragonstone",
		"itemID": 1631,
	},
	{
		"item": "Battlestaff",
		"itemID": 1391,
	},
	{
		"item": "Air orb",
		"itemID": 573,
	},
	{
		"item": "Water orb",
		"itemID": 571,
	},
	{
		"item": "Earth orb",
		"itemID": 575,
	},
	{
		"item": "Fire orb",
		"itemID": 569,
	},
	{
		"item": "Green dragon leather",
		"itemID": 1745,
	},
	{
		"item": "Blue dragon leather",
		"itemID": 2505,
	},
	{
		"item": "Red dragon leather",
		"itemID": 2507,
	},
	{
		"item": "Black dragon leather",
		"itemID": 2509,
	},
	{
		"item": "Bow string",
		"itemID": 1777,
	},
	{
		"item": "Feather",
		"itemID": 314,
	},
	{
		"item": "Raw salmon",
		"itemID": 331,
	},
	{
		"item": "Soul rune",
		"itemID": 566,
	},
	{
		"item": "Nature rune",
		"itemID": 561,
	},
	{
		"item": "Blood rune",
		"itemID": 565,
	},
	{
		"item": "Body rune",
		"itemID": 559,
	},
	{
		"item": "Ring of dueling (8)",
		"itemID": 2552,
	},
	{
		"item": "Binding necklace",
		"itemID": 5521,
	},
	{
		"item": "Onyx bolt tips",
		"itemID": 9194,
	},
	// index 30 below
	{
		"item": "Lava scale shards",
		"itemID": 11994,
	},
	{
		"item": "Uncut onyx",
		"itemID": 6571,
	},
];
var prayerMethods = [
	{
		"item": "Bones",
		"itemID": 526,
		"level": 1,
		"xp": 15.75,
		"image": "Bones",
	},
	{
		"item": "Big bones",
		"itemID": 532,
		"level": 1,
		"xp": 52.5,
		"image": "Big bones",
	},
	{
		"item": "Babydragon bones",
		"itemID": 534,
		"level": 1,
		"xp": 105,
		"image": "Babydragon bones",
	},
	{
		"item": "Wyvern bones",
		"itemID": 6812,
		"level": 1,
		"xp": 252,
		"image": "Wyvern bones",
	},
	{
		"item": "Dragon bones",
		"itemID": 536,
		"level": 1,
		"xp": 252,
		"image": "Dragon bones",
	},
	{
		"item": "Lava dragon bones",
		"itemID": 11943,
		"level": 1,
		"xp": 297.5,
		"image": "Lava dragon bones",
	},
	{
		"item": "Dagannoth bones",
		"itemID": 6729,
		"level": 1,
		"xp": 437.5,
		"image": "Dagannoth bones",
	},
	{
		"item": "Ensouled goblin head",
		"itemID": 13448,
		"level": 3,
		"xp": 130,
		"image": "Ensouled goblin head",
	},
	{
		"item": "Ensouled monkey head",
		"itemID": 13451,
		"level": 7,
		"xp": 182,
		"image": "Ensouled monkey head",
	},
	{
		"item": "Ensouled imp head",
		"itemID": 13454,
		"level": 12,
		"xp": 286,
		"image": "Ensouled imp head",
	},
	{
		"item": "Ensouled minotaur head",
		"itemID": 13457,
		"level": 16,
		"xp": 364,
		"image": "Ensouled minotaur head",
	},
	{
		"item": "Ensouled scorpion head",
		"itemID": 13460,
		"level": 19,
		"xp": 454,
		"image": "Ensouled scorpion head",
	},
	{
		"item": "Ensouled bear head",
		"itemID": 13463,
		"level": 21,
		"xp": 480,
		"image": "Ensouled bear head",
	},
	{
		"item": "Ensouled unicorn head",
		"itemID": 13466,
		"level": 22,
		"xp": 494,
		"image": "Ensouled unicorn head",
	},
	{
		"item": "Ensouled dog head",
		"itemID": 13469,
		"level": 26,
		"xp": 520,
		"image": "Ensouled dog head",
	},
	{
		"item": "Ensouled chaos druid head",
		"itemID": 13472,
		"level": 30,
		"xp": 584,
		"image": "Ensouled chaos druid head",
	},
	{
		"item": "Ensouled giant head",
		"itemID": 13475,
		"level": 37,
		"xp": 650,
		"image": "Ensouled giant head",
	},
	{
		"item": "Ensouled ogre head",
		"itemID": 13478,
		"level": 40,
		"xp": 716,
		"image": "Ensouled ogre head",
	},
	{
		"item": "Ensouled elf head",
		"itemID": 13481,
		"level": 43,
		"xp": 754,
		"image": "Ensouled elf head",
	},
	{
		"item": "Ensouled troll head",
		"itemID": 13484,
		"level": 46,
		"xp": 780,
		"image": "Ensouled troll head",
	},
	{
		"item": "Ensouled horror head",
		"itemID": 13487,
		"level": 52,
		"xp": 832,
		"image": "Ensouled horror head",
	},
	{
		"item": "Ensouled kalphite head",
		"itemID": 13490,
		"level": 57,
		"xp": 884,
		"image": "Ensouled kalphite head",
	},
	{
		"item": "Ensouled dagannoth head",
		"itemID": 13493,
		"level": 62,
		"xp": 936,
		"image": "Ensouled dagannoth head",
	},
	{
		"item": "Ensouled bloodveld head",
		"itemID": 13496,
		"level": 65,
		"xp": 1040,
		"image": "Ensouled bloodveld head",
	},
	{
		"item": "Ensouled tzhaar head",
		"itemID": 13499,
		"level": 69,
		"xp": 1104,
		"image": "Ensouled tzhaar head",
	},
	{
		"item": "Superior dragon bones",
		"itemID": 22124,
		"level": 70,
		"xp": 525,
		"image": "Superior dragon bones",
	},
	{
		"item": "Ensouled demon head",
		"itemID": 13502,
		"level": 72,
		"xp": 1170,
		"image": "Ensouled demon head",
	},
	{
		"item": "Ensouled aviansie head",
		"itemID": 13505,
		"level": 78,
		"xp": 1234,
		"image": "Ensouled aviansie head",
	},
	{
		"item": "Ensouled abyssal head",
		"itemID": 13508,
		"level": 85,
		"xp": 1300,
		"image": "Ensouled abyssal head",
	},
	{
		"item": "Ensouled dragon head",
		"itemID": 13511,
		"level": 93,
		"xp": 1560,
		"image": "Ensouled dragon head",
	},
];
var magicMethods = [
	{
		"item": "Enchant sapphire or opal (tablet)",
		"itemID": 8016,
		"level": 7,
		"xp": 17.5,
		"supplies": [1761 /*clay*/, 564/*cosmic*/,555/*water*/],
		"image": "Enchant_sapphire_or_opal_tablet",
	},
	{
		"item": "Bones to bananas (tablet)",
		"itemID": 8014,
		"level": 15,
		"xp": 25,
		"supplies": [1761 /*clay*/, 561/*nature*/,555,555,557,557],
		"image": "Bones_to_bananas_tablet",
	},
	{
		"item": "Varrock Teleport",
		"itemID": -1,
		"level": 25,
		"xp": 35,
		"supplies": [563,554],
		"image": "Varrock_Teleport_icon",
	},
	{
		"item": "Varrock Teleport (tablet)",
		"itemID": 8007,
		"level": 25,
		"xp": 35,
		"supplies": [1761 /*clay*/, 563/*law*/, 556/*air*/, 556,556,554/*fire*/],
		"image": "Varrock_Teleport_tablet",
	},
	{
		"item": "Enchant emerald or jade (tablet)",
		"itemID": 8017,
		"level": 27,
		"xp": 37,
		"supplies": [1761 /*clay*/, 564/*cosmic*/,556,556,556],
		"image": "Enchant_emerald_or_jade_tablet",
	},
	{
		"item": "Lumbridge Teleport",
		"itemID": -1,
		"level": 31,
		"xp": 41,
		"supplies": [563,557],
		"image": "Lumbridge_Teleport_icon",
	},
	{
		"item": "Lumbridge Teleport (tablet)",
		"itemID": 8008,
		"level": 31,
		"xp": 41,
		"supplies": [1761 /*clay*/, 563/*law*/, 556/*air*/,556,556,557/*earth*/],
		"image": "Lumbridge_Teleport_tablet",
	},
	{
		"item": "Falador Teleport",
		"itemID": -1,
		"level": 37,
		"xp": 48,
		"supplies": [563,554],
		"image": "Falador_Teleport_icon",
	},
	{
		"item": "Falador Teleport (tablet)",
		"itemID": 8009,
		"level": 37,
		"xp": 48,
		"supplies": [1761 /*clay*/, 563/*law*/, 556/*air*/,556,556,555/*water*/],
		"image": "Falador_Teleport_tablet",
	},
	{
		"item": "Teleport to House",
		"itemID": -1,
		"level": 40,
		"xp": 30,
		"supplies": [563,557],
		"image": "Teleport_to_House_icon",
	},
	{
		"item": "Teleport to House (tablet)",
		"itemID": 8013,
		"level": 40,
		"xp": 30,
		"supplies": [1761 /*clay*/, 563/*law*/, 556/*air*/, 557/*earth*/],
		"image": "Teleport_to_House_tablet",
	},
	{
		"item": "Superheat Gold",
		"itemID": 2357,
		"level": 43,
		"xp": 53,
		"supplies": [561,444],
		"image": "Superheat_item_icon",
	},
	{
		"item": "Camelot Teleport",
		"itemID": -1,
		"level": 45,
		"xp": 55.5,
		"supplies": [563],
		"image": "Camelot_Teleport_icon",
	},
	{
		"item": "Camelot Teleport (tablet)",
		"itemID": 8010,
		"level": 45,
		"xp": 55.5,
		"supplies": [1761 /*clay*/, 563/*law*/, 556/*air*/,556,556,556,556],
		"image": "Camelot_Teleport_tablet",
	},
	{
		"item": "Enchant ruby or topaz (tablet)",
		"itemID": 8018,
		"level": 49,
		"xp": 59,
		"supplies": [1761 /*clay*/, 564/*cosmic*/,554,554,554,554,554],
		"image": "Enchant_ruby_or_topaz_tablet",
	},
	{
		"item": "Ardougne Teleport",
		"itemID": -1,
		"level": 51,
		"xp": 61,
		"supplies": [563,563,555,555],
		"image": "Ardougne_Teleport_icon",
	},
	{
		"item": "Ardougne Teleport (tablet)",
		"itemID": 8011,
		"level": 51,
		"xp": 61,
		"supplies": [1761 /*clay*/, 563/*law*/, 563, 555, 555],
		"image": "Ardougne_Teleport_tablet",
	},
	{
		"item": "High Level Alchemy (Magic longbow)",
		"itemID": -1,
		"level": 55,
		"xp": 65,
		"supplies": [561,859],
		"image": "High_Level_Alchemy_icon",
	},
	{
		"item": "Charge Water Orb",
		"itemID": 571,
		"level": 56,
		"xp": 56,
		"supplies": [567,564,564,564],
		"image": "Charge_Water_Orb_icon",
	},
	{
		"item": "Enchant diamond (tablet)",
		"itemID": 8019,
		"level": 57,
		"xp": 67,
		"supplies": [1761 /*clay*/, 564/*cosmic*/,557,557,557,557,557,557,557,557,557,557],
		"image": "Enchant_diamond_tablet",
	},
	{
		"item": "Watchtower Teleport",
		"itemID": -1,
		"level": 58,
		"xp": 68,
		"supplies": [563,563,557,557],
		"image": "Watchtower_Teleport_icon",
	},
	{
		"item": "Watchtower Teleport (tablet)",
		"itemID": 8012,
		"level": 58,
		"xp": 68,
		"supplies": [1761 /*clay*/, 563/*law*/, 563,557,557],
		"image": "Watchtower_Teleport_tablet",
	},
	{
		"item": "Charge Earth Orb",
		"itemID": 575,
		"level": 60,
		"xp": 70,
		"supplies": [567,564,564,564],
		"image": "Charge_Earth_Orb_icon",
	},
	{
		"item": "Bones to peaches (tablet)",
		"itemID": 8015,
		"level": 60,
		"xp": 35.5,
		"supplies": [1761 /*clay*/, 561/*nature*/,561,555,555,555,555,557,557,557,557],
		"image": "Bones_to_peaches_tablet",
	},
	{
		"item": "Charge Fire Orb",
		"itemID": 569,
		"level": 63,
		"xp": 73,
		"supplies": [567,564,564,564],
		"image": "Charge_Fire_Orb_icon",
	},
	{
		"item": "Charge Air Orb",
		"itemID": 573,
		"level": 66,
		"xp": 76,
		"supplies": [567,564,564,564],
		"image": "Charge_Air_Orb_icon",
	},
	{
		"item": "Humidify",
		"itemID": -1,
		"level": 68,
		"xp": 65,
		"supplies": [9075],
		"image": "Humidify_icon",
	},
	{
		"item": "Enchant dragonstone (tablet)",
		"itemID": 8020,
		"level": 68,
		"xp": 78,
		"supplies": [1761 /*clay*/, 564/*cosmic*/,557,557,557,557,557,557,557,557,557,557,557,557,557,557,557,555,555,555,555,555,555,555,555,555,555,555,555,555,555,555],
		"image": "Enchant_dragonstone_tablet",
	},
	{
		"item": "Superglass Make",
		"itemID": 1775,
		"level": 77,
		"xp": 78,
		/*Sand,seaweed,astral,astral,fire,fire,fire,fire,fire,fire*/
		"supplies": [1783,401,9075,9075,554,554,554,554,554,554],
		"image": "Superglass_Make_icon",
	},
	{
		"item": "Tan Leather (green)",
		"itemID": 1745,
		"level": 78,
		"xp": 81,
		"supplies": [9075,9075,561,1753,1753,1753,1753,1753],
		"image": "Tan_Leather_icon",
	},
	{
		"item": "Tan Leather (blue)",
		"itemID": 2505,
		"level": 78,
		"xp": 81,
		"supplies": [9075,9075,561,1751,1751,1751,1751,1751],
		"image": "Tan_Leather_icon",
	},
	{
		"item": "Tan Leather (red)",
		"itemID": 2507,
		"level": 78,
		"xp": 81,
		"supplies": [9075,9075,561,1749,1749,1749,1749,1749],
		"image": "Tan_Leather_icon",
	},
	{
		"item": "Tan Leather (black)",
		"itemID": 2509,
		"level": 78,
		"xp": 81,
		"supplies": [9075,9075,561,1747,1747,1747,1747,1747],
		"image": "Tan_Leather_icon",
	},
	{
		"item": "String Jewellery (gold amulet)",
		"itemID": 1692,
		"level": 80,
		"xp": 83,
		"supplies": [9075,9075,1673],
		"image": "String_Jewellery_icon",
	},
	{
		"item": "String Jewellery (unblessed symbol)",
		"itemID": 1716,
		"level": 80,
		"xp": 83,
		"supplies": [9075,9075,1714],
		"image": "String_Jewellery_icon",
	},
	{
		"item": "String Jewellery (unstrung symbol)",
		"itemID": 1722,
		"level": 80,
		"xp": 83,
		"supplies": [9075,9075,1720],
		"image": "String_Jewellery_icon",
	},
	{
		"item": "Magic Imbue (runes)",
		"itemID": -1,
		"level": 82,
		"xp": 86,
		"supplies": [9075,9075,554,554,554,554,554,554,554,555,555,555,555,555,555,555],
		"image": "Magic_Imbue_icon",
	},
	{
		"item": "Magic Imbue (staff)",
		"itemID": -1,
		"level": 82,
		"xp": 86,
		"supplies": [9075,9075],
		"image": "Magic_Imbue_icon",
	},
	{
		"item": "Plank Make (mahogany)",
		"itemID": 8782,
		"level": 86,
		"xp": 90,
		"supplies": [9075,9075,561,6332],
		"image": "Plank_Make_icon",
	},
	{
		"item": "Plank Make (teak)",
		"itemID": 8780,
		"level": 86,
		"xp": 90,
		"supplies": [9075,9075,561,6333],
		"image": "Plank_Make_icon",
	},
	{
		"item": "Plank Make (oak)",
		"itemID": 8778,
		"level": 86,
		"xp": 90,
		"supplies": [9075,9075,561,1521],
		"image": "Plank_Make_icon",
	},
	{
		"item": "Plank Make (regular)",
		"itemID": 960,
		"level": 86,
		"xp": 90,
		"supplies": [9075,9075,561,1511],
		"image": "Plank_Make_icon",
	},
	{
		"item": "Enchant onyx (tablet)",
		"itemID": 8021,
		"level": 87,
		"xp": 97,
		"supplies": [1761 /*clay*/, 564/*cosmic*/,557,557,557,557,557,557,557,557,557,557,557,557,557,557,557,557,557,557,557,557,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554,554],
		"image": "Enchant_onyx_tablet",
	},
	{
		"item": "Recharge Dragonstone (amulet)",
		"itemID": 1712,
		"level": 89,
		"xp": 97.5,
		/* One spell charges 27 glories */
		"supplies": [566,9075,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704,1704],
		"image": "Recharge_Dragonstone_icon",
	},
];
var runecraftingMethods = [
	{
		"item": "Air rune",
		"itemID": 556,
		"level": 1,
		"xp": 5,
		"image": "Air rune",
		"multiplierLevel": [1, 11, 22, 33, 44, 55, 66, 77, 88, 99],
		"multiplier": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	},
	{
		"item": "Mind rune",
		"itemID": 558,
		"level": 2,
		"xp": 5.5,
		"image": "Mind rune",
		"multiplierLevel": [1, 14, 28, 42, 56, 70, 84, 98],
		"multiplier": [1, 2, 3, 4, 5, 6, 7, 8],
	},
	{
		"item": "Water rune",
		"itemID": 555,
		"level": 5,
		"xp": 6,
		"image": "Water rune",
		"multiplierLevel": [1, 19, 38, 57, 76, 95],
		"multiplier": [1, 2, 3, 4, 5, 6],
	},
	{
		"item": "Earth rune",
		"itemID": 557,
		"level": 9,
		"xp": 6.5,
		"image": "Earth rune",
		"multiplierLevel": [1, 26, 52, 78],
		"multiplier": [1, 2, 3, 4],
	},
	{
		"item": "Fire rune",
		"itemID": 554,
		"level": 14,
		"xp": 7,
		"image": "Fire rune",
		"multiplierLevel": [1, 35, 70],
		"multiplier": [1, 2, 3],
	},
	{
		"item": "Body rune",
		"itemID": 559,
		"level": 20,
		"xp": 7.5,
		"image": "Body rune",
		"multiplierLevel": [1, 46, 92],
		"multiplier": [1, 2, 3],
	},
	{
		"item": "Lava rune",
		"itemID": 4699,
		"level": 23,
		"xp": 10.5,
		"image": "Lava rune",
		"multiplierLevel": [1],
		"multiplier": [1],
	},
	{
		"item": "Cosmic rune",
		"itemID": 564,
		"level": 27,
		"xp": 8,
		"image": "Cosmic rune",
		"multiplierLevel": [1, 59],
		"multiplier": [1, 2],
	},
	{
		"item": "Chaos rune",
		"itemID": 562,
		"level": 35,
		"xp": 8.5,
		"image": "Chaos rune",
		"multiplierLevel": [1, 74],
		"multiplier": [1, 2],
	},
	{
		"item": "Astral rune",
		"itemID": 9075,
		"level": 40,
		"xp": 8.7,
		"image": "Astral rune",
		"multiplierLevel": [1, 82],
		"multiplier": [1, 2],
	},
	{
		"item": "Nature rune",
		"itemID": 561,
		"level": 44,
		"xp": 9,
		"image": "Nature rune",
		"multiplierLevel": [1, 91],
		"multiplier": [1, 2],
	},
	{
		"item": "Law rune",
		"itemID": 563,
		"level": 54,
		"xp": 9.5,
		"image": "Law rune",
		"multiplierLevel": [1, 95],
		"multiplier": [1, 2],
	},
	{
		"item": "Death rune",
		"itemID": 560,
		"level": 65,
		"xp": 10,
		"image": "Death rune",
		"multiplierLevel": [1, 99],
		"multiplier": [1, 2],
	},
	{
		"item": "Blood rune",
		"itemID": 565,
		"level": 77,
		"xp": 23.8,
		"image": "Blood rune",
		"multiplierLevel": [1],
		"multiplier": [1],
	},
	{
		"item": "Soul rune",
		"itemID": 566,
		"level": 90,
		"xp": 29.7,
		"image": "Soul rune",
		"multiplierLevel": [1],
		"multiplier": [1],
	},
	{
		"item": "Wrath rune",
		"itemID": 21880,
		"level": 95,
		"xp": 8,
		"image": "Wrath rune",
		"multiplierLevel": [1],
		"multiplier": [1],
	},
];
var constructionMethods = [
	{
		"item": "Plank",
		"itemID": 960,
		"level": 1,
		"xp": 29,
		"image": "Plank",
	},
	{
		"item": "Oak plank",
		"itemID": 8778,
		"level": 1,
		"xp": 60,
		"image": "Oak plank",
	},
	{
		"item": "Teak plank",
		"itemID": 8780,
		"level": 1,
		"xp": 90,
		"image": "Teak plank",
	},
	{
		"item": "Mahogany plank",
		"itemID": 8782,
		"level": 1,
		"xp": 140,
		"image": "Mahogany plank",
	},
	{
		"item": "Small storage unit",
		"itemID": -1,
		"level": 30,
		"xp": 150,
		"image": "Small storage unit",
	},
	{
		"item": "Medium storage unit",
		"itemID": -1,
		"level": 60,
		"xp": 300,
		"image": "Medium storage unit",
	},
	{
		"item": "Large storage unit",
		"itemID": -1,
		"level": 90,
		"xp": 450,
		"image": "Large_storage_unit",
	},
];
var agilityMethods = [
	{
		"item": "Mark of grace",
		"itemID": 12640,
		"level": 1,
		"xp": 3000,
		"image": "Mark of grace",
	},
];
var herbloreMethods = [
	{
		"item": "Attack potion",
		"itemID": 121,
		"level": 3,
		"xp": 25,
		"image": "Attack potion (3)",
		"herb": "Guam",
		"herbID": 249,
		"secondary": "Eye of newt",
		"secondaryID": [221],
	},
	{
		"item": "Antipoison",
		"itemID": 175,
		"level": 5,
		"xp": 37.5,
		"image": "Antipoison (3)",
		"herb": "Marrentill",
		"herbID": 251,
		"secondary": "Unicorn horn dust",
		"secondaryID": [235],
	},
	{
		"item": "Strength potion",
		"itemID": 115,
		"level": 12,
		"xp": 50,
		"image": "Strength potion (3)",
		"herb": "Tarromin",
		"herbID": 253,
		"secondary": "Limpwurt root",
		"secondaryID": [225],
	},
	{
		"item": "Serum 207",
		"itemID": -1,
		"level": 15,
		"xp": 50,
		"image": "Serum 207 (3)",
		"herb": "Tarromin",
		"herbID": 253,
		"secondary": "Ashes",
		"secondaryID": [592],
	},
	{
		"item": "Restore potion",
		"itemID": 127,
		"level": 22,
		"xp": 62.5,
		"image": "Restore potion (3)",
		"herb": "Harralander",
		"herbID": 255,
		"secondary": "Red spiders' eggs",
		"secondaryID": [223],
	},
	{
		"item": "Energy potion",
		"itemID": 3010,
		"level": 26,
		"xp": 67.5,
		"image": "Energy potion (3)",
		"herb": "Harralander",
		"herbID": 255,
		"secondary": "Chocolate dust",
		"secondaryID": [1975],
	},
	{
		"item": "Defence potion (3)",
		"itemID": 133,
		"level": 30,
		"xp": 75,
		"image": "Defence potion (3)",
		"herb": "Ranarr weed",
		"herbID": 257,
		"secondary": "White berries",
		"secondaryID": [239],
	},
	{
		"item": "Agility potion",
		"itemID": 3034,
		"level": 34,
		"xp": 80,
		"image": "Agility potion (3)",
		"herb": "Toadflax",
		"herbID": 2998,
		"secondary": "Toad's legs",
		"secondaryID": [2152],
	},
	{
		"item": "Combat potion",
		"itemID": 9741,
		"level": 36,
		"xp": 84,
		"image": "Combat potion (3)",
		"herb": "Harralander",
		"herbID": 255,
		"secondary": "Goat horn dust",
		"secondaryID": [9736],
	},
	{
		"item": "Prayer potion",
		"itemID": 139,
		"level": 38,
		"xp": 87.5,
		"image": "Prayer potion (3)",
		"herb": "Ranarr weed",
		"herbID": 257,
		"secondary": "Snape grass",
		"secondaryID": [231],
	},
	{
		"item": "Super attack",
		"itemID": 145,
		"level": 45,
		"xp": 100,
		"image": "Super attack (3)",
		"herb": "Irit leaf",
		"herbID": 259,
		"secondary": "Eye of newt",
		"secondaryID": [221],
	},
	{
		"item": "Superantipoison",
		"itemID": 181,
		"level": 59,
		"xp": 106.3,
		"image": "Superantipoison (3)",
		"herb": "Irit leaf",
		"herbID": 259,
		"secondary": "Unicorn horn dust",
		"secondaryID": [235],
	},
	{
		"item": "Super energy potion",
		"itemID": 3018,
		"level": 52,
		"xp": 117.5,
		"image": "Super energy (3)",
		"herb": "Avantoe",
		"herbID": 261,
		"secondary": "Mort myre fungus",
		"secondaryID": [2970],
	},
	{
		"item": "Super strength",
		"itemID": 157,
		"level": 55,
		"xp": 125,
		"image": "Super strength (3)",
		"herb": "Kwuarm",
		"herbID": 263,
		"secondary": "Limpwurt root",
		"secondaryID": [225],
	},
	{
		"item": "Super restore",
		"itemID": 3026,
		"level": 63,
		"xp": 142.5,
		"image": "Super restore (3)",
		"herb": "Snapdragon",
		"herbID": 3000,
		"secondary": "Red spiders' eggs",
		"secondaryID": [223],
	},
	{
		"item": "Super defence potion",
		"itemID": 163,
		"level": 66,
		"xp": 150,
		"image": "Super defence (3)",
		"herb": "Cadantine",
		"herbID": 265,
		"secondary": "White berries",
		"secondaryID": [239],
	},
	{
		"item": "Anti-fire potion",
		"itemID": 2454,
		"level": 69,
		"xp": 157.5,
		"image": "Antifire potion (3)",
		"herb": "Lantadyme",
		"herbID": 2481,
		"secondary": "Dragon scale dust",
		"secondaryID": [241],
	},
	{
		"item": "Ranging potion",
		"itemID": 169,
		"level": 72,
		"xp": 162.5,
		"image": "Ranging potion (3)",
		"herb": "Dwarf weed",
		"herbID": 267,
		"secondary": "Wine of zamorak",
		"secondaryID": [245],
	},
	{
		"item": "Magic potion",
		"itemID": 3042,
		"level": 76,
		"xp": 172.5,
		"image": "Magic potion (3)",
		"herb": "Lantadyme",
		"herbID": 2481,
		"secondary": "Potato cactus",
		"secondaryID": [3138],
	},
	{
		"item": "Stamina potion",
		"itemID": 12625,
		"level": 77,
		"xp": 102,
		"image": "Stamina potion (4)",
		"herb": "Super energy potion (4)",
		"herbID": 3016,
		"secondary": "Amylase", /* 1 amylase per dose */
		"secondaryID": [12640],
	},
	{
		"item": "Saradomin brew",
		"itemID": 6687,
		"level": 81,
		"xp": 180,
		"image": "Saradomin brew (3)",
		"herb": "Toadflax",
		"herbID": 2998,
		"secondary": "Crushed nest",
		"secondaryID": [6693],
	},
	{
		"item": "Extended antifire",
		"itemID": 11953,
		"level": 84,
		"xp": 110,
		"image": "Extended antifire (4)",
		"herb": "Antifire potion (4)",
		"herbID": 2452,
		"secondary": "Lava scale shards", /* 1 shard per dose */
		"secondaryID": [11994],
	},
	{
		"item": "Anti-venom",
		"itemID": 12907,
		"level": 87,
		"xp": 120,
		"image": "Anti-venom(4)",
		"herb": "Antidote++",
		"herbID": 5952,
		"secondary": "Zulrah's Scales",
		"secondaryID": [12934],
	},
	{
		"item": "Super combat potion",
		"itemID": 12695,
		"level": 90,
		"xp": 150,
		"image": "Super combat potion (4)",
		"herb": "Torstol",
		"herbID": 269,
		"secondary": ["Super attack (4)", "Super strength (4)", "Super defence (4)"],
		"secondaryID": [2436,2440,2442],
	},
	{
		"item": "Super antifire potion",
		"itemID": 21978,
		"level": 92,
		"xp": 130,
		"image": "Super antifire potion (4)",
		"herb": "Lantadyme",
		"herbID": 2481,
		"secondary": ["Antifire potion (4)", "Crushed dragon bones"],
		"secondaryID": [2452, 21975],
	},
	{
		"item": "Anti-venom+",
		"itemID": 12913,
		"level": 94,
		"xp": 125,
		"image": "Anti-venom+(4)",
		"herb": "Torstol",
		"herbID": 269,
		"secondary": "Anti-venom(4)",
		"secondaryID": [12905],
	},
	{
		"item": "Extended super antifire",
		"itemID": 22209,
		"level": 98,
		"xp": 160,
		"image": "Extended super antifire (4)",
		"herb": "Super antifire potion",
		"herbID": 21978,
		"secondary": "Lava scale shard",
		"secondaryID": [11994],
	},
];
var thievingMethods = [
	{
		"item": "Pyramid Plunder",
		"itemID": -1,
		"level": 21,
		"xp": "N/A",
		"image": "Pharaoh&apos;s sceptre",
	},
	{
		"item": "Knight of Ardougne",
		"itemID": -1,
		"level": 55,
		"xp": 84.33,
		"image": "Knight of Ardougne",
	},
	{
		"item": "Maple Blackjack",
		"itemID": -1,
		"level": 65,
		"xp": 137.5,
		"image": "Maple blackjack",
	},
];
var craftingMethods = [
	{
		"item": "Beer glass",
		"itemID": 1919,
		"level": 1,
		"xp": 17,
		"supplies": [1775],
		"image": "Beer glass",
	},
	{
		"item": "Candle lantern",
		"itemID": 4527,
		"level": 4,
		"xp": 19,
		"supplies": [1775],
		"image": "Candle lantern (empty)",
	},
	{
		"item": "Gold amulet (u)",
		"itemID": 1673,
		"level": 8,
		"xp": 30,
		"supplies": [2357],
		"image": "Gold amulet (u)",
	},
	{
		"item": "Oil lamp",
		"itemID": 4525,
		"level": 12,
		"xp": 25,
		"supplies": [1775],
		"image": "Oil lamp (empty)",
	},
	{
		"item": "Sapphire",
		"itemID": 1607,
		"level": 20,
		"xp": 50,
		"supplies": [1623],
		"image": "Sapphire",
	},
	{
		"item": "Sapphire bracelet",
		"itemID": 11072,
		"level": 23,
		"xp": 60,
		"supplies": [2357, 1607],
		"image": "Sapphire bracelet",
	},
	{
		"item": "Emerald",
		"itemID": 1605,
		"level": 27,
		"xp": 67.5,
		"supplies": [1621],
		"image": "Emerald",
	},
	{
		"item": "Emerald bracelet",
		"itemID": 11076,
		"level": 30,
		"xp": 65,
		"supplies": [2357, 1605],
		"image": "Emerald bracelet",
	},
	{
		"item": "Vial",
		"itemID": 229,
		"level": 33,
		"xp": 35,
		"supplies": [1775],
		"image": "Vial",
	},
	{
		"item": "Ruby",
		"itemID": 1603,
		"level": 34,
		"xp": 85,
		"supplies": [1619],
		"image": "Ruby",
	},
	{
		"item": "Fishbowl",
		"itemID": 6667,
		"level": 42,
		"xp": 42.5,
		"supplies": [1775],
		"image": "Fishbowl",
	},
	{
		"item": "Ruby bracelet",
		"itemID": 11085,
		"level": 42,
		"xp": 80,
		"supplies": [2357, 1603],
		"image": "Ruby bracelet",
	},
	{
		"item": "Diamond",
		"itemID": 1601,
		"level": 43,
		"xp": 107.5,
		"supplies": [1617],
		"image": "Diamond",
	},
	{
		"item": "Unpowered orb",
		"itemID": 567,
		"level": 46,
		"xp": 52.5,
		"supplies": [1775],
		"image": "Unpowered orb",
	},
	{
		"item": "Lantern lens",
		"itemID": 4542,
		"level": 49,
		"xp": 55,
		"supplies": [1775],
		"image": "Lantern lens",
	},
	{
		"item": "Dragonstone",
		"itemID": 1615,
		"level": 55,
		"xp": 137.5,
		"supplies": [1631],
		"image": "Dragonstone",
	},
	{
		"item": "Water battlestaff",
		"itemID": 1395,
		"level": 54,
		"xp": 100,
		"supplies": [1391, 571],
		"image": "Water battlestaff",
	},
	{
		"item": "Diamond bracelet",
		"itemID": 11092,
		"level": 58,
		"xp": 95,
		"supplies": [2357, 1601],
		"image": "Diamond bracelet",
	},
	{
		"item": "Earth battlestaff",
		"itemID": 1399,
		"level": 58,
		"xp": 112.5,
		"supplies": [1391, 575],
		"image": "Earth battlestaff",
	},
	{
		"item": "Fire battlestaff",
		"itemID": 1393,
		"level": 62,
		"xp": 125,
		"supplies": [1391, 569],
		"image": "Fire battlestaff",
	},
	{
		"item": "Green d'hide body",
		"itemID": 1135,
		"level": 63,
		"xp": 186,
		"supplies": [1745],
		"image": "Green d&apos;hide body",
	},
	{
		"item": "Air battlestaff",
		"itemID": 1397,
		"level": 66,
		"xp": 137.5,
		"supplies": [1391, 573],
		"image": "Air battlestaff",
	},
	{
		"item": "Blue d'hide body",
		"itemID": 2499,
		"level": 71,
		"xp": 210,
		"supplies": [2505],
		"image": "Blue d&apos;hide body",
	},
	{
		"item": "Dragonstone bracelet",
		"itemID": 11115,
		"level": 74,
		"xp": 110,
		"supplies": [2357, 1615],
		"image": "Dragonstone bracelet",
	},
	{
		"item": "Red d'hide body",
		"itemID": 2501,
		"level": 77,
		"xp": 234,
		"supplies": [2507],
		"image": "Red d&apos;hide body",
	},
	{
		"item": "Amethyst bolt tips",
		"itemID": 21338,
		"level": 83,
		"xp": 60,
		"supplies": [21347],
		"image": "Amethyst bolt tips 5",
	},
	{
		"item": "Black d'hide body",
		"itemID": 2503,
		"level": 84,
		"xp": 258,
		"supplies": [2509],
		"image": "Black d&apos;hide body",
	},
	{
		"item": "Amethyst arrowtips",
		"itemID": 21350,
		"level": 85,
		"xp": 60,
		"supplies": [21347],
		"image": "Amethyst arrowtips 5",
	},
	{
		"item": "Amethyst javelin heads",
		"itemID": 21352,
		"level": 87,
		"xp": 60,
		"supplies": [21347],
		"image": "Amethyst javelin heads 5",
	},
	{
		"item": "Light orb",
		"itemID": 10973,
		"level": 87,
		"xp": 70,
		"supplies": [1775],
		"image": "Light orb",
	},
];
var fletchingMethods = [
	{
		"item": "Steel dart",
		"itemID": 808,
		"level": 37,
		"xp": 7.5,
		"supplies": [314,821],
		"image": "Steel dart",
	},
	{
		"item": "Willow longbow (u)",
		"itemID": 58,
		"level": 40,
		"xp": 41.5,
		"supplies": [1519],
		"image": "Willow longbow (u)",
	},
	{
		"item": "Willow longbow",
		"itemID": 847,
		"level": 40,
		"xp": 83,
		"supplies": [1777,1519],
		"image": "Willow longbow",
	},
	{
		"item": "Broad arrow",
		"itemID": -1,
		"level": 52,
		"xp": 10,
		"supplies": [53],
		"image": "Broad arrow 5",
	},
	{
		"item": "Mithril dart",
		"itemID": 809,
		"level": 52,
		"xp": 11.2,
		"supplies": [314,822],
		"image": "Mithril dart",
	},
	{
		"item": "Maple longbow (u)",
		"itemID": 62,
		"level": 55,
		"xp": 58.3,
		"supplies": [1517],
		"image": "Maple longbow (u)",
	},
	{
		"item": "Maple longbow",
		"itemID": 851,
		"level": 55,
		"xp": 116.6,
		"supplies": [1777,1517],
		"image": "Maple longbow",
	},
	{
		"item": "Broad bolt",
		"itemID": 11875,
		"level": 55,
		"xp": 3,
		"supplies": [314,11876],
		"image": "Broad bolts 5",
	},
	{
		"item": "Adamant dart",
		"itemID": 810,
		"level": 67,
		"xp": 15,
		"supplies": [314,823],
		"image": "Adamant dart",
	},
	{
		"item": "Yew longbow (u)",
		"itemID": 66,
		"level": 70,
		"xp": 75,
		"supplies": [1515],
		"image": "Yew longbow (u)",
	},
	{
		"item": "Yew longbow",
		"itemID": 855,
		"level": 70,
		"xp": 150,
		"supplies": [1777,1515],
		"image": "Yew longbow",
	},
	{
		"item": "Rune dart",
		"itemID": 811,
		"level": 81,
		"xp": 18.8,
		"supplies": [314,824],
		"image": "Rune dart",
	},
	{
		"item": "Amethyst arrow",
		"itemID": 21326,
		"level": 82,
		"xp": 13.5,
		"supplies": [53,21350],
		"image": "Amethyst arrow 5",
	},
	{
		"item": "Magic longbow (u)",
		"itemID": 70,
		"level": 85,
		"xp": 91.5,
		"supplies": [1513],
		"image": "Magic longbow (u)",
	},
	{
		"item": "Magic longbow",
		"itemID": 859,
		"level": 85,
		"xp": 183,
		"supplies": [1777,1513],
		"image": "Magic longbow",
	},
	{
		"item": "Dragon arrow",
		"itemID": 11212,
		"level": 90,
		"xp": 15,
		"supplies": [53,11237],
		"image": "Dragon arrow 5",
	},
	{
		"item": "Dragon dart",
		"itemID": 11230,
		"level": 95,
		"xp": 25,
		"supplies": [314,11232],
		"image": "Dragon dart",
	},
];
var hunterMethods = [
	{
		"item": "Baby impling",
		"itemID": 11238,
		"level": 17,
		"xp": 20,
		"image": "Baby impling jar",
	},
	{
		"item": "Young impling",
		"itemID": 11240,
		"level": 22,
		"xp": 22,
		"image": "Young impling jar",
	},
	{
		"item": "Gourmet impling",
		"itemID": 11242,
		"level": 28,
		"xp": 24,
		"image": "Gourmet impling jar",
	},
	{
		"item": "Earth impling",
		"itemID": 11244,
		"level": 36,
		"xp": 27,
		"image": "Earth impling jar",
	},
	{
		"item": "Essence impling",
		"itemID": 11246,
		"level": 42,
		"xp": 29,
		"image": "Essence impling jar",
	},
	{
		"item": "Eclectic impling",
		"itemID": 11248,
		"level": 50,
		"xp": 34,
		"image": "Eclectic impling jar",
	},
	{
		"item": "Chinchompa",
		"itemID": 10033,
		"level": 53,
		"xp": 198.25,
		"image": "Chinchompa",
	},
	{
		"item": "Nature impling",
		"itemID": 11250,
		"level": 58,
		"xp": 36,
		"image": "Nature impling jar",
	},
	{
		"item": "Red salamander",
		"itemID": 10147,
		"level": 59,
		"xp": 272,
		"image": "Red salamander",
	},
	{
		"item": "Red chinchompa",
		"itemID": 10034,
		"level": 63,
		"xp": 265,
		"image": "Red chinchompa",
	},
	{
		"item": "Magpie impling",
		"itemID": 11252,
		"level": 65,
		"xp": 246,
		"image": "Magpie impling jar",
	},
	{
		"item": "Black salamander",
		"itemID": 10148,
		"level": 67,
		"xp": 319.5,
		"image": "Black salamander",
	},
	{
		"item": "Black chinchompa",
		"itemID": 11959,
		"level": 73,
		"xp": 315,
		"image": "Black chinchompa",
	},
	{
		"item": "Ninja impling",
		"itemID": 11254,
		"level": 74,
		"xp": 240,
		"image": "Ninja impling jar",
	},
	{
		"item": "Dragon impling",
		"itemID": 11256,
		"level": 83,
		"xp": 300,
		"image": "Dragon impling jar",
	},
	{
		"item": "Lucky impling",
		"itemID": -1,
		"level": 89,
		"xp": 80,
		"image": "Lucky impling jar",
	},
];
var miningMethods = [
	{
		"item": "Iron ore",
		"itemID": 440,
		"level": 15,
		"xp": 35,
		"image": "Iron ore",
	},
	{
		"item": "Coal",
		"itemID": 453,
		"level": 30,
		"xp": 50,
		"image": "Coal",
	},
	{
		"item": "Motherlode mine",
		"itemID": -1,
		"level": 30,
		"xp": 60,
		"image": "Pay-dirt",
	},
	{
		"item": "Sandstone",
		"itemID": -1,
		"level": 35,
		"xp": "N/A",
		"image": "Sandstone",
	},
	{
		"item": "Gold ore",
		"itemID": 444,
		"level": 40,
		"xp": 65,
		"image": "Gold ore",
	},
	{
		"item": "Granite",
		"itemID": -1,
		"level": 45,
		"xp": "N/A",
		"image": "Granite",
	},
	{
		"item": "Mithril ore",
		"itemID": 447,
		"level": 55,
		"xp": 80,
		"image": "Mithril ore",
	},
	{
		"item": "Adamantite ore",
		"itemID": 449,
		"level": 70,
		"xp": 95,
		"image": "Adamantite ore",
	},
	{
		"item": "Runite ore",
		"itemID": 451,
		"level": 85,
		"xp": 125,
		"image": "Runite ore",
	},
	{
		"item": "Amethyst crystals",
		"itemID": 21347,
		"level": 92,
		"xp": 240,
		"image": "Amethyst",
	},
];
var smithingMethods = [
	{ 
		"item": "Bronze dart tip",
		"itemID": 819,
		"level": 4,
		"xp": 12.5,
		"supplies": [2349],
		"image": "Bronze dart tip",
	},
	{ 
		"item": "Iron dart tip",
		"itemID": 820,
		"level": 19,
		"xp": 25,
		"supplies": [2351],
		"image": "Iron dart tip",
	},
	{ 
		"item": "Steel dart tip",
		"itemID": 821,
		"level": 34,
		"xp": 37.5,
		"supplies": [2353],
		"image": "Steel dart tip",
	},
	{ 
		"item": "Cannonball",
		"itemID": 2,
		"level": 35,
		"xp": 25.6,
		"supplies": [2353],
		"image": "Cannonball",
	},
	{
		"item": "Gold bar",
		"itemID": 2357,
		"level": 40,
		"xp": 56.2,
		"supplies": [444],
		"image": "Gold bar",
	},
	{
		"item": "Steel platebody",
		"itemID": 1119,
		"level": 48,
		"xp": 187.5,
		"supplies": [2353],
		"image": "Steel platebody",
	},
	{ 
		"item": "Mithril dart tip",
		"itemID": 822,
		"level": 54,
		"xp": 50,
		"supplies": [2359],
		"image": "Mithril dart tip",
	},
	{ 
		"item": "Adamant dart tip",
		"itemID": 823,
		"level": 74,
		"xp": 62.5,
		"supplies": [2361],
		"image": "Adamant dart tip",
	},
	{
		"item": "Adamant platebody",
		"itemID": 1123,
		"level": 88,
		"xp": 312.5,
		"supplies": [2361],
		"image": "Adamant platebody",
	},
	{ 
		"item": "Rune dart tip",
		"itemID": 824,
		"level": 89,
		"xp": 75,
		"supplies": [2363],
		"image": "Rune dart tip",
	},
	{
		"item": "Rune platelegs",
		"itemID": 1079,
		"level": 99,
		"xp": 225,
		"supplies": [2363],
		"image": "Rune platelegs",
	},
	{
		"item": "Rune plateskirt",
		"itemID": 1093,
		"level": 99,
		"xp": 225,
		"supplies": [2363],
		"image": "Rune plateskirt",
	},
	{
		"item": "Rune 2h sword",
		"itemID": 1319,
		"level": 99,
		"xp": 225,
		"supplies": [2363],
		"image": "Rune 2h sword",
	},
];
var fishingMethods = [
	{
		"item": "Fly fishing",
		"itemID": 335,
		"level": 15,
		"xp": 58.6,
		"image": "Fly fishing rod",
	},
	{
		"item": "Raw lobster",
		"itemID": 377,
		"level": 40,
		"xp": 90,
		"image": "Raw lobster",
	},
	{
		"item": "Barbarian fishing",
		"itemID": -1,
		"level": 48,
		"xp": 61,
		"image": "Barbarian rod",
	},
	{
		"item": "Raw monkfish",
		"itemID": 7944,
		"level": 62,
		"xp": 120,
		"image": "Raw monkfish",
	},
	{
		"item": "Raw shark",
		"itemID": 383,
		"level": 76,
		"xp": 110,
		"image": "Raw shark",
	},
	{
		"item": "Infernal eel",
		"itemID": -1,
		"level": 80,
		"xp": 95,
		"image": "Infernal eel",
	},
	{
		"item": "Raw anglerfish",
		"itemID": 13439,
		"level": 82,
		"xp": 120,
		"image": "Raw anglerfish",
	},
	{
		"item": "Raw dark crab",
		"itemID": 11934,
		"level": 85,
		"xp": 130,
		"image": "Raw dark crab",
	},//todo minnows
	{
		"item": "Sacred eel",
		"itemID": 12934,
		"level": 87,
		"xp": 105,
		"image": "Sacred eel",
	},
];
var cookingMethods = [
	{
		"item": "Cooked karambwan",
		"itemID": 3144,
		"level": 30,
		"xp": 190,
		"supplies": [3142],
		"image": "Cooked karambwan",
	},
	{
		"item": "Jug of wine",
		"itemID": 1993,
		"level": 35,
		"xp": 200,
		"supplies": [1987,1937],
		"image": "Jug of wine",
	},
	{
		"item": "Lobster",
		"itemID": 379,
		"level": 40,
		"xp": 120,
		"supplies": [377],
		"image": "Lobster",
	},
	{
		"item": "Monkfish",
		"itemID": 7946,
		"level": 62,
		"xp": 150,
		"supplies": [7944],
		"image": "Monkfish",
	},
	{
		"item": "Sacred eel",
		"itemID": 12934,
		"level": 72,
		"xp": 116.5,
		"supplies": [314],
		"image": "Sacred eel",
	},
	{
		"item": "Shark",
		"itemID": 385,
		"level": 80,
		"xp": 210,
		"supplies": [383],
		"image": "Shark",
	},
	{
		"item": "Anglerfish",
		"itemID": 13441,
		"level": 84,
		"xp": 230,
		"supplies": [13439],
		"image": "Anglerfish",
	},
	{
		"item": "Dark crab",
		"itemID": 11936,
		"level": 90,
		"xp": 215,
		"supplies": [11934],
		"image": "Dark crab",
	},
	{
		"item": "Bake Pie (Summer pie)",
		"itemID": 7218,
		"level": 95,
		"xp": 260,
		"supplies": [7216,9075],
		"image": "Bake_Pie_icon",
	},
];
var firemakingMethods = [
	{
		"item": "Logs",
		"itemID": 1511,
		"level": 1,
		"xp": 40,
		"image": "Logs",
	},
	{
		"item": "Oak logs",
		"itemID": 1521,
		"level": 15,
		"xp": 60,
		"image": "Oak logs",
	},
	{
		"item": "Willow logs",
		"itemID": 1519,
		"level": 30,
		"xp": 90,
		"image": "Willow logs",
	},
	{
		"item": "Maple logs",
		"itemID": 1517,
		"level": 45,
		"xp": 135,
		"image": "Maple logs",
	},
	{
		"item": "Wintertodt",
		"itemID": -1,
		"level": 50,
		"xp": -1,
		"image": "Pyromancer hood",
	},
	{
		"item": "Yew logs",
		"itemID": 1515,
		"level": 60,
		"xp": 202.5,
		"image": "Yew logs",
	},
	{
		"item": "Magic logs",
		"itemID": 1513,
		"level": 75,
		"xp": 303.8,
		"image": "Magic logs",
	},
	{
		"item": "Redwood logs",
		"itemID": 19669,
		"level": 90,
		"xp": 350,
		"image": "Redwood logs",
	},
];
var woodcuttingMethods = [
	{
		"item": "Tree",
		"itemID": 1511,
		"level": 1,
		"xp": 25,
		"image": "Logs",
	},
	{
		"item": "Oak tree",
		"itemID": 1521,
		"level": 15,
		"xp": 37.5,
		"image": "Oak logs",
	},
	{
		"item": "Willow tree",
		"itemID": 1519,
		"level": 30,
		"xp": 67.5,
		"image": "Willow logs",
	},
	{
		"item": "Maple tree",
		"itemID": 1517,
		"level": 45,
		"xp": 100,
		"image": "Maple logs",
	},
	{
		"item": "Teak tree",
		"itemID": 6333,
		"level": 35,
		"xp": 85,
		"image": "Teak logs",
	},
	{
		"item": "Yew tree",
		"itemID": 1515,
		"level": 60,
		"xp": 175,
		"image": "Yew logs",
	},
	{
		"item": "Magic tree",
		"itemID": 1513,
		"level": 75,
		"xp": 250,
		"image": "Magic logs",
	},
	{
		"item": "Redwood tree",
		"itemID": 19669,
		"level": 90,
		"xp": 380,
		"image": "Redwood logs",
	},
];
var farmingMethods = [
	{
		"item": "Guam leaf",
		"itemID": 249,
		"level": 9,
		"xp": 23.5,
		"supplies": [5291],
		"image": "Guam leaf",
	},
	{
		"item": "Marrentill",
		"itemID": 251,
		"level": 14,
		"xp": 28.5,
		"supplies": [5292],
		"image": "Marrentill",
	},
	{
		"item": "Tarromin",
		"itemID": 253,
		"level": 19,
		"xp": 34,
		"supplies": [5293],
		"image": "Tarromin",
	},
	{
		"item": "Harralander",
		"itemID": 255,
		"level": 26,
		"xp": 165.5,
		"supplies": [5294],
		"image": "Harralander",
	},
	{
		"item": "Ranarr weed",
		"itemID": 257,
		"level": 32,
		"xp": 210,
		"supplies": [5295],
		"image": "Ranarr weed",
	},
	{
		"item": "Toadflax",
		"itemID": 2998,
		"level": 38,
		"xp": 265,
		"supplies": [5296],
		"image": "Toadflax",
	},
	{
		"item": "Irit leaf",
		"itemID": 259,
		"level": 44,
		"xp": 334,
		"supplies": [5297],
		"image": "Irit leaf",
	},
	{
		"item": "Avantoe",
		"itemID": 261,
		"level": 50,
		"xp": 423.5,
		"supplies": [5298],
		"image": "Avantoe",
	},
	{
		"item": "Kwuarm",
		"itemID": 263,
		"level": 56,
		"xp": 537,
		"supplies": [5299],
		"image": "Kwuarm",
	},
	{
		"item": "Snapdragon",
		"itemID": 3000,
		"level": 62,
		"xp": 678.5,
		"supplies": [5300],
		"image": "Snapdragon",
	},
	{
		"item": "Cadantine",
		"itemID": 265,
		"level": 67,
		"xp": 826.5,
		"supplies": [5301],
		"image": "Cadantine",
	},
	{
		"item": "Lantadyme",
		"itemID": 2481,
		"level": 73,
		"xp": 1043.5,
		"supplies": [5302],
		"image": "Lantadyme",
	},
	{
		"item": "Dwarf weed",
		"itemID": 267,
		"level": 79,
		"xp": 1322.5,
		"supplies": [5303],
		"image": "Dwarf weed",
	},
	{
		"item": "Torstol",
		"itemID": 269,
		"level": 85,
		"xp": 1546.5,
		"supplies": [5304],
		"image": "Torstol",
	},
	{
		"item": "Oak tree",
		"itemID": 5312,
		"level": 15,
		"xp": 481.3,
		"supplies": [5312],
		"image": "Acorn 5",
	},
	{
		"item": "Willow tree",
		"itemID": 5313,
		"level": 30,
		"xp": 1481.5,
		"supplies": [5313],
		"image": "Willow seed 5",
	},
	{
		"item": "Maple tree",
		"itemID": 5314,
		"level": 45,
		"xp": 3448.4,
		"supplies": [5314],
		"image": "Maple seed 5",
	},
	{
		"item": "Yew tree",
		"itemID": 5315,
		"level": 60,
		"xp": 7150.9,
		"supplies": [5315],
		"image": "Yew seed 5",
	},
	{
		"item": "Magic tree",
		"itemID": 5316,
		"level": 75,
		"xp": 13913.8,
		"supplies": [5316],
		"image": "Magic seed 5",
	},
	{
		"item": "Apple tree",
		"itemID": 5283,
		"level": 27,
		"xp": 1272.5,
		"supplies": [5283],
		"image": "Apple tree seed 5",
	},
	{
		"item": "Banana tree",
		"itemID": 5284,
		"level": 33,
		"xp": 1841.5,
		"supplies": [5284],
		"image": "Banana tree seed 5",
	},
	{
		"item": "Orange tree",
		"itemID": 5285,
		"level": 39,
		"xp": 2586.7,
		"supplies": [5285],
		"image": "Orange tree seed 5",
	},
	{
		"item": "Pineapple plant",
		"itemID": 5287,
		"level": 51,
		"xp": 4791.7,
		"supplies": [5287],
		"image": "Pineapple seed 5",
	},
	{
		"item": "Papaya tree",
		"itemID": 5288,
		"level": 57,
		"xp": 6380.4,
		"supplies": [5288],
		"image": "Papaya tree seed 5",
	},
	{
		"item": "Palm tree",
		"itemID": 5289,
		"level": 68,
		"xp": 10509.6,
		"supplies": [5289],
		"image": "Palm tree seed 5",
	},
	{
		"item": "Calquat tree",
		"itemID": 5290,
		"level": 72,
		"xp": 12225.5,
		"supplies": [5290],
		"image": "Calquat tree seed 5",
	},
	{
		"item": "Papaya tree & Magic tree",
		"itemID": -1,
		"level": 75,
		"xp": 20294.2,
		"supplies": [5288, 5316],
		"image": "Papaya Magic seeds",
	},
	{
		"item": "Papaya tree, Magic tree & Calquat",
		"itemID": -1,
		"level": 75,
		"xp": 22577.3,
		"supplies": [5288, 5316, 5290],
		"image": "Papaya Magic Calquat seeds",
	},
	{
		"item": "Palm tree & Magic tree",
		"itemID": -1,
		"level": 75,
		"xp": 24423.4,
		"supplies": [5289, 5316],
		"image": "Palm Magic seeds",
	},
	{
		"item": "Palm tree, Magic tree & Calquat",
		"itemID": -1,
		"level": 75,
		"xp": 26619.5,
		"supplies": [5289, 5316, 5290],
		"image": "Palm Magic Calquat seeds",
	},
];

var currentSkillBeingDisplayed = "";

var globalPrices = [];
var prayerPrices = [];
var magicPrices = [];
var magicSuppliesPrices = [];
var runecraftingPrices = [];
var constructionPrices = [];
var agilityPrices = [];
var herblorePotionPrices = [];
var herbloreHerbPrices = [];
var herbloreSecondaryPrices = [];
var thievingPrices = [];
var craftingPrices = [];
var craftingSuppliesPrices = [];
var fletchingPrices = [];
var fletchingSuppliesPrices = [];
var hunterPrices = [];
var miningPrices = [];
var smithingPrices = [];
var smithingSuppliesPrices = [];
var fishingPrices = [];
var cookingPrices = [];
var cookingSuppliesPrices = [];
var firemakingPrices = [];
var woodcuttingPrices = [];
var farmingPrices = [];
var farmingSuppliesPrices = [];

var globalPricesOSB = [];
var prayerPricesOSB = [];
var magicPricesOSB = [];
var magicSuppliesPricesOSB = [];
var runecraftingPricesOSB = [];
var constructionPricesOSB = [];
var agilityPricesOSB = [];
var herblorePotionPricesOSB = [];
var herbloreHerbPricesOSB = [];
var herbloreSecondaryPricesOSB = [];
var thievingPricesOSB = [];
var craftingPricesOSB = [];
var craftingSuppliesPricesOSB = [];
var fletchingPricesOSB = [];
var fletchingSuppliesPricesOSB = [];
var hunterPricesOSB = [];
var miningPricesOSB = [];
var smithingPricesOSB = [];
var smithingSuppliesPricesOSB = [];
var fishingPricesOSB = [];
var cookingPricesOSB = [];
var cookingSuppliesPricesOSB = [];
var firemakingPricesOSB = [];
var woodcuttingPricesOSB = [];
var farmingPricesOSB = [];
var farmingSuppliesPricesOSB = [];

var xp = [0, 0, 83, 174, 276, 388, 512, 650, 801, 969, 1154, 1358, 1584, 1833, 2107, 2411, 2746, 3115, 3523, 3973, 4470, 5018, 5624, 6291, 7028, 7842, 8740, 9730, 10824, 12031, 13363, 14833, 16456, 18247, 20224, 22406, 24815, 27473, 30408, 33648, 37224, 41171, 45529, 50339, 55649, 61512, 67983, 75127, 83014, 91721, 101333, 111945, 123660, 136594, 150872, 166636, 184040, 203254, 224466, 247886, 273742, 302288, 333804, 368599, 407015, 449428, 496254, 547953, 605032, 668051, 737627, 814445, 899257, 992895, 1096278, 1210421, 1336443, 1475581, 1629200, 1798808, 1986068, 2192818, 2421087, 2673114, 2951373, 3258594, 3597792, 3972294, 4385776, 4842295, 5346332, 5902831, 6517253, 7195629, 7944614, 8771558, 9684577, 10692629, 11805606, 13034431, 14391160, 15889109, 17542976, 19368992, 21385073, 23611006, 26068632, 28782069, 31777943, 35085654, 38737661, 42769801, 47221641, 52136869, 57563718, 63555443, 70170840, 77474828, 85539082, 94442737, 104273167, 115126838, 127110260, 140341028, 154948977, 171077457, 188884740];

var player = "";
var playerName = "";
var includeCostOfSupplies = false;
var runecraftingPouchesBeingUsed = [];
runecraftingPouchesBeingUsed["sm"] = false;
runecraftingPouchesBeingUsed["md"] = false;
runecraftingPouchesBeingUsed["lg"] = false;
runecraftingPouchesBeingUsed["gt"] = false;

var useOSBPrices = false;
var gamemodeXpMultiplier = 1;

function displayGpXp(skill) {
	// if (currentSkillBeingDisplayed == skill) {}
	// else {
		currentSkillBeingDisplayed = skill;

		var skillArray = -1;

		skillArray = getMethodArray(skill);

		var size = skillArray.length;
		if (size > 0) {}
		else {
			console.log("skillArray < 0");
		}
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < size; i++) {
			var row = "";
			var currentItem = skillArray[i].item;
			if (currentSkillBeingDisplayed == "magic" ||
				currentSkillBeingDisplayed == "cooking") {
				var imgLink = currentItem;
				// handles some items having () in the name, i.e. "Plank Make (mahogany)" and only puts the 
				// "Plank Make" as the image link
				if (currentItem.indexOf("(") != -1) {
					imgLink = currentItem.split("(")[0];
					imgLink = imgLink.substring(0, imgLink.length-1);
				}
				row += "<div class='col-lg-3 col-md-2 col-sm-2 col-xs-2 gpxp-item'><div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 gpxp-img no-pad text-center'><a target='_blank' href='" + rswikiPrefix + replaceSpaceWithUnderscore(imgLink) + "'><img src='/assets/img/items/" + replaceSpaceWithUnderscore(skillArray[i].image) + ".png'></a></div><div class='col-lg-10 col-md-10 col-sm-10 col-sm-10 no-pad-right gpxp-method'>" + currentItem + "</div></div>";
			}
			else {
				row += "<div class='col-lg-3 col-md-2 col-sm-2 col-xs-2 gpxp-item'><div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 gpxp-img no-pad text-center'><a target='_blank' href='" + rswikiPrefix + replaceSpaceWithUnderscore(currentItem) + "'><img src='/assets/img/items/" + replaceSpaceWithUnderscore(skillArray[i].image) + ".png'></a></div><div class='col-lg-10 col-md-10 col-sm-10 col-sm-10 no-pad-right gpxp-method'>" + currentItem + "</div></div>";
			}
			row += "<div class='col-lg-1 col-md-2 col-sm-2 col-xs-2 gpxp-level text-center'>" + skillArray[i].level + "</div>";
			if (skillArray[i].xp < 0) {
				row += "<div class='col-lg-1 col-md-1 col-sm-1 col-xs-1 gpxp-xp text-center'>N/A</div>";
			}
			else {
				row += "<div class='col-lg-1 col-md-1 col-sm-1 col-xs-1 gpxp-xp text-center'>" + addCommasToNumber(skillArray[i].xp * gamemodeXpMultiplier) + "</div>";
			}
			row += "<div class='col-lg-1 col-md-1 col-sm-1 col-xs-1 gpxp-gp text-center'>-</div>";
			row += "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 gpxp-gpxp text-center'>-</div>";
			row += "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 gpxp-number text-center'>-</div>";
			row += "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 gpxp-outcome text-center'>-</div>";

			// if (currentItem == "Dragon bones" ||
			// 	currentItem == "Nature rune" ||
			// 	currentItem == "Oak plank") {

			// 	$("#gpxp-table:last-child").append("<div class='row method-row recommended'>" + row + "</div>");
			// } 
			// else {
				$("#gpxp-table:last-child").append("<div class='row method-row'>" + row + "</div>");
			// }
		}
	// }
}

function replaceSpaceWithUnderscore(string) {
	return string.replace(/ /g,"_");
}
function removeCommasFromString(string) {
	return string.replace(/[, ]+/g, "");
}

$(document).ready(function() {

	useOSBPrices = $("#gpxp-use-osb-prices-checkbox").prop("checked");

	displayGpXp(("gpxp-prayer-icon").split("-")[1]);
	$("#gpxp-prayer-icon").addClass("viewing");
	changeViewingSkill("gpxp-prayer-icon");
	setItemPrices(function() {
		populateGPPerItem(function() {
			populateGPPerXP(function() {
				populateNumberOfItems("prayer", convertToNumber($("#gpxp-current-xp").val()), convertToNumber($("#gpxp-target-xp").val()), function() {
					populateOutcome();
				});
			});
		});
	});
	$("#gpxp-include-pouches").hide();
		
	$(".gpxp-skill-img").click(function() {
		if (this.id.split("-")[1] == getCurrentViewingSkill()) {}
		else {
			changeViewingSkill(this.id);
			populateGPPerItem(function() {
				populateGPPerXP(function() {
					populateNumberOfItems(getCurrentViewingSkill(), convertToNumber($("#gpxp-current-xp").val()), convertToNumber($("#gpxp-target-xp").val()), function() {
						populateOutcome();
					});
				});
				updateRunecraftingPouchesBeingUsed($("#gpxp-current-level").val());
			});
		}
	});

	$("#gpxp-get-stats").click(function() {

		var username = $("#gpxp-username-field").val();

		if (/^[a-zA-Z0-9\s_-]+$/.test(username) == true) {
			

			// Populate dmm stats
			if ($("#gpxp-gamemode-dmm").is(":checked")) {
				getPlayerStats(username, "dmm", function() {
					gamemodeXpMultiplier = 5;
					displayGpXp(getCurrentViewingSkill());	
				});
				
			}
			else if ($("#gpxp-gamemode-sdmm").is(":checked")) {
				getPlayerStats(username, "sdmm", function() {
					gamemodeXpMultiplier = 5;
					displayGpXp(getCurrentViewingSkill());
				});
			}
			else {
				getPlayerStats(username, "os", function() {
					gamemodeXpMultiplier = 1;
					displayGpXp(getCurrentViewingSkill());
				});	
			}
		}
		else {
			$("#gpxp-username-entered").text("Error grabbing player");
			$("#gpxp-username-entered").css("background-color", "#f8d7da");
		}
	});

	$("#gpxp-username-field").keydown(function(e) {
		if (e.which == 13) {
			var username = $("#gpxp-username-field").val();

			if (/^[a-zA-Z0-9\s_-]+$/.test(username) == true) {
				
				// Populate dmm stats
				if ($("#gpxp-gamemode-dmm").is(":checked")) {
					getPlayerStats(username, "dmm");
					gamemodeXpMultiplier = 5;
					displayGpXp(getCurrentViewingSkill());
				}
				else if ($("#gpxp-gamemode-sdmm").is(":checked")) {
					getPlayerStats(username, "sdmm");
					gamemodeXpMultiplier = 5;
					displayGpXp(getCurrentViewingSkill());
				}
				else {
					getPlayerStats(username, "os");	
					gamemodeXpMultiplier = 1;
					displayGpXp(getCurrentViewingSkill());
				}
			}
			else {
				$("#gpxp-username-entered").text("Error grabbing player");
				$("#gpxp-username-entered").css("background-color", "#f8d7da");	
			}
		}
	});

	// detect current xp/level and target xp/level changes
	$('#gpxp-current-xp').on('keyup', function(e) {
		displayGpXp(getCurrentViewingSkill());
		// if the current xp is greater than the current level, upadate the level
		var curXp = convertToNumber($("#gpxp-current-xp").val());
		if (curXp >= 0 && curXp <= 200000000) {
			$("#gpxp-current-level").val(getNextLevelFromXP(curXp));
			var curLvl = convertToNumber($("#gpxp-current-level").val());
			var tarXp = convertToNumber($("#gpxp-target-xp").val());
			if (curXp >= tarXp) {
				$("#gpxp-target-xp").val(xp[getNextLevelFromXP(curXp) + 1]);
				$("#gpxp-target-level").val(getNextLevelFromXP(curXp) + 1);
			}
			populateGPPerItem(function() {
				populateGPPerXP(function() {
					populateNumberOfItems(getCurrentViewingSkill(), curXp, tarXp, function() {
						populateOutcome();
					});
				});
			});
		}

	});
	$('#gpxp-current-level').on('keyup', function(e) {
		displayGpXp(getCurrentViewingSkill());
		var curLvl = convertToNumber($("#gpxp-current-level").val());
		var tarLvl = convertToNumber($("#gpxp-target-level").val());

		if (curLvl > 0 && curLvl < 127) {
			if (e.which == 9) {}
			else {
				if (e.which == 16) {}
				else {
					$("#gpxp-current-xp").val(xp[curLvl]);
					var curXp = convertToNumber($("#gpxp-current-xp").val());
					if (curLvl >= tarLvl) {
						if (curLvl < 126) {
							$("#gpxp-target-xp").val(xp[curLvl + 1]);
							$("#gpxp-target-level").val(curLvl + 1);
						}
						else {
							$("#gpxp-target-xp").val(xp[curLvl]);
							$("#gpxp-target-level").val(curLvl);
						}
					}
					var tarXp = convertToNumber($("#gpxp-target-xp").val());
					populateGPPerItem(function() {
						populateGPPerXP(function() {
							populateNumberOfItems(getCurrentViewingSkill(), curXp, tarXp, function() {
								populateOutcome();
							});
						});
					});
				}
			}
		}

	});
	$('#gpxp-target-xp').on('keyup', function(e) {
		displayGpXp(getCurrentViewingSkill());
		var curXp = convertToNumber($("#gpxp-current-xp").val());
		var curLvl = convertToNumber($("#gpxp-current-level").val());
		var tarXp = convertToNumber($("#gpxp-target-xp").val());

		if (curXp >= 0 && curXp <= 200000000) {
			$("#gpxp-target-level").val(getNextLevelFromXP(tarXp));
			var tarLvl = convertToNumber($("#gpxp-target-level").val());
			populateGPPerItem(function() {
				populateGPPerXP(function() {
					populateNumberOfItems(getCurrentViewingSkill(), curXp, tarXp, function() {
						populateOutcome();
					});
				});
			});
		}
	});
	$('#gpxp-target-level').on('keyup', function(e) {
		displayGpXp(getCurrentViewingSkill());
		var curXp = convertToNumber($("#gpxp-current-xp").val());
		var curLvl = convertToNumber($("#gpxp-current-level").val());
		var tarLvl = convertToNumber($("#gpxp-target-level").val());
		
		if (curLvl > 0) {
			if (e.which == 9) {}
			else {
				if (e.which == 16) {}
				else {

					if (tarLvl > 126) {
						tarXp = 200000000;
						$("#gpxp-target-xp").val(tarXp);
					}
					else {
						$("#gpxp-target-xp").val(xp[tarLvl]);	
					}
					
					var tarXp = convertToNumber($("#gpxp-target-xp").val());

					populateGPPerItem(function() {
						populateGPPerXP(function() {
							populateNumberOfItems(getCurrentViewingSkill(), curXp, tarXp, function() {
								populateOutcome();
							});
						});
					});
				}
			}
		}
	});

	// ================= sorting level =================
	$("#gpxp-sort-level-ascend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-level").text();
			var d = $(b).children(".gpxp-level").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(c) - removeCommasFromString(d);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	$("#gpxp-sort-level-descend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-level").text();
			var d = $(b).children(".gpxp-level").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(d) - removeCommasFromString(c);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	// ================= sorting xp =================
	$("#gpxp-sort-xp-ascend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-xp").text();
			var d = $(b).children(".gpxp-xp").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(c) - removeCommasFromString(d);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	$("#gpxp-sort-xp-descend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-xp").text();
			var d = $(b).children(".gpxp-xp").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(d) - removeCommasFromString(c);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	// ================= sorting gp =================
	$("#gpxp-sort-gp-ascend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-gp").text();
			var d = $(b).children(".gpxp-gp").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(c) - removeCommasFromString(d);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	$("#gpxp-sort-gp-descend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-gp").text();
			var d = $(b).children(".gpxp-gp").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(d) - removeCommasFromString(c);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	// ================= sorting gp/xp =================
	$("#gpxp-sort-gpxp-ascend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-gpxp").text();
			var d = $(b).children(".gpxp-gpxp").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(c) - removeCommasFromString(d);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	$("#gpxp-sort-gpxp-descend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-gpxp").text();
			var d = $(b).children(".gpxp-gpxp").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(d) - removeCommasFromString(c);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	// ================= sorting # items =================
	$("#gpxp-sort-number-ascend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-number").text();
			var d = $(b).children(".gpxp-number").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(c) - removeCommasFromString(d);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	$("#gpxp-sort-number-descend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-number").text();
			var d = $(b).children(".gpxp-number").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(d) - removeCommasFromString(c);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	// ================= sorting outcome =================
	$("#gpxp-sort-outcome-ascend").click(function() {	
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-outcome").text();
			var d = $(b).children(".gpxp-outcome").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(c) - removeCommasFromString(d);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});
	$("#gpxp-sort-outcome-descend").click(function() {
		var rowArray = [];
		$("#gpxp-table > div:not(.method-heading)").each(function() {
			rowArray.push(this);
		});
		rowArray.sort(function(a,b) {
			var c = $(a).children(".gpxp-outcome").text();
			var d = $(b).children(".gpxp-outcome").text();
			if (c == "N/A") c = "0";
			if (d == "N/A") d = "0";
			return removeCommasFromString(d) - removeCommasFromString(c);
		});
		$("#gpxp-table").contents(':not(.method-heading)').remove();
		for (var i = 0; i < rowArray.length; i++) {
			$("#gpxp-table:last-child").append(rowArray[i]);
		}
	});

	
	/* Handle when 'use osb prices' is checked */
	$("#gpxp-use-osb-prices-checkbox").change(function() {
		displayGpXp(getCurrentViewingSkill());
		var curXp = convertToNumber($("#gpxp-current-xp").val());
		var curLvl = convertToNumber($("#gpxp-current-level").val());
		var tarXp = convertToNumber($("#gpxp-target-xp").val());
		var tarLvl = convertToNumber($("#gpxp-target-level").val());

		useOSBPrices = $("#gpxp-use-osb-prices-checkbox").prop("checked");
		populateGPPerItem(function() {
			populateGPPerXP(function() {
				populateNumberOfItems(getCurrentViewingSkill(), curXp, tarXp, function() {
					populateOutcome();
				});
			});
		});
	});
});

function updateRunecraftingPouchesBeingUsed(level) {
	if (level >= 1) {
		$("#gpxp-include-pouch-sm").prop("checked", true);
		runecraftingPouchesBeingUsed["sm"] = true;
	}
	else {
		$("#gpxp-include-pouch-sm").prop("checked", false);
		runecraftingPouchesBeingUsed["sm"] = false;
	}
	if (level >= 25) {
		$("#gpxp-include-pouch-md").prop("checked", true);
		runecraftingPouchesBeingUsed["md"] = true;
	}
	else {
		$("#gpxp-include-pouch-md").prop("checked", false);
		runecraftingPouchesBeingUsed["md"] = false;
	}
	if (level >= 50) {
		$("#gpxp-include-pouch-lg").prop("checked", true);
		runecraftingPouchesBeingUsed["lg"] = true;
	}
	else {
		$("#gpxp-include-pouch-lg").prop("checked", false);
		runecraftingPouchesBeingUsed["lg"] = false;
	}
	if (level >= 75) {
		$("#gpxp-include-pouch-gt").prop("checked", true);
		runecraftingPouchesBeingUsed["gt"] = true;
	}
	else {
		$("#gpxp-include-pouch-gt").prop("checked", false);
		runecraftingPouchesBeingUsed["gt"] = false;
	}
}

function changeViewingSkill(skill) {
	displayGpXp(skill.split("-")[1]);
	$(".skill-row span img").removeClass("viewing");
	$("#" + skill).addClass("viewing");
	if ($("#gpxp-username-field").val() != "") {
		populatePlayerStats(player, function() {
			updateRunecraftingPouchesBeingUsed($("#gpxp-current-level").val());
		});
	}

	// check if current skill being displayed can utilize checkbox or not &
	// display appropriate info
	if (currentSkillBeingDisplayed == "prayer") {
		$("#gpxp-include-pouches").hide();
		$("#gpxp-include-supplies-checkbox").show();
		$(".gpxp-include-supplies-text").text("Include cost of house tabs & marrentils");
		$("#gpxp-include-supplies-checkbox").click(function() {
			includeCostOfSupplies = $(this).is(':checked');
			populateGPPerItem(function() {
				populateGPPerXP(function() {
					populateOutcome();
				});
			});
		});
	}
	else if (currentSkillBeingDisplayed == "woodcutting") {
		$("#gpxp-include-pouches").hide();
		$("#gpxp-include-supplies-checkbox").show();
		$(".gpxp-include-supplies-text").text("Include use of infernal axe");
		$("#gpxp-include-supplies-checkbox").click(function() {
			includeCostOfSupplies = $(this).is(':checked');
			populateGPPerItem(function() {
				populateGPPerXP(function() {
					populateOutcome();
				});
			});
		});
	}
	else if (currentSkillBeingDisplayed == "construction") {
		$("#gpxp-include-pouches").hide();
		$("#gpxp-include-supplies-checkbox").show();
		$(".gpxp-include-supplies-text").text("Include cost of demon butler");
		$("#gpxp-include-supplies-checkbox").click(function() {
			includeCostOfSupplies = $(this).is(':checked');
			populateGPPerItem(function() {
				populateGPPerXP(function() {
					populateOutcome();
				});
			});
		});
	}
	else if (currentSkillBeingDisplayed == "runecrafting") {
		updateRunecraftingPouchesBeingUsed($("#gpxp-current-level").val());
		$("#gpxp-include-supplies-checkbox").hide();
		$("#gpxp-include-pouches").show();
		$(".gpxp-include-supplies-text").text("Include use of pouches:");

		// check small pouch
		$("#gpxp-include-pouch-sm").click(function() {
			if ($("#gpxp-include-pouch-sm").is(':checked') == true) {
				runecraftingPouchesBeingUsed["sm"] = true;
			}
			else {
				runecraftingPouchesBeingUsed["sm"] = false;	
			}
			populateGPPerItem(function() {
				populateGPPerXP(function() {
					populateOutcome();
				});
			});
		});
		// check medium pouch
		$("#gpxp-include-pouch-md").click(function() {
			if ($("#gpxp-include-pouch-md").is(':checked') == true) {
				runecraftingPouchesBeingUsed["md"] = true;
			}
			else {
				runecraftingPouchesBeingUsed["md"] = false;	
			}
			populateGPPerItem(function() {
				populateGPPerXP(function() {
					populateOutcome();
				});
			});
		});
		// check large pouch
		$("#gpxp-include-pouch-lg").click(function() {
			if ($("#gpxp-include-pouch-lg").is(':checked') == true) {
				runecraftingPouchesBeingUsed["lg"] = true;
			}
			else {
				runecraftingPouchesBeingUsed["lg"] = false;	
			}
			populateGPPerItem(function() {
				populateGPPerXP(function() {
					populateOutcome();
				});
			});
		});
		// check giant pouch
		$("#gpxp-include-pouch-gt").click(function() {
			if ($("#gpxp-include-pouch-gt").is(':checked') == true) {
				runecraftingPouchesBeingUsed["gt"] = true;
			}
			else {
				runecraftingPouchesBeingUsed["gt"] = false;	
			}
			populateGPPerItem(function() {
				populateGPPerXP(function() {
					populateOutcome();
				});
			});
		});

		populateGPPerItem(function() {
			populateGPPerXP(function() {
				populateOutcome();
			});
		});

			
	}
	else {
		$("#gpxp-include-supplies-checkbox").hide();
		$(".gpxp-include-supplies-text").text("");
		$("#gpxp-include-pouches").hide();
		populateGPPerItem(function() {
			populateGPPerXP(function() {
				populateOutcome();
			});
		});
	}
}

function getPlayerStats(user, gm, callback) {
	$.ajax({
		type: "POST",
		url: '../inc/global.php',
		dataType: "json",
		data: {username: user,
			   gamemode: gm},
		success: function(output) {
			$("#gpxp-username-entered").text(titleCaseString(user));
			$("#gpxp-username-entered").css("background-color", "#d4edda");
			$("#gpxp-username-entered-favorite").show();

			if (output == -1) { console.log(output); console.log("Error grabbing player stats. Success with -1.")}

			populatePlayerStats(output, function() {
				
			});
		},
		error: function(e) {
			console.log(e);
			$("#gpxp-username-entered").text("Error grabbing player");
			$("#gpxp-username-entered").css("background-color", "#f8d7da");
			$("#gpxp-username-entered-favorite").hide();

			if (e == -1) { console.log(e); console.log("Error grabbing player stats. error with -1.")}
		},
	});

	if (callback) callback();
}

function setItemPrices(callback) {

	/* GE arrays */
	var arrayGlobalIDs = createArrayOfItemIDs(globalItems);
	var arrayPrayerIDs = createArrayOfItemIDs(prayerMethods);
	var arrayMagicIDs = createArrayOfItemIDs(magicMethods);
	var arrayRunecraftingIDs = createArrayOfItemIDs(runecraftingMethods);
	var arrayConstructionIDs = createArrayOfItemIDs(constructionMethods);
	var arrayAgilityIDs = createArrayOfItemIDs(agilityMethods);
	var arrayHerblorePotionIDs = createArrayOfItemIDs(herbloreMethods);
	var arrayThievingIDs = createArrayOfItemIDs(thievingMethods);
	var arrayCraftingIDs = createArrayOfItemIDs(craftingMethods);
	var arrayFletchingIDs = createArrayOfItemIDs(fletchingMethods);
	var arrayHunterIDs = createArrayOfItemIDs(hunterMethods);
	var arrayMiningIDs = createArrayOfItemIDs(miningMethods);
	var arraySmithingIDs = createArrayOfItemIDs(smithingMethods);
	var arrayFishingIDs = createArrayOfItemIDs(fishingMethods);
	var arrayCookingIDs = createArrayOfItemIDs(cookingMethods);
	var arrayFiremakingIDs = createArrayOfItemIDs(firemakingMethods);
	var arrayWoodcuttingIDs = createArrayOfItemIDs(woodcuttingMethods);
	var arrayFarmingIDs = createArrayOfItemIDs(farmingMethods);

	var arrayMagicSuppliesIDs = createArrayOfSuppliesIDs(magicMethods);
	var arrayHerbloreHerbIDs = createArrayOfHerbIDs(herbloreMethods);
	var arrayHerbloreSecondaryIDs = createArrayOfSecondaryIDs(herbloreMethods);
	var arrayCraftingSuppliesIDs = createArrayOfSuppliesIDs(craftingMethods);
	var arrayFletchingSuppliesIDs = createArrayOfSuppliesIDs(fletchingMethods);
	var arraySmithingSuppliesIDs = createArrayOfSuppliesIDs(smithingMethods);
	var arrayCookingSuppliesIDs = createArrayOfSuppliesIDs(cookingMethods);
	var arrayFarmingSuppliesIDs = createArrayOfSuppliesIDs(farmingMethods);

	var allIDs = [arrayGlobalIDs, arrayPrayerIDs, arrayMagicIDs, arrayRunecraftingIDs, arrayConstructionIDs, arrayAgilityIDs, arrayHerblorePotionIDs, arrayThievingIDs, arrayCraftingIDs, arrayFletchingIDs, arrayHunterIDs, arrayMiningIDs, arraySmithingIDs, arrayFishingIDs, arrayCookingIDs, arrayFiremakingIDs, arrayWoodcuttingIDs, arrayFarmingIDs, arrayHerbloreHerbIDs, arrayHerbloreSecondaryIDs, arrayCraftingSuppliesIDs, arrayFletchingSuppliesIDs, arraySmithingSuppliesIDs, arrayCookingSuppliesIDs, arrayFarmingSuppliesIDs, arrayMagicSuppliesIDs];

	$.ajax({
		type: "post",
		url: "../inc/global.php",
		dataType: "JSON",
		data: { getPriceArrays: true, 
				allItemIDs: allIDs
		},
		success: function(result) {

			globalPrices = result["global"];
			magicPrices = result["magic"];
			prayerPrices = result["prayer"];
			runecraftingPrices = result["runecrafting"];
			constructionPrices = result["construction"];
			agilityPrices = result["agility"];
			herblorePotionPrices = result["herblore"];
			thievingPrices = result["thieving"];
			craftingPrices = result["crafting"];
			fletchingPrices = result["fletching"];
			hunterPrices = result["hunter"];
			miningPrices = result["mining"];
			smithingPrices = result["smithing"];
			fishingPrices = result["fishing"];
			cookingPrices = result["cooking"];
			firemakingPrices = result["firemaking"];
			woodcuttingPrices = result["woodcutting"];
			farmingPrices = result["farming"];
			herbloreHerbPrices = result["herbPrices"];
			herbloreSecondaryPrices = result["secondaryPrices"];
			craftingSuppliesPrices = result["craftingSuppliesPrices"];
			fletchingSuppliesPrices = result["fletchingSuppliesPrices"];
			smithingSuppliesPrices = result["smithingSuppliesPrices"];
			cookingSuppliesPrices = result["cookingSuppliesPrices"];
			farmingSuppliesPrices = result["farmingSuppliesPrices"];
			magicSuppliesPrices = result["magicSuppliesPrices"];
			if (callback) callback();
		},	
		error: function(e, r, s) {
			console.log(arguments);
			console.log("Error populating outcome with GE prices");
			console.log(e);
			console.log(r);
			console.log(s);
		},
	});

	/* OSB arrays */
	var allOSBIDs = [arrayGlobalIDs, arrayPrayerIDs, arrayMagicIDs, arrayRunecraftingIDs, arrayConstructionIDs, arrayAgilityIDs, arrayHerblorePotionIDs, arrayThievingIDs, arrayCraftingIDs, arrayFletchingIDs, arrayHunterIDs, arrayMiningIDs, arraySmithingIDs, arrayFishingIDs, arrayCookingIDs, arrayFiremakingIDs, arrayWoodcuttingIDs, arrayFarmingIDs, arrayHerbloreHerbIDs, arrayHerbloreSecondaryIDs, arrayCraftingSuppliesIDs, arrayFletchingSuppliesIDs, arraySmithingSuppliesIDs, arrayCookingSuppliesIDs, arrayFarmingSuppliesIDs, arrayMagicSuppliesIDs];

	$.ajax({
		type: "post",
		url: "../inc/global.php",
		dataType: "JSON",
		data: { getOSBPriceArrays: true, 
				allOSBItemIDs: allOSBIDs
		},
		success: function(result) {
			globalPricesOSB = result["global"];
			magicPricesOSB = result["magic"];
			prayerPricesOSB = result["prayer"];
			runecraftingPricesOSB = result["runecrafting"];
			constructionPricesOSB = result["construction"];
			agilityPricesOSB = result["agility"];
			herblorePotionPricesOSB = result["herblore"];
			thievingPricesOSB = result["thieving"];
			craftingPricesOSB = result["crafting"];
			fletchingPricesOSB = result["fletching"];
			hunterPricesOSB = result["hunter"];
			miningPricesOSB = result["mining"];
			smithingPricesOSB = result["smithing"];
			fishingPricesOSB = result["fishing"];
			cookingPricesOSB = result["cooking"];
			firemakingPricesOSB = result["firemaking"];
			woodcuttingPricesOSB = result["woodcutting"];
			farmingPricesOSB = result["farming"];
			herbloreHerbPricesOSB = result["herbPrices"];
			herbloreSecondaryPricesOSB = result["secondaryPrices"];
			craftingSuppliesPricesOSB = result["craftingSuppliesPrices"];
			fletchingSuppliesPricesOSB = result["fletchingSuppliesPrices"];
			smithingSuppliesPricesOSB = result["smithingSuppliesPrices"];
			cookingSuppliesPricesOSB = result["cookingSuppliesPrices"];
			farmingSuppliesPricesOSB = result["farmingSuppliesPrices"];
			magicSuppliesPricesOSB = result["magicSuppliesPrices"];

			if (callback) callback();
		},	
		error: function(request, status, error) {
			console.log("Error populating outcome with OSB prices");
			console.log(request);
			console.log(status);
			console.log(error);
		},
	});
}
function getVirtualLevels(playerObj) {

	var length = Object.keys(playerObj).length;
	for (var i = 3; i < 24*3; i+=3) {
		var skillRank = Object.keys(playerObj)[i];
		var skilllevel = Object.keys(playerObj)[i+1];
		var skillLevelText = skilllevel;
		var skillxp = Object.keys(playerObj)[i+2];

		skilllevel = convertToNumber(playerObj[skilllevel]);
		skillxp = convertToNumber(playerObj[skillxp]);

		while (skillxp > xp[skilllevel]) {
			skilllevel++;
		}
		skilllevel -= 1;
		playerObj[skillLevelText] = skilllevel;
	} 
	return playerObj;
}

function populatePlayerStats(playerSkills, callback) {
	if (playerSkills["OverallRank"] == "HTTP_TIMEOUT") {
		$("#gpxp-displaying-data-for").text("Error: No response from Runescape Highscores");
		return;
	}

	player = getVirtualLevels(playerSkills);

	playerName = $("#gpxp-username-field").val();

	var currentSkill = getCurrentViewingSkill();

	var length = Object.keys(playerSkills).length;

	for (var i = 0; i < length; i++) {

		var s = Object.keys(playerSkills)[i];

		var skillXP = (currentSkill + "XP");
		var skillLevel = (currentSkill + "Level");
		var capitalizedSkillXP = skillXP.replace(skillXP[0], skillXP[0].toUpperCase());
		var capitalizedSkillLevel = skillLevel.replace(skillLevel[0], skillLevel[0].toUpperCase());

		if (s == capitalizedSkillXP) {
			if (convertToNumber(playerSkills[capitalizedSkillXP]) == 0) {
				$("#gpxp-current-xp").val(0);
				$("#gpxp-target-xp").val(getNextLevelOrXP(1, "x"));
			}
			else {
				$("#gpxp-current-xp").val(playerSkills[capitalizedSkillXP]);
				$("#gpxp-target-xp").val(getNextLevelOrXP(playerSkills[capitalizedSkillLevel], "x"));
			}
		}	
		if (s == capitalizedSkillLevel) {
			if (convertToNumber(playerSkills[capitalizedSkillXP]) == 0) {
				$("#gpxp-current-level").val(1);
				$("#gpxp-target-level").val(getNextLevelOrXP(1, "l"));
			}
			else {
				$("#gpxp-current-level").val(playerSkills[capitalizedSkillLevel]);
				$("#gpxp-target-level").val(getNextLevelOrXP(playerSkills[capitalizedSkillLevel], "l"));
			}
		}	
	}

	// if (playerName.toLowerCase() in donators) {
	// 	$(".gpxp-data-displayed > a").remove();
	// 	var name = donators[playerName.toLowerCase()].username;
	// 	var amount = donators[playerName.toLowerCase()].amount;
	// 	var image = "";
	// 	var link = donators[playerName.toLowerCase()].link;
	// 	var data = "<a href='" + link + "' target='_blank' title='$" + amount + " donator'>";
	// 	for (var i = 0; i < donators[playerName].image.length; i++) {
	// 		image = donators[playerName].image[i];
	// 		data += "<img src='" + image + "' style='vertical-align: initial'>";
	// 	}
	// 	data += name;
	// 	$(".gpxp-data-displayed").append(data);
	// 	$("#gpxp-displaying-data-for").text("Displaying data for ");
	// }
	// else {
	// 	$(".gpxp-data-displayed > a").remove();
	// 	$("#gpxp-displaying-data-for").text("Displaying data for " + playerName);
	// }

	populateGPPerItem(function() {
		populateGPPerXP(function() {
			populateNumberOfItems(currentSkill, convertToNumber($("#gpxp-current-xp").val()), convertToNumber($("#gpxp-target-xp").val()), function() {
				populateOutcome();
			});
		});
		updateRunecraftingPouchesBeingUsed($("#gpxp-current-level").val());
	});

	if (callback) callback();
}

function populateGPPerXP(callback) {

	$("#gpxp-table > div:not(.method-heading)").each(function() {

		var GPPerItem = convertToNumber($(this).children(".gpxp-gp").text());
		var XPPerItem = convertToNumber($(this).children(".gpxp-xp").text());

		var GPPerXP = 0;

		if (isNaN(GPPerItem) || isNaN(XPPerItem)) {
			GPPerXP = "N/A";
			$(this).children(".gpxp-gpxp").text(GPPerXP);
		}
		else {
			GPPerXP = GPPerItem / XPPerItem;	
			$(this).children(".gpxp-gpxp").text(addCommasToNumber(GPPerXP.toFixed(2)));
		}
	});
	if (callback) callback();
}


function populateOutcome(callback) {
	
	$("#gpxp-table > div:not(.method-heading)").each(function() {
		var GPPerItem = convertToNumber($(this).children(".gpxp-gp").text());
		var numberOfItems = convertToNumber($(this).children(".gpxp-number").text());

		var outcome = 0;
		if (isNaN(GPPerItem)) {
			outcome = "N/A";
		}
		else {

			if (currentSkillBeingDisplayed == "construction") {

				if (includeCostOfSupplies == true) {

					var butlerCost = 10000;
					var totalPayment = 0;
					var numInventories = Math.ceil(numberOfItems / 24);

					if (numInventories >= 8) {
						var numButlerPayments = Math.floor(numInventories / 8);
						var totalPayment = butlerCost * numButlerPayments;
						outcome += totalPayment;
					}
					outcome += (GPPerItem * numberOfItems);
				}
				else {
					outcome = GPPerItem * numberOfItems;
				}
			}
			else {
				outcome = GPPerItem * numberOfItems;
			}
		}

		// profit
		if (outcome == "N/A" || isNaN(outcome)) {
			$(this).children(".gpxp-outcome").text("N/A");	
		}
		else if (outcome <= 0) {
			$(this).children(".gpxp-outcome").text(addCommasToNumber(Math.abs(outcome))).addClass("profit").removeClass("loss");	
		}
		else {
			$(this).children(".gpxp-outcome").text("-" + addCommasToNumber(outcome)).addClass("loss").removeClass("profit");	
		}

		
	});
	if (callback) callback();
}

function populateNumberOfItems(skill, currentxp, targetxp, callback) {
	// TODO: may need to remove this, who the fuck knows
	if (currentxp > targetxp) return; 
	var i = 0;

	$("#gpxp-table > div:not(.method-heading)").each(function() {
		var method = getMethodArray(skill)[i];
		var xp = method.xp;
		
		if (xp == -1) {
			xp = "N/A";
		}

		var id = method.itemID;
		var numOfItems = "N/A";

		if (xp != "N/A") {
			numOfItems = Math.ceil((convertToNumber(targetxp) - convertToNumber(currentxp)) / xp);
		}
		$(this).children(".gpxp-number").text(addCommasToNumber(numOfItems));
		
		i++;
	});
	if (callback) callback();
	
}

function populateGPPerItem(callback) {
	// var soulRune = (useOSBPrices == false) ? globalPrices[23] : globalPricesOSB[23];
	var marrentillPrice = (useOSBPrices == false) ? convertToNumber(globalPrices[0]) : globalPricesOSB[0];
	var teleportToHousePrice = (useOSBPrices == false) ? convertToNumber(globalPrices[1]) : globalPricesOSB[1];
	var pureEssencePrice = (useOSBPrices == false) ? convertToNumber(globalPrices[2]) : globalPricesOSB[2];
	var staminaPrice = (useOSBPrices == false) ? convertToNumber(globalPrices[3]) : globalPricesOSB[3];
	var vialOfWaterPrice = (useOSBPrices == false) ? convertToNumber(globalPrices[4]) : globalPricesOSB[4];
	var featherPrice = (useOSBPrices == false) ? convertToNumber(globalPrices[21]) : globalPricesOSB[21];
	var bowStringPrice = (useOSBPrices == false) ? convertToNumber(globalPrices[20]) : globalPricesOSB[20];

	var itemIndex = 0;

	$("#gpxp-table > div:not(.method-heading)").each(function() {
		var methodName = $(this).children(".gpxp-item").children(".gpxp-method").text();

		// use ge prices by default unless told otherwise
		var itemCost;
		if (useOSBPrices == false) {
			itemCost = convertToNumber(getPricesArray(currentSkillBeingDisplayed)[itemIndex]);
		}
		else {
			itemCost = convertToNumber(getOSBPricesArray(currentSkillBeingDisplayed)[itemIndex]);
		}
		var currentItem = $(this).children(".gpxp-item").children(".gpxp-method").text();

		if (currentSkillBeingDisplayed == "prayer") {
			var outcome = 0;
			if (currentItem.split(" ")[0] == "Ensouled") {
				var headType = currentItem.split(" ")[1];
				var soulRune = (useOSBPrices == false) ? globalPrices[23] : globalPricesOSB[23];
				var natureRune = (useOSBPrices == false) ? globalPrices[24] : globalPricesOSB[24];
				var bloodRune = (useOSBPrices == false) ? globalPrices[25] : globalPricesOSB[25];
				var bodyRune = (useOSBPrices == false) ? globalPrices[26] : globalPricesOSB[26];
				var soulRuneCost = 0;
				var natureRuneCost = 0;
				var bloodRuneCost = 0;
				var bodyRuneCost = 0;
				switch (headType) {
					case "goblin":
						natureRuneCost += (1 * natureRune);
						bodyRuneCost += (2 * bodyRune);
						break;
					case "monkey":
						natureRuneCost += (1 * natureRune);
						bodyRuneCost += (3 * bodyRune);
						break;
					case "imp":
						natureRuneCost += (2 * natureRune);
						bodyRuneCost += (3 * bodyRune);
						break;
					case "minotaur":
						natureRuneCost += (2 * natureRune);
						bodyRuneCost += (4 * bodyRune);
						break;
					case "scorpion":
						soulRuneCost += (1 * soulRune);
						natureRuneCost += (1 * natureRune);
						break;
					case "bear":
						soulRuneCost += (1 * soulRune);
						natureRuneCost += (1 * natureRune);
						bodyRuneCost += (1 * bodyRune);
						break;
					case "unicorn":
						soulRuneCost += (1 * soulRune);
						natureRuneCost += (1 * natureRune);
						bodyRuneCost += (2 * bodyRune);
						break;
					case "dog":
						soulRuneCost += (1 * soulRune);
						natureRuneCost += (2 * natureRune);
						bodyRuneCost += (2 * bodyRune);
						break;
					case "chaos":
						soulRuneCost += (1 * soulRune);
						natureRuneCost += (2 * natureRune);
						bodyRuneCost += (3 * bodyRune);
						break;
					case "giant":
						soulRuneCost += (1 * soulRune);
						natureRuneCost += (2 * natureRune);
						bodyRuneCost += (4 * bodyRune);
						break;
					case "ogre":
						soulRuneCost += (1 * soulRune);
						natureRuneCost += (3 * natureRune);
						bodyRuneCost += (4 * bodyRune);
						break;
					case "elf":
						soulRuneCost += (2 * soulRune);
						natureRuneCost += (2 * natureRune);
						bodyRuneCost += (2 * bodyRune);
						break;
					case "troll":
						soulRuneCost += (2 * soulRune);
						natureRuneCost += (2 * natureRune);
						bodyRuneCost += (3 * bodyRune);
						break;
					case "horror":
						soulRuneCost += (2 * soulRune);
						natureRuneCost += (2 * natureRune);
						bodyRuneCost += (4 * bodyRune);
						break;
					case "kalphite":
						soulRuneCost += (2 * soulRune);
						natureRuneCost += (3 * natureRune);
						bodyRuneCost += (4 * bodyRune);
						break;
					case "dagannoth":
						soulRuneCost += (3 * soulRune);
						natureRuneCost += (3 * natureRune);
						bodyRuneCost += (4 * bodyRune);
						break;
					case "bloodveld":
						soulRuneCost += (2 * soulRune);
						natureRuneCost += (2 * natureRune);
						bloodRuneCost += (1 * bloodRune);
						break;
					case "tzhaar":
						soulRuneCost += (2 * soulRune);
						natureRuneCost += (3 * natureRune);
						bloodRuneCost += (1 * bloodRune);
						break;
					case "demon":
						soulRuneCost += (2 * soulRune);
						natureRuneCost += (4 * natureRune);
						bloodRuneCost += (1 * bloodRune);
						break;
					case "aviansie":
						soulRuneCost += (3 * soulRune);
						natureRuneCost += (4 * natureRune);
						bloodRuneCost += (1 * bloodRune);
						break;
					case "abyssal":
						soulRuneCost += (4 * soulRune);
						natureRuneCost += (4 * natureRune);
						bloodRuneCost += (1 * bloodRune);
						break;
					case "dragon":
						soulRuneCost += (4 * soulRune);
						natureRuneCost += (4 * natureRune);
						bloodRuneCost += (2 * bloodRune);
						break;
					default:
						console.log("Ensouled head type not found: " + currentItem);
						break;
				}
				outcome = itemCost + soulRuneCost + natureRuneCost + bloodRuneCost + bodyRuneCost;
			}
			else {
				var numberOfMarrentills = 2;
				var totalMarrentillCost = marrentillPrice * numberOfMarrentills;

				if (includeCostOfSupplies == true) {
					outcome = itemCost + Math.ceil(totalMarrentillCost / 25) + Math.ceil(teleportToHousePrice / 25);
				}
				else {
					outcome = itemCost;			
				}
			}

			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "magic") {
			var itemSpecificSpellName = currentItem;
			currentItem = currentItem.split("(")[0];
			var outcome = 0;
			var suppliesCost = 0;

			suppliesLength = (useOSBPrices == false) ? magicSuppliesPrices[itemIndex].length : magicSuppliesPricesOSB[itemIndex].length;

			for (var i = 0; i < suppliesLength; i++) {
				suppliesCost += (useOSBPrices == false) ? convertToNumber(magicSuppliesPrices[itemIndex][i]) : convertToNumber(magicSuppliesPricesOSB[itemIndex][i]);
			}

			// meaning you get no return (i.e. teleporting gives nothing back)
			if (isNaN(itemCost)) itemCost = 0;
			if (removeLeadingAndTrailingSpaces(currentItem) == "High Level Alchemy") itemCost = 1536;
			else if (removeLeadingAndTrailingSpaces(currentItem) == "Plank Make") {

				/* Handle coin costs for plank make */

				if (itemSpecificSpellName == "Plank Make (mahogany)") {
					suppliesCost += 1050;
				}
				else if (itemSpecificSpellName == "Plank Make (teak)") {
					suppliesCost += 350;
				}
				else if (itemSpecificSpellName == "Plank Make (oak)") {
					suppliesCost += 175;
				}
				else if (itemSpecificSpellName == "Plank Make (regular)") {
					suppliesCost += 70;
				}
			}
			else if(removeLeadingAndTrailingSpaces(currentItem) == "Recharge Dragonstone") {
				/* We get 27 charged dragonstone items back */
				itemCost *= 27;
			}
			else if(removeLeadingAndTrailingSpaces(currentItem) == "Tan Leather") {
				itemCost *= 5;
			}

			// dragonstone recharge works for 27 items at a time

			outcome = suppliesCost - itemCost;
			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "runecrafting") {
			var outcome = 0;

			var currentLevel = $("#gpxp-current-level").val();
			
			var smallPouchBeingUsed = runecraftingPouchesBeingUsed["sm"];
			var mediumPouchBeingUsed = runecraftingPouchesBeingUsed["md"];
			var largePouchBeingUsed = runecraftingPouchesBeingUsed["lg"];
			var giantPouchBeingUsed = runecraftingPouchesBeingUsed["gt"];

			var runeMultiplierLevels = runecraftingMethods[itemIndex].multiplierLevel;

			if (currentItem == "Blood rune" || currentItem == "Soul rune") {
				outcome = 0 - itemCost;
			}
			else if (currentItem != "Blood rune" || currentItem != "Soul rune") {

				// calculate how many essence will be used per inventory
				var essencePerInventory = 28;
				smallPouchBeingUsed == true ? essencePerInventory += 2 : essencePerInventory;
				mediumPouchBeingUsed == true ? essencePerInventory += 5 : essencePerInventory;
				largePouchBeingUsed == true ? essencePerInventory += 8 : essencePerInventory;
				giantPouchBeingUsed == true ? essencePerInventory += 11 : essencePerInventory;

				var multiplier = 1;
				var nextMultiplierLevel = 0;
				// loop through multiplier levels, find index they can craft

				var multiplierIndex = 0;

				// get the current multiplier
				for (var m = 0; m <= runecraftingMethods[itemIndex].multiplierLevel.length; m++) {
					if (currentLevel >= runecraftingMethods[itemIndex].multiplierLevel[m]) {
						multiplier = runecraftingMethods[itemIndex].multiplier[m];
						multiplierIndex = m + 1;
					}
				}
				var targetLevel = convertToNumber($("#gpxp-target-level").val());

				// multiplier = 5x runes for example 
				// multiplierIndex = index of that multiplier

				currentVirtualLevel = currentLevel;

				var totalRunesMade = 0;

				while (currentVirtualLevel < targetLevel) {

					// check if the next multiplier level is past the target level
					if (typeof runecraftingMethods[itemIndex].multiplierLevel[multiplierIndex] == "undefined") {

						var xpDifference = xp[targetLevel] - xp[currentVirtualLevel];

						var differenceInRunes = Math.ceil(xpDifference / runecraftingMethods[itemIndex].xp);

						var totalRunesThisSection = differenceInRunes * multiplier;

						totalRunesMade += totalRunesThisSection;
						currentVirtualLevel = targetLevel;
					}
					else if (runecraftingMethods[itemIndex].multiplierLevel[multiplierIndex] > targetLevel) {

						var xpDifference = xp[targetLevel] - xp[currentVirtualLevel];

						var differenceInRunes = Math.ceil(xpDifference / runecraftingMethods[itemIndex].xp);

						var totalRunesThisSection = differenceInRunes * multiplier;

						totalRunesMade += totalRunesThisSection;
						currentVirtualLevel = targetLevel;
					}
					else {
						var nextLevel = runecraftingMethods[itemIndex].multiplierLevel[multiplierIndex];

						var xpDifference = xp[nextLevel] - xp[currentVirtualLevel];

						var differenceInRunes = Math.ceil(xpDifference / runecraftingMethods[itemIndex].xp);

						var totalRunesThisSection = differenceInRunes * multiplier;

						totalRunesMade += totalRunesThisSection;

						currentVirtualLevel = nextLevel;
						multiplier = runecraftingMethods[itemIndex].multiplier[multiplierIndex];
						multiplierIndex++;
					}	
				}

				var xpDiff = xp[targetLevel] - xp[currentLevel];
				var totalEssenceNeeded = Math.ceil(xpDiff / runecraftingMethods[itemIndex].xp);

				/* Account for earth runes / talisman in inventory */
				if (currentItem == "Lava rune") {
					essencePerInventory--;
				}
				var numberOfTrips = Math.ceil(totalEssenceNeeded / essencePerInventory);
				var numberOfStaminas = Math.ceil(numberOfTrips / 8); // divide by 4 cause 4 doses, divide by 2 since use every other trip

				var costOfSupplies = convertToNumber((staminaPrice * numberOfStaminas) + (pureEssencePrice * totalEssenceNeeded));

				var profitOfRunes = (useOSBPrices == false) ? totalRunesMade * runecraftingPrices[itemIndex] : totalRunesMade * runecraftingPricesOSB[itemIndex];

				if (currentItem == "Fire rune") {

					var ringOfDueling8Price = (useOSBPrices == false) ? globalPrices[27] : globalPricesOSB[27];

					costOfSupplies += Math.ceil(numberOfTrips / 8) * ringOfDueling8Price;
				}
				else if (currentItem == "Lava rune") {
					var ringOfDueling8Price = (useOSBPrices == false) ? globalPrices[27] : globalPricesOSB[27];
					var bindingNecklacePrice = (useOSBPrices == false) ? globalPrices[28] : globalPricesOSB[28];
					var magicImbuePrice /* just an 2 x astral */= (useOSBPrices == false) ? (runecraftingPrices[9] * 2) : (runecraftingPricesOSB[9] * 2);	

					// assumes using other method to bank (not duel ring)
					costOfSupplies += Math.ceil(numberOfTrips / 8) * ringOfDueling8Price;

					// 16 uses, but one per click. 2 clicks per inventory
					costOfSupplies += Math.ceil((numberOfTrips / 16) * 2) * bindingNecklacePrice;

					costOfSupplies += Math.ceil(numberOfTrips * magicImbuePrice);
				}
				else if (currentItem == "Astral rune") {
					
					// assumes using other method to bank (not duel ring)
					var lawRunePrice = convertToNumber((useOSBPrices == false) ? (runecraftingPrices[11]) : (runecraftingPricesOSB[11]));
					var astralRunePrice = convertToNumber((useOSBPrices == false) ? (runecraftingPrices[9]) : (runecraftingPricesOSB[9]));

					// include moonclan teleport
					costOfSupplies += lawRunePrice;
					costOfSupplies += astralRunePrice;

				}

				if (totalEssenceNeeded == 0) outcome = 0;
				else outcome = Math.ceil((costOfSupplies - profitOfRunes) / totalEssenceNeeded);
			}
			

			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));

		}
		else if (currentSkillBeingDisplayed == "construction") {
			var outcome = 0;

			if (!currentItem.indexOf(("storage unit").toLowerCase()) !== -1) {
				outcome = itemCost;
			}

			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "agility") {
			var outcome = 0;
			outcome = 0 - itemCost;
			outcome *= 10;
			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "herblore") {
			var outcome = 0;
			var currentItem = $(this).children(".gpxp-item").children(".gpxp-method").text();
			var indexOfCurrentItem = getIndexOfCurrentItem(currentItem, herbloreMethods);
			var priceOfHerb = (useOSBPrices == false) ? convertToNumber(herbloreHerbPrices[indexOfCurrentItem]) : convertToNumber(herbloreHerbPricesOSB[indexOfCurrentItem]);
			var priceOfSecondary = (useOSBPrices == false) ? convertToNumber(herbloreSecondaryPrices[indexOfCurrentItem]) : convertToNumber(herbloreSecondaryPricesOSB[indexOfCurrentItem]);
			var totalCostOfSecondaries = 0;
			var priceOfUnfPotion = 200;

			suppliesLength = (useOSBPrices == false) ? herbloreSecondaryPrices[itemIndex].length : herbloreSecondaryPricesOSB[itemIndex].length;			

			for (var i = 0; i < suppliesLength; i++) {
				totalCostOfSecondaries += (useOSBPrices == false) ? convertToNumber(herbloreSecondaryPrices[itemIndex][i]) : convertToNumber(herbloreSecondaryPricesOSB[itemIndex][i]);
			}

			if (currentItem == "Super combat potion") {
				totalMaterialCost = priceOfHerb + totalCostOfSecondaries;
			}
			else if (currentItem == "Super antifire potion") {
				totalMaterialCost = totalCostOfSecondaries;
			}
			else if (currentItem == "Stamina potion") {
				/* 					priceOfHerb is a super energy (4) and we mult by 4 since 4 amylase per (4) dose */
				totalMaterialCost = priceOfHerb + (totalCostOfSecondaries * 4);
			}
			else if (currentItem == "Anti-venom") {
				/* 5 scales per dose, assume 4 doses */
				totalCostOfSecondaries *= 20;
				totalMaterialCost = priceOfHerb + totalCostOfSecondaries;
			}
			else if (currentItem == "Extended antifire") {
				/* 					priceOfHerb is a antifire (4) + 4 scales per (4) dose */
				totalMaterialCost = priceOfHerb + (totalCostOfSecondaries * 4);
			}
			else if (currentItem == "Extended super antifire") {
				totalMaterialCost = priceOfHerb + (totalCostOfSecondaries * 4);
			}
			else {
				totalCostOfSecondaries = priceOfSecondary;
				totalMaterialCost = priceOfHerb + totalCostOfSecondaries + priceOfUnfPotion + vialOfWaterPrice;
			}

			totalPotionCost = (useOSBPrices == false) ? herblorePotionPrices[indexOfCurrentItem] : herblorePotionPricesOSB[indexOfCurrentItem];
			outcome = totalMaterialCost - totalPotionCost;

			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "thieving") {
			if (methodName == "Knight of Ardougne") {
				$(this).children(".gpxp-gp").text(-50);
			}
			else if (methodName == "Maple Blackjack") {
				$(this).children(".gpxp-gp").text(-60);
			}
			else {
				outcome = itemCost;
				$(this).children(".gpxp-gp").text("N/A");
			}
		}
		else if (currentSkillBeingDisplayed == "crafting") {
			var finishedProductPrice = itemCost;
			var outcome = 0;
			var supplies = (useOSBPrices == false) ? craftingSuppliesPrices[itemIndex] : craftingSuppliesPricesOSB[itemIndex];
			var totalSuppliesCost = 0;
			
			for (var i = 0; i < supplies.length; i++) {
				totalSuppliesCost += convertToNumber(supplies[i]);
				if (methodName == "Green d'hide body" || methodName == "Blue d'hide body" ||
					methodName == "Red d'hide body" || methodName == "Black d'hide body") {
					totalSuppliesCost *= 3;
				}
				else if (methodName == "Amethyst bolt tips" || methodName == "Amethyst arrowtips" ||
					methodName == "Amethyst javelin heads") {
					finishedProductPrice *= 15;
				}
			}	
			outcome = totalSuppliesCost - finishedProductPrice;
			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "fletching") {
			var outcome = 0;
			var finishedProductPrice = itemCost;
			var totalSuppliesCost = 0;

			

			suppliesLength = (useOSBPrices == false) ? fletchingSuppliesPrices[itemIndex].length : fletchingSuppliesPricesOSB[itemIndex].length;

			for (var i = 0; i < suppliesLength; i++) {
				totalSuppliesCost += (useOSBPrices == false) ? convertToNumber(fletchingSuppliesPrices[itemIndex][i]) : convertToNumber(fletchingSuppliesPricesOSB[itemIndex][i]);
			}

			if (currentItem == "Broad arrow") {
				totalSuppliesCost += Math.floor(5500 / 100); // 100 arrowheads for 5500 gp
				finishedProductPrice = 0;
			}

			outcome = totalSuppliesCost - finishedProductPrice;
			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "hunter") {
			var outcome = 0;

			if (currentItem == "Lucky impling") {
				outcome = "N/A";
			}
			else {
				outcome = 0 - itemCost;
			}

			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "mining") {
			var outcome = 0;
			if (isNaN(itemCost) || itemCost == "N/A") {
				outcome = "N/A";
			}
			else {
				outcome = 0 - itemCost;
			}

			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "smithing") {
			var outcome = 0;
			var finishedProductPrice = itemCost;
			var suppliesCost = 0;

			suppliesLength = (useOSBPrices == false) ? smithingSuppliesPrices[itemIndex].length : smithingSuppliesPricesOSB[itemIndex].length;

			for (var i = 0; i < suppliesLength; i++) {
				suppliesCost += (useOSBPrices == false) ? convertToNumber(smithingSuppliesPrices[itemIndex][i]) : convertToNumber(smithingSuppliesPricesOSB[itemIndex][i]);
			}

			// handle multiple supplies
			if (currentItem == "Steel platebody" || currentItem == "Adamant platebody") {
				suppliesCost *= 5;
			}
			else if (currentItem == "Rune platelegs" || currentItem == "Rune plateskirt" || currentItem == "Rune 2h sword") {
				suppliesCost *= 3;
			}

			// handle multiple product
			if (currentItem == "Cannonball") {
				finishedProductPrice *= 4;
			}
			else if (currentItem.indexOf("dart tip") !== -1) {
				finishedProductPrice *= 10;
			}

			outcome = suppliesCost - finishedProductPrice;
			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "fishing") {
			var outcome = 0;
			var rawSalmonPrice = (useOSBPrices == false) ? convertToNumber(globalPrices[22]) : convertToNumber(globalPricesOSB[22]);

			if (currentItem == "Fly fishing") {
				// 0.57 trout, 0.43 salmon
				outcome += featherPrice;
				outcome -= Math.ceil(itemCost * 0.57); 		
				outcome -= Math.ceil(rawSalmonPrice * 0.43); 
			}
			else if (currentItem == "Barbarian fishing") {
				outcome += featherPrice;
			}
			else if (currentItem == "Sacred eel") {
				// TODO find avg number of scales at levels
				outcome -= (5 * itemCost);
			}
			else if (currentItem == "Infernal eel") {
				var onyxBoltPrice = (useOSBPrices == false) ? convertToNumber(globalPrices[29]) : convertToNumber(globalPricesOSB[29]);
				var lavaScaleShardPrice = (useOSBPrices == false) ? convertToNumber(globalPrices[30]) : convertToNumber(globalPricesOSB[30]);
				var uncutOnyxPrice = (useOSBPrices == false) ? convertToNumber(globalPrices[30]) : convertToNumber(globalPricesOSB[31]);

				// Onyx bolt chance 1/16 16/192
				outcome =  -(onyxBoltPrice * 0.0625);

				// Lava scale shard change 1/12 12/192
				outcome -= lavaScaleShardPrice * 0.08333;

				// Percentage of an uncot onyx you get 164/192
				outcome -= uncutOnyxPrice * 0.000057692 * (164 / 192);

				outcome = outcome.toFixed(0);

			}
			else {
				outcome = 0 - itemCost;
			}
			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));
		}
		else if (currentSkillBeingDisplayed == "cooking") {

			var outcome = 0;
			var suppliesCost = 0;

			var suppliesLength = (useOSBPrices == false) ? cookingSuppliesPrices[itemIndex].length : cookingSuppliesPricesOSB[itemIndex].length;

			for (var i = 0; i < suppliesLength; i++) {
				suppliesCost += (useOSBPrices == false) ? convertToNumber(cookingSuppliesPrices[itemIndex][i]) : convertToNumber(cookingSuppliesPricesOSB[itemIndex][i]);
			}
			if (currentItem == "Sacred eel") {
				itemCost *= 5;
			}
			outcome = suppliesCost - itemCost;

			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));

		}
		else if (currentSkillBeingDisplayed == "woodcutting") {
			var outcome = 0;

			// check if 1/3 of the logs will be burned and subtract from profit
			if (includeCostOfSupplies == true) {
				outcome = 0 - itemCost;
				outcome /= 3;
				outcome *= 2;	
			}
			else {
				outcome = 0 - itemCost;
			}

			$(this).children(".gpxp-gp").text(addCommasToNumber(Math.ceil(outcome)));
		}
		else if (currentSkillBeingDisplayed == "farming") {

			var outcome = 0;
			var suppliesCost = 0;
			
			suppliesCost += (useOSBPrices == false) ? convertToNumber(farmingSuppliesPrices[itemIndex][0]) : convertToNumber(farmingSuppliesPricesOSB[itemIndex][0]);

			if (currentItem == "Palm tree & Magic tree" || currentItem == "Papaya tree & Magic tree") {
				// recalc supplies
				suppliesCost = 0;

				arr = (useOSBPrices == false) ? farmingSuppliesPrices[itemIndex] : farmingSuppliesPricesOSB[itemIndex];

				for (var i = 0; i < arr.length; i++) {
					suppliesCost += convertToNumber(arr[i]);
				}

				// 400 = payment for cutting down both trees
				outcome = suppliesCost + 400;
			}
			else if (currentItem == "Palm tree, Magic tree & Calquat" || currentItem == "Papaya tree, Magic tree & Calquat") {
				// recalc supplies
				suppliesCost = 0;

				arr = (useOSBPrices == false) ? farmingSuppliesPrices[itemIndex] : farmingSuppliesPricesOSB[itemIndex];

				// loop to length - 1 so we dont count calquat
				for (var i = 0; i < arr.length - 1; i++) {
					suppliesCost += convertToNumber(arr[i]);
				}

				// manually add calquat as 1/5th since we do 1 calquat per 5 other trees
				suppliesCost += Math.floor(arr[arr.length - 1] / 5);
				// 400 = payment for cutting down all both trees
				outcome = suppliesCost + 600;
			}
			// is tree seed, always a loss
			else if (currentItem.indexOf("tree") >= 0 || currentItem.indexOf("plant") >= 0) {
				outcome = itemCost + 200;
			}
			else {
				// accounts for 6 herbs per seed
				outcome = suppliesCost - (8.1 * itemCost);
			}
			$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));

		}
		else {
			var outcome = 0;
			outcome = itemCost;
			if (isNaN(outcome)) {
				$(this).children(".gpxp-gp").text("N/A");
			}	
			else {
				$(this).children(".gpxp-gp").text(addCommasToNumber(outcome));	
			}
		}

		itemIndex++;
	});
	if (callback) callback();
}

function getMethodArray(skill) {
	switch (skill) {
		case "prayer":
			return prayerMethods;
			break;
		case "magic":
			return magicMethods;
			break;
		case "runecrafting":
			return runecraftingMethods;
			break;
		case "construction":
			return constructionMethods;
			break;
		case "agility":
			return agilityMethods;
			break;
		case "herblore":
			return herbloreMethods;
			break;
		case "thieving":
			return thievingMethods;
			break;
		case "crafting":
			return craftingMethods;
			break;
		case "fletching":
			return fletchingMethods;
			break;
		case "hunter":
			return hunterMethods;
			break;
		case "mining":
			return miningMethods;
			break;
		case "smithing":
			return smithingMethods;
			break;
		case "fishing":
			return fishingMethods;
			break;
		case "cooking":
			return cookingMethods;
			break;
		case "firemaking":
			return firemakingMethods;
			break;
		case "woodcutting":
			return woodcuttingMethods;
			break;
		case "farming":
			return farmingMethods;
			break;
		default:
			console.log("Skill not found");
			break;
	}
}

function getPricesArray(skill) {
	switch (skill) {
		case "prayer":
			return prayerPrices;
			break;
		case "magic":
			return magicPrices;
			break;
		case "runecrafting":
			return runecraftingPrices;
			break;
		case "construction":
			return constructionPrices;
			break;
		case "agility":
			return agilityPrices;
			break;
		case "herblore":
			return herblorePotionPrices;
			break;
		case "thieving":
			return thievingPrices;
			break;
		case "crafting":
			return craftingPrices;
			break;
		case "fletching":
			return fletchingPrices;
			break;
		case "hunter":
			return hunterPrices;
			break;
		case "mining":
			return miningPrices;
			break;
		case "smithing":
			return smithingPrices;
			break;
		case "fishing":
			return fishingPrices;
			break;
		case "cooking":
			return cookingPrices;
			break;
		case "firemaking":
			return firemakingPrices;
			break;
		case "woodcutting":
			return woodcuttingPrices;
			break;
		case "farming":
			return farmingPrices;
			break;
		default:
			console.log("Skill not found");
			break;
	}
}

function getOSBPricesArray(skill) {
	switch (skill) {
		case "prayer":
			return prayerPricesOSB;
			break;
		case "magic":
			return magicPricesOSB;
			break;
		case "runecrafting":
			return runecraftingPricesOSB;
			break;
		case "construction":
			return constructionPricesOSB;
			break;
		case "agility":
			return agilityPricesOSB;
			break;
		case "herblore":
			return herblorePotionPricesOSB;
			break;
		case "thieving":
			return thievingPricesOSB;
			break;
		case "crafting":
			return craftingPricesOSB;
			break;
		case "fletching":
			return fletchingPricesOSB;
			break;
		case "hunter":
			return hunterPricesOSB;
			break;
		case "mining":
			return miningPricesOSB;
			break;
		case "smithing":
			return smithingPricesOSB;
			break;
		case "fishing":
			return fishingPricesOSB;
			break;
		case "cooking":
			return cookingPricesOSB;
			break;
		case "firemaking":
			return firemakingPricesOSB;
			break;
		case "woodcutting":
			return woodcuttingPricesOSB;
			break;
		case "farming":
			return farmingPricesOSB;
			break;
		default:
			console.log("Skill not found");
			break;
	}
}

function convertToNumber(x) {
	if (typeof x == "string") {
		x = x.replace(/\,/g,'');
	}
	return parseInt(x);
}

function getNextLevelOrXP(level, xl) {
	if (xl == "x") {
		return xp[Number(level) + Number(1)];
	}	
	else {
		return Number(level) + Number(1);
	}
}

function getNextLevelFromXP(x) {
	var nextLevel = 0;
	for (var i = 1; i < xp.length; i++) {
		if (xp[i] <= x) {
			nextLevel++;
		}
	}
	return nextLevel;
}

function addCommasToNumber(n) {
	return n.toLocaleString();
}

function createArrayOfItemIDs(skillArray) {
	arrayOfIDs = [];
	for (var i = 0; i < skillArray.length; i++) {
		arrayOfIDs.push(skillArray[i].itemID);
	}
	return arrayOfIDs;
}
function createArrayOfHerbIDs(skillArray) {
	arrayOfIDs = [];
	for (var i = 0; i < skillArray.length; i++) {
		arrayOfIDs.push(skillArray[i].herbID);
	}
	return arrayOfIDs;
}
function createArrayOfSecondaryIDs(skillArray) {
	arrayOfIDs = [];
	for (var i = 0; i < skillArray.length; i++) {
		arrayOfIDs.push(skillArray[i].secondaryID);
	}
	return arrayOfIDs;
}
function createArrayOfSuppliesIDs(skillArray) {
	arrayOfIDs = [];
	for (var i = 0; i < skillArray.length; i++) {
		arrayOfIDs.push(skillArray[i].supplies);
	}
	return arrayOfIDs;
}
function getCurrentViewingSkill() {
	var e = document.getElementsByClassName("viewing")[0].id;
	var cs = e.split("-")[1];
	return cs;
}

function getIndexOfCurrentItem(item, skillArray) {

	var index = 0;
	for (var i = 0; i < skillArray.length; i++) {
		if (skillArray[i].item == item) return index;
		else index++;
	}
}

function removeLeadingAndTrailingSpaces(string) {
	return string.trim();
}