// Complete structured data for Unit 2: My House — Book Pages 35–41
// Source: Chinh phục Ngữ pháp và Bài tập Tiếng Anh Lớp 6 – Tập 1 – Global Success (Verified keys PDF p. 163)

export type EndingSoundCategory = 'z' | 's' | 'iz';

export interface Unit2SoundSortItem {
  id: number;
  word: string;
  ipa: string;
  meaningVi: string;
  category: EndingSoundCategory;
  ruleVi: string;
}

// Bài I (Trang 41): Phân loại 34 danh từ đuôi -s / -es vào 3 nhóm /z/, /s/, /ɪz/
export const UNIT2_SOUND_SORT_34: Unit2SoundSortItem[] = [
  // /z/ (15 words)
  { id: 1, word: 'rooms', ipa: '/ruːmz/', meaningVi: 'các căn phòng', category: 'z', ruleVi: 'Kết thúc bằng âm hữu thanh /m/ → đọc /z/.' },
  { id: 2, word: 'dogs', ipa: '/dɒɡz/', meaningVi: 'những chú chó', category: 'z', ruleVi: 'Kết thúc bằng âm hữu thanh /ɡ/ → đọc /z/.' },
  { id: 3, word: 'beds', ipa: '/bedz/', meaningVi: 'những chiếc giường', category: 'z', ruleVi: 'Kết thúc bằng âm hữu thanh /d/ → đọc /z/.' },
  { id: 4, word: 'tables', ipa: '/ˈteɪblz/', meaningVi: 'những chiếc bàn', category: 'z', ruleVi: 'Kết thúc bằng âm hữu thanh /l/ → đọc /z/.' },
  { id: 5, word: 'chairs', ipa: '/tʃeəz/', meaningVi: 'những chiếc ghế', category: 'z', ruleVi: 'Kết thúc bằng nguyên âm → đọc /z/.' },
  { id: 6, word: 'televisions', ipa: '/ˈtelɪvɪʒnz/', meaningVi: 'những chiếc ti-vi', category: 'z', ruleVi: 'Kết thúc bằng âm hữu thanh /n/ → đọc /z/.' },
  { id: 7, word: 'pictures', ipa: '/ˈpɪktʃəz/', meaningVi: 'những bức tranh', category: 'z', ruleVi: 'Kết thúc bằng nguyên âm /ə/ → đọc /z/.' },
  { id: 8, word: 'cookers', ipa: '/ˈkʊkəz/', meaningVi: 'những bếp nấu', category: 'z', ruleVi: 'Kết thúc bằng nguyên âm /ə/ → đọc /z/.' },
  { id: 9, word: 'windows', ipa: '/ˈwɪndəʊz/', meaningVi: 'những cửa sổ', category: 'z', ruleVi: 'Kết thúc bằng nguyên âm đôi /əʊ/ → đọc /z/.' },
  { id: 10, word: 'photos', ipa: '/ˈfəʊtəʊz/', meaningVi: 'những bức ảnh', category: 'z', ruleVi: 'Kết thúc bằng nguyên âm đôi /əʊ/ → đọc /z/.' },
  { id: 11, word: 'clothes', ipa: '/kləʊðz/', meaningVi: 'quần áo', category: 'z', ruleVi: 'Kết thúc bằng âm hữu thanh /ð/ → đọc /z/.' },
  { id: 12, word: 'villas', ipa: '/ˈvɪləz/', meaningVi: 'những căn biệt thự', category: 'z', ruleVi: 'Kết thúc bằng nguyên âm /ə/ → đọc /z/.' },
  { id: 13, word: 'walls', ipa: '/wɔːlz/', meaningVi: 'những bức tường', category: 'z', ruleVi: 'Kết thúc bằng âm hữu thanh /l/ → đọc /z/.' },
  { id: 14, word: 'shelves', ipa: '/ʃelvz/', meaningVi: 'những giá sách', category: 'z', ruleVi: 'Kết thúc bằng âm hữu thanh /v/ → đọc /z/.' },
  { id: 15, word: 'baths', ipa: '/bɑːðz/', meaningVi: 'những bồn tắm', category: 'z', ruleVi: 'Theo chuẩn Anh-Anh trong SGK, "baths" đọc /bɑːðz/ (nhóm /z/).' },

  // /s/ (11 words)
  { id: 16, word: 'lamps', ipa: '/læmps/', meaningVi: 'những chiếc đèn', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /p/ → đọc /s/.' },
  { id: 17, word: 'toilets', ipa: '/ˈtɔɪləts/', meaningVi: 'những nhà vệ sinh', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /t/ → đọc /s/.' },
  { id: 18, word: 'apartments', ipa: '/əˈpɑːtmənts/', meaningVi: 'những căn hộ', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /t/ → đọc /s/.' },
  { id: 19, word: 'books', ipa: '/bʊks/', meaningVi: 'những quyển sách', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /k/ → đọc /s/.' },
  { id: 20, word: 'chopsticks', ipa: '/ˈtʃɒpstɪks/', meaningVi: 'đôi đũa', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /k/ → đọc /s/.' },
  { id: 21, word: 'lights', ipa: '/laɪts/', meaningVi: 'những bóng đèn', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /t/ → đọc /s/.' },
  { id: 22, word: 'parents', ipa: '/ˈpeərənts/', meaningVi: 'bố mẹ', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /t/ → đọc /s/.' },
  { id: 23, word: 'attics', ipa: '/ˈætɪks/', meaningVi: 'những gác mái', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /k/ → đọc /s/.' },
  { id: 24, word: 'plants', ipa: '/plɑːnts/', meaningVi: 'những cây xanh', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /t/ → đọc /s/.' },
  { id: 25, word: 'tablecloths', ipa: '/ˈteɪblklɒθs/', meaningVi: 'những khăn trải bàn', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /θ/ → đọc /s/.' },
  { id: 26, word: 'tourists', ipa: '/ˈtʊərɪsts/', meaningVi: 'những khách du lịch', category: 's', ruleVi: 'Kết thúc bằng âm vô thanh /t/ → đọc /s/.' },

  // /ɪz/ (8 words)
  { id: 27, word: 'houses', ipa: '/ˈhaʊzɪz/', meaningVi: 'những ngôi nhà', category: 'iz', ruleVi: 'Ngoại lệ quan trọng: house (/s/) → houses đọc /ˈhaʊzɪz/ (nhóm /ɪz/).' },
  { id: 28, word: 'boxes', ipa: '/ˈbɒksɪz/', meaningVi: 'những chiếc hộp', category: 'iz', ruleVi: 'Tận cùng bằng -x (/ks/) → thêm -es đọc /ɪz/.' },
  { id: 29, word: 'dishes', ipa: '/ˈdɪʃɪz/', meaningVi: 'những cái đĩa', category: 'iz', ruleVi: 'Tận cùng bằng -sh (/ʃ/) → thêm -es đọc /ɪz/.' },
  { id: 30, word: 'fridges', ipa: '/ˈfrɪdʒɪz/', meaningVi: 'những tủ lạnh', category: 'iz', ruleVi: 'Tận cùng bằng -ge (/dʒ/) → đọc /ɪz/.' },
  { id: 31, word: 'vases', ipa: '/ˈvɑːzɪz/', meaningVi: 'những bình hoa', category: 'iz', ruleVi: 'Tận cùng bằng âm /z/ (-se) → đọc /ɪz/.' },
  { id: 32, word: 'wishes', ipa: '/ˈwɪʃɪz/', meaningVi: 'những điều ước', category: 'iz', ruleVi: 'Tận cùng bằng -sh (/ʃ/) → thêm -es đọc /ɪz/.' },
  { id: 33, word: 'sandwiches', ipa: '/ˈsænwɪtʃɪz/', meaningVi: 'bánh mì kẹp', category: 'iz', ruleVi: 'Tận cùng bằng -ch (/tʃ/) → thêm -es đọc /ɪz/.' },
  { id: 34, word: 'classes', ipa: '/ˈklɑːsɪz/', meaningVi: 'các lớp học', category: 'iz', ruleVi: 'Tận cùng bằng -ss (/s/) → thêm -es đọc /ɪz/.' },
];

// Deterministic textbook-like shuffled order so students can't guess by position
export const UNIT2_SOUND_SORT_ORDER = [
  1, 16, 27, 2, 17, 28, 3, 18, 29, 4, 19, 30, 5, 20, 31, 6, 21,
  32, 7, 22, 33, 8, 23, 34, 9, 24, 10, 25, 11, 26, 12, 13, 14, 15,
];

// Bài II.1 (Trang 41–42): Nhìn hình & chữ cái đầu viết 10 từ kiểu nhà & phòng
export type HouseIconKey =
  | 'country_house'
  | 'apartment'
  | 'villa'
  | 'town_house'
  | 'stilt_house'
  | 'garden'
  | 'living_room'
  | 'bedroom'
  | 'kitchen'
  | 'bathroom';

export interface HousePictureItem {
  id: number;
  iconKey: HouseIconKey;
  starterCue: string;
  answer: string;
  accepted?: string[];
  ipa: string;
  meaningVi: string;
  hintVi: string;
}

export const UNIT2_HOUSE_PICS_10: HousePictureItem[] = [
  {
    id: 1,
    iconKey: 'country_house',
    starterCue: 'c _ _ _ _ _ _  h _ _ _ _',
    answer: 'country house',
    ipa: '/ˈkʌntri haʊs/',
    meaningVi: 'nhà ở vùng quê',
    hintVi: 'Ngôi nhà mái ngói nhỏ có vườn cây và hàng rào gỗ ở nông thôn.',
  },
  {
    id: 2,
    iconKey: 'apartment',
    starterCue: 'a _ _ _ _ _ _ _ _',
    answer: 'apartment',
    accepted: ['flat'],
    ipa: '/əˈpɑːtmənt/',
    meaningVi: 'căn hộ chung cư',
    hintVi: 'Tòa nhà cao tầng có nhiều căn hộ nhỏ ở thành phố.',
  },
  {
    id: 3,
    iconKey: 'villa',
    starterCue: 'v _ _ _ _',
    answer: 'villa',
    ipa: '/ˈvɪlə/',
    meaningVi: 'biệt thự',
    hintVi: 'Ngôi nhà sang trọng rộng rãi thường có sân vườn và hồ bơi riêng.',
  },
  {
    id: 4,
    iconKey: 'town_house',
    starterCue: 't _ _ _  h _ _ _ _',
    answer: 'town house',
    accepted: ['townhouse'],
    ipa: '/ˈtaʊn haʊs/',
    meaningVi: 'nhà phố / nhà ống',
    hintVi: 'Nhà nhiều tầng xây sát nhau dọc theo con phố.',
  },
  {
    id: 5,
    iconKey: 'stilt_house',
    starterCue: 'st _ _ _  h _ _ _ _',
    answer: 'stilt house',
    ipa: '/ˈstɪlt haʊs/',
    meaningVi: 'nhà sàn',
    hintVi: 'Ngôi nhà dựng trên các cột gỗ cao, có cầu thang đi lên.',
  },
  {
    id: 6,
    iconKey: 'garden',
    starterCue: 'g _ _ _ _ _',
    answer: 'garden',
    ipa: '/ˈɡɑːdn/',
    meaningVi: 'khu vườn',
    hintVi: 'Khoảng đất trồng cây xanh, hoa lá quanh nhà.',
  },
  {
    id: 7,
    iconKey: 'living_room',
    starterCue: 'l _ _ _ _ _  r _ _ _',
    answer: 'living room',
    ipa: '/ˈlɪvɪŋ ruːm/',
    meaningVi: 'phòng khách',
    hintVi: 'Căn phòng có ghế sofa, bàn trà và ti-vi để tiếp khách.',
  },
  {
    id: 8,
    iconKey: 'bedroom',
    starterCue: 'b _ _ _ _ _ _',
    answer: 'bedroom',
    ipa: '/ˈbedruːm/',
    meaningVi: 'phòng ngủ',
    hintVi: 'Căn phòng có giường ngủ, gối và đèn ngủ.',
  },
  {
    id: 9,
    iconKey: 'kitchen',
    starterCue: 'k _ _ _ _ _ _',
    answer: 'kitchen',
    ipa: '/ˈkɪtʃɪn/',
    meaningVi: 'nhà bếp',
    hintVi: 'Nơi nấu ăn có bếp ga/bếp từ, tủ lạnh và bồn rửa bát.',
  },
  {
    id: 10,
    iconKey: 'bathroom',
    starterCue: 'b _ _ _ _ _ _ _',
    answer: 'bathroom',
    ipa: '/ˈbɑːθruːm/',
    meaningVi: 'phòng tắm',
    hintVi: 'Căn phòng có bồn tắm, vòi sen và bồn rửa mặt.',
  },
];
