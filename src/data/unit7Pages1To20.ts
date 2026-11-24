/**
 * Dữ liệu chi tiết 100% chuẩn SGK "Chinh phục Ngữ pháp và Bài tập Tiếng Anh 6 - Tập 2 (Global Success)"
 * Vùng cập nhật: Trang 1 – Trang 20 (Trọn bộ Ngữ pháp, Phát âm, Bài tập A–D & TEST Unit 7 Phần I–X).
 */

export interface U7WhItem {
  num: number;
  group: 'basic' | 'how_measure' | 'price_qty' | 'what_spec';
  phrase: string;
  meaningVi: string;
  usageVi: string;
  exampleEn: string;
  exampleVi: string;
}

export interface U7ConjunctionGuide {
  word: string;
  meaningVi: string;
  symbol: string;
  functionVi: string;
  exampleEn: string;
  exampleVi: string;
}

export interface U7PronSign {
  sound: '/θ/' | '/ð/';
  ruleTitle: string;
  words: { word: string; ipa: string; vi: string }[];
}

export interface U7SortWord {
  id: string;
  word: string;
  underlined: string;
  sound: 'theta' | 'eth';
  ipa: string;
  vi: string;
}

export interface U7McqItem {
  id: string;
  num: number;
  prompt: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanationVi: string;
}

export type U7TvSvgKey =
  | 'cartoon'
  | 'weather_forecast'
  | 'sports'
  | 'game_show'
  | 'animals'
  | 'film'
  | 'documentary'
  | 'science'
  | 'education'
  | 'music'
  | 'news'
  | 'comedy';

export interface U7TvPicItem {
  id: string;
  num: number;
  svgKey: U7TvSvgKey;
  answer: string;
  vi: string;
  hintVi: string;
}

export interface U7ClassifyWord {
  id: string;
  word: string;
  vi: string;
  validCols: ('people' | 'programmes' | 'films')[];
}

export interface U7MatchDefItem {
  id: string;
  num: number;
  word: string;
  letter: string;
  definition: string;
  vi: string;
}

export interface U7FillItem {
  id: string;
  num: number;
  before: string;
  after: string;
  accepted: string[];
  displayAnswer: string;
  explanationVi: string;
}

export interface U7SentenceTask {
  id: string;
  num: number;
  prompt: string;
  underlined?: string;
  starter?: string;
  bracketWord?: string;
  accepted: string[];
  displayAnswer: string;
  explanationVi: string;
}

export interface U7MistakeItem {
  id: string;
  num: number;
  sentence: string;
  wrong: string;
  acceptedFixes: string[];
  displayFix: string;
  explanationVi: string;
}

/* ============================================================================
 * 1. LÝ THUYẾT NGỮ PHÁP & PHÁT ÂM (TẬP 2 · TR. 3–6)
 * ============================================================================ */

export const U7_WH_24_GUIDE: U7WhItem[] = [
  // Nhóm 1: 9 Từ để hỏi cơ bản (1–9)
  { num: 1, group: 'basic', phrase: 'What', meaningVi: 'cái gì', usageVi: 'Hỏi về đồ vật, sự vật, sự kiện', exampleEn: 'What is your favourite TV programme?', exampleVi: 'Chương trình TV yêu thích của em là gì?' },
  { num: 2, group: 'basic', phrase: 'Which', meaningVi: 'cái nào / cái mà', usageVi: 'Hỏi khi có sự lựa chọn cụ thể', exampleEn: 'Which channel is the cartoon on?', exampleVi: 'Phim hoạt hình chiếu trên kênh nào?' },
  { num: 3, group: 'basic', phrase: 'Where', meaningVi: 'ở đâu', usageVi: 'Hỏi về vị trí, nơi chốn', exampleEn: 'Where can you find the TV schedule?', exampleVi: 'Bạn có thể tìm lịch chiếu TV ở đâu?' },
  { num: 4, group: 'basic', phrase: 'When', meaningVi: 'khi nào', usageVi: 'Hỏi về thời gian', exampleEn: 'When do you usually watch TV?', exampleVi: 'Bạn thường xem TV khi nào?' },
  { num: 5, group: 'basic', phrase: 'Who', meaningVi: 'ai', usageVi: 'Hỏi thông tin về người (chủ ngữ)', exampleEn: 'Who is your favourite cartoon character?', exampleVi: 'Nhân vật hoạt hình yêu thích của bạn là ai?' },
  { num: 6, group: 'basic', phrase: 'Whom', meaningVi: 'ai (tân ngữ)', usageVi: 'Hỏi cho tân ngữ chỉ người', exampleEn: 'Whom do you watch TV with?', exampleVi: 'Bạn xem TV cùng với ai?' },
  { num: 7, group: 'basic', phrase: 'Whose', meaningVi: 'của ai', usageVi: 'Hỏi về thông tin sở hữu', exampleEn: 'Whose remote control is this?', exampleVi: 'Chiếc điều khiển từ xa này là của ai?' },
  { num: 8, group: 'basic', phrase: 'Why', meaningVi: 'tại sao', usageVi: 'Hỏi lí do, nguyên nhân (trả lời bằng Because)', exampleEn: 'Why do you watch TV?', exampleVi: 'Tại sao bạn xem TV?' },
  { num: 9, group: 'basic', phrase: 'How', meaningVi: 'thế nào / bằng cách nào', usageVi: 'Hỏi cho tính từ, trạng từ, sức khỏe, phương tiện', exampleEn: 'How does that newsreader get to work?', exampleVi: 'Phát thanh viên đó đi làm bằng phương tiện gì?' },

  // Nhóm 2: 7 Mẫu đo lường với HOW (10–16)
  { num: 10, group: 'how_measure', phrase: 'How old', meaningVi: 'bao nhiêu tuổi', usageVi: 'Hỏi về tuổi tác', exampleEn: 'How old is Steve?', exampleVi: 'Steve bao nhiêu tuổi?' },
  { num: 11, group: 'how_measure', phrase: 'How tall', meaningVi: 'cao bao nhiêu (người)', usageVi: 'Hỏi chiều cao của người', exampleEn: 'How tall is your favourite actor?', exampleVi: 'Diễn viên yêu thích của bạn cao bao nhiêu?' },
  { num: 12, group: 'how_measure', phrase: 'How high', meaningVi: 'cao bao nhiêu (vật)', usageVi: 'Hỏi chiều cao của vật/công trình/núi', exampleEn: 'How high is that TV tower?', exampleVi: 'Tháp truyền hình đó cao bao nhiêu?' },
  { num: 13, group: 'how_measure', phrase: 'How far is it from ... to ...?', meaningVi: 'bao xa', usageVi: 'Hỏi về khoảng cách giữa hai địa điểm', exampleEn: 'How far is it from your house to the cinema?', exampleVi: 'Từ nhà bạn đến rạp chiếu phim bao xa?' },
  { num: 14, group: 'how_measure', phrase: 'How long (độ dài)', meaningVi: 'dài bao nhiêu', usageVi: 'Hỏi về độ dài của vật/con đường', exampleEn: 'How long is the Red River?', exampleVi: 'Sông Hồng dài bao nhiêu?' },
  { num: 15, group: 'how_measure', phrase: 'How long (thời gian)', meaningVi: 'bao lâu', usageVi: 'Hỏi về khoảng thời gian kéo dài', exampleEn: 'How long does the film last?', exampleVi: 'Bộ phim kéo dài bao lâu?' },
  { num: 16, group: 'how_measure', phrase: 'How often', meaningVi: 'thường xuyên thế nào', usageVi: 'Hỏi về mức độ, tần suất, số lần', exampleEn: 'How often do you watch TV?', exampleVi: 'Bạn xem TV thường xuyên như thế nào?' },

  // Nhóm 3: 5 Mẫu hỏi Giá cả & Số lượng (17–21)
  { num: 17, group: 'price_qty', phrase: 'How much + be + S?', meaningVi: 'giá bao nhiêu', usageVi: 'Hỏi về giá cả (với động từ to be)', exampleEn: 'How much is this smart TV?', exampleVi: 'Chiếc TV thông minh này giá bao nhiêu?' },
  { num: 18, group: 'price_qty', phrase: 'How much do/does + S + cost?', meaningVi: 'tốn bao nhiêu tiền', usageVi: 'Hỏi về giá cả (với động từ cost)', exampleEn: 'How much does a movie ticket cost?', exampleVi: 'Một vé xem phim có giá bao nhiêu?' },
  { num: 19, group: 'price_qty', phrase: 'What is the price of + N?', meaningVi: 'giá của ... là bao nhiêu', usageVi: 'Hỏi giá cả theo dạng danh từ "price"', exampleEn: 'What is the price of that TV set?', exampleVi: 'Giá của chiếc TV đó là bao nhiêu?' },
  { num: 20, group: 'price_qty', phrase: 'How much + N (không đếm được)?', meaningVi: 'bao nhiêu (không đếm được)', usageVi: 'Hỏi số lượng với danh từ không đếm được (time, milk...)', exampleEn: 'How much time do you spend watching TV?', exampleVi: 'Bạn dành bao nhiêu thời gian để xem TV?' },
  { num: 21, group: 'price_qty', phrase: 'How many + N(s/es) + are there...?', meaningVi: 'có bao nhiêu (đếm được)', usageVi: 'Hỏi số lượng với danh từ đếm được số nhiều', exampleEn: 'How many hours a day do you watch TV?', exampleVi: 'Bạn xem TV bao nhiêu giờ một ngày?' },

  // Nhóm 4: 3 Mẫu hỏi Đặc điểm với WHAT (22–24)
  { num: 22, group: 'what_spec', phrase: "What's the weather like?", meaningVi: 'thời tiết thế nào?', usageVi: 'Hỏi về tình hình thời tiết', exampleEn: "What's the weather like tomorrow?", exampleVi: 'Thời tiết ngày mai thế nào?' },
  { num: 23, group: 'what_spec', phrase: 'What color', meaningVi: 'màu gì', usageVi: 'Hỏi về màu sắc', exampleEn: 'What color is the remote control?', exampleVi: 'Chiếc điều khiển từ xa màu gì?' },
  { num: 24, group: 'what_spec', phrase: 'What size', meaningVi: 'kích cỡ nào', usageVi: 'Hỏi về kích cỡ, size', exampleEn: 'What size is your new television?', exampleVi: 'Chiếc TV mới của bạn kích cỡ bao nhiêu?' },
];

export const U7_CONJUNCTION_6_GUIDE: U7ConjunctionGuide[] = [
  {
    word: 'and',
    meaningVi: 'và',
    symbol: '+',
    functionVi: 'Nối hai động từ, tính từ, danh từ hoặc hai ý cùng chiều.',
    exampleEn: 'She has a car and a house. / Peter is intelligent, humorous and kind.',
    exampleVi: 'Cô ấy có ô tô và nhà. / Peter thông minh, hài hước và tốt bụng.',
  },
  {
    word: 'or',
    meaningVi: 'hoặc / nếu không thì',
    symbol: '∨',
    functionVi: 'Chỉ sự lựa chọn giữa các phương án hoặc lời cảnh báo.',
    exampleEn: 'Which colour do you want? Yellow, red or blue?',
    exampleVi: 'Bạn thích màu nào? Vàng, đỏ hay xanh?',
  },
  {
    word: 'but',
    meaningVi: 'nhưng',
    symbol: '⚡',
    functionVi: 'Chỉ sự mâu thuẫn, trái ngược giữa hai vế câu.',
    exampleEn: 'They are rich but mean.',
    exampleVi: 'Họ giàu nhưng keo kiệt.',
  },
  {
    word: 'because',
    meaningVi: 'bởi vì',
    symbol: '←',
    functionVi: 'Chỉ nguyên nhân hoặc lý do (đứng trước mệnh đề nguyên nhân).',
    exampleEn: "I don't buy a car because it is too expensive.",
    exampleVi: 'Tôi không mua ô tô bởi vì nó quá đắt.',
  },
  {
    word: 'although',
    meaningVi: 'mặc dù',
    symbol: '⇄',
    functionVi: 'Chỉ sự tương phản nhượng bộ (KHÔNG dùng kèm "but" trong cùng câu!).',
    exampleEn: 'They went for a bath although it had begun to rain.',
    exampleVi: 'Họ đi tắm mặc dù trời đã bắt đầu đổ mưa.',
  },
  {
    word: 'so',
    meaningVi: 'vì vậy, nên',
    symbol: '→',
    functionVi: 'Chỉ kết quả (đứng trước mệnh đề kết quả, có dấu phẩy phía trước).',
    exampleEn: 'I felt sleepy, so I went to bed.',
    exampleVi: 'Tôi cảm thấy buồn ngủ, vì vậy tôi đi ngủ.',
  },
];

export const U7_PRONUNCIATION_SIGNS: U7PronSign[] = [
  {
    sound: '/θ/',
    ruleTitle: '1. Chữ "th" đứng đầu một từ (Tr.5)',
    words: [
      { word: 'think', ipa: '/θɪŋk/', vi: 'nghĩ, suy nghĩ' },
      { word: 'thing', ipa: '/θɪŋ/', vi: 'đồ vật, sự việc' },
      { word: 'thirty', ipa: '/ˈθɜːti/', vi: 'ba mươi' },
      { word: 'thorn', ipa: '/θɔːn/', vi: 'gai nhọn' },
      { word: 'thumb', ipa: '/θʌm/', vi: 'ngón tay cái' },
    ],
  },
  {
    sound: '/θ/',
    ruleTitle: '2. Chữ "th" ở cuối một từ (Tr.5–6)',
    words: [
      { word: 'mouth', ipa: '/maʊθ/', vi: 'miệng' },
      { word: 'month', ipa: '/mʌnθ/', vi: 'tháng' },
      { word: 'path', ipa: '/pɑːθ/', vi: 'lối đi' },
      { word: 'truth', ipa: '/truːθ/', vi: 'sự thật' },
      { word: 'bath', ipa: '/bɑːθ/', vi: 'sự tắm' },
    ],
  },
  {
    sound: '/θ/',
    ruleTitle: '3. Thêm "th" vào tính từ → danh từ (Tr.6)',
    words: [
      { word: 'depth', ipa: '/depθ/', vi: 'độ sâu' },
      { word: 'length', ipa: '/leŋθ/', vi: 'chiều dài' },
      { word: 'strength', ipa: '/streŋθ/', vi: 'sức mạnh' },
      { word: 'width', ipa: '/wɪdθ/', vi: 'bề rộng' },
    ],
  },
  {
    sound: '/θ/',
    ruleTitle: '4. Chữ "th" chỉ số thứ tự (Tr.6)',
    words: [
      { word: 'fourth', ipa: '/fɔːθ/', vi: 'số thứ 4' },
      { word: 'fifth', ipa: '/fɪfθ/', vi: 'số thứ 5' },
      { word: 'sixth', ipa: '/sɪksθ/', vi: 'số thứ 6' },
      { word: 'seventh', ipa: '/ˈsevnθ/', vi: 'số thứ 7' },
    ],
  },
  {
    sound: '/ð/',
    ruleTitle: '5. Dấu hiệu nhận biết âm /ð/ (đại từ, từ nối & giữa nguyên âm · Tr.6)',
    words: [
      { word: 'this', ipa: '/ðɪs/', vi: 'cái này' },
      { word: 'that', ipa: '/ðæt/', vi: 'cái kia' },
      { word: 'they', ipa: '/ðeɪ/', vi: 'họ' },
      { word: 'their', ipa: '/ðeə(r)/', vi: 'của họ' },
      { word: 'than', ipa: '/ðæn/', vi: 'hơn là' },
      { word: 'then', ipa: '/ðen/', vi: 'sau đó' },
      { word: 'though', ipa: '/ðəʊ/', vi: 'mặc dầu' },
      { word: 'gather', ipa: '/ˈɡæðə(r)/', vi: 'tập hợp lại' },
      { word: 'brother', ipa: '/ˈbrʌðə(r)/', vi: 'anh, em trai' },
      { word: 'weather', ipa: '/ˈweðə(r)/', vi: 'thời tiết' },
    ],
  },
];

/* ============================================================================
 * 2. BÀI TẬP A. PRONUNCIATION (TẬP 2 · TR. 6–7)
 * ============================================================================ */

export const U7_EX_A1_SORT: U7SortWord[] = [
  { id: 'a1-1', word: 'throat', underlined: 'th', sound: 'theta', ipa: '/θrəʊt/', vi: 'cổ họng' },
  { id: 'a1-2', word: 'weather', underlined: 'th', sound: 'eth', ipa: '/ˈweðə(r)/', vi: 'thời tiết' },
  { id: 'a1-3', word: 'both', underlined: 'th', sound: 'theta', ipa: '/bəʊθ/', vi: 'cả hai' },
  { id: 'a1-4', word: 'teeth', underlined: 'th', sound: 'theta', ipa: '/tiːθ/', vi: 'hàm răng' },
  { id: 'a1-5', word: 'think', underlined: 'th', sound: 'theta', ipa: '/θɪŋk/', vi: 'suy nghĩ' },
  { id: 'a1-6', word: 'throw', underlined: 'th', sound: 'theta', ipa: '/θrəʊ/', vi: 'ném' },
  { id: 'a1-7', word: 'than', underlined: 'th', sound: 'eth', ipa: '/ðæn/', vi: 'hơn là' },
  { id: 'a1-8', word: 'father', underlined: 'th', sound: 'eth', ipa: '/ˈfɑːðə(r)/', vi: 'bố' },
  { id: 'a1-9', word: 'smooth', underlined: 'th', sound: 'eth', ipa: '/smuːð/', vi: 'mịn màng' },
  { id: 'a1-10', word: 'author', underlined: 'th', sound: 'theta', ipa: '/ˈɔːθə(r)/', vi: 'tác giả' },
  { id: 'a1-11', word: 'them', underlined: 'th', sound: 'eth', ipa: '/ðem/', vi: 'họ (tân ngữ)' },
  { id: 'a1-12', word: 'brother', underlined: 'th', sound: 'eth', ipa: '/ˈbrʌðə(r)/', vi: 'anh/em trai' },
  { id: 'a1-13', word: 'thirsty', underlined: 'th', sound: 'theta', ipa: '/ˈθɜːsti/', vi: 'khát nước' },
  { id: 'a1-14', word: 'month', underlined: 'th', sound: 'theta', ipa: '/mʌnθ/', vi: 'tháng' },
  { id: 'a1-15', word: 'leather', underlined: 'th', sound: 'eth', ipa: '/ˈleðə(r)/', vi: 'đồ da' },
  { id: 'a1-16', word: 'bath', underlined: 'th', sound: 'theta', ipa: '/bɑːθ/', vi: 'bồn tắm' },
  { id: 'a1-17', word: 'thumb', underlined: 'th', sound: 'theta', ipa: '/θʌm/', vi: 'ngón tay cái' },
  { id: 'a1-18', word: 'clothes', underlined: 'th', sound: 'eth', ipa: '/kləʊðz/', vi: 'quần áo' },
  { id: 'a1-19', word: 'thing', underlined: 'th', sound: 'theta', ipa: '/θɪŋ/', vi: 'đồ vật' },
];

export const U7_EX_A2_MCQ: U7McqItem[] = [
  { id: 'a2-1', num: 1, prompt: 'Chọn từ có phần gạch chân "th" phát âm khác:', options: ['thin', 'than', 'they', 'there'], correctIndex: 0, explanationVi: '"thin" đọc /θ/ vô thanh; 3 đại từ/từ nối còn lại (than, they, there) đọc /ð/.' },
  { id: 'a2-2', num: 2, prompt: 'Chọn từ có phần gạch chân "th" phát âm khác:', options: ['birthday', 'earth', 'worth', 'there'], correctIndex: 3, explanationVi: '"there" đọc /ð/; birthday, earth, worth đọc /θ/.' },
  { id: 'a2-3', num: 3, prompt: 'Chọn từ có phần gạch chân "th" phát âm khác:', options: ['another', 'death', 'brother', 'though'], correctIndex: 1, explanationVi: '"death" (th ở cuối từ) đọc /θ/; another, brother, though đọc /ð/.' },
  { id: 'a2-4', num: 4, prompt: 'Chọn từ có phần gạch chân "th" phát âm khác:', options: ['thank', 'mother', 'thunder', 'throat'], correctIndex: 1, explanationVi: '"mother" (th giữa từ chỉ người thân) đọc /ð/; thank, thunder, throat đọc /θ/.' },
  { id: 'a2-5', num: 5, prompt: 'Chọn từ có phần gạch chân "th" phát âm khác:', options: ['they', 'three', 'thirst', 'thread'], correctIndex: 0, explanationVi: '"they" đọc /ð/; three, thirst, thread đọc /θ/.' },
  { id: 'a2-6', num: 6, prompt: 'Chọn từ có phần gạch chân "th" phát âm khác:', options: ['worth', 'thick', 'though', 'wrath'], correctIndex: 2, explanationVi: '"though" đọc /ð/; worth, thick, wrath đọc /θ/.' },
  { id: 'a2-7', num: 7, prompt: 'Chọn từ có phần gạch chân "th" phát âm khác:', options: ['Thursday', 'than', 'there', 'those'], correctIndex: 0, explanationVi: '"Thursday" đọc /θ/; than, there, those đọc /ð/.' },
  { id: 'a2-8', num: 8, prompt: 'Chọn từ có phần gạch chân "th" phát âm khác:', options: ['Thursday', 'thanks', 'these', 'birthday'], correctIndex: 2, explanationVi: '"these" đọc /ð/; Thursday, thanks, birthday đọc /θ/.' },
  { id: 'a2-9', num: 9, prompt: 'Chọn từ có phần gạch chân "th" phát âm khác:', options: ['thought', 'without', 'theatre', 'tooth'], correctIndex: 1, explanationVi: '"without" /wɪˈðaʊt/ đọc /ð/; thought, theatre, tooth đọc /θ/.' },
  { id: 'a2-10', num: 10, prompt: 'Chọn từ có phần gạch chân "th" phát âm khác:', options: ['weather', 'wealthy', 'clothing', 'bathing'], correctIndex: 1, explanationVi: '"wealthy" /ˈwelθi/ (tính từ từ wealth) đọc /θ/; weather, clothing, bathing đọc /ð/.' },
];

/* ============================================================================
 * 3. BÀI TẬP B. VOCABULARY & GRAMMAR (TẬP 2 · TR. 7–12)
 * ============================================================================ */

export const U7_EX_B1_BOX = [
  'game show',
  'cartoon',
  'music',
  'education',
  'sports',
  'science',
  'animals',
  'documentary',
  'weather forecast',
  'film',
  'news',
  'comedy',
];

export const U7_EX_B1_PICS: U7TvPicItem[] = [
  { id: 'b1-1', num: 1, svgKey: 'cartoon', answer: 'cartoon', vi: 'phim hoạt hình', hintVi: 'Kênh CN (Cartoon Network) với các nhân vật hoạt hình' },
  { id: 'b1-2', num: 2, svgKey: 'weather_forecast', answer: 'weather forecast', vi: 'dự báo thời tiết', hintVi: 'Bảng mặt trời, mây và nhiệt độ các ngày trong tuần' },
  { id: 'b1-3', num: 3, svgKey: 'sports', answer: 'sports', vi: 'chương trình thể thao', hintVi: 'Đua xe đạp, chạy bộ và các vận động viên' },
  { id: 'b1-4', num: 4, svgKey: 'game_show', answer: 'game show', vi: 'trò chơi truyền hình', hintVi: 'Trường quay có bảng ô chữ & người chơi thi đấu' },
  { id: 'b1-5', num: 5, svgKey: 'animals', answer: 'animals', vi: 'thế giới động vật', hintVi: 'Hươu cao cổ, voi, sư tử, ngựa vằn' },
  { id: 'b1-6', num: 6, svgKey: 'film', answer: 'film', vi: 'phim điện ảnh', hintVi: 'Cuộn phim nhựa chiếu rạp' },
  { id: 'b1-7', num: 7, svgKey: 'documentary', answer: 'documentary', vi: 'phim tài liệu', hintVi: 'Các bộ phim khám phá lịch sử, đời thực' },
  { id: 'b1-8', num: 8, svgKey: 'science', answer: 'science', vi: 'chương trình khoa học', hintVi: 'Bóng đèn ý tưởng, nguyên tử & bình thí nghiệm' },
  { id: 'b1-9', num: 9, svgKey: 'education', answer: 'education', vi: 'chương trình giáo dục', hintVi: 'Cô giáo giảng bài trên bảng cùng học sinh' },
  { id: 'b1-10', num: 10, svgKey: 'music', answer: 'music', vi: 'chương trình âm nhạc', hintVi: 'Đàn guitar, piano, kèn saxophone, trống' },
  { id: 'b1-11', num: 11, svgKey: 'news', answer: 'news', vi: 'bản tin thời sự', hintVi: 'Phát thanh viên mặc vest đọc tin tức truyền hình' },
  { id: 'b1-12', num: 12, svgKey: 'comedy', answer: 'comedy', vi: 'phim hài / hài kịch', hintVi: 'Poster phim hài vui nhộn gây cười' },
];

export const U7_EX_B2_CLASSIFY: U7ClassifyWord[] = [
  { id: 'b2-1', word: 'reporter', vi: 'phóng viên', validCols: ['people'] },
  { id: 'b2-2', word: 'documentary', vi: 'phim tài liệu', validCols: ['programmes', 'films'] },
  { id: 'b2-3', word: 'comedy', vi: 'phim hài', validCols: ['programmes', 'films'] },
  { id: 'b2-4', word: 'cartoon', vi: 'phim hoạt hình', validCols: ['programmes', 'films'] },
  { id: 'b2-5', word: 'romance', vi: 'phim lãng mạn', validCols: ['films'] },
  { id: 'b2-6', word: 'director', vi: 'đạo diễn', validCols: ['people'] },
  { id: 'b2-7', word: 'drama', vi: 'phim chính kịch', validCols: ['films', 'programmes'] },
  { id: 'b2-8', word: 'cameraman', vi: 'người quay phim', validCols: ['people'] },
  { id: 'b2-9', word: 'weatherman', vi: 'nam BTV thời tiết', validCols: ['people'] },
  { id: 'b2-10', word: 'action', vi: 'phim hành động', validCols: ['films'] },
  { id: 'b2-11', word: 'sports', vi: 'thể thao', validCols: ['programmes'] },
  { id: 'b2-12', word: 'actor', vi: 'diễn viên', validCols: ['people'] },
  { id: 'b2-13', word: 'game show', vi: 'trò chơi truyền hình', validCols: ['programmes'] },
  { id: 'b2-14', word: 'designers', vi: 'nhà thiết kế', validCols: ['people'] },
  { id: 'b2-15', word: 'sitcom', vi: 'hài tình huống', validCols: ['programmes', 'films'] },
  { id: 'b2-16', word: 'quiz show', vi: 'chương trình đố vui', validCols: ['programmes'] },
  { id: 'b2-17', word: 'viewer', vi: 'khán giả xem TV', validCols: ['people'] },
  { id: 'b2-18', word: 'newsreader', vi: 'người đọc tin tức', validCols: ['people'] },
  { id: 'b2-19', word: 'producer', vi: 'nhà sản xuất', validCols: ['people'] },
  { id: 'b2-20', word: 'silent', vi: 'phim câm', validCols: ['films'] },
  { id: 'b2-21', word: 'weather forecast', vi: 'dự báo thời tiết', validCols: ['programmes'] },
  { id: 'b2-22', word: 'fashion', vi: 'thời trang', validCols: ['programmes'] },
  { id: 'b2-23', word: 'love story', vi: 'phim tình cảm', validCols: ['films'] },
  { id: 'b2-24', word: 'weathergirl', vi: 'nữ BTV thời tiết', validCols: ['people'] },
  { id: 'b2-25', word: 'horror', vi: 'phim kinh dị', validCols: ['films'] },
  { id: 'b2-26', word: 'writer', vi: 'biên kịch / nhà văn', validCols: ['people'] },
  { id: 'b2-27', word: 'news', vi: 'thời sự', validCols: ['programmes'] },
  { id: 'b2-28', word: 'MC', vi: 'người dẫn chương trình', validCols: ['people'] },
  { id: 'b2-29', word: 'science', vi: 'khoa học', validCols: ['programmes'] },
  { id: 'b2-30', word: 'character', vi: 'nhân vật', validCols: ['people'] },
  { id: 'b2-31', word: 'animals', vi: 'động vật', validCols: ['programmes'] },
  { id: 'b2-32', word: 'war', vi: 'phim chiến tranh', validCols: ['films'] },
];

export const U7_EX_B3_MATCH: U7MatchDefItem[] = [
  { id: 'b3-1', num: 1, word: 'quiz show', letter: 'D', definition: 'a programme where you try to answer questions in order to win prizes', vi: 'chương trình đố vui trả lời câu hỏi nhận thưởng' },
  { id: 'b3-2', num: 2, word: 'channel', letter: 'G', definition: 'a television station', vi: 'một đài / kênh truyền hình' },
  { id: 'b3-3', num: 3, word: 'TV schedule', letter: 'H', definition: 'a list of the television programmes that are on a particular channel and the times that they start', vi: 'lịch phát sóng các chương trình và khung giờ' },
  { id: 'b3-4', num: 4, word: 'remote control', letter: 'A', definition: 'a device that allows you to operate a television, etc. from a distance', vi: 'thiết bị điều khiển TV từ xa' },
  { id: 'b3-5', num: 5, word: 'MC', letter: 'I', definition: 'a person who hosts an event', vi: 'người dẫn chương trình / chủ trì sự kiện' },
  { id: 'b3-6', num: 6, word: 'weathergirl', letter: 'B', definition: 'a woman on television or radio who tells you what the weather will be like', vi: 'nữ biên tập viên dự báo thời tiết' },
  { id: 'b3-7', num: 7, word: 'comedian', letter: 'J', definition: 'a person whose job is to make people laugh, by telling jokes or funny stories', vi: 'diễn viên hài mang lại tiếng cười' },
  { id: 'b3-8', num: 8, word: 'documentary', letter: 'C', definition: 'a film about real people and events', vi: 'phim tài liệu về người thật, việc thật' },
  { id: 'b3-9', num: 9, word: 'sitcom', letter: 'F', definition: 'a funny television programme in which the same characters appear in different situations', vi: 'phim hài tình huống (sách in nhầm ký hiệu E→F)' },
  { id: 'b3-10', num: 10, word: 'viewer', letter: 'E', definition: 'a person who watches television', vi: 'khán giả xem truyền hình' },
];

export const U7_EX_B4_WH_FILL: U7FillItem[] = [
  { id: 'b4-1', num: 1, before: '', after: ' do you watch TV? - Every night.', accepted: ['how often'], displayAnswer: 'How often', explanationVi: 'Câu trả lời chỉ tần suất ("Every night") → dùng "How often".' },
  { id: 'b4-2', num: 2, before: '', after: ' hours a day do you watch TV? - Three hours.', accepted: ['how many'], displayAnswer: 'How many', explanationVi: '"hours" là danh từ đếm được số nhiều → dùng "How many".' },
  { id: 'b4-3', num: 3, before: '', after: ' do you usually watch TV? - In the evening.', accepted: ['when'], displayAnswer: 'When', explanationVi: 'Câu trả lời chỉ thời điểm ("In the evening") → dùng "When".' },
  { id: 'b4-4', num: 4, before: '', after: ' of TV programmes do you like to watch? - Sports, Music, and Cartoon.', accepted: ['what kind', 'what kinds', 'which kind', 'which kinds', 'what type', 'what types'], displayAnswer: 'What kinds', explanationVi: 'Hỏi thể loại chương trình (theo sau có "of") → "What kinds / What kind".' },
  { id: 'b4-5', num: 5, before: '', after: ' is your favourite TV programme? - Cartoon.', accepted: ['what'], displayAnswer: 'What', explanationVi: 'Hỏi tên chương trình TV yêu thích → dùng "What".' },
  { id: 'b4-6', num: 6, before: '', after: " do you watch TV? - Because it's entertaining and educational.", accepted: ['why'], displayAnswer: 'Why', explanationVi: 'Câu trả lời bắt đầu bằng "Because..." → dùng "Why".' },
  { id: 'b4-7', num: 7, before: '', after: ' is your favourite cartoon character? - Mickey Mouse.', accepted: ['who'], displayAnswer: 'Who', explanationVi: 'Hỏi về nhân vật (Mickey Mouse) → dùng "Who".' },
  { id: 'b4-8', num: 8, before: '', after: ' can you find out the times and channels of TV programmes? - In TV schedule.', accepted: ['where'], displayAnswer: 'Where', explanationVi: 'Câu trả lời chỉ vị trí/nơi tìm thấy ("In TV schedule") → dùng "Where".' },
  { id: 'b4-9', num: 9, before: '', after: ' does the film last? - About an hour and a half.', accepted: ['how long'], displayAnswer: 'How long', explanationVi: 'Hỏi khoảng thời gian kéo dài ("About an hour and a half") → dùng "How long".' },
  { id: 'b4-10', num: 10, before: '', after: ' time do you spend watching TV? - One or two hours a day.', accepted: ['how much'], displayAnswer: 'How much', explanationVi: '"time" là danh từ không đếm được → dùng "How much".' },
];

export const U7_EX_B5_WH_MAKE: U7SentenceTask[] = [
  { id: 'b5-1', num: 1, prompt: 'My mother watches TV', underlined: 'two or three hours', accepted: ['how many hours does your mother watch tv every day', 'how long does your mother watch tv every day'], displayAnswer: 'How many hours does your mother watch TV every day?', explanationVi: 'Hỏi số giờ (đếm được) hoặc thời lượng: "How many hours / How long does your mother watch TV every day?" (gốc có "every day").' },
  { id: 'b5-2', num: 2, prompt: 'I usually watch TV', underlined: 'in the evening', accepted: ['when do you usually watch tv'], displayAnswer: 'When do you usually watch TV?', explanationVi: '"in the evening" chỉ thời gian → dùng "When", đổi "I" thành "you".' },
  { id: 'b5-3', num: 3, prompt: 'Many children like cartoons', underlined: 'because they are funny', accepted: ['why do many children like cartoons'], displayAnswer: 'Why do many children like cartoons?', explanationVi: 'Phần gạch chân bắt đầu bằng "because" → dùng "Why + do + many children + like cartoons?".' },
  { id: 'b5-4', num: 4, prompt: 'There are ___ magazines in the bag.', underlined: 'eight', accepted: ['how many magazines are there in the bag'], displayAnswer: 'How many magazines are there in the bag?', explanationVi: 'Hỏi số lượng đếm được với "There are" → "How many + N(s) + are there...?".' },
  { id: 'b5-5', num: 5, prompt: 'They like ___ on weekends.', underlined: 'to dance', accepted: ['what do they like to do on weekends', 'what do they like doing on weekends'], displayAnswer: 'What do they like to do on weekends?', explanationVi: 'Hỏi hoạt động yêu thích → "What do they like to do on weekends?".' },
  { id: 'b5-6', num: 6, prompt: 'John finishes work', underlined: "at five o'clock", accepted: ['what time does john finish work', 'when does john finish work'], displayAnswer: 'What time does John finish work?', explanationVi: 'Giờ cụ thể ("at five o\'clock") → dùng "What time does John finish work?" (nhớ đưa "finishes" về "finish").' },
  { id: 'b5-7', num: 7, prompt: 'My parents have', underlined: 'two cars', accepted: ['how many cars do your parents have', 'what do your parents have'], displayAnswer: 'How many cars do your parents have?', explanationVi: 'Hỏi số lượng xe: "How many cars do your parents have?" (hoặc "What do your parents have?").' },
  { id: 'b5-8', num: 8, prompt: 'He studies ___ at the university.', underlined: 'piano', accepted: ['what does he study at the university'], displayAnswer: 'What does he study at the university?', explanationVi: 'Hỏi môn/nhạc cụ anh ấy học → "What does he study at the university?".' },
  { id: 'b5-9', num: 9, prompt: 'We have an English class ___ a week.', underlined: 'twice', accepted: ['how often do you have an english class', 'how many times a week do you have an english class'], displayAnswer: 'How often do you have an English class?', explanationVi: 'Tần suất ("twice a week") → dùng "How often do you have an English class?".' },
  { id: 'b5-10', num: 10, prompt: '___ is my favourite actor.', underlined: 'Tom', accepted: ['who is your favourite actor'], displayAnswer: 'Who is your favourite actor?', explanationVi: '"Tom" là chủ ngữ chỉ người → thay thẳng bằng "Who", đổi "my" thành "your".' },
];

export const U7_EX_B6_BOX = ['and', 'so', 'but', 'because', 'although', 'or'];

export const U7_EX_B6_CONJ_FILL: U7FillItem[] = [
  { id: 'b6-1', num: 1, before: 'We were late ', after: ' there was an accident.', accepted: ['because'], displayAnswer: 'because', explanationVi: 'Vế sau là nguyên nhân ("có tai nạn") → dùng "because".' },
  { id: 'b6-2', num: 2, before: '', after: " Jim doesn't like this game show, he watches it almost every Friday.", accepted: ['although'], displayAnswer: 'Although', explanationVi: 'Hai vế tương phản (không thích nhưng vẫn xem) và chỗ trống ở đầu câu → "Although".' },
  { id: 'b6-3', num: 3, before: "Nadia doesn't like to drive, ", after: ' she takes the bus everywhere.', accepted: ['so'], displayAnswer: 'so', explanationVi: 'Không thích lái xe → kết quả là đi xe buýt khắp nơi → dùng "so".' },
  { id: 'b6-4', num: 4, before: 'He is very rich, ', after: " he doesn't spend a lot of money.", accepted: ['but'], displayAnswer: 'but', explanationVi: 'Rất giàu ↔ không tiêu nhiều tiền (đối lập sau dấu phẩy) → dùng "but".' },
  { id: 'b6-5', num: 5, before: 'She likes swimming ', after: ' jogging.', accepted: ['and'], displayAnswer: 'and', explanationVi: 'Nối 2 sở thích ngang hàng → dùng "and".' },
  { id: 'b6-6', num: 6, before: 'Thomas was really hungry this morning ', after: " he didn't eat breakfast.", accepted: ['because'], displayAnswer: 'because', explanationVi: 'Nguyên nhân đói bụng là vì không ăn sáng → dùng "because".' },
  { id: 'b6-7', num: 7, before: 'I have a lot of homework to do, ', after: " I can't go to the cinema with you.", accepted: ['so'], displayAnswer: 'so', explanationVi: 'Nhiều bài tập → kết quả là không đi xem phim được → dùng "so".' },
  { id: 'b6-8', num: 8, before: 'The waiter was not very nice, ', after: ' the food was delicious.', accepted: ['but'], displayAnswer: 'but', explanationVi: 'Phục vụ không tốt ↔ đồ ăn lại rất ngon → dùng "but".' },
  { id: 'b6-9', num: 9, before: 'We enjoyed the film ', after: ' it had a sad ending.', accepted: ['although'], displayAnswer: 'although', explanationVi: 'Vẫn thích phim mặc dù cái kết buồn (không có dấu phẩy) → "although".' },
  { id: 'b6-10', num: 10, before: 'She went to see a doctor ', after: ' her back was painful.', accepted: ['because'], displayAnswer: 'because', explanationVi: 'Nguyên nhân đi khám bác sĩ là do đau lưng → dùng "because".' },
];

export const U7_EX_B7_CONJ_MCQ: U7McqItem[] = [
  { id: 'b7-1', num: 1, prompt: "Fruit tastes good ______ it's healthy for your body.", options: ['but', 'and', 'so', 'or'], correctIndex: 1, explanationVi: 'Hai ưu điểm bổ sung cùng chiều (ngon + tốt cho sức khỏe) → B. and.' },
  { id: 'b7-2', num: 2, prompt: "I want to buy a new jacket, ______ I don't have enough money.", options: ['and', 'so', 'but', 'because'], correctIndex: 2, explanationVi: 'Muốn mua ↔ không đủ tiền → C. but.' },
  { id: 'b7-3', num: 3, prompt: 'Linda is going to make a cake, ______ she needs some eggs and flour.', options: ['so', 'but', 'and', 'or'], correctIndex: 0, explanationVi: 'Định làm bánh → vì vậy cần trứng và bột → A. so.' },
  { id: 'b7-4', num: 4, prompt: 'We went for a walk ______ it was raining heavily.', options: ['because', 'although', 'therefore', 'However'], correctIndex: 1, explanationVi: 'Vẫn đi dạo mặc dù trời mưa to → B. although.' },
  { id: 'b7-5', num: 5, prompt: 'We can go to the pool ______ we can go horse-riding, whichever you prefer?', options: ['or', 'but', 'and', 'so'], correctIndex: 0, explanationVi: 'Có cụm "whichever you prefer" (tùy bạn chọn) → lựa chọn A. or.' },
  { id: 'b7-6', num: 6, prompt: "John likes funny movies ______ he doesn't like scary movies.", options: ['and', 'or', 'so', 'but'], correctIndex: 3, explanationVi: 'Thích phim hài ↔ không thích phim kinh dị → D. but.' },
  { id: 'b7-7', num: 7, prompt: "I'd like to see that Korean band ______ their music is pretty cool.", options: ['although', 'so', 'because', 'but'], correctIndex: 2, explanationVi: 'Lý do muốn xem nhóm nhạc Hàn là vì nhạc rất hay → C. because.' },
  { id: 'b7-8', num: 8, prompt: "I still cry at the end ______ I've seen this movie several times.", options: ['and', 'although', 'because', 'so'], correctIndex: 1, explanationVi: 'Vẫn khóc ở đoạn cuối mặc dù đã xem vài lần → B. although.' },
  { id: 'b7-9', num: 9, prompt: 'You must hurry ______ you will miss your train.', options: ['so', 'but', 'and', 'or'], correctIndex: 3, explanationVi: 'Cấu trúc cảnh báo "nhanh lên, nếu không thì sẽ lỡ tàu" → D. or.' },
  { id: 'b7-10', num: 10, prompt: 'His chocolate was too hot, ______ he put some cold milk in it.', options: ['so', 'but', 'because', 'although'], correctIndex: 0, explanationVi: 'Sô-cô-la quá nóng → vì vậy anh ấy cho thêm sữa lạnh → A. so.' },
];

export const U7_EX_B8_JOIN: U7SentenceTask[] = [
  { id: 'b8-1', num: 1, prompt: 'Peter missed the bus. He was late for school.', bracketWord: 'because', accepted: ['peter was late for school because he missed the bus', 'because peter missed the bus, he was late for school'], displayAnswer: 'Peter was late for school because he missed the bus.', explanationVi: '"because" đứng ngay trước mệnh đề nguyên nhân ("missed the bus").' },
  { id: 'b8-2', num: 2, prompt: 'Julie has a guitar. She plays it very well.', bracketWord: 'and', accepted: ['julie has a guitar, and she plays it very well', 'julie has a guitar and she plays it very well', 'julie has a guitar and plays it very well'], displayAnswer: 'Julie has a guitar, and she plays it very well.', explanationVi: 'Nối hai ý bổ sung bằng ", and".' },
  { id: 'b8-3', num: 3, prompt: 'I need to study hard. I can get a good score on the test.', bracketWord: 'so', accepted: ['i need to study hard, so i can get a good score on the test', 'i need to study hard so i can get a good score on the test'], displayAnswer: 'I need to study hard, so I can get a good score on the test.', explanationVi: 'Học chăm → kết quả đạt điểm cao → nối bằng ", so".' },
  { id: 'b8-4', num: 4, prompt: "He seemed a friendly person. I didn't like him.", bracketWord: 'although', accepted: ["although he seemed a friendly person, i didn't like him", "i didn't like him although he seemed a friendly person"], displayAnswer: "Although he seemed a friendly person, I didn't like him.", explanationVi: '"Although" đặt trước vế nhượng bộ ("he seemed a friendly person").' },
  { id: 'b8-5', num: 5, prompt: 'The food looks delicious. It tastes horrible.', bracketWord: 'but', accepted: ['the food looks delicious, but it tastes horrible', 'the food looks delicious but it tastes horrible', 'the food looks delicious but tastes horrible'], displayAnswer: 'The food looks delicious, but it tastes horrible.', explanationVi: 'Nhìn ngon ↔ vị kinh khủng → nối bằng ", but".' },
  { id: 'b8-6', num: 6, prompt: 'Mason fell. The floor was wet.', bracketWord: 'because', accepted: ['mason fell because the floor was wet', 'because the floor was wet, mason fell'], displayAnswer: 'Mason fell because the floor was wet.', explanationVi: 'Nguyên nhân bị ngã là do sàn nhà ướt → đặt "because" trước "the floor was wet".' },
  { id: 'b8-7', num: 7, prompt: 'Anna took a part-time job. She needed some money.', bracketWord: 'so', accepted: ['anna needed some money, so she took a part-time job', 'anna needed some money so she took a part-time job'], displayAnswer: 'Anna needed some money, so she took a part-time job.', explanationVi: 'Đảo nguyên nhân lên trước ("needed some money"), kết quả sau ", so" ("took a part-time job").' },
  { id: 'b8-8', num: 8, prompt: 'My father always reads the newspaper in the morning. He always watches the TV news in the morning.', bracketWord: 'and', accepted: ['my father always reads the newspaper and watches the tv news in the morning', 'my father always reads the newspaper in the morning, and he always watches the tv news in the morning', 'my father always reads the newspaper in the morning and he always watches the tv news in the morning'], displayAnswer: 'My father always reads the newspaper and watches the TV news in the morning.', explanationVi: 'Cùng chủ ngữ & thời gian → gộp gọn bằng "and" (hoặc giữ nguyên 2 mệnh đề nối bởi ", and").' },
];

/* ============================================================================
 * 4. BÀI TẬP C. READING COMPREHENSION (TẬP 2 · TR. 12–14)
 * ============================================================================ */

export const U7_EX_C1_PASSAGE =
  'Hi, my name is David and my favorite activity is watching television. I often watch cartoon on Disney channel. My grandmother and mother enjoy watching craft programs. My daddy and brother love watching football matches on the sport channel. I usually spend about 2 hours a day watching TV. In the evening, all the family gather and watch the news and weather forecast. Today, the weatherman announces that it will rain tomorrow. I think you should bring along a raincoat before going out.';

export const U7_EX_C1_QA: { id: string; num: number; q: string; modelAnswer: string; evidenceEn: string }[] = [
  { id: 'c1-1', num: 1, q: "What is David's hobby?", modelAnswer: 'His hobby / favorite activity is watching television (watching TV).', evidenceEn: '"...my favorite activity is watching television."' },
  { id: 'c1-2', num: 2, q: 'What does he often watch on Disney channel?', modelAnswer: 'He often watches cartoon(s) on Disney channel.', evidenceEn: '"I often watch cartoon on Disney channel."' },
  { id: 'c1-3', num: 3, q: 'Who love watching football matches?', modelAnswer: "David's daddy and brother love watching football matches.", evidenceEn: '"My daddy and brother love watching football matches on the sport channel."' },
  { id: 'c1-4', num: 4, q: 'How many hours a day does David spend watching TV?', modelAnswer: 'He usually spends about 2 hours a day watching TV.', evidenceEn: '"I usually spend about 2 hours a day watching TV."' },
  { id: 'c1-5', num: 5, q: 'Will it rain tomorrow?', modelAnswer: 'Yes, it will.', evidenceEn: '"Today, the weatherman announces that it will rain tomorrow."' },
];

export const U7_EX_C2_PASSAGE_PARTS = [
  'Television first came some sixty years ago in the 1950s. Nowadays, it is one of the most ',
  ' sources of entertainment for both the old and the young. Television brings ',
  ' for children, world news, music and many other ',
  '. If someone likes sports, he can just choose the right sports ',
  '. It is not difficult for us to see why ',
  ' is a TV set in almost every home today.',
];

export const U7_EX_C2_MCQ: U7McqItem[] = [
  { id: 'c2-1', num: 1, prompt: 'Chỗ trống (1): one of the most ______ sources of entertainment', options: ['cheap', 'expressive', 'popular', 'exciting'], correctIndex: 2, explanationVi: '"popular" (phổ biến) hợp nghĩa nhất: một trong những nguồn giải trí phổ biến nhất.' },
  { id: 'c2-2', num: 2, prompt: 'Chỗ trống (2): brings ______ for children', options: ['news', 'cartoons', 'sports', 'plays'], correctIndex: 1, explanationVi: 'Dành cho trẻ em ("for children") → B. cartoons (phim hoạt hình).' },
  { id: 'c2-3', num: 3, prompt: 'Chỗ trống (3): world news, music and many other ______', options: ['sets', 'reports', 'channels', 'programmes'], correctIndex: 3, explanationVi: 'Tin tức, âm nhạc và nhiều chương trình khác → D. programmes.' },
  { id: 'c2-4', num: 4, prompt: 'Chỗ trống (4): choose the right sports ______', options: ['athletes', 'channel', 'time', 'studio'], correctIndex: 1, explanationVi: 'Chọn đúng kênh thể thao → B. channel ("sports channel").' },
  { id: 'c2-5', num: 5, prompt: 'Chỗ trống (5): why ______ is a TV set in almost every home today', options: ['it', 'this', 'that', 'there'], correctIndex: 3, explanationVi: 'Cấu trúc "there is + danh từ số ít" (có một chiếc TV ở hầu hết mọi nhà) → D. there.' },
];

export const U7_EX_C3_PROFILES = [
  {
    name: 'STEVE, 12',
    badgeColor: '#0284C7',
    hours: '3–4 giờ/ngày',
    fav: 'Cartoon Network',
    text: "I love TV. The first thing I do when I wake up is to switch it on. My favourite channel is the Cartoon Network. I watch TV three or four hours a day. My parents think it is too much and they are always telling me to study, read a little or do a sport. But TV is my favourite hobby. I'm addicted to my favourite programmes.",
  },
  {
    name: 'KATE, 14',
    badgeColor: '#059669',
    hours: '2–3 giờ/ngày',
    fav: 'News, Documentaries, Comedies & Thrillers',
    text: "I know most teens don't like watching the news, but I do. I like to know what is happening around our world. I also enjoy documentaries, especially about wildlife. I'm very curious about the way animals live and how to preserve their habitats. I also enjoy watching live shows and films, mostly comedies and thrillers. I watch TV two or three hours a day.",
  },
  {
    name: 'RACHEL, 18',
    badgeColor: '#7C3AED',
    hours: '1–2 giờ/ngày',
    fav: 'News & Game shows',
    text: 'I like TV as everybody else, but now that I\'m older I am more selective about the programmes I watch. I used to watch cartoons all the time. Now I like watching the news and some game shows like "Who wants to be a millionaire?", so I don\'t really spend too much time in front of the box, an hour or two a day... Some programmes are educational and help us to use our imagination, but many are full of violence.',
  },
];

export const U7_EX_C3_TF: { id: string; num: number; statement: string; answer: 'T' | 'F'; explanationVi: string }[] = [
  { id: 'c3-1', num: 1, statement: 'Steve is obsessed about TV.', answer: 'T', explanationVi: 'Đúng — Steve nói: "The first thing I do when I wake up is to switch it on... I\'m addicted to my favourite programmes."' },
  { id: 'c3-2', num: 2, statement: "Kate doesn't like watching the news.", answer: 'F', explanationVi: 'Sai — Kate nói ngược lại: "I know most teens don\'t like watching the news, but I do."' },
  { id: 'c3-3', num: 3, statement: "Rachel's favourite programmes are still cartoons.", answer: 'F', explanationVi: 'Sai — Rachel từng xem hoạt hình trước đây ("used to"), bây giờ cô thích news và game shows.' },
  { id: 'c3-4', num: 4, statement: 'Kate likes watching things that make her laugh.', answer: 'T', explanationVi: 'Đúng — Kate thích xem phim hài ("mostly comedies").' },
  { id: 'c3-5', num: 5, statement: 'Rachel is the teenager who watches less TV of the three.', answer: 'T', explanationVi: 'Đúng — Rachel chỉ xem 1–2 giờ/ngày (ít hơn Kate 2–3 giờ và Steve 3–4 giờ).' },
  { id: 'c3-6', num: 6, statement: "Steve's parents don't mind that he watches so much TV.", answer: 'F', explanationVi: 'Sai — Bố mẹ Steve nghĩ cậu xem quá nhiều và luôn nhắc đi học, đọc sách hoặc chơi thể thao.' },
];

/* ============================================================================
 * 5. BÀI TẬP D. WRITING (TẬP 2 · TR. 14–15)
 * ============================================================================ */

export const U7_EX_D1_REORDER: U7SentenceTask[] = [
  { id: 'd1-1', num: 1, prompt: 'on / turn / can / TV / the / I / now / ?', accepted: ['can i turn on the tv now', 'can i turn the tv on now'], displayAnswer: 'Can I turn on the TV now?', explanationVi: 'Câu xin phép: Can + I + turn on the TV + now?' },
  { id: 'd1-2', num: 2, prompt: 'on / what / tonight / television / is / ?', accepted: ['what is on television tonight'], displayAnswer: 'What is on television tonight?', explanationVi: 'Hỏi tối nay chiếu gì trên TV: What is on television tonight?' },
  { id: 'd1-3', num: 3, prompt: 'favourite / actor / your / who / is / ?', accepted: ['who is your favourite actor'], displayAnswer: 'Who is your favourite actor?', explanationVi: 'Hỏi diễn viên yêu thích: Who is your favourite actor?' },
  { id: 'd1-4', num: 4, prompt: 'Tina / time / television / does / how much / spend / watching / ?', accepted: ['how much time does tina spend watching television'], displayAnswer: 'How much time does Tina spend watching television?', explanationVi: 'Cấu trúc: How much time + does + S + spend + V-ing?' },
  { id: 'd1-5', num: 5, prompt: 'they / like / do / why / cartoons / to watch / ?', accepted: ['why do they like to watch cartoons'], displayAnswer: 'Why do they like to watch cartoons?', explanationVi: 'Câu hỏi Wh: Why + do + they + like to watch cartoons?' },
  { id: 'd1-6', num: 6, prompt: 'best / television / like / what / do / you / programme / ?', accepted: ['what television programme do you like best'], displayAnswer: 'What television programme do you like best?', explanationVi: 'Cụm từ để hỏi: What television programme + do you like best?' },
  { id: 'd1-7', num: 7, prompt: 'start / the / game show / what time / does / ?', accepted: ['what time does the game show start'], displayAnswer: 'What time does the game show start?', explanationVi: 'Hỏi giờ bắt đầu: What time + does + the game show + start?' },
  { id: 'd1-8', num: 8, prompt: 'Liz / go to / how often / does / the cinema / ?', accepted: ['how often does liz go to the cinema'], displayAnswer: 'How often does Liz go to the cinema?', explanationVi: 'Hỏi tần suất: How often + does + Liz + go to the cinema?' },
  { id: 'd1-9', num: 9, prompt: 'you / watch / do / television / usually / when / ?', accepted: ['when do you usually watch television'], displayAnswer: 'When do you usually watch television?', explanationVi: 'Trạng từ tần suất "usually" đứng trước động từ thường "watch".' },
  { id: 'd1-10', num: 10, prompt: 'tonight / ? / a football match / watching / on TV / How about', accepted: ['how about watching a football match on tv tonight'], displayAnswer: 'How about watching a football match on TV tonight?', explanationVi: 'Câu gợi ý: How about + V-ing (watching) + ... + tonight?' },
];

export const U7_EX_D2_REWRITE: U7SentenceTask[] = [
  { id: 'd2-1', num: 1, prompt: 'What programme do you like best?', starter: "What's", accepted: ["what's your favourite programme", "what's your favorite programme", "what's your favourite tv programme"], displayAnswer: "What's your favourite programme?", explanationVi: 'like ... best ↔ favourite.' },
  { id: 'd2-2', num: 2, prompt: "It's not good for children to spend too much time watching television.", starter: 'Children', accepted: ["children shouldn't spend too much time watching television", 'children should not spend too much time watching television'], displayAnswer: "Children shouldn't spend too much time watching television.", explanationVi: "It's not good for sb to V ↔ Sb shouldn't + V." },
  { id: 'd2-3', num: 3, prompt: 'Jim loves animals, so he likes to watch Animal programme.', starter: 'Jim likes to watch Animal programme', accepted: ['jim likes to watch animal programme because he loves animals'], displayAnswer: 'Jim likes to watch Animal programme because he loves animals.', explanationVi: 'Đổi từ "so" (kết quả) sang "because" (nguyên nhân).' },
  { id: 'd2-4', num: 4, prompt: 'My sister likes to watch cartoons.', starter: 'My sister is fond', accepted: ['my sister is fond of watching cartoons'], displayAnswer: 'My sister is fond of watching cartoons.', explanationVi: 'like to V ↔ be fond of + V-ing.' },
  { id: 'd2-5', num: 5, prompt: 'How much time do you spend watching television?', starter: 'How many', accepted: ['how many hours do you spend watching television'], displayAnswer: 'How many hours do you spend watching television?', explanationVi: 'How much time (không đếm được) ↔ How many hours (đếm được số nhiều).' },
  { id: 'd2-6', num: 6, prompt: 'How about going to the cinema tonight?', starter: 'Shall', accepted: ['shall we go to the cinema tonight'], displayAnswer: 'Shall we go to the cinema tonight?', explanationVi: 'How about + V-ing? ↔ Shall we + V (nguyên thể)?' },
  { id: 'd2-7', num: 7, prompt: 'The film is not as interesting as the novel was.', starter: 'The novel was much', accepted: ['the novel was much more interesting than the film', 'the novel was much more interesting than the film is'], displayAnswer: 'The novel was much more interesting than the film.', explanationVi: 'So sánh không bằng (not as ... as) → so sánh hơn (much more interesting than).' },
  { id: 'd2-8', num: 8, prompt: "Although he seemed a friendly person, I didn't like him.", starter: 'He seemed', accepted: ["he seemed a friendly person, but i didn't like him", "he seemed a friendly person but i didn't like him"], displayAnswer: "He seemed a friendly person, but I didn't like him.", explanationVi: 'Bỏ "Although" ở đầu câu và thêm ", but" ở giữa hai mệnh đề.' },
  { id: 'd2-9', num: 9, prompt: 'Peter likes watching programmes that make him laugh.', starter: 'Peter enjoys', accepted: ['peter enjoys watching comedies', 'peter enjoys watching funny programmes', 'peter enjoys watching programmes that make him laugh'], displayAnswer: 'Peter enjoys watching comedies.', explanationVi: '"programmes that make him laugh" chính là "comedies" (phim/chương trình hài); cũng chấp nhận "enjoys watching programmes that make him laugh".' },
  { id: 'd2-10', num: 10, prompt: 'Watching too much TV is not good.', starter: "It's not", accepted: ["it's not good to watch too much tv"], displayAnswer: "It's not good to watch too much TV.", explanationVi: 'V-ing + is not good ↔ It\'s not good + to V.' },
];

/* ============================================================================
 * 6. TEST FOR UNIT 7 — PHẦN I ĐẾN PHẦN X (TẬP 2 · TR. 16–20)
 * ============================================================================ */

export const U7_TEST_I_PHONETICS: U7McqItem[] = [
  { id: 't1-1', num: 1, prompt: 'Chọn từ có phần gạch chân phát âm khác:', options: ['thirty', 'healthy', 'there', 'birthday'], correctIndex: 2, explanationVi: '"there" đọc /ð/; thirty, healthy, birthday đọc /θ/.' },
  { id: 't1-2', num: 2, prompt: 'Chọn từ có phần gạch chân phát âm khác:', options: ['weather', 'think', 'this', 'feather'], correctIndex: 1, explanationVi: '"think" đọc /θ/; weather, this, feather đọc /ð/.' },
  { id: 't1-3', num: 3, prompt: 'Chọn từ có phần gạch chân phát âm khác:', options: ['throw', 'although', 'them', 'breathe'], correctIndex: 0, explanationVi: '"throw" đọc /θ/; although, them, breathe đọc /ð/.' },
  { id: 't1-4', num: 4, prompt: 'Chọn từ có phần gạch chân phát âm khác:', options: ['tooth', 'warmth', 'theme', 'that'], correctIndex: 3, explanationVi: '"that" đọc /ð/; tooth, warmth, theme đọc /θ/.' },
  { id: 't1-5', num: 5, prompt: 'Chọn từ có phần gạch chân phát âm khác:', options: ['their', 'then', 'worth', 'though'], correctIndex: 2, explanationVi: '"worth" đọc /θ/; their, then, though đọc /ð/.' },
  { id: 't1-6', num: 6, prompt: 'Chọn từ có phần gạch chân phát âm khác:', options: ['theater', 'thank', 'there', 'thirty'], correctIndex: 2, explanationVi: '"there" đọc /ð/; theater, thank, thirty đọc /θ/.' },
  { id: 't1-7', num: 7, prompt: 'Chọn từ có phần gạch chân "a" phát âm khác:', options: ['game', 'animal', 'channel', 'national'], correctIndex: 0, explanationVi: '"game" đọc /eɪ/; animal, channel, national đọc /æ/.' },
  { id: 't1-8', num: 8, prompt: 'Chọn từ có phần gạch chân "ch" phát âm khác:', options: ['watch', 'channel', 'children', 'schedule'], correctIndex: 3, explanationVi: '"schedule" /ˈskedʒuːl/ (hoặc /ˈʃedʒuːl/) không đọc /tʃ/; watch, channel, children đọc /tʃ/.' },
  { id: 't1-9', num: 9, prompt: 'Chọn từ có phần gạch chân "o" phát âm khác:', options: ['programme', 'show', 'popular', 'home'], correctIndex: 2, explanationVi: '"popular" đọc /ɒ/; programme, show, home đọc /əʊ/.' },
  { id: 't1-10', num: 10, prompt: 'Chọn từ có phần gạch chân "ea/ee" phát âm khác:', options: ['newsreader', 'weather', 'week', 'leave'], correctIndex: 1, explanationVi: '"weather" đọc /e/; newsreader, week, leave đọc /iː/.' },
];

export const U7_TEST_II_MCQ: U7McqItem[] = [
  { id: 't2-1', num: 1, prompt: "Could you turn ______ the volume please? I can't hear that singer very well.", options: ['up', 'down', 'on', 'off'], correctIndex: 0, explanationVi: 'Không nghe rõ → "turn up" (vặn to âm lượng lên).' },
  { id: 't2-2', num: 2, prompt: 'I like watching the news ______ I want to know what is happening around the world.', options: ['and', 'so', 'but', 'because'], correctIndex: 3, explanationVi: 'Giải thích lý do xem tin tức → D. because.' },
  { id: 't2-3', num: 3, prompt: 'The film was ______. I fell asleep in the middle.', options: ['scary', 'boring', 'exciting', 'entertaining'], correctIndex: 1, explanationVi: 'Ngủ gật giữa chừng vì bộ phim quá chán → B. boring.' },
  { id: 't2-4', num: 4, prompt: 'The story was very interesting ______ very sad.', options: ['and', 'or', 'so', 'but'], correctIndex: 3, explanationVi: 'Thú vị ↔ rất buồn → D. but (SGK in lỗi chính tả "hut" thay vì "but").' },
  { id: 't2-5', num: 5, prompt: 'My family and I often spend time ______ television in the evening.', options: ['seeing', 'watching', 'looking', 'viewing'], correctIndex: 1, explanationVi: 'Cụm cố định: spend time + V-ing + "watch television" → B. watching.' },
  { id: 't2-6', num: 6, prompt: 'Children should watch ______ programs.', options: ['remote', 'national', 'educational', 'clumsy'], correctIndex: 2, explanationVi: 'Trẻ em nên xem các chương trình mang tính giáo dục → C. educational.' },
  { id: 't2-7', num: 7, prompt: "The ______ will announce tomorrow's weather on TV at 7:30 tonight.", options: ['weatherman', 'newsreader', 'comedian', 'MC'], correctIndex: 0, explanationVi: 'Người thông báo thời tiết trên TV là "weatherman".' },
  { id: 't2-8', num: 8, prompt: 'We will go to the cinema to see a ______.', options: ['game', 'film', 'show', 'racing'], correctIndex: 1, explanationVi: 'Đến rạp chiếu phim để xem phim → B. film.' },
  { id: 't2-9', num: 9, prompt: 'She uses the ______ control to change the channel.', options: ['local', 'musical', 'remote', 'main'], correctIndex: 2, explanationVi: 'Cụm danh từ: remote control (điều khiển từ xa).' },
  { id: 't2-10', num: 10, prompt: 'His mother enjoys ______ this series on television.', options: ['watching', 'going', 'doing', 'having'], correctIndex: 0, explanationVi: 'enjoy + V-ing; xem phim bộ dùng "watching".' },
  { id: 't2-11', num: 11, prompt: "It's funny ______ the comedy.", options: ['watch', 'watching', 'to watch', 'watched'], correctIndex: 2, explanationVi: "Cấu trúc: It's + adj + to V → C. to watch." },
  { id: 't2-12', num: 12, prompt: 'He is tired ______ he stayed up late watching TV.', options: ['so', 'and', 'but', 'because'], correctIndex: 3, explanationVi: 'Mệt vì thức khuya xem TV → D. because.' },
  { id: 't2-13', num: 13, prompt: 'It started to rain, ______ we went inside and watched TV.', options: ['and', 'although', 'so', 'because'], correctIndex: 2, explanationVi: 'Trời bắt đầu mưa → kết quả là vào nhà xem TV → C. so.' },
  { id: 't2-14', num: 14, prompt: "The football match is on at 2 a.m, ______ I can't watch it.", options: ['so', 'although', 'but', 'then'], correctIndex: 0, explanationVi: 'Trận bóng lúc 2 giờ sáng → kết quả không xem được → A. so.' },
  { id: 't2-15', num: 15, prompt: "______ does the movie start? At 9 o'clock.", options: ['Where', 'What', 'Why', 'When'], correctIndex: 3, explanationVi: 'Hỏi thời gian ("At 9 o\'clock") → D. When.' },
];

export const U7_TEST_III_VERBS: U7FillItem[] = [
  { id: 't3-1', num: 1, before: 'You should (do) ', after: ' your homework, instead of (watch) ______ TV before dinner. (Nhập 2 từ cách nhau bằng dấu /)', accepted: ['do / watching', 'do/watching', 'do, watching'], displayAnswer: 'do / watching', explanationVi: 'Sau "should" + V nguyên thể (do); sau giới từ "instead of" + V-ing (watching).' },
  { id: 't3-2', num: 2, before: 'She turned on the radio because she wanted ', after: ' (listen) to some music.', accepted: ['to listen'], displayAnswer: 'to listen', explanationVi: 'Cấu trúc: want + to V → to listen.' },
  { id: 't3-3', num: 3, before: '', after: ' (you/ watch) the news on TV last night?', accepted: ['did you watch'], displayAnswer: 'Did you watch', explanationVi: '"last night" là dấu hiệu Quá khứ đơn → Did you watch.' },
  { id: 't3-4', num: 4, before: 'What ', after: ' (you/ do) tonight, Hung?', accepted: ['are you doing', 'will you do'], displayAnswer: 'are you doing', explanationVi: 'Hỏi kế hoạch tối nay ("tonight") → Hiện tại tiếp diễn "are you doing" (hoặc "will you do").' },
  { id: 't3-5', num: 5, before: 'Which programme ', after: ' (Linda/ like) best?', accepted: ['does linda like'], displayAnswer: 'does Linda like', explanationVi: 'Hỏi sở thích ở Hiện tại đơn, chủ ngữ số ít "Linda" → does Linda like.' },
  { id: 't3-6', num: 6, before: 'A new series of wildlife programmes ', after: " (be) on at 9 o'clock Monday evenings.", accepted: ['is'], displayAnswer: 'is', explanationVi: 'Chủ ngữ chính là "A new series" (một loạt/chương trình số ít) → chia "is".' },
  { id: 't3-7', num: 7, before: 'My father never ', after: ' (watch) romantic films on television.', accepted: ['watches'], displayAnswer: 'watches', explanationVi: '"never" + chủ ngữ số ít "My father" + tận cùng -ch → watches.' },
  { id: 't3-8', num: 8, before: 'The movie ', after: ' at 8.15 this evening. (start)', accepted: ['starts'], displayAnswer: 'starts', explanationVi: 'Lịch chiếu phim cố định chia Hiện tại đơn → starts.' },
];

export const U7_TEST_IV_PREPS: U7FillItem[] = [
  { id: 't4-1', num: 1, before: 'Sam turned ', after: ' the television to watch the news.', accepted: ['on'], displayAnswer: 'on', explanationVi: 'turn on: bật TV lên để xem tin tức.' },
  { id: 't4-2', num: 2, before: 'What is ', after: ' TV tonight?', accepted: ['on'], displayAnswer: 'on', explanationVi: 'on TV: chiếu trên truyền hình.' },
  { id: 't4-3', num: 3, before: 'You can see how people compete with each other ', after: ' a game show.', accepted: ['in', 'on'], displayAnswer: 'in', explanationVi: 'Thi đấu trong một trò chơi truyền hình: in a game show.' },
  { id: 't4-4', num: 4, before: 'The Wingless Penguin is ', after: " Disney channel, 8 o'clock Friday night.", accepted: ['on'], displayAnswer: 'on', explanationVi: 'Chiếu trên kênh truyền hình nào dùng giới từ "on" (on Disney channel).' },
  { id: 't4-5', num: 5, before: 'Comedies help people relax ', after: ' a hard working day.', accepted: ['after'], displayAnswer: 'after', explanationVi: 'Thư giãn sau một ngày làm việc vất vả → after.' },
  { id: 't4-6', num: 6, before: 'My sister is interested ', after: ' Nature programme.', accepted: ['in'], displayAnswer: 'in', explanationVi: 'Cụm tính từ cố định: be interested in (quan tâm/thích thú).' },
  { id: 't4-7', num: 7, before: 'The talk show is ', after: " 8 o'clock to 10 o'clock.", accepted: ['from'], displayAnswer: 'from', explanationVi: 'Cấu trúc chỉ khung giờ: from ... to ... (từ 8 giờ đến 10 giờ).' },
  { id: 't4-8', num: 8, before: 'Cartoons often use animals ', after: ' the main characters.', accepted: ['as'], displayAnswer: 'as', explanationVi: 'use ... as ...: dùng động vật làm các nhân vật chính.' },
];

export const U7_TEST_V_MISTAKES: U7MistakeItem[] = [
  { id: 't5-1', num: 1, sentence: 'Children now spend much time on the internet than watching television.', wrong: 'much', acceptedFixes: ['more', 'much -> more', 'much → more'], displayFix: 'much → more', explanationVi: 'Có "than" (so sánh hơn) → đổi "much" thành "more".' },
  { id: 't5-2', num: 2, sentence: 'There are a lot interesting programmes on Disney Channel.', wrong: 'a lot', acceptedFixes: ['a lot of', 'lots of', 'a lot -> a lot of'], displayFix: 'a lot → a lot of', explanationVi: 'Trước danh từ phải dùng "a lot of" (hoặc "lots of"), thiếu giới từ "of".' },
  { id: 't5-3', num: 3, sentence: 'I am really boring when I watch documentaries.', wrong: 'boring', acceptedFixes: ['bored', 'boring -> bored'], displayFix: 'boring → bored', explanationVi: 'Chỉ cảm xúc của người ("I") dùng tính từ đuôi -ed → "bored".' },
  { id: 't5-4', num: 4, sentence: 'I enjoy to watch game shows or films.', wrong: 'to watch', acceptedFixes: ['watching', 'to watch -> watching'], displayFix: 'to watch → watching', explanationVi: 'Sau "enjoy" luôn dùng V-ing → "watching".' },
  { id: 't5-5', num: 5, sentence: 'How many hour a day do you watch television?', wrong: 'hour', acceptedFixes: ['hours', 'hour -> hours'], displayFix: 'hour → hours', explanationVi: 'Sau "How many" luôn là danh từ đếm được số nhiều → "hours".' },
  { id: 't5-6', num: 6, sentence: "Children shouldn't spend too much time to watch television.", wrong: 'to watch', acceptedFixes: ['watching', 'to watch -> watching'], displayFix: 'to watch → watching', explanationVi: 'Cấu trúc: spend + thời gian + V-ing → "watching".' },
  { id: 't5-7', num: 7, sentence: 'Many people work hardly every day to produce TV programmes.', wrong: 'hardly', acceptedFixes: ['hard', 'hardly -> hard'], displayFix: 'hardly → hard', explanationVi: '"hardly" nghĩa là hầu như không; làm việc chăm chỉ phải dùng trạng từ "hard".' },
  { id: 't5-8', num: 8, sentence: "The 7 o'clock news tell people what is happening in the world.", wrong: 'tell', acceptedFixes: ['tells', 'tell -> tells'], displayFix: 'tell → tells', explanationVi: '"news" (tin tức) là danh từ không đếm được (luôn chia số ít) → "tells".' },
];

export const U7_TEST_VI_WORDFORM: U7FillItem[] = [
  { id: 't6-1', num: 1, before: 'The programme attracted millions of ', after: '. (view)', accepted: ['viewers'], displayAnswer: 'viewers', explanationVi: 'Sau "millions of" là danh từ số nhiều chỉ người xem → viewers.' },
  { id: 't6-2', num: 2, before: 'That detective film was very ', after: '. (bore)', accepted: ['boring'], displayAnswer: 'boring', explanationVi: 'Mô tả tính chất bộ phim → tính từ đuôi -ing: boring.' },
  { id: 't6-3', num: 3, before: 'Many teenagers are ', after: ' in pop music. (interest)', accepted: ['interested'], displayAnswer: 'interested', explanationVi: 'Cụm từ: be interested in (yêu thích/quan tâm).' },
  { id: 't6-4', num: 4, before: 'He was sitting ', after: ' in the living room, watching TV. (comfort)', accepted: ['comfortably'], displayAnswer: 'comfortably', explanationVi: 'Bổ nghĩa cho động từ "sitting" → trạng từ: comfortably (một cách thoải mái).' },
  { id: 't6-5', num: 5, before: 'The boy band will give two ', after: ' this week. (perform)', accepted: ['performances'], displayAnswer: 'performances', explanationVi: 'Sau số từ "two" là danh từ số nhiều → performances (buổi biểu diễn).' },
  { id: 't6-6', num: 6, before: 'On the game show Family Feud, ', after: ' are family members. (contest)', accepted: ['contestants'], displayAnswer: 'contestants', explanationVi: 'Động từ "are" số nhiều + chỉ người chơi trong game show → contestants (thí sinh).' },
  { id: 't6-7', num: 7, before: 'Cable television offers a wide ', after: ' of special programs. (vary)', accepted: ['variety'], displayAnswer: 'variety', explanationVi: 'Cụm từ hay gặp: a wide variety of (nhiều thể loại đa dạng).' },
  { id: 't6-8', num: 8, before: 'TV stations show foreign series because they can buy them ', after: '. (cheap)', accepted: ['cheaply'], displayAnswer: 'cheaply', explanationVi: 'Bổ nghĩa cho động từ "buy" → trạng từ: cheaply (với giá rẻ).' },
];

export const U7_TEST_VII_WH: U7SentenceTask[] = [
  { id: 't7-1', num: 1, prompt: 'That newsreader usually gets to work', underlined: 'by bus', accepted: ['how does that newsreader usually get to work'], displayAnswer: 'How does that newsreader usually get to work?', explanationVi: 'Hỏi phương tiện đi lại ("by bus") → dùng "How".' },
  { id: 't7-2', num: 2, prompt: 'The news programme often finishes', underlined: "at eight o'clock", accepted: ['what time does the news programme often finish', 'when does the news programme often finish'], displayAnswer: 'What time does the news programme often finish?', explanationVi: 'Hỏi giờ kết thúc cụ thể → "What time does the news programme often finish?".' },
  { id: 't7-3', num: 3, prompt: 'The game show lasted', underlined: 'for two hours and a half', accepted: ['how long did the game show last'], displayAnswer: 'How long did the game show last?', explanationVi: '"lasted" ở Quá khứ đơn → trợ động từ "did" + "last" nguyên thể.' },
  { id: 't7-4', num: 4, prompt: 'My family usually ___ in the evening.', underlined: 'watches TV', accepted: ['what does your family usually do in the evening'], displayAnswer: 'What does your family usually do in the evening?', explanationVi: 'Hỏi hoạt động thường làm → "What does your family usually do in the evening?".' },
  { id: 't7-5', num: 5, prompt: "They didn't have a TV set", underlined: 'because it was too expensive', accepted: ["why didn't they have a tv set", 'why did they not have a tv set'], displayAnswer: "Why didn't they have a TV set?", explanationVi: 'Lý do quá khứ phủ định → "Why didn\'t they have a TV set?".' },
  { id: 't7-6', num: 6, prompt: 'Watching too much TV is not good', underlined: 'because it hurts your eyes', accepted: ['why is watching too much tv not good', "why isn't watching too much tv good"], displayAnswer: 'Why is watching too much TV not good?', explanationVi: 'Đảo "is" lên trước chủ ngữ "watching too much TV".' },
  { id: 't7-7', num: 7, prompt: 'The programme is on', underlined: 'the Disney Channel', accepted: ['which channel is the programme on', 'what channel is the programme on'], displayAnswer: 'Which channel is the programme on?', explanationVi: 'Hỏi chiếu trên kênh nào → "Which channel / What channel is the programme on?".' },
  { id: 't7-8', num: 8, prompt: '___ enjoy the programme.', underlined: 'Both parents and their children', accepted: ['who enjoys the programme', 'who enjoy the programme'], displayAnswer: 'Who enjoys the programme?', explanationVi: 'Hỏi chủ ngữ chỉ người → thay thẳng bằng "Who" + V(s) (Who enjoys the programme?).' },
];

export const U7_TEST_VIII_PASSAGE_PARTS = [
  "Television is one of man's most important ",
  ' of communication. It brings pictures and sounds from around the world into millions of homes. Through television, home viewers can see and learn ',
  " people, places and things in faraway lands. TV even takes its viewers out of this world. It brings them coverage of America's astronauts as the astronauts explore ",
  ' space. In addition to all these things, television brings its viewers a steady stream of programmes that are ',
  ' to entertain. In fact, TV provides many ',
  ' entertainment programs than any other kind. The programmes include dramas, comedies, sports, and ',
  ' pictures.',
];

export const U7_TEST_VIII_CLOZE: U7McqItem[] = [
  { id: 't8-1', num: 1, prompt: '(1) most important ______ of communication', options: ['ways', 'means', 'ranges', 'shows'], correctIndex: 1, explanationVi: 'Cụm từ chuẩn: means of communication (phương tiện truyền thông).' },
  { id: 't8-2', num: 2, prompt: '(2) see and learn ______ people, places and things', options: ['at', 'in', 'for', 'about'], correctIndex: 3, explanationVi: 'learn about: tìm hiểu, học hỏi về điều gì.' },
  { id: 't8-3', num: 3, prompt: '(3) astronauts explore ______ space', options: ['deep', 'large', 'outer', 'open'], correctIndex: 2, explanationVi: 'Cụm từ cố định: outer space (không gian vũ trụ).' },
  { id: 't8-4', num: 4, prompt: '(4) programmes that are ______ to entertain', options: ['happened', 'designed', 'composed', 'guided'], correctIndex: 1, explanationVi: 'be designed to V: được thiết kế/xây dựng để giải trí.' },
  { id: 't8-5', num: 5, prompt: '(5) provides many ______ entertainment programs than any other kind', options: ['more', 'even', 'most', 'hardly'], correctIndex: 0, explanationVi: 'Có "than" ở phía sau → dùng so sánh hơn "more".' },
  { id: 't8-6', num: 6, prompt: '(6) dramas, comedies, sports, and ______ pictures', options: ['lovely', 'clear', 'motion', 'full'], correctIndex: 2, explanationVi: 'motion pictures = phim ảnh điện ảnh.' },
];

export const U7_TEST_IX_BOX = [
  'comedies',
  'educational',
  'game shows',
  "7 o'clock news",
  'writers',
  'national',
  'relax',
  'viewers',
];

export const U7_TEST_IX_VTV1: U7FillItem[] = [
  { id: 't9-1', num: 1, before: 'VTV1 is a ', after: ' television channel in Viet Nam.', accepted: ['national'], displayAnswer: 'national', explanationVi: 'VTV1 là kênh truyền hình quốc gia (national television channel).' },
  { id: 't9-2', num: 2, before: 'It attracts millions of ', after: ' because it offers many different interesting programmes.', accepted: ['viewers'], displayAnswer: 'viewers', explanationVi: 'Thu hút hàng triệu khán giả xem truyền hình → viewers.' },
  { id: 't9-3', num: 3, before: 'The ', after: ' tells people what is happening in Viet Nam and the rest of the world.', accepted: ["7 o'clock news"], displayAnswer: "7 o'clock news", explanationVi: 'Bản tin thời sự 7 giờ cập nhật tin trong nước & thế giới.' },
  { id: 't9-4', num: 4, before: '', after: ' bring a lot of laughter...', accepted: ['comedies'], displayAnswer: 'Comedies', explanationVi: 'Đầu câu, đi với động từ số nhiều "bring" và mang lại tiếng cười → Comedies.' },
  { id: 't9-5', num: 5, before: '...and help people ', after: ' after a hard working day.', accepted: ['relax'], displayAnswer: 'relax', explanationVi: 'help people + V nguyên thể → relax (thư giãn).' },
  { id: 't9-6', num: 6, before: 'The most exciting programmes are ', after: '.', accepted: ['game shows'], displayAnswer: 'game shows', explanationVi: 'Các chương trình hào hứng nhất là trò chơi truyền hình → game shows.' },
  { id: 't9-7', num: 7, before: 'They can be both entertaining and ', after: '.', accepted: ['educational'], displayAnswer: 'educational', explanationVi: 'Cặp tính từ song song "both entertaining and educational" (vừa giải trí vừa giáo dục).' },
  { id: 't9-8', num: 8, before: 'Some of them are programme designers and ', after: '.', accepted: ['writers'], displayAnswer: 'writers', explanationVi: 'Danh từ chỉ nghề nghiệp số nhiều song song với "programme designers" → writers.' },
];

export const U7_TEST_X_REWRITE: U7McqItem[] = [
  {
    id: 't10-1',
    num: 1,
    prompt: 'Although The Haunted Theatre is frightening, children love it.',
    options: [
      'The Haunted Theatre is frightening, but children love it.',
      'The Haunted Theatre is frightening, because children love it.',
      'The Haunted Theatre is frightening, so children love it.',
      'The Haunted Theatre is frightening, for children love it.',
    ],
    correctIndex: 0,
    explanationVi: 'Although A, B ↔ A, but B (chỉ sự tương phản).',
  },
  {
    id: 't10-2',
    num: 2,
    prompt: 'The film is not exciting enough for me to see.',
    options: [
      'The film is not boring enough for me to see.',
      "The film is so exciting that I don't want to see.",
      'The film is too boring for me to see.',
      "The film is such an exciting one that I don't want to see.",
    ],
    correctIndex: 2,
    explanationVi: '"not exciting enough" (không đủ thú vị) ↔ "too boring" (quá chán) để xem.',
  },
  {
    id: 't10-3',
    num: 3,
    prompt: "I have to do homework so I won't watch TV tonight.",
    options: [
      "I won't watch TV tonight because I have to do homework.",
      "I won't watch TV tonight but I have to do homework.",
      "I won't watch TV tonight and I have to do homework.",
      "I won't watch TV tonight or I have to do homework.",
    ],
    correctIndex: 0,
    explanationVi: 'Nguyên nhân + so + Kết quả ↔ Kết quả + because + Nguyên nhân.',
  },
  {
    id: 't10-4',
    num: 4,
    prompt: 'This program is more funny than that program.',
    options: [
      'This program is more boring than that program.',
      'This program is not as funny than that program.',
      'That program is more funny than this program.',
      'That program is more boring than this program.',
    ],
    correctIndex: 3,
    explanationVi: 'Chương trình này hài hơn chương trình kia ↔ Chương trình kia chán hơn chương trình này (D).',
  },
  {
    id: 't10-5',
    num: 5,
    prompt: "It's educational to watch this channel.",
    options: [
      'Watching this channel is educational.',
      "It's musical to watch this channel.",
      'To watch this channel is funny.',
      'This channel is boring to watch.',
    ],
    correctIndex: 0,
    explanationVi: "It's + adj + to V ↔ V-ing + is + adj → A. Watching this channel is educational.",
  },
];

/* ============================================================================
 * 5. HOÀN THIỆN TEST FOR UNIT 7 — PHẦN XI & XII (TẬP 2 · TR. 21)
 * ============================================================================ */

export const U7_TEST_XI_COMBINE: U7SentenceTask[] = [
  {
    id: 't11-1',
    num: 1,
    prompt: 'Mr. Peter heated some water. He wanted a cup of tea.',
    bracketWord: 'so',
    accepted: [
      'Mr. Peter wanted a cup of tea, so he heated some water.',
      'Mr Peter wanted a cup of tea, so he heated some water.',
      'Mr. Peter wanted a cup of tea so he heated some water.',
    ],
    displayAnswer: 'Mr. Peter wanted a cup of tea, so he heated some water.',
    explanationVi:
      'Đảo vế nguyên nhân lên trước + "so" + vế kết quả: Ông Peter muốn uống một tách trà, nên ông đã đun nước.',
  },
  {
    id: 't11-2',
    num: 2,
    prompt: 'I called their house. No one answered the phone.',
    bracketWord: 'but',
    accepted: [
      'I called their house, but no one answered the phone.',
      'I called their house but no one answered the phone.',
    ],
    displayAnswer: 'I called their house, but no one answered the phone.',
    explanationVi: 'Hai vế tương phản (gọi điện đến nhà — không ai bắt máy) nối bằng "but".',
  },
  {
    id: 't11-3',
    num: 3,
    prompt: "The class was so noisy. The teacher couldn't hear the question.",
    bracketWord: 'because',
    accepted: [
      "The teacher couldn't hear the question because the class was so noisy.",
      "Because the class was so noisy, the teacher couldn't hear the question.",
    ],
    displayAnswer: "The teacher couldn't hear the question because the class was so noisy.",
    explanationVi: 'Kết quả + "because" + nguyên nhân (cô giáo không nghe thấy câu hỏi vì lớp quá ồn).',
  },
  {
    id: 't11-4',
    num: 4,
    prompt: "I like cartoons. I don't watch them much.",
    bracketWord: 'although',
    accepted: [
      "Although I like cartoons, I don't watch them much.",
      "I don't watch cartoons much although I like them.",
      "I like cartoons, although I don't watch them much.",
    ],
    displayAnswer: "Although I like cartoons, I don't watch them much.",
    explanationVi: 'Mệnh đề nhượng bộ bắt đầu bằng "Although" (Mặc dù tôi thích hoạt hình, tôi không xem nhiều).',
  },
  {
    id: 't11-5',
    num: 5,
    prompt: "Your arguments are strong. They don't convince me.",
    bracketWord: 'but',
    accepted: [
      "Your arguments are strong, but they don't convince me.",
      "Your arguments are strong but they don't convince me.",
    ],
    displayAnswer: "Your arguments are strong, but they don't convince me.",
    explanationVi: 'Hai ý trái ngược (lập luận sắc bén — không thuyết phục được tôi) nối bằng ", but".',
  },
  {
    id: 't11-6',
    num: 6,
    prompt: 'You can go there by bus. You can go there by train.',
    bracketWord: 'or',
    accepted: [
      'You can go there by bus or by train.',
      'You can go there by bus or train.',
      'You can go there by bus, or you can go there by train.',
      'You can go there by bus or you can go there by train.',
    ],
    displayAnswer: 'You can go there by bus or by train.',
    explanationVi: 'Nối 2 phương án lựa chọn (đi xe buýt hoặc đi tàu hỏa) bằng "or".',
  },
  {
    id: 't11-7',
    num: 7,
    prompt: 'I was feeling tired. I went to bed when I got home.',
    bracketWord: 'so',
    accepted: [
      'I was feeling tired, so I went to bed when I got home.',
      'I was feeling tired so I went to bed when I got home.',
    ],
    displayAnswer: 'I was feeling tired, so I went to bed when I got home.',
    explanationVi: 'Nguyên nhân (cảm thấy mệt) + ", so" + kết quả (đi ngủ ngay khi về nhà).',
  },
  {
    id: 't11-8',
    num: 8,
    prompt: 'I work in a restaurant. She works in the same restaurant.',
    bracketWord: 'and',
    accepted: [
      'I work in a restaurant and she works in the same restaurant.',
      'I work in a restaurant, and she works in the same restaurant.',
      'She and I work in the same restaurant.',
      'I and she work in the same restaurant.',
    ],
    displayAnswer: 'I work in a restaurant and she works in the same restaurant.',
    explanationVi: 'Nối hai thông tin bổ sung tương đồng bằng "and" (hoặc gộp chủ ngữ: She and I work in the same restaurant.).',
  },
];

export interface U7ParagraphClue {
  num: number;
  question: string;
  cue: string;
  sentenceHint: string;
}

export const U7_TEST_XII_CLUES: U7ParagraphClue[] = [
  {
    num: 1,
    question: 'What is the name of your favourite TV programme?',
    cue: 'Game show: Who is a Millionaire?',
    sentenceHint: 'My favourite TV programme is the game show "Who is a Millionaire?".',
  },
  {
    num: 2,
    question: 'What is it about?',
    cue: 'To test your general knowledge about nature, science, etc.',
    sentenceHint: 'It is a quiz show to test players’ general knowledge about nature, science, history and culture.',
  },
  {
    num: 3,
    question: 'What channel is it on?',
    cue: 'On VTV3.',
    sentenceHint: 'It is on VTV3 channel.',
  },
  {
    num: 4,
    question: 'When is it broadcast?',
    cue: 'At 8 p.m. on Tuesday.',
    sentenceHint: 'It is broadcast at 8 p.m. every Tuesday evening.',
  },
  {
    num: 5,
    question: 'Why do you like it?',
    cue: 'Useful, interesting, and exciting.',
    sentenceHint: 'I like it because it is very useful, interesting, and exciting.',
  },
  {
    num: 6,
    question: 'What can you learn from the programme?',
    cue: 'Interesting facts about nature, the world, science, etc.',
    sentenceHint: 'From the programme, I can learn many interesting facts about nature, the world, and science.',
  },
];

export const U7_TEST_XII_MODEL_EN =
  'My favourite TV programme is the game show "Who is a Millionaire?". It is on VTV3 and it is broadcast at 8 p.m. every Tuesday. The show is about testing players’ general knowledge of nature, science, history, and daily life. I really like watching it with my family because it is useful, interesting, and exciting. From this programme, I can learn many interesting facts about nature, science, and the world around us.';

export const U7_TEST_XII_MODEL_VI =
  'Chương trình TV yêu thích của mình là trò chơi truyền hình "Ai là triệu phú?". Chương trình phát sóng trên kênh VTV3 vào lúc 8 giờ tối thứ Ba hàng tuần. Chương trình kiểm tra kiến thức tổng quát của người chơi về tự nhiên, khoa học, lịch sử và đời sống. Mình rất thích xem cùng gia đình vì nó vừa bổ ích, thú vị vừa hồi hộp. Qua chương trình này, mình học được rất nhiều kiến thức lý thú về tự nhiên, khoa học và thế giới xung quanh.';

