/**
 * Dữ liệu chi tiết 100% chuẩn SGK "Chinh phục Ngữ pháp và Bài tập Tiếng Anh 6 - Tập 2 (Global Success)"
 * Vùng cập nhật: Trang 22 – Trang 41 (Trọn bộ Ngữ pháp, Phát âm & Bài tập A–D · Unit 8: Sports and Games).
 */

export interface U8RuleCard {
  title: string;
  formula: string;
  noteVi: string;
  examples: { en: string; vi: string }[];
}

export interface U8PronSign {
  sound: '/e/' | '/æ/';
  ruleTitle: string;
  noteVi?: string;
  words: { word: string; ipa: string; vi: string }[];
}

export interface U8SortWord {
  id: string;
  word: string;
  underlined: string;
  sound: 'e' | 'ae';
  ipa: string;
  vi: string;
}

export interface U8McqItem {
  id: string;
  num: number;
  prompt: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanationVi: string;
}

export type U8SportSvgKey =
  | 'camping'
  | 'fishing'
  | 'swimming'
  | 'football'
  | 'cycling'
  | 'judo'
  | 'hockey'
  | 'skiing'
  | 'badminton'
  | 'athletics'
  | 'volleyball'
  | 'baseball_basketball';

export interface U8SportPicItem {
  id: string;
  num: number;
  svgKey: U8SportSvgKey;
  answer: string;
  accepted: string[];
  vi: string;
  hintVi: string;
}

export interface U8DoGoPlayWord {
  id: string;
  word: string;
  vi: string;
  col: 'do' | 'go' | 'play';
}

export interface U8FillItem {
  id: string;
  num: number;
  before: string;
  after: string;
  accepted: string[];
  displayAnswer: string;
  explanationVi: string;
}

export interface U8VerbPair {
  id: string;
  base: string;
  past: string;
  accepted: string[];
  vi: string;
  ruleVi: string;
  type: 'regular' | 'irregular';
}

export interface U8TransformItem {
  id: string;
  num: number;
  affirmative: string;
  negAccepted: string[];
  negDisplay: string;
  qAccepted: string[];
  qDisplay: string;
  explanationVi: string;
}

export interface U8SentenceTask {
  id: string;
  num: number;
  prompt: string;
  underlined?: string;
  starter?: string;
  accepted: string[];
  displayAnswer: string;
  explanationVi: string;
}

/* ============================================================================
 * 1. LÝ THUYẾT NGỮ PHÁP & PHÁT ÂM UNIT 8 (TẬP 2 · TR. 22–28)
 * ============================================================================ */

export const U8_PAST_SIMPLE_BE: U8RuleCard[] = [
  {
    title: '(+) Khẳng định với To be',
    formula: 'I / He / She / It + was ...  |  You / We / They + were ...',
    noteVi: 'Số ít (I, he, she, it) dùng "was"; số nhiều (you, we, they) dùng "were".',
    examples: [
      { en: 'She was ill yesterday.', vi: 'Cô ấy bị ốm hôm qua.' },
      { en: 'They were busy last night.', vi: 'Tối hôm qua họ bận.' },
    ],
  },
  {
    title: '(-) Phủ định với To be',
    formula: "S + was not (wasn't) / were not (weren't) ...",
    noteVi: 'Chỉ cần thêm "not" ngay sau was/were (viết tắt: wasn’t / weren’t).',
    examples: [
      { en: "We weren't free last Sunday.", vi: 'Chủ nhật tuần trước chúng tôi không rảnh.' },
      { en: "He wasn't here last week.", vi: 'Anh ấy không ở đây tuần trước.' },
    ],
  },
  {
    title: '(?) Nghi vấn với To be',
    formula: 'Was + I / he / she / it ...?  |  Were + you / we / they ...?',
    noteVi: 'Đảo Was / Were lên đầu câu trước chủ ngữ.',
    examples: [
      { en: 'Was he absent last week?', vi: 'Tuần trước anh ấy vắng mặt phải không?' },
      { en: 'Were they here last night?', vi: 'Tối qua họ ở đây phải không?' },
    ],
  },
];

export const U8_PAST_SIMPLE_VERB: U8RuleCard[] = [
  {
    title: '(+) Khẳng định với Động từ thường',
    formula: 'S + V-ed (có quy tắc) / V2 (bất quy tắc)',
    noteVi: 'Mọi chủ ngữ (I, you, we, they, he, she, it) đều dùng chung 1 dạng V-ed/V2!',
    examples: [
      { en: 'I watched TV last night.', vi: 'Tôi đã xem TV tối qua.' },
      { en: 'He bought a car last month.', vi: 'Anh ấy đã mua một cái ô tô tháng trước.' },
    ],
  },
  {
    title: '(-) Phủ định với Động từ thường',
    formula: "S + did not (didn't) + V (nguyên mẫu)",
    noteVi: 'Đã mượn trợ động từ "didn’t" thì động từ chính PHẢI trả về nguyên mẫu!',
    examples: [
      { en: "She didn't finish her homework last night.", vi: 'Cô ấy đã không hoàn thành bài tập về nhà tối qua.' },
    ],
  },
  {
    title: '(?) Nghi vấn với Động từ thường',
    formula: 'Did + S + V (nguyên mẫu)?',
    noteVi: 'Đảo "Did" lên đầu câu, động từ chính giữ nguyên mẫu không chia.',
    examples: [
      { en: 'Did they go to the zoo yesterday?', vi: 'Họ đã đến vườn bách thú hôm qua phải không?' },
    ],
  },
];

export const U8_TIME_SIGNALS = [
  { en: 'yesterday', vi: 'ngày hôm qua' },
  { en: 'last night', vi: 'tối qua' },
  { en: 'last week', vi: 'tuần trước' },
  { en: 'last month', vi: 'tháng trước' },
  { en: 'last year', vi: 'năm trước' },
  { en: 'two weeks / ten years + ago', vi: 'cách đây 2 tuần / 10 năm' },
  { en: 'in 1990 / in 2000', vi: 'vào năm 1990 / 2000' },
];

export const U8_ED_SPELLING_RULES = [
  {
    rule: 'Thông thường thêm "-ed"',
    examples: 'work → worked · watch → watched',
  },
  {
    rule: 'Tận cùng "phụ âm + e" → chỉ thêm "-d"',
    examples: 'dance → danced · phone → phoned · hate → hated · translate → translated',
  },
  {
    rule: '1 nguyên âm + 1 phụ âm cuối (nhấn mạnh) → gấp đôi phụ âm + "-ed"',
    examples: 'stop → stopped',
  },
  {
    rule: 'Tận cùng "phụ âm + y" → đổi y thành i + "-ed"',
    examples: 'study → studied',
  },
  {
    rule: 'Tận cùng "nguyên âm + y" → giữ nguyên y + "-ed"',
    examples: 'play → played · stay → stayed',
  },
];

export const U8_ED_PRONUNCIATION_3 = [
  {
    sound: '/ɪd/',
    ruleVi: 'Sau âm tận cùng /t/ và /d/ (Mẹo nhớ: "Tiền Đô")',
    words: ['wanted', 'decided', 'visited', 'waited'],
    color: 'amber',
  },
  {
    sound: '/t/',
    ruleVi: 'Sau âm vô thanh: f, s, sh, ch, p, x, k (Mẹo: "Sáng Sớm Chạy Khắp Phố Phường")',
    words: ['washed', 'stopped', 'watched', 'talked'],
    color: 'sky',
  },
  {
    sound: '/d/',
    ruleVi: 'Sau các phụ âm hữu thanh và nguyên âm còn lại',
    words: ['lived', 'traveled', 'played', 'arrived'],
    color: 'emerald',
  },
] as const;

export const U8_IMPERATIVE_4_GUIDE: U8RuleCard[] = [
  {
    title: '1. Mệnh lệnh cơ bản (+ please lịch sự)',
    formula: 'V (nguyên mẫu không "to") ... (, please)',
    noteVi: 'Không có chủ ngữ. Thêm "please" ở đầu/cuối câu để lịch sự hơn. Phủ định thêm "Don’t" đầu câu.',
    examples: [
      { en: 'Enjoy your meal.', vi: 'Ăn ngon miệng nhé.' },
      { en: 'Stop talking and open your books.', vi: 'Ngừng nói chuyện và mở sách ra.' },
      { en: 'Be quiet, please.', vi: 'Làm ơn trật tự nào.' },
      { en: 'Stop here, please.', vi: 'Làm ơn dừng tại đây.' },
    ],
  },
  {
    title: '2. Gọi tên người cụ thể đầu câu',
    formula: 'Tên riêng / Đại từ, + V (nguyên mẫu)',
    noteVi: 'Xác định rõ đối tượng được yêu cầu thực hiện hành động.',
    examples: [
      { en: 'Mary, hurry up.', vi: 'Nhanh lên Mary.' },
      { en: 'Nga, stand up. The others stay sitting.', vi: 'Nga đứng lên, các bạn khác vẫn ngồi tại chỗ.' },
    ],
  },
  {
    title: '3. Mệnh lệnh với "You" (Nhấn mạnh sự tức giận / ra lệnh)',
    formula: 'You + V (nguyên mẫu) ...',
    noteVi: 'Dùng khi người nói đang tức giận hoặc ra lệnh dứt khoát.',
    examples: [
      { en: 'You come here.', vi: 'Bạn lại đây.' },
      { en: 'You do it right now.', vi: 'Bạn làm nó ngay bây giờ đi.' },
      { en: 'You get lost.', vi: 'Bạn hãy rời khỏi đây đi.' },
    ],
  },
  {
    title: '4. Mệnh lệnh nhấn mạnh với "Do"',
    formula: 'Do + V (nguyên mẫu)!',
    noteVi: 'Thêm "Do" trước động từ để nhấn mạnh sự mời mọc hoặc nhắc nhở chân thành.',
    examples: [
      { en: 'Do sit down!', vi: 'Ngồi xuống đi!' },
      { en: 'Do be careful!', vi: 'Thật cẩn thận đấy nhé!' },
    ],
  },
];

export const U8_PRONUNCIATION_SIGNS: U8PronSign[] = [
  {
    sound: '/e/',
    ruleTitle: '1. Từ 1 âm tiết chứa "e + phụ âm" (trừ r) hoặc âm tiết nhấn trọng âm',
    words: [
      { word: 'beg', ipa: '/beg/', vi: 'cầu xin' },
      { word: 'bell', ipa: '/bel/', vi: 'cái chuông' },
      { word: 'bed', ipa: '/bed/', vi: 'cái giường' },
      { word: 'get', ipa: '/get/', vi: 'lấy, có' },
      { word: 'check', ipa: '/tʃek/', vi: 'kiểm tra / tờ séc' },
      { word: 'dress', ipa: '/dres/', vi: 'cái váy' },
      { word: 'everyone', ipa: '/ˈevriwʌn/', vi: 'mọi người' },
    ],
  },
  {
    sound: '/e/',
    ruleTitle: '2. Một số từ kết thúc bằng "-ead"',
    words: [
      { word: 'head', ipa: '/hed/', vi: 'cái đầu' },
      { word: 'bread', ipa: '/bred/', vi: 'bánh mì' },
      { word: 'spread', ipa: '/spred/', vi: 'trải ra, lan rộng' },
      { word: 'treadmill', ipa: '/ˈtredmɪl/', vi: 'máy chạy bộ' },
    ],
  },
  {
    sound: '/e/',
    ruleTitle: '3. Cụm chữ "air" và "are" (nguyên âm đôi /eə/)',
    words: [
      { word: 'fair', ipa: '/feə/', vi: 'hội chợ / công bằng' },
      { word: 'pair', ipa: '/peə/', vi: 'đôi, cặp' },
      { word: 'fare', ipa: '/feə/', vi: 'tiền vé' },
      { word: 'care', ipa: '/keə/', vi: 'chăm sóc' },
    ],
  },
  {
    sound: '/e/',
    ruleTitle: '4. Ngoại lệ đặc biệt hay thi nhất!',
    noteVi: 'Chữ "a" trong many / any và chữ "u" trong bury đều đọc là /e/!',
    words: [
      { word: 'many', ipa: '/ˈmeni/', vi: 'nhiều' },
      { word: 'any', ipa: '/ˈeni/', vi: 'bất kỳ' },
      { word: 'bury', ipa: '/ˈberi/', vi: 'chôn cất' },
    ],
  },
  {
    sound: '/æ/',
    ruleTitle: '1. Từ 1 âm tiết chứa "a + 1 hoặc nhiều phụ âm"',
    noteVi: 'Chú ý: Nếu sau "a" là "r" (không có nguyên âm sau r) thì KHÔNG đọc /æ/ (VD: arm /ɑːm/).',
    words: [
      { word: 'bad', ipa: '/bæd/', vi: 'tồi, xấu' },
      { word: 'hang', ipa: '/hæŋ/', vi: 'treo' },
      { word: 'ban', ipa: '/bæn/', vi: 'cấm' },
      { word: 'man', ipa: '/mæn/', vi: 'người đàn ông' },
      { word: 'sat', ipa: '/sæt/', vi: 'đã ngồi' },
      { word: 'lack', ipa: '/læk/', vi: 'thiếu' },
      { word: 'pan', ipa: '/pæn/', vi: 'cái chảo' },
      { word: 'fat', ipa: '/fæt/', vi: 'béo, mỡ' },
    ],
  },
  {
    sound: '/æ/',
    ruleTitle: '2. Nhóm đọc /ɑː/ (Anh–Anh) nhưng đọc /æ/ (Anh–Mỹ US)',
    words: [
      { word: 'ask', ipa: '/æsk/ (US)', vi: 'hỏi' },
      { word: 'have', ipa: '/hæv/', vi: 'có' },
      { word: 'laugh', ipa: '/læf/ (US)', vi: 'cười' },
      { word: 'aunt', ipa: '/ænt/ (US)', vi: 'cô, dì' },
    ],
  },
  {
    sound: '/æ/',
    ruleTitle: '3. Trong âm tiết nhấn mạnh của từ nhiều âm tiết trước 2 phụ âm',
    words: [
      { word: 'narrow', ipa: '/ˈnærəʊ/', vi: 'chật, hẹp' },
      { word: 'latter', ipa: '/ˈlætə/', vi: 'cái sau' },
      { word: 'manner', ipa: '/ˈmænə/', vi: 'cách thức' },
      { word: 'calculate', ipa: '/ˈkælkjʊleɪt/', vi: 'tính toán' },
      { word: 'commander', ipa: '/kəˈmændə/', vi: 'người chỉ huy' },
      { word: 'captain', ipa: '/ˈkæptɪn/', vi: 'đội trưởng / đại úy' },
    ],
  },
];

/* ============================================================================
 * 2. BÀI TẬP A. PRONUNCIATION (TẬP 2 · TR. 28–29)
 * ============================================================================ */

export const U8_EX_A1_SORT: U8SortWord[] = [
  { id: 'u8a1-1', word: 'dress', underlined: 'e', sound: 'e', ipa: '/dres/', vi: 'cái váy' },
  { id: 'u8a1-2', word: 'spread', underlined: 'ea', sound: 'e', ipa: '/spred/', vi: 'trải ra' },
  { id: 'u8a1-3', word: 'man', underlined: 'a', sound: 'ae', ipa: '/mæn/', vi: 'đàn ông' },
  { id: 'u8a1-4', word: 'captain', underlined: 'a', sound: 'ae', ipa: '/ˈkæptɪn/', vi: 'đội trưởng' },
  { id: 'u8a1-5', word: 'calculate', underlined: 'a', sound: 'ae', ipa: '/ˈkælkjʊleɪt/', vi: 'tính toán' },
  { id: 'u8a1-6', word: 'active', underlined: 'a', sound: 'ae', ipa: '/ˈæktɪv/', vi: 'năng động' },
  { id: 'u8a1-7', word: 'handball', underlined: 'a', sound: 'ae', ipa: '/ˈhændbɔːl/', vi: 'bóng ném' },
  { id: 'u8a1-8', word: 'laugh', underlined: 'au', sound: 'ae', ipa: '/læf/ (US)', vi: 'cười (giọng Mỹ /æ/)' },
  { id: 'u8a1-9', word: 'tennis', underlined: 'e', sound: 'e', ipa: '/ˈtenɪs/', vi: 'quần vợt' },
  { id: 'u8a1-10', word: 'programme', underlined: 'a', sound: 'ae', ipa: '/ˈprəʊɡræm/', vi: 'chương trình' },
  { id: 'u8a1-11', word: 'lack', underlined: 'a', sound: 'ae', ipa: '/læk/', vi: 'thiếu' },
  { id: 'u8a1-12', word: 'narrow', underlined: 'a', sound: 'ae', ipa: '/ˈnærəʊ/', vi: 'chật hẹp' },
  { id: 'u8a1-13', word: 'badminton', underlined: 'a', sound: 'ae', ipa: '/ˈbædmɪntən/', vi: 'cầu lông' },
  { id: 'u8a1-14', word: 'member', underlined: 'e', sound: 'e', ipa: '/ˈmembə/', vi: 'thành viên' },
  { id: 'u8a1-15', word: 'November', underlined: 'e', sound: 'e', ipa: '/nəʊˈvembə/', vi: 'tháng 11' },
  { id: 'u8a1-16', word: 'eleven', underlined: 'e', sound: 'e', ipa: '/ɪˈlevn/', vi: 'số 11' },
  { id: 'u8a1-17', word: 'breath', underlined: 'ea', sound: 'e', ipa: '/breθ/', vi: 'hơi thở' },
  { id: 'u8a1-18', word: 'family', underlined: 'a', sound: 'ae', ipa: '/ˈfæməli/', vi: 'gia đình' },
  { id: 'u8a1-19', word: 'bank', underlined: 'a', sound: 'ae', ipa: '/bæŋk/', vi: 'ngân hàng' },
  { id: 'u8a1-20', word: 'candle', underlined: 'a', sound: 'ae', ipa: '/ˈkændl/', vi: 'ngọn nến' },
];

export const U8_EX_A2_MCQ: U8McqItem[] = [
  {
    id: 'u8a2-1',
    num: 1,
    prompt: 'Chọn từ có chữ "a" phát âm khác:',
    options: ['m[a]ny', 'tr[a]ck', 'gymn[a]stics', 'm[a]rathon'],
    correctIndex: 0,
    explanationVi: 'many đọc /ˈmeni/ (/e/); track, gymnastics, marathon đều đọc /æ/.',
  },
  {
    id: 'u8a2-2',
    num: 2,
    prompt: 'Chọn từ có nguyên âm gạch chân phát âm khác:',
    options: ['t[e]nnis', '[e]xercise', 'b[a]dminton', 'ch[e]ss'],
    correctIndex: 2,
    explanationVi: 'badminton đọc /æ/; tennis, exercise, chess đều đọc /e/.',
  },
  {
    id: 'u8a2-3',
    num: 3,
    prompt: 'Chọn từ có chữ "a" phát âm khác:',
    options: ['r[a]cket', 'm[a]tch', 'congr[a]tulations', 'f[a]vourite'],
    correctIndex: 3,
    explanationVi: 'favourite đọc /ˈfeɪvərɪt/ (/eɪ/); racket, match, congratulations đọc /æ/.',
  },
  {
    id: 'u8a2-4',
    num: 4,
    prompt: 'Chọn từ có chữ "a" phát âm khác:',
    options: ['h[a]ndball', '[a]ny', 'fant[a]stic', 'progr[a]mme'],
    correctIndex: 1,
    explanationVi: 'any đọc /ˈeni/ (/e/); handball, fantastic, programme đều đọc /æ/.',
  },
  {
    id: 'u8a2-5',
    num: 5,
    prompt: 'Chọn từ có chữ "e" phát âm khác:',
    options: ['week[e]nd', '[e]xercise', '[e]xhaust', 'cont[e]st'],
    correctIndex: 2,
    explanationVi: 'exhaust đọc /ɪɡˈzɔːst/ (/ɪ/); weekend, exercise, contest đọc /e/.',
  },
  {
    id: 'u8a2-6',
    num: 6,
    prompt: 'Chọn từ có chữ "a" phát âm khác:',
    options: ['f[a]mily', 'sportsm[a]n', 'congr[a]ts', 'm[a]rathon'],
    correctIndex: 1,
    explanationVi: 'sportsman đọc /ˈspɔːtsmən/ (âm yếu /ə/); family, congrats, marathon đọc /æ/.',
  },
  {
    id: 'u8a2-7',
    num: 7,
    prompt: 'Chọn từ có chữ "e" phát âm khác:',
    options: ['ev[e]nt', 'f[e]male', 'sp[e]cial', 's[e]ntence'],
    correctIndex: 1,
    explanationVi: 'female đọc /ˈfiːmeɪl/ (/iː/); event, special, sentence đọc /e/.',
  },
  {
    id: 'u8a2-8',
    num: 8,
    prompt: 'Chọn từ có chữ "a" phát âm khác:',
    options: ['fant[a]stic', 'progr[a]mme', 'b[a]dminton', 'kar[a]te'],
    correctIndex: 3,
    explanationVi: 'karate đọc /kəˈrɑːti/ (/ɑː/); fantastic, programme, badminton đọc /æ/.',
  },
  {
    id: 'u8a2-9',
    num: 9,
    prompt: 'Chọn từ có chữ "a" phát âm khác:',
    options: ['m[a]ny', '[a]ctive', 'h[a]ppen', 'm[a]tch'],
    correctIndex: 0,
    explanationVi: 'many đọc /ˈmeni/ (/e/); active, happen, match đọc /æ/.',
  },
  {
    id: 'u8a2-10',
    num: 10,
    prompt: 'Chọn từ có phần gạch chân phát âm khác:',
    options: ['br[ea]kfast', 'ch[e]ck', 'p[a]ck', 'dr[e]ss'],
    correctIndex: 2,
    explanationVi: 'pack đọc /pæk/ (/æ/); breakfast, check, dress đều đọc /e/.',
  },
];

/* ============================================================================
 * 3. BÀI TẬP B. VOCABULARY AND GRAMMAR (TẬP 2 · TR. 29–37)
 * ============================================================================ */

export const U8_EX_B1_BOX = [
  'badminton',
  'fishing',
  'football',
  'hockey',
  'cycling',
  'volleyball',
  'skiing',
  'athletics',
  'baseball',
  'judo',
  'camping',
  'swimming',
];

export const U8_EX_B1_PICS: U8SportPicItem[] = [
  { id: 'u8p-1', num: 1, svgKey: 'camping', answer: 'camping', accepted: ['camping'], vi: 'cắm trại', hintVi: 'Lều trại & lửa trại ngoài trời' },
  { id: 'u8p-2', num: 2, svgKey: 'fishing', answer: 'fishing', accepted: ['fishing'], vi: 'câu cá', hintVi: 'Ngồi thuyền cầm cần câu cá' },
  { id: 'u8p-3', num: 3, svgKey: 'swimming', answer: 'swimming', accepted: ['swimming'], vi: 'bơi lội', hintVi: 'Bơi dưới bể bơi xanh mát' },
  { id: 'u8p-4', num: 4, svgKey: 'football', answer: 'football', accepted: ['football', 'soccer'], vi: 'bóng đá', hintVi: 'Đá quả bóng tròn đen trắng' },
  { id: 'u8p-5', num: 5, svgKey: 'cycling', answer: 'cycling', accepted: ['cycling'], vi: 'đạp xe', hintVi: 'Đua xe đạp thể thao' },
  { id: 'u8p-6', num: 6, svgKey: 'judo', answer: 'judo', accepted: ['judo'], vi: 'võ Judo', hintVi: 'Hai võ sĩ mặc võ phục trắng' },
  { id: 'u8p-7', num: 7, svgKey: 'hockey', answer: 'hockey', accepted: ['hockey'], vi: 'khúc côn cầu', hintVi: 'Cầm gậy cong đánh đĩa trên băng' },
  { id: 'u8p-8', num: 8, svgKey: 'skiing', answer: 'skiing', accepted: ['skiing'], vi: 'trượt tuyết', hintVi: 'Đi ván trượt tuyết & gậy chống' },
  { id: 'u8p-9', num: 9, svgKey: 'badminton', answer: 'badminton', accepted: ['badminton'], vi: 'cầu lông', hintVi: 'Vợt dài đánh quả cầu lông' },
  { id: 'u8p-10', num: 10, svgKey: 'athletics', answer: 'athletics', accepted: ['athletics'], vi: 'điền kinh', hintVi: 'Chạy nước rút trên đường đua' },
  { id: 'u8p-11', num: 11, svgKey: 'volleyball', answer: 'volleyball', accepted: ['volleyball'], vi: 'bóng chuyền', hintVi: 'Bật nhảy đập bóng qua lưới cao' },
  {
    id: 'u8p-12',
    num: 12,
    svgKey: 'baseball_basketball',
    answer: 'baseball',
    accepted: ['baseball', 'basketball'],
    vi: 'bóng rổ (SGK in từ hộp là baseball)',
    hintVi: 'Hình vẽ ném rổ (basketball), từ còn lại trong hộp SGK là baseball — chấp nhận cả 2!',
  },
];

export const U8_EX_B2_CLASSIFY: U8DoGoPlayWord[] = [
  { id: 'dgp-1', word: 'homework', vi: 'bài tập về nhà', col: 'do' },
  { id: 'dgp-2', word: 'table tennis', vi: 'bóng bàn', col: 'play' },
  { id: 'dgp-3', word: 'shopping', vi: 'mua sắm', col: 'go' },
  { id: 'dgp-4', word: 'swimming', vi: 'bơi lội', col: 'go' },
  { id: 'dgp-5', word: 'fishing', vi: 'câu cá', col: 'go' },
  { id: 'dgp-6', word: 'aerobics', vi: 'thể dục nhịp điệu', col: 'do' },
  { id: 'dgp-7', word: 'jogging', vi: 'chạy bộ chậm', col: 'go' },
  { id: 'dgp-8', word: 'badminton', vi: 'cầu lông', col: 'play' },
  { id: 'dgp-9', word: 'tennis', vi: 'quần vợt', col: 'play' },
  { id: 'dgp-10', word: 'video games', vi: 'trò chơi điện tử', col: 'play' },
  { id: 'dgp-11', word: 'volleyball', vi: 'bóng chuyền', col: 'play' },
  { id: 'dgp-12', word: 'housework', vi: 'việc nhà', col: 'do' },
  { id: 'dgp-13', word: 'soccer', vi: 'bóng đá', col: 'play' },
  { id: 'dgp-14', word: 'cycling', vi: 'đạp xe', col: 'go' },
  { id: 'dgp-15', word: 'camping', vi: 'cắm trại', col: 'go' },
  { id: 'dgp-16', word: 'karate', vi: 'võ Karate', col: 'do' },
  { id: 'dgp-17', word: 'yoga', vi: 'tập Yoga', col: 'do' },
  { id: 'dgp-18', word: 'skiing', vi: 'trượt tuyết', col: 'go' },
  { id: 'dgp-19', word: 'golf', vi: 'đánh gôn', col: 'play' },
  { id: 'dgp-20', word: 'basketball', vi: 'bóng rổ', col: 'play' },
];

export const U8_EX_B3_DO_PLAY: U8FillItem[] = [
  { id: 'u8b3-1', num: 1, before: 'I like ', after: ' tennis.', accepted: ['playing', 'to play'], displayAnswer: 'playing', explanationVi: 'like + V-ing / to V; tennis (môn bóng) đi với play → playing.' },
  { id: 'u8b3-2', num: 2, before: 'Do you often ', after: ' exercise?', accepted: ['do'], displayAnswer: 'do', explanationVi: 'do exercise (tập thể dục); sau "Do you often" dùng V nguyên mẫu.' },
  { id: 'u8b3-3', num: 3, before: 'My brother ', after: ' basketball for the school team.', accepted: ['plays'], displayAnswer: 'plays', explanationVi: 'Chủ ngữ số ít "My brother" (hiện tại đơn) + play basketball → plays.' },
  { id: 'u8b3-4', num: 4, before: 'My friend ', after: ' judo twice a week.', accepted: ['does'], displayAnswer: 'does', explanationVi: 'do judo (tập võ judo); chủ ngữ số ít "My friend" → does.' },
  { id: 'u8b3-5', num: 5, before: 'His sister ', after: ' yoga at the new sports centre.', accepted: ['does'], displayAnswer: 'does', explanationVi: 'do yoga (sách in nhầm "yoya" → yoga); chủ ngữ số ít "His sister" → does.' },
  { id: 'u8b3-6', num: 6, before: 'Anna enjoys ', after: ' table-tennis in her free time.', accepted: ['playing'], displayAnswer: 'playing', explanationVi: 'Sau "enjoy" + V-ing; table-tennis đi với play → playing.' },
  { id: 'u8b3-7', num: 7, before: 'My brother ', after: ' football for the town team when he was young.', accepted: ['played'], displayAnswer: 'played', explanationVi: 'Có "when he was young" (quá khứ đơn) → played.' },
  { id: 'u8b3-8', num: 8, before: 'We ', after: ' gymnastics at school yesterday.', accepted: ['did'], displayAnswer: 'did', explanationVi: 'do gymnastics + "yesterday" (quá khứ đơn) → did.' },
];

export const U8_EX_B4_VING_BOX = ['play', 'ski', 'swim', 'watch', 'practise', 'do'];

export const U8_EX_B4_VING: U8FillItem[] = [
  { id: 'u8b4-1', num: 1, before: "Tuan doesn't like ", after: ' in the pool at the sport centre.', accepted: ['swimming'], displayAnswer: 'swimming', explanationVi: 'swim → swimming (gấp đôi chữ m trước -ing): bơi trong bể bơi.' },
  { id: 'u8b4-2', num: 2, before: 'Sam hates ', after: ' rugby but he likes football.', accepted: ['playing'], displayAnswer: 'playing', explanationVi: 'hate + V-ing; rugby là môn bóng → playing.' },
  { id: 'u8b4-3', num: 3, before: 'Tom loves ', after: ' Judo.', accepted: ['doing', 'practising'], displayAnswer: 'doing', explanationVi: 'do Judo (hoặc practise Judo) → doing / practising.' },
  { id: 'u8b4-4', num: 4, before: 'They enjoy ', after: ' the Olympics on TV.', accepted: ['watching'], displayAnswer: 'watching', explanationVi: 'enjoy + watching TV (xem Thế vận hội trên TV).' },
  { id: 'u8b4-5', num: 5, before: 'We really like ', after: ' in the Alps in winter.', accepted: ['skiing'], displayAnswer: 'skiing', explanationVi: 'ski → skiing (trượt tuyết trên dãy núi Alps vào mùa đông).' },
  { id: 'u8b4-6', num: 6, before: 'Do you like ', after: ' running in the morning?', accepted: ['practising', 'doing'], displayAnswer: 'practising', explanationVi: 'practise running (tập luyện chạy bộ buổi sáng).' },
];

export const U8_EX_B5_ACTION_BOX = ['throw', 'kick', 'hit', 'bounce', 'catch', 'pick up'];

export const U8_EX_B5_ACTION: U8FillItem[] = [
  { id: 'u8b5-1', num: 1, before: 'In football you ', after: ' the ball.', accepted: ['kick'], displayAnswer: 'kick', explanationVi: 'Trong bóng đá (football), bạn đá (kick) quả bóng.' },
  { id: 'u8b5-2', num: 2, before: 'In basketball you ', after: ' the ball on the floor.', accepted: ['bounce'], displayAnswer: 'bounce', explanationVi: 'Trong bóng rổ (basketball), bạn đập/nhồi bóng (bounce) xuống sàn.' },
  { id: 'u8b5-3', num: 3, before: 'In tennis you ', after: ' the ball.', accepted: ['hit'], displayAnswer: 'hit', explanationVi: 'Trong quần vợt (tennis), bạn đánh (hit) bóng bằng vợt.' },
  { id: 'u8b5-4', num: 4, before: 'In rugby, you ', after: ' the ball to people in your team.', accepted: ['throw'], displayAnswer: 'throw', explanationVi: 'Trong bóng bầu dục (rugby), bạn ném (throw) bóng cho đồng đội.' },
  { id: 'u8b5-5', num: 5, before: 'In football the goalkeeper needs to ', after: ' the ball.', accepted: ['catch'], displayAnswer: 'catch', explanationVi: 'Thủ môn (goalkeeper) cần bắt (catch) quả bóng.' },
  { id: 'u8b5-6', num: 6, before: 'In hockey you never ', after: ' the ball.', accepted: ['pick up'], displayAnswer: 'pick up', explanationVi: 'Trong khúc côn cầu (hockey), bạn không bao giờ nhặt bóng bằng tay (pick up).' },
];

export const U8_EX_B6_VERBS: U8VerbPair[] = [
  // 17 Regular verbs (left column pp.31–32)
  { id: 'v-reg-1', base: 'to visit', past: 'visited', accepted: ['visited'], vi: 'thăm', ruleVi: 'Thêm -ed (đọc /ɪd/)', type: 'regular' },
  { id: 'v-reg-2', base: 'to arrive', past: 'arrived', accepted: ['arrived'], vi: 'đến nơi', ruleVi: 'Tận cùng -e → thêm -d', type: 'regular' },
  { id: 'v-reg-3', base: 'to remember', past: 'remembered', accepted: ['remembered'], vi: 'ghi nhớ', ruleVi: 'Thêm -ed', type: 'regular' },
  { id: 'v-reg-4', base: 'to return', past: 'returned', accepted: ['returned'], vi: 'trở về', ruleVi: 'Thêm -ed', type: 'regular' },
  { id: 'v-reg-5', base: 'to rent', past: 'rented', accepted: ['rented'], vi: 'thuê', ruleVi: 'Thêm -ed (đọc /ɪd/)', type: 'regular' },
  { id: 'v-reg-6', base: 'to receive', past: 'received', accepted: ['received'], vi: 'nhận', ruleVi: 'Tận cùng -e → thêm -d', type: 'regular' },
  { id: 'v-reg-7', base: 'to talk', past: 'talked', accepted: ['talked'], vi: 'nói chuyện', ruleVi: 'Thêm -ed (đọc /t/)', type: 'regular' },
  { id: 'v-reg-8', base: 'to stop', past: 'stopped', accepted: ['stopped'], vi: 'dừng lại', ruleVi: 'Gấp đôi p + -ed', type: 'regular' },
  { id: 'v-reg-9', base: 'to look', past: 'looked', accepted: ['looked'], vi: 'nhìn', ruleVi: 'Thêm -ed (đọc /t/)', type: 'regular' },
  { id: 'v-reg-10', base: 'to move', past: 'moved', accepted: ['moved'], vi: 'di chuyển', ruleVi: 'Tận cùng -e → thêm -d', type: 'regular' },
  { id: 'v-reg-11', base: 'to watch', past: 'watched', accepted: ['watched'], vi: 'xem', ruleVi: 'Thêm -ed (đọc /t/)', type: 'regular' },
  { id: 'v-reg-12', base: 'to learn', past: 'learned / learnt', accepted: ['learned', 'learnt'], vi: 'học', ruleVi: 'learned (US) hoặc learnt (UK)', type: 'regular' },
  { id: 'v-reg-13', base: 'to play', past: 'played', accepted: ['played'], vi: 'chơi', ruleVi: 'Nguyên âm a + y → giữ y + ed', type: 'regular' },
  { id: 'v-reg-14', base: 'to live', past: 'lived', accepted: ['lived'], vi: 'sống', ruleVi: 'Tận cùng -e → thêm -d', type: 'regular' },
  { id: 'v-reg-15', base: 'to listen', past: 'listened', accepted: ['listened'], vi: 'nghe', ruleVi: 'Trọng âm 1 → không gấp đôi n, thêm -ed', type: 'regular' },
  { id: 'v-reg-16', base: 'to study', past: 'studied', accepted: ['studied'], vi: 'học tập', ruleVi: 'Phụ âm d + y → đổi y thành i + ed', type: 'regular' },
  { id: 'v-reg-17', base: 'to clean', past: 'cleaned', accepted: ['cleaned'], vi: 'dọn sạch', ruleVi: 'Thêm -ed', type: 'regular' },
  // 12 Irregular verbs (right column p.31)
  { id: 'v-irr-1', base: 'to be', past: 'was / were', accepted: ['was / were', 'was/were', 'was, were', 'was were'], vi: 'thì, là, ở', ruleVi: 'Số ít: was · Số nhiều: were', type: 'irregular' },
  { id: 'v-irr-2', base: 'to go', past: 'went', accepted: ['went'], vi: 'đi', ruleVi: 'go → went', type: 'irregular' },
  { id: 'v-irr-3', base: 'to buy', past: 'bought', accepted: ['bought'], vi: 'mua', ruleVi: 'buy → bought', type: 'irregular' },
  { id: 'v-irr-4', base: 'to take', past: 'took', accepted: ['took'], vi: 'lấy / đưa đi', ruleVi: 'take → took', type: 'irregular' },
  { id: 'v-irr-5', base: 'to see', past: 'saw', accepted: ['saw'], vi: 'nhìn thấy', ruleVi: 'see → saw', type: 'irregular' },
  { id: 'v-irr-6', base: 'to think', past: 'thought', accepted: ['thought'], vi: 'suy nghĩ', ruleVi: 'think → thought', type: 'irregular' },
  { id: 'v-irr-7', base: 'to wear', past: 'wore', accepted: ['wore'], vi: 'mặc, đội', ruleVi: 'wear → wore', type: 'irregular' },
  { id: 'v-irr-8', base: 'to put', past: 'put', accepted: ['put'], vi: 'đặt, để', ruleVi: 'Giữ nguyên: put → put', type: 'irregular' },
  { id: 'v-irr-9', base: 'to eat', past: 'ate', accepted: ['ate'], vi: 'ăn', ruleVi: 'eat → ate', type: 'irregular' },
  { id: 'v-irr-10', base: 'to give', past: 'gave', accepted: ['gave'], vi: 'cho, tặng', ruleVi: 'give → gave', type: 'irregular' },
  { id: 'v-irr-11', base: 'to teach', past: 'taught', accepted: ['taught'], vi: 'dạy học', ruleVi: 'teach → taught', type: 'irregular' },
  { id: 'v-irr-12', base: 'to make', past: 'made', accepted: ['made'], vi: 'làm, chế tạo', ruleVi: 'make → made', type: 'irregular' },
];

export const U8_EX_B7_NEG_Q: U8TransformItem[] = [
  {
    id: 'u8b7-1',
    num: 1,
    affirmative: 'She bought a new dress yesterday.',
    negAccepted: ["She didn't buy a new dress yesterday.", 'She did not buy a new dress yesterday.'],
    negDisplay: "She didn't buy a new dress yesterday.",
    qAccepted: ['Did she buy a new dress yesterday?'],
    qDisplay: 'Did she buy a new dress yesterday?',
    explanationVi: 'bought → trả về nguyên mẫu "buy" sau didn’t và Did.',
  },
  {
    id: 'u8b7-2',
    num: 2,
    affirmative: 'They were late for school.',
    negAccepted: ["They weren't late for school.", 'They were not late for school.'],
    negDisplay: "They weren't late for school.",
    qAccepted: ['Were they late for school?'],
    qDisplay: 'Were they late for school?',
    explanationVi: 'Động từ to be "were" tự thêm not (weren’t) và tự đảo lên đầu câu (Were they...).',
  },
  {
    id: 'u8b7-3',
    num: 3,
    affirmative: 'She went to a bookstore yesterday.',
    negAccepted: ["She didn't go to a bookstore yesterday.", 'She did not go to a bookstore yesterday.'],
    negDisplay: "She didn't go to a bookstore yesterday.",
    qAccepted: ['Did she go to a bookstore yesterday?'],
    qDisplay: 'Did she go to a bookstore yesterday?',
    explanationVi: 'went → trả về nguyên mẫu "go" sau didn’t và Did.',
  },
  {
    id: 'u8b7-4',
    num: 4,
    affirmative: 'I drove carelessly last week.',
    negAccepted: ["I didn't drive carelessly last week.", 'I did not drive carelessly last week.'],
    negDisplay: "I didn't drive carelessly last week.",
    qAccepted: ['Did you drive carelessly last week?', 'Did I drive carelessly last week?'],
    qDisplay: 'Did you drive carelessly last week?',
    explanationVi: 'drove → nguyên mẫu "drive". Khi hỏi đổi I → you (hoặc giữ I đều hợp lệ).',
  },
  {
    id: 'u8b7-5',
    num: 5,
    affirmative: 'I was ill last week.',
    negAccepted: ["I wasn't ill last week.", 'I was not ill last week.'],
    negDisplay: "I wasn't ill last week.",
    qAccepted: ['Were you ill last week?', 'Was I ill last week?'],
    qDisplay: 'Were you ill last week?',
    explanationVi: 'I was → phủ định "I wasn’t", nghi vấn đổi thành "Were you ill last week?".',
  },
  {
    id: 'u8b7-6',
    num: 6,
    affirmative: 'He stopped his car to take a photograph.',
    negAccepted: ["He didn't stop his car to take a photograph.", 'He did not stop his car to take a photograph.'],
    negDisplay: "He didn't stop his car to take a photograph.",
    qAccepted: ['Did he stop his car to take a photograph?'],
    qDisplay: 'Did he stop his car to take a photograph?',
    explanationVi: 'stopped → bỏ -ped trở về nguyên mẫu "stop".',
  },
  {
    id: 'u8b7-7',
    num: 7,
    affirmative: 'She waited for you two hours ago.',
    negAccepted: ["She didn't wait for you two hours ago.", 'She did not wait for you two hours ago.'],
    negDisplay: "She didn't wait for you two hours ago.",
    qAccepted: ['Did she wait for you two hours ago?'],
    qDisplay: 'Did she wait for you two hours ago?',
    explanationVi: 'waited → nguyên mẫu "wait" sau didn’t và Did.',
  },
  {
    id: 'u8b7-8',
    num: 8,
    affirmative: 'She lived in New York in 2009.',
    negAccepted: ["She didn't live in New York in 2009.", 'She did not live in New York in 2009.'],
    negDisplay: "She didn't live in New York in 2009.",
    qAccepted: ['Did she live in New York in 2009?'],
    qDisplay: 'Did she live in New York in 2009?',
    explanationVi: 'lived → nguyên mẫu "live".',
  },
  {
    id: 'u8b7-9',
    num: 9,
    affirmative: 'It rained heavily two days ago.',
    negAccepted: ["It didn't rain heavily two days ago.", 'It did not rain heavily two days ago.'],
    negDisplay: "It didn't rain heavily two days ago.",
    qAccepted: ['Did it rain heavily two days ago?'],
    qDisplay: 'Did it rain heavily two days ago?',
    explanationVi: 'Sách in thiếu chữ t ("I rained" → "It rained"). rained → nguyên mẫu "rain".',
  },
  {
    id: 'u8b7-10',
    num: 10,
    affirmative: 'He finished his homework last night.',
    negAccepted: ["He didn't finish his homework last night.", 'He did not finish his homework last night.'],
    negDisplay: "He didn't finish his homework last night.",
    qAccepted: ['Did he finish his homework last night?'],
    qDisplay: 'Did he finish his homework last night?',
    explanationVi: 'finished → nguyên mẫu "finish".',
  },
];

export const U8_EX_B8_PAST_FILL: U8FillItem[] = [
  { id: 'u8b8-1', num: 1, before: 'They (see) ', after: ' a good film last night.', accepted: ['saw'], displayAnswer: 'saw', explanationVi: 'see → saw (bất quy tắc).' },
  { id: 'u8b8-2', num: 2, before: 'He (buy) ', after: ' a lot of English books yesterday.', accepted: ['bought'], displayAnswer: 'bought', explanationVi: 'buy → bought (bất quy tắc).' },
  { id: 'u8b8-3', num: 3, before: 'They (be) ', after: ' students last year.', accepted: ['were'], displayAnswer: 'were', explanationVi: 'Chủ ngữ số nhiều "They" + quá khứ đơn → were.' },
  { id: 'u8b8-4', num: 4, before: 'She (be) ', after: ' in Da Nang City last week.', accepted: ['was'], displayAnswer: 'was', explanationVi: 'Chủ ngữ số ít "She" + quá khứ đơn → was.' },
  { id: 'u8b8-5', num: 5, before: 'They (wear) ', after: ' the uniform two days ago.', accepted: ['wore'], displayAnswer: 'wore', explanationVi: 'wear → wore (bất quy tắc).' },
  { id: 'u8b8-6', num: 6, before: 'It (take) ', after: ' me 50 minutes to get there.', accepted: ['took'], displayAnswer: 'took', explanationVi: 'take → took (bất quy tắc).' },
  { id: 'u8b8-7', num: 7, before: 'They (decorate) ', after: ' the room last week.', accepted: ['decorated'], displayAnswer: 'decorated', explanationVi: 'decorate tận cùng -e → thêm -d: decorated.' },
  { id: 'u8b8-8', num: 8, before: 'She (teach) ', after: ' me English two months ago.', accepted: ['taught'], displayAnswer: 'taught', explanationVi: 'teach → taught (bất quy tắc).' },
  { id: 'u8b8-9', num: 9, before: 'We (decide) ', after: ' to buy something for lunch.', accepted: ['decided'], displayAnswer: 'decided', explanationVi: 'decide tận cùng -e → thêm -d: decided.' },
  { id: 'u8b8-10', num: 10, before: 'I (receive) ', after: ' your letter this morning.', accepted: ['received'], displayAnswer: 'received', explanationVi: 'receive tận cùng -e → thêm -d: received.' },
  { id: 'u8b8-11', num: 11, before: 'Mai (speak) ', after: ' to me yesterday.', accepted: ['spoke'], displayAnswer: 'spoke', explanationVi: 'speak → spoke (bất quy tắc).' },
  { id: 'u8b8-12', num: 12, before: 'She (write) ', after: ' to her friends last week.', accepted: ['wrote'], displayAnswer: 'wrote', explanationVi: 'write → wrote (bất quy tắc).' },
  { id: 'u8b8-13', num: 13, before: 'I (borrow) ', after: ' the book from a friend.', accepted: ['borrowed'], displayAnswer: 'borrowed', explanationVi: 'borrow → borrowed (có quy tắc).' },
  { id: 'u8b8-14', num: 14, before: 'They (watch) ', after: ' TV yesterday.', accepted: ['watched'], displayAnswer: 'watched', explanationVi: 'watch → watched (có quy tắc).' },
  { id: 'u8b8-15', num: 15, before: 'She (send) ', after: ' a letter to her husband last week.', accepted: ['sent'], displayAnswer: 'sent', explanationVi: 'send → sent (bất quy tắc).' },
];

export const U8_EX_B9_NEG_INT: U8TransformItem[] = [
  {
    id: 'u8b9-1',
    num: 1,
    affirmative: 'He stopped his car to take a photograph.',
    negAccepted: ["He didn't stop his car to take a photograph.", 'He did not stop his car to take a photograph.'],
    negDisplay: "He didn't stop his car to take a photograph.",
    qAccepted: ['Did he stop his car to take a photograph?'],
    qDisplay: 'Did he stop his car to take a photograph?',
    explanationVi: 'stopped → nguyên mẫu "stop".',
  },
  {
    id: 'u8b9-2',
    num: 2,
    affirmative: 'She drove carelessly last week.',
    negAccepted: ["She didn't drive carelessly last week.", 'She did not drive carelessly last week.'],
    negDisplay: "She didn't drive carelessly last week.",
    qAccepted: ['Did she drive carelessly last week?'],
    qDisplay: 'Did she drive carelessly last week?',
    explanationVi: 'drove → nguyên mẫu "drive".',
  },
  {
    id: 'u8b9-3',
    num: 3,
    affirmative: 'They were in Rio last summer.',
    negAccepted: ["They weren't in Rio last summer.", 'They were not in Rio last summer.'],
    negDisplay: "They weren't in Rio last summer.",
    qAccepted: ['Were they in Rio last summer?'],
    qDisplay: 'Were they in Rio last summer?',
    explanationVi: 'To be "were" → weren’t / Were they...?',
  },
  {
    id: 'u8b9-4',
    num: 4,
    affirmative: 'We did our exercise this morning.',
    negAccepted: ["We didn't do our exercise this morning.", 'We did not do our exercise this morning.'],
    negDisplay: "We didn't do our exercise this morning.",
    qAccepted: ['Did you do your exercise this morning?', 'Did we do our exercise this morning?'],
    qDisplay: 'Did you do your exercise this morning?',
    explanationVi: 'Lưu ý: "did" là quá khứ của động từ thường "do" → phủ định là "didn’t do", hỏi là "Did you do...?".',
  },
  {
    id: 'u8b9-5',
    num: 5,
    affirmative: 'My parents came to visit me last July.',
    negAccepted: ["My parents didn't come to visit me last July.", 'My parents did not come to visit me last July.'],
    negDisplay: "My parents didn't come to visit me last July.",
    qAccepted: ['Did your parents come to visit you last July?', 'Did my parents come to visit me last July?'],
    qDisplay: 'Did your parents come to visit you last July?',
    explanationVi: 'came → nguyên mẫu "come".',
  },
  {
    id: 'u8b9-6',
    num: 6,
    affirmative: 'The hotel was very expensive.',
    negAccepted: ["The hotel wasn't very expensive.", 'The hotel was not very expensive.'],
    negDisplay: "The hotel wasn't very expensive.",
    qAccepted: ['Was the hotel very expensive?'],
    qDisplay: 'Was the hotel very expensive?',
    explanationVi: 'To be "was" → wasn’t / Was the hotel...?',
  },
  {
    id: 'u8b9-7',
    num: 7,
    affirmative: 'I had a bicycle when I was young.',
    negAccepted: ["I didn't have a bicycle when I was young.", 'I did not have a bicycle when I was young.'],
    negDisplay: "I didn't have a bicycle when I was young.",
    qAccepted: ['Did you have a bicycle when you were young?', 'Did I have a bicycle when I was young?'],
    qDisplay: 'Did you have a bicycle when you were young?',
    explanationVi: 'had → nguyên mẫu "have" sau didn’t / Did.',
  },
  {
    id: 'u8b9-8',
    num: 8,
    affirmative: 'The children went to the zoo yesterday.',
    negAccepted: ["The children didn't go to the zoo yesterday.", 'The children did not go to the zoo yesterday.'],
    negDisplay: "The children didn't go to the zoo yesterday.",
    qAccepted: ['Did the children go to the zoo yesterday?'],
    qDisplay: 'Did the children go to the zoo yesterday?',
    explanationVi: 'went → nguyên mẫu "go".',
  },
  {
    id: 'u8b9-9',
    num: 9,
    affirmative: 'Nga ate the last doughnut.',
    negAccepted: ["Nga didn't eat the last doughnut.", 'Nga did not eat the last doughnut.'],
    negDisplay: "Nga didn't eat the last doughnut.",
    qAccepted: ['Did Nga eat the last doughnut?'],
    qDisplay: 'Did Nga eat the last doughnut?',
    explanationVi: 'ate → nguyên mẫu "eat".',
  },
  {
    id: 'u8b9-10',
    num: 10,
    affirmative: 'They bought a new house last month.',
    negAccepted: ["They didn't buy a new house last month.", 'They did not buy a new house last month.'],
    negDisplay: "They didn't buy a new house last month.",
    qAccepted: ['Did they buy a new house last month?'],
    qDisplay: 'Did they buy a new house last month?',
    explanationVi: 'bought → nguyên mẫu "buy".',
  },
];

export const U8_EX_B10_CUES_YN: U8SentenceTask[] = [
  {
    id: 'u8b10-1',
    num: 1,
    prompt: 'they / return home / yesterday / No',
    accepted: ["Did they return home yesterday? - No, they didn't.", "Did they return home yesterday? No, they didn't."],
    displayAnswer: "Did they return home yesterday? - No, they didn't.",
    explanationVi: 'Did + they + return...? Trả lời: No, they didn’t. (Sách in dư chữ s ở "yesterdays" → yesterday).',
  },
  {
    id: 'u8b10-2',
    num: 2,
    prompt: 'Mrs. Robinson / buy a poster / Yes',
    accepted: ['Did Mrs. Robinson buy a poster? - Yes, she did.', 'Did Mrs. Robinson buy a poster? Yes, she did.', 'Did Mrs Robinson buy a poster? Yes, she did.'],
    displayAnswer: 'Did Mrs. Robinson buy a poster? - Yes, she did.',
    explanationVi: 'Mrs. Robinson là nữ (she) → Yes, she did.',
  },
  {
    id: 'u8b10-3',
    num: 3,
    prompt: 'you / send me those flowers / Yes',
    accepted: ['Did you send me those flowers? - Yes, I did.', 'Did you send me those flowers? Yes, I did.'],
    displayAnswer: 'Did you send me those flowers? - Yes, I did.',
    explanationVi: 'Hỏi "Did you..." → trả lời "Yes, I did."',
  },
  {
    id: 'u8b10-4',
    num: 4,
    prompt: 'she / receive many gifts / No',
    accepted: ["Did she receive many gifts? - No, she didn't.", "Did she receive many gifts? No, she didn't."],
    displayAnswer: "Did she receive many gifts? - No, she didn't.",
    explanationVi: 'Did she receive...? — No, she didn’t.',
  },
  {
    id: 'u8b10-5',
    num: 5,
    prompt: 'we / meet her at the meeting / last week / Yes',
    accepted: ['Did we meet her at the meeting last week? - Yes, we did.', 'Did we meet her at the meeting last week? Yes, we did.', 'Did we meet her at the meeting last week? - Yes, you did.'],
    displayAnswer: 'Did we meet her at the meeting last week? - Yes, we did.',
    explanationVi: 'Did we meet...? — Yes, we did.',
  },
  {
    id: 'u8b10-6',
    num: 6,
    prompt: 'they / live in this town / in 2000 / No',
    accepted: ["Did they live in this town in 2000? - No, they didn't.", "Did they live in this town in 2000? No, they didn't."],
    displayAnswer: "Did they live in this town in 2000? - No, they didn't.",
    explanationVi: 'Did they live in this town in 2000? — No, they didn’t.',
  },
  {
    id: 'u8b10-7',
    num: 7,
    prompt: 'Tan / teach Lan English / Yes',
    accepted: ['Did Tan teach Lan English? - Yes, he did.', 'Did Tan teach Lan English? Yes, he did.'],
    displayAnswer: 'Did Tan teach Lan English? - Yes, he did.',
    explanationVi: 'Tan (nam → he) → Did Tan teach Lan English? - Yes, he did.',
  },
  {
    id: 'u8b10-8',
    num: 8,
    prompt: 'he / mail his friend a postcard / No',
    accepted: ["Did he mail his friend a postcard? - No, he didn't.", "Did he mail his friend a postcard? No, he didn't."],
    displayAnswer: "Did he mail his friend a postcard? - No, he didn't.",
    explanationVi: 'Did he mail his friend a postcard? — No, he didn’t.',
  },
];

export const U8_EX_B11_WH_MAKE: U8SentenceTask[] = [
  {
    id: 'u8b11-1',
    num: 1,
    prompt: 'My father was ___ last month.',
    underlined: 'in Ha Noi',
    accepted: ['Where was your father last month?', 'Where was my father last month?'],
    displayAnswer: 'Where was your father last month?',
    explanationVi: 'Hỏi địa điểm "in Ha Noi" → Where + was + your father last month?',
  },
  {
    id: 'u8b11-2',
    num: 2,
    prompt: 'He travelled to Nha Trang ___.',
    underlined: 'by coach',
    accepted: ['How did he travel to Nha Trang?'],
    displayAnswer: 'How did he travel to Nha Trang?',
    explanationVi: 'Hỏi phương tiện "by coach" → How + did + he + travel (nguyên mẫu)...?',
  },
  {
    id: 'u8b11-3',
    num: 3,
    prompt: 'She went to the doctor ___.',
    underlined: 'because she was sick',
    accepted: ['Why did she go to the doctor?'],
    displayAnswer: 'Why did she go to the doctor?',
    explanationVi: 'Hỏi lý do "because..." → Why + did + she + go...?',
  },
  {
    id: 'u8b11-4',
    num: 4,
    prompt: 'Nam left home ___ yesterday.',
    underlined: "at 7 o'clock",
    accepted: ['What time did Nam leave home yesterday?', 'When did Nam leave home yesterday?'],
    displayAnswer: 'What time did Nam leave home yesterday?',
    explanationVi: 'Hỏi giờ cụ thể "at 7 o’clock" → What time did Nam leave (nguyên mẫu của left) home yesterday?',
  },
  {
    id: 'u8b11-5',
    num: 5,
    prompt: 'Her mother gave her ___.',
    underlined: 'a blue dress',
    accepted: ['What did her mother give her?'],
    displayAnswer: 'What did her mother give her?',
    explanationVi: 'Hỏi đồ vật "a blue dress" → What + did + her mother + give (nguyên mẫu của gave) her?',
  },
  {
    id: 'u8b11-6',
    num: 6,
    prompt: 'I went to Nha Trang ___.',
    underlined: 'last summer vacation',
    accepted: ['When did you go to Nha Trang?'],
    displayAnswer: 'When did you go to Nha Trang?',
    explanationVi: 'Hỏi thời điểm "last summer vacation" → When + did + you + go to Nha Trang?',
  },
  {
    id: 'u8b11-7',
    num: 7,
    prompt: 'Mrs. Robinson put the poster ___.',
    underlined: 'on the wall',
    accepted: ['Where did Mrs. Robinson put the poster?', 'Where did Mrs Robinson put the poster?'],
    displayAnswer: 'Where did Mrs. Robinson put the poster?',
    explanationVi: 'Hỏi vị trí "on the wall" → Where + did + Mrs. Robinson + put the poster?',
  },
  {
    id: 'u8b11-8',
    num: 8,
    prompt: 'They returned to America ___.',
    underlined: 'two weeks ago',
    accepted: ['When did they return to America?'],
    displayAnswer: 'When did they return to America?',
    explanationVi: 'Hỏi thời gian "two weeks ago" → When + did + they + return to America?',
  },
];

export const U8_EX_B12_STORY_PARTS = [
  'It ',
  ' Sunday, the day of the big game. The players ',
  ' early. They ',
  ' excited. Everyone ',
  ' to play. There ',
  ' lots of people in the stadium. They ',
  ' and ',
  ' when the players ',
  ' on to the ground. The referee ',
  ' the captains to the middle. The referee ',
  ' "Where is the ball?" Nobody ',
  '. All the players ',
  ' at the ground. There ',
  ' no ball. The referee ',
  ' the game.',
];

export const U8_EX_B12_STORY_BLANKS: U8FillItem[] = [
  { id: 'u8b12-1', num: 1, before: '1. be', after: '', accepted: ['was'], displayAnswer: 'was', explanationVi: 'Chủ ngữ "It" → was.' },
  { id: 'u8b12-2', num: 2, before: '2. arrive', after: '', accepted: ['arrived'], displayAnswer: 'arrived', explanationVi: 'arrive → arrived.' },
  { id: 'u8b12-3', num: 3, before: '3. be', after: '', accepted: ['were'], displayAnswer: 'were', explanationVi: 'Chủ ngữ số nhiều "They" → were.' },
  { id: 'u8b12-4', num: 4, before: '4. want', after: '', accepted: ['wanted'], displayAnswer: 'wanted', explanationVi: 'want → wanted.' },
  { id: 'u8b12-5', num: 5, before: '5. be', after: '', accepted: ['were'], displayAnswer: 'were', explanationVi: '"lots of people" số nhiều → There were.' },
  { id: 'u8b12-6', num: 6, before: '6. wave', after: '', accepted: ['waved'], displayAnswer: 'waved', explanationVi: 'wave → waved (vẫy tay).' },
  { id: 'u8b12-7', num: 7, before: '7. cheer', after: '', accepted: ['cheered'], displayAnswer: 'cheered', explanationVi: 'cheer → cheered (reo hò cổ vũ).' },
  { id: 'u8b12-8', num: 8, before: '8. walk', after: '', accepted: ['walked'], displayAnswer: 'walked', explanationVi: 'walk → walked (bước ra sân).' },
  { id: 'u8b12-9', num: 9, before: '9. call', after: '', accepted: ['called'], displayAnswer: 'called', explanationVi: 'call → called (gọi đội trưởng).' },
  { id: 'u8b12-10', num: 10, before: '10. ask', after: '', accepted: ['asked'], displayAnswer: 'asked', explanationVi: 'ask → asked (hỏi).' },
  { id: 'u8b12-11', num: 11, before: '11. answer', after: '', accepted: ['answered'], displayAnswer: 'answered', explanationVi: 'answer → answered (trả lời).' },
  { id: 'u8b12-12', num: 12, before: '12. look', after: '', accepted: ['looked'], displayAnswer: 'looked', explanationVi: 'look → looked (nhìn xuống sân).' },
  { id: 'u8b12-13', num: 13, before: '13. be', after: '', accepted: ['was'], displayAnswer: 'was', explanationVi: '"no ball" số ít → There was.' },
  { id: 'u8b12-14', num: 14, before: '14. cancel', after: '', accepted: ['cancelled', 'canceled'], displayAnswer: 'cancelled', explanationVi: 'cancel → cancelled (UK) / canceled (US): hủy trận đấu.' },
];

export const U8_EX_B13_IMP_BOX = [
  "Don't touch",
  'write',
  'install',
  'be',
  "Don't order",
  'repeat',
  'open',
  'listen',
  'water',
  'call',
];

export const U8_EX_B13_IMP: U8FillItem[] = [
  { id: 'u8b13-1', num: 1, before: '', after: ' your names.', accepted: ['Write', 'write'], displayAnswer: 'Write', explanationVi: 'Write your names. (Hãy viết tên của các em vào.)' },
  { id: 'u8b13-2', num: 2, before: '', after: ' your mobile phone!', accepted: ["Don't touch", "don't touch"], displayAnswer: "Don't touch", explanationVi: "Don't touch your mobile phone! (Đừng chạm vào điện thoại di động!)" },
  { id: 'u8b13-3', num: 3, before: '', after: ' your books at page 20.', accepted: ['Open', 'open'], displayAnswer: 'Open', explanationVi: 'Open your books at page 20. (Mở sách trang 20.)' },
  { id: 'u8b13-4', num: 4, before: '', after: ' a taxi for me, please.', accepted: ['Call', 'call'], displayAnswer: 'Call', explanationVi: 'Call a taxi for me, please. (Làm ơn gọi giúp tôi một chiếc taxi.)' },
  { id: 'u8b13-5', num: 5, before: '', after: ' careful.', accepted: ['Be', 'be'], displayAnswer: 'Be', explanationVi: 'Be careful. (Hãy cẩn thận.)' },
  { id: 'u8b13-6', num: 6, before: '', after: ' to his explanation!', accepted: ['Listen', 'listen'], displayAnswer: 'Listen', explanationVi: 'Listen to his explanation! (Hãy lắng nghe lời giải thích của anh ấy!)' },
  { id: 'u8b13-7', num: 7, before: '', after: ' these words again!', accepted: ['Repeat', 'repeat'], displayAnswer: 'Repeat', explanationVi: 'Repeat these words again! (Hãy lặp lại những từ này!)' },
  { id: 'u8b13-8', num: 8, before: '', after: ' these programmes on the computer!', accepted: ['Install', 'install'], displayAnswer: 'Install', explanationVi: 'Install these programmes... (Cài đặt các chương trình này lên máy tính — sách in nhầm "programmers").' },
  { id: 'u8b13-9', num: 9, before: '', after: ' the flowers, please.', accepted: ['Water', 'water'], displayAnswer: 'Water', explanationVi: 'Water the flowers, please. (Làm ơn tưới hoa giúp nhé.)' },
  { id: 'u8b13-10', num: 10, before: '', after: " coffee! I don't like it!", accepted: ["Don't order", "don't order"], displayAnswer: "Don't order", explanationVi: "Don't order coffee! (Đừng gọi cà phê! Tôi không thích nó!)" },
];

export const U8_EX_B14_DIALOGUE_BOX = [
  "Don't clean my room.",
  'Go straight for two blocks.',
  'Please fill it out.',
  'Please bring me a glass of water.',
  "Please don't open the window.",
  'Please say that again.',
  'Don’t eat candy, and get more exercise.',
  'Please take it to the post office.',
  "Please don't wake him up.",
  'Call me in thirty minutes.',
];

export const U8_EX_B14_DIALOGUE: {
  id: string;
  num: number;
  context: string;
  answer: string;
  explanationVi: string;
}[] = [
  { id: 'u8b14-1', num: 1, context: 'The package is ready. ______', answer: 'Please take it to the post office.', explanationVi: 'Bưu kiện đã xong → Làm ơn mang nó ra bưu điện.' },
  { id: 'u8b14-2', num: 2, context: "I'm sorry. I didn't hear you. ______", answer: 'Please say that again.', explanationVi: 'Tôi không nghe rõ → Làm ơn nói lại câu đó.' },
  { id: 'u8b14-3', num: 3, context: "It's cold in here! ______", answer: "Please don't open the window.", explanationVi: 'Trong này lạnh quá → Làm ơn đừng mở cửa sổ.' },
  { id: 'u8b14-4', num: 4, context: "Here's the hotel registration form. ______", answer: 'Please fill it out.', explanationVi: 'Phiếu đăng ký khách sạn → Làm ơn điền thông tin vào phiếu.' },
  { id: 'u8b14-5', num: 5, context: '“How can I lose weight, doctor?” — ______', answer: 'Don’t eat candy, and get more exercise.', explanationVi: 'Cách giảm cân → Đừng ăn kẹo và hãy tập thể dục nhiều hơn.' },
  { id: 'u8b14-6', num: 6, context: '"Where’s Dad?" — "He’s taking a nap. ______"', answer: "Please don't wake him up.", explanationVi: 'Bố đang chợp mắt → Làm ơn đừng đánh thức bố.' },
  { id: 'u8b14-7', num: 7, context: '______ — "Ok! Is that all?"', answer: 'Please bring me a glass of water.', explanationVi: 'Gọi phục vụ → Làm ơn mang cho tôi một cốc nước. — Vâng! Còn gì nữa không ạ?' },
  { id: 'u8b14-8', num: 8, context: '"Maria, it’s almost time to leave." — "I’m not ready. ______"', answer: 'Call me in thirty minutes.', explanationVi: 'Mình chưa sẵn sàng → Gọi lại cho mình sau 30 phút nữa nhé.' },
  { id: 'u8b14-9', num: 9, context: '"Excuse me, where’s the travel agency?" — ______', answer: 'Go straight for two blocks.', explanationVi: 'Chỉ đường → Đi thẳng qua hai dãy nhà.' },
  { id: 'u8b14-10', num: 10, context: "______ I'll do it myself.", answer: "Don't clean my room.", explanationVi: 'Tôi sẽ tự làm → Đừng dọn phòng tôi (sách in nhầm "dean" → clean).' },
];

export const U8_EX_B15_PREPS: U8FillItem[] = [
  { id: 'u8b15-1', num: 1, before: 'Do you play sports ', after: ' school?', accepted: ['at'], displayAnswer: 'at', explanationVi: 'at school (ở trường).' },
  { id: 'u8b15-2', num: 2, before: 'Anne goes swimming ', after: ' Saturdays and Sundays.', accepted: ['on'], displayAnswer: 'on', explanationVi: 'Trước các thứ trong tuần dùng "on".' },
  { id: 'u8b15-3', num: 3, before: 'Sports is good ', after: ' your health.', accepted: ['for'], displayAnswer: 'for', explanationVi: 'be good for + N (tốt cho sức khỏe).' },
  { id: 'u8b15-4', num: 4, before: 'Jim is very good ', after: ' volleyball and basketball.', accepted: ['at'], displayAnswer: 'at', explanationVi: 'be good at + môn thể thao (giỏi môn gì).' },
  { id: 'u8b15-5', num: 5, before: 'My karate club is ', after: ' Hoang Dieu Street.', accepted: ['on', 'in'], displayAnswer: 'on', explanationVi: 'Tên đường không có số nhà dùng "on" (US) hoặc "in" (UK).' },
  { id: 'u8b15-6', num: 6, before: 'What sports do you play ', after: ' your free time?', accepted: ['in'], displayAnswer: 'in', explanationVi: 'in one’s free time (vào thời gian rảnh).' },
  { id: 'u8b15-7', num: 7, before: 'Pelé was born ', after: ' October 21st, 1940.', accepted: ['on'], displayAnswer: 'on', explanationVi: 'Có cả ngày tháng cụ thể (October 21st) → dùng "on".' },
  { id: 'u8b15-8', num: 8, before: '', after: ' 1958, ___ the age of 17, Pelé won his first World Cup. (Điền: In / at)', accepted: ['In / at', 'in / at', 'In, at', 'in, at', 'In at', 'in at'], displayAnswer: 'In / at', explanationVi: 'Trước năm dùng "In" (In 1958); cụm cố định "at the age of 17" (ở tuổi 17).' },
];

/* ============================================================================
 * 4. BÀI TẬP C. READING COMPREHENSION (TẬP 2 · TR. 37–39)
 * ============================================================================ */

export const U8_EX_C1_BOX = ['tennis', 'twice', 'favourite', 'game', 'often', 'sport'];

export const U8_EX_C1_DIALOGUE: {
  speaker: 'Peter' | 'Tim';
  before: string;
  blankId?: string;
  num?: number;
  after?: string;
  answer?: string;
  explanationVi?: string;
}[] = [
  { speaker: 'Peter', before: "What's your ", blankId: 'u8c1-1', num: 1, after: ' sport, Matthew?', answer: 'favourite', explanationVi: 'favourite sport (môn thể thao yêu thích).' },
  { speaker: 'Tim', before: 'Hmm, probably basketball. But I also like ', blankId: 'u8c1-2', num: 2, after: '.', answer: 'tennis', explanationVi: 'Câu sau Peter hỏi "Are you a good tennis player?" → tennis.' },
  { speaker: 'Peter', before: 'Are you a good tennis player?' },
  { speaker: 'Tim', before: "I'm ok, I think." },
  { speaker: 'Peter', before: 'How ', blankId: 'u8c1-3', num: 3, after: ' do you play a week?', answer: 'often', explanationVi: 'How often (bao lâu một lần — hỏi tần suất).' },
  { speaker: 'Tim', before: 'What? Tennis or basketball?' },
  { speaker: 'Peter', before: 'Both.' },
  { speaker: 'Tim', before: 'Well, I play tennis ', blankId: 'u8c1-4', num: 4, after: " a week, and basketball four times a week. I'm in a team.", answer: 'twice', explanationVi: 'twice a week (hai lần một tuần).' },
  { speaker: 'Peter', before: 'Oh really? You do a lot of sport.' },
  { speaker: 'Tim', before: "True. What about you? What's your favourite ", blankId: 'u8c1-5', num: 5, after: '?', answer: 'sport', explanationVi: 'Hỏi ngược lại môn thể thao yêu thích → sport.' },
  { speaker: 'Peter', before: 'Watching basketball on TV.' },
  { speaker: 'Tim', before: "Oh, would you like to watch tomorrow's ", blankId: 'u8c1-6', num: 6, after: ' with me?', answer: 'game', explanationVi: "tomorrow's game (trận đấu ngày mai)." },
  { speaker: 'Peter', before: 'Sure, why not?' },
];

export const U8_EX_C2_PASSAGE =
  "There are some games for children such as chess, skipping rope, hide-and-seek, computer games, and board games. Computer games are my favourite. There are some good things about playing computer games. First, you'll become quicker and cleverer because you must play quickly and think a lot. Next, playing computer games helps me give attention on things better. This is useful for my studies, too. Then, playing computer games also helps me find answers to problems better. This is fantastic for doing Maths. Finally, playing computer games helps me get better at doing different things at the same time. However, children shouldn't play computer games for more than an hour at a time.";

export const U8_EX_C2_QA: {
  id: string;
  num: number;
  question: string;
  accepted: string[];
  displayAnswer: string;
  explanationVi: string;
}[] = [
  {
    id: 'u8c2-1',
    num: 1,
    question: "Name two children's games.",
    accepted: [
      'chess and skipping rope',
      'chess, skipping rope',
      'chess and hide-and-seek',
      'skipping rope and hide-and-seek',
      'chess and computer games',
      'hide-and-seek and computer games',
    ],
    displayAnswer: 'Chess and skipping rope (or hide-and-seek, computer games).',
    explanationVi: 'Câu 1 nêu: chess (cờ vua), skipping rope (nhảy dây), hide-and-seek (trốn tìm), computer games.',
  },
  {
    id: 'u8c2-2',
    num: 2,
    question: "What are the writer's favourite games?",
    accepted: ['Computer games.', 'Computer games are his favourite.', 'Computer games are her favourite.', 'They are computer games.'],
    displayAnswer: 'Computer games.',
    explanationVi: 'Câu 2: "Computer games are my favourite." (Sách in nhầm "write’s" → writer’s).',
  },
  {
    id: 'u8c2-3',
    num: 3,
    question: 'How many good things are there about playing computer games?',
    accepted: ['4', 'Four', 'There are four.', 'There are four good things.', 'There are 4 good things.'],
    displayAnswer: 'There are four good things.',
    explanationVi: 'Đoạn văn liệt kê 4 lợi ích: First..., Next..., Then..., Finally...',
  },
  {
    id: 'u8c2-4',
    num: 4,
    question: 'Does playing computer games help you become cleverer?',
    accepted: ['Yes, it does.', 'Yes.'],
    displayAnswer: 'Yes, it does.',
    explanationVi: '"First, you’ll become quicker and cleverer..." → Yes, it does.',
  },
  {
    id: 'u8c2-5',
    num: 5,
    question: 'What subject can benefit from playing computer games?',
    accepted: ['Maths.', 'Math.', 'Maths can benefit from playing computer games.'],
    displayAnswer: 'Maths.',
    explanationVi: '"This is fantastic for doing Maths." → Môn Toán (Maths).',
  },
  {
    id: 'u8c2-6',
    num: 6,
    question: "What shouldn't children do?",
    accepted: [
      "Children shouldn't play computer games for more than an hour at a time.",
      "They shouldn't play computer games for more than an hour at a time.",
      'Play computer games for more than an hour at a time.',
    ],
    displayAnswer: "Children shouldn't play computer games for more than an hour at a time.",
    explanationVi: 'Câu cuối: Trẻ em không nên chơi game máy tính quá 1 tiếng mỗi lần.',
  },
];

export const U8_EX_C3_PASSAGE =
  "Tuan and Khoa are students in grade 6. They are good friends. At school, they are in the same class. They live near school, and they walk to school every morning. In the afternoon, they often go to their sports club. They like sports very much. Tuan plays badminton, and Khoa plays table tennis. Sometimes they go swimming or play soccer with their classmates. They don't have time to go camping.";

export const U8_EX_C3_TF: {
  id: string;
  num: number;
  statement: string;
  isTrue: boolean;
  explanationVi: string;
}[] = [
  { id: 'u8c3-1', num: 1, statement: 'Tuan and Khoa are not in the same class.', isTrue: false, explanationVi: 'Sai (F): "At school, they are in the same class." (Họ học cùng lớp).' },
  { id: 'u8c3-2', num: 2, statement: 'They are good friends.', isTrue: true, explanationVi: 'Đúng (T): "They are good friends."' },
  { id: 'u8c3-3', num: 3, statement: 'They go to school by bicycle.', isTrue: false, explanationVi: 'Sai (F): "they walk to school every morning." (Họ đi bộ, không đi xe đạp).' },
  { id: 'u8c3-4', num: 4, statement: 'In the afternoon, they often go to their sports club.', isTrue: true, explanationVi: 'Đúng (T): Đúng nguyên văn câu 5.' },
  { id: 'u8c3-5', num: 5, statement: 'Tuan plays table tennis.', isTrue: false, explanationVi: 'Sai (F): Tuan chơi cầu lông (badminton), còn Khoa mới chơi bóng bàn (table tennis).' },
  { id: 'u8c3-6', num: 6, statement: "They don't play sports with their classmates.", isTrue: false, explanationVi: 'Sai (F): "Sometimes they go swimming or play soccer with their classmates."' },
  { id: 'u8c3-7', num: 7, statement: 'They go swimming every day.', isTrue: false, explanationVi: 'Sai (F): Họ chỉ thỉnh thoảng (Sometimes) đi bơi, không phải ngày nào cũng đi.' },
  { id: 'u8c3-8', num: 8, statement: 'They never go camping.', isTrue: true, explanationVi: 'Đúng (T): "They don’t have time to go camping." (Họ không có thời gian đi cắm trại).' },
];

export const U8_EX_C4_PASSAGE =
  '"Water polo is a new sport at our school, but we have a good team now. We practice after school on Thursday at the Northside Pool and we\'re doing well in the National Schools Competition. There are seven players in a water polo team. The game is a bit like football because each team tries to score a goal with a ball. But in water polo you don\'t use your feet - you catch and throw the ball with one hand. And you never stop swimming. A game lasts 32 minutes, and in that time you swim up and down a 30-metre pool lots of times. If you aren\'t fit, water polo isn\'t the sport for you! For me, it\'s great, because I love being in the water and I can swim fast. I also enjoy being part of a team. We have some excellent players and we\'re all good friends. So it\'s fun and it\'s also a fantastic way to get fit." — Leo Johnson';

export const U8_EX_C4_MCQ: {
  id: string;
  num: number;
  prompt: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  explanationVi: string;
}[] = [
  {
    id: 'u8c4-1',
    num: 1,
    prompt: 'People play water polo ______.',
    options: ['in a stadium', 'in a swimming pool', 'at the beach'],
    correctIndex: 1,
    explanationVi: 'Bài viết ghi: "at the Northside Pool" và "a 30-metre pool" → trong bể bơi (B).',
  },
  {
    id: 'u8c4-2',
    num: 2,
    prompt: 'His team plays ______.',
    options: ['well', 'badly', 'in a new competition'],
    correctIndex: 0,
    explanationVi: '"we’re doing well in the National Schools Competition" → chơi rất tốt (A).',
  },
  {
    id: 'u8c4-3',
    num: 3,
    prompt: 'Water polo players ______.',
    options: ['often play football', 'bounce the ball', "don't kick the ball"],
    correctIndex: 2,
    explanationVi: '"you don’t use your feet - you catch and throw the ball with one hand" → không đá bóng bằng chân (C).',
  },
  {
    id: 'u8c4-4',
    num: 4,
    prompt: 'In a water polo game, players ______.',
    options: ["can't use their hands", 'sometimes swim 30 metres', 'swim all the time'],
    correctIndex: 2,
    explanationVi: '"And you never stop swimming." → bơi liên tục suốt trận (C).',
  },
  {
    id: 'u8c4-5',
    num: 5,
    prompt: 'Leo ______.',
    options: ["isn't very fit", 'can swim quickly', 'likes playing individually'],
    correctIndex: 1,
    explanationVi: '"I can swim fast" = swim quickly (bơi nhanh) → B.',
  },
];

/* ============================================================================
 * 5. BÀI TẬP D. WRITING (TẬP 2 · TR. 40–41)
 * ============================================================================ */

export const U8_EX_D1_REORDER: U8SentenceTask[] = [
  { id: 'u8d1-1', num: 1, prompt: 'do / when / do / you / sport / ?', accepted: ['When do you do sport?'], displayAnswer: 'When do you do sport?', explanationVi: 'When + do (trợ ĐT) + you + do sport?' },
  { id: 'u8d1-2', num: 2, prompt: 'which / you / do / sports / at / do / school / ?', accepted: ['Which sports do you do at school?'], displayAnswer: 'Which sports do you do at school?', explanationVi: 'Which sports + do + you + do at school?' },
  { id: 'u8d1-3', num: 3, prompt: 'favourite / are / your / who / sports stars / ?', accepted: ['Who are your favourite sports stars?'], displayAnswer: 'Who are your favourite sports stars?', explanationVi: 'Who + are + your favourite sports stars?' },
  { id: 'u8d1-4', num: 4, prompt: 'do / you / go / how often / running / ?', accepted: ['How often do you go running?'], displayAnswer: 'How often do you go running?', explanationVi: 'How often + do + you + go running?' },
  { id: 'u8d1-5', num: 5, prompt: 'team / sports / play / you / do / ?', accepted: ['Do you play team sports?'], displayAnswer: 'Do you play team sports?', explanationVi: 'Câu hỏi Yes/No: Do + you + play team sports?' },
  { id: 'u8d1-6', num: 6, prompt: 'what / TV / you / do / on / sports / watch / ?', accepted: ['What sports do you watch on TV?'], displayAnswer: 'What sports do you watch on TV?', explanationVi: 'What sports + do + you + watch on TV?' },
  {
    id: 'u8d1-7',
    num: 7,
    prompt: 'what / football / is / favourite / your / team / ?',
    accepted: ['What is your favourite football team?', 'Is football your favourite team?'],
    displayAnswer: 'What is your favourite football team?',
    explanationVi: 'Sách in lỗi dấu "/" thành chữ "I" và thiếu "what" → câu hoàn chỉnh: What is your favourite football team?',
  },
  { id: 'u8d1-8', num: 8, prompt: 'swimming / you / do / go / how often / ?', accepted: ['How often do you go swimming?'], displayAnswer: 'How often do you go swimming?', explanationVi: 'How often + do + you + go swimming?' },
];

export const U8_EX_D2_REWRITE: U8SentenceTask[] = [
  {
    id: 'u8d2-1',
    num: 1,
    prompt: 'What sport do you like best?',
    starter: 'What is',
    accepted: ['What is your favourite sport?', 'What is your favorite sport?'],
    displayAnswer: 'What is your favourite sport?',
    explanationVi: 'like ... best = be one’s favourite ... → What is your favourite sport?',
  },
  {
    id: 'u8d2-2',
    num: 2,
    prompt: 'Mark plays football better than Tim.',
    starter: "Tim doesn't",
    accepted: ["Tim doesn't play football as well as Mark.", "Tim doesn't play football so well as Mark."],
    displayAnswer: "Tim doesn't play football as well as Mark.",
    explanationVi: 'So sánh hơn "better than" ↔ so sánh không bằng "doesn’t play ... as well as".',
  },
  {
    id: 'u8d2-3',
    num: 3,
    prompt: 'Beckham was a very good football player.',
    starter: 'Beckham played',
    accepted: ['Beckham played football very well.'],
    displayAnswer: 'Beckham played football very well.',
    explanationVi: 'be a very good + N player ↔ played + N + very well (tính từ good → trạng từ well).',
  },
  {
    id: 'u8d2-4',
    num: 4,
    prompt: 'How long have you played basketball?',
    starter: 'When',
    accepted: ['When did you start playing basketball?', 'When did you begin playing basketball?', 'When did you start to play basketball?'],
    displayAnswer: 'When did you start playing basketball?',
    explanationVi: 'How long have you + V3 ↔ When did you start / begin + V-ing?',
  },
  {
    id: 'u8d2-5',
    num: 5,
    prompt: 'Shall we play badminton this weekend?',
    starter: 'How about',
    accepted: ['How about playing badminton this weekend?'],
    displayAnswer: 'How about playing badminton this weekend?',
    explanationVi: 'Shall we + V? ↔ How about + V-ing?',
  },
  {
    id: 'u8d2-6',
    num: 6,
    prompt: 'No sport in Britain is as popular as football.',
    starter: 'Football',
    accepted: ['Football is the most popular sport in Britain.'],
    displayAnswer: 'Football is the most popular sport in Britain.',
    explanationVi: 'Không môn nào phổ biến bằng bóng đá ↔ Bóng đá là môn phổ biến nhất ở Anh (so sánh nhất).',
  },
  {
    id: 'u8d2-7',
    num: 7,
    prompt: 'My brother is not so interested in basketball as I am.',
    starter: 'I',
    accepted: ['I am more interested in basketball than my brother.', 'I am more interested in basketball than my brother is.'],
    displayAnswer: 'I am more interested in basketball than my brother.',
    explanationVi: 'Anh trai không thích bằng tôi ↔ Tôi thích bóng rổ hơn anh trai tôi.',
  },
  {
    id: 'u8d2-8',
    num: 8,
    prompt: "It's good for you to do morning exercise regularly.",
    starter: 'You',
    accepted: ['You should do morning exercise regularly.'],
    displayAnswer: 'You should do morning exercise regularly.',
    explanationVi: "It's good for you to V ↔ You should + V (Sách in nhầm 'tor' → 'for').",
  },
];

export const U8_EX_D3_SPORT_TEMPLATES = [
  {
    id: 'football',
    nameVi: 'Bóng đá (Football)',
    en: 'My favourite sport is football. It is a very exciting team sport with eleven players in each team. I usually play football with my friends at the school yard every Tuesday and Sunday afternoon. To play football, we only need a ball and sports shoes. I love football because it helps me stay healthy, make more friends, and feel relaxed after school.',
    vi: 'Môn thể thao yêu thích của mình là bóng đá. Đây là một môn đồng đội rất thú vị với 11 cầu thủ mỗi đội. Mình thường đá bóng với bạn bè ở sân trường mỗi chiều thứ Ba và Chủ nhật. Để chơi bóng đá, chúng mình chỉ cần một quả bóng và giày thể thao. Mình yêu bóng đá vì nó giúp mình khỏe mạnh, kết thêm nhiều bạn và thư giãn sau giờ học.',
  },
  {
    id: 'badminton',
    nameVi: 'Cầu lông (Badminton)',
    en: 'My favourite sport is badminton. It is an easy and fun sport that two or four people can play together. I often play badminton with my dad in the park near my house every morning. We need two rackets, a shuttlecock, and a net to play. I like badminton because it makes me quicker, stronger, and happier every day.',
    vi: 'Môn thể thao yêu thích của mình là cầu lông. Đây là môn dễ chơi và vui nhộn mà 2 hoặc 4 người có thể chơi cùng nhau. Mình thường đánh cầu lông với bố ở công viên gần nhà mỗi sáng. Chúng mình cần hai cây vợt, một quả cầu và một tấm lưới. Mình thích cầu lông vì nó giúp mình nhanh nhẹn, khỏe mạnh và vui vẻ hơn mỗi ngày.',
  },
  {
    id: 'swimming',
    nameVi: 'Bơi lội (Swimming)',
    en: 'My favourite sport is swimming. I go swimming twice a week at the sports centre near my school, especially in summer. When I go swimming, I always bring my swimsuit and goggles. I enjoy swimming very much because it is a great way to keep fit, grow taller, and cool down on hot days.',
    vi: 'Môn thể thao yêu thích của mình là bơi lội. Mình đi bơi hai lần một tuần ở trung tâm thể thao gần trường, đặc biệt là vào mùa hè. Khi đi bơi, mình luôn mang theo đồ bơi và kính bơi. Mình rất thích bơi vì đây là cách tuyệt vời để giữ dáng, cao lớn hơn và giải nhiệt trong những ngày nắng nóng.',
  },
];
