import { useEffect, useState } from 'react';
import { RotateCcw, Volume2 } from 'lucide-react';
import {
  U8_EX_A1_SORT,
  U8_EX_A2_MCQ,
  U8_EX_B1_BOX,
  U8_EX_B1_PICS,
  U8_EX_B2_CLASSIFY,
  U8_EX_B3_DO_PLAY,
  U8_EX_B4_VING,
  U8_EX_B4_VING_BOX,
  U8_EX_B5_ACTION,
  U8_EX_B5_ACTION_BOX,
  U8_EX_B6_VERBS,
  U8_EX_B8_PAST_FILL,
  U8_EX_B12_STORY_BLANKS,
  U8_EX_B12_STORY_PARTS,
  type U8SportSvgKey,
} from '../data/unit8Pages22To41';
import { speakEnglish } from '../utils/speech';
import {
  Unit8Station4Transform,
  Unit8Station5Imperatives,
  Unit8Station6Reading,
  Unit8Station7Writing,
} from './Unit8Pages32To41';

export type Unit8StationId =
  | 'phonetics_sports'
  | 'do_go_play'
  | 'past_verbs_story'
  | 'past_transform'
  | 'imperatives_preps'
  | 'reading'
  | 'writing';

const STATIONS: { id: Unit8StationId; num: string; label: string; pages: string }[] = [
  { id: 'phonetics_sports', num: '01', label: 'Ngữ âm /e/–/æ/ & 12 Hình', pages: 'Tr.28–30' },
  { id: 'do_go_play', num: '02', label: 'Do/Go/Play & V-ing', pages: 'Tr.30–31' },
  { id: 'past_verbs_story', num: '03', label: '29 Động từ QK & Truyện', pages: 'Tr.31–33,36' },
  { id: 'past_transform', num: '04', label: 'Đổi (-), (?) & Câu hỏi', pages: 'Tr.32–36' },
  { id: 'imperatives_preps', num: '05', label: 'Mệnh lệnh & Giới từ', pages: 'Tr.36–37' },
  { id: 'reading', num: '06', label: '4 Bài Đọc Hiểu', pages: 'Tr.37–39' },
  { id: 'writing', num: '07', label: 'Viết câu & Đoạn văn', pages: 'Tr.40–41' },
];

function norm(s: string): string {
  return s.trim().toLowerCase().replace(/['’`]/g, "'").replace(/\s+/g, ' ');
}

function matchesAccepted(input: string, accepted: string[]): boolean {
  const n = norm(input);
  if (!n) return false;
  return accepted.some((a) => norm(a) === n);
}

function renderUnderlinedOption(opt: string) {
  const match = opt.match(/^(.*)\[([^\]]+)\](.*)$/);
  if (!match) return <span>{opt}</span>;
  return (
    <span>
      {match[1]}
      <span className="underline decoration-2 decoration-orange-600 font-extrabold text-orange-900">
        {match[2]}
      </span>
      {match[3]}
    </span>
  );
}

/* ============================================================================
 * 12 FLAT-VECTOR SPORTS ILLUSTRATIONS (B.I · TẬP 2 TR.29–30)
 * ============================================================================ */
function SportIllustrationSvg({ kind }: { kind: U8SportSvgKey }) {
  switch (kind) {
    case 'camping':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#ECFDF5" />
          <rect x="0" y="54" width="120" height="22" fill="#86EFAC" />
          <polygon points="22,56 54,18 86,56" fill="#EF4444" stroke="#991B1B" strokeWidth="1.5" />
          <polygon points="44,56 54,32 64,56" fill="#7F1D1D" />
          <polygon points="94,56 102,38 110,56" fill="#15803D" />
          <circle cx="90" cy="58" r="5" fill="#F97316" />
          <circle cx="90" cy="57" r="2.5" fill="#FDE047" />
        </svg>
      );
    case 'fishing':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#E0F2FE" />
          <rect x="0" y="50" width="120" height="26" fill="#38BDF8" />
          <path d="M18 50 L74 50 L64 62 L28 62 Z" fill="#92400E" />
          <circle cx="42" cy="34" r="6" fill="#FDBA74" />
          <rect x="37" y="40" width="10" height="10" rx="2" fill="#0284C7" />
          <line x1="48" y1="42" x2="94" y2="20" stroke="#475569" strokeWidth="2" />
          <line x1="94" y1="20" x2="94" y2="58" stroke="#0F172A" strokeWidth="1" strokeDasharray="2 2" />
          <ellipse cx="96" cy="61" rx="6" ry="3.5" fill="#F97316" />
        </svg>
      );
    case 'swimming':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#E0F2FE" />
          <rect x="0" y="34" width="120" height="42" fill="#0EA5E9" />
          <path d="M8 46 Q20 40 32 46 T56 46 T80 46 T104 46" fill="none" stroke="#BAE6FD" strokeWidth="2.5" />
          <path d="M14 60 Q26 54 38 60 T62 60 T86 60 T110 60" fill="none" stroke="#BAE6FD" strokeWidth="2" />
          <circle cx="62" cy="34" r="7" fill="#FDBA74" />
          <path d="M55 31 Q62 24 69 31 Z" fill="#EF4444" />
          <path d="M40 39 Q52 24 68 38" fill="none" stroke="#FDBA74" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'football':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#DCFCE7" />
          <rect x="0" y="54" width="120" height="22" fill="#4ADE80" />
          <circle cx="60" cy="40" r="18" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <polygon points="60,31 68,37 65,46 55,46 52,37" fill="#0F172A" />
          <line x1="60" y1="22" x2="60" y2="31" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="68" y1="37" x2="77" y2="34" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="52" y1="37" x2="43" y2="34" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      );
    case 'cycling':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#FEF3C7" />
          <circle cx="34" cy="52" r="14" fill="none" stroke="#0F172A" strokeWidth="3" />
          <circle cx="86" cy="52" r="14" fill="none" stroke="#0F172A" strokeWidth="3" />
          <path d="M34 52 L54 32 L78 32 L86 52 M54 32 L60 52 L34 52" fill="none" stroke="#EA580C" strokeWidth="3" strokeLinejoin="round" />
          <line x1="74" y1="24" x2="84" y2="24" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="18" r="6" fill="#0284C7" />
        </svg>
      );
    case 'judo':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#FFF7ED" />
          <rect x="0" y="58" width="120" height="18" fill="#FED7AA" />
          {/* Two white judo gi figures with black belts */}
          <circle cx="42" cy="22" r="7" fill="#FDBA74" />
          <path d="M30 30 L54 30 L56 56 L28 56 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
          <rect x="29" y="42" width="26" height="4" fill="#0F172A" />
          <circle cx="78" cy="22" r="7" fill="#FDBA74" />
          <path d="M66 30 L90 30 L92 56 L64 56 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
          <rect x="65" y="42" width="26" height="4" fill="#0F172A" />
        </svg>
      );
    case 'hockey':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#F0F9FF" />
          <rect x="0" y="54" width="120" height="22" fill="#E0F2FE" />
          <path d="M78 16 L46 56 L28 56" fill="none" stroke="#92400E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="78" cy="58" rx="10" ry="4.5" fill="#0F172A" />
          <path d="M40 24 L62 24" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 3" />
        </svg>
      );
    case 'skiing':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#EFF6FF" />
          <polygon points="0,76 55,22 120,76" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="1.5" />
          <circle cx="62" cy="24" r="6" fill="#FDBA74" />
          <rect x="57" y="21" width="10" height="3.5" rx="1.5" fill="#0284C7" />
          <line x1="62" y1="30" x2="54" y2="50" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
          <line x1="36" y1="58" x2="88" y2="48" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="66" y1="35" x2="82" y2="52" stroke="#475569" strokeWidth="1.8" />
        </svg>
      );
    case 'badminton':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#FEF2F2" />
          <ellipse cx="44" cy="30" rx="14" ry="18" fill="#FFFFFF" stroke="#E11D48" strokeWidth="2.5" />
          <line x1="44" y1="48" x2="44" y2="68" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="34" y1="24" x2="54" y2="24" stroke="#FDA4AF" strokeWidth="1" />
          <line x1="32" y1="32" x2="56" y2="32" stroke="#FDA4AF" strokeWidth="1" />
          {/* Shuttlecock */}
          <polygon points="78,26 94,18 90,36" fill="#FFFFFF" stroke="#475569" strokeWidth="1.4" />
          <circle cx="77" cy="27" r="4" fill="#DC2626" />
        </svg>
      );
    case 'athletics':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#FFF7ED" />
          <rect x="0" y="54" width="120" height="22" fill="#FB923C" />
          <line x1="0" y1="64" x2="120" y2="64" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="64" cy="18" r="6" fill="#FDBA74" />
          <path d="M62 25 L54 40 L72 52 M54 40 L40 52 M58 30 L74 28 M58 30 L44 34" fill="none" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'volleyball':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#FEFCE8" />
          <line x1="12" y1="44" x2="108" y2="44" stroke="#475569" strokeWidth="2.5" />
          <rect x="14" y="44" width="92" height="18" fill="none" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="60" cy="26" r="14" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
          <path d="M48 22 Q60 18 72 22 M48 30 Q60 34 72 30" fill="none" stroke="#2563EB" strokeWidth="2" />
        </svg>
      );
    case 'baseball_basketball':
      return (
        <svg viewBox="0 0 120 76" className="h-20 w-full" aria-hidden="true">
          <rect width="120" height="76" rx="10" fill="#FFF7ED" />
          {/* Basketball backboard & hoop + ball */}
          <rect x="68" y="10" width="36" height="24" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <rect x="78" y="20" width="16" height="10" fill="none" stroke="#EA580C" strokeWidth="1.5" />
          <line x1="74" y1="34" x2="98" y2="34" stroke="#EA580C" strokeWidth="3" />
          <polygon points="76,34 96,34 91,50 81,50" fill="none" stroke="#94A3B8" strokeWidth="1.4" />
          <circle cx="42" cy="40" r="14" fill="#F97316" stroke="#9A3412" strokeWidth="2" />
          <path d="M28 40 L56 40 M42 26 L42 54" stroke="#7C2D12" strokeWidth="1.5" />
        </svg>
      );
  }
}

/* ============================================================================
 * TRẠM 01: A.I, A.II & B.I (PHÁT ÂM /e/–/æ/ & 12 HÌNH MÔN THỂ THAO · TR.28–30)
 * ============================================================================ */
function Station1PhoneticsSports() {
  const [sortMap, setSortMap] = useState<Record<string, 'e' | 'ae'>>({});
  const [sortChecked, setSortChecked] = useState(false);

  const [a2Sel, setA2Sel] = useState<Record<string, number>>({});
  const [a2Checked, setA2Checked] = useState(false);

  const [picVals, setPicVals] = useState<Record<string, string>>({});
  const [picChecked, setPicChecked] = useState(false);

  const sortScore = U8_EX_A1_SORT.filter((w) => sortMap[w.id] === w.sound).length;
  const a2Score = U8_EX_A2_MCQ.filter((q) => a2Sel[q.id] === q.correctIndex).length;
  const picScore = U8_EX_B1_PICS.filter((p) =>
    matchesAccepted(picVals[p.id] ?? '', p.accepted)
  ).length;

  return (
    <div className="space-y-6">
      {/* A.I Sort 20 words */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              A.I · Phân loại 20 từ vào cột /e/ và /æ/ · Tr.28–29
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Put the words in the correct column according to the underlined part
            </h3>
          </div>
          {sortChecked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {sortScore}/{U8_EX_A1_SORT.length} đúng
            </span>
          )}
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {U8_EX_A1_SORT.map((item) => {
            const picked = sortMap[item.id];
            const right = sortChecked && picked === item.sound;
            const wrong = sortChecked && picked !== item.sound;
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3 space-y-2 transition-colors ${
                  right
                    ? 'border-emerald-400 bg-emerald-50/70'
                    : wrong
                      ? 'border-rose-300 bg-rose-50/70'
                      : 'border-slate-200 bg-slate-50/60'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-display text-sm font-bold text-slate-900">
                    {item.word}
                  </span>
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.word)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-orange-700"
                    title="Nghe phát âm"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    [
                      { id: 'e', label: '/e/' },
                      { id: 'ae', label: '/æ/' },
                    ] as const
                  ).map((col) => (
                    <button
                      key={col.id}
                      type="button"
                      onClick={() => {
                        setSortMap((prev) => ({ ...prev, [item.id]: col.id }));
                        setSortChecked(false);
                      }}
                      className={`rounded-lg border py-1 font-ipa text-xs font-bold transition-colors ${
                        picked === col.id
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {col.label}
                    </button>
                  ))}
                </div>
                {sortChecked && (
                  <p className="text-[11px] text-slate-600">
                    <span className="font-ipa font-bold text-orange-800">{item.ipa}</span> ·{' '}
                    {item.vi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSortChecked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài A.I
          </button>
          <button
            type="button"
            onClick={() => {
              setSortMap({});
              setSortChecked(false);
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
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              A.II · Trắc nghiệm tìm từ phát âm khác (10 câu) · Tr.29
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Choose the word having the underlined part pronounced differently
            </h3>
          </div>
          {a2Checked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {a2Score}/{U8_EX_A2_MCQ.length} đúng
            </span>
          )}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U8_EX_A2_MCQ.map((q) => (
            <div
              key={q.id}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2.5"
            >
              <p className="text-xs font-bold text-slate-800">
                <span className="text-orange-700 mr-1.5">Câu {q.num}.</span>
                {q.prompt}
              </p>
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
                              : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}. {renderUnderlinedOption(opt)}
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
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài A.II
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

      {/* B.I 12 Sports Pictures */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              B.I · Gọi tên 12 môn thể thao &amp; trò chơi qua hình minh họa · Tr.29–30
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Match the 12 pictures with the correct sports &amp; games in the box
            </h3>
          </div>
          {picChecked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {picScore}/{U8_EX_B1_PICS.length} đúng
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 rounded-xl border border-orange-200 bg-orange-50/60 p-3">
          {U8_EX_B1_BOX.map((w) => (
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

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {U8_EX_B1_PICS.map((pic) => {
            const val = picVals[pic.id] ?? '';
            const ok = picChecked && matchesAccepted(val, pic.accepted);
            const bad = picChecked && !ok;
            return (
              <div
                key={pic.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Hình {pic.num}</span>
                  <span className="text-[11px] font-medium text-slate-500 truncate max-w-[140px]">
                    {pic.hintVi}
                  </span>
                </div>
                <SportIllustrationSvg kind={pic.svgKey} />
                <select
                  value={val}
                  onChange={(e) => {
                    setPicVals((prev) => ({ ...prev, [pic.id]: e.target.value }));
                    setPicChecked(false);
                  }}
                  className={`w-full rounded-lg border px-2.5 py-1.5 text-xs font-semibold focus:outline-none ${
                    ok
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                      : bad
                        ? 'border-rose-300 bg-rose-50 text-rose-950'
                        : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                  }`}
                >
                  <option value="">— Chọn môn thể thao —</option>
                  {U8_EX_B1_BOX.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                  {pic.num === 12 && <option value="basketball">basketball (bóng rổ)</option>}
                </select>
                {picChecked && (
                  <p className="text-[11px] text-slate-600">
                    <strong className={ok ? 'text-emerald-800' : 'text-rose-800'}>
                      {pic.answer}
                    </strong>{' '}
                    ({pic.vi})
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setPicChecked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài B.I
          </button>
          <button
            type="button"
            onClick={() => {
              setPicVals({});
              setPicChecked(false);
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
 * TRẠM 02: DO / GO / PLAY, V-ING & ĐỘNG TỪ THỂ THAO (B.II–B.V · TR.30–31)
 * ============================================================================ */
function Station2DoGoPlay() {
  const [colSel, setColSel] = useState<Record<string, 'do' | 'go' | 'play'>>({});
  const [b2Checked, setB2Checked] = useState(false);

  const [b3Vals, setB3Vals] = useState<Record<string, string>>({});
  const [b3Checked, setB3Checked] = useState(false);

  const [b4Vals, setB4Vals] = useState<Record<string, string>>({});
  const [b4Checked, setB4Checked] = useState(false);

  const [b5Vals, setB5Vals] = useState<Record<string, string>>({});
  const [b5Checked, setB5Checked] = useState(false);

  const b2Score = U8_EX_B2_CLASSIFY.filter((w) => colSel[w.id] === w.col).length;
  const b3Score = U8_EX_B3_DO_PLAY.filter((it) =>
    matchesAccepted(b3Vals[it.id] ?? '', it.accepted)
  ).length;
  const b4Score = U8_EX_B4_VING.filter((it) =>
    matchesAccepted(b4Vals[it.id] ?? '', it.accepted)
  ).length;
  const b5Score = U8_EX_B5_ACTION.filter((it) =>
    matchesAccepted(b5Vals[it.id] ?? '', it.accepted)
  ).length;

  return (
    <div className="space-y-6">
      {/* B.II Classify 20 words into DO / GO / PLAY */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              B.II · Phân loại 20 hoạt động vào 3 cột DO / GO / PLAY · Tr.30
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Mẹo nhanh: PLAY + bóng/đối kháng · GO + V-ing · DO + võ/tập luyện cá nhân
            </h3>
          </div>
          {b2Checked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {b2Score}/{U8_EX_B2_CLASSIFY.length} đúng
            </span>
          )}
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {U8_EX_B2_CLASSIFY.map((item) => {
            const picked = colSel[item.id];
            const right = b2Checked && picked === item.col;
            const wrong = b2Checked && picked !== item.col;
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3 space-y-2 ${
                  right
                    ? 'border-emerald-400 bg-emerald-50/70'
                    : wrong
                      ? 'border-rose-300 bg-rose-50/70'
                      : 'border-slate-200 bg-slate-50/60'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-display text-sm font-bold text-slate-900">{item.word}</span>
                  <button
                    type="button"
                    onClick={() => speakEnglish(`${item.col} ${item.word}`)}
                    className="flex h-6 w-6 items-center justify-center rounded-md bg-white border border-slate-200 text-slate-600 hover:text-orange-700"
                    title="Nghe cụm từ"
                  >
                    <Volume2 className="h-3 w-3" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {(['do', 'go', 'play'] as const).map((col) => (
                    <button
                      key={col}
                      type="button"
                      onClick={() => {
                        setColSel((prev) => ({ ...prev, [item.id]: col }));
                        setB2Checked(false);
                      }}
                      className={`rounded-lg border py-1 text-xs font-bold uppercase transition-colors ${
                        picked === col
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {col}
                    </button>
                  ))}
                </div>
                {b2Checked && (
                  <p className="text-[11px] text-slate-600">
                    Đúng: <strong className="uppercase text-orange-800">{item.col}</strong> {item.word} ({item.vi})
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
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài B.II
          </button>
          <button
            type="button"
            onClick={() => {
              setColSel({});
              setB2Checked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* B.III Correct form of DO or PLAY */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              B.III · Chia dạng đúng của DO hoặc PLAY (8 câu) · Tr.30–31
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Complete the sentences with the correct form of do or play
            </h3>
          </div>
          {b3Checked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {b3Score}/{U8_EX_B3_DO_PLAY.length} đúng
            </span>
          )}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U8_EX_B3_DO_PLAY.map((it) => {
            const val = b3Vals[it.id] ?? '';
            const ok = b3Checked && matchesAccepted(val, it.accepted);
            const bad = b3Checked && !ok;
            return (
              <div key={it.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
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
                    setB3Vals((prev) => ({ ...prev, [it.id]: e.target.value }));
                    setB3Checked(false);
                  }}
                  placeholder="do / does / did / play / plays / playing / played..."
                  className={`w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none ${
                    ok
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                      : bad
                        ? 'border-rose-300 bg-rose-50 text-rose-950'
                        : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                  }`}
                />
                {b3Checked && (
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
            onClick={() => setB3Checked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài B.III
          </button>
          <button
            type="button"
            onClick={() => {
              setB3Vals({});
              setB3Checked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* B.IV V-ing & B.V Ball Action Verbs */}
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                B.IV · Điền V-ing (6 câu) · Tr.31
              </p>
              <h3 className="font-display text-base font-bold text-slate-900 mt-0.5">
                Sau like / love / enjoy / hate + V-ing
              </h3>
            </div>
            {b4Checked && (
              <span className="font-ipa text-xs font-extrabold text-orange-700 tabular-nums">
                {b4Score}/{U8_EX_B4_VING.length}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs font-bold text-orange-900">
            {U8_EX_B4_VING_BOX.map((w) => (
              <span key={w} className="rounded-md bg-orange-50 border border-orange-200 px-2 py-0.5">
                {w} → V-ing
              </span>
            ))}
          </div>
          <div className="space-y-2.5">
            {U8_EX_B4_VING.map((it) => {
              const val = b4Vals[it.id] ?? '';
              const ok = b4Checked && matchesAccepted(val, it.accepted);
              const bad = b4Checked && !ok;
              return (
                <div key={it.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                  <p className="text-xs sm:text-sm font-medium text-slate-900">
                    <span className="font-bold text-orange-700 mr-1">{it.num}.</span>
                    {it.before}
                    <span className="font-bold text-orange-700">______</span>
                    {it.after}
                  </p>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => {
                      setB4Vals((prev) => ({ ...prev, [it.id]: e.target.value }));
                      setB4Checked(false);
                    }}
                    placeholder="Nhập dạng V-ing..."
                    className={`w-full rounded-lg border px-2.5 py-1.5 text-xs sm:text-sm focus:outline-none ${
                      ok
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                        : bad
                          ? 'border-rose-300 bg-rose-50 text-rose-950'
                          : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                    }`}
                  />
                  {b4Checked && (
                    <p className="text-[11px] text-slate-600">
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
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setB4Checked(true)}
              className="rounded-xl bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-700"
            >
              Chấm B.IV
            </button>
            <button
              type="button"
              onClick={() => {
                setB4Vals({});
                setB4Checked(false);
              }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              Làm lại
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                B.V · 6 Động từ chơi bóng (6 câu) · Tr.31
              </p>
              <h3 className="font-display text-base font-bold text-slate-900 mt-0.5">
                throw · kick · hit · bounce · catch · pick up
              </h3>
            </div>
            {b5Checked && (
              <span className="font-ipa text-xs font-extrabold text-orange-700 tabular-nums">
                {b5Score}/{U8_EX_B5_ACTION.length}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {U8_EX_B5_ACTION_BOX.map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => speakEnglish(w)}
                className="inline-flex items-center gap-1 rounded-md bg-orange-50 border border-orange-200 px-2 py-0.5 text-xs font-bold text-orange-900 hover:bg-orange-100"
              >
                <span>{w}</span>
                <Volume2 className="h-3 w-3 text-orange-600" />
              </button>
            ))}
          </div>
          <div className="space-y-2.5">
            {U8_EX_B5_ACTION.map((it) => {
              const val = b5Vals[it.id] ?? '';
              const ok = b5Checked && matchesAccepted(val, it.accepted);
              const bad = b5Checked && !ok;
              return (
                <div key={it.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                  <p className="text-xs sm:text-sm font-medium text-slate-900">
                    <span className="font-bold text-orange-700 mr-1">{it.num}.</span>
                    {it.before}
                    <span className="font-bold text-orange-700">______</span>
                    {it.after}
                  </p>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => {
                      setB5Vals((prev) => ({ ...prev, [it.id]: e.target.value }));
                      setB5Checked(false);
                    }}
                    placeholder="Chọn 1 động từ trong khung..."
                    className={`w-full rounded-lg border px-2.5 py-1.5 text-xs sm:text-sm focus:outline-none ${
                      ok
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                        : bad
                          ? 'border-rose-300 bg-rose-50 text-rose-950'
                          : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                    }`}
                  />
                  {b5Checked && (
                    <p className="text-[11px] text-slate-600">
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
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setB5Checked(true)}
              className="rounded-xl bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-700"
            >
              Chấm B.V
            </button>
            <button
              type="button"
              onClick={() => {
                setB5Vals({});
                setB5Checked(false);
              }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              Làm lại
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ============================================================================
 * TRẠM 03: BẢNG 29 ĐỘNG TỪ QUÁ KHỨ, B.VIII & TRUYỆN BÓNG ĐÁ B.XII (TR.31–33, 36)
 * ============================================================================ */
function Station3PastVerbsStory() {
  const [vVals, setVVals] = useState<Record<string, string>>({});
  const [vChecked, setVChecked] = useState(false);

  const [b8Vals, setB8Vals] = useState<Record<string, string>>({});
  const [b8Checked, setB8Checked] = useState(false);

  const [b12Vals, setB12Vals] = useState<Record<string, string>>({});
  const [b12Checked, setB12Checked] = useState(false);

  const vScore = U8_EX_B6_VERBS.filter((v) => matchesAccepted(vVals[v.id] ?? '', v.accepted)).length;
  const b8Score = U8_EX_B8_PAST_FILL.filter((it) =>
    matchesAccepted(b8Vals[it.id] ?? '', it.accepted)
  ).length;
  const b12Score = U8_EX_B12_STORY_BLANKS.filter((it) =>
    matchesAccepted(b12Vals[it.id] ?? '', it.accepted)
  ).length;

  const regVerbs = U8_EX_B6_VERBS.filter((v) => v.type === 'regular');
  const irrVerbs = U8_EX_B6_VERBS.filter((v) => v.type === 'irregular');

  return (
    <div className="space-y-6">
      {/* B.VI 29 Past Simple Verbs Table */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              B.VI · Bảng viết dạng Quá khứ đơn của 29 động từ (17 Có quy tắc · 12 Bất quy tắc) · Tr.31–32
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Write the past simple form of the following verbs
            </h3>
          </div>
          {vChecked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {vScore}/{U8_EX_B6_VERBS.length} đúng
            </span>
          )}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Regular Column */}
          <div className="rounded-xl border border-sky-200 bg-sky-50/30 p-4 space-y-2.5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
              17 Động từ có quy tắc (V-ed) · VD: to help → helped
            </p>
            <div className="space-y-2">
              {regVerbs.map((v) => {
                const val = vVals[v.id] ?? '';
                const ok = vChecked && matchesAccepted(val, v.accepted);
                const bad = vChecked && !ok;
                return (
                  <div
                    key={v.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white border border-slate-200 px-3 py-1.5"
                  >
                    <div className="min-w-0">
                      <span className="font-display text-xs sm:text-sm font-bold text-slate-900">
                        {v.base}
                      </span>
                      <span className="ml-1.5 text-[11px] text-slate-500">({v.vi})</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="text"
                        value={val}
                        onChange={(e) => {
                          setVVals((prev) => ({ ...prev, [v.id]: e.target.value }));
                          setVChecked(false);
                        }}
                        placeholder="V-ed..."
                        className={`w-32 rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none ${
                          ok
                            ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                            : bad
                              ? 'border-rose-300 bg-rose-50 text-rose-950'
                              : 'border-slate-200 bg-slate-50 text-slate-900 focus:border-sky-500'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => speakEnglish(v.accepted[0])}
                        className="flex h-7 w-7 items-center justify-center rounded-md bg-sky-50 text-sky-700 hover:bg-sky-100"
                        title="Nghe dạng quá khứ"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    {vChecked && (
                      <p className="w-full text-[11px] text-slate-600">
                        <strong className={ok ? 'text-emerald-800' : 'text-rose-800'}>
                          {v.past}
                        </strong>{' '}
                        — {v.ruleVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Irregular Column */}
          <div className="rounded-xl border border-orange-200 bg-orange-50/30 p-4 space-y-2.5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-orange-800">
              12 Động từ bất quy tắc (V2) · VD: to have → had
            </p>
            <div className="space-y-2">
              {irrVerbs.map((v) => {
                const val = vVals[v.id] ?? '';
                const ok = vChecked && matchesAccepted(val, v.accepted);
                const bad = vChecked && !ok;
                return (
                  <div
                    key={v.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white border border-slate-200 px-3 py-1.5"
                  >
                    <div className="min-w-0">
                      <span className="font-display text-xs sm:text-sm font-bold text-slate-900">
                        {v.base}
                      </span>
                      <span className="ml-1.5 text-[11px] text-slate-500">({v.vi})</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="text"
                        value={val}
                        onChange={(e) => {
                          setVVals((prev) => ({ ...prev, [v.id]: e.target.value }));
                          setVChecked(false);
                        }}
                        placeholder="V2..."
                        className={`w-32 rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none ${
                          ok
                            ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                            : bad
                              ? 'border-rose-300 bg-rose-50 text-rose-950'
                              : 'border-slate-200 bg-slate-50 text-slate-900 focus:border-orange-500'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => speakEnglish(v.accepted[0])}
                        className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-50 text-orange-700 hover:bg-orange-100"
                        title="Nghe dạng quá khứ"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    {vChecked && (
                      <p className="w-full text-[11px] text-slate-600">
                        <strong className={ok ? 'text-emerald-800' : 'text-rose-800'}>
                          {v.past}
                        </strong>{' '}
                        — {v.ruleVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setVChecked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bảng 29 động từ
          </button>
          <button
            type="button"
            onClick={() => {
              const filled: Record<string, string> = {};
              U8_EX_B6_VERBS.forEach((v) => {
                filled[v.id] = v.past;
              });
              setVVals(filled);
              setVChecked(true);
            }}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            Hiện cả 29 đáp án
          </button>
          <button
            type="button"
            onClick={() => {
              setVVals({});
              setVChecked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* B.VIII 15 Past Simple Fill-in-the-Blanks */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              B.VIII · Chia động từ trong ngoặc ở thì Quá khứ đơn (15 câu) · Tr.33
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Complete the sentences with the past simple of the verbs in brackets
            </h3>
          </div>
          {b8Checked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {b8Score}/{U8_EX_B8_PAST_FILL.length} đúng
            </span>
          )}
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {U8_EX_B8_PAST_FILL.map((it) => {
            const val = b8Vals[it.id] ?? '';
            const ok = b8Checked && matchesAccepted(val, it.accepted);
            const bad = b8Checked && !ok;
            return (
              <div key={it.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                  <span className="font-bold text-orange-700 mr-1.5">{it.num}.</span>
                  {it.before}
                  <span className="font-bold text-orange-700">______</span>
                  {it.after}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => {
                    setB8Vals((prev) => ({ ...prev, [it.id]: e.target.value }));
                    setB8Checked(false);
                  }}
                  placeholder="V-ed / V2..."
                  className={`w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none ${
                    ok
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-950'
                      : bad
                        ? 'border-rose-300 bg-rose-50 text-rose-950'
                        : 'border-slate-200 bg-white text-slate-900 focus:border-orange-500'
                  }`}
                />
                {b8Checked && (
                  <p className="text-[11px] text-slate-600">
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
            onClick={() => setB8Checked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm bài B.VIII
          </button>
          <button
            type="button"
            onClick={() => {
              setB8Vals({});
              setB8Checked(false);
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* B.XII Funny Football Story (14 blanks) */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              B.XII · Câu chuyện hài &ldquo;Trận đấu quên mang bóng!&rdquo; (14 chỗ trống) · Tr.36
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Complete the funny story with the Past Simple of the verbs in brackets
            </h3>
          </div>
          {b12Checked && (
            <span className="font-ipa text-sm font-extrabold text-orange-700 tabular-nums">
              {b12Score}/{U8_EX_B12_STORY_BLANKS.length} đúng
            </span>
          )}
        </div>

        <div className="rounded-2xl border border-orange-200 bg-orange-50/40 p-4 text-sm leading-9 text-slate-800">
          {U8_EX_B12_STORY_PARTS.map((part, idx) => {
            const blank = U8_EX_B12_STORY_BLANKS[idx];
            const val = blank ? b12Vals[blank.id] ?? '' : '';
            const ok = b12Checked && blank && matchesAccepted(val, blank.accepted);
            const bad = b12Checked && blank && !ok;
            return (
              <span key={idx}>
                {part}
                {blank && (
                  <span className="inline-flex items-center gap-1 mx-1">
                    <span className="text-xs font-bold text-orange-700">({blank.before})</span>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setB12Vals((prev) => ({ ...prev, [blank.id]: e.target.value }));
                        setB12Checked(false);
                      }}
                      className={`w-24 rounded-md border px-2 py-0.5 text-xs font-bold focus:outline-none ${
                        ok
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                          : bad
                            ? 'border-rose-300 bg-rose-50 text-rose-900'
                            : 'border-slate-300 bg-white text-slate-900 focus:border-orange-500'
                      }`}
                    />
                    {b12Checked && bad && (
                      <span className="text-[11px] font-bold text-rose-700">
                        [{blank.displayAnswer}]
                      </span>
                    )}
                  </span>
                )}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setB12Checked(true)}
            className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
          >
            Chấm truyện B.XII
          </button>
          <button
            type="button"
            onClick={() => {
              const filled: Record<string, string> = {};
              U8_EX_B12_STORY_BLANKS.forEach((b) => {
                filled[b.id] = b.displayAnswer;
              });
              setB12Vals(filled);
              setB12Checked(true);
            }}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            Hiện đáp án mẫu
          </button>
          <button
            type="button"
            onClick={() => {
              setB12Vals({});
              setB12Checked(false);
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
 * MAIN EXPORT: UNIT 8 WORKBOOK (TẬP 2 · TRANG 22–41 · 7 TRẠM TƯƠNG TÁC)
 * ============================================================================ */
export function Unit8Workbook({
  initialStation = 'phonetics_sports',
}: {
  initialStation?: Unit8StationId;
}) {
  const [station, setStation] = useState<Unit8StationId>(initialStation);

  useEffect(() => {
    setStation(initialStation);
  }, [initialStation]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <section className="rounded-2xl border border-orange-200 bg-orange-50/60 p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-orange-800">
          Sách Bài Tập Tương Tác · Unit 8: Sports and Games (Tập 2 · Trang 22–41)
        </p>
        <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
          7 Trạm Chinh Phục Trọn Bộ Bài Tập A–D Unit 8
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Gồm 12 hình minh họa thể thao, bảng 20 từ Do/Go/Play, 29 động từ Quá khứ đơn, 36 câu chuyển đổi &amp; đặt câu hỏi, 28 câu Mệnh lệnh &amp; Giới từ, 4 bài đọc hiểu và hướng dẫn viết đoạn văn.
        </p>

        {/* Station Selector */}
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {STATIONS.map((st) => {
            const active = station === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setStation(st.id)}
                className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                  active
                    ? 'border-orange-600 bg-orange-600 text-white shadow-2xs'
                    : 'border-orange-200/80 bg-white text-slate-800 hover:bg-orange-100/60'
                }`}
              >
                <div className="min-w-0">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      active ? 'text-orange-100' : 'text-orange-700'
                    }`}
                  >
                    Trạm {st.num} · {st.pages}
                  </p>
                  <p className="text-xs font-bold truncate mt-0.5">{st.label}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Station Content */}
      {station === 'phonetics_sports' && <Station1PhoneticsSports />}
      {station === 'do_go_play' && <Station2DoGoPlay />}
      {station === 'past_verbs_story' && <Station3PastVerbsStory />}
      {station === 'past_transform' && <Unit8Station4Transform />}
      {station === 'imperatives_preps' && <Unit8Station5Imperatives />}
      {station === 'reading' && <Unit8Station6Reading />}
      {station === 'writing' && <Unit8Station7Writing />}
    </div>
  );
}
