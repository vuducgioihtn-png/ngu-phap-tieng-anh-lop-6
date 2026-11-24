import { useMemo, useState } from 'react';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Eye,
  HelpCircle,
  RotateCcw,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  CIRCLE_VERB_10,
  DIALOGUE_JENNY_BILL,
  GUIDED_PARAGRAPH_10,
  MARY_QA_10,
  MARY_SCHEDULE,
  MARY_SCHEDULE_DAYS,
  PRESENT_FREQ_10,
  READING_NGA,
  TEST1_CLOZE_8,
  TEST1_CUES_10,
  TEST1_MATCH_10,
  TEST1_MATCH_OPTIONS,
  TEST1_MCQ_15,
  TEST1_MISTAKES_10,
  TEST1_PICTURE_FREQ_12,
  TEST1_PRON_5,
  TEST1_READING_DAVID,
  TEST1_REWRITE_8,
  TEST1_WH_8,
  TEST1_WRITING_MODEL,
  UNDERLINE_QUESTIONS_10,
} from '../data/unit1Pages21To34';
import { speakEnglish } from '../utils/speech';

function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/\s+([?.!,])/g, '$1');
}

function matchesAny(input: string, primary: string, accepted?: string[]): boolean {
  const norm = normalizeAnswer(input);
  if (!norm) return false;
  const candidates = [primary, ...(accepted ?? [])];
  return candidates.some((c) => normalizeAnswer(c) === norm);
}

/* ============================================================================
   STATION 07: EX II.12 (PRESENT + FREQ) · II.13 (MARY'S SCHEDULE) · II.14 (MCQ)
   ============================================================================ */
export function Unit1Station7() {
  // Ex II.12
  const [ex12Inputs, setEx12Inputs] = useState<Record<string, string>>({});
  const [ex12Checked, setEx12Checked] = useState(false);

  // Ex II.13 (Mary's schedule Q&A)
  const [ex13Inputs, setEx13Inputs] = useState<Record<number, string>>({});
  const [ex13Hints, setEx13Hints] = useState<Record<number, boolean>>({});
  const [ex13Checked, setEx13Checked] = useState(false);
  const [highlightRow, setHighlightRow] = useState<number | null>(null);

  // Ex II.14 (10 MCQ)
  const [ex14Choices, setEx14Choices] = useState<Record<number, number>>({});

  const ex12Score = useMemo(() => {
    return PRESENT_FREQ_10.filter((item) =>
      item.answers.every(
        (ans, idx) =>
          normalizeAnswer(ex12Inputs[`${item.id}-${idx}`] ?? '') === normalizeAnswer(ans)
      )
    ).length;
  }, [ex12Inputs]);

  const ex14Score = useMemo(
    () => CIRCLE_VERB_10.filter((q) => ex14Choices[q.id] === q.correctIndex).length,
    [ex14Choices]
  );

  return (
    <div className="space-y-6">
      {/* EX II.12 */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Bài II.12 · Chia động từ Hiện tại đơn kèm trạng từ tần suất (Trang 21)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Nhớ mẹo: Trạng từ đứng SAU &ldquo;to be&rdquo; và đứng TRƯỚC động từ thường (10 câu)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex12Checked && (
              <span className="font-ipa text-xs font-bold text-emerald-700">
                Đúng {ex12Score}/10
              </span>
            )}
            <button
              type="button"
              onClick={() => setEx12Checked(true)}
              className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
            >
              Chấm Bài II.12
            </button>
            <button
              type="button"
              onClick={() => {
                setEx12Inputs({});
                setEx12Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="space-y-2.5">
          {PRESENT_FREQ_10.map((item) => {
            const allOk = item.answers.every(
              (ans, idx) =>
                normalizeAnswer(ex12Inputs[`${item.id}-${idx}`] ?? '') === normalizeAnswer(ans)
            );
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 ${
                  ex12Checked
                    ? allOk
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <div className="flex flex-wrap items-center gap-1.5 text-sm text-slate-800">
                  <span className="font-ipa text-xs font-bold text-slate-500">{item.id}.</span>
                  {item.parts.map((part, pIdx) => (
                    <span key={`${item.id}-${pIdx}`} className="inline-flex flex-wrap items-center gap-1.5">
                      {part && <span>{part}</span>}
                      {pIdx < item.answers.length && (
                        <>
                          <input
                            type="text"
                            value={ex12Inputs[`${item.id}-${pIdx}`] ?? ''}
                            onChange={(e) =>
                              setEx12Inputs((p) => ({ ...p, [`${item.id}-${pIdx}`]: e.target.value }))
                            }
                            placeholder={item.cues[pIdx]}
                            className="w-40 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-sky-900 focus:border-sky-500 focus:outline-none"
                          />
                          <span className="font-ipa text-[11px] text-slate-500">
                            ({item.cues[pIdx]})
                          </span>
                        </>
                      )}
                    </span>
                  ))}
                </div>
                {ex12Checked && (
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                    <p
                      className={`text-xs font-medium flex items-center gap-1.5 ${
                        allOk ? 'text-emerald-800' : 'text-rose-800'
                      }`}
                    >
                      {allOk ? (
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                      ) : (
                        <XCircle className="h-3.5 w-3.5 shrink-0" />
                      )}
                      <span>
                        <strong>{item.answers.join(' / ')}</strong> — {item.explanationVi}
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.fullSentence)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      Nghe câu đúng
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* EX II.13: MARY'S WEEKLY SCHEDULE */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Bài II.13 · Thời khóa biểu trong tuần của Mary (Trang 21–22)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Quan sát bảng lịch hoạt động tương tác và trả lời 10 câu hỏi
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setEx13Checked(true)}
              className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
            >
              Chấm Bài II.13
            </button>
            <button
              type="button"
              onClick={() => {
                setEx13Inputs({});
                setEx13Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        {/* Interactive Schedule Matrix */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-2.5 px-3 font-bold text-slate-700">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-sky-600" />
                    Hoạt động của Mary
                  </span>
                </th>
                {MARY_SCHEDULE_DAYS.map((day) => (
                  <th
                    key={day}
                    className={`py-2.5 px-2 text-center font-bold ${
                      day === 'Sat' || day === 'Sun' ? 'text-emerald-700 bg-emerald-50/40' : 'text-slate-600'
                    }`}
                  >
                    {day}
                  </th>
                ))}
                <th className="py-2.5 px-3 font-bold text-slate-600 hidden md:table-cell">
                  Mức độ tần suất
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MARY_SCHEDULE.map((row, rIdx) => {
                const active = highlightRow === rIdx;
                return (
                  <tr
                    key={row.activityEn}
                    onClick={() => setHighlightRow(active ? null : rIdx)}
                    className={`cursor-pointer transition-colors ${
                      active ? 'bg-sky-50' : 'hover:bg-slate-50/70'
                    }`}
                  >
                    <td className="py-2.5 px-3">
                      <p className="font-semibold text-slate-900">{row.activityEn}</p>
                      <p className="text-[11px] text-slate-500">{row.activityVi}</p>
                    </td>
                    {row.days.map((hasTick, dIdx) => (
                      <td
                        key={`${row.activityEn}-${dIdx}`}
                        className={`py-2.5 px-2 text-center ${
                          dIdx >= 5 ? 'bg-emerald-50/20' : ''
                        }`}
                      >
                        {hasTick ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-700 font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                    ))}
                    <td className="py-2.5 px-3 text-xs font-medium text-sky-800 hidden md:table-cell">
                      {row.summaryVi}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-slate-500">
          Mẹo: Chạm vào bất kỳ hàng hoạt động nào trên bảng để tô sáng khi trả lời câu hỏi bên dưới.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {MARY_QA_10.map((item) => {
            const val = ex13Inputs[item.id] ?? '';
            const ok = matchesAny(val, item.answer, item.accepted);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  ex13Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="font-ipa text-xs text-slate-500 mr-1">{item.id}.</span>
                    {item.question}
                  </p>
                  <button
                    type="button"
                    onClick={() => setEx13Hints((p) => ({ ...p, [item.id]: !p[item.id] }))}
                    className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                  >
                    <HelpCircle className="h-3.5 w-3.5" />
                    Gợi ý
                  </button>
                </div>
                {ex13Hints[item.id] && (
                  <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5">
                    {item.hintVi}
                  </p>
                )}
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setEx13Inputs((p) => ({ ...p, [item.id]: e.target.value }))}
                  placeholder="Viết câu trả lời tiếng Anh..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
                />
                {ex13Checked && (
                  <div className="space-y-1">
                    <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      <strong>Đáp án:</strong> {item.answer}
                    </p>
                    <p className="text-[11px] text-slate-600">{item.explanationVi}</p>
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.answer)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      Nghe câu trả lời
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* EX II.14: CIRCLE THE CORRECT ANSWER (10 MCQ) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Bài II.14 · Chọn đáp án đúng với Study / Have / Do / Play / Go (Trang 22–23)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Trắc nghiệm nhanh 10 câu — chấm ngay từng câu
            </h3>
          </div>
          <span className="font-ipa text-xs font-bold text-emerald-700 tabular-nums">
            Đúng: {ex14Score}/10
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {CIRCLE_VERB_10.map((q) => {
            const chosen = ex14Choices[q.id];
            const answered = chosen !== undefined;
            const ok = chosen === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-slate-50/40 p-4 space-y-2.5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  <span className="font-ipa text-xs text-slate-500 mr-1.5">{q.id}.</span>
                  {q.question}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {q.options.map((opt, idx) => {
                    let cls = 'border-slate-200 bg-white text-slate-800 hover:border-sky-300';
                    if (answered) {
                      if (idx === q.correctIndex) {
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (idx === chosen) {
                        cls = 'border-rose-400 bg-rose-50 text-rose-900';
                      }
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setEx14Choices((p) => ({ ...p, [q.id]: idx }))}
                        className={`rounded-lg border px-3 py-1.5 text-left text-xs font-semibold transition-colors ${cls}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <p
                    className={`text-xs font-medium flex items-start gap-1.5 ${
                      ok ? 'text-emerald-800' : 'text-rose-800'
                    }`}
                  >
                    {ok ? (
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                    )}
                    <span>{q.explanationVi}</span>
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

/* ============================================================================
   STATION 08: EX III.1 (READING NGA) · III.2 (JENNY & BILL) · IV.1 · IV.2
   ============================================================================ */
export function Unit1Station8() {
  // III.1
  const [showNgaVi, setShowNgaVi] = useState(false);
  const [ngaChoices, setNgaChoices] = useState<Record<number, number>>({});

  // III.2
  const [jbInputs, setJbInputs] = useState<Record<number, string>>({});
  const [jbChecked, setJbChecked] = useState(false);

  // IV.1
  const [iv1Inputs, setIv1Inputs] = useState<Record<number, string>>({});
  const [iv1Hints, setIv1Hints] = useState<Record<number, boolean>>({});
  const [iv1Checked, setIv1Checked] = useState(false);

  // IV.2
  const [showModelParagraph, setShowModelParagraph] = useState(false);
  const [revealedCues, setRevealedCues] = useState<Record<number, boolean>>({});

  return (
    <div className="space-y-6">
      {/* III.1 READING NGA */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              {READING_NGA.title}
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Đọc đoạn văn giới thiệu trường mới của Nga và chọn 5 đáp án đúng
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(READING_NGA.passageEn)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-sky-50 border border-sky-200 px-3 py-1.5 text-xs font-semibold text-sky-800 hover:bg-sky-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe cả đoạn
            </button>
            <button
              type="button"
              onClick={() => setShowNgaVi((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Eye className="h-3.5 w-3.5" />
              {showNgaVi ? 'Ẩn bản dịch' : 'Xem bản dịch'}
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-3">
          <p className="text-sm text-slate-800 leading-relaxed">{READING_NGA.passageEn}</p>
          {showNgaVi && (
            <p className="text-xs sm:text-sm text-sky-900 bg-sky-50 border border-sky-200 rounded-lg p-3 leading-relaxed">
              <strong>Bản dịch tham khảo:</strong> {READING_NGA.passageVi}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {READING_NGA.questions.map((q) => {
            const chosen = ngaChoices[q.id];
            const answered = chosen !== undefined;
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-4 space-y-2">
                <p className="text-sm font-semibold text-slate-900">
                  {q.id}. {q.question}
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {q.options.map((opt, idx) => {
                    let cls = 'border-slate-200 bg-white text-slate-800 hover:border-sky-300';
                    if (answered) {
                      if (idx === q.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      else if (idx === chosen) cls = 'border-rose-400 bg-rose-50 text-rose-900';
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setNgaChoices((p) => ({ ...p, [q.id]: idx }))}
                        className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-colors ${cls}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {ok ? 'Chính xác!' : 'Chưa đúng.'} {q.explanationVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* III.2 DIALOGUE JENNY & BILL */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              {DIALOGUE_JENNY_BILL.title}
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Đọc đoạn hội thoại và trả lời 5 câu hỏi về môn học của Bill &amp; Jane
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setJbChecked(true)}
            className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
          >
            Chấm Bài III.2
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
          {DIALOGUE_JENNY_BILL.lines.map((line, i) => (
            <div key={i} className="flex items-start justify-between gap-3 text-sm">
              <p className="text-slate-800 leading-relaxed">
                <strong className={line.speaker === 'Jenny' ? 'text-sky-700' : 'text-emerald-700'}>
                  {line.speaker}:
                </strong>{' '}
                {line.text}
              </p>
              <button
                type="button"
                onClick={() => speakEnglish(line.text)}
                className="shrink-0 rounded-lg p-1 text-slate-400 hover:bg-white hover:text-sky-700"
                title="Nghe lời thoại"
              >
                <Volume2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {DIALOGUE_JENNY_BILL.questions.map((item) => {
            const val = jbInputs[item.id] ?? '';
            const ok = matchesAny(val, item.answer, item.accepted);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  jbChecked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.id}. {item.question}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setJbInputs((p) => ({ ...p, [item.id]: e.target.value }))}
                  placeholder="Nhập câu trả lời..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
                />
                {jbChecked && (
                  <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>Đáp án chuẩn:</strong> {item.answer} — {item.explanationVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* IV.1 MAKE QUESTIONS FOR UNDERLINED PARTS */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Bài IV.1 · Đặt câu hỏi cho phần in đậm gạch chân (Trang 24–25)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Luyện thành thạo các từ để hỏi What / Which / Where / Who / How many (10 câu)
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIv1Checked(true)}
            className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
          >
            Chấm Bài IV.1
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {UNDERLINE_QUESTIONS_10.map((item) => {
            const val = iv1Inputs[item.id] ?? '';
            const ok = matchesAny(val, item.answer, item.accepted);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  iv1Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm text-slate-900">
                    <span className="font-ipa text-xs font-bold text-slate-500 mr-1.5">{item.id}.</span>
                    {item.before}
                    <span className="font-bold text-sky-800 underline decoration-sky-500 decoration-2 underline-offset-2">
                      {item.underlined}
                    </span>
                    {item.after}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIv1Hints((p) => ({ ...p, [item.id]: !p[item.id] }))}
                    className="shrink-0 text-xs font-semibold text-sky-700 hover:underline"
                  >
                    Gợi ý
                  </button>
                </div>
                {iv1Hints[item.id] && (
                  <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5">
                    {item.hintVi}
                  </p>
                )}
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setIv1Inputs((p) => ({ ...p, [item.id]: e.target.value }))}
                  placeholder="Viết câu hỏi..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
                />
                {iv1Checked && (
                  <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{item.answer}</strong> — {item.explanationVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* IV.2 GUIDED PARAGRAPH */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              {GUIDED_PARAGRAPH_10.title}
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Bấm từng dòng gợi ý để xem cách ghép thành câu hoàn chỉnh (10 câu → 1 đoạn văn chuẩn)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowModelParagraph((v) => !v)}
              className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
            >
              {showModelParagraph ? 'Ẩn đoạn văn mẫu' : 'Xem toàn bộ đoạn văn mẫu'}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {GUIDED_PARAGRAPH_10.cues.map((c) => {
            const open = Boolean(revealedCues[c.num]);
            return (
              <div
                key={c.num}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 flex flex-col gap-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs sm:text-sm font-ipa text-slate-700">
                    <strong className="text-slate-900 mr-1.5">{c.num}.</strong>
                    {c.cue}
                  </p>
                  <button
                    type="button"
                    onClick={() => setRevealedCues((p) => ({ ...p, [c.num]: !p[c.num] }))}
                    className="text-xs font-semibold text-sky-700 hover:underline shrink-0"
                  >
                    {open ? 'Ẩn câu mẫu' : 'Xem câu mẫu'}
                  </button>
                </div>
                {open && (
                  <div className="flex items-center justify-between gap-2 rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2">
                    <p className="text-xs sm:text-sm font-semibold text-emerald-950">{c.model}</p>
                    <button
                      type="button"
                      onClick={() => speakEnglish(c.model)}
                      className="shrink-0 text-emerald-700 hover:text-emerald-900"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {showModelParagraph && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Đoạn văn hoàn chỉnh (Trường THCS Quang Trung)
              </span>
              <button
                type="button"
                onClick={() => speakEnglish(GUIDED_PARAGRAPH_10.fullParagraphEn)}
                className="inline-flex items-center gap-1 rounded-lg bg-white border border-emerald-300 px-3 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-100"
              >
                <Volume2 className="h-3.5 w-3.5" />
                Nghe đọc đoạn văn
              </button>
            </div>
            <p className="text-sm text-slate-900 leading-relaxed">
              {GUIDED_PARAGRAPH_10.fullParagraphEn}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

/* ============================================================================
   STATION 09: COMPLETE TEST FOR UNIT 1 (PARTS I – XI · BOOK PAGES 27–34)
   ============================================================================ */
type TestPartId = 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VII' | 'VIII' | 'IX' | 'X' | 'XI';

const TEST_PARTS: { id: TestPartId; label: string; countLabel: string; page: string }[] = [
  { id: 'I', label: 'I. Phát âm', countLabel: '5 câu', page: 'Tr.27' },
  { id: 'II', label: 'II. Trắc nghiệm', countLabel: '15 câu', page: 'Tr.27–28' },
  { id: 'III', label: 'III. Tần suất', countLabel: '12 câu', page: 'Tr.29' },
  { id: 'IV', label: 'IV. Sửa lỗi sai', countLabel: '10 câu', page: 'Tr.30' },
  { id: 'V', label: 'V. Ghép Hỏi–Đáp', countLabel: '10 cặp', page: 'Tr.30–31' },
  { id: 'VI', label: 'VI. Điền 1 từ', countLabel: '8 câu', page: 'Tr.31' },
  { id: 'VII', label: 'VII. Đặt câu hỏi', countLabel: '8 câu', page: 'Tr.31' },
  { id: 'VIII', label: 'VIII. Đọc hiểu', countLabel: '6 câu', page: 'Tr.32' },
  { id: 'IX', label: 'IX. Viết từ gợi ý', countLabel: '10 câu', page: 'Tr.33' },
  { id: 'X', label: 'X. Viết lại câu', countLabel: '8 câu', page: 'Tr.33' },
  { id: 'XI', label: 'XI. Viết đoạn văn', countLabel: 'Mẫu 60 từ', page: 'Tr.34' },
];

export function Unit1FullTestSection() {
  const [part, setPart] = useState<TestPartId>('I');

  // States per part
  const [p1, setP1] = useState<Record<number, number>>({});
  const [p2, setP2] = useState<Record<number, number>>({});
  const [p3, setP3] = useState<Record<string, string>>({});
  const [p3Checked, setP3Checked] = useState(false);
  const [p4, setP4] = useState<Record<number, string>>({});
  const [p4Checked, setP4Checked] = useState(false);
  const [p5, setP5] = useState<Record<number, string>>({});
  const [p5Checked, setP5Checked] = useState(false);
  const [p6, setP6] = useState<Record<number, string>>({});
  const [p6Checked, setP6Checked] = useState(false);
  const [p7, setP7] = useState<Record<number, string>>({});
  const [p7Checked, setP7Checked] = useState(false);
  const [p8, setP8] = useState<Record<number, string>>({});
  const [p8Checked, setP8Checked] = useState(false);
  const [showDavidVi, setShowDavidVi] = useState(false);
  const [p9, setP9] = useState<Record<number, string>>({});
  const [p9Checked, setP9Checked] = useState(false);
  const [p10, setP10] = useState<Record<number, string>>({});
  const [p10Checked, setP10Checked] = useState(false);
  const [showSampleXI, setShowSampleXI] = useState(false);
  const [studentEssay, setStudentEssay] = useState('');

  // Quick live count for MCQ parts I & II
  const p1Score = TEST1_PRON_5.filter((q) => p1[q.id] === q.correctIndex).length;
  const p2Score = TEST1_MCQ_15.filter((q) => p2[q.id] === q.correctIndex).length;

  return (
    <div className="space-y-5">
      {/* Exam Header + 11-Part Switcher */}
      <section className="rounded-2xl border border-sky-200 bg-sky-50/70 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-800">
              TEST FOR UNIT 1 · Đề kiểm tra tổng hợp chuẩn sách (Trang 27–34)
            </p>
            <h3 className="font-display text-xl font-extrabold text-slate-900 mt-0.5">
              Trọn bộ 11 phần (92 câu hỏi + Bài viết mẫu) — Có đáp án &amp; giải thích từng câu
            </h3>
          </div>
          <span className="font-ipa text-xs font-bold text-sky-800">
            Phần I: {p1Score}/5 · Phần II: {p2Score}/15
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {TEST_PARTS.map((tp) => {
            const active = part === tp.id;
            return (
              <button
                key={tp.id}
                type="button"
                onClick={() => setPart(tp.id)}
                className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? 'border-sky-600 bg-sky-600 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300'
                }`}
              >
                {tp.label} <span className="opacity-75">({tp.countLabel})</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* PART I: ODD SOUND OUT */}
      {part === 'I' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Phần I · Chọn từ có phần gạch chân phát âm KHÁC (Trang 27)
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Bấm nút loa nhỏ để nghe đối chiếu phát âm thực tế (5 câu)
              </h4>
            </div>
            <span className="font-ipa text-xs font-bold text-emerald-700">Đúng: {p1Score}/5</span>
          </div>

          <div className="space-y-3">
            {TEST1_PRON_5.map((q) => {
              const chosen = p1[q.id];
              const answered = chosen !== undefined;
              const ok = chosen === q.correctIndex;
              return (
                <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/40 p-4 space-y-2.5">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {q.words.map((w, idx) => {
                      let cls = 'border-slate-200 bg-white text-slate-800 hover:border-sky-300';
                      if (answered) {
                        if (idx === q.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900';
                        else if (idx === chosen) cls = 'border-rose-400 bg-rose-50 text-rose-900';
                      }
                      const pos = w.word.toLowerCase().indexOf(w.underline.toLowerCase());
                      return (
                        <div
                          key={w.label}
                          className={`flex items-center justify-between rounded-lg border px-3 py-2 ${cls}`}
                        >
                          <button
                            type="button"
                            onClick={() => setP1((prev) => ({ ...prev, [q.id]: idx }))}
                            className="flex-1 text-left text-xs sm:text-sm font-semibold"
                          >
                            <span className="text-slate-400 mr-1">{w.label}.</span>
                            {pos >= 0 ? (
                              <>
                                {w.word.slice(0, pos)}
                                <span className="underline decoration-2 decoration-sky-600 font-extrabold">
                                  {w.word.slice(pos, pos + w.underline.length)}
                                </span>
                                {w.word.slice(pos + w.underline.length)}
                              </>
                            ) : (
                              w.word
                            )}
                            {answered && (
                              <span className="block font-ipa text-[11px] text-slate-500 mt-0.5">
                                {w.ipa}
                              </span>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => speakEnglish(w.word)}
                            className="ml-1.5 rounded p-1 text-sky-700 hover:bg-sky-100"
                            title={`Nghe ${w.word}`}
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  {answered && (
                    <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      <strong>{ok ? 'Chính xác!' : 'Chưa đúng.'}</strong> {q.explanationVi}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PART II: 15 MCQ */}
      {part === 'II' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Phần II · Trắc nghiệm Từ vựng &amp; Ngữ pháp tổng hợp (Trang 27–28)
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Chọn 1 đáp án đúng A, B, C hoặc D (15 câu)
              </h4>
            </div>
            <span className="font-ipa text-xs font-bold text-emerald-700">Đúng: {p2Score}/15</span>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {TEST1_MCQ_15.map((q) => {
              const chosen = p2[q.id];
              const answered = chosen !== undefined;
              const ok = chosen === q.correctIndex;
              return (
                <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/40 p-4 space-y-2">
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="font-ipa text-xs text-slate-500 mr-1.5">{q.id}.</span>
                    {q.question}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {q.options.map((opt, idx) => {
                      let cls = 'border-slate-200 bg-white text-slate-800 hover:border-sky-300';
                      if (answered) {
                        if (idx === q.correctIndex) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                        else if (idx === chosen) cls = 'border-rose-400 bg-rose-50 text-rose-900';
                      }
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setP2((prev) => ({ ...prev, [q.id]: idx }))}
                          className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-semibold ${cls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {answered && (
                    <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      {q.explanationVi}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PART III: VERBS + ADVERBS OF FREQUENCY */}
      {part === 'III' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Phần III · Chia động từ &amp; đặt đúng vị trí trạng từ tần suất (Trang 29)
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Hoàn thành 12 câu dựa theo từ gợi ý trong ngoặc
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setP3Checked(true)}
              className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
            >
              Chấm Phần III
            </button>
          </div>

          <div className="space-y-2.5">
            {TEST1_PICTURE_FREQ_12.map((item) => {
              const allOk = item.answers.every((ans, idx) =>
                matchesAny(p3[`${item.id}-${idx}`] ?? '', ans, item.accepted?.[idx])
              );
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-3.5 ${
                    p3Checked
                      ? allOk
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-1.5 text-sm text-slate-800">
                    <span className="font-ipa text-xs font-bold text-slate-500">{item.id}.</span>
                    {item.parts.map((text, idx) => (
                      <span key={`${item.id}-${idx}`} className="inline-flex flex-wrap items-center gap-1.5">
                        {text && <span>{text}</span>}
                        {idx < item.answers.length && (
                          <>
                            <input
                              type="text"
                              value={p3[`${item.id}-${idx}`] ?? ''}
                              onChange={(e) =>
                                setP3((prev) => ({ ...prev, [`${item.id}-${idx}`]: e.target.value }))
                              }
                              placeholder={item.cues[idx]}
                              className="w-36 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-sky-900 focus:border-sky-500 focus:outline-none"
                            />
                            <span className="font-ipa text-[11px] text-slate-500">
                              ({item.cues[idx]})
                            </span>
                          </>
                        )}
                      </span>
                    ))}
                  </div>
                  {p3Checked && (
                    <p className={`mt-2 text-xs font-medium ${allOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                      <strong>{item.answers.join(' / ')}</strong> — {item.explanationVi}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PART IV: FIND & CORRECT 10 MISTAKES */}
      {part === 'IV' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Phần IV · Tìm và sửa 10 lỗi sai ngữ pháp (Trang 30)
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Sửa từ in đỏ bị sai trong mỗi câu thành dạng chuẩn
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setP4Checked(true)}
              className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
            >
              Chấm Phần IV
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {TEST1_MISTAKES_10.map((item) => {
              const val = p4[item.id] ?? '';
              const ok = normalizeAnswer(val) === normalizeAnswer(item.correct);
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-3.5 space-y-2 ${
                    p4Checked
                      ? ok
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <p className="text-sm text-slate-800">
                    <span className="font-ipa text-xs font-bold text-slate-500 mr-1.5">{item.id}.</span>
                    {item.parts[0]}
                    <span className="rounded bg-rose-100 px-1.5 py-0.5 font-bold text-rose-700 underline decoration-rose-400">
                      {item.parts[1]}
                    </span>
                    {item.parts[2]}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">Sửa thành:</span>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setP4((prev) => ({ ...prev, [item.id]: e.target.value }))}
                      placeholder="Nhập từ đúng..."
                      className="flex-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-emerald-900 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  {p4Checked && (
                    <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      <strong>{item.wrong} → {item.correct}</strong>: {item.explanationVi}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PART V: MATCH 10 Q&A PAIRS */}
      {part === 'V' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Phần V · Ghép 10 câu hỏi với câu trả lời tương ứng A–J (Trang 30–31)
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Chọn chữ cái A–J phù hợp nhất cho mỗi câu hỏi bên trái
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setP5Checked(true)}
              className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
            >
              Chấm Phần V
            </button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 grid gap-1.5 sm:grid-cols-2 text-xs">
            {TEST1_MATCH_OPTIONS.map((opt) => (
              <p key={opt.letter} className="text-slate-700">
                <strong className="font-ipa text-sky-800 mr-1">{opt.letter}.</strong> {opt.text}
              </p>
            ))}
          </div>

          <div className="space-y-2.5">
            {TEST1_MATCH_10.map((item) => {
              const val = p5[item.id] ?? '';
              const ok = val === item.correctLetter;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                    p5Checked
                      ? ok
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">
                      {item.id}. {item.question}
                    </p>
                    {p5Checked && (
                      <p className={`text-xs mt-1 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        <strong>
                          {item.correctLetter} ({item.answerText})
                        </strong>{' '}
                        — {item.explanationVi}
                      </p>
                    )}
                  </div>
                  <select
                    value={val}
                    onChange={(e) => setP5((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    className="shrink-0 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 focus:border-sky-500 focus:outline-none"
                  >
                    <option value="">Chọn A–J</option>
                    {TEST1_MATCH_OPTIONS.map((opt) => (
                      <option key={opt.letter} value={opt.letter}>
                        {opt.letter}. {opt.text}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PART VI: COMPLETE 8 SENTENCES WITH 1 WORD */}
      {part === 'VI' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Phần VI · Điền 1 từ phù hợp hoàn thành câu (Trang 31)
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Điền đúng 1 từ tiếng Anh vào mỗi chỗ trống (8 câu)
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setP6Checked(true)}
              className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
            >
              Chấm Phần VI
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {TEST1_CLOZE_8.map((item) => {
              const val = p6[item.id] ?? '';
              const ok = normalizeAnswer(val) === normalizeAnswer(item.answer);
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-3.5 space-y-2 ${
                    p6Checked
                      ? ok
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <p className="text-sm text-slate-800 leading-relaxed">
                    <span className="font-ipa text-xs font-bold text-slate-500 mr-1">{item.id}.</span>
                    {item.before}
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setP6((prev) => ({ ...prev, [item.id]: e.target.value }))}
                      placeholder="..."
                      className="mx-1 w-28 rounded-lg border border-slate-300 bg-white px-2 py-0.5 text-center text-xs font-bold text-sky-900 focus:border-sky-500 focus:outline-none"
                    />
                    {item.after}
                  </p>
                  <p className="text-[11px] text-slate-500">Gợi ý: {item.hintVi}</p>
                  {p6Checked && (
                    <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      <strong>{item.answer}</strong> — {item.explanationVi}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PART VII: MAKE QUESTIONS (8) */}
      {part === 'VII' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Phần VII · Đặt câu hỏi cho phần gạch chân (Trang 31)
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Viết câu hỏi hoàn chỉnh cho 8 câu sau
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setP7Checked(true)}
              className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
            >
              Chấm Phần VII
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {TEST1_WH_8.map((item) => {
              const val = p7[item.id] ?? '';
              const ok = matchesAny(val, item.answer, item.accepted);
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-3.5 space-y-2 ${
                    p7Checked
                      ? ok
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <p className="text-sm text-slate-900">
                    <span className="font-ipa text-xs font-bold text-slate-500 mr-1.5">{item.id}.</span>
                    {item.before}
                    <span className="font-bold text-sky-800 underline decoration-sky-500 decoration-2 underline-offset-2">
                      {item.underlined}
                    </span>
                    {item.after}
                  </p>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => setP7((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder="Viết câu hỏi..."
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
                  />
                  {p7Checked && (
                    <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      <strong>{item.answer}</strong> — {item.explanationVi}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PART VIII: READING DAVID (6 Q&A) */}
      {part === 'VIII' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                {TEST1_READING_DAVID.title}
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Đọc đoạn văn và trả lời 6 câu hỏi ngắn gọn
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => speakEnglish(TEST1_READING_DAVID.passageEn)}
                className="inline-flex items-center gap-1 rounded-xl bg-sky-50 border border-sky-200 px-3 py-1.5 text-xs font-semibold text-sky-800"
              >
                <Volume2 className="h-3.5 w-3.5" />
                Nghe bài đọc
              </button>
              <button
                type="button"
                onClick={() => setShowDavidVi((v) => !v)}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                <BookOpen className="h-3.5 w-3.5" />
                {showDavidVi ? 'Ẩn dịch' : 'Dịch bài'}
              </button>
              <button
                type="button"
                onClick={() => setP8Checked(true)}
                className="rounded-xl bg-sky-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-sky-700"
              >
                Chấm Phần VIII
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2.5">
            <p className="text-sm text-slate-800 leading-relaxed">{TEST1_READING_DAVID.passageEn}</p>
            {showDavidVi && (
              <p className="text-xs sm:text-sm text-sky-900 bg-sky-50 border border-sky-200 rounded-lg p-3 leading-relaxed">
                {TEST1_READING_DAVID.passageVi}
              </p>
            )}
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {TEST1_READING_DAVID.questions.map((item) => {
              const val = p8[item.id] ?? '';
              const ok = matchesAny(val, item.answer, item.accepted);
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-3.5 space-y-2 ${
                    p8Checked
                      ? ok
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.id}. {item.question}
                  </p>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => setP8((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder="Nhập câu trả lời..."
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
                  />
                  {p8Checked && (
                    <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      <strong>{item.answer}</strong> — {item.explanationVi}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PART IX: WRITE PRESENT SIMPLE SENTENCES FROM CUES (10) */}
      {part === 'IX' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Phần IX · Viết câu Hiện tại đơn hoàn chỉnh từ từ gợi ý (Trang 33)
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Chia động từ và thêm giới từ/trợ động từ cần thiết (10 câu)
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setP9Checked(true)}
              className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
            >
              Chấm Phần IX
            </button>
          </div>

          <div className="space-y-2.5">
            {TEST1_CUES_10.map((item) => {
              const val = p9[item.id] ?? '';
              const ok = matchesAny(val, item.answer, item.accepted);
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-3.5 space-y-2 ${
                    p9Checked
                      ? ok
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <p className="font-ipa text-xs sm:text-sm font-semibold text-slate-800">
                    {item.id}. {item.question}
                  </p>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => setP9((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder="Viết câu hoàn chỉnh..."
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
                  />
                  {p9Checked && (
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        <strong>{item.answer}</strong> — {item.explanationVi}
                      </p>
                      <button
                        type="button"
                        onClick={() => speakEnglish(item.answer)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        Nghe
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PART X: REWRITE 8 EQUIVALENT SENTENCES */}
      {part === 'X' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Phần X · Viết lại câu sao cho nghĩa không đổi (Trang 33)
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Luyện 8 cấu trúc tương đương hay xuất hiện nhất trong đề thi giữa kỳ 1
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setP10Checked(true)}
              className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
            >
              Chấm Phần X
            </button>
          </div>

          <div className="space-y-3">
            {TEST1_REWRITE_8.map((item) => {
              const val = p10[item.id] ?? '';
              const ok = matchesAny(val, item.answer, item.accepted);
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-4 space-y-2 ${
                    p10Checked
                      ? ok
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.id}. {item.original}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-sky-700">→ Gợi ý mở đầu: &ldquo;{item.starter}...&rdquo;</span>
                  </div>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => setP10((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder={`${item.starter} ...`}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
                  />
                  {p10Checked && (
                    <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      <strong>{item.answer}</strong> — {item.explanationVi}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* PART XI: WRITING SAMPLE */}
      {part === 'XI' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                {TEST1_WRITING_MODEL.title}
              </p>
              <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Tập viết đoạn văn ngắn theo dàn ý 4 ý rồi đối chiếu bài mẫu của bạn Linda
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setShowSampleXI((v) => !v)}
              className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
            >
              {showSampleXI ? 'Ẩn bài mẫu' : 'Xem bài mẫu chuẩn SGK'}
            </button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Dàn ý 4 bước giúp em viết đủ 60 từ dễ dàng:
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {TEST1_WRITING_MODEL.checklist.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-ipa font-bold text-sky-700">{idx + 1}.</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Khung tự luyện viết của em:</span>
              <span className="font-ipa tabular-nums">
                {studentEssay.trim() ? studentEssay.trim().split(/\s+/).length : 0} từ
              </span>
            </div>
            <textarea
              rows={4}
              value={studentEssay}
              onChange={(e) => setStudentEssay(e.target.value)}
              placeholder="Hi, my name is ... My favourite subject is ..."
              className="w-full rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
            />
          </div>

          {showSampleXI && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Bài viết mẫu chuẩn (~65 từ)
                </span>
                <button
                  type="button"
                  onClick={() => speakEnglish(TEST1_WRITING_MODEL.sampleEn)}
                  className="inline-flex items-center gap-1 rounded-lg bg-white border border-emerald-300 px-3 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-100"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                  Nghe đọc mẫu
                </button>
              </div>
              <p className="text-sm font-medium text-slate-900 leading-relaxed">
                {TEST1_WRITING_MODEL.sampleEn}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-emerald-200 pt-2">
                <strong>Dịch nghĩa:</strong> {TEST1_WRITING_MODEL.sampleVi}
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
