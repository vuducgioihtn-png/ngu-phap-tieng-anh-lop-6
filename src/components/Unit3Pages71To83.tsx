import { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Eye,
  FileCheck2,
  PenLine,
  RotateCcw,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  TEST3_PART1_ODD,
  TEST3_PART2_OPPOSITES,
  TEST3_PART3_MCQ,
  TEST3_PART4_VERBS,
  TEST3_PART5_MISTAKES,
  TEST3_PART6_WORD_FORM,
  TEST3_PART7_PREPOSITIONS,
  TEST3_PART8_WH_QUESTIONS,
  TEST3_PART9_ANSWERS,
  TEST3_PART9_SEGMENTS,
  TEST3_PART10_PASSAGE,
  TEST3_PART10_QA,
  TEST3_PART11_ANSWERS,
  TEST3_PART11_BOX,
  TEST3_PART11_SEGMENTS,
  TEST3_PART12_MCQS,
  TEST3_PART12_PASSAGE,
  TEST3_PART13_REWRITE,
  U3_EX2_12_MCQ,
  U3_EX2_13_DIALOGUE,
  U3_EX2_13_SENTENCES_BOX,
  U3_EX3_1_ANSWERS,
  U3_EX3_1_EXPLAINS,
  U3_EX3_1_SEGMENTS,
  U3_EX3_2_JANE_MCQS,
  U3_EX3_2_JANE_PASSAGE,
  U3_EX3_3_MAX_MCQS,
  U3_EX3_3_MAX_PASSAGE,
  U3_EX4_1_BE_QA,
  U3_EX4_2_HAVE_QA,
  U3_EX4_3_REORDER,
  U3_EX4_4_TUAN_PROFILE,
} from '../data/unit3Pages63To83';
import { speakEnglish } from '../utils/speech';

function normText(s: string): string {
  return s
    .replace(/[’‘`]/g, "'")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.?!]+$/, '')
    .trim();
}

function matchesAny(input: string, primary: string, accepted?: string[]): boolean {
  const n = normText(input);
  if (!n) return false;
  if (n === normText(primary)) return true;
  return (accepted ?? []).some((a) => n === normText(a));
}

function countWords(text: string): number {
  const cleaned = text.trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).length;
}

/* =========================================================================
   STATION 04: BÀI II.12 (15 TRẮC NGHIỆM) & BÀI II.13 (HỘI THOẠI PETER–MARY)
   Book Pages 71–72
   ========================================================================= */
export function Unit3Station4() {
  const [mcqAns, setMcqAns] = useState<Record<number, number>>({});
  const [dlgAns, setDlgAns] = useState<Record<number, string>>({});
  const [dlgChecked, setDlgChecked] = useState(false);

  const mcqCorrect = U3_EX2_12_MCQ.filter((q) => mcqAns[q.id] === q.correctIndex).length;
  const dlgCorrect = U3_EX2_13_DIALOGUE.filter(
    (slot) => dlgAns[slot.id] === slot.answer
  ).length;

  return (
    <div className="space-y-6">
      {/* Bài II.12: 15 MCQs */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Bài II.12 · Trang 71–72
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Trắc nghiệm Từ vựng &amp; Từ loại (15 câu)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Chọn đáp án đúng nhất A, B, C hoặc D — có giải thích ngữ pháp &amp; từ loại ngay khi chọn.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-violet-700 tabular-nums">
              Đúng: {mcqCorrect}/{U3_EX2_12_MCQ.length}
            </span>
            <button
              type="button"
              onClick={() => setMcqAns({})}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="grid gap-3.5 md:grid-cols-2">
          {U3_EX2_12_MCQ.map((item) => {
            const chosen = mcqAns[item.id];
            const answered = chosen !== undefined;
            const ok = chosen === item.correctIndex;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2.5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  <span className="font-ipa text-violet-700 mr-1.5">{item.id}.</span>
                  {item.question}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {item.options.map((opt, idx) => {
                    const letter = String.fromCharCode(65 + idx);
                    let cls =
                      'border-slate-200 bg-white text-slate-800 hover:border-violet-300';
                    if (answered) {
                      if (idx === item.correctIndex) {
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (idx === chosen) {
                        cls = 'border-rose-400 bg-rose-50 text-rose-900';
                      }
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setMcqAns((p) => ({ ...p, [item.id]: idx }))}
                        className={`rounded-lg border px-3 py-2 text-left text-xs sm:text-sm transition-colors ${cls}`}
                      >
                        <span className="font-ipa font-bold mr-1.5">{letter}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <div
                    className={`flex items-start gap-2 rounded-lg p-2.5 text-xs ${
                      ok
                        ? 'bg-emerald-50 text-emerald-900'
                        : 'bg-rose-50 text-rose-900'
                    }`}
                  >
                    {ok ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    ) : (
                      <XCircle className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" />
                    )}
                    <span>{item.explainVi}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bài II.13: Peter & Mary Dialogue */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Bài II.13 · Trang 72
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Hoàn thành hội thoại giữa Peter và Mary (7 câu hỏi)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Đọc câu trả lời của Mary để chọn câu hỏi phù hợp của Peter trong khung cho sẵn.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {dlgChecked && (
              <span className="font-ipa text-xs font-bold text-emerald-700 tabular-nums">
                Đúng: {dlgCorrect}/{U3_EX2_13_DIALOGUE.length}
              </span>
            )}
            <button
              type="button"
              onClick={() => setDlgChecked(true)}
              className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
            >
              Kiểm tra
            </button>
            <button
              type="button"
              onClick={() => {
                setDlgAns({});
                setDlgChecked(false);
              }}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              Làm lại
            </button>
          </div>
        </div>

        {/* Question Bank Reference */}
        <div className="rounded-xl border border-violet-200 bg-violet-50/50 p-3.5">
          <p className="text-xs font-bold text-violet-900 mb-2">
            Khung 7 câu hỏi của Peter:
          </p>
          <div className="flex flex-wrap gap-2">
            {U3_EX2_13_SENTENCES_BOX.map((q) => {
              const used = Object.values(dlgAns).includes(q);
              return (
                <span
                  key={q}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${
                    used
                      ? 'border-slate-200 bg-slate-100 text-slate-400 line-through'
                      : 'border-violet-200 bg-white text-slate-800'
                  }`}
                >
                  {q}
                </span>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          {U3_EX2_13_DIALOGUE.map((slot) => {
            const val = dlgAns[slot.id] ?? '';
            const ok = val === slot.answer;
            return (
              <div
                key={slot.id}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 space-y-2.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-xs font-bold text-violet-700 shrink-0 w-16">
                    Peter ({slot.id}):
                  </span>
                  <select
                    value={val}
                    onChange={(e) => {
                      setDlgAns((p) => ({ ...p, [slot.id]: e.target.value }));
                      if (dlgChecked) setDlgChecked(false);
                    }}
                    className={`flex-1 rounded-lg border px-3 py-2 text-xs sm:text-sm font-semibold focus:outline-none ${
                      dlgChecked
                        ? ok
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white text-slate-800 focus:border-violet-500'
                    }`}
                  >
                    <option value="">-- Chọn câu hỏi của Peter --</option>
                    {U3_EX2_13_SENTENCES_BOX.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-start justify-between gap-2 pl-0 sm:pl-18">
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-emerald-700">Mary:</strong> {slot.maryReply}
                  </p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(`${slot.answer} ${slot.maryReply}`)}
                    className="shrink-0 rounded-lg border border-slate-200 bg-white p-1.5 text-slate-600 hover:text-violet-700"
                    title="Nghe cặp hội thoại"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                {dlgChecked && (
                  <div
                    className={`flex items-start gap-2 rounded-lg p-2.5 text-xs ${
                      ok
                        ? 'bg-emerald-50 text-emerald-900'
                        : 'bg-rose-50 text-rose-900'
                    }`}
                  >
                    {ok ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    ) : (
                      <XCircle className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" />
                    )}
                    <span>
                      {!ok && (
                        <>
                          Đáp án đúng: <strong>{slot.answer}</strong> —{' '}
                        </>
                      )}
                      {slot.explainVi}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

/* =========================================================================
   STATION 05: BÀI III — 3 BÀI ĐỌC HIỂU (DAISY, JANE, MAX & HELEN)
   Book Pages 73–74
   ========================================================================= */
export function Unit3Station5() {
  const [daisyInputs, setDaisyInputs] = useState<Record<number, string>>({});
  const [daisyChecked, setDaisyChecked] = useState(false);

  const [janeAns, setJaneAns] = useState<Record<number, number>>({});
  const [maxAns, setMaxAns] = useState<Record<number, number>>({});

  const daisyScore = U3_EX3_1_ANSWERS.filter(
    (ans, idx) => normText(daisyInputs[idx] ?? '') === normText(ans)
  ).length;

  const fullDaisyText = U3_EX3_1_SEGMENTS.reduce(
    (acc, seg, idx) => acc + seg + (U3_EX3_1_ANSWERS[idx] ?? ''),
    ''
  );

  return (
    <div className="space-y-6">
      {/* Bài III.1: Daisy 12-verb Cloze */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Bài III.1 · Trang 73
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Điền 1 động từ thích hợp vào mỗi chỗ trống — Bạn thân Daisy (12 chỗ trống)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Gợi ý: chủ yếu dùng <span className="font-ipa font-bold">is, are, has, lives, dances</span>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(fullDaisyText)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-800 hover:bg-violet-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe cả đoạn
            </button>
            <button
              type="button"
              onClick={() => setDaisyChecked(true)}
              className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
            >
              Kiểm tra ({daisyChecked ? `${daisyScore}/12` : '12 chỗ'})
            </button>
            <button
              type="button"
              onClick={() => {
                setDaisyInputs({});
                setDaisyChecked(false);
              }}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              Làm lại
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5 text-sm sm:text-base leading-loose text-slate-800">
          {U3_EX3_1_SEGMENTS.map((seg, idx) => {
            const hasBlank = idx < U3_EX3_1_ANSWERS.length;
            const val = daisyInputs[idx] ?? '';
            const ok = normText(val) === normText(U3_EX3_1_ANSWERS[idx] ?? '');
            return (
              <span key={idx}>
                {seg}
                {hasBlank && (
                  <span className="inline-flex items-center gap-1 mx-1 align-baseline">
                    <span className="font-ipa text-[11px] font-bold text-slate-400">
                      ({idx + 1})
                    </span>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setDaisyInputs((p) => ({ ...p, [idx]: e.target.value }));
                        if (daisyChecked) setDaisyChecked(false);
                      }}
                      placeholder="..."
                      className={`w-20 rounded-md border px-2 py-0.5 text-center font-ipa text-xs sm:text-sm font-bold focus:outline-none ${
                        daisyChecked
                          ? ok
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white text-slate-900 focus:border-violet-500'
                      }`}
                    />
                    {daisyChecked && !ok && (
                      <span className="font-ipa text-xs font-bold text-emerald-700">
                        [{U3_EX3_1_ANSWERS[idx]}]
                      </span>
                    )}
                  </span>
                )}
              </span>
            );
          })}
        </div>

        {daisyChecked && (
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {U3_EX3_1_ANSWERS.map((ans, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700"
              >
                <span className="font-ipa font-bold text-violet-700">
                  ({idx + 1}) {ans}:
                </span>{' '}
                {U3_EX3_1_EXPLAINS[idx]}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bài III.2: Jane the Gymnast */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Bài III.2 · Trang 73
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Đọc hiểu — Jane (Vận động viên thể dục dụng cụ · 5 câu)
            </h3>
          </div>
          <button
            type="button"
            onClick={() => speakEnglish(U3_EX3_2_JANE_PASSAGE)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-800 hover:bg-violet-100"
          >
            <Volume2 className="h-3.5 w-3.5" />
            Nghe bài đọc
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {U3_EX3_2_JANE_PASSAGE}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U3_EX3_2_JANE_MCQS.map((q) => {
            const chosen = janeAns[q.id];
            const answered = chosen !== undefined;
            const ok = chosen === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="space-y-1.5">
                  {q.options.map((opt, idx) => {
                    let cls =
                      'border-slate-200 bg-slate-50/60 text-slate-800 hover:border-violet-300';
                    if (answered) {
                      if (idx === q.correctIndex)
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (idx === chosen)
                        cls = 'border-rose-400 bg-rose-50 text-rose-900';
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setJaneAns((p) => ({ ...p, [q.id]: idx }))}
                        className={`w-full rounded-lg border px-3 py-2 text-left text-xs sm:text-sm transition-colors ${cls}`}
                      >
                        <span className="font-ipa font-bold mr-1.5">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <p
                    className={`rounded-lg p-2 text-xs font-medium ${
                      ok
                        ? 'bg-emerald-50 text-emerald-900'
                        : 'bg-rose-50 text-rose-900'
                    }`}
                  >
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bài III.3: Max & Helen */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Bài III.3 · Trang 74
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Đọc hiểu — Max và người bạn Helen (5 câu)
            </h3>
          </div>
          <button
            type="button"
            onClick={() => speakEnglish(U3_EX3_3_MAX_PASSAGE)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-800 hover:bg-violet-100"
          >
            <Volume2 className="h-3.5 w-3.5" />
            Nghe bài đọc
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {U3_EX3_3_MAX_PASSAGE}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U3_EX3_3_MAX_MCQS.map((q) => {
            const chosen = maxAns[q.id];
            const answered = chosen !== undefined;
            const ok = chosen === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="space-y-1.5">
                  {q.options.map((opt, idx) => {
                    let cls =
                      'border-slate-200 bg-slate-50/60 text-slate-800 hover:border-violet-300';
                    if (answered) {
                      if (idx === q.correctIndex)
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (idx === chosen)
                        cls = 'border-rose-400 bg-rose-50 text-rose-900';
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setMaxAns((p) => ({ ...p, [q.id]: idx }))}
                        className={`w-full rounded-lg border px-3 py-2 text-left text-xs sm:text-sm transition-colors ${cls}`}
                      >
                        <span className="font-ipa font-bold mr-1.5">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <p
                    className={`rounded-lg p-2 text-xs font-medium ${
                      ok
                        ? 'bg-emerald-50 text-emerald-900'
                        : 'bg-rose-50 text-rose-900'
                    }`}
                  >
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

/* =========================================================================
   STATION 06: BÀI IV — 4 BÀI TẬP VIẾT (BE Q&A, HAVE Q&A, SẮP XẾP CÂU, VIẾT ĐOẠN)
   Book Pages 74–76
   ========================================================================= */
export function Unit3Station6() {
  // IV.1 BE Q&A
  const [beQ, setBeQ] = useState<Record<number, string>>({});
  const [beA, setBeA] = useState<Record<number, string>>({});
  const [beChecked, setBeChecked] = useState(false);

  // IV.2 HAVE Q&A
  const [haveQ, setHaveQ] = useState<Record<number, string>>({});
  const [haveA, setHaveA] = useState<Record<number, string>>({});
  const [haveChecked, setHaveChecked] = useState(false);

  // IV.3 Reorder Word Tiles
  const [pickedIndices, setPickedIndices] = useState<Record<number, number[]>>({});
  const [reorderChecked, setReorderChecked] = useState(false);

  // IV.4 Guided Paragraph about Tuan
  const [essay, setEssay] = useState('');
  const [showModel, setShowModel] = useState(false);

  const toggleWordTile = (itemId: number, wordIdx: number) => {
    setPickedIndices((prev) => {
      const current = prev[itemId] ?? [];
      if (current.includes(wordIdx)) {
        return { ...prev, [itemId]: current.filter((i) => i !== wordIdx) };
      }
      return { ...prev, [itemId]: [...current, wordIdx] };
    });
    if (reorderChecked) setReorderChecked(false);
  };

  return (
    <div className="space-y-6">
      {/* Bài IV.1: 5 BE Q&A */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Bài IV.1 · Trang 74–75
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Đặt câu hỏi &amp; trả lời với động từ TO BE (5 câu)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Mẫu: <em>she / pretty → Is she pretty? — Yes, she is.</em> · <em>he / tall / short → Is he tall? — No, he isn&apos;t. He is short.</em>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setBeChecked(true)}
              className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
            >
              Kiểm tra
            </button>
            <button
              type="button"
              onClick={() => {
                setBeQ({});
                setBeA({});
                setBeChecked(false);
              }}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              Làm lại
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {U3_EX4_1_BE_QA.map((item) => {
            const qOk = matchesAny(beQ[item.id] ?? '', item.questionAnswer);
            const aOk = matchesAny(
              beA[item.id] ?? '',
              item.replyAnswer,
              item.acceptedReplies
            );
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-2.5"
              >
                <p className="font-ipa text-xs sm:text-sm font-bold text-violet-800">
                  {item.id}. {item.cue}
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <input
                    type="text"
                    value={beQ[item.id] ?? ''}
                    onChange={(e) => {
                      setBeQ((p) => ({ ...p, [item.id]: e.target.value }));
                      if (beChecked) setBeChecked(false);
                    }}
                    placeholder="Viết câu hỏi (Is/Are ...?)"
                    className={`rounded-lg border px-3 py-2 text-xs sm:text-sm focus:outline-none ${
                      beChecked
                        ? qOk
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white text-slate-900 focus:border-violet-500'
                    }`}
                  />
                  <input
                    type="text"
                    value={beA[item.id] ?? ''}
                    onChange={(e) => {
                      setBeA((p) => ({ ...p, [item.id]: e.target.value }));
                      if (beChecked) setBeChecked(false);
                    }}
                    placeholder="Viết câu trả lời (Yes/No, ...)"
                    className={`rounded-lg border px-3 py-2 text-xs sm:text-sm focus:outline-none ${
                      beChecked
                        ? aOk
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white text-slate-900 focus:border-violet-500'
                    }`}
                  />
                </div>
                {beChecked && (
                  <div className="flex items-start justify-between gap-2 rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs text-slate-700">
                    <div>
                      <span className="font-bold text-emerald-700">Đáp án chuẩn:</span>{' '}
                      <span className="font-semibold text-slate-900">
                        {item.questionAnswer} — {item.replyAnswer}
                      </span>
                      <span className="text-slate-500"> ({item.explainVi})</span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        speakEnglish(`${item.questionAnswer} ${item.replyAnswer}`)
                      }
                      className="shrink-0 text-violet-700 hover:text-violet-900"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bài IV.2: 5 HAVE Q&A */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Bài IV.2 · Trang 75
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Đặt câu hỏi &amp; trả lời với động từ HAVE (5 câu)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Mẫu: <em>he / blue eyes / brown eyes → Does he have blue eyes? — No, he doesn&apos;t. He has brown eyes.</em>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setHaveChecked(true)}
              className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
            >
              Kiểm tra
            </button>
            <button
              type="button"
              onClick={() => {
                setHaveQ({});
                setHaveA({});
                setHaveChecked(false);
              }}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              Làm lại
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {U3_EX4_2_HAVE_QA.map((item) => {
            const qOk = matchesAny(haveQ[item.id] ?? '', item.questionAnswer);
            const aOk = matchesAny(
              haveA[item.id] ?? '',
              item.replyAnswer,
              item.acceptedReplies
            );
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-2.5"
              >
                <p className="font-ipa text-xs sm:text-sm font-bold text-violet-800">
                  {item.id}. {item.cue}
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <input
                    type="text"
                    value={haveQ[item.id] ?? ''}
                    onChange={(e) => {
                      setHaveQ((p) => ({ ...p, [item.id]: e.target.value }));
                      if (haveChecked) setHaveChecked(false);
                    }}
                    placeholder="Viết câu hỏi (Do/Does ... have ...?)"
                    className={`rounded-lg border px-3 py-2 text-xs sm:text-sm focus:outline-none ${
                      haveChecked
                        ? qOk
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white text-slate-900 focus:border-violet-500'
                    }`}
                  />
                  <input
                    type="text"
                    value={haveA[item.id] ?? ''}
                    onChange={(e) => {
                      setHaveA((p) => ({ ...p, [item.id]: e.target.value }));
                      if (haveChecked) setHaveChecked(false);
                    }}
                    placeholder="Viết câu trả lời (Yes/No, ...)"
                    className={`rounded-lg border px-3 py-2 text-xs sm:text-sm focus:outline-none ${
                      haveChecked
                        ? aOk
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white text-slate-900 focus:border-violet-500'
                    }`}
                  />
                </div>
                {haveChecked && (
                  <div className="flex items-start justify-between gap-2 rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs text-slate-700">
                    <div>
                      <span className="font-bold text-emerald-700">Đáp án chuẩn:</span>{' '}
                      <span className="font-semibold text-slate-900">
                        {item.questionAnswer} — {item.replyAnswer}
                      </span>
                      <span className="text-slate-500"> ({item.explainVi})</span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        speakEnglish(`${item.questionAnswer} ${item.replyAnswer}`)
                      }
                      className="shrink-0 text-violet-700 hover:text-violet-900"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bài IV.3: 10 Word-Tile Sentence Reorders */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Bài IV.3 · Trang 75–76
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Sắp xếp từ thành câu đúng trật tự tính từ (10 câu)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Chạm từng thẻ từ theo đúng thứ tự (Độ dài/Kích thước → Kiểu dáng → Màu sắc + Danh từ). Chạm lại thẻ đã chọn để gỡ.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setReorderChecked(true)}
              className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
            >
              Kiểm tra 10 câu
            </button>
            <button
              type="button"
              onClick={() => {
                setPickedIndices({});
                setReorderChecked(false);
              }}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              Làm lại
            </button>
          </div>
        </div>

        <div className="space-y-3.5">
          {U3_EX4_3_REORDER.map((item) => {
            const chosen = pickedIndices[item.id] ?? [];
            const built = chosen.map((idx) => item.words[idx]).join(' ');
            const ok = normText(built) === normText(item.answer);
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-ipa text-xs font-bold text-violet-700">
                    Câu {item.id}
                  </span>
                  {chosen.length > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setPickedIndices((p) => ({ ...p, [item.id]: [] }))
                      }
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      Xóa câu này
                    </button>
                  )}
                </div>

                {/* Answer Tray */}
                <div
                  className={`min-h-11 rounded-lg border border-dashed px-3 py-2 flex flex-wrap items-center gap-1.5 ${
                    reorderChecked
                      ? ok
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-rose-400 bg-rose-50'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {chosen.length === 0 ? (
                    <span className="text-xs text-slate-400">
                      Chạm các thẻ từ bên dưới để ghép câu...
                    </span>
                  ) : (
                    chosen.map((wIdx) => (
                      <button
                        key={`sel-${wIdx}`}
                        type="button"
                        onClick={() => toggleWordTile(item.id, wIdx)}
                        className="rounded-md bg-violet-600 px-2.5 py-1 text-xs sm:text-sm font-semibold text-white hover:bg-violet-700"
                      >
                        {item.words[wIdx]}
                      </button>
                    ))
                  )}
                </div>

                {/* Source Bank */}
                <div className="flex flex-wrap gap-1.5">
                  {item.words.map((w, wIdx) => {
                    const used = chosen.includes(wIdx);
                    return (
                      <button
                        key={`${w}-${wIdx}`}
                        type="button"
                        disabled={used}
                        onClick={() => toggleWordTile(item.id, wIdx)}
                        className={`rounded-md border px-2.5 py-1 text-xs sm:text-sm font-medium transition-colors ${
                          used
                            ? 'border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed'
                            : 'border-slate-300 bg-white text-slate-800 hover:border-violet-400 hover:bg-violet-50'
                        }`}
                      >
                        {w}
                      </button>
                    );
                  })}
                </div>

                {reorderChecked && (
                  <div
                    className={`flex items-start justify-between gap-2 rounded-lg p-2.5 text-xs ${
                      ok
                        ? 'bg-emerald-50 text-emerald-900'
                        : 'bg-rose-50 text-rose-900'
                    }`}
                  >
                    <div className="flex items-start gap-1.5">
                      {ok ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      ) : (
                        <XCircle className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" />
                      )}
                      <span>
                        <strong>{item.answer}</strong> — {item.explainVi}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.answer)}
                      className="shrink-0 text-violet-700 hover:text-violet-900"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bài IV.4: Guided Paragraph about Tuan */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Bài IV.4 · Trang 76
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Viết đoạn văn miêu tả người bạn thân (Tuấn · 60–80 từ)
            </h3>
          </div>
          <span className="font-ipa text-xs font-bold text-violet-700 tabular-nums">
            Số từ đã viết: {countWords(essay)} từ
          </span>
        </div>

        {/* Profile Card */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 rounded-xl border border-violet-200 bg-violet-50/50 p-4 text-xs">
          <div>
            <p className="font-bold text-violet-800 uppercase">Name (Tên)</p>
            <p className="text-slate-900 font-semibold mt-1">{U3_EX4_4_TUAN_PROFILE.name}</p>
          </div>
          <div>
            <p className="font-bold text-violet-800 uppercase">Appearance (Ngoại hình)</p>
            <p className="text-slate-900 mt-1">{U3_EX4_4_TUAN_PROFILE.appearance}</p>
          </div>
          <div>
            <p className="font-bold text-violet-800 uppercase">Character (Tính cách)</p>
            <p className="text-slate-900 mt-1">{U3_EX4_4_TUAN_PROFILE.character}</p>
          </div>
          <div>
            <p className="font-bold text-violet-800 uppercase">Hobbies (Sở thích)</p>
            <p className="text-slate-900 mt-1">{U3_EX4_4_TUAN_PROFILE.hobbies}</p>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="u3-tuan-essay"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700"
          >
            <PenLine className="h-3.5 w-3.5 text-violet-600" />
            Bài viết của em:
          </label>
          <textarea
            id="u3-tuan-essay"
            rows={5}
            value={essay}
            onChange={(e) => setEssay(e.target.value)}
            placeholder="My best friend is Tuan. He is tall and handsome. He has..."
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm leading-relaxed text-slate-900 focus:border-violet-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowModel((p) => !p)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white hover:bg-violet-700"
          >
            <Eye className="h-4 w-4" />
            {showModel ? 'Ẩn đoạn văn mẫu' : 'Xem đoạn văn mẫu chuẩn SGK'}
          </button>
          <button
            type="button"
            onClick={() => speakEnglish(U3_EX4_4_TUAN_PROFILE.modelParagraph)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-800 hover:bg-violet-100"
          >
            <Volume2 className="h-4 w-4" />
            Nghe đọc đoạn mẫu
          </button>
        </div>

        {showModel && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 space-y-2 text-sm">
            <p className="font-bold text-emerald-900">Đoạn văn mẫu (Model Paragraph):</p>
            <p className="leading-relaxed text-slate-900">
              {U3_EX4_4_TUAN_PROFILE.modelParagraph}
            </p>
            <p className="text-xs leading-relaxed text-slate-600 border-t border-emerald-200 pt-2">
              <strong>Dịch nghĩa:</strong> {U3_EX4_4_TUAN_PROFILE.translationVi}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

/* =========================================================================
   STATION 07: TEST FOR UNIT 3 — COMPLETE 13 PARTS (I → XIII)
   Book Pages 77–83
   ========================================================================= */
const TEST3_PARTS_NAV = [
  { id: 't3-p1', code: 'I', label: 'Khác loại (8)' },
  { id: 't3-p2', code: 'II', label: 'Trái nghĩa (8)' },
  { id: 't3-p3', code: 'III', label: 'Trắc nghiệm (15)' },
  { id: 't3-p4', code: 'IV', label: 'Chia động từ (10)' },
  { id: 't3-p5', code: 'V', label: 'Sửa lỗi sai (8)' },
  { id: 't3-p6', code: 'VI', label: 'Word Form (10)' },
  { id: 't3-p7', code: 'VII', label: 'Giới từ (8)' },
  { id: 't3-p8', code: 'VIII', label: 'Đặt câu hỏi (5)' },
  { id: 't3-p9', code: 'IX', label: 'Đoạn văn Niên (11)' },
  { id: 't3-p10', code: 'X', label: 'Đọc Mai & Vy (8)' },
  { id: 't3-p11', code: 'XI', label: 'Điền từ Hằng (10)' },
  { id: 't3-p12', code: 'XII', label: 'Đọc Hoa & Thu (5)' },
  { id: 't3-p13', code: 'XIII', label: 'Viết lại câu (10)' },
] as const;

export function Unit3FullTestSection() {
  const [graded, setGraded] = useState(false);

  const [p1, setP1] = useState<Record<number, number>>({});
  const [p2, setP2] = useState<Record<number, number>>({});
  const [p3, setP3] = useState<Record<number, number>>({});
  const [p4, setP4] = useState<Record<number, string>>({});
  const [p5Wrong, setP5Wrong] = useState<Record<number, string>>({});
  const [p5Fix, setP5Fix] = useState<Record<number, string>>({});
  const [p6, setP6] = useState<Record<number, string>>({});
  const [p7, setP7] = useState<Record<string, string>>({});
  const [p8, setP8] = useState<Record<number, string>>({});
  const [p9, setP9] = useState<Record<number, string>>({});
  const [p10, setP10] = useState<Record<number, string>>({});
  const [p11, setP11] = useState<Record<number, string>>({});
  const [p12, setP12] = useState<Record<number, number>>({});
  const [p13, setP13] = useState<Record<number, string>>({});

  // Auto-grading counts across all 13 parts (Total = 116)
  const s1 = TEST3_PART1_ODD.filter((i) => p1[i.id] === i.correctIndex).length;
  const s2 = TEST3_PART2_OPPOSITES.filter((i) => p2[i.id] === i.correctIndex).length;
  const s3 = TEST3_PART3_MCQ.filter((i) => p3[i.id] === i.correctIndex).length;
  const s4 = TEST3_PART4_VERBS.filter((i) =>
    matchesAny(p4[i.id] ?? '', i.answers[0], i.acceptedPerBlank?.[0])
  ).length;
  const s5 = TEST3_PART5_MISTAKES.filter(
    (i) =>
      normText(p5Wrong[i.id] ?? '') === normText(i.wrong) &&
      normText(p5Fix[i.id] ?? '') === normText(i.fix)
  ).length;
  const s6 = TEST3_PART6_WORD_FORM.filter(
    (i) => normText(p6[i.id] ?? '') === normText(i.answer)
  ).length;
  const s7 = TEST3_PART7_PREPOSITIONS.filter((i) =>
    i.answers.every((ans, bIdx) =>
      matchesAny(p7[`${i.id}-${bIdx}`] ?? '', ans, i.acceptedPerBlank?.[bIdx])
    )
  ).length;
  const s8 = TEST3_PART8_WH_QUESTIONS.filter((i) =>
    matchesAny(p8[i.id] ?? '', i.answer, i.accepted)
  ).length;
  const s9 = TEST3_PART9_ANSWERS.filter((item, idx) =>
    matchesAny(p9[idx] ?? '', item.ans, item.accepted)
  ).length;
  const s10 = TEST3_PART10_QA.filter((i) =>
    matchesAny(p10[i.id] ?? '', i.answer, i.accepted)
  ).length;
  const s11 = TEST3_PART11_ANSWERS.filter(
    (ans, idx) => normText(p11[idx] ?? '') === normText(ans)
  ).length;
  const s12 = TEST3_PART12_MCQS.filter((i) => p12[i.id] === i.correctIndex).length;
  const s13 = TEST3_PART13_REWRITE.filter((i) =>
    matchesAny(p13[i.id] ?? '', i.answer, i.accepted)
  ).length;

  const totalScore = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12 + s13;
  const maxScore = 116;

  const resetAll = () => {
    setGraded(false);
    setP1({});
    setP2({});
    setP3({});
    setP4({});
    setP5Wrong({});
    setP5Fix({});
    setP6({});
    setP7({});
    setP8({});
    setP9({});
    setP10({});
    setP11({});
    setP12({});
    setP13({});
  };

  const scrollToPart = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-6">
      {/* Exam Header + Quick Jump Bar */}
      <section className="rounded-2xl border border-violet-200 bg-violet-50/60 p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              TEST FOR UNIT 3 · Sách Trang 77–83 (Trọn bộ 13 Phần · 116 câu)
            </p>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Đề kiểm tra tổng hợp Unit 3: My Friends
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Làm trực tiếp từng phần rồi nhấn <strong>Chấm điểm toàn đề</strong> để xem tổng điểm và giải thích chi tiết từng câu.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div className="rounded-xl border border-violet-200 bg-white px-4 py-2 text-center">
              <p className="text-[11px] font-semibold text-slate-500">Tổng điểm</p>
              <p className="font-display text-lg font-extrabold text-violet-700 tabular-nums">
                {graded ? `${totalScore}/${maxScore}` : `—/${maxScore}`}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setGraded(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-violet-700"
            >
              <FileCheck2 className="h-4 w-4" />
              Chấm điểm toàn đề
            </button>
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        {/* 13-Part Quick-Jump Anchors */}
        <div className="flex flex-wrap gap-1.5 border-t border-violet-200/80 pt-3">
          {TEST3_PARTS_NAV.map((part) => (
            <button
              key={part.id}
              type="button"
              onClick={() => scrollToPart(part.id)}
              className="rounded-lg border border-violet-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-violet-400 hover:bg-violet-100/70 transition-colors"
            >
              <span className="font-ipa font-bold text-violet-700">{part.code}.</span>{' '}
              {part.label}
            </button>
          ))}
        </div>
      </section>

      {/* PART I: Odd One Out */}
      <section id="t3-p1" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part I. Find the word which does not belong to each group (8 câu · Tr.77)
          </h3>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s1}/8</span>}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {TEST3_PART1_ODD.map((item) => {
            const chosen = p1[item.id];
            const ok = chosen === item.correctIndex;
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                <p className="font-ipa text-xs font-bold text-violet-700">Câu {item.id}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {item.options.map((opt, idx) => {
                    let cls = 'border-slate-200 bg-white text-slate-800 hover:border-violet-300';
                    if (graded) {
                      if (idx === item.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (idx === chosen) cls = 'border-rose-400 bg-rose-50 text-rose-900';
                    } else if (chosen === idx) {
                      cls = 'border-violet-600 bg-violet-50 text-violet-900 font-bold';
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP1((prev) => ({ ...prev, [item.id]: idx }))}
                        className={`rounded-lg border px-2.5 py-1.5 text-left text-xs sm:text-sm ${cls}`}
                      >
                        <span className="font-ipa font-bold mr-1">{String.fromCharCode(65 + idx)}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {graded && (
                  <p className={`text-xs rounded-lg p-2 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART II: Tick Opposites */}
      <section id="t3-p2" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part II. Choose the opposite word (8 câu · Tr.77)
          </h3>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s2}/8</span>}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TEST3_PART2_OPPOSITES.map((item) => {
            const chosen = p2[item.id];
            const ok = chosen === item.correctIndex;
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                <div>
                  <span className="font-ipa text-xs font-bold text-violet-700">{item.id}. </span>
                  <span className="font-display text-sm font-bold text-slate-900">{item.word}</span>
                  <span className="text-[11px] text-slate-500 ml-1">({item.wordVi})</span>
                </div>
                <div className="space-y-1.5">
                  {item.options.map((opt, idx) => {
                    let cls = 'border-slate-200 bg-white text-slate-800 hover:border-violet-300';
                    if (graded) {
                      if (idx === item.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (idx === chosen) cls = 'border-rose-400 bg-rose-50 text-rose-900';
                    } else if (chosen === idx) {
                      cls = 'border-violet-600 bg-violet-50 text-violet-900 font-bold';
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP2((prev) => ({ ...prev, [item.id]: idx }))}
                        className={`w-full rounded-lg border px-2.5 py-1.5 text-left text-xs font-semibold ${cls}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {graded && (
                  <p className={`text-[11px] rounded p-1.5 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART III: 15 MCQs */}
      <section id="t3-p3" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part III. Choose the best answer A, B, C or D (15 câu · Tr.77–78)
          </h3>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s3}/15</span>}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST3_PART3_MCQ.map((item) => {
            const chosen = p3[item.id];
            const ok = chosen === item.correctIndex;
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  <span className="font-ipa text-violet-700 mr-1">{item.id}.</span>
                  {item.question}
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {item.options.map((opt, idx) => {
                    let cls = 'border-slate-200 bg-white text-slate-800 hover:border-violet-300';
                    if (graded) {
                      if (idx === item.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (idx === chosen) cls = 'border-rose-400 bg-rose-50 text-rose-900';
                    } else if (chosen === idx) {
                      cls = 'border-violet-600 bg-violet-50 text-violet-900 font-bold';
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP3((prev) => ({ ...prev, [item.id]: idx }))}
                        className={`rounded-lg border px-2.5 py-1.5 text-left text-xs ${cls}`}
                      >
                        <span className="font-ipa font-bold mr-1">{String.fromCharCode(65 + idx)}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {graded && (
                  <p className={`text-xs rounded-lg p-2 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART IV: 10 Verb Forms */}
      <section id="t3-p4" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part IV. Put the verbs in brackets into Present Simple or Present Continuous (10 câu · Tr.79)
          </h3>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s4}/10</span>}
        </div>
        <div className="space-y-2.5">
          {TEST3_PART4_VERBS.map((item) => {
            const val = p4[item.id] ?? '';
            const ok = matchesAny(val, item.answers[0], item.acceptedPerBlank?.[0]);
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-800">
                  <span className="font-ipa font-bold text-violet-700">{item.id}.</span>
                  <span>{item.parts[0]}</span>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => setP4((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder="chia động từ..."
                    className={`w-36 rounded-md border px-2.5 py-1 font-ipa text-xs sm:text-sm font-semibold focus:outline-none ${
                      graded
                        ? ok
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white text-slate-900 focus:border-violet-500'
                    }`}
                  />
                  <span>{item.parts[1]}</span>
                </div>
                {graded && (
                  <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    <strong>{item.answers[0]}</strong> — {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART V: Find & Correct 8 Mistakes */}
      <section id="t3-p5" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
              Part V. Find and correct the mistake in each sentence (8 câu · Tr.79)
            </h3>
            <p className="text-xs text-slate-500">
              Ghi từ/cụm sai ở ô trái và cách sửa đúng ở ô phải.
            </p>
          </div>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s5}/8</span>}
        </div>
        <div className="space-y-2.5">
          {TEST3_PART5_MISTAKES.map((item) => {
            const wOk = normText(p5Wrong[item.id] ?? '') === normText(item.wrong);
            const fOk = normText(p5Fix[item.id] ?? '') === normText(item.fix);
            const ok = wOk && fOk;
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  <span className="font-ipa text-violet-700 mr-1.5">{item.id}.</span>
                  {item.sentence}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <input
                    type="text"
                    value={p5Wrong[item.id] ?? ''}
                    onChange={(e) => setP5Wrong((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder="Từ sai..."
                    className={`w-36 rounded-lg border px-2.5 py-1.5 text-xs font-semibold focus:outline-none ${
                      graded
                        ? wOk
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white focus:border-violet-500'
                    }`}
                  />
                  <span className="text-xs font-bold text-slate-400">→</span>
                  <input
                    type="text"
                    value={p5Fix[item.id] ?? ''}
                    onChange={(e) => setP5Fix((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder="Sửa thành..."
                    className={`w-44 rounded-lg border px-2.5 py-1.5 text-xs font-semibold focus:outline-none ${
                      graded
                        ? fOk
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white focus:border-violet-500'
                    }`}
                  />
                </div>
                {graded && (
                  <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    <span className="line-through text-rose-700">{item.wrong}</span> →{' '}
                    <strong className="text-emerald-800">{item.fix}</strong> ({item.explainVi})
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VI: 10 Word Forms */}
      <section id="t3-p6" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part VI. Give the correct form of the word in CAPITALS (10 câu · Tr.79–80)
          </h3>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s6}/10</span>}
        </div>
        <div className="grid gap-2.5 md:grid-cols-2">
          {TEST3_PART6_WORD_FORM.map((item) => {
            const val = p6[item.id] ?? '';
            const ok = normText(val) === normText(item.answer);
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <span className="font-ipa font-bold text-violet-700 mr-1">{item.id}.</span>
                  {item.before}{' '}
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => setP6((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder={item.root}
                    className={`mx-1 w-32 rounded-md border px-2 py-0.5 font-ipa text-xs font-bold focus:outline-none ${
                      graded
                        ? ok
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white focus:border-violet-500'
                    }`}
                  />{' '}
                  {item.after}{' '}
                  <span className="font-ipa text-[11px] font-bold text-amber-700">
                    ({item.root})
                  </span>
                </div>
                {graded && (
                  <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    <strong>{item.answer}</strong> — {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VII: 8 Prepositions */}
      <section id="t3-p7" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part VII. Fill in each blank with a suitable preposition (8 câu · Tr.80)
          </h3>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s7}/8</span>}
        </div>
        <div className="grid gap-2.5 md:grid-cols-2">
          {TEST3_PART7_PREPOSITIONS.map((item) => {
            const allOk = item.answers.every((ans, bIdx) =>
              matchesAny(p7[`${item.id}-${bIdx}`] ?? '', ans, item.acceptedPerBlank?.[bIdx])
            );
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <span className="font-ipa font-bold text-violet-700 mr-1">{item.id}.</span>
                  {item.parts.map((part, pIdx) => (
                    <span key={pIdx}>
                      {part}
                      {pIdx < item.answers.length && (
                        <input
                          type="text"
                          value={p7[`${item.id}-${pIdx}`] ?? ''}
                          onChange={(e) =>
                            setP7((prev) => ({
                              ...prev,
                              [`${item.id}-${pIdx}`]: e.target.value,
                            }))
                          }
                          placeholder="..."
                          className={`mx-1 w-16 rounded-md border px-2 py-0.5 text-center font-ipa text-xs font-bold focus:outline-none ${
                            graded
                              ? matchesAny(
                                  p7[`${item.id}-${pIdx}`] ?? '',
                                  item.answers[pIdx],
                                  item.acceptedPerBlank?.[pIdx]
                                )
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                                : 'border-rose-400 bg-rose-50 text-rose-900'
                              : 'border-slate-300 bg-white focus:border-violet-500'
                          }`}
                        />
                      )}
                    </span>
                  ))}
                </div>
                {graded && (
                  <p className={`text-xs rounded px-2 py-1 ${allOk ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    <strong>{item.answers.join(' / ')}</strong> — {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VIII: 5 Wh-Questions */}
      <section id="t3-p8" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part VIII. Make questions for the underlined parts (5 câu · Tr.80)
          </h3>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s8}/5</span>}
        </div>
        <div className="space-y-3">
          {TEST3_PART8_WH_QUESTIONS.map((item) => {
            const val = p8[item.id] ?? '';
            const ok = matchesAny(val, item.answer, item.accepted);
            const idx = item.sentence.indexOf(item.underlined);
            const before = idx >= 0 ? item.sentence.slice(0, idx) : item.sentence;
            const after =
              idx >= 0 ? item.sentence.slice(idx + item.underlined.length) : '';
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                <p className="text-xs sm:text-sm text-slate-900">
                  <span className="font-ipa font-bold text-violet-700 mr-1.5">{item.id}.</span>
                  {before}
                  <span className="underline decoration-violet-600 decoration-2 font-bold text-violet-900 bg-violet-100/70 px-1 rounded">
                    {item.underlined}
                  </span>
                  {after}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setP8((prev) => ({ ...prev, [item.id]: e.target.value }))}
                  placeholder="Đặt câu hỏi Wh-..."
                  className={`w-full rounded-lg border px-3 py-2 text-xs sm:text-sm focus:outline-none ${
                    graded
                      ? ok
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-rose-400 bg-rose-50 text-rose-900'
                      : 'border-slate-300 bg-white focus:border-violet-500'
                  }`}
                />
                {graded && (
                  <p className={`text-xs rounded px-2.5 py-1.5 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    <strong>{item.answer}</strong> — {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART IX: Complete Paragraph Nien & Hoa (11 verbs) */}
      <section id="t3-p9" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part IX. Complete the paragraph with the correct verb forms — Nien &amp; Hoa (11 câu · Tr.80–81)
          </h3>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s9}/11</span>}
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm leading-loose text-slate-800">
          {TEST3_PART9_SEGMENTS.map((seg, idx) => {
            const target = TEST3_PART9_ANSWERS[idx];
            const val = p9[idx] ?? '';
            const ok = target ? matchesAny(val, target.ans, target.accepted) : false;
            return (
              <span key={idx}>
                {seg}
                {target && (
                  <span className="inline-flex items-center gap-1 mx-1">
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setP9((prev) => ({ ...prev, [idx]: e.target.value }))}
                      placeholder="..."
                      className={`w-28 rounded-md border px-2 py-0.5 text-center font-ipa text-xs font-bold focus:outline-none ${
                        graded
                          ? ok
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white focus:border-violet-500'
                      }`}
                    />
                    {graded && !ok && (
                      <span className="font-ipa text-xs font-bold text-emerald-700">
                        [{target.ans}]
                      </span>
                    )}
                  </span>
                )}
              </span>
            );
          })}
        </div>
        {graded && (
          <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3 text-xs">
            {TEST3_PART9_ANSWERS.map((a, idx) => (
              <div key={idx} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-slate-700">
                <strong className="text-violet-700">({idx + 1}) {a.ans}:</strong> {a.noteVi}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PART X: Reading Mai & Vy (8 Q&A) */}
      <section id="t3-p10" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-violet-600" />
            <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
              Part X. Read the passage about Mai &amp; Vy and answer the questions (8 câu · Tr.81)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(TEST3_PART10_PASSAGE)}
              className="inline-flex items-center gap-1 rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-800 hover:bg-violet-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe bài đọc
            </button>
            {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s10}/8</span>}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800 whitespace-pre-line">
          {TEST3_PART10_PASSAGE}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST3_PART10_QA.map((item) => {
            const val = p10[item.id] ?? '';
            const ok = matchesAny(val, item.answer, item.accepted);
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  {item.id}. {item.question}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setP10((prev) => ({ ...prev, [item.id]: e.target.value }))}
                  placeholder="Viết câu trả lời..."
                  className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                    graded
                      ? ok
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-rose-400 bg-rose-50 text-rose-900'
                      : 'border-slate-300 bg-white focus:border-violet-500'
                  }`}
                />
                {graded && (
                  <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    <strong>{item.answer}</strong> — {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART XI: Cloze Box — Hang (10 words) */}
      <section id="t3-p11" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part XI. Fill in each blank with a word from the box — Hang (10 câu · Tr.82)
          </h3>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s11}/10</span>}
        </div>
        <div className="flex flex-wrap gap-2 rounded-xl border border-violet-200 bg-violet-50/50 p-3">
          {TEST3_PART11_BOX.map((word) => (
            <span
              key={word}
              className="rounded-md border border-violet-200 bg-white px-2.5 py-1 font-ipa text-xs font-bold text-slate-800"
            >
              {word}
            </span>
          ))}
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm leading-loose text-slate-800">
          {TEST3_PART11_SEGMENTS.map((seg, idx) => {
            const ans = TEST3_PART11_ANSWERS[idx];
            const val = p11[idx] ?? '';
            const ok = ans ? normText(val) === normText(ans) : false;
            return (
              <span key={idx}>
                {seg}
                {ans && (
                  <span className="inline-flex items-center gap-1 mx-1">
                    <select
                      value={val}
                      onChange={(e) => setP11((prev) => ({ ...prev, [idx]: e.target.value }))}
                      className={`rounded-md border px-2 py-0.5 font-ipa text-xs font-bold focus:outline-none ${
                        graded
                          ? ok
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white focus:border-violet-500'
                      }`}
                    >
                      <option value="">({idx + 1})</option>
                      {TEST3_PART11_BOX.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                    {graded && !ok && (
                      <span className="font-ipa text-xs font-bold text-emerald-700">
                        [{ans}]
                      </span>
                    )}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </section>

      {/* PART XII: Reading Hoa & Thu (5 MCQs) */}
      <section id="t3-p12" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part XII. Read the passage about Hoa &amp; Thu and choose A, B or C (5 câu · Tr.82–83)
          </h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(TEST3_PART12_PASSAGE)}
              className="inline-flex items-center gap-1 rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-800 hover:bg-violet-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe bài đọc
            </button>
            {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s12}/5</span>}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {TEST3_PART12_PASSAGE}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST3_PART12_MCQS.map((q) => {
            const chosen = p12[q.id];
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="space-y-1.5">
                  {q.options.map((opt, idx) => {
                    let cls = 'border-slate-200 bg-slate-50/50 text-slate-800 hover:border-violet-300';
                    if (graded) {
                      if (idx === q.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (idx === chosen) cls = 'border-rose-400 bg-rose-50 text-rose-900';
                    } else if (chosen === idx) {
                      cls = 'border-violet-600 bg-violet-50 text-violet-900 font-bold';
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP12((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`w-full rounded-lg border px-3 py-1.5 text-left text-xs ${cls}`}
                      >
                        <span className="font-ipa font-bold mr-1.5">{String.fromCharCode(65 + idx)}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {graded && (
                  <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART XIII: 10 Sentence Rewrites */}
      <section id="t3-p13" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
            Part XIII. Rewrite the sentences without changing their meanings (10 câu · Tr.83)
          </h3>
          {graded && <span className="font-ipa text-xs font-bold text-emerald-700">{s13}/10</span>}
        </div>
        <div className="space-y-2.5">
          {TEST3_PART13_REWRITE.map((item) => {
            const val = p13[item.id] ?? '';
            const ok = matchesAny(val, item.answer, item.accepted);
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  <span className="font-ipa text-violet-700 mr-1.5">{item.id}.</span>
                  {item.prompt}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setP13((prev) => ({ ...prev, [item.id]: e.target.value }))}
                  placeholder="Viết lại câu..."
                  className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                    graded
                      ? ok
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-rose-400 bg-rose-50 text-rose-900'
                      : 'border-slate-300 bg-white focus:border-violet-500'
                  }`}
                />
                {graded && (
                  <p className={`text-xs rounded px-2.5 py-1.5 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                    <strong>{item.answer}</strong> — {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Grading Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-violet-200 bg-violet-50/70 p-5">
        <div>
          <p className="font-display text-base font-bold text-slate-900">
            Hoàn tất TEST FOR UNIT 3 (Trang 77–83)
          </p>
          <p className="text-xs text-slate-600 mt-0.5">
            {graded
              ? `Em đạt ${totalScore}/${maxScore} điểm (${Math.round((totalScore / maxScore) * 100)}%). Xem lại các câu màu đỏ để nắm chắc kiến thức!`
              : 'Nhấn nút bên phải để chấm điểm tự động toàn bộ 13 phần.'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setGraded(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"
        >
          <FileCheck2 className="h-4 w-4" />
          Chấm điểm toàn đề ({totalScore}/{maxScore})
        </button>
      </div>
    </div>
  );
}
