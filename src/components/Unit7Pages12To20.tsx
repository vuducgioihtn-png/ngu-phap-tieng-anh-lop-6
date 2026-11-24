import { useState } from 'react';
import {
  CheckCircle2,
  Eye,
  RotateCcw,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  U7_EX_C1_PASSAGE,
  U7_EX_C1_QA,
  U7_EX_C2_MCQ,
  U7_EX_C2_PASSAGE_PARTS,
  U7_EX_C3_PROFILES,
  U7_EX_C3_TF,
  U7_EX_D1_REORDER,
  U7_EX_D2_REWRITE,
  U7_TEST_I_PHONETICS,
  U7_TEST_II_MCQ,
  U7_TEST_III_VERBS,
  U7_TEST_IV_PREPS,
  U7_TEST_V_MISTAKES,
  U7_TEST_VI_WORDFORM,
  U7_TEST_VII_WH,
  U7_TEST_VIII_CLOZE,
  U7_TEST_VIII_PASSAGE_PARTS,
  U7_TEST_IX_BOX,
  U7_TEST_IX_VTV1,
  U7_TEST_X_REWRITE,
  U7_TEST_XI_COMBINE,
  U7_TEST_XII_CLUES,
  U7_TEST_XII_MODEL_EN,
  U7_TEST_XII_MODEL_VI,
  type U7FillItem,
  type U7McqItem,
  type U7SentenceTask,
} from '../data/unit7Pages1To20';
import { speakEnglish } from '../utils/speech';

const normalizeText = (val: string) =>
  val
    .trim()
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, ' ');

const normalizeSentence = (val: string) =>
  normalizeText(val)
    .replace(/\s+([.?!,])/g, '$1')
    .replace(/[.?!]+$/g, '');

const matchesAccepted = (val: string, accepted: string[], sentenceMode = false) => {
  const norm = sentenceMode ? normalizeSentence(val) : normalizeText(val);
  if (!norm) return false;
  return accepted.some((acc) =>
    sentenceMode ? normalizeSentence(acc) === norm : normalizeText(acc) === norm
  );
};

/* ============================================================================
 * TRẠM 05: C. READING COMPREHENSION (TR. 12–14)
 * ============================================================================ */
export function Unit7Station5Reading() {
  // C.I Open Q&A
  const [c1Inputs, setC1Inputs] = useState<Record<string, string>>({});
  const [c1Revealed, setC1Revealed] = useState<Record<string, boolean>>({});

  // C.II Cloze MCQ
  const [c2Sel, setC2Sel] = useState<Record<string, number>>({});
  const [c2Checked, setC2Checked] = useState(false);

  // C.III True / False
  const [c3Sel, setC3Sel] = useState<Record<string, 'T' | 'F'>>({});
  const [c3Checked, setC3Checked] = useState(false);

  const c2Score = U7_EX_C2_MCQ.filter((q) => c2Sel[q.id] === q.correctIndex).length;
  const c3Score = U7_EX_C3_TF.filter((q) => c3Sel[q.id] === q.answer).length;

  return (
    <div className="space-y-6">
      {/* C.I David's Family TV Habits (p.12) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
              C.I · Đọc hiểu &amp; Trả lời câu hỏi · Tr.12
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Gia đình David xem truyền hình
            </h3>
          </div>
          <button
            type="button"
            onClick={() => speakEnglish(U7_EX_C1_PASSAGE)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-900 hover:bg-blue-100"
          >
            <Volume2 className="h-3.5 w-3.5" />
            Nghe toàn đoạn văn
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-7 text-slate-800">
          {U7_EX_C1_PASSAGE}
        </div>

        <div className="space-y-3">
          {U7_EX_C1_QA.map((item) => {
            const shown = Boolean(c1Revealed[item.id]);
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-bold text-slate-900">
                    {item.num}. {item.q}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setC1Revealed((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:underline shrink-0"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>{shown ? 'Ẩn gợi ý' : 'Xem đáp án mẫu'}</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={c1Inputs[item.id] ?? ''}
                  onChange={(e) =>
                    setC1Inputs((prev) => ({ ...prev, [item.id]: e.target.value }))
                  }
                  placeholder="Tự gõ câu trả lời tiếng Anh của em..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {shown && (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-3.5 py-2.5 text-xs space-y-1">
                    <p className="font-bold text-emerald-900">Đáp án chuẩn: {item.modelAnswer}</p>
                    <p className="text-emerald-800">Dẫn chứng trong bài: {item.evidenceEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* C.II Cloze Reading (p.13) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
              C.II · Đọc điền từ vào chỗ trống (5 câu) · Tr.13
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Lịch sử &amp; sức hút của Truyền hình từ thập niên 1950
            </h3>
          </div>
          {c2Checked && (
            <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
              {c2Score}/{U7_EX_C2_MCQ.length} đúng
            </span>
          )}
        </div>

        {/* Live filled passage */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-8 text-slate-800">
          {U7_EX_C2_PASSAGE_PARTS.map((part, idx) => {
            const q = U7_EX_C2_MCQ[idx];
            const pickedIdx = q ? c2Sel[q.id] : undefined;
            const pickedWord =
              q && pickedIdx !== undefined ? q.options[pickedIdx] : `(${idx + 1}) ______`;
            const isCorrect = q && c2Checked && pickedIdx === q.correctIndex;
            const isWrong = q && c2Checked && pickedIdx !== q.correctIndex;
            return (
              <span key={idx}>
                {part}
                {q && (
                  <span
                    className={`mx-1 inline-block rounded-md px-2 py-0.5 font-bold ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-900'
                        : isWrong
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-blue-100/80 text-blue-900'
                    }`}
                  >
                    {pickedWord}
                  </span>
                )}
              </span>
            );
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {U7_EX_C2_MCQ.map((q) => (
            <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
              <p className="text-xs font-bold text-slate-800">Chỗ trống ({q.num})</p>
              <div className="grid grid-cols-2 gap-1.5">
                {q.options.map((opt, idx) => {
                  const active = c2Sel[q.id] === idx;
                  const showRight = c2Checked && idx === q.correctIndex;
                  const showWrong = c2Checked && active && idx !== q.correctIndex;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setC2Sel((prev) => ({ ...prev, [q.id]: idx }));
                        setC2Checked(false);
                      }}
                      className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-semibold transition-colors ${
                        showRight
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : showWrong
                            ? 'border-rose-400 bg-rose-50 text-rose-800'
                            : active
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  );
                })}
              </div>
              {c2Checked && (
                <p className="text-[11px] text-slate-600 leading-relaxed">{q.explanationVi}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setC2Checked(true)}
            className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
          >
            Kiểm tra C.II
          </button>
          <button
            type="button"
            onClick={() => {
              setC2Sel({});
              setC2Checked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* C.III Three Teens' TV Profiles + 6 True/False (pp.13–14) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
              C.III · Đọc hồ sơ 3 bạn trẻ &amp; Chọn Đúng (T) / Sai (F) · Tr.13–14
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Steve (12 tuổi) · Kate (14 tuổi) · Rachel (18 tuổi)
            </h3>
          </div>
          {c3Checked && (
            <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
              {c3Score}/{U7_EX_C3_TF.length} đúng
            </span>
          )}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {U7_EX_C3_PROFILES.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="inline-flex rounded-lg px-2.5 py-1 font-display text-xs font-extrabold text-white"
                    style={{ backgroundColor: p.badgeColor }}
                  >
                    {p.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => speakEnglish(p.text)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:underline"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                    Nghe
                  </button>
                </div>
                <p className="text-[11px] font-semibold text-slate-500">
                  Thời lượng: {p.hours} · Thích: {p.fav}
                </p>
                <p className="text-xs leading-relaxed text-slate-800">{p.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-2.5">
          {U7_EX_C3_TF.map((item) => {
            const val = c3Sel[item.id];
            const isCorrect = c3Checked && val === item.answer;
            const isWrong = c3Checked && val !== item.answer;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <p className="text-sm font-medium text-slate-900">
                    <span className="font-bold text-slate-500 mr-1.5">{item.num}.</span>
                    {item.statement}
                  </p>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {(['T', 'F'] as const).map((tf) => {
                      const active = val === tf;
                      return (
                        <button
                          key={tf}
                          type="button"
                          onClick={() => {
                            setC3Sel((prev) => ({ ...prev, [item.id]: tf }));
                            setC3Checked(false);
                          }}
                          className={`rounded-lg border px-3.5 py-1.5 text-xs font-bold transition-colors ${
                            active
                              ? 'border-slate-900 bg-slate-900 text-white'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {tf === 'T' ? 'True (T)' : 'False (F)'}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {c3Checked && (
                  <p
                    className={`text-xs font-medium flex items-start gap-1.5 ${
                      isCorrect ? 'text-emerald-800' : isWrong ? 'text-rose-800' : 'text-slate-600'
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    ) : (
                      <XCircle className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" />
                    )}
                    <span>
                      Đáp án: <strong>{item.answer}</strong> — {item.explanationVi}
                    </span>
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setC3Checked(true)}
            className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
          >
            Kiểm tra C.III
          </button>
          <button
            type="button"
            onClick={() => {
              setC3Sel({});
              setC3Checked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
 * TRẠM 06: D. WRITING (TR. 14–15)
 * ============================================================================ */
function SentenceTaskList({
  title,
  eyebrow,
  tasks,
  mode,
}: {
  title: string;
  eyebrow: string;
  tasks: U7SentenceTask[];
  mode: 'reorder' | 'rewrite';
}) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const score = tasks.filter((t) =>
    matchesAccepted(inputs[t.id] ?? '', t.accepted, true)
  ).length;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">{eyebrow}</p>
          <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">{title}</h3>
        </div>
        {checked && (
          <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
            {score}/{tasks.length} đúng
          </span>
        )}
      </div>

      <div className="space-y-3">
        {tasks.map((task) => {
          const val = inputs[task.id] ?? '';
          const ok = checked && matchesAccepted(val, task.accepted, true);
          const bad = checked && !ok;
          const chips = mode === 'reorder' ? task.prompt.split('/').map((s) => s.trim()) : [];

          return (
            <div
              key={task.id}
              className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900">
                  <span className="font-bold text-blue-700 mr-1.5">{task.num}.</span>
                  {task.prompt}
                </p>
                {checked && (
                  <button
                    type="button"
                    onClick={() => speakEnglish(task.displayAnswer)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:underline shrink-0"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                    Nghe
                  </button>
                )}
              </div>

              {mode === 'reorder' && (
                <div className="flex flex-wrap gap-1.5">
                  {chips.map((chip, cIdx) => (
                    <button
                      key={`${task.id}-chip-${cIdx}`}
                      type="button"
                      onClick={() => {
                        setChecked(false);
                        setInputs((prev) => {
                          const cur = (prev[task.id] ?? '').trim();
                          const next =
                            chip === '?'
                              ? `${cur}?`
                              : cur
                                ? `${cur} ${chip}`
                                : chip;
                          return { ...prev, [task.id]: next };
                        });
                      }}
                      className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-800"
                    >
                      {chip}
                    </button>
                  ))}
                  {val && (
                    <button
                      type="button"
                      onClick={() => {
                        setChecked(false);
                        setInputs((prev) => ({ ...prev, [task.id]: '' }));
                      }}
                      className="rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700 hover:bg-rose-100"
                    >
                      Xóa câu
                    </button>
                  )}
                </div>
              )}

              {task.starter && (
                <p className="text-xs font-semibold text-slate-600">
                  Gợi ý bắt đầu: <span className="font-bold text-blue-800">{task.starter} ...</span>
                </p>
              )}

              <input
                type="text"
                value={val}
                onChange={(e) => {
                  setInputs((prev) => ({ ...prev, [task.id]: e.target.value }));
                  setChecked(false);
                }}
                placeholder={
                  task.starter
                    ? `Viết tiếp đầy đủ câu bắt đầu bằng "${task.starter}..."`
                    : 'Bấm từng từ ở trên hoặc gõ trực tiếp câu hoàn chỉnh...'
                }
                className={`w-full rounded-xl border px-3.5 py-2 text-sm focus:outline-none ${
                  ok
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                    : bad
                      ? 'border-rose-300 bg-rose-50 text-rose-950'
                      : 'border-slate-200 bg-white text-slate-900 focus:border-blue-500'
                }`}
              />

              {checked && (
                <div className="text-xs space-y-0.5">
                  <p className={ok ? 'font-bold text-emerald-800' : 'font-bold text-rose-800'}>
                    {ok ? 'Chính xác!' : `Đáp án chuẩn: ${task.displayAnswer}`}
                  </p>
                  <p className="text-slate-600">{task.explanationVi}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setChecked(true)}
          className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
        >
          Chấm bài
        </button>
        <button
          type="button"
          onClick={() => {
            const filled: Record<string, string> = {};
            tasks.forEach((t) => {
              filled[t.id] = t.displayAnswer;
            });
            setInputs(filled);
            setChecked(true);
          }}
          className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
        >
          Hiện đáp án mẫu
        </button>
        <button
          type="button"
          onClick={() => {
            setInputs({});
            setChecked(false);
          }}
          className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Làm lại
        </button>
      </div>
    </section>
  );
}

export function Unit7Station6Writing() {
  return (
    <div className="space-y-6">
      <SentenceTaskList
        eyebrow="D.I · Sắp xếp từ thành câu hoàn chỉnh (10 câu) · Tr.14"
        title="Bấm ghép từng cụm từ hoặc gõ trực tiếp câu đúng ngữ pháp"
        tasks={U7_EX_D1_REORDER}
        mode="reorder"
      />
      <SentenceTaskList
        eyebrow="D.II · Viết lại câu giữ nguyên nghĩa (10 câu) · Tr.14–15"
        title="10 mẫu chuyển đổi câu trọng tâm Unit 7"
        tasks={U7_EX_D2_REWRITE}
        mode="rewrite"
      />
    </div>
  );
}

/* ============================================================================
 * TRẠM 07: TEST FOR UNIT 7 — PHẦN I ĐẾN PHẦN X (TR. 16–20)
 * ============================================================================ */
type TestGroupTab = 'part1_2' | 'part3_6' | 'part7_10';

function McqTestBlock({
  eyebrow,
  title,
  items,
  selected,
  onSelect,
  checked,
}: {
  eyebrow: string;
  title: string;
  items: U7McqItem[];
  selected: Record<string, number>;
  onSelect: (id: string, idx: number) => void;
  checked: boolean;
}) {
  const score = items.filter((q) => selected[q.id] === q.correctIndex).length;
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">{eyebrow}</p>
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mt-0.5">
            {title}
          </h3>
        </div>
        {checked && (
          <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
            {score}/{items.length}
          </span>
        )}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {items.map((q) => {
          const picked = selected[q.id];
          return (
            <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2.5">
              <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                <span className="font-bold text-blue-700 mr-1.5">{q.num}.</span>
                {q.prompt}
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {q.options.map((opt, idx) => {
                  const active = picked === idx;
                  const isRight = checked && idx === q.correctIndex;
                  const isWrong = checked && active && idx !== q.correctIndex;
                  return (
                    <button
                      key={`${q.id}-${idx}`}
                      type="button"
                      onClick={() => onSelect(q.id, idx)}
                      className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-semibold transition-colors ${
                        isRight
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : isWrong
                            ? 'border-rose-400 bg-rose-50 text-rose-800'
                            : active
                              ? 'border-slate-900 bg-slate-900 text-white'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  );
                })}
              </div>
              {checked && (
                <p className="text-[11px] text-slate-600 leading-relaxed">{q.explanationVi}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FillTestBlock({
  eyebrow,
  title,
  wordBox,
  items,
  values,
  onChange,
  checked,
}: {
  eyebrow: string;
  title: string;
  wordBox?: string[];
  items: U7FillItem[];
  values: Record<string, string>;
  onChange: (id: string, val: string) => void;
  checked: boolean;
}) {
  const score = items.filter((it) => matchesAccepted(values[it.id] ?? '', it.accepted)).length;
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">{eyebrow}</p>
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mt-0.5">
            {title}
          </h3>
        </div>
        {checked && (
          <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
            {score}/{items.length}
          </span>
        )}
      </div>

      {wordBox && (
        <div className="flex flex-wrap gap-1.5 rounded-xl border border-blue-200 bg-blue-50/60 p-3">
          {wordBox.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => speakEnglish(w)}
              className="inline-flex items-center gap-1 rounded-lg border border-blue-200 bg-white px-2.5 py-1 text-xs font-bold text-blue-950 hover:bg-blue-100"
            >
              <span>{w}</span>
              <Volume2 className="h-3 w-3 text-blue-600" />
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-3 md:grid-cols-2">
        {items.map((it) => {
          const val = values[it.id] ?? '';
          const ok = checked && matchesAccepted(val, it.accepted);
          const bad = checked && !ok;
          return (
            <div key={it.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
              <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                <span className="font-bold text-blue-700 mr-1.5">{it.num}.</span>
                {it.before}
                <span className="font-bold text-blue-700">______</span>
                {it.after}
              </p>
              <input
                type="text"
                value={val}
                onChange={(e) => onChange(it.id, e.target.value)}
                placeholder="Nhập đáp án..."
                className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                  ok
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                    : bad
                      ? 'border-rose-300 bg-rose-50 text-rose-950'
                      : 'border-slate-200 bg-white text-slate-900 focus:border-blue-500'
                }`}
              />
              {checked && (
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  <strong className={ok ? 'text-emerald-800' : 'text-rose-800'}>
                    {it.displayAnswer}:
                  </strong>{' '}
                  {it.explanationVi}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Unit7Station7Test() {
  const [group, setGroup] = useState<TestGroupTab>('part1_2');
  const [mcqSel, setMcqSel] = useState<Record<string, number>>({});
  const [fillVal, setFillVal] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [paragraphText, setParagraphText] = useState('');
  const [showParagraphModel, setShowParagraphModel] = useState(false);

  const paragraphWordCount = paragraphText.trim()
    ? paragraphText.trim().split(/\s+/).length
    : 0;

  const allMcqs = [
    ...U7_TEST_I_PHONETICS,
    ...U7_TEST_II_MCQ,
    ...U7_TEST_VIII_CLOZE,
    ...U7_TEST_X_REWRITE,
  ];
  const allFills = [
    ...U7_TEST_III_VERBS,
    ...U7_TEST_IV_PREPS,
    ...U7_TEST_VI_WORDFORM,
    ...U7_TEST_IX_VTV1,
  ];

  const totalItems =
    allMcqs.length +
    allFills.length +
    U7_TEST_V_MISTAKES.length +
    U7_TEST_VII_WH.length +
    U7_TEST_XI_COMBINE.length;

  const totalCorrect =
    allMcqs.filter((q) => mcqSel[q.id] === q.correctIndex).length +
    allFills.filter((f) => matchesAccepted(fillVal[f.id] ?? '', f.accepted)).length +
    U7_TEST_V_MISTAKES.filter((m) =>
      matchesAccepted(fillVal[m.id] ?? '', m.acceptedFixes)
    ).length +
    U7_TEST_VII_WH.filter((w) =>
      matchesAccepted(fillVal[w.id] ?? '', w.accepted, true)
    ).length +
    U7_TEST_XI_COMBINE.filter((c) =>
      matchesAccepted(fillVal[c.id] ?? '', c.accepted, true)
    ).length;

  const setMcq = (id: string, idx: number) => {
    setMcqSel((prev) => ({ ...prev, [id]: idx }));
    setChecked(false);
  };
  const setFill = (id: string, val: string) => {
    setFillVal((prev) => ({ ...prev, [id]: val }));
    setChecked(false);
  };

  return (
    <div className="space-y-5">
      {/* Test Header & Part Switcher */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-800">
            TEST FOR UNIT 7 · Phần I – Phần XII (Tập 2 · Tr.16–21)
          </p>
          <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
            Đề Kiểm Tra Unit 7 ({totalItems} câu tự chấm + 1 bài Viết đoạn văn · Tr.21)
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Chia thành 3 chặng gọn nhẹ để em làm không bị mỏi mắt — điểm tổng cộng tự động lưu trên cả 11 phần tự chấm + phần XII viết đoạn văn mẫu.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {checked && (
            <span className="rounded-xl border border-emerald-300 bg-emerald-50 px-3.5 py-2 font-ipa text-sm font-extrabold text-emerald-800 tabular-nums">
              Tổng: {totalCorrect}/{totalItems} câu đúng
            </span>
          )}
          <button
            type="button"
            onClick={() => setChecked(true)}
            className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
          >
            Chấm điểm bài làm
          </button>
          <button
            type="button"
            onClick={() => {
              setMcqSel({});
              setFillVal({});
              setParagraphText('');
              setChecked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </div>

      {/* 3 Sub-tabs */}
      <div className="inline-flex flex-wrap rounded-xl border border-slate-200 bg-white p-1 gap-1">
        {[
          { id: 'part1_2' as const, label: 'Chặng 1: Phần I–II (Phát âm & 15 Trắc nghiệm · Tr.16–17)' },
          { id: 'part3_6' as const, label: 'Chặng 2: Phần III–VI (Động từ, Giới từ, Sửa lỗi, Từ loại · Tr.17–18)' },
          { id: 'part7_10' as const, label: 'Chặng 3: Phần VII–XII (Đặt câu hỏi, 2 Bài đọc, Viết lại, Nối câu & Viết đoạn · Tr.18–21)' },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setGroup(t.id)}
            className={`rounded-lg px-3.5 py-2 text-xs font-bold transition-colors ${
              group === t.id
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {group === 'part1_2' && (
        <div className="space-y-5">
          <McqTestBlock
            eyebrow="Test I · Phonetics (10 câu) · Tr.16"
            title="Chọn từ có phần gạch chân phát âm khác"
            items={U7_TEST_I_PHONETICS}
            selected={mcqSel}
            onSelect={setMcq}
            checked={checked}
          />
          <McqTestBlock
            eyebrow="Test II · Grammar & Vocabulary (15 câu) · Tr.16–17"
            title="Chọn đáp án đúng nhất A, B, C hoặc D"
            items={U7_TEST_II_MCQ}
            selected={mcqSel}
            onSelect={setMcq}
            checked={checked}
          />
        </div>
      )}

      {group === 'part3_6' && (
        <div className="space-y-5">
          <FillTestBlock
            eyebrow="Test III · Chia dạng / thì của động từ (8 câu) · Tr.17"
            title="Write the correct form or tense of the verbs in brackets"
            items={U7_TEST_III_VERBS}
            values={fillVal}
            onChange={setFill}
            checked={checked}
          />
          <FillTestBlock
            eyebrow="Test IV · Điền giới từ thích hợp (8 câu) · Tr.17"
            title="Complete each sentence with an appropriate preposition"
            items={U7_TEST_IV_PREPS}
            values={fillVal}
            onChange={setFill}
            checked={checked}
          />

          {/* Test V: Mistake Correction */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Test V · Tìm và sửa 1 lỗi sai trong mỗi câu (8 câu) · Tr.17–18
                </p>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                  Nhập từ sửa đúng (VD: more / bored / watching...)
                </h3>
              </div>
              {checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {
                    U7_TEST_V_MISTAKES.filter((m) =>
                      matchesAccepted(fillVal[m.id] ?? '', m.acceptedFixes)
                    ).length
                  }
                  /{U7_TEST_V_MISTAKES.length}
                </span>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U7_TEST_V_MISTAKES.map((m) => {
                const val = fillVal[m.id] ?? '';
                const ok = checked && matchesAccepted(val, m.acceptedFixes);
                const bad = checked && !ok;
                return (
                  <div key={m.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                    <p className="text-xs sm:text-sm font-medium text-slate-900">
                      <span className="font-bold text-blue-700 mr-1.5">{m.num}.</span>
                      {m.sentence}
                    </p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setFill(m.id, e.target.value)}
                      placeholder="Nhập từ sửa đúng..."
                      className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                        ok
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                          : bad
                            ? 'border-rose-300 bg-rose-50 text-rose-950'
                            : 'border-slate-200 bg-white text-slate-900 focus:border-blue-500'
                      }`}
                    />
                    {checked && (
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        <strong className={ok ? 'text-emerald-800' : 'text-rose-800'}>
                          {m.displayFix}:
                        </strong>{' '}
                        {m.explanationVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <FillTestBlock
            eyebrow="Test VI · Cho dạng đúng của từ trong ngoặc (8 câu) · Tr.18"
            title="Supply the correct form of the words in brackets"
            items={U7_TEST_VI_WORDFORM}
            values={fillVal}
            onChange={setFill}
            checked={checked}
          />
        </div>
      )}

      {group === 'part7_10' && (
        <div className="space-y-5">
          {/* Test VII: Make Wh-questions */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Test VII · Đặt câu hỏi cho phần gạch chân (8 câu) · Tr.18–19
                </p>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                  Make questions for the underlined part
                </h3>
              </div>
              {checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {
                    U7_TEST_VII_WH.filter((w) =>
                      matchesAccepted(fillVal[w.id] ?? '', w.accepted, true)
                    ).length
                  }
                  /{U7_TEST_VII_WH.length}
                </span>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U7_TEST_VII_WH.map((item) => {
                const val = fillVal[item.id] ?? '';
                const ok = checked && matchesAccepted(val, item.accepted, true);
                const bad = checked && !ok;
                const displaySentence = item.prompt.includes('___')
                  ? item.prompt.split('___')
                  : [item.prompt + ' ', ''];

                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                    <p className="text-xs sm:text-sm font-medium text-slate-900">
                      <span className="font-bold text-blue-700 mr-1.5">{item.num}.</span>
                      {displaySentence[0]}
                      <span className="underline decoration-2 decoration-blue-600 font-bold text-blue-900">
                        {item.underlined}
                      </span>
                      {displaySentence[1]}
                    </p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setFill(item.id, e.target.value)}
                      placeholder="Nhập câu hỏi Wh-question..."
                      className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                        ok
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                          : bad
                            ? 'border-rose-300 bg-rose-50 text-rose-950'
                            : 'border-slate-200 bg-white text-slate-900 focus:border-blue-500'
                      }`}
                    />
                    {checked && (
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        <strong className={ok ? 'text-emerald-800' : 'text-rose-800'}>
                          {item.displayAnswer}
                        </strong>{' '}
                        — {item.explanationVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Test VIII: Cloze Passage */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Test VIII · Đọc điền từ trắc nghiệm (6 câu) · Tr.19
              </p>
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                Television — Means of Communication
              </h3>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-8 text-slate-800">
              {U7_TEST_VIII_PASSAGE_PARTS.map((part, idx) => {
                const q = U7_TEST_VIII_CLOZE[idx];
                const picked = q ? mcqSel[q.id] : undefined;
                const word = q && picked !== undefined ? q.options[picked] : `(${idx + 1}) ______`;
                return (
                  <span key={idx}>
                    {part}
                    {q && (
                      <span className="mx-1 inline-block rounded-md bg-blue-100 px-2 py-0.5 font-bold text-blue-900">
                        {word}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {U7_TEST_VIII_CLOZE.map((q) => (
                <div key={q.id} className="rounded-xl border border-slate-200 p-3 space-y-2">
                  <p className="text-xs font-bold text-slate-800">Chỗ trống ({q.num})</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {q.options.map((opt, idx) => {
                      const active = mcqSel[q.id] === idx;
                      const right = checked && idx === q.correctIndex;
                      const wrong = checked && active && idx !== q.correctIndex;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setMcq(q.id, idx)}
                          className={`rounded-lg border px-2 py-1 text-left text-xs font-semibold ${
                            right
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : wrong
                                ? 'border-rose-400 bg-rose-50 text-rose-800'
                                : active
                                  ? 'border-slate-900 bg-slate-900 text-white'
                                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}. {opt}
                        </button>
                      );
                    })}
                  </div>
                  {checked && <p className="text-[11px] text-slate-600">{q.explanationVi}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Test IX: VTV1 Box Fill */}
          <FillTestBlock
            eyebrow="Test IX · Chọn từ trong khung điền vào đoạn văn VTV1 (8 câu) · Tr.19–20"
            title="Use the words or phrases in the box to complete the passage"
            wordBox={U7_TEST_IX_BOX}
            items={U7_TEST_IX_VTV1}
            values={fillVal}
            onChange={setFill}
            checked={checked}
          />

          {/* Test X: Rewrite MCQ */}
          <McqTestBlock
            eyebrow="Test X · Chọn câu viết lại đồng nghĩa (5 câu) · Tr.20"
            title="Rewrite sentences without changing the meaning"
            items={U7_TEST_X_REWRITE}
            selected={mcqSel}
            onSelect={setMcq}
            checked={checked}
          />

          {/* Test XI: Combine each pair of sentences with the conjunction in brackets (p.21) */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Test XI · Nối mỗi cặp câu dùng từ trong ngoặc (8 câu) · Tr.21
                </p>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                  Combine each pair of sentences below to make a complete sentence
                </h3>
              </div>
              {checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {
                    U7_TEST_XI_COMBINE.filter((c) =>
                      matchesAccepted(fillVal[c.id] ?? '', c.accepted, true)
                    ).length
                  }
                  /{U7_TEST_XI_COMBINE.length}
                </span>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U7_TEST_XI_COMBINE.map((item) => {
                const val = fillVal[item.id] ?? '';
                const ok = checked && matchesAccepted(val, item.accepted, true);
                const bad = checked && !ok;
                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
                  >
                    <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                      <span className="font-bold text-blue-700 mr-1.5">{item.num}.</span>
                      {item.prompt}{' '}
                      <span className="font-ipa font-bold text-indigo-700">
                        ({item.bracketWord})
                      </span>
                    </p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setFill(item.id, e.target.value)}
                      placeholder={`Viết câu nối dùng "${item.bracketWord}"...`}
                      className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                        ok
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                          : bad
                            ? 'border-rose-300 bg-rose-50 text-rose-950'
                            : 'border-slate-200 bg-white text-slate-900 focus:border-blue-500'
                      }`}
                    />
                    {checked && (
                      <div className="flex items-start justify-between gap-2 pt-0.5">
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          <strong className={ok ? 'text-emerald-800' : 'text-rose-800'}>
                            {item.displayAnswer}
                          </strong>{' '}
                          — {item.explanationVi}
                        </p>
                        <button
                          type="button"
                          onClick={() => speakEnglish(item.displayAnswer)}
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100"
                          title="Nghe câu chuẩn"
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Test XII: Guided Short Paragraph about Favourite TV Programme (p.21) */}
          <section className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Test XII · Viết đoạn văn ngắn theo 6 câu hỏi gợi ý · Tr.21
                </p>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                  Write a short paragraph about your favourite TV programme
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-ipa text-xs font-bold text-slate-700 tabular-nums">
                  {paragraphWordCount} từ
                </span>
                <button
                  type="button"
                  onClick={() => setShowParagraphModel((v) => !v)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-900 hover:bg-blue-100"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>{showParagraphModel ? 'Ẩn bài mẫu' : 'Xem bài mẫu song ngữ'}</span>
                </button>
              </div>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {U7_TEST_XII_CLUES.map((clue) => (
                <button
                  key={clue.num}
                  type="button"
                  onClick={() =>
                    setParagraphText((prev) =>
                      prev.trim() ? `${prev.trim()} ${clue.sentenceHint}` : clue.sentenceHint
                    )
                  }
                  className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-left transition-colors hover:border-blue-300 hover:bg-blue-50/50"
                >
                  <p className="text-[11px] font-bold text-blue-800">
                    Gợi ý {clue.num} · Chạm để chèn câu
                  </p>
                  <p className="text-xs font-semibold text-slate-900 mt-0.5">{clue.question}</p>
                  <p className="text-[11px] text-slate-600 mt-1">→ {clue.cue}</p>
                </button>
              ))}
            </div>

            <textarea
              rows={5}
              value={paragraphText}
              onChange={(e) => setParagraphText(e.target.value)}
              placeholder='Viết đoạn văn về chương trình TV em yêu thích (VD: My favourite TV programme is "Who is a Millionaire?"...)'
              className="w-full rounded-xl border border-slate-200 bg-slate-50/40 p-3.5 text-sm leading-relaxed text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />

            {showParagraphModel && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Bài văn mẫu tham khảo · Game show: Who is a Millionaire? (VTV3)
                  </p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(U7_TEST_XII_MODEL_EN)}
                    className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                    Nghe đoạn mẫu
                  </button>
                </div>
                <p className="text-sm font-medium text-slate-900 leading-relaxed">
                  {U7_TEST_XII_MODEL_EN}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed border-t border-emerald-200/70 pt-2">
                  <strong>Dịch nghĩa:</strong> {U7_TEST_XII_MODEL_VI}
                </p>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
