/**
 * Dữ liệu chuẩn 100% đối chiếu từng trang PDF Sổ Tay Đáp Án & Tổng Ôn Tập 1
 * Nguồn: "Chinh phục Ngữ pháp và Bài tập Tiếng Anh 6 - Tập 1 (Global Success)"
 * Bao phủ đầy đủ vùng Trang 150–179 sách (Trang 157–188 PDF — hoàn thiện 100% Tập 1).
 */

export interface KeyPronunciationColumn {
  soundLabel: string;
  ipa: string;
  tipVi: string;
  words: string[];
}

export interface KeyAnswerItem {
  num: string;
  answer: string;
  note?: string;
}

export interface KeyExerciseBlock {
  id: string;
  partLabel: string;
  page: string;
  category: 'exercise' | 'test';
  layout?: 'compact' | 'list';
  items: KeyAnswerItem[];
  memoryTipVi: string;
}

export interface UnitAnswerKeyData {
  unitId: 1 | 2 | 3 | 4 | 5 | 6;
  code: string;
  titleEn: string;
  titleVi: string;
  pageRange: string;
  pdfRange: string;
  workbookRange: string;
  accentHex: string;
  summaryVi: string;
  pronunciation: {
    title: string;
    page: string;
    columns: KeyPronunciationColumn[];
  };
  blocks: KeyExerciseBlock[];
}

export interface SampleEssayItem {
  id: string;
  unitId: 1 | 2 | 3 | 4 | 5 | 6;
  page: string;
  sourceLabel: string;
  titleEn: string;
  titleVi: string;
  promptVi: string;
  englishText: string;
  vietnameseText: string;
  keyStructures: { en: string; vi: string }[];
  examTipVi: string;
}

export interface ErrorTrapItem {
  id: string;
  unitId: 1 | 2 | 3 | 4 | 5 | 6;
  page: string;
  source: string;
  sentence: string;
  wrong: string;
  correct: string;
  ruleVi: string;
}

export interface RewriteFormulaItem {
  id: string;
  unitId: 1 | 2 | 3 | 4 | 5 | 6;
  page: string;
  patternVi: string;
  originalEn: string;
  rewrittenEn: string;
  tipVi: string;
}

export interface Semester1UnitSnapshot {
  unitId: 1 | 2 | 3 | 4 | 5 | 6;
  code: string;
  titleEn: string;
  accentHex: string;
  ipaPair: string;
  ipaExamples: string[];
  grammarCoreVi: string;
  formulaEn: string;
  topTrapVi: string;
}

export const SEMESTER1_ANSWER_KEYS: UnitAnswerKeyData[] = [
  /* =========================================================================
   * UNIT 1 KEY (BOOK pp. 150–156 · PDF pp. 157–163)
   * ========================================================================= */
  {
    unitId: 1,
    code: 'Unit 1',
    titleEn: 'My New School',
    titleVi: 'Ngôi trường mới của em',
    pageRange: 'Tr.150–156',
    pdfRange: 'PDF Tr.157–163',
    workbookRange: 'Bài tập Tr.1–34',
    accentHex: '#0284C7',
    summaryVi: 'Trọng tâm: Phát âm /ɑː/ vs /ʌ/, 5 nhóm động từ (study/have/do/play/go), Hiện tại đơn & Trạng từ tần suất.',
    pronunciation: {
      title: 'I. Pronunciation · Phân loại /ɑː/ và /ʌ/',
      page: 'Tr.150',
      columns: [
        {
          soundLabel: 'Âm /ɑː/ (a dài, mở miệng rộng)',
          ipa: '/ɑː/',
          tipVi: 'Thường gặp ở chữ "ar" (carp, garden, dark, arm, alarm, guitar).',
          words: ['carp', 'garden', 'dark', 'arm', 'alarm', 'marvellous', 'guitar'],
        },
        {
          soundLabel: 'Âm /ʌ/ (ă ngắn, bật gọn)',
          ipa: '/ʌ/',
          tipVi: 'Gặp ở chữ "u" (lunch, study, club, subject, mum), "o" (brother, Monday, money, come) và "ou" (country).',
          words: [
            'country',
            'dust',
            'brother',
            'Monday',
            'lunch',
            'money',
            'come',
            'study',
            'club',
            'subject',
            'hungry',
            'Sunday',
            'mum',
          ],
        },
      ],
    },
    blocks: [
      {
        id: 'u1-ex1',
        partLabel: 'II.1 · Đồ dùng học tập & trường học',
        page: 'Tr.150',
        category: 'exercise',
        items: [
          { num: '1', answer: 'rubber' },
          { num: '2', answer: 'calculator' },
          { num: '3', answer: 'schoolbag' },
          { num: '4', answer: 'pencil case' },
          { num: '5', answer: 'dictionary' },
          { num: '6', answer: 'notebook' },
          { num: '7', answer: 'compass' },
          { num: '8', answer: 'school' },
          { num: '9', answer: 'classroom' },
          { num: '10', answer: 'teacher' },
        ],
        memoryTipVi: 'Nhớ cụm: rubber (tẩy), calculator (máy tính bỏ túi), compass (com-pa).',
      },
      {
        id: 'u1-ex2',
        partLabel: 'II.2 · Từ vựng hoạt động ở trường',
        page: 'Tr.150',
        category: 'exercise',
        items: [
          { num: '1', answer: 'club' },
          { num: '2', answer: 'subject' },
          { num: '3', answer: 'lessons' },
          { num: '4', answer: 'vocabulary' },
          { num: '5', answer: 'school year' },
          { num: '6', answer: 'secondary' },
          { num: '7', answer: 'homework' },
          { num: '8', answer: 'playground' },
          { num: '9', answer: 'team' },
          { num: '10', answer: 'break time' },
        ],
        memoryTipVi: 'Secondary school = trường THCS; break time = giờ ra chơi.',
      },
      {
        id: 'u1-ex3',
        partLabel: 'II.3 · Điền từ vào câu về trường học',
        page: 'Tr.151',
        category: 'exercise',
        items: [
          { num: '1', answer: 'fields' },
          { num: '2', answer: 'drawing' },
          { num: '3', answer: 'at break time' },
          { num: '4', answer: 'uniform' },
          { num: '5', answer: 'an international school' },
          { num: '6', answer: 'a boarding school' },
          { num: '7', answer: 'clubs' },
          { num: '8', answer: 'computers' },
        ],
        memoryTipVi: 'Boarding school = trường nội trú; international school = trường quốc tế.',
      },
      {
        id: 'u1-ex4',
        partLabel: 'II.4 & II.5 · Bảng 5 động từ Study / Have / Do / Play / Go',
        page: 'Tr.151',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'Study', answer: 'science, Vietnamese, vocabulary, history, physics' },
          { num: 'Have', answer: 'school lunch, lunch, a flat, a backache' },
          { num: 'Do', answer: 'aerobics, gymnastics, karate, judo, yoga' },
          { num: 'Play', answer: 'table tennis, volleyball, rugby, chess, golf' },
          { num: 'Go', answer: 'cycling, swimming, dancing, bowling, sailing' },
          { num: 'Bài 5 (1–10)', answer: '1. go · 2. go · 3. play · 4. go · 5. play · 6. go · 7. go – do · 8. do · 9. play · 10. go' },
        ],
        memoryTipVi: 'Mẹo siêu dễ nhớ: PLAY + môn có bóng/bàn cờ; DO + võ/thể dục thẩm mỹ; GO + V-ing.',
      },
      {
        id: 'u1-ex6',
        partLabel: 'II.6 · Chia động từ Hiện tại đơn (15 câu)',
        page: 'Tr.151',
        category: 'exercise',
        items: [
          { num: '1', answer: "doesn't drink – drinks" },
          { num: '2', answer: 'is' },
          { num: '3', answer: 'do – do' },
          { num: '4', answer: 'circles' },
          { num: '5', answer: 'see' },
          { num: '6', answer: 'flow' },
          { num: '7', answer: 'washes' },
          { num: '8', answer: 'is – teaches' },
          { num: '9', answer: "does – don't like" },
          { num: '10', answer: "don't have – walk" },
          { num: '11', answer: 'studies – wants' },
          { num: '12', answer: 'likes' },
          { num: '13', answer: 'encourages' },
          { num: '14', answer: 'lives' },
          { num: '15', answer: 'speaks' },
        ],
        memoryTipVi: 'Ngôi thứ 3 số ít (He/She/It) thêm -s/-es; tận cùng o, s, x, z, ch, sh thêm -es (washes, teaches).',
      },
      {
        id: 'u1-ex7-8',
        partLabel: 'II.7 (Phủ định) & II.8 (Câu hỏi Yes/No)',
        page: 'Tr.151–152',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.7 (1–4)', answer: "1. He isn't the best in the class. · 2. Peter doesn't do homework in the evening. · 3. We don't play football after school. · 4. You don't run fast." },
          { num: 'II.7 (5–8)', answer: "5. Tim and Lucas don't work at weekends. · 6. I don't like classical music. · 7. These exercises aren't difficult. · 8. She doesn't have science on Fridays." },
          { num: 'II.8 (1–4)', answer: "1. Do you have an art lesson on Monday? No, I don't. · 2. Do they ride their bikes to school? Yes, they do. · 3. Does Jane play tennis at school? No, she doesn't. · 4. Are your parents at home now? Yes, they are." },
          { num: 'II.8 (5–8)', answer: "5. Does he have breakfast at 6 o'clock every day? Yes, he does. · 6. Are you a good student? No, I am not. · 7. Do I look well? No, you don't. · 8. Is Ms. Hoa a good teacher? Yes, she is." },
        ],
        memoryTipVi: 'Sau trợ động từ do/does/don\'t/doesn\'t luôn đưa động từ chính về nguyên thể (không thêm -s/-es).',
      },
      {
        id: 'u1-ex9-10',
        partLabel: 'II.9 (Giới từ) & II.10 (Tìm lỗi sai)',
        page: 'Tr.152',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.9 (1–5)', answer: '1. in – on · 2. to · 3. at · 4. in · 5. on' },
          { num: 'II.9 (6–10)', answer: '6. to · 7. at · 8. with · 9. with · 10. After' },
          { num: 'II.10 (1–4)', answer: "1. C (has → have) · 2. A (Where → What) · 3. C (at → to) · 4. C (don't cleans → doesn't clean)" },
          { num: 'II.10 (5–8)', answer: '5. D (in → at) · 6. A (When → What) · 7. A (Does → Do) · 8. A (child → children)' },
        ],
        memoryTipVi: 'Nhớ cụm giới từ: at break time, at night, on Mondays, in the morning, listen to music.',
      },
      {
        id: 'u1-ex11-14',
        partLabel: 'II.11–14 · Trạng từ tần suất & Chia động từ',
        page: 'Tr.152–153',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.11 (1–5)', answer: "1. Susan is never late for school. · 2. My brother doesn't usually write letters to his friends. · 3. We go on holidays twice a year. · 4. Peter sometimes wears a tie. · 5. I eat fish once a week." },
          { num: 'II.11 (6–10)', answer: '6. Do the children often watch TV? · 7. My father is always very busy. · 8. Peter never tidies his room. · 9. My brother and I go fishing every week. · 10. My mother always goes shopping on Saturdays.' },
          { num: 'II.11 (11–15)', answer: '11. Do you usually get up late at the weekend? · 12. I drink tea every morning. · 13. Mary sometimes rides her motorbike to work. · 14. I often exercise in the afternoons. · 15. Does Jane usually have lunch at home?' },
          { num: 'II.12 (1–10)', answer: '1. often cleans · 2. is sometimes · 3. is never · 4. usually does · 5. sometimes takes · 6. Do you often watch · 7. never buys – usually eats · 8. is always · 9. sometimes rains · 10. often go' },
          { num: 'II.13 (1–10)', answer: "1. She plays the piano every day. · 2. Yes, she does. · 3. She occasionally goes to the library / three times a week. · 4. No, she doesn't. · 5. She sometimes walks her dog. · 6. She never watches TV. · 7. No, she doesn't. · 8. She walks her dog twice a week. · 9. She goes to the park once a week. · 10. No, she doesn't." },
          { num: 'II.14 (1–10)', answer: '1. go · 2. play · 3. studies · 4. go · 5. play · 6. plays · 7. goes · 8. has · 9. studying · 10. has' },
        ],
        memoryTipVi: 'Quy tắc vàng vị trí trạng từ tần suất: SAU "to be" (is always) và TRƯỚC động từ thường (often cleans).',
      },
      {
        id: 'u1-read-write',
        partLabel: 'III. Đọc hiểu & IV. Viết (Đặt câu hỏi Wh-)',
        page: 'Tr.153–154',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'III.1 (1–5)', answer: '1. C · 2. B · 3. B · 4. A · 5. C' },
          { num: 'III.2 (1–5)', answer: "1. He studies nine different subjects. · 2. Craft and design. Because he always does interesting things. · 3. He is making a robot. · 4. Jane is. · 5. Geography. Because it's fascinating to know about countries in the world." },
          { num: 'IV.1 (1–5)', answer: "1. What time is it? · 2. Which class are you in? · 3. How many children do they have? · 4. Where is Jim's flat? · 5. Which grade is your brother in?" },
          { num: 'IV.1 (6–10)', answer: '6. What time does she have lunch? · 7. How many boys are there in your class? · 8. Who is that? · 9. What are these? · 10. Where does Mr. Quan live?' },
        ],
        memoryTipVi: 'Bài IV.2 (Đoạn văn mẫu về trường THCS Quang Trung) đã có bản song ngữ + âm thanh ở thẻ "Kho Bài Văn Mẫu".',
      },
      {
        id: 'u1-test-1-6',
        partLabel: 'TEST FOR UNIT 1 · Phần I → VI',
        page: 'Tr.154–155',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'I. Phát âm', answer: '1. C · 2. D · 3. B · 4. B · 5. B' },
          { num: 'II. Trắc nghiệm', answer: '1.C · 2.B · 3.C · 4.A · 5.C · 6.B · 7.B · 8.C · 9.C · 10.A · 11.D · 12.D · 13.A · 14.C · 15.B' },
          { num: 'III. Chia động từ', answer: "1. always has · 2. Is your brother ever · 3. often sends · 4. sometimes gets · 5. Do they usually go · 6. is always · 7. doesn't often play · 8. usually buys · 9. never goes · 10. is generally · 11. Does Paul ever get · 12. rarely wins" },
          { num: 'IV. Sửa lỗi sai', answer: "1. brush → brushes · 2. don't → doesn't · 3. Does → Do · 4. go always → always go · 5. play → plays · 6. at → in · 7. is having → has · 8. am often play → often play · 9. listens → listen · 10. Do → Does" },
          { num: 'V. Ghép câu', answer: '1.D · 2.H · 3.I · 4.A · 5.G · 6.F · 7.C · 8.E · 9.J · 10.B', note: 'Sách in lỗi OCR "3.1 / 9.1", đáp án chuẩn là 3.I và 9.J.' },
          { num: 'VI. Điền từ', answer: '1. uniform · 2. playground · 3. compass · 4. ride · 5. starts · 6. How · 7. library · 8. play' },
        ],
        memoryTipVi: 'Cẩn thận câu IV.8: Không bao giờ viết "am play" cho thói quen Hiện tại đơn — bỏ "am" đi!',
      },
      {
        id: 'u1-test-7-10',
        partLabel: 'TEST FOR UNIT 1 · Phần VII → X (Đọc & Viết câu)',
        page: 'Tr.155–156',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'VII. Đặt câu hỏi', answer: "1. What's your favourite subject? · 2. What's he reading? · 3. How does she go to school? · 4. What do you usually do in your free time? · 5. What time do you go to school? · 6. When do we/you have Chemistry? · 7. What time does your family have lunch? · 8. Where are they playing soccer?" },
          { num: 'VIII. Đọc (David)', answer: "1. He is in the sixth grade. · 2. He goes to school with his best friend. · 3. They walk to school. · 4. Because he doesn't know most of the children. · 5. His favourite subjects are Art and English. · 6. Yes, he does.", note: 'Câu 2 sách in nhầm "her best friend", đúng ngữ cảnh David (nam) là "his best friend".' },
          { num: 'IX. Viết câu (1–5)', answer: "1. Amanda doesn't wake up late on Saturday. · 2. They don't believe in the story. · 3. Do you understand the presentation? · 4. We don't work late on Saturdays. · 5. Does Tom want some tea?" },
          { num: 'IX. Viết câu (6–10)', answer: '6. He has two sons. · 7. When does John go to his English class? · 8. Why do I have to clean up the office? · 9. My sister never gets up early on Sundays. · 10. My father watches the news on TV.' },
          { num: 'X. Viết lại câu (1–4)', answer: "1. What subject do you like? · 2. Are you interested in physics? · 3. There is a computer room and a library in the school. · 4. Tom's house isn't far from his school." },
          { num: 'X. Viết lại câu (5–8)', answer: '5. What is your address? · 6. My class has 35 students. · 7. My father goes to work by car. · 8. How long does it take you to learn English every day?' },
        ],
        memoryTipVi: 'Mẫu đổi câu cực hay thi: "like = be interested in"; "drive to work = go to work by car"; "near = not far from".',
      },
    ],
  },

  /* =========================================================================
   * UNIT 2 KEY (BOOK pp. 156–160 · PDF pp. 163–168)
   * ========================================================================= */
  {
    unitId: 2,
    code: 'Unit 2',
    titleEn: 'My House',
    titleVi: 'Ngôi nhà của em',
    pageRange: 'Tr.156–160',
    pdfRange: 'PDF Tr.163–168',
    workbookRange: 'Bài tập Tr.35–58',
    accentHex: '#059669',
    summaryVi: 'Trọng tâm: Phát âm đuôi -s/-es (/s/, /z/, /ɪz/), Sở hữu cách (\'s), Giới từ chỉ vị trí & Đồ nội thất các phòng.',
    pronunciation: {
      title: 'I. Pronunciation · Phân loại đuôi -s / -es (/z/, /s/, /ɪz/)',
      page: 'Tr.156',
      columns: [
        {
          soundLabel: 'Âm /s/ (sau /p, t, k, f, θ/)',
          ipa: '/s/',
          tipVi: 'Mẹo nhớ thần thánh: "Thời Phong Kiến Phương Tây" (t, p, k, f, th).',
          words: [
            'lamps',
            'toilets',
            'apartments',
            'books',
            'chopsticks',
            'lights',
            'parents',
            'attics',
            'plants',
            'tablecloths',
            'tourists',
          ],
        },
        {
          soundLabel: 'Âm /ɪz/ (sau s, x, z, ch, sh, ce, ge)',
          ipa: '/ɪz/',
          tipVi: 'Mẹo nhớ: "Sóng Gió Chẳng Sợ Xô Xe" (s, ge, ch, sh, x, ce).',
          words: ['houses', 'boxes', 'dishes', 'fridges', 'vases', 'wishes', 'sandwiches', 'classes'],
        },
        {
          soundLabel: 'Âm /z/ (các âm hữu thanh còn lại)',
          ipa: '/z/',
          tipVi: 'Các từ kết thúc bằng nguyên âm hoặc phụ âm rung (m, g, d, l, r, n, w, v...).',
          words: [
            'rooms',
            'dogs',
            'beds',
            'tables',
            'chairs',
            'televisions',
            'pictures',
            'cookers',
            'windows',
            'photos',
            'clothes',
            'villas',
            'walls',
            'shelves',
            'baths',
          ],
        },
      ],
    },
    blocks: [
      {
        id: 'u2-ex1-4',
        partLabel: 'II.1–4 · Các loại nhà, Phòng & Đồ nội thất',
        page: 'Tr.156–157',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.1 (1–10)', answer: '1. country house · 2. apartment · 3. villa · 4. town house · 5. stilt house · 6. garden · 7. living room · 8. bedroom · 9. kitchen · 10. bathroom' },
          { num: 'II.2 (1–8)', answer: '1. living room · 2. kitchen · 3. bedroom · 4. dining room · 5. hall · 6. garden · 7. bathroom · 8. stairs' },
          { num: 'II.3 (Phòng)', answer: 'Living room (sofa, TV, armchair, coffee table, bookcase...) · Kitchen (fridge, cooker, cupboard, saucepan, stove...) · Bedroom (curtain, chest of drawers, bed, mirror, lamp, wardrobe) · Dining room (chairs, table, shelf, light, fan) · Bathroom (sink, washing machine, bath, shower, toilet)' },
          { num: 'II.4 (1–9)', answer: '1. fridge · 2. sink · 3. dishwasher · 4. bookshelf · 5. cupboard · 6. drawers · 7. shower · 8. sofa – picture · 9. lamp' },
        ],
        memoryTipVi: 'Chú ý "chest of drawers" (tủ ngăn kéo) và "dishwasher" (máy rửa bát) rất hay xuất hiện trong trắc nghiệm.',
      },
      {
        id: 'u2-ex5-7',
        partLabel: 'II.5–7 · Sở hữu cách (\'s và s\')',
        page: 'Tr.157',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.5 (1–12)', answer: "1. children's · 2. sister's · 3. boys' · 4. brother's · 5. cousin's · 6. Peter's · 7. dog's · 8. dad's · 9. brothers' · 10. friend's · 11. uncle's · 12. grandfather's" },
          { num: 'II.6 (1–12)', answer: '1.C · 2.A · 3.C · 4.C · 5.B · 6.A · 7.A · 8.B · 9.C · 10.B · 11.B · 12.C' },
          { num: 'II.7 (2–6)', answer: "2. John's sister is naughty. · 3. My grandmother's house is near the sea. · 4. Mr. White's wife is at home now. · 5. The boys' aunt is very kind. · 6. Mary and Paul's son is five years old." },
          { num: 'II.7 (7–10)', answer: "7. Dr. Johnson's office is dark. · 8. The children's books are very interesting. · 9. Bill's pen friend is Jim. · 10. The students' task is difficult." },
        ],
        memoryTipVi: 'Danh từ số nhiều đã có -s (boys, brothers, students) → chỉ thêm dấu phẩy (\'); bất quy tắc (children) → thêm \'s.',
      },
      {
        id: 'u2-ex8-11',
        partLabel: 'II.8–11 · Giới từ vị trí & Sửa lỗi sai',
        page: 'Tr.157',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.8 (Tranh)', answer: '1.B · 2.C · 3.A · 4.B · 5.C · 6.A · 7.A · 8.B' },
          { num: 'II.9 (1–10)', answer: '1. on · 2. under · 3. between · 4. in front of · 5. next to · 6. under · 7. in – on · 8. under · 9. on · 10. on' },
          { num: 'II.10 (in/on/at)', answer: '1. in · 2. in · 3. on – in · 4. in · 5. on · 6. on – at – in · 7. in · 8. on – in · 9. in · 10. in – on – in' },
          { num: 'II.11 (Lỗi sai)', answer: "1. is → are · 2. A (does → do) · 3. C (that → those) · 4. B (benchs → benches) · 5. C (he's → his) · 6. B (among → between) · 7. A (are → is) · 8. C (front → in front)", note: 'Sách in thiếu câu 1 (is → are), đã bổ sung đầy đủ.' },
        ],
        memoryTipVi: 'Địa chỉ có số nhà dùng AT (at 57 Pine Street), tầng dùng ON (on the 16th floor), thành phố dùng IN (in London).',
      },
      {
        id: 'u2-read-write',
        partLabel: 'III. Đọc hiểu & IV. Viết câu (Tr.157–159)',
        page: 'Tr.157–159',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'III.1 (Điền phòng)', answer: '1. bedrooms · 2. bathroom · 3. kitchen · 4. dining room · 5. living room · 6. garage · 7. garden · 8. attic' },
          { num: 'III.2 & III.3', answer: "III.2: 1.B 2.A 3.C 4.D 5.B · III.3: 1. She lives with her family. 2. It is between the bookshop and the restaurant. 3. It is to the right of the restaurant. 4. No, there isn't. 5. She works in the company." },
          { num: 'IV.1 (1–5)', answer: "1. This is Bill's family. · 2. We love our grandma's cookies. · 3. It's Nick's Russian book. · 4. It's the boy's toy. · 5. It's Peter's book." },
          { num: 'IV.1 (6–10)', answer: "6. My mother's dressing table is new. · 7. It's our friends' house. · 8. Paul's bedroom is new. · 9. There are my brothers' bikes. · 10. Tommy's eyes are big blue." },
          { num: 'IV.2 (Sắp xếp)', answer: "1. Let's go to the department store. · 2. My town house is next to the supermarket. · 3. How about listening to music in the living room? · 4. Tom's bicycle is in the hall. · 5. The dog is under the new desk. · 6. How about having a barbecue in the garden?" },
          { num: 'IV.3 (9 câu phòng)', answer: '1. My favourite room in my house is the bedroom. · 2. It is big and there is a lot of furniture. · 3. I have a bed, a desk, a chair and a computer. · 4. My bed is in the middle of the room. · 5. My desk is under the window with lovely views. · 6. My computer is on the desk and I use it for my studying. · 7. I put drawings on the wall. · 8. My bedroom is next to the bathroom. · 9. It is very comfortable. I love it.' },
        ],
        memoryTipVi: 'Cấu trúc rủ rê: Let\'s + V nguyên thể = How about + V-ing? (Hãy nhớ câu IV.2 #1, #3, #6!).',
      },
      {
        id: 'u2-test-1-6',
        partLabel: 'TEST FOR UNIT 2 · Phần I → VI',
        page: 'Tr.159',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'I. Phát âm (1–10)', answer: '1.D · 2.B · 3.D · 4.B · 5.C · 6.B · 7.D · 8.D · 9.A · 10.A' },
          { num: 'II. Khác loại (1–6)', answer: '1.D · 2.B · 3.A · 4.C · 5.D · 6.D' },
          { num: 'III. 15 MCQ', answer: '1.C · 2.B · 3.A · 4.B · 5.D · 6.A · 7.C · 8.A · 9.C · 10.B · 11.D · 12.B · 13.A · 14.B · 15.D' },
          { num: 'IV. Giới từ (1–10)', answer: '1. at · 2. out of · 3. between · 4. in – beside · 5. after · 6. beneath · 7. under · 8. on – above · 9. among · 10. between' },
          { num: 'V. Chia động từ', answer: "1. aren't · 2. are · 3. Do you get · 4. look · 5. doesn't spend · 6. drives – is · 7. arrives · 8. don't eat · 9. doesn't like · 10. often gives", note: 'Câu V.2 "furniture" không đếm được nên thực tế dùng "is", sách in "are".' },
          { num: 'VI. Word Form', answer: '1. students · 2. noisy · 3. mess · 4. interesting · 5. comfortable · 6. calculators · 7. favourite · 8. excited' },
        ],
        memoryTipVi: 'Word form hay gặp: mess (danh từ: in a mess = bừa bộn), comfortable (thoải mái), excited (hào hứng).',
      },
      {
        id: 'u2-test-7-11',
        partLabel: 'TEST FOR UNIT 2 · Phần VII → XI (Chi tiết PDF Tr.168 / Sách Tr.160)',
        page: 'Tr.159–160',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'VII. Hỏi vị trí (1–4)', answer: '1. Where is the museum? – The museum is in front of the park. · 2. Where is the souvenir shop? – The souvenir shop is between the bookstore and the toy store. · 3. Where is the stadium? – The stadium is on Phan Dinh Phung Street. · 4. Where is the market? – The market is opposite the movie theater.' },
          { num: 'VII. Hỏi vị trí (5–8)', answer: '5. Where are the students? – The students are in the library. · 6. Where is the supermarket? – The supermarket is near the hospital. · 7. Where is the drugstore? – The drugstore is on/to the left of my house. · 8. Where is the bank? – The bank is opposite the hospital.' },
          { num: 'VIII. Hội thoại (1–8)', answer: '1. Where do you live, Ha? · 2. Do you live in a house? · 3. Is your apartment big? · 4. How many bedrooms are there? · 5. Are there two bathrooms? · 6. Is there a dining room? · 7. What is your favourite room? · 8. What is there in your room?' },
          { num: 'IX & X (Đọc hiểu)', answer: 'IX: 1.A · 2.D · 3.B · 4.A · 5.A  |  X: 1.B · 2.D · 3.C · 4.B · 5.D' },
          { num: 'XI. Viết lại (1–4)', answer: "1. There are five rooms in my house. · 2. The bus station is near the new shopping center. · 3. John's computer is new. · 4. There are trees in front of the house." },
          { num: 'XI. Viết lại (5–8)', answer: "5. Our teacher's desk is nice. · 6. That house has two bathrooms. · 7. My favourite room is the bedroom. · 8. Does the house have a garden in front of it?" },
        ],
        memoryTipVi: 'Bài XII (Đoạn văn mẫu tả căn phòng — PDF Tr.168 / Sách Tr.160) đã cập nhật nguyên văn 100% ở tab "Kho Bài Văn Mẫu".',
      },
    ],
  },

  /* =========================================================================
   * UNIT 3 KEY (BOOK pp. 161–166 · PDF pp. 169–174)
   * ========================================================================= */
  {
    unitId: 3,
    code: 'Unit 3',
    titleEn: 'My Friends',
    titleVi: 'Những người bạn của em',
    pageRange: 'Tr.161–166',
    pdfRange: 'PDF Tr.169–174',
    workbookRange: 'Bài tập Tr.63–83',
    accentHex: '#7C3AED',
    summaryVi: 'Trọng tâm: Phát âm /b/ vs /p/, Miêu tả ngoại hình (be vs have) & tính cách, Hiện tại tiếp diễn (đang xảy ra & kế hoạch tương lai).',
    pronunciation: {
      title: 'I. Pronunciation · Phân loại âm /b/ và /p/',
      page: 'Tr.161',
      columns: [
        {
          soundLabel: 'Âm /b/ (hữu thanh — rung cổ họng)',
          ipa: '/b/',
          tipVi: 'Mím hai môi rồi bật ra, cổ họng rung nhẹ, không thổi mạnh giấy.',
          words: ['bath', 'blackboard', 'banana', 'building', 'butterfly', 'bike'],
        },
        {
          soundLabel: 'Âm /p/ (vô thanh — bật hơi mạnh)',
          ipa: '/p/',
          tipVi: 'Mím hai môi rồi bật luồng hơi mạnh ra ngoài (tờ giấy trước miệng sẽ bay).',
          words: ['present', 'picture', 'pear', 'piano', 'pool', 'park'],
        },
      ],
    },
    blocks: [
      {
        id: 'u3-ex1-3',
        partLabel: 'II.1–3 · Ngoại hình, Bộ phận cơ thể & 15 cặp Trái nghĩa',
        page: 'Tr.161–162',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.1 (4 cột)', answer: 'Build: thin, tall, short, fat, big, slim, small, well-built · Eyes: green, big black, blue, gray · Hair: short, wavy, long, blond, thick, red, straight, black, curly, gray, bald · Appearance: young, old, handsome, good-looking, pretty, attractive' },
          { num: 'II.2 (10 câu)', answer: '1. legs · 2. hand · 3. back · 4. hair · 5. toes · 6. face · 7. ears · 8. neck · 9. legs · 10. hands' },
          { num: 'II.3 (1–8)', answer: '1. attractive–ugly · 2. light–dark · 3. slim–fat · 4. old–young · 5. shy–outgoing · 6. big–small · 7. dull–lively · 8. short–long' },
          { num: 'II.3 (9–15)', answer: '9. curly–straight · 10. exciting–boring · 11. noisy–quiet · 12. strong–weak · 13. sociable–unfriendly · 14. mean–generous · 15. thick–thin' },
        ],
        memoryTipVi: 'Quy tắc tả người: BE + tính từ (She is tall / friendly) · HAVE/HAS + bộ phận cơ thể (She has long black hair).',
      },
      {
        id: 'u3-ex4-8',
        partLabel: 'II.4–8 · Đổi Be ↔ Have, Trái nghĩa & Tính cách',
        page: 'Tr.162',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.4 (Have/Has)', answer: '1. Mary has an oval face. · 2. I have small and even teeth. · 3. He has a straight nose. · 4. They have dark brown eyes. · 5. We have curly and black hair. · 6. Peter has a wide mouth.' },
          { num: 'II.5 (To be)', answer: "1. My son's cheeks are rosy. · 2. My hair is blonde and long. · 3. His face is thin. · 4. Their skin is dark. · 5. His dog's tail is short. · 6. My friend's books are thick." },
          { num: 'II.6 (Trái nghĩa)', answer: '1. No, my parents are old. · 2. No, she is friendly. · 3. No, he is thin. · 4. No, it is old and small. · 5. No, she has big eyes. · 6. No, she has short hair. · 7. No, they are hard-working. · 8. No, she is strong.' },
          { num: 'II.7 (Be/Have)', answer: '1. am – have – am · 2. is – is – has – has – is · 3. is – is – has – has – is – are – is · 4. are – have – are – have – are' },
          { num: 'II.8 (Tính cách)', answer: '1. sensitive · 2. generous · 3. talkative · 4. shy · 5. reliable · 6. outgoing · 7. cheerful · 8. confident · 9. sporty · 10. curious' },
        ],
        memoryTipVi: '10 tính từ tính cách cốt lõi Unit 3: reliable (đáng tin cậy), outgoing (cởi mở), generous (hào phóng), curious (tò mò).',
      },
      {
        id: 'u3-ex9-13',
        partLabel: 'II.9–13 · Hiện tại tiếp diễn, 15 MCQ & Hội thoại',
        page: 'Tr.162–163',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.9 (10 câu PC)', answer: '1. is listening · 2. is cooking · 3. is washing · 4. are playing · 5. are having · 6. is doing · 7. is eating · 8. is cleaning · 9. are working · 10. is swimming' },
          { num: 'II.10 (Kế hoạch)', answer: "1. is driving · 2. Is – doing · 3. are coming · 4. am not using · 5. is giving · 6. am meeting · 7. is leaving · 8. Is – taking · 9. aren't visiting · 10. are having" },
          { num: 'II.11 (PS vs PC)', answer: "1. am meeting · 2. Are you having · 3. doesn't like · 4. are leaving · 5. am not going · 6. plays · 7. are visiting · 8. don't go · 9. isn't working · 10. Does Mary have" },
          { num: 'II.12 (15 MCQ)', answer: '1.A · 2.C · 3.B · 4.A · 5.A · 6.C · 7.A · 8.C · 9.D · 10.C · 11.D · 12.A · 13.C · 14.D · 15.D' },
          { num: 'II.13 (Hội thoại)', answer: "1. Do you have a best friend? · 2. What's her name? · 3. What does she look like? · 4. Is she beautiful? · 5. When and where did you meet her? · 6. Why do you like her? · 7. Can you introduce me to her?" },
        ],
        memoryTipVi: 'Khi câu có lịch hẹn tương lai gần (tonight, tomorrow, next week, this weekend) → chia Hiện tại tiếp diễn (am/is/are + V-ing)!',
      },
      {
        id: 'u3-read-write',
        partLabel: 'III. Đọc hiểu & IV. Viết (Trật tự tính từ tả người)',
        page: 'Tr.163–164',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'III.1 (Daisy)', answer: '1.is · 2.is · 3.is · 4.lives · 5.is · 6.has · 7.is · 8.are · 9.is · 10.dances · 11.is · 12.has' },
          { num: 'III.2 & III.3', answer: 'III.2: 1.B · 2.A · 3.B · 4.D · 5.A  |  III.3: 1.D · 2.D · 3.B · 4.A · 5.B' },
          { num: 'IV.1 (Hỏi Be)', answer: "1. Is he talkative? No, he isn't. He is quiet. · 2. Are they shy? No, they aren't. They are confident. · 3. Are you patient? Yes, I am. · 4. Is she responsible? No, she isn't. She is irresponsible. · 5. Are they serious? Yes, they are." },
          { num: 'IV.2 (Hỏi Have)', answer: "1. Do they have long arms? Yes, they do. · 2. Does the dog have a long tail? Yes, it does. · 3. Does she have short hair? No, she doesn't. She has long hair. · 4. Does he have big feet? No, he doesn't. He has small feet. · 5. Does she have a round face? Yes, she does." },
          { num: 'IV.3 (1–5)', answer: '1. She has big brown eyes. · 2. Mr. Peter has a long gray beard. · 3. There are many small red flowers in her garden. · 4. It is a big black car. · 5. Firstly, draw a long thin line.' },
          { num: 'IV.3 (6–10)', answer: "6. His daughter has long blond hair. · 7. She is talking to a tall handsome man. · 8. Does Lan's sister have short wavy hair? · 9. She married a short fat man. · 10. Our teacher has long straight dark hair." },
        ],
        memoryTipVi: 'Trật tự tính từ tả tóc/mắt: Độ dài/Kích cỡ → Hình dáng → Màu sắc + Danh từ (long straight dark hair).',
      },
      {
        id: 'u3-test-1-7',
        partLabel: 'TEST FOR UNIT 3 · Phần I → VII (PDF Tr.172–173)',
        page: 'Tr.164–165',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'I. Khác loại (1–8)', answer: '1.C · 2.C · 3.A · 4.D · 5.A · 6.D · 7.D · 8.D' },
          { num: 'II. Trái nghĩa', answer: '1. generous · 2. quiet · 3. polite · 4. shy · 5. lazy · 6. silly · 7. cheerful · 8. serious' },
          { num: 'III. 15 MCQ', answer: '1.B · 2.A · 3.D · 4.C · 5.B · 6.D · 7.D · 8.C · 9.C · 10.A · 11.C · 12.A · 13.C · 14.C · 15.D' },
          { num: 'IV. Chia động từ', answer: "1. are having · 2. wears · 3. are you meeting · 4. are running · 5. doesn't drink · 6. is speaking · 7. Are you having · 8. doesn't like · 9. are leaving · 10. am not going" },
          { num: 'V. Sửa lỗi sai', answer: '1. read → are reading · 2. go → are going · 3. wear → wears · 4. tooth → teeth · 5. Do you go → Are you going · 6. have → has · 7. friend → friendly · 8. a → an' },
          { num: 'VI. Word Form', answer: '1. friendly · 2. orphanage · 3. humorous · 4. extremely · 5. beautiful · 6. independent · 7. sensitive · 8. creative · 9. careful · 10. funny' },
          { num: 'VII. Giới từ', answer: '1. at · 2. from · 3. on · 4. with · 5. at · 6. at · 7. of · 8. at – in' },
        ],
        memoryTipVi: 'Cụm giới từ cực hay thi ở VII: at Christmas, laugh at (cười nhạo), sense of humor (khiếu hài hước), at 26 Tran Phu Street in Ha Noi.',
      },
      {
        id: 'u3-test-8-13',
        partLabel: 'TEST FOR UNIT 3 · Phần VIII → XIII (PDF Tr.173–174)',
        page: 'Tr.165–166',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'VIII. Đặt câu hỏi', answer: '1. Where are they visiting on Saturday? · 2. Who are you going to the judo club with? · 3. Why are you not going to my party? · 4. What are you working on? · 5. How does she understand things?' },
          { num: 'IX. Đoạn Nien', answer: "1. was · 2. is · 3. has · 4. went · 5. to visit · 6. travelled · 7. saw · 8. thinks · 9. is · 10. doesn't like · 11. to live" },
          { num: 'X. Đọc (Vy)', answer: "1. She's Vy. · 2. No, they aren't. · 3. They first met at primary school. · 4. She is kind, jolly and helpful. · 5. She likes to joke and play games. · 6. They sit in the garden and read story books. · 7. They are in Mai's room now. · 8. They are going to the school English club." },
          { num: 'XI & XII (Đọc)', answer: 'XI: 1.with 2.days 3.some 4.large 5.younger 6.lot 7.ones 8.time 9.listening 10.free  |  XII: 1.B 2.C 3.C 4.A 5.B' },
          { num: 'XIII. Viết lại (1–5)', answer: "1. This is an old bald man. · 2. The girl's hair is long and brown. · 3. The boys' eyes are blue. · 4. Jane's eyelashes are curved. · 5. Jordie's height is not medium." },
          { num: 'XIII. Viết lại (6–10)', answer: "6. The dog's tail is long. · 7. Jackie and Danny's eyes are big and black. · 8. Is her face round or oval? · 9. Are Susan and Jimmy's complexions dark? · 10. Their cheeks are not chubby." },
        ],
        memoryTipVi: 'Chú ý phân biệt 2 câu hỏi giống nhau ở X.4 & X.5: "What is Vy like?" (hỏi tính cách) ≠ "What does Vy like?" (hỏi sở thích)!',
      },
    ],
  },

  /* =========================================================================
   * UNIT 4 KEY (BOOK pp. 166–170 · PDF pp. 174–178)
   * ========================================================================= */
  {
    unitId: 4,
    code: 'Unit 4',
    titleEn: 'My Neighbourhood',
    titleVi: 'Khu phố của em',
    pageRange: 'Tr.166–170',
    pdfRange: 'PDF Tr.174–178',
    workbookRange: 'Bài tập Tr.84–106',
    accentHex: '#D97706',
    summaryVi: 'Trọng tâm: Phát âm /ɪ/ vs /iː/, Địa điểm khu phố & Chỉ đường, So sánh hơn của tính từ ngắn/dài & bất quy tắc.',
    pronunciation: {
      title: 'I.1 Pronunciation · Phân loại âm /ɪ/ và /iː/',
      page: 'Tr.166',
      columns: [
        {
          soundLabel: 'Âm /ɪ/ (i ngắn, dứt khoát)',
          ipa: '/ɪ/',
          tipVi: 'Gặp ở chữ i 1 âm tiết (sit, win), đuôi -age (village), tiền tố be-/re- (become, behave, remind), ui (guitar) và đặc biệt "busy".',
          words: [
            'milk',
            'thing',
            'live',
            'sit',
            'city',
            'busy',
            'slim',
            'remind',
            'become',
            'behave',
            'win',
            'village',
            'guitar',
          ],
        },
        {
          soundLabel: 'Âm /iː/ (i dài, cười nhẹ kéo hơi)',
          ipa: '/iː/',
          tipVi: 'Gặp ở nhóm "ee" (see, sleep, cheese, sheep), "ea" (beach, read, sea, leave, meal, dream, cheap) và từ đặc biệt "police".',
          words: [
            'see',
            'beach',
            'read',
            'sea',
            'police',
            'sleep',
            'leave',
            'cheese',
            'meal',
            'dream',
            'cheap',
            'sheep',
          ],
        },
      ],
    },
    blocks: [
      {
        id: 'u4-i2',
        partLabel: 'I.2 · Trắc nghiệm Phát âm khác loại (10 câu)',
        page: 'Tr.166',
        category: 'exercise',
        items: [
          { num: '1', answer: 'B (pretty)' },
          { num: '2', answer: 'D (behave)' },
          { num: '3', answer: 'A (meat)' },
          { num: '4', answer: 'C (decide)' },
          { num: '5', answer: 'B (cheap)' },
          { num: '6', answer: 'A (live)' },
          { num: '7', answer: 'C (near)' },
          { num: '8', answer: 'D (terrible)' },
          { num: '9', answer: 'A (great)' },
          { num: '10', answer: 'D (finally)' },
        ],
        memoryTipVi: 'Cẩn thận bẫy cực hay thi: great /ɡreɪt/ (ea đọc /eɪ/), pretty /ˈprɪti/ (e đọc /ɪ/), busy /ˈbɪzi/ (u đọc /ɪ/).',
      },
      {
        id: 'u4-ii1-3',
        partLabel: 'II.1–3 · Địa điểm & Tính từ miêu tả khu phố',
        page: 'Tr.166–167',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.1 (8 tranh)', answer: '1. railway station · 2. art gallery · 3. square · 4. museum · 5. pagoda · 6. palace · 7. cathedral · 8. stadium' },
          { num: 'II.2 (Điền hộp)', answer: '1. noisy – polluted · 2. narrow · 3. boring · 4. fantastic · 5. convenient · 6. peaceful · 7. modern · 8. historic' },
          { num: 'II.3 (Chọn cặp)', answer: '1. wide · 2. peaceful · 3. cheap · 4. inconvenient · 5. exciting · 6. unpolluted · 7. old · 8. noisy' },
        ],
        memoryTipVi: 'Cathedral = nhà thờ lớn; railway station = nhà ga xe lửa; historic = có giá trị lịch sử.',
      },
      {
        id: 'u4-ii4-8',
        partLabel: 'II.4–8 · So sánh hơn (20 dạng, Điền từ, 12 MCQ & Viết câu)',
        page: 'Tr.167',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.4 (2–10)', answer: '2. happier · 3. more carefully · 4. more famous · 5. shorter · 6. bigger · 7. more special · 8. more expensive · 9. more attractive · 10. thinner' },
          { num: 'II.4 (11–20)', answer: '11. faster · 12. earlier · 13. more easily · 14. larger · 15. more boring · 16. more tired · 17. more useful · 18. heavier · 19. better · 20. cleverer / more clever' },
          { num: 'II.5 (1–10)', answer: '1. narrower · 2. more useful · 3. colder · 4. more important · 5. thinner · 6. more crowded · 7. higher · 8. friendlier · 9. worse · 10. more exciting' },
          { num: 'II.6 (12 MCQ)', answer: '1.A · 2.D · 3.D · 4.B · 5.D · 6.D · 7.A · 8.B · 9.C · 10.B · 11.A · 12.B' },
          { num: 'II.7 (1–5)', answer: '1. Mary is taller than Peter. · 2. This book is thicker than that book. · 3. The chair is shorter than the table. · 4. These boxes are bigger than those boxes. · 5. Miss Trang is younger than her sister.' },
          { num: 'II.7 (6–10)', answer: '6. These buildings are higher than those buildings. · 7. The boys are stronger than the girls. · 8. I am older than my brother. · 9. The dress is longer than the red shirt. · 10. The exercise is easier than that one.' },
          { num: 'II.8 (1–10)', answer: '1. more expensive than · 2. faster than · 3. more modern than · 4. hotter than · 5. more beautiful than · 6. cheaper than · 7. better than · 8. more convenient than · 9. cleverer / more clever than · 10. worse than' },
        ],
        memoryTipVi: '2 ngoại lệ bất quy tắc bắt buộc thuộc lòng: good → better; bad → worse. Không bao giờ dùng kép "more + -er"!',
      },
      {
        id: 'u4-ii9-iv2',
        partLabel: 'II.9–12, III. Đọc hiểu & IV. Viết (Sách Tr.168–169 · PDF Tr.176–177)',
        page: 'Tr.168–169',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.9 (Which...)', answer: '1. longer · 2. bigger · 3. more intelligent · 4. faster · 5. heavier · 6. colder · 7. more difficult · 8. older · 9. bigger · 10. higher' },
          { num: 'II.10 (Giới từ)', answer: '1. between · 2. in · 3. on – opposite · 4. at – at · 5. in · 6. from – to · 7. at – on · 8. to' },
          { num: 'II.11 & II.12', answer: 'II.11: 1.as→than · 2.more clean→cleaner · 3.telling→tell · 4.one→first · 5.crowdeder→more crowded  |  II.12: 1.C bỏ "to" · 2.D left of · 3.B in front · 4.C and · 5.C bỏ "to"' },
          { num: 'III.1–3 (Đọc)', answer: 'III.1: 1.from 2.peaceful 3.flowers 4.for 5.and 6.carpet 7.often 8.water 9.path 10.fresh · III.2: 1.B 2.A 3.A 4.B 5.C · III.3: 1.F 2.F 3.T 4.T 5.F' },
          { num: 'IV.1 (Sắp xếp 1–4)', answer: "1. Where shall we first go this morning? · 2. Let's go to the cafeteria and get a cold drink. · 3. Do you like living in the countryside? · 4. Is there a post office in your neighborhood?" },
          { num: 'IV.1 (Sắp xếp 5–8)', answer: '5. Could you tell me the way to the Japanese Bridge, please? · 6. There are many historic houses in Hoi An ancient town. · 7. The air is polluted with smoke from factories. · 8. Living in a big city is much more expensive than living in the countryside.' },
          { num: 'IV.2 (Viết lại 1–5)', answer: '1. Your house is smaller than my house. · 2. The red car is more expensive than the black. · 3. That film is more boring than this film. · 4. Your kitchen is larger than my kitchen. · 5. According to me, Maths is more difficult than English.' },
          { num: 'IV.2 (Viết lại 6–10)', answer: '6. The swimming pool is cheaper than the sports centre. · 7. The shopping centre is newer than the market. · 8. The amusing park is quieter than the skate park. · 9. My cooking is better than the food here. · 10. I am shorter than my sister.' },
        ],
        memoryTipVi: 'Cực hay bẫy giới từ: "near" và "opposite" KHÔNG có "to" theo sau (near the museum ✅, near to ❌).',
      },
      {
        id: 'u4-test-1-7',
        partLabel: 'TEST FOR UNIT 4 · Phần I → VII (Sách Tr.169–170 · PDF Tr.177–178)',
        page: 'Tr.169–170',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'I. Phát âm', answer: '1.A · 2.B · 3.A · 4.C · 5.D · 6.C · 7.A · 8.C · 9.A · 10.C' },
          { num: 'II. Địa điểm', answer: '1. post office · 2. bookstore · 3. cinema · 4. restaurant · 5. bank · 6. grocery · 7. art gallery · 8. bakery' },
          { num: 'III. 15 MCQ', answer: '1.B · 2.C · 3.A · 4.B · 5.A · 6.A · 7.B · 8.C · 9.C · 10.A · 11.D · 12.C · 13.C · 14.D · 15.B' },
          { num: 'IV. Trái nghĩa', answer: '1. peaceful · 2. rough · 3. even · 4. artificial · 5. shallow · 6. public · 7. modern · 8. easy · 9. expensive · 10. small' },
          { num: 'V. Chia thì (1–8)', answer: "1. has · 2. am not solving · 3. comes · 4. begins · 5. do you wake up · 6. are you doing · 7. don't work – am working · 8. isn't sleeping – is studying" },
          { num: 'V. Chia thì (9–15)', answer: "9. do you review · 10. am not going · 11. don't understand · 12. works · 13. takes · 14. is · 15. is" },
          { num: 'VI. Sửa lỗi sai', answer: '1. washes → wash · 2. go → goes · 3. make → do · 4. is → has · 5. are → is · 6. do you do → are you doing · 7. expensiver → expensive · 8. more clean → cleaner' },
          { num: 'VII. So sánh hơn', answer: '1. longer · 2. cleaner · 3. more expensive · 4. more dangerous · 5. hotter · 6. worse · 7. better · 8. easier · 9. more fascinating · 10. more difficult' },
        ],
        memoryTipVi: 'Chú ý câu V.11: động từ "understand" chỉ nhận thức nên KHÔNG chia tiếp diễn → dùng "don\'t understand"!',
      },
      {
        id: 'u4-test-8-12',
        partLabel: 'TEST FOR UNIT 4 · Phần VIII → XII (Sách Tr.170 · PDF Tr.178)',
        page: 'Tr.170',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'VIII & IX (Đọc)', answer: 'VIII (T/F): 1.F 2.F 3.T 4.F 5.T 6.F 7.T  |  IX (MCQ): 1.B 2.C 3.A 4.D 5.A' },
          { num: 'X. Viết lại (1–5)', answer: "1. The second question was more difficult than the first one. · 2. The brown coat is bigger than the black one. · 3. The sofa is more comfortable than the chair. · 4. Jack's suitcase was heavier than Jim's suitcase. · 5. My homework was worse than his." },
          { num: 'X. Viết lại (6–10)', answer: '6. The small television is cheaper than the big one. · 7. The Holton Hotel is more modern than the Royal Hotel. · 8. The weather today is better than it was yesterday. · 9. People in the country are friendlier than those in the city. · 10. Life in the country is more boring than life in the city.' },
          { num: 'XI & XII (Viết MCQ)', answer: 'XI: 1.C · 2.A · 3.C · 4.D · 5.B  |  XII: 1.A · 2.B · 3.A · 4.D · 5.C' },
        ],
        memoryTipVi: 'Trong Part X: nhớ giữ đúng thì của câu gốc (quá khứ "was" giữ "was", hiện tại "is" giữ "is").',
      },
    ],
  },

  /* =========================================================================
   * UNIT 5 KEY (BOOK pp. 171–175 · PDF pp. 179–183)
   * ========================================================================= */
  {
    unitId: 5,
    code: 'Unit 5',
    titleEn: 'Natural Wonders of Viet Nam',
    titleVi: 'Kỳ quan thiên nhiên Việt Nam',
    pageRange: 'Tr.171–175',
    pdfRange: 'PDF Tr.179–183',
    workbookRange: 'Bài tập Tr.107–128',
    accentHex: '#0D9488',
    summaryVi: 'Trọng tâm: Phát âm /t/ vs /d/, Danh từ đếm được & không đếm được, Lượng từ (a/an/some/any/a few/a little) và Must / Mustn\'t.',
    pronunciation: {
      title: 'I. Pronunciation · Nhận diện âm /t/ và /d/ trong câu',
      page: 'Tr.171',
      columns: [
        {
          soundLabel: 'Âm /t/ (vô thanh — bật hơi)',
          ipa: '/t/',
          tipVi: 'Đầu lưỡi chạm chân răng trên, bật hơi mạnh không rung cổ.',
          words: ['Tina', 'date', 'Tuesday', 'toothpaste', 'teeth', 'flashlight', 'lit', 'Tonight', 'Texas', 'toast', 'tacos', 'eat', 'doughnut'],
        },
        {
          soundLabel: 'Âm /d/ (hữu thanh — rung cổ)',
          ipa: '/d/',
          tipVi: 'Đặt lưỡi giống /t/ nhưng rung rõ dây thanh quản (chú ý "loved" đọc /lʌvd/).',
          words: ['Dan', 'and', 'had', 'date', 'Tuesday', 'loved', 'pudding', 'doughnut'],
        },
      ],
    },
    blocks: [
      {
        id: 'u5-ii1-5',
        partLabel: 'II.1–5 · Kỳ quan, Đồ cắm trại & 30 Danh từ C / U (Sách Tr.171 · PDF Tr.179)',
        page: 'Tr.171',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.1 (9 tranh)', answer: '1. desert · 2. waterfall · 3. island · 4. mountain · 5. valley · 6. beach · 7. river · 8. lake · 9. forest' },
          { num: 'II.2 (Chọn từ)', answer: '1. islands · 2. river · 3. coast · 4. forest · 5. beach · 6. mountain · 7. lake · 8. wonder' },
          { num: 'II.3 (Cắm trại)', answer: '1. sleeping bag · 2. tent · 3. bottled water · 4. backpack · 5. plasters · 6. torch · 7. suncream · 8. walking boots · 9. compass · 10. Waterproof coats', note: 'Đáp án SGK đảo câu 1–2 (sleeping bag / tent); theo ngữ cảnh câu 1 (tent) và câu 2 (sleeping bag) đều hợp lý.' },
          { num: 'II.4 (30 từ C/U)', answer: '1.C 2.U 3.U 4.U 5.U 6.C 7.U 8.U 9.U 10.U 11.U 12.C 13.C 14.C 15.U 16.U 17.C 18.C 19.U 20.U 21.C 22.C 23.U 24.U 25.U 26.C 27.U 28.U 29.U 30.C' },
          { num: 'II.5 (10 Lỗi C/U)', answer: '1. carrot→carrots · 2. teas→tea · 3. pear→pears · 4. waters→water · 5. meats→meat · 6. berry→berries · 7. cucumber→cucumbers · 8. onion→onions · 9. chair→chairs · 10. potato→potatoes' },
        ],
        memoryTipVi: 'Cẩn thận bẫy danh từ KHÔNG đếm được (U): money, work, baggage, travel, news, furniture, information (job là C!).',
      },
      {
        id: 'u5-ii6-12',
        partLabel: 'II.6–12 · Lượng từ, Must/Mustn\'t & Sửa lỗi (Sách Tr.172 · PDF Tr.180)',
        page: 'Tr.172',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'II.6 (a/an/some/any)', answer: '1.an · 2.some · 3.any · 4.an · 5.a · 6.some · 7.a · 8.any · 9.any · 10.some · 11.a · 12.a' },
          { num: 'II.7 (Apple pie)', answer: '1.an · 2.any · 3.some · 4.many · 5.kilo · 6.some · 7.some · 8.much · 9.spoons · 10.bag (hoặc tub) · 11.many · 12.some · 13.some · 14.any · 15.tin (hoặc bar)' },
          { num: 'II.8 (some/any/few/little)', answer: '1.any · 2.some · 3.any · 4.few · 5.some · 6.little · 7.any · 8.any · 9.some · 10.little' },
          { num: 'II.9 (a few / a little)', answer: '1. a little · 2. a few · 3. a little · 4. a few · 5. a little · 6. a few' },
          { num: 'II.10 (Must 1–10)', answer: "1.mustn't · 2.must · 3.must · 4.mustn't · 5.mustn't · 6.mustn't · 7.mustn't · 8.must · 9.mustn't · 10.must" },
          { num: 'II.10 (Must 11–20)', answer: "11.mustn't · 12.mustn't · 13.must · 14.must · 15.must · 16.mustn't – must · 17.mustn't · 18.must · 19.mustn't · 20.must" },
          { num: 'II.11 (I must...)', answer: "2. I must buy a new one. · 3. I must wash it. · 4. I must go to the doctor's. · 5. I must go to the post office. · 6. I must go to the barber's. · 7. I must tidy it up. · 8. I must go to the dentist's. · 9. I must wash them. · 10. I must lose weight." },
          { num: 'II.12 (10 Lỗi sai)', answer: "1. biger→bigger · 2. a little→a few · 3. busyer→busier · 4. smallest→smaller · 5. much→many · 6. any→some · 7. leaves→leave · 8. a→an · 9. wears→wear · 10. mustn't→must" },
        ],
        memoryTipVi: '"a few" + Danh từ ĐẾM ĐƯỢC số nhiều; "a little" + Danh từ KHÔNG ĐẾM ĐƯỢC (chú ý "news" có -s nhưng vẫn dùng a little!).',
      },
      {
        id: 'u5-read-write',
        partLabel: 'III. Đọc hiểu & IV. Viết (Sách Tr.172–173 · PDF Tr.180–181)',
        page: 'Tr.172–173',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'III.1 (Hội An)', answer: "1. It's about 25 kilometres. · 2. There are about 100,000 people. · 3. Yes, it does. · 4. It's usually very hot. · 5. They are kind, friendly and hard-working. · 6. Yes, it is." },
          { num: 'III.2 & III.3', answer: 'III.2: 1.B 2.C 3.A 4.B 5.A  |  III.3: 1.familiar 2.beach 3.water 4.clouds 5.landscapes 6.considered 7.moving (shady) 8.shady (moving) 9.seen 10.waves' },
          { num: 'IV.1 (Sắp xếp 1–4)', answer: '1. Mui Ne is a popular holiday destination in Phan Thiet. · 2. Tourists can enjoy water sport in summer. · 3. They can have fresh seafood in pretty restaurants. · 4. There are beautiful beaches and mountains here.' },
          { num: 'IV.1 (Sắp xếp 5–8)', answer: "5. Please come and have a great time. · 6. You mustn't leave your motorbike unlocked. · 7. Living in a city is usually more modern than living in the countryside. · 8. Lan lives in a village in the mountains." },
          { num: 'IV.2 (Viết lại 1–5)', answer: "1. My father is older than my mother. · 2. Is there a library in your neighbourhood? · 3. Minh's house isn't far from the supermarket. · 4. Unit two is easier than Unit one. · 5. My father is taller than my mother." },
          { num: 'IV.2 (Viết lại 6–10)', answer: "6. The classroom has twenty desks. · 7. Lan's house is in front of the garden. · 8. The bank is near the post office. · 9. Our garden has many flowers. · 10. She has brown hair." },
        ],
        memoryTipVi: 'Cặp đảo cực quen thuộc ở IV.2: "There are... in X ↔ X has..."; "behind ↔ in front of"; "near ↔ isn\'t far from".',
      },
      {
        id: 'u5-test-all',
        partLabel: 'TEST FOR UNIT 5 · Trọn bộ Phần I → IX (Sách Tr.173–175 · PDF Tr.181–183)',
        page: 'Tr.173–175',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'I & II (Âm / Loại)', answer: 'I: 1.D 2.D 3.C 4.C 5.A  |  II: 1.A 2.D 3.D 4.A 5.B 6.D 7.D 8.C 9.D 10.C' },
          { num: 'III. Cặp từ dễ nhầm', answer: '1. best · 2. lost · 3. boots · 4. boat · 5. host · 6. coast · 7. net · 8. east – west · 9. wet · 10. cat' },
          { num: 'IV. 20 MCQ', answer: '1.A · 2.B · 3.A · 4.D · 5.B · 6.D · 7.C · 8.D · 9.A · 10.B · 11.B · 12.A · 13.B · 14.B · 15.A · 16.A · 17.B · 18.B · 19.A · 20.B' },
          { num: 'V. Must / Mustn\'t', answer: "2. She must go to the doctor. · 3. You mustn't shout. · 4. You mustn't tell the others. · 5. We mustn't park here. · 6. I must clean it soon. · 7. He mustn't smoke in this area. · 8. We must stop." },
          { num: 'VI, VII, VIII (Đọc)', answer: 'VI: 1.A 2.A 3.B 4.C 5.A 6.B 7.A 8.C · VII (T/F): 1.T 2.T 3.F 4.T 5.T · VIII: 1.A 2.C 3.A 4.A 5.B' },
          { num: 'IX. Viết lại (1–5)', answer: "1. Your room is bigger than my room. · 2. Our garden has many flowers. · 3. Does your father get to work by bike? · 4. Nam's classroom is in front of the garden. · 5. Tom travels to work by car." },
          { num: 'IX. Viết lại (6–10)', answer: "6. Her family has four people. · 7. How many classes does your school have? · 8. That is a small classroom. · 9. Mary is Peter's sister. · 10. The bank is in front of the supermarket." },
        ],
        memoryTipVi: 'Bài X (Đoạn văn mẫu về Vịnh Hạ Long — Sách Tr.175 / PDF Tr.183) đã cập nhật nguyên văn 100% ở tab "Kho Bài Văn Mẫu".',
      },
    ],
  },

  /* =========================================================================
   * UNIT 6 KEY (BOOK pp. 175–179 · PDF pp. 183–187)
   * ========================================================================= */
  {
    unitId: 6,
    code: 'Unit 6',
    titleEn: 'Our Tet Holiday',
    titleVi: 'Ngày Tết của chúng em',
    pageRange: 'Tr.175–179',
    pdfRange: 'PDF Tr.183–187',
    workbookRange: 'Bài tập Tr.129–149',
    accentHex: '#E11D48',
    summaryVi: 'Trọng tâm: Phát âm /s/ vs /ʃ/, Từ vựng phong tục Tết, Lời khuyên Should / Shouldn\'t và Lượng từ Some / Any.',
    pronunciation: {
      title: 'I.1 Pronunciation · Phân loại âm /s/ và /ʃ/',
      page: 'Tr.175',
      columns: [
        {
          soundLabel: 'Âm /s/ (xì nhẹ, kéo khóe miệng)',
          ipa: '/s/',
          tipVi: 'Gặp ở chữ "s" đầu từ và chữ "c" trước e/i/y (celebrate, nice).',
          words: ['sea', 'sell', 'sing', 'sunny', 'school', 'sound', 'small', 'smile', 'special (s)', 'celebrate', 'nice'],
        },
        {
          soundLabel: 'Âm /ʃ/ (chu tròn môi, đẩy hơi dày)',
          ipa: '/ʃ/',
          tipVi: 'Gặp ở "sh", "-tion", "-ci-", "ch" gốc Pháp (machine) và ngoại lệ "sure".',
          words: ['machine', 'show', 'sociable', 'nation', 'patient', 'condition', 'sure', 'English', 'wash'],
        },
      ],
    },
    blocks: [
      {
        id: 'u6-ex1-9',
        partLabel: 'I.2 & II.1–9 · Từ vựng Tết, Should/Shouldn\'t & Some/Any (Sách Tr.175–176 · PDF Tr.183–184)',
        page: 'Tr.175–176',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'I.2 (Phát âm)', answer: '1. C (sugar) · 2. B (special) · 3. D (sugar) · 4. A (machine) · 5. B (sure)' },
          { num: 'II.1 (8 tranh Tết)', answer: '1. present · 2. lucky money · 3. furniture · 4. fireworks · 5. calendar · 6. apricot blossoms · 7. pagoda · 8. peach blossoms' },
          { num: 'II.2 (Nối động từ)', answer: '1-F · 2-I · 3-E · 4-J · 5-C · 6-A · 7-H · 8-G · 9-D · 10-B' },
          { num: 'II.3 (Chọn từ)', answer: '1. lucky money · 2. decorating · 3. visit · 4. special · 5. pagoda · 6. wish · 7. fireworks · 8. family gathering' },
          { num: 'II.4 (Should)', answer: "1.should · 2.shouldn't · 3.shouldn't · 4.should · 5.shouldn't · 6.shouldn't · 7.shouldn't · 8.should · 9.should · 10.should", note: 'Câu 2 sách in nhầm "should" — logic chuẩn là "shouldn\'t" (You look tired. You shouldn\'t work so hard).' },
          { num: 'II.5 (Lời khuyên 1–5)', answer: '1. You should take a short rest. · 2. She should stay in bed. · 3. He should clean it every day. · 4. We should learn our lessons carefully. · 5. She should take an aspirin.' },
          { num: 'II.5 (Lời khuyên 6–10)', answer: "6. You should go home now. · 7. You should do it carefully. · 8. You shouldn't read the book now. · 9. You should paint it. · 10. You should take a photograph." },
          { num: 'II.6 & II.7', answer: 'II.6: 1.D 2.F 3.B 4.E 5.C 6.A 7.I(H) 8.G  |  II.7: 1.B 2.A 3.D 4.A 5.C 6.A 7.C 8.A 9.A 10.D' },
          { num: 'II.8 (Some/Any)', answer: '1.any–some · 2.any · 3.any · 4.some · 5.some · 6.any · 7.any · 8.any · 9.some–any · 10.Some · 11.some · 12.some · 13.any · 14.any · 15.any–some · 16.some · 17.any · 18.some · 19.any · 20.any' },
          { num: 'II.9 (8 Lỗi sai)', answer: '1. any→some · 2. no→any · 3. some→any · 4. butters→butter · 5. carrot→carrots · 6. some→a · 7. friend→friends · 8. some→any' },
        ],
        memoryTipVi: 'Cặp ngoại lệ kinh điển của /ʃ/: sure /ʃʊə(r)/ và sugar /ˈʃʊɡə(r)/ — đề thi học kỳ 1 gần như năm nào cũng hỏi!',
      },
      {
        id: 'u6-read-write',
        partLabel: 'III. Đọc hiểu & IV. Viết (Sách Tr.176–177 · PDF Tr.184–185)',
        page: 'Tr.176–177',
        category: 'exercise',
        layout: 'list',
        items: [
          { num: 'III.1–3 (Đọc)', answer: 'III.1: 1.T 2.F 3.T 4.T 5.F · III.2: 1.A 2.C 3.B 4.D 5.A · III.3: 1.day 2.before 3.paint 4.cook 5.together 6.be 7.kinds 8.of 9.receive 10.visit' },
          { num: 'IV.1 (Sắp xếp 1–6)', answer: "1. You should behave well during Tet. · 2. John is cleaning some furniture in his room. · 3. Every child should help decorate the house. · 4. Are there any strange customs in your country? · 5. During Tet, you shouldn't sweep the house. · 6. People should dress beautifully at Tet." },
          { num: 'IV.2 (Should 1–4)', answer: "1. You shouldn't decide too quickly. · 2. You should check the condition of the car. · 3. You should be very careful. · 4. They should visit their grandparents." },
          { num: 'IV.2 (Should 5–8)', answer: "5. You shouldn't eat too much fat. · 6. You shouldn't put books on the bed. · 7. You should wash the dirty carpet. · 8. You shouldn't leave teddy bear on the floor." },
        ],
        memoryTipVi: 'Đoạn văn mẫu IV.3 (Cách người Việt Nam đón Tết — Tr.177 / PDF Tr.185) có đủ song ngữ và âm thanh ở thẻ "Kho Bài Văn Mẫu".',
      },
      {
        id: 'u6-test-1-6',
        partLabel: 'TEST FOR UNIT 6 · Phần I → VI (Sách Tr.177–178 · PDF Tr.185–186)',
        page: 'Tr.177–178',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'I. Phát âm', answer: '1.A · 2.A · 3.B · 4.C · 5.B · 6.B · 7.A · 8.C · 9.C · 10.C' },
          { num: 'II. 20 MCQ', answer: '1.C · 2.B · 3.A · 4.C · 5.A · 6.D · 7.B · 8.A · 9.C · 10.B · 11.B · 12.B · 13.A · 14.C · 15.A · 16.C · 17.C · 18.B · 19.B · 20.D' },
          { num: 'III. Chia động từ', answer: "1. is repainting · 2. wear · 3. celebrate · 4. occurs · 5. eating · 6. Do you go – don't go – go · 7. Does Sam study – doesn't study – studies · 8. doesn't like · 9. are playing · 10. isn't watching – is playing" },
          { num: 'IV. 10 Lỗi sai', answer: "1. do→does · 2. lives→is living · 3. has→have · 4. should→shouldn't · 5. firework→fireworks · 6. foods→food · 7. shouldn't→should · 8. is→are · 9. wakes up→wake up · 10. have→am having" },
          { num: 'V. Word Form', answer: '1. celebration · 2. gathering · 3. luck · 4. healthy · 5. succeed · 6. decoration · 7. happily · 8. sticky' },
          { num: 'VI. Lời khuyên (1–4)', answer: "1. They should be in bed. · 2. They shouldn't smoke in here. · 3. You should clean them more often. · 4. We shouldn't talk too loudly." },
          { num: 'VI. Lời khuyên (5–8)', answer: "5. You shouldn't eat too much. · 6. We should take our umbrellas. · 7. She shouldn't go to bed so late. · 8. You should be punctual." },
        ],
        memoryTipVi: 'Word form Unit 6 rất hay ra: celebrate → celebration, gather → gathering, happy → happily, stick → sticky (rice).',
      },
      {
        id: 'u6-test-7-10',
        partLabel: 'TEST FOR UNIT 6 · Phần VII → X (Sách Tr.178–179 · PDF Tr.186–187)',
        page: 'Tr.178–179',
        category: 'test',
        layout: 'list',
        items: [
          { num: 'VII & VIII (Đọc)', answer: 'VII: 1.B 2.D 3.C 4.B 5.C  |  VIII: 1.holiday 2.enjoy 3.fairs 4.brightly 5.crowded 6.prepared 7.visitor 8.lucky 9.love 10.wishes' },
          { num: 'IX. Đặt câu hỏi (1–5)', answer: "1. How often does Peter go to the library? · 2. What are Peter and Mike doing? · 3. What does your family usually do in the evening? · 4. Why don't they have a TV? · 5. Where are they planting some roses?" },
          { num: 'IX. Đặt câu hỏi (6–10)', answer: '6. Who does John write a poem about? · 7. Where does your family usually go to on the first day of Tet? · 8. How long does Tet last? · 9. How often do they go home? · 10. How many apricot blossoms does your mother buy for Tet?' },
          { num: 'X. Viết lại (1–4)', answer: "1. You mustn't park in this street. · 2. You shouldn't swim immediately after a meal. · 3. You must take this medicine three times a day. · 4. You should listen to the weather forecast before going camping." },
          { num: 'X. Viết lại (5–8)', answer: "5. You should take exercise every day. · 6. You mustn't drink the water there. It will make you ill. · 7. You shouldn't eat lots of sweets. · 8. You mustn't use your mobile phone in class." },
        ],
        memoryTipVi: 'Cặp phân biệt ăn trọn điểm Part X (Tr.179 / PDF Tr.187): "prohibited / against the rules" → MUSTN\'T; "not a good idea" → SHOULDN\'T.',
      },
    ],
  },
];

/* ============================================================================
 * KHO 6 BÀI VĂN MẪU NGUYÊN VĂN CHUẨN SGK TẬP 1 (SÁCH TR.154–177 · PDF TR.161–185)
 * ============================================================================ */

export const SAMPLE_WRITING_ESSAYS: SampleEssayItem[] = [
  {
    id: 'essay-u1-school',
    unitId: 1,
    page: 'Tr.154 (PDF Tr.161)',
    sourceLabel: 'Unit 1 · Bài IV.2',
    titleEn: 'My New School — Quang Trung Lower Secondary School',
    titleVi: 'Giới thiệu ngôi trường THCS của em',
    promptVi: 'Viết đoạn văn giới thiệu tên trường, quy mô, thầy cô, đồng phục, môn học yêu thích và các hoạt động sau giờ học.',
    englishText:
      'I am a student at Quang Trung Lower Secondary School in Ha Noi City. My school is very big and beautiful. There are about 40 classes and more than 1,500 students. The teachers are very nice and great. When we go to school, we always wear uniforms. Besides studying, my school has many interesting clubs. I like English because it is very interesting. At break time, I usually play games with my friends in my school yard. After school, I do my homework or play football with my friends in the park. In the evening, I often watch TV or read a book.',
    vietnameseText:
      'Em là học sinh Trường THCS Quang Trung ở Thành phố Hà Nội. Trường của em rất lớn và đẹp. Trường có khoảng 40 lớp học và hơn 1.500 học sinh. Các thầy cô giáo đều rất tốt bụng và tuyệt vời. Khi đi học, chúng em luôn mặc đồng phục. Bên cạnh việc học, trường em còn có nhiều câu lạc bộ thú vị. Em thích môn Tiếng Anh vì nó rất hay. Vào giờ ra chơi, em thường chơi trò chơi với các bạn ở sân trường. Sau giờ học, em làm bài tập về nhà hoặc đá bóng cùng bạn ở công viên. Buổi tối, em thường xem TV hoặc đọc sách.',
    keyStructures: [
      { en: 'There are about 40 classes and more than 1,500 students.', vi: 'Giới thiệu quy mô trường với There are + số lượng' },
      { en: 'Besides studying, my school has many interesting clubs.', vi: 'Câu nối "Bên cạnh việc học..." giúp bài viết mượt mà' },
      { en: 'At break time / After school / In the evening + trạng từ tần suất', vi: 'Sắp xếp hoạt động theo trình tự thời gian rõ ràng' },
    ],
    examTipVi: 'Em chỉ cần thay tên trường, số lớp và môn học yêu thích của riêng mình là có ngay đoạn văn đạt điểm tối đa!',
  },
  {
    id: 'essay-u1-subject',
    unitId: 1,
    page: 'Tr.156 (PDF Tr.163)',
    sourceLabel: 'Unit 1 · Test XI',
    titleEn: 'My Favourite Subject — English',
    titleVi: 'Môn học yêu thích của em — Tiếng Anh',
    promptVi: 'Viết một đoạn văn khoảng 60 từ kể về môn học em yêu thích nhất ở trường, học gì trong tiết đó và vì sao em thích.',
    englishText:
      'My name is Linda. I am in Grade 6. I have lots of interesting subjects at school: literature, history, geography, maths, chemistry and others. My favourite subject is English. English is so important. It helps me a lot when I meet a foreigner. It is the language of great English and American literature. It helps me learn about English speaking countries and people. I want to be a tourist guide to speak English to foreigners.',
    vietnameseText:
      'Tên em là Linda. Em học lớp 6. Em có rất nhiều môn học thú vị ở trường: Ngữ văn, Lịch sử, Địa lý, Toán, Hóa học và nhiều môn khác. Môn học yêu thích nhất của em là Tiếng Anh. Tiếng Anh rất quan trọng. Nó giúp em rất nhiều khi gặp người nước ngoài. Đó là ngôn ngữ của những tác phẩm văn học Anh và Mỹ tuyệt vời. Nó giúp em tìm hiểu về các quốc gia nói tiếng Anh và con người nơi đó. Em muốn trở thành hướng dẫn viên du lịch để nói tiếng Anh với du khách nước ngoài.',
    keyStructures: [
      { en: 'I have lots of interesting subjects at school: ...', vi: 'Mở bài liệt kê các môn học rồi dẫn vào môn yêu thích nhất' },
      { en: 'It helps me a lot when I meet a foreigner.', vi: 'Cấu trúc "help + sb + ..." nêu lợi ích thiết thực của môn học' },
      { en: 'I want to be a tourist guide to speak English to foreigners.', vi: 'Câu kết nối ước mơ nghề nghiệp (want to be + nghề)' },
    ],
    examTipVi: 'Nhớ viết hoa tên môn học ngôn ngữ (English) và cụm "English speaking countries" (các nước nói tiếng Anh).',
  },
  {
    id: 'essay-u2-room',
    unitId: 2,
    page: 'Tr.160 (PDF Tr.168)',
    sourceLabel: 'Unit 2 · Test XII',
    titleEn: 'My Room — Describing Furniture & Positions',
    titleVi: 'Miêu tả căn phòng của em',
    promptVi: 'Viết đoạn văn miêu tả căn phòng yêu thích trong nhà em, các đồ đạc bên trong và vị trí sắp xếp của chúng.',
    englishText:
      'This is my room. It is not very big. There are two chairs, a table, a bed, a wardrobe and a bookshelf in my room. The table is near the window. There is an ink-pot, some books and an English-Vietnamese dictionary on the table. The bed is on the right of the room. There are also some books and newspapers on the bed. The wardrobe is opposite the bed. I have many clothes. My clothes are all in the wardrobe. The bookshelf is on the wall. There are many books on it.',
    vietnameseText:
      'Đây là căn phòng của em. Phòng không quá lớn. Có hai chiếc ghế, một cái bàn, một chiếc giường, một tủ quần áo và một giá sách trong phòng em. Cái bàn đặt gần cửa sổ. Có một lọ mực, vài cuốn sách và một cuốn từ điển Anh-Việt ở trên bàn. Chiếc giường nằm ở bên phải căn phòng. Cũng có vài cuốn sách và báo trên giường. Tủ quần áo đặt đối diện chiếc giường. Em có nhiều quần áo và tất cả đều để trong tủ. Giá sách treo ở trên tường và có rất nhiều sách trên đó.',
    keyStructures: [
      { en: 'The table is near the window. / The wardrobe is opposite the bed.', vi: 'Dùng trực tiếp "near" và "opposite" (KHÔNG có "to")' },
      { en: 'The bed is on the right of the room.', vi: 'Cụm chỉ hướng rõ ràng: on the right/left of...' },
      { en: 'There is an ink-pot, some books... / There are many books on it.', vi: 'Phân biệt chuẩn "There is" (danh từ đầu số ít) và "There are" (số nhiều)' },
    ],
    examTipVi: 'Khi tả phòng, chỉ cần đi theo trình tự 4 món đồ chính (bàn → giường → tủ quần áo → giá sách) với 4 giới từ (near, on the right of, opposite, on the wall) là chắc chắn đạt điểm cao.',
  },
  {
    id: 'essay-u3-friend',
    unitId: 3,
    page: 'Tr.164 (PDF Tr.172)',
    sourceLabel: 'Unit 3 · Bài IV.4',
    titleEn: 'My Best Friend — Tuan',
    titleVi: 'Người bạn thân nhất của em — Tuấn',
    promptVi: 'Viết đoạn văn miêu tả bạn thân dựa trên các gợi ý: tên Tuấn, cao đẹp trai, tóc vàng ngắn, mắt nâu to, thông minh, hài hước, thích nghe nhạc và hát.',
    englishText:
      'My best friend is Tuan. We live in the same building and we go to the same class. Tuan is tall and handsome. He has short fair hair and big brown eyes. He is intelligent and funny. He tells jokes and everyone laughs. Tuan likes listening to music and he can sing many songs. I like chatting with him about famous singers. At school, we often do our exercises and play sports together. Next Sunday we are going to the pop concert. Tuan is very happy about this.',
    vietnameseText:
      'Bạn thân nhất của em là Tuấn. Chúng em sống cùng một tòa nhà và học chung một lớp. Tuấn cao và đẹp trai. Cậu ấy có mái tóc sáng màu ngắn và đôi mắt nâu to. Cậu ấy thông minh và hài hước. Cậu ấy kể chuyện cười và ai cũng bật cười. Tuấn thích nghe nhạc và cậu ấy có thể hát rất nhiều bài hát. Em thích trò chuyện với cậu ấy về các ca sĩ nổi tiếng. Ở trường, chúng em thường làm bài tập và chơi thể thao cùng nhau. Chủ nhật tới chúng em sẽ đi xem buổi hòa nhạc pop. Tuấn rất vui về điều này.',
    keyStructures: [
      { en: 'Tuan is tall and handsome. / He has short fair hair and big brown eyes.', vi: 'Phân biệt chuẩn: BE + tính từ · HAVE/HAS + bộ phận cơ thể' },
      { en: 'Tuan likes listening to music / I like chatting with him...', vi: 'Cấu trúc sở thích: like + V-ing' },
      { en: 'Next Sunday we are going to the pop concert.', vi: 'Dùng Hiện tại tiếp diễn (are going) cho kế hoạch đã hẹn trước' },
    ],
    examTipVi: 'Chú ý cụm "in the same building / to the same class" luôn phải có mạo từ "the" trước "same".',
  },
  {
    id: 'essay-u5-halong',
    unitId: 5,
    page: 'Tr.175 (PDF Tr.183)',
    sourceLabel: 'Unit 5 · Test X',
    titleEn: 'Ha Long — A Natural Wonder of Viet Nam',
    titleVi: 'Vịnh Hạ Long — Kỳ quan thiên nhiên Việt Nam',
    promptVi: 'Viết đoạn văn khoảng 70 từ giới thiệu một kỳ quan thiên nhiên em biết (vị trí, cảnh đẹp, hoạt động du khách có thể làm).',
    englishText:
      'Ha Long is a very beautiful tourist destination in Quang Ninh Province. There are about 2,000 islands with a lot of nice mountains and amazing caves. People can visit some of these wonderful caves by tourist boats. There is a nice beach next to the city, so people often go there to sunbathe in summer. It is really an interesting place to spend your holiday.',
    vietnameseText:
      'Hạ Long là một điểm đến du lịch rất đẹp ở tỉnh Quảng Ninh. Có khoảng 2.000 hòn đảo cùng rất nhiều ngọn núi đẹp và những hang động kỳ thú. Mọi người có thể tham quan một vài hang động tuyệt vời này bằng thuyền du lịch. Có một bãi biển đẹp ngay cạnh thành phố, vì vậy mọi người thường đến đó tắm nắng vào mùa hè. Đây thực sự là một địa điểm thú vị để tận hưởng kỳ nghỉ của bạn.',
    keyStructures: [
      { en: 'a very beautiful tourist destination in Quang Ninh Province', vi: 'Cụm từ ăn điểm: tourist destination (điểm đến du lịch)' },
      { en: 'People can visit some of these wonderful caves by tourist boats.', vi: 'Phương tiện đi lại dùng giới từ BY (by tourist boats)' },
      { en: 'It is really an interesting place to spend your holiday.', vi: 'Câu kết mẫu dùng được cho mọi thắng cảnh du lịch' },
    ],
    examTipVi: 'Lưu ý sách in nhầm chính tả "Pronvince" ở Tr.175 — khi viết bài em nhớ viết chuẩn là "Province" nhé!',
  },
  {
    id: 'essay-u6-tet',
    unitId: 6,
    page: 'Tr.177 (PDF Tr.185)',
    sourceLabel: 'Unit 6 · Bài IV.3',
    titleEn: 'How Vietnamese People Celebrate Tet',
    titleVi: 'Cách người Việt Nam đón Tết Nguyên đán',
    promptVi: 'Viết đoạn văn giới thiệu thời điểm diễn ra Tết, việc chuẩn bị trước Tết (sơn nhà, mua hoa đào, gói bánh chưng, mua quần áo mới) và hoạt động chúc Tết.',
    englishText:
      "The Vietnamese people celebrate Tet (New Year) at different times each year. This year, we will celebrate Tet in the middle of February. My father will repaint the house. I will help him to decorate the house. My father will buy a branch of beautiful peach blossoms. My family won't buy Chung cake. We will make some. My sister will help my mother to make them. My mother will buy me and my sister some new clothes. My mother will buy some delicious biscuits and sweets. We will visit our grandparents. I love meeting and talking to them.",
    vietnameseText:
      'Người Việt Nam đón Tết vào những thời điểm khác nhau mỗi năm. Năm nay chúng em sẽ đón Tết vào giữa tháng Hai. Bố em sẽ sơn lại nhà và em sẽ phụ bố trang trí nhà cửa. Bố sẽ mua một cành hoa đào thật đẹp. Gia đình em sẽ không mua bánh chưng mà tự gói một ít. Chị em sẽ giúp mẹ gói bánh. Mẹ sẽ mua cho em và chị quần áo mới, cùng một ít bánh quy và kẹo ngon. Chúng em sẽ đi thăm ông bà. Em rất thích gặp gỡ và trò chuyện cùng ông bà.',
    keyStructures: [
      { en: 'celebrate Tet at different times each year', vi: 'Đón Tết vào các thời điểm khác nhau hằng năm (theo lịch Âm)' },
      { en: 'buy a branch of beautiful peach blossoms', vi: 'Cụm từ chuẩn SGK: a branch of peach blossoms (một cành hoa đào)' },
      { en: "will / won't + V (nguyên thể) + some", vi: 'Dùng tương lai đơn để kể kế hoạch đón Tết sắp tới của gia đình' },
    ],
    examTipVi: 'Chú ý cách dùng "some" trong bài: We will make some; buy some new clothes; some delicious biscuits and sweets.',
  },
];

/* ============================================================================
 * KHO 36 BẪY LỖI SAI KINH ĐIỂN TẬP 1 (TRANG 152 – 178)
 * ============================================================================ */

export const ERROR_CORRECTION_VAULT: ErrorTrapItem[] = [
  // Unit 1
  { id: 'err-u1-1', unitId: 1, page: 'Tr.152', source: 'U1 · II.10 #1', sentence: 'What time does Mai has English class?', wrong: 'has', correct: 'have', ruleVi: 'Sau trợ động từ Do/Does luôn dùng động từ nguyên thể không chia → have.' },
  { id: 'err-u1-2', unitId: 1, page: 'Tr.152', source: 'U1 · II.10 #4', sentence: "She don't cleans it in the afternoon.", wrong: "don't cleans", correct: "doesn't clean", ruleVi: 'Chủ ngữ số ít dùng "doesn\'t" và động từ chính phải bỏ -s → doesn\'t clean.' },
  { id: 'err-u1-3', unitId: 1, page: 'Tr.154', source: 'U1 · Test IV #4', sentence: 'They go always shopping in the evening.', wrong: 'go always', correct: 'always go', ruleVi: 'Trạng từ tần suất đứng TRƯỚC động từ thường → always go.' },
  { id: 'err-u1-4', unitId: 1, page: 'Tr.154', source: 'U1 · Test IV #8', sentence: 'I am often play football on Saturdays.', wrong: 'am often play', correct: 'often play', ruleVi: 'Không dùng "am/is/are" trước động từ thường nguyên thể ở Hiện tại đơn!' },
  { id: 'err-u1-5', unitId: 1, page: 'Tr.154', source: 'U1 · Test IV #7', sentence: "Ann gets up at 6 o'clock and is having breakfast every day.", wrong: 'is having', correct: 'has', ruleVi: 'Có "every day" là thói quen lặp lại → chia Hiện tại đơn "has".' },
  { id: 'err-u1-6', unitId: 1, page: 'Tr.152', source: 'U1 · II.10 #8', sentence: 'How many child does she have?', wrong: 'child', correct: 'children', ruleVi: 'Sau "How many" luôn là danh từ đếm được số nhiều (bất quy tắc: child → children).' },

  // Unit 2
  { id: 'err-u2-1', unitId: 2, page: 'Tr.157', source: 'U2 · II.11 #1', sentence: 'How many tables is there in the classroom?', wrong: 'is', correct: 'are', ruleVi: '"tables" là danh từ số nhiều → dùng "are there".' },
  { id: 'err-u2-2', unitId: 2, page: 'Tr.157', source: 'U2 · II.11 #4', sentence: 'There are five benchs and two tables in the house.', wrong: 'benchs', correct: 'benches', ruleVi: 'Danh từ tận cùng bằng -ch khi sang số nhiều phải thêm -es → benches.' },
  { id: 'err-u2-3', unitId: 2, page: 'Tr.157', source: 'U2 · II.11 #5', sentence: "This is my brother and he's name is Minh.", wrong: "he's", correct: 'his', ruleVi: 'Trước danh từ cần tính từ sở hữu "his" (của anh ấy), không viết "he\'s".' },
  { id: 'err-u2-4', unitId: 2, page: 'Tr.157', source: 'U2 · II.11 #6', sentence: 'The cat is among the lamp and the bed.', wrong: 'among', correct: 'between', ruleVi: 'Ở giữa HAI đồ vật (A and B) bắt buộc dùng "between", không dùng "among".' },
  { id: 'err-u2-5', unitId: 2, page: 'Tr.157', source: 'U2 · II.11 #8', sentence: 'Is there a television front of the microwave?', wrong: 'front', correct: 'in front', ruleVi: 'Cụm giới từ đầy đủ là "in front of" (không được thiếu "in").' },

  // Unit 3
  { id: 'err-u3-1', unitId: 3, page: 'Tr.165', source: 'U3 · Test V #1', sentence: 'They usually watch TV, but now they read books.', wrong: 'read', correct: 'are reading', ruleVi: 'Có trạng từ "now" → chia Hiện tại tiếp diễn: are reading.' },
  { id: 'err-u3-2', unitId: 3, page: 'Tr.165', source: 'U3 · Test V #4', sentence: 'This old lady has white tooth.', wrong: 'tooth', correct: 'teeth', ruleVi: 'Số nhiều bất quy tắc của "tooth" (cái răng) là "teeth".' },
  { id: 'err-u3-3', unitId: 3, page: 'Tr.165', source: 'U3 · Test V #5', sentence: 'Do you go to the beach with us next weekend?', wrong: 'Do you go', correct: 'Are you going', ruleVi: 'Hỏi về kế hoạch đã hẹn trước ("next weekend") → dùng Hiện tại tiếp diễn.' },
  { id: 'err-u3-4', unitId: 3, page: 'Tr.165', source: 'U3 · Test V #7', sentence: 'She is very friend and helpful.', wrong: 'friend', correct: 'friendly', ruleVi: 'Sau "is very" cần tính từ "friendly" (thân thiện), không dùng danh từ "friend".' },
  { id: 'err-u3-5', unitId: 3, page: 'Tr.165', source: 'U3 · Test V #8', sentence: 'I live in a apartment on Nguyen Trai Street.', wrong: 'a', correct: 'an', ruleVi: '"apartment" bắt đầu bằng nguyên âm /ə/ → dùng mạo từ "an".' },

  // Unit 4
  { id: 'err-u4-1', unitId: 4, page: 'Tr.168', source: 'U4 · II.11 #1', sentence: 'The seafood here is more delicious as the seafood in my hometown.', wrong: 'as', correct: 'than', ruleVi: 'So sánh hơn dùng "than", không dùng "as".' },
  { id: 'err-u4-2', unitId: 4, page: 'Tr.168', source: 'U4 · II.11 #2', sentence: 'The air in the country is more clean than the air in the city.', wrong: 'more clean', correct: 'cleaner', ruleVi: '"clean" là tính từ ngắn 1 âm tiết → thêm -er thành "cleaner".' },
  { id: 'err-u4-3', unitId: 4, page: 'Tr.168', source: 'U4 · II.11 #5', sentence: 'Hanoi is crowdeder than Da Nang City.', wrong: 'crowdeder', correct: 'more crowded', ruleVi: '"crowded" là tính từ dài 2 âm tiết đuôi -ed → dùng "more crowded".' },
  { id: 'err-u4-4', unitId: 4, page: 'Tr.168', source: 'U4 · II.12 #1', sentence: 'There is a temple near to the museum.', wrong: 'near to', correct: 'near', ruleVi: 'Giới từ "near" và "opposite" đứng trực tiếp trước danh từ, KHÔNG thêm "to".' },
  { id: 'err-u4-5', unitId: 4, page: 'Tr.170', source: 'U4 · Test VI #7', sentence: 'Going by taxi is more expensiver than going by bus.', wrong: 'expensiver', correct: 'expensive', ruleVi: 'Đã có "more" phía trước thì KHÔNG thêm đuôi "-er" → more expensive.' },
  { id: 'err-u4-6', unitId: 4, page: 'Tr.170', source: 'U4 · Test VI #5', sentence: 'There are a living room, a bathroom and a bedroom in my house.', wrong: 'are', correct: 'is', ruleVi: 'Quy tắc gần nhất: danh từ đầu tiên là số ít ("a living room") → dùng "There is".' },

  // Unit 5
  { id: 'err-u5-1', unitId: 5, page: 'Tr.171', source: 'U5 · II.5 #4', sentence: 'There is much waters in this jar.', wrong: 'waters', correct: 'water', ruleVi: '"water" (nước) là danh từ không đếm được → tuyệt đối không thêm -s.' },
  { id: 'err-u5-2', unitId: 5, page: 'Tr.171', source: 'U5 · II.5 #10', sentence: 'You can take four potato from the basket.', wrong: 'potato', correct: 'potatoes', ruleVi: 'Danh từ tận cùng -o (potato, tomato) chuyển sang số nhiều thêm -es → potatoes.' },
  { id: 'err-u5-3', unitId: 5, page: 'Tr.172', source: 'U5 · II.12 #2', sentence: 'There are a little photos in the magazine.', wrong: 'a little', correct: 'a few', ruleVi: '"photos" đếm được số nhiều → dùng "a few" thay vì "a little".' },
  { id: 'err-u5-4', unitId: 5, page: 'Tr.172', source: 'U5 · II.12 #5', sentence: 'How much islands are there in Ha Long Bay?', wrong: 'much', correct: 'many', ruleVi: '"islands" đếm được số nhiều → hỏi số lượng phải dùng "How many".' },
  { id: 'err-u5-5', unitId: 5, page: 'Tr.172', source: 'U5 · II.12 #7', sentence: "You mustn't leaves food on the tables in class.", wrong: 'leaves', correct: 'leave', ruleVi: 'Sau động từ khuyết thiếu "must / mustn\'t" luôn dùng động từ nguyên thể → leave.' },
  { id: 'err-u5-6', unitId: 5, page: 'Tr.172', source: 'U5 · II.12 #8', sentence: "I'm eating a egg.", wrong: 'a', correct: 'an', ruleVi: '"egg" bắt đầu bằng nguyên âm /e/ → dùng "an egg".' },
  { id: 'err-u5-7', unitId: 5, page: 'Tr.172', source: 'U5 · II.12 #9', sentence: 'Must you wears a school uniform?', wrong: 'wears', correct: 'wear', ruleVi: 'Trong câu hỏi với "Must", động từ chính luôn ở nguyên thể → wear.' },
  { id: 'err-u5-8', unitId: 5, page: 'Tr.172', source: 'U5 · II.12 #10', sentence: "You mustn't clean the kitchen table after cooking.", wrong: "mustn't", correct: 'must', ruleVi: 'Về nghĩa: phải lau bàn bếp sau khi nấu ăn → dùng "must".' },

  // Unit 6
  { id: 'err-u6-1', unitId: 6, page: 'Tr.176', source: 'U6 · II.9 #1', sentence: 'We have got any mistakes.', wrong: 'any', correct: 'some', ruleVi: 'Câu khẳng định phải dùng "some" thay cho "any".' },
  { id: 'err-u6-2', unitId: 6, page: 'Tr.176', source: 'U6 · II.9 #2', sentence: "They haven't no questions.", wrong: 'no', correct: 'any', ruleVi: 'Tiếng Anh không dùng phủ định kép ("haven\'t + no") → đổi thành "any".' },
  { id: 'err-u6-3', unitId: 6, page: 'Tr.176', source: 'U6 · II.9 #4', sentence: 'There is some butters on the table.', wrong: 'butters', correct: 'butter', ruleVi: '"butter" (bơ) là danh từ không đếm được → không thêm -s.' },
  { id: 'err-u6-4', unitId: 6, page: 'Tr.176', source: 'U6 · II.9 #6', sentence: 'There is some film on TV today.', wrong: 'some', correct: 'a', ruleVi: '"film" là danh từ đếm được số ít → dùng mạo từ "a" (không dùng some).' },
  { id: 'err-u6-5', unitId: 6, page: 'Tr.178', source: 'U6 · Test IV #6', sentence: 'My mother usually cooks lots of traditional foods.', wrong: 'foods', correct: 'food', ruleVi: '"food" (thức ăn nói chung) là danh từ không đếm được → bỏ -s.' },
  { id: 'err-u6-6', unitId: 6, page: 'Tr.178', source: 'U6 · Test IV #9', sentence: 'Henry has to wakes up early for school.', wrong: 'wakes up', correct: 'wake up', ruleVi: 'Sau "has to" dùng động từ nguyên thể không chia → wake up.' },
];

/* ============================================================================
 * TỔNG ÔN CUỐI HỌC KỲ 1 (TỔNG HỢP TỪ TRANG 1–179 · ĐẶC BIỆT TR.168–179)
 * ============================================================================ */

export const SEMESTER1_MASTER_MATRIX: Semester1UnitSnapshot[] = [
  {
    unitId: 1,
    code: 'Unit 1',
    titleEn: 'My New School',
    accentHex: '#0284C7',
    ipaPair: '/ɑː/ vs /ʌ/',
    ipaExamples: ['carp', 'guitar', 'country', 'Monday'],
    grammarCoreVi: 'Hiện tại đơn & Trạng từ tần suất',
    formulaEn: 'S + always/often + V(s/es)  |  S + am/is/are + always + Adj',
    topTrapVi: 'Không viết "am often play"; sau Do/Does động từ về nguyên thể.',
  },
  {
    unitId: 2,
    code: 'Unit 2',
    titleEn: 'My House',
    accentHex: '#059669',
    ipaPair: '/s/ · /z/ · /ɪz/',
    ipaExamples: ['lamps', 'books', 'rooms', 'houses'],
    grammarCoreVi: 'Sở hữu cách (\'s / s\') & Giới từ vị trí',
    formulaEn: "Peter's house · boys' toys · between A and B · in front of",
    topTrapVi: 'Số nhiều có -s chỉ thêm (\'); "between" cho 2 vật, "in front of" đủ "in".',
  },
  {
    unitId: 3,
    code: 'Unit 3',
    titleEn: 'My Friends',
    accentHex: '#7C3AED',
    ipaPair: '/b/ vs /p/',
    ipaExamples: ['bath', 'bike', 'present', 'piano'],
    grammarCoreVi: 'Hiện tại tiếp diễn & Tả người (Be vs Have)',
    formulaEn: 'S + am/is/are + V-ing  |  She is tall · She has long black hair',
    topTrapVi: 'Kế hoạch hẹn trước (tonight/next week) chia tiếp diễn; tooth → teeth.',
  },
  {
    unitId: 4,
    code: 'Unit 4',
    titleEn: 'My Neighbourhood',
    accentHex: '#D97706',
    ipaPair: '/ɪ/ vs /iː/',
    ipaExamples: ['city', 'busy', 'beach', 'police'],
    grammarCoreVi: 'So sánh hơn (Tính từ ngắn -er / dài more)',
    formulaEn: 'adj-er + than  |  more + long adj + than  (good→better, bad→worse)',
    topTrapVi: 'Không dùng kép "more expensiver"; "near" và "opposite" KHÔNG có "to".',
  },
  {
    unitId: 5,
    code: 'Unit 5',
    titleEn: 'Natural Wonders',
    accentHex: '#0D9488',
    ipaPair: '/t/ vs /d/',
    ipaExamples: ['Tina', 'teeth', 'Dan', 'loved'],
    grammarCoreVi: 'Danh từ C/U, a few/a little & Must / Mustn\'t',
    formulaEn: "a few + N(nhiều) · a little + N(U)  |  S + must / mustn't + V",
    topTrapVi: 'news, money, work, baggage, furniture là U (không thêm -s, dùng a little).',
  },
  {
    unitId: 6,
    code: 'Unit 6',
    titleEn: 'Our Tet Holiday',
    accentHex: '#E11D48',
    ipaPair: '/s/ vs /ʃ/',
    ipaExamples: ['celebrate', 'nice', 'sure', 'sugar'],
    grammarCoreVi: 'Should / Shouldn\'t & Some / Any',
    formulaEn: "S + should / shouldn't + V  |  (+) some  ·  (- / ?) any",
    topTrapVi: '"sure / sugar" đọc /ʃ/; "prohibited" → mustn\'t, "not a good idea" → shouldn\'t.',
  },
];

export const SEMESTER1_REWRITE_FORMULAS: RewriteFormulaItem[] = [
  {
    id: 'rw-1',
    unitId: 1,
    page: 'Tr.155',
    patternVi: 'There is/are ... in X  ↔  X has ...',
    originalEn: 'There are 35 students in my class.',
    rewrittenEn: 'My class has 35 students.',
    tipVi: 'Đổi qua lại cực nhiều trong đề thi HK1 (Unit 1, 2, 4, 5 đều có!).',
  },
  {
    id: 'rw-2',
    unitId: 1,
    page: 'Tr.155',
    patternVi: 'like + N  ↔  be interested in + N',
    originalEn: 'Do you like physics?',
    rewrittenEn: 'Are you interested in physics?',
    tipVi: 'Chú ý "interested" luôn đi với giới từ IN và động từ to be.',
  },
  {
    id: 'rw-3',
    unitId: 1,
    page: 'Tr.156',
    patternVi: 'drive to work  ↔  go / travel to work by car',
    originalEn: 'My father usually drives to work.',
    rewrittenEn: 'My father goes to work by car.',
    tipVi: 'Tương tự: cycle to work ↔ get to work by bike; walk to school ↔ go on foot.',
  },
  {
    id: 'rw-4',
    unitId: 2,
    page: 'Tr.160',
    patternVi: 'near  ↔  not far from',
    originalEn: "The bus station isn't far from the new shopping center.",
    rewrittenEn: 'The bus station is near the new shopping center.',
    tipVi: 'Nhớ: "far" luôn đi với "from", còn "near" đứng một mình không có "to".',
  },
  {
    id: 'rw-5',
    unitId: 2,
    page: 'Tr.160',
    patternVi: 'behind  ↔  in front of',
    originalEn: 'The house is behind the trees.',
    rewrittenEn: 'There are trees in front of the house.',
    tipVi: 'Đảo vị trí 2 vật khi đổi "behind ↔ in front of" hoặc "to the left of ↔ to the right of".',
  },
  {
    id: 'rw-6',
    unitId: 2,
    page: 'Tr.160',
    patternVi: 'like ... most  ↔  My favourite ... is ...',
    originalEn: 'I like the bedroom most.',
    rewrittenEn: 'My favourite room is the bedroom.',
    tipVi: 'Mẫu này áp dụng được cho cả môn học (subject), căn phòng (room), món ăn (food).',
  },
  {
    id: 'rw-7',
    unitId: 3,
    page: 'Tr.166',
    patternVi: 'S + have/has + adj + N  ↔  S\'s + N + is/are + adj',
    originalEn: 'The girl has long brown hair.',
    rewrittenEn: "The girl's hair is long and brown.",
    tipVi: 'Khi tách 2 tính từ ra sau "to be", nhớ thêm "and" (long and brown).',
  },
  {
    id: 'rw-8',
    unitId: 3,
    page: 'Tr.166',
    patternVi: 'Does S have + N?  ↔  Is/Are + S\'s N + adj?',
    originalEn: 'Does she have a round face or oval face?',
    rewrittenEn: 'Is her face round or oval?',
    tipVi: 'Kiểm tra số ít/số nhiều của danh từ để chọn "Is" hay "Are" (eyes/cheeks → Are).',
  },
  {
    id: 'rw-9',
    unitId: 4,
    page: 'Tr.169',
    patternVi: 'Đảo so sánh hơn bằng tính từ trái nghĩa',
    originalEn: 'The black car is cheaper than the red car.',
    rewrittenEn: 'The red car is more expensive than the black car.',
    tipVi: 'Cặp hay gặp: cheaper ↔ more expensive; easier ↔ more difficult; better ↔ worse.',
  },
  {
    id: 'rw-10',
    unitId: 4,
    page: 'Tr.170',
    patternVi: 'A isn\'t as + adj + as B  ↔  B is + so sánh hơn + than A',
    originalEn: "The chair isn't as comfortable as the sofa.",
    rewrittenEn: 'The sofa is more comfortable than the chair.',
    tipVi: 'Đảo vật B lên đầu rồi chuyển tính từ sang dạng so sánh hơn (+ than A).',
  },
  {
    id: 'rw-11',
    unitId: 4,
    page: 'Tr.170',
    patternVi: 'Giữ nguyên thì Quá khứ khi viết lại so sánh hơn',
    originalEn: "Jim's suitcase was lighter than Jack's suitcase.",
    rewrittenEn: "Jack's suitcase was heavier than Jim's suitcase.",
    tipVi: 'Đề cho "was" → câu viết lại bắt buộc giữ "was", tránh nhầm sang "is"!',
  },
  {
    id: 'rw-12',
    unitId: 4,
    page: 'Tr.170',
    patternVi: 'No N is + adj-er than X  ↔  X is the + adj-est + N',
    originalEn: 'No house in this neighborhood is bigger than this one.',
    rewrittenEn: 'This is the biggest house in this neighborhood.',
    tipVi: '"Không cái nào lớn hơn cái này" = "Đây là cái lớn nhất" (so sánh nhất có THE).',
  },
  {
    id: 'rw-13',
    unitId: 5,
    page: 'Tr.173',
    patternVi: 'Does X have N?  ↔  Is there N in X?',
    originalEn: 'Does your neighbourhood have a library?',
    rewrittenEn: 'Is there a library in your neighbourhood?',
    tipVi: 'Nếu danh từ số nhiều thì đổi thành "Are there...?" (How many classes are there...?).',
  },
  {
    id: 'rw-14',
    unitId: 5,
    page: 'Tr.174',
    patternVi: 'That + N + is + adj  ↔  That is + a/an + adj + N',
    originalEn: 'That classroom is small.',
    rewrittenEn: 'That is a small classroom.',
    tipVi: 'Đưa tính từ lên trước danh từ và đừng quên mạo từ "a/an" cho danh từ số ít.',
  },
  {
    id: 'rw-15',
    unitId: 6,
    page: 'Tr.179',
    patternVi: 'be prohibited / against the rules  ↔  mustn\'t + V',
    originalEn: "It's against the rules to use your mobile phone in class.",
    rewrittenEn: "You mustn't use your mobile phone in class.",
    tipVi: 'Luật lệ nghiêm cấm (prohibited / against the rules) luôn dùng MUSTN\'T.',
  },
  {
    id: 'rw-16',
    unitId: 6,
    page: 'Tr.179',
    patternVi: 'It\'s really / very important to V  ↔  You must + V',
    originalEn: "It's really important to take this medicine three times a day.",
    rewrittenEn: 'You must take this medicine three times a day.',
    tipVi: 'Rất quan trọng/bắt buộc (really important) → dùng MUST (cấm → MUSTN\'T).',
  },
  {
    id: 'rw-17',
    unitId: 6,
    page: 'Tr.179',
    patternVi: 'It\'s a good idea / good for you to V  ↔  You should + V',
    originalEn: "It's a good idea to listen to the weather forecast before going camping.",
    rewrittenEn: 'You should listen to the weather forecast before going camping.',
    tipVi: 'Lời khuyên hay (a good idea / good for you) → dùng SHOULD.',
  },
  {
    id: 'rw-18',
    unitId: 6,
    page: 'Tr.179',
    patternVi: 'It\'s not a good idea / not good to V  ↔  You shouldn\'t + V',
    originalEn: "It's not a good idea to swim immediately after a meal.",
    rewrittenEn: "You shouldn't swim immediately after a meal.",
    tipVi: 'Lời khuyên không nên làm → dùng SHOULDN\'T + V nguyên thể.',
  },
];
