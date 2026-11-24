// Complete verified dataset for Unit 3 Exercises (Book pp. 65-76)
// and TEST FOR UNIT 3 — 13 Parts (Book pp. 77-83)
// Source: Chinh phục Ngữ pháp & Bài tập Tiếng Anh 6 Tập 1 (Global Success)

/* ==================== STATION 01: EX I (12 /b/-/p/ PICS) & EX II.1-II.3 (pp.65-67) ==================== */
export type BpIconKey =
  | 'present'
  | 'picture'
  | 'blackboard'
  | 'pear'
  | 'banana'
  | 'piano'
  | 'bath'
  | 'pool'
  | 'building'
  | 'butterfly'
  | 'bike'
  | 'park';

export interface U3Ex1BpPicItem {
  id: number;
  iconKey: BpIconKey;
  stem: string; // e.g. "_resent"
  letter: 'p' | 'b';
  word: string;
  ipa: string;
  meaningVi: string;
}

export const U3_EX1_BP_PICS: U3Ex1BpPicItem[] = [
  { id: 1, iconKey: 'present', stem: '_resent', letter: 'p', word: 'present', ipa: '/ˈpreznt/', meaningVi: 'món quà' },
  { id: 2, iconKey: 'picture', stem: '_icture', letter: 'p', word: 'picture', ipa: '/ˈpɪktʃə(r)/', meaningVi: 'bức tranh' },
  { id: 3, iconKey: 'blackboard', stem: '_lackboard', letter: 'b', word: 'blackboard', ipa: '/ˈblækbɔːd/', meaningVi: 'bảng đen' },
  { id: 4, iconKey: 'pear', stem: '_ear', letter: 'p', word: 'pear', ipa: '/peə(r)/', meaningVi: 'quả lê' },
  { id: 5, iconKey: 'banana', stem: '_anana', letter: 'b', word: 'banana', ipa: '/bəˈnɑːnə/', meaningVi: 'quả chuối' },
  { id: 6, iconKey: 'piano', stem: '_iano', letter: 'p', word: 'piano', ipa: '/piˈænəʊ/', meaningVi: 'đàn pi-a-nô' },
  { id: 7, iconKey: 'bath', stem: '_ath', letter: 'b', word: 'bath', ipa: '/bɑːθ/', meaningVi: 'bồn tắm' },
  { id: 8, iconKey: 'pool', stem: '_ool', letter: 'p', word: 'pool', ipa: '/puːl/', meaningVi: 'hồ bơi' },
  { id: 9, iconKey: 'building', stem: '_uilding', letter: 'b', word: 'building', ipa: '/ˈbɪldɪŋ/', meaningVi: 'tòa nhà' },
  { id: 10, iconKey: 'butterfly', stem: '_utterfly', letter: 'b', word: 'butterfly', ipa: '/ˈbʌtəflaɪ/', meaningVi: 'con bướm' },
  { id: 11, iconKey: 'bike', stem: '_ike', letter: 'b', word: 'bike', ipa: '/baɪk/', meaningVi: 'xe đạp' },
  { id: 12, iconKey: 'park', stem: '_ark', letter: 'p', word: 'park', ipa: '/pɑːk/', meaningVi: 'công viên' },
];

export type DescGroupKey = 'build' | 'eyes' | 'hair' | 'appearance';

export interface U3Ex2_1GroupWord {
  id: number;
  word: string;
  meaningVi: string;
  primaryGroup: DescGroupKey;
  acceptedGroups: DescGroupKey[];
}

export const U3_EX2_1_GROUPS_META: {
  id: DescGroupKey;
  labelEn: string;
  labelVi: string;
  colorCls: string;
}[] = [
  { id: 'build', labelEn: 'Build', labelVi: 'Vóc dáng / Chiều cao', colorCls: 'border-sky-300 bg-sky-50 text-sky-900' },
  { id: 'eyes', labelEn: 'Eyes', labelVi: 'Đôi mắt', colorCls: 'border-emerald-300 bg-emerald-50 text-emerald-900' },
  { id: 'hair', labelEn: 'Hair', labelVi: 'Mái tóc', colorCls: 'border-amber-300 bg-amber-50 text-amber-900' },
  { id: 'appearance', labelEn: 'Appearance', labelVi: 'Ngoại hình chung / Tuổi', colorCls: 'border-violet-300 bg-violet-50 text-violet-900' },
];

export const U3_EX2_1_WORDS: U3Ex2_1GroupWord[] = [
  { id: 1, word: 'thin', meaningVi: 'gầy', primaryGroup: 'build', acceptedGroups: ['build'] },
  { id: 2, word: 'tall', meaningVi: 'cao', primaryGroup: 'build', acceptedGroups: ['build'] },
  { id: 3, word: 'big', meaningVi: 'to lớn', primaryGroup: 'build', acceptedGroups: ['build', 'eyes'] },
  { id: 4, word: 'short', meaningVi: 'thấp / ngắn', primaryGroup: 'build', acceptedGroups: ['build', 'hair'] },
  { id: 5, word: 'wavy', meaningVi: 'gợn sóng', primaryGroup: 'hair', acceptedGroups: ['hair'] },
  { id: 6, word: 'green', meaningVi: 'màu xanh lục', primaryGroup: 'eyes', acceptedGroups: ['eyes'] },
  { id: 7, word: 'handsome', meaningVi: 'đẹp trai', primaryGroup: 'appearance', acceptedGroups: ['appearance'] },
  { id: 8, word: 'fat', meaningVi: 'mập', primaryGroup: 'build', acceptedGroups: ['build'] },
  { id: 9, word: 'long', meaningVi: 'dài', primaryGroup: 'hair', acceptedGroups: ['hair'] },
  { id: 10, word: 'young', meaningVi: 'trẻ trung', primaryGroup: 'appearance', acceptedGroups: ['appearance'] },
  { id: 11, word: 'blond', meaningVi: 'vàng hoe', primaryGroup: 'hair', acceptedGroups: ['hair'] },
  { id: 12, word: 'good-looking', meaningVi: 'ưa nhìn', primaryGroup: 'appearance', acceptedGroups: ['appearance'] },
  { id: 13, word: 'thick', meaningVi: 'dày (tóc)', primaryGroup: 'hair', acceptedGroups: ['hair'] },
  { id: 14, word: 'red', meaningVi: 'đỏ (tóc)', primaryGroup: 'hair', acceptedGroups: ['hair'] },
  { id: 15, word: 'straight', meaningVi: 'thẳng', primaryGroup: 'hair', acceptedGroups: ['hair'] },
  { id: 16, word: 'big black', meaningVi: 'to đen (mắt)', primaryGroup: 'eyes', acceptedGroups: ['eyes'] },
  { id: 17, word: 'bald', meaningVi: 'hói đầu', primaryGroup: 'hair', acceptedGroups: ['hair', 'appearance'] },
  { id: 18, word: 'pretty', meaningVi: 'xinh xắn', primaryGroup: 'appearance', acceptedGroups: ['appearance'] },
  { id: 19, word: 'blue', meaningVi: 'màu xanh dương', primaryGroup: 'eyes', acceptedGroups: ['eyes'] },
  { id: 20, word: 'black', meaningVi: 'màu đen', primaryGroup: 'hair', acceptedGroups: ['hair', 'eyes'] },
  { id: 21, word: 'curly', meaningVi: 'xoăn', primaryGroup: 'hair', acceptedGroups: ['hair'] },
  { id: 22, word: 'slim', meaningVi: 'mảnh khảnh', primaryGroup: 'build', acceptedGroups: ['build'] },
  { id: 23, word: 'gray', meaningVi: 'màu xám / bạc', primaryGroup: 'eyes', acceptedGroups: ['eyes', 'hair'] },
  { id: 24, word: 'small', meaningVi: 'nhỏ bé', primaryGroup: 'build', acceptedGroups: ['build', 'eyes'] },
  { id: 25, word: 'attractive', meaningVi: 'cuốn hút', primaryGroup: 'appearance', acceptedGroups: ['appearance'] },
  { id: 26, word: 'old', meaningVi: 'lớn tuổi', primaryGroup: 'appearance', acceptedGroups: ['appearance'] },
  { id: 27, word: 'well-built', meaningVi: 'vạm vỡ, cân đối', primaryGroup: 'build', acceptedGroups: ['build'] },
];

export interface PairChoiceItem {
  id: number;
  before: string;
  options: [string, string];
  after: string;
  correctIndex: 0 | 1;
  explainVi: string;
}

export const U3_EX2_2_BODY_PARTS: PairChoiceItem[] = [
  { id: 1, before: 'A dog has four', options: ['legs', 'arms'], after: '.', correctIndex: 0, explainVi: 'Chó có 4 chân → legs (không dùng arms).' },
  { id: 2, before: "The baby is holding her mother's", options: ['hand', 'foot'], after: '.', correctIndex: 0, explainVi: 'Em bé nắm tay mẹ → holding her mother\'s hand.' },
  { id: 3, before: 'Martin always lies on his', options: ['head', 'back'], after: 'when he sleeps.', correctIndex: 1, explainVi: 'Nằm ngửa (nằm trên lưng) khi ngủ → lie on one\'s back.' },
  { id: 4, before: 'Susan has beautiful long', options: ['hair', 'ears'], after: '.', correctIndex: 0, explainVi: 'Mái tóc dài đẹp → beautiful long hair.' },
  { id: 5, before: 'They have five', options: ['fingers', 'toes'], after: 'on each foot.', correctIndex: 1, explainVi: 'Trên mỗi bàn chân (foot) có 5 ngón chân → toes (fingers là ngón tay).' },
  { id: 6, before: 'My', options: ['face', 'hands'], after: 'turn red when I feel shy.', correctIndex: 0, explainVi: 'Mặt đỏ bừng lên khi ngại ngùng → face.' },
  { id: 7, before: 'I can hear with my', options: ['eyes', 'ears'], after: '.', correctIndex: 1, explainVi: 'Nghe (hear) bằng đôi tai → ears.' },
  { id: 8, before: 'A giraffe has a long', options: ['mouth', 'neck'], after: '.', correctIndex: 1, explainVi: 'Hươu cao cổ có chiếc cổ dài → long neck.' },
  { id: 9, before: 'He can use his', options: ['hands', 'legs'], after: 'to jump and run.', correctIndex: 1, explainVi: 'Nhảy và chạy (jump and run) dùng đôi chân → legs.' },
  { id: 10, before: 'I can use my', options: ['hands', 'foot'], after: 'to carry things.', correctIndex: 0, explainVi: 'Mang vác đồ đạc (carry things) dùng đôi tay → hands.' },
];

export interface OppositeMatchItem {
  id: number;
  left: string;
  leftVi: string;
  answer: string;
  answerVi: string;
}

export const U3_EX2_3_OPPOSITES_BANK = [
  'dark',
  'fat',
  'ugly',
  'small',
  'outgoing',
  'young',
  'lively',
  'long',
  'quiet',
  'straight',
  'weak',
  'boring',
  'unfriendly',
  'thin',
  'generous',
] as const;

export const U3_EX2_3_OPPOSITES: OppositeMatchItem[] = [
  { id: 1, left: 'attractive', leftVi: 'cuốn hút', answer: 'ugly', answerVi: 'xấu xí' },
  { id: 2, left: 'light', leftVi: 'sáng màu / nhẹ', answer: 'dark', answerVi: 'tối màu' },
  { id: 3, left: 'slim', leftVi: 'mảnh khảnh', answer: 'fat', answerVi: 'mập' },
  { id: 4, left: 'old', leftVi: 'già, lớn tuổi', answer: 'young', answerVi: 'trẻ' },
  { id: 5, left: 'shy', leftVi: 'nhút nhát', answer: 'outgoing', answerVi: 'cởi mở, hướng ngoại' },
  { id: 6, left: 'big', leftVi: 'to lớn', answer: 'small', answerVi: 'nhỏ bé' },
  { id: 7, left: 'dull', leftVi: 'tẻ nhạt, ủ rũ', answer: 'lively', answerVi: 'sống động, hoạt bát' },
  { id: 8, left: 'short', leftVi: 'ngắn', answer: 'long', answerVi: 'dài' },
  { id: 9, left: 'curly', leftVi: 'xoăn', answer: 'straight', answerVi: 'thẳng' },
  { id: 10, left: 'exciting', leftVi: 'hào hứng', answer: 'boring', answerVi: 'nhàm chán' },
  { id: 11, left: 'noisy', leftVi: 'ồn ào', answer: 'quiet', answerVi: 'yên tĩnh' },
  { id: 12, left: 'strong', leftVi: 'khỏe mạnh', answer: 'weak', answerVi: 'yếu ớt' },
  { id: 13, left: 'sociable', leftVi: 'hòa đồng', answer: 'unfriendly', answerVi: 'không thân thiện' },
  { id: 14, left: 'mean', leftVi: 'keo kiệt, ích kỷ', answer: 'generous', answerVi: 'hào phóng' },
  { id: 15, left: 'thick', leftVi: 'dày', answer: 'thin', answerVi: 'mỏng' },
];

/* ==================== STATION 02: EX II.4–II.8 — BE vs HAVE & PERSONALITY (pp.67–69) ==================== */
export interface U3RewriteItem {
  id: number;
  prompt: string;
  answer: string;
  accepted?: string[];
  explainVi: string;
}

export const U3_EX2_4_TO_HAVE: U3RewriteItem[] = [
  { id: 1, prompt: "Mary's face is oval.", answer: 'Mary has an oval face.', explainVi: 'oval bắt đầu bằng nguyên âm o → dùng mạo từ "an": an oval face.' },
  { id: 2, prompt: 'My teeth are small and even.', answer: 'I have small and even teeth.', accepted: ['I have small, even teeth.'], explainVi: 'teeth là số nhiều → không có a/an.' },
  { id: 3, prompt: 'His nose is straight.', answer: 'He has a straight nose.', explainVi: 'nose số ít đếm được → thêm "a": a straight nose.' },
  { id: 4, prompt: 'Their eyes are dark brown.', answer: 'They have dark brown eyes.', explainVi: 'eyes số nhiều → They have dark brown eyes.' },
  { id: 5, prompt: 'Our hair is curly and black.', answer: 'We have curly and black hair.', accepted: ['We have curly black hair.'], explainVi: 'hair không đếm được → không dùng a/an.' },
  { id: 6, prompt: "Peter's mouth is very wide.", answer: 'Peter has a very wide mouth.', accepted: ['Peter has a wide mouth.'], explainVi: 'mouth số ít đếm được → Peter has a (very) wide mouth.' },
];

export const U3_EX2_5_TO_BE: U3RewriteItem[] = [
  { id: 1, prompt: 'My son has rosy cheeks.', answer: "My son's cheeks are rosy.", explainVi: 'cheeks số nhiều → dùng sở hữu cách My son\'s cheeks + are.' },
  { id: 2, prompt: 'I have long blonde hair.', answer: 'My hair is long and blonde.', accepted: ['My hair is blonde and long.'], explainVi: 'hair không đếm được → chia động từ "is".' },
  { id: 3, prompt: 'He has a thin face.', answer: 'His face is thin.', explainVi: 'face số ít → His face is thin.' },
  { id: 4, prompt: 'They have dark skin.', answer: 'Their skin is dark.', explainVi: 'skin không đếm được → Their skin is dark.' },
  { id: 5, prompt: 'His dog has a short tail.', answer: "His dog's tail is short.", explainVi: 'Cái đuôi của con chó → His dog\'s tail is short.' },
  { id: 6, prompt: 'My friend has thick books.', answer: "My friend's books are thick.", explainVi: 'books số nhiều → My friend\'s books are thick.' },
];

export const U3_EX2_6_OPPOSITE_REPLY: U3RewriteItem[] = [
  { id: 1, prompt: 'Are your parents young? → No, ...', answer: 'No, my parents are old.', accepted: ['my parents are old.', 'they are old.', 'No, they are old.'], explainVi: 'Trái nghĩa của young (trẻ) là old (già/lớn tuổi).' },
  { id: 2, prompt: 'Is Lan unfriendly? → No, ...', answer: 'No, she is friendly.', accepted: ['she is friendly.', "she's friendly.", "No, she's friendly."], explainVi: 'Trái nghĩa của unfriendly là friendly.' },
  { id: 3, prompt: 'Is Tuan fat? → No, ...', answer: 'No, he is thin.', accepted: ['he is thin.', 'No, he is slim.', 'he is slim.', "No, he's thin."], explainVi: 'Trái nghĩa của fat là thin / slim.' },
  { id: 4, prompt: 'Is your house new and large? → No, ...', answer: 'No, it is old and small.', accepted: ['it is old and small.', "No, it's old and small."], explainVi: 'new ↔ old; large ↔ small.' },
  { id: 5, prompt: 'Does Hoa have small eyes? → No, ...', answer: 'No, she has big eyes.', accepted: ['she has big eyes.'], explainVi: 'small ↔ big; chủ ngữ "she" dùng "has".' },
  { id: 6, prompt: 'Does Sam have long hair? → No, ...', answer: 'No, she has short hair.', accepted: ['she has short hair.'], explainVi: 'long ↔ short.' },
  { id: 7, prompt: 'Are they lazy? → No, ...', answer: 'No, they are hard-working.', accepted: ['they are hard-working.', 'No, they are hard working.', 'they are hard working.', 'No, they are hardworking.'], explainVi: 'Trái nghĩa của lazy (lười) là hard-working (chăm chỉ).' },
  { id: 8, prompt: 'Is your grandmother weak? → No, ...', answer: 'No, she is strong.', accepted: ['she is strong.', "No, she's strong.", 'No, my grandmother is strong.'], explainVi: 'Trái nghĩa của weak (yếu) là strong (khỏe mạnh).' },
];

export interface U3Ex2_7Paragraph {
  id: number;
  titleVi: string;
  parts: string[];
  answers: ('am' | 'is' | 'are' | 'have' | 'has')[];
  explainVi: string;
}

export const U3_EX2_7_BE_HAVE_PARAS: U3Ex2_7Paragraph[] = [
  {
    id: 1,
    titleVi: 'Đoạn 1 — Tự giới thiệu bản thân (I)',
    parts: ['I ', ' tall and thin. I ', ' green eyes and dark hair. I ', ' serious and friendly.'],
    answers: ['am', 'have', 'am'],
    explainVi: 'I + am + tính từ (tall, thin, serious, friendly); I + have + bộ phận cơ thể (eyes, hair).',
  },
  {
    id: 2,
    titleVi: 'Đoạn 2 — Miêu tả bố (My father / He)',
    parts: [
      'My father ',
      ' a very hard-working person. He ',
      ' medium and rather fat. He ',
      ' a round face and a cheerful smile. He ',
      ' a moustache. His hair ',
      ' short and curly.',
    ],
    answers: ['is', 'is', 'has', 'has', 'is'],
    explainVi: 'He/My father/His hair số ít dùng "is" với tính từ hoặc danh từ nghề/người; dùng "has" với bộ phận (face, smile, moustache).',
  },
  {
    id: 3,
    titleVi: 'Đoạn 3 — Miêu tả chị gái (My sister / She)',
    parts: [
      'My sister ',
      ' beautiful. She ',
      ' slim and tall. She ',
      ' rosy cheeks and blue eyes. She ',
      ' blonde wavy hair. Her nose ',
      ' straight and her teeth ',
      ' white and even. She ',
      ' very funny and intelligent.',
    ],
    answers: ['is', 'is', 'has', 'has', 'is', 'are', 'is'],
    explainVi: 'Chú ý: her nose (số ít) → is; her teeth (số nhiều) → are; cheeks/eyes/hair → has.',
  },
  {
    id: 4,
    titleVi: 'Đoạn 4 — Miêu tả hai anh em sinh đôi (My twin brothers / They)',
    parts: [
      'My twin brothers ',
      ' quite short. They ',
      ' short brown hair. Their eyes ',
      ' dark and they ',
      ' glasses. My brothers ',
      ' very active and cheerful.',
    ],
    answers: ['are', 'have', 'are', 'have', 'are'],
    explainVi: 'Chủ ngữ số nhiều (twin brothers, They, Their eyes) dùng "are" với tính từ và "have" với hair, glasses.',
  },
];

export const U3_EX2_8_ADJ_BOX = [
  'sporty',
  'confident',
  'curious',
  'cheerful',
  'generous',
  'shy',
  'reliable',
  'talkative',
  'sensitive',
  'outgoing',
] as const;

export interface U3BlankSentence {
  id: number;
  before: string;
  after: string;
  answer: string;
  explainVi: string;
}

export const U3_EX2_8_PERSONALITY: U3BlankSentence[] = [
  { id: 1, before: "Don't say unkind things to her - she's very", after: '.', answer: 'sensitive', explainVi: 'Dễ tổn thương khi nghe lời không hay → sensitive (nhạy cảm).' },
  { id: 2, before: 'Tom is very', after: '. He gives money to charity every month.', answer: 'generous', explainVi: 'Hay quyên góp từ thiện mỗi tháng → generous (hào phóng).' },
  { id: 3, before: "William never stops talking in class. He's very", after: '.', answer: 'talkative', explainVi: 'Nói không ngừng trong lớp → talkative (nói nhiều).' },
  { id: 4, before: 'The new girl in my class is so', after: ". She's afraid to talk in front of us.", answer: 'shy', explainVi: 'Ngại nói chuyện trước lớp → shy (nhút nhát).' },
  { id: 5, before: "You can trust Miller with a secret. He's a", after: 'man.', answer: 'reliable', explainVi: 'Có thể tin tưởng giữ bí mật → reliable (đáng tin cậy).' },
  { id: 6, before: "Harry loves partying, meeting people and talking to them. He's so", after: '.', answer: 'outgoing', explainVi: 'Thích tiệc tùng, gặp gỡ giao lưu → outgoing (hướng ngoại, cởi mở).' },
  { id: 7, before: 'Ann is such a', after: 'girl. She is always laughing and smiling.', answer: 'cheerful', explainVi: 'Lúc nào cũng cười tươi → cheerful (vui vẻ).' },
  { id: 8, before: "Jim is always sure of his own abilities. He's so", after: '.', answer: 'confident', explainVi: 'Luôn tin tưởng vào khả năng của mình → confident (tự tin).' },
  { id: 9, before: 'My best friend Matt is really', after: '. He plays badminton, basketball and football very well.', answer: 'sporty', explainVi: 'Chơi giỏi nhiều môn thể thao → sporty (yêu thích thể thao).' },
  { id: 10, before: 'My daughter is very', after: '. She wants to know everything.', answer: 'curious', explainVi: 'Muốn tìm hiểu mọi thứ → curious (tò mò, ham học hỏi).' },
];

/* ==================== STATION 03: EX II.9–II.11 — PRESENT CONTINUOUS & SIMPLE (pp.69–71) ==================== */
export type ActionSceneKey =
  | 'listen'
  | 'cook'
  | 'wash'
  | 'play'
  | 'have_dinner'
  | 'do_homework'
  | 'eat_burger'
  | 'clean_floor'
  | 'work'
  | 'swim';

export interface U3Ex2_9ActionItem {
  id: number;
  sceneKey: ActionSceneKey;
  captionVi: string;
  before: string;
  after: string;
  answer: string;
  explainVi: string;
}

export const U3_EX2_9_BOX = [
  'clean',
  'eat',
  'have',
  'do',
  'listen',
  'play',
  'work',
  'swim',
  'wash',
  'cook',
] as const;

export const U3_EX2_9_ACTIONS: U3Ex2_9ActionItem[] = [
  { id: 1, sceneKey: 'listen', captionVi: 'Bob đang đeo tai nghe nhạc', before: 'Bob', after: 'to music.', answer: 'is listening', explainVi: 'Bob (số ít) + is + listening.' },
  { id: 2, sceneKey: 'cook', captionVi: 'Mẹ đang nấu ăn trong bếp', before: 'My mother', after: 'in the kitchen.', answer: 'is cooking', explainVi: 'My mother (số ít) + is + cooking.' },
  { id: 3, sceneKey: 'wash', captionVi: 'Sally đang rửa bát đĩa', before: 'Sally', after: 'the dishes.', answer: 'is washing', explainVi: 'Sally (số ít) + is + washing.' },
  { id: 4, sceneKey: 'play', captionVi: 'Hai bạn nhỏ đang đá bóng', before: 'They', after: 'football.', answer: 'are playing', explainVi: 'They (số nhiều) + are + playing.' },
  { id: 5, sceneKey: 'have_dinner', captionVi: 'Gia đình bạn ấy đang ăn tối', before: 'Her family', after: 'dinner.', answer: 'are having', explainVi: 'have bỏ -e thêm -ing → having (chấp nhận cả "is having" và "are having").' },
  { id: 6, sceneKey: 'do_homework', captionVi: 'Cậu bé đang làm bài tập Toán', before: 'The boy', after: 'Maths homework.', answer: 'is doing', explainVi: 'The boy (số ít) + is + doing.' },
  { id: 7, sceneKey: 'eat_burger', captionVi: 'Elena đang ăn bánh hamburger', before: 'Elena', after: 'a hamburger.', answer: 'is eating', explainVi: 'Elena (số ít) + is + eating.' },
  { id: 8, sceneKey: 'clean_floor', captionVi: 'Chị của Tom đang lau sàn nhà', before: "Tom's sister", after: 'the floor.', answer: 'is cleaning', explainVi: 'Tom\'s sister (số ít) + is + cleaning.' },
  { id: 9, sceneKey: 'work', captionVi: 'Các công nhân đang làm việc', before: 'The workers', after: '.', answer: 'are working', explainVi: 'The workers (số nhiều) + are + working.' },
  { id: 10, sceneKey: 'swim', captionVi: 'Susie đang bơi dưới nước', before: 'Susie', after: '.', answer: 'is swimming', explainVi: 'swim gấp đôi chữ m trước khi thêm -ing → is swimming.' },
];

export const U3_EX2_10_BOX = [
  'not visit',
  'drive',
  'meet',
  'come',
  'give',
  'not use',
  'have',
  'take',
  'leave',
  'do',
] as const;

export interface MultiBlankU3Item {
  id: number;
  parts: string[];
  answers: string[];
  acceptedPerBlank?: string[][];
  explainVi: string;
}

export const U3_EX2_10_FUTURE_CONT: MultiBlankU3Item[] = [
  { id: 1, parts: ['My brother ', ' to Hai Phong tomorrow morning.'], answers: ['is driving'], explainVi: 'drive bỏ -e thêm -ing → is driving (kế hoạch sáng mai).' },
  { id: 2, parts: ['', ' your daughter ', ' her homework after dinner?'], answers: ['Is', 'doing'], explainVi: 'Câu hỏi Hiện tại tiếp diễn số ít: Is + S + doing...?' },
  { id: 3, parts: ['All my friends ', ' to my party next week.'], answers: ['are coming'], explainVi: 'come bỏ -e thêm -ing → are coming.' },
  { id: 4, parts: ['I ', ' the car tonight. You can borrow it.'], answers: ['am not using'], acceptedPerBlank: [['am not using', "'m not using"]], explainVi: 'use bỏ -e thêm -ing; phủ định với I → am not using.' },
  { id: 5, parts: ['The company ', ' everyone a present for New Year.'], answers: ['is giving'], explainVi: 'give bỏ -e thêm -ing → is giving.' },
  { id: 6, parts: ['I ', " my friends at eight o'clock this evening."], answers: ['am meeting'], acceptedPerBlank: [['am meeting', "'m meeting"]], explainVi: 'Lịch hẹn tối nay → am meeting.' },
  { id: 7, parts: ['The train ', ' in ten minutes.'], answers: ['is leaving'], explainVi: 'leave bỏ -e thêm -ing → is leaving.' },
  { id: 8, parts: ['', " Dave's father ", ' him to the zoo at the weekend?'], answers: ['Is', 'taking'], explainVi: 'take bỏ -e thêm -ing → Is Dave\'s father taking...?' },
  { id: 9, parts: ['We ', ' our grandparents next Sunday.'], answers: ["aren't visiting"], acceptedPerBlank: [["aren't visiting", 'are not visiting']], explainVi: 'Phủ định số nhiều → aren\'t visiting.' },
  { id: 10, parts: ['They ', " a dinner party on Friday and you're invited."], answers: ['are having'], explainVi: 'have bỏ -e thêm -ing → are having.' },
];

export const U3_EX2_11_SIMPLE_VS_CONT: MultiBlankU3Item[] = [
  { id: 1, parts: ['I (meet) ', ' my uncle and aunt this evening.'], answers: ['am meeting'], acceptedPerBlank: [['am meeting', "'m meeting"]], explainVi: '"this evening" (kế hoạch tối nay) → Hiện tại tiếp diễn: am meeting.' },
  { id: 2, parts: ['(You / have) ', ' dinner with Mr. Bean tonight?'], answers: ['Are you having'], explainVi: '"tonight" (kế hoạch tối nay) → Are you having...?' },
  { id: 3, parts: ['Bob (not like) ', ' to listen to rock music.'], answers: ["doesn't like"], acceptedPerBlank: [["doesn't like", 'does not like']], explainVi: 'Sở thích lâu dài (và động từ "like" không chia tiếp diễn) → Hiện tại đơn: doesn\'t like.' },
  { id: 4, parts: ['The guests (leave) ', ' at 9 a.m next Wednesday.'], answers: ['are leaving'], explainVi: 'Kế hoạch đã lên lịch (next Wednesday) → are leaving.' },
  { id: 5, parts: ['I (not go) ', ' to the party tomorrow afternoon.'], answers: ['am not going'], acceptedPerBlank: [['am not going', "'m not going"]], explainVi: '"tomorrow afternoon" (kế hoạch) → am not going.' },
  { id: 6, parts: ['Phong often (play) ', ' football on the weekend.'], answers: ['plays'], explainVi: '"often" + "on the weekend" (thói quen) → Hiện tại đơn: plays.' },
  { id: 7, parts: ['We (visit) ', ' our grandparents this weekend.'], answers: ['are visiting'], explainVi: '"this weekend" (kế hoạch cụ thể cuối tuần này) → are visiting.' },
  { id: 8, parts: ['They (not go) ', ' to work on Saturdays and Sundays.'], answers: ["don't go"], acceptedPerBlank: [["don't go", 'do not go']], explainVi: '"on Saturdays and Sundays" (lịch lặp lại) → Hiện tại đơn: don\'t go.' },
  { id: 9, parts: ['Mr. Ninh (not work) ', ' in the office tomorrow.'], answers: ["isn't working"], acceptedPerBlank: [["isn't working", 'is not working']], explainVi: '"tomorrow" (kế hoạch ngày mai) → isn\'t working.' },
  { id: 10, parts: ['(Mary / have) ', ' short hair?'], answers: ['Does Mary have'], explainVi: 'Miêu tả đặc điểm ngoại hình dùng Hiện tại đơn → Does Mary have...?' },
];

/* ==================== STATION 04: EX II.12 (15 MCQ) & II.13 (DIALOGUE) (pp.71–72) ==================== */
export interface U3McqItem {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explainVi: string;
}

export const U3_EX2_12_MCQ: U3McqItem[] = [
  { id: 1, question: 'How many ____ are there on our body?', options: ['shoulders', 'shoulder', 'heart', 'head'], correctIndex: 0, explainVi: 'Sau "How many" phải là danh từ số nhiều → shoulders (đôi vai).' },
  { id: 2, question: 'What colour do you like? — I like ____.', options: ['round', 'oval', 'purple', 'long'], correctIndex: 2, explainVi: 'Câu hỏi về màu sắc (colour) → purple (màu tím).' },
  { id: 3, question: 'The dentist told me to open my ____.', options: ['eyes', 'mouth', 'cloth', 'teeth'], correctIndex: 1, explainVi: 'Nha sĩ bảo há miệng → open my mouth.' },
  { id: 4, question: 'Her ____ are full.', options: ['lips', 'shoulders', 'ear', 'nose'], correctIndex: 0, explainVi: 'Cụm từ miêu tả ngoại hình: full lips (đôi môi đầy đặn).' },
  { id: 5, question: 'We go to school on ____ every day.', options: ['foot', 'ground', 'toe', 'finger'], correctIndex: 0, explainVi: 'Cụm cố định: go on foot (đi bộ).' },
  { id: 6, question: 'He is ____ and kind.', options: ['society', 'social', 'sociable', 'generously'], correctIndex: 2, explainVi: 'Sau "is" cần tính từ chỉ tính cách song song với "kind" → sociable (hòa đồng).' },
  { id: 7, question: "He is communicative. He isn't ____ in public.", options: ['reserved', 'kind', 'generous', 'sociable'], correctIndex: 0, explainVi: 'Giao tiếp giỏi (communicative) → không dè dặt, kín đáo (reserved).' },
  { id: 8, question: 'She has short ____ hair and blue eyes.', options: ['curl', 'love', 'curly', 'lovely'], correctIndex: 2, explainVi: 'Tính từ miêu tả kiểu tóc xoăn → curly hair.' },
  { id: 9, question: '____, we arrived in time to save the boy out of the flame.', options: ['Unlucky', 'Lucky', 'Unluckily', 'Luckily'], correctIndex: 3, explainVi: 'Đầu câu trước dấu phẩy bổ nghĩa cho cả câu → trạng từ Luckily (May mắn thay).' },
  { id: 10, question: 'Their ____ is very good. They were close friends when they were students.', options: ['friend', 'friendly', 'friendship', 'unfriendly'], correctIndex: 2, explainVi: 'Sau tính từ sở hữu "Their" cần danh từ → friendship (tình bạn).' },
  { id: 11, question: 'You look more ____ than you were yesterday.', options: ['beautifully', 'beauty', 'very beautiful', 'beautiful'], correctIndex: 3, explainVi: 'Sau "look + more" cần tính từ gốc → more beautiful.' },
  { id: 12, question: 'He is ____ kind and sociable.', options: ['extremely', 'extreme', 'very extreme', 'too extreme'], correctIndex: 0, explainVi: 'Trước tính từ "kind" cần trạng từ chỉ mức độ → extremely (cực kỳ).' },
  { id: 13, question: 'Does she have ____ cats?', options: ['loved', 'love', 'lovely', 'beauty'], correctIndex: 2, explainVi: 'Trước danh từ "cats" cần tính từ → lovely (đáng yêu).' },
  { id: 14, question: 'There are many ____ cultures in Viet Nam.', options: ['differ', 'difference', 'differently', 'different'], correctIndex: 3, explainVi: 'Trước danh từ "cultures" cần tính từ → different (khác nhau).' },
  { id: 15, question: 'She has a lot of friends. She is ____.', options: ['unhappy', 'happily', 'happiness', 'happy'], correctIndex: 3, explainVi: 'Có nhiều bạn → vui vẻ, hạnh phúc → is happy.' },
];

export const U3_EX2_13_SENTENCES_BOX = [
  'Why do you like her?',
  'What does she look like?',
  "What's her name?",
  'Can you introduce me to her?',
  'Do you have a best friend?',
  'Is she beautiful?',
  'When and where did you meet her?',
] as const;

export interface U3DialogueSlot {
  id: number;
  maryReply: string;
  answer: string;
  explainVi: string;
}

export const U3_EX2_13_DIALOGUE: U3DialogueSlot[] = [
  { id: 1, maryReply: 'Of course!', answer: 'Do you have a best friend?', explainVi: 'Mở đầu cuộc trò chuyện hỏi xem Mary có bạn thân không.' },
  { id: 2, maryReply: 'Kate, Kate Johnson.', answer: "What's her name?", explainVi: 'Mary trả lời tên (Kate Johnson) → hỏi tên.' },
  { id: 3, maryReply: "She's tall and slim. She has long blond hair and blue eyes.", answer: 'What does she look like?', explainVi: 'Mary miêu tả ngoại hình → What does she look like?' },
  { id: 4, maryReply: 'Yes, she is.', answer: 'Is she beautiful?', explainVi: 'Câu trả lời Yes, she is → câu hỏi Yes/No với Is she...?' },
  { id: 5, maryReply: 'I met her on my first day at primary school. We were in the same class.', answer: 'When and where did you meet her?', explainVi: 'Trả lời thời gian & địa điểm gặp gỡ lần đầu.' },
  { id: 6, maryReply: "Because she's nice and very friendly. She has a great sense of humour. She always makes me laugh.", answer: 'Why do you like her?', explainVi: 'Trả lời bắt đầu bằng "Because..." → hỏi bằng "Why...?"' },
  { id: 7, maryReply: 'Of course!', answer: 'Can you introduce me to her?', explainVi: 'Kết thúc bằng lời đề nghị giới thiệu làm quen.' },
];

/* ==================== STATION 05: EX III — 3 READING PASSAGES (pp.73–74) ==================== */
export const U3_EX3_1_SEGMENTS = [
  'This ',
  ' my best friend. Her name ',
  ' Daisy. She ',
  ' twelve years old and she ',
  ' in Bristol, England. Daisy ',
  ' very pretty. She ',
  ' straight brown hair and dark brown eyes. Her nose ',
  ' straight and her lips ',
  ' rather thin. Daisy ',
  ' medium height, slim and very fit because she learns to dance and she ',
  ' very well. Daisy ',
  ' very friendly and confident and she ',
  ' a great sense of humour. I like being with her because she makes me feel happy and comfortable!',
];

export const U3_EX3_1_ANSWERS = [
  'is',
  'is',
  'is',
  'lives',
  'is',
  'has',
  'is',
  'are',
  'is',
  'dances',
  'is',
  'has',
];

export const U3_EX3_1_EXPLAINS = [
  'This + is (giới thiệu 1 người).',
  'Her name + is.',
  'She + is + tuổi.',
  'Sống ở Bristol → lives.',
  'Daisy + is + pretty (tính từ).',
  'She + has + tóc & mắt.',
  'Her nose (số ít) + is.',
  'her lips (số nhiều) + are.',
  'Daisy + is + medium height.',
  'Học nhảy (learns to dance) nên nhảy rất đẹp → dances.',
  'Daisy + is + friendly and confident.',
  'Cụm cố định: have/has a great sense of humour (có khiếu hài hước).',
];

export const U3_EX3_2_JANE_PASSAGE = `Jane is a gymnast. She is very pretty. She is tall and thin. She is light but she isn't weak. She has physical strength. She has an oval and lovely face. She has long black hair and brown eyes. She has a small mouth. Her teeth are also small and white. Everybody loves her because she always helps the others.`;

export const U3_EX3_2_JANE_MCQS: U3McqItem[] = [
  { id: 1, question: 'What does Jane do?', options: ['teacher', 'gymnast', 'doctor', 'dentist'], correctIndex: 1, explainVi: 'Câu 1: "Jane is a gymnast."' },
  { id: 2, question: 'What does she look like?', options: ['tall and slim', 'tall and thick', 'tall and fat', 'tall and short'], correctIndex: 0, explainVi: '"She is tall and thin" đồng nghĩa với tall and slim.' },
  { id: 3, question: 'She is ____.', options: ['light and weak', 'light but strong', 'thin and weak', 'tall and weak'], correctIndex: 1, explainVi: '"She is light but she isn\'t weak. She has physical strength" → light but strong.' },
  { id: 4, question: 'What color are her eyes?', options: ['black', 'grey', 'light', 'brown'], correctIndex: 3, explainVi: '"She has long black hair and brown eyes."' },
  { id: 5, question: 'Everybody loves her because ____.', options: ['she always helps the others.', 'she always asks the others for help.', 'she is tall, thin and strong.', 'she is beautiful.'], correctIndex: 0, explainVi: 'Câu cuối: "Everybody loves her because she always helps the others."' },
];

export const U3_EX3_3_MAX_PASSAGE = `I'm Max. My friend Helen is very beautiful. She is taller than me. She has blonde hair, chubby cheeks and round blue eyes. She's clever, patient and funny. She loves telling jokes. Her jokes are so funny that they make us laugh a lot. I love being with her because she helps me with a lot of things. On the weekend, she often goes to my house and does homework with me. But this weekend, we are going to the cinema to see a new film, Annabelle. It would be fun.`;

export const U3_EX3_3_MAX_MCQS: U3McqItem[] = [
  { id: 1, question: 'Is the writer taller than Helen?', options: ['Yes, Helen is taller than Max.', 'No, Helen is shorter than Max.', 'Yes, Max is taller than Helen.', "No, Max isn't taller than Helen."], correctIndex: 3, explainVi: 'Max nói "She is taller than me" → Max KHÔNG cao hơn Helen → D.' },
  { id: 2, question: 'What does Helen have?', options: ['blonde hair', 'chubby cheeks', 'round eyes', 'All are correct'], correctIndex: 3, explainVi: 'Helen có cả 3 đặc điểm: blonde hair, chubby cheeks và round blue eyes → D.' },
  { id: 3, question: 'Why does the writer love being with Helen?', options: ["She's funny.", 'She helps him.', 'She tells jokes.', "She's beautiful."], correctIndex: 1, explainVi: '"I love being with her because she helps me with a lot of things."' },
  { id: 4, question: 'What do they often do on the weekends?', options: ['do homework', 'do housework', 'make cakes', 'ride horses'], correctIndex: 0, explainVi: '"On the weekend, she often goes to my house and does homework with me."' },
  { id: 5, question: 'What are they going to do this weekend?', options: ['watch TV', 'see a film', 'do homework', 'go to school'], correctIndex: 1, explainVi: '"...we are going to the cinema to see a new film, Annabelle."' },
];

/* ==================== STATION 06: EX IV — 4 WRITING EXERCISES (pp.74–76) ==================== */
export interface QAPairWritingItem {
  id: number;
  cue: string;
  questionAnswer: string;
  replyAnswer: string;
  acceptedReplies?: string[];
  explainVi: string;
}

export const U3_EX4_1_BE_QA: QAPairWritingItem[] = [
  { id: 1, cue: 'he / talkative / quiet', questionAnswer: 'Is he talkative?', replyAnswer: "No, he isn't. He is quiet.", acceptedReplies: ["No, he isn't. He's quiet."], explainVi: 'Có 2 tính từ trái ngược → trả lời No và nêu tính từ sau.' },
  { id: 2, cue: 'they / shy / confident', questionAnswer: 'Are they shy?', replyAnswer: "No, they aren't. They are confident.", acceptedReplies: ["No, they aren't. They're confident."], explainVi: 'Chủ ngữ số nhiều "they" dùng "Are".' },
  { id: 3, cue: 'you / patient', questionAnswer: 'Are you patient?', replyAnswer: 'Yes, I am.', explainVi: 'Chỉ có 1 tính từ → trả lời khẳng định Yes, I am.' },
  { id: 4, cue: 'she / responsible / irresponsible', questionAnswer: 'Is she responsible?', replyAnswer: "No, she isn't. She is irresponsible.", acceptedReplies: ["No, she isn't. She's irresponsible."], explainVi: 'responsible (có trách nhiệm) ↔ irresponsible (vô trách nhiệm).' },
  { id: 5, cue: 'they / serious', questionAnswer: 'Are they serious?', replyAnswer: 'Yes, they are.', explainVi: 'Chỉ 1 tính từ → Yes, they are.' },
];

export const U3_EX4_2_HAVE_QA: QAPairWritingItem[] = [
  { id: 1, cue: 'they / long arms', questionAnswer: 'Do they have long arms?', replyAnswer: 'Yes, they do.', explainVi: 'Câu hỏi với HAVE (chủ ngữ they) dùng trợ động từ Do.' },
  { id: 2, cue: 'the dog / a long tail', questionAnswer: 'Does the dog have a long tail?', replyAnswer: 'Yes, it does.', explainVi: 'the dog số ít → dùng Does + have; trả lời đại từ "it".' },
  { id: 3, cue: 'she / short hair / long hair', questionAnswer: 'Does she have short hair?', replyAnswer: "No, she doesn't. She has long hair.", explainVi: 'Có 2 cụm đối lập → trả lời No, she doesn\'t. She has long hair.' },
  { id: 4, cue: 'he / big feet / small feet', questionAnswer: 'Does he have big feet?', replyAnswer: "No, he doesn't. He has small feet.", explainVi: 'he số ít → Does he have... / He has small feet.' },
  { id: 5, cue: 'she / a round face', questionAnswer: 'Does she have a round face?', replyAnswer: 'Yes, she does.', explainVi: 'Chỉ 1 cụm → Yes, she does.' },
];

export interface U3ReorderItem {
  id: number;
  words: string[];
  answer: string;
  explainVi: string;
}

export const U3_EX4_3_REORDER: U3ReorderItem[] = [
  { id: 1, words: ['brown', 'has', 'eyes.', 'She', 'big'], answer: 'She has big brown eyes.', explainVi: 'Trật tự tính từ: Kích thước (big) → Màu sắc (brown) + eyes.' },
  { id: 2, words: ['gray', 'a', 'Mr. Peter', 'beard.', 'long', 'has'], answer: 'Mr. Peter has a long gray beard.', explainVi: 'Độ dài (long) → Màu sắc (gray) + beard.' },
  { id: 3, words: ['many', 'are', 'flowers', 'garden.', 'in', 'red', 'her', 'There', 'small'], answer: 'There are many small red flowers in her garden.', explainVi: 'Kích thước (small) → Màu sắc (red) + flowers.' },
  { id: 4, words: ['car.', 'is', 'black', 'It', 'big', 'a'], answer: 'It is a big black car.', explainVi: 'Kích thước (big) → Màu sắc (black) + car.' },
  { id: 5, words: ['draw', 'a', 'thin', 'Firstly,', 'line.', 'long'], answer: 'Firstly, draw a long thin line.', explainVi: 'Độ dài (long) → Hình dáng/độ mảnh (thin) + line.' },
  { id: 6, words: ['daughter', 'blond', 'has', 'hair.', 'His', 'long'], answer: 'His daughter has long blond hair.', explainVi: 'Độ dài (long) → Màu sắc (blond) + hair.' },
  { id: 7, words: ['talking', 'man.', 'is', 'a', 'She', 'handsome', 'to', 'tall'], answer: 'She is talking to a tall handsome man.', explainVi: 'Hiện tại tiếp diễn: She is talking to a tall handsome man.' },
  { id: 8, words: ['sister', 'short', 'Does', 'hair?', "Lan's", 'wavy', 'have'], answer: "Does Lan's sister have short wavy hair?", explainVi: 'Độ dài (short) → Kiểu dáng (wavy) + hair.' },
  { id: 9, words: ['married', 'fat', 'She', 'short', 'a', 'man.'], answer: 'She married a short fat man.', explainVi: 'Chiều cao (short) → Vóc dáng (fat) + man.' },
  { id: 10, words: ['teacher', 'dark', 'has', 'Our', 'hair.', 'straight', 'long'], answer: 'Our teacher has long straight dark hair.', explainVi: 'Quy tắc vàng: Độ dài (long) → Kiểu dáng (straight) → Màu sắc (dark) + hair.' },
];

export const U3_EX4_4_TUAN_PROFILE = {
  name: 'Tuan',
  appearance: 'tall, handsome, short fair hair, big brown eyes',
  character: 'intelligent, funny',
  hobbies: 'listening to music, can sing many songs',
  modelParagraph:
    'My best friend is Tuan. We live in the same building and we go to the same class. Tuan is tall and handsome. He has short fair hair and big brown eyes. He is intelligent and funny. He tells jokes and everyone laughs. Tuan likes listening to music and he can sing many songs. I like chatting with him about famous singers. At school, we often do our exercises and play sports together. Next Sunday we are going to the pop concert. Tuan is very happy about this.',
  translationVi:
    'Bạn thân nhất của em là Tuấn. Chúng em sống cùng tòa nhà và học chung lớp. Tuấn cao và đẹp trai. Cậu ấy có mái tóc sáng màu ngắn và đôi mắt nâu to. Cậu ấy thông minh và hài hước. Cậu ấy hay kể chuyện cười khiến ai cũng bật cười. Tuấn thích nghe nhạc và có thể hát rất nhiều bài. Em thích trò chuyện với cậu ấy về các ca sĩ nổi tiếng. Ở trường, chúng em thường làm bài tập và chơi thể thao cùng nhau. Chủ nhật tuần tới chúng em sẽ đi xem buổi hòa nhạc pop. Tuấn rất hào hứng về chuyện này.',
};

/* =====================================================================================
   TEST FOR UNIT 3 — COMPLETE 13 PARTS (BOOK PAGES 77–83 / PDF PAGES 81–87)
   ===================================================================================== */

// PART I: Odd One Out (8 câu)
export const TEST3_PART1_ODD: {
  id: number;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explainVi: string;
}[] = [
  { id: 1, options: ['young', 'old', 'new', 'middle-aged'], correctIndex: 2, explainVi: 'new dùng cho đồ vật (mới); young, old, middle-aged chỉ độ tuổi con người.' },
  { id: 2, options: ['lazy', 'smart', 'social', 'generous'], correctIndex: 2, explainVi: 'social (thuộc về xã hội); 3 từ còn lại là tính từ miêu tả tính cách con người (nếu tính cách phải là sociable).' },
  { id: 3, options: ['beauty', 'fat', 'thin', 'slim'], correctIndex: 0, explainVi: 'beauty là danh từ (vẻ đẹp); fat, thin, slim là tính từ miêu tả vóc dáng.' },
  { id: 4, options: ['creative', 'confident', 'kind', 'friend'], correctIndex: 3, explainVi: 'friend là danh từ (người bạn); creative, confident, kind là tính từ tính cách.' },
  { id: 5, options: ['shoulders', 'jeans', 'glasses', 'trousers'], correctIndex: 0, explainVi: 'shoulders (đôi vai) là bộ phận cơ thể; jeans, glasses, trousers là trang phục/phụ kiện.' },
  { id: 6, options: ['eyes', 'legs', 'arms', 'nose'], correctIndex: 3, explainVi: 'nose là bộ phận số ít (chỉ có 1); eyes, legs, arms đều là bộ phận có đôi (số nhiều).' },
  { id: 7, options: ['black', 'brown', 'blonde', 'short'], correctIndex: 3, explainVi: 'short chỉ độ dài/chiều cao; black, brown, blonde đều là màu sắc của tóc.' },
  { id: 8, options: ['intelligent', 'talkative', 'sensitive', 'talking'], correctIndex: 3, explainVi: 'talking là dạng V-ing; intelligent, talkative, sensitive là tính từ miêu tả tính cách.' },
];

// PART II: Tick the Opposites (8 câu)
export const TEST3_PART2_OPPOSITES: {
  id: number;
  word: string;
  wordVi: string;
  options: [string, string];
  correctIndex: 0 | 1;
  explainVi: string;
}[] = [
  { id: 1, word: 'mean', wordVi: 'keo kiệt', options: ['generous', 'bright'], correctIndex: 0, explainVi: 'mean (keo kiệt) ↔ generous (hào phóng).' },
  { id: 2, word: 'talkative', wordVi: 'nói nhiều', options: ['helpful', 'quiet'], correctIndex: 1, explainVi: 'talkative (nói nhiều) ↔ quiet (ít nói, trầm tĩnh).' },
  { id: 3, word: 'rude', wordVi: 'thô lỗ', options: ['moody', 'polite'], correctIndex: 1, explainVi: 'rude (thô lỗ) ↔ polite (lịch sự).' },
  { id: 4, word: 'outgoing', wordVi: 'hướng ngoại', options: ['shy', 'reliable'], correctIndex: 0, explainVi: 'outgoing (cởi mở) ↔ shy (nhút nhát).' },
  { id: 5, word: 'hard-working', wordVi: 'chăm chỉ', options: ['serious', 'lazy'], correctIndex: 1, explainVi: 'hard-working (chăm chỉ) ↔ lazy (lười biếng).' },
  { id: 6, word: 'clever', wordVi: 'thông minh', options: ['silly', 'curious'], correctIndex: 0, explainVi: 'clever (lanh lợi) ↔ silly (ngớ ngẩn).' },
  { id: 7, word: 'depressed', wordVi: 'chán nản, buồn bã', options: ['sad', 'cheerful'], correctIndex: 1, explainVi: 'depressed (ủ rũ) ↔ cheerful (vui tươi).' },
  { id: 8, word: 'funny', wordVi: 'hài hước', options: ['serious', 'humorous'], correctIndex: 0, explainVi: 'funny (vui nhộn) ↔ serious (nghiêm túc).' },
];

// PART III: Multiple Choice (15 câu)
export const TEST3_PART3_MCQ: U3McqItem[] = [
  { id: 1, question: 'My best friend ____ a round face and big eyes.', options: ['have', 'has', 'is', 'gets'], correctIndex: 1, explainVi: 'My best friend (số ít) + bộ phận cơ thể → has.' },
  { id: 2, question: 'My brother is really ____. He always does his homework.', options: ['hard-working', 'serious', 'confident', 'patient'], correctIndex: 0, explainVi: 'Luôn làm bài tập đầy đủ → chăm chỉ (hard-working).' },
  { id: 3, question: 'When eating, most Vietnamese people hold chopsticks in their right ____.', options: ['arm', 'leg', 'finger', 'hand'], correctIndex: 3, explainVi: 'Cầm đũa bằng tay phải → right hand.' },
  { id: 4, question: 'Which do you prefer, straight hair or ____ hair?', options: ['long', 'blonde', 'curly', 'thick'], correctIndex: 2, explainVi: 'Đối lập với tóc thẳng (straight hair) là tóc xoăn (curly hair).' },
  { id: 5, question: 'The kids are ____ their tricycles around the playground.', options: ['playing', 'riding', 'taking', 'driving'], correctIndex: 1, explainVi: 'Đi xe đạp / xe ba bánh dùng động từ ride → riding.' },
  { id: 6, question: 'Norman is very shy, but his brother is ____.', options: ['easygoing', 'calm', 'patient', 'outgoing'], correctIndex: 3, explainVi: '"but" nối 2 tính từ trái nghĩa: shy ↔ outgoing.' },
  { id: 7, question: "I'm going to the ____ to get my new glasses.", options: ["artist's", "engineer's", "mechanic's", "optician's"], correctIndex: 3, explainVi: 'Cửa hàng kính mắt → optician\'s.' },
  { id: 8, question: 'Wearing uniforms helps students feel ____ in many ways.', options: ['practical', 'impractical', 'equal', 'equally'], correctIndex: 2, explainVi: 'Sau "feel" dùng tính từ: feel equal (cảm thấy bình đẳng).' },
  { id: 9, question: 'Please go and ____ a bath.', options: ['wash', 'make', 'take', 'do'], correctIndex: 2, explainVi: 'Cụm cố định: take a bath (tắm bồn).' },
  { id: 10, question: 'What time does Jane usually wake ____ in the morning?', options: ['up', 'at', 'of', 'out'], correctIndex: 0, explainVi: 'Cụm động từ: wake up (thức dậy).' },
  { id: 11, question: 'Do you ____ to go to the doctor this afternoon?', options: ['think', 'attend', 'intend', 'advise'], correctIndex: 2, explainVi: 'intend to V (dự định làm gì).' },
  { id: 12, question: 'Look! ____ naughty boy!', options: ['What a', 'How a', 'What', 'How'], correctIndex: 0, explainVi: 'Câu cảm thán với danh từ đếm được số ít: What + a/an + adj + N!' },
  { id: 13, question: 'My girlfriend is a ____.', options: ['gymnastic', 'gymnasium', 'gymnast', 'gymnasts'], correctIndex: 2, explainVi: 'Sau "a" cần danh từ chỉ nghề nghiệp số ít: gymnast (vận động viên thể dục dụng cụ).' },
  { id: 14, question: 'She has ____.', options: ['black long hair', 'hair black long', 'long black hair', 'black hair long'], correctIndex: 2, explainVi: 'Trật tự đúng: Độ dài (long) → Màu sắc (black) + hair.' },
  { id: 15, question: 'My father always goes ____ a walk in the early morning.', options: ['to', 'on', 'in', 'for'], correctIndex: 3, explainVi: 'Cụm từ cố định: go for a walk (đi dạo).' },
];

// PART IV: Verb Form (10 câu)
export const TEST3_PART4_VERBS: MultiBlankU3Item[] = [
  { id: 1, parts: ['We ', ' (have) a staff meeting next Monday.'], answers: ['are having'], explainVi: 'Kế hoạch đã lên lịch (next Monday) → are having.' },
  { id: 2, parts: ['Lisa ', ' (wear) her uniform every school day.'], answers: ['wears'], explainVi: '"every school day" (thói quen) → Hiện tại đơn: wears.' },
  { id: 3, parts: ['What time ', ' (you / meet) Mathew tomorrow?'], answers: ['are you meeting'], explainVi: 'Hỏi lịch hẹn ngày mai → are you meeting.' },
  { id: 4, parts: ['Tom and Mary ', " (run) because they're late for school."], answers: ['are running'], explainVi: 'Đang chạy ngay lúc nói (run gấp đôi n) → are running.' },
  { id: 5, parts: ['My father ', ' (not drink) coffee very often.'], answers: ["doesn't drink"], acceptedPerBlank: [["doesn't drink", 'does not drink']], explainVi: '"very often" (thói quen) → doesn\'t drink.' },
  { id: 6, parts: ['Wait a minute, she ', ' (speak) to someone on her mobile.'], answers: ['is speaking'], explainVi: '"Wait a minute" (dấu hiệu đang xảy ra) → is speaking.' },
  { id: 7, parts: ['', ' (You / have) dinner with Mr. Bean tonight?'], answers: ['Are you having'], explainVi: 'Kế hoạch tối nay → Are you having.' },
  { id: 8, parts: ['Bob ', ' (not like) to listen to rock music.'], answers: ["doesn't like"], acceptedPerBlank: [["doesn't like", 'does not like']], explainVi: 'Động từ chỉ sở thích "like" dùng Hiện tại đơn → doesn\'t like.' },
  { id: 9, parts: ['The guests ', ' (leave) at 9 a.m next Wednesday.'], answers: ['are leaving'], explainVi: 'Lịch trình cố định sắp tới → are leaving.' },
  { id: 10, parts: ['I ', ' (not go) to the party tomorrow afternoon.'], answers: ['am not going'], acceptedPerBlank: [['am not going', "'m not going"]], explainVi: 'Kế hoạch chiều mai → am not going.' },
];

// PART V: Find & Correct 8 Mistakes
export interface U3MistakeItem {
  id: number;
  sentence: string;
  wrong: string;
  fix: string;
  explainVi: string;
}

export const TEST3_PART5_MISTAKES: U3MistakeItem[] = [
  { id: 1, sentence: 'They usually watch TV, but now they read books.', wrong: 'read', fix: 'are reading', explainVi: 'Có trạng từ "now" → chia Hiện tại tiếp diễn: are reading.' },
  { id: 2, sentence: 'We go to the farm next week.', wrong: 'go', fix: 'are going', explainVi: '"next week" (kế hoạch tương lai gần) → are going.' },
  { id: 3, sentence: 'She often wear glasses.', wrong: 'wear', fix: 'wears', explainVi: 'Chủ ngữ "She" (ngôi 3 số ít) thì Hiện tại đơn → wears.' },
  { id: 4, sentence: 'This old lady has white tooth.', wrong: 'tooth', fix: 'teeth', explainVi: 'Răng nhiều chiếc (không có "a") → số nhiều bất quy tắc: teeth.' },
  { id: 5, sentence: 'Do you go to the beach with us next weekend?', wrong: 'Do you go', fix: 'Are you going', explainVi: 'Hỏi dự định cuối tuần tới (next weekend) → Are you going.' },
  { id: 6, sentence: 'Jane have a round face and dark brown eyes.', wrong: 'have', fix: 'has', explainVi: 'Chủ ngữ "Jane" số ít → has.' },
  { id: 7, sentence: 'She is very friend and helpful.', wrong: 'friend', fix: 'friendly', explainVi: 'Sau "is very" cần tính từ → friendly (thân thiện).' },
  { id: 8, sentence: 'I live in a apartment on Nguyen Trai Street.', wrong: 'a', fix: 'an', explainVi: 'apartment bắt đầu bằng nguyên âm a → dùng "an apartment".' },
];

// PART VI: Word Form (10 câu)
export interface U3WordFormItem {
  id: number;
  before: string;
  root: string;
  after: string;
  answer: string;
  explainVi: string;
}

export const TEST3_PART6_WORD_FORM: U3WordFormItem[] = [
  { id: 1, before: 'People in my country are very warm and', root: 'FRIEND', after: '.', answer: 'friendly', explainVi: 'Tính từ song song với "warm" → friendly.' },
  { id: 2, before: 'An', root: 'ORPHAN', after: 'is a home for children whose parents are dead.', answer: 'orphanage', explainVi: 'Danh từ chỉ trại trẻ mồ côi → orphanage.' },
  { id: 3, before: 'L.A. Hill is a', root: 'HUMOR', after: 'writer.', answer: 'humorous', explainVi: 'Tính từ bổ nghĩa cho "writer" → humorous (hài hước).' },
  { id: 4, before: "I'm", root: 'EXTREME', after: 'sorry for the delay.', answer: 'extremely', explainVi: 'Trạng từ đứng trước tính từ "sorry" → extremely.' },
  { id: 5, before: 'She looks more', root: 'BEAUTY', after: 'than her sister.', answer: 'beautiful', explainVi: 'Sau "looks more" cần tính từ → beautiful.' },
  { id: 6, before: 'Huy is very', root: 'DEPEND', after: ". He's not controlled in any way by other people or things.", answer: 'independent', explainVi: 'Không bị ai kiểm soát → tự lập (independent).' },
  { id: 7, before: 'I think Jane is very', root: 'SENSE', after: '. She is easily hurt by the small things.', answer: 'sensitive', explainVi: 'Dễ bị tổn thương bởi chuyện nhỏ → sensitive (nhạy cảm).' },
  { id: 8, before: 'Viet is very', root: 'CREATE', after: '. He always has a lot of new ideas.', answer: 'creative', explainVi: 'Luôn có nhiều ý tưởng mới → creative (sáng tạo).' },
  { id: 9, before: 'You must be', root: 'CARE', after: 'when you open that door.', answer: 'careful', explainVi: 'Sau "must be" cần tính từ → careful (cẩn thận).' },
  { id: 10, before: 'I think you look very', root: 'FUN', after: 'in that hat.', answer: 'funny', explainVi: 'Trông rất buồn cười/ngộ nghĩnh → funny.' },
];

// PART VII: Prepositions (8 câu)
export const TEST3_PART7_PREPOSITIONS: MultiBlankU3Item[] = [
  { id: 1, parts: ['There are lots of parties ', ' Christmas.'], answers: ['at'], explainVi: 'Trước tên dịp lễ (không có chữ Day) dùng "at Christmas".' },
  { id: 2, parts: ['I received a letter ', ' my friend yesterday.'], answers: ['from'], explainVi: 'Nhận thư TỪ ai → receive something from someone.' },
  { id: 3, parts: ['She usually goes swimming ', ' Sunday mornings.'], answers: ['on'], explainVi: 'Trước thứ trong tuần kèm buổi (Sunday mornings) luôn dùng "on".' },
  { id: 4, parts: ['Khoi is my close friend. I spend most of my free time ', ' him.'], answers: ['with'], explainVi: 'Dành thời gian CÙNG ai → spend time with someone.' },
  { id: 5, parts: ['He does volunteer work ', ' a local hospital.'], answers: ['at'], acceptedPerBlank: [['at', 'in']], explainVi: 'Làm tình nguyện tại bệnh viện địa phương → at a local hospital.' },
  { id: 6, parts: ["His friends didn't laugh ", ' his jokes.'], answers: ['at'], explainVi: 'Cụm cố định: laugh at (cười trước câu chuyện đùa).' },
  { id: 7, parts: ['My friends usually enjoy my sense ', ' humor.'], answers: ['of'], explainVi: 'Cụm cố định: sense of humor (khiếu hài hước).' },
  { id: 8, parts: ['He lives ', ' 26 Tran Phu Street ', ' Ha Noi.'], answers: ['at', 'in'], explainVi: 'at + số nhà cụ thể (26 Tran Phu Street) · in + thành phố (Ha Noi).' },
];

// PART VIII: Questions for Underlined Parts (5 câu)
export const TEST3_PART8_WH_QUESTIONS: {
  id: number;
  sentence: string;
  underlined: string;
  answer: string;
  accepted?: string[];
  explainVi: string;
}[] = [
  { id: 1, sentence: 'They are visiting a milk farm on Saturday.', underlined: 'a milk farm', answer: 'Where are they visiting on Saturday?', accepted: ['What are they visiting on Saturday?'], explainVi: 'Hỏi địa điểm tham quan (a milk farm) → Where/What are they visiting on Saturday?' },
  { id: 2, sentence: "I'm going to the judo club with my brother.", underlined: 'my brother', answer: 'Who are you going to the judo club with?', explainVi: 'Hỏi đi cùng ai (my brother) → Who are you going to the judo club with?' },
  { id: 3, sentence: "I'm not going to your party because I visit my grandparents.", underlined: 'because I visit my grandparents', answer: 'Why are you not going to my party?', accepted: ["Why aren't you going to my party?"], explainVi: 'Hỏi lý do (because...) → Why are you not / aren\'t you going...?' },
  { id: 4, sentence: "We're working on our school project.", underlined: 'our school project', answer: 'What are you working on?', explainVi: 'Hỏi đang làm dự án gì → What are you working on?' },
  { id: 5, sentence: 'She understands things very quickly and easily.', underlined: 'very quickly and easily', answer: 'How does she understand things?', explainVi: 'Hỏi cách thức hiểu bài (trạng từ) → How does she understand things?' },
];

// PART IX: Complete Paragraph about Nien & Hoa (11 verbs)
export const TEST3_PART9_SEGMENTS = [
  'Nien (1. be) ',
  " Hoa's next-door neighbor in Hue. She (2. be) ",
  ' very beautiful. She (3. have) ',
  ' big brown eyes and a lovely smile. Last week, she (4. go) ',
  ' to Hanoi (5. visit) ',
  ' Hoa. They (6. travel) ',
  ' around the city and (7. see) ',
  ' a lot of interesting places. Nien (8. think) ',
  ' Hanoi (9. be) ',
  ' beautiful but too noisy and busy so she (10. not like) ',
  ' (11. live) ',
  ' there.',
];

export const TEST3_PART9_ANSWERS: { ans: string; accepted?: string[]; noteVi: string }[] = [
  { ans: 'was', noteVi: 'Trước đây là hàng xóm ở Huế (quá khứ) → was.' },
  { ans: 'is', noteVi: 'Sự thật hiện tại (cô ấy rất xinh) → is.' },
  { ans: 'has', noteVi: 'Miêu tả ngoại hình hiện tại → has.' },
  { ans: 'went', noteVi: '"Last week" (tuần trước) → quá khứ đơn của go là went.' },
  { ans: 'to visit', noteVi: 'Chỉ mục đích "để thăm Hoa" → to visit.' },
  { ans: 'travelled', accepted: ['traveled'], noteVi: 'Kể lại chuyến đi tuần trước → quá khứ đơn: travelled.' },
  { ans: 'saw', noteVi: 'Quá khứ đơn bất quy tắc của see → saw.' },
  { ans: 'thinks', noteVi: 'Suy nghĩ chung hiện tại của Niên → thinks.' },
  { ans: 'is', noteVi: 'Hanoi (số ít) + is.' },
  { ans: "doesn't like", accepted: ['does not like'], noteVi: 'Phủ định Hiện tại đơn với she → doesn\'t like.' },
  { ans: 'to live', accepted: ['living'], noteVi: 'Sau like dùng to V hoặc V-ing → to live / living.' },
];

// PART X: Reading Comprehension — Mai & Vy (8 Q&A)
export const TEST3_PART10_PASSAGE = `Hi, my name's Mai. And this is a picture of me and my friend Vy. Vy is the girl who has a bow in her hair. She is a pretty girl with dimpled cheeks. She and I first met at primary school and we became great friends. She is kind, jolly and helpful. We are classmates again this year and we go to school together each morning.
Vy likes to joke and play games. She lives near my house. In the evenings, we usually meet at my house. We sit in the garden and read story books. Vy is good at Mathematics. So, she often helps me with my Mathematics homework. At the moment, Vy and I are doing our English project in my room. We both like English. This Sunday morning we are going to our school English club.
I hope Vy and I will be in the same class again next year. I like her very much and she is my best friend.`;

export const TEST3_PART10_QA: {
  id: number;
  question: string;
  answer: string;
  accepted: string[];
  explainVi: string;
}[] = [
  { id: 1, question: 'Who is the girl with a bow in the hair?', answer: "She's Vy.", accepted: ['She is Vy.', 'Vy.', 'It is Vy.', "It's Vy."], explainVi: 'Thông tin đoạn 1: "Vy is the girl who has a bow in her hair."' },
  { id: 2, question: 'Are Mai and Vy in different classes now?', answer: "No, they aren't.", accepted: ['No, they are not.'], explainVi: '"We are classmates again this year" → học CÙNG lớp, không phải khác lớp.' },
  { id: 3, question: 'Where did they first meet?', answer: 'They first met at primary school.', accepted: ['At primary school.'], explainVi: '"She and I first met at primary school."' },
  { id: 4, question: 'What is Vy like?', answer: 'She is kind, jolly and helpful.', accepted: ['Kind, jolly and helpful.', "She's kind, jolly and helpful."], explainVi: 'Hỏi tính cách: "She is kind, jolly and helpful."' },
  { id: 5, question: 'What does Vy like?', answer: 'She likes to joke and play games.', accepted: ['Vy likes to joke and play games.', 'She likes to joke, play games and English.'], explainVi: 'Đoạn 2: "Vy likes to joke and play games."' },
  { id: 6, question: 'What do Vy and Mai usually do in the evenings?', answer: 'They sit in the garden and read story books.', accepted: ['They usually meet at Mai\'s house, sit in the garden and read story books.', 'They read story books.'], explainVi: '"In the evenings, we usually meet at my house. We sit in the garden and read story books."' },
  { id: 7, question: 'Where are they now?', answer: "They are in Mai's room now.", accepted: ["They are in Mai's room.", "In Mai's room."], explainVi: '"At the moment, Vy and I are doing our English project in my room."' },
  { id: 8, question: 'What are they doing this Sunday morning?', answer: 'They are going to the school English club.', accepted: ['They are going to their school English club.'], explainVi: '"This Sunday morning we are going to our school English club."' },
];

// PART XI: Cloze Box — Hang (10 words)
export const TEST3_PART11_BOX = [
  'days',
  'lot',
  'time',
  'younger',
  'free',
  'with',
  'large',
  'some',
  'ones',
  'listening',
] as const;

export const TEST3_PART11_SEGMENTS = [
  'Hang is fourteen years old. She is a pretty girl ',
  ' long black hair. She goes to school five ',
  ' a week and usually goes swimming with ',
  ' friends on Saturday mornings. She lives in a ',
  ' house with her mother, father and ',
  ' brother at 2/34 Nguyen Trai Street. Hang has a ',
  ' of friends. Of all her friends, Nga and Thuy are the ',
  ' she spends most of her ',
  ' with. They all like ',
  ' to music and playing sports in their ',
  ' time.',
];

export const TEST3_PART11_ANSWERS = [
  'with',
  'days',
  'some',
  'large',
  'younger',
  'lot',
  'ones',
  'time',
  'listening',
  'free',
];

// PART XII: Reading — Hoa & Thu (5 MCQs)
export const TEST3_PART12_PASSAGE = `My name is Hoa and my best friend is Thu. She is my classmate. We are both in grade 6 at Nguyen Hue Secondary School. Thu lives next to my house. Every day, my father takes us to school on his motorbike, and we come home on foot in the evening. She is an intelligent girl. Her favourite subject is Math, and she is really good at it. Mine is English. We usually help each other with our homework. Whenever I am sad, Thu always tells me stories to make me happy. I feel really lucky to have a best friend like Thu.`;

export const TEST3_PART12_MCQS: U3McqItem[] = [
  { id: 1, question: 'How old are Hoa and Thu?', options: ['10', '12', '14'], correctIndex: 1, explainVi: 'Cả hai học lớp 6 (grade 6) → 12 tuổi (B. 12).' },
  { id: 2, question: 'How do they go to school?', options: ['By bus.', 'On foot.', 'By motorbike.'], correctIndex: 2, explainVi: '"Every day, my father takes us to school on his motorbike" → đi học bằng xe máy (về nhà mới đi bộ).' },
  { id: 3, question: 'What is NOT TRUE about the passage?', options: ['They are classmates.', 'They are neighbours.', "English is Thu's favourite subject."], correctIndex: 2, explainVi: 'Môn yêu thích của Thu là Toán (Math), còn tiếng Anh là của Hoa → C sai.' },
  { id: 4, question: 'What do they usually help each other?', options: ['Do their homework.', 'Do their housework.', 'Do their shopping.'], correctIndex: 0, explainVi: '"We usually help each other with our homework."' },
  { id: 5, question: 'What does Thu do to make Hoa happy?', options: ['Sing a song.', 'Tell stories.', 'Buy presents.'], correctIndex: 1, explainVi: '"Whenever I am sad, Thu always tells me stories to make me happy."' },
];

// PART XIII: Rewrite 10 Sentences (HAVE <-> BE)
export const TEST3_PART13_REWRITE: U3RewriteItem[] = [
  { id: 1, prompt: 'This old man is bald.', answer: 'This is an old bald man.', explainVi: 'Đưa tính từ "old bald" lên trước danh từ "man": This is an old bald man.' },
  { id: 2, prompt: 'The girl has long brown hair.', answer: "The girl's hair is long and brown.", explainVi: 'Chuyển sang sở hữu cách + BE: The girl\'s hair is long and brown.' },
  { id: 3, prompt: 'The boys have blue eyes.', answer: "The boys' eyes are blue.", explainVi: 'The boys (số nhiều có -s) → chỉ thêm dấu nháy đơn: The boys\' eyes are blue.' },
  { id: 4, prompt: 'Jane has curved eyelashes.', answer: "Jane's eyelashes are curved.", explainVi: 'eyelashes số nhiều → Jane\'s eyelashes are curved.' },
  { id: 5, prompt: 'Jordie is not medium height.', answer: "Jordie's height is not medium.", accepted: ["Jordie's height isn't medium."], explainVi: 'Chiều cao của Jordie → Jordie\'s height is not medium.' },
  { id: 6, prompt: 'The dog has a long tail.', answer: "The dog's tail is long.", explainVi: 'Cái đuôi của chú chó → The dog\'s tail is long.' },
  { id: 7, prompt: 'Jackie and Danny have big black eyes.', answer: "Jackie and Danny's eyes are big and black.", explainVi: 'eyes số nhiều → Jackie and Danny\'s eyes are big and black.' },
  { id: 8, prompt: 'Does she have a round face or oval face?', answer: 'Is her face round or oval?', explainVi: 'Đổi câu hỏi Does she have... → Is her face...?' },
  { id: 9, prompt: 'Do Susan and Jimmy have dark complexions?', answer: "Are Susan and Jimmy's complexions dark?", explainVi: 'complexions số nhiều → Are Susan and Jimmy\'s complexions dark?' },
  { id: 10, prompt: 'They do not have chubby cheeks.', answer: 'Their cheeks are not chubby.', accepted: ["Their cheeks aren't chubby."], explainVi: 'Đổi They do not have... → Their cheeks are not chubby.' },
];
