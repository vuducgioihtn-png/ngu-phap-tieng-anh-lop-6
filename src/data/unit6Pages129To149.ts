/**
 * Dữ liệu chi tiết SGK Bài tập Tiếng Anh 6 Global Success
 * Unit 6: Our Tet Holiday (Trang 129 – 149) — Hoàn thiện 100% Tập 1!
 * Bao gồm: Ngữ pháp Should/Shouldn't & Some/Any (Tr.129–130), Phát âm /s/ & /ʃ/ (Tr.131–134),
 * Bài tập I–IV (Tr.134–142) và trọn bộ TEST FOR UNIT 6 Phần I–X (Tr.143–149).
 */

export type U6TetSvgKey =
  | 'present'
  | 'lucky_money'
  | 'furniture'
  | 'fireworks'
  | 'calendar'
  | 'apricot_blossoms'
  | 'pagoda'
  | 'peach_blossoms';

// ============================================================
// LÝ THUYẾT NGỮ PHÁP & PHÁT ÂM (TRANG 129 – 134)
// ============================================================

export interface U6PronunciationSign {
  sound: '/s/' | '/ʃ/';
  titleVi: string;
  ruleVi: string;
  examples: { word: string; ipa: string; vi: string }[];
  exceptionsVi?: string;
}

export const U6_PRONUNCIATION_SIGNS: U6PronunciationSign[] = [
  // 5 signs for /s/
  {
    sound: '/s/',
    titleVi: '1. Chữ "c" đứng trước e, i hoặc y',
    ruleVi: 'Khi "c" đi trước e, i, y thường đọc là /s/.',
    examples: [
      { word: 'city', ipa: '/ˈsɪti/', vi: 'thành phố' },
      { word: 'bicycle', ipa: '/ˈbaɪsɪkl/', vi: 'xe đạp' },
      { word: 'recycle', ipa: '/ˌriːˈsaɪkl/', vi: 'tái chế' },
      { word: 'center', ipa: '/ˈsentə(r)/', vi: 'trung tâm' },
    ],
    exceptionsVi: 'Ngoại lệ: soccer /ˈsɒkə(r)/, sceptic /ˈskeptɪk/.',
  },
  {
    sound: '/s/',
    titleVi: '2. Chữ "s" đứng đầu một từ',
    ruleVi: 'Hầu hết các từ bắt đầu bằng "s" đều đọc là /s/ nhẹ.',
    examples: [
      { word: 'sad', ipa: '/sæd/', vi: 'buồn' },
      { word: 'sing', ipa: '/sɪŋ/', vi: 'hát' },
      { word: 'song', ipa: '/sɒŋ/', vi: 'bài hát' },
      { word: 'south', ipa: '/saʊθ/', vi: 'hướng nam' },
      { word: 'story', ipa: '/ˈstɔːri/', vi: 'câu chuyện' },
    ],
    exceptionsVi: 'Ngoại lệ cực hay ra thi: sure /ʃʊə(r)/, sugar /ˈʃʊɡə(r)/ đọc là /ʃ/!',
  },
  {
    sound: '/s/',
    titleVi: '3. Chữ "s" bên trong từ (không ở giữa 2 nguyên âm)',
    ruleVi: 'Khi "s" nằm trong từ và đứng cạnh phụ âm, thường đọc /s/.',
    examples: [
      { word: 'most', ipa: '/məʊst/', vi: 'hầu hết' },
      { word: 'haste', ipa: '/heɪst/', vi: 'vội vàng' },
      { word: 'describe', ipa: '/dɪˈskraɪb/', vi: 'miêu tả' },
      { word: 'display', ipa: '/dɪˈspleɪ/', vi: 'trưng bày' },
    ],
    exceptionsVi: 'Ngoại lệ: cosmic /ˈkɒzmɪk/, cosmopolitan đọc /z/.',
  },
  {
    sound: '/s/',
    titleVi: '4. Chữ "s" cuối từ sau f, k, p, t, gh & chữ "x" cuối từ',
    ruleVi: 'Đuôi -s sau âm vô thanh đọc /s/; chữ "x" ở cuối từ đọc /ks/.',
    examples: [
      { word: 'books', ipa: '/bʊks/', vi: 'những cuốn sách' },
      { word: 'laughs', ipa: '/lɑːfs/', vi: 'cười lớn' },
      { word: 'maps', ipa: '/mæps/', vi: 'bản đồ' },
      { word: 'box', ipa: '/bɒks/', vi: 'cái hộp' },
      { word: 'fix', ipa: '/fɪks/', vi: 'sửa chữa' },
    ],
  },
  // 5 signs for /ʃ/
  {
    sound: '/ʃ/',
    titleVi: '1. Tổ hợp "sh" luôn đọc là /ʃ/',
    ruleVi: 'Mọi từ có "sh" (đầu, giữa hay cuối) đều chu tròn môi đọc /ʃ/.',
    examples: [
      { word: 'shop', ipa: '/ʃɒp/', vi: 'cửa hàng' },
      { word: 'show', ipa: '/ʃəʊ/', vi: 'chỉ / buổi diễn' },
      { word: 'shout', ipa: '/ʃaʊt/', vi: 'la lớn' },
      { word: 'dish', ipa: '/dɪʃ/', vi: 'cái đĩa' },
      { word: 'push', ipa: '/pʊʃ/', vi: 'đẩy' },
      { word: 'mushroom', ipa: '/ˈmʌʃruːm/', vi: 'nấm' },
    ],
  },
  {
    sound: '/ʃ/',
    titleVi: '2. Chữ "c" đứng trước ia, io, iu, ea',
    ruleVi: 'Cụm -cia-, -cio-, -ciu-, -cea- đọc nhẹ nhàng là /ʃ/.',
    examples: [
      { word: 'special', ipa: '/ˈspeʃl/', vi: 'đặc biệt' },
      { word: 'ocean', ipa: '/ˈəʊʃn/', vi: 'đại dương' },
      { word: 'delicious', ipa: '/dɪˈlɪʃəs/', vi: 'thơm ngon' },
      { word: 'musician', ipa: '/mjuˈzɪʃn/', vi: 'nhạc sĩ' },
    ],
  },
  {
    sound: '/ʃ/',
    titleVi: '3. Chữ "s" / "ss" trong nhóm từ đặc biệt',
    ruleVi: 'Một số từ có "su" / "ssu" phát âm thành /ʃ/.',
    examples: [
      { word: 'ensure', ipa: '/ɪnˈʃʊə(r)/', vi: 'đảm bảo' },
      { word: 'insure', ipa: '/ɪnˈʃʊə(r)/', vi: 'bảo hiểm' },
      { word: 'pressure', ipa: '/ˈpreʃə(r)/', vi: 'áp lực' },
      { word: 'insurance', ipa: '/ɪnˈʃʊərəns/', vi: 'bảo hiểm' },
      { word: 'sugar', ipa: '/ˈʃʊɡə(r)/', vi: 'đường' },
    ],
  },
  {
    sound: '/ʃ/',
    titleVi: '4. Chữ "t" trước ia, io & "ch" (từ gốc Pháp)',
    ruleVi: 'Đuôi -tion/-tial/-tious đọc /ʃ/; một số từ có "ch" gốc Pháp đọc /ʃ/ thay vì /tʃ/.',
    examples: [
      { word: 'nation', ipa: '/ˈneɪʃn/', vi: 'quốc gia' },
      { word: 'essential', ipa: '/ɪˈsenʃl/', vi: 'cần thiết' },
      { word: 'ambitious', ipa: '/æmˈbɪʃəs/', vi: 'tham vọng' },
      { word: 'machine', ipa: '/məˈʃiːn/', vi: 'máy móc' },
      { word: 'chef', ipa: '/ʃef/', vi: 'đầu bếp' },
    ],
  },
];

// ============================================================
// PHẦN I: PHÁT ÂM (TRANG 134 – 135)
// ============================================================

export interface U6SortWord {
  id: number;
  before: string;
  under: string;
  after: string;
  word: string;
  ipa: string;
  sound: 's' | 'sh';
  noteVi: string;
}

export const U6_EX_I1_SORT: U6SortWord[] = [
  { id: 1, before: '', under: 's', after: 'ea', word: 'sea', ipa: '/siː/', sound: 's', noteVi: 'Chữ "s" đầu từ → /s/.' },
  { id: 2, before: 'ma', under: 'ch', after: 'ine', word: 'machine', ipa: '/məˈʃiːn/', sound: 'sh', noteVi: 'Từ gốc Pháp: "ch" đọc /ʃ/.' },
  { id: 3, before: '', under: 'sh', after: 'ow', word: 'show', ipa: '/ʃəʊ/', sound: 'sh', noteVi: '"sh" luôn đọc /ʃ/.' },
  { id: 4, before: '', under: 's', after: 'ell', word: 'sell', ipa: '/sel/', sound: 's', noteVi: '"s" đầu từ → /s/.' },
  { id: 5, before: 'so', under: 'ci', after: 'able', word: 'sociable', ipa: '/ˈsəʊʃəbl/', sound: 'sh', noteVi: 'Cụm "ci" trước nguyên âm → /ʃ/.' },
  { id: 6, before: '', under: 's', after: 'ing', word: 'sing', ipa: '/sɪŋ/', sound: 's', noteVi: '"s" đầu từ → /s/.' },
  { id: 7, before: '', under: 's', after: 'unny', word: 'sunny', ipa: '/ˈsʌni/', sound: 's', noteVi: '"s" đầu từ → /s/.' },
  { id: 8, before: 'na', under: 'ti', after: 'on', word: 'nation', ipa: '/ˈneɪʃn/', sound: 'sh', noteVi: 'Đuôi "-tion" → /ʃ/.' },
  { id: 9, before: '', under: 's', after: 'chool', word: 'school', ipa: '/skuːl/', sound: 's', noteVi: '"s" đầu từ → /s/.' },
  { id: 10, before: 'pa', under: 'ti', after: 'ent', word: 'patient', ipa: '/ˈpeɪʃnt/', sound: 'sh', noteVi: 'Cụm "ti" trước nguyên âm → /ʃ/.' },
  { id: 11, before: '', under: 's', after: 'ound', word: 'sound', ipa: '/saʊnd/', sound: 's', noteVi: '"s" đầu từ → /s/.' },
  { id: 12, before: '', under: 's', after: 'pecial', word: 'special', ipa: '/ˈspeʃl/', sound: 's', noteVi: 'Phần gạch chân "s" đầu từ đọc /s/ (còn cụm "ci" đọc /ʃ/).' },
  { id: 13, before: 'condi', under: 'ti', after: 'on', word: 'condition', ipa: '/kənˈdɪʃn/', sound: 'sh', noteVi: 'Đuôi "-tion" → /ʃ/.' },
  { id: 14, before: '', under: 's', after: 'mile', word: 'smile', ipa: '/smaɪl/', sound: 's', noteVi: '"s" đầu từ → /s/.' },
  { id: 15, before: '', under: 's', after: 'mall', word: 'small', ipa: '/smɔːl/', sound: 's', noteVi: '"s" đầu từ → /s/.' },
  { id: 16, before: '', under: 'c', after: 'elebrate', word: 'celebrate', ipa: '/ˈselɪbreɪt/', sound: 's', noteVi: '"c" trước "e" → /s/.' },
  { id: 17, before: 'ni', under: 'c', after: 'e', word: 'nice', ipa: '/naɪs/', sound: 's', noteVi: '"c" trước "e" → /s/.' },
  { id: 18, before: '', under: 's', after: 'ure', word: 'sure', ipa: '/ʃʊə(r)/', sound: 'sh', noteVi: 'Ngoại lệ nổi tiếng: "s" trong sure đọc /ʃ/!' },
  { id: 19, before: 'Engli', under: 'sh', after: '', word: 'English', ipa: '/ˈɪŋɡlɪʃ/', sound: 'sh', noteVi: '"sh" cuối từ → /ʃ/.' },
  { id: 20, before: 'wa', under: 'sh', after: '', word: 'wash', ipa: '/wɒʃ/', sound: 'sh', noteVi: '"sh" cuối từ → /ʃ/.' },
];

export interface U6PhoneticOption {
  before: string;
  under: string;
  after: string;
  word: string;
  ipa: string;
}

export interface U6PhoneticMcq {
  id: number;
  options: [U6PhoneticOption, U6PhoneticOption, U6PhoneticOption, U6PhoneticOption];
  correctIndex: number;
  explainVi: string;
}

export const U6_EX_I2_MCQ: U6PhoneticMcq[] = [
  {
    id: 1,
    options: [
      { before: '', under: 's', after: 'ofa', word: 'sofa', ipa: '/ˈsəʊfə/' },
      { before: '', under: 's', after: 'ummer', word: 'summer', ipa: '/ˈsʌmə(r)/' },
      { before: '', under: 's', after: 'ugar', word: 'sugar', ipa: '/ˈʃʊɡə(r)/' },
      { before: '', under: 's', after: 'ound', word: 'sound', ipa: '/saʊnd/' },
    ],
    correctIndex: 2,
    explainVi: 'A, B, D đọc /s/; C "sugar" là ngoại lệ đọc /ʃ/.',
  },
  {
    id: 2,
    options: [
      { before: '', under: 'c', after: 'ity', word: 'city', ipa: '/ˈsɪti/' },
      { before: 'spe', under: 'c', after: 'ial', word: 'special', ipa: '/ˈspeʃl/' },
      { before: 'bi', under: 'c', after: 'ycle', word: 'bicycle', ipa: '/ˈbaɪsɪkl/' },
      { before: '', under: 'c', after: 'enter', word: 'center', ipa: '/ˈsentə(r)/' },
    ],
    correctIndex: 1,
    explainVi: 'A, C, D đọc /s/; B "special" có "c" trước "ia" đọc /ʃ/.',
  },
  {
    id: 3,
    options: [
      { before: '', under: 's', after: 'un', word: 'sun', ipa: '/sʌn/' },
      { before: '', under: 's', after: 'on', word: 'son', ipa: '/sʌn/' },
      { before: '', under: 's', after: 'uit', word: 'suit', ipa: '/suːt/' },
      { before: '', under: 's', after: 'ugar', word: 'sugar', ipa: '/ˈʃʊɡə(r)/' },
    ],
    correctIndex: 3,
    explainVi: 'A, B, C đọc /s/; D "sugar" đọc /ʃ/.',
  },
  {
    id: 4,
    options: [
      { before: 'ma', under: 'ch', after: 'ine', word: 'machine', ipa: '/məˈʃiːn/' },
      { before: '', under: 'ch', after: 'oice', word: 'choice', ipa: '/tʃɔɪs/' },
      { before: '', under: 'ch', after: 'eap', word: 'cheap', ipa: '/tʃiːp/' },
      { before: '', under: 'ch', after: 'ange', word: 'change', ipa: '/tʃeɪndʒ/' },
    ],
    correctIndex: 0,
    explainVi: 'B, C, D đọc /tʃ/; A "machine" đọc /ʃ/.',
  },
  {
    id: 5,
    options: [
      { before: '', under: 's', after: 'eat', word: 'seat', ipa: '/siːt/' },
      { before: '', under: 's', after: 'ure', word: 'sure', ipa: '/ʃʊə(r)/' },
      { before: '', under: 's', after: 'ight', word: 'sight', ipa: '/saɪt/' },
      { before: '', under: 's', after: 'and', word: 'sand', ipa: '/sænd/' },
    ],
    correctIndex: 1,
    explainVi: 'A, C, D đọc /s/; B "sure" đọc /ʃ/.',
  },
];

// ============================================================
// PHẦN II: TỪ VỰNG & NGỮ PHÁP (TRANG 135 – 139)
// ============================================================

export const U6_EX_II1_BOX = [
  'fireworks',
  'lucky money',
  'peach blossoms',
  'apricot blossoms',
  'pagoda',
  'calendar',
  'furniture',
  'present',
];

export interface U6TetPicItem {
  id: number;
  svgKey: U6TetSvgKey;
  answer: string;
  ipa: string;
  meaningVi: string;
  clueVi: string;
}

export const U6_EX_II1_PICS: U6TetPicItem[] = [
  { id: 1, svgKey: 'present', answer: 'present', ipa: '/ˈpreznt/', meaningVi: 'món quà', clueVi: 'Hộp quà thắt nơ xinh xắn dịp Tết' },
  { id: 2, svgKey: 'lucky_money', answer: 'lucky money', ipa: '/ˈlʌki ˈmʌni/', meaningVi: 'tiền lì xì', clueVi: 'Những phong bao lì xì đỏ thắm may mắn' },
  { id: 3, svgKey: 'furniture', answer: 'furniture', ipa: '/ˈfɜːnɪtʃə(r)/', meaningVi: 'đồ nội thất', clueVi: 'Bộ bàn ghế gỗ được lau dọn sạch sẽ đón Tết' },
  { id: 4, svgKey: 'fireworks', answer: 'fireworks', ipa: '/ˈfaɪəwɜːks/', meaningVi: 'pháo hoa', clueVi: 'Chùm pháo hoa rực rỡ trên bầu trời đêm Giao thừa' },
  { id: 5, svgKey: 'calendar', answer: 'calendar', ipa: '/ˈkælɪndə(r)/', meaningVi: 'tờ lịch / cuốn lịch', clueVi: 'Cuốn lịch năm mới treo tường' },
  { id: 6, svgKey: 'apricot_blossoms', answer: 'apricot blossoms', ipa: '/ˈeɪprɪkɒt ˈblɒsəmz/', meaningVi: 'hoa mai vàng', clueVi: 'Cành mai vàng 5 cánh đặc trưng Tết miền Nam' },
  { id: 7, svgKey: 'pagoda', answer: 'pagoda', ipa: '/pəˈɡəʊdə/', meaningVi: 'ngôi chùa', clueVi: 'Ngôi chùa mái cong nhiều tầng đi lễ đầu xuân' },
  { id: 8, svgKey: 'peach_blossoms', answer: 'peach blossoms', ipa: '/piːtʃ ˈblɒsəmz/', meaningVi: 'hoa đào hồng', clueVi: 'Cành đào phai hồng thắm đặc trưng Tết miền Bắc' },
];

export const U6_EX_II2_VERBS = [
  { id: 1, verb: 'buy', answerKey: 'F', fullEn: 'buy peach blossoms', vi: 'mua hoa đào' },
  { id: 2, verb: 'cook', answerKey: 'I', fullEn: 'cook special food', vi: 'nấu món ăn đặc biệt' },
  { id: 3, verb: 'do', answerKey: 'E', fullEn: 'do the shopping', vi: 'đi mua sắm' },
  { id: 4, verb: 'go', answerKey: 'J', fullEn: 'go to a pagoda', vi: 'đi chùa' },
  { id: 5, verb: 'give', answerKey: 'C', fullEn: 'give lucky money', vi: 'tặng tiền lì xì' },
  { id: 6, verb: 'hang', answerKey: 'A', fullEn: 'hang a calendar', vi: 'treo lịch' },
  { id: 7, verb: 'play', answerKey: 'H', fullEn: 'play cards', vi: 'chơi bài' },
  { id: 8, verb: 'visit', answerKey: 'G', fullEn: 'visit relatives', vi: 'thăm họ hàng' },
  { id: 9, verb: 'make', answerKey: 'D', fullEn: 'make a wish', vi: 'ước một điều ước' },
  { id: 10, verb: 'decorate', answerKey: 'B', fullEn: 'decorate the house', vi: 'trang trí nhà cửa' },
];

export const U6_EX_II2_NOUNS = [
  { key: 'A', text: 'a calendar' },
  { key: 'B', text: 'the house' },
  { key: 'C', text: 'lucky money' },
  { key: 'D', text: 'a wish' },
  { key: 'E', text: 'the shopping' },
  { key: 'F', text: 'peach blossoms' },
  { key: 'G', text: 'relatives' },
  { key: 'H', text: 'cards' },
  { key: 'I', text: 'special food' },
  { key: 'J', text: 'to a pagoda' },
];

export const U6_EX_II3_PAIRS: {
  id: number;
  before: string;
  choices: [string, string];
  after: string;
  correctIndex: 0 | 1;
  explainVi: string;
}[] = [
  { id: 1, before: 'Vietnamese children get', choices: ['calendar', 'lucky money'], after: 'in Lunar New Year.', correctIndex: 1, explainVi: 'Trẻ em Việt Nam nhận tiền lì xì (lucky money) vào dịp Tết Nguyên đán.' },
  { id: 2, before: 'My aunt is', choices: ['decorating', 'giving'], after: 'her living room for Tet.', correctIndex: 0, explainVi: 'Trang trí phòng khách đón Tết → decorating her living room.' },
  { id: 3, before: 'During Tet, we', choices: ['visit', 'celebrate'], after: 'our relatives.', correctIndex: 0, explainVi: 'Đi thăm họ hàng → visit our relatives.' },
  { id: 4, before: 'During Tet, families in Viet Nam cook', choices: ['special', 'lucky'], after: 'food.', correctIndex: 0, explainVi: 'Nấu các món ăn đặc biệt ngày Tết → cook special food.' },
  { id: 5, before: 'Old people in Viet Nam often go to', choices: ['pagoda', 'library'], after: 'at Tet.', correctIndex: 0, explainVi: 'Người lớn tuổi thường đi lễ chùa đầu năm → go to pagoda.' },
  { id: 6, before: 'You should learn how to', choices: ['wish', 'behave'], after: 'a happy new year in Vietnamese.', correctIndex: 0, explainVi: 'Chúc mừng năm mới → wish a happy new year.' },
  { id: 7, before: "On New Year's Eve, thousands of people gather on Nguyen Hue Street to watch", choices: ['fireworks', 'apricot blossoms'], after: '.', correctIndex: 0, explainVi: 'Đêm Giao thừa mọi người tụ tập xem pháo hoa → watch fireworks.' },
  { id: 8, before: 'Tet is a time for', choices: ['family gathering', 'apricot blossoms'], after: '.', correctIndex: 0, explainVi: 'Tết là thời gian để sum họp gia đình → family gathering.' },
];

export const U6_EX_II4_SHOULD: {
  id: number;
  before: string;
  after: string;
  answer: 'should' | "shouldn't";
  explainVi: string;
}[] = [
  { id: 1, before: 'Children', after: 'listen to their parents.', answer: 'should', explainVi: 'Trẻ em nên nghe lời bố mẹ → should.' },
  { id: 2, before: 'You look tired. You', after: 'work so hard.', answer: "shouldn't", explainVi: 'Trông bạn rất mệt, bạn không nên làm việc quá sức → shouldn\'t. (Lưu ý: Sách in nhầm đáp án "should").' },
  { id: 3, before: 'We', after: 'be rude to our elders.', answer: "shouldn't", explainVi: 'Không nên thô lỗ với người lớn tuổi → shouldn\'t.' },
  { id: 4, before: 'Students', after: 'pay attention in class.', answer: 'should', explainVi: 'Học sinh nên chú ý nghe giảng trong lớp → should.' },
  { id: 5, before: 'The students', after: 'use their mobile phones in the exam.', answer: "shouldn't", explainVi: 'Không nên/không được dùng điện thoại trong giờ kiểm tra → shouldn\'t.' },
  { id: 6, before: 'Tom', after: "eat so many sweets. It's bad for his teeth.", answer: "shouldn't", explainVi: 'Ăn nhiều kẹo hại răng → shouldn\'t.' },
  { id: 7, before: 'The kids', after: 'spend so much time in front of the TV.', answer: "shouldn't", explainVi: 'Trẻ nhỏ không nên xem TV quá nhiều → shouldn\'t.' },
  { id: 8, before: 'You are overweight. You', after: 'go on a diet.', answer: 'should', explainVi: 'Bị thừa cân thì nên ăn kiêng → should.' },
  { id: 9, before: 'Tom', after: 'drive carefully. The traffic is very heavy.', answer: 'should', explainVi: 'Đường rất đông nên Tom nên lái xe cẩn thận → should.' },
  { id: 10, before: 'The film is interesting. You', after: 'go and see it.', answer: 'should', explainVi: 'Bộ phim rất hay nên bạn nên đi xem → should.' },
];

export interface U6AdviceWriteItem {
  id: number;
  situation: string;
  cue: string;
  answers: string[];
  displayAnswer: string;
  explainVi: string;
}

export const U6_EX_II5_ADVICE: U6AdviceWriteItem[] = [
  { id: 1, situation: 'I feel very tired.', cue: 'take a short rest', answers: ['you should take a short rest.', 'i should take a short rest.'], displayAnswer: 'You should take a short rest.', explainVi: 'Khuyên người đang mệt: You should + take a short rest.' },
  { id: 2, situation: 'Hoa has a bad cold.', cue: 'stay in bed', answers: ['she should stay in bed.', 'hoa should stay in bed.'], displayAnswer: 'She should stay in bed.', explainVi: 'Hoa bị cảm nặng → She should stay in bed.' },
  { id: 3, situation: "Minh's room is very dirty.", cue: 'clean it every day', answers: ['he should clean it every day.', 'minh should clean it every day.'], displayAnswer: 'He should clean it every day.', explainVi: 'Phòng của Minh rất bẩn → He should clean it every day.' },
  { id: 4, situation: "We'll have an English test tomorrow.", cue: 'learn our lessons carefully', answers: ['we should learn our lessons carefully.'], displayAnswer: 'We should learn our lessons carefully.', explainVi: 'Ngày mai có bài kiểm tra → We should learn our lessons carefully.' },
  { id: 5, situation: 'Nga has a headache.', cue: 'take an aspirin', answers: ['she should take an aspirin.', 'nga should take an aspirin.'], displayAnswer: 'She should take an aspirin.', explainVi: 'Nga bị đau đầu → She should take an aspirin.' },
  { id: 6, situation: 'It is so late.', cue: 'go home now', answers: ['you should go home now.', 'we should go home now.'], displayAnswer: 'You should go home now.', explainVi: 'Đã rất muộn rồi → You should go home now.' },
  { id: 7, situation: 'It is a difficult exercise.', cue: 'do it carefully', answers: ['you should do it carefully.', 'we should do it carefully.'], displayAnswer: 'You should do it carefully.', explainVi: 'Bài tập khó → You should do it carefully.' },
  { id: 8, situation: 'It is dark.', cue: 'read the book now', answers: ["you shouldn't read the book now.", 'you should not read the book now.'], displayAnswer: "You shouldn't read the book now.", explainVi: 'Trời tối không nên đọc sách hại mắt → You shouldn\'t read the book now.' },
  { id: 9, situation: 'The room is too old.', cue: 'paint it', answers: ['you should paint it.', 'we should paint it.'], displayAnswer: 'You should paint it.', explainVi: 'Căn phòng quá cũ → You should paint it.' },
  { id: 10, situation: 'What a beautiful beach!', cue: 'take a photograph', answers: ['you should take a photograph.', 'we should take a photograph.'], displayAnswer: 'You should take a photograph.', explainVi: 'Bãi biển đẹp quá → You should take a photograph.' },
];

export const U6_EX_II6_LEFT = [
  { id: 1, text: 'What a beautiful beach!', answerKey: 'D', explainVi: 'Bãi biển đẹp → Nên chụp ảnh (D).' },
  { id: 2, text: 'We are exhausted.', answerKey: 'F', explainVi: 'Kiệt sức rồi → Nên nghỉ ngơi một chút (F).' },
  { id: 3, text: 'The road is very slippery.', answerKey: 'B', explainVi: 'Đường rất trơn trượt → Nên lái xe chậm thôi (B).' },
  { id: 4, text: "I can't fall asleep at night.", answerKey: 'E', explainVi: 'Không ngủ được ban đêm → Không nên uống nhiều cà phê (E).' },
  { id: 5, text: 'I got a bad mark in my science test.', answerKey: 'C', explainVi: 'Điểm kém bài khoa học → Nên học chăm hơn (C).' },
  { id: 6, text: 'I have a headache.', answerKey: 'A', explainVi: 'Bị đau đầu → Nên uống thuốc giảm đau aspirin (A).' },
  { id: 7, text: 'My shirt is very old.', answerKey: 'H', explainVi: 'Áo cũ rồi → Nên mua cái mới (H).' },
  { id: 8, text: 'My father has a sore throat.', answerKey: 'G', explainVi: 'Bố bị đau họng → Bố không nên hút thuốc nhiều (G).' },
];

export const U6_EX_II6_RIGHT = [
  { key: 'A', text: 'You should take an aspirin.' },
  { key: 'B', text: 'You should drive slowly.' },
  { key: 'C', text: 'You should study more.' },
  { key: 'D', text: 'You should take a photograph.' },
  { key: 'E', text: "You shouldn't drink so much coffee." },
  { key: 'F', text: 'You should take a short rest.' },
  { key: 'G', text: "He shouldn't smoke so much." },
  { key: 'H', text: 'You should buy a new one.' },
];

export interface U6McqItem {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explainVi: string;
}

export const U6_EX_II7_MCQ: U6McqItem[] = [
  { id: 1, question: 'I feel tired. I should _______ to bed early.', options: ['going', 'go', 'to go', 'went'], correctIndex: 1, explainVi: 'Sau "should" dùng động từ nguyên thể → go.' },
  { id: 2, question: 'Where _______ we go when we are in Ho Chi Minh City?', options: ['should', 'do', 'did', 'are'], correctIndex: 0, explainVi: 'Hỏi xin lời khuyên/gợi ý: Where should we go...?' },
  { id: 3, question: "We shouldn't _______ with the past.", options: ['to live', 'lived', 'living', 'live'], correctIndex: 3, explainVi: 'Sau "shouldn\'t" dùng động từ nguyên thể → live.' },
  { id: 4, question: "You shouldn't _______ late for school.", options: ['be', 'is', 'being', 'are'], correctIndex: 0, explainVi: 'Sau "shouldn\'t" động từ to be phải về nguyên mẫu → be.' },
  { id: 5, question: 'You _______ ask your mother for advice. She is willing to help you.', options: ["don't", "mustn't", 'should', 'will'], correctIndex: 2, explainVi: 'Khuyên nên hỏi ý kiến mẹ → should.' },
  { id: 6, question: 'You _______ a good pair of shoes for jogging.', options: ['should have', 'have should', "shouldn't have", 'having'], correctIndex: 0, explainVi: 'Trật tự chuẩn: S + should + V (should have).' },
  { id: 7, question: 'You _______ in a dark room like this.', options: ['should study', "don't should study", "shouldn't study", "don't study"], correctIndex: 2, explainVi: 'Khuyên không nên học trong phòng tối → shouldn\'t study.' },
  { id: 8, question: 'What _______ in this condition?', options: ['should I do', 'do I do', 'am I doing', 'I am doing'], correctIndex: 0, explainVi: 'Hỏi xin lời khuyên: What should I do...?' },
  { id: 9, question: 'What _______ usually do after school?', options: ['do you', 'you do', 'are you', 'did you'], correctIndex: 0, explainVi: 'Câu hỏi Hiện tại đơn với "usually" + động từ thường "do" → What do you usually do...?' },
  { id: 10, question: 'I _______ Mr. Thang next month.', options: ['visit', 'visited', 'am visits', 'will visit'], correctIndex: 3, explainVi: 'Có "next month" (tháng tới) → thì Tương lai đơn: will visit.' },
];

export interface U6SomeAnyItem {
  id: number;
  parts: string[];
  answers: ('some' | 'any')[];
  capitalizeFirst?: boolean;
  explainVi: string;
}

export const U6_EX_II8_SOME_ANY: U6SomeAnyItem[] = [
  { id: 1, parts: ["I don't have ", ' money in my pocket, but I have ', ' money in the bank.'], answers: ['any', 'some'], explainVi: 'Vế 1 phủ định (don\'t have) → any; Vế 2 khẳng định (have) → some.' },
  { id: 2, parts: ['Are there ', ' letters for me this morning?'], answers: ['any'], explainVi: 'Câu hỏi thông thường → any.' },
  { id: 3, parts: ["I didn't have ", " breakfast. I didn't feel hungry in the morning."], answers: ['any'], explainVi: 'Câu phủ định (didn\'t have) → any.' },
  { id: 4, parts: ['You have ', ' lovely pictures in your house.'], answers: ['some'], explainVi: 'Câu khẳng định → some.' },
  { id: 5, parts: ['Are you Canadian? I have ', ' good friends in Canada.'], answers: ['some'], explainVi: 'Câu khẳng định → some.' },
  { id: 6, parts: ["Don't buy ", " bread at the shops. There's a lot in the kitchen."], answers: ['any'], explainVi: 'Câu mệnh lệnh phủ định (Don\'t buy) → any.' },
  { id: 7, parts: ['Do you have ', ' brothers or sisters?'], answers: ['any'], explainVi: 'Câu hỏi thông thường → any.' },
  { id: 8, parts: ["There aren't ", ' shops in my village, just a post office and a pub.'], answers: ['any'], explainVi: 'Câu phủ định (aren\'t) → any.' },
  { id: 9, parts: ['I want ', ' cheese. Is there ', ' in the fridge?'], answers: ['some', 'any'], explainVi: 'Câu 1 khẳng định → some; Câu 2 nghi vấn → any.' },
  { id: 10, parts: ['', " people like flying, but other people don't."], answers: ['some'], capitalizeFirst: true, explainVi: 'Đầu câu khẳng định: Some people... (Một vài người...).' },
  { id: 11, parts: ['There was ', ' rain during the night.'], answers: ['some'], explainVi: 'Câu khẳng định + danh từ không đếm được "rain" → some.' },
  { id: 12, parts: ['I can see a house, a lake and ', ' trees.'], answers: ['some'], explainVi: 'Câu khẳng định + danh từ số nhiều "trees" → some.' },
  { id: 13, parts: ["I can't find ", ' books about dinosaurs.'], answers: ['any'], explainVi: 'Câu phủ định (can\'t find) → any.' },
  { id: 14, parts: ['Have you got ', ' games in your computer?'], answers: ['any'], explainVi: 'Câu hỏi → any.' },
  { id: 15, parts: ["I can't see ", ' cars in the street, but I can see ', ' people.'], answers: ['any', 'some'], explainVi: 'Vế 1 phủ định → any; Vế 2 khẳng định → some.' },
  { id: 16, parts: ['I have seen ', ' nice postcards in this souvenir shop.'], answers: ['some'], explainVi: 'Câu khẳng định → some.' },
  { id: 17, parts: ['Are there ', ' girls in your chess club?'], answers: ['any'], explainVi: 'Câu hỏi → any.' },
  { id: 18, parts: ['He often gives me ', ' nice postcards.'], answers: ['some'], explainVi: 'Câu khẳng định → some.' },
  { id: 19, parts: ["I'm afraid there aren't ", ' pencils in my bag.'], answers: ['any'], explainVi: 'Câu phủ định (aren\'t) → any.' },
  { id: 20, parts: ["Eating out is expensive here. There aren't ", ' cheap restaurants.'], answers: ['any'], explainVi: 'Câu phủ định (aren\'t) → any.' },
];

export interface U6MistakeItem {
  id: number;
  sentence: string;
  wrongWord: string;
  correctWord: string;
  acceptedCorrections: string[];
  fixedSentence: string;
  explainVi: string;
}

export const U6_EX_II9_MISTAKES: U6MistakeItem[] = [
  { id: 1, sentence: 'We have got any mistakes.', wrongWord: 'any', correctWord: 'some', acceptedCorrections: ['some'], fixedSentence: 'We have got some mistakes.', explainVi: 'Câu khẳng định phải dùng "some" thay cho "any".' },
  { id: 2, sentence: "They haven't no questions.", wrongWord: 'no', correctWord: 'any', acceptedCorrections: ['any'], fixedSentence: "They haven't any questions.", explainVi: 'Không dùng hai phủ định "haven\'t + no" → đổi "no" thành "any".' },
  { id: 3, sentence: "There aren't some pictures on the wall.", wrongWord: 'some', correctWord: 'any', acceptedCorrections: ['any'], fixedSentence: "There aren't any pictures on the wall.", explainVi: 'Câu phủ định (aren\'t) dùng "any".' },
  { id: 4, sentence: 'There is some butters on the table.', wrongWord: 'butters', correctWord: 'butter', acceptedCorrections: ['butter'], fixedSentence: 'There is some butter on the table.', explainVi: '"butter" (bơ) không đếm được → không thêm -s.' },
  { id: 5, sentence: 'Have you got any carrot?', wrongWord: 'carrot', correctWord: 'carrots', acceptedCorrections: ['carrots'], fixedSentence: 'Have you got any carrots?', explainVi: '"carrot" là danh từ đếm được → sau "any" phải chia số nhiều "carrots".' },
  { id: 6, sentence: 'There is some film on TV today.', wrongWord: 'some', correctWord: 'a', acceptedCorrections: ['a'], fixedSentence: 'There is a film on TV today.', explainVi: '"film" là danh từ đếm được số ít → dùng mạo từ "a".' },
  { id: 7, sentence: 'She has some friend here.', wrongWord: 'friend', correctWord: 'friends', acceptedCorrections: ['friends'], fixedSentence: 'She has some friends here.', explainVi: 'Sau "some", danh từ đếm được "friend" phải thêm -s → friends.' },
  { id: 8, sentence: 'Are there some birds on the tree?', wrongWord: 'some', correctWord: 'any', acceptedCorrections: ['any'], fixedSentence: 'Are there any birds on the tree?', explainVi: 'Câu hỏi thông thường dùng "any" thay cho "some".' },
];

// ============================================================
// PHẦN III: ĐỌC HIỂU (TRANG 139 – 141)
// ============================================================

export const U6_EX_III1_PASSAGE =
  'Tet or Lunar New Year is the most important holiday in Viet Nam. It generally takes place around late January or early February. Tet holiday is considered the best occasion for family members to get together. During Tet, Vietnamese spend time shopping for the New Year, go to pagodas and temples. The items of shopping range from food to clothing to household decorations. People often make Chung cake, the main food for Tet holiday and other special foods. The Vietnamese believe that Tet holiday is an occasion to enjoy life after a full hard-working year.';

export const U6_EX_III1_TF: {
  id: number;
  statement: string;
  answer: 'T' | 'F';
  explainVi: string;
}[] = [
  { id: 1, statement: 'Tet is considered as the most important holiday in Viet Nam.', answer: 'T', explainVi: 'Đúng (True) — Câu 1 nêu rõ: "Tet or Lunar New Year is the most important holiday in Viet Nam."' },
  { id: 2, statement: 'Tet happens in April.', answer: 'F', explainVi: 'Sai (False) — Tết diễn ra vào cuối tháng 1 hoặc đầu tháng 2 (late January or early February), không phải tháng 4.' },
  { id: 3, statement: 'During Tet, Vietnamese spend time shopping for the New Year, go to pagodas and temples.', answer: 'T', explainVi: 'Đúng (True) — Trùng khớp câu 4 trong bài đọc.' },
  { id: 4, statement: 'People shop for food, clothing and decorations.', answer: 'T', explainVi: 'Đúng (True) — "The items of shopping range from food to clothing to household decorations."' },
  { id: 5, statement: 'The Vietnamese believe that Tet is an occasion to work hard.', answer: 'F', explainVi: 'Sai (False) — Tết là dịp tận hưởng cuộc sống (enjoy life) sau một năm làm việc vất vả.' },
];

export const U6_EX_III2_PARTS = [
  'New year is coming. Nga and Hoa are preparing for the big family gathering. They ',
  ' the furniture and plant some flowers. Their parents will ',
  ' a big party. Tomorrow, all the family ',
  ' to the market to do the shopping. They want to buy peach blossoms and something to decorate their house. Their mother will make Chung cake and cook some ',
  ' foods. They invite Hung to become their first-footer of the year. ',
  ' the first day of the year, they will go to the pagoda to make wishes for the new year.',
];

export const U6_EX_III2_QUESTIONS: {
  id: number;
  options: [string, string, string, string];
  correctIndex: number;
  explainVi: string;
}[] = [
  { id: 1, options: ['clean', 'make', 'hang', 'watch'], correctIndex: 0, explainVi: 'Lau dọn đồ đạc → clean the furniture.' },
  { id: 2, options: ['celebrated', 'to celebrate', 'celebrate', 'celebrating'], correctIndex: 2, explainVi: 'Sau "will" dùng động từ nguyên thể → celebrate.' },
  { id: 3, options: ['go', 'will go', 'goes', 'to go'], correctIndex: 1, explainVi: 'Có "Tomorrow" (ngày mai) → thì Tương lai đơn: will go.' },
  { id: 4, options: ['thrilling', 'fantastic', 'terrible', 'special'], correctIndex: 3, explainVi: 'Cụm quen thuộc ngày Tết: cook some special foods (nấu các món đặc biệt).' },
  { id: 5, options: ['On', 'In', 'At', 'To'], correctIndex: 0, explainVi: 'Trước ngày cụ thể (the first day of the year) dùng giới từ "On".' },
];

export const U6_EX_III3_BOX = [
  'of',
  'day',
  'visit',
  'receive',
  'kinds',
  'paint',
  'cook',
  'before',
  'together',
  'be',
];

export const U6_EX_III3_SEGMENTS = [
  'Tet holiday is celebrated on the first ',
  ' of the Lunar New Year. Some weeks ',
  ' the New Year, the Vietnamese clean their houses and ',
  ' the walls. New clothes are bought for the occasion. One or two days before the festival, people ',
  " Chung cake, which is the traditional cake, and other goodies. On New Year's Eve, the whole family gets ",
  ' for a reunion dinner. Every member of the family should ',
  ' present during the dinner in which many different ',
  ' of dishes are served. On the New Year morning, the young members ',
  ' the family pay their respects to the elders. In return they ',
  ' lucky money wrapped in red tiny envelopes. Then people ',
  ' their neighbours, friends and relatives.',
];

export const U6_EX_III3_ANSWERS: {
  id: number;
  answer: string;
  explainVi: string;
}[] = [
  { id: 1, answer: 'day', explainVi: 'Ngày đầu tiên của năm mới Âm lịch → the first day.' },
  { id: 2, answer: 'before', explainVi: 'Một vài tuần trước Tết → Some weeks before the New Year.' },
  { id: 3, answer: 'paint', explainVi: 'Sơn sửa lại tường nhà → paint the walls.' },
  { id: 4, answer: 'cook', explainVi: 'Nấu bánh chưng → cook Chung cake.' },
  { id: 5, answer: 'together', explainVi: 'Cụm động từ "get together" = tụ họp, sum họp.' },
  { id: 6, answer: 'be', explainVi: 'Sau "should" + tính từ "present" (có mặt) cần động từ to be nguyên thể → be.' },
  { id: 7, answer: 'kinds', explainVi: 'Nhiều loại món ăn khác nhau → many different kinds of dishes.' },
  { id: 8, answer: 'of', explainVi: 'Các thành viên trẻ của gia đình → young members of the family.' },
  { id: 9, answer: 'receive', explainVi: 'Nhận tiền lì xì → receive lucky money.' },
  { id: 10, answer: 'visit', explainVi: 'Đi thăm hàng xóm, bạn bè, họ hàng → visit their neighbours...' },
];

// ============================================================
// PHẦN IV: VIẾT (TRANG 141 – 142)
// ============================================================

export const U6_EX_IV1_REORDER: {
  id: number;
  tiles: string[];
  correctSentences: string[];
  displaySentence: string;
  vi: string;
  explainVi: string;
}[] = [
  {
    id: 1,
    tiles: ['You', 'should', 'behave', 'well', 'during', 'Tet.'],
    correctSentences: ['You should behave well during Tet.'],
    displaySentence: 'You should behave well during Tet.',
    vi: 'Bạn nên cư xử ngoan ngoãn trong dịp Tết.',
    explainVi: 'Cấu trúc: S + should + V (behave) + adv (well) + during Tet.',
  },
  {
    id: 2,
    tiles: ['John', 'is', 'cleaning', 'some', 'furniture', 'in', 'his', 'room.'],
    correctSentences: ['John is cleaning some furniture in his room.'],
    displaySentence: 'John is cleaning some furniture in his room.',
    vi: 'John đang lau dọn một ít đồ đạc trong phòng của cậu ấy.',
    explainVi: 'Hiện tại tiếp diễn: John is cleaning + some furniture + in his room.',
  },
  {
    id: 3,
    tiles: ['Every', 'child', 'should', 'help', 'decorate', 'the', 'house.'],
    correctSentences: ['Every child should help decorate the house.'],
    displaySentence: 'Every child should help decorate the house.',
    vi: 'Mọi đứa trẻ đều nên phụ giúp trang trí nhà cửa.',
    explainVi: 'Cấu trúc: Every child + should + help decorate + the house.',
  },
  {
    id: 4,
    tiles: ['Are', 'there', 'any', 'strange', 'customs', 'in', 'your', 'country?'],
    correctSentences: ['Are there any strange customs in your country?'],
    displaySentence: 'Are there any strange customs in your country?',
    vi: 'Ở đất nước bạn có phong tục kỳ lạ nào không?',
    explainVi: 'Câu hỏi với "any": Are there + any + adj + N + in your country?',
  },
  {
    id: 5,
    tiles: ['You', "shouldn't", 'sweep', 'the', 'house', 'during', 'Tet.'],
    correctSentences: [
      "You shouldn't sweep the house during Tet.",
      "During Tet, you shouldn't sweep the house.",
    ],
    displaySentence: "You shouldn't sweep the house during Tet.",
    vi: 'Bạn không nên quét nhà trong dịp Tết.',
    explainVi: 'Cấu trúc: You shouldn\'t + sweep the house + during Tet.',
  },
  {
    id: 6,
    tiles: ['People', 'should', 'dress', 'beautifully', 'at', 'Tet.'],
    correctSentences: ['People should dress beautifully at Tet.'],
    displaySentence: 'People should dress beautifully at Tet.',
    vi: 'Mọi người nên ăn mặc thật đẹp vào dịp Tết.',
    explainVi: 'Trạng từ "beautifully" bổ nghĩa cho động từ "dress" (dress beautifully).',
  },
];

export const U6_EX_IV2_SHOULD_WRITE: {
  id: number;
  cue: string;
  answers: string[];
  displayAnswer: string;
  explainVi: string;
}[] = [
  { id: 1, cue: 'You / decide too quickly. (should / not)', answers: ["you shouldn't decide too quickly.", 'you should not decide too quickly.'], displayAnswer: "You shouldn't decide too quickly.", explainVi: 'Bạn không nên quyết định quá vội vàng → shouldn\'t decide.' },
  { id: 2, cue: 'You / check / the condition of the car. (should)', answers: ['you should check the condition of the car.'], displayAnswer: 'You should check the condition of the car.', explainVi: 'Bạn nên kiểm tra tình trạng của xe ô tô → should check.' },
  { id: 3, cue: 'You / be / very careful. (should)', answers: ['you should be very careful.'], displayAnswer: 'You should be very careful.', explainVi: 'Bạn nên thật cẩn thận → should be very careful.' },
  { id: 4, cue: 'They / visit / their grandparents. (should)', answers: ['they should visit their grandparents.'], displayAnswer: 'They should visit their grandparents.', explainVi: 'Họ nên đi thăm ông bà → should visit.' },
  { id: 5, cue: 'You / eat / too much / fat. (should / not)', answers: ["you shouldn't eat too much fat.", 'you should not eat too much fat.'], displayAnswer: "You shouldn't eat too much fat.", explainVi: 'Không nên ăn quá nhiều chất béo → shouldn\'t eat too much fat.' },
  { id: 6, cue: 'You / put / books / bed. (should / not)', answers: ["you shouldn't put books on the bed.", 'you should not put books on the bed.'], displayAnswer: "You shouldn't put books on the bed.", explainVi: 'Nhớ thêm giới từ "on the" → put books on the bed.' },
  { id: 7, cue: 'You / wash / dirty carpet. (should)', answers: ['you should wash the dirty carpet.'], displayAnswer: 'You should wash the dirty carpet.', explainVi: 'Nhớ thêm mạo từ "the" → wash the dirty carpet.' },
  { id: 8, cue: 'You / leave / teddy bear / floor. (should / not)', answers: ["you shouldn't leave the teddy bear on the floor.", "you shouldn't leave teddy bear on the floor.", "you shouldn't leave your teddy bear on the floor."], displayAnswer: "You shouldn't leave the teddy bear on the floor.", explainVi: 'Không nên vứt gấu bông trên sàn nhà → on the floor.' },
];

export const U6_EX_IV3_PARAGRAPH = {
  titleVi: 'Bài IV.3 · Trang 142 · Viết đoạn văn về cách người Việt Nam đón Tết',
  cues: [
    '1. When is Tet holiday in Viet Nam? (Tết diễn ra khi nào?)',
    '2. What do the Vietnamese often do some weeks before the New Year? (Trước Tết vài tuần mọi người làm gì?)',
    '3. Do the Vietnamese buy a branch of peach blossoms? (Người Việt có mua cành hoa đào không?)',
    '4. Do people buy new clothes, biscuits and sweets? (Mọi người có mua quần áo mới, bánh kẹo không?)',
    '5. Who do people often visit on Tet holiday? (Mọi người thường đi thăm ai vào dịp Tết?)',
  ],
  sampleEn:
    "The Vietnamese people celebrate Tet (New Year) at different times each year. This year, we will celebrate Tet in the middle of February. My father will repaint the house. I will help him to decorate the house. My father will buy a branch of beautiful peach blossoms. My family won't buy Chung cake. We will make some. My sister will help my mother to make them. My mother will buy me and my sister some new clothes. My mother will buy some delicious biscuits and sweets. We will visit our grandparents. I love meeting and talking to them.",
  sampleVi:
    'Người Việt Nam đón Tết vào những thời điểm khác nhau mỗi năm. Năm nay chúng em sẽ đón Tết vào giữa tháng Hai. Bố em sẽ sơn lại nhà và em sẽ phụ bố trang trí. Bố sẽ mua một cành hoa đào thật đẹp. Gia đình em không mua bánh chưng mà sẽ tự gói; chị em sẽ giúp mẹ gói bánh. Mẹ sẽ mua cho em và chị quần áo mới cùng nhiều bánh quy, kẹo ngon. Chúng em sẽ đi thăm ông bà. Em rất thích gặp gỡ và trò chuyện cùng ông bà.',
};

// ============================================================
// TEST FOR UNIT 6 — TRỌN BỘ 10 PHẦN (TRANG 143 – 149)
// ============================================================

export const U6_TEST_P1: U6PhoneticMcq[] = [
  {
    id: 1,
    options: [
      { before: '', under: 'ch', after: 'emistry', word: 'chemistry', ipa: '/ˈkemɪstri/' },
      { before: '', under: 'ch', after: 'air', word: 'chair', ipa: '/tʃeə(r)/' },
      { before: 'cou', under: 'ch', after: '', word: 'couch', ipa: '/kaʊtʃ/' },
      { before: '', under: 'ch', after: 'ildren', word: 'children', ipa: '/ˈtʃɪldrən/' },
    ],
    correctIndex: 0,
    explainVi: 'A "chemistry" đọc /k/; B, C, D đọc /tʃ/.',
  },
  {
    id: 2,
    options: [
      { before: '', under: 's', after: 'ure', word: 'sure', ipa: '/ʃʊə(r)/' },
      { before: '', under: 's', after: 'oup', word: 'soup', ipa: '/suːp/' },
      { before: '', under: 's', after: 'eason', word: 'season', ipa: '/ˈsiːzn/' },
      { before: '', under: 's', after: 'ight', word: 'sight', ipa: '/saɪt/' },
    ],
    correctIndex: 0,
    explainVi: 'A "sure" đọc /ʃ/; B, C, D đọc /s/.',
  },
  {
    id: 3,
    options: [
      { before: 'swit', under: 'ch', after: '', word: 'switch', ipa: '/swɪtʃ/' },
      { before: 'stoma', under: 'ch', after: '', word: 'stomach', ipa: '/ˈstʌmək/' },
      { before: 'mat', under: 'ch', after: '', word: 'match', ipa: '/mætʃ/' },
      { before: 'cat', under: 'ch', after: '', word: 'catch', ipa: '/kætʃ/' },
    ],
    correctIndex: 1,
    explainVi: 'B "stomach" đọc /k/; A, C, D đọc /tʃ/.',
  },
  {
    id: 4,
    options: [
      { before: 'pea', under: 'ch', after: '', word: 'peach', ipa: '/piːtʃ/' },
      { before: 'wat', under: 'ch', after: '', word: 'watch', ipa: '/wɒtʃ/' },
      { before: '', under: 'ch', after: 'emistry', word: 'chemistry', ipa: '/ˈkemɪstri/' },
      { before: 'Dut', under: 'ch', after: '', word: 'Dutch', ipa: '/dʌtʃ/' },
    ],
    correctIndex: 2,
    explainVi: 'C "chemistry" đọc /k/; A, B, D đọc /tʃ/.',
  },
  {
    id: 5,
    options: [
      { before: 'w', under: 'i', after: 'sh', word: 'wish', ipa: '/wɪʃ/' },
      { before: 'f', under: 'i', after: 'rework', word: 'firework', ipa: '/ˈfaɪəwɜːk/' },
      { before: 'apr', under: 'i', after: 'cot', word: 'apricot', ipa: '/ˈeɪprɪkɒt/' },
      { before: 'v', under: 'i', after: 'sit', word: 'visit', ipa: '/ˈvɪzɪt/' },
    ],
    correctIndex: 1,
    explainVi: 'B "firework" đọc nguyên âm đôi /aɪ/; A, C, D đọc /ɪ/.',
  },
  {
    id: 6,
    options: [
      { before: 'r', under: 'u', after: 'bbish', word: 'rubbish', ipa: '/ˈrʌbɪʃ/' },
      { before: 'f', under: 'u', after: 'rniture', word: 'furniture', ipa: '/ˈfɜːnɪtʃə(r)/' },
      { before: 'D', under: 'u', after: 'tch', word: 'Dutch', ipa: '/dʌtʃ/' },
      { before: 'l', under: 'u', after: 'cky', word: 'lucky', ipa: '/ˈlʌki/' },
    ],
    correctIndex: 1,
    explainVi: 'B "furniture" đọc /ɜː/; A, C, D đọc /ʌ/.',
  },
  {
    id: 7,
    options: [
      { before: '', under: 'e', after: 'mpty', word: 'empty', ipa: '/ˈempti/' },
      { before: 'mon', under: 'e', after: 'y', word: 'money', ipa: '/ˈmʌni/' },
      { before: 'r', under: 'e', after: 'move', word: 'remove', ipa: '/rɪˈmuːv/' },
      { before: 'd', under: 'e', after: 'serve', word: 'deserve', ipa: '/dɪˈzɜːv/' },
    ],
    correctIndex: 0,
    explainVi: 'A "empty" đọc /e/; B, C, D đọc /i/ hoặc /ɪ/.',
  },
  {
    id: 8,
    options: [
      { before: 'fl', under: 'o', after: 'wer', word: 'flower', ipa: '/ˈflaʊə(r)/' },
      { before: 'd', under: 'o', after: 'wn', word: 'down', ipa: '/daʊn/' },
      { before: 'bl', under: 'o', after: 'ssom', word: 'blossom', ipa: '/ˈblɒsəm/' },
      { before: 'c', under: 'o', after: 'w', word: 'cow', ipa: '/kaʊ/' },
    ],
    correctIndex: 2,
    explainVi: 'C "blossom" đọc /ɒ/; A, B, D đọc /aʊ/.',
  },
  {
    id: 9,
    options: [
      { before: 'sta', under: 'ti', after: 'on', word: 'station', ipa: '/ˈsteɪʃn/' },
      { before: 'informa', under: 'ti', after: 'on', word: 'information', ipa: '/ˌɪnfəˈmeɪʃn/' },
      { before: 'ques', under: 'ti', after: 'on', word: 'question', ipa: '/ˈkwestʃən/' },
      { before: 'destina', under: 'ti', after: 'on', word: 'destination', ipa: '/ˌdestɪˈneɪʃn/' },
    ],
    correctIndex: 2,
    explainVi: 'C "question" sau "s" đọc /tʃ/; A, B, D đọc /ʃ/.',
  },
  {
    id: 10,
    options: [
      { before: '', under: 'ch', after: 'eck', word: 'check', ipa: '/tʃek/' },
      { before: '', under: 'ch', after: 'urch', word: 'church', ipa: '/tʃɜːtʃ/' },
      { before: '', under: 'ch', after: 'ef', word: 'chef', ipa: '/ʃef/' },
      { before: '', under: 'Ch', after: 'ina', word: 'China', ipa: '/ˈtʃaɪnə/' },
    ],
    correctIndex: 2,
    explainVi: 'C "chef" (gốc Pháp) đọc /ʃ/; A, B, D đọc /tʃ/.',
  },
];

export const U6_TEST_P2_MCQ: U6McqItem[] = [
  { id: 1, question: "You shouldn't _______ things on the first day of Tet.", options: ['make', 'hang', 'break', 'cook'], correctIndex: 2, explainVi: 'Theo phong tục Tết, không nên làm vỡ đồ (break things) vào ngày mùng 1.' },
  { id: 2, question: 'I always _______ my grandparents a long life and good health.', options: ['celebrate', 'wish', 'make', 'bring'], correctIndex: 1, explainVi: 'Cấu trúc "wish + someone + sth": chúc ai đó điều gì → wish.' },
  { id: 3, question: 'Tet is coming. We _______ clean and decorate our house.', options: ['should', "shouldn't", "mustn't", 'are'], correctIndex: 0, explainVi: 'Lời khuyên việc nên làm trước Tết → should.' },
  { id: 4, question: 'Tet is the _______ time of the year.', options: ['busy', 'busier', 'busiest', 'most busy'], correctIndex: 2, explainVi: 'So sánh nhất với "the" + tính từ đuôi -y (busy → busiest).' },
  { id: 5, question: 'Tet is the biggest and most important _______ in Viet Nam.', options: ['festival', 'decoration', 'occasion', 'tradition'], correctIndex: 0, explainVi: 'Lễ hội lớn và quan trọng nhất → festival.' },
  { id: 6, question: 'Vietnamese people usually return to their families _______ Tet.', options: ['in', 'on', 'for', 'during'], correctIndex: 3, explainVi: 'Trong dịp Tết → during Tet.' },
  { id: 7, question: 'When the clock strikes midnight, colourful fireworks light _______ the sky.', options: ['in', 'up', 'on', 'over'], correctIndex: 1, explainVi: 'Cụm động từ "light up" = thắp sáng bầu trời.' },
  { id: 8, question: 'You _______ drink beer or wine while you are driving.', options: ["shouldn't", 'should', 'can', 'much'], correctIndex: 0, explainVi: 'Không nên uống rượu bia khi lái xe → shouldn\'t.' },
  { id: 9, question: 'I am tired. I should _______ some orange juice.', options: ['drinking', 'are drinking', 'drink', 'to drink'], correctIndex: 2, explainVi: 'Sau "should" dùng động từ nguyên thể → drink.' },
  { id: 10, question: 'You should _______ some flowers in front of your house.', options: ['cut', 'grow', 'destroy', 'keep off'], correctIndex: 1, explainVi: 'Trồng hoa trước nhà → grow some flowers.' },
  { id: 11, question: "She doesn't do _______ exercises. She is very lazy.", options: ['some', 'any', 'many', 'a few'], correctIndex: 1, explainVi: 'Câu phủ định (doesn\'t do) → any.' },
  { id: 12, question: 'It is raining. You _______ stay at home.', options: ["can't", 'should', "mustn't", 'do'], correctIndex: 1, explainVi: 'Trời đang mưa nên bạn nên ở nhà → should.' },
  { id: 13, question: 'How _______ students are there in your school?', options: ['many', 'much', 'high', 'tall'], correctIndex: 0, explainVi: '"students" đếm được số nhiều → How many.' },
  { id: 14, question: 'We should help our mothers _______ the table after the meal.', options: ['make', 'to make', 'clean', 'to cleaning'], correctIndex: 2, explainVi: 'Lau dọn bàn ăn sau bữa ăn → clean the table.' },
  { id: 15, question: 'I will _______ my lucky money in my piggy bank.', options: ['keep', 'spend', 'borrow', 'give'], correctIndex: 0, explainVi: 'Bỏ/giữ tiền lì xì vào ống heo tiết kiệm → keep.' },
  { id: 16, question: 'At Tet, many people present rice to wish _______ enough food throughout the year.', options: ['in', 'at', 'for', 'with'], correctIndex: 2, explainVi: 'Cụm động từ "wish for sth" = cầu mong điều gì.' },
  { id: 17, question: "We shouldn't play _______ music after midnight.", options: ['careful', 'right', 'loud', 'easy'], correctIndex: 2, explainVi: 'Không nên mở nhạc ồn ào sau nửa đêm → loud music.' },
  { id: 18, question: "Some Vietnamese people don't eat shrimps _______ New Year's Day.", options: ['in', 'on', 'at', 'during'], correctIndex: 1, explainVi: 'Trước cụm có "Day" (New Year\'s Day) dùng giới từ "on".' },
  { id: 19, question: 'People in many countries in the world often wear their _______ clothes on New Year\'s Day.', options: ['tradition', 'traditional', 'ordinary', 'summer'], correctIndex: 1, explainVi: 'Trước danh từ "clothes" cần tính từ: traditional clothes (trang phục truyền thống).' },
  { id: 20, question: 'Children should help their parents _______ their house _______ flowers and pictures.', options: ['repaint - with', 'make - more beautiful', 'decorate - in', 'decorate - with'], correctIndex: 3, explainVi: 'Cấu trúc "decorate + sth + with + sth": trang trí cái gì bằng cái gì.' },
];

export interface U6VerbItem {
  id: number;
  parts: string[];
  prompts: string[];
  answers: string[][];
  displayAnswers: string[];
  explainVi: string;
}

export const U6_TEST_P3_VERBS: U6VerbItem[] = [
  { id: 1, parts: ['Look! Mr. Quang ', ' his house to welcome Tet.'], prompts: ['repaint'], answers: [['is repainting']], displayAnswers: ['is repainting'], explainVi: 'Có dấu hiệu "Look!" → Hiện tại tiếp diễn: is repainting.' },
  { id: 2, parts: ["You shouldn't ", ' white clothes on the first day of Tet.'], prompts: ['wear'], answers: [['wear']], displayAnswers: ['wear'], explainVi: 'Sau "shouldn\'t" dùng động từ nguyên thể → wear.' },
  { id: 3, parts: ['Vietnamese people ', ' the Lunar New Year every year.'], prompts: ['celebrate'], answers: [['celebrate']], displayAnswers: ['celebrate'], explainVi: 'Có "every year", chủ ngữ số nhiều "Vietnamese people" → celebrate.' },
  { id: 4, parts: ['Tet ', ' in late January or early February.'], prompts: ['occur'], answers: [['occurs']], displayAnswers: ['occurs'], explainVi: 'Sự thật lặp lại hàng năm, chủ ngữ số ít "Tet" → occurs.' },
  { id: 5, parts: ['Phong loves ', ' traditional food during Tet.'], prompts: ['eat'], answers: [['eating', 'to eat']], displayAnswers: ['eating'], explainVi: 'Sau "love" dùng V-ing (eating) hoặc to V.' },
  {
    id: 6,
    parts: ['A: ', ' to the gym every day?  —  B: No, I ', ' every day. I ', ' three times a week.'],
    prompts: ['you / go', 'not go', 'go'],
    answers: [['do you go'], ["don't go", 'do not go'], ['go']],
    displayAnswers: ['Do you go', "don't go", 'go'],
    explainVi: 'Thói quen "every day / three times a week" → Hiện tại đơn: Do you go / don\'t go / go.',
  },
  {
    id: 7,
    parts: ['A: ', ' at your school?  —  B: No, he ', ' there. He ', ' at a private school.'],
    prompts: ['Sam / study', 'not study', 'study'],
    answers: [['does sam study'], ["doesn't study", 'does not study'], ['studies']],
    displayAnswers: ['Does Sam study', "doesn't study", 'studies'],
    explainVi: 'Chủ ngữ số ít "Sam / he" → Does Sam study / doesn\'t study / studies.',
  },
  { id: 8, parts: ['Simon ', ' going to work on Saturday morning.'], prompts: ['not like'], answers: [["doesn't like", 'does not like']], displayAnswers: ["doesn't like"], explainVi: 'Chủ ngữ số ít "Simon" phủ định Hiện tại đơn → doesn\'t like.' },
  { id: 9, parts: ['The children ', ' in the backyard at school now.'], prompts: ['play'], answers: [['are playing']], displayAnswers: ['are playing'], explainVi: 'Có "now", chủ ngữ số nhiều "The children" → are playing.' },
  {
    id: 10,
    parts: ['My friend ', ' cartoons at present. He ', ' soccer.'],
    prompts: ['not watch', 'play'],
    answers: [["isn't watching", 'is not watching'], ['is playing']],
    displayAnswers: ["isn't watching", 'is playing'],
    explainVi: 'Có "at present" (hiện tại) → Hiện tại tiếp diễn: isn\'t watching / is playing.',
  },
];

export const U6_TEST_P4_MISTAKES: U6MistakeItem[] = [
  { id: 1, sentence: 'How do Aunt go to work?', wrongWord: 'do', correctWord: 'does', acceptedCorrections: ['does'], fixedSentence: 'How does Aunt go to work?', explainVi: '"Aunt" là ngôi thứ 3 số ít → trợ động từ "does".' },
  { id: 2, sentence: 'My best friend lives in the USA now.', wrongWord: 'lives', correctWord: 'is living', acceptedCorrections: ['is living'], fixedSentence: 'My best friend is living in the USA now.', explainVi: 'Có "now" diễn tả trạng thái hiện tại → is living.' },
  { id: 3, sentence: 'Holidays in Japan are wonderful. We has a lot of fun.', wrongWord: 'has', correctWord: 'have', acceptedCorrections: ['have'], fixedSentence: 'Holidays in Japan are wonderful. We have a lot of fun.', explainVi: 'Chủ ngữ "We" đi với "have", không dùng "has".' },
  { id: 4, sentence: 'Children should fight each other at Tet.', wrongWord: 'should', correctWord: "shouldn't", acceptedCorrections: ["shouldn't", 'should not'], fixedSentence: "Children shouldn't fight each other at Tet.", explainVi: 'Trẻ em KHÔNG NÊN đánh nhau ngày Tết → shouldn\'t.' },
  { id: 5, sentence: 'People have a lot of firework at Tet.', wrongWord: 'firework', correctWord: 'fireworks', acceptedCorrections: ['fireworks'], fixedSentence: 'People have a lot of fireworks at Tet.', explainVi: 'Sau "a lot of", "firework" đếm được phải ở số nhiều → fireworks.' },
  { id: 6, sentence: 'My mother usually cooks lots of traditional foods.', wrongWord: 'foods', correctWord: 'food', acceptedCorrections: ['food'], fixedSentence: 'My mother usually cooks lots of traditional food.', explainVi: '"food" (thức ăn nói chung) là danh từ không đếm được → bỏ -s thành food.' },
  { id: 7, sentence: "Children shouldn't listen to their parents.", wrongWord: "shouldn't", correctWord: 'should', acceptedCorrections: ['should'], fixedSentence: 'Children should listen to their parents.', explainVi: 'Về nghĩa: Trẻ em NÊN nghe lời bố mẹ → should.' },
  { id: 8, sentence: "There is no firework displays on New Year's Eve.", wrongWord: 'is', correctWord: 'are', acceptedCorrections: ['are'], fixedSentence: "There are no firework displays on New Year's Eve.", explainVi: 'Danh từ "firework displays" là số nhiều → dùng "There are".' },
  { id: 9, sentence: 'Henry has to wakes up early for school.', wrongWord: 'wakes up', correctWord: 'wake up', acceptedCorrections: ['wake up', 'wake'], fixedSentence: 'Henry has to wake up early for school.', explainVi: 'Sau "has to" động từ phải ở nguyên thể → wake up.' },
  { id: 10, sentence: 'I have a great time in Hoi An at present.', wrongWord: 'have', correctWord: 'am having', acceptedCorrections: ['am having'], fixedSentence: 'I am having a great time in Hoi An at present.', explainVi: 'Có "at present" (đang có khoảng thời gian tuyệt vời) → am having.' },
];

export const U6_TEST_P5_WORDFORM: {
  id: number;
  before: string;
  after: string;
  root: string;
  answer: string;
  explainVi: string;
}[] = [
  { id: 1, before: "Tet is coming. It's our New Year", after: '.', root: 'celebrate', answer: 'celebration', explainVi: 'Sau "our New Year" cần danh từ: celebration (lễ kỷ niệm).' },
  { id: 2, before: 'Easter is one of the best times for a family', after: '.', root: 'gather', answer: 'gathering', explainVi: 'Cụm danh từ cố định: family gathering (sự sum họp gia đình).' },
  { id: 3, before: 'They wish each other good', after: 'for the New Year.', root: 'lucky', answer: 'luck', explainVi: 'Sau tính từ "good" cần danh từ: good luck (sự may mắn).' },
  { id: 4, before: 'You should keep', after: 'by eating well and exercising regularly.', root: 'health', answer: 'healthy', explainVi: 'Cấu trúc "keep + adj": giữ khỏe mạnh → keep healthy.' },
  { id: 5, before: 'Shrimps move backwards and you will not', after: 'in the New Year.', root: 'success', answer: 'succeed', explainVi: 'Sau "will not" cần động từ nguyên thể: succeed (thành công).' },
  { id: 6, before: 'I will help my father with the house', after: '.', root: 'decorate', answer: 'decoration', explainVi: 'Sau "the house" cần danh từ: house decoration (việc trang trí nhà).' },
  { id: 7, before: 'Everybody around is cheering and singing', after: '.', root: 'happy', answer: 'happily', explainVi: 'Bổ nghĩa cho động từ "cheering and singing" cần trạng từ: happily.' },
  { id: 8, before: 'Chung cake is made of', after: 'rice, pork and green beans.', root: 'stick', answer: 'sticky', explainVi: 'Gạo nếp = sticky rice (tính từ bổ nghĩa cho rice).' },
];

export const U6_TEST_P6_SHOULD: U6AdviceWriteItem[] = [
  { id: 1, situation: "It's past the children's bedtime.", cue: 'they / be / in bed', answers: ['they should be in bed.'], displayAnswer: 'They should be in bed.', explainVi: 'Đã quá giờ đi ngủ của bọn trẻ → They should be in bed.' },
  { id: 2, situation: "Can't they see the 'No Smoking' sign?", cue: 'they / smoke / in here', answers: ["they shouldn't smoke in here.", 'they should not smoke in here.'], displayAnswer: "They shouldn't smoke in here.", explainVi: 'Biển cấm hút thuốc → They shouldn\'t smoke in here.' },
  { id: 3, situation: 'These windows are so dirty.', cue: 'you / clean them / more often', answers: ['you should clean them more often.'], displayAnswer: 'You should clean them more often.', explainVi: 'Cửa sổ rất bẩn → You should clean them more often.' },
  { id: 4, situation: 'We are in the library.', cue: 'we / talk / too loudly', answers: ["we shouldn't talk too loudly.", 'we should not talk too loudly.'], displayAnswer: "We shouldn't talk too loudly.", explainVi: 'Trong thư viện cần yên tĩnh → We shouldn\'t talk too loudly.' },
  { id: 5, situation: 'You are overweight.', cue: 'you / eat / too much', answers: ["you shouldn't eat too much.", 'you should not eat too much.'], displayAnswer: "You shouldn't eat too much.", explainVi: 'Thừa cân thì không nên ăn quá nhiều → You shouldn\'t eat too much.' },
  { id: 6, situation: "I think it's going to rain.", cue: 'we / take / our umbrellas', answers: ['we should take our umbrellas.'], displayAnswer: 'We should take our umbrellas.', explainVi: 'Sắp mưa → We should take our umbrellas.' },
  { id: 7, situation: 'Suzy has to wake up early for school.', cue: 'she / go to sleep / so late', answers: ["she shouldn't go to sleep so late.", "she shouldn't go to bed so late.", 'she should not go to sleep so late.'], displayAnswer: "She shouldn't go to sleep so late.", explainVi: 'Phải dậy sớm đi học → She shouldn\'t go to sleep so late.' },
  { id: 8, situation: 'You are always late for school.', cue: 'you / be / punctual', answers: ['you should be punctual.'], displayAnswer: 'You should be punctual.', explainVi: 'Luôn đi học muộn → You should be punctual (đúng giờ).' },
];

export const U6_TEST_P7_PASSAGE =
  "Vietnamese people have a lot of traditions at Tet. They believe that the first-footer of a family determines their luck for the next year. Usually, people will invite a good-tempered, moral and successful person to visit their houses. During Tet, people visit relatives and friends to exchange best wishes. Children will dress in new clothes. They will receive lucky money for good blessings. Family gathering is really important because it's time family members get together after a long year. At Tet, every house is usually decorated with flowers and coloured lights.";

export const U6_TEST_P7_MCQ: U6McqItem[] = [
  { id: 1, question: 'Who determines fortune for a new year?', options: ['a tradition', 'a first-footer', 'a morality', 'a success'], correctIndex: 1, explainVi: 'Câu 2: "the first-footer of a family determines their luck for the next year."' },
  { id: 2, question: 'What is the personality of a first-footer?', options: ['good-tempered', 'moral', 'successful', 'all are correct'], correctIndex: 3, explainVi: 'Câu 3 liệt kê cả 3 phẩm chất: good-tempered, moral and successful → D.' },
  { id: 3, question: 'Will children wear new clothes?', options: ["No, they won't.", 'Yes, he is.', 'Yes, they will.', "No, he isn't."], correctIndex: 2, explainVi: '"Children will dress in new clothes." → Yes, they will.' },
  { id: 4, question: 'Why is family gathering important?', options: ["Because it's long.", 'Because people can get together.', 'Because family members can celebrate birthday.', 'Because a long year is important.'], correctIndex: 1, explainVi: '"because it\'s time family members get together after a long year."' },
  { id: 5, question: 'What is used to decorate a house?', options: ['bamboo', 'furniture', 'flowers', 'food'], correctIndex: 2, explainVi: 'Câu cuối: "every house is usually decorated with flowers and coloured lights."' },
];

export const U6_TEST_P8_BOX = [
  'wishes',
  'prepared',
  'brightly',
  'holiday',
  'crowded',
  'visitor',
  'love',
  'comfortably',
  'fairs',
  'beautify',
  'enjoy',
  'lucky',
];

export const U6_TEST_P8_SEGMENTS = [
  'In Viet Nam, Tet is a national and family ',
  '. It is an occasion for every Vietnamese to ',
  ' a good time while thinking about the last year and the next year. At Tet, spring ',
  ' are organized; streets and public buildings are ',
  ' decorated and almost all shops are ',
  ' with people shopping for Tet. At home, everything is tidied; special food is ',
  '; offerings of good foods, fresh water and flowers are made on the family altar with burning joss-sticks scenting the air. First-footing is made when the first ',
  ' comes and children are to be given ',
  ' money wrapped in a red envelope. Tet is also the time for peace and ',
  '. During Tet, children often behave well. Friends, relatives and neighbours give each other their best ',
  ' for the new year.',
];

export const U6_TEST_P8_ANSWERS: { id: number; answer: string; explainVi: string }[] = [
  { id: 1, answer: 'holiday', explainVi: 'Ngày lễ quốc gia và gia đình → national and family holiday.' },
  { id: 2, answer: 'enjoy', explainVi: 'Tận hưởng khoảng thời gian vui vẻ → to enjoy a good time.' },
  { id: 3, answer: 'fairs', explainVi: 'Hội chợ xuân được tổ chức → spring fairs are organized.' },
  { id: 4, answer: 'brightly', explainVi: 'Trạng từ bổ nghĩa cho "decorated": brightly decorated (trang trí rực rỡ).' },
  { id: 5, answer: 'crowded', explainVi: 'Cụm "be crowded with" = đông đúc người mua sắm.' },
  { id: 6, answer: 'prepared', explainVi: 'Bị động: special food is prepared (món ăn đặc biệt được chuẩn bị).' },
  { id: 7, answer: 'visitor', explainVi: 'Người khách đầu tiên đến xông đất → the first visitor.' },
  { id: 8, answer: 'lucky', explainVi: 'Tiền lì xì → lucky money.' },
  { id: 9, answer: 'love', explainVi: 'Thời gian cho hòa bình và tình yêu thương → peace and love.' },
  { id: 10, answer: 'wishes', explainVi: 'Trao nhau những lời chúc tốt đẹp nhất → their best wishes.' },
];

export interface U6QuestionMakeItem {
  id: number;
  before: string;
  underlined: string;
  after: string;
  answers: string[];
  displayAnswer: string;
  explainVi: string;
}

export const U6_TEST_P9_QUESTIONS: U6QuestionMakeItem[] = [
  { id: 1, before: 'Peter goes to the library ', underlined: 'twice a week', after: '.', answers: ['how often does peter go to the library?'], displayAnswer: 'How often does Peter go to the library?', explainVi: 'Hỏi tần suất (twice a week) → How often + does + S + V?' },
  { id: 2, before: 'Peter and Mike are ', underlined: 'playing football', after: '.', answers: ['what are peter and mike doing?'], displayAnswer: 'What are Peter and Mike doing?', explainVi: 'Hỏi hành động đang diễn ra → What are Peter and Mike doing?' },
  { id: 3, before: 'My family usually ', underlined: 'watches TV', after: ' in the evening.', answers: ['what does your family usually do in the evening?'], displayAnswer: 'What does your family usually do in the evening?', explainVi: 'Hỏi hoạt động thường ngày (đổi my → your) → What does your family usually do...?' },
  { id: 4, before: 'They do not have a TV ', underlined: 'because it was too expensive', after: '.', answers: ["why don't they have a tv?", 'why do they not have a tv?'], displayAnswer: "Why don't they have a TV?", explainVi: 'Hỏi lý do (because...) → Why don\'t they have a TV?' },
  { id: 5, before: 'They are planting some roses ', underlined: 'in the garden', after: '.', answers: ['where are they planting some roses?'], displayAnswer: 'Where are they planting some roses?', explainVi: 'Hỏi địa điểm (in the garden) → Where are they planting some roses?' },
  { id: 6, before: 'John writes a poem about ', underlined: 'his grandparents', after: '.', answers: ['who does john write a poem about?'], displayAnswer: 'Who does John write a poem about?', explainVi: 'Hỏi về người (his grandparents) → Who does John write a poem about?' },
  { id: 7, before: 'My family usually goes to ', underlined: 'pagodas', after: ' on the first day of Tet.', answers: ['where does your family usually go on the first day of tet?', 'where does your family usually go to on the first day of tet?'], displayAnswer: 'Where does your family usually go on the first day of Tet?', explainVi: 'Hỏi nơi chốn (pagodas) → Where does your family usually go...?' },
  { id: 8, before: 'Tet lasts ', underlined: 'ten days', after: '.', answers: ['how long does tet last?'], displayAnswer: 'How long does Tet last?', explainVi: 'Hỏi khoảng thời gian kéo dài (ten days) → How long does Tet last?' },
  { id: 9, before: 'They go home ', underlined: 'every New Year', after: '.', answers: ['how often do they go home?', 'when do they go home?'], displayAnswer: 'How often do they go home?', explainVi: 'Hỏi tần suất/thời điểm lặp lại (every New Year) → How often do they go home?' },
  { id: 10, before: 'My mother buys ', underlined: 'three', after: ' apricot blossoms for Tet.', answers: ['how many apricot blossoms does your mother buy for tet?'], displayAnswer: 'How many apricot blossoms does your mother buy for Tet?', explainVi: 'Hỏi số lượng danh từ đếm được → How many apricot blossoms does your mother buy...?' },
];

export const U6_TEST_P10_REWRITE: {
  id: number;
  original: string;
  starter: string;
  answers: string[];
  displayAnswer: string;
  explainVi: string;
}[] = [
  { id: 1, original: 'Parking in this street is prohibited.', starter: 'You', answers: ["you mustn't park in this street.", 'you must not park in this street.'], displayAnswer: "You mustn't park in this street.", explainVi: '"is prohibited" (bị nghiêm cấm) → dùng mustn\'t.' },
  { id: 2, original: "It's not a good idea to swim immediately after a meal.", starter: 'You', answers: ["you shouldn't swim immediately after a meal.", 'you should not swim immediately after a meal.'], displayAnswer: "You shouldn't swim immediately after a meal.", explainVi: '"not a good idea" (lời khuyên không nên) → dùng shouldn\'t.' },
  { id: 3, original: "It's really important to take this medicine three times a day.", starter: 'You', answers: ['you must take this medicine three times a day.'], displayAnswer: 'You must take this medicine three times a day.', explainVi: '"really important" (rất quan trọng/bắt buộc) → dùng must.' },
  { id: 4, original: "It's a good idea to listen to the weather forecast before going camping.", starter: 'You', answers: ['you should listen to the weather forecast before going camping.'], displayAnswer: 'You should listen to the weather forecast before going camping.', explainVi: '"a good idea" (lời khuyên hay) → dùng should.' },
  { id: 5, original: "It's good for you to take exercise every day.", starter: 'You', answers: ['you should take exercise every day.'], displayAnswer: 'You should take exercise every day.', explainVi: '"good for you" (tốt cho bạn) → lời khuyên dùng should.' },
  { id: 6, original: "It's very important not to drink the water there. It will make you ill.", starter: 'You', answers: ["you mustn't drink the water there. it will make you ill.", "you mustn't drink the water there."], displayAnswer: "You mustn't drink the water there. It will make you ill.", explainVi: '"very important not to" (tuyệt đối không được) → dùng mustn\'t.' },
  { id: 7, original: "It's not good to eat lots of sweets.", starter: 'You', answers: ["you shouldn't eat lots of sweets.", 'you should not eat lots of sweets.'], displayAnswer: "You shouldn't eat lots of sweets.", explainVi: '"not good to" (không tốt) → lời khuyên dùng shouldn\'t.' },
  { id: 8, original: "It's against the rules to use your mobile phone in class.", starter: 'You', answers: ["you mustn't use your mobile phone in class.", 'you must not use your mobile phone in class.'], displayAnswer: "You mustn't use your mobile phone in class.", explainVi: '"against the rules" (trái nội quy) → cấm đoán dùng mustn\'t.' },
];
