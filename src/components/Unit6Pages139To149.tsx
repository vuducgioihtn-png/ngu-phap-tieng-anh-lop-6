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
  U6_EX_III1_PASSAGE,
  U6_EX_III1_TF,
  U6_EX_III2_PARTS,
  U6_EX_III2_QUESTIONS,
  U6_EX_III3_ANSWERS,
  U6_EX_III3_BOX,
  U6_EX_III3_SEGMENTS,
  U6_EX_IV1_REORDER,
  U6_EX_IV2_SHOULD_WRITE,
  U6_EX_IV3_PARAGRAPH,
  U6_TEST_P1,
  U6_TEST_P10_REWRITE,
  U6_TEST_P2_MCQ,
  U6_TEST_P3_VERBS,
  U6_TEST_P4_MISTAKES,
  U6_TEST_P5_WORDFORM,
  U6_TEST_P6_SHOULD,
  U6_TEST_P7_MCQ,
  U6_TEST_P7_PASSAGE,
  U6_TEST_P8_ANSWERS,
  U6_TEST_P8_BOX,
  U6_TEST_P8_SEGMENTS,
  U6_TEST_P9_QUESTIONS,
} from '../data/unit6Pages129To149';
import { speakEnglish } from '../utils/speech';

function norm(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/[.?!]+$/, '');
}

function matchesAny(userVal: string, accepted: string[]): boolean {
  const c = norm(userVal);
  if (!c) return false;
  return accepted.some((a) => norm(a) === c);
}

function deterministicShuffle(items: string[], seed: number): string[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (seed * 5 + i * 3 + 2) % (i + 1);
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

const LETTERS = ['A', 'B', 'C', 'D'];

export function Unit6Station5() {
  const [iii1Ans, setIii1Ans] = useState<Record<number, 'T' | 'F'>>({});
  const [iii2Ans, setIii2Ans] = useState<Record<number, number>>({});
  const [iii3Vals, setIii3Vals] = useState<Record<number, string>>({});
  const [iii3Active, setIii3Active] = useState<number>(1);
  const [iii3Checked, setIii3Checked] = useState(false);

  const iii1Correct = U6_EX_III1_TF.filter((q) => iii1Ans[q.id] === q.answer).length;
  const iii2Correct = U6_EX_III2_QUESTIONS.filter((q) => iii2Ans[q.id] === q.correctIndex).length;
  const iii3Correct = U6_EX_III3_ANSWERS.filter(
    (a) => norm(iii3Vals[a.id] ?? '') === norm(a.answer)
  ).length;

  const usedIII3 = useMemo(() => {
    const s = new Set<string>();
    Object.values(iii3Vals).forEach((v) => {
      if (v.trim()) s.add(v.trim().toLowerCase());
    });
    return s;
  }, [iii3Vals]);

  const fullNgaHoa = useMemo(
    () =>
      U6_EX_III2_PARTS.reduce((acc, seg, idx) => {
        if (idx === U6_EX_III2_PARTS.length - 1) return acc + seg;
        const q = U6_EX_III2_QUESTIONS[idx];
        return acc + seg + q.options[q.correctIndex];
      }, ''),
    []
  );

  const fullCustoms = useMemo(
    () =>
      U6_EX_III3_SEGMENTS.reduce((acc, seg, idx) => {
        if (idx === U6_EX_III3_SEGMENTS.length - 1) return acc + seg;
        return acc + seg + U6_EX_III3_ANSWERS[idx].answer;
      }, ''),
    []
  );

  return (
    <div className="space-y-6">
      {/* III.1 TET HOLIDAY T/F */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài III.1 · Trang 139–140 · Đọc hiểu Tết Nguyên Đán (True / False)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
              Ý nghĩa ngày Tết cổ truyền Việt Nam
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700 tabular-nums">
              {iii1Correct}/5 đúng
            </span>
            <button
              type="button"
              onClick={() => speakEnglish(U6_EX_III1_PASSAGE)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-800 hover:bg-rose-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe bài
            </button>
            <button
              type="button"
              onClick={() => speakEnglish(U6_EX_III1_PASSAGE, { slow: true })}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Turtle className="h-3.5 w-3.5" />
              Chậm
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-4 text-sm leading-7 text-slate-800">
          {U6_EX_III1_PASSAGE}
        </div>

        <div className="space-y-2.5">
          {U6_EX_III1_TF.map((item) => {
            const picked = iii1Ans[item.id];
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
                    {(['T', 'F'] as const).map((c) => {
                      let cls = 'border-slate-300 bg-white text-slate-700 hover:border-rose-400';
                      if (picked !== undefined) {
                        if (c === item.answer) cls = 'border-emerald-500 bg-emerald-600 text-white font-bold';
                        else if (picked === c) cls = 'border-rose-500 bg-rose-600 text-white font-bold';
                        else cls = 'border-slate-200 bg-white text-slate-400';
                      }
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setIii1Ans((prev) => ({ ...prev, [item.id]: c }))}
                          className={`rounded-lg border px-3.5 py-1.5 text-xs font-bold transition-colors ${cls}`}
                        >
                          {c === 'T' ? 'True' : 'False'}
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

      {/* III.2 NGA & HOA MCQ CLOZE */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài III.2 · Trang 140 · Đọc điền từ trắc nghiệm (5 câu)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
              Gia đình Nga và Hoa chuẩn bị đón Tết
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700 tabular-nums">
              {iii2Correct}/5 đúng
            </span>
            <button
              type="button"
              onClick={() => speakEnglish(fullNgaHoa)}
              className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-800 hover:bg-rose-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe cả bài
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-8 text-slate-800">
          {U6_EX_III2_PARTS.map((part, idx) => {
            const q = U6_EX_III2_QUESTIONS[idx];
            const picked = q ? iii2Ans[q.id] : undefined;
            const ok = q && picked !== undefined ? picked === q.correctIndex : false;
            return (
              <span key={idx}>
                {part}
                {q && (
                  <span
                    className={`mx-1 inline-flex items-center rounded-md border px-2 py-0.5 font-ipa text-xs font-bold ${
                      picked === undefined
                        ? 'border-rose-300 bg-white text-rose-800'
                        : ok
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                          : 'border-rose-400 bg-rose-50 text-rose-800'
                    }`}
                  >
                    ({q.id}) {picked !== undefined ? q.options[picked] : '____'}
                  </span>
                )}
              </span>
            );
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {U6_EX_III2_QUESTIONS.map((q) => {
            const picked = iii2Ans[q.id];
            const ok = picked === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-2">
                <p className="text-xs font-bold text-slate-500">Chỗ ({q.id})</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {q.options.map((opt, idx) => {
                    let cls = 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-rose-50';
                    if (picked !== undefined) {
                      if (idx === q.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (picked === idx) cls = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      else cls = 'border-slate-200 bg-white text-slate-400';
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setIii2Ans((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`rounded-lg border px-2 py-1.5 text-left text-xs transition-colors ${cls}`}
                      >
                        <span className="font-bold mr-1">{LETTERS[idx]}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {picked !== undefined && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>{q.explainVi}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* III.3 TET CUSTOMS 10-BLANK WORD BOX */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài III.3 · Trang 140–141 · Điền 10 từ trong hộp vào đoạn văn
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
              Phong tục gói bánh chưng, bữa cơm tất niên &amp; lì xì đầu năm
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(fullCustoms)}
              className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-800 hover:bg-rose-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe cả bài
            </button>
            <button
              type="button"
              onClick={() => {
                setIii3Vals({});
                setIii3Checked(false);
                setIii3Active(1);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-3.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-rose-800 mb-2">
            Chạm từ để điền vào ô ({iii3Active}):
          </p>
          <div className="flex flex-wrap gap-2">
            {U6_EX_III3_BOX.map((w) => {
              const used = usedIII3.has(w.toLowerCase());
              return (
                <button
                  key={w}
                  type="button"
                  onClick={() => {
                    setIii3Vals((prev) => ({ ...prev, [iii3Active]: w }));
                    setIii3Checked(false);
                    if (iii3Active < 10) setIii3Active(iii3Active + 1);
                  }}
                  className={`rounded-lg border px-3 py-1 text-xs font-bold transition-colors ${
                    used
                      ? 'border-slate-200 bg-slate-100 text-slate-400 line-through'
                      : 'border-rose-300 bg-white text-rose-900 hover:bg-rose-600 hover:text-white'
                  }`}
                >
                  {w}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm leading-9 text-slate-800">
          {U6_EX_III3_SEGMENTS.map((seg, idx) => {
            const slot = U6_EX_III3_ANSWERS[idx];
            const val = slot ? iii3Vals[slot.id] ?? '' : '';
            const ok = slot ? norm(val) === norm(slot.answer) : false;
            return (
              <span key={idx}>
                {seg}
                {slot && (
                  <span className="inline-flex items-center mx-1 align-middle">
                    <span className="text-[11px] font-bold text-slate-500 mr-1">({slot.id})</span>
                    <input
                      type="text"
                      value={val}
                      onFocus={() => setIii3Active(slot.id)}
                      onChange={(e) => {
                        setIii3Vals((prev) => ({ ...prev, [slot.id]: e.target.value }));
                        setIii3Checked(false);
                      }}
                      className={`w-24 rounded-lg border px-2 py-0.5 text-xs font-bold focus:outline-none ${
                        iii3Checked
                          ? ok
                            ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : iii3Active === slot.id
                            ? 'border-rose-500 bg-white text-rose-900 ring-2 ring-rose-200'
                            : 'border-slate-300 bg-white text-slate-900'
                      }`}
                    />
                  </span>
                )}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIii3Checked(true)}
              className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700"
            >
              Chấm 10 chỗ trống
            </button>
            <button
              type="button"
              onClick={() => {
                const filled: Record<number, string> = {};
                U6_EX_III3_ANSWERS.forEach((a) => {
                  filled[a.id] = a.answer;
                });
                setIii3Vals(filled);
                setIii3Checked(true);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Eye className="h-3.5 w-3.5" />
              Đáp án
            </button>
          </div>
          {iii3Checked && (
            <span className="font-ipa text-sm font-bold text-rose-700 tabular-nums">
              {iii3Correct}/10 đúng
            </span>
          )}
        </div>

        {iii3Checked && (
          <div className="grid gap-2 sm:grid-cols-2 border-t border-slate-100 pt-3">
            {U6_EX_III3_ANSWERS.map((a) => {
              const ok = norm(iii3Vals[a.id] ?? '') === norm(a.answer);
              return (
                <div
                  key={a.id}
                  className={`flex items-start gap-2 rounded-lg border p-2 text-xs ${
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
                  <p>
                    <strong>
                      ({a.id}) {a.answer}:
                    </strong>{' '}
                    {a.explainVi}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export function Unit6Station6() {
  const shuffledMap = useMemo(() => {
    const m: Record<number, string[]> = {};
    U6_EX_IV1_REORDER.forEach((it) => {
      m[it.id] = deterministicShuffle(it.tiles, it.id + 4);
    });
    return m;
  }, []);

  const [iv1Picked, setIv1Picked] = useState<Record<number, number[]>>({});
  const [iv1Checked, setIv1Checked] = useState<Record<number, boolean>>({});
  const [iv1Reveal, setIv1Reveal] = useState<Record<number, boolean>>({});
  const [iv2Vals, setIv2Vals] = useState<Record<number, string>>({});
  const [iv2Checked, setIv2Checked] = useState(false);
  const [iv3Text, setIv3Text] = useState('');
  const [iv3ShowSample, setIv3ShowSample] = useState(false);

  const iv1Correct = U6_EX_IV1_REORDER.filter((it) => {
    const built = (iv1Picked[it.id] ?? []).map((i) => shuffledMap[it.id][i]).join(' ');
    return matchesAny(built, it.correctSentences);
  }).length;
  const iv2Correct = U6_EX_IV2_SHOULD_WRITE.filter((it) =>
    matchesAny(iv2Vals[it.id] ?? '', it.answers)
  ).length;
  const iv3Words = iv3Text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* IV.1 WORD TILE REORDER */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài IV.1 · Trang 141 · Sắp xếp từ thành câu hoàn chỉnh (6 câu)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
              Ghép thẻ từ về phong tục ngày Tết
            </h3>
          </div>
          <span className="font-ipa text-xs font-bold text-rose-700 tabular-nums">
            {iv1Correct}/6 đúng
          </span>
        </div>

        <div className="space-y-4">
          {U6_EX_IV1_REORDER.map((item) => {
            const pool = shuffledMap[item.id];
            const picked = iv1Picked[item.id] ?? [];
            const built = picked.map((i) => pool[i]).join(' ');
            const isChecked = iv1Checked[item.id];
            const ok = matchesAny(built, item.correctSentences);
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-700">Câu {item.id}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIv1Picked((p) => ({ ...p, [item.id]: [] }));
                        setIv1Checked((p) => ({ ...p, [item.id]: false }));
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      Xếp lại
                    </button>
                    <button
                      type="button"
                      onClick={() => setIv1Reveal((p) => ({ ...p, [item.id]: !p[item.id] }))}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:underline"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Gợi ý
                    </button>
                  </div>
                </div>

                <div
                  className={`min-h-[42px] rounded-xl border bg-white p-2 flex flex-wrap gap-1.5 items-center ${
                    isChecked
                      ? ok
                        ? 'border-emerald-400 bg-emerald-50/40'
                        : 'border-rose-400 bg-rose-50/40'
                      : 'border-dashed border-slate-300'
                  }`}
                >
                  {picked.length === 0 ? (
                    <span className="text-xs text-slate-400 px-1">Chạm thẻ từ bên dưới...</span>
                  ) : (
                    picked.map((poolIdx, orderIdx) => (
                      <button
                        key={`${poolIdx}-${orderIdx}`}
                        type="button"
                        onClick={() => {
                          setIv1Picked((p) => ({
                            ...p,
                            [item.id]: (p[item.id] ?? []).filter((_, i) => i !== orderIdx),
                          }));
                          setIv1Checked((p) => ({ ...p, [item.id]: false }));
                        }}
                        className="rounded-lg border border-rose-300 bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-900"
                      >
                        {pool[poolIdx]}
                      </button>
                    ))
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {pool.map((tile, idx) => {
                    const used = picked.includes(idx);
                    return (
                      <button
                        key={`${tile}-${idx}`}
                        type="button"
                        disabled={used}
                        onClick={() => {
                          setIv1Picked((p) => ({ ...p, [item.id]: [...(p[item.id] ?? []), idx] }));
                          setIv1Checked((p) => ({ ...p, [item.id]: false }));
                        }}
                        className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${
                          used
                            ? 'border-slate-200 bg-slate-100 text-slate-300'
                            : 'border-slate-300 bg-white text-slate-800 hover:border-rose-400 hover:bg-rose-50'
                        }`}
                      >
                        {tile}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={picked.length === 0}
                    onClick={() => setIv1Checked((p) => ({ ...p, [item.id]: true }))}
                    className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700 disabled:opacity-40"
                  >
                    Kiểm tra
                  </button>
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.displaySentence)}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-50"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                    Nghe
                  </button>
                </div>

                {(isChecked || iv1Reveal[item.id]) && (
                  <div
                    className={`rounded-lg border p-2.5 text-xs space-y-0.5 ${
                      isChecked && ok
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-950'
                        : 'border-amber-200 bg-amber-50 text-amber-950'
                    }`}
                  >
                    <p className="font-bold inline-flex items-center gap-1">
                      {isChecked && ok ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      ) : (
                        <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
                      )}
                      {item.displaySentence}
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

      {/* IV.2 WRITE SHOULD / SHOULDN'T */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài IV.2 · Trang 141–142 · Viết câu lời khuyên với should / shouldn&apos;t (8 câu)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
              Hoàn chỉnh câu từ từ gợi ý
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700 tabular-nums">
              {iv2Correct}/8 đúng
            </span>
            <button
              type="button"
              onClick={() => setIv2Checked(true)}
              className="rounded-xl bg-rose-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-rose-700"
            >
              Chấm 8 câu
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U6_EX_IV2_SHOULD_WRITE.map((item) => {
            const val = iv2Vals[item.id] ?? '';
            const ok = matchesAny(val, item.answers);
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
              >
                <p className="font-ipa text-xs font-bold text-slate-900">
                  {item.id}. {item.cue}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => {
                    setIv2Vals((p) => ({ ...p, [item.id]: e.target.value }));
                    setIv2Checked(false);
                  }}
                  placeholder="Viết câu hoàn chỉnh..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-rose-500 focus:outline-none"
                />
                {iv2Checked && (
                  <p
                    className={`rounded-lg border p-2 text-xs ${
                      ok
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                        : 'border-amber-200 bg-amber-50 text-amber-950'
                    }`}
                  >
                    <strong>{ok ? 'Đúng! ' : `Đáp án: ${item.displayAnswer}. `}</strong>
                    {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* IV.3 PARAGRAPH */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              {U6_EX_IV3_PARAGRAPH.titleVi}
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
              Viết đoạn văn về cách người Việt Nam đón Tết
            </h3>
          </div>
          <span className="font-ipa text-xs font-bold text-rose-700 tabular-nums">
            Đã viết: {iv3Words} từ
          </span>
        </div>

        <div className="grid gap-1.5 sm:grid-cols-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 text-xs text-slate-700">
          {U6_EX_IV3_PARAGRAPH.cues.map((c) => (
            <p key={c}>{c}</p>
          ))}
        </div>

        <textarea
          rows={5}
          value={iv3Text}
          onChange={(e) => setIv3Text(e.target.value)}
          placeholder="The Vietnamese people celebrate Tet..."
          className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm text-slate-900 focus:border-rose-500 focus:outline-none"
        />

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setIv3ShowSample((s) => !s)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2 text-xs font-bold text-rose-800 hover:bg-rose-100"
          >
            <FileText className="h-3.5 w-3.5" />
            {iv3ShowSample ? 'Ẩn bài mẫu' : 'Xem bài mẫu SGK Tr.177'}
          </button>
          {iv3Text.trim().length > 10 && (
            <button
              type="button"
              onClick={() => speakEnglish(iv3Text)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe bài viết
            </button>
          )}
        </div>

        {iv3ShowSample && (
          <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-bold text-rose-800">Bài mẫu tham khảo (Tr.177)</p>
              <button
                type="button"
                onClick={() => speakEnglish(U6_EX_IV3_PARAGRAPH.sampleEn)}
                className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 hover:underline"
              >
                <Volume2 className="h-3.5 w-3.5" />
                Nghe mẫu
              </button>
            </div>
            <p className="text-sm leading-7 text-slate-900">{U6_EX_IV3_PARAGRAPH.sampleEn}</p>
            <p className="text-xs text-slate-600 border-t border-rose-100 pt-2">
              <strong>Dịch:</strong> {U6_EX_IV3_PARAGRAPH.sampleVi}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

const U6_TEST_NAV = [
  { id: 'u6-test-p1', label: 'I. Phát âm (10)' },
  { id: 'u6-test-p2', label: 'II. Trắc nghiệm (20)' },
  { id: 'u6-test-p3', label: 'III. Động từ (10)' },
  { id: 'u6-test-p4', label: 'IV. Sửa lỗi (10)' },
  { id: 'u6-test-p5', label: 'V. Từ loại (8)' },
  { id: 'u6-test-p6', label: 'VI. Should (8)' },
  { id: 'u6-test-p7', label: 'VII. Đọc hiểu (5)' },
  { id: 'u6-test-p8', label: 'VIII. Điền 10 từ (10)' },
  { id: 'u6-test-p9', label: 'IX. Đặt câu hỏi (10)' },
  { id: 'u6-test-p10', label: 'X. Viết lại (8)' },
];

export function Unit6FullTestSection() {
  const [p1Ans, setP1Ans] = useState<Record<number, number>>({});
  const [p2Ans, setP2Ans] = useState<Record<number, number>>({});
  const [p3Vals, setP3Vals] = useState<Record<string, string>>({});
  const [p3Checked, setP3Checked] = useState(false);
  const [p4Vals, setP4Vals] = useState<Record<number, string>>({});
  const [p4Checked, setP4Checked] = useState(false);
  const [p5Vals, setP5Vals] = useState<Record<number, string>>({});
  const [p5Checked, setP5Checked] = useState(false);
  const [p6Vals, setP6Vals] = useState<Record<number, string>>({});
  const [p6Checked, setP6Checked] = useState(false);
  const [p7Ans, setP7Ans] = useState<Record<number, number>>({});
  const [p8Vals, setP8Vals] = useState<Record<number, string>>({});
  const [p8Active, setP8Active] = useState<number>(1);
  const [p8Checked, setP8Checked] = useState(false);
  const [p9Vals, setP9Vals] = useState<Record<number, string>>({});
  const [p9Checked, setP9Checked] = useState(false);
  const [p10Vals, setP10Vals] = useState<Record<number, string>>({});
  const [p10Checked, setP10Checked] = useState(false);

  const p1Score = U6_TEST_P1.filter((q) => p1Ans[q.id] === q.correctIndex).length;
  const p2Score = U6_TEST_P2_MCQ.filter((q) => p2Ans[q.id] === q.correctIndex).length;
  const p3Score = U6_TEST_P3_VERBS.filter((q) =>
    q.answers.every((acc, idx) => matchesAny(p3Vals[`${q.id}_${idx}`] ?? '', acc))
  ).length;
  const p4Score = U6_TEST_P4_MISTAKES.filter((m) =>
    matchesAny(p4Vals[m.id] ?? '', [...m.acceptedCorrections, m.fixedSentence])
  ).length;
  const p5Score = U6_TEST_P5_WORDFORM.filter(
    (w) => norm(p5Vals[w.id] ?? '') === norm(w.answer)
  ).length;
  const p6Score = U6_TEST_P6_SHOULD.filter((q) => matchesAny(p6Vals[q.id] ?? '', q.answers)).length;
  const p7Score = U6_TEST_P7_MCQ.filter((q) => p7Ans[q.id] === q.correctIndex).length;
  const p8Score = U6_TEST_P8_ANSWERS.filter(
    (a) => norm(p8Vals[a.id] ?? '') === norm(a.answer)
  ).length;
  const p9Score = U6_TEST_P9_QUESTIONS.filter((q) =>
    matchesAny(p9Vals[q.id] ?? '', q.answers)
  ).length;
  const p10Score = U6_TEST_P10_REWRITE.filter((q) =>
    matchesAny(p10Vals[q.id] ?? '', q.answers)
  ).length;

  const totalQ = 99;
  const totalCorrect =
    p1Score + p2Score + p3Score + p4Score + p5Score + p6Score + p7Score + p8Score + p9Score + p10Score;
  const pct = Math.round((totalCorrect / totalQ) * 100);

  const usedP8 = useMemo(() => {
    const s = new Set<string>();
    Object.values(p8Vals).forEach((v) => {
      if (v.trim()) s.add(v.trim().toLowerCase());
    });
    return s;
  }, [p8Vals]);

  const fullP8 = useMemo(
    () =>
      U6_TEST_P8_SEGMENTS.reduce((acc, seg, idx) => {
        if (idx === U6_TEST_P8_SEGMENTS.length - 1) return acc + seg;
        return acc + seg + U6_TEST_P8_ANSWERS[idx].answer;
      }, ''),
    []
  );

  const handleReset = () => {
    setP1Ans({});
    setP2Ans({});
    setP3Vals({});
    setP3Checked(false);
    setP4Vals({});
    setP4Checked(false);
    setP5Vals({});
    setP5Checked(false);
    setP6Vals({});
    setP6Checked(false);
    setP7Ans({});
    setP8Vals({});
    setP8Active(1);
    setP8Checked(false);
    setP9Vals({});
    setP9Checked(false);
    setP10Vals({});
    setP10Checked(false);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-800">
              TEST FOR UNIT 6 · Trang 143 – 149 · Trọn bộ 10 Phần (Khép lại Tập 1)
            </p>
            <h3 className="font-display text-xl font-extrabold text-slate-900 mt-1">
              Đề kiểm tra tổng hợp Our Tet Holiday
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-rose-200 bg-white px-4 py-2 text-right">
              <p className="text-[11px] font-semibold text-slate-500">Điểm tự chấm (I–X)</p>
              <p className="font-display text-lg font-extrabold text-rose-700 tabular-nums">
                {totalCorrect}/{totalQ}{' '}
                <span className="text-xs font-bold text-slate-500">({pct}%)</span>
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-rose-200/70">
          {U6_TEST_NAV.map((part) => (
            <button
              key={part.id}
              type="button"
              onClick={() =>
                document.getElementById(part.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
              className="rounded-lg border border-rose-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-rose-900 hover:bg-rose-600 hover:text-white transition-colors"
            >
              {part.label}
            </button>
          ))}
        </div>
      </div>

      {/* PART I */}
      <section id="u6-test-p1" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part I · Trang 143 · Phát âm khác loại (10 câu)
          </h4>
          <span className="font-ipa text-xs font-bold text-rose-700">{p1Score}/10</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {U6_TEST_P1.map((q) => {
            const picked = p1Ans[q.id];
            const ok = picked === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                <p className="text-xs font-bold text-slate-500">Câu {q.id}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {q.options.map((opt, idx) => {
                    let cls = 'border-slate-200 bg-white text-slate-800 hover:bg-rose-50';
                    if (picked !== undefined) {
                      if (idx === q.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (picked === idx) cls = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      else cls = 'border-slate-200 bg-white text-slate-400';
                    }
                    return (
                      <div key={opt.word} className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setP1Ans((p) => ({ ...p, [q.id]: idx }))}
                          className={`flex-1 rounded-lg border px-2 py-1.5 text-left text-xs ${cls}`}
                        >
                          <span className="font-bold mr-1">{LETTERS[idx]}.</span>
                          {opt.before}
                          <span className="underline decoration-2 font-extrabold">{opt.under}</span>
                          {opt.after}
                          {picked !== undefined && (
                            <span className="block font-ipa text-[10px] text-slate-500">{opt.ipa}</span>
                          )}
                        </button>
                        <button type="button" onClick={() => speakEnglish(opt.word)} className="p-1 text-slate-400 hover:text-rose-700">
                          <Volume2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
                {picked !== undefined && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>{q.explainVi}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART II */}
      <section id="u6-test-p2" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part II · Trang 143–144 · Trắc nghiệm tổng hợp (20 câu)
          </h4>
          <span className="font-ipa text-xs font-bold text-rose-700">{p2Score}/20</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {U6_TEST_P2_MCQ.map((q) => {
            const picked = p2Ans[q.id];
            const ok = picked === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                <p className="text-sm font-semibold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {q.options.map((opt, idx) => {
                    let cls = 'border-slate-200 bg-white text-slate-800 hover:bg-rose-50';
                    if (picked !== undefined) {
                      if (idx === q.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (picked === idx) cls = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      else cls = 'border-slate-200 bg-white text-slate-400';
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setP2Ans((p) => ({ ...p, [q.id]: idx }))}
                        className={`rounded-lg border px-2 py-1.5 text-left text-xs ${cls}`}
                      >
                        <span className="font-bold mr-1">{LETTERS[idx]}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {picked !== undefined && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>{q.explainVi}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART III */}
      <section id="u6-test-p3" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part III · Trang 145 · Chia dạng đúng của động từ (10 câu)
          </h4>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700">{p3Score}/10</span>
            <button type="button" onClick={() => setP3Checked(true)} className="rounded-xl bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700">
              Chấm
            </button>
          </div>
        </div>
        <div className="space-y-2.5">
          {U6_TEST_P3_VERBS.map((it) => {
            const allOk = it.answers.every((acc, i) => matchesAny(p3Vals[`${it.id}_${i}`] ?? '', acc));
            return (
              <div key={it.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                <div className="text-sm text-slate-900 leading-8 flex flex-wrap items-center gap-1">
                  <span className="font-bold text-slate-500 mr-1">{it.id}.</span>
                  {it.parts.map((part, i) => {
                    const pr = it.prompts[i];
                    const k = `${it.id}_${i}`;
                    const v = p3Vals[k] ?? '';
                    const ok = pr ? matchesAny(v, it.answers[i]) : false;
                    return (
                      <span key={i} className="inline-flex flex-wrap items-center gap-1">
                        <span>{part}</span>
                        {pr && (
                          <input
                            type="text"
                            value={v}
                            onChange={(e) => {
                              setP3Vals((p) => ({ ...p, [k]: e.target.value }));
                              setP3Checked(false);
                            }}
                            placeholder={`(${pr})`}
                            className={`w-32 rounded-lg border px-2 py-0.5 text-xs font-bold focus:outline-none ${
                              p3Checked
                                ? ok
                                  ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                                  : 'border-rose-400 bg-rose-50 text-rose-900'
                                : 'border-slate-300 bg-white text-slate-900'
                            }`}
                          />
                        )}
                      </span>
                    );
                  })}
                </div>
                {p3Checked && (
                  <p className={`text-xs ${allOk ? 'text-emerald-800' : 'text-amber-900'}`}>
                    <strong>{allOk ? 'Đúng! ' : `Đáp án: ${it.displayAnswers.join(' / ')}. `}</strong>
                    {it.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART IV */}
      <section id="u6-test-p4" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part IV · Trang 145–146 · Tìm và sửa lỗi sai (10 câu)
          </h4>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700">{p4Score}/10</span>
            <button type="button" onClick={() => setP4Checked(true)} className="rounded-xl bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700">
              Chấm
            </button>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {U6_TEST_P4_MISTAKES.map((m) => {
            const v = p4Vals[m.id] ?? '';
            const ok = matchesAny(v, [...m.acceptedCorrections, m.fixedSentence]);
            return (
              <div key={m.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                <p className="text-sm font-semibold text-slate-900">
                  {m.id}. {m.sentence}
                </p>
                <input
                  type="text"
                  value={v}
                  onChange={(e) => {
                    setP4Vals((p) => ({ ...p, [m.id]: e.target.value }));
                    setP4Checked(false);
                  }}
                  placeholder="Gõ từ đúng để sửa..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm"
                />
                {p4Checked && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-amber-900'}`}>
                    <strong>{ok ? 'Đúng! ' : `${m.wrongWord} → ${m.correctWord}. `}</strong>
                    {m.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART V */}
      <section id="u6-test-p5" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part V · Trang 146 · Chia đúng từ loại (8 câu)
          </h4>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700">{p5Score}/8</span>
            <button type="button" onClick={() => setP5Checked(true)} className="rounded-xl bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700">
              Chấm
            </button>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {U6_TEST_P5_WORDFORM.map((w) => {
            const v = p5Vals[w.id] ?? '';
            const ok = norm(v) === norm(w.answer);
            return (
              <div key={w.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                <p className="text-sm text-slate-900">
                  <span className="font-bold text-slate-500 mr-1">{w.id}.</span>
                  {w.before}{' '}
                  <input
                    type="text"
                    value={v}
                    onChange={(e) => {
                      setP5Vals((p) => ({ ...p, [w.id]: e.target.value }));
                      setP5Checked(false);
                    }}
                    placeholder={`(${w.root})`}
                    className={`inline-block w-28 rounded-lg border px-2 py-0.5 text-xs font-bold ${
                      p5Checked
                        ? ok
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white'
                    }`}
                  />{' '}
                  {w.after}
                </p>
                {p5Checked && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-amber-900'}`}>
                    <strong>{ok ? 'Đúng! ' : `Đáp án: ${w.answer}. `}</strong>
                    {w.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VI */}
      <section id="u6-test-p6" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part VI · Trang 146–147 · Viết câu với should / shouldn&apos;t (8 câu)
          </h4>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700">{p6Score}/8</span>
            <button type="button" onClick={() => setP6Checked(true)} className="rounded-xl bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700">
              Chấm
            </button>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {U6_TEST_P6_SHOULD.map((it) => {
            const v = p6Vals[it.id] ?? '';
            const ok = matchesAny(v, it.answers);
            return (
              <div key={it.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                <p className="text-sm font-semibold text-slate-900">
                  {it.id}. {it.situation}
                </p>
                <p className="font-ipa text-xs text-rose-800">({it.cue})</p>
                <input
                  type="text"
                  value={v}
                  onChange={(e) => {
                    setP6Vals((p) => ({ ...p, [it.id]: e.target.value }));
                    setP6Checked(false);
                  }}
                  placeholder="Viết câu với should / shouldn't..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm"
                />
                {p6Checked && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-amber-900'}`}>
                    <strong>{ok ? 'Đúng! ' : `Đáp án: ${it.displayAnswer}. `}</strong>
                    {it.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VII */}
      <section id="u6-test-p7" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part VII · Trang 147 · Đọc hiểu Phong tục xông đất (5 câu)
          </h4>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700">{p7Score}/5</span>
            <button type="button" onClick={() => speakEnglish(U6_TEST_P7_PASSAGE)} className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-800">
              <Volume2 className="h-3.5 w-3.5" />
              Nghe bài
            </button>
          </div>
        </div>
        <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-4 text-sm leading-7 text-slate-800">
          {U6_TEST_P7_PASSAGE}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {U6_TEST_P7_MCQ.map((q) => {
            const picked = p7Ans[q.id];
            const ok = picked === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-2">
                <p className="text-sm font-semibold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="grid gap-1.5">
                  {q.options.map((opt, idx) => {
                    let cls = 'border-slate-200 bg-white text-slate-800 hover:bg-rose-50';
                    if (picked !== undefined) {
                      if (idx === q.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (picked === idx) cls = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                      else cls = 'border-slate-200 bg-white text-slate-400';
                    }
                    return (
                      <button key={opt} type="button" onClick={() => setP7Ans((p) => ({ ...p, [q.id]: idx }))} className={`rounded-lg border px-2.5 py-1.5 text-left text-xs ${cls}`}>
                        <span className="font-bold mr-1">{LETTERS[idx]}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {picked !== undefined && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>{q.explainVi}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VIII */}
      <section id="u6-test-p8" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part VIII · Trang 147–148 · Điền 10 từ (Hộp 12 từ — dư 2 từ nhiễu)
          </h4>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700">{p8Score}/10</span>
            <button type="button" onClick={() => speakEnglish(fullP8)} className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-800">
              <Volume2 className="h-3.5 w-3.5" />
              Nghe
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 rounded-xl border border-rose-200 bg-rose-50/50 p-3">
          {U6_TEST_P8_BOX.map((w) => {
            const used = usedP8.has(w.toLowerCase());
            return (
              <button
                key={w}
                type="button"
                onClick={() => {
                  setP8Vals((p) => ({ ...p, [p8Active]: w }));
                  setP8Checked(false);
                  if (p8Active < 10) setP8Active(p8Active + 1);
                }}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold ${
                  used
                    ? 'border-slate-200 bg-slate-100 text-slate-400 line-through'
                    : 'border-rose-300 bg-white text-rose-900 hover:bg-rose-600 hover:text-white'
                }`}
              >
                {w}
              </button>
            );
          })}
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm leading-9 text-slate-800">
          {U6_TEST_P8_SEGMENTS.map((seg, idx) => {
            const slot = U6_TEST_P8_ANSWERS[idx];
            const val = slot ? p8Vals[slot.id] ?? '' : '';
            const ok = slot ? norm(val) === norm(slot.answer) : false;
            return (
              <span key={idx}>
                {seg}
                {slot && (
                  <span className="inline-flex items-center mx-1 align-middle">
                    <span className="text-[11px] font-bold text-slate-500 mr-1">({slot.id})</span>
                    <input
                      type="text"
                      value={val}
                      onFocus={() => setP8Active(slot.id)}
                      onChange={(e) => {
                        setP8Vals((p) => ({ ...p, [slot.id]: e.target.value }));
                        setP8Checked(false);
                      }}
                      className={`w-24 rounded-lg border px-2 py-0.5 text-xs font-bold ${
                        p8Checked
                          ? ok
                            ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : p8Active === slot.id
                            ? 'border-rose-500 bg-white ring-2 ring-rose-200'
                            : 'border-slate-300 bg-white'
                      }`}
                    />
                  </span>
                )}
              </span>
            );
          })}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => setP8Checked(true)} className="rounded-xl bg-rose-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-rose-700">
            Chấm phần VIII
          </button>
          <button
            type="button"
            onClick={() => {
              const filled: Record<number, string> = {};
              U6_TEST_P8_ANSWERS.forEach((a) => {
                filled[a.id] = a.answer;
              });
              setP8Vals(filled);
              setP8Checked(true);
            }}
            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
          >
            Xem đáp án
          </button>
        </div>
      </section>

      {/* PART IX */}
      <section id="u6-test-p9" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part IX · Trang 148–149 · Đặt câu hỏi cho phần gạch chân (10 câu)
          </h4>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700">{p9Score}/10</span>
            <button type="button" onClick={() => setP9Checked(true)} className="rounded-xl bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700">
              Chấm
            </button>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {U6_TEST_P9_QUESTIONS.map((q) => {
            const v = p9Vals[q.id] ?? '';
            const ok = matchesAny(v, q.answers);
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                <p className="text-sm text-slate-900">
                  <span className="font-bold text-slate-500 mr-1">{q.id}.</span>
                  {q.before}
                  <span className="underline decoration-2 decoration-rose-500 font-bold text-rose-900">
                    {q.underlined}
                  </span>
                  {q.after}
                </p>
                <input
                  type="text"
                  value={v}
                  onChange={(e) => {
                    setP9Vals((p) => ({ ...p, [q.id]: e.target.value }));
                    setP9Checked(false);
                  }}
                  placeholder="Viết câu hỏi..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm"
                />
                {p9Checked && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-amber-900'}`}>
                    <strong>{ok ? 'Đúng! ' : `Đáp án: ${q.displayAnswer}. `}</strong>
                    {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART X */}
      <section id="u6-test-p10" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part X · Trang 149 · Viết lại câu dùng must / mustn&apos;t / should / shouldn&apos;t (8 câu)
          </h4>
          <div className="flex items-center gap-2">
            <span className="font-ipa text-xs font-bold text-rose-700">{p10Score}/8</span>
            <button type="button" onClick={() => setP10Checked(true)} className="rounded-xl bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700">
              Chấm
            </button>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {U6_TEST_P10_REWRITE.map((it) => {
            const v = p10Vals[it.id] ?? '';
            const ok = matchesAny(v, it.answers);
            return (
              <div key={it.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                <p className="text-sm font-semibold text-slate-900">
                  {it.id}. {it.original}
                </p>
                <input
                  type="text"
                  value={v}
                  onChange={(e) => {
                    setP10Vals((p) => ({ ...p, [it.id]: e.target.value }));
                    setP10Checked(false);
                  }}
                  placeholder={`${it.starter} ...`}
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm"
                />
                {p10Checked && (
                  <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-amber-900'}`}>
                    <strong>{ok ? 'Đúng! ' : `Đáp án: ${it.displayAnswer}. `}</strong>
                    {it.explainVi}
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
