import { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  Eye,
  HelpCircle,
  RotateCcw,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  DO_PLAY_GO_10,
  FIVE_COL_VERBS_24,
  FREQ_POSITION_13,
  MISSING_LETTERS_10,
  MISTAKE_FIX_8,
  NEGATIVE_REWRITE_8,
  PREPOSITIONS_10,
  PRESENT_SIMPLE_15,
  QUESTION_SHORT_ANSWER_8,
  QUICK_CHOICE_8,
  SOUND_SORT_20,
  WORD_BANK_10,
  WORD_BANK_10_OPTIONS,
  type FiveColCategory,
  type MissingLetterItem,
} from '../data/unit1Pages1To20';
import { speakEnglish } from '../utils/speech';
import { Unit1FullTestSection, Unit1Station7, Unit1Station8 } from './Unit1Pages21To34';

export type Unit1StationId =
  | 'phonetics'
  | 'vocab'
  | 'verbs'
  | 'present'
  | 'transform'
  | 'mastery'
  | 'schedule_mcq'
  | 'reading_writing'
  | 'unit1_test';

const STATIONS: { id: Unit1StationId; num: string; title: string; subtitle: string; pageTag: string }[] = [
  { id: 'phonetics', num: '01', title: 'Phân loại âm /ɑː/ – /ʌ/', subtitle: 'Bài I · 20 từ chuẩn SGK', pageTag: 'Tr.15' },
  { id: 'vocab', num: '02', title: 'Từ vựng Trường học', subtitle: 'Bài II.1 · II.2 · II.3 (28 câu)', pageTag: 'Tr.15–16' },
  { id: 'verbs', num: '03', title: 'Study · Have · Do · Play · Go', subtitle: 'Bài II.4 · II.5 (34 câu)', pageTag: 'Tr.16–17' },
  { id: 'present', num: '04', title: 'Chia động từ Hiện tại đơn', subtitle: 'Bài II.6 (15 câu)', pageTag: 'Tr.17–18' },
  { id: 'transform', num: '05', title: 'Phủ định & Câu hỏi ngắn', subtitle: 'Bài II.7 · II.8 (16 câu)', pageTag: 'Tr.18–19' },
  { id: 'mastery', num: '06', title: 'Giới từ · Sửa lỗi · Tần suất', subtitle: 'Bài II.9 · II.10 · II.11 (33 câu)', pageTag: 'Tr.19–21' },
  { id: 'schedule_mcq', num: '07', title: 'Tần suất · Lịch Mary · Động từ', subtitle: 'Bài II.12 · II.13 · II.14 (30 câu)', pageTag: 'Tr.21–23' },
  { id: 'reading_writing', num: '08', title: 'Đọc hiểu · Đặt câu hỏi · Viết', subtitle: 'Bài III.1 · III.2 · IV.1 · IV.2', pageTag: 'Tr.23–26' },
  { id: 'unit1_test', num: '09', title: 'TEST FOR UNIT 1 (Đề chuẩn)', subtitle: 'Đủ 11 phần (I → XI · 92 câu)', pageTag: 'Tr.27–34' },
];

function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/\s+([?.!,])/g, '$1');
}

function SchoolItemSvg({ iconKey }: { iconKey: MissingLetterItem['iconKey'] }) {
  const cls = 'h-10 w-10 text-sky-700';
  switch (iconKey) {
    case 'rubber':
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" aria-hidden="true">
          <path d="M12 31L26 15a4 4 0 0 1 5.7 0l5.3 5.3a4 4 0 0 1 0 5.7L24 38H15l-3-3a2.8 2.8 0 0 1 0-4Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M19 23l9 9" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M10 38h28" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'calculator':
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" aria-hidden="true">
          <rect x="11" y="7" width="26" height="34" rx="4" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <rect x="15" y="11" width="18" height="7" rx="1.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.8" />
          <circle cx="17" cy="24" r="1.8" fill="#0284C7" />
          <circle cx="24" cy="24" r="1.8" fill="#0284C7" />
          <circle cx="31" cy="24" r="1.8" fill="#0284C7" />
          <circle cx="17" cy="30" r="1.8" fill="#0284C7" />
          <circle cx="24" cy="30" r="1.8" fill="#0284C7" />
          <rect x="29.5" y="28.5" width="3" height="8" rx="1.2" fill="#059669" />
          <circle cx="17" cy="35.5" r="1.8" fill="#0284C7" />
          <circle cx="24" cy="35.5" r="1.8" fill="#0284C7" />
        </svg>
      );
    case 'schoolbag':
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" aria-hidden="true">
          <path d="M18 14v-3a6 6 0 0 1 12 0v3" stroke="#0284C7" strokeWidth="2.2" />
          <rect x="10" y="14" width="28" height="26" rx="6" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <rect x="15" y="25" width="18" height="10" rx="2.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.8" />
          <path d="M10 22h28" stroke="#0284C7" strokeWidth="1.8" />
        </svg>
      );
    case 'pencil_case':
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" aria-hidden="true">
          <rect x="7" y="17" width="34" height="16" rx="7" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M11 22h26" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="37" cy="22" r="2.2" fill="#059669" />
        </svg>
      );
    case 'dictionary':
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" aria-hidden="true">
          <path d="M12 9h21a3 3 0 0 1 3 3v26a2 2 0 0 1-2 2H14a4 4 0 0 1-4-4V12a3 3 0 0 1 2-3Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M10 35a3 3 0 0 1 3-3h23" stroke="#0284C7" strokeWidth="2" />
          <text x="16" y="24" fontSize="10" fontWeight="700" fill="#0369A1">A–Z</text>
        </svg>
      );
    case 'notebook':
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" aria-hidden="true">
          <rect x="12" y="8" width="25" height="32" rx="3" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M9 14h5M9 21h5M9 28h5M9 35h5" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M18 16h13M18 22h13M18 28h9" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'compass':
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" aria-hidden="true">
          <circle cx="24" cy="13" r="3.5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M24 7v2.5M22 16L13 39M26 16l9 23" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M16 28h16" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'school':
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" aria-hidden="true">
          <path d="M8 22L24 11l16 11v17H8V22Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" strokeLinejoin="round" />
          <rect x="20" y="28" width="8" height="11" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.8" />
          <circle cx="24" cy="20" r="2.5" fill="#059669" />
          <path d="M24 6v5" stroke="#0284C7" strokeWidth="2" />
        </svg>
      );
    case 'classroom':
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" aria-hidden="true">
          <rect x="8" y="10" width="32" height="18" rx="2.5" fill="#D1FAE5" stroke="#059669" strokeWidth="2.2" />
          <path d="M14 17h12M14 22h8" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 36h22M17 31v7M31 31v7" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'teacher':
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none" aria-hidden="true">
          <circle cx="20" cy="15" r="5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M11 36c0-5.5 4-9 9-9s9 3.5 9 9" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M29 22l9-7" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" />
          <rect x="31" y="10" width="10" height="14" rx="2" stroke="#0284C7" strokeWidth="1.8" />
        </svg>
      );
  }
}

export function Unit1Workbook({ initialStation = 'phonetics' }: { initialStation?: Unit1StationId }) {
  const [station, setStation] = useState<Unit1StationId>(initialStation);

  useEffect(() => {
    setStation(initialStation);
  }, [initialStation]);

  // --- Station 1: Sound sort 20 ---
  const [soundPicks, setSoundPicks] = useState<Record<string, 'a_long' | 'u_short'>>({});
  const [soundChecked, setSoundChecked] = useState(false);

  // --- Station 2: II.1 Missing letters, II.2 Word bank, II.3 Quick choice ---
  const [missingInputs, setMissingInputs] = useState<Record<number, string>>({});
  const [missingChecked, setMissingChecked] = useState(false);
  const [missingShowHints, setMissingShowHints] = useState(false);

  const [wordBankPicks, setWordBankPicks] = useState<Record<number, string>>({});
  const [wordBankChecked, setWordBankChecked] = useState(false);

  const [quickPicks, setQuickPicks] = useState<Record<number, string>>({});

  // --- Station 3: II.4 5-col verbs, II.5 do/play/go ---
  const [fiveColPicks, setFiveColPicks] = useState<Record<string, FiveColCategory>>({});
  const [fiveColChecked, setFiveColChecked] = useState(false);

  const [dpgPicks, setDpgPicks] = useState<Record<string, 'do' | 'play' | 'go'>>({});
  const [dpgChecked, setDpgChecked] = useState(false);

  // --- Station 4: II.6 Present simple 15 ---
  const [psInputs, setPsInputs] = useState<Record<string, string>>({});
  const [psChecked, setPsChecked] = useState(false);
  const [psShowAnswers, setPsShowAnswers] = useState(false);

  // --- Station 5: II.7 Negatives 8 & II.8 Q&A 8 ---
  const [negInputs, setNegInputs] = useState<Record<number, string>>({});
  const [negChecked, setNegChecked] = useState(false);
  const [negHints, setNegHints] = useState<Record<number, boolean>>({});

  const [qaInputs, setQaInputs] = useState<Record<number, string>>({});
  const [qaChecked, setQaChecked] = useState(false);
  const [qaHints, setQaHints] = useState<Record<number, boolean>>({});

  // --- Station 6: II.9 Prepositions, II.10 Mistake fix, II.11 Freq position ---
  const [prepInputs, setPrepInputs] = useState<Record<string, string>>({});
  const [prepChecked, setPrepChecked] = useState(false);

  const [fixInputs, setFixInputs] = useState<Record<number, string>>({});
  const [fixChecked, setFixChecked] = useState(false);

  const [freqInputs, setFreqInputs] = useState<Record<number, string>>({});
  const [freqChecked, setFreqChecked] = useState(false);
  const [freqHints, setFreqHints] = useState<Record<number, boolean>>({});

  // Summary counts for Station 1
  const soundCorrectCount = useMemo(
    () => SOUND_SORT_20.filter((w) => soundPicks[w.word] === w.sound).length,
    [soundPicks]
  );

  // Summary counts for Station 3 II.4
  const fiveColCorrectCount = useMemo(
    () => FIVE_COL_VERBS_24.filter((w) => fiveColPicks[w.word] === w.category).length,
    [fiveColPicks]
  );

  const usedBankWords = useMemo(() => new Set(Object.values(wordBankPicks)), [wordBankPicks]);

  const checkPresentBlank = (itemId: number, blankIdx: number, expected: string, variants?: string[][]) => {
    const val = normalizeText(psInputs[`${itemId}-${blankIdx}`] ?? '');
    if (!val) return false;
    if (variants && variants[blankIdx]) {
      return variants[blankIdx].some((v) => normalizeText(v) === val);
    }
    return normalizeText(expected) === val;
  };

  return (
    <div className="space-y-6">
      {/* Workbook Overview Header */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Sách Chinh phục Ngữ pháp &amp; Bài tập Tiếng Anh 6 · Tập 1 · Trang 1–34
            </p>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Trọn bộ 9 Trạm thực hành Unit 1 &amp; Đề kiểm tra TEST FOR UNIT 1 (290+ câu)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Từ Bài I (Tr.15) qua Thời khóa biểu Mary, Đọc hiểu, Viết đoạn văn đến Đề kiểm tra 11 phần (Tr.27–34) — chấm điểm tức thì, có giọng đọc và giải thích dễ nhớ.
            </p>
          </div>
        </div>

        {/* 6 Interactive Station Selector */}
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {STATIONS.map((st) => {
            const active = station === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setStation(st.id)}
                className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                  active
                    ? 'border-sky-600 bg-sky-50/90 shadow-2xs'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-ipa text-xs font-bold ${
                    active ? 'bg-sky-600 text-white' : 'bg-white border border-slate-200 text-slate-700'
                  }`}
                >
                  {st.num}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <p className={`font-display text-sm font-bold truncate ${active ? 'text-sky-950' : 'text-slate-900'}`}>
                      {st.title}
                    </p>
                    <span className="font-ipa text-[11px] font-semibold text-slate-400 shrink-0">
                      {st.pageTag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5 truncate">{st.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ==================== STATION 1: PHONETICS (EX I) ==================== */}
      {station === 'phonetics' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Bài I · Phát âm (Trang 15)
              </p>
              <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                Phân loại 20 từ vào nhóm âm /ɑː/ (a dài) hoặc /ʌ/ (ă ngắn)
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Chạm biểu tượng loa để nghe chuẩn, sau đó chọn nhóm âm đúng cho từng từ.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSoundChecked(true)}
                className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700 transition-colors"
              >
                Chấm điểm ({Object.keys(soundPicks).length}/20)
              </button>
              <button
                type="button"
                onClick={() => {
                  setSoundPicks({});
                  setSoundChecked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </div>

          {soundChecked && (
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-950">
              <span>
                Kết quả Bài I: <strong className="text-emerald-700">{soundCorrectCount}/20 từ đúng</strong>
              </span>
              <span className="text-xs font-normal text-sky-800">
                Mẹo nhớ nhanh: Nhóm <strong>ar</strong> đọc là /ɑː/ (7 từ); nhóm <strong>u / o / ou</strong> đọc là /ʌ/ (13 từ).
              </span>
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SOUND_SORT_20.map((item) => {
              const picked = soundPicks[item.word];
              const isRight = soundChecked && picked === item.sound;
              const isWrong = soundChecked && picked !== item.sound;
              return (
                <div
                  key={item.word}
                  className={`rounded-xl border p-3.5 transition-colors ${
                    isRight
                      ? 'border-emerald-300 bg-emerald-50/60'
                      : isWrong
                        ? 'border-rose-300 bg-rose-50/60'
                        : 'border-slate-200 bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div>
                      <p className="font-display text-sm font-bold text-slate-900">{item.word}</p>
                      <p className="text-[11px] text-slate-500">
                        {soundChecked ? `${item.ipa} · ${item.meaningVi}` : item.meaningVi}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.word)}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 text-sky-700 hover:border-sky-400"
                      title={`Nghe từ ${item.word}`}
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSoundPicks((p) => ({ ...p, [item.word]: 'a_long' }))}
                      className={`rounded-lg py-1.5 font-ipa text-xs font-bold border transition-colors ${
                        picked === 'a_long'
                          ? 'border-sky-600 bg-sky-600 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300'
                      }`}
                    >
                      /ɑː/
                    </button>
                    <button
                      type="button"
                      onClick={() => setSoundPicks((p) => ({ ...p, [item.word]: 'u_short' }))}
                      className={`rounded-lg py-1.5 font-ipa text-xs font-bold border transition-colors ${
                        picked === 'u_short'
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300'
                      }`}
                    >
                      /ʌ/
                    </button>
                  </div>

                  {soundChecked && (
                    <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold">
                      {isRight ? (
                        <>
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                          <span className="text-emerald-800">Đúng ({item.sound === 'a_long' ? '/ɑː/' : '/ʌ/'})</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-3.5 w-3.5 text-rose-700 shrink-0" />
                          <span className="text-rose-800">Đáp án: {item.sound === 'a_long' ? '/ɑː/' : '/ʌ/'}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ==================== STATION 2: VOCAB (II.1, II.2, II.3) ==================== */}
      {station === 'vocab' && (
        <div className="space-y-6">
          {/* Ex II.1: Missing Letters with SVG drawings */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Bài II.1 · Từ vựng đồ dùng &amp; trường học (Trang 15)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Nhìn hình vẽ &amp; gợi ý chữ cái để gõ từ Tiếng Anh hoàn chỉnh (10 từ)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMissingShowHints((prev) => !prev)}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-3.5 w-3.5" />
                  {missingShowHints ? 'Ẩn đáp án' : 'Xem đáp án'}
                </button>
                <button
                  type="button"
                  onClick={() => setMissingChecked(true)}
                  className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
                >
                  Kiểm tra 10 từ
                </button>
              </div>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
              {MISSING_LETTERS_10.map((item) => {
                const val = missingInputs[item.id] ?? '';
                const ok = normalizeText(val) === normalizeText(item.answer);
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3.5 flex flex-col justify-between gap-2.5 ${
                      missingChecked
                        ? ok
                          ? 'border-emerald-300 bg-emerald-50/50'
                          : 'border-rose-300 bg-rose-50/50'
                        : 'border-slate-200 bg-slate-50/60'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200">
                        <SchoolItemSvg iconKey={item.iconKey} />
                      </div>
                      <button
                        type="button"
                        onClick={() => speakEnglish(item.answer)}
                        className="rounded-lg bg-white border border-slate-200 p-1.5 text-sky-700 hover:border-sky-400"
                        title="Nghe gợi ý phát âm"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div>
                      <p className="font-ipa text-xs font-bold text-sky-800 tracking-wide">
                        {item.id}. {item.pattern}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.meaningVi}</p>
                    </div>

                    <input
                      type="text"
                      value={val}
                      onChange={(e) =>
                        setMissingInputs((prev) => ({ ...prev, [item.id]: e.target.value }))
                      }
                      placeholder="Gõ từ đầy đủ..."
                      className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-900 focus:border-sky-500 focus:outline-none"
                    />

                    {(missingChecked || missingShowHints) && (
                      <div className="flex items-center gap-1 text-[11px] font-semibold">
                        {missingChecked && ok ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                            <span className="text-emerald-800">{item.answer} {item.ipa}</span>
                          </>
                        ) : (
                          <span className="text-sky-800">
                            Đáp án: <strong>{item.answer}</strong>
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Ex II.2: Word Bank 10 sentences */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Bài II.2 · Điền từ trong khung (Trang 16)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Chọn 1 trong 10 từ cho sẵn để hoàn thành mỗi câu
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setWordBankChecked(true)}
                  className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
                >
                  Chấm Bài II.2
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setWordBankPicks({});
                    setWordBankChecked(false);
                  }}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Làm lại
                </button>
              </div>
            </div>

            {/* Word bank reference box */}
            <div className="flex flex-wrap gap-2 rounded-xl border border-sky-200 bg-sky-50/70 p-3.5">
              {WORD_BANK_10_OPTIONS.map((w) => {
                const used = usedBankWords.has(w);
                return (
                  <span
                    key={w}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${
                      used
                        ? 'border-slate-200 bg-slate-100 text-slate-400 line-through'
                        : 'border-sky-200 bg-white text-sky-900'
                    }`}
                  >
                    {w}
                  </span>
                );
              })}
            </div>

            <div className="space-y-2.5">
              {WORD_BANK_10.map((item) => {
                const picked = wordBankPicks[item.id] ?? '';
                const ok = picked === item.answer;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3.5 ${
                      wordBankChecked
                        ? ok
                          ? 'border-emerald-300 bg-emerald-50/50'
                          : 'border-rose-300 bg-rose-50/50'
                        : 'border-slate-200 bg-slate-50/40'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-800">
                      <span className="font-ipa text-xs font-bold text-slate-500">{item.id}.</span>
                      <span>{item.before}</span>
                      <select
                        value={picked}
                        onChange={(e) =>
                          setWordBankPicks((p) => ({ ...p, [item.id]: e.target.value }))
                        }
                        className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-sky-900 focus:border-sky-500 focus:outline-none"
                      >
                        <option value="">-- chọn từ --</option>
                        {WORD_BANK_10_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span>{item.after}</span>
                    </div>
                    {wordBankChecked && (
                      <p className={`mt-2 text-xs font-medium flex items-center gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> : <XCircle className="h-3.5 w-3.5 shrink-0" />}
                        <span>
                          {ok ? 'Chính xác!' : `Đáp án đúng: "${item.answer}".`} {item.explanationVi}
                        </span>
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Ex II.3: Quick Choice 8 sentences */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Bài II.3 · Chọn từ đúng trong câu (Trang 16)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Chạm trực tiếp vào đáp án đúng (chấm ngay lập tức)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setQuickPicks({})}
                className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                Làm lại
              </button>
            </div>

            <div className="space-y-3">
              {QUICK_CHOICE_8.map((item) => {
                const picked = quickPicks[item.id];
                const ok = picked === item.answer;
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-800">
                      <span className="font-ipa text-xs font-bold text-slate-500">{item.id}.</span>
                      <span>{item.before}</span>
                      <span className="inline-flex items-center gap-1.5">
                        {item.choices.map((ch) => {
                          let cls = 'border-slate-300 bg-white text-slate-800 hover:border-sky-400';
                          if (picked) {
                            if (ch === item.answer) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900';
                            else if (ch === picked) cls = 'border-rose-400 bg-rose-50 text-rose-900';
                          }
                          return (
                            <button
                              key={ch}
                              type="button"
                              onClick={() => setQuickPicks((p) => ({ ...p, [item.id]: ch }))}
                              className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition-colors ${cls}`}
                            >
                              {ch}
                            </button>
                          );
                        })}
                      </span>
                      <span>{item.after}</span>
                    </div>
                    {picked && (
                      <p className={`mt-2 text-xs font-medium flex items-center gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> : <XCircle className="h-3.5 w-3.5 shrink-0" />}
                        <span>
                          {ok ? 'Chuẩn xác!' : `Đáp án đúng là "${item.answer}".`} {item.explanationVi}
                        </span>
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ==================== STATION 3: 5 ACTION VERBS (II.4 & II.5) ==================== */}
      {station === 'verbs' && (
        <div className="space-y-6">
          {/* Ex II.4: 24 words into 5 categories */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Bài II.4 · Phân loại 24 từ vào 5 cột (Trang 16–17)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Chọn động từ ghép đúng: Study · Have · Do · Play · Go
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFiveColChecked(true)}
                  className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
                >
                  Chấm Bài II.4 ({Object.keys(fiveColPicks).length}/24)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFiveColPicks({});
                    setFiveColChecked(false);
                  }}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Làm lại
                </button>
              </div>
            </div>

            {fiveColChecked && (
              <div className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-950">
                Kết quả phân loại: <strong className="text-emerald-700">{fiveColCorrectCount}/24 từ đúng</strong>
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {FIVE_COL_VERBS_24.map((item) => {
                const picked = fiveColPicks[item.word];
                const ok = fiveColChecked && picked === item.category;
                const bad = fiveColChecked && picked !== item.category;
                return (
                  <div
                    key={item.word}
                    className={`rounded-xl border p-3.5 ${
                      ok
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : bad
                          ? 'border-rose-300 bg-rose-50/50'
                          : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div>
                        <p className="font-display text-sm font-bold text-slate-900">{item.word}</p>
                        <p className="text-[11px] text-slate-500">{item.meaningVi}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => speakEnglish(item.word)}
                        className="rounded-lg bg-white border border-slate-200 p-1.5 text-sky-700 hover:border-sky-400"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-5 gap-1">
                      {(['Study', 'Have', 'Do', 'Play', 'Go'] as FiveColCategory[]).map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setFiveColPicks((p) => ({ ...p, [item.word]: cat }))}
                          className={`rounded-md py-1 text-[11px] font-bold border transition-colors ${
                            picked === cat
                              ? 'border-sky-600 bg-sky-600 text-white'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                    {fiveColChecked && (
                      <p className={`mt-2 text-[11px] font-semibold ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {ok ? `Đúng: ${item.category} ${item.word}` : `Đáp án đúng: ${item.category} ${item.word}`}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Ex II.5: Do / Play / Go 10 sentences */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Bài II.5 · Điền do / play / go (Trang 17)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Áp dụng mẹo 3 giây: V-ing → go · Bóng/cầu → play · Võ/yoga → do
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setDpgChecked(true)}
                  className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
                >
                  Chấm Bài II.5
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDpgPicks({});
                    setDpgChecked(false);
                  }}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Làm lại
                </button>
              </div>
            </div>

            <div className="space-y-2.5">
              {DO_PLAY_GO_10.map((item) => {
                const allCorrect = item.answers.every((ans, bIdx) => dpgPicks[`${item.id}-${bIdx}`] === ans);
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3.5 ${
                      dpgChecked
                        ? allCorrect
                          ? 'border-emerald-300 bg-emerald-50/50'
                          : 'border-rose-300 bg-rose-50/50'
                        : 'border-slate-200 bg-slate-50/40'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-800">
                      <span className="font-ipa text-xs font-bold text-slate-500">{item.id}.</span>
                      {item.parts.map((part, pIdx) => (
                        <span key={`${item.id}-p-${pIdx}`} className="inline-flex flex-wrap items-center gap-2">
                          <span>{part}</span>
                          {pIdx < item.answers.length && (
                            <span className="inline-flex gap-1">
                              {(['do', 'play', 'go'] as const).map((opt) => {
                                const selected = dpgPicks[`${item.id}-${pIdx}`] === opt;
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() =>
                                      setDpgPicks((p) => ({ ...p, [`${item.id}-${pIdx}`]: opt }))
                                    }
                                    className={`rounded-md px-2.5 py-0.5 text-xs font-bold border transition-colors ${
                                      selected
                                        ? 'border-sky-600 bg-sky-600 text-white'
                                        : 'border-slate-300 bg-white text-slate-700 hover:border-sky-400'
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                    {dpgChecked && (
                      <p className={`mt-2 text-xs font-medium flex items-center gap-1.5 ${allCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {allCorrect ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> : <XCircle className="h-3.5 w-3.5 shrink-0" />}
                        <span>
                          {allCorrect ? 'Chính xác!' : `Đáp án: ${item.answers.join(' / ')}.`} {item.explanationVi}
                        </span>
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ==================== STATION 4: PRESENT SIMPLE (II.6 — 15 SENTENCES) ==================== */}
      {station === 'present' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Bài II.6 · Chia động từ Thì Hiện tại đơn (Trang 17–18)
              </p>
              <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                Chia dạng đúng của động từ trong ngoặc (15 câu trọng tâm)
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPsShowAnswers((prev) => !prev)}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                <Eye className="h-3.5 w-3.5" />
                {psShowAnswers ? 'Ẩn đáp án' : 'Xem đáp án'}
              </button>
              <button
                type="button"
                onClick={() => setPsChecked(true)}
                className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
              >
                Chấm 15 câu
              </button>
              <button
                type="button"
                onClick={() => {
                  setPsInputs({});
                  setPsChecked(false);
                }}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                Làm lại
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {PRESENT_SIMPLE_15.map((item) => {
              const allOk = item.answers.every((ans, bIdx) =>
                checkPresentBlank(item.id, bIdx, ans, item.acceptedVariants)
              );
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-4 ${
                    psChecked
                      ? allOk
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-800">
                    <span className="font-ipa text-xs font-bold text-slate-500">{item.id}.</span>
                    {item.parts.map((part, pIdx) => (
                      <span key={`${item.id}-ps-${pIdx}`} className="inline-flex flex-wrap items-center gap-2">
                        <span>{part}</span>
                        {pIdx < item.answers.length && (
                          <span className="inline-flex items-center gap-1.5">
                            <input
                              type="text"
                              value={psInputs[`${item.id}-${pIdx}`] ?? ''}
                              onChange={(e) =>
                                setPsInputs((p) => ({ ...p, [`${item.id}-${pIdx}`]: e.target.value }))
                              }
                              placeholder={`(${item.prompts[pIdx]})`}
                              className="w-32 sm:w-36 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-sky-900 focus:border-sky-500 focus:outline-none"
                            />
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                  {(psChecked || psShowAnswers) && (
                    <p
                      className={`mt-2 text-xs font-medium flex items-center gap-1.5 ${
                        psChecked ? (allOk ? 'text-emerald-800' : 'text-rose-800') : 'text-sky-900'
                      }`}
                    >
                      {psChecked && (allOk ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> : <XCircle className="h-3.5 w-3.5 shrink-0" />)}
                      <span>
                        <strong>Đáp án: {item.answers.join(' / ')}</strong> — {item.explanationVi}
                      </span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ==================== STATION 5: NEGATIVE & QUESTIONS (II.7 & II.8) ==================== */}
      {station === 'transform' && (
        <div className="space-y-6">
          {/* Ex II.7: Negative Short Form */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Bài II.7 · Chuyển sang câu phủ định viết tắt (Trang 18)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Dùng dạng rút gọn: isn&apos;t · aren&apos;t · don&apos;t · doesn&apos;t (8 câu)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setNegChecked(true)}
                className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
              >
                Chấm Bài II.7
              </button>
            </div>

            <div className="space-y-3">
              {NEGATIVE_REWRITE_8.map((item) => {
                const val = negInputs[item.id] ?? '';
                const ok = normalizeText(val) === normalizeText(item.answer);
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-4 space-y-2 ${
                      negChecked
                        ? ok
                          ? 'border-emerald-300 bg-emerald-50/50'
                          : 'border-rose-300 bg-rose-50/50'
                        : 'border-slate-200 bg-slate-50/40'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">
                        <span className="font-ipa text-xs text-slate-500 mr-1.5">{item.id}.</span>
                        {item.prompt}
                      </p>
                      <button
                        type="button"
                        onClick={() => setNegHints((p) => ({ ...p, [item.id]: !p[item.id] }))}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                        Gợi ý
                      </button>
                    </div>
                    {negHints[item.id] && (
                      <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5">
                        {item.hintVi}
                      </p>
                    )}
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setNegInputs((p) => ({ ...p, [item.id]: e.target.value }))}
                      placeholder="Viết lại câu phủ định..."
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
                    />
                    {negChecked && (
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className={`text-xs font-medium flex items-center gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                          {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> : <XCircle className="h-3.5 w-3.5 shrink-0" />}
                          <span>
                            <strong>{item.answer}</strong> — {item.explanationVi}
                          </span>
                        </p>
                        <button
                          type="button"
                          onClick={() => speakEnglish(item.answer)}
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

          {/* Ex II.8: Questions & Short Answers */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Bài II.8 · Đặt câu hỏi &amp; trả lời ngắn (Trang 18–19)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Viết câu hỏi Hiện tại đơn kèm câu trả lời Yes / No (8 câu)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setQaChecked(true)}
                className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
              >
                Chấm Bài II.8
              </button>
            </div>

            <div className="space-y-3">
              {QUESTION_SHORT_ANSWER_8.map((item) => {
                const val = qaInputs[item.id] ?? '';
                const acceptedList = [item.answer, ...(item.accepted ?? [])];
                const ok = acceptedList.some((ans) => normalizeText(val) === normalizeText(ans));
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-4 space-y-2 ${
                      qaChecked
                        ? ok
                          ? 'border-emerald-300 bg-emerald-50/50'
                          : 'border-rose-300 bg-rose-50/50'
                        : 'border-slate-200 bg-slate-50/40'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">
                        <span className="font-ipa text-xs text-slate-500 mr-1.5">{item.id}.</span>
                        {item.prompt}
                      </p>
                      <button
                        type="button"
                        onClick={() => setQaHints((p) => ({ ...p, [item.id]: !p[item.id] }))}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                        Gợi ý
                      </button>
                    </div>
                    {qaHints[item.id] && (
                      <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5">
                        {item.hintVi}
                      </p>
                    )}
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setQaInputs((p) => ({ ...p, [item.id]: e.target.value }))}
                      placeholder="VD: Do you have ...? No, I don't."
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
                    />
                    {qaChecked && (
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className={`text-xs font-medium flex items-center gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                          {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> : <XCircle className="h-3.5 w-3.5 shrink-0" />}
                          <span>
                            <strong>{item.answer}</strong> — {item.explanationVi}
                          </span>
                        </p>
                        <button
                          type="button"
                          onClick={() => speakEnglish(item.answer)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                          Nghe mẫu
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ==================== STATION 6: PREPOSITIONS, MISTAKE FIX, FREQ POSITION (II.9–II.11) ==================== */}
      {station === 'mastery' && (
        <div className="space-y-6">
          {/* Ex II.9: Prepositions */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Bài II.9 · Điền giới từ thích hợp (Trang 19)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Điền in · on · at · to · with · After vào chỗ trống (10 câu)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPrepChecked(true)}
                className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
              >
                Chấm Bài II.9
              </button>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {PREPOSITIONS_10.map((item) => {
                const allOk = item.answers.every(
                  (ans, idx) => normalizeText(prepInputs[`${item.id}-${idx}`] ?? '') === normalizeText(ans)
                );
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3.5 ${
                      prepChecked
                        ? allOk
                          ? 'border-emerald-300 bg-emerald-50/50'
                          : 'border-rose-300 bg-rose-50/50'
                        : 'border-slate-200 bg-slate-50/40'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-1.5 text-sm text-slate-800">
                      <span className="font-ipa text-xs font-bold text-slate-500">{item.id}.</span>
                      {item.parts.map((part, pIdx) => (
                        <span key={`${item.id}-pr-${pIdx}`} className="inline-flex items-center gap-1.5">
                          {part && <span>{part}</span>}
                          {pIdx < item.answers.length && (
                            <input
                              type="text"
                              value={prepInputs[`${item.id}-${pIdx}`] ?? ''}
                              onChange={(e) =>
                                setPrepInputs((p) => ({ ...p, [`${item.id}-${pIdx}`]: e.target.value }))
                              }
                              placeholder="..."
                              className="w-16 rounded-lg border border-slate-300 bg-white px-2 py-0.5 text-center text-xs font-bold text-sky-900 focus:border-sky-500 focus:outline-none"
                            />
                          )}
                        </span>
                      ))}
                    </div>
                    {prepChecked && (
                      <p className={`mt-2 text-xs font-medium ${allOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                        <strong>{item.answers.join(' / ')}</strong> — {item.explanationVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Ex II.10: Find and Correct Mistakes */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Bài II.10 · Tìm và sửa lỗi sai ngữ pháp (Trang 19–20)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Sửa phần từ gạch đỏ in đậm thành dạng đúng (8 câu)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setFixChecked(true)}
                className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
              >
                Chấm Bài II.10
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {MISTAKE_FIX_8.map((item) => {
                const val = fixInputs[item.id] ?? '';
                const ok = normalizeText(val) === normalizeText(item.correctWord);
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3.5 space-y-2 ${
                      fixChecked
                        ? ok
                          ? 'border-emerald-300 bg-emerald-50/50'
                          : 'border-rose-300 bg-rose-50/50'
                        : 'border-slate-200 bg-slate-50/40'
                    }`}
                  >
                    <p className="text-sm text-slate-800">
                      <span className="font-ipa text-xs font-bold text-slate-500 mr-1.5">{item.id}.</span>
                      {item.sentenceParts[0]}
                      <span className="rounded bg-rose-100 px-1.5 py-0.5 font-bold text-rose-700 underline decoration-rose-400">
                        {item.sentenceParts[1]}
                      </span>
                      {item.sentenceParts[2]}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500">Sửa thành:</span>
                      <input
                        type="text"
                        value={val}
                        onChange={(e) => setFixInputs((p) => ({ ...p, [item.id]: e.target.value }))}
                        placeholder="Nhập từ đúng..."
                        className="flex-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-emerald-900 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    {fixChecked && (
                      <p className={`text-xs font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        <strong>{item.wrongWord} → {item.correctWord}</strong>: {item.explanationVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Ex II.11: Adverbs of Frequency Placement (13 sentences) */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Bài II.11 · Đặt trạng từ chỉ tần suất vào đúng vị trí (Trang 20–21)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Viết lại câu hoàn chỉnh với trạng từ trong ngoặc (15 câu)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setFreqChecked(true)}
                className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
              >
                Chấm Bài II.11
              </button>
            </div>

            <div className="space-y-3">
              {FREQ_POSITION_13.map((item) => {
                const val = freqInputs[item.id] ?? '';
                const ok = normalizeText(val) === normalizeText(item.answer);
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-4 space-y-2 ${
                      freqChecked
                        ? ok
                          ? 'border-emerald-300 bg-emerald-50/50'
                          : 'border-rose-300 bg-rose-50/50'
                        : 'border-slate-200 bg-slate-50/40'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">
                        <span className="font-ipa text-xs text-slate-500 mr-1.5">{item.id}.</span>
                        {item.prompt}
                      </p>
                      <button
                        type="button"
                        onClick={() => setFreqHints((p) => ({ ...p, [item.id]: !p[item.id] }))}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                        Gợi ý vị trí
                      </button>
                    </div>
                    {freqHints[item.id] && (
                      <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5">
                        {item.hintVi}
                      </p>
                    )}
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setFreqInputs((p) => ({ ...p, [item.id]: e.target.value }))}
                      placeholder="Viết lại câu hoàn chỉnh..."
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
                    />
                    {freqChecked && (
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className={`text-xs font-medium flex items-center gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                          {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> : <XCircle className="h-3.5 w-3.5 shrink-0" />}
                          <span>
                            <strong>{item.answer}</strong> — {item.explanationVi}
                          </span>
                        </p>
                        <button
                          type="button"
                          onClick={() => speakEnglish(item.answer)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                          Nghe câu chuẩn
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ==================== STATION 7: EX II.12, II.13 (MARY), II.14 (TR.21–23) ==================== */}
      {station === 'schedule_mcq' && <Unit1Station7 />}

      {/* ==================== STATION 8: EX III.1, III.2, IV.1, IV.2 (TR.23–26) ==================== */}
      {station === 'reading_writing' && <Unit1Station8 />}

      {/* ==================== STATION 9: TEST FOR UNIT 1 (TR.27–34) ==================== */}
      {station === 'unit1_test' && <Unit1FullTestSection />}
    </div>
  );
}
