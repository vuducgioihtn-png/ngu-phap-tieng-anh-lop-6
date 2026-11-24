/**
 * Dữ liệu chi tiết SGK Bài tập Tiếng Anh 6 Global Success
 * Unit 5: Natural Wonders of Viet Nam (Trang 107 – 128)
 * Bao gồm: Ngữ pháp (Tr.107–109), Phát âm /t/ & /d/ (Tr.110–111),
 * Bài tập I–IV (Tr.112–121) và trọn bộ TEST FOR UNIT 5 Phần I–X (Tr.122–128).
 */

export type U5NatureSvgKey =
  | 'desert'
  | 'waterfall'
  | 'island'
  | 'mountain'
  | 'valley'
  | 'beach'
  | 'river'
  | 'lake'
  | 'forest';

// ============================================================
// LÝ THUYẾT NGỮ PHÁP & PHÁT ÂM (TRANG 107 – 111)
// ============================================================

export interface U5UncountableGroup {
  id: string;
  titleVi: string;
  subtitleVi: string;
  words: { en: string; vi: string; ipa: string }[];
  tipVi: string;
}

export const U5_UNCOUNTABLE_GROUPS: U5UncountableGroup[] = [
  {
    id: 'food',
    titleVi: '1. Đồ ăn & Thức uống',
    subtitleVi: 'Chất lỏng, hạt nhỏ, thực phẩm không tách rời từng chiếc',
    words: [
      { en: 'food', vi: 'đồ ăn', ipa: '/fuːd/' },
      { en: 'meat', vi: 'thịt', ipa: '/miːt/' },
      { en: 'water', vi: 'nước', ipa: '/ˈwɔːtə(r)/' },
      { en: 'rice', vi: 'cơm / gạo', ipa: '/raɪs/' },
      { en: 'sugar', vi: 'đường', ipa: '/ˈʃʊɡə(r)/' },
      { en: 'cheese', vi: 'phô mai', ipa: '/tʃiːz/' },
    ],
    tipVi: 'Không nói "one rice, two cheese, three tea" ❌ → Dùng đơn vị đo: a kilo of rice, a cup of tea ✅',
  },
  {
    id: 'abstract',
    titleVi: '2. Khái niệm trừu tượng',
    subtitleVi: 'Cảm xúc, kiến thức, điều không thể sờ nắm hay đếm 1, 2, 3',
    words: [
      { en: 'help', vi: 'sự giúp đỡ', ipa: '/help/' },
      { en: 'fun', vi: 'niềm vui', ipa: '/fʌn/' },
      { en: 'information', vi: 'thông tin', ipa: '/ˌɪnfəˈmeɪʃn/' },
      { en: 'knowledge', vi: 'kiến thức', ipa: '/ˈnɒlɪdʒ/' },
      { en: 'patience', vi: 'sự kiên nhẫn', ipa: '/ˈpeɪʃns/' },
    ],
    tipVi: 'Luôn chia động từ số ít: "Some information is useful." (Không thêm -s vào informations ❌).',
  },
  {
    id: 'subjects',
    titleVi: '3. Lĩnh vực & Môn học',
    subtitleVi: 'Tên môn học, ngành học dù có chữ -s vẫn là danh từ không đếm được',
    words: [
      { en: 'Mathematics', vi: 'Toán học', ipa: '/ˌmæθəˈmætɪks/' },
      { en: 'Ethics', vi: 'Đạo đức học', ipa: '/ˈeθɪks/' },
      { en: 'Music', vi: 'Âm nhạc', ipa: '/ˈmjuːzɪk/' },
      { en: 'History', vi: 'Lịch sử', ipa: '/ˈhɪstri/' },
      { en: 'Grammar', vi: 'Ngữ pháp', ipa: '/ˈɡræmə(r)/' },
    ],
    tipVi: 'Chú ý: "Mathematics / Maths" kết thúc bằng -s nhưng vẫn chia động từ số ít: Maths is fun!',
  },
  {
    id: 'nature',
    titleVi: '4. Hiện tượng tự nhiên',
    subtitleVi: 'Thời tiết, ánh sáng, nhiệt độ trong tự nhiên',
    words: [
      { en: 'thunder', vi: 'sấm sét', ipa: '/ˈθʌndə(r)/' },
      { en: 'snow', vi: 'tuyết', ipa: '/snəʊ/' },
      { en: 'heat', vi: 'sức nóng', ipa: '/hiːt/' },
      { en: 'wind', vi: 'gió', ipa: '/wɪnd/' },
      { en: 'light', vi: 'ánh sáng', ipa: '/laɪt/' },
    ],
    tipVi: 'Dùng "some / much / a little" trước các từ này: "There is a lot of snow in winter."',
  },
  {
    id: 'activities',
    titleVi: '5. Hoạt động (V-ing làm danh từ)',
    subtitleVi: 'Tên các hoạt động chung chung kết thúc bằng -ing',
    words: [
      { en: 'swimming', vi: 'bơi lội', ipa: '/ˈswɪmɪŋ/' },
      { en: 'walking', vi: 'đi bộ', ipa: '/ˈwɔːkɪŋ/' },
      { en: 'reading', vi: 'đọc sách', ipa: '/ˈriːdɪŋ/' },
      { en: 'cooking', vi: 'nấu ăn', ipa: '/ˈkʊkɪŋ/' },
      { en: 'sleeping', vi: 'ngủ', ipa: '/ˈsliːpɪŋ/' },
    ],
    tipVi: 'Hoạt động không dùng a/an: "Swimming is good for your health." ✅',
  },
];

export interface U5MustUsage {
  id: string;
  badge: string;
  polarity: 'must' | 'mustnt';
  titleVi: string;
  formula: string;
  descVi: string;
  examples: { en: string; vi: string }[];
}

export const U5_MUST_USAGES: U5MustUsage[] = [
  {
    id: 'obligation',
    badge: 'Cách dùng 1',
    polarity: 'must',
    titleVi: 'Sự bắt buộc, nội quy hoặc trách nhiệm',
    formula: 'S + must + V (nguyên thể)',
    descVi: 'Diễn tả việc buộc phải làm theo quy định, luật lệ hoặc trách nhiệm cá nhân.',
    examples: [
      { en: 'We must always obey the traffic rules.', vi: 'Chúng ta phải luôn tuân thủ luật giao thông.' },
      { en: 'I must get up early to go to school every morning.', vi: 'Mình phải dậy sớm đi học mỗi sáng.' },
      { en: 'You must sweep the room.', vi: 'Con phải quét phòng.' },
    ],
  },
  {
    id: 'advice',
    badge: 'Cách dùng 2',
    polarity: 'must',
    titleVi: 'Lời khuyên hoặc đề nghị nhấn mạnh',
    formula: 'You + must + V (nguyên thể)',
    descVi: 'Khuyên nhủ, nhắc nhở mạnh mẽ ai đó nên làm việc quan trọng vì sự an toàn hoặc lợi ích.',
    examples: [
      { en: 'You must drive more slowly.', vi: 'Bạn phải lái xe chậm hơn đấy.' },
      { en: 'You must keep it a secret.', vi: 'Bạn nhất định phải giữ bí mật chuyện này.' },
    ],
  },
  {
    id: 'deduction',
    badge: 'Cách dùng 3',
    polarity: 'must',
    titleVi: 'Suy luận hợp lý (chắc hẳn là...)',
    formula: 'S + must + be + tính từ / danh từ',
    descVi: 'Đưa ra kết luận có căn cứ rõ ràng từ tình huống thực tế.',
    examples: [
      { en: 'You must be hungry after school.', vi: 'Sau giờ học chắc hẳn bạn đang đói rồi.' },
      { en: 'She has been travelling all day. She must be tired.', vi: 'Cô ấy đã đi suốt cả ngày. Chắc hẳn cô ấy mệt lắm.' },
    ],
  },
  {
    id: 'prohibition',
    badge: 'Cấm đoán',
    polarity: 'mustnt',
    titleVi: 'MUSTN’T — Nghiêm cấm, không được phép làm',
    formula: "S + mustn't (must not) + V (nguyên thể)",
    descVi: 'Cảnh báo hoặc cấm tuyệt đối làm một hành động (KHÔNG chia -s, -es, -ed hay thêm "to" sau must/mustn\'t).',
    examples: [
      { en: "We mustn't turn right.", vi: 'Chúng ta không được rẽ phải.' },
      { en: "You mustn't come late.", vi: 'Bạn không được đến muộn.' },
      { en: "You mustn't pick flowers in the park.", vi: 'Bạn không được hái hoa trong công viên.' },
    ],
  },
];

export interface U5PronunciationSign {
  sound: '/t/' | '/d/';
  titleVi: string;
  ruleVi: string;
  examples: { word: string; ipa: string; vi: string }[];
}

export const U5_PRONUNCIATION_SIGNS: U5PronunciationSign[] = [
  {
    sound: '/t/',
    titleVi: 'Dấu hiệu 1: Chữ "t" ở đầu từ hoặc âm tiết mang trọng âm',
    ruleVi: 'Đặt đầu lưỡi chạm chân răng cửa hàm trên (ngạc cứng), bật hơi thật mạnh ra lòng bàn tay (khác tiếng Việt không bật hơi).',
    examples: [
      { word: 'table', ipa: '/ˈteɪbl/', vi: 'cái bàn' },
      { word: 'tennis', ipa: '/ˈtenɪs/', vi: 'quần vợt' },
      { word: 'total', ipa: '/ˈtəʊtl/', vi: 'tổng cộng' },
      { word: 'title', ipa: '/ˈtaɪtl/', vi: 'tiêu đề' },
      { word: 'tiger', ipa: '/ˈtaɪɡə(r)/', vi: 'con hổ' },
      { word: 'water', ipa: '/ˈwɔːtə(r)/', vi: 'nước' },
    ],
  },
  {
    sound: '/t/',
    titleVi: 'Dấu hiệu 2: Đuôi "-ed" sau phụ âm vô thanh (/p, k, f, s, ʃ, tʃ, θ/)',
    ruleVi: 'Khi động từ kết thúc bằng phụ âm vô thanh và thêm "-ed", đuôi "-ed" đọc gọn là /t/.',
    examples: [
      { word: 'picked', ipa: '/pɪkt/', vi: 'nhặt / hái' },
      { word: 'washed', ipa: '/wɒʃt/', vi: 'rửa / giặt' },
      { word: 'watched', ipa: '/wɒtʃt/', vi: 'xem' },
      { word: 'raced', ipa: '/reɪst/', vi: 'chạy đua' },
      { word: 'sliced', ipa: '/slaɪst/', vi: 'thái lát' },
    ],
  },
  {
    sound: '/d/',
    titleVi: 'Dấu hiệu nhận biết /d/: Chữ "d" ở đầu, giữa hoặc cuối từ',
    ruleVi: 'Vị trí lưỡi giống hệt /t/ (chạm chân răng trên), nhưng dây thanh quản RUNG rõ ở cổ họng và không bật hơi mạnh.',
    examples: [
      { word: 'dad', ipa: '/dæd/', vi: 'bố' },
      { word: 'driver', ipa: '/ˈdraɪvə(r)/', vi: 'tài xế' },
      { word: 'dramatic', ipa: '/drəˈmætɪk/', vi: 'kịch tính' },
      { word: 'glad', ipa: '/ɡlæd/', vi: 'vui mừng' },
      { word: 'decade', ipa: '/ˈdekeɪd/', vi: 'thập kỷ' },
      { word: 'afraid', ipa: '/əˈfreɪd/', vi: 'sợ hãi' },
      { word: 'inside', ipa: '/ˌɪnˈsaɪd/', vi: 'bên trong' },
    ],
  },
];

// ============================================================
// PHẦN I: PHÁT ÂM (TRANG 112)
// ============================================================

export interface U5PhoneticsToken {
  text: string;
  sound?: 't' | 'd' | 'both';
  highlightNote?: string;
}

export interface U5PhoneticsSentence {
  id: number;
  fullText: string;
  vi: string;
  tokens: U5PhoneticsToken[];
  summaryVi: string;
}

export const U5_EX_I_PRONUNCIATION: U5PhoneticsSentence[] = [
  {
    id: 1,
    fullText: 'Dan and Tina had a date on Tuesday.',
    vi: 'Dan và Tina có một cuộc hẹn vào thứ Ba.',
    tokens: [
      { text: 'Dan', sound: 'd', highlightNote: '/dæn/ — có âm /d/' },
      { text: 'and', sound: 'd', highlightNote: '/ænd/ — kết thúc /d/' },
      { text: 'Tina', sound: 't', highlightNote: '/ˈtiːnə/ — bắt đầu /t/' },
      { text: 'had', sound: 'd', highlightNote: '/hæd/ — kết thúc /d/' },
      { text: 'a' },
      { text: 'date', sound: 'both', highlightNote: '/deɪt/ — mở đầu /d/, kết thúc /t/' },
      { text: 'on' },
      { text: 'Tuesday.', sound: 'both', highlightNote: '/ˈtjuːzdeɪ/ — có cả /t/ và /d/' },
    ],
    summaryVi: 'Âm /d/: Dan, and, had, date, Tuesday · Âm /t/: Tina, date, Tuesday.',
  },
  {
    id: 2,
    fullText: 'Using toothpaste will keep your teeth clean.',
    vi: 'Dùng kem đánh răng sẽ giữ cho răng của bạn sạch sẽ.',
    tokens: [
      { text: 'Using' },
      { text: 'toothpaste', sound: 't', highlightNote: '/ˈtuːθpeɪst/ — có 2 âm /t/' },
      { text: 'will' },
      { text: 'keep' },
      { text: 'your' },
      { text: 'teeth', sound: 't', highlightNote: '/tiːθ/ — bắt đầu /t/ (đuôi th là /θ/)' },
      { text: 'clean.' },
    ],
    summaryVi: 'Âm /t/: toothpaste, teeth. (Không có âm /d/ trong câu này).',
  },
  {
    id: 3,
    fullText: 'The flashlight lit up the room.',
    vi: 'Chiếc đèn pin đã chiếu sáng căn phòng.',
    tokens: [
      { text: 'The' },
      { text: 'flashlight', sound: 't', highlightNote: '/ˈflæʃlaɪt/ — kết thúc /t/' },
      { text: 'lit', sound: 't', highlightNote: '/lɪt/ — kết thúc /t/' },
      { text: 'up' },
      { text: 'the' },
      { text: 'room.' },
    ],
    summaryVi: 'Âm /t/: flashlight, lit. (Lưu ý "The" là /ðə/, không phải /d/).',
  },
  {
    id: 4,
    fullText: 'Tonight our family is going to get Texas toast, tacos, and milkshake.',
    vi: 'Tối nay gia đình chúng tôi sẽ mua bánh mì nướng kiểu Texas, bánh taco và sữa lắc.',
    tokens: [
      { text: 'Tonight', sound: 't', highlightNote: '/təˈnaɪt/ — đầu và cuối đều /t/' },
      { text: 'our' },
      { text: 'family' },
      { text: 'is' },
      { text: 'going' },
      { text: 'to', sound: 't', highlightNote: '/tuː/ — âm /t/' },
      { text: 'get', sound: 't', highlightNote: '/ɡet/ — kết thúc /t/' },
      { text: 'Texas', sound: 't', highlightNote: '/ˈteksəs/ — bắt đầu /t/' },
      { text: 'toast,', sound: 't', highlightNote: '/təʊst/ — đầu và cuối đều /t/' },
      { text: 'tacos,', sound: 't', highlightNote: '/ˈtækəʊz/ — bắt đầu /t/' },
      { text: 'and', sound: 'd', highlightNote: '/ænd/ — kết thúc /d/' },
      { text: 'milkshake.' },
    ],
    summaryVi: 'Âm /t/: Tonight, to, get, Texas, toast, tacos · Âm /d/: and.',
  },
  {
    id: 5,
    fullText: 'He loved to eat pudding and doughnut.',
    vi: 'Cậu ấy thích ăn bánh pudding và bánh rán vòng.',
    tokens: [
      { text: 'He' },
      { text: 'loved', sound: 'd', highlightNote: '/lʌvd/ — đuôi -ed sau /v/ đọc /d/' },
      { text: 'to', sound: 't', highlightNote: '/tuː/ — âm /t/' },
      { text: 'eat', sound: 't', highlightNote: '/iːt/ — kết thúc /t/' },
      { text: 'pudding', sound: 'd', highlightNote: '/ˈpʊdɪŋ/ — có âm /d/' },
      { text: 'and', sound: 'd', highlightNote: '/ænd/ — kết thúc /d/' },
      { text: 'doughnut.', sound: 'both', highlightNote: '/ˈdəʊnʌt/ — đầu /d/, cuối /t/' },
    ],
    summaryVi: 'Âm /d/: loved, pudding, and, doughnut · Âm /t/: to, eat, doughnut.',
  },
];

// ============================================================
// PHẦN II: TỪ VỰNG & NGỮ PHÁP (TRANG 112 – 118)
// ============================================================

export interface U5NaturePicItem {
  id: number;
  svgKey: U5NatureSvgKey;
  hintLetter: string;
  answer: string;
  ipa: string;
  meaningVi: string;
  clueVi: string;
}

export const U5_EX_II1_NATURE_PICS: U5NaturePicItem[] = [
  { id: 1, svgKey: 'desert', hintLetter: 'd', answer: 'desert', ipa: '/ˈdezət/', meaningVi: 'sa mạc', clueVi: 'Đồi cát vàng trải dài dưới nắng nóng' },
  { id: 2, svgKey: 'waterfall', hintLetter: 'w', answer: 'waterfall', ipa: '/ˈwɔːtəfɔːl/', meaningVi: 'thác nước', clueVi: 'Dòng nước đổ trắng xóa từ vách đá cao' },
  { id: 3, svgKey: 'island', hintLetter: 'i', answer: 'island', ipa: '/ˈaɪlənd/', meaningVi: 'hòn đảo', clueVi: 'Mảnh đất có cây dừa nằm giữa biển xanh' },
  { id: 4, svgKey: 'mountain', hintLetter: 'm', answer: 'mountain', ipa: '/ˈmaʊntən/', meaningVi: 'ngọn núi', clueVi: 'Đỉnh núi đá cao vút phủ tuyết trắng' },
  { id: 5, svgKey: 'valley', hintLetter: 'v', answer: 'valley', ipa: '/ˈvæli/', meaningVi: 'thung lũng', clueVi: 'Vùng đất trũng xanh mát nằm giữa hai dãy núi' },
  { id: 6, svgKey: 'beach', hintLetter: 'b', answer: 'beach', ipa: '/biːtʃ/', meaningVi: 'bãi biển', clueVi: 'Bờ cát trải dài bên sóng biển và ô che nắng' },
  { id: 7, svgKey: 'river', hintLetter: 'r', answer: 'river', ipa: '/ˈrɪvə(r)/', meaningVi: 'con sông', clueVi: 'Dòng nước uốn lượn chảy qua cánh đồng xanh' },
  { id: 8, svgKey: 'lake', hintLetter: 'l', answer: '/leɪk/'.includes('l') ? 'lake' : 'lake', ipa: '/leɪk/', meaningVi: 'cái hồ', clueVi: 'Mặt nước yên ả bao quanh bởi núi non và cây cối' },
  { id: 9, svgKey: 'forest', hintLetter: 'f', answer: 'forest', ipa: '/ˈfɒrɪst/', meaningVi: 'khu rừng', clueVi: 'Rất nhiều cây xanh mọc dày đặc nối tiếp nhau' },
];

export interface U5PairChoiceItem {
  id: number;
  before: string;
  choices: [string, string];
  after: string;
  correctIndex: 0 | 1;
  explainVi: string;
}

export const U5_EX_II2_PAIR_CHOICE: U5PairChoiceItem[] = [
  {
    id: 1,
    before: 'They are on a boat to visit some',
    choices: ['islands', 'lake'],
    after: 'in Ha Long Bay.',
    correctIndex: 0,
    explainVi: '"some" đi với danh từ đếm được số nhiều → islands (các hòn đảo ở Vịnh Hạ Long).',
  },
  {
    id: 2,
    before: 'People are fishing along the banks of the',
    choices: ['river', 'desert'],
    after: '.',
    correctIndex: 0,
    explainVi: 'Câu cá dọc hai bên bờ (banks) thì phải là con sông → river.',
  },
  {
    id: 3,
    before: 'They drive along the',
    choices: ['coast', 'forest'],
    after: 'to enjoy the wind from the sea.',
    correctIndex: 0,
    explainVi: 'Tận hưởng gió từ biển (wind from the sea) → lái xe dọc bờ biển (coast).',
  },
  {
    id: 4,
    before: 'There are many plants and animals in this rain',
    choices: ['forest', 'mountain'],
    after: '.',
    correctIndex: 0,
    explainVi: 'Cụm từ "rain forest" (rừng mưa nhiệt đới) là nơi có nhiều động thực vật.',
  },
  {
    id: 5,
    before: 'The',
    choices: ['beach', 'valley'],
    after: 'is very good for swimming and sunbathing.',
    correctIndex: 0,
    explainVi: 'Bơi lội (swimming) và tắm nắng (sunbathing) diễn ra ở bãi biển → beach.',
  },
  {
    id: 6,
    before: 'She is the first Vietnamese woman to climb the',
    choices: ['mountain', 'desert'],
    after: '.',
    correctIndex: 0,
    explainVi: 'Động từ "climb" (leo trèo) đi với ngọn núi → climb the mountain.',
  },
  {
    id: 7,
    before: 'Baikal Lake is the largest natural',
    choices: ['lake', 'river'],
    after: 'in the world.',
    correctIndex: 0,
    explainVi: 'Hồ Baikal là hồ tự nhiên lớn nhất thế giới → natural lake.',
  },
  {
    id: 8,
    before: 'I think Ha Long Bay is the best natural',
    choices: ['wonder', 'forest'],
    after: 'in the world.',
    correctIndex: 0,
    explainVi: 'Vịnh Hạ Long là kỳ quan thiên nhiên → natural wonder.',
  },
];

export const U5_EX_II3_BOX = [
  'plasters',
  'backpack',
  'suncream',
  'sleeping bag',
  'walking boots',
  'bottled water',
  'compass',
  'tent',
  'torch',
  'waterproof coats',
];

export interface U5BlankItem {
  id: number;
  before: string;
  after: string;
  answers: string[];
  displayAnswer: string;
  explainVi: string;
}

export const U5_EX_II3_CAMPING: U5BlankItem[] = [
  {
    id: 1,
    before: 'We need to sleep in our',
    after: "at the campsite because there isn't a hotel.",
    answers: ['tent', 'sleeping bag'],
    displayAnswer: 'tent',
    explainVi: 'Không có khách sạn ở khu cắm trại nên phải ngủ trong lều (tent). (Đáp án SGK đổi vị trí tent/sleeping bag giữa câu 1 và 2 nên chấp nhận cả hai).',
  },
  {
    id: 2,
    before: 'I am sleeping in a',
    after: 'because it is cold outside.',
    answers: ['sleeping bag', 'tent'],
    displayAnswer: 'sleeping bag',
    explainVi: 'Ngoài trời lạnh nên ngủ trong túi ngủ (sleeping bag) để giữ ấm.',
  },
  {
    id: 3,
    before: 'We must bring',
    after: "because we'll be thirsty.",
    answers: ['bottled water'],
    displayAnswer: 'bottled water',
    explainVi: 'Khát nước (thirsty) → mang theo nước đóng chai (bottled water).',
  },
  {
    id: 4,
    before: 'I need a',
    after: 'because I carry a lot of things.',
    answers: ['backpack'],
    displayAnswer: 'backpack',
    explainVi: 'Mang theo nhiều đồ đạc → cần ba lô (backpack).',
  },
  {
    id: 5,
    before: 'Have you got any',
    after: "? I've cut my finger.",
    answers: ['plasters'],
    displayAnswer: 'plasters',
    explainVi: 'Bị đứt tay (cut my finger) → cần băng dán cá nhân (plasters).',
  },
  {
    id: 6,
    before: "Don't shine your",
    after: 'straight into my eyes!',
    answers: ['torch'],
    displayAnswer: 'torch',
    explainVi: 'Chiếu thẳng vào mắt (shine ... into my eyes) → đèn pin (torch).',
  },
  {
    id: 7,
    before: 'You should put',
    after: 'on your skin to protect it from the harmful effects of the sun.',
    answers: ['suncream'],
    displayAnswer: 'suncream',
    explainVi: 'Bôi lên da bảo vệ khỏi ánh nắng mặt trời → kem chống nắng (suncream).',
  },
  {
    id: 8,
    before: 'We are going hiking this weekend, so I need a new pair of',
    after: '.',
    answers: ['walking boots'],
    displayAnswer: 'walking boots',
    explainVi: 'Đi bộ đường dài (hiking) cần một đôi giày leo núi/đi bộ → walking boots.',
  },
  {
    id: 9,
    before: 'A',
    after: 'shows you which direction is north.',
    answers: ['compass'],
    displayAnswer: 'compass',
    explainVi: 'Chỉ phương hướng (hướng Bắc) → la bàn (compass).',
  },
  {
    id: 10,
    before: '',
    after: "will keep you safe and dry, whether you're spending a day out in the rain.",
    answers: ['waterproof coats'],
    displayAnswer: 'Waterproof coats',
    explainVi: 'Giữ khô ráo dưới trời mưa → áo khoác chống thấm nước (Waterproof coats).',
  },
];

export interface U5CountableNounItem {
  id: number;
  word: string;
  vi: string;
  type: 'C' | 'U';
  noteVi: string;
}

export const U5_EX_II4_NOUNS: U5CountableNounItem[] = [
  { id: 1, word: 'bananas', vi: 'những quả chuối', type: 'C', noteVi: 'Đếm được (có dạng số nhiều -s).' },
  { id: 2, word: 'lemonade', vi: 'nước chanh', type: 'U', noteVi: 'Đồ uống dạng lỏng → không đếm được.' },
  { id: 3, word: 'soup', vi: 'súp / canh', type: 'U', noteVi: 'Đồ ăn dạng lỏng → không đếm được.' },
  { id: 4, word: 'coffee', vi: 'cà phê', type: 'U', noteVi: 'Thức uống → không đếm được.' },
  { id: 5, word: 'cheese', vi: 'phô mai', type: 'U', noteVi: 'Thực phẩm khối → không đếm được.' },
  { id: 6, word: 'sandwich', vi: 'bánh mì kẹp', type: 'C', noteVi: 'Đếm được (a sandwich, two sandwiches).' },
  { id: 7, word: 'yoghurt', vi: 'sữa chua', type: 'U', noteVi: 'Thực phẩm dạng sánh → không đếm được.' },
  { id: 8, word: 'meat', vi: 'thịt', type: 'U', noteVi: 'Nhóm đồ ăn chung → không đếm được.' },
  { id: 9, word: 'pasta', vi: 'mì ống Ý', type: 'U', noteVi: 'Nhóm đồ ăn → không đếm được.' },
  { id: 10, word: 'sauce', vi: 'nước sốt', type: 'U', noteVi: 'Chất lỏng/sánh → không đếm được.' },
  { id: 11, word: 'butter', vi: 'bơ', type: 'U', noteVi: 'Thực phẩm khối mềm → không đếm được.' },
  { id: 12, word: 'potatoes', vi: 'những củ khoai tây', type: 'C', noteVi: 'Đếm được (a potato → potatoes).' },
  { id: 13, word: 'children', vi: 'trẻ em', type: 'C', noteVi: 'Số nhiều bất quy tắc của child → đếm được.' },
  { id: 14, word: 'bottles', vi: 'những cái chai', type: 'C', noteVi: 'Đồ vật tách rời (a bottle → bottles) → đếm được.' },
  { id: 15, word: 'water', vi: 'nước', type: 'U', noteVi: 'Chất lỏng → không đếm được.' },
  { id: 16, word: 'cream', vi: 'kem tươi', type: 'U', noteVi: 'Thực phẩm dạng lỏng/sánh → không đếm được.' },
  { id: 17, word: 'boxes', vi: 'những cái hộp', type: 'C', noteVi: 'Đếm được (a box → boxes).' },
  { id: 18, word: 'socks', vi: 'những chiếc tất', type: 'C', noteVi: 'Đếm được (a sock → socks).' },
  { id: 19, word: 'sugar', vi: 'đường', type: 'U', noteVi: 'Hạt nhỏ li ti → không đếm được.' },
  { id: 20, word: 'thunder', vi: 'tiếng sấm', type: 'U', noteVi: 'Hiện tượng tự nhiên → không đếm được.' },
  { id: 21, word: 'blanket', vi: 'cái chăn', type: 'C', noteVi: 'Đếm được (a blanket, two blankets).' },
  { id: 22, word: 'dress', vi: 'chiếc váy', type: 'C', noteVi: 'Đếm được (a dress, two dresses).' },
  { id: 23, word: 'cotton', vi: 'vải bông / sợi bông', type: 'U', noteVi: 'Chất liệu → không đếm được.' },
  { id: 24, word: 'smoke', vi: 'khói', type: 'U', noteVi: 'Chất khí / hiện tượng → không đếm được.' },
  { id: 25, word: 'money', vi: 'tiền bạc', type: 'U', noteVi: 'Lưu ý rất hay bẫy: money KHÔNG đếm được!' },
  { id: 26, word: 'flat', vi: 'căn hộ', type: 'C', noteVi: 'Đếm được (a flat, three flats).' },
  { id: 27, word: 'work', vi: 'công việc (nói chung)', type: 'U', noteVi: 'Khác với "job" (C), "work" là không đếm được (U)!' },
  { id: 28, word: 'baggage', vi: 'hành lý', type: 'U', noteVi: 'Danh từ tập hợp (như luggage) → không đếm được.' },
  { id: 29, word: 'travel', vi: 'việc đi lại / du lịch', type: 'U', noteVi: 'Khái niệm chung → không đếm được (trip mới đếm được).' },
  { id: 30, word: 'job', vi: 'nghề nghiệp / công việc cụ thể', type: 'C', noteVi: 'Đếm được (a good job, two jobs).' },
];

export interface U5MistakeItem {
  id: number;
  sentence: string;
  wrongWord: string;
  correctWord: string;
  acceptedCorrections: string[];
  fixedSentence: string;
  explainVi: string;
}

export const U5_EX_II5_MISTAKES: U5MistakeItem[] = [
  { id: 1, sentence: 'These carrot are sweet.', wrongWord: 'carrot', correctWord: 'carrots', acceptedCorrections: ['carrots', 'these carrots are sweet.'], fixedSentence: 'These carrots are sweet.', explainVi: '"These" và "are" là số nhiều → carrot phải thêm -s thành carrots.' },
  { id: 2, sentence: "I don't like teas at all.", wrongWord: 'teas', correctWord: 'tea', acceptedCorrections: ['tea', "i don't like tea at all."], fixedSentence: "I don't like tea at all.", explainVi: '"tea" (trà) là danh từ không đếm được → không thêm -s.' },
  { id: 3, sentence: "I'd like to cut some pear for this salad.", wrongWord: 'pear', correctWord: 'pears', acceptedCorrections: ['pears', "i'd like to cut some pears for this salad."], fixedSentence: "I'd like to cut some pears for this salad.", explainVi: '"pear" (quả lê) đếm được, sau "some" phải chia số nhiều → pears.' },
  { id: 4, sentence: 'There is much waters in this jar.', wrongWord: 'waters', correctWord: 'water', acceptedCorrections: ['water', 'there is much water in this jar.'], fixedSentence: 'There is much water in this jar.', explainVi: '"water" không đếm được → bỏ -s thành water.' },
  { id: 5, sentence: 'Do you eat meats?', wrongWord: 'meats', correctWord: 'meat', acceptedCorrections: ['meat', 'do you eat meat?'], fixedSentence: 'Do you eat meat?', explainVi: '"meat" (thịt) không đếm được → không thêm -s.' },
  { id: 6, sentence: 'These berry are very sweet.', wrongWord: 'berry', correctWord: 'berries', acceptedCorrections: ['berries', 'these berries are very sweet.'], fixedSentence: 'These berries are very sweet.', explainVi: 'Sau "These", danh từ tận cùng bằng phụ âm + y đổi y → ies: berries.' },
  { id: 7, sentence: 'Cut these cucumber, please.', wrongWord: 'cucumber', correctWord: 'cucumbers', acceptedCorrections: ['cucumbers', 'cut these cucumbers, please.'], fixedSentence: 'Cut these cucumbers, please.', explainVi: 'Sau "these" (những cái này) phải dùng số nhiều → cucumbers.' },
  { id: 8, sentence: 'Where are the onion?', wrongWord: 'onion', correctWord: 'onions', acceptedCorrections: ['onions', 'where are the onions?'], fixedSentence: 'Where are the onions?', explainVi: 'Động từ "are" chia số nhiều → onions.' },
  { id: 9, sentence: 'There are four chair round the table.', wrongWord: 'chair', correctWord: 'chairs', acceptedCorrections: ['chairs', 'there are four chairs round the table.'], fixedSentence: 'There are four chairs round the table.', explainVi: 'Số lượng "four" (4 cái) → danh từ thêm -s thành chairs.' },
  { id: 10, sentence: 'You can take four potato from the basket.', wrongWord: 'potato', correctWord: 'potatoes', acceptedCorrections: ['potatoes', 'you can take four potatoes from the basket.'], fixedSentence: 'You can take four potatoes from the basket.', explainVi: '"potato" tận cùng bằng -o khi sang số nhiều thêm -es → potatoes.' },
];

export const U5_EX_II6_QUANTIFIERS: {
  id: number;
  before: string;
  after: string;
  answer: 'a' | 'an' | 'some' | 'any';
  explainVi: string;
}[] = [
  { id: 1, before: "I'm reading", after: 'interesting book at the moment.', answer: 'an', explainVi: '"interesting" bắt đầu bằng nguyên âm /ɪ/, "book" số ít đếm được → an.' },
  { id: 2, before: 'We want', after: 'cheese for the pasta.', answer: 'some', explainVi: 'Câu khẳng định + danh từ không đếm được "cheese" → some.' },
  { id: 3, before: "There isn't", after: 'meat in the fridge.', answer: 'any', explainVi: 'Câu phủ định (isn\'t) + danh từ không đếm được → any.' },
  { id: 4, before: 'She has', after: 'apple after every lunch.', answer: 'an', explainVi: '"apple" số ít bắt đầu bằng nguyên âm /æ/ → an.' },
  { id: 5, before: 'Have they got', after: 'new car?', answer: 'a', explainVi: '"new car" danh từ số ít bắt đầu bằng phụ âm /n/ → a.' },
  { id: 6, before: 'David has', after: 'books for his favourite subject maths.', answer: 'some', explainVi: 'Câu khẳng định + danh từ số nhiều "books" → some.' },
  { id: 7, before: 'Would you like', after: 'slice of my pizza?', answer: 'a', explainVi: '"a slice of..." (một lát bánh pizza) → a.' },
  { id: 8, before: "Susan wants some milk, but she hasn't got", after: 'money.', answer: 'any', explainVi: 'Câu phủ định (hasn\'t got) + "money" (U) → any.' },
  { id: 9, before: "We haven't got", after: 'homework this weekend.', answer: 'any', explainVi: 'Câu phủ định (haven\'t got) + "homework" (U) → any.' },
  { id: 10, before: 'I need to buy', after: 'furniture for my living room.', answer: 'some', explainVi: 'Câu khẳng định + "furniture" (đồ nội thất — không đếm được) → some.' },
  { id: 11, before: 'Is there', after: 'table in your room?', answer: 'a', explainVi: '"table" danh từ đếm được số ít, bắt đầu bằng phụ âm /t/ → a.' },
  { id: 12, before: 'Can you give me', after: 'hand?', answer: 'a', explainVi: 'Thành ngữ "give someone a hand" = giúp ai đó một tay.' },
];

export interface U5ApplePieChoice {
  id: number;
  choices: [string, string];
  acceptedIndices: number[];
  primaryIndex: 0 | 1;
  explainVi: string;
}

export interface U5ApplePieLine {
  speaker: 'Lucy' | 'Alan' | 'Sue' | 'Andy';
  segments: (string | number)[]; // number = choice id (1..15)
}

export const U5_EX_II7_CHOICES: Record<number, U5ApplePieChoice> = {
  1: { id: 1, choices: ['a', 'an'], acceptedIndices: [1], primaryIndex: 1, explainVi: '"apple pie" bắt đầu bằng nguyên âm /æ/ → an.' },
  2: { id: 2, choices: ['some', 'any'], acceptedIndices: [1], primaryIndex: 1, explainVi: 'Câu hỏi thông thường "Have we got...?" → any.' },
  3: { id: 3, choices: ['some', 'any'], acceptedIndices: [0], primaryIndex: 0, explainVi: 'Câu khẳng định "we have..." → some.' },
  4: { id: 4, choices: ['much', 'many'], acceptedIndices: [1], primaryIndex: 1, explainVi: '"apples" đếm được số nhiều → How many.' },
  5: { id: 5, choices: ['kilo', 'litre'], acceptedIndices: [0], primaryIndex: 0, explainVi: 'Đo khối lượng táo dùng cân (kilo), không dùng lít (litre).' },
  6: { id: 6, choices: ['some', 'any'], acceptedIndices: [0], primaryIndex: 0, explainVi: 'Câu khẳng định "we also need..." → some.' },
  7: { id: 7, choices: ['some', 'any'], acceptedIndices: [0], primaryIndex: 0, explainVi: 'Câu khẳng định "we have..." → some.' },
  8: { id: 8, choices: ['much', 'many'], acceptedIndices: [0], primaryIndex: 0, explainVi: '"flour" (bột mì) không đếm được → How much.' },
  9: { id: 9, choices: ['knives', 'spoons'], acceptedIndices: [1], primaryIndex: 1, explainVi: 'Đong bột mì bằng thìa/muỗng → two spoons of flour.' },
  10: { id: 10, choices: ['tub', 'bag'], acceptedIndices: [0, 1], primaryIndex: 0, explainVi: 'Kem chua (sour cream) tự nhiên dùng hộp "tub"; đáp án SGK ghi "bag" nên hệ thống chấp nhận cả 2!' },
  11: { id: 11, choices: ['much', 'many'], acceptedIndices: [1], primaryIndex: 1, explainVi: '"eggs" đếm được số nhiều → How many.' },
  12: { id: 12, choices: ['some', 'any'], acceptedIndices: [0], primaryIndex: 0, explainVi: 'Câu khẳng định → some sugar.' },
  13: { id: 13, choices: ['some', 'any'], acceptedIndices: [0], primaryIndex: 0, explainVi: 'Câu khẳng định → some butter.' },
  14: { id: 14, choices: ['some', 'any'], acceptedIndices: [1], primaryIndex: 1, explainVi: 'Câu phủ định "We don\'t need..." → any chocolate.' },
  15: { id: 15, choices: ['bar', 'tin'], acceptedIndices: [0, 1], primaryIndex: 0, explainVi: 'Sô-cô-la tự nhiên dùng thanh "bar"; đáp án SGK ghi "tin" nên hệ thống chấp nhận cả 2!' },
};

export const U5_EX_II7_DIALOGUE: U5ApplePieLine[] = [
  { speaker: 'Lucy', segments: ["Let's make ", 1, ' apple pie. Have we got ', 2, ' apples?'] },
  { speaker: 'Alan', segments: ['Yes, we have ', 3, ' apples in the fridge.'] },
  { speaker: 'Lucy', segments: ['How ', 4, ' apples are there?'] },
  { speaker: 'Alan', segments: ['About a ', 5, ' of apples.'] },
  { speaker: 'Lucy', segments: ['OK, we also need ', 6, ' flour.'] },
  { speaker: 'Alan', segments: ['Yes, we have ', 7, ' flour in the cupboard.'] },
  { speaker: 'Lucy', segments: ['How ', 8, ' flour is there?'] },
  { speaker: 'Alan', segments: ['Oh, no. There are only two ', 9, ' of flour.'] },
  { speaker: 'Sue', segments: ["I'll go and buy it. Do we need anything else?"] },
  { speaker: 'Lucy', segments: ['Yes, buy a ', 10, ' of sour cream and eggs, please.'] },
  { speaker: 'Sue', segments: ['How ', 11, ' eggs do we need?'] },
  { speaker: 'Lucy', segments: ['Four eggs, ', 12, ' sugar and ', 13, ' butter.'] },
  { speaker: 'Andy', segments: ['What about chocolate?'] },
  { speaker: 'Lucy', segments: ["We don't need ", 14, ' chocolate.'] },
  { speaker: 'Andy', segments: ['Sue, can you buy me a ', 15, ' of chocolate, please?'] },
];

export const U5_EX_II8_QUANTIFIERS: {
  id: number;
  before: string;
  after: string;
  answer: 'some' | 'any' | 'few' | 'little';
  explainVi: string;
}[] = [
  { id: 1, before: 'Are there', after: 'bananas on the table?', answer: 'any', explainVi: 'Câu hỏi + danh từ số nhiều → any.' },
  { id: 2, before: 'There are', after: 'photos in the magazine.', answer: 'some', explainVi: 'Câu khẳng định + danh từ số nhiều → some.' },
  { id: 3, before: "He hasn't got", after: 'onions for this food.', answer: 'any', explainVi: 'Câu phủ định (hasn\'t got) → any.' },
  { id: 4, before: 'There are a', after: 'students on the ground after school.', answer: 'few', explainVi: 'Sau "a ___" + "students" (đếm được số nhiều) → a few.' },
  { id: 5, before: 'He is going to buy', after: 'jeans.', answer: 'some', explainVi: 'Câu khẳng định + "jeans" (luôn số nhiều) → some.' },
  { id: 6, before: 'Put a', after: 'salt in this soup.', answer: 'little', explainVi: 'Sau "a ___" + "salt" (không đếm được) → a little.' },
  { id: 7, before: "There isn't", after: 'sugar in the juice.', answer: 'any', explainVi: 'Câu phủ định (isn\'t) + "sugar" → any.' },
  { id: 8, before: 'Have we got', after: 'rice?', answer: 'any', explainVi: 'Câu hỏi + "rice" (không đếm được) → any.' },
  { id: 9, before: 'I want to buy', after: 'pasta.', answer: 'some', explainVi: 'Câu khẳng định + "pasta" (không đếm được) → some.' },
  { id: 10, before: 'There is a', after: 'cheese in the bowl.', answer: 'little', explainVi: 'Sau "a ___" + "cheese" (không đếm được) → a little.' },
];

export const U5_EX_II9_FEW_LITTLE: {
  id: number;
  beforeSome: string;
  afterSome: string;
  answer: 'a few' | 'a little';
  nounHighlight: string;
  explainVi: string;
}[] = [
  { id: 1, beforeSome: 'You need', afterSome: 'suncream for a beach holiday.', answer: 'a little', nounHighlight: 'suncream (U)', explainVi: '"suncream" không đếm được → đổi some thành a little.' },
  { id: 2, beforeSome: 'They have', afterSome: 'questions for the tour guide.', answer: 'a few', nounHighlight: 'questions (C)', explainVi: '"questions" đếm được số nhiều → đổi some thành a few.' },
  { id: 3, beforeSome: "There's", afterSome: 'interesting news about our next trip.', answer: 'a little', nounHighlight: 'news (U)', explainVi: '"news" (tin tức) tuy có -s nhưng là danh từ KHÔNG đếm được → a little.' },
  { id: 4, beforeSome: 'There are', afterSome: 'nice souvenir shops on the way to the temple.', answer: 'a few', nounHighlight: 'souvenir shops (C)', explainVi: '"souvenir shops" đếm được số nhiều → a few.' },
  { id: 5, beforeSome: 'Lan usually buys', afterSome: 'chocolate when she goes on a shopping trip.', answer: 'a little', nounHighlight: 'chocolate (U)', explainVi: '"chocolate" không đếm được → a little.' },
  { id: 6, beforeSome: 'I bought', afterSome: 'postcards when I visited Nha Trang last year.', answer: 'a few', nounHighlight: 'postcards (C)', explainVi: '"postcards" đếm được số nhiều → a few.' },
];

export interface U5MustItem {
  id: number;
  parts: string[]; // length = answers.length + 1
  answers: ('must' | "mustn't")[];
  explainVi: string;
}

export const U5_EX_II10_MUST: U5MustItem[] = [
  { id: 1, parts: ['You ', ' be rude to your grandparents.'], answers: ["mustn't"], explainVi: 'Không được hỗn láo/thô lỗ với ông bà → mustn\'t.' },
  { id: 2, parts: ['You ', ' go to the dentist twice a year.'], answers: ['must'], explainVi: 'Nên/phải đi khám nha sĩ 2 lần một năm → must.' },
  { id: 3, parts: ['You ', ' wear warm clothes when it is cold outside.'], answers: ['must'], explainVi: 'Trời lạnh thì phải mặc quần áo ấm → must.' },
  { id: 4, parts: ['You ', ' fight with your classmates.'], answers: ["mustn't"], explainVi: 'Không được đánh nhau với bạn cùng lớp → mustn\'t.' },
  { id: 5, parts: ['You ', ' throw litter on the street.'], answers: ["mustn't"], explainVi: 'Không được xả rác ra đường → mustn\'t.' },
  { id: 6, parts: ['This is a secret. You ', ' tell anybody.'], answers: ["mustn't"], explainVi: 'Đây là bí mật nên không được kể cho ai → mustn\'t.' },
  { id: 7, parts: ['You ', ' make noise in the library.'], answers: ["mustn't"], explainVi: 'Không được làm ồn trong thư viện → mustn\'t.' },
  { id: 8, parts: ['We ', ' hurry or we will miss the bus.'], answers: ['must'], explainVi: 'Phải nhanh lên kẻo lỡ xe buýt → must.' },
  { id: 9, parts: ['The baby is sleeping. You ', ' shout.'], answers: ["mustn't"], explainVi: 'Em bé đang ngủ nên không được hét to → mustn\'t.' },
  { id: 10, parts: ['You ', ' be friendly to everybody.'], answers: ['must'], explainVi: 'Phải thân thiện với mọi người → must.' },
  { id: 11, parts: ['You ', ' walk on the grass.'], answers: ["mustn't"], explainVi: 'Không được giẫm lên cỏ → mustn\'t.' },
  { id: 12, parts: ['You ', ' light fires in the forests.'], answers: ["mustn't"], explainVi: 'Cấm đốt lửa trong rừng để phòng cháy → mustn\'t.' },
  { id: 13, parts: ['Look at the sign! "No left turn". We ', ' go straight ahead or turn right.'], answers: ['must'], explainVi: 'Biển cấm rẽ trái → chúng ta phải đi thẳng hoặc rẽ phải (must).' },
  { id: 14, parts: ["My parents aren't at home, so I ", ' cook lunch myself.'], answers: ['must'], explainVi: 'Bố mẹ vắng nhà nên mình phải tự nấu bữa trưa → must.' },
  { id: 15, parts: ['Your hair is so dirty. You ', ' wash it right now.'], answers: ['must'], explainVi: 'Tóc bẩn quá nên phải gội ngay → must.' },
  { id: 16, parts: ['Tom ', ' help you with your homework. You ', ' do it yourself.'], answers: ["mustn't", 'must'], explainVi: 'Tom không được làm hộ (mustn\'t), bạn phải tự làm bài tập (must).' },
  { id: 17, parts: ['You ', ' drive fast. There is a speed limit here.'], answers: ["mustn't"], explainVi: 'Có biển giới hạn tốc độ nên không được lái nhanh → mustn\'t.' },
  { id: 18, parts: ['Students ', ' go to school on time.'], answers: ['must'], explainVi: 'Học sinh phải đi học đúng giờ → must.' },
  { id: 19, parts: ['You ', ' talk during the exam.'], answers: ["mustn't"], explainVi: 'Không được nói chuyện trong giờ kiểm tra → mustn\'t.' },
  { id: 20, parts: ['Farmers ', ' get up early in the morning.'], answers: ['must'], explainVi: 'Bác nông dân phải dậy sớm vào buổi sáng → must.' },
];

export interface U5SituationItem {
  id: number;
  situation: string;
  cue: string;
  answers: string[];
  displayAnswer: string;
  explainVi: string;
}

export const U5_EX_II11_SITUATIONS: U5SituationItem[] = [
  { id: 2, situation: 'My chair is broken.', cue: 'buy a new one', answers: ['i must buy a new one.'], displayAnswer: 'I must buy a new one.', explainVi: 'Ghế bị hỏng → I must + V nguyên thể (buy a new one).' },
  { id: 3, situation: 'My bicycle is very dirty.', cue: 'wash it', answers: ['i must wash it.'], displayAnswer: 'I must wash it.', explainVi: 'Xe đạp rất bẩn → I must wash it.' },
  { id: 4, situation: "I've got a terrible cold and a cough.", cue: "go / doctor's", answers: ["i must go to the doctor's.", 'i must go to the doctor.'], displayAnswer: "I must go to the doctor's.", explainVi: 'Bị cảm lạnh và ho nặng → I must go to the doctor\'s.' },
  { id: 5, situation: "I've written three important letters.", cue: 'go / post office', answers: ['i must go to the post office.'], displayAnswer: 'I must go to the post office.', explainVi: 'Viết xong 3 lá thư quan trọng → I must go to the post office.' },
  { id: 6, situation: 'My hair is too long.', cue: "go / barber's", answers: ["i must go to the barber's.", 'i must go to the barber.'], displayAnswer: "I must go to the barber's.", explainVi: 'Tóc quá dài → đến tiệm cắt tóc (go to the barber\'s).' },
  { id: 7, situation: 'The kitchen is in a mess.', cue: 'tidy it up', answers: ['i must tidy it up.'], displayAnswer: 'I must tidy it up.', explainVi: 'Nhà bếp bừa bộn → I must tidy it up.' },
  { id: 8, situation: "I've got an awful toothache.", cue: "go / dentist's", answers: ["i must go to the dentist's.", 'i must go to the dentist.'], displayAnswer: "I must go to the dentist's.", explainVi: 'Đau răng dữ dội → I must go to the dentist\'s.' },
  { id: 9, situation: "I've got a pile of dirty clothes.", cue: 'wash them', answers: ['i must wash them.'], displayAnswer: 'I must wash them.', explainVi: 'Có cả đống quần áo bẩn → I must wash them.' },
  { id: 10, situation: "I'm getting too fat.", cue: 'lose weight', answers: ['i must lose weight.'], displayAnswer: 'I must lose weight.', explainVi: 'Đang tăng cân quá nhiều → I must lose weight (giảm cân).' },
];

export const U5_EX_II12_MISTAKES: U5MistakeItem[] = [
  { id: 1, sentence: 'Is your kitchen biger than her kitchen?', wrongWord: 'biger', correctWord: 'bigger', acceptedCorrections: ['bigger'], fixedSentence: 'Is your kitchen bigger than her kitchen?', explainVi: '"big" (1 âm tiết, 1 nguyên âm + 1 phụ âm) phải gấp đôi "g" khi thêm -er → bigger.' },
  { id: 2, sentence: 'There are a little photos in the magazine.', wrongWord: 'a little', correctWord: 'a few', acceptedCorrections: ['a few', 'few'], fixedSentence: 'There are a few photos in the magazine.', explainVi: '"photos" đếm được số nhiều → dùng "a few" thay cho "a little".' },
  { id: 3, sentence: 'My brother is busyer than I am.', wrongWord: 'busyer', correctWord: 'busier', acceptedCorrections: ['busier'], fixedSentence: 'My brother is busier than I am.', explainVi: '"busy" tận cùng bằng phụ âm + y → đổi y thành i rồi thêm -er: busier.' },
  { id: 4, sentence: 'London is smallest than Mexico City.', wrongWord: 'smallest', correctWord: 'smaller', acceptedCorrections: ['smaller'], fixedSentence: 'London is smaller than Mexico City.', explainVi: 'Có "than" là so sánh hơn (không phải so sánh nhất) → smaller.' },
  { id: 5, sentence: 'How much islands are there in Ha Long Bay?', wrongWord: 'much', correctWord: 'many', acceptedCorrections: ['many'], fixedSentence: 'How many islands are there in Ha Long Bay?', explainVi: '"islands" đếm được số nhiều → hỏi số lượng dùng How many.' },
  { id: 6, sentence: 'There are any natural wonders in Viet Nam.', wrongWord: 'any', correctWord: 'some', acceptedCorrections: ['some'], fixedSentence: 'There are some natural wonders in Viet Nam.', explainVi: 'Câu khẳng định phải dùng "some" thay cho "any".' },
  { id: 7, sentence: "You mustn't leaves food on the tables in class.", wrongWord: 'leaves', correctWord: 'leave', acceptedCorrections: ['leave'], fixedSentence: "You mustn't leave food on the tables in class.", explainVi: 'Sau "mustn\'t" động từ phải ở dạng nguyên thể không chia → leave.' },
  { id: 8, sentence: "I'm eating a egg.", wrongWord: 'a', correctWord: 'an', acceptedCorrections: ['an'], fixedSentence: "I'm eating an egg.", explainVi: '"egg" bắt đầu bằng nguyên âm /e/ → dùng "an".' },
  { id: 9, sentence: 'Must you wears a school uniform?', wrongWord: 'wears', correctWord: 'wear', acceptedCorrections: ['wear'], fixedSentence: 'Must you wear a school uniform?', explainVi: 'Sau động từ khuyết thiếu "Must", động từ giữ nguyên thể → wear.' },
  { id: 10, sentence: "You mustn't clean the kitchen table after cooking.", wrongWord: "mustn't", correctWord: 'must', acceptedCorrections: ['must'], fixedSentence: 'You must clean the kitchen table after cooking.', explainVi: 'Về nghĩa: Sau khi nấu ăn bạn PHẢI lau bàn bếp → đổi mustn\'t thành must.' },
];

// ============================================================
// PHẦN III: ĐỌC HIỂU (TRANG 118 – 120)
// ============================================================

export const U5_EX_III1_PASSAGE =
  "Hoi An is an old city. It's about 25 kilometres to the south of Da Nang. There are about 100,000 people living here. The city has a lot of old houses, peaceful pagodas and nice shops. Most of the streets here are short and narrow. The beautiful Hoai River runs through the city. It divides Hoi An into two parts. In summer, it is usually very hot, and in winter, there is often a lot of rain. The people of Hoi An are kind, friendly and hard-working. Every year, many tourists in Viet Nam and other countries visit Hoi An. This is really an exciting place to spend our holiday.";

export const U5_EX_III1_QUESTIONS: {
  id: number;
  question: string;
  answers: string[];
  displayAnswer: string;
  explainVi: string;
}[] = [
  {
    id: 1,
    question: 'How far is it from Hoi An to Da Nang?',
    answers: ["it's about 25 kilometres.", 'it is about 25 kilometres.', 'about 25 kilometres.', '25 kilometres.'],
    displayAnswer: "It's about 25 kilometres.",
    explainVi: 'Câu 2 trong bài: "It\'s about 25 kilometres to the south of Da Nang."',
  },
  {
    id: 2,
    question: 'How many people are there in Hoi An?',
    answers: ['there are about 100,000 people.', 'about 100,000 people.', 'there are about 100,000 people living here.', '100,000 people.'],
    displayAnswer: 'There are about 100,000 people.',
    explainVi: 'Câu 3 trong bài: "There are about 100,000 people living here."',
  },
  {
    id: 3,
    question: 'Does the river divide the city into two parts?',
    answers: ['yes, it does.'],
    displayAnswer: 'Yes, it does.',
    explainVi: 'Trong bài có câu: "It divides Hoi An into two parts." → Trả lời Yes, it does.',
  },
  {
    id: 4,
    question: "What's the weather like in summer?",
    answers: ["it's usually very hot.", 'it is usually very hot.', 'it is very hot.', 'very hot.'],
    displayAnswer: "It's usually very hot.",
    explainVi: 'Trong bài: "In summer, it is usually very hot..."',
  },
  {
    id: 5,
    question: 'What are the people of Hoi An like?',
    answers: ['they are kind, friendly and hard-working.', 'kind, friendly and hard-working.', 'the people of hoi an are kind, friendly and hard-working.'],
    displayAnswer: 'They are kind, friendly and hard-working.',
    explainVi: 'Trong bài: "The people of Hoi An are kind, friendly and hard-working."',
  },
  {
    id: 6,
    question: 'Is Hoi An an exciting tourist destination?',
    answers: ['yes, it is.'],
    displayAnswer: 'Yes, it is.',
    explainVi: 'Câu cuối: "This is really an exciting place to spend our holiday." → Yes, it is.',
  },
];

export const U5_EX_III2_PASSAGE_PARTS = [
  'Hi. I am Long. I live in Hue. It is ',
  ' city in Central Viet Nam. It is not very far from Da Nang. It has the ',
  ' river in Central Viet Nam – Huong River. If you visit Hue, you should take a trip on Huong River ',
  " the evening. It's the most interesting thing because you can hear some famous singers ",
  " Hue songs during your trip on Huong River. You can find a lot of temples, museums and galleries. It's Hue's ",
  ' attraction.',
];

export const U5_EX_III2_QUESTIONS: {
  id: number;
  options: [string, string, string, string];
  correctIndex: number;
  explainVi: string;
}[] = [
  { id: 1, options: ['older', 'the oldest', 'old', 'oldest'], correctIndex: 1, explainVi: 'So sánh nhất của tính từ ngắn "old" cần có "the": the oldest city (thành phố cổ kính nhất).' },
  { id: 2, options: ['famous', 'more famous', 'most famous', 'famouser'], correctIndex: 2, explainVi: 'Phía trước đã có "the" → điền so sánh nhất của tính từ dài: most famous.' },
  { id: 3, options: ['in', 'on', 'at', 'of'], correctIndex: 0, explainVi: 'Buổi trong ngày dùng giới từ "in": in the evening.' },
  { id: 4, options: ['to sing', 'sing', 'sings', 'sang'], correctIndex: 1, explainVi: 'Cấu trúc "hear + someone + V (nguyên thể)": nghe ai đó hát → sing.' },
  { id: 5, options: ['greatest', 'great', 'greater', 'the greatest'], correctIndex: 0, explainVi: 'Đã có sở hữu cách "Hue\'s" phía trước nên không dùng "the" → Hue\'s greatest attraction.' },
];

export const U5_EX_III3_BOX = [
  'moving',
  'familiar',
  'water',
  'clouds',
  'seen',
  'waves',
  'beach',
  'considered',
  'shady',
  'landscapes',
];

export const U5_EX_III3_SEGMENTS = [
  'Mui Ne is located 24 kilometres north-east of Phan Thiet city. It is a fishing village as well as a ',
  ' tourism area in Binh Thuan province. It is found on Highway No. 706, and is famous for sweeping sand dunes and beautiful rows of palm trees. The ',
  ' is shallow and sloped. The ',
  ' is clean and blue and the sun rarely hides behind ',
  '. Besides beaches and sand dunes, there are also beautiful ',
  ' such as Suoi Tien (Fairy Spring), the Ong Hoang Building, and the Poshanu Cham Tower. It has long been ',
  ' the "Hawaii" of Viet Nam. It has ',
  ' roads under coconut trees, a beautiful beach and cliffs. The typical scenery of this place lies in the ',
  ' lines of golden sand, and when they are ',
  ' from afar, they look like moving ',
  '.',
];

export const U5_EX_III3_ANSWERS: {
  id: number;
  answers: string[];
  displayAnswer: string;
  explainVi: string;
}[] = [
  { id: 1, answers: ['familiar'], displayAnswer: 'familiar', explainVi: 'Một khu du lịch quen thuộc → a familiar tourism area.' },
  { id: 2, answers: ['beach'], displayAnswer: 'beach', explainVi: 'Bãi biển nông và thoai thoải → The beach is shallow and sloped.' },
  { id: 3, answers: ['water'], displayAnswer: 'water', explainVi: 'Nước sạch và xanh trong → The water is clean and blue.' },
  { id: 4, answers: ['clouds'], displayAnswer: 'clouds', explainVi: 'Mặt trời hiếm khi nấp sau những đám mây → behind clouds.' },
  { id: 5, answers: ['landscapes'], displayAnswer: 'landscapes', explainVi: 'Những danh lam thắng cảnh / phong cảnh đẹp → beautiful landscapes.' },
  { id: 6, answers: ['considered'], displayAnswer: 'considered', explainVi: 'Bị động "has long been considered": từ lâu được xem như là "Hawaii" của Việt Nam.' },
  { id: 7, answers: ['shady', 'moving'], displayAnswer: 'shady', explainVi: 'Những con đường rợp bóng mát dưới hàng dừa → shady roads. (SGK in đảo #7/#8 nên chấp nhận cả hai).' },
  { id: 8, answers: ['moving', 'shady'], displayAnswer: 'moving', explainVi: 'Những dải cát vàng chuyển động theo gió → moving lines of golden sand.' },
  { id: 9, answers: ['seen'], displayAnswer: 'seen', explainVi: 'Bị động "when they are seen from afar": khi nhìn từ xa.' },
  { id: 10, answers: ['waves'], displayAnswer: 'waves', explainVi: 'Trông giống như những con sóng đang chuyển động → moving waves.' },
];

// ============================================================
// PHẦN IV: VIẾT (TRANG 120 – 121)
// ============================================================

export interface U5ReorderItem {
  id: number;
  tiles: string[];
  correctSentence: string;
  vi: string;
  explainVi: string;
}

export const U5_EX_IV1_REORDER: U5ReorderItem[] = [
  {
    id: 1,
    tiles: ['Mui Ne', 'is', 'a', 'popular', 'holiday', 'destination', 'in', 'Phan Thiet.'],
    correctSentence: 'Mui Ne is a popular holiday destination in Phan Thiet.',
    vi: 'Mũi Né là một điểm đến nghỉ dưỡng nổi tiếng ở Phan Thiết.',
    explainVi: 'Cụm danh từ: a popular holiday destination (điểm đến nghỉ dưỡng nổi tiếng).',
  },
  {
    id: 2,
    tiles: ['Tourists', 'can', 'enjoy', 'water', 'sport', 'in', 'summer.'],
    correctSentence: 'Tourists can enjoy water sport in summer.',
    vi: 'Du khách có thể tham gia thể thao dưới nước vào mùa hè.',
    explainVi: 'Cấu trúc: S + can + V (enjoy) + O (water sport) + in summer.',
  },
  {
    id: 3,
    tiles: ['They', 'can', 'have', 'fresh', 'seafood', 'in', 'restaurants.'],
    correctSentence: 'They can have fresh seafood in restaurants.',
    vi: 'Họ có thể thưởng thức hải sản tươi sống ở các nhà hàng.',
    explainVi: 'Tính từ "fresh" đứng trước danh từ "seafood" (fresh seafood).',
  },
  {
    id: 4,
    tiles: ['There', 'are', 'beautiful', 'beaches', 'and', 'mountains', 'here.'],
    correctSentence: 'There are beautiful beaches and mountains here.',
    vi: 'Ở đây có những bãi biển và ngọn núi tuyệt đẹp.',
    explainVi: 'Cấu trúc: There are + adj + N1 and N2 + here.',
  },
  {
    id: 5,
    tiles: ['Please', 'come', 'and', 'have', 'a', 'great', 'time.'],
    correctSentence: 'Please come and have a great time.',
    vi: 'Hãy đến và tận hưởng khoảng thời gian tuyệt vời nhé.',
    explainVi: 'Câu mời lịch sự: Please + V1 + and + V2 (have a great time).',
  },
  {
    id: 6,
    tiles: ['You', "mustn't", 'leave', 'your', 'motorbike', 'unlocked.'],
    correctSentence: "You mustn't leave your motorbike unlocked.",
    vi: 'Bạn không được để xe máy mà không khóa.',
    explainVi: 'Cấu trúc: You mustn\'t leave + sth + adj (unlocked = không khóa).',
  },
  {
    id: 7,
    tiles: ['Living in a city', 'is usually', 'more modern', 'than', 'living in the countryside.'],
    correctSentence: 'Living in a city is usually more modern than living in the countryside.',
    vi: 'Sống ở thành phố thường hiện đại hơn sống ở nông thôn.',
    explainVi: 'So sánh hơn tính từ dài: is usually more modern than...',
  },
  {
    id: 8,
    tiles: ['Lan', 'lives', 'in', 'a', 'village', 'in', 'the', 'mountains.'],
    correctSentence: 'Lan lives in a village in the mountains.',
    vi: 'Lan sống ở một ngôi làng trên vùng núi.',
    explainVi: 'Trật tự nơi chốn từ nhỏ đến lớn: in a village → in the mountains.',
  },
];

export interface U5RewriteItem {
  id: number;
  original: string;
  starter: string;
  answers: string[];
  displayAnswer: string;
  explainVi: string;
}

export const U5_EX_IV2_REWRITE: U5RewriteItem[] = [
  { id: 1, original: 'My mother is younger than my father.', starter: 'My father', answers: ['my father is older than my mother.'], displayAnswer: 'My father is older than my mother.', explainVi: 'Mẹ trẻ hơn bố ↔ Bố lớn tuổi hơn mẹ (younger ↔ older).' },
  { id: 2, original: 'Does your neighbourhood have a library?', starter: 'Is there', answers: ['is there a library in your neighbourhood?'], displayAnswer: 'Is there a library in your neighbourhood?', explainVi: 'Đổi "Does + nơi chốn + have + N?" ↔ "Is there + N + in + nơi chốn?".' },
  { id: 3, original: "Minh's house is near the supermarket.", starter: "Minh's house isn't", answers: ["minh's house isn't far from the supermarket."], displayAnswer: "Minh's house isn't far from the supermarket.", explainVi: 'near (gần) ↔ isn\'t far from (không xa).' },
  { id: 4, original: 'Unit one is more difficult than Unit two.', starter: 'Unit two', answers: ['unit two is easier than unit one.'], displayAnswer: 'Unit two is easier than unit one.', explainVi: 'more difficult (khó hơn) ↔ easier (dễ hơn).' },
  { id: 5, original: 'My mother is shorter than my father.', starter: 'My father', answers: ['my father is taller than my mother.'], displayAnswer: 'My father is taller than my mother.', explainVi: 'shorter (thấp hơn) ↔ taller (cao hơn).' },
  { id: 6, original: 'There are twenty desks in the classroom.', starter: 'The classroom', answers: ['the classroom has twenty desks.'], displayAnswer: 'The classroom has twenty desks.', explainVi: 'There are + N + in + nơi chốn ↔ Nơi chốn + has + N.' },
  { id: 7, original: "The garden is behind Lan's house.", starter: "Lan's house", answers: ["lan's house is in front of the garden."], displayAnswer: "Lan's house is in front of the garden.", explainVi: 'behind (phía sau) ↔ in front of (phía trước).' },
  { id: 8, original: 'The bank is not far from the post office.', starter: 'The bank', answers: ['the bank is near the post office.'], displayAnswer: 'The bank is near the post office.', explainVi: 'not far from ↔ near.' },
  { id: 9, original: 'There are many flowers in our garden.', starter: 'Our garden', answers: ['our garden has many flowers.'], displayAnswer: 'Our garden has many flowers.', explainVi: 'There are + N + in our garden ↔ Our garden has + N.' },
  { id: 10, original: 'Her hair is brown.', starter: 'She', answers: ['she has brown hair.'], displayAnswer: 'She has brown hair.', explainVi: 'Her hair is + màu ↔ She has + màu + hair.' },
];

// ============================================================
// TEST FOR UNIT 5 — TRỌN BỘ 10 PHẦN (TRANG 122 – 128)
// ============================================================

export interface U5PhoneticOption {
  before: string;
  under: string;
  after: string;
  word: string;
  ipa: string;
}

export interface U5TestP1Item {
  id: number;
  options: [U5PhoneticOption, U5PhoneticOption, U5PhoneticOption, U5PhoneticOption];
  correctIndex: number;
  explainVi: string;
}

export const U5_TEST_P1: U5TestP1Item[] = [
  {
    id: 1,
    options: [
      { before: '', under: 't', after: 'op', word: 'top', ipa: '/tɒp/' },
      { before: '', under: 't', after: 'en', word: 'ten', ipa: '/ten/' },
      { before: '', under: 't', after: 'omato', word: 'tomato', ipa: '/təˈmɑːtəʊ/' },
      { before: 's', under: 't', after: 'ay', word: 'stay', ipa: '/steɪ/' },
    ],
    correctIndex: 3,
    explainVi: 'A, B, C có âm /t/ đứng đầu bật hơi mạnh (/tʰ/); D "stay" nằm trong cụm /st/ không bật hơi.',
  },
  {
    id: 2,
    options: [
      { before: 's', under: 't', after: 'and', word: 'stand', ipa: '/stænd/' },
      { before: 's', under: 't', after: 'amps', word: 'stamps', ipa: '/stæmps/' },
      { before: 's', under: 't', after: 'eal', word: 'steal', ipa: '/stiːl/' },
      { before: '', under: 't', after: 'ape', word: 'tape', ipa: '/teɪp/' },
    ],
    correctIndex: 3,
    explainVi: 'A, B, C thuộc cụm âm /st/ không bật hơi; D "tape" là âm /t/ đứng đầu bật hơi mạnh.',
  },
  {
    id: 3,
    options: [
      { before: 'h', under: 'a', after: 't', word: 'hat', ipa: '/hæt/' },
      { before: 'pl', under: 'a', after: 'n', word: 'plan', ipa: '/plæn/' },
      { before: '', under: 'a', after: 'rea', word: 'area', ipa: '/ˈeəriə/' },
      { before: 'm', under: 'a', after: 'p', word: 'map', ipa: '/mæp/' },
    ],
    correctIndex: 2,
    explainVi: 'A, B, D đọc nguyên âm /æ/; C "area" đọc là /eə/.',
  },
  {
    id: 4,
    options: [
      { before: 'coa', under: 'st', after: '', word: 'coast', ipa: '/kəʊst/' },
      { before: 'co', under: 'st', after: '', word: 'cost', ipa: '/kɒst/' },
      { before: '', under: 't', after: 'ennis', word: 'tennis', ipa: '/ˈtenɪs/' },
      { before: 'du', under: 'st', after: '', word: 'dust', ipa: '/dʌst/' },
    ],
    correctIndex: 2,
    explainVi: 'A, B, D kết thúc bằng cụm /st/; C "tennis" là âm /t/ đơn ở đầu từ.',
  },
  {
    id: 5,
    options: [
      { before: 'ea', under: 'st', after: '', word: 'east', ipa: '/iːst/' },
      { before: 'pho', under: 't', after: 'o', word: 'photo', ipa: '/ˈfəʊtəʊ/' },
      { before: '', under: 't', after: 'en', word: 'ten', ipa: '/ten/' },
      { before: '', under: 't', after: 'ask', word: 'task', ipa: '/tɑːsk/' },
    ],
    correctIndex: 0,
    explainVi: 'A "east" có cụm /st/ ở cuối; B, C, D là âm /t/ đơn.',
  },
];

export interface U5McqItem {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explainVi: string;
}

export const U5_TEST_P2_ODD: U5McqItem[] = [
  { id: 1, question: 'Chọn từ khác loại (Odd one out):', options: ['big', 'mountain', 'river', 'lake'], correctIndex: 0, explainVi: '"big" là tính từ; 3 từ còn lại là danh từ chỉ địa hình tự nhiên.' },
  { id: 2, question: 'Chọn từ khác loại (Odd one out):', options: ['short', 'high', 'long', 'forest'], correctIndex: 3, explainVi: '"forest" là danh từ (khu rừng); 3 từ còn lại là tính từ.' },
  { id: 3, question: 'Chọn từ khác loại (Odd one out):', options: ['island', 'desert', 'waterfall', 'city'], correctIndex: 3, explainVi: '"city" (thành phố) do con người xây dựng; 3 từ còn lại là cảnh quan tự nhiên.' },
  { id: 4, question: 'Chọn từ khác loại (Odd one out):', options: ['walk', 'compass', 'plaster', 'backpack'], correctIndex: 0, explainVi: '"walk" là động từ; 3 từ còn lại là danh từ đồ dùng cắm trại.' },
  { id: 5, question: 'Chọn từ khác loại (Odd one out):', options: ['mountain', 'house', 'river', 'beach'], correctIndex: 1, explainVi: '"house" (ngôi nhà) là công trình nhân tạo; 3 từ còn lại thuộc thiên nhiên.' },
  { id: 6, question: 'Chọn từ khác loại (Odd one out):', options: ['largest', 'biggest', 'highest', 'smaller'], correctIndex: 3, explainVi: '"smaller" là so sánh hơn (-er); 3 từ còn lại là so sánh nhất (-est).' },
  { id: 7, question: 'Chọn từ khác loại (Odd one out):', options: ['forest', 'lake', 'valley', 'club'], correctIndex: 3, explainVi: '"club" (câu lạc bộ) không phải kỳ quan/địa hình tự nhiên.' },
  { id: 8, question: 'Chọn từ khác loại (Odd one out):', options: ['visit', 'look', 'staying', 'take'], correctIndex: 2, explainVi: '"staying" là dạng V-ing; 3 từ còn lại là động từ nguyên thể.' },
  { id: 9, question: 'Chọn từ khác loại (Odd one out):', options: ['longest', 'hottest', 'deepest', 'thinner'], correctIndex: 3, explainVi: '"thinner" là so sánh hơn; 3 từ còn lại là so sánh nhất.' },
  { id: 10, question: 'Chọn từ khác loại (Odd one out):', options: ['see', 'watch', 'enjoy', 'look'], correctIndex: 2, explainVi: '"enjoy" (tận hưởng/thích) khác nhóm với 3 động từ chỉ hành động nhìn/xem (see, watch, look).' },
];

export interface U5TestP3PairSlot {
  slotId: string;
  choices: [string, string];
  correctIndex: 0 | 1;
}

export interface U5TestP3Item {
  id: number;
  parts: string[]; // length = slots.length + 1
  slots: U5TestP3PairSlot[];
  explainVi: string;
}

export const U5_TEST_P3_PAIRS: U5TestP3Item[] = [
  { id: 1, parts: ['That is the ', ' trip I have ever had.'], slots: [{ slotId: 'p3_1', choices: ['bet', 'best'], correctIndex: 1 }], explainVi: 'So sánh nhất: the best trip (chuyến đi tuyệt nhất).' },
  { id: 2, parts: ['Oh, no! I ', ' my suitcase on the way here.'], slots: [{ slotId: 'p3_2', choices: ['lot', 'lost'], correctIndex: 1 }], explainVi: 'Quá khứ của lose: lost my suitcase (làm mất vali).' },
  { id: 3, parts: ['I need a new pair of walking ', '.'], slots: [{ slotId: 'p3_3', choices: ['boots', 'boosts'], correctIndex: 0 }], explainVi: 'walking boots = giày đi bộ đường dài.' },
  { id: 4, parts: ["Let's take a ", ' trip around the island.'], slots: [{ slotId: 'p3_4', choices: ['boat', 'boast'], correctIndex: 0 }], explainVi: 'take a boat trip = đi tham quan bằng thuyền.' },
  { id: 5, parts: ['The ', ' welcomed us warmly when we arrived.'], slots: [{ slotId: 'p3_5', choices: ['hot', 'host'], correctIndex: 1 }], explainVi: 'The host = người chủ nhà / chủ tiệc chào đón chúng tôi nồng nhiệt.' },
  { id: 6, parts: ['It is a small fishing village on the ', '.'], slots: [{ slotId: 'p3_6', choices: ['coat', 'coast'], correctIndex: 1 }], explainVi: 'on the coast = ở trên bờ biển (khác với coat = áo khoác).' },
  { id: 7, parts: ['The fishermen are pulling in their fishing ', '.'], slots: [{ slotId: 'p3_7', choices: ['net', 'nest'], correctIndex: 0 }], explainVi: 'fishing net = lưới đánh cá (nest = tổ chim).' },
  {
    id: 8,
    parts: ['The sun rises in the ', ' and sets in the ', '.'],
    slots: [
      { slotId: 'p3_8a', choices: ['eat', 'east'], correctIndex: 1 },
      { slotId: 'p3_8b', choices: ['wet', 'west'], correctIndex: 1 },
    ],
    explainVi: 'Mặt trời mọc ở hướng Đông (east) và lặn ở hướng Tây (west).',
  },
  { id: 9, parts: ["This weekend's weather will be ", ' and windy.'], slots: [{ slotId: 'p3_9', choices: ['wet', 'west'], correctIndex: 0 }], explainVi: 'Thời tiết ẩm ướt và có gió → wet and windy.' },
  { id: 10, parts: ['My ', ' is sleeping on the sofa.'], slots: [{ slotId: 'p3_10', choices: ['cat', 'cast'], correctIndex: 0 }], explainVi: 'My cat = con mèo của tôi.' },
];

export const U5_TEST_P4_MCQ: U5McqItem[] = [
  { id: 1, question: 'When you go camping, you need a _______ to sleep in at night.', options: ['sleeping bag', 'suncream', 'plaster', 'compass'], correctIndex: 0, explainVi: 'Ngủ ban đêm khi đi cắm trại cần túi ngủ (sleeping bag).' },
  { id: 2, question: "Oh no, I've cut my finger! Do you have a _______?", options: ['compass', 'plaster', 'backpack', 'torch'], correctIndex: 1, explainVi: 'Đứt ngón tay cần băng dán cá nhân → plaster.' },
  { id: 3, question: '_______ protects your skin from the hot sun on the beach.', options: ['Suncream', 'Backpack', 'Compass', 'Scissors'], correctIndex: 0, explainVi: 'Bảo vệ da khỏi nắng gắt → Suncream.' },
  { id: 4, question: 'Ha Long Bay is one of the most famous natural _______ in the world.', options: ['islands', 'forests', 'deserts', 'wonders'], correctIndex: 3, explainVi: 'Cụm từ cố định: natural wonders (kỳ quan thiên nhiên).' },
  { id: 5, question: 'The Sahara Desert is _______ than any other desert in the world.', options: ['big', 'bigger', 'biggest', 'the biggest'], correctIndex: 1, explainVi: 'Có "than" → so sánh hơn: bigger.' },
  { id: 6, question: '_______ is a low area of land between hills or mountains.', options: ['A desert', 'An island', 'A waterfall', 'A valley'], correctIndex: 3, explainVi: 'Định nghĩa thung lũng (valley): vùng đất thấp nằm giữa các đồi/núi.' },
  { id: 7, question: 'Mui Ne is a great place for water sports like _______ and surfing.', options: ['camping', 'hiking', 'windsurfing', 'climbing'], correctIndex: 2, explainVi: 'Thể thao dưới nước (water sports) → windsurfing (lướt ván buồm).' },
  { id: 8, question: 'We need a _______ so that we do not get lost in the forest.', options: ['torch', 'plaster', 'sleeping bag', 'compass'], correctIndex: 3, explainVi: 'Để không bị lạc đường trong rừng → cần la bàn (compass).' },
  { id: 9, question: 'Students must _______ their homework before coming to class.', options: ['finish', 'finishes', 'finishing', 'to finish'], correctIndex: 0, explainVi: 'Sau "must" dùng động từ nguyên thể → finish.' },
  { id: 10, question: 'Phu Quoc Island is _______ than Cat Ba Island.', options: ['large', 'larger', 'largest', 'the largest'], correctIndex: 1, explainVi: 'Có "than" → so sánh hơn của large là larger.' },
  { id: 11, question: 'It is raining heavily outside, _______ you must wear a raincoat.', options: ['but', 'so', 'because', 'or'], correctIndex: 1, explainVi: 'Nguyên nhân – kết quả (trời mưa to, vì vậy bạn phải mặc áo mưa) → so.' },
  { id: 12, question: "It's very dark inside the cave. Turn on your _______!", options: ['torch', 'compass', 'suncream', 'plaster'], correctIndex: 0, explainVi: 'Trong hang rất tối → bật đèn pin (torch).' },
  { id: 13, question: 'Put all your clothes, food and water into your _______.', options: ['plaster', 'backpack', 'compass', 'torch'], correctIndex: 1, explainVi: 'Đựng quần áo, đồ ăn, nước uống vào ba lô → backpack.' },
  { id: 14, question: 'You _______ pick flowers in the national park. It is against the rules.', options: ['must', "mustn't", 'can', 'should'], correctIndex: 1, explainVi: 'Trái nội quy (against the rules) → cấm làm: mustn\'t.' },
  { id: 15, question: 'You _______ be quiet when you are in the hospital.', options: ['must', "mustn't", "can't", "don't"], correctIndex: 0, explainVi: 'Quy định bắt buộc ở bệnh viện: phải giữ trật tự → must.' },
  { id: 16, question: 'Staying in a hotel is _______ than sleeping in a tent.', options: ['more comfortable', 'comfortable', 'most comfortable', 'comfortabler'], correctIndex: 0, explainVi: '"comfortable" là tính từ dài, so sánh hơn có "than" → more comfortable.' },
  { id: 17, question: 'She is very _______. She likes meeting new people and talking in front of the class.', options: ['shy', 'confident', 'lazy', 'boring'], correctIndex: 1, explainVi: 'Thích gặp người mới và nói trước lớp → tự tin (confident).' },
  { id: 18, question: 'Da Nang is my _______ city in Viet Nam because it has great beaches.', options: ['wonderful', 'favourite', 'exciting', 'famous'], correctIndex: 1, explainVi: 'Sau tính từ sở hữu "my": my favourite city (thành phố yêu thích của tôi).' },
  { id: 19, question: 'The air in big cities is often _______ because of smoke from factories and cars.', options: ['polluted', 'clean', 'fresh', 'peaceful'], correctIndex: 0, explainVi: 'Khói từ nhà máy và xe cộ làm không khí bị ô nhiễm → polluted.' },
  { id: 20, question: 'If you have a headache, you can buy some medicine at the _______.', options: ['bakery', "chemist's", 'post office', 'bookshop'], correctIndex: 1, explainVi: 'Mua thuốc (buy some medicine) ở hiệu thuốc → chemist\'s.' },
];

export interface U5TestP5Item {
  id: number;
  situation: string;
  cue: string;
  answers: string[];
  displayAnswer: string;
  explainVi: string;
}

export const U5_TEST_P5_MUST: U5TestP5Item[] = [
  { id: 2, situation: 'Lan is very ill today.', cue: 'she / go to the doctor', answers: ['she must go to the doctor.', "she must go to the doctor's."], displayAnswer: 'She must go to the doctor.', explainVi: 'Lan bị ốm nặng → phải đi khám bác sĩ (must).' },
  { id: 3, situation: 'The baby is sleeping in the bedroom.', cue: 'you / shout', answers: ["you mustn't shout.", 'you must not shout.'], displayAnswer: "You mustn't shout.", explainVi: 'Em bé đang ngủ → không được hét to (mustn\'t).' },
  { id: 4, situation: 'This is a big secret between us.', cue: 'you / tell the others', answers: ["you mustn't tell the others.", 'you must not tell the others.'], displayAnswer: "You mustn't tell the others.", explainVi: 'Bí mật → không được kể cho người khác (mustn\'t).' },
  { id: 5, situation: 'Look at that "No Parking" sign!', cue: 'we / park here', answers: ["we mustn't park here.", 'we must not park here.'], displayAnswer: "We mustn't park here.", explainVi: 'Biển cấm đỗ xe → không được đỗ xe ở đây (mustn\'t).' },
  { id: 6, situation: 'My bedroom is very messy and dirty.', cue: 'I / clean it soon', answers: ['i must clean it soon.'], displayAnswer: 'I must clean it soon.', explainVi: 'Phòng ngủ rất bẩn → mình phải dọn nó sớm (must).' },
  { id: 7, situation: 'There is a "No Smoking" sign on the wall.', cue: 'he / smoke in this area', answers: ["he mustn't smoke in this area.", 'he must not smoke in this area.'], displayAnswer: "He mustn't smoke in this area.", explainVi: 'Biển cấm hút thuốc → anh ấy không được hút thuốc ở khu vực này (mustn\'t).' },
  { id: 8, situation: 'The traffic light is turning red.', cue: 'we / stop', answers: ['we must stop.'], displayAnswer: 'We must stop.', explainVi: 'Đèn đỏ → chúng ta phải dừng lại (must).' },
];

export const U5_TEST_P6_SEGMENTS = [
  'Viet Nam is in South-East Asia. It has ',
  ' of beautiful mountains, rivers and beaches. ',
  ' are two long ',
  ' in Viet Nam: the Red River in the north and the Mekong River in the south. The Mekong River is the ',
  ' river in South-East Asia and of course it is longer ',
  ' the Red River. The Mekong River starts in Tibet and ',
  ' to the East Sea. Fansipan is ',
  ' highest mountain in Viet Nam. It is 3,143 metres ',
  '. Viet Nam also has many nice beaches such as Sam Son, Do Son, Nha Trang and Vung Tau.',
];

export const U5_TEST_P6_QUESTIONS: {
  id: number;
  options: [string, string, string];
  correctIndex: number;
  explainVi: string;
}[] = [
  { id: 1, options: ['lots', 'many', 'much'], correctIndex: 0, explainVi: 'Cụm "lots of" (= a lot of) đi trước danh từ số nhiều.' },
  { id: 2, options: ['There', 'They', 'It'], correctIndex: 0, explainVi: 'Cấu trúc giới thiệu có cái gì: There are two long...' },
  { id: 3, options: ['river', 'rivers', 'lakes'], correctIndex: 1, explainVi: 'Có số đếm "two" và phía sau nhắc tới Sông Hồng & Sông Mê Kông → rivers.' },
  { id: 4, options: ['long', 'longer', 'longest'], correctIndex: 2, explainVi: 'Phía trước có "the" → so sánh nhất: the longest river.' },
  { id: 5, options: ['than', 'then', 'that'], correctIndex: 0, explainVi: 'So sánh hơn: longer than (dài hơn).' },
  { id: 6, options: ['flow', 'flows', 'flowing'], correctIndex: 1, explainVi: 'Chủ ngữ số ít "The Mekong River" → động từ thêm -s song song với "starts": flows.' },
  { id: 7, options: ['the', 'a', 'an'], correctIndex: 0, explainVi: 'Trước so sánh nhất "highest" bắt buộc dùng mạo từ "the".' },
  { id: 8, options: ['tall', 'long', 'high'], correctIndex: 2, explainVi: 'Độ cao của núi dùng "high": 3,143 metres high.' },
];

export const U5_TEST_P7_PASSAGE =
  'Nha Trang is a famous seaside city in central Viet Nam. It is the capital of Khanh Hoa Province and is well-known for its long sandy beaches, clear blue water, and sunny weather all year round. There are many beautiful islands near Nha Trang, such as Hon Tre, Hon Mun, and Hon Tam. Tourists can take boat trips to these islands to go swimming, snorkelling, or diving to see colourful coral reefs. Visitors can also enjoy delicious fresh seafood at local restaurants along the coast. Every year, thousands of Vietnamese and foreign tourists visit Nha Trang to relax and enjoy its natural beauty.';

export const U5_TEST_P7_TF: {
  id: number;
  statement: string;
  answer: 'T' | 'F';
  explainVi: string;
}[] = [
  { id: 1, statement: 'Nha Trang is famous for its long sandy beaches and clear blue water.', answer: 'T', explainVi: 'Đúng (True) — Bài đọc ghi rõ: "well-known for its long sandy beaches, clear blue water...".' },
  { id: 2, statement: 'Hon Tre, Hon Mun, and Hon Tam are islands near Nha Trang.', answer: 'T', explainVi: 'Đúng (True) — "There are many beautiful islands near Nha Trang, such as Hon Tre, Hon Mun, and Hon Tam."' },
  { id: 3, statement: "Tourists can't take boat trips to the islands.", answer: 'F', explainVi: 'Sai (False) — Trong bài ghi "Tourists can take boat trips to these islands" (CÓ THỂ đi thuyền ra đảo).' },
  { id: 4, statement: 'Visitors can see colourful coral reefs when they go snorkelling or diving.', answer: 'T', explainVi: 'Đúng (True) — "...snorkelling, or diving to see colourful coral reefs."' },
  { id: 5, statement: 'People can eat fresh seafood at local restaurants along the coast.', answer: 'T', explainVi: 'Đúng (True) — "Visitors can also enjoy delicious fresh seafood at local restaurants along the coast."' },
];

export const U5_TEST_P8_CUES: U5McqItem[] = [
  {
    id: 1,
    question: 'There / compass / sleeping bag / some plasters / their backpack.',
    options: [
      'There is a compass, a sleeping bag, and some plasters in their backpack.',
      'There are a compass, a sleeping bag, and some plasters in their backpack.',
      'There is compass, sleeping bag, and some plasters in their backpack.',
      'There is a compass, a sleeping bag, and any plasters in their backpack.',
    ],
    correctIndex: 0,
    explainVi: 'Danh từ đầu tiên là số ít "a compass" → dùng "There is", câu khẳng định dùng "some plasters".',
  },
  {
    id: 2,
    question: 'This site / famous / thrilling scenery.',
    options: [
      'This site famous for thrilling scenery.',
      'This site is famous of thrilling scenery.',
      'This site is famous for thrilling scenery.',
      'This site are famous for thrilling scenery.',
    ],
    correctIndex: 2,
    explainVi: 'Cấu trúc "be famous for + N" (nổi tiếng về cái gì), chủ ngữ số ít dùng "is".',
  },
  {
    id: 3,
    question: 'I / call / travel agent / now.',
    options: [
      "I'm calling the travel agent now.",
      'I call the travel agent now.',
      "I'm call the travel agent now.",
      'I calling the travel agent now.',
    ],
    correctIndex: 0,
    explainVi: 'Có trạng từ "now" → chia thì Hiện tại tiếp diễn: I\'m calling the travel agent now.',
  },
  {
    id: 4,
    question: 'London / small / Tokyo.',
    options: [
      'London is smaller than Tokyo.',
      'London is small than Tokyo.',
      'London is more small than Tokyo.',
      'London is the smaller than Tokyo.',
    ],
    correctIndex: 0,
    explainVi: 'So sánh hơn tính từ ngắn "small" → smaller than.',
  },
  {
    id: 5,
    question: "My brother's room / big / my room.",
    options: [
      "My brother's room is biger than my room.",
      "My brother's room is bigger than my room.",
      "My brother's room is biggest than my room.",
      "My brother's room is more big than my room.",
    ],
    correctIndex: 1,
    explainVi: '"big" gấp đôi phụ âm "g" khi thêm -er → bigger than.',
  },
];

export const U5_TEST_P9_REWRITE: U5RewriteItem[] = [
  { id: 1, original: 'My room is smaller than your room.', starter: 'Your room', answers: ['your room is bigger than my room.', 'your room is larger than my room.'], displayAnswer: 'Your room is bigger than my room.', explainVi: 'smaller (nhỏ hơn) ↔ bigger / larger (lớn hơn).' },
  { id: 2, original: 'There are many flowers in our garden.', starter: 'Our garden', answers: ['our garden has many flowers.'], displayAnswer: 'Our garden has many flowers.', explainVi: 'There are + N + in + nơi chốn ↔ Nơi chốn + has + N.' },
  { id: 3, original: 'Does your father cycle to work?', starter: 'Does your father get', answers: ['does your father get to work by bike?', 'does your father get to work by bicycle?'], displayAnswer: 'Does your father get to work by bike?', explainVi: 'cycle to work (đạp xe đi làm) ↔ get to work by bike.' },
  { id: 4, original: "The garden is behind Nam's classroom.", starter: "Nam's classroom", answers: ["nam's classroom is in front of the garden."], displayAnswer: "Nam's classroom is in front of the garden.", explainVi: 'behind ↔ in front of.' },
  { id: 5, original: 'Tom drives to work every morning.', starter: 'Tom travels', answers: ['tom travels to work by car every morning.', 'tom travels to work by car.'], displayAnswer: 'Tom travels to work by car every morning.', explainVi: 'drive to work (lái ô tô đi làm) ↔ travel to work by car.' },
  { id: 6, original: 'There are four people in her family.', starter: 'Her family', answers: ['her family has four people.'], displayAnswer: 'Her family has four people.', explainVi: 'There are + N + in her family ↔ Her family has + N.' },
  { id: 7, original: 'How many classes are there in your school?', starter: 'How many classes does', answers: ['how many classes does your school have?'], displayAnswer: 'How many classes does your school have?', explainVi: 'How many N are there in + nơi chốn? ↔ How many N does + nơi chốn + have?' },
  { id: 8, original: 'That classroom is small.', starter: 'That is', answers: ['that is a small classroom.'], displayAnswer: 'That is a small classroom.', explainVi: 'Đưa tính từ "small" lên trước danh từ "classroom" + mạo từ "a".' },
  { id: 9, original: "Peter is Mary's brother.", starter: 'Mary', answers: ["mary is peter's sister."], displayAnswer: "Mary is Peter's sister.", explainVi: 'Peter là anh/em trai của Mary ↔ Mary là chị/em gái của Peter.' },
  { id: 10, original: 'The supermarket is behind the bank.', starter: 'The bank', answers: ['the bank is in front of the supermarket.'], displayAnswer: 'The bank is in front of the supermarket.', explainVi: 'behind (đằng sau) ↔ in front of (đằng trước).' },
];

export const U5_TEST_P10_MODEL = {
  promptEn: 'Write a paragraph (about 70 words) about a natural wonder of Viet Nam that you know.',
  promptVi: 'Viết một đoạn văn khoảng 70 từ giới thiệu một kỳ quan thiên nhiên của Việt Nam mà em biết (dựa theo 4 câu hỏi gợi ý).',
  cues: [
    '1. What is the name of the natural wonder? (Tên kỳ quan là gì?)',
    '2. Where is it located? (Nó nằm ở đâu?)',
    '3. What is special about it? (Nó có điểm gì nổi bật?)',
    '4. What can visitors do there? (Du khách có thể làm gì ở đó?)',
  ],
  sampleTitle: 'Ha Long Bay — Bài mẫu tham khảo (Đáp án SGK Tr.175)',
  sampleEn:
    'Ha Long Bay is one of the most famous natural wonders of Viet Nam. It is located in Quang Ninh Province in the north of Viet Nam. The bay is famous for its emerald green water and thousands of limestone islands of different shapes and sizes. Visitors can take a boat trip around the bay, visit amazing caves like Thien Cung Cave, go kayaking, and enjoy fresh seafood. Ha Long Bay is truly an unforgettable destination for everyone.',
  sampleVi:
    'Vịnh Hạ Long là một trong những kỳ quan thiên nhiên nổi tiếng nhất của Việt Nam. Vịnh nằm ở tỉnh Quảng Ninh, miền Bắc Việt Nam. Vịnh nổi tiếng với làn nước xanh ngọc bích và hàng nghìn hòn đảo đá vôi với đủ hình dáng, kích cỡ khác nhau. Du khách có thể đi du thuyền quanh vịnh, tham quan các hang động tuyệt đẹp như động Thiên Cung, chèo thuyền kayak và thưởng thức hải sản tươi ngon. Vịnh Hạ Long thực sự là một điểm đến khó quên cho tất cả mọi người.',
};
