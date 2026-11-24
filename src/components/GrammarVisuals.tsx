import { useState } from 'react';
import { Volume2, ArrowRight, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import type { VisualWidgetType } from '../types/curriculum';
import { speakEnglish } from '../utils/speech';
import { U5_MUST_USAGES, U5_UNCOUNTABLE_GROUPS } from '../data/unit5Pages107To128';

interface GrammarVisualProps {
  type: VisualWidgetType;
}

function SpeakMiniButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      onClick={() => speakEnglish(text)}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
      title="Nghe phát âm câu mẫu"
    >
      <Volume2 className="h-3.5 w-3.5" />
      <span>Nghe mẫu</span>
    </button>
  );
}

/* Unit 1: 3-in-1 Interactive Studio (Pages 7-13: Present Simple Builder, 9-Level Frequency Ladder, 5 Action Verbs) */
function PresentSimpleFrequencyVisual() {
  const [studioTab, setStudioTab] = useState<'tense' | 'frequency' | 'verbs'>('tense');

  // --- Tab 1: Present Simple Builder ---
  type SubjectId = 'I' | 'You' | 'He' | 'She' | 'We' | 'They';
  type FormId = 'pos' | 'neg' | 'q';
  type VerbPresetId = 'be' | 'work' | 'watch' | 'study' | 'play';

  const [subject, setSubject] = useState<SubjectId>('She');
  const [form, setForm] = useState<FormId>('pos');
  const [verbId, setVerbId] = useState<VerbPresetId>('watch');

  const isThirdSingular = subject === 'He' || subject === 'She';

  const verbPresets: Record<
    VerbPresetId,
    {
      label: string;
      base: string;
      third: string;
      rest: string;
      restVi: string;
      ruleVi: string;
      soundTag: string;
    }
  > = {
    be: {
      label: 'To be (a pupil)',
      base: 'be',
      third: 'is',
      rest: 'a good student',
      restVi: 'là một học sinh giỏi',
      ruleVi: 'I + am · He/She/It + is · You/We/They + are (không dùng do/does)',
      soundTag: 'To be',
    },
    work: {
      label: 'work (thêm -s)',
      base: 'work',
      third: 'works',
      rest: 'in the office',
      restVi: 'làm việc ở văn phòng',
      ruleVi: 'Động từ thường → thêm -s; kết thúc bằng âm /k/ nên đuôi -s đọc là /s/',
      soundTag: 'Đuôi /s/',
    },
    watch: {
      label: 'watch (thêm -es)',
      base: 'watch',
      third: 'watches',
      rest: 'TV in the evening',
      restVi: 'xem TV vào buổi tối',
      ruleVi: 'Tận cùng -ch ("Ông Sáu Già Chạy Xe SH") → thêm -es; đuôi -es đọc là /ɪz/',
      soundTag: 'Đuôi /ɪz/',
    },
    study: {
      label: 'study (phụ âm + y)',
      base: 'study',
      third: 'studies',
      rest: 'English every day',
      restVi: 'học Tiếng Anh mỗi ngày',
      ruleVi: 'Tận cùng phụ âm d + y → đổi y thành i + es; đuôi -ies đọc là /z/',
      soundTag: 'Đuôi /z/',
    },
    play: {
      label: 'play (nguyên âm + y)',
      base: 'play',
      third: 'plays',
      rest: 'badminton after school',
      restVi: 'chơi cầu lông sau giờ học',
      ruleVi: 'Trước y là nguyên âm a → giữ nguyên y rồi thêm -s; đuôi -s đọc là /z/',
      soundTag: 'Đuôi /z/',
    },
  };

  const subjViMap: Record<SubjectId, string> = {
    I: 'Em',
    You: 'Bạn',
    He: 'Cậu ấy',
    She: 'Cô ấy',
    We: 'Chúng em',
    They: 'Họ',
  };

  const vp = verbPresets[verbId];
  const beForm = subject === 'I' ? 'am' : isThirdSingular ? 'is' : 'are';
  const beNeg = subject === 'I' ? 'am not' : isThirdSingular ? "isn't" : "aren't";
  const auxDo = isThirdSingular ? 'Does' : 'Do';
  const auxNeg = isThirdSingular ? "doesn't" : "don't";

  let builtTokens: { text: string; tone: string }[] = [];
  let builtSentence = '';
  let builtVi = '';
  let shortAns = '';

  if (verbId === 'be') {
    if (form === 'pos') {
      builtTokens = [
        { text: subject, tone: 'bg-sky-100 text-sky-900' },
        { text: beForm, tone: 'bg-emerald-100 text-emerald-900 font-bold' },
        { text: `${vp.rest}.`, tone: 'bg-slate-200 text-slate-800' },
      ];
      builtSentence = `${subject} ${beForm} ${vp.rest}.`;
      builtVi = `${subjViMap[subject]} ${vp.restVi}.`;
    } else if (form === 'neg') {
      builtTokens = [
        { text: subject, tone: 'bg-sky-100 text-sky-900' },
        { text: beNeg, tone: 'bg-rose-100 text-rose-900 font-bold' },
        { text: `${vp.rest}.`, tone: 'bg-slate-200 text-slate-800' },
      ];
      builtSentence = `${subject} ${beNeg} ${vp.rest}.`;
      builtVi = `${subjViMap[subject]} không phải ${vp.restVi}.`;
    } else {
      const capBe = beForm.charAt(0).toUpperCase() + beForm.slice(1);
      const qSubj = subject === 'I' ? 'I' : subject.toLowerCase();
      builtTokens = [
        { text: capBe, tone: 'bg-violet-100 text-violet-900 font-bold' },
        { text: qSubj, tone: 'bg-sky-100 text-sky-900' },
        { text: `${vp.rest}?`, tone: 'bg-slate-200 text-slate-800' },
      ];
      builtSentence = `${capBe} ${qSubj} ${vp.rest}?`;
      builtVi = `${subjViMap[subject]} có phải ${vp.restVi} không?`;
      shortAns =
        subject === 'You'
          ? 'Yes, I am. / No, I am not.'
          : subject === 'I'
            ? "Yes, you are. / No, you aren't."
            : `Yes, ${subject.toLowerCase()} ${beForm}. / No, ${subject.toLowerCase()} ${beNeg}.`;
    }
  } else {
    if (form === 'pos') {
      const conjugated = isThirdSingular ? vp.third : vp.base;
      builtTokens = [
        { text: subject, tone: 'bg-sky-100 text-sky-900' },
        { text: conjugated, tone: 'bg-emerald-100 text-emerald-900 font-bold' },
        { text: `${vp.rest}.`, tone: 'bg-slate-200 text-slate-800' },
      ];
      builtSentence = `${subject} ${conjugated} ${vp.rest}.`;
      builtVi = `${subjViMap[subject]} ${vp.restVi}.`;
    } else if (form === 'neg') {
      builtTokens = [
        { text: subject, tone: 'bg-sky-100 text-sky-900' },
        { text: auxNeg, tone: 'bg-rose-100 text-rose-900 font-bold' },
        { text: vp.base, tone: 'bg-emerald-100 text-emerald-900' },
        { text: `${vp.rest}.`, tone: 'bg-slate-200 text-slate-800' },
      ];
      builtSentence = `${subject} ${auxNeg} ${vp.base} ${vp.rest}.`;
      builtVi = `${subjViMap[subject]} không ${vp.restVi}.`;
    } else {
      const qSubj = subject === 'I' ? 'I' : subject.toLowerCase();
      builtTokens = [
        { text: auxDo, tone: 'bg-violet-100 text-violet-900 font-bold' },
        { text: qSubj, tone: 'bg-sky-100 text-sky-900' },
        { text: vp.base, tone: 'bg-emerald-100 text-emerald-900' },
        { text: `${vp.rest}?`, tone: 'bg-slate-200 text-slate-800' },
      ];
      builtSentence = `${auxDo} ${qSubj} ${vp.base} ${vp.rest}?`;
      builtVi = `${subjViMap[subject]} có ${vp.restVi} không?`;
      const ansSubj = subject === 'You' ? 'I' : subject === 'I' ? 'you' : subject.toLowerCase();
      const ansDo = isThirdSingular ? 'does' : 'do';
      const ansNo = isThirdSingular ? "doesn't" : "don't";
      shortAns = `Yes, ${ansSubj} ${ansDo}. / No, ${ansSubj} ${ansNo}.`;
    }
  }

  // --- Tab 2: 9-Level Frequency Ladder (PDF Page 12) ---
  const levels = [
    { word: 'never', pct: 0, vi: 'không bao giờ', color: 'bg-slate-400', sample: 'Tim is never late for work.' },
    { word: 'hardly ever', pct: 5, vi: 'hầu như không', color: 'bg-slate-500', sample: 'I hardly ever go to the cinema.' },
    { word: 'seldom', pct: 10, vi: 'hiếm khi', color: 'bg-amber-400', sample: 'I seldom read the newspaper.' },
    { word: 'occasionally', pct: 30, vi: 'đôi khi', color: 'bg-amber-500', sample: 'I occasionally eat fast food.' },
    { word: 'sometimes', pct: 50, vi: 'thỉnh thoảng', color: 'bg-orange-500', sample: 'I sometimes go to the library.' },
    { word: 'often', pct: 70, vi: 'thường, hay', color: 'bg-sky-400', sample: 'My father often watches the news.' },
    { word: 'normally', pct: 80, vi: 'thường', color: 'bg-sky-500', sample: 'I normally go to the gym.' },
    { word: 'usually', pct: 90, vi: 'thường xuyên', color: 'bg-sky-600', sample: 'She usually gets up early.' },
    { word: 'always', pct: 100, vi: 'luôn luôn', color: 'bg-emerald-600', sample: 'I always arrive on time.' },
  ];
  const [idx, setIdx] = useState(8);
  const [verbMode, setVerbMode] = useState<'ordinary' | 'tobe'>('ordinary');
  const current = levels[idx];

  const freqSentence =
    verbMode === 'ordinary'
      ? `Nam ${current.word} studies English in the evening.`
      : `Nam is ${current.word} ready for school.`;

  const freqViSentence =
    verbMode === 'ordinary'
      ? `Nam ${current.vi} học Tiếng Anh vào buổi tối.`
      : `Nam ${current.vi} sẵn sàng đến trường.`;

  // --- Tab 3: 5 Action Verbs (PDF Page 13) ---
  const actionVerbGroups = [
    {
      verb: 'STUDY',
      meaning: 'Học (trước tên môn học)',
      tone: 'border-sky-300 bg-sky-50/70 text-sky-900',
      badge: 'bg-sky-600',
      rule: 'Dùng trực tiếp trước môn học & kiến thức.',
      items: ['English', 'Maths', 'science', 'Vietnamese', 'vocabulary', 'history', 'physics'],
      example: 'We study science, history and English at school.',
    },
    {
      verb: 'HAVE',
      meaning: 'Có / Ăn / Bị (sở hữu & bữa ăn)',
      tone: 'border-emerald-300 bg-emerald-50/70 text-emerald-900',
      badge: 'bg-emerald-600',
      rule: 'Chỉ sự sở hữu, bữa ăn, đồ ăn uống hoặc tình trạng sức khỏe.',
      items: ['a house', 'a flat', 'school lunch', 'dinner', 'a backache', 'breakfast'],
      example: 'Students have school lunch at 11:30 every day.',
    },
    {
      verb: 'DO',
      meaning: 'Tập (võ / thể dục cá nhân / bài tập)',
      tone: 'border-violet-300 bg-violet-50/70 text-violet-900',
      badge: 'bg-violet-600',
      rule: 'Hoạt động giải trí/thể thao trong nhà, cá nhân, không thi đấu bằng bóng.',
      items: ['karate', 'judo', 'ballet', 'aerobics', 'gymnastics', 'yoga', 'homework'],
      example: 'My sister does yoga and I do karate twice a week.',
    },
    {
      verb: 'PLAY',
      meaning: 'Chơi (thể thao có bóng/cầu/trò chơi)',
      tone: 'border-amber-300 bg-amber-50/70 text-amber-900',
      badge: 'bg-amber-600',
      rule: 'Thể thao liên quan đến trái bóng, quả cầu hoặc trò chơi thi đấu.',
      items: ['badminton', 'tennis', 'table tennis', 'volleyball', 'rugby', 'chess', 'golf'],
      example: 'They play badminton and table tennis at break time.',
    },
    {
      verb: 'GO',
      meaning: 'Đi (cùng hoạt động đuôi V-ing)',
      tone: 'border-rose-300 bg-rose-50/70 text-rose-900',
      badge: 'bg-rose-600',
      rule: 'Luôn đứng trước danh động từ đuôi -ing chỉ môn thể thao/giải trí.',
      items: ['swimming', 'fishing', 'cycling', 'dancing', 'bowling', 'sailing', 'jogging', 'hiking', 'skiing'],
      example: 'We go swimming and cycling at the weekend.',
    },
  ];
  const [selectedVerbGroup, setSelectedVerbGroup] = useState(0);
  const activeVerbGroup = actionVerbGroups[selectedVerbGroup];

  return (
    <div className="space-y-4">
      {/* Studio Sub-tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5">
        {[
          { id: 'tense' as const, label: '1. Ghép câu Hiện tại đơn (Tr.7–10)' },
          { id: 'frequency' as const, label: '2. Thang 9 bậc Tần suất (Tr.10)' },
          { id: 'verbs' as const, label: '3. Sơ đồ 5 Động từ (Tr.11)' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setStudioTab(tab.id)}
            className={`rounded-lg px-3 py-2 text-xs font-bold transition-colors ${
              studioTab === tab.id
                ? 'bg-sky-600 text-white shadow-2xs'
                : 'text-slate-600 hover:bg-white hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: PRESENT SIMPLE INTERACTIVE BUILDER */}
      {studioTab === 'tense' && (
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Bước 1 · Chọn Chủ ngữ (S)
              </p>
              <div className="grid grid-cols-6 gap-1.5">
                {(['I', 'You', 'He', 'She', 'We', 'They'] as SubjectId[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSubject(s)}
                    className={`rounded-lg py-2 text-xs font-bold border transition-colors ${
                      subject === s
                        ? 'border-sky-600 bg-sky-600 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Bước 2 · Chọn Thể câu
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'pos' as FormId, label: '(+) Khẳng định' },
                  { id: 'neg' as FormId, label: '(-) Phủ định' },
                  { id: 'q' as FormId, label: '(?) Nghi vấn' },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setForm(f.id)}
                    className={`rounded-lg px-2 py-2 text-xs font-bold border transition-colors ${
                      form === f.id
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Bước 3 · Chọn Động từ để xem quy tắc chia
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(Object.keys(verbPresets) as VerbPresetId[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setVerbId(key)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold border transition-colors ${
                      verbId === key
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {verbPresets[key].label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Câu hoàn chỉnh tự động chia
                </span>
                <span className="rounded-md bg-slate-100 px-2.5 py-0.5 font-ipa text-xs font-bold text-slate-700">
                  {verbId === 'be' ? 'Động từ To be' : isThirdSingular && form === 'pos' ? vp.soundTag : 'V nguyên mẫu'}
                </span>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center gap-1.5 text-base font-semibold">
                  {builtTokens.map((t, i) => (
                    <span key={`${t.text}-${i}`} className={`rounded-lg px-2.5 py-1 ${t.tone}`}>
                      {t.text}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-600 mt-3">{builtVi}</p>
                {shortAns && (
                  <p className="mt-2 rounded-lg bg-white border border-slate-200 px-3 py-1.5 font-ipa text-xs font-semibold text-emerald-800">
                    Trả lời ngắn: {shortAns}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg bg-amber-50 border border-amber-200 px-3.5 py-2.5 text-xs text-amber-950 leading-relaxed">
                <strong>Quy tắc đang áp dụng:</strong>{' '}
                {verbId === 'be'
                  ? vp.ruleVi
                  : form === 'pos'
                    ? isThirdSingular
                      ? vp.ruleVi
                      : `Chủ ngữ "${subject}" là ngôi 1/2/số nhiều → giữ nguyên động từ "${vp.base}".`
                    : `Có trợ động từ "${form === 'neg' ? auxNeg : auxDo}" nên động từ chính "${vp.base}" giữ nguyên mẫu (không thêm -s/-es).`}
              </div>
              <div className="flex justify-end">
                <SpeakMiniButton text={builtSentence} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 9-LEVEL FREQUENCY LADDER */}
      {studioTab === 'frequency' && (
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-5">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                  Thước đo 9 bậc tần suất chuẩn SGK Trang 10
                </p>
                <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                  Chạm cột hoặc kéo thanh trượt từ 0% đến 100%
                </h4>
              </div>
              <span className="font-ipa text-xl font-bold text-sky-700 tabular-nums">
                {current.pct}%
              </span>
            </div>

            {/* 9 Visual frequency bars */}
            <div className="grid grid-cols-9 gap-1.5 items-end h-32 mb-4">
              {levels.map((lvl, i) => {
                const active = i === idx;
                const barH = Math.max(14, lvl.pct);
                return (
                  <button
                    key={lvl.word}
                    type="button"
                    onClick={() => setIdx(i)}
                    className="flex flex-col items-center gap-1 group focus:outline-none"
                    title={`${lvl.word} (${lvl.pct}%) - ${lvl.vi}`}
                  >
                    <span className="font-ipa text-[10px] font-semibold text-slate-400 tabular-nums">
                      {lvl.pct}%
                    </span>
                    <div className="w-full flex items-end justify-center h-20">
                      <div
                        className={`w-full max-w-8 rounded-t-md transition-all duration-300 ${
                          active ? `${lvl.color} ring-2 ring-sky-400 ring-offset-1` : 'bg-slate-200 group-hover:bg-slate-300'
                        }`}
                        style={{ height: `${barH}%` }}
                      />
                    </div>
                    <span
                      className={`text-[10px] leading-tight text-center font-semibold truncate w-full ${
                        active ? 'text-slate-900 font-bold' : 'text-slate-500'
                      }`}
                    >
                      {lvl.word === 'hardly ever' ? 'hardly' : lvl.word === 'occasionally' ? 'occas.' : lvl.word}
                    </span>
                  </button>
                );
              })}
            </div>

            <div>
              <label htmlFor="freq-slider" className="flex justify-between text-xs font-medium text-slate-600 mb-1.5">
                <span>
                  Đang chọn: <strong className="text-slate-900">{current.word}</strong> ({current.vi})
                </span>
                <span className="tabular-nums font-semibold text-sky-700">{current.pct}%</span>
              </label>
              <input
                id="freq-slider"
                type="range"
                min={0}
                max={levels.length - 1}
                value={idx}
                onChange={(e) => setIdx(Number(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Đổi loại động từ để xem vị trí nhảy tự động
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setVerbMode('ordinary')}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold border transition-colors ${
                    verbMode === 'ordinary'
                      ? 'border-sky-600 bg-sky-50 text-sky-800'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Động từ thường (studies)
                </button>
                <button
                  type="button"
                  onClick={() => setVerbMode('tobe')}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold border transition-colors ${
                    verbMode === 'tobe'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Động từ To be (is)
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-2">
              <div className="flex flex-wrap items-center gap-1.5 text-sm font-semibold">
                <span className="rounded bg-slate-200 px-2 py-0.5 text-slate-800">Nam</span>
                {verbMode === 'tobe' && (
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-emerald-800">is</span>
                )}
                <span className="rounded bg-amber-100 px-2 py-0.5 text-amber-900 ring-1 ring-amber-300">
                  {current.word}
                </span>
                {verbMode === 'ordinary' ? (
                  <span className="rounded bg-sky-100 px-2 py-0.5 text-sky-800">studies</span>
                ) : (
                  <span className="rounded bg-slate-200 px-2 py-0.5 text-slate-800">ready for school.</span>
                )}
                {verbMode === 'ordinary' && (
                  <span className="text-slate-700">English in the evening.</span>
                )}
              </div>
              <p className="text-xs text-slate-600">{freqViSentence}</p>
              <p className="text-[11px] text-slate-500 border-t border-slate-200 pt-2">
                Ví dụ SGK: <span className="font-semibold text-slate-800">{current.sample}</span>
              </p>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-700">
                {verbMode === 'ordinary' ? 'Đứng TRƯỚC động từ thường' : 'Đứng SAU động từ to be'}
              </span>
              <SpeakMiniButton text={freqSentence} />
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 5 ACTION VERBS VISUAL MAP */}
      {studioTab === 'verbs' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {actionVerbGroups.map((g, i) => {
              const active = i === selectedVerbGroup;
              return (
                <button
                  key={g.verb}
                  type="button"
                  onClick={() => setSelectedVerbGroup(i)}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    active
                      ? `${g.tone} shadow-2xs`
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className={`inline-block rounded-md px-2 py-0.5 font-display text-xs font-extrabold text-white ${g.badge}`}>
                    {g.verb}
                  </span>
                  <p className="text-[11px] font-medium mt-1.5 leading-snug">{g.meaning}</p>
                </button>
              );
            })}
          </div>

          <div className={`rounded-xl border p-5 ${activeVerbGroup.tone}`}>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h4 className="font-display text-lg font-extrabold">
                  Nhóm {activeVerbGroup.verb} — {activeVerbGroup.meaning}
                </h4>
                <p className="text-xs mt-0.5 opacity-90">{activeVerbGroup.rule}</p>
              </div>
              <SpeakMiniButton text={activeVerbGroup.example} />
            </div>

            <div className="flex flex-wrap gap-2 my-3">
              {activeVerbGroup.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => speakEnglish(`${activeVerbGroup.verb.toLowerCase()} ${item}`)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-800 hover:border-sky-400 transition-colors"
                  title="Chạm để nghe cụm từ"
                >
                  <span className="font-bold text-sky-700">{activeVerbGroup.verb.toLowerCase()}</span>
                  <span>{item}</span>
                  <Volume2 className="h-3 w-3 text-slate-400" />
                </button>
              ))}
            </div>

            <p className="text-xs font-semibold bg-white/80 rounded-lg px-3.5 py-2 border border-white/60 text-slate-800">
              Câu mẫu: {activeVerbGroup.example}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* Unit 2: 2-in-1 Interactive Studio — 17 Prepositions of Place + Possessive Case 's / ' (Book pp. 35–38) */
function PrepositionsRoomVisual() {
  const [studioTab, setStudioTab] = useState<'prepositions' | 'possessive'>('prepositions');

  type PrepScene = {
    id: string;
    label: string;
    group: string;
    vi: string;
    noteVi: string;
    sentence: string;
    mode:
      | 'on'
      | 'in'
      | 'under'
      | 'above'
      | 'over'
      | 'below'
      | 'at'
      | 'inside'
      | 'outside'
      | 'near'
      | 'next_to'
      | 'in_front_of'
      | 'behind'
      | 'opposite'
      | 'across'
      | 'between'
      | 'among'
      | 'against';
  };

  const preps: PrepScene[] = [
    { id: 'at', label: 'at', group: 'Điểm / Trong / Trên', vi: 'tại một điểm xác định', noteVi: 'at home, at the station, at the airport', sentence: 'She is waiting at the bus stop.', mode: 'at' },
    { id: 'in', label: 'in', group: 'Điểm / Trong / Trên', vi: 'ở bên trong không gian', noteVi: 'in the room, in the kitchen, in the garden', sentence: 'The cat is in the box.', mode: 'in' },
    { id: 'on', label: 'on', group: 'Điểm / Trong / Trên', vi: 'ở trên (chạm bề mặt)', noteVi: 'on the table, on the wall, on the ceiling', sentence: 'The cat is on the box.', mode: 'on' },
    { id: 'above', label: 'above', group: 'Trên ↔ Dưới', vi: 'cao hơn (cách 1 khoảng)', noteVi: 'Cao hơn mốc, không nhất thiết thẳng đứng', sentence: 'There is a plane above the field.', mode: 'above' },
    { id: 'over', label: 'over', group: 'Trên ↔ Dưới', vi: 'ngay phía trên / vượt qua', noteVi: 'Không chạm bề mặt, bay thẳng qua phía trên', sentence: 'The plane is flying over the box.', mode: 'over' },
    { id: 'under', label: 'under', group: 'Trên ↔ Dưới', vi: 'ở ngay phía dưới', noteVi: 'Ngay dưới bề mặt che phủ (gầm bàn, dưới hộp)', sentence: 'My puppy is sleeping under the table.', mode: 'under' },
    { id: 'below', label: 'below', group: 'Trên ↔ Dưới', vi: 'thấp hơn 1 mốc đo', noteVi: 'VD: 900 feet below sea level (dưới mực nước biển)', sentence: 'The fish swims below the water line.', mode: 'below' },
    { id: 'near', label: 'near', group: 'Gần / Cạnh / Tựa vào', vi: 'ở gần (chưa chạm sát)', noteVi: 'Don\'t sit near the door.', sentence: 'The cat sits near the box.', mode: 'near' },
    { id: 'next to', label: 'by / beside / next to', group: 'Gần / Cạnh / Tựa vào', vi: 'ngay sát bên cạnh', noteVi: '3 từ đồng nghĩa: Come and sit next to / beside / by me.', sentence: 'The cat is next to the box.', mode: 'next_to' },
    { id: 'against', label: 'against', group: 'Gần / Cạnh / Tựa vào', vi: 'tựa vào / dựa sát vào', noteVi: 'Tiếp xúc nghiêng vào tường hoặc vật tựa', sentence: 'I put the ladder against the wall.', mode: 'against' },
    { id: 'inside', label: 'inside', group: 'Trong ↔ Ngoài · Trước ↔ Sau', vi: 'ở phía bên trong nhà/hộp', noteVi: 'Nhấn mạnh bên trong kín hơn "in"', sentence: "Let's go inside the house.", mode: 'inside' },
    { id: 'outside', label: 'outside', group: 'Trong ↔ Ngoài · Trước ↔ Sau', vi: 'ở phía bên ngoài', noteVi: 'Đối lập trực tiếp với inside', sentence: 'They sit at a table outside the house.', mode: 'outside' },
    { id: 'in front of', label: 'in front of', group: 'Trong ↔ Ngoài · Trước ↔ Sau', vi: 'ở phía trước', noteVi: 'There is a garden in front of my house.', sentence: 'The cat is in front of the box.', mode: 'in_front_of' },
    { id: 'behind', label: 'behind', group: 'Trong ↔ Ngoài · Trước ↔ Sau', vi: 'ở phía sau', noteVi: 'The car behind us is very fast.', sentence: 'The cat is behind the box.', mode: 'behind' },
    { id: 'between', label: 'between', group: 'Giữa · Đối diện · Bên kia', vi: 'ở giữa 2 vật / 2 người', noteVi: 'Luôn đi với "and": between A and B', sentence: 'The cat is between Box A and Box B.', mode: 'between' },
    { id: 'among', label: 'among', group: 'Giữa · Đối diện · Bên kia', vi: 'ở giữa đám đông (≥ 3 vật)', noteVi: 'Phân biệt rõ với between (chỉ 2 vật)', sentence: 'The cat is among the four boxes.', mode: 'among' },
    { id: 'opposite', label: 'opposite', group: 'Giữa · Đối diện · Bên kia', vi: 'đối diện trực tiếp', noteVi: 'Quay mặt vào nhau qua khoảng trống/con đường', sentence: 'The bank is opposite the supermarket.', mode: 'opposite' },
    { id: 'across', label: 'across', group: 'Giữa · Đối diện · Bên kia', vi: 'ở bên kia (đường/sông)', noteVi: 'My house is just across the street.', sentence: 'My house is just across the street.', mode: 'across' },
  ];

  const [selectedId, setSelectedId] = useState('on');
  const active = preps.find((p) => p.id === selectedId) ?? preps[0];

  const possessiveCases = [
    {
      id: 'singular',
      tab: '1. Số ít / Bất quy tắc',
      owner: 'My father / The children',
      suffix: "'s",
      object: 'car / room',
      resultEn: "My father's car · The children's room",
      resultVi: 'Xe của bố tôi · Phòng của bọn trẻ',
      ruleVi: 'Danh từ số ít hoặc số nhiều KHÔNG có -s (children, men, women) → thêm đầy đủ \'s.',
    },
    {
      id: 'plural_s',
      tab: '2. Số nhiều tận cùng -s',
      owner: 'The eagles / Students',
      suffix: "'",
      object: 'nest / library',
      resultEn: "The eagles' nest · Students' library",
      resultVi: 'Tổ của đàn đại bàng · Thư viện của học sinh',
      ruleVi: 'Danh từ số nhiều đã có sẵn chữ -s ở cuối → CHỈ thêm dấu nháy đơn \', không thêm chữ s nữa.',
    },
    {
      id: 'compound',
      tab: '3. Danh từ ghép & Cụm từ',
      owner: 'My brother-in-law / The man next door',
      suffix: "'s",
      object: 'guitar / house',
      resultEn: "My brother-in-law's guitar · The man next door's house",
      resultVi: 'Đàn ghi-ta của anh rể tôi · Nhà của bác hàng xóm',
      ruleVi: 'Với danh từ ghép hoặc cả cụm danh từ, ta gắn \'s vào TỪ CUỐI CÙNG của cụm.',
    },
    {
      id: 'special',
      tab: '4. Thời gian · Địa danh · Phương tiện',
      owner: "A week / Europe / The train",
      suffix: "'s",
      object: 'holiday / population / heating system',
      resultEn: "A week's holiday · Europe's population · The train's heating system",
      resultVi: 'Kỳ nghỉ 1 tuần · Dân số châu Âu · Hệ thống sưởi của tàu hỏa',
      ruleVi: 'Ngoài người & động vật, sở hữu cách còn dùng cho thời gian, châu lục/quốc gia/thành phố và tàu xe (Tr.36).',
    },
  ];
  const [possId, setPossId] = useState(possessiveCases[0].id);
  const activePoss = possessiveCases.find((c) => c.id === possId) ?? possessiveCases[0];

  const renderCat = (x: number, y: number, scale = 1) => (
    <g
      style={{
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
        transition: 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <polygon points="-15,-13 -11,-26 -3,-15" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
      <polygon points="15,-13 11,-26 3,-15" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="18" fill="#FBBF24" stroke="#B45309" strokeWidth="2" />
      <circle cx="-5.5" cy="-3" r="2.3" fill="#1E293B" />
      <circle cx="5.5" cy="-3" r="2.3" fill="#1E293B" />
      <polygon points="-2.5,2 2.5,2 0,5" fill="#E11D48" />
      <path d="M -5 7 Q 0 11 5 7" fill="none" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );

  const renderSceneSvg = () => {
    const m = active.mode;
    return (
      <svg viewBox="0 0 320 205" className="w-full max-w-md h-52" role="img" aria-label={active.sentence}>
        <rect x="8" y="156" width="304" height="40" rx="8" fill="#E2E8F0" />
        <line x1="8" y1="156" x2="312" y2="156" stroke="#CBD5E1" strokeWidth="2" />

        {m === 'at' && (
          <>
            <rect x="195" y="64" width="6" height="92" fill="#475569" />
            <rect x="172" y="48" width="52" height="24" rx="5" fill="#0284C7" />
            <text x="198" y="64" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">BUS STOP</text>
            <circle cx="198" cy="156" r="7" fill="#059669" fillOpacity="0.25" stroke="#059669" strokeWidth="2" />
            {renderCat(158, 138)}
          </>
        )}

        {m === 'below' && (
          <>
            <path d="M20 96 Q 60 88 100 96 T 180 96 T 260 96 T 300 96" fill="none" stroke="#0284C7" strokeWidth="3" />
            <rect x="20" y="96" width="280" height="60" fill="#BAE6FD" fillOpacity="0.55" />
            <text x="235" y="88" fill="#0369A1" fontSize="10" fontWeight="700">Mốc mực nước (0m)</text>
            <path d="M160 98v32M155 124l5 6 5-6" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {renderCat(160, 140, 0.85)}
          </>
        )}

        {m === 'against' && (
          <>
            <rect x="210" y="42" width="28" height="114" rx="4" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            <text x="224" y="102" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">WALL</text>
            <line x1="152" y1="156" x2="210" y2="56" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />
            <line x1="168" y1="156" x2="210" y2="82" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />
            <line x1="162" y1="138" x2="177" y2="138" stroke="#D97706" strokeWidth="3" />
            <line x1="175" y1="116" x2="190" y2="116" stroke="#D97706" strokeWidth="3" />
            <line x1="188" y1="94" x2="203" y2="94" stroke="#D97706" strokeWidth="3" />
          </>
        )}

        {(m === 'inside' || m === 'outside') && (
          <>
            <path d="M84 82L160 32l76 50" fill="none" stroke="#0369A1" strokeWidth="3.5" strokeLinejoin="round" />
            <rect x="94" y="82" width="132" height="74" rx="4" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2.5" />
            <text x="160" y="72" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="700">HOUSE</text>
            {renderCat(m === 'inside' ? 160 : 265, 136)}
          </>
        )}

        {(m === 'opposite' || m === 'across') && (
          <>
            <rect x="132" y="46" width="56" height="110" fill="#64748B" />
            <line x1="160" y1="54" x2="160" y2="148" stroke="#F8FAFC" strokeWidth="2.5" strokeDasharray="8 6" />
            <rect x="30" y="76" width="84" height="80" rx="6" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
            <text x="72" y="120" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
              {m === 'opposite' ? 'BANK' : 'YOU'}
            </text>
            <rect x="206" y="76" width="84" height="80" rx="6" fill="#059669" stroke="#047857" strokeWidth="2" />
            <text x="248" y="120" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">
              {m === 'opposite' ? 'MARKET' : 'MY HOUSE'}
            </text>
            <path d="M118 116h84M194 111l8 5-8 5" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}

        {m === 'between' && (
          <>
            <rect x="44" y="96" width="66" height="60" rx="8" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
            <text x="77" y="130" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">Box A</text>
            <rect x="210" y="96" width="66" height="60" rx="8" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
            <text x="243" y="130" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">Box B</text>
            {renderCat(160, 128)}
          </>
        )}

        {m === 'among' && (
          <>
            {[46, 108, 212, 266].map((bx, i) => (
              <rect key={bx} x={bx - 22} y={i % 2 === 0 ? 104 : 92} width="44" height="52" rx="6" fill="#0284C7" fillOpacity="0.85" stroke="#0369A1" strokeWidth="2" />
            ))}
            {renderCat(160, 130, 0.95)}
          </>
        )}

        {['on', 'in', 'under', 'above', 'over', 'near', 'next_to', 'in_front_of', 'behind'].includes(m) && (
          <>
            {m === 'behind' && renderCat(196, 98)}
            {(m === 'above' || m === 'over') && (
              <>
                <path d={m === 'over' ? 'M95 54 Q 160 22 225 54' : 'M160 66v24'} fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="4 4" />
                {renderCat(m === 'above' ? 195 : 160, m === 'above' ? 44 : 50, 0.85)}
              </>
            )}
            <rect
              x="114"
              y="94"
              width="92"
              height="62"
              rx="8"
              fill={m === 'in' ? '#BAE6FD' : '#0284C7'}
              stroke="#0369A1"
              strokeWidth="2"
            />
            {m === 'in' && renderCat(160, 112)}
            {m === 'in' && (
              <rect x="114" y="118" width="92" height="38" rx="4" fill="#0284C7" fillOpacity="0.88" stroke="#0369A1" strokeWidth="2" />
            )}
            {m !== 'in' && (
              <text x="160" y="130" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">BOX</text>
            )}
            {m === 'on' && renderCat(160, 74)}
            {m === 'under' && renderCat(160, 174, 0.85)}
            {m === 'next_to' && renderCat(228, 134)}
            {m === 'near' && renderCat(266, 134)}
            {m === 'in_front_of' && renderCat(132, 148)}
          </>
        )}
      </svg>
    );
  };

  return (
    <div className="space-y-5">
      {/* Studio Mode Switcher */}
      <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100/80 p-1">
        <button
          type="button"
          onClick={() => setStudioTab('prepositions')}
          className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-colors ${
            studioTab === 'prepositions' ? 'bg-emerald-600 text-white' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          1. Bản đồ 17 Giới từ vị trí (Tr.36–38)
        </button>
        <button
          type="button"
          onClick={() => setStudioTab('possessive')}
          className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-colors ${
            studioTab === 'possessive' ? 'bg-sky-600 text-white' : 'text-slate-700 hover:text-slate-900'
          }`}
        >
          2. Máy tạo Sở hữu cách &apos;s / &apos; (Tr.35–36)
        </button>
      </div>

      {studioTab === 'prepositions' && (
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-50/70 p-4 flex flex-col items-center justify-center">
            {renderSceneSvg()}
            <div className="mt-3 w-full rounded-xl bg-white border border-emerald-200 p-3.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-display text-sm sm:text-base font-bold text-slate-900">
                    {active.sentence}
                  </p>
                  <p className="text-xs font-semibold text-emerald-800 mt-1">
                    <strong>{active.label}</strong> = {active.vi}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{active.noteVi}</p>
                </div>
                <SpeakMiniButton text={active.sentence} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-white p-4 flex flex-col justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2.5">
                Chạm 1 trong 18 thẻ giới từ để xem minh họa trực quan
              </p>
              <div className="flex flex-wrap gap-1.5">
                {preps.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedId(p.id)}
                    className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold border transition-colors ${
                      selectedId === p.id
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-500 border-t border-slate-100 pt-2.5">
              Nhóm hiện tại: <strong className="text-slate-800">{active.group}</strong> — giúp nhớ theo cặp đối lập thay vì học rời từng từ.
            </p>
          </div>
        </div>
      )}

      {studioTab === 'possessive' && (
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-4">
          <div className="flex flex-wrap gap-2">
            {possessiveCases.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setPossId(c.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold border transition-colors ${
                  possId === c.id
                    ? 'border-sky-600 bg-sky-600 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300'
                }`}
              >
                {c.tab}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-sky-200 bg-white p-4 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-ipa font-bold">
              <span className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-sky-900">
                {activePoss.owner}
              </span>
              <span className="text-slate-400">+</span>
              <span className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-amber-900">
                {activePoss.suffix}
              </span>
              <span className="text-slate-400">+</span>
              <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-900">
                {activePoss.object}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
              <div>
                <p className="font-display text-base font-extrabold text-slate-900">
                  {activePoss.resultEn}
                </p>
                <p className="text-xs font-semibold text-sky-800 mt-0.5">{activePoss.resultVi}</p>
              </div>
              <SpeakMiniButton text={activePoss.resultEn.replace(/·/g, ', ')} />
            </div>

            <p className="text-xs text-slate-600 bg-slate-50 rounded-lg px-3 py-2 border border-slate-200">
              <strong>Quy tắc ghi nhớ:</strong> {activePoss.ruleVi}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* Unit 3: 3-in-1 Interactive Studio (Book Pages 59–62)
   Tab 1: Present Continuous (3 Usages) + 5 V-ing Spelling Rules Transformer
   Tab 2: Live SVG Character Builder for BE vs HAVE (+)/(-)/(?)
   Tab 3: Page 62 Visual Word Bank (17 Personality Adjectives + 18 Appearance Phrases) */
function PresentContinuousVisual() {
  const [studioTab, setStudioTab] = useState<'tense' | 'avatar' | 'wordbank'>('tense');

  // Tab 1 states
  const [usageIdx, setUsageIdx] = useState(0);
  const [vingIdx, setVingIdx] = useState(0);

  const usages = [
    {
      label: '1. Đang xảy ra ngay lúc nói',
      signal: 'now · right now · at the moment · Look! · Listen!',
      en: 'Listen! The students are singing an English song right now.',
      vi: 'Nghe kìa! Ngay lúc này các bạn học sinh đang hát một bài hát Tiếng Anh.',
    },
    {
      label: '2. Xung quanh thời điểm hiện tại',
      signal: 'at present · this week · today',
      en: 'I am finding a new job at present.',
      vi: 'Hiện tại tôi đang tìm một công việc mới (không nhất thiết ngay giây phút nói).',
    },
    {
      label: '3. Phàn nàn với ALWAYS (!)',
      signal: 'am/is/are + always + V-ing',
      en: 'He is always coming late to class!',
      vi: 'Cậu ấy lúc nào cũng đi học muộn (thể hiện sự khó chịu, phàn nàn)!',
    },
  ];

  const vingRules = [
    {
      ruleTitle: 'Quy tắc 1: Thêm thẳng -ing',
      base: 'watch',
      result: 'watching',
      extra: 'play → playing · read → reading',
      noteVi: 'Phần lớn động từ thông thường chỉ cần gắn trực tiếp -ing vào cuối.',
    },
    {
      ruleTitle: 'Quy tắc 2: Bỏ -e câm + ing',
      base: 'invite',
      result: 'inviting',
      extra: 'write → writing · dance → dancing',
      noteVi: 'Động từ tận cùng bằng 1 chữ -e câm → bỏ -e rồi thêm -ing.',
    },
    {
      ruleTitle: 'Quy tắc 3: Đuôi -ee → Giữ nguyên',
      base: 'see',
      result: 'seeing',
      extra: 'agree → agreeing · free → freeing',
      noteVi: 'Tận cùng là hai chữ -ee → KHÔNG bỏ chữ e nào, thêm thẳng -ing.',
    },
    {
      ruleTitle: 'Quy tắc 4: Đuôi -ie → Đổi thành -y + ing',
      base: 'lie',
      result: 'lying',
      extra: 'die → dying · tie → tying',
      noteVi: 'Nhóm động từ kết thúc bằng -ie đổi -ie thành -y rồi thêm -ing.',
    },
    {
      ruleTitle: 'Quy tắc 5: Gấp đôi phụ âm cuối',
      base: 'swim',
      result: 'swimming',
      extra: 'begin → beginning · run → running',
      noteVi: '1 nguyên âm đứng trước 1 phụ âm cuối (trừ w, x, y) → nhân đôi phụ âm đó!',
    },
  ];

  // Tab 2 states: Live SVG Character Builder for BE vs HAVE
  const [faceShape, setFaceShape] = useState<'oval' | 'round' | 'long' | 'square'>('oval');
  const [hairStyle, setHairStyle] = useState<'short_brown' | 'long_black' | 'curly' | 'ponytail' | 'wavy'>('long_black');
  const [eyeStyle, setEyeStyle] = useState<'big_round' | 'brown' | 'small'>('big_round');
  const [personality, setPersonality] = useState<'kind' | 'creative' | 'cheerful' | 'hardworking' | 'clever'>('creative');
  const [polarity, setPolarity] = useState<'pos' | 'neg' | 'q'>('pos');

  const faceLabelMap = {
    oval: 'an oval face',
    round: 'a round face',
    long: 'a long face',
    square: 'a square face',
  };
  const hairLabelMap = {
    short_brown: 'short brown hair',
    long_black: 'long black hair',
    curly: 'curly hair',
    ponytail: 'a ponytail',
    wavy: 'wavy hair',
  };
  const eyeLabelMap = {
    big_round: 'big round eyes',
    brown: 'brown eyes',
    small: 'small eyes',
  };

  const beSentence =
    polarity === 'pos'
      ? `My best friend is ${personality} and friendly.`
      : polarity === 'neg'
      ? `My best friend isn't cold or lazy.`
      : `Is your best friend ${personality}? — Yes, she is.`;

  const haveSentence =
    polarity === 'pos'
      ? `She has ${faceLabelMap[faceShape]}, ${hairLabelMap[hairStyle]} and ${eyeLabelMap[eyeStyle]}.`
      : polarity === 'neg'
      ? `She doesn't have ${hairStyle === 'short_brown' ? 'long black hair' : 'short brown hair'}.`
      : `Does she have ${eyeLabelMap[eyeStyle]}? — Yes, she does.`;

  // Tab 3: Page 62 Visual Word Bank (17 Personality + 18 Appearance = 35 items)
  const [bankFilter, setBankFilter] = useState<'personality' | 'appearance'>('personality');

  const personalityWords = [
    { en: 'kind', ipa: '/kaɪnd/', vi: 'tốt bụng', ex: 'She is very kind.' },
    { en: 'careful', ipa: '/ˈkeəfl/', vi: 'cẩn thận', ex: 'Nam is careful with his homework.' },
    { en: 'creative', ipa: '/kriˈeɪtɪv/', vi: 'sáng tạo', ex: 'Minh is creative in art class.' },
    { en: 'warm', ipa: '/wɔːm/', vi: 'ấm áp, thân thiện', ex: 'She has a warm smile.' },
    { en: 'polite', ipa: '/pəˈlaɪt/', vi: 'lịch sự', ex: 'He is always polite to teachers.' },
    { en: 'sociable', ipa: '/ˈsəʊʃəbl/', vi: 'hòa đồng', ex: 'Lan is very sociable.' },
    { en: 'patient', ipa: '/ˈpeɪʃnt/', vi: 'kiên nhẫn', ex: 'Our teacher is patient.' },
    { en: 'humorous', ipa: '/ˈhjuːmərəs/', vi: 'hài hước', ex: 'Phong is humorous and fun.' },
    { en: 'hardworking', ipa: '/ˌhɑːdˈwɜːkɪŋ/', vi: 'chăm chỉ', ex: 'She is a hardworking student.' },
    { en: 'cold', ipa: '/kəʊld/', vi: 'lạnh lùng', ex: "He isn't cold; he's just shy." },
    { en: 'clever', ipa: '/ˈklevə(r)/', vi: 'thông minh, lanh lợi', ex: 'Is Linda clever?' },
    { en: 'friendly', ipa: '/ˈfrendli/', vi: 'thân thiện', ex: 'My new classmates are friendly.' },
    { en: 'cheerful', ipa: '/ˈtʃɪəfl/', vi: 'vui vẻ, tươi tắn', ex: 'Mai is always cheerful.' },
    { en: 'easy-going', ipa: '/ˌiːzi ˈɡəʊɪŋ/', vi: 'dễ tính, thoải mái', ex: 'My brother is easy-going.' },
    { en: 'confident', ipa: '/ˈkɒnfɪdənt/', vi: 'tự tin', ex: 'She is confident on stage.' },
    { en: 'honest', ipa: '/ˈɒnɪst/', vi: 'trung thực', ex: 'An honest friend never lies.' },
    { en: 'talkative', ipa: '/ˈtɔːkətɪv/', vi: 'nói nhiều, hoạt ngôn', ex: 'He is a bit talkative in class.' },
  ];

  const appearancePhrases = [
    { en: 'an oval face', ipa: '/ən ˈəʊvl feɪs/', vi: 'khuôn mặt trái xoan' },
    { en: 'a round face', ipa: '/ə raʊnd feɪs/', vi: 'khuôn mặt tròn' },
    { en: 'a long face', ipa: '/ə lɒŋ feɪs/', vi: 'khuôn mặt dài' },
    { en: 'a square face', ipa: '/ə skweə feɪs/', vi: 'khuôn mặt vuông chữ điền' },
    { en: 'short brown hair', ipa: '/ʃɔːt braʊn heə/', vi: 'mái tóc nâu ngắn' },
    { en: 'long black hair', ipa: '/lɒŋ blæk heə/', vi: 'mái tóc đen dài' },
    { en: 'curly hair', ipa: '/ˈkɜːli heə/', vi: 'mái tóc xoăn' },
    { en: 'ponytail', ipa: '/ˈpəʊniteɪl/', vi: 'tóc buộc đuôi ngựa' },
    { en: 'wavy hair', ipa: '/ˈweɪvi heə/', vi: 'mái tóc gợn sóng' },
    { en: 'straight hair', ipa: '/streɪt heə/', vi: 'mái tóc thẳng' },
    { en: 'long legs', ipa: '/lɒŋ leɡz/', vi: 'đôi chân dài' },
    { en: 'full lips', ipa: '/fʊl lɪps/', vi: 'đôi môi dày đầy đặn' },
    { en: 'thin lips', ipa: '/θɪn lɪps/', vi: 'đôi môi mỏng' },
    { en: 'small ears', ipa: '/smɔːl ɪəz/', vi: 'đôi tai nhỏ' },
    { en: 'small mouth', ipa: '/smɔːl maʊθ/', vi: 'miệng nhỏ nhắn' },
    { en: 'brown eyes', ipa: '/braʊn aɪz/', vi: 'đôi mắt màu nâu' },
    { en: 'small eyes', ipa: '/smɔːl aɪz/', vi: 'đôi mắt nhỏ' },
    { en: 'big round eyes', ipa: '/bɪɡ raʊnd aɪz/', vi: 'đôi mắt to tròn' },
  ];

  const activeUsage = usages[usageIdx];
  const activeVing = vingRules[vingIdx];

  return (
    <div className="space-y-4">
      {/* Studio 3-Tab Switcher */}
      <div className="grid gap-2 sm:grid-cols-3">
        {[
          { id: 'tense' as const, label: '1. Hiện tại tiếp diễn & 5 Quy tắc V-ing (Tr.59–61)' },
          { id: 'avatar' as const, label: '2. Xưởng ghép nhân vật BE vs HAVE (Tr.61)' },
          { id: 'wordbank' as const, label: '3. Kho 35 Từ Tính cách & Ngoại hình (Tr.62)' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setStudioTab(tab.id)}
            className={`rounded-xl border px-3 py-2.5 text-xs font-bold text-left transition-colors ${
              studioTab === tab.id
                ? 'border-violet-600 bg-violet-600 text-white'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: PRESENT CONTINUOUS & 5 V-ING RULES */}
      {studioTab === 'tense' && (
        <div className="grid gap-5 lg:grid-cols-2">
          {/* 3 Usages Explorer */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-700">
                3 Cách dùng Hiện tại tiếp diễn (Trang 59–60)
              </span>
              <div className="grid gap-1.5">
                {usages.map((u, idx) => (
                  <button
                    key={u.label}
                    type="button"
                    onClick={() => setUsageIdx(idx)}
                    className={`rounded-lg border px-3 py-2 text-left text-xs font-bold transition-colors ${
                      usageIdx === idx
                        ? 'border-violet-600 bg-violet-600 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-violet-300'
                    }`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-2">
              <p className="font-ipa text-[11px] font-bold text-violet-700">
                Dấu hiệu: {activeUsage.signal}
              </p>
              <p className="font-display text-base font-bold text-slate-900">{activeUsage.en}</p>
              <p className="text-xs text-slate-600">{activeUsage.vi}</p>
              <div className="pt-1 flex justify-end">
                <SpeakMiniButton text={activeUsage.en} />
              </div>
            </div>
          </div>

          {/* 5 V-ing Rules Transformer */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Máy biến đổi 5 Quy tắc thêm đuôi -ING (Trang 60–61)
              </span>
              <div className="flex flex-wrap gap-1.5">
                {vingRules.map((r, idx) => (
                  <button
                    key={r.base}
                    type="button"
                    onClick={() => setVingIdx(idx)}
                    className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition-colors ${
                      vingIdx === idx
                        ? 'border-sky-600 bg-sky-600 text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-300'
                    }`}
                  >
                    #{idx + 1}: {r.base}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 text-center space-y-2">
              <p className="text-xs font-bold text-sky-800">{activeVing.ruleTitle}</p>
              <div className="flex items-center justify-center gap-3 font-display text-2xl font-extrabold">
                <span className="text-slate-700">{activeVing.base}</span>
                <span className="text-sky-600">→</span>
                <span className="text-violet-700">{activeVing.result}</span>
              </div>
              <p className="text-xs text-slate-700">{activeVing.noteVi}</p>
              <p className="font-ipa text-xs font-semibold text-sky-900">{activeVing.extra}</p>
              <div className="pt-1 flex justify-center">
                <SpeakMiniButton text={`${activeVing.base}, ${activeVing.result}`} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LIVE SVG CHARACTER BUILDER FOR BE vs HAVE */}
      {studioTab === 'avatar' && (
        <div className="grid gap-5 lg:grid-cols-12">
          {/* Left: Live SVG Portrait */}
          <div className="lg:col-span-5 rounded-xl border border-violet-200 bg-violet-50/50 p-5 flex flex-col items-center justify-between gap-4">
            <div className="w-full flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-800">
                Chân dung người bạn trực quan
              </span>
              <span className="font-ipa text-xs font-bold text-violet-700">{personality}</span>
            </div>

            <svg viewBox="0 0 180 180" className="h-44 w-44 rounded-2xl bg-white border border-violet-200" fill="none" aria-hidden="true">
              {/* Hair back layer */}
              {hairStyle === 'long_black' && (
                <path d="M44 74c0-32 20-48 46-48s46 16 46 48v70H44V74Z" fill="#1E293B" />
              )}
              {hairStyle === 'wavy' && (
                <path d="M42 74c0-32 22-48 48-48s48 16 48 48c4 14-6 26 2 42s-4 28-14 28H54c-10 0-20-12-12-28s-2-28 0-42Z" fill="#451A03" />
              )}
              {hairStyle === 'curly' && (
                <g fill="#3F2E21">
                  <circle cx="52" cy="64" r="16" />
                  <circle cx="128" cy="64" r="16" />
                  <circle cx="46" cy="92" r="15" />
                  <circle cx="134" cy="92" r="15" />
                  <circle cx="66" cy="44" r="16" />
                  <circle cx="90" cy="38" r="17" />
                  <circle cx="114" cy="44" r="16" />
                </g>
              )}
              {hairStyle === 'ponytail' && (
                <>
                  <path d="M126 56c24 2 30 34 18 66-8-10-12-24-18-32" fill="#1E293B" />
                  <circle cx="127" cy="57" r="5" fill="#EC4899" />
                </>
              )}

              {/* Neck & Shirt */}
              <rect x="78" y="132" width="24" height="20" fill="#FDE68A" />
              <path d="M46 178c4-22 22-30 44-30s40 8 44 30H46Z" fill="#7C3AED" />

              {/* Ears */}
              <circle cx="54" cy="94" r="7" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
              <circle cx="126" cy="94" r="7" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />

              {/* Face shape */}
              {faceShape === 'oval' && (
                <ellipse cx="90" cy="92" rx="34" ry="44" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
              )}
              {faceShape === 'round' && (
                <circle cx="90" cy="94" r="38" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
              )}
              {faceShape === 'long' && (
                <rect x="59" y="46" width="62" height="92" rx="30" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
              )}
              {faceShape === 'square' && (
                <rect x="54" y="54" width="72" height="78" rx="14" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
              )}

              {/* Hair front bangs */}
              {hairStyle === 'short_brown' && (
                <path d="M54 78c2-24 18-36 36-36s34 12 36 36c-12-10-22-14-36-14s-24 4-36 14Z" fill="#78350F" />
              )}
              {(hairStyle === 'long_black' || hairStyle === 'ponytail') && (
                <path d="M54 76c4-22 18-34 36-34s32 12 36 34c-10-8-22-12-36-12s-26 4-36 12Z" fill="#1E293B" />
              )}
              {hairStyle === 'wavy' && (
                <path d="M54 76c4-22 18-34 36-34s32 12 36 34c-12-8-24-10-36-10s-24 2-36 10Z" fill="#451A03" />
              )}

              {/* Eyes */}
              {eyeStyle === 'big_round' && (
                <>
                  <circle cx="75" cy="90" r="8" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.8" />
                  <circle cx="105" cy="90" r="8" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.8" />
                  <circle cx="75" cy="90" r="4.5" fill="#1E293B" />
                  <circle cx="105" cy="90" r="4.5" fill="#1E293B" />
                  <circle cx="77" cy="88" r="1.5" fill="#FFFFFF" />
                  <circle cx="107" cy="88" r="1.5" fill="#FFFFFF" />
                </>
              )}
              {eyeStyle === 'brown' && (
                <>
                  <ellipse cx="75" cy="90" rx="7" ry="5.5" fill="#FFFFFF" stroke="#78350F" strokeWidth="1.6" />
                  <ellipse cx="105" cy="90" rx="7" ry="5.5" fill="#FFFFFF" stroke="#78350F" strokeWidth="1.6" />
                  <circle cx="75" cy="90" r="3.8" fill="#78350F" />
                  <circle cx="105" cy="90" r="3.8" fill="#78350F" />
                </>
              )}
              {eyeStyle === 'small' && (
                <>
                  <circle cx="75" cy="90" r="3.2" fill="#1E293B" />
                  <circle cx="105" cy="90" r="3.2" fill="#1E293B" />
                </>
              )}

              {/* Nose & Smile */}
              <path d="M90 95v9" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M78 113c4 6 20 6 24 0" stroke="#E11D48" strokeWidth="2.6" strokeLinecap="round" />
            </svg>

            <div className="inline-flex rounded-xl border border-violet-200 bg-white p-1">
              {([
                { id: 'pos', label: 'Khẳng định (+)' },
                { id: 'neg', label: 'Phủ định (-)' },
                { id: 'q', label: 'Nghi vấn (?)' },
              ] as const).map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPolarity(p.id)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                    polarity === p.id ? 'bg-violet-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Feature Controls + Live BE/HAVE Output */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 text-xs">
              <div>
                <p className="font-bold text-slate-600 mb-1.5">Khuôn mặt (dùng HAVE + a/an):</p>
                <div className="flex flex-wrap gap-1.5">
                  {(['oval', 'round', 'long', 'square'] as const).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFaceShape(f)}
                      className={`rounded-lg border px-2.5 py-1 font-semibold ${
                        faceShape === f ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'
                      }`}
                    >
                      {faceLabelMap[f]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold text-slate-600 mb-1.5">Mái tóc (dùng HAVE — không có a/an với hair):</p>
                <div className="flex flex-wrap gap-1.5">
                  {(['short_brown', 'long_black', 'curly', 'ponytail', 'wavy'] as const).map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setHairStyle(h)}
                      className={`rounded-lg border px-2.5 py-1 font-semibold ${
                        hairStyle === h ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'
                      }`}
                    >
                      {hairLabelMap[h]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="font-bold text-slate-600 mb-1.5">Đôi mắt (HAVE):</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(['big_round', 'brown', 'small'] as const).map((e) => (
                      <button
                        key={e}
                        type="button"
                        onClick={() => setEyeStyle(e)}
                        className={`rounded-lg border px-2 py-1 font-semibold ${
                          eyeStyle === e ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'
                        }`}
                      >
                        {eyeLabelMap[e]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-slate-600 mb-1.5">Tính cách (BE + Tính từ):</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(['kind', 'creative', 'cheerful', 'hardworking', 'clever'] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPersonality(p)}
                        className={`rounded-lg border px-2 py-1 font-semibold ${
                          personality === p ? 'border-violet-600 bg-violet-600 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live BE vs HAVE Cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-3.5 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-violet-800">
                  Dùng BE (+ Tính cách)
                </p>
                <p className="font-display text-sm font-bold text-slate-900">{beSentence}</p>
                <SpeakMiniButton text={beSentence} />
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Dùng HAVE (+ Bộ phận cơ thể)
                </p>
                <p className="font-display text-sm font-bold text-slate-900">{haveSentence}</p>
                <SpeakMiniButton text={haveSentence} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PAGE 62 VISUAL WORD BANK (17 PERSONALITY + 18 APPEARANCE) */}
      {studioTab === 'wordbank' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-violet-800">
                Kho 35 từ &amp; cụm từ miêu tả bạn bè chuẩn Sách Trang 62
              </p>
              <p className="text-xs text-slate-500">
                Chạm từng thẻ để nghe phát âm tiếng Anh bản ngữ ngay lập tức
              </p>
            </div>
            <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
              <button
                type="button"
                onClick={() => setBankFilter('personality')}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                  bankFilter === 'personality' ? 'bg-violet-600 text-white' : 'text-slate-600'
                }`}
              >
                17 Tính từ Tính cách (BE)
              </button>
              <button
                type="button"
                onClick={() => setBankFilter('appearance')}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                  bankFilter === 'appearance' ? 'bg-emerald-600 text-white' : 'text-slate-600'
                }`}
              >
                18 Cụm từ Ngoại hình (HAVE)
              </button>
            </div>
          </div>

          {bankFilter === 'personality' ? (
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {personalityWords.map((w) => (
                <button
                  key={w.en}
                  type="button"
                  onClick={() => speakEnglish(w.en)}
                  className="rounded-xl border border-slate-200 bg-white p-3 text-left hover:border-violet-300 hover:bg-violet-50/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-extrabold text-slate-900">{w.en}</span>
                    <Volume2 className="h-3.5 w-3.5 text-violet-600 shrink-0" />
                  </div>
                  <p className="font-ipa text-[11px] text-violet-700">{w.ipa}</p>
                  <p className="text-xs font-semibold text-slate-700 mt-0.5">{w.vi}</p>
                  <p className="text-[11px] text-slate-500 italic mt-1">{w.ex}</p>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {appearancePhrases.map((p) => (
                <button
                  key={p.en}
                  type="button"
                  onClick={() => speakEnglish(p.en)}
                  className="rounded-xl border border-slate-200 bg-white p-3 text-left hover:border-emerald-300 hover:bg-emerald-50/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-extrabold text-slate-900">{p.en}</span>
                    <Volume2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  </div>
                  <p className="font-ipa text-[11px] text-emerald-700">{p.ipa}</p>
                  <p className="text-xs font-semibold text-slate-700 mt-0.5">{p.vi}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* Unit 4: Interactive Comparative Studio (Book pp. 84–85) */
function ComparativeScaleVisual() {
  const [studioTab, setStudioTab] = useState<'cities' | 'rules' | 'irregular'>('cities');

  const metrics = [
    { key: 'noisy', label: 'Độ ồn ào (noisy)', type: 'Ngắn (-y → -ier)', aVal: 88, bVal: 32, sentence: 'Ha Noi is noisier than Da Lat.', rule: 'noisy → noisier' },
    { key: 'big', label: 'Diện tích (big)', type: 'Ngắn (CVC gấp đôi g)', aVal: 92, bVal: 42, sentence: 'Ha Noi is bigger than Da Lat.', rule: 'big → bigger' },
    { key: 'narrow', label: 'Phố nhỏ (narrow)', type: '2 âm tiết đuôi -ow', aVal: 76, bVal: 44, sentence: 'Old streets in Ha Noi are narrower than in Da Lat.', rule: 'narrow → narrower / more narrow' },
    { key: 'peaceful', label: 'Yên bình (peaceful)', type: 'Tính từ dài (more)', aVal: 35, bVal: 90, sentence: 'Da Lat is more peaceful than Ha Noi.', rule: 'peaceful → more peaceful' },
    { key: 'expensive', label: 'Chi phí (expensive)', type: 'Tính từ dài (more)', aVal: 82, bVal: 55, sentence: 'Ha Noi is more expensive than Da Lat.', rule: 'expensive → more expensive' },
    { key: 'good', label: 'Không khí (good)', type: 'Bất quy tắc', aVal: 50, bVal: 94, sentence: 'The air in Da Lat is better than in Ha Noi.', rule: 'good → better' },
  ];
  const [idx, setIdx] = useState(0);
  const m = metrics[idx];

  const ruleCards = [
    {
      id: 'r1',
      title: '1. Tính từ 1 âm tiết thông thường',
      formula: 'adj + -er',
      noteVi: 'Hầu hết tính từ ngắn 1 âm tiết chỉ cần thêm trực tiếp đuôi -er.',
      samples: [
        { base: 'tall', comp: 'taller', ex: 'Nam is taller than Minh.' },
        { base: 'short', comp: 'shorter', ex: 'The chair is shorter than the table.' },
        { base: 'cheap', comp: 'cheaper', ex: 'Country life is cheaper than city life.' },
      ],
    },
    {
      id: 'r2',
      title: '2. Tính từ 1 âm tiết tận cùng bằng -e',
      formula: 'adj + -r',
      noteVi: 'Đã có sẵn chữ "e" ở cuối nên chỉ cần thêm duy nhất chữ "-r".',
      samples: [
        { base: 'large', comp: 'larger', ex: 'My new flat is larger than the old one.' },
        { base: 'wide', comp: 'wider', ex: 'This road is wider than that lane.' },
        { base: 'nice', comp: 'nicer', ex: 'The weather today is nicer than yesterday.' },
      ],
    },
    {
      id: 'r3',
      title: '3. Quy tắc 1-1-1 (CVC: 1 nguyên âm + 1 phụ âm)',
      formula: 'Gấp đôi phụ âm cuối + -er',
      noteVi: 'Từ 1 âm tiết kết thúc bằng 1 nguyên âm (a,e,i,o,u) + 1 phụ âm (trừ w,x,y) → gấp đôi phụ âm cuối.',
      samples: [
        { base: 'big', comp: 'bigger', ex: 'Ha Noi is bigger than Da Nang.' },
        { base: 'hot', comp: 'hotter', ex: 'Summer is hotter than spring.' },
        { base: 'thin', comp: 'thinner', ex: 'You look thinner than last month.' },
      ],
    },
    {
      id: 'r4',
      title: '4. Tính từ 2 âm tiết tận cùng bằng phụ âm + -y',
      formula: 'Đổi y → i + -er',
      noteVi: 'Tính từ 2 âm tiết kết thúc bằng -y được xem như tính từ ngắn khi so sánh.',
      samples: [
        { base: 'noisy', comp: 'noisier', ex: 'The city is noisier than the countryside.' },
        { base: 'heavy', comp: 'heavier', ex: 'Water is heavier than oil.' },
        { base: 'easy', comp: 'easier', ex: 'This exercise is easier than that one.' },
      ],
    },
    {
      id: 'r5',
      title: '5. Tính từ dài (≥ 2 âm tiết) & đuôi -ed / -ing / -ful',
      formula: 'more + adj + than',
      noteVi: 'KHÔNG thêm -er; đặt "more" ngay phía trước tính từ dài nguyên gốc.',
      samples: [
        { base: 'expensive', comp: 'more expensive', ex: 'A car is more expensive than a bike.' },
        { base: 'peaceful', comp: 'more peaceful', ex: 'A village is more peaceful than a city.' },
        { base: 'crowded', comp: 'more crowded', ex: 'The market is more crowded today.' },
      ],
    },
  ];
  const [activeRuleId, setActiveRuleId] = useState(ruleCards[0].id);
  const activeRule = ruleCards.find((r) => r.id === activeRuleId) ?? ruleCards[0];

  const irregularRows = [
    { base: 'good / well', comp: 'better', meaning: 'tốt hơn / khỏe hơn', ex: 'My English is better than last year.' },
    { base: 'bad / badly', comp: 'worse', meaning: 'tệ hơn / kém hơn', ex: 'The weather today is worse than yesterday.' },
    { base: 'many / much', comp: 'more', meaning: 'nhiều hơn', ex: 'There are more shops in this street.' },
    { base: 'little', comp: 'less', meaning: 'ít hơn', ex: 'This road has less traffic than before.' },
    { base: 'far', comp: 'farther / further', meaning: 'xa hơn (farther: khoảng cách địa lý · further: trừu tượng/thêm nữa)', ex: 'The stadium is farther than the post office.' },
  ];

  const twoFormAdjs = [
    { base: 'quiet', forms: 'quieter / more quiet', meaning: 'yên tĩnh hơn' },
    { base: 'clever', forms: 'cleverer / more clever', meaning: 'thông minh hơn' },
    { base: 'narrow', forms: 'narrower / more narrow', meaning: 'hẹp hơn' },
    { base: 'simple', forms: 'simpler / more simple', meaning: 'đơn giản hơn' },
  ];

  return (
    <div className="space-y-4">
      {/* Studio Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'cities' as const, label: '1. Biểu đồ so sánh 2 thành phố' },
            { id: 'rules' as const, label: '2. Máy biến đổi 5 quy tắc (-er / more)' },
            { id: 'irregular' as const, label: '3. 5 Bất quy tắc & 4 Tính từ 2 dạng (Tr.85)' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setStudioTab(t.id)}
              className={`rounded-xl px-3.5 py-2 text-xs font-bold border transition-colors ${
                studioTab === t.id
                  ? 'border-amber-600 bg-amber-600 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-amber-50'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <span className="text-[11px] font-semibold text-amber-800">
          Sách Ngữ pháp Tr.84–85
        </span>
      </div>

      {/* TAB 1: City Bar Scale */}
      {studioTab === 'cities' && (
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-slate-50/70 p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display text-sm font-bold text-slate-900">Biểu đồ so sánh 2 thành phố</h4>
              <span className="text-xs font-semibold text-amber-700">{m.type}</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Hà Nội</span>
                  <span className="tabular-nums">{m.aVal}/100</span>
                </div>
                <div className="h-4 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-500 transition-all duration-300"
                    style={{ width: `${m.aVal}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Đà Lạt</span>
                  <span className="tabular-nums">{m.bVal}/100</span>
                </div>
                <div className="h-4 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-sky-600 transition-all duration-300"
                    style={{ width: `${m.bVal}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-2 rounded-lg bg-white border border-slate-200 p-3">
              <div>
                <p className="font-display text-sm font-bold text-slate-900">{m.sentence}</p>
                <p className="font-ipa text-xs text-amber-700 mt-0.5">{m.rule}</p>
              </div>
              <SpeakMiniButton text={m.sentence} />
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Chọn tiêu chí so sánh
            </p>
            <div className="flex flex-col gap-2">
              {metrics.map((item, i) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setIdx(i)}
                  className={`flex items-center justify-between rounded-lg px-3.5 py-2 text-left text-xs font-semibold border transition-colors ${
                    i === idx
                      ? 'border-amber-500 bg-amber-50 text-amber-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-ipa text-[11px] opacity-80">{item.rule}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 5 Morph Rules */}
      {studioTab === 'rules' && (
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-2">
            {ruleCards.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setActiveRuleId(r.id)}
                className={`w-full rounded-xl border p-3 text-left transition-colors ${
                  activeRuleId === r.id
                    ? 'border-amber-500 bg-amber-50/90 text-amber-950'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <p className="text-xs font-bold">{r.title}</p>
                <p className="font-ipa text-[11px] font-semibold text-amber-700 mt-0.5">{r.formula}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 rounded-xl border border-amber-200 bg-amber-50/40 p-5 flex flex-col justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-display text-base font-extrabold text-slate-900">{activeRule.title}</h4>
                <span className="rounded-lg bg-amber-600 px-2.5 py-1 font-ipa text-xs font-bold text-white">
                  {activeRule.formula}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">{activeRule.noteVi}</p>

              <div className="mt-4 space-y-2.5">
                {activeRule.samples.map((s) => (
                  <div
                    key={s.base}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white p-3"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <span className="text-slate-600">{s.base}</span>
                        <span className="text-amber-600">→</span>
                        <span className="text-amber-800">{s.comp}</span>
                      </div>
                      <p className="text-xs text-slate-600">{s.ex}</p>
                    </div>
                    <SpeakMiniButton text={s.ex} />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-600">
              <strong>Mẹo tránh mất điểm:</strong> Tuyệt đối KHÔNG viết gộp <span className="line-through text-rose-600">more cheaper</span> hay <span className="line-through text-rose-600">more expensiver</span>. Đã dùng <strong>more</strong> thì giữ nguyên tính từ gốc!
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Irregulars & 2-Form Adjectives (Book p.85) */}
      {studioTab === 'irregular' && (
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="font-display text-sm font-extrabold text-slate-900 mb-3">
              5 Tính từ / Trạng từ So sánh hơn Bất quy tắc (Bắt buộc thuộc lòng)
            </h4>
            <div className="divide-y divide-slate-100">
              {irregularRows.map((row) => (
                <div key={row.base} className="py-2.5 flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
                      <span className="text-slate-700">{row.base}</span>
                      <span className="text-amber-600">→</span>
                      <span className="font-ipa text-amber-800">{row.comp}</span>
                    </div>
                    <p className="text-xs text-slate-600">{row.meaning}</p>
                    <p className="text-xs font-medium text-slate-800">{row.ex}</p>
                  </div>
                  <SpeakMiniButton text={row.ex} />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-amber-200 bg-amber-50/50 p-4 flex flex-col justify-between gap-4">
            <div>
              <h4 className="font-display text-sm font-extrabold text-amber-950 mb-1">
                4 Tính từ 2 âm tiết dùng được CẢ 2 DẠNG
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                Các tính từ 2 âm tiết tận cùng bằng <strong>-et, -er, -ow, -le</strong> có thể thêm <strong>-er</strong> hoặc đặt <strong>more</strong> phía trước đều đúng (Tr.85):
              </p>
              <div className="space-y-2">
                {twoFormAdjs.map((adj) => (
                  <div key={adj.base} className="rounded-lg border border-amber-200/80 bg-white px-3 py-2 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {adj.base} <span className="text-slate-400 font-normal">({adj.meaning})</span>
                      </p>
                      <p className="font-ipa text-xs font-semibold text-amber-700">{adj.forms}</p>
                    </div>
                    <SpeakMiniButton text={adj.forms.replace(' / ', ', ')} />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700">
              <strong>Nhấn mạnh mức độ:</strong> Thêm <strong>much / far / a lot</strong> trước so sánh hơn để nói &ldquo;hơn rất nhiều&rdquo;. VD: <em>Living in the city is <strong>much</strong> more expensive.</em>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


/* Unit 5: 3-Tab Interactive Grammar Studio (Book pp.107–109: C/U Sorter, 5 Uncountable Groups, 3 Usages of Must & Mustn't) */
function CountableMustVisual() {
  const [tab, setTab] = useState<'sorter' | 'groups' | 'must'>('sorter');
  const [selectedWordIdx, setSelectedWordIdx] = useState(0);
  const [selectedGroupIdx, setSelectedGroupIdx] = useState(0);
  const [selectedMustIdx, setSelectedMustIdx] = useState(0);

  const items = [
    { word: 'apple', countable: true, phrase: 'an apple / three apples / a few apples', rule: 'Đứng độc lập, đếm 1, 2, 3 được → dùng a/an, số đếm, many, a few.' },
    { word: 'rice', countable: false, phrase: 'some rice / a little rice / a kilo of rice (KHÔNG nói "one rice")', rule: 'Hạt nhỏ không đếm từng hạt → luôn chia số ít, dùng much, a little, some.' },
    { word: 'island', countable: true, phrase: 'an island / many islands / a few islands', rule: 'Danh từ đếm được số ít dùng a/an; số nhiều thêm -s/-es.' },
    { word: 'suncream', countable: false, phrase: 'much suncream / a little suncream (KHÔNG thêm -s)', rule: 'Dạng kem/chất lỏng → không đếm được, không dùng a/an.' },
    { word: 'umbrella', countable: true, phrase: 'an umbrella / two umbrellas', rule: 'Bắt đầu bằng nguyên âm /ʌ/ nên số ít dùng "an umbrella".' },
    { word: 'cheese', countable: false, phrase: 'some cheese / a little cheese (KHÔNG nói "two cheese")', rule: 'Thực phẩm khối → không đếm được, muốn đếm dùng "a slice of cheese".' },
    { word: 'backpack', countable: true, phrase: 'a backpack / five backpacks', rule: 'Đồ vật tách rời → đếm được (C).' },
    { word: 'luggage', countable: false, phrase: 'a lot of luggage / some luggage (KHÔNG thêm -s)', rule: 'Danh từ tập hợp (như baggage, furniture, money) → luôn KHÔNG đếm được (U).' },
  ];

  const currentWord = items[selectedWordIdx];
  const currentGroup = U5_UNCOUNTABLE_GROUPS[selectedGroupIdx];
  const currentMust = U5_MUST_USAGES[selectedMustIdx];

  return (
    <div className="space-y-4">
      {/* 3-Mode Teal Switcher */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'sorter' as const, label: '1. Phân loại Đếm được (C) & Không đếm được (U)' },
          { id: 'groups' as const, label: '2. 5 Nhóm Danh từ Không đếm được (Tr.108)' },
          { id: 'must' as const, label: "3. 3 Cách dùng MUST & Luật cấm MUSTN'T (Tr.108–109)" },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-xl border px-3.5 py-2 text-xs font-bold transition-colors ${
              tab === t.id
                ? 'border-teal-600 bg-teal-600 text-white shadow-2xs'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-teal-50 hover:border-teal-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB 1: COUNTABLE VS UNCOUNTABLE SORTER */}
      {tab === 'sorter' && (
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Chạm vào từng danh từ (Tr.107–108) để xem quy tắc đi kèm
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {items.map((item, idx) => (
                <button
                  key={item.word}
                  type="button"
                  onClick={() => {
                    setSelectedWordIdx(idx);
                    speakEnglish(item.word);
                  }}
                  className={`rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold border transition-all ${
                    selectedWordIdx === idx
                      ? item.countable
                        ? 'border-sky-600 bg-sky-600 text-white shadow-xs'
                        : 'border-amber-600 bg-amber-600 text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {item.word}
                </button>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                    currentWord.countable ? 'text-sky-700' : 'text-amber-700'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {currentWord.countable
                    ? 'DANH TỪ ĐẾM ĐƯỢC (Countable — C)'
                    : 'DANH TỪ KHÔNG ĐẾM ĐƯỢC (Uncountable — U)'}
                </span>
                <SpeakMiniButton text={currentWord.word} />
              </div>
              <p className="font-ipa text-sm font-bold text-slate-900">{currentWord.phrase}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{currentWord.rule}</p>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Bảng đối chiếu nhanh lượng từ đi kèm
            </p>
            <div className="space-y-2.5 text-xs">
              <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3 space-y-1">
                <p className="font-bold text-sky-900">Đếm được (C): a bike, an umbrella, three balls</p>
                <p className="text-sky-800">
                  Dùng với: <span className="font-ipa font-bold">a / an · số đếm · many · a few · some / any</span>
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3 space-y-1">
                <p className="font-bold text-amber-900">Không đếm được (U): water, rice, money, homework</p>
                <p className="text-amber-800">
                  Dùng với: <span className="font-ipa font-bold">much · a little · some / any · a lot of</span> (KHÔNG a/an, KHÔNG -s)
                </p>
              </div>
              <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-3 text-rose-900">
                <strong>Bẫy hay gặp:</strong> Không nói <em>one rice, two cheese, three tea</em> ❌
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 5 UNCOUNTABLE GROUPS (BOOK P.108) */}
      {tab === 'groups' && (
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap gap-2">
            {U5_UNCOUNTABLE_GROUPS.map((grp, idx) => (
              <button
                key={grp.id}
                type="button"
                onClick={() => setSelectedGroupIdx(idx)}
                className={`rounded-xl border px-3 py-2 text-xs font-bold transition-colors ${
                  selectedGroupIdx === idx
                    ? 'border-teal-600 bg-teal-600 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-teal-50'
                }`}
              >
                {grp.titleVi}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 space-y-3">
            <div>
              <h4 className="font-display text-base font-bold text-slate-900">
                {currentGroup.titleVi}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">{currentGroup.subtitleVi}</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {currentGroup.words.map((w) => (
                <button
                  key={w.en}
                  type="button"
                  onClick={() => speakEnglish(w.en)}
                  className="flex items-center justify-between gap-2 rounded-xl border border-teal-200 bg-teal-50/40 px-3 py-2.5 text-left hover:bg-teal-100/70 transition-colors"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-900">{w.en}</p>
                    <p className="text-[11px] text-slate-600">
                      <span className="font-ipa text-teal-800">{w.ipa}</span> · {w.vi}
                    </p>
                  </div>
                  <Volume2 className="h-4 w-4 shrink-0 text-teal-700" />
                </button>
              ))}
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-950 font-medium">
              <strong>Mẹo nhớ nhanh:</strong> {currentGroup.tipVi}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 3 USAGES OF MUST & MUSTN'T (BOOK PP.108–109) */}
      {tab === 'must' && (
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-4">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {U5_MUST_USAGES.map((u, idx) => {
              const active = selectedMustIdx === idx;
              const isProhibit = u.polarity === 'mustnt';
              return (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => setSelectedMustIdx(idx)}
                  className={`rounded-xl border p-3 text-left transition-colors ${
                    active
                      ? isProhibit
                        ? 'border-rose-600 bg-rose-600 text-white'
                        : 'border-teal-600 bg-teal-600 text-white'
                      : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <p
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      active
                        ? 'text-white/80'
                        : isProhibit
                          ? 'text-rose-700'
                          : 'text-teal-700'
                    }`}
                  >
                    {u.badge}
                  </p>
                  <p className="text-xs font-bold mt-0.5 line-clamp-2">{u.titleVi}</p>
                </button>
              );
            })}
          </div>

          <div
            className={`rounded-xl border bg-white p-4 sm:p-5 space-y-3 ${
              currentMust.polarity === 'mustnt' ? 'border-rose-200' : 'border-teal-200'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {currentMust.polarity === 'mustnt' ? (
                  <XCircle className="h-5 w-5 text-rose-600" />
                ) : (
                  <CheckCircle2 className="h-5 w-5 text-teal-600" />
                )}
                <h4 className="font-display text-base font-bold text-slate-900">
                  {currentMust.titleVi}
                </h4>
              </div>
              <span
                className={`rounded-lg border px-3 py-1 font-ipa text-xs font-bold ${
                  currentMust.polarity === 'mustnt'
                    ? 'border-rose-200 bg-rose-50 text-rose-800'
                    : 'border-teal-200 bg-teal-50 text-teal-800'
                }`}
              >
                {currentMust.formula}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{currentMust.descVi}</p>

            <div className="space-y-2">
              {currentMust.examples.map((ex) => (
                <div
                  key={ex.en}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-900">{ex.en}</p>
                    <p className="text-xs text-slate-600">{ex.vi}</p>
                  </div>
                  <SpeakMiniButton text={ex.en} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Unit 6: 3-Tab Grammar Studio (Book pp.129–130: Should/Shouldn't, Some/Any 5 Scenarios, Should vs Must) */
function TetSomeAnyVisual() {
  const [studioTab, setStudioTab] = useState<'should' | 'some_any' | 'compare'>('should');

  // Tab 1: Should / Shouldn't forms & 2 textbook usages (Book pp.129–130)
  const shouldForms = [
    {
      id: 'pos',
      label: '(+) Khẳng định',
      formula: 'S + should + V (nguyên thể)',
      exampleEn: 'We should help our parents clean the house before Tet.',
      exampleVi: 'Chúng ta nên giúp bố mẹ dọn dẹp nhà cửa trước Tết.',
      note: 'Dùng cho mọi chủ ngữ (I/you/we/they/he/she/it), động từ phía sau luôn giữ nguyên mẫu (không chia -s/-es, không có "to").',
    },
    {
      id: 'neg',
      label: '(-) Phủ định',
      formula: "S + shouldn't (should not) + V (nguyên thể)",
      exampleEn: "Children shouldn't eat too many sweets at Tet.",
      exampleVi: 'Trẻ em không nên ăn quá nhiều đồ ngọt vào dịp Tết.',
      note: 'Khuyên ai KHÔNG nên làm gì. Nhớ viết tắt: should not = shouldn\'t.',
    },
    {
      id: 'ask',
      label: '(?) Nghi vấn & Nghi ngờ',
      formula: '(Wh-) + Should + S + V (nguyên thể)?',
      exampleEn: 'Should we visit our grandparents on the first day of Tet?',
      exampleVi: 'Chúng ta có nên đi thăm ông bà vào mùng 1 Tết không?',
      note: 'Trả lời: Yes, S + should / No, S + shouldn\'t. Đặc biệt (Tr.130): Dùng diễn tả sự nghi ngờ như "How should I know?" (Sao tôi biết được?) hoặc "Why should he think that?".',
    },
  ];
  const [shouldIdx, setShouldIdx] = useState(0);
  const currentShould = shouldForms[shouldIdx];

  // Tab 2: Some / Any 5 scenarios (Book p.130)
  const someAnyModes = [
    {
      id: 'aff',
      label: '1. Khẳng định (+)',
      word: 'SOME',
      sentence: 'I need some milk for this cake.',
      vi: 'Tôi cần một ít sữa cho chiếc bánh này.',
      note: 'Câu khẳng định đi với danh từ đếm được số nhiều (some books) hoặc không đếm được (some milk).',
    },
    {
      id: 'offer',
      label: '2. Lời mời (Would you like)',
      word: 'SOME',
      sentence: 'Would you like some orange juice?',
      vi: 'Bạn có muốn uống một chút nước cam không?',
      note: 'Ngoại lệ cực hay ra thi (Tr.130): Dù là câu hỏi nhưng mang ý MỜI lịch sự (Would you like... / Do you want...) → dùng SOME!',
    },
    {
      id: 'request',
      label: '3. Đề nghị (May/Can I)',
      word: 'SOME',
      sentence: 'May I have some coffee, please?',
      vi: 'Cho tôi xin một chút cà phê được không?',
      note: 'Câu hỏi mang ý ĐỀ NGHỊ / XIN PHÉP (May I have... / Can I have...) khi kỳ vọng câu trả lời "Có" → dùng SOME!',
    },
    {
      id: 'neg',
      label: '4. Phủ định (-)',
      word: 'ANY',
      sentence: "There isn't any sugar left in the jar.",
      vi: 'Không còn chút đường nào trong lọ cả.',
      note: 'Trong câu phủ định có "not" (isn\'t, aren\'t, don\'t, doesn\'t, can\'t) → luôn dùng ANY.',
    },
    {
      id: 'ask',
      label: '5. Hỏi thông thường (?)',
      word: 'ANY',
      sentence: 'Are there any flowers in your garden?',
      vi: 'Có bông hoa nào trong vườn nhà bạn không?',
      note: 'Câu hỏi thông tin bình thường (chưa biết có hay không) → luôn dùng ANY.',
    },
  ];
  const [modeIdx, setModeIdx] = useState(0);
  const activeMode = someAnyModes[modeIdx];

  return (
    <div className="space-y-4">
      {/* Studio Mode Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {[
          { id: 'should' as const, title: '1. Should / Shouldn\'t', sub: 'Cấu trúc & 2 cách dùng (Tr.129–130)' },
          { id: 'some_any' as const, title: '2. Bộ chuyển đổi Some / Any', sub: '5 tình huống chuẩn SGK (Tr.130)' },
          { id: 'compare' as const, title: '3. So sánh Should vs Must', sub: 'Phân biệt nhanh Unit 5 & Unit 6' },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setStudioTab(t.id)}
            className={`rounded-xl border px-3.5 py-2.5 text-left transition-colors ${
              studioTab === t.id
                ? 'border-rose-600 bg-rose-600 text-white'
                : 'border-slate-200 bg-slate-50/70 text-slate-800 hover:bg-rose-50/60'
            }`}
          >
            <p className="font-display text-xs sm:text-sm font-bold">{t.title}</p>
            <p className={`text-[11px] mt-0.5 ${studioTab === t.id ? 'text-rose-100' : 'text-slate-500'}`}>
              {t.sub}
            </p>
          </button>
        ))}
      </div>

      {/* TAB 1: SHOULD / SHOULDN'T */}
      {studioTab === 'should' && (
        <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-5 space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {shouldForms.map((f, i) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setShouldIdx(i)}
                className={`rounded-lg border px-3 py-2 text-xs font-bold transition-colors ${
                  i === shouldIdx
                    ? 'border-rose-600 bg-rose-600 text-white'
                    : 'border-rose-200 bg-white text-slate-700 hover:bg-rose-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-1 font-ipa text-xs sm:text-sm font-bold text-rose-900">
                {currentShould.formula}
              </span>
              <SpeakMiniButton text={currentShould.exampleEn} />
            </div>
            <div>
              <p className="font-display text-base font-bold text-slate-900">{currentShould.exampleEn}</p>
              <p className="text-xs text-slate-600 mt-0.5">{currentShould.exampleVi}</p>
            </div>
            <p className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-700 leading-relaxed">
              <strong>Lưu ý (Tr.129–130):</strong> {currentShould.note}
            </p>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2 text-xs">
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 flex items-center justify-between gap-2">
              <div>
                <p className="font-bold text-rose-700">Cách dùng 1: Đưa ra lời khuyên</p>
                <p className="font-semibold text-slate-900 mt-0.5">You should see a doctor.</p>
                <p className="text-slate-500">Bạn nên đi khám bác sĩ.</p>
              </div>
              <SpeakMiniButton text="You should see a doctor." />
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 flex items-center justify-between gap-2">
              <div>
                <p className="font-bold text-rose-700">Cách dùng 2: Nghi ngờ / thắc mắc</p>
                <p className="font-semibold text-slate-900 mt-0.5">How should I know?</p>
                <p className="text-slate-500">Làm sao tôi biết được chứ?</p>
              </div>
              <SpeakMiniButton text="How should I know?" />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SOME / ANY 5 SCENARIOS */}
      {studioTab === 'some_any' && (
        <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">
                Bộ chuyển đổi SOME / ANY (Trang 130)
              </p>
              <h4 className="font-display text-base font-bold text-slate-900">
                Chọn 1 trong 5 tình huống để thấy quy tắc chuẩn xác
              </h4>
            </div>
            <span
              className={`rounded-lg px-3 py-1 font-ipa text-sm font-bold ${
                activeMode.word === 'SOME' ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
              }`}
            >
              Dùng: {activeMode.word}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {someAnyModes.map((m, i) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setModeIdx(i)}
                className={`rounded-lg px-2.5 py-2 text-xs font-semibold border transition-colors text-left ${
                  i === modeIdx
                    ? 'border-rose-600 bg-rose-600 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-rose-50'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl bg-white border border-slate-200 p-4">
            <div>
              <p className="font-display text-base font-bold text-slate-900">{activeMode.sentence}</p>
              <p className="text-xs font-medium text-slate-500 mt-0.5">{activeMode.vi}</p>
              <p className="text-xs text-slate-700 mt-1.5">{activeMode.note}</p>
            </div>
            <SpeakMiniButton text={activeMode.sentence} />
          </div>
        </div>
      )}

      {/* TAB 3: SHOULD VS MUST COMPARISON */}
      {studioTab === 'compare' && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-ipa text-sm font-extrabold text-rose-800">
                SHOULD / SHOULDN&apos;T (Unit 6)
              </span>
              <span className="text-[11px] font-bold text-rose-700">Mức độ nhẹ · Lời khuyên</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dùng khi thấy việc gì <strong>là ý kiến hay (good idea)</strong> hoặc khuyên ai nên / không nên làm. Dấu hiệu viết lại câu: <em>It is good / a good idea / not good to...</em>
            </p>
            <div className="space-y-2">
              {[
                { en: 'You should clean the house before Tet.', vi: 'Bạn nên dọn nhà trước Tết (khuyên bảo).' },
                { en: "You shouldn't break things at Tet.", vi: 'Bạn không nên làm vỡ đồ ngày Tết.' },
              ].map((ex) => (
                <div key={ex.en} className="flex items-center justify-between gap-2 rounded-lg border border-rose-200 bg-white px-3 py-2">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{ex.en}</p>
                    <p className="text-[11px] text-slate-500">{ex.vi}</p>
                  </div>
                  <SpeakMiniButton text={ex.en} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-ipa text-sm font-extrabold text-teal-800">
                MUST / MUSTN&apos;T (Unit 5)
              </span>
              <span className="text-[11px] font-bold text-teal-700">Mức độ mạnh · Nội quy / Cấm đoán</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dùng cho <strong>nghĩa vụ bắt buộc</strong> hoặc <strong>cấm tuyệt đối</strong>. Dấu hiệu viết lại câu (Test Unit 6 Phần X): <em>necessary, important, prohibited, not allowed...</em>
            </p>
            <div className="space-y-2">
              {[
                { en: 'You must arrive on time for the exam.', vi: 'Bạn bắt buộc phải đến đúng giờ thi.' },
                { en: "You mustn't pick flowers in the park.", vi: 'Cấm tuyệt đối không được hái hoa trong công viên.' },
              ].map((ex) => (
                <div key={ex.en} className="flex items-center justify-between gap-2 rounded-lg border border-teal-200 bg-white px-3 py-2">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{ex.en}</p>
                    <p className="text-[11px] text-slate-500">{ex.vi}</p>
                  </div>
                  <SpeakMiniButton text={ex.en} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Unit 7: Conjunction Bridge Builder */
function WhConjunctionsVisual() {
  const links = [
    { word: 'and', meaning: 'Bổ sung (và)', c1: 'The game show is funny', c2: 'it is very educational.', vi: 'Trò chơi truyền hình vừa hài hước VÀ rất có tính giáo dục.' },
    { word: 'but', meaning: 'Tương phản (nhưng)', c1: 'I want to watch cartoons', c2: 'I have to do my homework.', vi: 'Em muốn xem hoạt hình NHƯNG em phải làm bài tập.' },
    { word: 'so', meaning: 'Kết quả (vì vậy)', c1: 'The documentary is boring', c2: 'we change the channel.', vi: 'Phim tài liệu nhàm chán VÌ VẬY chúng em đổi kênh.' },
  ];
  const [idx, setIdx] = useState(0);
  const curr = links[idx];
  const full = `${curr.c1}, ${curr.word} ${curr.c2}`;

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Cầu nối liên từ câu ghép</p>
          <h4 className="font-display text-base font-bold text-slate-900">Chọn liên từ nối 2 mệnh đề</h4>
        </div>
        <div className="flex gap-2">
          {links.map((item, i) => (
            <button
              key={item.word}
              type="button"
              onClick={() => setIdx(i)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold uppercase border transition-colors ${
                i === idx
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              , {item.word}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 rounded-xl bg-white border border-slate-200 p-4">
        <div className="flex-1 rounded-lg bg-slate-50 p-3 text-sm font-semibold text-slate-800 border border-slate-200">
          {curr.c1}
        </div>
        <div className="flex items-center justify-center">
          <span className="rounded-lg bg-blue-600 px-3 py-1.5 font-ipa text-sm font-bold text-white">
            , {curr.word}
          </span>
        </div>
        <div className="flex-1 rounded-lg bg-slate-50 p-3 text-sm font-semibold text-slate-800 border border-slate-200">
          {curr.c2}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-medium text-slate-700">
          <strong className="text-blue-700">{curr.meaning}:</strong> {curr.vi}
        </p>
        <SpeakMiniButton text={full} />
      </div>
    </div>
  );
}

/* Unit 8: Past Simple Verb Transformer */
function PastSimpleVisual() {
  const verbs = [
    { base: 'play', past: 'played', type: 'Có quy tắc (+ed)', obj: 'badminton yesterday' },
    { base: 'win', past: 'won', type: 'Bất quy tắc (V2)', obj: 'the school cup last week' },
    { base: 'go', past: 'went', type: 'Bất quy tắc (V2)', obj: 'swimming two days ago' },
    { base: 'buy', past: 'bought', type: 'Bất quy tắc (V2)', obj: 'a new racket last Sunday' },
  ];
  const [vIdx, setVIdx] = useState(1);
  const [form, setForm] = useState<'pos' | 'neg' | 'ask'>('pos');
  const v = verbs[vIdx];

  const sentence =
    form === 'pos'
      ? `Nam ${v.past} ${v.obj}.`
      : form === 'neg'
        ? `Nam didn't ${v.base} ${v.obj}.`
        : `Did Nam ${v.base} ${v.obj}?`;

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-700 mb-2.5">Chọn động từ kiểm chứng</p>
        <div className="grid grid-cols-2 gap-2">
          {verbs.map((item, i) => (
            <button
              key={item.base}
              type="button"
              onClick={() => setVIdx(i)}
              className={`rounded-lg p-2.5 text-left border transition-colors ${
                i === vIdx
                  ? 'border-orange-600 bg-orange-50 text-orange-950'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="font-ipa text-xs font-bold">{item.base} → {item.past}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{item.type}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-slate-50/70 p-5 flex flex-col justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'pos', label: 'Khẳng định (+) → V2/V-ed' },
            { id: 'neg', label: "Phủ định (-) → didn't + V" },
            { id: 'ask', label: 'Câu hỏi (?) → Did + S + V' },
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setForm(btn.id as 'pos' | 'neg' | 'ask')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold border transition-colors ${
                form === btn.id
                  ? 'border-orange-600 bg-orange-600 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-4">
          <p className="font-display text-lg font-bold text-slate-900">{sentence}</p>
          <p className="text-xs text-slate-600 mt-1.5">
            {form === 'pos'
              ? `Câu khẳng định chia động từ về quá khứ: "${v.past}".`
              : `Chú ý! Đã có trợ động từ "${form === 'neg' ? "didn't" : 'Did'}" nên động từ "${v.base}" TRỞ VỀ NGUYÊN MẪU!`}
          </p>
        </div>

        <div className="flex justify-end">
          <SpeakMiniButton text={sentence} />
        </div>
      </div>
    </div>
  );
}

/* Unit 9: Possessive Adjective -> Pronoun Transformer */
function PossessiveTransformerVisual() {
  const pairs = [
    { adj: 'my', pro: 'mine', noun: 'postcard', ex1: 'This is my postcard.', ex2: 'This postcard is mine.' },
    { adj: 'your', pro: 'yours', noun: 'camera', ex1: 'That is your camera.', ex2: 'That camera is yours.' },
    { adj: 'his', pro: 'his', noun: 'bike', ex1: 'It is his bike.', ex2: 'The bike is his.' },
    { adj: 'her', pro: 'hers', noun: 'hat', ex1: 'This is her hat.', ex2: 'This hat is hers.' },
    { adj: 'our', pro: 'ours', noun: 'city', ex1: 'Ha Noi is our city.', ex2: 'This city is ours.' },
    { adj: 'their', pro: 'theirs', noun: 'map', ex1: 'That is their map.', ex2: 'That map is theirs.' },
  ];
  const [idx, setIdx] = useState(0);
  const p = pairs[idx];

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
      <div className="flex flex-wrap gap-2 mb-4">
        {pairs.map((item, i) => (
          <button
            key={item.adj}
            type="button"
            onClick={() => setIdx(i)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold border transition-colors ${
              i === idx
                ? 'border-cyan-700 bg-cyan-700 text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {item.adj} → {item.pro}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-11 items-center">
        <div className="md:col-span-5 rounded-xl bg-white border border-slate-200 p-4">
          <p className="text-[11px] font-bold uppercase text-slate-500">Tính từ sở hữu + Danh từ</p>
          <p className="font-display text-base font-bold text-slate-900 mt-1">
            {p.ex1}
          </p>
          <p className="font-ipa text-xs text-cyan-700 mt-1">
            {p.adj} + {p.noun}
          </p>
        </div>

        <div className="md:col-span-1 flex justify-center">
          <ArrowRight className="h-5 w-5 text-cyan-700 rotate-90 md:rotate-0" />
        </div>

        <div className="md:col-span-5 rounded-xl bg-cyan-50/80 border border-cyan-200 p-4 flex items-start justify-between gap-2">
          <div>
            <p className="text-[11px] font-bold uppercase text-cyan-800">Đại từ sở hữu (đứng 1 mình)</p>
            <p className="font-display text-base font-bold text-slate-900 mt-1">
              {p.ex2}
            </p>
            <p className="font-ipa text-xs text-cyan-800 mt-1">
              {p.pro} (= {p.adj} {p.noun})
            </p>
          </div>
          <SpeakMiniButton text={p.ex2} />
        </div>
      </div>
    </div>
  );
}

/* Unit 10: Future Certainty Meter (Will / Might / Won't) */
function FutureWillMightVisual() {
  const options = [
    { key: 'will', pct: 95, label: 'WILL (Chắc chắn sẽ)', color: 'bg-indigo-600', sentence: 'Our future house will use solar energy.', vi: 'Tin chắc điều này sẽ xảy ra trong tương lai.' },
    { key: 'might', pct: 45, label: 'MIGHT (Có thể sẽ)', color: 'bg-amber-500', sentence: 'We might live in a UFO house on the Moon.', vi: 'Chưa chắc chắn 100%, chỉ là khả năng có thể xảy ra.' },
    { key: 'wont', pct: 5, label: "WON'T (Sẽ không)", color: 'bg-rose-600', sentence: "Smart houses won't waste electricity.", vi: 'Dự đoán chắc chắn điều này sẽ KHÔNG xảy ra.' },
  ];
  const [idx, setIdx] = useState(0);
  const curr = options[idx];

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-4">
      <div className="flex flex-wrap gap-2">
        {options.map((opt, i) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => setIdx(i)}
            className={`rounded-lg px-3.5 py-2 text-xs font-bold border transition-colors ${
              i === idx
                ? 'border-indigo-600 bg-indigo-600 text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div>
        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
          <span>Độ chắc chắn của dự đoán</span>
          <span className="tabular-nums font-ipa">{curr.pct}%</span>
        </div>
        <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${curr.color}`}
            style={{ width: `${curr.pct}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl bg-white border border-slate-200 p-4">
        <div>
          <p className="font-display text-base font-bold text-slate-900">{curr.sentence}</p>
          <p className="text-xs text-slate-600 mt-1">{curr.vi}</p>
        </div>
        <SpeakMiniButton text={curr.sentence} />
      </div>
    </div>
  );
}

/* Unit 11: First Conditional Eco Domino Flow */
function ArticlesConditionalVisual() {
  const actions = [
    { ifClause: 'If we plant more trees', willClause: 'the air will be fresher.', vi: 'Nếu ta trồng thêm cây, không khí sẽ trong lành hơn.' },
    { ifClause: 'If we cycle to school', willClause: 'we will reduce air pollution.', vi: 'Nếu ta đạp xe đi học, ta sẽ giảm ô nhiễm không khí.' },
    { ifClause: 'If we turn off the lights', willClause: 'we will save electricity.', vi: 'Nếu ta tắt đèn khi ra ngoài, ta sẽ tiết kiệm điện.' },
    { ifClause: 'If we recycle waste paper', willClause: 'we will save many forests.', vi: 'Nếu ta tái chế giấy vụn, ta sẽ cứu được nhiều cánh rừng.' },
  ];
  const [idx, setIdx] = useState(0);
  const a = actions[idx];

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-4">
      <div className="flex flex-wrap gap-2">
        {actions.map((item, i) => (
          <button
            key={item.ifClause}
            type="button"
            onClick={() => setIdx(i)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold border transition-colors ${
              i === idx
                ? 'border-green-600 bg-green-600 text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Hành động xanh #{i + 1}
          </button>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-11 items-center">
        <div className="md:col-span-5 rounded-xl bg-white border border-green-200 p-4">
          <span className="text-[11px] font-bold uppercase text-green-700">Mệnh đề IF (Hiện tại đơn)</span>
          <p className="font-display text-base font-bold text-slate-900 mt-1">{a.ifClause},</p>
        </div>
        <div className="md:col-span-1 flex justify-center">
          <ArrowRight className="h-5 w-5 text-green-600 rotate-90 md:rotate-0" />
        </div>
        <div className="md:col-span-5 rounded-xl bg-green-50 border border-green-300 p-4">
          <span className="text-[11px] font-bold uppercase text-green-800">Kết quả (Tương lai: will + V)</span>
          <p className="font-display text-base font-bold text-slate-900 mt-1">{a.willClause}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-medium text-slate-700">{a.vi}</p>
        <SpeakMiniButton text={`${a.ifClause}, ${a.willClause}`} />
      </div>
    </div>
  );
}

/* Unit 12: 3-Robot Superlative Podium */
function SuperlativeRobotVisual() {
  const robots = [
    { name: 'MiniBot', height: 55, weight: 20, speed: 95, power: 40 },
    { name: 'Smarty', height: 130, weight: 50, speed: 70, power: 68 },
    { name: 'Titan', height: 185, weight: 95, speed: 45, power: 98 },
  ];
  const metrics = [
    { key: 'height' as const, label: 'Chiều cao (tall)', unit: 'cm', sentence: 'Titan is the tallest robot of the three.', superlative: 'the tallest' },
    { key: 'weight' as const, label: 'Cân nặng (heavy)', unit: 'kg', sentence: 'Titan is the heaviest robot.', superlative: 'the heaviest' },
    { key: 'speed' as const, label: 'Tốc độ (fast)', unit: 'đ/100', sentence: 'MiniBot is the fastest robot.', superlative: 'the fastest' },
    { key: 'power' as const, label: 'Sức mạnh (strong)', unit: 'đ/100', sentence: 'Titan is the strongest robot.', superlative: 'the strongest' },
  ];
  const [mIdx, setMIdx] = useState(0);
  const m = metrics[mIdx];
  const maxVal = Math.max(...robots.map((r) => r[m.key]));

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">Đấu trường So sánh nhất (3 Robot)</p>
        <div className="flex flex-wrap gap-1.5">
          {metrics.map((item, i) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setMIdx(i)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold border transition-colors ${
                i === mIdx
                  ? 'border-sky-600 bg-sky-600 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 items-end rounded-xl bg-white border border-slate-200 p-4">
        {robots.map((r) => {
          const val = r[m.key];
          const isWinner = val === maxVal;
          const pct = Math.round((val / maxVal) * 100);
          return (
            <div key={r.name} className="flex flex-col items-center">
              <div className="h-6 mb-1 flex items-center">
                {isWinner && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800">
                    <Sparkles className="h-3 w-3" /> #1 Nhất
                  </span>
                )}
              </div>
              <div className="w-full max-w-20 h-28 flex items-end justify-center bg-slate-100 rounded-lg p-1.5">
                <div
                  className={`w-full rounded-md transition-all duration-300 ${
                    isWinner ? 'bg-sky-600' : 'bg-slate-400'
                  }`}
                  style={{ height: `${Math.max(20, pct)}%` }}
                />
              </div>
              <p className="mt-2 font-display text-xs font-bold text-slate-900">{r.name}</p>
              <p className="font-ipa text-[11px] text-slate-500 tabular-nums">
                {val} {m.unit}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-sky-50 border border-sky-200 px-4 py-3">
        <div>
          <p className="font-display text-sm font-bold text-slate-900">{m.sentence}</p>
          <p className="font-ipa text-xs text-sky-800">Công thức: the + tính từ ngắn-est → {m.superlative}</p>
        </div>
        <SpeakMiniButton text={m.sentence} />
      </div>
    </div>
  );
}

export function GrammarVisual({ type }: GrammarVisualProps) {
  switch (type) {
    case 'present_simple_frequency':
      return <PresentSimpleFrequencyVisual />;
    case 'prepositions_room':
      return <PrepositionsRoomVisual />;
    case 'present_continuous_desc':
      return <PresentContinuousVisual />;
    case 'comparative_scale':
      return <ComparativeScaleVisual />;
    case 'countable_must':
      return <CountableMustVisual />;
    case 'tet_should_some_any':
      return <TetSomeAnyVisual />;
    case 'wh_conjunctions':
      return <WhConjunctionsVisual />;
    case 'past_simple_imperative':
      return <PastSimpleVisual />;
    case 'possessive_transformer':
      return <PossessiveTransformerVisual />;
    case 'future_will_might':
      return <FutureWillMightVisual />;
    case 'articles_conditional':
      return <ArticlesConditionalVisual />;
    case 'superlative_robot':
      return <SuperlativeRobotVisual />;
    default:
      return null;
  }
}
