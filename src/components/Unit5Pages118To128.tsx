import { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Eye,
  FileText,
  HelpCircle,
  RotateCcw,
  Turtle,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  U5_EX_III1_PASSAGE,
  U5_EX_III1_QUESTIONS,
  U5_EX_III2_PASSAGE_PARTS,
  U5_EX_III2_QUESTIONS,
  U5_EX_III3_ANSWERS,
  U5_EX_III3_BOX,
  U5_EX_III3_SEGMENTS,
  U5_EX_IV1_REORDER,
  U5_EX_IV2_REWRITE,
  U5_TEST_P1,
  U5_TEST_P10_MODEL,
  U5_TEST_P2_ODD,
  U5_TEST_P3_PAIRS,
  U5_TEST_P4_MCQ,
  U5_TEST_P5_MUST,
  U5_TEST_P6_QUESTIONS,
  U5_TEST_P6_SEGMENTS,
  U5_TEST_P7_PASSAGE,
  U5_TEST_P7_TF,
  U5_TEST_P8_CUES,
  U5_TEST_P9_REWRITE,
} from '../data/unit5Pages107To128';
import { speakEnglish } from '../utils/speech';

function normalizeAnswer(val: string): string {
  return val
    .trim()
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/\s+/g, ' ');
}

function stripEndPunct(val: string): string {
  return normalizeAnswer(val).replace(/[.?!]+$/, '');
}

function matchesAny(userVal: string, accepted: string[]): boolean {
  const clean = stripEndPunct(userVal);
  if (!clean) return false;
  return accepted.some((a) => stripEndPunct(a) === clean);
}

function deterministicShuffle(items: string[], seed: number): string[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (seed * 7 + i * 3 + 1) % (i + 1);
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  if (arr.join(' ') === items.join(' ') && arr.length > 1) {
    const first = arr.shift()!;
    arr.push(first);
  }
  return arr;
}

// ============================================================
// TRẠM 05 · ĐỌC HIỂU 3 BÀI (TRANG 118 – 120)
// ============================================================

export function Unit5Station5() {
  // III.1 Hoi An Q&A
  const [iii1Vals, setIii1Vals] = useState<Record<number, string>>({});
  const [iii1Checked, setIii1Checked] = useState<Record<number, boolean>>({});
  const [iii1ShowAll, setIii1ShowAll] = useState(false);

  // III.2 Hue MCQ Cloze
  const [iii2Ans, setIii2Ans] = useState<Record<number, number>>({});

  // III.3 Mui Ne Word-Box Cloze
  const [iii3Vals, setIii3Vals] = useState<Record<number, string>>({});
  const [iii3ActiveSlot, setIii3ActiveSlot] = useState<number>(1);
  const [iii3Checked, setIii3Checked] = useState(false);

  const iii1Correct = U5_EX_III1_QUESTIONS.filter((q) =>
    matchesAny(iii1Vals[q.id] ?? '', q.answers)
  ).length;

  const iii2Correct = U5_EX_III2_QUESTIONS.filter(
    (q) => iii2Ans[q.id] === q.correctIndex
  ).length;

  const iii3Correct = U5_EX_III3_ANSWERS.filter((a) =>
    matchesAny(iii3Vals[a.id] ?? '', a.answers)
  ).length;

  const usedMuiNeWords = useMemo(() => {
    const set = new Set<string>();
    Object.values(iii3Vals).forEach((v) => {
      if (v.trim()) set.add(v.trim().toLowerCase());
    });
    return set;
  }, [iii3Vals]);

  const handlePickMuiNeWord = (word: string) => {
    setIii3Vals((prev) => ({ ...prev, [iii3ActiveSlot]: word }));
    setIii3Checked(false);
    const nextEmpty = U5_EX_III3_ANSWERS.find(
      (a) => a.id > iii3ActiveSlot && !(iii3Vals[a.id] ?? '').trim()
    );
    if (nextEmpty) {
      setIii3ActiveSlot(nextEmpty.id);
    } else if (iii3ActiveSlot < 10) {
      setIii3ActiveSlot(iii3ActiveSlot + 1);
    }
  };

  const fullHuePassage = useMemo(() => {
    return U5_EX_III2_PASSAGE_PARTS.reduce((acc, part, idx) => {
      if (idx === U5_EX_III2_PASSAGE_PARTS.length - 1) return acc + part;
      const q = U5_EX_III2_QUESTIONS[idx];
      return acc + part + q.options[q.correctIndex];
    }, '');
  }, []);

  const fullMuiNePassage = useMemo(() => {
    return U5_EX_III3_SEGMENTS.reduce((acc, part, idx) => {
      if (idx === U5_EX_III3_SEGMENTS.length - 1) return acc + part;
      return acc + part + U5_EX_III3_ANSWERS[idx].displayAnswer;
    }, '');
  }, []);

  return (
    <div className="space-y-6">
      {/* BÀI III.1 — HỘI AN */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Bài III.1 · Trang 118–119 · Đọc hiểu &amp; Trả lời câu hỏi
            </p>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-1">
              Phố cổ Hội An (Hoi An Ancient Town)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(U5_EX_III1_PASSAGE)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-bold text-teal-800 hover:bg-teal-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe cả bài
            </button>
            <button
              type="button"
              onClick={() => speakEnglish(U5_EX_III1_PASSAGE, { slow: true })}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Turtle className="h-3.5 w-3.5" />
              Đọc chậm
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-teal-100 bg-teal-50/40 p-4 sm:p-5 text-sm leading-7 text-slate-800">
          {U5_EX_III1_PASSAGE}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-semibold text-slate-600">
            Trả lời 6 câu hỏi dưới đây dựa vào đoạn văn (đã đúng{' '}
            <span className="font-bold text-teal-700 tabular-nums">
              {iii1Correct}/{U5_EX_III1_QUESTIONS.length}
            </span>
            ):
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const all: Record<number, boolean> = {};
                U5_EX_III1_QUESTIONS.forEach((q) => {
                  all[q.id] = true;
                });
                setIii1Checked(all);
              }}
              className="rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-teal-700"
            >
              Kiểm tra tất cả
            </button>
            <button
              type="button"
              onClick={() => setIii1ShowAll((s) => !s)}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Eye className="h-3.5 w-3.5" />
              {iii1ShowAll ? 'Ẩn đáp án' : 'Xem đáp án'}
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U5_EX_III1_QUESTIONS.map((q) => {
            const val = iii1Vals[q.id] ?? '';
            const isChecked = iii1Checked[q.id] || iii1ShowAll;
            const isCorrect = matchesAny(val, q.answers);

            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-bold text-slate-900">
                    {q.id}. {q.question}
                  </p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(q.question)}
                    className="shrink-0 text-teal-700 hover:text-teal-900 p-1"
                    title="Nghe câu hỏi"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => {
                      setIii1Vals((prev) => ({ ...prev, [q.id]: e.target.value }));
                      setIii1Checked((prev) => ({ ...prev, [q.id]: false }));
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setIii1Checked((prev) => ({ ...prev, [q.id]: true }));
                      }
                    }}
                    placeholder="Gõ câu trả lời tiếng Anh..."
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setIii1Checked((prev) => ({ ...prev, [q.id]: true }))}
                    className="shrink-0 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-bold text-teal-800 hover:bg-teal-100"
                  >
                    Chấm
                  </button>
                </div>

                {isChecked && (
                  <div
                    className={`rounded-lg border p-2.5 text-xs space-y-1 ${
                      isCorrect
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                        : 'border-amber-200 bg-amber-50 text-amber-950'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-bold">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                            Chính xác!
                          </>
                        ) : (
                          <>
                            <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
                            Đáp án mẫu: {q.displayAnswer}
                          </>
                        )}
                      </span>
                      <button
                        type="button"
                        onClick={() => speakEnglish(q.displayAnswer)}
                        className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:underline"
                      >
                        <Volume2 className="h-3 w-3" />
                        Nghe
                      </button>
                    </div>
                    <p className="text-slate-600">{q.explainVi}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BÀI III.2 — HUẾ (5-BLANK MCQ CLOZE) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Bài III.2 · Trang 119 · Đọc điền từ trắc nghiệm (5 câu)
            </p>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-1">
              Thành phố Huế &amp; Sông Hương (Long&apos;s Story)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
              {iii2Correct}/{U5_EX_III2_QUESTIONS.length} đúng
            </span>
            <button
              type="button"
              onClick={() => speakEnglish(fullHuePassage)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-bold text-teal-800 hover:bg-teal-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe bản hoàn chỉnh
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 text-sm leading-8 text-slate-800">
          {U5_EX_III2_PASSAGE_PARTS.map((part, idx) => {
            const q = U5_EX_III2_QUESTIONS[idx];
            const picked = q ? iii2Ans[q.id] : undefined;
            const isCorrect = q && picked !== undefined ? picked === q.correctIndex : false;
            return (
              <span key={idx}>
                {part}
                {q && (
                  <span
                    className={`mx-1 inline-flex items-center rounded-md border px-2 py-0.5 font-ipa text-xs font-bold ${
                      picked === undefined
                        ? 'border-teal-300 bg-white text-teal-800'
                        : isCorrect
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                          : 'border-rose-300 bg-rose-50 text-rose-800'
                    }`}
                  >
                    ({q.id}) {picked !== undefined ? q.options[picked] : '______'}
                  </span>
                )}
              </span>
            );
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {U5_EX_III2_QUESTIONS.map((q) => {
            const picked = iii2Ans[q.id];
            const isCorrect = picked === q.correctIndex;
            const letters = ['A', 'B', 'C', 'D'];
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Chỗ trống ({q.id})
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {q.options.map((opt, optIdx) => {
                    const selected = picked === optIdx;
                    let cls =
                      'border-slate-200 bg-slate-50 text-slate-800 hover:bg-teal-50 hover:border-teal-300';
                    if (picked !== undefined) {
                      if (optIdx === q.correctIndex) {
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (selected) {
                        cls = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      } else {
                        cls = 'border-slate-200 bg-white text-slate-400';
                      }
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setIii2Ans((prev) => ({ ...prev, [q.id]: optIdx }))}
                        className={`rounded-lg border px-2.5 py-2 text-left text-xs transition-colors ${cls}`}
                      >
                        <span className="font-bold mr-1">{letters[optIdx]}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {picked !== undefined && (
                  <p
                    className={`text-xs leading-relaxed ${
                      isCorrect ? 'text-emerald-800' : 'text-rose-800'
                    }`}
                  >
                    {isCorrect ? 'Đúng! ' : `Chưa đúng (Đáp án: ${letters[q.correctIndex]}). `}
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BÀI III.3 — MŨI NÉ (10-BLANK WORD BANK) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Bài III.3 · Trang 119–120 · Điền 10 từ trong hộp vào đoạn văn
            </p>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-1">
              Mũi Né — &ldquo;Hawaii của Việt Nam&rdquo;
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Chạm vào ô trống (1)–(10) rồi chạm từ trong hộp để điền nhanh, hoặc tự gõ vào ô.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(fullMuiNePassage)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-bold text-teal-800 hover:bg-teal-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe cả bài
            </button>
            <button
              type="button"
              onClick={() => {
                setIii3Vals({});
                setIii3Checked(false);
                setIii3ActiveSlot(1);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        {/* Clickable Word Bank */}
        <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-3.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-2">
            Hộp từ vựng (Đang chọn ô số {iii3ActiveSlot}):
          </p>
          <div className="flex flex-wrap gap-2">
            {U5_EX_III3_BOX.map((w) => {
              const isUsed = usedMuiNeWords.has(w.toLowerCase());
              return (
                <button
                  key={w}
                  type="button"
                  onClick={() => handlePickMuiNeWord(w)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors ${
                    isUsed
                      ? 'border-slate-200 bg-slate-100 text-slate-400 line-through'
                      : 'border-teal-300 bg-white text-teal-900 hover:bg-teal-600 hover:text-white'
                  }`}
                >
                  {w}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Passage */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5 text-sm leading-9 text-slate-800">
          {U5_EX_III3_SEGMENTS.map((seg, idx) => {
            const slot = U5_EX_III3_ANSWERS[idx];
            const val = slot ? iii3Vals[slot.id] ?? '' : '';
            const ok = slot ? matchesAny(val, slot.answers) : false;
            return (
              <span key={idx}>
                {seg}
                {slot && (
                  <span className="inline-flex items-center mx-1 align-middle">
                    <span className="text-[11px] font-bold text-slate-500 mr-1">
                      ({slot.id})
                    </span>
                    <input
                      type="text"
                      value={val}
                      onFocus={() => setIii3ActiveSlot(slot.id)}
                      onChange={(e) => {
                        setIii3Vals((prev) => ({ ...prev, [slot.id]: e.target.value }));
                        setIii3Checked(false);
                      }}
                      className={`w-28 rounded-lg border px-2 py-0.5 text-xs font-bold focus:outline-none ${
                        iii3Checked
                          ? ok
                            ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : iii3ActiveSlot === slot.id
                            ? 'border-teal-500 bg-white text-teal-900 ring-2 ring-teal-200'
                            : 'border-slate-300 bg-white text-slate-900'
                      }`}
                    />
                  </span>
                )}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIii3Checked(true)}
              className="rounded-xl bg-teal-600 px-4 py-2 text-xs font-bold text-white hover:bg-teal-700"
            >
              Chấm điểm 10 chỗ trống
            </button>
            <button
              type="button"
              onClick={() => {
                const filled: Record<number, string> = {};
                U5_EX_III3_ANSWERS.forEach((a) => {
                  filled[a.id] = a.displayAnswer;
                });
                setIii3Vals(filled);
                setIii3Checked(true);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Eye className="h-3.5 w-3.5" />
              Điền đáp án mẫu
            </button>
          </div>
          {iii3Checked && (
            <span className="font-ipa text-sm font-bold text-teal-700 tabular-nums">
              Kết quả: {iii3Correct}/10 câu đúng
            </span>
          )}
        </div>

        {iii3Checked && (
          <div className="grid gap-2 sm:grid-cols-2 border-t border-slate-100 pt-4">
            {U5_EX_III3_ANSWERS.map((a) => {
              const ok = matchesAny(iii3Vals[a.id] ?? '', a.answers);
              return (
                <div
                  key={a.id}
                  className={`flex items-start gap-2 rounded-lg border p-2.5 text-xs ${
                    ok
                      ? 'border-emerald-200 bg-emerald-50/70 text-emerald-950'
                      : 'border-amber-200 bg-amber-50/70 text-amber-950'
                  }`}
                >
                  {ok ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  ) : (
                    <XCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                  )}
                  <div>
                    <p className="font-bold">
                      ({a.id}) {a.displayAnswer}
                    </p>
                    <p className="text-slate-600 mt-0.5">{a.explainVi}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

// ============================================================
// TRẠM 06 · KỸ NĂNG VIẾT (TRANG 120 – 121)
// ============================================================

export function Unit5Station6() {
  // IV.1 Word-tile reorder
  const shuffledMap = useMemo(() => {
    const map: Record<number, string[]> = {};
    U5_EX_IV1_REORDER.forEach((item) => {
      map[item.id] = deterministicShuffle(item.tiles, item.id + 3);
    });
    return map;
  }, []);

  const [iv1Picked, setIv1Picked] = useState<Record<number, number[]>>({});
  const [iv1Checked, setIv1Checked] = useState<Record<number, boolean>>({});
  const [iv1Reveal, setIv1Reveal] = useState<Record<number, boolean>>({});

  // IV.2 Same-meaning rewrites
  const [iv2Vals, setIv2Vals] = useState<Record<number, string>>({});
  const [iv2Checked, setIv2Checked] = useState<Record<number, boolean>>({});
  const [iv2ShowAll, setIv2ShowAll] = useState(false);

  const iv1Correct = U5_EX_IV1_REORDER.filter((item) => {
    const indices = iv1Picked[item.id] ?? [];
    const built = indices.map((i) => shuffledMap[item.id][i]).join(' ');
    return stripEndPunct(built) === stripEndPunct(item.correctSentence);
  }).length;

  const iv2Correct = U5_EX_IV2_REWRITE.filter((item) =>
    matchesAny(iv2Vals[item.id] ?? '', item.answers)
  ).length;

  return (
    <div className="space-y-6">
      {/* BÀI IV.1 — SẮP XẾP TỪ */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Bài IV.1 · Trang 120 · Sắp xếp từ thành câu hoàn chỉnh (8 câu)
            </p>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-1">
              Ghép thẻ từ trực quan
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Chạm lần lượt vào các thẻ từ để xếp thành câu đúng ngữ pháp. Chạm lại thẻ đã xếp để bỏ ra.
            </p>
          </div>
          <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
            Hoàn thành đúng: {iv1Correct}/{U5_EX_IV1_REORDER.length}
          </span>
        </div>

        <div className="space-y-4">
          {U5_EX_IV1_REORDER.map((item) => {
            const pool = shuffledMap[item.id];
            const pickedIndices = iv1Picked[item.id] ?? [];
            const builtSentence = pickedIndices.map((idx) => pool[idx]).join(' ');
            const isChecked = iv1Checked[item.id];
            const isCorrect =
              stripEndPunct(builtSentence) === stripEndPunct(item.correctSentence);

            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-700">Câu {item.id}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIv1Picked((prev) => ({ ...prev, [item.id]: [] }));
                        setIv1Checked((prev) => ({ ...prev, [item.id]: false }));
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      Xếp lại
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setIv1Reveal((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                      }
                      className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:underline"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      {iv1Reveal[item.id] ? 'Ẩn đáp án' : 'Gợi ý'}
                    </button>
                  </div>
                </div>

                {/* Built Answer Strip */}
                <div
                  className={`min-h-[46px] rounded-xl border bg-white p-2.5 flex flex-wrap gap-1.5 items-center ${
                    isChecked
                      ? isCorrect
                        ? 'border-emerald-400 bg-emerald-50/40'
                        : 'border-rose-400 bg-rose-50/40'
                      : 'border-dashed border-slate-300'
                  }`}
                >
                  {pickedIndices.length === 0 ? (
                    <span className="text-xs text-slate-400 px-1">
                      Chạm các thẻ từ bên dưới để ghép câu...
                    </span>
                  ) : (
                    pickedIndices.map((poolIdx, orderIdx) => (
                      <button
                        key={`${poolIdx}-${orderIdx}`}
                        type="button"
                        onClick={() => {
                          setIv1Picked((prev) => ({
                            ...prev,
                            [item.id]: (prev[item.id] ?? []).filter((_, i) => i !== orderIdx),
                          }));
                          setIv1Checked((prev) => ({ ...prev, [item.id]: false }));
                        }}
                        className="rounded-lg border border-teal-300 bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-900 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-800"
                      >
                        {pool[poolIdx]}
                      </button>
                    ))
                  )}
                </div>

                {/* Source Tiles */}
                <div className="flex flex-wrap gap-2">
                  {pool.map((tile, idx) => {
                    const alreadyUsed = pickedIndices.includes(idx);
                    return (
                      <button
                        key={`${tile}-${idx}`}
                        type="button"
                        disabled={alreadyUsed}
                        onClick={() => {
                          setIv1Picked((prev) => ({
                            ...prev,
                            [item.id]: [...(prev[item.id] ?? []), idx],
                          }));
                          setIv1Checked((prev) => ({ ...prev, [item.id]: false }));
                        }}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                          alreadyUsed
                            ? 'border-slate-200 bg-slate-100 text-slate-300 cursor-default'
                            : 'border-slate-300 bg-white text-slate-800 hover:border-teal-400 hover:bg-teal-50'
                        }`}
                      >
                        {tile}
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    disabled={pickedIndices.length === 0}
                    onClick={() => setIv1Checked((prev) => ({ ...prev, [item.id]: true }))}
                    className="rounded-lg bg-teal-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-teal-700 disabled:opacity-40"
                  >
                    Kiểm tra câu {item.id}
                  </button>
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.correctSentence)}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-teal-700 hover:bg-teal-50"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                    Nghe câu chuẩn
                  </button>
                </div>

                {(isChecked || iv1Reveal[item.id]) && (
                  <div
                    className={`rounded-lg border p-3 text-xs space-y-1 ${
                      isChecked && isCorrect
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-950'
                        : 'border-amber-200 bg-amber-50 text-amber-950'
                    }`}
                  >
                    <p className="font-bold inline-flex items-center gap-1.5">
                      {isChecked && isCorrect ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          Chính xác tuyệt đối!
                        </>
                      ) : (
                        <>
                          <HelpCircle className="h-4 w-4 text-amber-600" />
                          Câu đúng: {item.correctSentence}
                        </>
                      )}
                    </p>
                    <p className="text-slate-700">Nghĩa: {item.vi}</p>
                    <p className="text-slate-600">{item.explainVi}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BÀI IV.2 — VIẾT LẠI CÂU ĐỒNG NGHĨA */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Bài IV.2 · Trang 120–121 · Viết lại câu sao cho nghĩa không đổi (10 câu)
            </p>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-1">
              Biến đổi cấu trúc câu nâng cao
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
              {iv2Correct}/{U5_EX_IV2_REWRITE.length} đúng
            </span>
            <button
              type="button"
              onClick={() => {
                const all: Record<number, boolean> = {};
                U5_EX_IV2_REWRITE.forEach((it) => {
                  all[it.id] = true;
                });
                setIv2Checked(all);
              }}
              className="rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-teal-700"
            >
              Chấm tất cả
            </button>
            <button
              type="button"
              onClick={() => setIv2ShowAll((s) => !s)}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Eye className="h-3.5 w-3.5" />
              {iv2ShowAll ? 'Ẩn đáp án' : 'Xem đáp án'}
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U5_EX_IV2_REWRITE.map((item) => {
            const val = iv2Vals[item.id] ?? '';
            const isChecked = iv2Checked[item.id] || iv2ShowAll;
            const isCorrect = matchesAny(val, item.answers);

            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2.5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.id}. {item.original}
                </p>
                <p className="text-xs text-teal-800 font-semibold">
                  Bắt đầu bằng: <span className="font-ipa">&ldquo;{item.starter} ...&rdquo;</span>
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => {
                      setIv2Vals((prev) => ({ ...prev, [item.id]: e.target.value }));
                      setIv2Checked((prev) => ({ ...prev, [item.id]: false }));
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setIv2Checked((prev) => ({ ...prev, [item.id]: true }));
                      }
                    }}
                    placeholder={`${item.starter} ...`}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setIv2Checked((prev) => ({ ...prev, [item.id]: true }))}
                    className="shrink-0 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-bold text-teal-800 hover:bg-teal-100"
                  >
                    Chấm
                  </button>
                </div>

                {isChecked && (
                  <div
                    className={`rounded-lg border p-2.5 text-xs space-y-1 ${
                      isCorrect
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                        : 'border-amber-200 bg-amber-50 text-amber-950'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold inline-flex items-center gap-1.5">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                            Chính xác!
                          </>
                        ) : (
                          <>
                            <XCircle className="h-3.5 w-3.5 text-amber-600" />
                            Đáp án: {item.displayAnswer}
                          </>
                        )}
                      </span>
                      <button
                        type="button"
                        onClick={() => speakEnglish(item.displayAnswer)}
                        className="inline-flex items-center gap-1 text-teal-700 font-semibold hover:underline"
                      >
                        <Volume2 className="h-3 w-3" />
                        Nghe
                      </button>
                    </div>
                    <p className="text-slate-600">{item.explainVi}</p>
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

// ============================================================
// TRẠM 07 · TEST FOR UNIT 5 — TRỌN BỘ 10 PHẦN (TRANG 122 – 128)
// ============================================================

const TEST_PARTS_NAV = [
  { id: 'u5-test-p1', label: 'I. Phát âm (5)' },
  { id: 'u5-test-p2', label: 'II. Khác loại (10)' },
  { id: 'u5-test-p3', label: 'III. Cặp -t/-st (10)' },
  { id: 'u5-test-p4', label: 'IV. Trắc nghiệm (20)' },
  { id: 'u5-test-p5', label: 'V. Must/Mustn\'t (7)' },
  { id: 'u5-test-p6', label: 'VI. Điền từ VN (8)' },
  { id: 'u5-test-p7', label: 'VII. Đọc Nha Trang (5)' },
  { id: 'u5-test-p8', label: 'VIII. Ghép câu (5)' },
  { id: 'u5-test-p9', label: 'IX. Viết lại câu (10)' },
  { id: 'u5-test-p10', label: 'X. Viết đoạn văn' },
];

export function Unit5FullTestSection() {
  const [p1Ans, setP1Ans] = useState<Record<number, number>>({});
  const [p2Ans, setP2Ans] = useState<Record<number, number>>({});
  const [p3Ans, setP3Ans] = useState<Record<string, number>>({});
  const [p4Ans, setP4Ans] = useState<Record<number, number>>({});
  const [p5Vals, setP5Vals] = useState<Record<number, string>>({});
  const [p5Checked, setP5Checked] = useState(false);
  const [p6Ans, setP6Ans] = useState<Record<number, number>>({});
  const [p7Ans, setP7Ans] = useState<Record<number, 'T' | 'F'>>({});
  const [p8Ans, setP8Ans] = useState<Record<number, number>>({});
  const [p9Vals, setP9Vals] = useState<Record<number, string>>({});
  const [p9Checked, setP9Checked] = useState(false);

  // Part X writing
  const [p10Text, setP10Text] = useState('');
  const [showSample, setShowSample] = useState(false);

  const p1Score = U5_TEST_P1.filter((q) => p1Ans[q.id] === q.correctIndex).length;
  const p2Score = U5_TEST_P2_ODD.filter((q) => p2Ans[q.id] === q.correctIndex).length;
  const p3Score = U5_TEST_P3_PAIRS.filter((q) =>
    q.slots.every((s) => p3Ans[s.slotId] === s.correctIndex)
  ).length;
  const p4Score = U5_TEST_P4_MCQ.filter((q) => p4Ans[q.id] === q.correctIndex).length;
  const p5Score = U5_TEST_P5_MUST.filter((q) => matchesAny(p5Vals[q.id] ?? '', q.answers)).length;
  const p6Score = U5_TEST_P6_QUESTIONS.filter((q) => p6Ans[q.id] === q.correctIndex).length;
  const p7Score = U5_TEST_P7_TF.filter((q) => p7Ans[q.id] === q.answer).length;
  const p8Score = U5_TEST_P8_CUES.filter((q) => p8Ans[q.id] === q.correctIndex).length;
  const p9Score = U5_TEST_P9_REWRITE.filter((q) =>
    matchesAny(p9Vals[q.id] ?? '', q.answers)
  ).length;

  const totalAutoQuestions =
    U5_TEST_P1.length +
    U5_TEST_P2_ODD.length +
    U5_TEST_P3_PAIRS.length +
    U5_TEST_P4_MCQ.length +
    U5_TEST_P5_MUST.length +
    U5_TEST_P6_QUESTIONS.length +
    U5_TEST_P7_TF.length +
    U5_TEST_P8_CUES.length +
    U5_TEST_P9_REWRITE.length;

  const totalCorrect =
    p1Score +
    p2Score +
    p3Score +
    p4Score +
    p5Score +
    p6Score +
    p7Score +
    p8Score +
    p9Score;

  const scorePercent = Math.round((totalCorrect / totalAutoQuestions) * 100);
  const p10Words = p10Text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const handleResetAll = () => {
    setP1Ans({});
    setP2Ans({});
    setP3Ans({});
    setP4Ans({});
    setP5Vals({});
    setP5Checked(false);
    setP6Ans({});
    setP7Ans({});
    setP8Ans({});
    setP9Vals({});
    setP9Checked(false);
  };

  const fullP6Passage = useMemo(() => {
    return U5_TEST_P6_SEGMENTS.reduce((acc, seg, idx) => {
      if (idx === U5_TEST_P6_SEGMENTS.length - 1) return acc + seg;
      const q = U5_TEST_P6_QUESTIONS[idx];
      return acc + seg + q.options[q.correctIndex];
    }, '');
  }, []);

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="space-y-6">
      {/* Score Banner + 10-Part Quick-Jump Bar */}
      <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-800">
              TEST FOR UNIT 5 · Trang 122 – 128 · Đề kiểm tra hoàn chỉnh 10 Phần
            </p>
            <h3 className="font-display text-xl font-extrabold text-slate-900 mt-1">
              Kiểm tra tổng hợp Natural Wonders of Viet Nam
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-teal-200 bg-white px-4 py-2 text-right">
              <p className="text-[11px] font-semibold text-slate-500">Điểm tự chấm (I–IX)</p>
              <p className="font-display text-lg font-extrabold text-teal-700 tabular-nums">
                {totalCorrect}/{totalAutoQuestions}{' '}
                <span className="text-xs font-bold text-slate-500">({scorePercent}%)</span>
              </p>
            </div>
            <button
              type="button"
              onClick={handleResetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại đề
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-teal-200/70">
          {TEST_PARTS_NAV.map((part) => (
            <button
              key={part.id}
              type="button"
              onClick={() =>
                document.getElementById(part.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
              className="rounded-lg border border-teal-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-teal-900 hover:bg-teal-600 hover:text-white transition-colors"
            >
              {part.label}
            </button>
          ))}
        </div>
      </div>

      {/* PART I: PHONETICS (5) */}
      <section
        id="u5-test-p1"
        className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4"
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Part I · Trang 122 · Chọn từ có phần gạch chân phát âm khác
            </p>
            <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
              Phát âm /t/, /st/ và nguyên âm (5 câu)
            </h4>
          </div>
          <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
            {p1Score}/{U5_TEST_P1.length}
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U5_TEST_P1.map((q) => {
            const picked = p1Ans[q.id];
            const isCorrect = picked === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2.5"
              >
                <p className="text-xs font-bold text-slate-600">Câu {q.id}</p>
                <div className="grid grid-cols-2 gap-2">
                  {q.options.map((opt, idx) => {
                    const selected = picked === idx;
                    let cls =
                      'border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-teal-50';
                    if (picked !== undefined) {
                      if (idx === q.correctIndex) {
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (selected) {
                        cls = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      } else {
                        cls = 'border-slate-200 bg-white text-slate-400';
                      }
                    }
                    return (
                      <div key={opt.word} className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setP1Ans((prev) => ({ ...prev, [q.id]: idx }))}
                          className={`flex-1 rounded-lg border px-2.5 py-2 text-left text-xs transition-colors ${cls}`}
                        >
                          <span className="font-bold mr-1">{letters[idx]}.</span>
                          {opt.before}
                          <span className="underline decoration-2 underline-offset-2 font-extrabold">
                            {opt.under}
                          </span>
                          {opt.after}
                          {picked !== undefined && (
                            <span className="block font-ipa text-[10px] text-slate-500 mt-0.5">
                              {opt.ipa}
                            </span>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => speakEnglish(opt.word)}
                          className="p-1.5 text-slate-400 hover:text-teal-700"
                          title={`Nghe từ ${opt.word}`}
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
                {picked !== undefined && (
                  <p className={`text-xs ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {isCorrect ? 'Đúng! ' : `Chưa đúng (Đáp án: ${letters[q.correctIndex]}). `}
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART II: ODD ONE OUT (10) */}
      <section
        id="u5-test-p2"
        className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4"
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Part II · Trang 122 · Chọn từ khác loại (Odd one out)
            </p>
            <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
              Phân loại từ vựng &amp; từ loại (10 câu)
            </h4>
          </div>
          <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
            {p2Score}/{U5_TEST_P2_ODD.length}
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U5_TEST_P2_ODD.map((q) => {
            const picked = p2Ans[q.id];
            const isCorrect = picked === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
              >
                <p className="text-xs font-bold text-slate-600">Câu {q.id}</p>
                <div className="grid grid-cols-2 gap-2">
                  {q.options.map((opt, idx) => {
                    let cls =
                      'border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-teal-50';
                    if (picked !== undefined) {
                      if (idx === q.correctIndex) {
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (picked === idx) {
                        cls = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      } else {
                        cls = 'border-slate-200 bg-white text-slate-400';
                      }
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP2Ans((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`rounded-lg border px-2.5 py-2 text-left text-xs transition-colors ${cls}`}
                      >
                        <span className="font-bold mr-1">{letters[idx]}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {picked !== undefined && (
                  <p className={`text-xs ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {isCorrect ? 'Đúng! ' : `Đáp án: ${letters[q.correctIndex]}. `}
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART III: MINIMAL PAIRS -t vs -st (10) */}
      <section
        id="u5-test-p3"
        className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4"
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Part III · Trang 122–123 · Chọn từ đúng trong cặp dễ nhầm (-t / -st)
            </p>
            <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
              Phân biệt chính tả &amp; ngữ nghĩa (10 câu)
            </h4>
          </div>
          <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
            {p3Score}/{U5_TEST_P3_PAIRS.length}
          </span>
        </div>

        <div className="space-y-2.5">
          {U5_TEST_P3_PAIRS.map((q) => {
            const allPicked = q.slots.every((s) => p3Ans[s.slotId] !== undefined);
            const allCorrect = q.slots.every((s) => p3Ans[s.slotId] === s.correctIndex);
            const fullCorrectSentence = q.parts.reduce((acc, part, idx) => {
              if (idx === q.parts.length - 1) return acc + part;
              const slot = q.slots[idx];
              return acc + part + slot.choices[slot.correctIndex];
            }, '');

            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-sm text-slate-900 leading-8 flex flex-wrap items-center gap-1">
                    <span className="font-bold text-slate-500 mr-1">{q.id}.</span>
                    {q.parts.map((part, idx) => {
                      const slot = q.slots[idx];
                      return (
                        <span key={idx} className="inline-flex flex-wrap items-center gap-1">
                          <span>{part}</span>
                          {slot && (
                            <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-0.5">
                              {slot.choices.map((choice, cIdx) => {
                                const picked = p3Ans[slot.slotId];
                                let btnCls = 'text-slate-700 hover:bg-teal-50';
                                if (picked !== undefined) {
                                  if (cIdx === slot.correctIndex) {
                                    btnCls = 'bg-emerald-600 text-white font-bold';
                                  } else if (picked === cIdx) {
                                    btnCls = 'bg-rose-600 text-white font-bold';
                                  } else {
                                    btnCls = 'text-slate-400';
                                  }
                                }
                                return (
                                  <button
                                    key={choice}
                                    type="button"
                                    onClick={() =>
                                      setP3Ans((prev) => ({ ...prev, [slot.slotId]: cIdx }))
                                    }
                                    className={`rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${btnCls}`}
                                  >
                                    {choice}
                                  </button>
                                );
                              })}
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={() => speakEnglish(fullCorrectSentence)}
                    className="shrink-0 p-1.5 text-teal-700 hover:text-teal-900"
                    title="Nghe câu chuẩn"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                </div>

                {allPicked && (
                  <p className={`text-xs ${allCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {allCorrect ? 'Đúng! ' : 'Kiểm tra lại: '}
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART IV: 20 MCQs */}
      <section
        id="u5-test-p4"
        className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4"
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Part IV · Trang 123–124 · Trắc nghiệm Từ vựng &amp; Ngữ pháp tổng hợp
            </p>
            <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
              Chọn đáp án đúng nhất A, B, C hoặc D (20 câu)
            </h4>
          </div>
          <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
            {p4Score}/{U5_TEST_P4_MCQ.length}
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U5_TEST_P4_MCQ.map((q) => {
            const picked = p4Ans[q.id];
            const isCorrect = picked === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2.5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {q.options.map((opt, idx) => {
                    let cls =
                      'border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-teal-50';
                    if (picked !== undefined) {
                      if (idx === q.correctIndex) {
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (picked === idx) {
                        cls = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      } else {
                        cls = 'border-slate-200 bg-white text-slate-400';
                      }
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP4Ans((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`rounded-lg border px-2.5 py-2 text-left text-xs transition-colors ${cls}`}
                      >
                        <span className="font-bold mr-1">{letters[idx]}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {picked !== undefined && (
                  <p className={`text-xs ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {isCorrect ? 'Đúng! ' : `Đáp án: ${letters[q.correctIndex]}. `}
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART V: MUST / MUSTN'T SENTENCES (7) */}
      <section
        id="u5-test-p5"
        className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Part V · Trang 124–125 · Viết câu với must / mustn&apos;t (7 câu)
            </p>
            <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
              Dựa vào tình huống và gợi ý để đặt câu đúng
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
              {p5Score}/{U5_TEST_P5_MUST.length}
            </span>
            <button
              type="button"
              onClick={() => setP5Checked(true)}
              className="rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-teal-700"
            >
              Chấm phần V
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-teal-100 bg-teal-50/60 p-3 text-xs text-teal-950">
          <strong>Câu mẫu (1):</strong> It&apos;s very cold outside. (you / wear a warm coat) →{' '}
          <span className="font-bold text-teal-800">You must wear a warm coat.</span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U5_TEST_P5_MUST.map((item) => {
            const val = p5Vals[item.id] ?? '';
            const ok = matchesAny(val, item.answers);
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.id}. {item.situation}
                </p>
                <p className="font-ipa text-xs text-teal-800">Gợi ý: ({item.cue})</p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => {
                    setP5Vals((prev) => ({ ...prev, [item.id]: e.target.value }));
                    setP5Checked(false);
                  }}
                  placeholder="Viết câu với must / mustn't..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                />
                {p5Checked && (
                  <div
                    className={`rounded-lg border p-2 text-xs ${
                      ok
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                        : 'border-amber-200 bg-amber-50 text-amber-950'
                    }`}
                  >
                    <p className="font-bold">
                      {ok ? 'Chính xác!' : `Đáp án: ${item.displayAnswer}`}
                    </p>
                    <p className="text-slate-600 mt-0.5">{item.explainVi}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VI: VIET NAM GEOGRAPHY CLOZE (8) */}
      <section
        id="u5-test-p6"
        className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Part VI · Trang 125 · Đọc điền từ về địa lý Việt Nam (8 câu)
            </p>
            <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
              Chọn A, B hoặc C điền vào chỗ trống
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
              {p6Score}/{U5_TEST_P6_QUESTIONS.length}
            </span>
            <button
              type="button"
              onClick={() => speakEnglish(fullP6Passage)}
              className="inline-flex items-center gap-1 rounded-xl border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800 hover:bg-teal-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe cả đoạn
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm leading-8 text-slate-800">
          {U5_TEST_P6_SEGMENTS.map((seg, idx) => {
            const q = U5_TEST_P6_QUESTIONS[idx];
            const picked = q ? p6Ans[q.id] : undefined;
            const ok = q && picked !== undefined ? picked === q.correctIndex : false;
            return (
              <span key={idx}>
                {seg}
                {q && (
                  <span
                    className={`mx-1 inline-flex items-center rounded-md border px-2 py-0.5 font-ipa text-xs font-bold ${
                      picked === undefined
                        ? 'border-teal-300 bg-white text-teal-800'
                        : ok
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                          : 'border-rose-300 bg-rose-50 text-rose-800'
                    }`}
                  >
                    ({q.id}) {picked !== undefined ? q.options[picked] : '____'}
                  </span>
                )}
              </span>
            );
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {U5_TEST_P6_QUESTIONS.map((q) => {
            const picked = p6Ans[q.id];
            const ok = picked === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-white p-3 space-y-2"
              >
                <p className="text-xs font-bold text-slate-500">Chỗ ({q.id})</p>
                <div className="space-y-1.5">
                  {q.options.map((opt, idx) => {
                    let cls =
                      'border-slate-200 bg-slate-50 text-slate-800 hover:border-teal-300 hover:bg-teal-50';
                    if (picked !== undefined) {
                      if (idx === q.correctIndex) {
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (picked === idx) {
                        cls = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      } else {
                        cls = 'border-slate-200 bg-white text-slate-400';
                      }
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP6Ans((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`w-full rounded-lg border px-2.5 py-1.5 text-left text-xs transition-colors ${cls}`}
                      >
                        <span className="font-bold mr-1">{letters[idx]}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {picked !== undefined && (
                  <p className={`text-[11px] leading-relaxed ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VII: READING NHA TRANG T/F (5) */}
      <section
        id="u5-test-p7"
        className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Part VII · Trang 125–126 · Đọc hiểu Thành phố biển Nha Trang (5 câu T/F)
            </p>
            <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
              Chọn True (Đúng) hoặc False (Sai)
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
              {p7Score}/{U5_TEST_P7_TF.length}
            </span>
            <button
              type="button"
              onClick={() => speakEnglish(U5_TEST_P7_PASSAGE)}
              className="inline-flex items-center gap-1 rounded-xl border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800 hover:bg-teal-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe bài đọc
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-teal-100 bg-teal-50/40 p-4 text-sm leading-7 text-slate-800">
          {U5_TEST_P7_PASSAGE}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-700">
          <strong>Ví dụ (0):</strong> Nha Trang is the biggest city in Khanh Hoa Province. →{' '}
          <span className="font-bold text-emerald-700">True (Đúng)</span>
        </div>

        <div className="space-y-2.5">
          {U5_TEST_P7_TF.map((item) => {
            const picked = p7Ans[item.id];
            const ok = picked === item.answer;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-medium text-slate-900">
                    {item.id}. {item.statement}
                  </p>
                  <div className="flex items-center gap-2 shrink-0">
                    {(['T', 'F'] as const).map((choice) => {
                      let cls =
                        'border-slate-300 bg-white text-slate-700 hover:border-teal-400';
                      if (picked !== undefined) {
                        if (choice === item.answer) {
                          cls = 'border-emerald-500 bg-emerald-600 text-white font-bold';
                        } else if (picked === choice) {
                          cls = 'border-rose-500 bg-rose-600 text-white font-bold';
                        } else {
                          cls = 'border-slate-200 bg-white text-slate-400';
                        }
                      }
                      return (
                        <button
                          key={choice}
                          type="button"
                          onClick={() => setP7Ans((prev) => ({ ...prev, [item.id]: choice }))}
                          className={`rounded-lg border px-3.5 py-1.5 text-xs font-bold transition-colors ${cls}`}
                        >
                          {choice === 'T' ? 'True' : 'False'}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {picked !== undefined && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VIII: CUE-TO-SENTENCE MCQ (5) */}
      <section
        id="u5-test-p8"
        className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4"
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Part VIII · Trang 126–127 · Chọn câu hoàn chỉnh đúng nhất từ từ gợi ý (5 câu)
            </p>
            <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
              Xây dựng câu chuẩn ngữ pháp
            </h4>
          </div>
          <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
            {p8Score}/{U5_TEST_P8_CUES.length}
          </span>
        </div>

        <div className="space-y-3">
          {U5_TEST_P8_CUES.map((q) => {
            const picked = p8Ans[q.id];
            const ok = picked === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2.5"
              >
                <p className="font-ipa text-xs sm:text-sm font-bold text-teal-900">
                  {q.id}. {q.question}
                </p>
                <div className="grid gap-2">
                  {q.options.map((opt, idx) => {
                    let cls =
                      'border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-teal-50';
                    if (picked !== undefined) {
                      if (idx === q.correctIndex) {
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (picked === idx) {
                        cls = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      } else {
                        cls = 'border-slate-200 bg-white text-slate-400';
                      }
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP8Ans((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`rounded-lg border px-3 py-2 text-left text-xs sm:text-sm transition-colors ${cls}`}
                      >
                        <span className="font-bold mr-1.5">{letters[idx]}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {picked !== undefined && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {ok ? 'Đúng! ' : `Đáp án: ${letters[q.correctIndex]}. `}
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART IX: SAME-MEANING REWRITE (10) */}
      <section
        id="u5-test-p9"
        className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Part IX · Trang 127–128 · Viết lại câu đồng nghĩa (10 câu)
            </p>
            <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
              Hoàn thành câu thứ hai không đổi nghĩa
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
              {p9Score}/{U5_TEST_P9_REWRITE.length}
            </span>
            <button
              type="button"
              onClick={() => setP9Checked(true)}
              className="rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-teal-700"
            >
              Chấm phần IX
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U5_TEST_P9_REWRITE.map((item) => {
            const val = p9Vals[item.id] ?? '';
            const ok = matchesAny(val, item.answers);
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.id}. {item.original}
                </p>
                <p className="text-xs font-semibold text-teal-800">
                  Gợi ý mở đầu: <span className="font-ipa">{item.starter} ...</span>
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => {
                    setP9Vals((prev) => ({ ...prev, [item.id]: e.target.value }));
                    setP9Checked(false);
                  }}
                  placeholder={`${item.starter} ...`}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                />
                {p9Checked && (
                  <div
                    className={`rounded-lg border p-2 text-xs ${
                      ok
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                        : 'border-amber-200 bg-amber-50 text-amber-950'
                    }`}
                  >
                    <p className="font-bold">
                      {ok ? 'Chính xác!' : `Đáp án: ${item.displayAnswer}`}
                    </p>
                    <p className="text-slate-600 mt-0.5">{item.explainVi}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART X: GUIDED PARAGRAPH WRITING */}
      <section
        id="u5-test-p10"
        className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Part X · Trang 128 · Viết đoạn văn (~70 từ)
            </p>
            <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              {U5_TEST_P10_MODEL.promptEn}
            </h4>
            <p className="text-xs text-slate-600 mt-1">{U5_TEST_P10_MODEL.promptVi}</p>
          </div>
          <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
            Số từ đã viết: {p10Words} / ~70 từ
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-xs text-slate-700">
          {U5_TEST_P10_MODEL.cues.map((cue) => (
            <p key={cue} className="font-medium">
              {cue}
            </p>
          ))}
        </div>

        <textarea
          rows={5}
          value={p10Text}
          onChange={(e) => setP10Text(e.target.value)}
          placeholder="Ví dụ: Ha Long Bay is one of the most famous natural wonders of Viet Nam. It is located in..."
          className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm leading-relaxed text-slate-900 focus:border-teal-500 focus:outline-none"
        />

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowSample((s) => !s)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-bold text-teal-800 hover:bg-teal-100"
          >
            <FileText className="h-3.5 w-3.5" />
            {showSample ? 'Ẩn bài mẫu tham khảo' : 'Xem bài mẫu Vịnh Hạ Long (Tr.175)'}
          </button>
          {p10Text.trim().length > 10 && (
            <button
              type="button"
              onClick={() => speakEnglish(p10Text)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe thử đoạn em viết
            </button>
          )}
        </div>

        {showSample && (
          <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-800">
                {U5_TEST_P10_MODEL.sampleTitle}
              </p>
              <button
                type="button"
                onClick={() => speakEnglish(U5_TEST_P10_MODEL.sampleEn)}
                className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:underline"
              >
                <Volume2 className="h-3.5 w-3.5" />
                Nghe bài mẫu
              </button>
            </div>
            <p className="text-sm leading-7 text-slate-900">{U5_TEST_P10_MODEL.sampleEn}</p>
            <p className="text-xs leading-relaxed text-slate-600 border-t border-teal-100 pt-2">
              <strong>Dịch nghĩa:</strong> {U5_TEST_P10_MODEL.sampleVi}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
