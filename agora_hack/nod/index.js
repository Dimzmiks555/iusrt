var stringSimilarity = require("string-similarity");


let gg = [{
    'product_id': '0007302f2fe1d54d',
    'name': 'Классическая сплит-система ROYAL CLIMA PANDORA RC-PD28HN, для комнат до 28 кв.метра, настенный кондиционер для дома/офиса, комплект',
    'is_reference': false,
    'reference_id': 'f497219eb0077f84',
    'ref': {
        'product_id': 'f497219eb0077f84',
        'name': 'Сплит-система Royal Clima RC-PD28HN, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0083dddef6bc6503',
    'name': 'Lenovo 62A8KAT1EU Монитор',
    'is_reference': false,
    'reference_id': '8f9c8fcf9cb2862c',
    'ref': {
        'product_id': '8f9c8fcf9cb2862c',
        'name': '23.8" Монитор Lenovo C24-20, 1920x1080, *VA, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0089cfc44012ac3c',
    'name': 'Наушники Xiaomi Buds 3 Black',
    'is_reference': false,
    'reference_id': 'f4d135a1d7a3b3a0',
    'ref': {
        'product_id': 'f4d135a1d7a3b3a0',
        'name': 'Беспроводные наушники Xiaomi Buds 3 M2111E1 Черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '00d03054afa45fdf',
    'name': 'Газовая Плита Гефест ПГ 700-02 Газовая Плита Гефест ПГ 700-02',
    'is_reference': false,
    'reference_id': '116c9e6140857b4b',
    'ref': {
        'product_id': '116c9e6140857b4b',
        'name': 'Газовая плита GEFEST 700-02, коричневый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '00d094e2dbd04434',
    'name': 'Ноутбук Lenovo IdeaPad L340-15API 81LW00A3RK 300U/8GB/128GB SSD/Radeon Vega 3/15.6" Full HD/Wi-Fi/B/cam/no ОС/чёрный',
    'is_reference': false,
    'reference_id': 'db2864373795ea53',
    'ref': {
        'product_id': 'db2864373795ea53',
        'name': '15.6" Ноутбук Lenovo Ideapad L340-15API 1920x1080, AMD Athlon 300U 2.4 ГГц, SSD 128 ГБ, AMD Radeon Vega 3, без ОС, 81LW00A3RK, granite black',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '00d72c9fe99ed892',
    'name': 'Видеокарта MSI PCI-E GeForce GTX 1050 Ti 4GT OC nVidia GeForce GTX 1050TI 4096Mb 128bit GDDR5 1341/7008 DVIx1/HDMIx1/DPx1/HDCP Ret',
    'is_reference': false,
    'reference_id': '31862a08efb59198',
    'ref': {
        'product_id': '31862a08efb59198',
        'name': 'Видеокарта MSI GeForce GTX 1050 Ti 4GT OC, Retail',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '00fa8419a6d81d79',
    'name': 'Холодильник Nord NR 506 W',
    'is_reference': false,
    'reference_id': '5d3fa3ae27980116',
    'ref': {
        'product_id': '5d3fa3ae27980116',
        'name': 'Холодильник NORDFROST NR 506 W, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0105fb7b4dd8634b',
    'name': 'Видеокарта Sinotex Ninja GeForce GT 740 2 Gb (NH74NP025F)',
    'is_reference': false,
    'reference_id': 'd0c64830aa5b693c',
    'ref': {
        'product_id': 'd0c64830aa5b693c',
        'name': 'Видеокарта Sinotex Ninja GeForce GT 740 2GB (NH74NP025F), Retail',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '013d55651426863d',
    'name': 'ABC Видеокарта MSI Radeon RX 6500 XT MECH 2X 4G OC (Radeon RX 6500 XT, 4ГБ GDDR6, HDMI, DP) (PCI-E) (ret)',
    'is_reference': false,
    'reference_id': '5cd2febf56f0e483',
    'ref': {
        'product_id': '5cd2febf56f0e483',
        'name': 'Видеокарта MSI Radeon RX 6500 XT MECH 2X 4G OC, Retail',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '013d9f49a19db898',
    'name': 'Водонагреватель thermex ic 10 u, накопительный, 1.5квт, 10л, белый [эдэб01497]',
    'is_reference': false,
    'reference_id': 'd4fe7179ce05fe85',
    'ref': {
        'product_id': 'd4fe7179ce05fe85',
        'name': 'Накопительный электрический водонагреватель Thermex IC 10 U Inox Cask, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '015f996021a0a530',
    'name': 'Gembird Акустическая система стерео Gembird SPK-203, 2x3Вт, черный (ret)',
    'is_reference': false,
    'reference_id': 'a8d71ac2f5a72530',
    'ref': {
        'product_id': 'a8d71ac2f5a72530',
        'name': 'Компьютерная акустика Gembird SPK-203',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '01ca9b62958f93e1',
    'name': 'F840-100 Melitta Caffeo Barista T Smart',
    'is_reference': false,
    'reference_id': 'a05ae39cb2ace0f4',
    'ref': {
        'product_id': 'a05ae39cb2ace0f4',
        'name': 'Кофемашина Melitta Caffeo Barista T Smart',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '01e2d8af90f8a150',
    'name': 'Монитор 23.8" Lenovo C24-20 black (WVA, 1920x1080, 16:9, 178/178, 250cd/m2, 1000:1, 4ms, VGA, HDMI) (62A8KAT1EU)',
    'is_reference': false,
    'reference_id': '8f9c8fcf9cb2862c',
    'ref': {
        'product_id': '8f9c8fcf9cb2862c',
        'name': '23.8" Монитор Lenovo C24-20, 1920x1080, *VA, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0213b4e3f71ad7c2',
    'name': 'Индукционная плитка Gorenje ICE2000SP',
    'is_reference': false,
    'reference_id': 'c74b2d4c1e6a99b3',
    'ref': {
        'product_id': 'c74b2d4c1e6a99b3',
        'name': 'Индукционная плита Gorenje 566815, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '021a79af196c9475',
    'name': 'Видеокарта MSI GeForce RTX 3050 8 ГБ (RTX 3050 VENTUS 2X 8G OC), rev. 2.0 (LHR)',
    'is_reference': false,
    'reference_id': 'dbacf1a8aab6c261',
    'ref': {
        'product_id': 'dbacf1a8aab6c261',
        'name': 'Видеокарта MSI GeForce RTX 3050 VENTUS 2X 8G OC, Retail',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '021c38f14059b080',
    'name': 'Видеокарта Gigabyte PCI-E 4.0 GV-N3080GAMING OC-12GD LHR NVIDIA GeForce RTX 3080 12288Mb 320 GDDR6X 1755/19000 HDMIx2 DPx3 HDCP Ret',
    'is_reference': false,
    'reference_id': '9158a4c6707ede74',
    'ref': {
        'product_id': '9158a4c6707ede74',
        'name': 'Видеокарта GIGABYTE GeForce RTX 3080 GAMING OC 12G (GV-N3080GAMING OC-12GD), Retail',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0240c3be4a47dc1e',
    'name': 'Korting Посудомоечная машина полновстраиваемая KORTING KDI 45570',
    'is_reference': false,
    'reference_id': 'f325184a5c99c599',
    'ref': {
        'product_id': 'f325184a5c99c599',
        'name': 'Встраиваемая посудомоечная машина Korting KDI 45570, серебристый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0286b2e3b87abe15',
    'name': 'PCI-E x16 GeForce GT 1030 ASUS GT1030-SL-2G-BRK, 2GB DDR5 (RTL)',
    'is_reference': false,
    'reference_id': 'e09b76f558f1befe',
    'ref': {
        'product_id': 'e09b76f558f1befe',
        'name': 'Видеокарта ASUS GeForce GT 1030 Silent LP 2GB (GT1030-SL-2G-BRK), Retail',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '028be720c37aae99',
    'name': 'ASUS Монитор 24" ASUS VA24DQLB (90LM0541-B01370)',
    'is_reference': false,
    'reference_id': 'be85c7f8554f16c0',
    'ref': {
        'product_id': 'be85c7f8554f16c0',
        'name': '23.8" Монитор ASUS VA24DQLB, 1920x1080, 75 Гц, IPS, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0295babfe47a46b9',
    'name': 'Samsung SM-A336E Galaxy A33 5G 128 6Gb черный SM-A336EZKGMEA',
    'is_reference': false,
    'reference_id': '161fca3b6bcf5fcc',
    'ref': {
        'product_id': '161fca3b6bcf5fcc',
        'name': 'Смартфон Samsung Galaxy A33 5G 6/128 ГБ, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0298922108dfae57',
    'name': 'Видеокарта MSI PCI-E 4.0 RTX 3070 Ti GAMING X TRIO 8G NV RTX3070TI 8192Mb 256 GDDR6X 1830/19000/HDMI',
    'is_reference': false,
    'reference_id': '58330809dae8fcad',
    'ref': {
        'product_id': '58330809dae8fcad',
        'name': 'Видеокарта MSI GeForce RTX 3070 Ti GAMING X TRIO 8G, Retail',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '02aa2dcbe4ef2839',
    'name': 'Газовая плита BEKO FSS 53000 DW',
    'is_reference': false,
    'reference_id': 'debaf87e85f94b1c',
    'ref': {
        'product_id': 'debaf87e85f94b1c',
        'name': 'Комбинированная плита Beko FSS53000DW, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '02c90cd809fafba4',
    'name': 'Микроволновая печь SAMSUNG GE88SUW/BW, объем 23 л, мощность 800 Вт, гриль, электронное управление, белая',
    'is_reference': false,
    'reference_id': '35dcbf60d7bbfcee',
    'ref': {
        'product_id': '35dcbf60d7bbfcee',
        'name': 'Микроволновая печь Samsung GE88SUW/BW, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '02c9853e1de1d245',
    'name': 'Многофункциональное устройство HP Color LaserJet Pro M479fdn (W1A79A)',
    'is_reference': false,
    'reference_id': '08d814610482da4a',
    'ref': {
        'product_id': '08d814610482da4a',
        'name': 'МФУ лазерное HP Color LaserJet Pro MFP M479fdn',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '02d9a8371f1c277b',
    'name': 'Настольная плитка OLTO HP-101I 1237291',
    'is_reference': false,
    'reference_id': '74d0d86e83e8cfbd',
    'ref': {
        'product_id': '74d0d86e83e8cfbd',
        'name': 'Индукционная плита Olto HP-101I, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '031818aab675f618',
    'name': 'Наушники Redmi Buds 3 Lite M2110E1 (White) (BHR5490GL)',
    'is_reference': false,
    'reference_id': 'c24cbf788d7f1d47',
    'ref': {
        'product_id': 'c24cbf788d7f1d47',
        'name': 'Беспроводные наушники Xiaomi Redmi Buds 3 Lite, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03342f9abe116e06',
    'name': 'Сплит-система ELECTROLUX EACS-09HAT/N3 (из 2 частей), 1556533',
    'is_reference': false,
    'reference_id': 'f3e10061c5a04f2c',
    'ref': {
        'product_id': 'f3e10061c5a04f2c',
        'name': 'Сплит-система Electrolux EACS-09HAT/N3, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03744623d7138dac',
    'name': 'Электроплитка OLTO HP-101I черный',
    'is_reference': false,
    'reference_id': '74d0d86e83e8cfbd',
    'ref': {
        'product_id': '74d0d86e83e8cfbd',
        'name': 'Индукционная плита Olto HP-101I, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03885e170ec2a155',
    'name': 'Сплит система классический кондиционер Daichi AIR AIR20AVQ1/AIR20FV1',
    'is_reference': false,
    'reference_id': 'd307989eecbe7f7b',
    'ref': {
        'product_id': 'd307989eecbe7f7b',
        'name': 'Настенная сплит-система Daichi AIR AIR20AVQ1/AIR20FV1 / кондиционер',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03a1c5115743413a',
    'name': 'Монитор 25" Lenovo G25-10 черный (65fegac2eu)',
    'is_reference': false,
    'reference_id': 'a51a43ae8ef6ec5d',
    'ref': {
        'product_id': 'a51a43ae8ef6ec5d',
        'name': '24.5" Монитор Lenovo G25-10, 1920x1080, 144 Гц, TN, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03aa52316ed25ab9',
    'name': 'Индукционная настольная плитка Olto HP-101I',
    'is_reference': false,
    'reference_id': '74d0d86e83e8cfbd',
    'ref': {
        'product_id': '74d0d86e83e8cfbd',
        'name': 'Индукционная плита Olto HP-101I, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03aed7037623ee8f',
    'name': 'Процессор Intel Core I9-12900K S1700 OEM (CM8071504549230 S RL4H)',
    'is_reference': false,
    'reference_id': '92d355d0c4a7e069',
    'ref': {
        'product_id': '92d355d0c4a7e069',
        'name': 'Процессор Intel Core i9-12900K LGA1700, 16 x 3200 МГц, OEM',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03afb96ef0b20177',
    'name': 'Робот-пылесос Roborock S7 (Чёрный Global)',
    'is_reference': false,
    'reference_id': '70dda99f86242098',
    'ref': {
        'product_id': '70dda99f86242098',
        'name': 'Робот-пылесос Roborock S7 Global, black',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03bf7c9e494b4037',
    'name': 'Беспроводные наушники Xiaomi Redmi Buds 3 Lite White BHR5490GL',
    'is_reference': false,
    'reference_id': 'c24cbf788d7f1d47',
    'ref': {
        'product_id': 'c24cbf788d7f1d47',
        'name': 'Беспроводные наушники Xiaomi Redmi Buds 3 Lite, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03c1c4ff96198648',
    'name': 'Монитор LENOVO LCD 22" S22E-20 62C6KAT1EU, черный',
    'is_reference': false,
    'reference_id': '73c8a97445f43966',
    'ref': {
        'product_id': '73c8a97445f43966',
        'name': '21.5" Монитор Lenovo ThinkVision S22e-20, 1920x1080, 75 Гц, *VA, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03d20135537ed33a',
    'name': 'Настольная плита Energy EN-904В',
    'is_reference': false,
    'reference_id': '6ba3b74a1ca138cf',
    'ref': {
        'product_id': '6ba3b74a1ca138cf',
        'name': 'Электрическая плита Energy EN-904В, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03e8709e0ed82f70',
    'name': 'Посудомоечная машина Bosch SPV 6 HMX 4 MR',
    'is_reference': false,
    'reference_id': '5feb5e5d2a37e729',
    'ref': {
        'product_id': '5feb5e5d2a37e729',
        'name': 'Встраиваемая посудомоечная машина Bosch SPV6HMX4MR',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '03eaec9cede74113',
    'name': '14" Ноутбук HONOR MagicBook X 14NBR-WAI9 (1920x1080, Intel Core i3 2.1 ГГц, RAM 8 ГБ, SSD 256 ГБ, Win10 Home), 53011TVN-001, серый',
    'is_reference': false,
    'reference_id': '09824205ce94d7c9',
    'ref': {
        'product_id': '09824205ce94d7c9',
        'name': '14" Ноутбук HONOR MagicBook X 14NBR-WAI9 1920x1080, Intel Core i3 10110U 2.1 ГГц, SSD 256 ГБ, Intel UHD Graphics, Windows 10 Home, 5301AAPL, космический серый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '04072ddceda6a216',
    'name': "IdeaPad 5 Pro 14ITL6 14.0'' 2.2K (2440x1400) IPS/Intel Core i5-1135G7 2.40GHz Quad/16GB/512GB SSD/Integrated/WiFi/5.2/HD Web",
    'is_reference': false,
    'reference_id': 'a97b2ca22a6393b3',
    'ref': {
        'product_id': 'a97b2ca22a6393b3',
        'name': '14" Ноутбук Lenovo IdeaPad 5 Pro14ITL6 2240x1400, Intel Core i5 1135G7 2.4 ГГц, SSD 512 ГБ, Intel Iris Xe Graphics, Windows 10 Home, 82L3008PRK, серый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '046d69b95dd39368',
    'name': 'Встраиваемая стиральная машина KRONA KALISA 1400 8K WHITE',
    'is_reference': false,
    'reference_id': '9ebdb1e8f6e7d472',
    'ref': {
        'product_id': '9ebdb1e8f6e7d472',
        'name': 'Стиральная машина Krona Kalisa 1400 8k White, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0474b6aa18eb7d69',
    'name': 'СВЧ-печь LG MS-20R42 D',
    'is_reference': false,
    'reference_id': 'f1d7a6de205f4c9e',
    'ref': {
        'product_id': 'f1d7a6de205f4c9e',
        'name': 'Микроволновая печь LG MS20R42D, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '04f53c1522916766',
    'name': 'ABC Посудомоечная машина Gorenje GV62040, встраиваемая, 60 см, A++, AquaStop',
    'is_reference': false,
    'reference_id': '856751a358b2734a',
    'ref': {
        'product_id': '856751a358b2734a',
        'name': 'Встраиваемая посудомоечная машина Gorenje GV62040, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0544c46c585254ab',
    'name': 'Фоторамка Hyundai HYC-0101 black enamel',
    'is_reference': false,
    'reference_id': '3c096a1f539c1daf',
    'ref': {
        'product_id': '3c096a1f539c1daf',
        'name': 'Индукционная плита Hyundai HYC-0101, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '054f98bad135dc7f',
    'name': 'Планшет Samsung Galaxy Tab A8 10.5 32GB LTE Grey (SM-X205)',
    'is_reference': false,
    'reference_id': '2f92010236ee9319',
    'ref': {
        'product_id': '2f92010236ee9319',
        'name': 'Планшет Samsung Galaxy Tab A8, 3 ГБ/32 ГБ, Wi-Fi + Cellular, темно-серый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '055fc466887183f0',
    'name': 'Видеокарта Asus TUF RTX 3060ti 8Gb',
    'is_reference': false,
    'reference_id': '108edf8f1054d7d4',
    'ref': {
        'product_id': '108edf8f1054d7d4',
        'name': 'Видеокарта ASUS TUF Gaming GeForce RTX 3060 Ti V2 OC Edition 8GB (TUF-RTX3060TI-O8G-V2-GAMING), Retail',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0568dfb9f958d011',
    'name': 'Ноутбук Lenovo IdeaPad 3-15 / Ryzen 5 4500U / 4Gb / SSD 256Gb / AMD Radeon Graphics / 15,6 FHD IPS / BT Cam / No OS / Серый 81W40033RK',
    'is_reference': false,
    'reference_id': '01378fa92f901df5',
    'ref': {
        'product_id': '01378fa92f901df5',
        'name': '15.6" Ноутбук Lenovo IdeaPad 3 15ARE05 1920x1080, AMD Ryzen 5 4500U 2.3 ГГц, SSD 256 ГБ, AMD Radeon Graphics, DOS, 81W40033RK, Platinum Grey',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '05839985429a5c5a',
    'name': 'Ноутбук Lenovo 15ACH6 82K201D1RK Ryzen 5 5600H/8ГБ/256ГБ SSD/RTX 3050 4ГБ/15.6"FHD IPS 60ГЦ/DOS',
    'is_reference': false,
    'reference_id': '11777853e7c22618',
    'ref': {
        'product_id': '11777853e7c22618',
        'name': 'Ноутбук Lenovo IP Gaming 3 15ACH6 (82K201D1RK)',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '05b890aff0340900',
    'name': 'Ariston водонагреватель накопительный ariston abs andris lux 6 or 1500 вт 6 л',
    'is_reference': false,
    'reference_id': 'f3823ddbc3398737',
    'ref': {
        'product_id': 'f3823ddbc3398737',
        'name': 'Накопительный электрический водонагреватель Ariston ABS ANDRIS LUX 6 OR',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '05c3959e79069d8a',
    'name': 'Ноутбук LENOVO V15-ADA (Ryzen 5 3500U 8Gb SSD256Gb/AMD Radeon /15.6 TN/FHD (1920x1080) NoOS. grey)(82C7000YRU)',
    'is_reference': false,
    'reference_id': '2ce6f8d283aa69c5',
    'ref': {
        'product_id': '2ce6f8d283aa69c5',
        'name': '15.6" Ноутбук Lenovo V15 ADA 1920x1080, AMD Ryzen 5 3500U 2.1 ГГц, SSD 256 ГБ, AMD Radeon Vega 8, без ОС, 82C7000YRU, Iron Grey',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '05d0ee8f37865ec8',
    'name': 'LG MW-23R35GIB Микроволновая печь',
    'is_reference': false,
    'reference_id': 'd5f74488ca1cd971',
    'ref': {
        'product_id': 'd5f74488ca1cd971',
        'name': 'Микроволновая печь LG MW23R35GIB, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '060446776e81bff7',
    'name': 'Роутер D-link DIR-620S/RU/B1A',
    'is_reference': false,
    'reference_id': '1eca353c3aaa0108',
    'ref': {
        'product_id': '1eca353c3aaa0108',
        'name': 'Wi-Fi роутер D-link DIR-620S',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '06104ddeb1607bbb',
    'name': 'Процессор AMD Ryzen 9 5950X AM4 (100-000000059) (3.4GHz) OEM',
    'is_reference': false,
    'reference_id': 'f1ef51ca6bab03d3',
    'ref': {
        'product_id': 'f1ef51ca6bab03d3',
        'name': 'Процессор AMD Ryzen 9 5950X AM4, 16 x 3400 МГц, OEM',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '06407be35728ffb5',
    'name': 'Встраиваемая стиральная машина Indesit BI WMIL 71252',
    'is_reference': false,
    'reference_id': 'e5542a95bc882c43',
    'ref': {
        'product_id': 'e5542a95bc882c43',
        'name': 'Стиральная машина Indesit BI WMIL 71252, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '06746b7db596bcf8',
    'name': 'BEKO DIS 25010',
    'is_reference': false,
    'reference_id': '193e2a2bb43ac363',
    'ref': {
        'product_id': '193e2a2bb43ac363',
        'name': 'Встраиваемая посудомоечная машина Beko DIS25010, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '068fa69c1446a046',
    'name': 'Кондиционер Electrolux EACS-09HAT/N3',
    'is_reference': false,
    'reference_id': 'f3e10061c5a04f2c',
    'ref': {
        'product_id': 'f3e10061c5a04f2c',
        'name': 'Сплит-система Electrolux EACS-09HAT/N3, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '06a63d37a344489f',
    'name': 'Колонки Defender SPK-33 питание от usb, 5 Вт',
    'is_reference': false,
    'reference_id': '05cb692a7fd6c0e6',
    'ref': {
        'product_id': '05cb692a7fd6c0e6',
        'name': 'Компьютерная акустика Defender SPK 33',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '06cf3e4f54402e5e',
    'name': 'Телевизор Xiaomi Mi TV 65" L65M5-5ASP',
    'is_reference': false,
    'reference_id': '1253c3296a3c0153',
    'ref': {
        'product_id': '1253c3296a3c0153',
        'name': '65" Телевизор Xiaomi Mi TV 4S 65 T2S 2020 LED, HDR, серый стальной',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '06db57f6264dd195',
    'name': 'Смартфон Xiaomi Redmi Note 11 Pro 128Gb 8Gb голубой моноблок 3G 4G 2Sim 6.67" 1080x2400 Android 11 108Mpix 802.11 a/b/g/n/',
    'is_reference': false,
    'reference_id': 'abe138723279f9af',
    'ref': {
        'product_id': 'abe138723279f9af',
        'name': 'Смартфон Xiaomi Redmi Note 11 Pro 8/128 ГБ RU, синие звезды',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '06e0e1fda9b32fc2',
    'name': 'МФУ Pantum M6507W A4, 1200x1200 dpi, ч/б 22 стр/мин (А4), Wi-Fi, USB',
    'is_reference': false,
    'reference_id': 'f90d8061194fbf26',
    'ref': {
        'product_id': 'f90d8061194fbf26',
        'name': 'МФУ лазерное Pantum M6507W',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '070ac4bba6913891',
    'name': 'Монитор Samsung 27" S27R356FHI темно-серый IPS LED 16:9 HDMI Mat 250cd',
    'is_reference': false,
    'reference_id': 'e8ca5c0eeaa7f392',
    'ref': {
        'product_id': 'e8ca5c0eeaa7f392',
        'name': '27" Монитор Samsung S27R356FHI, 1920x1080, 75 Гц, IPS, dark blue gray',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '071c3912b1f11dd9',
    'name': 'Колонка компьютерная 2.0 Defender, SPK 33, пластик, USB, AUX, MP3, цвет: серый',
    'is_reference': false,
    'reference_id': '05cb692a7fd6c0e6',
    'ref': {
        'product_id': '05cb692a7fd6c0e6',
        'name': 'Компьютерная акустика Defender SPK 33',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '072c638be843600e',
    'name': 'Фен для волос Braun HD130 1200Вт черный',
    'is_reference': false,
    'reference_id': '81bfaff4d9a7c386',
    'ref': {
        'product_id': '81bfaff4d9a7c386',
        'name': 'Фен Braun HD 130',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0757e67c4ab08bc6',
    'name': 'Встраиваемая стиральная машина KRONA KAYA 1200 7K WHITE (KRWM107)',
    'is_reference': false,
    'reference_id': '94e5f00c4138bbf8',
    'ref': {
        'product_id': '94e5f00c4138bbf8',
        'name': 'Стиральная машина Krona Kaya 1200 7k white, белый',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '07595834e2ac11c2',
    'name': 'MARTA MT-4210 черный жемчуг электроплитка',
    'is_reference': false,
    'reference_id': '47355d644fa375b2',
    'ref': {
        'product_id': '47355d644fa375b2',
        'name': 'Электрическая плита MARTA MT-4210, черный жемчуг',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '07d75a993b4cb8ef',
    'name': 'XIAOMI Смартфон Xiaomi Redmi Note 10S 6/128GB (NFC), белый',
    'is_reference': false,
    'reference_id': '000740b6c1cc763e',
    'ref': {
        'product_id': '000740b6c1cc763e',
        'name': 'Смартфон Xiaomi Redmi Note 10S NFC 6/128 ГБ RU, белоснежная галька',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '07dd1a05a5cb1469',
    'name': 'Электроплитка Energy EN-904B черная 2-х конфорочная (спиральный ТЭН) 1.0 кВт, 140мм (158967)',
    'is_reference': false,
    'reference_id': '6ba3b74a1ca138cf',
    'ref': {
        'product_id': '6ba3b74a1ca138cf',
        'name': 'Электрическая плита Energy EN-904В, черный',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '07e20f55ecde560e',
    'name': 'Ноутбук ASUS S15 S533EA-BN410W i5-1135G7/16GB/512GB SSD/15.6" FHD IPS/Win11 Black (90NB0SF3-M002P0)',
    'is_reference': false,
    'reference_id': 'e62b831e32efcbc8',
    'ref': {
        'product_id': 'e62b831e32efcbc8',
        'name': '15.6" Ноутбук ASUS Vivobook S15 S533EA-BN410W 1920x1080, Intel Core i5 1135G7 2.4 ГГц, SSD 512 ГБ, Intel Iris Xe Graphics, Windows 11 Home, 90NB0SF3-M002P0, Indie Black & Grey',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '07fad58bc62358d6',
    'name': 'Процессор Intel Core i5-11400F CM8070804497016 Rocket Lake 6C/12T 2.6-4.4GHz (LGA1200, L3 12MB, 14nm, 65W)',
    'is_reference': false,
    'reference_id': '18a5d547a136f872',
    'ref': {
        'product_id': '18a5d547a136f872',
        'name': 'Процессор Intel Core i5-11400F LGA1200, 6 x 2600 МГц, OEM',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '0800e543055cd752',
    'name': 'Процессор Intel CPU Core i9-12900KF',
    'is_reference': false,
    'reference_id': '1d56acfbc4983b65',
    'ref': {
        'product_id': '1d56acfbc4983b65',
        'name': 'Процессор Intel Core i9-12900KF LGA1700, 16 x 3200 МГц, OEM',
        'is_reference': true,
        'reference_id': null
    }
}, {
    'product_id': '081566c0d3907412',
    'name': 'Телевизор LED 50" SAMSUNG QE50Q60ABUXRU',
    'is_reference': false,
    'reference_id': '7daa2feb09ae2f1b',
    'ref': {
        'product_id': '7daa2feb09ae2f1b',
        'name': '50" Телевизор Samsung QE50Q60ABU 2021 HDR, QLED, черный',
        'is_reference': true,
        'reference_id': null
    }
}]

gg.forEach(item => {
    let etalon_name = item['ref']['name'].toLowerCase().replace(',', '')
    let product_name = item['name'].toLowerCase().replace(',', '')

    // etalon_name = translit(etalon_name, 'ru', reversed=True)
    // product_name = translit(product_name, 'ru', reversed=True)

    let result = stringSimilarity.compareTwoStrings(etalon_name, product_name)
    console.log(etalon_name)
    console.log(product_name)
    console.log(result)
})