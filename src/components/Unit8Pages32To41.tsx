import { useState } from 'react';
import { CheckCircle2, RotateCcw, Volume2 } from 'lucide-react';
import {
  U8_EX_B7_NEG_Q,
  U8_EX_B9_NEG_INT,
  U8_EX_B10_CUES_YN,
  U8_EX_B11_WH_MAKE,
  U8_EX_B13_IMP,
  U8_EX_B13_IMP_BOX,
  U8_EX_B14_DIALOGUE,
  U8_EX_B14_DIALOGUE_BOX,
  U8_EX_B15_PREPS,
  U8_EX_C1_BOX,
  U8_EX_C1_DIALOGUE,
  U8_EX_C2_PASSAGE,
  U8_EX_C2_QA,
  U8_EX_C3_PASSAGE,
  U8_EX_C3_TF,
  U8_EX_C4_MCQ,
  U8_EX_C4_PASSAGE,
  U8_EX_D1_REORDER,
  U8_EX_D2_REWRITE,
  U8_EX_D3_SPORT_TEMPLATES,
  type U8SentenceTask,
  type U8TransformItem,
} from '../data/unit8Pages22To41';
import { speakEnglish } from '../utils/speech';

function norm(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/['’`]/g, "'")
    .replace(/\s+/g, ' ');
}

function normLoose(s: string): string {
  return norm(s).replace(/[.?!,;:–—-]/g, ' ').replace(/\s+/g, ' ').trim();
}

function matchesAccepted(input: string, accepted: string[], loose = false): boolean {
  const n = loose ? normLoose(input) : norm(input);
  if (!n) return false;
  return accepted.some((a) => (loose ? normLoose(a) : norm(a)) === n);
}

/* ============================================================================
 * TRẠM 04: CHUYỂN PHỦ ĐỊNH, NGHI VẤN & ĐẶT CÂU HỎI QUÁ KHỨ ĐƠN (B.VII, IX, X, XI · TR.32–36)
 * ============================================================================ */

function TransformCardList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: U8TransformItem[];
}) {
  const [negInputs, setNegInputs] = useState<Record<string, string>>({});
  const [qInputs, setQInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const totalFields = items.length * 2;
  const correctFields = items.reduce((sum, it) => {
    const nOk = matchesAccepted(negInputs[it.id] ?? '', it.negAccepted, true) ? 1 : 0;
    const qOk = matchesAccepted(qInputs[it.id] ?? '', it.qAccepted, true) ? 1 : 0;
    return sum + nOk + qOk;
  }, 0);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-orange-700">{eyebrow}</p>
          <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">{title}</h3>
        </div>
        {checked && (
          <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
            {correctFields}/{totalFields} câu đúng
          </span>
        )}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => {
          const nVal = negInputs[item.id] ?? '';
          const qVal = qInputs[item.id] ?? '';
          const nOk = checked && matchesAccepted(nVal, item.negAccepted, true);
          const nBad = checked && !nOk;
          const qOk = checked && matchesAccepted(qVal, item.qAccepted, true);
          const qBad = checked && !qOk;

          return (
            <div
              key={item.id}
              className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-bold text-slate-900">
                  <span className="text-orange-700 mr-1.5">{item.num}.</span>
                  {item.affirmative}
                </p>
                <button
                  type="button"
                  onClick={() => speakEnglish(item.affirmative)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-orange-700 shrink-0"
                  title="Nghe câu gốc"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-slate-600">(-) Phủ định:</label>
                <input
                  type="text"
                  value={nVal}
                  onChange={(e) => {
                    setNegInputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                    setChecked(false);
                  }}
                  placeholder="Nhập câu phủ định (-)..."
                  className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                    nOk
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                      : nBad
                        ? 'border-rose-300 bg-rose-50 text-rose-950'
                        : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-slate-600">(?) Nghi vấn:</label>
                <input
                  type="text"
                  value={qVal}
                  onChange={(e) => {
                    setQInputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                    setChecked(false);
                  }}
                  placeholder="Nhập câu nghi vấn (?)..."
                  className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                    qOk
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                      : qBad
                        ? 'border-rose-300 bg-rose-50 text-rose-950'
                        : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                  }`}
                />
              </div>

              {checked && (
                <div className="rounded-lg bg-white border border-slate-200 p-2.5 text-[11px] space-y-1">
                  <p className={nOk ? 'font-bold text-emerald-800' : 'font-bold text-rose-800'}>
                    (-): {item.negDisplay}
                  </p>
                  <p className={qOk ? 'font-bold text-emerald-800' : 'font-bold text-rose-800'}>
                    (?): {item.qDisplay}
                  </p>
                  <p className="text-slate-600">{item.explanationVi}</p>
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
          className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
        >
          Chấm bài
        </button>
        <button
          type="button"
          onClick={() => {
            const nMap: Record<string, string> = {};
            const qMap: Record<string, string> = {};
            items.forEach((it) => {
              nMap[it.id] = it.negDisplay;
              qMap[it.id] = it.qDisplay;
            });
            setNegInputs(nMap);
            setQInputs(qMap);
            setChecked(true);
          }}
          className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
        >
          Hiện đáp án mẫu
        </button>
        <button
          type="button"
          onClick={() => {
            setNegInputs({});
            setQInputs({});
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

function SentenceTaskBlock({
  eyebrow,
  title,
  tasks,
  mode,
}: {
  eyebrow: string;
  title: string;
  tasks: U8SentenceTask[];
  mode: 'cues' | 'wh' | 'reorder' | 'rewrite';
}) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const score = tasks.filter((t) => matchesAccepted(inputs[t.id] ?? '', t.accepted, true)).length;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-orange-700">{eyebrow}</p>
          <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">{title}</h3>
        </div>
        {checked && (
          <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
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
          const whParts =
            mode === 'wh' && task.prompt.includes('___')
              ? task.prompt.split('___')
              : [task.prompt, ''];

          return (
            <div
              key={task.id}
              className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900">
                  <span className="font-bold text-orange-700 mr-1.5">{task.num}.</span>
                  {mode === 'wh' && task.underlined ? (
                    <>
                      {whParts[0]}
                      <span className="underline decoration-2 decoration-orange-600 font-bold text-orange-900">
                        {task.underlined}
                      </span>
                      {whParts[1]}
                    </>
                  ) : (
                    task.prompt
                  )}
                </p>
                {checked && (
                  <button
                    type="button"
                    onClick={() => speakEnglish(task.displayAnswer)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-700 hover:underline shrink-0"
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
                      key={`${task.id}-c-${cIdx}`}
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
                      className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-orange-300 hover:text-orange-800"
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
                  Bắt đầu bằng: <span className="font-bold text-orange-800">{task.starter} ...</span>
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
                  mode === 'cues'
                    ? 'VD: Did they return home yesterday? - No, they didn’t.'
                    : mode === 'wh'
                      ? 'Nhập câu hỏi Wh-question...'
                      : task.starter
                        ? `Viết đầy đủ câu bắt đầu bằng "${task.starter}..."`
                        : 'Bấm các từ trên hoặc gõ câu hoàn chỉnh...'
                }
                className={`w-full rounded-xl border px-3.5 py-2 text-sm focus:outline-none ${
                  ok
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                    : bad
                      ? 'border-rose-300 bg-rose-50 text-rose-950'
                      : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
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
          className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
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

export function Unit8Station4Transform() {
  const [subTab, setSubTab] = useState<'b7' | 'b9' | 'b10_11'>('b7');

  return (
    <div className="space-y-5">
      <div className="inline-flex flex-wrap rounded-xl border border-slate-200 bg-white p-1 gap-1">
        {[
          { id: 'b7' as const, label: 'B.VII · Đổi (-) & (?) (10 câu · Tr.32–33)' },
          { id: 'b9' as const, label: 'B.IX · Luyện thêm (-) & (?) (10 câu · Tr.33–34)' },
          { id: 'b10_11' as const, label: 'B.X & B.XI · Đặt câu hỏi Yes/No & Wh- (16 câu · Tr.34–36)' },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSubTab(t.id)}
            className={`rounded-lg px-3.5 py-2 text-xs font-bold transition-colors ${
              subTab === t.id
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {subTab === 'b7' && (
        <TransformCardList
          eyebrow="B.VII · Write the negative and question sentences (10 câu) · Tr.32–33"
          title="Chuyển 10 câu khẳng định sang Phủ định (-) và Nghi vấn (?)"
          items={U8_EX_B7_NEG_Q}
        />
      )}

      {subTab === 'b9' && (
        <TransformCardList
          eyebrow="B.IX · Turn the sentences into negative and interrogative forms (10 câu) · Tr.33–34"
          title="Củng cố chuyển đổi Phủ định (-) và Nghi vấn (?) với động từ thường & to be"
          items={U8_EX_B9_NEG_INT}
        />
      )}

      {subTab === 'b10_11' && (
        <div className="space-y-6">
          <SentenceTaskBlock
            eyebrow="B.X · Make questions and answers using the cues given (8 câu) · Tr.34–35"
            title="Đặt câu hỏi Yes/No thì Quá khứ đơn và trả lời ngắn theo gợi ý"
            tasks={U8_EX_B10_CUES_YN}
            mode="cues"
          />
          <SentenceTaskBlock
            eyebrow="B.XI · Make questions for the underlined words (8 câu) · Tr.35–36"
            title="Đặt câu hỏi Wh-questions (Where, How, Why, What time, What, When) cho phần gạch chân"
            tasks={U8_EX_B11_WH_MAKE}
            mode="wh"
          />
        </div>
      )}
    </div>
  );
}

/* ============================================================================
 * TRẠM 05: CÂU MỆNH LỆNH & GIỚI TỪ THỂ THAO (B.XIII, B.XIV, B.XV · TR.36–37)
 * ============================================================================ */

export function Unit8Station5Imperatives() {
  const [b13Vals, setB13Vals] = useState<Record<string, string>>({});
  const [b13Checked, setB13Checked] = useState(false);

  const [b14Sel, setB14Sel] = useState<Record<string, string>>({});
  const [b14Checked, setB14Checked] = useState(false);

  const [b15Vals, setB15Vals] = useState<Record<string, string>>({});
  const [b15Checked, setB15Checked] = useState(false);

  const b13Score = U8_EX_B13_IMP.filter((it) =>
    matchesAccepted(b13Vals[it.id] ?? '', it.accepted)
  ).length;
  const b14Score = U8_EX_B14_DIALOGUE.filter((it) => b14Sel[it.id] === it.answer).length;
  const b15Score = U8_EX_B15_PREPS.filter((it) =>
    matchesAccepted(b15Vals[it.id] ?? '', it.accepted)
  ).length;

  return (
    <div className="space-y-6">
      {/* B.XIII: Fill imperative verbs */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              B.XIII · Chọn động từ mệnh lệnh trong hộp (10 câu) · Tr.36
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Choose the correct verb from the box, fill in the blanks
            </h3>
          </div>
          {b13Checked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {b13Score}/{U8_EX_B13_IMP.length} đúng
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 rounded-xl border border-orange-200 bg-orange-50/60 p-3">
          {U8_EX_B13_IMP_BOX.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => speakEnglish(w)}
              className="inline-flex items-center gap-1 rounded-lg border border-orange-200 bg-white px-2.5 py-1 text-xs font-bold text-orange-950 hover:bg-orange-100"
            >
              <span>{w}</span>
              <Volume2 className="h-3 w-3 text-orange-600" />
            </button>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U8_EX_B13_IMP.map((it) => {
            const val = b13Vals[it.id] ?? '';
            const ok = b13Checked && matchesAccepted(val, it.accepted);
            const bad = b13Checked && !ok;
            return (
              <div
                key={it.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
              >
                <p className="text-sm font-medium text-slate-900">
                  <span className="font-bold text-orange-700 mr-1.5">{it.num}.</span>
                  <span className="font-bold text-orange-700">______</span>
                  {it.after}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => {
                    setB13Vals((prev) => ({ ...prev, [it.id]: e.target.value }));
                    setB13Checked(false);
                  }}
                  placeholder="Nhập động từ mệnh lệnh..."
                  className={`w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none ${
                    ok
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                      : bad
                        ? 'border-rose-300 bg-rose-50 text-rose-950'
                        : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                  }`}
                />
                {b13Checked && (
                  <p className="text-xs text-slate-600">
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

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setB13Checked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài B.XIII
          </button>
          <button
            type="button"
            onClick={() => {
              setB13Vals({});
              setB13Checked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* B.XIV: Choose suitable imperative sentence */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              B.XIV · Ghép câu mệnh lệnh phù hợp tình huống (10 câu) · Tr.36–37
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Choose the suitable imperatives in the box to finish sentences
            </h3>
          </div>
          {b14Checked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {b14Score}/{U8_EX_B14_DIALOGUE.length} đúng
            </span>
          )}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U8_EX_B14_DIALOGUE.map((it) => {
            const val = b14Sel[it.id] ?? '';
            const ok = b14Checked && val === it.answer;
            const bad = b14Checked && !ok;
            return (
              <div
                key={it.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
              >
                <p className="text-sm font-medium text-slate-900 leading-relaxed">
                  <span className="font-bold text-orange-700 mr-1.5">{it.num}.</span>
                  {it.context}
                </p>
                <select
                  value={val}
                  onChange={(e) => {
                    setB14Sel((prev) => ({ ...prev, [it.id]: e.target.value }));
                    setB14Checked(false);
                  }}
                  className={`w-full rounded-lg border px-3 py-2 text-xs sm:text-sm font-medium focus:outline-none ${
                    ok
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                      : bad
                        ? 'border-rose-300 bg-rose-50 text-rose-950'
                        : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                  }`}
                >
                  <option value="">— Chọn câu mệnh lệnh phù hợp —</option>
                  {U8_EX_B14_DIALOGUE_BOX.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {b14Checked && (
                  <p className="text-xs text-slate-600">
                    <strong className={ok ? 'text-emerald-800' : 'text-rose-800'}>
                      {it.answer}
                    </strong>{' '}
                    — {it.explanationVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setB14Checked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài B.XIV
          </button>
          <button
            type="button"
            onClick={() => {
              setB14Sel({});
              setB14Checked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* B.XV: Prepositions */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              B.XV · Điền giới từ thích hợp (8 câu) · Tr.37
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Fill in each sentence with an appropriate preposition (at / on / in / for)
            </h3>
          </div>
          {b15Checked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {b15Score}/{U8_EX_B15_PREPS.length} đúng
            </span>
          )}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U8_EX_B15_PREPS.map((it) => {
            const val = b15Vals[it.id] ?? '';
            const ok = b15Checked && matchesAccepted(val, it.accepted);
            const bad = b15Checked && !ok;
            return (
              <div
                key={it.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
              >
                <p className="text-sm font-medium text-slate-900">
                  <span className="font-bold text-orange-700 mr-1.5">{it.num}.</span>
                  {it.before}
                  <span className="font-bold text-orange-700">______</span>
                  {it.after}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => {
                    setB15Vals((prev) => ({ ...prev, [it.id]: e.target.value }));
                    setB15Checked(false);
                  }}
                  placeholder="Nhập giới từ (at, on, in, for...)"
                  className={`w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none ${
                    ok
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                      : bad
                        ? 'border-rose-300 bg-rose-50 text-rose-950'
                        : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                  }`}
                />
                {b15Checked && (
                  <p className="text-xs text-slate-600">
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

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setB15Checked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài B.XV
          </button>
          <button
            type="button"
            onClick={() => {
              setB15Vals({});
              setB15Checked(false);
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
 * TRẠM 06: C. READING COMPREHENSION — 4 BÀI ĐỌC HIỂU (TR.37–39)
 * ============================================================================ */

export function Unit8Station6Reading() {
  // C.I Dialogue
  const [c1Vals, setC1Vals] = useState<Record<string, string>>({});
  const [c1Checked, setC1Checked] = useState(false);

  // C.II Computer games QA
  const [c2Vals, setC2Vals] = useState<Record<string, string>>({});
  const [c2Checked, setC2Checked] = useState(false);

  // C.III Tuan & Khoa T/F
  const [c3Sel, setC3Sel] = useState<Record<string, boolean>>({});
  const [c3Checked, setC3Checked] = useState(false);

  // C.IV Water Polo MCQ
  const [c4Sel, setC4Sel] = useState<Record<string, number>>({});
  const [c4Checked, setC4Checked] = useState(false);

  const c1Blanks = U8_EX_C1_DIALOGUE.filter((d) => d.blankId && d.answer);
  const c1Score = c1Blanks.filter(
    (d) => norm(c1Vals[d.blankId!] ?? '') === norm(d.answer!)
  ).length;
  const c2Score = U8_EX_C2_QA.filter((q) =>
    matchesAccepted(c2Vals[q.id] ?? '', q.accepted, true)
  ).length;
  const c3Score = U8_EX_C3_TF.filter((t) => c3Sel[t.id] === t.isTrue).length;
  const c4Score = U8_EX_C4_MCQ.filter((q) => c4Sel[q.id] === q.correctIndex).length;

  return (
    <div className="space-y-6">
      {/* C.I Conversation Cloze */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              C.I · Hoàn thành hội thoại Peter &amp; Tim (6 chỗ trống) · Tr.37–38
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Complete the conversation with the words below
            </h3>
          </div>
          {c1Checked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {c1Score}/{c1Blanks.length} đúng
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 rounded-xl border border-orange-200 bg-orange-50/60 p-3">
          {U8_EX_C1_BOX.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => speakEnglish(w)}
              className="inline-flex items-center gap-1 rounded-lg border border-orange-200 bg-white px-2.5 py-1 text-xs font-bold text-orange-950 hover:bg-orange-100"
            >
              <span>{w}</span>
              <Volume2 className="h-3 w-3 text-orange-600" />
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-2.5 text-sm">
          {U8_EX_C1_DIALOGUE.map((line, idx) => {
            const bId = line.blankId;
            const val = bId ? c1Vals[bId] ?? '' : '';
            const ok = c1Checked && bId && norm(val) === norm(line.answer ?? '');
            const bad = c1Checked && bId && !ok;
            return (
              <div key={idx} className="leading-7 text-slate-800">
                <strong
                  className={
                    line.speaker === 'Peter' ? 'text-sky-800 mr-1.5' : 'text-orange-800 mr-1.5'
                  }
                >
                  {line.speaker}:
                </strong>
                <span>{line.before}</span>
                {bId && (
                  <>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setC1Vals((prev) => ({ ...prev, [bId]: e.target.value }));
                        setC1Checked(false);
                      }}
                      placeholder={`(${line.num})...`}
                      className={`mx-1 inline-block w-28 rounded-lg border px-2 py-0.5 text-xs sm:text-sm font-semibold focus:outline-none ${
                        ok
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                          : bad
                            ? 'border-rose-300 bg-rose-50 text-rose-900'
                            : 'border-slate-300 bg-white text-slate-900 focus:border-orange-500'
                      }`}
                    />
                    <span>{line.after}</span>
                    {c1Checked && (
                      <span
                        className={`ml-2 text-xs font-bold ${
                          ok ? 'text-emerald-700' : 'text-rose-700'
                        }`}
                      >
                        ({line.answer} — {line.explanationVi})
                      </span>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setC1Checked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài C.I
          </button>
          <button
            type="button"
            onClick={() => {
              setC1Vals({});
              setC1Checked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* C.II Computer Games QA */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              C.II · Đọc hiểu về Trò chơi điện tử (6 câu hỏi) · Tr.38
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Read the text. Then answer the questions
            </h3>
          </div>
          <button
            type="button"
            onClick={() => speakEnglish(U8_EX_C2_PASSAGE)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-800 hover:bg-orange-100"
          >
            <Volume2 className="h-4 w-4" />
            Nghe bài đọc
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-7 text-slate-800">
          {U8_EX_C2_PASSAGE}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U8_EX_C2_QA.map((q) => {
            const val = c2Vals[q.id] ?? '';
            const ok = c2Checked && matchesAccepted(val, q.accepted, true);
            const bad = c2Checked && !ok;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
              >
                <p className="text-sm font-bold text-slate-900">
                  <span className="text-orange-700 mr-1.5">{q.num}.</span>
                  {q.question}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => {
                    setC2Vals((prev) => ({ ...prev, [q.id]: e.target.value }));
                    setC2Checked(false);
                  }}
                  placeholder="Nhập câu trả lời bằng tiếng Anh..."
                  className={`w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none ${
                    ok
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                      : bad
                        ? 'border-rose-300 bg-rose-50 text-rose-950'
                        : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                  }`}
                />
                {c2Checked && (
                  <p className="text-xs text-slate-600">
                    <strong className={ok ? 'text-emerald-800' : 'text-rose-800'}>
                      {q.displayAnswer}
                    </strong>{' '}
                    — {q.explanationVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setC2Checked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài C.II {c2Checked ? `(${c2Score}/${U8_EX_C2_QA.length})` : ''}
          </button>
          <button
            type="button"
            onClick={() => {
              const filled: Record<string, string> = {};
              U8_EX_C2_QA.forEach((q) => {
                filled[q.id] = q.accepted[0];
              });
              setC2Vals(filled);
              setC2Checked(true);
            }}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            Hiện đáp án mẫu
          </button>
          <button
            type="button"
            onClick={() => {
              setC2Vals({});
              setC2Checked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* C.III Tuan & Khoa True/False */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              C.III · Đọc hiểu về Tuấn và Khoa (8 câu Đúng / Sai) · Tr.38–39
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Decide whether the sentences are True (T) or False (F)
            </h3>
          </div>
          <button
            type="button"
            onClick={() => speakEnglish(U8_EX_C3_PASSAGE)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-800 hover:bg-orange-100"
          >
            <Volume2 className="h-4 w-4" />
            Nghe bài đọc
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-7 text-slate-800">
          {U8_EX_C3_PASSAGE}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U8_EX_C3_TF.map((item) => {
            const val = c3Sel[item.id];
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium text-slate-900">
                    <span className="font-bold text-orange-700 mr-1.5">{item.num}.</span>
                    {item.statement}
                  </p>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {[
                      { label: 'T', bool: true },
                      { label: 'F', bool: false },
                    ].map((opt) => {
                      const active = val === opt.bool;
                      const right = c3Checked && item.isTrue === opt.bool;
                      const wrong = c3Checked && active && item.isTrue !== opt.bool;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => {
                            setC3Sel((prev) => ({ ...prev, [item.id]: opt.bool }));
                            setC3Checked(false);
                          }}
                          className={`h-8 w-9 rounded-lg border text-xs font-extrabold transition-colors ${
                            right
                              ? 'border-emerald-500 bg-emerald-600 text-white'
                              : wrong
                                ? 'border-rose-400 bg-rose-500 text-white'
                                : active
                                  ? 'border-slate-900 bg-slate-900 text-white'
                                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {c3Checked && <p className="text-xs text-slate-600">{item.explanationVi}</p>}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setC3Checked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài C.III {c3Checked ? `(${c3Score}/${U8_EX_C3_TF.length})` : ''}
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

      {/* C.IV Leo's Water Polo Report */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              C.IV · Báo cáo môn Bóng nước (Water Polo) của Leo Johnson (5 câu A/B/C) · Tr.39
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Read Leo&apos;s report about his favourite sport. Choose A, B or C
            </h3>
          </div>
          <button
            type="button"
            onClick={() => speakEnglish(U8_EX_C4_PASSAGE)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-800 hover:bg-orange-100"
          >
            <Volume2 className="h-4 w-4" />
            Nghe báo cáo
          </button>
        </div>

        <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-4 text-sm leading-7 text-slate-800">
          {U8_EX_C4_PASSAGE}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U8_EX_C4_MCQ.map((q) => (
            <div
              key={q.id}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2.5"
            >
              <p className="text-sm font-bold text-slate-900">
                <span className="text-orange-700 mr-1.5">{q.num}.</span>
                {q.prompt}
              </p>
              <div className="space-y-1.5">
                {q.options.map((opt, idx) => {
                  const active = c4Sel[q.id] === idx;
                  const right = c4Checked && idx === q.correctIndex;
                  const wrong = c4Checked && active && idx !== q.correctIndex;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setC4Sel((prev) => ({ ...prev, [q.id]: idx }));
                        setC4Checked(false);
                      }}
                      className={`w-full rounded-lg border px-3 py-1.5 text-left text-xs sm:text-sm font-semibold transition-colors ${
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
              {c4Checked && <p className="text-xs text-slate-600">{q.explanationVi}</p>}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setC4Checked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài C.IV {c4Checked ? `(${c4Score}/${U8_EX_C4_MCQ.length})` : ''}
          </button>
          <button
            type="button"
            onClick={() => {
              setC4Sel({});
              setC4Checked(false);
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
 * TRẠM 07: D. WRITING — SẮP XẾP CÂU, VIẾT LẠI CÂU & ĐOẠN VĂN (TR.40–41)
 * ============================================================================ */

export function Unit8Station7Writing() {
  const [essayText, setEssayText] = useState('');
  const [activeTemplateId, setActiveTemplateId] = useState<string>('football');
  const [showSample, setShowSample] = useState(false);

  const wordCount = essayText.trim() ? essayText.trim().split(/\s+/).length : 0;
  const activeTemplate =
    U8_EX_D3_SPORT_TEMPLATES.find((t) => t.id === activeTemplateId) ??
    U8_EX_D3_SPORT_TEMPLATES[0];

  const cues = [
    '1. Tên môn thể thao yêu thích là gì? (My favourite sport is ...)',
    '2. Đây là môn đồng đội hay cá nhân? Có mấy người chơi?',
    '3. Em thường chơi ở đâu, khi nào và cùng với ai?',
    '4. Cần dụng cụ gì để chơi? (a ball, rackets, goggles...)',
    '5. Vì sao em thích môn này? (keep fit, stay healthy, make friends...)',
  ];

  return (
    <div className="space-y-6">
      <SentenceTaskBlock
        eyebrow="D.I · Sắp xếp từ thành câu hỏi hoàn chỉnh (8 câu) · Tr.40"
        title="Put the words in the correct order"
        tasks={U8_EX_D1_REORDER}
        mode="reorder"
      />

      <SentenceTaskBlock
        eyebrow="D.II · Viết lại câu giữ nguyên nghĩa (8 câu) · Tr.40–41"
        title="Complete the second sentence so that it has a similar meaning"
        tasks={U8_EX_D2_REWRITE}
        mode="rewrite"
      />

      {/* D.III: Write a short paragraph about your favourite sport (p.41) */}
      <section className="rounded-2xl border border-orange-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              D.III · Luyện viết đoạn văn về môn thể thao yêu thích · Tr.41
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Write a short paragraph about your favourite sport (50–70 từ)
            </h3>
          </div>
          <span className="font-ipa text-xs font-bold text-slate-600 tabular-nums">
            Số từ đã viết: <strong className="text-orange-700">{wordCount}</strong> từ
          </span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5">
          <p className="text-xs font-bold text-slate-800">5 gợi ý triển khai đoạn văn chuẩn điểm tối đa:</p>
          <ul className="space-y-1 text-xs text-slate-600">
            {cues.map((c) => (
              <li key={c} className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <textarea
          rows={5}
          value={essayText}
          onChange={(e) => setEssayText(e.target.value)}
          placeholder="My favourite sport is..."
          className="w-full rounded-xl border border-slate-200 bg-white p-3.5 text-sm text-slate-900 leading-relaxed focus:border-orange-500 focus:outline-none"
        />

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowSample((s) => !s)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            {showSample ? 'Ẩn 3 bài văn mẫu' : 'Xem 3 bài văn mẫu song ngữ'}
          </button>
          {essayText.trim() && (
            <button
              type="button"
              onClick={() => speakEnglish(essayText)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-orange-200 bg-orange-50 px-3.5 py-2 text-xs font-bold text-orange-800 hover:bg-orange-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe bài em vừa viết
            </button>
          )}
          {essayText && (
            <button
              type="button"
              onClick={() => setEssayText('')}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Xóa nháp
            </button>
          )}
        </div>

        {showSample && (
          <div className="rounded-2xl border border-orange-200 bg-orange-50/40 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {U8_EX_D3_SPORT_TEMPLATES.map((tpl) => (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => setActiveTemplateId(tpl.id)}
                    className={`rounded-lg border px-3 py-1 text-xs font-bold transition-colors ${
                      activeTemplateId === tpl.id
                        ? 'border-orange-600 bg-orange-600 text-white'
                        : 'border-orange-200 bg-white text-orange-900 hover:bg-orange-100'
                    }`}
                  >
                    {tpl.nameVi}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => speakEnglish(activeTemplate.en)}
                  className="inline-flex items-center gap-1 rounded-lg bg-white border border-orange-200 px-2.5 py-1 text-xs font-bold text-orange-800 hover:bg-orange-100"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                  Nghe bài mẫu
                </button>
                <button
                  type="button"
                  onClick={() => setEssayText(activeTemplate.en)}
                  className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold text-white hover:bg-slate-800"
                >
                  Chép vào khung luyện viết
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-orange-100 p-4 space-y-2 text-sm">
              <p className="font-semibold text-slate-900 leading-relaxed">{activeTemplate.en}</p>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                <strong>Dịch nghĩa:</strong> {activeTemplate.vi}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
