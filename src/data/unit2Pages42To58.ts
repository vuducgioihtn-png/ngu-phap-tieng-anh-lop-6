// Complete verified dataset for Unit 2 Remaining Exercises (Book pp. 42-51)
// and TEST FOR UNIT 2 (Book pp. 52-58) — Chinh phục Ngữ pháp & Bài tập Tiếng Anh 6 Tập 1

export interface Ex2RoomItem {
  id: number;
  before: string;
  after: string;
  answer: string;
  hintVi: string;
  explainVi: string;
}

export const U2_EX2_WORD_BOX = [
  'bathroom',
  'bedroom',
  'dining room',
  'garden',
  'living room',
  'stairs',
  'kitchen',
  'hall',
] as const;

export const U2_EX2_ROOMS: Ex2RoomItem[] = [
  {
    id: 1,
    before: 'There is a sofa, two armchairs, and a TV in the',
    after: '.',
    answer: 'living room',
    hintVi: 'Phòng có ghế sofa, 2 ghế bành và tivi.',
    explainVi: 'Sofa, armchairs và TV là đồ đạc đặc trưng của phòng khách (living room).',
  },
  {
    id: 2,
    before: 'I cook in the',
    after: '.',
    answer: 'kitchen',
    hintVi: 'Nơi nấu ăn.',
    explainVi: 'Động từ cook (nấu ăn) luôn gắn với nhà bếp (kitchen).',
  },
  {
    id: 3,
    before: 'My two sisters sleep in a big',
    after: '.',
    answer: 'bedroom',
    hintVi: 'Nơi ngủ của hai chị em.',
    explainVi: 'Động từ sleep (ngủ) gắn với phòng ngủ (bedroom).',
  },
  {
    id: 4,
    before: 'They have dinner in the',
    after: '.',
    answer: 'dining room',
    hintVi: 'Nơi ăn tối.',
    explainVi: 'Cả nhà dùng bữa tối (have dinner) ở phòng ăn (dining room).',
  },
  {
    id: 5,
    before: 'We have got our coats and hats in the',
    after: '.',
    answer: 'hall',
    hintVi: 'Sảnh/hành lang lối vào nhà để treo áo khoác và mũ.',
    explainVi: 'Người Anh thường treo áo khoác (coats) và mũ (hats) ngay ở sảnh vào (hall).',
  },
  {
    id: 6,
    before: "There's a big tree in our",
    after: '.',
    answer: 'garden',
    hintVi: 'Khu vườn có cây to.',
    explainVi: 'Cây to (a big tree) mọc ngoài vườn (garden).',
  },
  {
    id: 7,
    before: 'We have a shower in the',
    after: '.',
    answer: 'bathroom',
    hintVi: 'Nơi tắm vòi hoa sen.',
    explainVi: 'Have a shower (tắm vòi hoa sen) diễn ra trong phòng tắm (bathroom).',
  },
  {
    id: 8,
    before: 'We can go up and down the',
    after: '.',
    answer: 'stairs',
    hintVi: 'Cầu thang để đi lên xuống các tầng.',
    explainVi: 'Go up and down (đi lên và đi xuống) đi với cầu thang (stairs).',
  },
];

/* ==================== EX II.3: 35 HOUSEHOLD ITEMS IN 5 ROOMS (pp.42-43) ==================== */
export type RoomCategoryKey =
  | 'living_room'
  | 'kitchen'
  | 'bedroom'
  | 'dining_room'
  | 'bathroom';

export interface Ex3SortItem {
  id: number;
  word: string;
  meaningVi: string;
  primaryRoom: RoomCategoryKey;
  acceptedRooms: RoomCategoryKey[];
}

export const U2_EX3_ROOMS_META: {
  id: RoomCategoryKey;
  labelEn: string;
  labelVi: string;
  colorCls: string;
}[] = [
  { id: 'living_room', labelEn: 'Living room', labelVi: 'Phòng khách', colorCls: 'border-sky-300 bg-sky-50 text-sky-900' },
  { id: 'kitchen', labelEn: 'Kitchen', labelVi: 'Nhà bếp', colorCls: 'border-amber-300 bg-amber-50 text-amber-900' },
  { id: 'bedroom', labelEn: 'Bedroom', labelVi: 'Phòng ngủ', colorCls: 'border-violet-300 bg-violet-50 text-violet-900' },
  { id: 'dining_room', labelEn: 'Dining room', labelVi: 'Phòng ăn', colorCls: 'border-emerald-300 bg-emerald-50 text-emerald-900' },
  { id: 'bathroom', labelEn: 'Bathroom', labelVi: 'Phòng tắm', colorCls: 'border-cyan-300 bg-cyan-50 text-cyan-900' },
];

export const U2_EX3_SORT_ITEMS: Ex3SortItem[] = [
  { id: 1, word: 'sofa', meaningVi: 'ghế sô-pha', primaryRoom: 'living_room', acceptedRooms: ['living_room'] },
  { id: 2, word: 'fridge', meaningVi: 'tủ lạnh', primaryRoom: 'kitchen', acceptedRooms: ['kitchen'] },
  { id: 3, word: 'curtain', meaningVi: 'rèm cửa', primaryRoom: 'bedroom', acceptedRooms: ['bedroom', 'living_room'] },
  { id: 4, word: 'sink', meaningVi: 'bồn rửa', primaryRoom: 'bathroom', acceptedRooms: ['bathroom', 'kitchen'] },
  { id: 5, word: 'television', meaningVi: 'ti-vi', primaryRoom: 'living_room', acceptedRooms: ['living_room'] },
  { id: 6, word: 'cooker', meaningVi: 'bếp nấu / nồi cơm', primaryRoom: 'kitchen', acceptedRooms: ['kitchen'] },
  { id: 7, word: 'chest of drawers', meaningVi: 'tủ ngăn kéo', primaryRoom: 'bedroom', acceptedRooms: ['bedroom'] },
  { id: 8, word: 'chairs', meaningVi: 'những chiếc ghế tựa', primaryRoom: 'dining_room', acceptedRooms: ['dining_room', 'living_room'] },
  { id: 9, word: 'washing machine', meaningVi: 'máy giặt', primaryRoom: 'bathroom', acceptedRooms: ['bathroom', 'kitchen'] },
  { id: 10, word: 'armchair', meaningVi: 'ghế bành', primaryRoom: 'living_room', acceptedRooms: ['living_room'] },
  { id: 11, word: 'cupboard', meaningVi: 'tủ chén / tủ đựng đồ', primaryRoom: 'kitchen', acceptedRooms: ['kitchen', 'living_room', 'dining_room'] },
  { id: 12, word: 'bed', meaningVi: 'giường ngủ', primaryRoom: 'bedroom', acceptedRooms: ['bedroom'] },
  { id: 13, word: 'table', meaningVi: 'bàn ăn', primaryRoom: 'dining_room', acceptedRooms: ['dining_room', 'kitchen'] },
  { id: 14, word: 'bath', meaningVi: 'bồn tắm', primaryRoom: 'bathroom', acceptedRooms: ['bathroom'] },
  { id: 15, word: 'coffee table', meaningVi: 'bàn trà', primaryRoom: 'living_room', acceptedRooms: ['living_room'] },
  { id: 16, word: 'rice', meaningVi: 'gạo / cơm', primaryRoom: 'kitchen', acceptedRooms: ['kitchen', 'dining_room'] },
  { id: 17, word: 'mirror', meaningVi: 'gương soi', primaryRoom: 'bedroom', acceptedRooms: ['bedroom', 'bathroom'] },
  { id: 18, word: 'shelf', meaningVi: 'kệ / giá đỡ', primaryRoom: 'dining_room', acceptedRooms: ['dining_room', 'bedroom', 'living_room'] },
  { id: 19, word: 'shower', meaningVi: 'vòi hoa sen', primaryRoom: 'bathroom', acceptedRooms: ['bathroom'] },
  { id: 20, word: 'telephone', meaningVi: 'điện thoại bàn', primaryRoom: 'living_room', acceptedRooms: ['living_room'] },
  { id: 21, word: 'vegetable', meaningVi: 'rau củ', primaryRoom: 'kitchen', acceptedRooms: ['kitchen'] },
  { id: 22, word: 'lamp', meaningVi: 'đèn ngủ / đèn bàn', primaryRoom: 'bedroom', acceptedRooms: ['bedroom', 'living_room'] },
  { id: 23, word: 'fan', meaningVi: 'quạt máy', primaryRoom: 'dining_room', acceptedRooms: ['dining_room', 'living_room', 'bedroom'] },
  { id: 24, word: 'toilet', meaningVi: 'bồn cầu', primaryRoom: 'bathroom', acceptedRooms: ['bathroom'] },
  { id: 25, word: 'magazine', meaningVi: 'tạp chí', primaryRoom: 'living_room', acceptedRooms: ['living_room'] },
  { id: 26, word: 'knife', meaningVi: 'con dao', primaryRoom: 'kitchen', acceptedRooms: ['kitchen'] },
  { id: 27, word: 'wardrobe', meaningVi: 'tủ quần áo', primaryRoom: 'bedroom', acceptedRooms: ['bedroom'] },
  { id: 28, word: 'wash basin', meaningVi: 'chậu rửa mặt', primaryRoom: 'bathroom', acceptedRooms: ['bathroom', 'kitchen'] },
  { id: 29, word: 'light', meaningVi: 'đèn chiếu sáng', primaryRoom: 'living_room', acceptedRooms: ['living_room', 'dining_room', 'bedroom'] },
  { id: 30, word: 'saucepan', meaningVi: 'cái chảo/nồi có tay cầm', primaryRoom: 'kitchen', acceptedRooms: ['kitchen'] },
  { id: 31, word: 'pictures', meaningVi: 'những bức tranh', primaryRoom: 'living_room', acceptedRooms: ['living_room', 'bedroom'] },
  { id: 32, word: 'stove', meaningVi: 'bếp lò', primaryRoom: 'kitchen', acceptedRooms: ['kitchen'] },
  { id: 33, word: 'stereo', meaningVi: 'dàn âm thanh nổi', primaryRoom: 'living_room', acceptedRooms: ['living_room'] },
  { id: 34, word: 'clock', meaningVi: 'đồng hồ treo tường', primaryRoom: 'living_room', acceptedRooms: ['living_room', 'dining_room'] },
  { id: 35, word: 'bookcase', meaningVi: 'tủ sách', primaryRoom: 'living_room', acceptedRooms: ['living_room', 'bedroom'] },
];

/* ==================== EX II.4: 9 SENTENCES (10 BLANKS) FURNITURE BOX (p.43) ==================== */
export const U2_EX4_WORD_BOX = [
  'drawers',
  'picture',
  'fridge',
  'sofa',
  'cupboard',
  'sink',
  'lamp',
  'bookshelf',
  'shower',
  'dishwasher',
] as const;

export interface Ex4FurnitureItem {
  id: number;
  parts: string[]; // length = answers.length + 1
  answers: string[];
  explainVi: string;
}

export const U2_EX4_FURNITURE: Ex4FurnitureItem[] = [
  {
    id: 1,
    parts: ['Remember to put the milk back to ', '.'],
    answers: ['fridge'],
    explainVi: 'Cất sữa (milk) vào tủ lạnh → fridge.',
  },
  {
    id: 2,
    parts: ['We put dirty dishes in the ', '.'],
    answers: ['sink'],
    explainVi: 'Đặt bát đĩa bẩn vào bồn rửa → sink.',
  },
  {
    id: 3,
    parts: ['Without a ', ' we wash the dishes by hand.'],
    answers: ['dishwasher'],
    explainVi: 'Không có máy rửa bát (dishwasher) thì phải rửa bát bằng tay.',
  },
  {
    id: 4,
    parts: ['There are many books on the ', '.'],
    answers: ['bookshelf'],
    explainVi: 'Sách (books) được xếp trên giá sách → bookshelf.',
  },
  {
    id: 5,
    parts: ['We have a lot of cups and glasses in the ', '.'],
    answers: ['cupboard'],
    explainVi: 'Cốc chén (cups and glasses) cất trong tủ chạn/tủ bếp → cupboard.',
  },
  {
    id: 6,
    parts: ['She puts her clothes in a chest of ', '.'],
    answers: ['drawers'],
    explainVi: 'Cụm từ cố định: a chest of drawers (tủ nhiều ngăn kéo).',
  },
  {
    id: 7,
    parts: ['The bathroom has a ', '.'],
    answers: ['shower'],
    explainVi: 'Phòng tắm có vòi hoa sen → shower.',
  },
  {
    id: 8,
    parts: ['The living room has a ', ', three armchairs, a TV, and a beautiful ', ' on the wall.'],
    answers: ['sofa', 'picture'],
    explainVi: 'Phòng khách có ghế sofa (sofa) và một bức tranh đẹp (picture) treo trên tường.',
  },
  {
    id: 9,
    parts: ["Where's the ", "? It's on the bedside table."],
    answers: ['lamp'],
    explainVi: 'Đèn ngủ (lamp) thường đặt trên tủ đầu giường (bedside table).',
  },
];

/* ==================== EX II.5: 12 POSSESSIVE CHOICE ITEMS (pp.43-44) ==================== */
export interface Ex5ChoiceItem {
  id: number;
  before: string;
  options: [string, string];
  after: string;
  correctIndex: 0 | 1;
  explainVi: string;
}

export const U2_EX5_POSSESSIVE_CHOICE: Ex5ChoiceItem[] = [
  {
    id: 1,
    before: 'Where are the',
    options: ["childrens'", "children's"],
    after: 'friends?',
    correctIndex: 1,
    explainVi: 'children là số nhiều bất quy tắc không có -s cuối → thêm \'s thành children\'s.',
  },
  {
    id: 2,
    before: 'My',
    options: ['sister', "sister's"],
    after: 'friend is a teacher.',
    correctIndex: 1,
    explainVi: 'Bạn CỦA chị gái tôi → cần sở hữu cách sister\'s.',
  },
  {
    id: 3,
    before: 'The',
    options: ["boys's", "boys'"],
    after: 'toys are on the carpet.',
    correctIndex: 1,
    explainVi: 'boys là danh từ số nhiều có đuôi -s → chỉ thêm dấu nháy đơn thành boys\'.',
  },
  {
    id: 4,
    before: 'Is this my',
    options: ['brother', "brother's"],
    after: 'jacket?',
    correctIndex: 1,
    explainVi: 'Chiếc áo khoác CỦA anh trai tôi → brother\'s.',
  },
  {
    id: 5,
    before: 'My',
    options: ['cousin', "cousin's"],
    after: 'name is Anna.',
    correctIndex: 1,
    explainVi: 'Tên CỦA em họ tôi → cousin\'s name.',
  },
  {
    id: 6,
    before: 'Is this',
    options: ["Peter's", "Peters'"],
    after: 'house?',
    correctIndex: 0,
    explainVi: 'Peter là tên riêng số ít → thêm \'s thành Peter\'s.',
  },
  {
    id: 7,
    before: 'What is your',
    options: ['dog', "dog's"],
    after: 'name?',
    correctIndex: 1,
    explainVi: 'Tên CỦA chú chó nhà bạn → dog\'s name.',
  },
  {
    id: 8,
    before: 'My',
    options: ["dad's", 'dad'],
    after: 'car is very nice.',
    correctIndex: 0,
    explainVi: 'Chiếc ô tô CỦA bố tôi → dad\'s car.',
  },
  {
    id: 9,
    before: 'My',
    options: ["brothers'", 'brother'],
    after: 'names are Frank and Fred.',
    correctIndex: 0,
    explainVi: 'Có 2 tên (Frank and Fred) và động từ "are" → nhiều anh em trai (brothers) → thêm \' thành brothers\'.',
  },
  {
    id: 10,
    before: 'My',
    options: ["friend's", 'friends'],
    after: 'father is a doctor.',
    correctIndex: 0,
    explainVi: 'Bố CỦA người bạn tôi → cần sở hữu cách friend\'s.',
  },
  {
    id: 11,
    before: 'Her',
    options: ["uncle's", "uncles'"],
    after: 'family lives in New York.',
    correctIndex: 0,
    explainVi: 'family (số ít) + lives → chỉ 1 gia đình của chú/bác cô ấy → uncle\'s.',
  },
  {
    id: 12,
    before: 'My',
    options: ["grandfather's", "grandfathers'"],
    after: 'watch is on the shelf.',
    correctIndex: 0,
    explainVi: 'Chiếc đồng hồ (watch - số ít) của ông tôi → grandfather\'s.',
  },
];

/* ==================== EX II.6: 12 POSSESSIVE MCQs (pp.44-45) ==================== */
export interface SimpleMcqItem {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explainVi: string;
}

export const U2_EX6_POSSESSIVE_MCQ: SimpleMcqItem[] = [
  {
    id: 1,
    question: 'This car is my car, and that car is ____.',
    options: ['Tom', 'Toms', "Tom's"],
    correctIndex: 2,
    explainVi: 'Chiếc xe kia là của Tom (Tom\'s = Tom\'s car).',
  },
  {
    id: 2,
    question: 'We need some pens. Where are your ____?',
    options: ['pens', "pen's", "pens'"],
    correctIndex: 0,
    explainVi: 'Sau tính từ sở hữu "your" chỉ cần danh từ số nhiều bình thường "pens" (không có sở hữu cách).',
  },
  {
    id: 3,
    question: 'Do these books belong to Alex? Are they ____ books?',
    options: ["his'", "he's", 'his'],
    correctIndex: 2,
    explainVi: 'Tính từ sở hữu của "he" là "his" (không bao giờ viết his\').',
  },
  {
    id: 4,
    question: 'My ____ like to go swimming at a lake near our home.',
    options: ["brother's", "brothers'", 'brothers'],
    correctIndex: 2,
    explainVi: 'Động từ chính "like" (nguyên thể) đứng ngay sau → chủ ngữ số nhiều "My brothers".',
  },
  {
    id: 5,
    question: 'My ____ favourite food is pizza. They both share one every week.',
    options: ["brother's", "brothers'", 'brothers'],
    correctIndex: 1,
    explainVi: '"They both" (cả hai anh/em trai) → danh từ số nhiều brothers + dấu nháy đơn → brothers\'.',
  },
  {
    id: 6,
    question: 'How many ____ do you ride your bike a week?',
    options: ['times', "time's", "times'"],
    correctIndex: 0,
    explainVi: 'Sau "How many" dùng danh từ đếm được số nhiều "times" (bao nhiêu lần).',
  },
  {
    id: 7,
    question: 'My ____ house is over there. They live just across the street.',
    options: ["cousins'", 'cousins', "cousin's"],
    correctIndex: 0,
    explainVi: '"They live" → nhiều người anh/chị em họ (cousins) → sở hữu cách số nhiều cousins\'.',
  },
  {
    id: 8,
    question: 'How many ____ do you have?',
    options: ["apple's", 'apples', "apples'"],
    correctIndex: 1,
    explainVi: 'Sau "How many" dùng danh từ số nhiều "apples".',
  },
  {
    id: 9,
    question: 'There are many students and many ____ at the college.',
    options: ["classrooms'", "classroom's", 'classrooms'],
    correctIndex: 2,
    explainVi: 'Sau "many" dùng danh từ số nhiều bình thường "classrooms".',
  },
  {
    id: 10,
    question: 'What is your ____ name?',
    options: ["friends'", "friend's", 'friends'],
    correctIndex: 1,
    explainVi: 'Động từ "is" và "name" số ít → tên của 1 người bạn → friend\'s.',
  },
  {
    id: 11,
    question: 'David is ____ brother.',
    options: ['Ann', "Ann's", "Anns'"],
    correctIndex: 1,
    explainVi: 'Anh/em trai CỦA Ann → Ann\'s brother.',
  },
  {
    id: 12,
    question: 'Mr. Jones is ____ father.',
    options: ['there', 'theirs', 'their'],
    correctIndex: 2,
    explainVi: 'Trước danh từ "father" cần tính từ sở hữu "their" (bố của họ).',
  },
];

/* ==================== EX II.7: JOIN SENTENCES WITH POSSESSIVE CASE (p.45) ==================== */
export interface RewriteItem {
  id: number;
  prompt: string;
  starter?: string;
  answer: string;
  accepted?: string[];
  explainVi: string;
}

export const U2_EX7_POSSESSIVE_JOIN: RewriteItem[] = [
  {
    id: 2,
    prompt: 'John has a sister. She is naughty.',
    answer: "John's sister is naughty.",
    explainVi: 'Chị/em gái của John (John\'s sister) thì nghịch ngợm.',
  },
  {
    id: 3,
    prompt: 'My grandmother has a house. It is near the sea.',
    answer: "My grandmother's house is near the sea.",
    explainVi: 'Ngôi nhà của bà tôi (My grandmother\'s house) ở gần biển.',
  },
  {
    id: 4,
    prompt: 'Mr. White has a wife. She is at home now.',
    answer: "Mr. White's wife is at home now.",
    accepted: ["Mr White's wife is at home now."],
    explainVi: 'Vợ của ông White (Mr. White\'s wife) đang ở nhà.',
  },
  {
    id: 5,
    prompt: 'The boys have an aunt. She is very kind.',
    answer: "The boys' aunt is very kind.",
    explainVi: 'The boys là số nhiều tận cùng bằng -s → chỉ thêm dấu nháy đơn: The boys\' aunt.',
  },
  {
    id: 6,
    prompt: 'Mary and Paul have a son. He is five years old.',
    answer: "Mary and Paul's son is five years old.",
    explainVi: 'Con trai chung của cả Mary và Paul → chỉ thêm \'s ở người đứng sau: Mary and Paul\'s son.',
  },
  {
    id: 7,
    prompt: 'Dr. Johnson has an office. It is dark.',
    answer: "Dr. Johnson's office is dark.",
    accepted: ["Dr Johnson's office is dark."],
    explainVi: 'Văn phòng của bác sĩ Johnson (Dr. Johnson\'s office) thì tối.',
  },
  {
    id: 8,
    prompt: 'Bill and Jim have a relationship with each other. They are pen friends.',
    answer: "Bill's pen friend is Jim.",
    accepted: ["Jim's pen friend is Bill."],
    explainVi: 'Bạn qua thư của Bill là Jim (Bill\'s pen friend is Jim).',
  },
  {
    id: 9,
    prompt: 'Bill and Jim have wives. They are friends.',
    answer: "Bill's and Jim's wives are friends.",
    accepted: ["Bill and Jim's wives are friends."],
    explainVi: 'Mỗi người có vợ riêng (sở hữu riêng) → thêm \'s cho cả hai tên: Bill\'s and Jim\'s wives.',
  },
  {
    id: 10,
    prompt: "The students have a task. It's difficult.",
    answer: "The students' task is difficult.",
    explainVi: 'The students là danh từ số nhiều có -s → chỉ thêm \' thành The students\' task.',
  },
];

/* ==================== EX II.8: 8 PICTURE-BASED PREPOSITION MCQs (pp.45-46) ==================== */
export type PrepSceneKey =
  | 'son_under_tree'
  | 'mary_between_parents'
  | 'dog_behind_box'
  | 'table_next_to_sofa'
  | 'bertha_in_front_of_lisa'
  | 'phone_near_mary'
  | 'shop_opposite_cafe'
  | 'cat_on_tv';

export interface Ex8PicPrepItem {
  id: number;
  sceneKey: PrepSceneKey;
  captionVi: string;
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  explainVi: string;
}

export const U2_EX8_PREP_PICTURES: Ex8PicPrepItem[] = [
  {
    id: 1,
    sceneKey: 'son_under_tree',
    captionVi: 'Cậu bé đang ngồi bên dưới tán cây to',
    question: 'The son is ____ the tree.',
    options: ['on', 'under', 'next to'],
    correctIndex: 1,
    explainVi: 'Cậu bé ngồi ở phía dưới gốc cây → under (ở dưới).',
  },
  {
    id: 2,
    sceneKey: 'mary_between_parents',
    captionVi: 'Mary đứng ở giữa mẹ và bố',
    question: 'Mary is ____ her mother and her father.',
    options: ['behind', 'opposite', 'between'],
    correctIndex: 2,
    explainVi: 'Ở giữa 2 người (mother AND father) luôn dùng between.',
  },
  {
    id: 3,
    sceneKey: 'dog_behind_box',
    captionVi: 'Chú chó thò đầu từ phía sau chiếc hộp',
    question: 'There is a dog ____ the box.',
    options: ['behind', 'to the right', 'in front of'],
    correctIndex: 0,
    explainVi: 'Chiếc hộp che phía trước, chú chó ở phía sau → behind.',
  },
  {
    id: 4,
    sceneKey: 'table_next_to_sofa',
    captionVi: 'Chiếc bàn nhỏ kê sát bên cạnh ghế sofa',
    question: 'There is a table ____ the sofa.',
    options: ['behind', 'next to', 'in front of'],
    correctIndex: 1,
    explainVi: 'Bàn đặt ngay cạnh ghế sofa → next to (bên cạnh).',
  },
  {
    id: 5,
    sceneKey: 'bertha_in_front_of_lisa',
    captionVi: 'Bertha đứng phía trước Lisa trong hàng',
    question: 'Bertha is ____ Lisa.',
    options: ['to the left', 'to the right', 'in front of'],
    correctIndex: 2,
    explainVi: 'Bertha đứng ngay phía trước Lisa → in front of.',
  },
  {
    id: 6,
    sceneKey: 'phone_near_mary',
    captionVi: 'Chiếc điện thoại đặt gần chỗ Mary ngồi',
    question: 'The telephone is ____ Mary.',
    options: ['near', 'on', 'behind'],
    correctIndex: 0,
    explainVi: 'Điện thoại nằm ở gần Mary → near (gần).',
  },
  {
    id: 7,
    sceneKey: 'shop_opposite_cafe',
    captionVi: 'Cửa hàng thể thao nằm bên kia đường đối diện quán cà phê',
    question: 'There is a sports shop ____ the cafe.',
    options: ['opposite', 'between', 'under'],
    correctIndex: 0,
    explainVi: 'Hai cửa hàng quay mặt vào nhau qua con đường → opposite (đối diện).',
  },
  {
    id: 8,
    sceneKey: 'cat_on_tv',
    captionVi: 'Chú mèo đang nằm ngủ ở trên nóc chiếc tivi',
    question: 'The cat is ____ the television.',
    options: ['in', 'on', 'next to'],
    correctIndex: 1,
    explainVi: 'Chú mèo nằm tiếp xúc trực tiếp trên bề mặt tivi → on (ở trên).',
  },
];

/* ==================== EX II.9: CIRCLE CORRECT PREPOSITION (pp.46-47) ==================== */
export interface Ex9CircleItem {
  id: number;
  parts: string[];
  choices: string[][];
  correctIndices: number[];
  explainVi: string;
}

export const U2_EX9_PREP_CIRCLE: Ex9CircleItem[] = [
  {
    id: 1,
    parts: ['There are many pencils ', ' the desk.'],
    choices: [['in', 'on', 'under']],
    correctIndices: [1],
    explainVi: 'Bút chì đặt trên bề mặt bàn học → on the desk.',
  },
  {
    id: 2,
    parts: ['The cat is sleeping ', ' the table.'],
    choices: [['under', 'between', 'in']],
    correctIndices: [0],
    explainVi: 'Chú mèo ngủ dưới gầm bàn → under the table.',
  },
  {
    id: 3,
    parts: ['The towel is ', ' the soap and the toothbrush.'],
    choices: [['in front of', 'between', 'on']],
    correctIndices: [1],
    explainVi: 'Có 2 vật nối bằng "and" (soap AND toothbrush) → between.',
  },
  {
    id: 4,
    parts: ['There is a big tree ', ' our house.'],
    choices: [['in front of', 'in', 'on']],
    correctIndices: [0],
    explainVi: 'Cây to trồng trước nhà → in front of our house.',
  },
  {
    id: 5,
    parts: ["Look! Mai's sister is standing ", ' her.'],
    choices: [['next to', 'on', 'in']],
    correctIndices: [0],
    explainVi: 'Chị của Mai đang đứng bên cạnh bạn ấy → next to her.',
  },
  {
    id: 6,
    parts: ['The key is ', ' the doormat.'],
    choices: [['under', 'behind', 'between']],
    correctIndices: [0],
    explainVi: 'Giấu chìa khóa dưới tấm thảm chùi chân → under the doormat.',
  },
  {
    id: 7,
    parts: ['We live ', ' a small apartment ', ' a busy road.'],
    choices: [
      ['in', 'on', 'at'],
      ['in', 'on', 'under'],
    ],
    correctIndices: [0, 1],
    explainVi: 'Sống bên trong căn hộ dùng "in an apartment"; nằm trên con đường dùng "on a busy road".',
  },
  {
    id: 8,
    parts: ['My school bag is ', ' my desk.'],
    choices: [['under', 'between', 'in']],
    correctIndices: [0],
    explainVi: 'Cặp sách để dưới gầm bàn → under my desk.',
  },
  {
    id: 9,
    parts: ['My father is sitting ', ' the sofa.'],
    choices: [['in', 'on', 'under']],
    correctIndices: [1],
    explainVi: 'Ngồi trên ghế sô-pha → on the sofa.',
  },
  {
    id: 10,
    parts: ['There is a big family photo ', ' the wall.'],
    choices: [['in', 'on', 'at']],
    correctIndices: [1],
    explainVi: 'Ảnh treo trên mặt tường → on the wall.',
  },
];

/* ==================== EX II.10: COMPLETE WITH IN / ON / AT (p.47) ==================== */
export interface Ex10InOnAtItem {
  id: number;
  parts: string[];
  answers: ('in' | 'on' | 'at')[];
  explainVi: string;
}

export const U2_EX10_IN_ON_AT: Ex10InOnAtItem[] = [
  {
    id: 1,
    parts: ['There is a big wardrobe ', ' my bedroom.'],
    answers: ['in'],
    explainVi: 'Không gian kín bên trong phòng ngủ → in my bedroom.',
  },
  {
    id: 2,
    parts: ['Do you live ', ' a house or an apartment?'],
    answers: ['in'],
    explainVi: 'Sống trong nhà / căn hộ → live in a house / an apartment.',
  },
  {
    id: 3,
    parts: ['The dog is sleeping ', ' a sofa ', ' the corner of the living room.'],
    answers: ['on', 'in'],
    explainVi: 'Trên ghế sofa dùng "on"; ở góc bên trong phòng dùng "in the corner".',
  },
  {
    id: 4,
    parts: ['My mother is cooking ', ' the kitchen.'],
    answers: ['in'],
    explainVi: 'Trong không gian nhà bếp → in the kitchen.',
  },
  {
    id: 5,
    parts: ['The children are playing ', ' the carpet.'],
    answers: ['on'],
    explainVi: 'Chơi trên bề mặt tấm thảm → on the carpet.',
  },
  {
    id: 6,
    parts: ['They live ', ' the 16th floor ', ' 57 Pine Street ', ' London.'],
    answers: ['on', 'at', 'in'],
    explainVi: 'Quy tắc vàng: on + số tầng (16th floor) · at + số nhà cụ thể (57 Pine Street) · in + thành phố (London).',
  },
  {
    id: 7,
    parts: ['There are two bedrooms ', ' our apartment.'],
    answers: ['in'],
    explainVi: 'Bên trong căn hộ của chúng tôi → in our apartment.',
  },
  {
    id: 8,
    parts: ['There are many nice pictures ', ' the walls ', ' the living room.'],
    answers: ['on', 'in'],
    explainVi: 'Tranh treo trên tường → on the walls; bên trong phòng khách → in the living room.',
  },
  {
    id: 9,
    parts: ['My grandparents live in a stilt house ', ' Sa Pa.'],
    answers: ['in'],
    explainVi: 'Trước tên thị xã/thành phố (Sa Pa) dùng "in".',
  },
  {
    id: 10,
    parts: ['My old toys are ', ' a box ', ' a shelf ', ' the bedroom closet.'],
    answers: ['in', 'on', 'in'],
    explainVi: 'Trong hộp (in a box) · trên mặt kệ (on a shelf) · trong tủ quần áo (in the closet).',
  },
];

/* ==================== EX II.11: FIND & CORRECT 8 MISTAKES (pp.47-48) ==================== */
export interface MistakeItem {
  id: number;
  sentence: string;
  wrongWord: string;
  correction: string;
  explainVi: string;
}

export const U2_EX11_MISTAKES: MistakeItem[] = [
  {
    id: 1,
    sentence: 'How many tables is there in the classroom?',
    wrongWord: 'is',
    correction: 'are',
    explainVi: 'Sau "How many + danh từ số nhiều (tables)" phải dùng "are there".',
  },
  {
    id: 2,
    sentence: 'What does your sisters do in their free time?',
    wrongWord: 'does',
    correction: 'do',
    explainVi: '"your sisters" là chủ ngữ số nhiều → trợ động từ phải là "do".',
  },
  {
    id: 3,
    sentence: 'These are my desks and that are your chairs.',
    wrongWord: 'that',
    correction: 'those',
    explainVi: 'Động từ "are" và "your chairs" là số nhiều → đổi "that" thành "those".',
  },
  {
    id: 4,
    sentence: 'There are two benchs in my garden.',
    wrongWord: 'benchs',
    correction: 'benches',
    explainVi: 'Danh từ kết thúc bằng -ch (bench) khi chuyển sang số nhiều phải thêm -es → benches.',
  },
  {
    id: 5,
    sentence: "I have a brother and he's name is Minh.",
    wrongWord: "he's",
    correction: 'his',
    explainVi: 'Trước danh từ "name" cần tính từ sở hữu "his" (không phải viết tắt he\'s = he is).',
  },
  {
    id: 6,
    sentence: 'There is a small table among the lamp and the bed.',
    wrongWord: 'among',
    correction: 'between',
    explainVi: 'Ở giữa CHỈ 2 vật (the lamp AND the bed) phải dùng "between", không dùng "among".',
  },
  {
    id: 7,
    sentence: 'There are a cupboard, a dishwasher and a table in the kitchen.',
    wrongWord: 'are',
    correction: 'is',
    explainVi: 'Cấu trúc "There is/are" chia theo danh từ ĐẦU TIÊN: "a cupboard" (số ít) → dùng "There is".',
  },
  {
    id: 8,
    sentence: 'There is a television front of the microwave.',
    wrongWord: 'front',
    correction: 'in front',
    explainVi: 'Cụm giới từ đầy đủ là "in front of" (ở phía trước), thiếu từ "in".',
  },
];

/* ==================== EX III.1: PICTURE CLOZE "I LIKE MY BIG HOUSE" (p.48) ==================== */
export interface PictureClozeBlank {
  id: number;
  iconKey: 'bedroom' | 'bathroom' | 'kitchen' | 'dining_room' | 'living_room' | 'garage' | 'garden' | 'attic';
  cueVi: string;
  answer: string;
  explainVi: string;
}

export const U2_EX_III1_SEGMENTS = [
  'I live in a very big house with my family. Upstairs, there are three ',
  ' (1) and a modern ',
  ' (2). Downstairs, there is a big ',
  ' (3) where my mum cooks delicious meals, a ',
  ' (4) with a long wooden table, and a cosy ',
  ' (5) with a sofa and a large TV. Next to the house is a ',
  ' (6) for our car. Behind the house, there is a lovely ',
  ' (7) full of flowers. At the very top of the house, we also have an ',
  ' (8) where we keep our old boxes and toys. I really love my house!',
];

export const U2_EX_III1_BLANKS: PictureClozeBlank[] = [
  { id: 1, iconKey: 'bedroom', cueVi: '3 phòng ngủ (số nhiều)', answer: 'bedrooms', explainVi: 'Sau "three" (3) phải dùng danh từ số nhiều: bedrooms.' },
  { id: 2, iconKey: 'bathroom', cueVi: 'phòng tắm', answer: 'bathroom', explainVi: 'Sau "a modern" dùng danh từ số ít: bathroom.' },
  { id: 3, iconKey: 'kitchen', cueVi: 'nhà bếp', answer: 'kitchen', explainVi: 'Nơi mẹ nấu những bữa ăn ngon (cooks delicious meals) → kitchen.' },
  { id: 4, iconKey: 'dining_room', cueVi: 'phòng ăn', answer: 'dining room', explainVi: 'Phòng có chiếc bàn gỗ dài → dining room.' },
  { id: 5, iconKey: 'living_room', cueVi: 'phòng khách', answer: 'living room', explainVi: 'Phòng có ghế sofa và tivi lớn → living room.' },
  { id: 6, iconKey: 'garage', cueVi: 'nhà để xe ô tô', answer: 'garage', explainVi: 'Nơi để xe ô tô (for our car) → garage.' },
  { id: 7, iconKey: 'garden', cueVi: 'khu vườn đầy hoa', answer: 'garden', explainVi: 'Khu vực đầy hoa phía sau nhà → garden.' },
  { id: 8, iconKey: 'attic', cueVi: 'gác mái trên cùng', answer: 'attic', explainVi: 'Căn phòng trên đỉnh nhà để cất đồ cũ (sau "an") → attic.' },
];

/* ==================== EX III.2: PHONG'S COUNTRYSIDE HOUSE CLOZE (pp.48-49) ==================== */
export const U2_EX_III2_PASSAGE = `Phong lives with his parents and younger sister in a small house in the countryside. The house is (1) ____ a rice field. (2) ____ of the house, there is a small yard and a beautiful flower garden. (3) ____ the house, there are tall green trees and some mountains. To the left of the house, there is a well. To the (4) ____ of the house, there is a vegetable garden. Inside the house, there (5) ____ five rooms: a living room, two bedrooms, a kitchen and a bathroom. Phong loves his peaceful countryside house very much.`;

export const U2_EX_III2_MCQS: SimpleMcqItem[] = [
  {
    id: 1,
    question: 'Chỗ trống (1): The house is ____ a rice field.',
    options: ['in', 'near', 'on', 'at'],
    correctIndex: 1,
    explainVi: 'Ngôi nhà nằm GẦN cánh đồng lúa → near a rice field.',
  },
  {
    id: 2,
    question: 'Chỗ trống (2): ____ of the house, there is a small yard...',
    options: ['In front', 'Next', 'Behind', 'Opposite'],
    correctIndex: 0,
    explainVi: 'Phía sau có chữ "of" → cụm cố định "In front of" (ở phía trước).',
  },
  {
    id: 3,
    question: 'Chỗ trống (3): ____ the house, there are tall green trees...',
    options: ['Between', 'In front', 'Behind', 'Next to'],
    correctIndex: 2,
    explainVi: 'Sau chỗ trống không có "of" và chỉ vị trí phía sau nhà → Behind the house.',
  },
  {
    id: 4,
    question: 'Chỗ trống (4): To the ____ of the house, there is a vegetable garden.',
    options: ['behind', 'left', 'front', 'right'],
    correctIndex: 3,
    explainVi: 'Câu trước đã nói "To the left of the house", câu đối ứng là "To the right of the house" (bên phải).',
  },
  {
    id: 5,
    question: 'Chỗ trống (5): Inside the house, there ____ five rooms...',
    options: ['is', 'are', 'have', 'has'],
    correctIndex: 1,
    explainVi: '"five rooms" là số nhiều → dùng cấu trúc "there are".',
  },
];

/* ==================== EX III.3: LINDA'S STREET & NEIGHBOURHOOD (p.49) ==================== */
export const U2_EX_III3_PASSAGE = `Hi, my name is Linda. I live with my family in a nice town house on Green Street. Our neighbourhood is very convenient. To the left of my house, there is a bookshop. To the right of my house, there is another bookshop, a bakery, a restaurant and a police station. The bakery is between the bookshop and the restaurant. The police station is to the right of the restaurant. There isn't a supermarket on my street, so my mother goes shopping at the market nearby. My father works in a bank, and my mother works in a company near our house.`;

export interface ReadingQAItem {
  id: number;
  question: string;
  answer: string;
  accepted: string[];
  explainVi: string;
}

export const U2_EX_III3_QA: ReadingQAItem[] = [
  {
    id: 1,
    question: 'Who does Linda live with?',
    answer: 'She lives with her family.',
    accepted: ['Linda lives with her family.', 'With her family.', 'her family'],
    explainVi: 'Thông tin ở câu 2: "I live with my family in a nice town house..."',
  },
  {
    id: 2,
    question: 'Where is the bakery?',
    answer: 'It is between the bookshop and the restaurant.',
    accepted: ['The bakery is between the bookshop and the restaurant.', 'Between the bookshop and the restaurant.'],
    explainVi: 'Thông tin trong bài: "The bakery is between the bookshop and the restaurant."',
  },
  {
    id: 3,
    question: 'Where is the police station?',
    answer: 'It is to the right of the restaurant.',
    accepted: ['The police station is to the right of the restaurant.', 'To the right of the restaurant.'],
    explainVi: 'Thông tin trong bài: "The police station is to the right of the restaurant."',
  },
  {
    id: 4,
    question: 'Is there a supermarket on her street?',
    answer: "No, there isn't.",
    accepted: ['No, there is not.'],
    explainVi: 'Thông tin trong bài: "There isn\'t a supermarket on my street."',
  },
  {
    id: 5,
    question: 'Where does her mother work?',
    answer: 'She works in the company.',
    accepted: ['She works in a company.', 'She works in a company near her house.', 'In a company.'],
    explainVi: 'Thông tin câu cuối: "...and my mother works in a company near our house."',
  },
];

/* ==================== EX IV.1: REWRITE 10 POSSESSIVE SENTENCES (pp.49-50) ==================== */
export const U2_EX_IV1_REWRITE: RewriteItem[] = [
  { id: 1, prompt: 'This is the family of Bill.', answer: "This is Bill's family.", explainVi: 'Đổi "the family of Bill" → "Bill\'s family".' },
  { id: 2, prompt: 'We love the cookies of our grandma.', answer: "We love our grandma's cookies.", explainVi: 'Đổi "the cookies of our grandma" → "our grandma\'s cookies".' },
  { id: 3, prompt: 'It is the Russian book of Nick.', answer: "It's Nick's Russian book.", accepted: ["It is Nick's Russian book."], explainVi: 'Đổi "the Russian book of Nick" → "Nick\'s Russian book".' },
  { id: 4, prompt: 'It is the toy of the boy.', answer: "It's the boy's toy.", accepted: ["It is the boy's toy."], explainVi: 'the boy (số ít) → the boy\'s toy.' },
  { id: 5, prompt: 'It is the book of Peter.', answer: "It's Peter's book.", accepted: ["It is Peter's book."], explainVi: 'the book of Peter → Peter\'s book.' },
  { id: 6, prompt: 'The dressing table of my mother is new.', answer: "My mother's dressing table is new.", explainVi: 'Bàn trang điểm của mẹ tôi → My mother\'s dressing table.' },
  { id: 7, prompt: 'It is the house of our friends.', answer: "It's our friends' house.", accepted: ["It is our friends' house."], explainVi: 'our friends (số nhiều có -s) → chỉ thêm dấu nháy đơn: our friends\' house.' },
  { id: 8, prompt: 'The bedroom of Paul is new.', answer: "Paul's bedroom is new.", explainVi: 'Phòng ngủ của Paul → Paul\'s bedroom.' },
  { id: 9, prompt: 'There are the bikes of my brothers.', answer: "There are my brothers' bikes.", explainVi: 'my brothers (số nhiều có -s) → my brothers\' bikes.' },
  { id: 10, prompt: 'The eyes of Tommy are big blue.', answer: "Tommy's eyes are big blue.", explainVi: 'Đôi mắt của Tommy → Tommy\'s eyes.' },
];

/* ==================== EX IV.2: REORDER 6 SENTENCES (p.50) ==================== */
export interface ReorderSentenceItem {
  id: number;
  words: string[];
  answer: string;
  explainVi: string;
}

export const U2_EX_IV2_REORDER: ReorderSentenceItem[] = [
  {
    id: 1,
    words: ['go', "Let's", 'department', 'to', 'the', 'store.'],
    answer: "Let's go to the department store.",
    explainVi: 'Cấu trúc rủ rê: Let\'s + V nguyên thể → Let\'s go to the department store.',
  },
  {
    id: 2,
    words: ['My', 'is', 'town house', 'supermarket.', 'next to', 'the'],
    answer: 'My town house is next to the supermarket.',
    explainVi: 'Chủ ngữ (My town house) + is + giới từ (next to) + địa điểm (the supermarket).',
  },
  {
    id: 3,
    words: ['How about', 'in', 'listening', 'living room?', 'to music', 'the'],
    answer: 'How about listening to music in the living room?',
    explainVi: 'Cấu trúc gợi ý: How about + V-ing...? → How about listening to music in the living room?',
  },
  {
    id: 4,
    words: ["Tom's", 'in', 'bicycle', 'hall.', 'is', 'the'],
    answer: "Tom's bicycle is in the hall.",
    explainVi: 'Sở hữu cách làm chủ ngữ: Tom\'s bicycle + is + in the hall.',
  },
  {
    id: 5,
    words: ['under', 'The dog', 'new', 'is', 'desk.', 'the'],
    answer: 'The dog is under the new desk.',
    explainVi: 'Tính từ "new" đứng trước danh từ "desk" → under the new desk.',
  },
  {
    id: 6,
    words: ['having', 'How about', 'garden?', 'a barbecue', 'in', 'the'],
    answer: 'How about having a barbecue in the garden?',
    explainVi: 'How about + having a barbecue (tổ chức tiệc nướng) + in the garden?',
  },
];

/* ==================== EX IV.3: 9-CUE GUIDED PARAGRAPH (pp.50-51) ==================== */
export interface GuidedCueItem {
  id: number;
  cue: string;
  answer: string;
  explainVi: string;
}

export const U2_EX_IV3_CUES: GuidedCueItem[] = [
  { id: 1, cue: 'My favourite room / house / bedroom.', answer: 'My favourite room in my house is the bedroom.', explainVi: 'Thêm giới từ "in my" và động từ "is the".' },
  { id: 2, cue: 'It / big / there / lot of furniture.', answer: 'It is big and there is a lot of furniture.', explainVi: 'furniture không đếm được nên dùng "there is a lot of furniture".' },
  { id: 3, cue: 'I / have / bed / desk / chair / computer.', answer: 'I have a bed, a desk, a chair and a computer.', explainVi: 'Liệt kê danh từ số ít với mạo từ "a" và "and" trước đồ cuối.' },
  { id: 4, cue: 'My bed / middle / room.', answer: 'My bed is in the middle of the room.', explainVi: 'Cụm giới từ: in the middle of (ở chính giữa).' },
  { id: 5, cue: 'My desk / under / window / lovely views.', answer: 'My desk is under the window with lovely views.', explainVi: 'Thêm "is", mạo từ "the" và giới từ "with".' },
  { id: 6, cue: 'My computer / on / desk / I / use / it / studying.', answer: 'My computer is on the desk and I use it for my studying.', explainVi: 'Dùng "use something for..." (dùng cái gì cho việc học).' },
  { id: 7, cue: 'I / put / drawings / wall.', answer: 'I put drawings on the wall.', explainVi: 'Treo tranh lên tường dùng giới từ "on the wall".' },
  { id: 8, cue: 'My bedroom / next / bathroom.', answer: 'My bedroom is next to the bathroom.', explainVi: 'Cụm giới từ "next to" (bên cạnh).' },
  { id: 9, cue: 'It / very comfortable / I / love / it.', answer: 'It is very comfortable. I love it.', explainVi: 'Chủ ngữ It + is + tính từ comfortable.' },
];

export const U2_EX_IV3_FULL_PARAGRAPH =
  'My favourite room in my house is the bedroom. It is big and there is a lot of furniture. I have a bed, a desk, a chair and a computer. My bed is in the middle of the room. My desk is under the window with lovely views. My computer is on the desk and I use it for my studying. I put drawings on the wall. My bedroom is next to the bathroom. It is very comfortable. I love it.';

/* =====================================================================================
   TEST FOR UNIT 2 (BOOK PAGES 52–58 · COMPLETE 12 PARTS)
   ===================================================================================== */

export interface TestPhoneticItem {
  id: number;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explainVi: string;
}

// PART I: Odd -s/-es Pronunciation (10 câu)
export const TEST2_PART1_PHONETICS: TestPhoneticItem[] = [
  { id: 1, options: ['desks', 'maps', 'plants', 'chairs'], correctIndex: 3, explainVi: 'chairs đọc /z/ (sau âm r); desks, maps, plants đều đọc /s/.' },
  { id: 2, options: ['pens', 'books', 'phones', 'tables'], correctIndex: 1, explainVi: 'books đọc /s/ (sau /k/); pens, phones, tables đều đọc /z/.' },
  { id: 3, options: ['wants', 'books', 'stops', 'sends'], correctIndex: 3, explainVi: 'sends đọc /z/ (sau /d/); wants, books, stops đều đọc /s/.' },
  { id: 4, options: ['faces', 'hates', 'horses', 'passes'], correctIndex: 1, explainVi: 'hates đọc /s/ (sau /t/); faces, horses, passes đều đọc /ɪz/.' },
  { id: 5, options: ['names', 'lives', 'dances', 'tables'], correctIndex: 2, explainVi: 'dances đọc /ɪz/ (sau /s/); names, lives, tables đều đọc /z/.' },
  { id: 6, options: ['coughs', 'sings', 'stops', 'sleeps'], correctIndex: 1, explainVi: 'sings đọc /z/ (sau /ŋ/); coughs (/f/), stops (/p/), sleeps (/p/) đều đọc /s/.' },
  { id: 7, options: ['walks', 'steps', 'shuts', 'plays'], correctIndex: 3, explainVi: 'plays đọc /z/ (sau nguyên âm đôi); walks, steps, shuts đều đọc /s/.' },
  { id: 8, options: ['wishes', 'practices', 'introduces', 'leaves'], correctIndex: 3, explainVi: 'leaves đọc /z/ (sau /v/); wishes, practices, introduces đều đọc /ɪz/.' },
  { id: 9, options: ['dishes', 'leaves', 'heads', 'reads'], correctIndex: 0, explainVi: 'dishes đọc /ɪz/ (sau /ʃ/); leaves, heads, reads đều đọc /z/.' },
  { id: 10, options: ['sweets', 'watches', 'dishes', 'boxes'], correctIndex: 0, explainVi: 'sweets đọc /s/ (sau /t/); watches, dishes, boxes đều đọc /ɪz/.' },
];

// PART II: Odd One Out (6 câu)
export const TEST2_PART2_ODD_ONE_OUT: TestPhoneticItem[] = [
  { id: 1, options: ['armchair', 'couch', 'sofa', 'cupboard'], correctIndex: 3, explainVi: 'cupboard là tủ đựng đồ; 3 từ còn lại đều là ghế ngồi phòng khách.' },
  { id: 2, options: ['bedroom', 'garden', 'kitchen', 'living room'], correctIndex: 1, explainVi: 'garden (khu vườn) ở ngoài trời; 3 từ còn lại là các phòng bên trong nhà.' },
  { id: 3, options: ['wardrobe', 'cooker', 'dishwasher', 'fridge'], correctIndex: 0, explainVi: 'wardrobe (tủ quần áo) ở phòng ngủ; 3 từ còn lại là thiết bị nhà bếp.' },
  { id: 4, options: ['apartment', 'house', 'attic', 'villa'], correctIndex: 2, explainVi: 'attic (gác mái) là một phần của ngôi nhà; 3 từ còn lại là các kiểu nhà.' },
  { id: 5, options: ['bath', 'shower', 'mirror', 'bed'], correctIndex: 3, explainVi: 'bed (giường) ở phòng ngủ; bath, shower, mirror thường gắn với phòng tắm.' },
  { id: 6, options: ['geography', 'literature', 'history', 'English'], correctIndex: 3, explainVi: 'English là môn ngoại ngữ (viết hoa); 3 môn còn lại là nhóm môn khoa học xã hội.' },
];

// PART III: Multiple Choice (15 câu)
export const TEST2_PART3_MCQ: SimpleMcqItem[] = [
  { id: 1, question: 'My house ____ a big garden, only a small balcony.', options: ["don't have", 'has', "doesn't have", 'have'], correctIndex: 2, explainVi: 'Chủ ngữ "My house" số ít + nghĩa phủ định (chỉ có ban công nhỏ) → doesn\'t have.' },
  { id: 2, question: '____ about putting a picture on this wall?', options: ['What', 'How', 'Where', 'Why'], correctIndex: 1, explainVi: 'Cấu trúc gợi ý chuẩn Unit 2: How about + V-ing...? (Lưu ý: đáp án SGK là B. How).' },
  { id: 3, question: 'My cousins live in a beautiful villa ____ Nha Trang.', options: ['in', 'on', 'at', 'under'], correctIndex: 0, explainVi: 'Trước tên thành phố (Nha Trang) dùng giới từ "in".' },
  { id: 4, question: 'Put your clean clothes in the ____, please.', options: ['fridge', 'wardrobe', 'dishwasher', 'sink'], correctIndex: 1, explainVi: 'Cất quần áo sạch vào tủ quần áo → wardrobe.' },
  { id: 5, question: 'There is a small vegetable garden ____ my house, so you cannot see it from the street.', options: ['in front of', 'between', 'on', 'behind'], correctIndex: 3, explainVi: 'Không nhìn thấy từ mặt đường → khu vườn nằm phía sau nhà (behind).' },
  { id: 6, question: 'That blue car is my ____.', options: ["father's car", 'fathers car', "car's father", 'father car'], correctIndex: 0, explainVi: 'Chiếc xe của bố tôi → father\'s car.' },
  { id: 7, question: 'My school is near my house, so I go to school ____ foot.', options: ['by', 'in', 'on', 'at'], correctIndex: 2, explainVi: 'Cụm từ cố định: go on foot (đi bộ).' },
  { id: 8, question: 'Your bedroom is so ____! Clothes and books are everywhere on the floor.', options: ['messy', 'tidy', 'clean', 'modern'], correctIndex: 0, explainVi: 'Quần áo và sách vứt khắp sàn → bừa bộn (messy).' },
  { id: 9, question: 'My mother is preparing dinner in the ____.', options: ['bathroom', 'hall', 'kitchen', 'attic'], correctIndex: 2, explainVi: 'Chuẩn bị bữa tối ở nhà bếp → kitchen.' },
  { id: 10, question: 'She ____ hard every evening to prepare for the English test.', options: ['study', 'studies', 'studying', 'to study'], correctIndex: 1, explainVi: 'Thì Hiện tại đơn với "She" → study đổi y thành i + es → studies.' },
  { id: 11, question: 'A tall student is sitting ____ me, so I cannot see the board clearly.', options: ['behind', 'next to', 'between', 'in front of'], correctIndex: 3, explainVi: 'Không nhìn rõ bảng vì bạn cao ngồi ngay phía trước mình → in front of.' },
  { id: 12, question: 'The slippers are ____ the bed.', options: ['between', 'under', 'in', 'at'], correctIndex: 1, explainVi: 'Dép đi trong nhà để dưới gầm giường → under the bed.' },
  { id: 13, question: "It's very hot in here. Please turn on the ____.", options: ['fan', 'lamp', 'sink', 'wardrobe'], correctIndex: 0, explainVi: 'Trời nóng thì bật quạt → turn on the fan.' },
  { id: 14, question: 'Many ethnic people in the northern mountains live in ____.', options: ['apartments', 'stilt houses', 'town houses', 'villas'], correctIndex: 1, explainVi: 'Đồng bào miền núi phía Bắc thường sống trong nhà sàn → stilt houses.' },
  { id: 15, question: 'What is your ____ room in your house? — My bedroom.', options: ['like', 'love', 'best', 'favourite'], correctIndex: 3, explainVi: 'Căn phòng yêu thích nhất → favourite room.' },
];

// PART IV: Prepositions from Box (10 câu)
export const TEST2_PART4_BOX = [
  'at',
  'out of',
  'between',
  'in',
  'beside',
  'after',
  'beneath',
  'under',
  'on',
  'above',
  'among',
] as const;

export interface MultiBlankItem {
  id: number;
  parts: string[];
  answers: string[];
  acceptedPerBlank?: string[][];
  explainVi: string;
}

export const TEST2_PART4_PREPOSITIONS: MultiBlankItem[] = [
  { id: 1, parts: ['There is a bus stop ', ' the end of this road.'], answers: ['at'], explainVi: 'Cụm cố định: at the end of... (ở cuối con đường).' },
  { id: 2, parts: ['Keep all medicines ', " the children's reach."], answers: ['out of'], explainVi: 'Cụm cố định: out of reach (xa tầm với của trẻ em).' },
  { id: 3, parts: ['Look! The dog is standing ', ' the car and the house.'], answers: ['between'], explainVi: 'Giữa 2 vật (the car AND the house) → between.' },
  { id: 4, parts: ['She is sitting ', ' the armchair ', ' her mother.'], answers: ['in', 'beside'], explainVi: 'Ngồi lọt trong ghế bành (in the armchair) bên cạnh mẹ (beside).' },
  { id: 5, parts: ['The letter D comes ', ' C in the English alphabet.'], answers: ['after'], explainVi: 'Chữ D đứng ngay sau chữ C → after.' },
  { id: 6, parts: ['The sunken ship lies deep ', ' the waves.'], answers: ['beneath'], explainVi: 'Nằm sâu bên dưới những con sóng → beneath the waves.' },
  { id: 7, parts: ['We often sit ', ' the trees in the park on hot summer days.'], answers: ['under'], explainVi: 'Ngồi dưới bóng cây → under the trees.' },
  { id: 8, parts: ['My books are ', ' the bookshelf right ', ' my desk.'], answers: ['on', 'above'], explainVi: 'Sách đặt trên mặt kệ (on) ngay phía bên trên bàn học (above).' },
  { id: 9, parts: ['The little boy felt shy ', ' so many strangers.'], answers: ['among'], explainVi: 'Ở giữa nhiều người (từ 3 trở lên) → among strangers.' },
  { id: 10, parts: ['This club is for children ', ' the ages of 5 and 16.'], answers: ['between'], explainVi: 'Trong khoảng giữa 2 mốc tuổi 5 và 16 → between ... and ...' },
];

// PART V: Verb Tense (10 câu)
export const TEST2_PART5_VERBS: MultiBlankItem[] = [
  { id: 1, parts: ['There ', ' (not / be) any posters on my bedroom walls.'], answers: ["aren't"], acceptedPerBlank: [["aren't", 'are not']], explainVi: '"any posters" là số nhiều, câu phủ định → aren\'t (are not).' },
  { id: 2, parts: ['There ', ' (be) some new furniture in the living room.'], answers: ['is'], acceptedPerBlank: [['is', 'are']], explainVi: '"furniture" là danh từ không đếm được nên chuẩn ngữ pháp dùng "is" (hệ thống cũng chấp nhận "are" theo bản in SGK cũ).' },
  { id: 3, parts: ['', ' (you / get) up early on Sundays?'], answers: ['Do you get'], explainVi: 'Câu hỏi Hiện tại đơn với chủ ngữ "you" → Do you get.' },
  { id: 4, parts: ['Your new bedroom and study desk ', ' (look) very tidy.'], answers: ['look'], explainVi: 'Chủ ngữ ghép số nhiều (bedroom and study desk) → động từ giữ nguyên: look.' },
  { id: 5, parts: ['My brother ', ' (not / spend) much time watching TV.'], answers: ["doesn't spend"], acceptedPerBlank: [["doesn't spend", 'does not spend']], explainVi: 'Chủ ngữ số ít "My brother" phủ định Hiện tại đơn → doesn\'t spend.' },
  { id: 6, parts: ['Mr. Nam usually ', ' (drive) to work, because his office ', ' (be) far from home.'], answers: ['drives', 'is'], explainVi: 'Mr. Nam (số ít) → drives; his office (số ít) → is.' },
  { id: 7, parts: ['The school bus always ', ' (arrive) at 6:45 a.m.'], answers: ['arrives'], explainVi: 'The school bus (số ít) + always → arrives.' },
  { id: 8, parts: ['We ', ' (not / eat) dinner in the living room.'], answers: ["don't eat"], acceptedPerBlank: [["don't eat", 'do not eat']], explainVi: 'Chủ ngữ "We" phủ định Hiện tại đơn → don\'t eat.' },
  { id: 9, parts: ['Phong ', ' (not / like) messy rooms.'], answers: ["doesn't like"], acceptedPerBlank: [["doesn't like", 'does not like']], explainVi: 'Chủ ngữ "Phong" (số ít) → doesn\'t like.' },
  { id: 10, parts: ['Our teacher ', ' (often / give) us interesting homework.'], answers: ['often gives'], explainVi: 'Trạng từ tần suất "often" đứng trước động từ thường, thêm -s vì "Our teacher" số ít → often gives.' },
];

// PART VI: Word Form (8 câu)
export interface WordFormItem {
  id: number;
  before: string;
  rootWord: string;
  after: string;
  answer: string;
  explainVi: string;
}

export const TEST2_PART6_WORD_FORM: WordFormItem[] = [
  { id: 1, before: 'There are thirty-five', rootWord: 'STUDY', after: 'in my class.', answer: 'students', explainVi: 'Sau số đếm 35 cần danh từ chỉ người số nhiều: study → students.' },
  { id: 2, before: 'My house is on a very', rootWord: 'NOISE', after: 'street in the city centre.', answer: 'noisy', explainVi: 'Trước danh từ "street" cần tính từ: noise → noisy (ồn ào).' },
  { id: 3, before: 'Your room is in a terrible', rootWord: 'MESSY', after: '! Please tidy it up.', answer: 'mess', explainVi: 'Cụm từ cố định: in a mess (trong tình trạng bừa bộn) → danh từ mess.' },
  { id: 4, before: 'The Crazy House in Da Lat is a very', rootWord: 'INTEREST', after: 'place to visit.', answer: 'interesting', explainVi: 'Miêu tả đặc điểm của địa điểm (vật) dùng tính từ đuôi -ing: interesting.' },
  { id: 5, before: 'This armchair is soft and very', rootWord: 'COMFORT', after: 'to sit in.', answer: 'comfortable', explainVi: 'Sau "very" cần tính từ: comfort → comfortable (thoải mái).' },
  { id: 6, before: 'We use pocket', rootWord: 'CALCULATE', after: 'in Maths lessons.', answer: 'calculators', explainVi: 'Danh từ chỉ dụng cụ số nhiều: calculate → calculators (máy tính bỏ túi).' },
  { id: 7, before: 'My', rootWord: 'FAVOUR', after: 'room in the house is the living room.', answer: 'favourite', explainVi: 'Tính từ "yêu thích nhất": favour → favourite (hoặc favorite).' },
  { id: 8, before: 'The children are very', rootWord: 'EXCITE', after: 'about moving to a new house.', answer: 'excited', explainVi: 'Diễn tả cảm xúc của con người (the children) dùng tính từ đuôi -ed: excited.' },
];

// PART VII: Where Questions & Answers (8 câu)
export interface WhereQAItem {
  id: number;
  cue: string;
  questionAnswer: string;
  replyAnswer: string;
  acceptedQuestions?: string[];
  acceptedReplies?: string[];
  explainVi: string;
}

export const TEST2_PART7_WHERE_QA: WhereQAItem[] = [
  {
    id: 1,
    cue: 'the museum / in front of / the park',
    questionAnswer: 'Where is the museum?',
    replyAnswer: 'The museum is in front of the park.',
    acceptedReplies: ['It is in front of the park.'],
    explainVi: 'the museum số ít → Where is...? / The museum is in front of the park.',
  },
  {
    id: 2,
    cue: 'the souvenir shop / between / the bookstore / the toy store',
    questionAnswer: 'Where is the souvenir shop?',
    replyAnswer: 'The souvenir shop is between the bookstore and the toy store.',
    acceptedReplies: ['It is between the bookstore and the toy store.'],
    explainVi: 'Cấu trúc between A and B.',
  },
  {
    id: 3,
    cue: 'the stadium / on / Phan Dinh Phung Street',
    questionAnswer: 'Where is the stadium?',
    replyAnswer: 'The stadium is on Phan Dinh Phung Street.',
    acceptedReplies: ['It is on Phan Dinh Phung Street.'],
    explainVi: 'Nằm trên tên đường phố dùng giới từ "on".',
  },
  {
    id: 4,
    cue: 'the market / opposite / the movie theater',
    questionAnswer: 'Where is the market?',
    replyAnswer: 'The market is opposite the movie theater.',
    acceptedReplies: ['It is opposite the movie theater.', 'The market is opposite the movie theatre.'],
    explainVi: 'Đối diện rạp chiếu phim → opposite the movie theater.',
  },
  {
    id: 5,
    cue: 'the students / in / the library',
    questionAnswer: 'Where are the students?',
    replyAnswer: 'The students are in the library.',
    acceptedReplies: ['They are in the library.'],
    explainVi: 'the students là số nhiều → dùng "Where are...?" và "are in the library".',
  },
  {
    id: 6,
    cue: 'the supermarket / near / the hospital',
    questionAnswer: 'Where is the supermarket?',
    replyAnswer: 'The supermarket is near the hospital.',
    acceptedReplies: ['It is near the hospital.'],
    explainVi: 'Ở gần bệnh viện → near the hospital.',
  },
  {
    id: 7,
    cue: 'the drugstore / to the left of / my house',
    questionAnswer: 'Where is the drugstore?',
    replyAnswer: 'The drugstore is to the left of my house.',
    acceptedReplies: ['The drugstore is on the left of my house.', 'It is to the left of my house.', 'It is on the left of my house.'],
    explainVi: 'Bên trái nhà tôi → to/on the left of my house.',
  },
  {
    id: 8,
    cue: 'the bank / opposite / the hospital',
    questionAnswer: 'Where is the bank?',
    replyAnswer: 'The bank is opposite the hospital.',
    acceptedReplies: ['It is opposite the hospital.'],
    explainVi: 'Đối diện bệnh viện → opposite the hospital.',
  },
];

// PART VIII: Complete Dialogue Tuan & Ha (8 questions)
export interface DialogueLineItem {
  id: number;
  tuanPromptHint: string;
  haReply: string;
  answer: string;
  accepted: string[];
  explainVi: string;
}

export const TEST2_PART8_DIALOGUE: DialogueLineItem[] = [
  {
    id: 1,
    tuanPromptHint: 'Hỏi Hà sống ở đâu?',
    haReply: 'I live in Da Nang.',
    answer: 'Where do you live?',
    accepted: ['Where do you live'],
    explainVi: 'Câu trả lời chỉ nơi sống (in Da Nang) → hỏi bằng "Where do you live?".',
  },
  {
    id: 2,
    tuanPromptHint: 'Hỏi Hà có sống trong nhà riêng (house) không?',
    haReply: "No, I don't. I live in an apartment.",
    answer: 'Do you live in a house?',
    accepted: ['Do you live in a house'],
    explainVi: 'Trả lời "No, I don\'t. I live in an apartment." → câu hỏi Yes/No với "Do you live in a house?".',
  },
  {
    id: 3,
    tuanPromptHint: 'Hỏi căn hộ của Hà có to không?',
    haReply: 'Yes, it is quite big and comfortable.',
    answer: 'Is your apartment big?',
    accepted: ['Is it big?', 'Is your apartment big'],
    explainVi: 'Trả lời "Yes, it is quite big" → hỏi bằng động từ to be: "Is your apartment big?".',
  },
  {
    id: 4,
    tuanPromptHint: 'Hỏi có bao nhiêu phòng ngủ?',
    haReply: 'There are three bedrooms.',
    answer: 'How many bedrooms are there?',
    accepted: ['How many bedrooms are there in your apartment?'],
    explainVi: 'Trả lời số lượng phòng (There are three bedrooms) → "How many bedrooms are there?".',
  },
  {
    id: 5,
    tuanPromptHint: 'Hỏi có 2 phòng tắm không?',
    haReply: 'Yes, there are two bathrooms.',
    answer: 'Are there two bathrooms?',
    accepted: ['Are there two bathrooms in your apartment?'],
    explainVi: 'Câu hỏi Yes/No với "there are" → đảo "Are there two bathrooms?".',
  },
  {
    id: 6,
    tuanPromptHint: 'Hỏi có phòng ăn không?',
    haReply: "No, there isn't. We have meals in the kitchen.",
    answer: 'Is there a dining room?',
    accepted: ['Is there a dining room in your apartment?'],
    explainVi: 'Trả lời "No, there isn\'t. We have meals in the kitchen" → hỏi về phòng ăn: "Is there a dining room?".',
  },
  {
    id: 7,
    tuanPromptHint: 'Hỏi phòng yêu thích nhất của Hà là gì?',
    haReply: 'My favourite room is my bedroom.',
    answer: 'What is your favourite room?',
    accepted: ["What's your favourite room?", 'What is your favorite room?', "What's your favorite room?"],
    explainVi: 'Hỏi căn phòng yêu thích → "What is your favourite room?".',
  },
  {
    id: 8,
    tuanPromptHint: 'Hỏi trong phòng Hà có những đồ đạc gì?',
    haReply: 'There is a bed, a desk, a bookshelf and a wardrobe.',
    answer: 'What is there in your room?',
    accepted: ["What's in your room?", 'What is in your room?', 'What is there in your bedroom?'],
    explainVi: 'Liệt kê đồ vật trong phòng → "What is there in your room?".',
  },
];

// PART IX: Cloze Reading — Nam's Villa (5 MCQs)
export const TEST2_PART9_PASSAGE = `Nam (1) ____ with his parents in a large villa in Ha Noi. The villa is modern and beautiful. There (2) ____ six rooms in his house: a living room, a kitchen, three bedrooms and a bathroom. Nam's bedroom is (3) ____ the second floor. His (4) ____ room is his bedroom (5) ____ he can read comic books and listen to music quietly there.`;

export const TEST2_PART9_MCQS: SimpleMcqItem[] = [
  { id: 1, question: 'Chỗ trống (1): Nam ____ with his parents...', options: ['lives', 'live', 'living', 'to live'], correctIndex: 0, explainVi: 'Chủ ngữ "Nam" (ngôi 3 số ít) thì Hiện tại đơn → lives.' },
  { id: 2, question: 'Chỗ trống (2): There ____ six rooms in his house...', options: ['is', 'be', 'have', 'are'], correctIndex: 3, explainVi: '"six rooms" là số nhiều → There are.' },
  { id: 3, question: 'Chỗ trống (3): Nam\'s bedroom is ____ the second floor (hoặc trong căn nhà).', options: ['at', 'in', 'under', 'between'], correctIndex: 1, explainVi: 'Theo đáp án chuẩn sách bài tập (in / on): trong 4 phương án A/B/C/D không có "on", chọn B. in.' },
  { id: 4, question: 'Chỗ trống (4): His ____ room is his bedroom...', options: ['favorite', 'like', 'love', 'good'], correctIndex: 0, explainVi: 'Cụm danh từ: His favorite room (căn phòng yêu thích của bạn ấy).' },
  { id: 5, question: 'Chỗ trống (5): ...____ he can read comic books...', options: ['because', 'but', 'and', 'so'], correctIndex: 0, explainVi: 'Giải thích lý do yêu thích phòng ngủ → dùng liên từ "because" (bởi vì).' },
];

// PART X: Reading Comprehension — Laury's Bedroom (5 MCQs)
export const TEST2_PART10_PASSAGE = `Hi! I'm Laury. Let me tell you about my favourite room in our house — my bedroom! It is not very big, but it is bright and tidy. The walls are painted light pink because pink is my favourite colour. In my bedroom, there is a soft bed, a white desk, a wooden chair, a tall wardrobe and a small bedside table. My bed is near the window so I can look at the trees outside. The bedside table is between the desk and the bed. On the desk, I keep my lamp, my notebooks and my computer. I put my clothes in the wardrobe next to the door. I really love spending time in my bedroom!`;

export const TEST2_PART10_MCQS: SimpleMcqItem[] = [
  { id: 1, question: 'Whose bedroom is the passage about?', options: ['Linda', 'Laury', 'Mary', 'Lucy'], correctIndex: 1, explainVi: 'Câu mở đầu: "Hi! I\'m Laury. Let me tell you about... my bedroom!"' },
  { id: 2, question: 'What is Laury\'s bedroom like?', options: ['It is bright.', 'It is tidy.', 'The walls are light pink.', 'All are correct.'], correctIndex: 3, explainVi: 'Bài đọc nêu đủ cả 3 đặc điểm: sáng sủa (bright), gọn gàng (tidy) và tường màu hồng nhạt (light pink) → D. All are correct.' },
  { id: 3, question: 'Where does Laury put her clothes?', options: ['on the desk', 'under the bed', 'wardrobe', 'on the chair'], correctIndex: 2, explainVi: 'Thông tin trong bài: "I put my clothes in the wardrobe next to the door."' },
  { id: 4, question: 'Where is the bedside table?', options: ['next to the window', 'between the desk and the bed', 'behind the door', 'in front of the wardrobe'], correctIndex: 1, explainVi: 'Thông tin trong bài: "The bedside table is between the desk and the bed."' },
  { id: 5, question: 'How many main pieces of furniture are listed in her bedroom?', options: ['2', '3', '4', '5'], correctIndex: 3, explainVi: 'Gồm 5 món: (1) bed, (2) desk, (3) chair, (4) wardrobe, (5) bedside table → D. 5.' },
];

// PART XI: Rewrite 8 Equivalent Sentences
export const TEST2_PART11_REWRITE: RewriteItem[] = [
  {
    id: 1,
    prompt: 'My house has five rooms.',
    starter: 'There...',
    answer: 'There are five rooms in my house.',
    explainVi: 'Chuyển S + have/has → There is/are + N + in + địa điểm.',
  },
  {
    id: 2,
    prompt: 'The new shopping center is near the bus station.',
    starter: 'The bus station...',
    answer: 'The bus station is near the new shopping center.',
    accepted: ['The bus station is near the new shopping centre.'],
    explainVi: 'A near B ↔ B near A (đảo hai địa điểm).',
  },
  {
    id: 3,
    prompt: 'John has a new computer.',
    starter: "John's...",
    answer: "John's computer is new.",
    explainVi: 'Dùng sở hữu cách: John\'s computer + is + new.',
  },
  {
    id: 4,
    prompt: 'The house is behind the trees.',
    starter: 'There are...',
    answer: 'There are trees in front of the house.',
    accepted: ['There are some trees in front of the house.'],
    explainVi: 'Ngôi nhà ở sau hàng cây ↔ Có những cái cây ở phía trước ngôi nhà (in front of).',
  },
  {
    id: 5,
    prompt: 'The desk of our teacher is nice.',
    starter: 'Our...',
    answer: "Our teacher's desk is nice.",
    explainVi: 'Chuyển cụm "the desk of our teacher" sang sở hữu cách "Our teacher\'s desk".',
  },
  {
    id: 6,
    prompt: 'There are two bathrooms in that house.',
    starter: 'That house...',
    answer: 'That house has two bathrooms.',
    explainVi: 'Chuyển There are... in + N → N (số ít) + has...',
  },
  {
    id: 7,
    prompt: 'I like the bedroom best in my house.',
    starter: 'My favourite...',
    answer: 'My favourite room is the bedroom.',
    accepted: ['My favourite room in my house is the bedroom.', 'My favorite room is the bedroom.'],
    explainVi: 'like ... best = favourite room.',
  },
  {
    id: 8,
    prompt: 'Is there a garden in front of the house?',
    starter: 'Does...',
    answer: 'Does the house have a garden in front of it?',
    accepted: ['Does the house have a garden?'],
    explainVi: 'Chuyển câu hỏi Is there... → Does + chủ ngữ số ít + have...?',
  },
];

// PART XII: Guided Writing — Describe Your Favourite Room (p.58 / Key p.168)
export const TEST2_PART12_WRITING = {
  promptVi: 'Viết một đoạn văn ngắn (60–80 từ) miêu tả căn phòng yêu thích trong ngôi nhà của em (phòng gì, rộng hay nhỏ, có những đồ vật gì, vị trí từng đồ vật ra sao và tại sao em thích căn phòng đó).',
  checklistVi: [
    'Giới thiệu tên căn phòng yêu thích (My favourite room is...)',
    'Miêu tả kích thước, màu sắc hoặc ánh sáng (big/small, bright, tidy)',
    'Dùng "There is / There are" liệt kê ít nhất 4 đồ đạc trong phòng',
    'Dùng ít nhất 3 giới từ chỉ vị trí (in, on, under, next to, between, in front of...)',
    'Nêu cảm xúc kết bài (I love my room because...)',
  ],
  sampleParagraph:
    'My favourite room in my house is my bedroom. It is not very big, but it is bright, clean and very comfortable. The walls are light blue, which is my favourite colour. In my room, there is a bed, a wardrobe, a desk, a chair and a bookshelf. My bed is next to the window, and there is a small table beside it. My desk is opposite the bed. There is a lamp and a computer on the desk, and my school bag is under it. There are also some nice posters on the wall. I love my bedroom very much because it is a quiet place for me to study and relax.',
  sampleTranslationVi:
    'Căn phòng yêu thích nhất trong nhà em là phòng ngủ. Phòng không quá rộng nhưng rất sáng sủa, sạch sẽ và thoải mái. Tường được sơn màu xanh dương nhạt — màu em thích nhất. Trong phòng có một chiếc giường, một tủ quần áo, một bàn học, một chiếc ghế và một giá sách. Giường của em đặt cạnh cửa sổ, bên cạnh có một chiếc bàn nhỏ. Bàn học nằm đối diện giường. Trên bàn có đèn học và máy tính, còn cặp sách ở dưới gầm bàn. Trên tường còn có vài tấm áp phích đẹp. Em rất yêu phòng ngủ của mình vì đó là nơi yên tĩnh để em học bài và thư giãn.',
};
