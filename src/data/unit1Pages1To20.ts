/* Complete structured exercises from "Chinh phục Ngữ pháp và Bài tập Tiếng Anh 6 - Tập 1 (Global Success)", Pages 1–20 (PDF pp. 17–22) with verified answer keys (PDF pp. 157–159). */

export interface SoundSortWord {
  word: string;
  ipa: string;
  meaningVi: string;
  sound: 'a_long' | 'u_short';
}

export const SOUND_SORT_20: SoundSortWord[] = [
  { word: 'country', ipa: '/ˈkʌntri/', meaningVi: 'đất nước, miền quê', sound: 'u_short' },
  { word: 'carp', ipa: '/kɑːp/', meaningVi: 'cá chép', sound: 'a_long' },
  { word: 'dust', ipa: '/dʌst/', meaningVi: 'bụi bặm', sound: 'u_short' },
  { word: 'garden', ipa: '/ˈɡɑːdn/', meaningVi: 'khu vườn', sound: 'a_long' },
  { word: 'brother', ipa: '/ˈbrʌðə(r)/', meaningVi: 'anh/em trai', sound: 'u_short' },
  { word: 'Monday', ipa: '/ˈmʌndeɪ/', meaningVi: 'thứ Hai', sound: 'u_short' },
  { word: 'lunch', ipa: '/lʌntʃ/', meaningVi: 'bữa trưa', sound: 'u_short' },
  { word: 'money', ipa: '/ˈmʌni/', meaningVi: 'tiền', sound: 'u_short' },
  { word: 'come', ipa: '/kʌm/', meaningVi: 'đến', sound: 'u_short' },
  { word: 'dark', ipa: '/dɑːk/', meaningVi: 'tối', sound: 'a_long' },
  { word: 'arm', ipa: '/ɑːm/', meaningVi: 'cánh tay', sound: 'a_long' },
  { word: 'study', ipa: '/ˈstʌdi/', meaningVi: 'học tập', sound: 'u_short' },
  { word: 'club', ipa: '/klʌb/', meaningVi: 'câu lạc bộ', sound: 'u_short' },
  { word: 'subject', ipa: '/ˈsʌbdʒɪkt/', meaningVi: 'môn học', sound: 'u_short' },
  { word: 'alarm', ipa: '/əˈlɑːm/', meaningVi: 'báo thức', sound: 'a_long' },
  { word: 'marvellous', ipa: '/ˈmɑːvələs/', meaningVi: 'tuyệt vời', sound: 'a_long' },
  { word: 'hungry', ipa: '/ˈhʌŋɡri/', meaningVi: 'đói bụng', sound: 'u_short' },
  { word: 'Sunday', ipa: '/ˈsʌndeɪ/', meaningVi: 'Chủ nhật', sound: 'u_short' },
  { word: 'guitar', ipa: '/ɡɪˈtɑː(r)/', meaningVi: 'đàn ghi-ta', sound: 'a_long' },
  { word: 'mum', ipa: '/mʌm/', meaningVi: 'mẹ', sound: 'u_short' },
];

export interface MissingLetterItem {
  id: number;
  pattern: string;
  answer: string;
  ipa: string;
  meaningVi: string;
  iconKey:
    | 'rubber'
    | 'calculator'
    | 'schoolbag'
    | 'pencil_case'
    | 'dictionary'
    | 'notebook'
    | 'compass'
    | 'school'
    | 'classroom'
    | 'teacher';
}

export const MISSING_LETTERS_10: MissingLetterItem[] = [
  { id: 1, pattern: 'r _ b b _ r', answer: 'rubber', ipa: '/ˈrʌbə(r)/', meaningVi: 'cục tẩy (gôm)', iconKey: 'rubber' },
  { id: 2, pattern: 'c _ l _ u _ a t _ r', answer: 'calculator', ipa: '/ˈkælkjuleɪtə(r)/', meaningVi: 'máy tính bỏ túi', iconKey: 'calculator' },
  { id: 3, pattern: 's _ _ o _ _ b _ g', answer: 'schoolbag', ipa: '/ˈskuːlbæɡ/', meaningVi: 'cặp sách đi học', iconKey: 'schoolbag' },
  { id: 4, pattern: 'p _ _ c _ l  c _ _ e', answer: 'pencil case', ipa: '/ˈpensl keɪs/', meaningVi: 'hộp đựng bút', iconKey: 'pencil_case' },
  { id: 5, pattern: 'd i _ t _ o _ a r _', answer: 'dictionary', ipa: '/ˈdɪkʃənri/', meaningVi: 'từ điển', iconKey: 'dictionary' },
  { id: 6, pattern: 'n _ t _ b _ o _', answer: 'notebook', ipa: '/ˈnəʊtbʊk/', meaningVi: 'quyển vở ghi chép', iconKey: 'notebook' },
  { id: 7, pattern: 'c _ m _ a _ s', answer: 'compass', ipa: '/ˈkʌmpəs/', meaningVi: 'cái com-pa', iconKey: 'compass' },
  { id: 8, pattern: 's c h _ _ l', answer: 'school', ipa: '/skuːl/', meaningVi: 'ngôi trường', iconKey: 'school' },
  { id: 9, pattern: 'c l _ _ s r _ _ m', answer: 'classroom', ipa: '/ˈklɑːsruːm/', meaningVi: 'phòng học', iconKey: 'classroom' },
  { id: 10, pattern: 't _ _ c h _ r', answer: 'teacher', ipa: '/ˈtiːtʃə(r)/', meaningVi: 'giáo viên', iconKey: 'teacher' },
];

export const WORD_BANK_10_OPTIONS = [
  'playground',
  'secondary',
  'lessons',
  'break time',
  'team',
  'vocabulary',
  'subject',
  'homework',
  'club',
  'school year',
];

export interface WordBankSentence {
  id: number;
  before: string;
  after: string;
  answer: string;
  explanationVi: string;
}

export const WORD_BANK_10: WordBankSentence[] = [
  { id: 1, before: 'Can you draw well? Join our art', after: '.', answer: 'club', explanationVi: '"art club" = câu lạc bộ mỹ thuật.' },
  { id: 2, before: 'My favourite', after: 'at school is Music.', answer: 'subject', explanationVi: '"favourite subject" = môn học yêu thích (Music là một môn học).' },
  { id: 3, before: 'How many English', after: 'do you have a week?', answer: 'lessons', explanationVi: '"How many + danh từ số nhiều" → English lessons (các tiết Tiếng Anh).' },
  { id: 4, before: 'Reading books is a good way to increase your', after: '.', answer: 'vocabulary', explanationVi: '"increase your vocabulary" = mở rộng vốn từ vựng.' },
  { id: 5, before: 'In Viet Nam, a', after: 'starts in September and ends in May.', answer: 'school year', explanationVi: 'Từ tháng 9 đến tháng 5 là một năm học (school year).' },
  { id: 6, before: 'My brother is 13 years old. He is at a lower', after: 'school.', answer: 'secondary', explanationVi: '13 tuổi học trường THCS = lower secondary school.' },
  { id: 7, before: 'Do you have any', after: 'to do at the weekend?', answer: 'homework', explanationVi: '"homework to do" = bài tập về nhà cần làm.' },
  { id: 8, before: 'The children are playing soccer in the school', after: '.', answer: 'playground', explanationVi: 'Chơi bóng đá ở sân chơi của trường = school playground.' },
  { id: 9, before: 'I’m in the school football', after: '.', answer: 'team', explanationVi: '"football team" = đội bóng đá của trường.' },
  { id: 10, before: 'We often go to the library and read books at', after: '.', answer: 'break time', explanationVi: '"at break time" = vào giờ ra chơi.' },
];

export interface QuickChoiceItem {
  id: number;
  before: string;
  choices: [string, string];
  after: string;
  answer: string;
  explanationVi: string;
}

export const QUICK_CHOICE_8: QuickChoiceItem[] = [
  { id: 1, before: 'Our school is surrounded by', choices: ['areas', 'fields'], after: 'of rice.', answer: 'fields', explanationVi: '"fields of rice" = những cánh đồng lúa.' },
  { id: 2, before: 'Some students enjoy', choices: ['playing', 'drawing'], after: 'and painting in the art club.', answer: 'drawing', explanationVi: 'Trong CLB mỹ thuật, học sinh thích vẽ (drawing and painting).' },
  { id: 3, before: 'Students play basketball in the playground', choices: ['at break time', 'Monday'], after: '.', answer: 'at break time', explanationVi: '"at break time" = vào giờ ra chơi (Monday phải có giới từ "on").' },
  { id: 4, before: 'In my school, students have to wear a school', choices: ['subjects', 'uniform'], after: '.', answer: 'uniform', explanationVi: '"wear a school uniform" = mặc đồng phục trường.' },
  { id: 5, before: 'There are students from many countries in', choices: ['an international school', 'a boarding school'], after: '.', answer: 'an international school', explanationVi: 'Trường có học sinh từ nhiều quốc gia là trường quốc tế (international school).' },
  { id: 6, before: 'Students live and study at', choices: ['a boarding school', 'a lower secondary school'], after: '.', answer: 'a boarding school', explanationVi: 'Trường nội trú (boarding school) là nơi học sinh vừa ăn ở vừa học tập.' },
  { id: 7, before: 'Students can join different', choices: ['rooms', 'clubs'], after: 'like music, dance, sports.', answer: 'clubs', explanationVi: '"join different clubs" = tham gia các câu lạc bộ khác nhau.' },
  { id: 8, before: 'We have IT classes in the room with a lot of', choices: ['computers', 'instrument'], after: '.', answer: 'computers', explanationVi: 'Giờ Tin học (IT classes) học ở phòng có nhiều máy tính (computers).' },
];

export type FiveColCategory = 'Study' | 'Have' | 'Do' | 'Play' | 'Go';

export interface FiveColWord {
  word: string;
  meaningVi: string;
  category: FiveColCategory;
}

export const FIVE_COL_VERBS_24: FiveColWord[] = [
  { word: 'science', meaningVi: 'môn khoa học', category: 'Study' },
  { word: 'Vietnamese', meaningVi: 'môn Tiếng Việt', category: 'Study' },
  { word: 'vocabulary', meaningVi: 'từ vựng', category: 'Study' },
  { word: 'history', meaningVi: 'môn lịch sử', category: 'Study' },
  { word: 'physics', meaningVi: 'môn vật lí', category: 'Study' },
  { word: 'school lunch', meaningVi: 'bữa trưa ở trường', category: 'Have' },
  { word: 'lunch', meaningVi: 'bữa trưa', category: 'Have' },
  { word: 'a flat', meaningVi: 'một căn hộ', category: 'Have' },
  { word: 'a backache', meaningVi: 'bị đau lưng', category: 'Have' },
  { word: 'aerobics', meaningVi: 'thể dục nhịp điệu', category: 'Do' },
  { word: 'gymnastics', meaningVi: 'thể dục dụng cụ', category: 'Do' },
  { word: 'karate', meaningVi: 'võ karate', category: 'Do' },
  { word: 'judo', meaningVi: 'võ judo', category: 'Do' },
  { word: 'yoga', meaningVi: 'tập yoga', category: 'Do' },
  { word: 'table tennis', meaningVi: 'bóng bàn', category: 'Play' },
  { word: 'volleyball', meaningVi: 'bóng chuyền', category: 'Play' },
  { word: 'rugby', meaningVi: 'bóng bầu dục', category: 'Play' },
  { word: 'chess', meaningVi: 'cờ vua', category: 'Play' },
  { word: 'golf', meaningVi: 'đánh gôn', category: 'Play' },
  { word: 'cycling', meaningVi: 'đạp xe', category: 'Go' },
  { word: 'swimming', meaningVi: 'bơi lội', category: 'Go' },
  { word: 'dancing', meaningVi: 'khiêu vũ', category: 'Go' },
  { word: 'bowling', meaningVi: 'chơi bowling', category: 'Go' },
  { word: 'sailing', meaningVi: 'chèo thuyền buồm', category: 'Go' },
];

export interface DoPlayGoItem {
  id: number;
  parts: string[];
  answers: ('do' | 'play' | 'go')[];
  explanationVi: string;
}

export const DO_PLAY_GO_10: DoPlayGoItem[] = [
  { id: 1, parts: ['Do you often', 'jogging?'], answers: ['go'], explanationVi: 'jogging (chạy bộ chậm) có đuôi -ing → go jogging.' },
  { id: 2, parts: ['She wants to', 'horseback riding in the countryside.'], answers: ['go'], explanationVi: 'horseback riding (cưỡi ngựa) có đuôi -ing → go horseback riding.' },
  { id: 3, parts: ['I want to', 'badminton with my sister.'], answers: ['play'], explanationVi: 'badminton (cầu lông) dùng quả cầu thi đấu → play badminton.' },
  { id: 4, parts: ['It’s nice to', 'hiking in the mountains.'], answers: ['go'], explanationVi: 'hiking (đi bộ leo núi) có đuôi -ing → go hiking.' },
  { id: 5, parts: ['Would you like to', 'soccer with us?'], answers: ['play'], explanationVi: 'soccer (bóng đá) dùng trái bóng → play soccer.' },
  { id: 6, parts: ['They want to', 'skiing next winter.'], answers: ['go'], explanationVi: 'skiing (trượt tuyết) có đuôi -ing → go skiing.' },
  { id: 7, parts: ['We often', 'fishing on Saturdays and', 'yoga on Sundays.'], answers: ['go', 'do'], explanationVi: 'fishing có đuôi -ing → go fishing; yoga là tập cá nhân → do yoga.' },
  { id: 8, parts: ['I’ll', 'karate to keep fit.'], answers: ['do'], explanationVi: 'karate là môn võ thuật cá nhân → do karate.' },
  { id: 9, parts: ['Let’s', 'a set of tennis!'], answers: ['play'], explanationVi: 'tennis (quần vợt) dùng trái bóng → play tennis.' },
  { id: 10, parts: ['I’d like to', 'sailing on the lake.'], answers: ['go'], explanationVi: 'sailing (chèo thuyền buồm) có đuôi -ing → go sailing.' },
];

export interface PresentSimpleBlankItem {
  id: number;
  parts: string[];
  prompts: string[];
  answers: string[];
  acceptedVariants?: string[][];
  explanationVi: string;
}

export const PRESENT_SIMPLE_15: PresentSimpleBlankItem[] = [
  {
    id: 1,
    parts: ['She', 'milk. She', 'water.'],
    prompts: ['not drink', 'drink'],
    answers: ["doesn't drink", 'drinks'],
    acceptedVariants: [["doesn't drink", 'does not drink'], ['drinks']],
    explanationVi: 'Chủ ngữ "She" (số ít): phủ định dùng doesn\'t + V nguyên mẫu; khẳng định thêm -s → drinks.',
  },
  { id: 2, parts: ['My brother', 'very tall.'], prompts: ['be'], answers: ['is'], explanationVi: '"My brother" là số ít → động từ to be chia là is.' },
  { id: 3, parts: ['I', 'my homework and my sister', 'hers.'], prompts: ['do', 'do'], answers: ['do', 'does'], explanationVi: '"I" đi với do; "my sister" (số ít, tận cùng -o) → does.' },
  { id: 4, parts: ['The Earth', 'the Sun.'], prompts: ['circle'], answers: ['circles'], explanationVi: 'Sự thật hiển nhiên, "The Earth" số ít → thêm -s: circles.' },
  { id: 5, parts: ['I', 'a lot of people in the park.'], prompts: ['see'], answers: ['see'], explanationVi: 'Chủ ngữ "I" → động từ giữ nguyên mẫu: see.' },
  { id: 6, parts: ['Rivers', 'to the sea.'], prompts: ['flow'], answers: ['flow'], explanationVi: '"Rivers" (những con sông) là số nhiều → giữ nguyên mẫu: flow.' },
  { id: 7, parts: ['He', 'his car every Sunday.'], prompts: ['wash'], answers: ['washes'], explanationVi: '"He" số ít; "wash" tận cùng -sh → thêm -es: washes.' },
  { id: 8, parts: ['My mother', 'a teacher. She', 'English.'], prompts: ['be', 'teach'], answers: ['is', 'teaches'], explanationVi: '"My mother" → is; "teach" tận cùng -ch → thêm -es: teaches.' },
  {
    id: 9,
    parts: ['My brother', 'karate, but I', 'it.'],
    prompts: ['do', 'not like'],
    answers: ['does', "don't like"],
    acceptedVariants: [['does'], ["don't like", 'do not like']],
    explanationVi: '"My brother" → does; chủ ngữ "I" phủ định → don\'t like.',
  },
  {
    id: 10,
    parts: ['I', 'a car, so I', 'to work.'],
    prompts: ['not have', 'walk'],
    answers: ["don't have", 'walk'],
    acceptedVariants: [["don't have", 'do not have'], ['walk']],
    explanationVi: 'Chủ ngữ "I": phủ định là don\'t have; khẳng định giữ nguyên walk.',
  },
  { id: 11, parts: ['She', 'very hard because she', 'to get good marks.'], prompts: ['study', 'want'], answers: ['studies', 'wants'], explanationVi: '"study" (phụ âm d + y) → studies; "want" → wants.' },
  { id: 12, parts: ['Everyone', 'chocolate.'], prompts: ['like'], answers: ['likes'], explanationVi: 'Đại từ bất định "Everyone" luôn chia như ngôi 3 số ít → likes.' },
  { id: 13, parts: ['My father always', 'me to study harder.'], prompts: ['encourage'], answers: ['encourages'], explanationVi: '"My father" số ít → thêm -s: encourages.' },
  { id: 14, parts: ['My grandmother', 'in a small village.'], prompts: ['live'], answers: ['lives'], explanationVi: '"My grandmother" số ít → thêm -s: lives.' },
  { id: 15, parts: ['Lan', 'English very well.'], prompts: ['speak'], answers: ['speaks'], explanationVi: '"Lan" số ít → thêm -s: speaks.' },
];

export interface RewriteItem {
  id: number;
  prompt: string;
  answer: string;
  accepted?: string[];
  hintVi: string;
  explanationVi: string;
}

export const NEGATIVE_REWRITE_8: RewriteItem[] = [
  { id: 1, prompt: 'He is the best in the class.', answer: "He isn't the best in the class.", hintVi: 'Động từ to be "is" → "isn\'t".', explanationVi: 'Phủ định viết tắt của "is" là "isn\'t".' },
  { id: 2, prompt: 'Peter does homework in the evening.', answer: "Peter doesn't do homework in the evening.", hintVi: 'Thêm "doesn\'t" rồi đưa "does" về nguyên mẫu "do".', explanationVi: 'Chủ ngữ Peter (số ít): doesn\'t + V nguyên mẫu (do).' },
  { id: 3, prompt: 'We play football after school.', answer: "We don't play football after school.", hintVi: 'Chủ ngữ "We" dùng trợ động từ "don\'t".', explanationVi: 'We (số nhiều) → don\'t play.' },
  { id: 4, prompt: 'You run fast.', answer: "You don't run fast.", hintVi: 'Chủ ngữ "You" dùng "don\'t".', explanationVi: 'You → don\'t run.' },
  { id: 5, prompt: 'Tim and Lucas work at weekends.', answer: "Tim and Lucas don't work at weekends.", hintVi: '2 người (số nhiều) → dùng "don\'t".', explanationVi: 'Tim and Lucas là chủ ngữ số nhiều → don\'t work.' },
  { id: 6, prompt: 'I like classical music.', answer: "I don't like classical music.", hintVi: 'Chủ ngữ "I" dùng "don\'t".', explanationVi: 'I → don\'t like.' },
  { id: 7, prompt: 'These exercises are difficult.', answer: "These exercises aren't difficult.", hintVi: 'Động từ to be "are" → "aren\'t".', explanationVi: 'Phủ định viết tắt của "are" là "aren\'t".' },
  { id: 8, prompt: 'She has science on Fridays.', answer: "She doesn't have science on Fridays.", hintVi: 'Đưa "has" về nguyên mẫu "have" sau "doesn\'t".', explanationVi: 'Sau doesn\'t, động từ "has" phải trở về nguyên mẫu "have".' },
];

export const QUESTION_SHORT_ANSWER_8: RewriteItem[] = [
  { id: 1, prompt: 'you / have / an art lesson on Monday? (No)', answer: "Do you have an art lesson on Monday? No, I don't.", hintVi: 'Hỏi "Do you..." → trả lời "No, I don\'t."', explanationVi: 'Động từ thường "have" với "you" mượn trợ động từ Do.' },
  { id: 2, prompt: 'they / ride / their bikes to school? (Yes)', answer: 'Do they ride their bikes to school? Yes, they do.', hintVi: 'Chủ ngữ "they" dùng Do.', explanationVi: 'Do + they + ride...? → Yes, they do.' },
  { id: 3, prompt: 'Jane / play / tennis at school? (No)', answer: "Does Jane play tennis at school? No, she doesn't.", hintVi: 'Jane là ngôi 3 số ít (nữ) → dùng Does & she.', explanationVi: 'Does + Jane + play...? → No, she doesn\'t.' },
  { id: 4, prompt: 'your parents / be / at home now? (Yes)', answer: 'Are your parents at home now? Yes, they are.', hintVi: '"your parents" là số nhiều → dùng Are & they.', explanationVi: 'Câu có to be: đảo Are lên đầu câu → Yes, they are.' },
  { id: 5, prompt: 'he / have / breakfast at 6 o\'clock every day? (Yes)', answer: "Does he have breakfast at 6 o'clock every day? Yes, he does.", hintVi: 'Chủ ngữ "he" → Does he have...?', explanationVi: 'Does + he + have (nguyên mẫu)...? → Yes, he does.' },
  { id: 6, prompt: 'you / be / a good student? (No)', answer: 'Are you a good student? No, I am not.', accepted: ["Are you a good student? No, I'm not."], hintVi: 'Hỏi "Are you...?" → trả lời "No, I am not."', explanationVi: 'Câu hỏi với to be: Are you...? → No, I am not.' },
  { id: 7, prompt: 'I / look / well? (No)', answer: "Do I look well? No, you don't.", hintVi: 'Người hỏi dùng "I" → người trả lời gọi lại là "you".', explanationVi: 'Do I look well? → No, you don\'t.' },
  { id: 8, prompt: 'Ms. Hoa / be / a good teacher? (Yes)', answer: 'Is Ms. Hoa a good teacher? Yes, she is.', hintVi: 'Ms. Hoa là số ít (cô Hoa) → dùng Is & she.', explanationVi: 'Câu có to be: Is Ms. Hoa...? → Yes, she is.' },
];

export interface PrepositionItem {
  id: number;
  parts: string[];
  answers: string[];
  explanationVi: string;
}

export const PREPOSITIONS_10: PrepositionItem[] = [
  { id: 1, parts: ['I live', 'a small flat', 'the third floor.'], answers: ['in', 'on'], explanationVi: '"in a flat" (trong căn hộ) và "on the third floor" (ở tầng 3).' },
  { id: 2, parts: ['We walk', 'school every morning.'], answers: ['to'], explanationVi: '"walk to school" = đi bộ tới trường.' },
  { id: 3, parts: ['She is good', 'Maths and English.'], answers: ['at'], explanationVi: 'Cụm cố định "be good at + môn học/kỹ năng" = giỏi về cái gì.' },
  { id: 4, parts: ['My birthday is', 'October.'], answers: ['in'], explanationVi: 'Dùng giới từ "in" trước tháng (in October).' },
  { id: 5, parts: ['We have English', 'Tuesdays and Thursdays.'], answers: ['on'], explanationVi: 'Dùng giới từ "on" trước các thứ trong tuần.' },
  { id: 6, parts: ['Students listen', 'their teachers carefully in class.'], answers: ['to'], explanationVi: 'Cụm cố định "listen to someone" = lắng nghe ai.' },
  { id: 7, parts: ['Our lessons start', '7:30 a.m.'], answers: ['at'], explanationVi: 'Dùng giới từ "at" trước giờ cụ thể.' },
  { id: 8, parts: ['I share my room', 'my younger sister.'], answers: ['with'], explanationVi: 'Cụm cố định "share something with someone" = chia sẻ với ai.' },
  { id: 9, parts: ['She often plays badminton', 'her friends.'], answers: ['with'], explanationVi: '"play with friends" = chơi cùng với bạn bè.' },
  { id: 10, parts: ['', 'school, we go home and have dinner.'], answers: ['After'], explanationVi: '"After school" = Sau giờ học (đầu câu viết hoa).' },
];

export interface MistakeFixItem {
  id: number;
  sentenceParts: [string, string, string];
  wrongWord: string;
  correctWord: string;
  explanationVi: string;
}

export const MISTAKE_FIX_8: MistakeFixItem[] = [
  { id: 1, sentenceParts: ['She doesn’t ', 'has', ' Maths on Monday.'], wrongWord: 'has', correctWord: 'have', explanationVi: 'Sau trợ động từ "doesn\'t", động từ phải ở dạng nguyên mẫu → have.' },
  { id: 2, sentenceParts: ['', 'Where', ' is your favourite subject? — It’s English.'], wrongWord: 'Where', correctWord: 'What', explanationVi: 'Hỏi về môn học yêu thích là "Cái gì" (What), không phải "Ở đâu" (Where).' },
  { id: 3, sentenceParts: ['My father drives ', 'at', ' work every day.'], wrongWord: 'at', correctWord: 'to', explanationVi: 'Cụm đúng là "drive to work" (lái xe đi làm).' },
  { id: 4, sentenceParts: ['Nam ', "don't cleans", ' his room on Sundays.'], wrongWord: "don't cleans", correctWord: "doesn't clean", explanationVi: 'Chủ ngữ "Nam" (số ít) dùng doesn\'t + V nguyên mẫu → doesn\'t clean.' },
  { id: 5, sentenceParts: ['My mother rarely watches TV ', 'in', ' night.'], wrongWord: 'in', correctWord: 'at', explanationVi: 'Cụm cố định chỉ thời gian ban đêm là "at night" (không dùng in night).' },
  { id: 6, sentenceParts: ['', 'When', ' time do you get up in the morning?'], wrongWord: 'When', correctWord: 'What', explanationVi: 'Hỏi mấy giờ dùng "What time", không dùng "When time".' },
  { id: 7, sentenceParts: ['', 'Does', ' you and your sister walk to school?'], wrongWord: 'Does', correctWord: 'Do', explanationVi: '"you and your sister" là chủ ngữ số nhiều (2 người) → dùng Do.' },
  { id: 8, sentenceParts: ['They have two ', 'child', ': a son and a daughter.'], wrongWord: 'child', correctWord: 'children', explanationVi: 'Danh từ số nhiều bất quy tắc của "child" là "children".' },
];

export const FREQ_POSITION_13: RewriteItem[] = [
  { id: 1, prompt: 'Susan is late for school. (never)', answer: 'Susan is never late for school.', hintVi: 'Đứng SAU động từ to be "is".', explanationVi: 'Trạng từ "never" đứng sau động từ to be "is".' },
  { id: 2, prompt: "My brother doesn't write letters to his friends. (usually)", answer: "My brother doesn't usually write letters to his friends.", hintVi: 'Đứng giữa trợ động từ "doesn\'t" và V thường "write".', explanationVi: '"usually" đứng ngay trước động từ thường "write" (sau trợ động từ doesn\'t).' },
  { id: 3, prompt: 'We go on holidays. (twice a year)', answer: 'We go on holidays twice a year.', hintVi: 'Cụm chỉ số lần đứng ở CUỐI câu.', explanationVi: 'Cụm "twice a year" đặt ở cuối câu.' },
  { id: 4, prompt: 'Peter wears a tie. (sometimes)', answer: 'Peter sometimes wears a tie.', hintVi: 'Đứng TRƯỚC động từ thường "wears".', explanationVi: '"sometimes" đứng trước động từ thường "wears".' },
  { id: 5, prompt: 'I eat fish. (once a week)', answer: 'I eat fish once a week.', hintVi: 'Cụm "once a week" đứng CUỐI câu.', explanationVi: 'Cụm tần suất "once a week" đặt ở cuối câu.' },
  { id: 6, prompt: 'Do the children watch TV? (often)', answer: 'Do the children often watch TV?', hintVi: 'Trong câu hỏi, đứng trước động từ chính "watch".', explanationVi: 'Cấu trúc câu hỏi: Do + S + often + V?' },
  { id: 7, prompt: 'My father is very busy. (always)', answer: 'My father is always very busy.', hintVi: 'Đứng SAU động từ to be "is".', explanationVi: '"always" đứng sau to be "is".' },
  { id: 8, prompt: 'Peter tidies his room. (never)', answer: 'Peter never tidies his room.', hintVi: 'Đứng TRƯỚC động từ thường "tidies".', explanationVi: '"never" đứng trước động từ thường "tidies".' },
  { id: 9, prompt: 'My brother and I go fishing. (every week)', answer: 'My brother and I go fishing every week.', hintVi: '"every week" đặt ở CUỐI câu.', explanationVi: 'Cụm thời gian "every week" đứng cuối câu.' },
  { id: 10, prompt: 'My mother goes shopping on Saturdays. (always)', answer: 'My mother always goes shopping on Saturdays.', hintVi: 'Đứng TRƯỚC động từ thường "goes".', explanationVi: '"always" đứng trước động từ thường "goes".' },
  { id: 11, prompt: 'Do you get up late at the weekend? (usually)', answer: 'Do you usually get up late at the weekend?', hintVi: 'Trong câu hỏi, đứng ngay trước "get up".', explanationVi: 'Do + you + usually + get up...?' },
  { id: 12, prompt: 'I drink tea. (every morning)', answer: 'I drink tea every morning.', hintVi: '"every morning" đặt ở CUỐI câu.', explanationVi: 'Cụm "every morning" đặt ở cuối câu.' },
  { id: 13, prompt: 'Mary rides her motorbike to work. (sometimes)', answer: 'Mary sometimes rides her motorbike to work.', hintVi: 'Đứng TRƯỚC động từ thường "rides".', explanationVi: '"sometimes" đứng trước động từ thường "rides".' },
  { id: 14, prompt: 'I exercise in the afternoons. (often)', answer: 'I often exercise in the afternoons.', hintVi: 'Đứng TRƯỚC động từ thường "exercise".', explanationVi: '"often" đứng ngay trước động từ thường "exercise" (Tr.21).' },
  { id: 15, prompt: 'Does Jane have lunch at home? (usually)', answer: 'Does Jane usually have lunch at home?', hintVi: 'Trong câu hỏi, đứng sau chủ ngữ Jane và TRƯỚC động từ chính "have".', explanationVi: 'Cấu trúc câu hỏi: Does + S + usually + V? (Tr.21).' },
];
