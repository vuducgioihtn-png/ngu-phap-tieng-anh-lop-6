import { useEffect, useState } from 'react';
import {
  CheckCircle2,
  RotateCcw,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  U7_EX_A1_SORT,
  U7_EX_A2_MCQ,
  U7_EX_B1_BOX,
  U7_EX_B1_PICS,
  U7_EX_B2_CLASSIFY,
  U7_EX_B3_MATCH,
  U7_EX_B4_WH_FILL,
  U7_EX_B5_WH_MAKE,
  U7_EX_B6_BOX,
  U7_EX_B6_CONJ_FILL,
  U7_EX_B7_CONJ_MCQ,
  U7_EX_B8_JOIN,
  type U7TvSvgKey,
} from '../data/unit7Pages1To20';
import { speakEnglish } from '../utils/speech';
import {
  Unit7Station5Reading,
  Unit7Station6Writing,
  Unit7Station7Test,
} from './Unit7Pages12To20';

export type Unit7StationId =
  | 'phonetics_tv'
  | 'vocab_classify'
  | 'wh_questions'
  | 'conjunctions'
  | 'reading'
  | 'writing'
  | 'unit7_test';

const STATIONS: { id: Unit7StationId; step: string; label: string; pages: string }[] = [
  { id: 'phonetics_tv', step: 'Trạm 01', label: 'Âm /θ/–/ð/ & 12 Kênh TV', pages: 'Tr.6–8' },
  { id: 'vocab_classify', step: 'Trạm 02', label: 'Phân loại 32 từ & Định nghĩa', pages: 'Tr.8–9' },
  { id: 'wh_questions', step: 'Trạm 03', label: 'Câu hỏi Wh-questions', pages: 'Tr.9–10' },
  { id: 'conjunctions', step: 'Trạm 04', label: 'Liên từ & Ghép câu', pages: 'Tr.10–12' },
  { id: 'reading', step: 'Trạm 05', label: 'Đọc hiểu Truyền hình', pages: 'Tr.12–14' },
  { id: 'writing', step: 'Trạm 06', label: 'Sắp xếp & Viết lại câu', pages: 'Tr.14–15' },
  { id: 'unit7_test', step: 'Trạm 07', label: 'TEST UNIT 7 (Phần I–XII)', pages: 'Tr.16–21' },
];

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

/* 12 Crisp Flat-Vector TV Programme Illustrations (Tập 2, Book p.8) */
function TvProgrammeSvg({ svgKey }: { svgKey: U7TvSvgKey }) {
  switch (svgKey) {
    case 'cartoon':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#FEF3C7" />
          <rect x="18" y="14" width="42" height="32" rx="4" fill="#0F172A" />
          <rect x="60" y="14" width="42" height="32" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <text x="39" y="36" textAnchor="middle" fontSize="18" fontWeight="900" fill="#FFFFFF">C</text>
          <text x="81" y="36" textAnchor="middle" fontSize="18" fontWeight="900" fill="#0F172A">N</text>
          <circle cx="42" cy="61" r="11" fill="#F43F5E" />
          <circle cx="38" cy="59" r="2.2" fill="#FFFFFF" />
          <circle cx="46" cy="59" r="2.2" fill="#FFFFFF" />
          <path d="M38 65 Q42 68 46 65" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="78" cy="61" r="11" fill="#38BDF8" />
          <circle cx="74" cy="59" r="2.2" fill="#0F172A" />
          <circle cx="82" cy="59" r="2.2" fill="#0F172A" />
          <path d="M74 65 Q78 68 82 65" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'weather_forecast':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#0284C7" />
          <circle cx="44" cy="30" r="12" fill="#FACC15" />
          <path d="M46 44 H82 C88 44 92 39 92 34 C92 29 88 25 83 25 C81 19 75 16 68 17 C62 18 58 22 57 27 C51 27 46 31 46 37 Z" fill="#FFFFFF" />
          <rect x="18" y="54" width="18" height="16" rx="3" fill="#0369A1" />
          <rect x="40" y="54" width="18" height="16" rx="3" fill="#0369A1" />
          <rect x="62" y="54" width="18" height="16" rx="3" fill="#0369A1" />
          <rect x="84" y="54" width="18" height="16" rx="3" fill="#0369A1" />
          <text x="27" y="65" textAnchor="middle" fontSize="8" fontWeight="700" fill="#E0F2FE">28°</text>
          <text x="49" y="65" textAnchor="middle" fontSize="8" fontWeight="700" fill="#E0F2FE">25°</text>
          <text x="71" y="65" textAnchor="middle" fontSize="8" fontWeight="700" fill="#E0F2FE">23°</text>
          <text x="93" y="65" textAnchor="middle" fontSize="8" fontWeight="700" fill="#E0F2FE">29°</text>
        </svg>
      );
    case 'sports':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#ECFDF5" />
          <circle cx="34" cy="46" r="16" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <polygon points="34,37 40,42 38,49 30,49 28,42" fill="#0F172A" />
          <circle cx="80" cy="54" r="12" stroke="#059669" strokeWidth="2.5" />
          <circle cx="58" cy="54" r="12" stroke="#059669" strokeWidth="2.5" />
          <path d="M58 54 L68 38 L80 54 M66 38 L75 38" stroke="#047857" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="71" cy="25" r="5" fill="#F97316" />
          <path d="M62 34 L73 31 L79 40" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'game_show':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#1E1B4B" />
          <rect x="18" y="14" width="84" height="32" rx="6" fill="#312E81" stroke="#FBBF24" strokeWidth="2" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={24 + i * 15} y="22" width="11" height="16" rx="2" fill={i % 2 === 0 ? '#FEF08A' : '#38BDF8'} />
          ))}
          <rect x="26" y="54" width="18" height="18" rx="3" fill="#F43F5E" />
          <rect x="51" y="54" width="18" height="18" rx="3" fill="#10B981" />
          <rect x="76" y="54" width="18" height="18" rx="3" fill="#3B82F6" />
          <circle cx="35" cy="49" r="4" fill="#FDE68A" />
          <circle cx="60" cy="49" r="4" fill="#FDE68A" />
          <circle cx="85" cy="49" r="4" fill="#FDE68A" />
        </svg>
      );
    case 'animals':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#F0FDF4" />
          <rect x="4" y="60" width="112" height="20" rx="4" fill="#BBF7D0" />
          {/* Giraffe */}
          <rect x="28" y="20" width="8" height="36" rx="4" fill="#F59E0B" />
          <ellipse cx="38" cy="52" rx="12" ry="7" fill="#F59E0B" />
          <circle cx="30" cy="18" r="5" fill="#D97706" />
          <line x1="30" y1="58" x2="30" y2="68" stroke="#B45309" strokeWidth="2.5" />
          <line x1="44" y1="58" x2="44" y2="68" stroke="#B45309" strokeWidth="2.5" />
          {/* Elephant */}
          <ellipse cx="78" cy="48" rx="18" ry="13" fill="#94A3B8" />
          <circle cx="94" cy="44" r="9" fill="#94A3B8" />
          <path d="M101 46 Q106 54 100 58" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <ellipse cx="88" cy="44" rx="5" ry="7" fill="#CBD5E1" />
          <rect x="68" y="58" width="5" height="10" rx="2" fill="#64748B" />
          <rect x="82" y="58" width="5" height="10" rx="2" fill="#64748B" />
        </svg>
      );
    case 'film':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#FFF7ED" />
          <rect x="18" y="22" width="84" height="40" rx="4" fill="#1E293B" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              <rect x={22 + i * 13} y="25" width="7" height="4" rx="1" fill="#F8FAFC" />
              <rect x={22 + i * 13} y="55" width="7" height="4" rx="1" fill="#F8FAFC" />
            </g>
          ))}
          <rect x="24" y="32" width="21" height="20" rx="2" fill="#FB923C" />
          <rect x="49" y="32" width="22" height="20" rx="2" fill="#38BDF8" />
          <rect x="75" y="32" width="21" height="20" rx="2" fill="#F472B6" />
          <polygon points="56,37 66,42 56,47" fill="#FFFFFF" />
        </svg>
      );
    case 'documentary':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#0F172A" />
          <rect x="16" y="14" width="28" height="56" rx="4" fill="#1E293B" stroke="#FACC15" strokeWidth="2" />
          <rect x="48" y="14" width="56" height="26" rx="4" fill="#0369A1" />
          <path d="M52 36 L66 22 L78 32 L88 24 L100 36 Z" fill="#38BDF8" />
          <rect x="48" y="44" width="56" height="26" rx="4" fill="#1E293B" />
          <circle cx="66" cy="57" r="7" fill="#10B981" />
          <rect x="78" y="52" width="20" height="3" rx="1.5" fill="#94A3B8" />
          <rect x="78" y="58" width="14" height="3" rx="1.5" fill="#64748B" />
          <text x="30" y="45" textAnchor="middle" fontSize="8" fontWeight="800" fill="#FACC15">DOC</text>
        </svg>
      );
    case 'science':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#1D4ED8" />
          {/* Lightbulb */}
          <circle cx="34" cy="36" r="13" fill="#FDE047" />
          <rect x="29" y="49" width="10" height="7" rx="2" fill="#E2E8F0" />
          {/* Atom */}
          <ellipse cx="78" cy="42" rx="20" ry="8" stroke="#93C5FD" strokeWidth="2" transform="rotate(35 78 42)" />
          <ellipse cx="78" cy="42" rx="20" ry="8" stroke="#93C5FD" strokeWidth="2" transform="rotate(-35 78 42)" />
          <circle cx="78" cy="42" r="4.5" fill="#FFFFFF" />
        </svg>
      );
    case 'education':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#F8FAFC" />
          <rect x="16" y="14" width="66" height="38" rx="4" fill="#14532D" stroke="#92400E" strokeWidth="3" />
          <text x="49" y="34" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFFFFF">A B C</text>
          <line x1="26" y1="42" x2="72" y2="42" stroke="#86EFAC" strokeWidth="2" strokeLinecap="round" />
          {/* Teacher */}
          <circle cx="94" cy="34" r="8" fill="#FDBA74" />
          <path d="M84 68 C84 52 104 52 104 68 Z" fill="#2563EB" />
          <line x1="84" y1="44" x2="66" y2="34" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'music':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#FDF2F8" />
          {/* Musical notes */}
          <path d="M36 52 V22 L66 16 V46" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="31" cy="53" rx="7" ry="5" fill="#DB2777" />
          <ellipse cx="61" cy="47" rx="7" ry="5" fill="#DB2777" />
          {/* Piano keys */}
          <rect x="74" y="42" width="32" height="24" rx="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <rect x="81" y="42" width="5" height="14" fill="#0F172A" />
          <rect x="91" y="42" width="5" height="14" fill="#0F172A" />
          <rect x="100" y="42" width="3" height="14" fill="#0F172A" />
        </svg>
      );
    case 'news':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#1E3A8A" />
          <rect x="14" y="14" width="92" height="12" rx="3" fill="#DC2626" />
          <text x="60" y="23" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FFFFFF">NEWS NOW · LIVE</text>
          <circle cx="48" cy="43" r="9" fill="#FED7AA" />
          <path d="M32 68 C32 54 64 54 64 68 Z" fill="#0F172A" />
          <polygon points="48,54 45,62 51,62" fill="#EF4444" />
          <rect x="70" y="34" width="32" height="24" rx="3" fill="#38BDF8" />
          <rect x="74" y="39" width="24" height="3" rx="1.5" fill="#FFFFFF" />
          <rect x="74" y="45" width="18" height="3" rx="1.5" fill="#E0F2FE" />
          <rect x="14" y="64" width="92" height="8" rx="2" fill="#FACC15" />
        </svg>
      );
    case 'comedy':
      return (
        <svg viewBox="0 0 120 84" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="76" rx="12" fill="#FEF9C3" />
          {/* Laughing comedy mask */}
          <circle cx="60" cy="40" r="24" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
          <path d="M47 34 Q51 29 55 34" stroke="#713F12" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M65 34 Q69 29 73 34" stroke="#713F12" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M46 45 Q60 59 74 45 Z" fill="#FFFFFF" stroke="#713F12" strokeWidth="2" />
          <text x="22" y="28" fontSize="11" fontWeight="900" fill="#EA580C">HA!</text>
          <text x="84" y="64" fontSize="11" fontWeight="900" fill="#EA580C">HA!</text>
        </svg>
      );
  }
}

export function Unit7Workbook({ initialStation = 'phonetics_tv' }: { initialStation?: Unit7StationId }) {
  const [station, setStation] = useState<Unit7StationId>(initialStation);

  useEffect(() => {
    setStation(initialStation);
  }, [initialStation]);

  // Station 1: A.I Sort, A.II MCQ, B.I 12 Pics
  const [a1Placed, setA1Placed] = useState<Record<string, 'theta' | 'eth'>>({});
  const [a1Checked, setA1Checked] = useState(false);
  const [a2Sel, setA2Sel] = useState<Record<string, number>>({});
  const [a2Checked, setA2Checked] = useState(false);
  const [b1Inputs, setB1Inputs] = useState<Record<string, string>>({});
  const [b1Checked, setB1Checked] = useState(false);

  // Station 2: B.II 32-word Classify + B.III 10-pair Match
  const [b2Placed, setB2Placed] = useState<Record<string, 'people' | 'programmes' | 'films'>>({});
  const [b2Checked, setB2Checked] = useState(false);
  const [b3Sel, setB3Sel] = useState<Record<string, string>>({});
  const [b3Checked, setB3Checked] = useState(false);

  // Station 3: B.IV Wh Fill + B.V Wh Make
  const [b4Inputs, setB4Inputs] = useState<Record<string, string>>({});
  const [b4Checked, setB4Checked] = useState(false);
  const [b5Inputs, setB5Inputs] = useState<Record<string, string>>({});
  const [b5Checked, setB5Checked] = useState(false);

  // Station 4: B.VI Conj Fill + B.VII Conj MCQ + B.VIII Join
  const [b6Inputs, setB6Inputs] = useState<Record<string, string>>({});
  const [b6Checked, setB6Checked] = useState(false);
  const [b7Sel, setB7Sel] = useState<Record<string, number>>({});
  const [b7Checked, setB7Checked] = useState(false);
  const [b8Inputs, setB8Inputs] = useState<Record<string, string>>({});
  const [b8Checked, setB8Checked] = useState(false);

  return (
    <div className="space-y-6">
      {/* Station Navigation Strip */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Sách Bài Tập Tương Tác Tập 2 · Unit 7: Television (Trang 1–20)
            </p>
            <h2 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
              7 Trạm Luyện Tập Chi Tiết + Đề TEST Unit 7 (I–X)
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Bấm từng trạm để thực hành theo đúng thứ tự SGK Tập 2 Tr.6–20
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {STATIONS.map((s) => {
            const active = station === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setStation(s.id)}
                className={`rounded-xl border p-2.5 text-left transition-all ${
                  active
                    ? 'border-blue-600 bg-blue-600 text-white shadow-2xs'
                    : 'border-slate-200 bg-slate-50/70 text-slate-800 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                <div className="flex items-center justify-between gap-1 text-[10px] font-bold uppercase">
                  <span className={active ? 'text-blue-100' : 'text-blue-700'}>{s.step}</span>
                  <span className={`font-ipa tabular-nums ${active ? 'text-blue-100' : 'text-slate-400'}`}>
                    {s.pages}
                  </span>
                </div>
                <p className="mt-1 text-xs font-bold leading-snug line-clamp-2">{s.label}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* =================================================================== */}
      {/* TRẠM 01: A.I–II PHONETICS & B.I 12 TV PROGRAMMES (TR.6–8)           */}
      {/* =================================================================== */}
      {station === 'phonetics_tv' && (
        <div className="space-y-6">
          {/* A.I Sort 19 words into /θ/ and /ð/ */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  A.I · Xếp từ vào 2 cột /θ/ (thổi hơi) và /ð/ (rung cổ) · Tr.6–7
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Bấm nút loa nghe từng từ rồi chọn cột /θ/ hoặc /ð/
                </h3>
              </div>
              {a1Checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {U7_EX_A1_SORT.filter((w) => a1Placed[w.id] === w.sound).length}/{U7_EX_A1_SORT.length} đúng
                </span>
              )}
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {U7_EX_A1_SORT.map((w) => {
                const pick = a1Placed[w.id];
                const ok = a1Checked && pick === w.sound;
                const bad = a1Checked && pick !== w.sound;
                return (
                  <div
                    key={w.id}
                    className={`rounded-xl border p-3 flex items-center justify-between gap-2 ${
                      ok
                        ? 'border-emerald-300 bg-emerald-50/70'
                        : bad
                          ? 'border-rose-300 bg-rose-50/70'
                          : 'border-slate-200 bg-slate-50/60'
                    }`}
                  >
                    <div className="min-w-0">
                      <button
                        type="button"
                        onClick={() => speakEnglish(w.word)}
                        className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-slate-900 hover:text-blue-700"
                      >
                        <Volume2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                        <span>{w.word}</span>
                      </button>
                      <p className="text-[11px] text-slate-500">
                        {a1Checked ? `${w.ipa} · ${w.vi}` : w.vi}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      {(['theta', 'eth'] as const).map((col) => {
                        const active = pick === col;
                        return (
                          <button
                            key={col}
                            type="button"
                            onClick={() => {
                              setA1Placed((prev) => ({ ...prev, [w.id]: col }));
                              setA1Checked(false);
                            }}
                            className={`rounded-lg border px-2.5 py-1 font-ipa text-xs font-bold transition-colors ${
                              active
                                ? 'border-slate-900 bg-slate-900 text-white'
                                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {col === 'theta' ? '/θ/' : '/ð/'}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setA1Checked(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Kiểm tra phân loại A.I
              </button>
              <button
                type="button"
                onClick={() => {
                  setA1Placed({});
                  setA1Checked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </section>

          {/* A.II 10 Phonetics MCQ */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  A.II · Tìm từ có âm "th" phát âm khác (10 câu) · Tr.7
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Choose the word having the underlined part pronounced differently
                </h3>
              </div>
              {a2Checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {U7_EX_A2_MCQ.filter((q) => a2Sel[q.id] === q.correctIndex).length}/{U7_EX_A2_MCQ.length} đúng
                </span>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U7_EX_A2_MCQ.map((q) => (
                <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                  <p className="text-xs font-bold text-slate-700">Câu {q.num}:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {q.options.map((opt, idx) => {
                      const active = a2Sel[q.id] === idx;
                      const right = a2Checked && idx === q.correctIndex;
                      const wrong = a2Checked && active && idx !== q.correctIndex;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            speakEnglish(opt);
                            setA2Sel((prev) => ({ ...prev, [q.id]: idx }));
                            setA2Checked(false);
                          }}
                          className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-semibold transition-colors ${
                            right
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : wrong
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
                  {a2Checked && <p className="text-[11px] text-slate-600">{q.explanationVi}</p>}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setA2Checked(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Kiểm tra A.II
              </button>
              <button
                type="button"
                onClick={() => {
                  setA2Sel({});
                  setA2Checked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </section>

          {/* B.I 12 TV Programmes Picture Match */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  B.I · Ghép 12 tranh minh họa với tên chương trình truyền hình · Tr.7–8
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Match the pictures with the television programmes
                </h3>
              </div>
              {b1Checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {U7_EX_B1_PICS.filter((p) => normalizeText(b1Inputs[p.id] ?? '') === p.answer).length}/12 đúng
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 rounded-xl border border-blue-200 bg-blue-50/60 p-3">
              {U7_EX_B1_BOX.map((w) => (
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

            <div className="grid gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {U7_EX_B1_PICS.map((pic) => {
                const val = b1Inputs[pic.id] ?? '';
                const ok = b1Checked && normalizeText(val) === pic.answer;
                const bad = b1Checked && !ok;
                return (
                  <div
                    key={pic.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50/60 p-3 flex flex-col justify-between gap-2.5"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5">
                        <span>Tranh {pic.num}</span>
                        {b1Checked && (
                          <button
                            type="button"
                            onClick={() => speakEnglish(pic.answer)}
                            className="text-blue-700 hover:underline inline-flex items-center gap-1"
                          >
                            <Volume2 className="h-3 w-3" />
                            Nghe
                          </button>
                        )}
                      </div>
                      <TvProgrammeSvg svgKey={pic.svgKey} />
                      <p className="mt-2 text-[11px] text-slate-500 leading-snug">{pic.hintVi}</p>
                    </div>

                    <div className="space-y-1">
                      <select
                        value={val}
                        onChange={(e) => {
                          setB1Inputs((prev) => ({ ...prev, [pic.id]: e.target.value }));
                          setB1Checked(false);
                        }}
                        className={`w-full rounded-lg border px-2.5 py-1.5 text-xs font-semibold focus:outline-none ${
                          ok
                            ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                            : bad
                              ? 'border-rose-300 bg-rose-50 text-rose-900'
                              : 'border-slate-200 bg-white text-slate-800 focus:border-blue-500'
                        }`}
                      >
                        <option value="">-- Chọn chương trình --</option>
                        {U7_EX_B1_BOX.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {b1Checked && (
                        <p className={`text-[11px] font-bold ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                          {pic.answer} ({pic.vi})
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setB1Checked(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Kiểm tra 12 tranh B.I
              </button>
              <button
                type="button"
                onClick={() => {
                  setB1Inputs({});
                  setB1Checked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =================================================================== */}
      {/* TRẠM 02: B.II 32-WORD CLASSIFY & B.III 10 DEFINITIONS (TR.8–9)      */}
      {/* =================================================================== */}
      {station === 'vocab_classify' && (
        <div className="space-y-6">
          {/* B.II 32 Words Classifier */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  B.II · Phân loại 32 từ vào 3 nhóm: People · Programmes · Kinds of film · Tr.8–9
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Một số từ có thể thuộc cả 2 nhóm Programmes &amp; Kinds of film (VD: comedy, cartoon, documentary)
                </h3>
              </div>
              {b2Checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {
                    U7_EX_B2_CLASSIFY.filter(
                      (item) => b2Placed[item.id] && item.validCols.includes(b2Placed[item.id])
                    ).length
                  }
                  /{U7_EX_B2_CLASSIFY.length} đúng
                </span>
              )}
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {U7_EX_B2_CLASSIFY.map((item) => {
                const pick = b2Placed[item.id];
                const ok = b2Checked && Boolean(pick && item.validCols.includes(pick));
                const bad = b2Checked && !ok;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3 space-y-2 ${
                      ok
                        ? 'border-emerald-300 bg-emerald-50/70'
                        : bad
                          ? 'border-rose-300 bg-rose-50/70'
                          : 'border-slate-200 bg-slate-50/60'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <button
                        type="button"
                        onClick={() => speakEnglish(item.word)}
                        className="inline-flex items-center gap-1 font-display text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-700"
                      >
                        <Volume2 className="h-3 w-3 text-blue-600 shrink-0" />
                        <span>{item.word}</span>
                      </button>
                      <span className="text-[11px] text-slate-500 truncate">{item.vi}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1">
                      {[
                        { id: 'people' as const, label: 'People' },
                        { id: 'programmes' as const, label: 'TV Prog' },
                        { id: 'films' as const, label: 'Film' },
                      ].map((col) => {
                        const active = pick === col.id;
                        return (
                          <button
                            key={col.id}
                            type="button"
                            onClick={() => {
                              setB2Placed((prev) => ({ ...prev, [item.id]: col.id }));
                              setB2Checked(false);
                            }}
                            className={`rounded-md border py-1 text-[10px] font-bold transition-colors ${
                              active
                                ? 'border-slate-900 bg-slate-900 text-white'
                                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {col.label}
                          </button>
                        );
                      })}
                    </div>

                    {b2Checked && bad && (
                      <p className="text-[10px] font-bold text-rose-800">
                        Đúng: {item.validCols.join(' / ')}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setB2Checked(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Kiểm tra 32 từ B.II
              </button>
              <button
                type="button"
                onClick={() => {
                  const ans: Record<string, 'people' | 'programmes' | 'films'> = {};
                  U7_EX_B2_CLASSIFY.forEach((it) => {
                    ans[it.id] = it.validCols[0];
                  });
                  setB2Placed(ans);
                  setB2Checked(true);
                }}
                className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Hiện đáp án
              </button>
              <button
                type="button"
                onClick={() => {
                  setB2Placed({});
                  setB2Checked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </section>

          {/* B.III 10 TV Definitions Match */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  B.III · Ghép 10 thuật ngữ truyền hình với định nghĩa tiếng Anh · Tr.9
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Match the words on the left with its definition on the right
                </h3>
              </div>
              {b3Checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {U7_EX_B3_MATCH.filter((m) => b3Sel[m.id] === m.letter).length}/10 đúng
                </span>
              )}
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
              {[...U7_EX_B3_MATCH]
                .sort((a, b) => a.letter.localeCompare(b.letter))
                .map((d) => (
                  <p key={d.letter} className="leading-relaxed text-slate-700">
                    <strong className="font-ipa text-blue-800 mr-1.5">{d.letter}.</strong>
                    {d.definition}
                  </p>
                ))}
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
              {U7_EX_B3_MATCH.map((m) => {
                const pick = b3Sel[m.id] ?? '';
                const ok = b3Checked && pick === m.letter;
                const bad = b3Checked && !ok;
                return (
                  <div
                    key={m.id}
                    className={`rounded-xl border p-3 space-y-2 ${
                      ok
                        ? 'border-emerald-300 bg-emerald-50/70'
                        : bad
                          ? 'border-rose-300 bg-rose-50/70'
                          : 'border-slate-200 bg-white'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => speakEnglish(m.word)}
                      className="inline-flex items-center gap-1 font-display text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-700"
                    >
                      <span>{m.num}. {m.word}</span>
                      <Volume2 className="h-3 w-3 text-blue-600 shrink-0" />
                    </button>
                    <select
                      value={pick}
                      onChange={(e) => {
                        setB3Sel((prev) => ({ ...prev, [m.id]: e.target.value }));
                        setB3Checked(false);
                      }}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-xs font-bold text-slate-800"
                    >
                      <option value="">Chọn A–J</option>
                      {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((lt) => (
                        <option key={lt} value={lt}>
                          Định nghĩa {lt}
                        </option>
                      ))}
                    </select>
                    {b3Checked && (
                      <p className={`text-[11px] font-semibold ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        Đáp án {m.letter} — {m.vi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setB3Checked(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Kiểm tra B.III
              </button>
              <button
                type="button"
                onClick={() => {
                  setB3Sel({});
                  setB3Checked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =================================================================== */}
      {/* TRẠM 03: B.IV & B.V WH-QUESTIONS (TR.9–10)                          */}
      {/* =================================================================== */}
      {station === 'wh_questions' && (
        <div className="space-y-6">
          {/* B.IV Fill 10 Wh-question words */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  B.IV · Điền từ để hỏi thích hợp (10 câu) · Tr.9–10
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Đọc kỹ câu trả lời gợi ý phía sau để chọn đúng Wh-word
                </h3>
              </div>
              {b4Checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {
                    U7_EX_B4_WH_FILL.filter((item) =>
                      item.accepted.includes(normalizeText(b4Inputs[item.id] ?? ''))
                    ).length
                  }
                  /10 đúng
                </span>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U7_EX_B4_WH_FILL.map((item) => {
                const val = b4Inputs[item.id] ?? '';
                const ok = b4Checked && item.accepted.includes(normalizeText(val));
                const bad = b4Checked && !ok;
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                    <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                      <span className="font-bold text-blue-700 mr-1.5">{item.num}.</span>
                      <span className="font-bold text-blue-700">______</span>
                      {item.after}
                    </p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setB4Inputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                        setB4Checked(false);
                      }}
                      placeholder="VD: How often / When / What / Why..."
                      className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                        ok
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                          : bad
                            ? 'border-rose-300 bg-rose-50 text-rose-950'
                            : 'border-slate-200 bg-white text-slate-900 focus:border-blue-500'
                      }`}
                    />
                    {b4Checked && (
                      <p className="text-[11px] text-slate-600">
                        <strong className={ok ? 'text-emerald-800' : 'text-rose-800'}>
                          {item.displayAnswer}:
                        </strong>{' '}
                        {item.explanationVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setB4Checked(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Kiểm tra B.IV
              </button>
              <button
                type="button"
                onClick={() => {
                  setB4Inputs({});
                  setB4Checked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </section>

          {/* B.V Write 10 questions to underlined words */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  B.V · Đặt câu hỏi cho từ/cụm từ gạch chân (10 câu) · Tr.10
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Write questions to the underlined words
                </h3>
              </div>
              {b5Checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {
                    U7_EX_B5_WH_MAKE.filter((item) =>
                      item.accepted.some((a) => normalizeSentence(a) === normalizeSentence(b5Inputs[item.id] ?? ''))
                    ).length
                  }
                  /10 đúng
                </span>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U7_EX_B5_WH_MAKE.map((item) => {
                const val = b5Inputs[item.id] ?? '';
                const ok =
                  b5Checked &&
                  item.accepted.some((a) => normalizeSentence(a) === normalizeSentence(val));
                const bad = b5Checked && !ok;
                const parts = item.prompt.includes('___')
                  ? item.prompt.split('___')
                  : [item.prompt + ' ', item.num === 1 ? ' every day.' : '.'];

                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                    <p className="text-xs sm:text-sm font-medium text-slate-900">
                      <span className="font-bold text-blue-700 mr-1.5">{item.num}.</span>
                      {parts[0]}
                      <span className="underline decoration-2 decoration-blue-600 font-bold text-blue-900">
                        {item.underlined}
                      </span>
                      {parts[1]}
                    </p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setB5Inputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                        setB5Checked(false);
                      }}
                      placeholder="Nhập câu hỏi tiếng Anh..."
                      className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                        ok
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                          : bad
                            ? 'border-rose-300 bg-rose-50 text-rose-950'
                            : 'border-slate-200 bg-white text-slate-900 focus:border-blue-500'
                      }`}
                    />
                    {b5Checked && (
                      <div className="text-[11px] text-slate-600 space-y-0.5">
                        <p className={ok ? 'font-bold text-emerald-800' : 'font-bold text-rose-800'}>
                          {item.displayAnswer}
                        </p>
                        <p>{item.explanationVi}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setB5Checked(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Kiểm tra B.V
              </button>
              <button
                type="button"
                onClick={() => {
                  const ans: Record<string, string> = {};
                  U7_EX_B5_WH_MAKE.forEach((it) => {
                    ans[it.id] = it.displayAnswer;
                  });
                  setB5Inputs(ans);
                  setB5Checked(true);
                }}
                className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Hiện đáp án mẫu
              </button>
              <button
                type="button"
                onClick={() => {
                  setB5Inputs({});
                  setB5Checked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =================================================================== */}
      {/* TRẠM 04: B.VI–VIII CONJUNCTIONS & JOINING SENTENCES (TR.10–12)      */}
      {/* =================================================================== */}
      {station === 'conjunctions' && (
        <div className="space-y-6">
          {/* B.VI Box Fill */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  B.VI · Điền liên từ trong khung (and · so · but · because · although · or) · Tr.10–11
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Fill in the blank with the conjunctions in the box
                </h3>
              </div>
              {b6Checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {
                    U7_EX_B6_CONJ_FILL.filter((it) =>
                      it.accepted.includes(normalizeText(b6Inputs[it.id] ?? ''))
                    ).length
                  }
                  /10 đúng
                </span>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U7_EX_B6_CONJ_FILL.map((item) => {
                const val = b6Inputs[item.id] ?? '';
                const ok = b6Checked && item.accepted.includes(normalizeText(val));
                const bad = b6Checked && !ok;
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                    <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                      <span className="font-bold text-blue-700 mr-1.5">{item.num}.</span>
                      {item.before}
                      <span className="font-bold text-blue-700">______</span>
                      {item.after}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {U7_EX_B6_BOX.map((conj) => {
                        const active = normalizeText(val) === conj;
                        return (
                          <button
                            key={conj}
                            type="button"
                            onClick={() => {
                              setB6Inputs((prev) => ({ ...prev, [item.id]: conj }));
                              setB6Checked(false);
                            }}
                            className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition-colors ${
                              active
                                ? 'border-slate-900 bg-slate-900 text-white'
                                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {conj}
                          </button>
                        );
                      })}
                    </div>
                    {b6Checked && (
                      <p className="text-[11px] flex items-start gap-1 text-slate-600">
                        {ok ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-3.5 w-3.5 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <span>
                          <strong>{item.displayAnswer}</strong> — {item.explanationVi}
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
                onClick={() => setB6Checked(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Kiểm tra B.VI
              </button>
              <button
                type="button"
                onClick={() => {
                  setB6Inputs({});
                  setB6Checked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </section>

          {/* B.VII 10 Conjunction MCQs */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  B.VII · Trắc nghiệm liên từ (10 câu) · Tr.11
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Choose the correct answers
                </h3>
              </div>
              {b7Checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {U7_EX_B7_CONJ_MCQ.filter((q) => b7Sel[q.id] === q.correctIndex).length}/10 đúng
                </span>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U7_EX_B7_CONJ_MCQ.map((q) => (
                <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                  <p className="text-xs sm:text-sm font-medium text-slate-900">
                    <span className="font-bold text-blue-700 mr-1.5">{q.num}.</span>
                    {q.prompt}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {q.options.map((opt, idx) => {
                      const active = b7Sel[q.id] === idx;
                      const right = b7Checked && idx === q.correctIndex;
                      const wrong = b7Checked && active && idx !== q.correctIndex;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setB7Sel((prev) => ({ ...prev, [q.id]: idx }));
                            setB7Checked(false);
                          }}
                          className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-semibold ${
                            right
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : wrong
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
                  {b7Checked && <p className="text-[11px] text-slate-600">{q.explanationVi}</p>}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setB7Checked(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Kiểm tra B.VII
              </button>
              <button
                type="button"
                onClick={() => {
                  setB7Sel({});
                  setB7Checked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </section>

          {/* B.VIII Join 8 pairs of sentences */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  B.VIII · Nối cặp câu bằng liên từ trong ngoặc (8 câu) · Tr.11–12
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                  Join each pair of sentences, using the word in brackets
                </h3>
              </div>
              {b8Checked && (
                <span className="font-ipa text-sm font-extrabold text-blue-700 tabular-nums">
                  {
                    U7_EX_B8_JOIN.filter((it) =>
                      it.accepted.some((a) => normalizeSentence(a) === normalizeSentence(b8Inputs[it.id] ?? ''))
                    ).length
                  }
                  /8 đúng
                </span>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U7_EX_B8_JOIN.map((item) => {
                const val = b8Inputs[item.id] ?? '';
                const ok =
                  b8Checked &&
                  item.accepted.some((a) => normalizeSentence(a) === normalizeSentence(val));
                const bad = b8Checked && !ok;
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                    <p className="text-xs sm:text-sm font-medium text-slate-900">
                      <span className="font-bold text-blue-700 mr-1.5">{item.num}.</span>
                      {item.prompt}{' '}
                      <strong className="font-ipa text-blue-800">({item.bracketWord})</strong>
                    </p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setB8Inputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                        setB8Checked(false);
                      }}
                      placeholder={`Nối 2 câu bằng "${item.bracketWord}"...`}
                      className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                        ok
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                          : bad
                            ? 'border-rose-300 bg-rose-50 text-rose-950'
                            : 'border-slate-200 bg-white text-slate-900 focus:border-blue-500'
                      }`}
                    />
                    {b8Checked && (
                      <div className="text-[11px] text-slate-600 space-y-0.5">
                        <p className={ok ? 'font-bold text-emerald-800' : 'font-bold text-rose-800'}>
                          {item.displayAnswer}
                        </p>
                        <p>{item.explanationVi}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setB8Checked(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                Kiểm tra B.VIII
              </button>
              <button
                type="button"
                onClick={() => {
                  const ans: Record<string, string> = {};
                  U7_EX_B8_JOIN.forEach((it) => {
                    ans[it.id] = it.displayAnswer;
                  });
                  setB8Inputs(ans);
                  setB8Checked(true);
                }}
                className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Hiện đáp án mẫu
              </button>
              <button
                type="button"
                onClick={() => {
                  setB8Inputs({});
                  setB8Checked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =================================================================== */}
      {/* TRẠM 05–07: READING · WRITING · TEST UNIT 7 (TR.12–20)              */}
      {/* =================================================================== */}
      {station === 'reading' && <Unit7Station5Reading />}
      {station === 'writing' && <Unit7Station6Writing />}
      {station === 'unit7_test' && <Unit7Station7Test />}
    </div>
  );
}
