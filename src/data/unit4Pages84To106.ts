/**
 * Detailed verified textbook data for Unit 4: My Neighbourhood
 * Source: "Chinh phục Ngữ pháp và Bài tập Tiếng Anh 6 - Tập 1 (Global Success)"
 * Covers Book Pages 84–106 (Grammar pp.84–85, Pronunciation pp.85–88,
 * Exercises I–IV pp.89–98, and Complete 12-Part TEST FOR UNIT 4 pp.99–106).
 */

/* ============================================================================
 * A. THEORY VISUAL DATA (BOOK pp. 84–88)
 * ========================================================================== */

export interface U4PronunciationSign {
  id: string;
  sound: 'short_i' | 'long_i';
  pattern: string;
  ruleVi: string;
  examples: { word: string; ipa: string; meaningVi: string }[];
  exceptionsVi?: string;
}

export const U4_PRONUNCIATION_SIGNS: U4PronunciationSign[] = [
  // 4 dấu hiệu nhận biết /ɪ/ (Tr.86–87)
  {
    id: 'sign-i-1',
    sound: 'short_i',
    pattern: 'a trong danh từ 2 âm tiết đuôi -age',
    ruleVi: 'Chữ "a" trong danh từ có 2 âm tiết tận cùng bằng -age thường đọc là /ɪ/.',
    examples: [
      { word: 'village', ipa: '/ˈvɪlɪdʒ/', meaningVi: 'ngôi làng' },
      { word: 'cottage', ipa: '/ˈkɒtɪdʒ/', meaningVi: 'nhà tranh' },
      { word: 'shortage', ipa: '/ˈʃɔːtɪdʒ/', meaningVi: 'tình trạng thiếu hụt' },
      { word: 'luggage', ipa: '/ˈlʌɡɪdʒ/', meaningVi: 'hành lý' },
    ],
  },
  {
    id: 'sign-i-2',
    sound: 'short_i',
    pattern: 'i trong từ 1 âm tiết + 1–2 phụ âm',
    ruleVi: 'Chữ "i" đứng trong từ 1 âm tiết và tận cùng bằng một hoặc hai phụ âm.',
    examples: [
      { word: 'sit', ipa: '/sɪt/', meaningVi: 'ngồi' },
      { word: 'win', ipa: '/wɪn/', meaningVi: 'chiến thắng' },
      { word: 'miss', ipa: '/mɪs/', meaningVi: 'nhớ / bỏ lỡ' },
      { word: 'ship', ipa: '/ʃɪp/', meaningVi: 'tàu, thuyền' },
    ],
  },
  {
    id: 'sign-i-3',
    sound: 'short_i',
    pattern: 'e trong tiền tố be-, de-, re-, ex-, en-, pre-...',
    ruleVi: 'Chữ "e" nằm trong các tiền tố không nhấn trọng âm (be-, de-, re-, ex-, e-, em-, en-, pre-) đọc là /ɪ/.',
    examples: [
      { word: 'begin', ipa: '/bɪˈɡɪn/', meaningVi: 'bắt đầu' },
      { word: 'become', ipa: '/bɪˈkʌm/', meaningVi: 'trở nên' },
      { word: 'behave', ipa: '/bɪˈheɪv/', meaningVi: 'cư xử' },
      { word: 'return', ipa: '/rɪˈtɜːn/', meaningVi: 'trở về' },
      { word: 'remind', ipa: '/rɪˈmaɪnd/', meaningVi: 'nhắc nhở' },
    ],
  },
  {
    id: 'sign-i-4',
    sound: 'short_i',
    pattern: 'Nhóm chữ ui',
    ruleVi: 'Nhóm chữ "ui" trong một số từ quen thuộc được phát âm là /ɪ/.',
    examples: [
      { word: 'build', ipa: '/bɪld/', meaningVi: 'xây dựng' },
      { word: 'guilt', ipa: '/ɡɪlt/', meaningVi: 'tội lỗi' },
      { word: 'guinea', ipa: '/ˈɡɪni/', meaningVi: 'đồng tiền Anh xưa' },
      { word: 'guitar', ipa: '/ɡɪˈtɑː(r)/', meaningVi: 'đàn ghi-ta' },
    ],
  },
  // 5 dấu hiệu nhận biết /iː/ (Tr.87–88)
  {
    id: 'sign-ii-1',
    sound: 'long_i',
    pattern: 'Nhóm ea (cuối từ hoặc ea + phụ âm)',
    ruleVi: 'Nhóm "ea" tận cùng hoặc đi kèm 1 phụ âm thường đọc kéo dài là /iː/.',
    examples: [
      { word: 'sea', ipa: '/siː/', meaningVi: 'biển' },
      { word: 'seat', ipa: '/siːt/', meaningVi: 'chỗ ngồi' },
      { word: 'easy', ipa: '/ˈiːzi/', meaningVi: 'dễ dàng' },
      { word: 'dream', ipa: '/driːm/', meaningVi: 'giấc mơ' },
      { word: 'tea', ipa: '/tiː/', meaningVi: 'trà' },
      { word: 'meal', ipa: '/miːl/', meaningVi: 'bữa ăn' },
    ],
  },
  {
    id: 'sign-ii-2',
    sound: 'long_i',
    pattern: 'Nhóm ee (cuối từ hoặc ee + 1–2 phụ âm)',
    ruleVi: 'Nhóm hai chữ "ee" đứng cuối từ hoặc trước 1–2 phụ âm luôn đọc là /iː/.',
    examples: [
      { word: 'see', ipa: '/siː/', meaningVi: 'nhìn thấy' },
      { word: 'free', ipa: '/friː/', meaningVi: 'tự do, miễn phí' },
      { word: 'cheese', ipa: '/tʃiːz/', meaningVi: 'phô mai' },
      { word: 'agree', ipa: '/əˈɡriː/', meaningVi: 'đồng ý' },
    ],
  },
  {
    id: 'sign-ii-3',
    sound: 'long_i',
    pattern: 'Chữ e (âm tiết mở / nhấn mạnh)',
    ruleVi: 'Chữ "e" đứng cuối từ ngắn 1 âm tiết hoặc trong âm tiết mở nhấn mạnh.',
    examples: [
      { word: 'be', ipa: '/biː/', meaningVi: 'thì, là, ở' },
      { word: 'she', ipa: '/ʃiː/', meaningVi: 'cô ấy' },
      { word: 'we', ipa: '/wiː/', meaningVi: 'chúng tôi' },
      { word: 'Egypt', ipa: '/ˈiːdʒɪpt/', meaningVi: 'Ai Cập' },
      { word: 'secret', ipa: '/ˈsiːkrət/', meaningVi: 'bí mật' },
    ],
  },
  {
    id: 'sign-ii-4',
    sound: 'long_i',
    pattern: 'Nhóm ei sau âm /s/ (chữ c, s)',
    ruleVi: 'Nhóm "ei" đứng sau chữ c/s (âm /s/) và có 1–2 phụ âm theo sau đọc là /iː/.',
    examples: [
      { word: 'ceiling', ipa: '/ˈsiːlɪŋ/', meaningVi: 'trần nhà' },
      { word: 'receive', ipa: '/rɪˈsiːv/', meaningVi: 'nhận được' },
      { word: 'receipt', ipa: '/rɪˈsiːt/', meaningVi: 'giấy biên lai' },
    ],
    exceptionsVi: 'Ngoại lệ: eight /eɪt/ (số 8), height /haɪt/ (chiều cao), heir /eə(r)/ (người thừa kế).',
  },
  {
    id: 'sign-ii-5',
    sound: 'long_i',
    pattern: 'Nhóm ie ở giữa một từ',
    ruleVi: 'Nhóm "ie" nằm ở giữa từ thường được phát âm là /iː/.',
    examples: [
      { word: 'chief', ipa: '/tʃiːf/', meaningVi: 'thủ lĩnh' },
      { word: 'believe', ipa: '/bɪˈliːv/', meaningVi: 'tin tưởng' },
      { word: 'belief', ipa: '/bɪˈliːf/', meaningVi: 'niềm tin' },
      { word: 'relieve', ipa: '/rɪˈliːv/', meaningVi: 'làm dịu nhẹ' },
    ],
    exceptionsVi: 'Ngoại lệ: friend /frend/ (bạn bè), science /ˈsaɪəns/ (khoa học).',
  },
];

/* ============================================================================
 * B. EXERCISES (BOOK pp. 89–98)
 * ========================================================================== */

// I.1 (p.89): Sort 25 words into /ɪ/ vs /iː/
export interface U4SoundWord {
  id: number;
  word: string;
  underline: string;
  ipa: string;
  meaningVi: string;
  group: 'short_i' | 'long_i';
  explainVi: string;
}

export const U4_EX_I1_WORDS: U4SoundWord[] = [
  { id: 1, word: 'see', underline: 'ee', ipa: '/siː/', meaningVi: 'nhìn', group: 'long_i', explainVi: 'Nhóm "ee" đọc là /iː/.' },
  { id: 2, word: 'milk', underline: 'i', ipa: '/mɪlk/', meaningVi: 'sữa', group: 'short_i', explainVi: 'Từ 1 âm tiết có "i" + 2 phụ âm → /ɪ/.' },
  { id: 3, word: 'read', underline: 'ea', ipa: '/riːd/', meaningVi: 'đọc', group: 'long_i', explainVi: 'Nhóm "ea" đọc là /iː/.' },
  { id: 4, word: 'thing', underline: 'i', ipa: '/θɪŋ/', meaningVi: 'đồ vật', group: 'short_i', explainVi: '"i" trong từ 1 âm tiết → /ɪ/.' },
  { id: 5, word: 'sit', underline: 'i', ipa: '/sɪt/', meaningVi: 'ngồi', group: 'short_i', explainVi: '"i" trong từ 1 âm tiết sit → /ɪ/.' },
  { id: 6, word: 'leave', underline: 'ea', ipa: '/liːv/', meaningVi: 'rời đi', group: 'long_i', explainVi: 'Nhóm "ea" đọc là /iː/.' },
  { id: 7, word: 'busy', underline: 'u', ipa: '/ˈbɪzi/', meaningVi: 'bận rộn', group: 'short_i', explainVi: 'Từ đặc biệt: chữ "u" trong busy đọc là /ɪ/.' },
  { id: 8, word: 'sleep', underline: 'ee', ipa: '/sliːp/', meaningVi: 'ngủ', group: 'long_i', explainVi: 'Nhóm "ee" đọc là /iː/.' },
  { id: 9, word: 'police', underline: 'i', ipa: '/pəˈliːs/', meaningVi: 'cảnh sát', group: 'long_i', explainVi: 'Từ gốc Pháp: "i" trong police đọc là /iː/.' },
  { id: 10, word: 'sheep', underline: 'ee', ipa: '/ʃiːp/', meaningVi: 'con cừu', group: 'long_i', explainVi: 'Nhóm "ee" đọc là /iː/.' },
  { id: 11, word: 'beach', underline: 'ea', ipa: '/biːtʃ/', meaningVi: 'bãi biển', group: 'long_i', explainVi: 'Nhóm "ea" đọc là /iː/.' },
  { id: 12, word: 'city', underline: 'i', ipa: '/ˈsɪti/', meaningVi: 'thành phố', group: 'short_i', explainVi: 'Chữ "i" đọc ngắn là /ɪ/.' },
  { id: 13, word: 'sea', underline: 'ea', ipa: '/siː/', meaningVi: 'biển', group: 'long_i', explainVi: 'Nhóm "ea" cuối từ đọc là /iː/.' },
  { id: 14, word: 'slim', underline: 'i', ipa: '/slɪm/', meaningVi: 'mảnh mai', group: 'short_i', explainVi: '"i" trong từ 1 âm tiết → /ɪ/.' },
  { id: 15, word: 'live', underline: 'i', ipa: '/lɪv/', meaningVi: 'sống', group: 'short_i', explainVi: 'Động từ live đọc là /lɪv/ (/ɪ/).' },
  { id: 16, word: 'cheese', underline: 'ee', ipa: '/tʃiːz/', meaningVi: 'phô mai', group: 'long_i', explainVi: 'Nhóm "ee" đọc là /iː/.' },
  { id: 17, word: 'remind', underline: 'e', ipa: '/rɪˈmaɪnd/', meaningVi: 'nhắc nhở', group: 'short_i', explainVi: 'Tiền tố "re-" đọc là /ɪ/.' },
  { id: 18, word: 'become', underline: 'e', ipa: '/bɪˈkʌm/', meaningVi: 'trở nên', group: 'short_i', explainVi: 'Tiền tố "be-" đọc là /ɪ/.' },
  { id: 19, word: 'behave', underline: 'e', ipa: '/bɪˈheɪv/', meaningVi: 'cư xử', group: 'short_i', explainVi: 'Tiền tố "be-" đọc là /ɪ/.' },
  { id: 20, word: 'meal', underline: 'ea', ipa: '/miːl/', meaningVi: 'bữa ăn', group: 'long_i', explainVi: 'Nhóm "ea" đọc là /iː/.' },
  { id: 21, word: 'dream', underline: 'ea', ipa: '/driːm/', meaningVi: 'giấc mơ', group: 'long_i', explainVi: 'Nhóm "ea" đọc là /iː/.' },
  { id: 22, word: 'village', underline: 'a', ipa: '/ˈvɪlɪdʒ/', meaningVi: 'ngôi làng', group: 'short_i', explainVi: 'Danh từ 2 âm tiết đuôi -age đọc là /ɪ/.' },
  { id: 23, word: 'cheap', underline: 'ea', ipa: '/tʃiːp/', meaningVi: 'rẻ', group: 'long_i', explainVi: 'Nhóm "ea" đọc là /iː/.' },
  { id: 24, word: 'win', underline: 'i', ipa: '/wɪn/', meaningVi: 'chiến thắng', group: 'short_i', explainVi: '"i" trong từ 1 âm tiết → /ɪ/.' },
  { id: 25, word: 'guitar', underline: 'ui', ipa: '/ɡɪˈtɑː(r)/', meaningVi: 'đàn ghi-ta', group: 'short_i', explainVi: 'Nhóm "ui" trong guitar đọc là /ɪ/.' },
];

// Shared MCQ interface
export interface U4PhoneticsOption {
  word: string;
  underline: string;
  ipa: string;
}

export interface U4PhoneticsMcq {
  id: number;
  options: [U4PhoneticsOption, U4PhoneticsOption, U4PhoneticsOption, U4PhoneticsOption];
  correctIndex: 0 | 1 | 2 | 3;
  explainVi: string;
}

// I.2 (p.89): 10 Phonetics odd-sound MCQs
export const U4_EX_I2_PHONETICS: U4PhoneticsMcq[] = [
  {
    id: 1,
    options: [
      { word: 'meet', underline: 'ee', ipa: '/miːt/' },
      { word: 'pretty', underline: 'e', ipa: '/ˈprɪti/' },
      { word: 'seen', underline: 'ee', ipa: '/siːn/' },
      { word: 'sheep', underline: 'ee', ipa: '/ʃiːp/' },
    ],
    correctIndex: 1,
    explainVi: 'pretty có chữ "e" đọc là /ɪ/, còn meet, seen, sheep đều đọc là /iː/.',
  },
  {
    id: 2,
    options: [
      { word: 'peel', underline: 'ee', ipa: '/piːl/' },
      { word: 'cheap', underline: 'ea', ipa: '/tʃiːp/' },
      { word: 'seat', underline: 'ea', ipa: '/siːt/' },
      { word: 'behave', underline: 'e', ipa: '/bɪˈheɪv/' },
    ],
    correctIndex: 3,
    explainVi: 'behave có tiền tố "be-" đọc là /ɪ/; peel, cheap, seat đọc là /iː/.',
  },
  {
    id: 3,
    options: [
      { word: 'meat', underline: 'ea', ipa: '/miːt/' },
      { word: 'begin', underline: 'e', ipa: '/bɪˈɡɪn/' },
      { word: 'picture', underline: 'i', ipa: '/ˈpɪktʃə(r)/' },
      { word: 'miss', underline: 'i', ipa: '/mɪs/' },
    ],
    correctIndex: 0,
    explainVi: 'meat có "ea" đọc là /iː/; begin, picture, miss đọc là /ɪ/.',
  },
  {
    id: 4,
    options: [
      { word: 'eat', underline: 'ea', ipa: '/iːt/' },
      { word: 'leek', underline: 'ee', ipa: '/liːk/' },
      { word: 'decide', underline: 'e', ipa: '/dɪˈsaɪd/' },
      { word: 'cheek', underline: 'ee', ipa: '/tʃiːk/' },
    ],
    correctIndex: 2,
    explainVi: 'decide có tiền tố "de-" đọc là /ɪ/; eat, leek, cheek đọc là /iː/.',
  },
  {
    id: 5,
    options: [
      { word: 'lick', underline: 'i', ipa: '/lɪk/' },
      { word: 'cheap', underline: 'ea', ipa: '/tʃiːp/' },
      { word: 'chick', underline: 'i', ipa: '/tʃɪk/' },
      { word: 'pill', underline: 'i', ipa: '/pɪl/' },
    ],
    correctIndex: 1,
    explainVi: 'cheap đọc là /iː/; lick, chick, pill đều đọc là /ɪ/.',
  },
  {
    id: 6,
    options: [
      { word: 'live', underline: 'i', ipa: '/lɪv/' },
      { word: 'wide', underline: 'i', ipa: '/waɪd/' },
      { word: 'bicycle', underline: 'i', ipa: '/ˈbaɪsɪkl/' },
      { word: 'exciting', underline: 'i', ipa: '/ɪkˈsaɪtɪŋ/' },
    ],
    correctIndex: 0,
    explainVi: 'live đọc là /ɪ/; wide, bicycle (chữ i đầu), exciting (chữ i giữa) đọc là /aɪ/.',
  },
  {
    id: 7,
    options: [
      { word: 'feet', underline: 'ee', ipa: '/fiːt/' },
      { word: 'seat', underline: 'ea', ipa: '/siːt/' },
      { word: 'near', underline: 'ea', ipa: '/nɪə(r)/' },
      { word: 'team', underline: 'ea', ipa: '/tiːm/' },
    ],
    correctIndex: 2,
    explainVi: 'near đọc là /ɪə/; feet, seat, team đọc là /iː/.',
  },
  {
    id: 8,
    options: [
      { word: 'busy', underline: 'u', ipa: '/ˈbɪzi/' },
      { word: 'city', underline: 'i', ipa: '/ˈsɪti/' },
      { word: 'think', underline: 'i', ipa: '/θɪŋk/' },
      { word: 'terrible', underline: 'i', ipa: '/ˈterəbl/' },
    ],
    correctIndex: 3,
    explainVi: 'terrible có chữ "i" giảm âm đọc là /ə/; busy, city, think đọc là /ɪ/.',
  },
  {
    id: 9,
    options: [
      { word: 'great', underline: 'ea', ipa: '/ɡreɪt/' },
      { word: 'heat', underline: 'ea', ipa: '/hiːt/' },
      { word: 'cheek', underline: 'ee', ipa: '/tʃiːk/' },
      { word: 'peaceful', underline: 'ea', ipa: '/ˈpiːsfl/' },
    ],
    correctIndex: 0,
    explainVi: 'great là ngoại lệ đọc là /eɪ/; heat, cheek, peaceful đọc là /iː/.',
  },
  {
    id: 10,
    options: [
      { word: 'historic', underline: 'i', ipa: '/hɪˈstɒrɪk/' },
      { word: 'expensive', underline: 'i', ipa: '/ɪkˈspensɪv/' },
      { word: 'office', underline: 'i', ipa: '/ˈɒfɪs/' },
      { word: 'finally', underline: 'i', ipa: '/ˈfaɪnəli/' },
    ],
    correctIndex: 3,
    explainVi: 'finally đọc là /aɪ/; historic, expensive, office đọc là /ɪ/.',
  },
];

// II.1 (p.90): 8 Place Pictures
export type U4PlaceSvgKey =
  | 'railway_station'
  | 'art_gallery'
  | 'square'
  | 'museum'
  | 'pagoda'
  | 'palace'
  | 'cathedral'
  | 'stadium';

export interface U4PlacePictureItem {
  id: number;
  svgKey: U4PlaceSvgKey;
  answer: string;
  ipa: string;
  meaningVi: string;
  clueVi: string;
}

export const U4_EX_II1_WORD_BANK = [
  'stadium',
  'museum',
  'cathedral',
  'pagoda',
  'palace',
  'square',
  'art gallery',
  'railway station',
];

export const U4_EX_II1_PLACES: U4PlacePictureItem[] = [
  { id: 1, svgKey: 'railway_station', answer: 'railway station', ipa: '/ˈreɪlweɪ steɪʃn/', meaningVi: 'nhà ga xe lửa', clueVi: 'Nơi tàu hỏa dừng đón/trả khách' },
  { id: 2, svgKey: 'art_gallery', answer: 'art gallery', ipa: '/ˈɑːt ɡæləri/', meaningVi: 'phòng trưng bày nghệ thuật', clueVi: 'Nơi trưng bày tranh vẽ và tác phẩm nghệ thuật' },
  { id: 3, svgKey: 'square', answer: 'square', ipa: '/skweə(r)/', meaningVi: 'quảng trường', clueVi: 'Khoảng không gian rộng giữa thành phố (như Quảng trường Ba Đình)' },
  { id: 4, svgKey: 'museum', answer: 'museum', ipa: '/mjuˈziːəm/', meaningVi: 'bảo tàng', clueVi: 'Bảo tàng Dân tộc học / trưng bày hiện vật lịch sử' },
  { id: 5, svgKey: 'pagoda', answer: 'pagoda', ipa: '/pəˈɡəʊdə/', meaningVi: 'ngôi chùa', clueVi: 'Công trình kiến trúc Phật giáo mái cong nhiều tầng' },
  { id: 6, svgKey: 'palace', answer: 'palace', ipa: '/ˈpæləs/', meaningVi: 'cung điện', clueVi: 'Nơi ở nguy nga tráng lệ của vua chúa' },
  { id: 7, svgKey: 'cathedral', answer: 'cathedral', ipa: '/kəˈθiːdrəl/', meaningVi: 'nhà thờ lớn', clueVi: 'Nhà thờ có tháp chuông cao nhọn cổ kính' },
  { id: 8, svgKey: 'stadium', answer: 'stadium', ipa: '/ˈsteɪdiəm/', meaningVi: 'sân vận động', clueVi: 'Nơi tổ chức các trận bóng đá và thi đấu thể thao lớn' },
];

// II.2 (p.90): 8 sentences (9 blanks) from box
export const U4_EX_II2_WORD_BANK = [
  'convenient',
  'historic',
  'peaceful',
  'fantastic',
  'modern',
  'boring',
  'noisy',
  'narrow',
  'polluted',
];

export interface U4MultiBlankItem {
  id: number;
  parts: string[]; // length = answers.length + 1
  answers: string[][]; // each blank accepts 1+ valid lowercase variants
  explainVi: string;
}

export const U4_EX_II2_ADJ_BOX: U4MultiBlankItem[] = [
  {
    id: 1,
    parts: ["I don't like living in a big city. It's ", ' day and night and the air is so ', '.'],
    answers: [['noisy'], ['polluted']],
    explainVi: 'Thành phố lớn "noisy" (ồn ào) cả ngày lẫn đêm và không khí rất "polluted" (ô nhiễm).',
  },
  {
    id: 2,
    parts: ['The streets in Hoi An ancient town are ', ' and no cars are allowed.'],
    answers: [['narrow']],
    explainVi: 'Đường phố ở phố cổ Hội An "narrow" (hẹp) nên không cho ô tô đi vào.',
  },
  {
    id: 3,
    parts: ["For young people, it's really ", " in the country. It'd be more fun living in town."],
    answers: [['boring']],
    explainVi: 'Với người trẻ, sống ở quê thật "boring" (nhàm chán), sống ở thị trấn vui hơn.',
  },
  {
    id: 4,
    parts: ['We really enjoy staying here. The beach is ', ' and the weather is very nice.'],
    answers: [['fantastic']],
    explainVi: 'Bãi biển thật "fantastic" (tuyệt vời) và thời tiết rất đẹp.',
  },
  {
    id: 5,
    parts: ["There is a supermarket in my neighbourhood, so it's very ", ' to go shopping for food.'],
    answers: [['convenient']],
    explainVi: 'Có siêu thị trong khu phố nên rất "convenient" (thuận tiện) để mua thực phẩm.',
  },
  {
    id: 6,
    parts: ['Without noise and daily stress, life in the countryside is more ', ' and healthier.'],
    answers: [['peaceful']],
    explainVi: 'Không có tiếng ồn và áp lực, cuộc sống ở nông thôn "peaceful" (yên bình) hơn.',
  },
  {
    id: 7,
    parts: ['There are many ', ' buildings and offices in Ho Chi Minh City.'],
    answers: [['modern']],
    explainVi: 'Có nhiều tòa nhà và văn phòng "modern" (hiện đại) ở TP. Hồ Chí Minh.',
  },
  {
    id: 8,
    parts: ["Vietnam's most ", ' city is Hue. It was the home of the Nguyen Kings and it has many palaces and monuments.'],
    answers: [['historic']],
    explainVi: 'Huế là thành phố mang tính lịch sử ("historic") nhất Việt Nam vì có cung điện và di tích triều Nguyễn.',
  },
];

// II.3 (p.91): 8 Adjective pair choices
export interface U4PairChoiceItem {
  id: number;
  before: string;
  after: string;
  pair: [string, string];
  correctIndex: 0 | 1;
  explainVi: string;
}

export const U4_EX_II3_PAIRS: U4PairChoiceItem[] = [
  { id: 1, before: 'The road is not ', after: ' enough for two cars to pass comfortably.', pair: ['wide', 'narrow'], correctIndex: 0, explainVi: 'Con đường không đủ "wide" (rộng) để hai ô tô tránh nhau thoải mái.' },
  { id: 2, before: "Inside the cathedral, it's ", after: ' and quiet.', pair: ['noisy', 'peaceful'], correctIndex: 1, explainVi: 'Bên trong nhà thờ lớn rất "peaceful" (yên bình) và tĩnh lặng (quiet).' },
  { id: 3, before: 'Those shoes are really ', after: ' – they only cost £25.', pair: ['cheap', 'expensive'], correctIndex: 0, explainVi: 'Chỉ có giá 25 bảng (only cost £25) → đôi giày rất "cheap" (rẻ).' },
  { id: 4, before: "My house is rather far from my school, so it's a bit ", after: '.', pair: ['convenient', 'inconvenient'], correctIndex: 1, explainVi: 'Nhà khá xa trường (far from my school) → hơi "inconvenient" (bất tiện).' },
  { id: 5, before: 'Kids always find Christmas ', after: '. They are always looking forward to Christmas.', pair: ['exciting', 'boring'], correctIndex: 0, explainVi: 'Trẻ em luôn mong chờ Giáng sinh → thấy Giáng sinh "exciting" (thú vị, hào hứng).' },
  { id: 6, before: 'The air in the countryside is fresh and ', after: '.', pair: ['polluted', 'unpolluted'], correctIndex: 1, explainVi: 'Không khí ở nông thôn trong lành (fresh) và "unpolluted" (không bị ô nhiễm).' },
  { id: 7, before: 'Hoi An is an ', after: ' town near Da Nang.', pair: ['old', 'modern'], correctIndex: 0, explainVi: 'Hội An là một phố cổ ("old" town) gần Đà Nẵng (và có mạo từ "an" trước nguyên âm o).' },
  { id: 8, before: 'There are a lot of shops nearby, so the streets are always busy and ', after: ' during the day.', pair: ['noisy', 'quiet'], correctIndex: 0, explainVi: 'Nhiều cửa hàng xung quanh nên đường phố luôn nhộn nhịp và "noisy" (ồn ào).' },
];

// II.4 (p.91): 20 Comparative forms (#1 example + #2..#20)
export interface U4CompFormItem {
  id: number;
  base: string;
  accepted: string[];
  ruleTag: string;
  explainVi: string;
}

export const U4_EX_II4_COMP_TABLE: U4CompFormItem[] = [
  { id: 2, base: 'happy', accepted: ['happier'], ruleTag: '-y → -ier', explainVi: 'Tính từ 2 âm tiết tận cùng -y: đổi y → ier (happier).' },
  { id: 3, base: 'carefully', accepted: ['more carefully'], ruleTag: 'Trạng từ dài', explainVi: 'Trạng từ dài tận cùng -ly → thêm more (more carefully).' },
  { id: 4, base: 'famous', accepted: ['more famous'], ruleTag: 'Tính từ dài', explainVi: 'Tính từ 2 âm tiết (đuôi -ous) → more famous.' },
  { id: 5, base: 'short', accepted: ['shorter'], ruleTag: 'Ngắn + -er', explainVi: 'Tính từ 1 âm tiết → thêm -er (shorter).' },
  { id: 6, base: 'big', accepted: ['bigger'], ruleTag: 'CVC gấp đôi', explainVi: '1 nguyên âm + 1 phụ âm (b-i-g) → gấp đôi g + er (bigger).' },
  { id: 7, base: 'special', accepted: ['more special'], ruleTag: 'Tính từ dài', explainVi: 'Tính từ 2 âm tiết → more special.' },
  { id: 8, base: 'expensive', accepted: ['more expensive'], ruleTag: 'Tính từ dài', explainVi: 'Tính từ 3 âm tiết → more expensive.' },
  { id: 9, base: 'attractive', accepted: ['more attractive'], ruleTag: 'Tính từ dài', explainVi: 'Tính từ 3 âm tiết → more attractive.' },
  { id: 10, base: 'thin', accepted: ['thinner'], ruleTag: 'CVC gấp đôi', explainVi: '1 nguyên âm + 1 phụ âm (th-i-n) → gấp đôi n + er (thinner).' },
  { id: 11, base: 'fast', accepted: ['faster'], ruleTag: 'Ngắn + -er', explainVi: 'Tính từ 1 âm tiết kết thúc 2 phụ âm → thêm -er (faster).' },
  { id: 12, base: 'early', accepted: ['earlier'], ruleTag: '-y → -ier', explainVi: 'Tính từ 2 âm tiết tận cùng -y → đổi y thành ier (earlier).' },
  { id: 13, base: 'easily', accepted: ['more easily'], ruleTag: 'Trạng từ dài', explainVi: 'Trạng từ dài có đuôi -ly → more easily.' },
  { id: 14, base: 'large', accepted: ['larger'], ruleTag: 'Đuôi -e + -r', explainVi: 'Tính từ 1 âm tiết tận cùng -e → chỉ thêm -r (larger).' },
  { id: 15, base: 'boring', accepted: ['more boring'], ruleTag: 'Tính từ dài', explainVi: 'Tính từ 2 âm tiết đuôi -ing → more boring.' },
  { id: 16, base: 'tired', accepted: ['more tired'], ruleTag: 'Tính từ dài', explainVi: 'Tính từ đuôi -ed → more tired.' },
  { id: 17, base: 'useful', accepted: ['more useful'], ruleTag: 'Tính từ dài', explainVi: 'Tính từ 2 âm tiết đuôi -ful → more useful.' },
  { id: 18, base: 'heavy', accepted: ['heavier'], ruleTag: '-y → -ier', explainVi: 'Tính từ 2 âm tiết tận cùng -y → đổi y thành ier (heavier).' },
  { id: 19, base: 'good', accepted: ['better'], ruleTag: 'Bất quy tắc', explainVi: 'Ngoại lệ bất quy tắc: good → better.' },
  { id: 20, base: 'clever', accepted: ['cleverer', 'more clever'], ruleTag: '2 dạng đều đúng', explainVi: 'Tính từ 2 âm tiết đuôi -er dùng được cả 2 dạng: cleverer hoặc more clever.' },
];

// II.5 (pp.91–92): 10 comparative sentences from box
export const U4_EX_II5_WORD_BANK = [
  'friendly',
  'useful',
  'important',
  'cold',
  'crowded',
  'bad',
  'high',
  'exciting',
  'thin',
  'narrow',
];

export interface U4SingleBlankItem {
  id: number;
  before: string;
  after: string;
  hint?: string;
  accepted: string[];
  explainVi: string;
}

export const U4_EX_II5_COMP_BOX: U4SingleBlankItem[] = [
  { id: 1, before: 'My shirt is too wide. Do you have any that is ', after: '?', accepted: ['narrower', 'more narrow'], explainVi: 'Áo quá rộng (wide) → cần chiếc hẹp hơn: narrow → narrower / more narrow.' },
  { id: 2, before: 'I like my new dictionary. It is ', after: ' than the last one.', accepted: ['more useful'], explainVi: 'Từ điển mới hữu ích hơn cuốn cũ: useful → more useful.' },
  { id: 3, before: 'In Canada, January is ', after: ' than March.', accepted: ['colder'], explainVi: 'Ở Canada tháng 1 lạnh hơn tháng 3: cold → colder.' },
  { id: 4, before: 'I think that good health is ', after: ' than money.', accepted: ['more important'], explainVi: 'Sức khỏe quan trọng hơn tiền bạc: important → more important.' },
  { id: 5, before: 'You look ', after: '. Have you lost weight?', accepted: ['thinner'], explainVi: 'Bạn mới giảm cân à → trông gầy hơn: thin → thinner (gấp đôi n).' },
  { id: 6, before: "I couldn't get a seat in the restaurant. It was ", after: ' than usual.', accepted: ['more crowded'], explainVi: 'Không tìm được chỗ ngồi vì nhà hàng đông đúc hơn thường lệ: crowded → more crowded.' },
  { id: 7, before: 'Mountains are ', after: ' than hills.', accepted: ['higher'], explainVi: 'Núi cao hơn đồi: high → higher.' },
  { id: 8, before: 'I think that people who live in villages are ', after: ' than people in big cities.', accepted: ['friendlier', 'more friendly'], explainVi: 'Người ở làng thân thiện hơn: friendly → friendlier (hoặc more friendly).' },
  { id: 9, before: 'My exam results were ', after: ' than I expected.', accepted: ['worse'], explainVi: 'Kết quả thi tệ hơn mong đợi: bất quy tắc bad → worse.' },
  { id: 10, before: 'I think New York is ', after: ' than Houston.', accepted: ['more exciting'], explainVi: 'New York thú vị, sôi động hơn Houston: exciting → more exciting.' },
];

// II.6 (pp.92–93): 12 MCQs
export interface U4McqItem {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explainVi: string;
}

export const U4_EX_II6_MCQ: U4McqItem[] = [
  { id: 1, question: 'Living in the suburb is incredibly ____.', options: ['peaceful', 'noisy', 'terrible', 'narrow'], correctIndex: 0, explainVi: 'Sống ở vùng ngoại ô (suburb) vô cùng yên bình (peaceful).' },
  { id: 2, question: "There are a lot of vehicles in the town. It's very ____.", options: ['peaceful', 'fantastic', 'memorial', 'noisy'], correctIndex: 3, explainVi: 'Có rất nhiều xe cộ trong thị trấn nên rất ồn ào (noisy).' },
  { id: 3, question: 'Living in the countryside is ____ than living in the city.', options: ['more expensive', 'more convenient', 'noisier', 'cheaper'], correctIndex: 3, explainVi: 'Sống ở nông thôn rẻ hơn (cheaper) sống ở thành phố.' },
  { id: 4, question: 'A city house is ____ than a country house.', options: ['most modern', 'more modern', 'more moderner', 'modern'], correctIndex: 1, explainVi: 'So sánh hơn của tính từ dài "modern" là "more modern" (không dùng "more moderner").' },
  { id: 5, question: 'The mountain is ____ than we expect.', options: ['higher than', 'more high', 'high', 'higher'], correctIndex: 3, explainVi: 'Trong câu đã có sẵn "than" nên chỉ điền "higher" (tránh lặp "higher than than").' },
  { id: 6, question: 'Traveling by trains is ____ than traveling by air.', options: ['expensive', 'cheap', 'much cheap', 'cheaper'], correctIndex: 3, explainVi: 'Có "than" → dùng so sánh hơn của tính từ ngắn cheap → cheaper.' },
  { id: 7, question: 'The man is ____ me.', options: ['stronger than', 'more strong than', 'stronger', 'strong than'], correctIndex: 0, explainVi: 'Câu chưa có "than" → chọn đầy đủ "stronger than" (strong là tính từ ngắn).' },
  { id: 8, question: 'She is ____ than anyone in the class.', options: ['intelligent', 'more intelligent', 'more intelligent than', 'more shorter'], correctIndex: 1, explainVi: 'Câu đã có "than" nên chọn "more intelligent" (tính từ dài 4 âm tiết).' },
  { id: 9, question: 'They run ____ than me.', options: ['slowly', 'more fast', 'faster', 'fast'], correctIndex: 2, explainVi: 'Trạng từ ngắn "fast" khi so sánh hơn thêm -er → faster (không nói more fast).' },
  { id: 10, question: 'It is ____ than it was yesterday.', options: ['cold', 'colder', 'more cold', 'more colder'], correctIndex: 1, explainVi: 'Tính từ ngắn "cold" → colder.' },
  { id: 11, question: 'She is coming ____ than I am.', options: ['earlier', 'more early', 'early than', 'more earlier'], correctIndex: 0, explainVi: 'Từ 2 âm tiết tận cùng -y: early → earlier.' },
  { id: 12, question: 'My headache is ____ than it was last week.', options: ['good', 'worse', 'worst', 'more better'], correctIndex: 1, explainVi: 'Bất quy tắc: bad → worse (tệ hơn tuần trước).' },
];

// II.7 (p.93): 10 comparative sentences from cues
export interface U4RewriteItem {
  id: number;
  prompt: string;
  prefix?: string;
  accepted: string[];
  explainVi: string;
}

export const U4_EX_II7_CUES: U4RewriteItem[] = [
  { id: 1, prompt: 'Mary / tall / Peter.', accepted: ['Mary is taller than Peter.'], explainVi: 'Mary (số ít → is) + taller than + Peter.' },
  { id: 2, prompt: 'This book / thick / that book.', accepted: ['This book is thicker than that book.'], explainVi: 'This book (số ít → is) + thicker than + that book.' },
  { id: 3, prompt: 'The chair / short / the table.', accepted: ['The chair is shorter than the table.'], explainVi: 'The chair (số ít → is) + shorter than + the table.' },
  { id: 4, prompt: 'These boxes / big / those boxes.', accepted: ['These boxes are bigger than those boxes.'], explainVi: 'These boxes (số nhiều → are) + bigger than (gấp đôi g).' },
  { id: 5, prompt: 'Miss Trang / young / her sister.', accepted: ['Miss Trang is younger than her sister.'], explainVi: 'Miss Trang (số ít → is) + younger than + her sister.' },
  { id: 6, prompt: 'These buildings / high / those buildings.', accepted: ['These buildings are higher than those buildings.'], explainVi: 'These buildings (số nhiều → are) + higher than + those buildings.' },
  { id: 7, prompt: 'The boys / strong / the girls.', accepted: ['The boys are stronger than the girls.'], explainVi: 'The boys (số nhiều → are) + stronger than + the girls.' },
  { id: 8, prompt: 'I / old / my brother.', accepted: ['I am older than my brother.', "I'm older than my brother."], explainVi: 'I + am + older than + my brother.' },
  { id: 9, prompt: 'The dress / long / the red shirt.', accepted: ['The dress is longer than the red shirt.'], explainVi: 'The dress (số ít → is) + longer than + the red shirt.' },
  { id: 10, prompt: 'The exercise / easy / that one.', accepted: ['The exercise is easier than that one.'], explainVi: 'easy đổi -y thành -ier → easier than.' },
];

// II.8 (p.94): 10 comparative + "than" completions
export const U4_EX_II8_COMP_THAN: U4SingleBlankItem[] = [
  { id: 1, before: 'A new house is ', after: ' an old one.', hint: 'expensive', accepted: ['more expensive than'], explainVi: 'expensive (3 âm tiết) → more expensive than.' },
  { id: 2, before: 'Motorbikes are ', after: ' bicycles.', hint: 'fast', accepted: ['faster than'], explainVi: 'fast (1 âm tiết) → faster than.' },
  { id: 3, before: 'My television is ', after: ' his television.', hint: 'modern', accepted: ['more modern than'], explainVi: 'modern (2 âm tiết, không tận cùng -y/-er/-ow/-le) → more modern than.' },
  { id: 4, before: 'Summer is ', after: ' spring.', hint: 'hot', accepted: ['hotter than'], explainVi: 'hot (CVC) → gấp đôi t → hotter than.' },
  { id: 5, before: 'Jane is ', after: ' her sister.', hint: 'beautiful', accepted: ['more beautiful than'], explainVi: 'beautiful (3 âm tiết) → more beautiful than.' },
  { id: 6, before: 'Skirts are ', after: ' dresses.', hint: 'cheap', accepted: ['cheaper than'], explainVi: 'cheap (1 âm tiết) → cheaper than.' },
  { id: 7, before: 'Your stereo is ', after: ' mine.', hint: 'good', accepted: ['better than'], explainVi: 'Bất quy tắc: good → better than.' },
  { id: 8, before: 'A bicycle is often ', after: ' a car in busy cities.', hint: 'convenient', accepted: ['more convenient than'], explainVi: 'convenient (3 âm tiết) → more convenient than.' },
  { id: 9, before: 'David is ', after: ' John.', hint: 'clever', accepted: ['cleverer than', 'more clever than'], explainVi: 'clever có 2 dạng đều đúng: cleverer than hoặc more clever than.' },
  { id: 10, before: 'The weather today is ', after: ' it was yesterday.', hint: 'bad', accepted: ['worse than'], explainVi: 'Bất quy tắc: bad → worse than.' },
];

// II.9 (p.94): 10 "Which ..." comparative questions
export const U4_EX_II9_WHICH: U4SingleBlankItem[] = [
  { id: 1, before: 'Which river is ', after: ', the Red River or the Mekong River?', hint: 'long', accepted: ['longer'], explainVi: 'long → longer (so sánh giữa 2 con sông).' },
  { id: 2, before: 'Which country is ', after: ', China or Vietnam?', hint: 'big', accepted: ['bigger'], explainVi: 'big → bigger (gấp đôi g).' },
  { id: 3, before: 'Which animals are ', after: ', dogs or dolphins?', hint: 'intelligent', accepted: ['more intelligent'], explainVi: 'intelligent (4 âm tiết) → more intelligent.' },
  { id: 4, before: 'Which animals are ', after: ', cats or horses?', hint: 'fast', accepted: ['faster'], explainVi: 'fast → faster.' },
  { id: 5, before: 'Which is ', after: ', water or oil?', hint: 'heavy', accepted: ['heavier'], explainVi: 'heavy (-y → -ier) → heavier.' },
  { id: 6, before: 'Which month is ', after: ', October or June?', hint: 'cold', accepted: ['colder'], explainVi: 'cold → colder.' },
  { id: 7, before: 'Which language is ', after: ', Chinese or English?', hint: 'difficult', accepted: ['more difficult'], explainVi: 'difficult (3 âm tiết) → more difficult.' },
  { id: 8, before: 'Which city is ', after: ', London or Rome?', hint: 'old', accepted: ['older'], explainVi: 'old → older.' },
  { id: 9, before: 'Which city is ', after: ', New York or Paris?', hint: 'big', accepted: ['bigger'], explainVi: 'big → bigger.' },
  { id: 10, before: 'Which mountain is ', after: ', Mount Everest or Mount Fuji?', hint: 'high', accepted: ['higher'], explainVi: 'high → higher.' },
];

// II.10 (pp.94–95): 8 Prepositions (11 blanks)
export const U4_EX_II10_PREP: U4MultiBlankItem[] = [
  { id: 1, parts: ['My house is ', ' the bookstore and the school.'], answers: [['between']], explainVi: 'Cụm "between A and B" = ở giữa A và B.' },
  { id: 2, parts: ['There is a market ', ' front of my school.'], answers: [['in']], explainVi: 'Cụm "in front of" = ở phía trước.' },
  { id: 3, parts: ['The bus stop is ', ' the right, ', ' the post office.'], answers: [['on'], ['opposite']], explainVi: '"on the right" (ở bên phải), "opposite" (đối diện bưu điện).' },
  { id: 4, parts: ["Dad isn't ", " home right now. He's ", ' work.'], answers: [['at'], ['at']], explainVi: 'Cụm cố định: "at home" (ở nhà) và "at work" (ở chỗ làm).' },
  { id: 5, parts: ['There is a supermarket ', ' Nguyen Trai Street.'], answers: [['in', 'on']], explainVi: 'Đáp án sách: "in Nguyen Trai Street" (Anh-Anh dùng "in", Anh-Mỹ dùng "on" đều được chấp nhận).' },
  { id: 6, parts: ['How far is it ', ' Da Nang ', ' Hue?'], answers: [['from'], ['to']], explainVi: 'Cấu trúc hỏi khoảng cách: "How far is it from A to B?".' },
  { id: 7, parts: ['Turn left ', ' the next crossroad. The bank is ', ' your right.'], answers: [['at'], ['on']], explainVi: 'Rẽ trái tại ngã tư: "turn left at..."; ở bên phải bạn: "on your right".' },
  { id: 8, parts: ['It takes about two hours to get ', ' Hanoi by coach.'], answers: [['to']], explainVi: 'Cụm "get to + địa điểm" = đi tới đâu.' },
];

// II.11 (p.95): 5 Find & correct mistakes
export interface U4MistakeItem {
  id: number;
  sentence: string;
  wrong: string;
  correct: string;
  acceptedWrong?: string[];
  acceptedCorrect?: string[];
  explainVi: string;
}

export const U4_EX_II11_MISTAKES: U4MistakeItem[] = [
  { id: 1, sentence: 'The seafood here is more delicious as the seafood in my hometown.', wrong: 'as', correct: 'than', explainVi: 'So sánh hơn dùng "than", không dùng "as" (more delicious than).' },
  { id: 2, sentence: 'The air in the country is more clean than the air in the city.', wrong: 'more clean', correct: 'cleaner', explainVi: 'clean là tính từ ngắn 1 âm tiết → phải viết "cleaner", không viết "more clean".' },
  { id: 3, sentence: 'Can you telling me the way to the railway station?', wrong: 'telling', correct: 'tell', explainVi: 'Sau động từ khuyết thiếu "Can" luôn dùng động từ nguyên thể không to → tell.' },
  { id: 4, sentence: 'Take the one left and the market is on your right.', wrong: 'one', correct: 'first', explainVi: 'Chỉ ngã rẽ dùng số thứ tự: "Take the first left" (Rẽ ở ngã rẽ đầu tiên bên trái).' },
  { id: 5, sentence: 'Hanoi is crowdeder than Da Nang City.', wrong: 'crowdeder', correct: 'more crowded', explainVi: 'crowded là tính từ dài 2 âm tiết (đuôi -ed) → phải dùng "more crowded".' },
];

// II.12 (p.95): 5 Choose underlined error A/B/C/D + fix
export interface U4UnderlineErrorItem {
  id: number;
  sentence: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  correction: string;
  explainVi: string;
}

export const U4_EX_II12_UNDERLINE: U4UnderlineErrorItem[] = [
  { id: 1, sentence: 'There is a temple near to the museum.', options: ['There', 'a', 'to', 'museum'], correctIndex: 2, correction: 'bỏ "to" (chỉ dùng "near the museum")', explainVi: 'Giới từ "near" đứng trực tiếp trước danh từ, KHÔNG có "to" theo sau.' },
  { id: 2, sentence: 'Is there a photocopy store to the left your house?', options: ['Is', 'a', 'photocopy store', 'left'], correctIndex: 3, correction: 'left → left of', explainVi: 'Cụm đầy đủ phải là "to the left of + N" (ở bên trái của...).' },
  { id: 3, sentence: 'The police station is front of the movie theater.', options: ['The', 'front', 'of', 'theater'], correctIndex: 1, correction: 'front → in front', explainVi: 'Thiếu giới từ "in": phải viết "in front of".' },
  { id: 4, sentence: 'The bakery is between the hotel or the restaurant.', options: ['The', 'between', 'or', 'restaurant'], correctIndex: 2, correction: 'or → and', explainVi: 'Cấu trúc đúng là "between A and B" (không dùng "or").' },
  { id: 5, sentence: 'There are two drugstores opposite to the hospital.', options: ['There are', 'drugstores', 'to', 'hospital'], correctIndex: 2, correction: 'bỏ "to" (chỉ dùng "opposite the hospital")', explainVi: 'Giới từ "opposite" đứng trực tiếp trước danh từ, KHÔNG thêm "to".' },
];

// III.1 (pp.95–96): Da Lat Rose Village 10-word cloze
export const U4_EX_III1_WORD_BANK = [
  'from',
  'often',
  'carpet',
  'path',
  'and',
  'peaceful',
  'water',
  'fresh',
  'flowers',
  'for',
];

export const U4_EX_III1_SEGMENTS: string[] = [
  'My village is about 10 kilometers (1) ',
  ' Da Lat. It is a very beautiful and (2) ',
  ' place where people grow (3) ',
  ' and vegetables only. It is very famous (4) ',
  ' its pretty roses and beautiful landscapes. The air is quite fresh (5) ',
  ' the smell of the roses makes people feel cool. In spring, my village looks like a (6) ',
  ' with plenty of colors. Tourists come to visit it so (7) ',
  ". Nowadays, with electricity, it doesn't take the villagers much time to (8) ",
  ' the roses. And even at night, people can walk along the (9) ',
  ' and enjoy the (10) ',
  ' smell of the flowers.',
];

export const U4_EX_III1_ANSWERS: { blank: number; answer: string; explainVi: string }[] = [
  { blank: 1, answer: 'from', explainVi: '10 kilometers from Da Lat = cách Đà Lạt 10 km.' },
  { blank: 2, answer: 'peaceful', explainVi: 'beautiful and peaceful place = nơi xinh đẹp và yên bình.' },
  { blank: 3, answer: 'flowers', explainVi: 'grow flowers and vegetables = trồng hoa và rau.' },
  { blank: 4, answer: 'for', explainVi: 'Cụm cố định: be famous for = nổi tiếng về...' },
  { blank: 5, answer: 'and', explainVi: 'Liên từ "and" nối hai mệnh đề bổ sung ý nghĩa.' },
  { blank: 6, answer: 'carpet', explainVi: 'looks like a carpet with plenty of colors = trông như một tấm thảm nhiều màu sắc.' },
  { blank: 7, answer: 'often', explainVi: 'visit it so often = thường xuyên đến thăm.' },
  { blank: 8, answer: 'water', explainVi: 'to water the roses = tưới hoa hồng (động từ "water").' },
  { blank: 9, answer: 'path', explainVi: 'walk along the path = đi dạo dọc theo con đường mòn.' },
  { blank: 10, answer: 'fresh', explainVi: 'the fresh smell of the flowers = hương thơm tươi mát của hoa.' },
];

export const U4_EX_III1_FULL_AUDIO =
  'My village is about 10 kilometers from Da Lat. It is a very beautiful and peaceful place where people grow flowers and vegetables only. It is very famous for its pretty roses and beautiful landscapes. The air is quite fresh and the smell of the roses makes people feel cool. In spring, my village looks like a carpet with plenty of colors. Tourists come to visit it so often. Nowadays, with electricity, it does not take the villagers much time to water the roses. And even at night, people can walk along the path and enjoy the fresh smell of the flowers.';

// III.2 (pp.96–97): Minh at Nha Trang Beach (5 3-option MCQs)
export const U4_EX_III2_PASSAGE =
  'Hi. I am Minh. I live in Hanoi but I am having a good time at Nha Trang Beach now. The beach here is more beautiful than the beaches in Sam Son. The weather here is cooler and drier than that in Hanoi. Here, the houses are smaller and the buildings are older than those in Hanoi. Also, the streets are wider with less traffic. I love the food here. The seafood is more delicious and cheaper than the one in Hanoi. The sun is shining brightly. In Nha Trang, people are more friendly than people in Hanoi. I like Nha Trang very much.';

export interface U4Mcq3Item {
  id: number;
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  explainVi: string;
}

export const U4_EX_III2_QUESTIONS: U4Mcq3Item[] = [
  { id: 1, question: 'Minh is ____ at Nha Trang Beach now.', options: ['having', 'staying', 'living'], correctIndex: 1, explainVi: 'Minh sống ở Hà Nội và hiện đang ở/nghỉ mát ("staying") tại bãi biển Nha Trang.' },
  { id: 2, question: 'The weather in Hanoi is ____ and wetter than that in Nha Trang.', options: ['hotter', 'colder', 'living'], correctIndex: 0, explainVi: 'Nha Trang mát hơn và khô hơn Hà Nội → ngược lại, Hà Nội nóng hơn ("hotter") và ẩm ướt hơn.' },
  { id: 3, question: 'The houses and the buildings in Hanoi are ____ than the houses in Nha Trang.', options: ['bigger and more modern', 'smaller and older', 'older and bigger'], correctIndex: 0, explainVi: 'Nhà ở Nha Trang nhỏ hơn và cũ hơn Hà Nội → ở Hà Nội lớn hơn và hiện đại hơn ("bigger and more modern").' },
  { id: 4, question: 'The seafood in Hanoi is ____ than the seafood in Nha Trang.', options: ['more delicious and more expensive', 'less delicious and more expensive', 'more delicious and less expensive'], correctIndex: 1, explainVi: 'Hải sản Nha Trang ngon hơn và rẻ hơn Hà Nội → ở Hà Nội kém ngon hơn và đắt hơn ("less delicious and more expensive").' },
  { id: 5, question: 'The people in Nha Trang are ____ than people in Hanoi.', options: ['friendly', 'more unfriendly', 'more friendly'], correctIndex: 2, explainVi: 'Bài viết nêu rõ: "In Nha Trang, people are more friendly than people in Hanoi."' },
];

// III.3 (p.97): Peter in the countryside (5 T/F)
export const U4_EX_III3_PASSAGE =
  "My name is Peter. I'm at grade six. I live in a peaceful neighborhood in the countryside. Living in the countryside is less convenient but more peaceful than in the city. There are a lot of country houses here. There are many trees, too. People here are friendly and helpful. Every afternoon, we meet under the biggest tree in the village to chat. Children can play traditional games. Adults can talk about their long day of hard work. I love my life here.";

export interface U4TrueFalseItem {
  id: number;
  statement: string;
  answer: boolean;
  explainVi: string;
}

export const U4_EX_III3_TF: U4TrueFalseItem[] = [
  { id: 1, statement: 'Peter lives in the city.', answer: false, explainVi: 'Sai (F) — Peter sống ở vùng nông thôn ("in the countryside").' },
  { id: 2, statement: 'Living in the countryside is more convenient than in the city.', answer: false, explainVi: 'Sai (F) — Bài nói "less convenient" (kém thuận tiện hơn thành phố).' },
  { id: 3, statement: 'There are many country houses and trees in his neighborhood.', answer: true, explainVi: 'Đúng (T) — "There are a lot of country houses here. There are many trees, too."' },
  { id: 4, statement: 'People there are friendly and helpful.', answer: true, explainVi: 'Đúng (T) — "People here are friendly and helpful."' },
  { id: 5, statement: 'Every afternoon, adults go to work and children go to school.', answer: false, explainVi: 'Sai (F) — Mỗi buổi chiều, mọi người gặp nhau dưới gốc cây lớn nhất làng để trò chuyện và chơi trò chơi dân gian.' },
];

// IV.1 (pp.97–98): 8 Word-Tile Rearrangements
export interface U4ReorderItem {
  id: number;
  tiles: string[];
  accepted: string[];
  displayAnswer: string;
  explainVi: string;
}

export const U4_EX_IV1_REORDER: U4ReorderItem[] = [
  {
    id: 1,
    tiles: ['we', 'first', 'where', 'go', 'this morning', 'shall'],
    accepted: ['Where shall we first go this morning?', 'Where shall we go first this morning?'],
    displayAnswer: 'Where shall we first go this morning?',
    explainVi: 'Câu hỏi gợi ý: Where + shall + we + first go / go first + this morning?',
  },
  {
    id: 2,
    tiles: ['the cafeteria', 'and', 'a cold drink', "let's", 'get', 'to', 'go'],
    accepted: ["Let's go to the cafeteria and get a cold drink."],
    displayAnswer: "Let's go to the cafeteria and get a cold drink.",
    explainVi: "Câu rủ rê: Let's + V nguyên thể (go to the cafeteria) + and + get a cold drink.",
  },
  {
    id: 3,
    tiles: ['like', 'you', 'the countryside', 'do', 'living', 'in'],
    accepted: ['Do you like living in the countryside?'],
    displayAnswer: 'Do you like living in the countryside?',
    explainVi: 'Câu hỏi Hiện tại đơn với like + V-ing: Do you like living in the countryside?',
  },
  {
    id: 4,
    tiles: ['neighbourhood', 'post office', 'in', 'there', 'your', 'a', 'is'],
    accepted: ['Is there a post office in your neighbourhood?', 'Is there a post office in your neighborhood?'],
    displayAnswer: 'Is there a post office in your neighbourhood?',
    explainVi: 'Câu hỏi "Có ... không?": Is there + a post office + in your neighbourhood?',
  },
  {
    id: 5,
    tiles: ['me', 'you', 'the way', 'could', 'the Japanese Bridge', 'to', 'tell', 'please'],
    accepted: ['Could you tell me the way to the Japanese Bridge, please?', 'Could you tell me the way to the Japanese Bridge please?'],
    displayAnswer: 'Could you tell me the way to the Japanese Bridge, please?',
    explainVi: 'Mẫu câu hỏi đường lịch sự: Could you tell me the way to + địa điểm, please?',
  },
  {
    id: 6,
    tiles: ['houses', 'are', 'there', 'historic', 'Hoi An', 'many', 'ancient town', 'in'],
    accepted: ['There are many historic houses in Hoi An ancient town.'],
    displayAnswer: 'There are many historic houses in Hoi An ancient town.',
    explainVi: 'There are + many historic houses + in Hoi An ancient town.',
  },
  {
    id: 7,
    tiles: ['polluted', 'smoke', 'the air', 'is', 'with', 'factories', 'from'],
    accepted: ['The air is polluted with smoke from factories.'],
    displayAnswer: 'The air is polluted with smoke from factories.',
    explainVi: 'Cấu trúc: be polluted with (bị ô nhiễm bởi) + smoke from factories.',
  },
  {
    id: 8,
    tiles: ['much', 'than', 'living in a big city', 'expensive', 'is', 'living in the countryside', 'more'],
    accepted: ['Living in a big city is much more expensive than living in the countryside.'],
    displayAnswer: 'Living in a big city is much more expensive than living in the countryside.',
    explainVi: 'Nhấn mạnh so sánh hơn bằng "much": is much more expensive than...',
  },
];

// IV.2 (p.98): 10 Opposite Comparative Rewrites
export const U4_EX_IV2_OPPOSITE: U4RewriteItem[] = [
  { id: 1, prompt: 'My house is bigger than your house.', prefix: 'Your house is', accepted: ['smaller than my house.', 'smaller than mine.'], explainVi: 'Đảo chủ ngữ & đổi từ trái nghĩa: bigger ↔ smaller.' },
  { id: 2, prompt: 'The black car is cheaper than the red car.', prefix: 'The red car', accepted: ['is more expensive than the black car.', 'is more expensive than the black.', 'is more expensive than the black one.'], explainVi: 'cheaper (rẻ hơn) ↔ more expensive (đắt hơn).' },
  { id: 3, prompt: 'This film is more interesting than that one.', prefix: 'That film is', accepted: ['more boring than this film.', 'more boring than this one.'], explainVi: 'more interesting (thú vị hơn) ↔ more boring (nhàm chán hơn).' },
  { id: 4, prompt: 'My kitchen is smaller than yours.', prefix: 'Your kitchen', accepted: ['is larger than my kitchen.', 'is bigger than my kitchen.', 'is larger than mine.', 'is bigger than mine.'], explainVi: 'smaller (nhỏ hơn) ↔ larger / bigger (rộng/lớn hơn).' },
  { id: 5, prompt: 'According to me, English is easier than Maths.', prefix: 'According to me, Maths', accepted: ['is more difficult than English.', 'is harder than English.'], explainVi: 'easier (dễ hơn) ↔ more difficult (khó hơn).' },
  { id: 6, prompt: 'The sports centre is more expensive than the swimming pool.', prefix: 'The swimming pool', accepted: ['is cheaper than the sports centre.', 'is cheaper than the sports center.'], explainVi: 'more expensive ↔ cheaper.' },
  { id: 7, prompt: 'The market is older than the shopping centre.', prefix: 'The shopping centre', accepted: ['is newer than the market.', 'is more modern than the market.'], explainVi: 'older (cũ hơn) ↔ newer / more modern (mới / hiện đại hơn).' },
  { id: 8, prompt: 'The skate park is noisier than the amusing park.', prefix: 'The amusing park', accepted: ['is quieter than the skate park.', 'is more quiet than the skate park.'], explainVi: 'noisier (ồn ào hơn) ↔ quieter (yên tĩnh hơn).' },
  { id: 9, prompt: 'The food here is worse than my cooking!', prefix: 'My cooking', accepted: ['is better than the food here.', 'is better than the food here!'], explainVi: 'worse (tệ hơn) ↔ better (ngon/tốt hơn).' },
  { id: 10, prompt: 'My sister is taller than me.', prefix: 'I am', accepted: ['shorter than my sister.'], explainVi: 'taller (cao hơn) ↔ shorter (thấp hơn).' },
];

/* ============================================================================
 * C. TEST FOR UNIT 4 — 12 PARTS, 111 QUESTIONS (BOOK pp. 99–106)
 * ========================================================================== */

// Part I (p.99): 10 Phonetics odd-sound MCQs
export const U4_TEST_P1_PHONETICS: U4PhoneticsMcq[] = [
  { id: 1, options: [{ word: 'rice', underline: 'i', ipa: '/raɪs/' }, { word: 'river', underline: 'i', ipa: '/ˈrɪvə(r)/' }, { word: 'city', underline: 'i', ipa: '/ˈsɪti/' }, { word: 'village', underline: 'i', ipa: '/ˈvɪlɪdʒ/' }], correctIndex: 0, explainVi: 'rice đọc là /aɪ/; river, city, village đọc là /ɪ/.' },
  { id: 2, options: [{ word: 'sing', underline: 'i', ipa: '/sɪŋ/' }, { word: 'mine', underline: 'i', ipa: '/maɪn/' }, { word: 'hit', underline: 'i', ipa: '/hɪt/' }, { word: 'sit', underline: 'i', ipa: '/sɪt/' }], correctIndex: 1, explainVi: 'mine đọc là /aɪ/; sing, hit, sit đọc là /ɪ/.' },
  { id: 3, options: [{ word: 'quiet', underline: 'i', ipa: '/ˈkwaɪət/' }, { word: 'historic', underline: 'i', ipa: '/hɪˈstɒrɪk/' }, { word: 'incredibly', underline: 'i', ipa: '/ɪnˈkredəbli/' }, { word: 'dislike', underline: 'i', ipa: '/dɪsˈlaɪk/' }], correctIndex: 0, explainVi: 'quiet đọc là /aɪ/; historic, incredibly, dislike (chữ i đầu) đọc là /ɪ/.' },
  { id: 4, options: [{ word: 'treat', underline: 'ea', ipa: '/triːt/' }, { word: 'clean', underline: 'ea', ipa: '/kliːn/' }, { word: 'great', underline: 'ea', ipa: '/ɡreɪt/' }, { word: 'beach', underline: 'ea', ipa: '/biːtʃ/' }], correctIndex: 2, explainVi: 'great đọc là /eɪ/; treat, clean, beach đọc là /iː/.' },
  { id: 5, options: [{ word: 'advice', underline: 'i', ipa: '/ədˈvaɪs/' }, { word: 'price', underline: 'i', ipa: '/praɪs/' }, { word: 'nice', underline: 'i', ipa: '/naɪs/' }, { word: 'police', underline: 'i', ipa: '/pəˈliːs/' }], correctIndex: 3, explainVi: 'police đọc là /iː/; advice, price, nice đọc là /aɪ/.' },
  { id: 6, options: [{ word: 'film', underline: 'i', ipa: '/fɪlm/' }, { word: 'city', underline: 'i', ipa: '/ˈsɪti/' }, { word: 'nice', underline: 'i', ipa: '/naɪs/' }, { word: 'live', underline: 'i', ipa: '/lɪv/' }], correctIndex: 2, explainVi: 'nice đọc là /aɪ/; film, city, live đọc là /ɪ/.' },
  { id: 7, options: [{ word: 'big', underline: 'i', ipa: '/bɪɡ/' }, { word: 'wide', underline: 'i', ipa: '/waɪd/' }, { word: 'quiet', underline: 'i', ipa: '/ˈkwaɪət/' }, { word: 'exciting', underline: 'i', ipa: '/ɪkˈsaɪtɪŋ/' }], correctIndex: 0, explainVi: 'big đọc là /ɪ/; wide, quiet, exciting (âm nhấn) đọc là /aɪ/.' },
  { id: 8, options: [{ word: 'cheap', underline: 'ea', ipa: '/tʃiːp/' }, { word: 'sleepy', underline: 'ee', ipa: '/ˈsliːpi/' }, { word: 'near', underline: 'ea', ipa: '/nɪə(r)/' }, { word: 'peaceful', underline: 'ea', ipa: '/ˈpiːsfl/' }], correctIndex: 2, explainVi: 'near đọc là /ɪə/; cheap, sleepy, peaceful đọc là /iː/.' },
  { id: 9, options: [{ word: 'heavy', underline: 'ea', ipa: '/ˈhevi/' }, { word: 'sea', underline: 'ea', ipa: '/siː/' }, { word: 'team', underline: 'ea', ipa: '/tiːm/' }, { word: 'street', underline: 'ee', ipa: '/striːt/' }], correctIndex: 0, explainVi: 'heavy có "ea" đọc là /e/; sea, team, street đọc là /iː/.' },
  { id: 10, options: [{ word: 'bleed', underline: 'ee', ipa: '/bliːd/' }, { word: 'heat', underline: 'ea', ipa: '/hiːt/' }, { word: 'head', underline: 'ea', ipa: '/hed/' }, { word: 'tea', underline: 'ea', ipa: '/tiː/' }], correctIndex: 2, explainVi: 'head có "ea" đọc là /e/; bleed, heat, tea đọc là /iː/.' },
];

// Part II (p.99): 8 Place definitions from box
export const U4_TEST_P2_WORD_BANK = [
  'restaurant',
  'bakery',
  'cinema',
  'grocery',
  'post office',
  'bookstore',
  'bank',
  'art gallery',
];

export const U4_TEST_P2_PLACES: U4SingleBlankItem[] = [
  { id: 1, before: 'It is a place where we send letters and buy stamps. → ', after: '', accepted: ['post office'], explainVi: 'Gửi thư và mua tem ở "post office" (bưu điện).' },
  { id: 2, before: 'It is a place where we can buy books. → ', after: '', accepted: ['bookstore'], explainVi: 'Mua sách ở "bookstore" (hiệu sách).' },
  { id: 3, before: 'It is a place where we pay money to watch a movie. → ', after: '', accepted: ['cinema'], explainVi: 'Trả tiền xem phim ở "cinema" (rạp chiếu phim).' },
  { id: 4, before: 'It is a place where we can buy and eat a meal. → ', after: '', accepted: ['restaurant'], explainVi: 'Mua và dùng bữa ăn ở "restaurant" (nhà hàng).' },
  { id: 5, before: 'It is a place where we can save money. → ', after: '', accepted: ['bank'], explainVi: 'Gửi tiết kiệm tiền ở "bank" (ngân hàng).' },
  { id: 6, before: 'It is a place where we can buy food and other goods. → ', after: '', accepted: ['grocery'], explainVi: 'Mua thực phẩm và hàng hóa thiết yếu ở "grocery" (cửa hàng tạp hóa).' },
  { id: 7, before: 'It is a place where we can see paintings and other works of art. → ', after: '', accepted: ['art gallery'], explainVi: 'Xem tranh và tác phẩm nghệ thuật ở "art gallery" (phòng trưng bày).' },
  { id: 8, before: 'It is a place where we can buy bread and cakes. → ', after: '', accepted: ['bakery'], explainVi: 'Mua bánh mì và bánh ngọt ở "bakery" (tiệm bánh).' },
];

// Part III (pp.99–100): 15 MCQs
export const U4_TEST_P3_MCQ: U4McqItem[] = [
  { id: 1, question: 'This pagoda is ____ than the palace.', options: ['most historic', 'more historic', 'the historic', 'historicer'], correctIndex: 1, explainVi: 'historic là tính từ dài 3 âm tiết + có "than" → more historic.' },
  { id: 2, question: "He is much ____ now, but he's still taking medication.", options: ['good', 'gooder', 'better', 'more better'], correctIndex: 2, explainVi: 'Sau "much" dùng so sánh hơn; bất quy tắc: good → better.' },
  { id: 3, question: 'The air in many cities is heavily ____ with vehicle exhaust fumes.', options: ['polluted', 'crowded', 'wasted', 'contained'], correctIndex: 0, explainVi: 'heavily polluted with = bị ô nhiễm nặng bởi khí thải xe cộ.' },
  { id: 4, question: "I'm just going to the ____ to buy some medicines and bandage.", options: ['cinema', "chemist's", 'restaurant', 'grocery'], correctIndex: 1, explainVi: "Mua thuốc và băng gạc ở hiệu thuốc: chemist's." },
  { id: 5, question: 'My neighborhood is very ____ because everything is near my house.', options: ['convenient', 'exciting', 'comfortable', 'inconvenient'], correctIndex: 0, explainVi: 'Mọi thứ đều gần nhà nên khu phố rất thuận tiện ("convenient").' },
  { id: 6, question: 'Do you often ____ your grandparents?', options: ['visit', 'visits', 'visiting', 'to visit'], correctIndex: 0, explainVi: 'Sau trợ động từ "Do" dùng động từ nguyên thể → visit.' },
  { id: 7, question: 'How many rooms ____ there in your house?', options: ['is', 'are', 'be', 'to be'], correctIndex: 1, explainVi: '"rooms" là danh từ số nhiều → dùng "are".' },
  { id: 8, question: 'What is there ____ front of your school?', options: ['at', 'on', 'in', 'of'], correctIndex: 2, explainVi: 'Cụm giới từ cố định: "in front of" (ở phía trước).' },
  { id: 9, question: "What is she ____? – She's helping her mom with the housework.", options: ['do', 'does', 'doing', 'to do'], correctIndex: 2, explainVi: 'Câu hỏi thì Hiện tại tiếp diễn: What + is + she + V-ing → doing.' },
  { id: 10, question: "My father doesn't ____ to work today. He's painting the wall now.", options: ['go', 'goes', 'doing', 'to do'], correctIndex: 0, explainVi: 'Sau "doesn\'t" dùng động từ nguyên thể → go.' },
  { id: 11, question: 'Going by taxi is more ____ than going by bus.', options: ['cheaper', 'faster', 'easier', 'expensive'], correctIndex: 3, explainVi: 'Trước chỗ trống đã có "more" → phải chọn tính từ dài nguyên gốc "expensive".' },
  { id: 12, question: 'There are ____ lakes in our city.', options: ['much', 'a lot', 'many', 'lots'], correctIndex: 2, explainVi: '"lakes" là danh từ đếm được số nhiều → dùng "many" (a lot/lots thiếu "of").' },
  { id: 13, question: "David's exam results are ____ than Nick's.", options: ['good', 'well', 'better', 'important'], correctIndex: 2, explainVi: 'Có "than" → chọn dạng so sánh hơn "better".' },
  { id: 14, question: "Janet is not happy because her results in the competition are ____ than her sister's.", options: ['bad', 'good', 'better', 'worse'], correctIndex: 3, explainVi: 'Không vui (not happy) + "than" → kết quả tệ hơn: worse.' },
  { id: 15, question: 'A ____ is a place where we go to buy stamps or send letters.', options: ['library', 'post office', 'cinema', 'school'], correctIndex: 1, explainVi: 'Nơi mua tem và gửi thư là "post office" (bưu điện).' },
];

// Part IV (p.101): 10 Opposites from box
export const U4_TEST_P4_WORD_BANK = [
  'artificial',
  'easy',
  'even',
  'expensive',
  'modern',
  'peaceful',
  'public',
  'rough',
  'shallow',
  'small',
];

export const U4_TEST_P4_OPPOSITES: U4SingleBlankItem[] = [
  { id: 1, before: 'We live in a very ', after: ' neighbourhood.', hint: 'trái nghĩa: noisy', accepted: ['peaceful'], explainVi: 'Trái nghĩa với noisy (ồn ào) là peaceful (yên bình).' },
  { id: 2, before: 'The sea is very ', after: ' in this season.', hint: 'trái nghĩa: calm', accepted: ['rough'], explainVi: 'Trái nghĩa với calm (biển lặng) là rough (biển động, sóng lớn).' },
  { id: 3, before: 'The houses with ', after: ' numbers are on this side.', hint: 'trái nghĩa: odd', accepted: ['even'], explainVi: 'Trái nghĩa với odd (số lẻ) là even (số chẵn).' },
  { id: 4, before: 'Are the flowers in that window ', after: '?', hint: 'trái nghĩa: real', accepted: ['artificial'], explainVi: 'Trái nghĩa với real (thật) là artificial (nhân tạo, hoa giả).' },
  { id: 5, before: 'The water is quite ', after: ' around here.', hint: 'trái nghĩa: deep', accepted: ['shallow'], explainVi: 'Trái nghĩa với deep (sâu) là shallow (nông, cạn).' },
  { id: 6, before: 'I think this is a ', after: ' area of the city.', hint: 'trái nghĩa: private', accepted: ['public'], explainVi: 'Trái nghĩa với private (riêng tư) là public (công cộng).' },
  { id: 7, before: 'We are now living in a ', after: ' area of the city.', hint: 'trái nghĩa: historic', accepted: ['modern'], explainVi: 'Trái nghĩa với historic (cổ kính, lịch sử) là modern (hiện đại).' },
  { id: 8, before: "It's ", after: ' to get a job in this town.', hint: 'trái nghĩa: difficult', accepted: ['easy'], explainVi: 'Trái nghĩa với difficult (khó) là easy (dễ).' },
  { id: 9, before: 'The food in that restaurant is very ', after: '.', hint: 'trái nghĩa: cheap', accepted: ['expensive'], explainVi: 'Trái nghĩa với cheap (rẻ) là expensive (đắt).' },
  { id: 10, before: 'They live in a ', after: ' house in the country.', hint: 'trái nghĩa: big', accepted: ['small'], explainVi: 'Trái nghĩa với big (lớn) là small (nhỏ).' },
];

// Part V (p.101): 15 Present Simple or Present Continuous
export const U4_TEST_P5_TENSES: U4MultiBlankItem[] = [
  { id: 1, parts: ['My brother ', ' (have) a daughter and a son.'], answers: [['has']], explainVi: 'Sự thật hiện tại, chủ ngữ số ít "My brother" → has.' },
  { id: 2, parts: ['I ', ' (not/ solve) some math problems at the moment.'], answers: [['am not solving', "'m not solving"]], explainVi: 'Có "at the moment" → Hiện tại tiếp diễn: am not solving.' },
  { id: 3, parts: ['My grandfather often ', ' (come) over for dinner at the weekends.'], answers: [['comes']], explainVi: 'Thói quen có "often" + ngôi thứ 3 số ít → comes.' },
  { id: 4, parts: ['My school ', ' (begin) at nine every day.'], answers: [['begins']], explainVi: 'Lịch trình cố định "every day" + số ít → begins.' },
  { id: 5, parts: ['What time ', ' (you/ wake up) on weekdays?'], answers: [['do you wake up']], explainVi: 'Thói quen "on weekdays" → Hiện tại đơn: do you wake up.' },
  { id: 6, parts: ['What ', ' (you/ do) tomorrow night?'], answers: [['are you doing']], explainVi: 'Kế hoạch đã định cho tương lai gần ("tomorrow night") → Hiện tại tiếp diễn: are you doing.' },
  { id: 7, parts: ['I usually ', ' (not/ work) on Sundays but today I ', ' (work).'], answers: [["don't work", 'do not work'], ['am working', "'m working"]], explainVi: 'Vế 1 có "usually" → Hiện tại đơn (don\'t work); vế 2 có "today" (ngoại lệ đang diễn ra) → Hiện tại tiếp diễn (am working).' },
  { id: 8, parts: ['She ', ' (not/ sleep) now, she ', ' (study).'], answers: [["isn't sleeping", 'is not sleeping'], ['is studying', "'s studying"]], explainVi: 'Có "now" → Hiện tại tiếp diễn: isn\'t sleeping – is studying.' },
  { id: 9, parts: ['How often ', ' (you/ review) your lessons?'], answers: [['do you review']], explainVi: 'Hỏi tần suất "How often" → Hiện tại đơn: do you review.' },
  { id: 10, parts: ['I ', ' (not/ go) on holiday this summer.'], answers: [['am not going', "'m not going"]], explainVi: 'Kế hoạch tương lai gần "this summer" → Hiện tại tiếp diễn: am not going.' },
  { id: 11, parts: ['Can you speak slowly please? I ', ' (not/ understand) you.'], answers: [["don't understand", 'do not understand']], explainVi: '"understand" là động từ chỉ trạng thái nhận thức, KHÔNG chia tiếp diễn → don\'t understand.' },
  { id: 12, parts: ['She ', ' (work) as a secretary in a big company.'], answers: [['works']], explainVi: 'Nghề nghiệp cố định → Hiện tại đơn ngôi thứ 3 số ít: works.' },
  { id: 13, parts: ['Miss Clara ', ' (take) a violin class every Wednesday.'], answers: [['takes']], explainVi: 'Thói quen "every Wednesday" + số ít → takes.' },
  { id: 14, parts: ['It ', ' (be) usually so humid here in summer time.'], answers: [['is']], explainVi: 'Sự thật lặp lại có "usually" + chủ ngữ "It" → is.' },
  { id: 15, parts: ["Don't forget to take your coat, it ", ' (be) cold outside.'], answers: [['is']], explainVi: 'Trạng thái thời tiết với động từ to be → is.' },
];

// Part VI (p.102): 8 Mistakes
export const U4_TEST_P6_MISTAKES: U4MistakeItem[] = [
  { id: 1, sentence: 'Peter and his sister washes the family car.', wrong: 'washes', correct: 'wash', explainVi: 'Chủ ngữ số nhiều (Peter and his sister) → động từ nguyên thể "wash".' },
  { id: 2, sentence: 'My sister go to the library once a week.', wrong: 'go', correct: 'goes', explainVi: 'Chủ ngữ ngôi thứ 3 số ít (My sister) → thêm -es thành "goes".' },
  { id: 3, sentence: 'We sometimes make experiments in physics class.', wrong: 'make', correct: 'do', explainVi: 'Cụm từ đúng: "do experiments" (làm thí nghiệm), không dùng "make".' },
  { id: 4, sentence: 'My new flat is got a large kitchen.', wrong: 'is', correct: 'has', explainVi: 'Cấu trúc sở hữu "have/has got" → phải dùng "has got", không dùng "is got".' },
  { id: 5, sentence: 'There are a living room, a bathroom and a bedroom in my house.', wrong: 'are', correct: 'is', explainVi: 'Danh từ liệt kê đầu tiên là số ít ("a living room") → dùng "There is".' },
  { id: 6, sentence: 'What do you do tomorrow afternoon?', wrong: 'do you do', correct: 'are you doing', explainVi: 'Kế hoạch tương lai gần "tomorrow afternoon" → dùng Hiện tại tiếp diễn "are you doing".' },
  { id: 7, sentence: 'Going by taxi is more expensiver than going by bus.', wrong: 'expensiver', correct: 'expensive', explainVi: 'Tính từ dài đã có "more" thì KHÔNG thêm đuôi "-er" → more expensive.' },
  { id: 8, sentence: 'The air in the country is more clean than the air in the city.', wrong: 'more clean', correct: 'cleaner', explainVi: '"clean" là tính từ ngắn 1 âm tiết → so sánh hơn là "cleaner".' },
];

// Part VII (p.102): 10 Comparative Adjectives
export const U4_TEST_P7_COMP: U4SingleBlankItem[] = [
  { id: 1, before: "She can't stay ", after: ' than 30 minutes.', hint: 'long', accepted: ['longer'], explainVi: 'long → longer.' },
  { id: 2, before: 'Well, the place looks ', after: ' now.', hint: 'clean', accepted: ['cleaner'], explainVi: 'So sánh với trước kia → clean → cleaner.' },
  { id: 3, before: "The red shirt is better but it's ", after: ' than the white one.', hint: 'expensive', accepted: ['more expensive'], explainVi: 'expensive (3 âm tiết) → more expensive.' },
  { id: 4, before: 'Being a firefighter is ', after: ' than being a builder.', hint: 'dangerous', accepted: ['more dangerous'], explainVi: 'dangerous (3 âm tiết) → more dangerous.' },
  { id: 5, before: 'The weather this summer is even ', after: ' than last summer.', hint: 'hot', accepted: ['hotter'], explainVi: 'hot (CVC) → gấp đôi t → hotter.' },
  { id: 6, before: 'Your accent is ', after: ' than mine.', hint: 'bad', accepted: ['worse'], explainVi: 'Bất quy tắc: bad → worse.' },
  { id: 7, before: 'Hot dogs are ', after: ' than hamburgers.', hint: 'good', accepted: ['better'], explainVi: 'Bất quy tắc: good → better.' },
  { id: 8, before: 'French is considered to be ', after: ' than English.', hint: 'easy', accepted: ['easier'], explainVi: 'easy (-y → -ier) → easier.' },
  { id: 9, before: 'I think scuba diving is ', after: ' than climbing.', hint: 'fascinating', accepted: ['more fascinating'], explainVi: 'fascinating (4 âm tiết) → more fascinating.' },
  { id: 10, before: 'He thinks this test was ', after: ' than the last one.', hint: 'difficult', accepted: ['more difficult'], explainVi: 'difficult (3 âm tiết) → more difficult.' },
];

// Part VIII (p.103): Reading "wonderful neighbourhood" (7 T/F)
export const U4_TEST_P8_PASSAGE =
  "I live in a wonderful neighbourhood. It is quiet but very convenient. There is a grocery store. I go there when I want to buy something quick to prepare. Also, there are other shops such as a bakery, two restaurants, and a bookstore. I am very satisfied of having a bookstore in my neighbourhood because I love reading books. Near my house, there is a small park. It's a place where people meet and socialise with others. My father and I go jogging around the park every morning. My neighbourhood is great but there are no schools nearby. The hospital is also far away, but in general it is a nice place to live.";

export const U4_TEST_P8_TF: U4TrueFalseItem[] = [
  { id: 1, statement: 'The neighbourhood is very noisy.', answer: false, explainVi: 'Sai (F) — "It is quiet but very convenient" (khu phố yên tĩnh).' },
  { id: 2, statement: 'There are no restaurants in the neighbourhood.', answer: false, explainVi: 'Sai (F) — Có 2 nhà hàng ("two restaurants").' },
  { id: 3, statement: 'The school is far away from the neighbourhood.', answer: true, explainVi: 'Đúng (T) — "there are no schools nearby" (không có trường học ở gần).' },
  { id: 4, statement: "The writer doesn't want a bookstore in his neighbourhood.", answer: false, explainVi: 'Sai (F) — Tác giả rất hài lòng khi có hiệu sách vì thích đọc sách.' },
  { id: 5, statement: 'You can buy food in the grocery store.', answer: true, explainVi: 'Đúng (T) — Tác giả đến cửa hàng tạp hóa khi muốn mua thứ gì đó nấu nhanh.' },
  { id: 6, statement: 'There is a large park in the neighbourhood.', answer: false, explainVi: 'Sai (F) — Bài nói là công viên nhỏ ("a small park").' },
  { id: 7, statement: 'The writer likes to live in his neighbourhood.', answer: true, explainVi: 'Đúng (T) — "I live in a wonderful neighbourhood... in general it is a nice place to live."' },
];

// Part IX (pp.103–104): Reading Charles's villa (5 MCQs)
export const U4_TEST_P9_PASSAGE =
  "Charles is twelve years old. He lives in a modern villa in the suburb of the city. His father is a manager. His mother is a secretary. And he is a student. The villa is next to a large shopping center so it's very convenient. There is a big backyard where they can sit and have afternoon tea. His mother often buys some flowers because there is a flower shop opposite their house. At Tet, they often go to the historic pagoda near their villa.";

export const U4_TEST_P9_MCQ: U4McqItem[] = [
  { id: 1, question: 'Does Charles live in a cottage?', options: ['Yes, he is.', "No, he doesn't.", "Yes, he isn't.", 'No, he is.'], correctIndex: 1, explainVi: 'Câu hỏi dùng "Does" → trả lời "No, he doesn\'t." (Cậu ấy sống trong biệt thự hiện đại, không phải nhà tranh).' },
  { id: 2, question: 'What does his mother do?', options: ['a manager', 'a teacher', 'a secretary', 'a nurse'], correctIndex: 2, explainVi: '"His mother is a secretary" (Mẹ cậu ấy là thư ký).' },
  { id: 3, question: 'Is the villa in front of a shopping center?', options: ["No, it isn't.", 'Yes, it does.', "No, it doesn't.", 'Yes, it is.'], correctIndex: 0, explainVi: 'Biệt thự nằm BÊN CẠNH ("next to") trung tâm mua sắm, không phải phía trước → "No, it isn\'t."' },
  { id: 4, question: 'What do they do in the backyard?', options: ['They talk with each other.', 'They play tennis.', 'They sit under the trees.', 'They have afternoon tea.'], correctIndex: 3, explainVi: '"There is a big backyard where they can sit and have afternoon tea."' },
  { id: 5, question: 'When do they go to the pagoda?', options: ['At Tet', 'At Christmas', 'At Easter', 'every day'], correctIndex: 0, explainVi: '"At Tet, they often go to the historic pagoda near their villa."' },
];

// Part X (p.104): 10 Sentence Rewrites
export const U4_TEST_P10_REWRITE: U4RewriteItem[] = [
  { id: 1, prompt: 'The first question was easier than the second one. (difficult)', prefix: 'The second question', accepted: ['was more difficult than the first one.'], explainVi: 'Chú ý thì quá khứ "was" + more difficult than the first one.' },
  { id: 2, prompt: 'The black coat is smaller than the brown one. (big)', prefix: 'The brown coat', accepted: ['is bigger than the black one.'], explainVi: 'smaller ↔ bigger (gấp đôi g).' },
  { id: 3, prompt: "The chair isn't as comfortable as the sofa. (comfortable)", prefix: 'The sofa', accepted: ['is more comfortable than the chair.'], explainVi: 'Chuyển từ so sánh không bằng (not as... as) sang so sánh hơn: is more comfortable than.' },
  { id: 4, prompt: "Jim's suitcase was lighter than Jack's suitcase. (heavy)", prefix: "Jack's suitcase", accepted: ["was heavier than Jim's suitcase.", "was heavier than Jim's."], explainVi: 'Giữ nguyên thì quá khứ "was" + heavy → heavier.' },
  { id: 5, prompt: 'His homework was better than mine. (bad)', prefix: 'My homework', accepted: ['was worse than his.', 'was worse than his homework.'], explainVi: 'better ↔ worse (thì quá khứ "was").' },
  { id: 6, prompt: 'The big television is more expensive than the small one. (cheap)', prefix: 'The small television', accepted: ['is cheaper than the big one.'], explainVi: 'more expensive ↔ cheaper.' },
  { id: 7, prompt: 'The Royal Hotel is more old-fashioned than the Holton Hotel. (modern)', prefix: 'The Holton Hotel', accepted: ['is more modern than the Royal Hotel.'], explainVi: 'more old-fashioned (lỗi thời hơn) ↔ more modern (hiện đại hơn).' },
  { id: 8, prompt: 'The weather yesterday was worse than it is today. (good)', prefix: 'The weather today', accepted: ['is better than it was yesterday.', 'is better than yesterday.'], explainVi: 'Hôm nay dùng "is" + better than it was yesterday.' },
  { id: 9, prompt: "People in the city aren't as friendly as those in the country. (friendly)", prefix: 'People in the country', accepted: ['are friendlier than those in the city.', 'are more friendly than those in the city.', 'are friendlier than people in the city.', 'are more friendly than people in the city.'], explainVi: 'friendly → friendlier / more friendly + than those in the city.' },
  { id: 10, prompt: 'Life in the city is more interesting than life in the country. (boring)', prefix: 'Life in the country', accepted: ['is more boring than life in the city.'], explainVi: 'more interesting ↔ more boring.' },
];

// Part XI (p.105): 5 Cue-to-Sentence MCQs
export const U4_TEST_P11_CUES_MCQ: U4McqItem[] = [
  {
    id: 1,
    question: 'The / post office / next / the hotel.',
    options: [
      'The post office is next the hotel.',
      'The post office next to the hotel.',
      'The post office is next to the hotel.',
      'The post office is next on the hotel.',
    ],
    correctIndex: 2,
    explainVi: 'Cần đủ động từ to be "is" và cụm giới từ đúng "next to" → The post office is next to the hotel.',
  },
  {
    id: 2,
    question: 'This shop / sell / cheaper things / that one.',
    options: [
      'This shop sells cheaper things than that one.',
      'This shop sell cheaper things than that one.',
      'This shop sells cheaper things that one.',
      'This shop sell cheaper things that one.',
    ],
    correctIndex: 0,
    explainVi: '"This shop" số ít → "sells", và so sánh hơn phải có "than" → đáp án A.',
  },
  {
    id: 3,
    question: "This street / so / narrow / cars / can't / go past.",
    options: [
      "This street so narrow that cars can't go past.",
      "This street is so narrow cars can't go past.",
      "This street is so narrow that cars can't go past.",
      "This street so narrow cars can't go past.",
    ],
    correctIndex: 2,
    explainVi: 'Cấu trúc "so + adj + that..." (quá ... đến nỗi mà) và cần động từ to be "is" → đáp án C.',
  },
  {
    id: 4,
    question: 'Can / you / tell me / way / from / our school / your house?',
    options: [
      'Can you tell me way from our school to your house?',
      'Can you tell me the way from our school your house?',
      'Can you to tell me the way from our school to your house?',
      'Can you tell me the way from our school to your house?',
    ],
    correctIndex: 3,
    explainVi: 'Mẫu chuẩn: "Can you tell me the way from A to B?" (đủ "the way", không có "to" sau Can, đủ "to" trước B).',
  },
  {
    id: 5,
    question: 'Go straight / and then / turn / left. The hotel / your right.',
    options: [
      'Go straight and then to turn left. The hotel is your right.',
      'Go straight and then turn left. The hotel is on your right.',
      'Go straight and then turn the left. The hotel is on your right.',
      'Go straight and then turn left. The hotel is at your right.',
    ],
    correctIndex: 1,
    explainVi: 'Câu mệnh lệnh song song "Go straight and then turn left" + "on your right" → đáp án B.',
  },
];

// Part XII (p.106): 5 Same-Meaning MCQs
export const U4_TEST_P12_SAME_MCQ: U4McqItem[] = [
  {
    id: 1,
    question: 'The store is to the left of the hotel.',
    options: [
      'The hotel is to the right of the store.',
      'The hotel is to the opposite of the store.',
      'The hotel is to the next of the store.',
      'The hotel is to the front of the store.',
    ],
    correctIndex: 0,
    explainVi: 'Cửa hàng ở bên trái khách sạn = Khách sạn ở bên phải cửa hàng ("to the right of").',
  },
  {
    id: 2,
    question: 'No house in this neighborhood is bigger than this one.',
    options: [
      'All house in this neighborhood is bigger than this.',
      'This is the biggest house in this neighborhood.',
      'All house in this neighborhood is smaller than this.',
      'This is the smallest house in this neighborhood.',
    ],
    correctIndex: 1,
    explainVi: 'Không ngôi nhà nào lớn hơn ngôi nhà này = Đây là ngôi nhà lớn nhất ("the biggest house").',
  },
  {
    id: 3,
    question: 'Could you show me the way to the airport?',
    options: [
      "Where's the airport?",
      "What's the airport?",
      "When's the airport?",
      "Why's the airport?",
    ],
    correctIndex: 0,
    explainVi: 'Hỏi đường đến sân bay đồng nghĩa với hỏi vị trí "Where\'s the airport?".',
  },
  {
    id: 4,
    question: 'Ha Long Bay is more famous than Phu Quoc Island.',
    options: [
      'Ha Long Bay is the most famous.',
      'Phu Quoc Island is more famous than Ha Long Bay.',
      'Ha Long Bay is as famous as Phu Quoc Island.',
      'Phu Quoc Island is less famous than Ha Long Bay.',
    ],
    correctIndex: 3,
    explainVi: 'Vịnh Hạ Long nổi tiếng hơn Đảo Phú Quốc = Đảo Phú Quốc kém nổi tiếng hơn ("less famous than").',
  },
  {
    id: 5,
    question: 'There are many kinds of fishes in the river.',
    options: [
      'In the river, a few kinds of fishes are here.',
      'There is no fish in the river.',
      'The river has many kinds of fishes.',
      'Few kinds of fishes live in the river.',
    ],
    correctIndex: 2,
    explainVi: '"There are + N + in the river" đồng nghĩa với "The river has + N" → đáp án C.',
  },
];
