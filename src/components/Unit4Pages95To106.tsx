import { useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Eye,
  PenTool,
  RotateCcw,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  U4_EX_III1_ANSWERS,
  U4_EX_III1_FULL_AUDIO,
  U4_EX_III1_SEGMENTS,
  U4_EX_III1_WORD_BANK,
  U4_EX_III2_PASSAGE,
  U4_EX_III2_QUESTIONS,
  U4_EX_III3_PASSAGE,
  U4_EX_III3_TF,
  U4_EX_IV1_REORDER,
  U4_EX_IV2_OPPOSITE,
  U4_TEST_P1_PHONETICS,
  U4_TEST_P2_PLACES,
  U4_TEST_P2_WORD_BANK,
  U4_TEST_P3_MCQ,
  U4_TEST_P4_OPPOSITES,
  U4_TEST_P4_WORD_BANK,
  U4_TEST_P5_TENSES,
  U4_TEST_P6_MISTAKES,
  U4_TEST_P7_COMP,
  U4_TEST_P8_PASSAGE,
  U4_TEST_P8_TF,
  U4_TEST_P9_MCQ,
  U4_TEST_P9_PASSAGE,
  U4_TEST_P10_REWRITE,
  U4_TEST_P11_CUES_MCQ,
  U4_TEST_P12_SAME_MCQ,
} from '../data/unit4Pages84To106';
import { speakEnglish } from '../utils/speech';

/* ============================================================================
 * SHARED HELPERS
 * ========================================================================== */

function normalizeAnswer(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[.,!?;:]+$/g, '')
    .replace(/\s+/g, ' ');
}

function isAccepted(input: string | undefined, accepted: string[]): boolean {
  const norm = normalizeAnswer(input ?? '');
  if (!norm) return false;
  return accepted.some((a) => normalizeAnswer(a) === norm);
}

function renderUnderlinedWord(word: string, underline: string) {
  const idx = word.toLowerCase().indexOf(underline.toLowerCase());
  if (idx === -1) return <span>{word}</span>;
  const before = word.slice(0, idx);
  const match = word.slice(idx, idx + underline.length);
  const after = word.slice(idx + underline.length);
  return (
    <span>
      {before}
      <span className="underline decoration-2 decoration-amber-600 underline-offset-2 font-extrabold text-amber-800">
        {match}
      </span>
      {after}
    </span>
  );
}

/* ============================================================================
 * STATION 05: READING COMPREHENSION (III.1, III.2, III.3 · BOOK pp.95–97)
 * ========================================================================== */

export function Unit4Station5() {
  // III.1 Da Lat Rose Village Cloze
  const [cloze, setCloze] = useState<Record<number, string>>({});
  const [activeClozeBlank, setActiveClozeBlank] = useState<number>(1);
  const [clozeChecked, setClozeChecked] = useState(false);

  // III.2 Nha Trang Beach MCQs
  const [iii2Ans, setIii2Ans] = useState<Record<number, number>>({});

  // III.3 Peter Countryside T/F
  const [iii3Ans, setIii3Ans] = useState<Record<number, boolean>>({});

  const clozeCorrectCount = U4_EX_III1_ANSWERS.filter((item) =>
    isAccepted(cloze[item.blank], [item.answer])
  ).length;

  const fillClozeWord = (word: string) => {
    setCloze((prev) => ({ ...prev, [activeClozeBlank]: word }));
    setClozeChecked(false);
    if (activeClozeBlank < U4_EX_III1_ANSWERS.length) {
      setActiveClozeBlank(activeClozeBlank + 1);
    }
  };

  const revealClozeKey = () => {
    const next: Record<number, string> = {};
    U4_EX_III1_ANSWERS.forEach((a) => {
      next[a.blank] = a.answer;
    });
    setCloze(next);
    setClozeChecked(true);
  };

  return (
    <div className="space-y-8">
      {/* BÀI III.1: Da Lat Rose Village Cloze (pp.95-96) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
              III. Reading · Bài 1 (Tr.95–96)
            </p>
            <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
              Điền 10 từ trong khung hoàn thành đoạn văn về làng hoa Đà Lạt
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Chạm vào ô trống cần điền rồi bấm từ gợi ý ở khung bên dưới (hoặc gõ trực tiếp).
            </p>
          </div>
          <button
            type="button"
            onClick={() => speakEnglish(U4_EX_III1_FULL_AUDIO)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900 hover:bg-amber-100"
          >
            <Volume2 className="h-4 w-4" />
            <span>Nghe trọn đoạn mẫu</span>
          </button>
        </div>

        {/* Word Bank */}
        <div className="flex flex-wrap gap-2 rounded-xl border border-amber-200/80 bg-amber-50/40 p-3">
          <span className="text-xs font-bold text-amber-900 self-center mr-1">Khung từ:</span>
          {U4_EX_III1_WORD_BANK.map((w) => {
            const used = Object.values(cloze).some((v) => normalizeAnswer(v) === normalizeAnswer(w));
            return (
              <button
                key={w}
                type="button"
                onClick={() => fillClozeWord(w)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors ${
                  used
                    ? 'border-slate-200 bg-slate-100 text-slate-400 line-through'
                    : 'border-amber-300 bg-white text-slate-800 hover:bg-amber-100'
                }`}
              >
                {w}
              </button>
            );
          })}
        </div>

        {/* Paragraph with inline inputs */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5 text-sm leading-9 text-slate-800">
          {U4_EX_III1_SEGMENTS.map((seg, i) => {
            const blankNum = i + 1;
            const ansObj = U4_EX_III1_ANSWERS[i];
            const val = cloze[blankNum] ?? '';
            const ok = ansObj ? isAccepted(val, [ansObj.answer]) : false;
            return (
              <span key={i}>
                {seg}
                {ansObj && (
                  <input
                    type="text"
                    value={val}
                    onFocus={() => setActiveClozeBlank(blankNum)}
                    onChange={(e) => {
                      setCloze((prev) => ({ ...prev, [blankNum]: e.target.value }));
                      setClozeChecked(false);
                    }}
                    placeholder={`(${blankNum})`}
                    className={`mx-1 inline-block w-28 rounded-lg border px-2 py-0.5 text-center text-xs font-bold outline-none transition-colors ${
                      clozeChecked
                        ? ok
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : activeClozeBlank === blankNum
                          ? 'border-amber-500 bg-amber-50 text-slate-900 ring-2 ring-amber-200'
                          : 'border-slate-300 bg-white text-slate-900'
                    }`}
                  />
                )}
              </span>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setClozeChecked(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-700"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Kiểm tra ({clozeChecked ? `${clozeCorrectCount}/10` : '10 chỗ trống'})</span>
            </button>
            <button
              type="button"
              onClick={revealClozeKey}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Eye className="h-4 w-4" />
              <span>Hiện đáp án</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setCloze({});
                setClozeChecked(false);
                setActiveClozeBlank(1);
              }}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Làm lại</span>
            </button>
          </div>
          {clozeChecked && (
            <span className="text-xs font-bold text-emerald-700">
              Đúng {clozeCorrectCount}/{U4_EX_III1_ANSWERS.length} từ
            </span>
          )}
        </div>

        {clozeChecked && (
          <div className="grid gap-2 sm:grid-cols-2 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
            {U4_EX_III1_ANSWERS.map((a) => {
              const ok = isAccepted(cloze[a.blank], [a.answer]);
              return (
                <div key={a.blank} className="flex items-start gap-2">
                  {ok ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  ) : (
                    <XCircle className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  )}
                  <p className="text-slate-700">
                    <strong>({a.blank}) {a.answer}:</strong> {a.explainVi}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* BÀI III.2: Nha Trang Beach Passage (pp.96-97) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
              III. Reading · Bài 2 (Tr.96–97)
            </p>
            <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
              Đọc bài của Minh ở biển Nha Trang và chọn đáp án đúng (A, B, C)
            </h3>
          </div>
          <button
            type="button"
            onClick={() => speakEnglish(U4_EX_III2_PASSAGE)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-bold text-sky-900 hover:bg-sky-100"
          >
            <Volume2 className="h-4 w-4" />
            <span>Nghe bài đọc</span>
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {U4_EX_III2_PASSAGE}
        </div>

        <div className="space-y-3">
          {U4_EX_III2_QUESTIONS.map((q) => {
            const chosen = iii2Ans[q.id];
            const answered = chosen !== undefined;
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-4 space-y-2.5">
                <p className="text-sm font-bold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {q.options.map((opt, idx) => {
                    const letter = ['A', 'B', 'C'][idx];
                    const isPicked = chosen === idx;
                    const isRight = idx === q.correctIndex;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setIii2Ans((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`rounded-xl border px-3 py-2 text-left text-xs font-semibold transition-colors ${
                          answered
                            ? isRight
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : isPicked
                                ? 'border-rose-400 bg-rose-50 text-rose-900'
                                : 'border-slate-200 bg-white text-slate-500'
                            : 'border-slate-200 bg-white text-slate-800 hover:border-amber-400 hover:bg-amber-50/40'
                        }`}
                      >
                        <span className="font-bold mr-1.5">{letter}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <div
                    className={`flex items-start gap-2 rounded-lg px-3 py-2 text-xs ${
                      ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'
                    }`}
                  >
                    {ok ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    ) : (
                      <XCircle className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" />
                    )}
                    <span>{q.explainVi}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BÀI III.3: Peter in the Countryside True / False (p.97) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
              III. Reading · Bài 3 (Tr.97)
            </p>
            <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
              Đọc đoạn văn của Peter và chọn Đúng (True) hay Sai (False)
            </h3>
          </div>
          <button
            type="button"
            onClick={() => speakEnglish(U4_EX_III3_PASSAGE)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900 hover:bg-emerald-100"
          >
            <Volume2 className="h-4 w-4" />
            <span>Nghe bài đọc</span>
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {U4_EX_III3_PASSAGE}
        </div>

        <div className="space-y-2.5">
          {U4_EX_III3_TF.map((item) => {
            const chosen = iii3Ans[item.id];
            const answered = chosen !== undefined;
            const ok = chosen === item.answer;
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.id}. {item.statement}
                  </p>
                  <div className="flex items-center gap-2 shrink-0">
                    {[
                      { val: true, label: 'True (T)' },
                      { val: false, label: 'False (F)' },
                    ].map((btn) => (
                      <button
                        key={btn.label}
                        type="button"
                        onClick={() => setIii3Ans((prev) => ({ ...prev, [item.id]: btn.val }))}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors ${
                          answered && item.answer === btn.val
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : answered && chosen === btn.val && !ok
                              ? 'border-rose-400 bg-rose-50 text-rose-900'
                              : chosen === btn.val
                                ? 'border-amber-500 bg-amber-50 text-amber-900'
                                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>
                {answered && (
                  <div
                    className={`flex items-start gap-2 rounded-lg px-3 py-1.5 text-xs ${
                      ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'
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
    </div>
  );
}

/* ============================================================================
 * STATION 06: WRITING — REORDER & OPPOSITE REWRITE (IV.1, IV.2 · BOOK pp.97–98)
 * ========================================================================== */

export function Unit4Station6() {
  // IV.1 Word-tile reorder: store chosen indices per question
  const [selectedTiles, setSelectedTiles] = useState<Record<number, number[]>>({});
  const [iv1Checked, setIv1Checked] = useState<Record<number, boolean>>({});
  const [iv1Revealed, setIv1Revealed] = useState<Record<number, boolean>>({});

  // IV.2 Opposite comparative rewrites
  const [iv2Inputs, setIv2Inputs] = useState<Record<number, string>>({});
  const [iv2Checked, setIv2Checked] = useState(false);

  const toggleTile = (qId: number, tileIdx: number) => {
    setSelectedTiles((prev) => {
      const curr = prev[qId] ?? [];
      if (curr.includes(tileIdx)) {
        return { ...prev, [qId]: curr.filter((i) => i !== tileIdx) };
      }
      return { ...prev, [qId]: [...curr, tileIdx] };
    });
    setIv1Checked((prev) => ({ ...prev, [qId]: false }));
  };

  const buildSentence = (qId: number, tiles: string[]) => {
    const order = selectedTiles[qId] ?? [];
    return order.map((idx) => tiles[idx]).join(' ');
  };

  const iv2Score = U4_EX_IV2_OPPOSITE.filter((item) =>
    isAccepted(iv2Inputs[item.id], item.accepted)
  ).length;

  return (
    <div className="space-y-8">
      {/* IV.1 Word-Tile Rearrangement (pp.97-98) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
            IV. Writing · Bài 1 (Tr.97–98)
          </p>
          <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
            Chạm thẻ từ để sắp xếp thành câu hoàn chỉnh (8 câu)
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Nhấn lần lượt vào từng thẻ từ bên dưới để ghép câu; nhấn lại thẻ đã xếp nếu muốn bỏ ra.
          </p>
        </div>

        <div className="space-y-4">
          {U4_EX_IV1_REORDER.map((item) => {
            const picked = selectedTiles[item.id] ?? [];
            const built = buildSentence(item.id, item.tiles);
            const checked = iv1Checked[item.id];
            const revealed = iv1Revealed[item.id];
            const ok = isAccepted(built, item.accepted);

            return (
              <div key={item.id} className="rounded-xl border border-slate-200 p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-500">Câu {item.id}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.displayAnswer)}
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-100"
                    >
                      <Volume2 className="h-3.5 w-3.5 text-amber-700" />
                      <span>Nghe câu mẫu</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTiles((prev) => ({ ...prev, [item.id]: [] }));
                        setIv1Checked((prev) => ({ ...prev, [item.id]: false }));
                        setIv1Revealed((prev) => ({ ...prev, [item.id]: false }));
                      }}
                      className="text-[11px] font-semibold text-slate-500 hover:text-slate-800"
                    >
                      Xếp lại
                    </button>
                  </div>
                </div>

                {/* Built answer tray */}
                <div
                  className={`min-h-[44px] flex flex-wrap items-center gap-1.5 rounded-xl border border-dashed p-2.5 ${
                    checked
                      ? ok
                        ? 'border-emerald-400 bg-emerald-50/70'
                        : 'border-rose-400 bg-rose-50/70'
                      : 'border-amber-300 bg-amber-50/30'
                  }`}
                >
                  {picked.length === 0 ? (
                    <span className="text-xs text-slate-400">Chạm các thẻ từ bên dưới để ghép câu...</span>
                  ) : (
                    picked.map((tileIdx) => (
                      <button
                        key={`p-${tileIdx}`}
                        type="button"
                        onClick={() => toggleTile(item.id, tileIdx)}
                        className="rounded-lg border border-amber-400 bg-white px-2.5 py-1 text-xs font-bold text-slate-900 hover:bg-rose-50"
                      >
                        {item.tiles[tileIdx]}
                      </button>
                    ))
                  )}
                </div>

                {/* Available tiles */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tiles.map((tile, tIdx) => {
                    const isUsed = picked.includes(tIdx);
                    return (
                      <button
                        key={`${tIdx}-${tile}`}
                        type="button"
                        disabled={isUsed}
                        onClick={() => toggleTile(item.id, tIdx)}
                        className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                          isUsed
                            ? 'border-slate-100 bg-slate-100 text-slate-300 cursor-not-allowed'
                            : 'border-slate-200 bg-white text-slate-800 hover:border-amber-400 hover:bg-amber-50'
                        }`}
                      >
                        {tile}
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIv1Checked((prev) => ({ ...prev, [item.id]: true }))}
                    className="rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-700"
                  >
                    Kiểm tra
                  </button>
                  <button
                    type="button"
                    onClick={() => setIv1Revealed((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    {revealed ? 'Ẩn đáp án' : 'Xem đáp án'}
                  </button>
                </div>

                {(checked || revealed) && (
                  <div
                    className={`rounded-lg p-3 text-xs space-y-1 ${
                      checked && ok
                        ? 'bg-emerald-50 text-emerald-900'
                        : checked && !ok
                          ? 'bg-rose-50 text-rose-900'
                          : 'bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold">
                      {checked && ok ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      ) : checked ? (
                        <XCircle className="h-4 w-4 text-rose-600" />
                      ) : (
                        <BookOpen className="h-4 w-4 text-amber-700" />
                      )}
                      <span>Đáp án chuẩn: {item.displayAnswer}</span>
                    </div>
                    <p>{item.explainVi}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* IV.2 Opposite Comparative Rewrites (p.98) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
              IV. Writing · Bài 2 (Tr.98)
            </p>
            <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
              Viết lại câu giữ nguyên nghĩa bằng tính từ so sánh trái nghĩa (10 câu)
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Mẹo: Đảo ngược 2 đối tượng so sánh và đổi tính từ sang từ trái nghĩa (VD: bigger ↔ smaller).
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {U4_EX_IV2_OPPOSITE.map((item) => {
            const val = iv2Inputs[item.id] ?? '';
            const ok = isAccepted(val, item.accepted);
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.id}. {item.prompt}
                  </p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(`${item.prefix ?? ''} ${item.accepted[0]}`)}
                    className="shrink-0 rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:bg-amber-50 hover:text-amber-700"
                    title="Nghe câu viết lại chuẩn"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-bold text-amber-800">→ {item.prefix}</span>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => {
                      setIv2Inputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                      setIv2Checked(false);
                    }}
                    placeholder="Viết tiếp phần còn lại của câu..."
                    className={`flex-1 min-w-[220px] rounded-lg border px-3 py-1.5 text-xs sm:text-sm font-medium outline-none ${
                      iv2Checked
                        ? ok
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white focus:border-amber-500'
                    }`}
                  />
                </div>

                {iv2Checked && (
                  <div
                    className={`flex items-start gap-2 rounded-lg px-3 py-2 text-xs ${
                      ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'
                    }`}
                  >
                    {ok ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    ) : (
                      <XCircle className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" />
                    )}
                    <div>
                      <p className="font-bold">
                        Đáp án: {item.prefix} {item.accepted[0]}
                      </p>
                      <p className="mt-0.5">{item.explainVi}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setIv2Checked(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-700"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Kiểm tra Bài IV.2</span>
            </button>
            <button
              type="button"
              onClick={() => {
                const filled: Record<number, string> = {};
                U4_EX_IV2_OPPOSITE.forEach((i) => {
                  filled[i.id] = i.accepted[0];
                });
                setIv2Inputs(filled);
                setIv2Checked(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Eye className="h-4 w-4" />
              <span>Hiện đáp án mẫu</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIv2Inputs({});
                setIv2Checked(false);
              }}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Làm lại</span>
            </button>
          </div>
          {iv2Checked && (
            <span className="text-xs font-bold text-emerald-700">
              Đúng {iv2Score}/{U4_EX_IV2_OPPOSITE.length} câu
            </span>
          )}
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
 * STATION 07: COMPLETE 12-PART TEST FOR UNIT 4 (BOOK pp.99–106 · 108 QUESTIONS)
 * ========================================================================== */

const TEST_PARTS_NAV = [
  { id: 'u4-t-p1', roman: 'I', label: 'Phát âm (10)' },
  { id: 'u4-t-p2', roman: 'II', label: 'Địa điểm (8)' },
  { id: 'u4-t-p3', roman: 'III', label: 'Trắc nghiệm (15)' },
  { id: 'u4-t-p4', roman: 'IV', label: 'Trái nghĩa (10)' },
  { id: 'u4-t-p5', roman: 'V', label: 'Chia thì (15)' },
  { id: 'u4-t-p6', roman: 'VI', label: 'Sửa lỗi (8)' },
  { id: 'u4-t-p7', roman: 'VII', label: 'So sánh hơn (10)' },
  { id: 'u4-t-p8', roman: 'VIII', label: 'Đọc T/F (7)' },
  { id: 'u4-t-p9', roman: 'IX', label: 'Đọc Villa (5)' },
  { id: 'u4-t-p10', roman: 'X', label: 'Viết lại câu (10)' },
  { id: 'u4-t-p11', roman: 'XI', label: 'Ghép câu (5)' },
  { id: 'u4-t-p12', roman: 'XII', label: 'Đồng nghĩa (5)' },
];

export function Unit4FullTestSection() {
  const [graded, setGraded] = useState(false);

  // Answers across 12 parts
  const [p1, setP1] = useState<Record<number, number>>({});
  const [p2, setP2] = useState<Record<number, string>>({});
  const [p2Active, setP2Active] = useState<number>(1);
  const [p3, setP3] = useState<Record<number, number>>({});
  const [p4, setP4] = useState<Record<number, string>>({});
  const [p4Active, setP4Active] = useState<number>(1);
  const [p5, setP5] = useState<Record<string, string>>({}); // key `${itemId}-${blankIdx}`
  const [p6, setP6] = useState<Record<number, { wrong: string; correct: string }>>({});
  const [p7, setP7] = useState<Record<number, string>>({});
  const [p8, setP8] = useState<Record<number, boolean>>({});
  const [p9, setP9] = useState<Record<number, number>>({});
  const [p10, setP10] = useState<Record<number, string>>({});
  const [p11, setP11] = useState<Record<number, number>>({});
  const [p12, setP12] = useState<Record<number, number>>({});

  // Score calculation
  const s1 = U4_TEST_P1_PHONETICS.filter((q) => p1[q.id] === q.correctIndex).length;
  const s2 = U4_TEST_P2_PLACES.filter((q) => isAccepted(p2[q.id], q.accepted)).length;
  const s3 = U4_TEST_P3_MCQ.filter((q) => p3[q.id] === q.correctIndex).length;
  const s4 = U4_TEST_P4_OPPOSITES.filter((q) => isAccepted(p4[q.id], q.accepted)).length;
  const s5 = U4_TEST_P5_TENSES.filter((q) =>
    q.answers.every((acc, idx) => isAccepted(p5[`${q.id}-${idx}`], acc))
  ).length;
  const s6 = U4_TEST_P6_MISTAKES.filter((q) => {
    const entry = p6[q.id];
    const okWrong = isAccepted(entry?.wrong, q.acceptedWrong ?? [q.wrong]);
    const okCorrect = isAccepted(entry?.correct, q.acceptedCorrect ?? [q.correct]);
    return okWrong && okCorrect;
  }).length;
  const s7 = U4_TEST_P7_COMP.filter((q) => isAccepted(p7[q.id], q.accepted)).length;
  const s8 = U4_TEST_P8_TF.filter((q) => p8[q.id] === q.answer).length;
  const s9 = U4_TEST_P9_MCQ.filter((q) => p9[q.id] === q.correctIndex).length;
  const s10 = U4_TEST_P10_REWRITE.filter((q) => isAccepted(p10[q.id], q.accepted)).length;
  const s11 = U4_TEST_P11_CUES_MCQ.filter((q) => p11[q.id] === q.correctIndex).length;
  const s12 = U4_TEST_P12_SAME_MCQ.filter((q) => p12[q.id] === q.correctIndex).length;

  const totalQuestions =
    U4_TEST_P1_PHONETICS.length +
    U4_TEST_P2_PLACES.length +
    U4_TEST_P3_MCQ.length +
    U4_TEST_P4_OPPOSITES.length +
    U4_TEST_P5_TENSES.length +
    U4_TEST_P6_MISTAKES.length +
    U4_TEST_P7_COMP.length +
    U4_TEST_P8_TF.length +
    U4_TEST_P9_MCQ.length +
    U4_TEST_P10_REWRITE.length +
    U4_TEST_P11_CUES_MCQ.length +
    U4_TEST_P12_SAME_MCQ.length;

  const totalCorrect = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12;
  const pct = Math.round((totalCorrect / totalQuestions) * 100);

  const handleRevealAll = () => {
    const n1: Record<number, number> = {};
    U4_TEST_P1_PHONETICS.forEach((q) => (n1[q.id] = q.correctIndex));
    setP1(n1);

    const n2: Record<number, string> = {};
    U4_TEST_P2_PLACES.forEach((q) => (n2[q.id] = q.accepted[0]));
    setP2(n2);

    const n3: Record<number, number> = {};
    U4_TEST_P3_MCQ.forEach((q) => (n3[q.id] = q.correctIndex));
    setP3(n3);

    const n4: Record<number, string> = {};
    U4_TEST_P4_OPPOSITES.forEach((q) => (n4[q.id] = q.accepted[0]));
    setP4(n4);

    const n5: Record<string, string> = {};
    U4_TEST_P5_TENSES.forEach((q) =>
      q.answers.forEach((acc, idx) => (n5[`${q.id}-${idx}`] = acc[0]))
    );
    setP5(n5);

    const n6: Record<number, { wrong: string; correct: string }> = {};
    U4_TEST_P6_MISTAKES.forEach((q) => (n6[q.id] = { wrong: q.wrong, correct: q.correct }));
    setP6(n6);

    const n7: Record<number, string> = {};
    U4_TEST_P7_COMP.forEach((q) => (n7[q.id] = q.accepted[0]));
    setP7(n7);

    const n8: Record<number, boolean> = {};
    U4_TEST_P8_TF.forEach((q) => (n8[q.id] = q.answer));
    setP8(n8);

    const n9: Record<number, number> = {};
    U4_TEST_P9_MCQ.forEach((q) => (n9[q.id] = q.correctIndex));
    setP9(n9);

    const n10: Record<number, string> = {};
    U4_TEST_P10_REWRITE.forEach((q) => (n10[q.id] = q.accepted[0]));
    setP10(n10);

    const n11: Record<number, number> = {};
    U4_TEST_P11_CUES_MCQ.forEach((q) => (n11[q.id] = q.correctIndex));
    setP11(n11);

    const n12: Record<number, number> = {};
    U4_TEST_P12_SAME_MCQ.forEach((q) => (n12[q.id] = q.correctIndex));
    setP12(n12);

    setGraded(true);
  };

  const handleResetAll = () => {
    setP1({});
    setP2({});
    setP2Active(1);
    setP3({});
    setP4({});
    setP4Active(1);
    setP5({});
    setP6({});
    setP7({});
    setP8({});
    setP9({});
    setP10({});
    setP11({});
    setP12({});
    setGraded(false);
  };

  const scrollToPart = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-6">
      {/* Top Score Banner & 12-Part Quick-Jump Bar */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
              TEST FOR UNIT 4 · Trang 99–106 (Trọn bộ 12 phần)
            </p>
            <h3 className="font-display text-xl font-extrabold text-slate-900">
              Đề kiểm tra tổng hợp Unit 4: My Neighbourhood ({totalQuestions} câu)
            </h3>
            <p className="text-xs text-slate-600">
              Gồm đầy đủ 12 phần từ Trang 99 đến Trang 106 (kèm 2 phần cuối XI &amp; XII) chấm điểm tự động và giải thích chi tiết từng câu.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {graded && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-300 bg-white px-3.5 py-2">
                <Award className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="text-[11px] font-semibold text-slate-500">Tổng điểm</p>
                  <p className="font-display text-sm font-extrabold text-slate-900 tabular-nums">
                    {totalCorrect}/{totalQuestions} ({pct}%)
                  </p>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={() => setGraded(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-amber-700"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Chấm toàn bộ đề</span>
            </button>
            <button
              type="button"
              onClick={handleRevealAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300 bg-white px-3.5 py-2.5 text-xs font-bold text-amber-900 hover:bg-amber-50"
            >
              <Eye className="h-4 w-4" />
              <span>Hiện đáp án mẫu</span>
            </button>
            <button
              type="button"
              onClick={handleResetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Làm lại</span>
            </button>
          </div>
        </div>

        {/* 12-Part Quick-Jump */}
        <div className="flex flex-wrap gap-1.5 border-t border-amber-200/70 pt-3">
          {TEST_PARTS_NAV.map((nav) => (
            <button
              key={nav.id}
              type="button"
              onClick={() => scrollToPart(nav.id)}
              className="rounded-lg border border-amber-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:border-amber-500 hover:text-amber-900 transition-colors"
            >
              {nav.roman}. {nav.label}
            </button>
          ))}
        </div>
      </div>

      {/* PART I: Phonetics (10 MCQs, p.99) */}
      <section id="u4-t-p1" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part I (Tr.99). Chọn từ có phần gạch chân phát âm khác (10 câu)
          </h4>
          {graded && <span className="text-xs font-bold text-amber-800">{s1}/10</span>}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {U4_TEST_P1_PHONETICS.map((q) => {
            const chosen = p1[q.id];
            const show = graded || chosen !== undefined;
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                <p className="text-xs font-bold text-slate-500">Câu {q.id}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {q.options.map((opt, idx) => {
                    const letter = ['A', 'B', 'C', 'D'][idx];
                    const isRight = idx === q.correctIndex;
                    const isPicked = chosen === idx;
                    return (
                      <div key={opt.word} className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setP1((prev) => ({ ...prev, [q.id]: idx }))}
                          className={`flex-1 rounded-lg border px-2.5 py-1.5 text-left text-xs font-semibold transition-colors ${
                            show && isRight
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : show && isPicked && !ok
                                ? 'border-rose-400 bg-rose-50 text-rose-900'
                                : isPicked
                                  ? 'border-amber-500 bg-amber-50 text-amber-900'
                                  : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          <span className="font-bold mr-1">{letter}.</span>
                          {renderUnderlinedWord(opt.word, opt.underline)}
                          {show && <span className="block font-ipa text-[10px] text-slate-500">{opt.ipa}</span>}
                        </button>
                        <button
                          type="button"
                          onClick={() => speakEnglish(opt.word)}
                          className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:text-amber-700"
                          title={`Nghe từ ${opt.word}`}
                        >
                          <Volume2 className="h-3 w-3" />
                        </button>
                      </div>
                    );
                  })}
                </div>
                {show && (
                  <p className={`text-[11px] font-medium ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART II: Place Definitions from Box (8 items, p.99) */}
      <section id="u4-t-p2" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part II (Tr.99). Chọn tên địa điểm đúng theo định nghĩa (8 câu)
          </h4>
          {graded && <span className="text-xs font-bold text-amber-800">{s2}/8</span>}
        </div>
        <div className="flex flex-wrap gap-1.5 rounded-xl border border-amber-200/80 bg-amber-50/40 p-3">
          {U4_TEST_P2_WORD_BANK.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => {
                setP2((prev) => ({ ...prev, [p2Active]: w }));
                if (p2Active < U4_TEST_P2_PLACES.length) setP2Active(p2Active + 1);
              }}
              className="rounded-lg border border-amber-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-800 hover:bg-amber-100"
            >
              {w}
            </button>
          ))}
        </div>
        <div className="grid gap-2.5 md:grid-cols-2">
          {U4_TEST_P2_PLACES.map((q) => {
            const val = p2[q.id] ?? '';
            const ok = isAccepted(val, q.accepted);
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3 space-y-1.5">
                <p className="text-xs sm:text-sm text-slate-800">
                  <strong>{q.id}.</strong> {q.before}
                </p>
                <input
                  type="text"
                  value={val}
                  onFocus={() => setP2Active(q.id)}
                  onChange={(e) => setP2((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Điền tên địa điểm..."
                  className={`w-full rounded-lg border px-3 py-1.5 text-xs font-bold outline-none ${
                    graded
                      ? ok
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-rose-400 bg-rose-50 text-rose-900'
                      : p2Active === q.id
                        ? 'border-amber-500 bg-amber-50/40'
                        : 'border-slate-300 bg-white'
                  }`}
                />
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                    <strong>Đáp án: {q.accepted[0]}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART III: 15 Grammar & Vocab MCQs (pp.99-100) */}
      <section id="u4-t-p3" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part III (Tr.99–100). Chọn đáp án đúng A, B, C hoặc D (15 câu)
          </h4>
          {graded && <span className="text-xs font-bold text-amber-800">{s3}/15</span>}
        </div>
        <div className="space-y-3">
          {U4_TEST_P3_MCQ.map((q) => {
            const chosen = p3[q.id];
            const show = graded || chosen !== undefined;
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                <p className="text-sm font-semibold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="grid gap-1.5 sm:grid-cols-4">
                  {q.options.map((opt, idx) => {
                    const letter = ['A', 'B', 'C', 'D'][idx];
                    const isRight = idx === q.correctIndex;
                    const isPicked = chosen === idx;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP3((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-semibold transition-colors ${
                          show && isRight
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : show && isPicked && !ok
                              ? 'border-rose-400 bg-rose-50 text-rose-900'
                              : isPicked
                                ? 'border-amber-500 bg-amber-50 text-amber-900'
                                : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <span className="font-bold mr-1">{letter}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {show && (
                  <p className={`text-[11px] font-medium ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART IV: 10 Opposites from Box (p.101) */}
      <section id="u4-t-p4" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part IV (Tr.101). Điền tính từ trái nghĩa với từ trong ngoặc (10 câu)
          </h4>
          {graded && <span className="text-xs font-bold text-amber-800">{s4}/10</span>}
        </div>
        <div className="flex flex-wrap gap-1.5 rounded-xl border border-amber-200/80 bg-amber-50/40 p-3">
          {U4_TEST_P4_WORD_BANK.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => {
                setP4((prev) => ({ ...prev, [p4Active]: w }));
                if (p4Active < U4_TEST_P4_OPPOSITES.length) setP4Active(p4Active + 1);
              }}
              className="rounded-lg border border-amber-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-800 hover:bg-amber-100"
            >
              {w}
            </button>
          ))}
        </div>
        <div className="grid gap-2.5 md:grid-cols-2">
          {U4_TEST_P4_OPPOSITES.map((q) => {
            const val = p4[q.id] ?? '';
            const ok = isAccepted(val, q.accepted);
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3 space-y-1.5 text-xs sm:text-sm">
                <p className="text-slate-800 leading-7">
                  <strong>{q.id}.</strong> {q.before}
                  <input
                    type="text"
                    value={val}
                    onFocus={() => setP4Active(q.id)}
                    onChange={(e) => setP4((prev) => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder="..."
                    className={`mx-1 w-28 rounded-lg border px-2 py-0.5 text-center text-xs font-bold outline-none ${
                      graded
                        ? ok
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : p4Active === q.id
                          ? 'border-amber-500 bg-amber-50/40'
                          : 'border-slate-300 bg-white'
                    }`}
                  />
                  {q.after}{' '}
                  <span className="font-semibold text-amber-800">({q.hint})</span>
                </p>
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                    <strong>Đáp án: {q.accepted[0]}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART V: 15 Present Simple / Present Continuous (p.101) */}
      <section id="u4-t-p5" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part V (Tr.101). Chia động từ ở Hiện tại đơn hoặc Hiện tại tiếp diễn (15 câu)
          </h4>
          {graded && <span className="text-xs font-bold text-amber-800">{s5}/15</span>}
        </div>
        <div className="space-y-2.5">
          {U4_TEST_P5_TENSES.map((q) => {
            const allOk = q.answers.every((acc, idx) => isAccepted(p5[`${q.id}-${idx}`], acc));
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3 space-y-1.5 text-xs sm:text-sm">
                <p className="text-slate-800 leading-8">
                  <strong>{q.id}.</strong>{' '}
                  {q.parts.map((part, idx) => {
                    const ans = q.answers[idx];
                    const key = `${q.id}-${idx}`;
                    const ok = ans ? isAccepted(p5[key], ans) : false;
                    return (
                      <span key={idx}>
                        {part}
                        {ans && (
                          <input
                            type="text"
                            value={p5[key] ?? ''}
                            onChange={(e) => setP5((prev) => ({ ...prev, [key]: e.target.value }))}
                            placeholder="chia động từ..."
                            className={`mx-1 w-36 rounded-lg border px-2 py-0.5 text-center text-xs font-bold outline-none ${
                              graded
                                ? ok
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                                  : 'border-rose-400 bg-rose-50 text-rose-900'
                                : 'border-slate-300 bg-white focus:border-amber-500'
                            }`}
                          />
                        )}
                      </span>
                    );
                  })}
                </p>
                {graded && (
                  <p className={`text-[11px] ${allOk ? 'text-emerald-700' : 'text-rose-700'}`}>
                    <strong>Đáp án: {q.answers.map((a) => a[0]).join(' / ')}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VI: 8 Find & Correct Mistakes (p.102) */}
      <section id="u4-t-p6" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part VI (Tr.102). Tìm 1 lỗi sai trong mỗi câu và sửa lại cho đúng (8 câu)
          </h4>
          {graded && <span className="text-xs font-bold text-amber-800">{s6}/8</span>}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {U4_TEST_P6_MISTAKES.map((q) => {
            const entry = p6[q.id] ?? { wrong: '', correct: '' };
            const okW = isAccepted(entry.wrong, q.acceptedWrong ?? [q.wrong]);
            const okC = isAccepted(entry.correct, q.acceptedCorrect ?? [q.correct]);
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  {q.id}. {q.sentence}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <input
                    type="text"
                    value={entry.wrong}
                    onChange={(e) =>
                      setP6((prev) => ({ ...prev, [q.id]: { ...entry, wrong: e.target.value } }))
                    }
                    placeholder="Từ sai..."
                    className={`w-28 rounded-lg border px-2.5 py-1 font-bold outline-none ${
                      graded
                        ? okW
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-rose-400 bg-rose-50'
                        : 'border-slate-300 bg-white focus:border-amber-500'
                    }`}
                  />
                  <span className="font-bold text-amber-700">→</span>
                  <input
                    type="text"
                    value={entry.correct}
                    onChange={(e) =>
                      setP6((prev) => ({ ...prev, [q.id]: { ...entry, correct: e.target.value } }))
                    }
                    placeholder="Sửa thành..."
                    className={`w-32 rounded-lg border px-2.5 py-1 font-bold outline-none ${
                      graded
                        ? okC
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-rose-400 bg-rose-50'
                        : 'border-slate-300 bg-white focus:border-amber-500'
                    }`}
                  />
                </div>
                {graded && (
                  <p className={`text-[11px] ${okW && okC ? 'text-emerald-700' : 'text-rose-700'}`}>
                    <strong>Sửa: {q.wrong} → {q.correct}</strong>. {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VII: 10 Comparative Adjective Blanks (p.102) */}
      <section id="u4-t-p7" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part VII (Tr.102). Chia tính từ trong ngoặc ở dạng so sánh hơn (10 câu)
          </h4>
          {graded && <span className="text-xs font-bold text-amber-800">{s7}/10</span>}
        </div>
        <div className="grid gap-2.5 md:grid-cols-2">
          {U4_TEST_P7_COMP.map((q) => {
            const val = p7[q.id] ?? '';
            const ok = isAccepted(val, q.accepted);
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3 space-y-1.5 text-xs sm:text-sm">
                <p className="text-slate-800 leading-7">
                  <strong>{q.id}.</strong> {q.before}
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => setP7((prev) => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder={q.hint}
                    className={`mx-1 w-32 rounded-lg border px-2 py-0.5 text-center text-xs font-bold outline-none ${
                      graded
                        ? ok
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white focus:border-amber-500'
                    }`}
                  />
                  {q.after} <span className="font-semibold text-amber-800">({q.hint})</span>
                </p>
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                    <strong>Đáp án: {q.accepted[0]}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VIII: Reading Wonderful Neighbourhood T/F (7 items, p.103) */}
      <section id="u4-t-p8" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part VIII (Tr.103). Đọc đoạn văn &ldquo;A wonderful neighbourhood&rdquo; và chọn True / False (7 câu)
          </h4>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(U4_TEST_P8_PASSAGE)}
              className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-900 hover:bg-sky-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              <span>Nghe bài đọc</span>
            </button>
            {graded && <span className="text-xs font-bold text-amber-800">{s8}/7</span>}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {U4_TEST_P8_PASSAGE}
        </div>
        <div className="space-y-2">
          {U4_TEST_P8_TF.map((q) => {
            const chosen = p8[q.id];
            const show = graded || chosen !== undefined;
            const ok = chosen === q.answer;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    {q.id}. {q.statement}
                  </p>
                  <div className="flex gap-1.5">
                    {[
                      { val: true, label: 'T' },
                      { val: false, label: 'F' },
                    ].map((b) => (
                      <button
                        key={b.label}
                        type="button"
                        onClick={() => setP8((prev) => ({ ...prev, [q.id]: b.val }))}
                        className={`rounded-lg border px-3 py-1 text-xs font-bold ${
                          show && q.answer === b.val
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : show && chosen === b.val && !ok
                              ? 'border-rose-400 bg-rose-50 text-rose-900'
                              : chosen === b.val
                                ? 'border-amber-500 bg-amber-50 text-amber-900'
                                : 'border-slate-200 bg-white text-slate-700'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>
                {show && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART IX: Reading Charles's Villa (5 MCQs, pp.103-104) */}
      <section id="u4-t-p9" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part IX (Tr.103–104). Đọc bài về biệt thự của Charles và chọn đáp án đúng (5 câu)
          </h4>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(U4_TEST_P9_PASSAGE)}
              className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-900 hover:bg-sky-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              <span>Nghe bài đọc</span>
            </button>
            {graded && <span className="text-xs font-bold text-amber-800">{s9}/5</span>}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {U4_TEST_P9_PASSAGE}
        </div>
        <div className="space-y-3">
          {U4_TEST_P9_MCQ.map((q) => {
            const chosen = p9[q.id];
            const show = graded || chosen !== undefined;
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                <p className="text-sm font-semibold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="grid gap-1.5 sm:grid-cols-4">
                  {q.options.map((opt, idx) => {
                    const letter = ['A', 'B', 'C', 'D'][idx];
                    const isRight = idx === q.correctIndex;
                    const isPicked = chosen === idx;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP9((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-semibold ${
                          show && isRight
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : show && isPicked && !ok
                              ? 'border-rose-400 bg-rose-50 text-rose-900'
                              : isPicked
                                ? 'border-amber-500 bg-amber-50 text-amber-900'
                                : 'border-slate-200 bg-white text-slate-800'
                        }`}
                      >
                        <span className="font-bold mr-1">{letter}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {show && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART X: 10 Sentence Rewrites (p.104) */}
      <section id="u4-t-p10" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part X (Tr.104). Viết lại câu dùng từ gợi ý trong ngoặc (10 câu)
          </h4>
          {graded && <span className="text-xs font-bold text-amber-800">{s10}/10</span>}
        </div>
        <div className="space-y-2.5">
          {U4_TEST_P10_REWRITE.map((q) => {
            const val = p10[q.id] ?? '';
            const ok = isAccepted(val, q.accepted);
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  {q.id}. {q.prompt}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                  <span className="font-bold text-amber-800">→ {q.prefix}</span>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => setP10((prev) => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder="Viết tiếp câu so sánh..."
                    className={`flex-1 min-w-[200px] rounded-lg border px-3 py-1.5 text-xs font-semibold outline-none ${
                      graded
                        ? ok
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white focus:border-amber-500'
                    }`}
                  />
                </div>
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                    <strong>Đáp án: {q.prefix} {q.accepted[0]}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART XI: 5 Cue-to-Sentence MCQs (p.105) */}
      <section id="u4-t-p11" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part XI (Tr.105). Chọn câu hoàn chỉnh đúng từ các từ gợi ý (5 câu)
          </h4>
          {graded && <span className="text-xs font-bold text-amber-800">{s11}/5</span>}
        </div>
        <div className="space-y-3">
          {U4_TEST_P11_CUES_MCQ.map((q) => {
            const chosen = p11[q.id];
            const show = graded || chosen !== undefined;
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                <p className="text-sm font-bold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="grid gap-1.5 sm:grid-cols-2">
                  {q.options.map((opt, idx) => {
                    const letter = ['A', 'B', 'C', 'D'][idx];
                    const isRight = idx === q.correctIndex;
                    const isPicked = chosen === idx;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP11((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold ${
                          show && isRight
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : show && isPicked && !ok
                              ? 'border-rose-400 bg-rose-50 text-rose-900'
                              : isPicked
                                ? 'border-amber-500 bg-amber-50 text-amber-900'
                                : 'border-slate-200 bg-white text-slate-800'
                        }`}
                      >
                        <span className="font-bold mr-1.5">{letter}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {show && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART XII: 5 Same-Meaning MCQs (p.106) */}
      <section id="u4-t-p12" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Part XII (Tr.106). Chọn câu có nghĩa tương đương với câu đã cho (5 câu)
          </h4>
          {graded && <span className="text-xs font-bold text-amber-800">{s12}/5</span>}
        </div>
        <div className="space-y-3">
          {U4_TEST_P12_SAME_MCQ.map((q) => {
            const chosen = p12[q.id];
            const show = graded || chosen !== undefined;
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                <p className="text-sm font-bold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="grid gap-1.5 sm:grid-cols-2">
                  {q.options.map((opt, idx) => {
                    const letter = ['A', 'B', 'C', 'D'][idx];
                    const isRight = idx === q.correctIndex;
                    const isPicked = chosen === idx;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP12((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold ${
                          show && isRight
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : show && isPicked && !ok
                              ? 'border-rose-400 bg-rose-50 text-rose-900'
                              : isPicked
                                ? 'border-amber-500 bg-amber-50 text-amber-900'
                                : 'border-slate-200 bg-white text-slate-800'
                        }`}
                      >
                        <span className="font-bold mr-1.5">{letter}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {show && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Submit CTA */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <PenTool className="h-4 w-4 text-amber-600" />
            <span>Hoàn thành đủ 12 phần Đề kiểm tra Unit 4 (Tr.99–106)!</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setGraded(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-amber-700"
          >
            <Award className="h-4 w-4" />
            <span>Chấm điểm &amp; Xem kết quả tổng</span>
          </button>
        </div>
      </section>
    </div>
  );
}
