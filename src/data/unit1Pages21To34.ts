// Complete structured data for Book Pages 21–34 (Unit 1 Remaining Exercises + Complete Test for Unit 1)
// Source: Chinh phục Ngữ pháp và Bài tập Tiếng Anh Lớp 6 – Tập 1 – Global Success

export interface MultiBlankItem {
  id: number;
  parts: string[];
  cues: string[];
  answers: string[];
  accepted?: string[][];
  fullSentence: string;
  explanationVi: string;
}

// Ex II.12 (Page 21): Put verbs + adverbs of frequency in Present Simple (10 sentences)
export const PRESENT_FREQ_10: MultiBlankItem[] = [
  {
    id: 1,
    parts: ['He', 'his bedroom at the weekend.'],
    cues: ['often / clean'],
    answers: ['often cleans'],
    fullSentence: 'He often cleans his bedroom at the weekend.',
    explanationVi: 'Trạng từ "often" đứng TRƯỚC động từ thường "clean"; chủ ngữ "He" (số ít) thêm -s → often cleans.',
  },
  {
    id: 2,
    parts: ['He', 'bored in the Math lessons.'],
    cues: ['sometimes / be'],
    answers: ['is sometimes'],
    fullSentence: 'He is sometimes bored in the Math lessons.',
    explanationVi: 'Trạng từ "sometimes" đứng SAU động từ to be "is" → is sometimes.',
  },
  {
    id: 3,
    parts: ['Our teacher', 'late for lessons.'],
    cues: ['never / be'],
    answers: ['is never'],
    fullSentence: 'Our teacher is never late for lessons.',
    explanationVi: '"Our teacher" là số ít (is); trạng từ "never" đứng SAU to be → is never.',
  },
  {
    id: 4,
    parts: ['Mai', 'her homework in the evening.'],
    cues: ['usually / do'],
    answers: ['usually does'],
    fullSentence: 'Mai usually does her homework in the evening.',
    explanationVi: '"usually" đứng trước động từ thường; "Mai" số ít nên "do" → "does" → usually does.',
  },
  {
    id: 5,
    parts: ['Lisa', 'a bus to class.'],
    cues: ['sometimes / take'],
    answers: ['sometimes takes'],
    fullSentence: 'Lisa sometimes takes a bus to class.',
    explanationVi: '"sometimes" đứng trước động từ thường; "Lisa" số ít nên "take" → "takes".',
  },
  {
    id: 6,
    parts: ['', 'action movies?'],
    cues: ['You / often / watch'],
    answers: ['Do you often watch'],
    fullSentence: 'Do you often watch action movies?',
    explanationVi: 'Câu hỏi với "you" mượn trợ động từ Do ở đầu câu, "often" đứng trước V nguyên mẫu → Do you often watch.',
  },
  {
    id: 7,
    parts: ['My mother', 'fast food and she', 'healthy food.'],
    cues: ['never / buy', 'usually / eat'],
    answers: ['never buys', 'usually eats'],
    fullSentence: 'My mother never buys fast food and she usually eats healthy food.',
    explanationVi: 'Cả hai vế đều chủ ngữ số ít (My mother / she) → trạng từ đứng trước V thêm -s: never buys / usually eats.',
  },
  {
    id: 8,
    parts: ['It', 'hot and sunny here in August.'],
    cues: ['always / be'],
    answers: ['is always'],
    fullSentence: 'It is always hot and sunny here in August.',
    explanationVi: 'Động từ to be với "It" là "is"; trạng từ "always" đứng SAU to be → is always.',
  },
  {
    id: 9,
    parts: ['It', 'here in the summer.'],
    cues: ['sometimes / rain'],
    answers: ['sometimes rains'],
    fullSentence: 'It sometimes rains here in the summer.',
    explanationVi: '"sometimes" đứng trước động từ thường "rain"; chủ ngữ "It" thêm -s → sometimes rains.',
  },
  {
    id: 10,
    parts: ['John and I', 'out for a drink together.'],
    cues: ['often / go'],
    answers: ['often go'],
    fullSentence: 'John and I often go out for a drink together.',
    explanationVi: '"John and I" là số nhiều (= we) nên giữ nguyên "go" → often go.',
  },
];

// Ex II.13 (Pages 21–22): Mary's Weekly Schedule + 10 Q&A
export interface ScheduleRow {
  activityEn: string;
  activityVi: string;
  days: [boolean, boolean, boolean, boolean, boolean, boolean, boolean]; // Mon..Sun
  summaryVi: string;
}

export const MARY_SCHEDULE_DAYS = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'] as const;

export const MARY_SCHEDULE: ScheduleRow[] = [
  {
    activityEn: 'play the piano',
    activityVi: 'chơi đàn piano',
    days: [true, true, true, true, true, true, true],
    summaryVi: '7/7 ngày (every day)',
  },
  {
    activityEn: 'go to the library',
    activityVi: 'đi thư viện',
    days: [false, true, true, true, false, false, false],
    summaryVi: '3 lần/tuần (occasionally / three times a week)',
  },
  {
    activityEn: 'go to the park',
    activityVi: 'đi công viên',
    days: [false, false, false, false, false, true, false],
    summaryVi: '1 lần/tuần vào Thứ 7 (once a week / on the weekend)',
  },
  {
    activityEn: 'walk her dog',
    activityVi: 'dắt chó đi dạo',
    days: [false, true, false, true, false, false, false],
    summaryVi: '2 lần/tuần (twice a week / sometimes)',
  },
  {
    activityEn: 'watch TV',
    activityVi: 'xem ti-vi',
    days: [false, false, false, false, false, false, false],
    summaryVi: '0 ngày (never)',
  },
];

export interface QaCheckItem {
  id: number;
  question: string;
  answer: string;
  accepted?: string[];
  hintVi: string;
  explanationVi: string;
}

export const MARY_QA_10: QaCheckItem[] = [
  {
    id: 1,
    question: 'How often does Mary play the piano?',
    answer: 'She plays the piano every day.',
    accepted: ['Mary plays the piano every day.', 'She always plays the piano.'],
    hintVi: 'Nhìn hàng "play the piano": tích đủ cả 7 ngày từ Mon đến Sun.',
    explanationVi: 'Mary chơi piano cả 7 ngày trong tuần → every day (nhớ thêm -s vào plays).',
  },
  {
    id: 2,
    question: 'Does Mary always go to the park on the weekend?',
    answer: 'Yes, she does.',
    hintVi: 'Kiểm tra cột Sat (cuối tuần) ở hàng "go to the park".',
    explanationVi: 'Có dấu tích vào Thứ 7 (weekend) → Yes, she does.',
  },
  {
    id: 3,
    question: 'How often does she go to the library?',
    answer: 'She occasionally goes to the library.',
    accepted: ['She goes to the library three times a week.', 'She goes to the library 3 times a week.'],
    hintVi: 'Hàng "go to the library" có 3 ngày (Tues, Wed, Thurs) → occasionally hoặc three times a week.',
    explanationVi: 'Cô ấy đi thư viện 3 lần/tuần (Tues, Wed, Thurs) → She occasionally goes to the library / three times a week.',
  },
  {
    id: 4,
    question: 'Does Mary often watch TV?',
    answer: "No, she doesn't.",
    hintVi: 'Nhìn hàng "watch TV": không có ngày nào được tích.',
    explanationVi: 'Mary không bao giờ xem TV → No, she doesn\'t.',
  },
  {
    id: 5,
    question: 'How often does she walk her dog?',
    answer: 'She sometimes walks her dog.',
    accepted: ['She walks her dog twice a week.', 'She walks her dog two times a week.'],
    hintVi: 'Hàng "walk her dog" tích 2 ngày (Tues, Thurs) → sometimes / twice a week.',
    explanationVi: '2 ngày/tuần tương ứng "sometimes" hoặc "twice a week" (nhớ thêm -s: walks).',
  },
  {
    id: 6,
    question: 'How often does she watch TV?',
    answer: 'She never watches TV.',
    hintVi: '0 ngày/tuần dùng trạng từ "never" đứng trước "watches".',
    explanationVi: 'Không tích ngày nào → never; watch tận cùng -ch thêm -es → watches.',
  },
  {
    id: 7,
    question: 'Does she go to the park on Mondays?',
    answer: "No, she doesn't.",
    hintVi: 'Cột Mon ở hàng "go to the park" để trống.',
    explanationVi: 'Cô ấy chỉ đi công viên vào Thứ 7, không đi Thứ 2 → No, she doesn\'t.',
  },
  {
    id: 8,
    question: 'How many times a week does she walk her dog?',
    answer: 'She walks her dog twice a week.',
    accepted: ['Twice a week.', 'She walks her dog two times a week.'],
    hintVi: 'Đếm số dấu tích ở hàng "walk her dog": 2 lần = twice a week.',
    explanationVi: '2 lần một tuần trong tiếng Anh nói gọn là "twice a week".',
  },
  {
    id: 9,
    question: 'How many times a week does she go to the park?',
    answer: 'She goes to the park once a week.',
    accepted: ['Once a week.', 'She goes to the park one time a week.'],
    hintVi: 'Đếm số dấu tích ở hàng "go to the park": 1 lần = once a week.',
    explanationVi: '1 lần một tuần là "once a week" (nhớ "go" → "goes").',
  },
  {
    id: 10,
    question: 'Does she go to the library on the weekend?',
    answer: "No, she doesn't.",
    hintVi: 'Kiểm tra hai cột Sat và Sun ở hàng "go to the library".',
    explanationVi: 'Cô ấy chỉ đi thư viện vào Thứ 3, 4, 5 — không đi cuối tuần → No, she doesn\'t.',
  },
];

// Ex II.14 (Pages 22–23): Circle the correct answer (10 MCQ)
export interface McqItem {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanationVi: string;
}

export const CIRCLE_VERB_10: McqItem[] = [
  {
    id: 1,
    question: 'It is dangerous to _______ skating on that lake.',
    options: ['A. do', 'B. play', 'C. go', 'D. have'],
    correctIndex: 2,
    explanationVi: 'Động từ GO đi với hoạt động đuôi -ing: go skating (đi trượt băng).',
  },
  {
    id: 2,
    question: 'He likes to _______ a good game of chess from time to time.',
    options: ['A. do', 'B. play', 'C. go', 'D. have'],
    correctIndex: 1,
    explanationVi: 'Động từ PLAY dùng cho trò chơi/thể thao có đối kháng: play a game of chess.',
  },
  {
    id: 3,
    question: 'Nam _______ English on Monday and Friday.',
    options: ['A. studies', 'B. does', 'C. goes', 'D. plays'],
    correctIndex: 0,
    explanationVi: 'STUDY đi với môn học (English); chủ ngữ Nam số ít → studies (đổi y → ies).',
  },
  {
    id: 4,
    question: 'I _______ swimming in the river.',
    options: ['A. do', 'B. play', 'C. go', 'D. have'],
    correctIndex: 2,
    explanationVi: 'GO + V-ing: go swimming (đi bơi).',
  },
  {
    id: 5,
    question: 'My daughter always needs someone to _______ with her.',
    options: ['A. do', 'B. play', 'C. go', 'D. have'],
    correctIndex: 1,
    explanationVi: '"play with someone" = chơi đùa cùng với ai đó.',
  },
  {
    id: 6,
    question: 'He _______ football for a local club.',
    options: ['A. plays', 'B. goes', 'C. does', 'D. studies'],
    correctIndex: 0,
    explanationVi: 'PLAY dùng cho môn thể thao dùng bóng (football); chủ ngữ He → plays.',
  },
  {
    id: 7,
    question: 'He _______ sailing every week.',
    options: ['A. plays', 'B. goes', 'C. studies', 'D. does'],
    correctIndex: 1,
    explanationVi: 'GO + V-ing: go sailing (đi chèo thuyền buồm); chủ ngữ He → goes.',
  },
  {
    id: 8,
    question: 'My school is a boarding school and _______ four floors.',
    options: ['A. plays', 'B. goes', 'C. has', 'D. does'],
    correctIndex: 2,
    explanationVi: 'HAVE/HAS mang nghĩa "có": ngôi trường có 4 tầng (số ít → has).',
  },
  {
    id: 9,
    question: "He doesn't like _______ Maths.",
    options: ['A. playing', 'B. studying', 'C. going', 'D. having'],
    correctIndex: 1,
    explanationVi: 'Sau "like" dùng V-ing; học môn Toán là "study Maths" → studying.',
  },
  {
    id: 10,
    question: 'She _______ English and History today.',
    options: ['A. plays', 'B. goes', 'C. has', 'D. does'],
    correctIndex: 2,
    explanationVi: 'Dùng HAVE/HAS để nói có tiết học môn nào đó trong thời khóa biểu: She has English and History.',
  },
];

// Ex III.1 (Page 23): Reading Passage (Nga) + 5 MCQs
export const READING_NGA = {
  title: 'Bài III.1 · Đọc đoạn văn về bạn Nga (Trang 23)',
  passageEn:
    "Hi. My name's Nga. I have lots of friends in my new school and they are all nice to me. We study many subjects: Maths, Science, Literature, Physics, History and English. I have a new uniform. It looks nice. I wear it on Mondays only. I have lessons in the morning from 8 to 11.45. At break time, I often play badminton with my friends or chat. In the afternoon, I read books in the library or do the exercises at home. After dinner in the evening, I often watch TV or listen to music. I usually go to bed at 10. I always get up early in the morning so I never go to school late.",
  passageVi:
    'Xin chào. Mình là Nga. Mình có rất nhiều bạn ở trường mới và mọi người đều rất tốt bụng với mình. Chúng mình học nhiều môn: Toán, Khoa học, Văn, Vật lý, Lịch sử và Tiếng Anh. Mình có đồng phục mới rất đẹp và chỉ mặc vào các ngày Thứ Hai. Mình học buổi sáng từ 8h đến 11h45. Giờ ra chơi, mình thường đánh cầu lông với bạn hoặc trò chuyện. Buổi chiều, mình đọc sách ở thư viện hoặc làm bài tập ở nhà. Sau bữa tối, mình thường xem TV hoặc nghe nhạc. Mình thường đi ngủ lúc 10 giờ. Mình luôn dậy sớm nên không bao giờ đi học muộn.',
  questions: [
    {
      id: 1,
      question: "Nga's new friends are _______.",
      options: ['A. unfriendly', 'B. helpful', 'C. friendly', 'D. creative'],
      correctIndex: 2,
      explanationVi: 'Trong bài: "they are all nice to me" (tất cả đều tốt bụng, thân thiện) → đồng nghĩa với friendly.',
    },
    {
      id: 2,
      question: 'She studies many _______.',
      options: ['A. schools', 'B. subjects', 'C. teachers', 'D. classes'],
      correctIndex: 1,
      explanationVi: 'Trong bài: "We study many subjects: Maths, Science, Literature..." → subjects.',
    },
    {
      id: 3,
      question: 'She wears her uniform _______.',
      options: ['A. every day', 'B. on every first day of the week', 'C. on Tuesdays', 'D. twice a week'],
      correctIndex: 1,
      explanationVi: 'Trong bài: "I wear it on Mondays only" — Thứ Hai chính là ngày đầu tuần (every first day of the week).',
    },
    {
      id: 4,
      question: 'At break time, she often _______ badminton with her friends.',
      options: ['A. plays', 'B. does', 'C. goes', 'D. studies'],
      correctIndex: 0,
      explanationVi: 'Cụm "play badminton" chia ngôi 3 số ít "she" → plays.',
    },
    {
      id: 5,
      question: 'She never goes to school late because she always _______.',
      options: ['A. goes to bed at 10', 'B. reads books', 'C. gets up early', 'D. watches TV'],
      correctIndex: 2,
      explanationVi: 'Câu cuối bài: "I always get up early in the morning so I never go to school late."',
    },
  ] as McqItem[],
};

// Ex III.2 (Page 24): Dialogue Jenny & Bill + 5 Q&A
export const DIALOGUE_JENNY_BILL = {
  title: 'Bài III.2 · Đọc hội thoại giữa Jenny và Bill (Trang 24)',
  lines: [
    { speaker: 'Jenny', text: 'How many subjects do you study at school, Bill?' },
    { speaker: 'Bill', text: 'I study nine different subjects: English, Maths, Science, History, Geography, Art, Music, PE, and Craft and design.' },
    { speaker: 'Jenny', text: "What's your favourite subject?" },
    { speaker: 'Bill', text: 'I like Craft and design best because we always do interesting things. Now I am making a robot!' },
    { speaker: 'Jenny', text: 'A robot? That sounds awesome! Who is your best friend at school?' },
    { speaker: 'Bill', text: 'Jane is. She sits next to me in class and helps me a lot.' },
    { speaker: 'Jenny', text: 'What is her favourite subject?' },
    { speaker: 'Bill', text: "She loves Geography because it's fascinating to know about countries in the world." },
  ],
  questions: [
    {
      id: 1,
      question: 'How many subjects does Bill study at school?',
      answer: 'He studies nine different subjects.',
      accepted: ['Nine.', 'Nine subjects.', 'He studies 9 different subjects.', 'He studies nine subjects.'],
      hintVi: 'Xem lời thoại đầu tiên của Bill.',
      explanationVi: 'Bill trả lời: "I study nine different subjects". Đổi chủ ngữ I → He studies.',
    },
    {
      id: 2,
      question: "What is Bill's favourite subject? Why?",
      answer: 'Craft and design. Because he always does interesting things.',
      accepted: ['Craft and design because he always does interesting things.', 'Craft and design.'],
      hintVi: 'Xem câu thứ hai của Bill: "I like ... best because..."',
      explanationVi: 'Môn yêu thích của Bill là Craft and design vì luôn được làm những thứ thú vị.',
    },
    {
      id: 3,
      question: 'What is he making now?',
      answer: 'He is making a robot.',
      accepted: ['A robot.', "He's making a robot."],
      hintVi: 'Chú ý cụm "Now I am making..."',
      explanationVi: 'Bill nói: "Now I am making a robot!" → He is making a robot.',
    },
    {
      id: 4,
      question: 'Who is his best friend?',
      answer: 'Jane is.',
      accepted: ['Jane.', 'His best friend is Jane.'],
      hintVi: 'Xem câu trả lời của Bill cho câu hỏi "Who is your best friend?"',
      explanationVi: 'Bạn thân nhất của Bill là Jane.',
    },
    {
      id: 5,
      question: "What is Jane's favourite subject? Why?",
      answer: "Geography. Because it's fascinating to know about countries in the world.",
      accepted: ["Geography because it's fascinating to know about countries in the world.", 'Geography.'],
      hintVi: 'Xem lời thoại cuối cùng của Bill.',
      explanationVi: 'Jane thích Geography (Địa lý) vì thật thú vị khi biết về các quốc gia trên thế giới.',
    },
  ] as QaCheckItem[],
};

// Ex IV.1 (Pages 24–25): Make questions for the underlined part (10 sentences)
export interface UnderlineQuestionItem {
  id: number;
  before: string;
  underlined: string;
  after: string;
  answer: string;
  accepted?: string[];
  hintVi: string;
  explanationVi: string;
}

export const UNDERLINE_QUESTIONS_10: UnderlineQuestionItem[] = [
  {
    id: 1,
    before: "It's ",
    underlined: 'ten past eleven',
    after: '.',
    answer: 'What time is it?',
    hintVi: 'Phần gạch chân chỉ giờ → dùng "What time...?"',
    explanationVi: 'Hỏi giờ hiện tại dùng mẫu câu cố định: What time is it?',
  },
  {
    id: 2,
    before: 'We are in ',
    underlined: 'class 6B',
    after: '.',
    answer: 'Which class are you in?',
    accepted: ['What class are you in?'],
    hintVi: 'Hỏi lớp nào → Which class ...? (đổi We → you).',
    explanationVi: 'Hỏi học lớp nào: Which class are you in?',
  },
  {
    id: 3,
    before: 'They have ',
    underlined: 'two',
    after: ' children.',
    answer: 'How many children do they have?',
    hintVi: 'Phần gạch chân chỉ số lượng đếm được → How many + danh từ số nhiều + do/does...?',
    explanationVi: 'Hỏi số lượng con cái: How many children do they have?',
  },
  {
    id: 4,
    before: "Jim's flat is ",
    underlined: 'on the fourth floor',
    after: '.',
    answer: "Where is Jim's flat?",
    accepted: ["Which floor is Jim's flat on?"],
    hintVi: 'Chỉ vị trí/nơi chốn → dùng "Where".',
    explanationVi: 'Câu có to be "is" → đảo "is" lên trước chủ ngữ: Where is Jim\'s flat?',
  },
  {
    id: 5,
    before: 'My brother is in ',
    underlined: 'grade twelve',
    after: '.',
    answer: 'Which grade is your brother in?',
    accepted: ['What grade is your brother in?'],
    hintVi: 'Hỏi khối lớp → Which grade...? (đổi My → your).',
    explanationVi: 'Hỏi khối lớp: Which grade is your brother in?',
  },
  {
    id: 6,
    before: 'She has lunch ',
    underlined: 'at eleven thirty',
    after: '.',
    answer: 'What time does she have lunch?',
    hintVi: 'Hỏi mấy giờ + động từ thường "has" → mượn "does" và đưa "has" về nguyên mẫu "have".',
    explanationVi: 'What time + does + she + have lunch? (chú ý has → have).',
  },
  {
    id: 7,
    before: 'There is ',
    underlined: 'one',
    after: ' boy in our class.',
    answer: 'How many boys are there in your class?',
    hintVi: 'Sau "How many" LUÔN dùng danh từ số nhiều (boys) và "are there".',
    explanationVi: 'Dù câu trả lời là "one boy", câu hỏi vẫn luôn là: How many boys are there in your class?',
  },
  {
    id: 8,
    before: 'That is ',
    underlined: 'our teacher',
    after: '.',
    answer: 'Who is that?',
    hintVi: 'Gạch chân chỉ người → dùng từ để hỏi "Who".',
    explanationVi: 'Hỏi người: Who is that?',
  },
  {
    id: 9,
    before: 'These are ',
    underlined: 'pencils',
    after: '.',
    answer: 'What are these?',
    hintVi: 'Gạch chân chỉ đồ vật số nhiều → dùng "What".',
    explanationVi: 'Hỏi đồ vật số nhiều gần người nói: What are these?',
  },
  {
    id: 10,
    before: 'Mr. Quan lives ',
    underlined: 'in the country',
    after: '.',
    answer: 'Where does Mr. Quan live?',
    hintVi: 'Chỉ nơi sống → Where + does + Mr. Quan + live (bỏ -s)?',
    explanationVi: 'Chủ ngữ số ít "Mr. Quan" mượn "does", động từ "lives" trả về nguyên mẫu "live".',
  },
];

// Ex IV.2 (Pages 25–26): Guided Paragraph about Quang Trung Lower Secondary School
export const GUIDED_PARAGRAPH_10 = {
  title: 'Bài IV.2 · Viết đoạn văn giới thiệu trường THCS Quang Trung (Trang 25–26)',
  cues: [
    { num: 1, cue: 'I / student / Quang Trung Lower Secondary School / Ha Noi City.', model: 'I am a student at Quang Trung Lower Secondary School in Ha Noi City.' },
    { num: 2, cue: 'My school / very big / beautiful.', model: 'My school is very big and beautiful.' },
    { num: 3, cue: 'There / about 40 classes / more than 1,500 students.', model: 'There are about 40 classes and more than 1,500 students.' },
    { num: 4, cue: 'The teachers / very nice / great.', model: 'The teachers are very nice and great.' },
    { num: 5, cue: 'When / go to school / we / always / wear / uniforms.', model: 'When we go to school, we always wear uniforms.' },
    { num: 6, cue: 'Besides studying / my school / have / many interesting clubs.', model: 'Besides studying, my school has many interesting clubs.' },
    { num: 7, cue: 'I / like / English / because / it / very interesting.', model: 'I like English because it is very interesting.' },
    { num: 8, cue: 'At break time / I / usually / play games / friends / school yard.', model: 'At break time, I usually play games with my friends in my school yard.' },
    { num: 9, cue: 'After school / I / do homework / play football / friends / park.', model: 'After school, I do my homework or play football with my friends in the park.' },
    { num: 10, cue: 'In the evening / I / often / watch TV / read a book.', model: 'In the evening, I often watch TV or read a book.' },
  ],
  fullParagraphEn:
    'I am a student at Quang Trung Lower Secondary School in Ha Noi City. My school is very big and beautiful. There are about 40 classes and more than 1,500 students. The teachers are very nice and great. When we go to school, we always wear uniforms. Besides studying, my school has many interesting clubs. I like English because it is very interesting. At break time, I usually play games with my friends in my school yard. After school, I do my homework or play football with my friends in the park. In the evening, I often watch TV or read a book.',
};

// ============================================================================
// TEST FOR UNIT 1 (Book Pages 27–34 · Verified Answer Keys PDF pp. 161–163)
// ============================================================================

// Part I: Odd-sound Pronunciation (5 questions)
export interface TestPronItem {
  id: number;
  words: [
    { label: string; word: string; underline: string; ipa: string },
    { label: string; word: string; underline: string; ipa: string },
    { label: string; word: string; underline: string; ipa: string },
    { label: string; word: string; underline: string; ipa: string },
  ];
  correctIndex: number;
  explanationVi: string;
}

export const TEST1_PRON_5: TestPronItem[] = [
  {
    id: 1,
    words: [
      { label: 'A', word: 'brother', underline: 'o', ipa: '/ˈbrʌðə/' },
      { label: 'B', word: 'lovely', underline: 'o', ipa: '/ˈlʌvli/' },
      { label: 'C', word: 'homework', underline: 'o', ipa: '/ˈhəʊmwɜːk/' },
      { label: 'D', word: 'honey', underline: 'o', ipa: '/ˈhʌni/' },
    ],
    correctIndex: 2,
    explanationVi: 'C. homework có âm /əʊ/, còn lại brother, lovely, honey đều đọc là /ʌ/.',
  },
  {
    id: 2,
    words: [
      { label: 'A', word: 'color', underline: 'o', ipa: '/ˈkʌlə/' },
      { label: 'B', word: 'money', underline: 'o', ipa: '/ˈmʌni/' },
      { label: 'C', word: 'wonder', underline: 'o', ipa: '/ˈwʌndə/' },
      { label: 'D', word: 'homework', underline: 'o', ipa: '/ˈhəʊmwɜːk/' },
    ],
    correctIndex: 3,
    explanationVi: 'D. homework phát âm là /əʊ/, trong khi color, money, wonder phát âm là /ʌ/.',
  },
  {
    id: 3,
    words: [
      { label: 'A', word: 'couple', underline: 'ou', ipa: '/ˈkʌpl/' },
      { label: 'B', word: 'soul', underline: 'ou', ipa: '/səʊl/' },
      { label: 'C', word: 'southern', underline: 'ou', ipa: '/ˈsʌðən/' },
      { label: 'D', word: 'touch', underline: 'ou', ipa: '/tʌtʃ/' },
    ],
    correctIndex: 1,
    explanationVi: 'B. soul đọc là /əʊ/, còn couple, southern, touch đều đọc âm "ou" là /ʌ/.',
  },
  {
    id: 4,
    words: [
      { label: 'A', word: 'study', underline: 'u', ipa: '/ˈstʌdi/' },
      { label: 'B', word: 'computer', underline: 'u', ipa: '/kəmˈpjuːtə/' },
      { label: 'C', word: 'understand', underline: 'u', ipa: '/ˌʌndəˈstænd/' },
      { label: 'D', word: 'sunny', underline: 'u', ipa: '/ˈsʌni/' },
    ],
    correctIndex: 1,
    explanationVi: 'B. computer đọc chữ "u" là /juː/, còn study, understand, sunny đều đọc là /ʌ/.',
  },
  {
    id: 5,
    words: [
      { label: 'A', word: 'smart', underline: 'ar', ipa: '/smɑːt/' },
      { label: 'B', word: 'dollar', underline: 'ar', ipa: '/ˈdɒlə/' },
      { label: 'C', word: 'start', underline: 'ar', ipa: '/stɑːt/' },
      { label: 'D', word: 'guitar', underline: 'ar', ipa: '/ɡɪˈtɑː/' },
    ],
    correctIndex: 1,
    explanationVi: 'B. dollar có đuôi "ar" không nhấn trọng âm nên đọc nhẹ thành /ə/, còn smart, start, guitar đọc là /ɑː/.',
  },
];

// Part II: Multiple Choice (15 questions)
export const TEST1_MCQ_15: McqItem[] = [
  { id: 1, question: 'She _______ some experiments in Physics class.', options: ['A. makes', 'B. learns', 'C. does', 'D. enjoys'], correctIndex: 2, explanationVi: 'Cụm cố định: do experiments (làm thí nghiệm). Chủ ngữ She → does.' },
  { id: 2, question: 'In my country, books _______ very cheap.', options: ['A. is', 'B. are', 'C. am', 'D. be'], correctIndex: 1, explanationVi: '"books" là danh từ số nhiều → động từ to be là "are".' },
  { id: 3, question: 'In many schools in Viet Nam, students have to wear _______.', options: ['A. clothing', 'B. suit', 'C. uniform', 'D. coat'], correctIndex: 2, explanationVi: 'wear uniform = mặc đồng phục học sinh.' },
  { id: 4, question: 'We usually wear school uniforms _______ Mondays and Fridays.', options: ['A. on', 'B. in', 'C. at', 'D. of'], correctIndex: 0, explanationVi: 'Dùng giới từ "on" trước các thứ trong tuần (on Mondays and Fridays).' },
  { id: 5, question: 'Every year, my father _______ to Ho Chi Minh City to visit my uncle and aunt.', options: ['A. fly', 'B. flys', 'C. flies', 'D. flying'], correctIndex: 2, explanationVi: '"fly" kết thúc bằng phụ âm + y → đổi y thành ies với chủ ngữ số ít "my father" → flies.' },
  { id: 6, question: 'When my mom _______ the housework, I often help her _______ the flowers.', options: ['A. do - water', 'B. does - water', 'C. does - watering', 'D. do - waters'], correctIndex: 1, explanationVi: 'my mom (số ít) → does the housework; cấu trúc help + O + V(nguyên mẫu) → water.' },
  { id: 7, question: 'Nowadays, students often use _______ in mathematics lessons.', options: ['A. rubbers', 'B. calculators', 'C. pencils', 'D. dictionaries'], correctIndex: 1, explanationVi: 'Trong tiết Toán (mathematics), học sinh dùng máy tính cầm tay → calculators.' },
  { id: 8, question: 'We do _______ in the gym every afternoon.', options: ['A. football', 'B. volleyball', 'C. judo', 'D. badminton'], correctIndex: 2, explanationVi: 'Động từ DO đi với võ thuật/thể dục cá nhân: do judo (còn football, volleyball, badminton dùng play).' },
  { id: 9, question: '_______ does Jane have science? — On Monday and Friday.', options: ['A. Where', 'B. What', 'C. When', 'D. What time'], correctIndex: 2, explanationVi: 'Câu trả lời chỉ các ngày trong tuần (On Monday and Friday) → hỏi Khi nào: When.' },
  { id: 10, question: 'He is interested in _______. He wants to be a scientist.', options: ['A. science', 'B. history', 'C. music', 'D. art'], correctIndex: 0, explanationVi: 'Muốn trở thành nhà khoa học (scientist) → yêu thích môn khoa học (science).' },
  { id: 11, question: 'James _______ letters from his friends every day.', options: ['A. receive', 'B. to receive', 'C. receiving', 'D. receives'], correctIndex: 3, explanationVi: 'Dấu hiệu "every day" (Hiện tại đơn), chủ ngữ James số ít → receives.' },
  { id: 12, question: 'I need a _______ to look up the meaning of the new word.', options: ['A. compass', 'B. calculator', 'C. pencil case', 'D. dictionary'], correctIndex: 3, explanationVi: 'Tra nghĩa từ mới (look up the meaning) cần quyển từ điển → dictionary.' },
  { id: 13, question: 'Do you know who is the _______ of this book?', options: ['A. author', 'B. teacher', 'C. student', 'D. doctor'], correctIndex: 0, explanationVi: 'author = tác giả của cuốn sách.' },
  { id: 14, question: 'There are many kinds of books _______ our school library.', options: ['A. on', 'B. at', 'C. in', 'D. under'], correctIndex: 2, explanationVi: 'Bên trong thư viện dùng giới từ "in": in our school library.' },
  { id: 15, question: 'My school library is not very big but it _______ more than 3000 books.', options: ['A. have', 'B. has', 'C. is', 'D. are'], correctIndex: 1, explanationVi: 'Chủ ngữ "it" (số ít) mang nghĩa "có hơn 3000 cuốn sách" → has.' },
];

// Part III: Fill verbs + adverbs of frequency (12 questions)
export const TEST1_PICTURE_FREQ_12: MultiBlankItem[] = [
  { id: 1, parts: ['Paul', 'a shower early in the morning.'], cues: ['always / have'], answers: ['always has'], fullSentence: 'Paul always has a shower early in the morning.', explanationVi: 'Trạng từ "always" đứng trước "has" (have chia theo Paul → has).' },
  { id: 2, parts: ['', 'your brother', 'scared at night?'], cues: ['be', 'ever'], answers: ['Is', 'ever'], fullSentence: 'Is your brother ever scared at night?', explanationVi: 'Câu hỏi với to be: Is + S + ever + tính từ?' },
  { id: 3, parts: ['Tim', 'e-mails to his friends.'], cues: ['often / send'], answers: ['often sends'], fullSentence: 'Tim often sends e-mails to his friends.', explanationVi: '"often" đứng trước động từ thường "sends" (Tim số ít).' },
  { id: 4, parts: ['My boss', 'angry with me.'], cues: ['sometimes / get'], answers: ['sometimes gets'], fullSentence: 'My boss sometimes gets angry with me.', explanationVi: '"sometimes" đứng trước động từ thường "gets" (My boss số ít).' },
  { id: 5, parts: ['', 'they', 'to the beach in summer?'], cues: ['do', 'usually / go'], answers: ['Do', 'usually go'], fullSentence: 'Do they usually go to the beach in summer?', explanationVi: 'Câu hỏi Hiện tại đơn với "they": Do + they + usually go...?' },
  { id: 6, parts: ['Frank', 'exhausted after exercising.'], cues: ['always / be'], answers: ['is always'], fullSentence: 'Frank is always exhausted after exercising.', explanationVi: 'Trạng từ "always" đứng SAU động từ to be "is".' },
  { id: 7, parts: ['My father', 'golf. He prefers tennis.'], cues: ['often / not play'], answers: ["doesn't often play"], accepted: [['does not often play']], fullSentence: "My father doesn't often play golf. He prefers tennis.", explanationVi: 'Câu phủ định số ít: doesn\'t + often + play (V nguyên mẫu).' },
  { id: 8, parts: ["Lara's mother", 'a cake for her birthday.'], cues: ['usually / buy'], answers: ['usually buys'], fullSentence: "Lara's mother usually buys a cake for her birthday.", explanationVi: '"usually" đứng trước "buys" (Lara\'s mother số ít).' },
  { id: 9, parts: ['My grandmother', 'jogging in the morning.'], cues: ['never / go'], answers: ['never goes'], fullSentence: 'My grandmother never goes jogging in the morning.', explanationVi: '"never" đứng trước "goes" (My grandmother số ít).' },
  { id: 10, parts: ['Tom', 'very tired at the end of the day.'], cues: ['generally / be'], answers: ['is generally'], fullSentence: 'Tom is generally very tired at the end of the day.', explanationVi: '"generally" đứng SAU động từ to be "is".' },
  { id: 11, parts: ['', 'Paul', 'impatient when he has to wait?'], cues: ['do', 'ever / get'], answers: ['Does', 'ever get'], fullSentence: 'Does Paul ever get impatient when he has to wait?', explanationVi: 'Câu hỏi với chủ ngữ số ít Paul: Does + Paul + ever get...?' },
  { id: 12, parts: ['Tom is not good at playing tennis. He', 'a match.'], cues: ['rarely / win'], answers: ['rarely wins'], fullSentence: 'Tom is not good at playing tennis. He rarely wins a match.', explanationVi: '"rarely" đứng trước động từ thường "wins".' },
];

// Part IV: Find and correct 10 mistakes
export interface TestMistakeItem {
  id: number;
  parts: [string, string, string];
  wrong: string;
  correct: string;
  explanationVi: string;
}

export const TEST1_MISTAKES_10: TestMistakeItem[] = [
  { id: 1, parts: ['She ', 'brush', ' her teeth twice a day.'], wrong: 'brush', correct: 'brushes', explanationVi: 'Chủ ngữ "She" số ít, động từ tận cùng -sh thêm -es → brushes.' },
  { id: 2, parts: ['My sister ', "don't", ' like eating fish.'], wrong: "don't", correct: "doesn't", explanationVi: '"My sister" là số ít nên phủ định dùng doesn\'t.' },
  { id: 3, parts: ['', 'Does', ' the students wear uniforms every day?'], wrong: 'Does', correct: 'Do', explanationVi: '"the students" là số nhiều nên câu hỏi mượn Do.' },
  { id: 4, parts: ['I ', 'go always', ' to school by bike.'], wrong: 'go always', correct: 'always go', explanationVi: 'Trạng từ tần suất "always" đứng TRƯỚC động từ thường → always go.' },
  { id: 5, parts: ['Nam ', 'play', ' football with his friends after school.'], wrong: 'play', correct: 'plays', explanationVi: 'Chủ ngữ "Nam" số ít nên thêm -s → plays.' },
  { id: 6, parts: ['We read many books ', 'at', ' the school library.'], wrong: 'at', correct: 'in', explanationVi: 'Bên trong thư viện dùng giới từ "in": in the school library.' },
  { id: 7, parts: ['My new school ', 'is having', ' a big playground.'], wrong: 'is having', correct: 'has', explanationVi: 'Chỉ sự sở hữu (trường có sân chơi lớn) chia Hiện tại đơn → has (không chia tiếp diễn).' },
  { id: 8, parts: ['I ', 'am often playing', ' badminton at break time.'], wrong: 'am often playing', correct: 'often play', explanationVi: 'Có trạng từ tần suất "often" (thói quen) → chia Hiện tại đơn: often play.' },
  { id: 9, parts: ['They ', 'listens', ' to English songs in the evening.'], wrong: 'listens', correct: 'listen', explanationVi: 'Chủ ngữ "They" số nhiều nên động từ giữ nguyên mẫu → listen.' },
  { id: 10, parts: ['', 'Do', ' your brother study at a boarding school?'], wrong: 'Do', correct: 'Does', explanationVi: '"your brother" là số ít nên mượn trợ động từ Does.' },
];

// Part V: Match 10 Q&A Pairs
export interface MatchQaPair {
  id: number;
  question: string;
  correctLetter: string;
  answerText: string;
  explanationVi: string;
}

export const TEST1_MATCH_OPTIONS: { letter: string; text: string }[] = [
  { letter: 'A', text: 'By bike.' },
  { letter: 'B', text: 'At 5 o\'clock every day.' },
  { letter: 'C', text: 'Maths.' },
  { letter: 'D', text: 'In the playground.' },
  { letter: 'E', text: 'Yes, of course.' },
  { letter: 'F', text: 'Yes, only 500 metres away.' },
  { letter: 'G', text: 'Over 1,200 students.' },
  { letter: 'H', text: 'Yes, at the weekends.' },
  { letter: 'I', text: 'Five days a week.' },
  { letter: 'J', text: 'It is very interesting.' },
];

export const TEST1_MATCH_10: MatchQaPair[] = [
  { id: 1, question: 'Where do you usually play at break time?', correctLetter: 'D', answerText: 'In the playground.', explanationVi: 'Hỏi nơi chốn (Where) giờ ra chơi → In the playground (Ở sân chơi).' },
  { id: 2, question: 'Do you play sports after school?', correctLetter: 'H', answerText: 'Yes, at the weekends.', explanationVi: 'Câu hỏi Yes/No về chơi thể thao → Yes, at the weekends.' },
  { id: 3, question: 'How often do you go to school?', correctLetter: 'I', answerText: 'Five days a week.', explanationVi: 'Hỏi tần suất (How often) → Five days a week (5 ngày/tuần).' },
  { id: 4, question: 'How do you go to school?', correctLetter: 'A', answerText: 'By bike.', explanationVi: 'Hỏi phương tiện (How) → By bike (Bằng xe đạp).' },
  { id: 5, question: 'How many students are there in your school?', correctLetter: 'G', answerText: 'Over 1,200 students.', explanationVi: 'Hỏi số lượng học sinh (How many) → Over 1,200 students.' },
  { id: 6, question: 'Are you from around here?', correctLetter: 'F', answerText: 'Yes, only 500 metres away.', explanationVi: 'Hỏi có ở gần đây không → Yes, only 500 metres away (chỉ cách 500m).' },
  { id: 7, question: 'What is your favourite subject?', correctLetter: 'C', answerText: 'Maths.', explanationVi: 'Hỏi môn học yêu thích → Maths (Toán).' },
  { id: 8, question: 'Do you wear a uniform to school?', correctLetter: 'E', answerText: 'Yes, of course.', explanationVi: 'Hỏi Yes/No về mặc đồng phục → Yes, of course (Tất nhiên rồi).' },
  { id: 9, question: 'What is your school day like?', correctLetter: 'J', answerText: 'It is very interesting.', explanationVi: 'Hỏi cảm nhận "like" (như thế nào) → It is very interesting.' },
  { id: 10, question: 'What time do you go home?', correctLetter: 'B', answerText: "At 5 o'clock every day.", explanationVi: 'Hỏi mấy giờ (What time) → At 5 o\'clock every day.' },
];

// Part VI: Complete 8 sentences with 1 suitable word
export interface ClozeItem {
  id: number;
  before: string;
  after: string;
  answer: string;
  hintVi: string;
  explanationVi: string;
}

export const TEST1_CLOZE_8: ClozeItem[] = [
  { id: 1, before: 'Students have to wear their school ', after: ' on Mondays.', answer: 'uniform', hintVi: 'đồng phục (u______)', explanationVi: 'school uniform = đồng phục trường học.' },
  { id: 2, before: 'We often play games in the school ', after: ' at break time.', answer: 'playground', hintVi: 'sân chơi (p_________)', explanationVi: 'school playground = sân chơi của trường.' },
  { id: 3, before: 'I need a ', after: ' to draw a circle in Maths class.', answer: 'compass', hintVi: 'compa (c______)', explanationVi: 'Vẽ hình tròn (draw a circle) cần compass (compa).' },
  { id: 4, before: 'My friends and I ', after: ' our bicycles to school every morning.', answer: 'ride', hintVi: 'đạp xe (r___)', explanationVi: 'ride bicycles = đạp xe đạp.' },
  { id: 5, before: 'Our first lesson ', after: ' at 7:30 a.m.', answer: 'starts', hintVi: 'bắt đầu (s_____)', explanationVi: '"Our first lesson" số ít → starts (bắt đầu).' },
  { id: 6, before: 'I love my new school. ', after: ' about your new school?', answer: 'How', hintVi: 'Còn ... thì sao? (H__)', explanationVi: 'Cấu trúc hỏi ngược lại: How about + N/V-ing? (Còn ... thì sao?).' },
  { id: 7, before: 'There are thousands of interesting books in our school ', after: '.', answer: 'library', hintVi: 'thư viện (l______)', explanationVi: 'Nơi có hàng nghìn cuốn sách ở trường là library (thư viện).' },
  { id: 8, before: 'After school, the boys often ', after: ' football together.', answer: 'play', hintVi: 'chơi bóng đá (p___)', explanationVi: 'play football = chơi bóng đá (chủ ngữ số nhiều "the boys" → play).' },
];

// Part VII: Make questions for underlined words (8 questions)
export const TEST1_WH_8: UnderlineQuestionItem[] = [
  { id: 1, before: 'My favourite subject is ', underlined: 'English', after: '.', answer: "What's your favourite subject?", accepted: ['What is your favourite subject?'], hintVi: 'Hỏi môn học yêu thích → What is...?', explanationVi: 'Đổi My → your: What\'s your favourite subject?' },
  { id: 2, before: 'He is reading ', underlined: 'a comic book', after: '.', answer: "What's he reading?", accepted: ['What is he reading?'], hintVi: 'Câu đang ở thì Hiện tại tiếp diễn (is reading) → What is he reading?', explanationVi: 'Đảo "is" lên trước "he": What\'s he reading?' },
  { id: 3, before: 'She goes to school ', underlined: 'by bus', after: '.', answer: 'How does she go to school?', hintVi: 'Hỏi phương tiện đi lại dùng "How".', explanationVi: 'Mượn "does", trả "goes" về "go": How does she go to school?' },
  { id: 4, before: 'I usually ', underlined: 'listen to music', after: ' in my free time.', answer: 'What do you usually do in your free time?', hintVi: 'Hỏi làm gì lúc rảnh → What do you usually do...?', explanationVi: 'Đổi I → you, my → your: What do you usually do in your free time?' },
  { id: 5, before: 'I go to school ', underlined: 'at 6:45', after: '.', answer: 'What time do you go to school?', hintVi: 'Gạch chân giờ cụ thể → What time...?', explanationVi: 'What time do you go to school?' },
  { id: 6, before: 'We have Chemistry ', underlined: 'on Wednesday and Friday', after: '.', answer: 'When do you have Chemistry?', hintVi: 'Gạch chân các thứ trong tuần → When...?', explanationVi: 'When do you have Chemistry?' },
  { id: 7, before: 'My family has lunch ', underlined: 'at 11:30', after: '.', answer: 'What time does your family have lunch?', hintVi: '"your family" là số ít → mượn "does" và "has" → "have".', explanationVi: 'What time does your family have lunch?' },
  { id: 8, before: 'They are playing soccer ', underlined: 'in the stadium', after: '.', answer: 'Where are they playing soccer?', hintVi: 'Gạch chân địa điểm → Where + are they playing...?', explanationVi: 'Đảo "are" lên trước "they": Where are they playing soccer?' },
];

// Part VIII: Reading Passage (David's first day at secondary school — 6 Q&A)
export const TEST1_READING_DAVID = {
  title: 'Phần VIII · Đọc hiểu: Ngày đầu cấp THCS của David (Trang 32)',
  passageEn:
    "Today is David's first day at secondary school. He is in the sixth grade now. He goes to school with his best friend, Tom. They walk to school because their houses are near the school. At first, David feels a little nervous because he doesn't know most of the children in his new class. However, his teachers are very friendly and helpful. In the morning, he has Art, Maths and English. His favourite subjects are Art and English. At lunchtime, he eats in the school canteen with Tom and makes some new friends. At the end of the day, David feels very happy and loves his new school.",
  passageVi:
    'Hôm nay là ngày đầu tiên của David ở trường trung học cơ sở. Bây giờ bạn ấy học lớp 6. Bạn ấy đi học cùng bạn thân nhất là Tom. Hai bạn đi bộ tới trường vì nhà rất gần trường. Ban đầu, David hơi lo lắng vì chưa quen hầu hết các bạn trong lớp mới. Tuy nhiên, thầy cô rất thân thiện và nhiệt tình giúp đỡ. Buổi sáng bạn ấy học Mỹ thuật, Toán và Tiếng Anh. Môn yêu thích của bạn ấy là Mỹ thuật và Tiếng Anh. Giờ trưa bạn ấy ăn ở căng-tin trường cùng Tom và kết thêm bạn mới. Cuối ngày, David cảm thấy rất vui và yêu ngôi trường mới của mình.',
  questions: [
    { id: 1, question: 'Which grade is David in?', answer: 'He is in the sixth grade.', accepted: ['Grade 6.', 'The sixth grade.', 'He is in grade 6.'], hintVi: 'Xem câu thứ hai của đoạn văn.', explanationVi: 'Trong bài: "He is in the sixth grade now."' },
    { id: 2, question: 'Who does he go to school with?', answer: 'He goes to school with his best friend.', accepted: ['His best friend, Tom.', 'Tom.', 'He goes to school with his best friend, Tom.'], hintVi: 'Xem câu thứ ba.', explanationVi: 'Trong bài: "He goes to school with his best friend, Tom."' },
    { id: 3, question: 'How do they go to school?', answer: 'They walk to school.', accepted: ['On foot.', 'They go to school on foot.'], hintVi: 'Xem câu thứ tư: "They walk to school..."', explanationVi: 'Hai bạn đi bộ tới trường → They walk to school.' },
    { id: 4, question: 'Why does David feel nervous at first?', answer: "Because he doesn't know most of the children.", accepted: ["Because he doesn't know most of the children in his new class."], hintVi: 'Tìm từ "nervous" trong đoạn văn.', explanationVi: 'Trong bài: "because he doesn\'t know most of the children in his new class."' },
    { id: 5, question: 'What are his favourite subjects?', answer: 'His favourite subjects are Art and English.', accepted: ['Art and English.', 'They are Art and English.'], hintVi: 'Tìm cụm "favourite subjects".', explanationVi: 'Trong bài: "His favourite subjects are Art and English."' },
    { id: 6, question: 'Does David love his new school?', answer: 'Yes, he does.', hintVi: 'Xem câu cuối cùng của đoạn văn.', explanationVi: 'Câu cuối: "David feels very happy and loves his new school." → Yes, he does.' },
  ] as QaCheckItem[],
};

// Part IX: Write Present Simple sentences from cues (10 questions)
export const TEST1_CUES_10: QaCheckItem[] = [
  { id: 1, question: 'Amanda / not wake up / late / Saturday.', answer: "Amanda doesn't wake up late on Saturday.", accepted: ['Amanda does not wake up late on Saturday.'], hintVi: 'Chủ ngữ số ít Amanda + doesn\'t + wake up + on Saturday.', explanationVi: 'Phủ định số ít dùng doesn\'t + V nguyên mẫu; trước thứ dùng "on".' },
  { id: 2, question: 'They / not believe / the story.', answer: "They don't believe in the story.", accepted: ["They don't believe the story.", 'They do not believe the story.', 'They do not believe in the story.'], hintVi: 'Chủ ngữ They + don\'t + believe (in) the story.', explanationVi: 'Phủ định với "They" dùng don\'t + believe.' },
  { id: 3, question: 'You / understand / the presentation?', answer: 'Do you understand the presentation?', hintVi: 'Câu hỏi với "you" bắt đầu bằng Do.', explanationVi: 'Do + you + understand + the presentation?' },
  { id: 4, question: 'We / not work / late / Saturdays.', answer: "We don't work late on Saturdays.", accepted: ['We do not work late on Saturdays.'], hintVi: 'We + don\'t + work late + on Saturdays.', explanationVi: 'Phủ định với "We" dùng don\'t; trước thứ có giới từ "on".' },
  { id: 5, question: 'Tom / want / some tea?', answer: 'Does Tom want some tea?', hintVi: 'Chủ ngữ số ít Tom → mượn Does đầu câu.', explanationVi: 'Does + Tom + want (nguyên mẫu) + some tea?' },
  { id: 6, question: 'He / have / two sons.', answer: 'He has two sons.', hintVi: 'Động từ "have" chia theo ngôi "He" → has.', explanationVi: 'He + has + two sons.' },
  { id: 7, question: 'When / John / go / his English class?', answer: 'When does John go to his English class?', hintVi: 'When + does + John + go to...?', explanationVi: 'Mượn "does" cho John, thêm giới từ "to" sau "go".' },
  { id: 8, question: 'Why / I / have to / clean up / the office?', answer: 'Why do I have to clean up the office?', hintVi: 'Why + do + I + have to + V...?', explanationVi: 'Chủ ngữ "I" mượn trợ động từ "do".' },
  { id: 9, question: 'My sister / never / get up / early / Sundays.', answer: 'My sister never gets up early on Sundays.', hintVi: '"never" đứng trước "gets up"; thêm giới từ "on" trước Sundays.', explanationVi: 'Chủ ngữ số ít "My sister" → gets up.' },
  { id: 10, question: 'My father / watch / the news / TV.', answer: 'My father watches the news on TV.', hintVi: 'watch → watches; xem trên TV dùng "on TV".', explanationVi: 'Động từ tận cùng -ch thêm -es → watches; cụm cố định "on TV".' },
];

// Part X: Rewrite 8 equivalent sentences
export interface RewritePairItem {
  id: number;
  original: string;
  starter: string;
  answer: string;
  accepted?: string[];
  explanationVi: string;
}

export const TEST1_REWRITE_8: RewritePairItem[] = [
  { id: 1, original: 'What is your favourite subject?', starter: 'What subject', answer: 'What subject do you like?', accepted: ['What subject do you like best?'], explanationVi: 'favourite subject (môn yêu thích) = subject do you like (môn bạn thích).' },
  { id: 2, original: 'Do you like physics?', starter: 'Are you', answer: 'Are you interested in physics?', accepted: ['Are you fond of physics?', 'Are you keen on physics?'], explanationVi: 'like + N = be interested in + N (yêu thích/hứng thú với).' },
  { id: 3, original: 'The school has a computer room and a library.', starter: 'There', answer: 'There is a computer room and a library in the school.', explanationVi: 'Chuyển S + has → There is + danh từ số ít đứng gần nhất (a computer room) + in the school.' },
  { id: 4, original: "Tom's house is near his school.", starter: "Tom's house isn't", answer: "Tom's house isn't far from his school.", explanationVi: 'near (gần) = not far from (không xa).' },
  { id: 5, original: 'Where do you live?', starter: 'What', answer: 'What is your address?', accepted: ["What's your address?"], explanationVi: 'Where do you live? (Bạn sống ở đâu?) = What is your address? (Địa chỉ của bạn là gì?).' },
  { id: 6, original: 'There are 35 students in my class.', starter: 'My class', answer: 'My class has 35 students.', explanationVi: 'There are X in Y = Y has X.' },
  { id: 7, original: 'My father drives to work.', starter: 'My father goes', answer: 'My father goes to work by car.', explanationVi: 'drive to work (lái xe đi làm) = go to work by car.' },
  { id: 8, original: 'How many hours a day do you spend learning English?', starter: 'How long does it', answer: 'How long does it take you to learn English every day?', accepted: ['How long does it take you to learn English a day?'], explanationVi: 'Cấu trúc: spend time + V-ing = It takes + O + time + to V.' },
];

// Part XI: Writing Sample (Page 34)
export const TEST1_WRITING_MODEL = {
  title: 'Phần XI · Viết đoạn văn (~60 từ) về môn học yêu thích (Trang 34)',
  checklist: [
    'Giới thiệu tên môn học yêu thích nhất của em (My favourite subject is ...)',
    'Nêu số tiết học mỗi tuần (I have it ... times a week)',
    'Giải thích lý do em thích môn học đó (Because it is interesting / useful...)',
    'Mô tả thầy/cô giáo và hoạt động trong giờ học (Our teacher is kind... We often...)',
  ],
  sampleEn:
    'Hi, my name is Linda. At school, I study many subjects, and my favourite subject is English. I have English three times a week on Mondays, Wednesdays and Fridays. I love English because it is very interesting and helps me talk with friends around the world. My English teacher is very friendly and creative. In class, we often play games, sing English songs and practise speaking together.',
  sampleVi:
    'Xin chào, mình là Linda. Ở trường, mình học nhiều môn và môn yêu thích nhất của mình là Tiếng Anh. Mình học Tiếng Anh 3 buổi một tuần vào Thứ Hai, Thứ Tư và Thứ Sáu. Mình thích Tiếng Anh vì môn học rất thú vị và giúp mình trò chuyện với bạn bè khắp thế giới. Cô giáo Tiếng Anh của mình rất thân thiện và sáng tạo. Trên lớp, chúng mình thường chơi trò chơi, hát tiếng Anh và luyện nói cùng nhau.',
};
