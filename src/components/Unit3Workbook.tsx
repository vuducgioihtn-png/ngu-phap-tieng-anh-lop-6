import { useEffect, useState } from 'react';
import {
  CheckCircle2,
  RotateCcw,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  U3_EX1_BP_PICS,
  U3_EX2_1_GROUPS_META,
  U3_EX2_1_WORDS,
  U3_EX2_2_BODY_PARTS,
  U3_EX2_3_OPPOSITES,
  U3_EX2_3_OPPOSITES_BANK,
  U3_EX2_4_TO_HAVE,
  U3_EX2_5_TO_BE,
  U3_EX2_6_OPPOSITE_REPLY,
  U3_EX2_7_BE_HAVE_PARAS,
  U3_EX2_8_ADJ_BOX,
  U3_EX2_8_PERSONALITY,
  U3_EX2_9_ACTIONS,
  U3_EX2_9_BOX,
  U3_EX2_10_BOX,
  U3_EX2_10_FUTURE_CONT,
  U3_EX2_11_SIMPLE_VS_CONT,
  type ActionSceneKey,
  type BpIconKey,
  type DescGroupKey,
} from '../data/unit3Pages63To83';
import { speakEnglish } from '../utils/speech';
import {
  Unit3FullTestSection,
  Unit3Station4,
  Unit3Station5,
  Unit3Station6,
} from './Unit3Pages71To83';

export type Unit3StationId =
  | 'phonetics_vocab'
  | 'be_have'
  | 'tenses'
  | 'mcq_dialogue'
  | 'reading'
  | 'writing'
  | 'unit3_test';

interface Unit3WorkbookProps {
  initialStation?: Unit3StationId;
}

const STATIONS: { id: Unit3StationId; code: string; label: string; pages: string }[] = [
  { id: 'phonetics_vocab', code: 'Trạm 01', label: '/b/-/p/ & Ngoại hình', pages: 'Tr.65–67' },
  { id: 'be_have', code: 'Trạm 02', label: 'BE / HAVE & Tính cách', pages: 'Tr.67–69' },
  { id: 'tenses', code: 'Trạm 03', label: 'HTTD & HTĐ', pages: 'Tr.69–71' },
  { id: 'mcq_dialogue', code: 'Trạm 04', label: 'Trắc nghiệm & Hội thoại', pages: 'Tr.71–72' },
  { id: 'reading', code: 'Trạm 05', label: 'Đọc hiểu (3 bài)', pages: 'Tr.73–74' },
  { id: 'writing', code: 'Trạm 06', label: 'Viết câu & Đoạn văn', pages: 'Tr.74–76' },
  { id: 'unit3_test', code: 'Trạm 07', label: 'TEST UNIT 3 (13 phần)', pages: 'Tr.77–83' },
];

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

/* ==================== CRISP INLINE SVG ILLUSTRATIONS (BÀI I.1: 12 /b/-/p/ PICS) ==================== */
function BpPictureSvg({ iconKey }: { iconKey: BpIconKey }) {
  switch (iconKey) {
    case 'present':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <rect x="14" y="26" width="36" height="28" rx="4" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
          <rect x="11" y="20" width="42" height="9" rx="3" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
          <line x1="32" y1="20" x2="32" y2="54" stroke="#E11D48" strokeWidth="4" />
          <path d="M32 20c-6-9-15-6-11 0h11zm0 0c6-9 15-6 11 0H32z" fill="#FDA4AF" stroke="#E11D48" strokeWidth="2" />
        </svg>
      );
    case 'picture':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <rect x="10" y="14" width="44" height="36" rx="4" fill="#EFF6FF" stroke="#7C3AED" strokeWidth="3" />
          <circle cx="24" cy="26" r="5" fill="#FBBF24" />
          <path d="M13 46l13-14 10 9 7-7 8 12H13z" fill="#34D399" stroke="#059669" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case 'blackboard':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <rect x="8" y="14" width="48" height="34" rx="3" fill="#1E293B" stroke="#B45309" strokeWidth="3.5" />
          <text x="16" y="30" fontSize="9" fontWeight="700" fill="#F8FAFC">ABC</text>
          <path d="M16 38h24M44 48h8" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'pear':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <path d="M32 16c-5 0-8 5-9 12-1 6-6 9-6 16 0 7 6 12 15 12s15-5 15-12c0-7-5-10-6-16-1-7-4-12-9-12z" fill="#BEF264" stroke="#65A30D" strokeWidth="2.2" />
          <path d="M32 16c0-4 2-7 5-8" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M34 12c5-2 9 0 9 4-4 1-7 0-9-4z" fill="#22C55E" />
        </svg>
      );
    case 'banana':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <path d="M16 44c12 8 32 1 36-22 1-4-2-6-4-4-5 12-16 20-31 19-3 0-4 5-1 7z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M49 17l3-4" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'piano':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <rect x="10" y="16" width="44" height="32" rx="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="21" y1="16" x2="21" y2="48" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="32" y1="16" x2="32" y2="48" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="43" y1="16" x2="43" y2="48" stroke="#94A3B8" strokeWidth="1.5" />
          <rect x="17" y="16" width="7" height="19" rx="1.5" fill="#0F172A" />
          <rect x="29" y="16" width="7" height="19" rx="1.5" fill="#0F172A" />
          <rect x="40" y="16" width="7" height="19" rx="1.5" fill="#0F172A" />
        </svg>
      );
    case 'bath':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <path d="M12 32h40v8c0 6-5 10-12 10H24c-7 0-12-4-12-10v-8z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M18 32V18a5 5 0 0 1 10 0" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="34" cy="26" r="4" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="43" cy="24" r="3" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M20 50l-2 5M44 50l2 5" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'pool':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <rect x="10" y="22" width="44" height="28" rx="6" fill="#38BDF8" stroke="#0369A1" strokeWidth="2.2" />
          <path d="M15 33c4-3 8 3 12 0s8 3 12 0 8 3 10 0M15 41c4-3 8 3 12 0s8 3 12 0 8 3 10 0" stroke="#E0F2FE" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M20 14v12M28 14v12M20 18h8M20 22h8" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'building':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <rect x="16" y="10" width="32" height="44" rx="2" fill="#E2E8F0" stroke="#334155" strokeWidth="2.2" />
          <rect x="22" y="16" width="6" height="6" fill="#38BDF8" />
          <rect x="36" y="16" width="6" height="6" fill="#38BDF8" />
          <rect x="22" y="26" width="6" height="6" fill="#38BDF8" />
          <rect x="36" y="26" width="6" height="6" fill="#38BDF8" />
          <rect x="22" y="36" width="6" height="6" fill="#38BDF8" />
          <rect x="36" y="36" width="6" height="6" fill="#38BDF8" />
          <rect x="28" y="45" width="8" height="9" fill="#475569" />
        </svg>
      );
    case 'butterfly':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <ellipse cx="21" cy="27" rx="11" ry="9" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="2" />
          <ellipse cx="43" cy="27" rx="11" ry="9" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="2" />
          <ellipse cx="23" cy="40" rx="8" ry="7" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
          <ellipse cx="41" cy="40" rx="8" ry="7" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
          <rect x="30" y="20" width="4" height="26" rx="2" fill="#1E293B" />
          <path d="M31 20l-5-7M33 20l5-7" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'bike':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <circle cx="18" cy="42" r="10" stroke="#0F172A" strokeWidth="2.5" fill="#F1F5F9" />
          <circle cx="46" cy="42" r="10" stroke="#0F172A" strokeWidth="2.5" fill="#F1F5F9" />
          <path d="M18 42l12-16h12l4 16M30 26l4 16H18M42 26l2-6h5M25 22h8" stroke="#E11D48" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'park':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <rect x="8" y="44" width="48" height="10" rx="4" fill="#86EFAC" />
          <rect x="19" y="30" width="4" height="16" fill="#92400E" />
          <circle cx="21" cy="24" r="10" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
          <rect x="34" y="38" width="18" height="4" rx="1" fill="#B45309" />
          <path d="M36 42v6M50 42v6" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
  }
}

/* ==================== CRISP ACTION SCENE SVG (BÀI II.9: 10 PRESENT CONTINUOUS SCENES) ==================== */
function ActionSceneSvg({ sceneKey }: { sceneKey: ActionSceneKey }) {
  switch (sceneKey) {
    case 'listen':
      return (
        <svg viewBox="0 0 80 56" className="h-12 w-16 shrink-0" fill="none" aria-hidden="true">
          <rect width="80" height="56" rx="10" fill="#F5F3FF" />
          <circle cx="40" cy="30" r="11" fill="#FDE68A" stroke="#7C3AED" strokeWidth="2" />
          <path d="M26 30a14 14 0 0 1 28 0" stroke="#7C3AED" strokeWidth="3" />
          <rect x="23" y="27" width="5" height="9" rx="2" fill="#7C3AED" />
          <rect x="52" y="27" width="5" height="9" rx="2" fill="#7C3AED" />
          <text x="60" y="19" fontSize="12" fill="#7C3AED">♪</text>
        </svg>
      );
    case 'cook':
      return (
        <svg viewBox="0 0 80 56" className="h-12 w-16 shrink-0" fill="none" aria-hidden="true">
          <rect width="80" height="56" rx="10" fill="#FFF7ED" />
          <rect x="22" y="28" width="32" height="16" rx="4" fill="#FB923C" stroke="#C2410C" strokeWidth="2" />
          <path d="M54 32h9M30 22c0-4 3-4 3-8M40 22c0-4 3-4 3-8" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'wash':
      return (
        <svg viewBox="0 0 80 56" className="h-12 w-16 shrink-0" fill="none" aria-hidden="true">
          <rect width="80" height="56" rx="10" fill="#ECFEFF" />
          <circle cx="38" cy="34" r="13" fill="#FFFFFF" stroke="#0891B2" strokeWidth="2.2" />
          <circle cx="38" cy="34" r="7" stroke="#67E8F9" strokeWidth="1.5" />
          <circle cx="56" cy="18" r="4" fill="#A5F3FC" stroke="#0891B2" strokeWidth="1.5" />
          <circle cx="23" cy="20" r="3" fill="#A5F3FC" stroke="#0891B2" strokeWidth="1.5" />
        </svg>
      );
    case 'play':
      return (
        <svg viewBox="0 0 80 56" className="h-12 w-16 shrink-0" fill="none" aria-hidden="true">
          <rect width="80" height="56" rx="10" fill="#ECFDF5" />
          <circle cx="40" cy="30" r="13" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <polygon points="40,23 45,27 43,34 37,34 35,27" fill="#0F172A" />
          <path d="M16 44h48" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'have_dinner':
      return (
        <svg viewBox="0 0 80 56" className="h-12 w-16 shrink-0" fill="none" aria-hidden="true">
          <rect width="80" height="56" rx="10" fill="#FEF3C7" />
          <rect x="14" y="34" width="52" height="6" rx="2" fill="#B45309" />
          <path d="M22 40v10M58 40v10" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="40" cy="32" rx="12" ry="4" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.8" />
          <circle cx="24" cy="22" r="5" fill="#F59E0B" />
          <circle cx="56" cy="22" r="5" fill="#F59E0B" />
        </svg>
      );
    case 'do_homework':
      return (
        <svg viewBox="0 0 80 56" className="h-12 w-16 shrink-0" fill="none" aria-hidden="true">
          <rect width="80" height="56" rx="10" fill="#EFF6FF" />
          <rect x="18" y="14" width="32" height="30" rx="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
          <path d="M24 23h18M24 30h14M24 37h10" stroke="#93C5FD" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M54 40l10-18 4 2-10 18-5 2 1-4z" fill="#FBBF24" stroke="#B45309" strokeWidth="1.5" />
        </svg>
      );
    case 'eat_burger':
      return (
        <svg viewBox="0 0 80 56" className="h-12 w-16 shrink-0" fill="none" aria-hidden="true">
          <rect width="80" height="56" rx="10" fill="#FEF2F2" />
          <path d="M22 28c0-9 36-9 36 0H22z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.8" />
          <rect x="20" y="29" width="40" height="4" rx="2" fill="#22C55E" />
          <rect x="21" y="33" width="38" height="5" rx="2" fill="#78350F" />
          <rect x="22" y="38" width="36" height="6" rx="3" fill="#F59E0B" stroke="#B45309" strokeWidth="1.8" />
        </svg>
      );
    case 'clean_floor':
      return (
        <svg viewBox="0 0 80 56" className="h-12 w-16 shrink-0" fill="none" aria-hidden="true">
          <rect width="80" height="56" rx="10" fill="#F0FDF4" />
          <line x1="48" y1="10" x2="36" y2="38" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
          <path d="M26 38h20l4 9H22l4-9z" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
          <path d="M16 49h48" stroke="#86EFAC" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'work':
      return (
        <svg viewBox="0 0 80 56" className="h-12 w-16 shrink-0" fill="none" aria-hidden="true">
          <rect width="80" height="56" rx="10" fill="#F8FAFC" />
          <path d="M24 32a16 14 0 0 1 32 0H24z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
          <rect x="20" y="32" width="40" height="4" rx="2" fill="#EAB308" />
          <circle cx="40" cy="43" r="5" fill="#94A3B8" />
        </svg>
      );
    case 'swim':
      return (
        <svg viewBox="0 0 80 56" className="h-12 w-16 shrink-0" fill="none" aria-hidden="true">
          <rect width="80" height="56" rx="10" fill="#E0F2FE" />
          <circle cx="48" cy="24" r="6" fill="#FDE68A" stroke="#0284C7" strokeWidth="1.8" />
          <path d="M24 30c8-6 14-4 18 0" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 38c6-4 12 4 18 0s12 4 18 0 12 4 20 0M12 46c6-4 12 4 18 0s12 4 18 0 12 4 20 0" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function Unit3Workbook({ initialStation = 'phonetics_vocab' }: Unit3WorkbookProps) {
  const [station, setStation] = useState<Unit3StationId>(initialStation);

  useEffect(() => {
    setStation(initialStation);
  }, [initialStation]);

  /* ---- Station 01 State ---- */
  const [bpChoices, setBpChoices] = useState<Record<number, 'p' | 'b'>>({});
  const [activeGroup, setActiveGroup] = useState<DescGroupKey>('build');
  const [wordGroupMap, setWordGroupMap] = useState<Record<number, DescGroupKey>>({});
  const [sortChecked, setSortChecked] = useState(false);
  const [bodyChoices, setBodyChoices] = useState<Record<number, 0 | 1>>({});
  const [oppChoices, setOppChoices] = useState<Record<number, string>>({});
  const [oppChecked, setOppChecked] = useState(false);

  /* ---- Station 02 State ---- */
  const [ex24, setEx24] = useState<Record<number, string>>({});
  const [ex24Checked, setEx24Checked] = useState(false);
  const [ex25, setEx25] = useState<Record<number, string>>({});
  const [ex25Checked, setEx25Checked] = useState(false);
  const [ex26, setEx26] = useState<Record<number, string>>({});
  const [ex26Checked, setEx26Checked] = useState(false);
  const [ex27, setEx27] = useState<Record<string, string>>({});
  const [ex27Checked, setEx27Checked] = useState(false);
  const [ex28, setEx28] = useState<Record<number, string>>({});
  const [ex28Checked, setEx28Checked] = useState(false);

  /* ---- Station 03 State ---- */
  const [ex29, setEx29] = useState<Record<number, string>>({});
  const [ex29Checked, setEx29Checked] = useState(false);
  const [ex210, setEx210] = useState<Record<string, string>>({});
  const [ex210Checked, setEx210Checked] = useState(false);
  const [ex211, setEx211] = useState<Record<number, string>>({});
  const [ex211Checked, setEx211Checked] = useState(false);

  const bpCorrectCount = U3_EX1_BP_PICS.filter((i) => bpChoices[i.id] === i.letter).length;
  const bWords = U3_EX1_BP_PICS.filter((i) => i.letter === 'b');
  const pWords = U3_EX1_BP_PICS.filter((i) => i.letter === 'p');

  const sortCorrectCount = U3_EX2_1_WORDS.filter((w) => {
    const g = wordGroupMap[w.id];
    return g ? w.acceptedGroups.includes(g) : false;
  }).length;

  return (
    <div className="space-y-6">
      {/* 7-Station Navigation Strip */}
      <div className="rounded-2xl border border-violet-200 bg-white p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Sách Chinh phục Ngữ pháp &amp; Bài tập Tập 1 · Unit 3: My Friends (Trang 63–83)
            </p>
            <h2 className="font-display text-lg font-extrabold text-slate-900">
              7 Trạm Thực hành &amp; Đề kiểm tra Unit 3
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {STATIONS.map((st) => {
            const active = station === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setStation(st.id)}
                className={`rounded-xl border px-3 py-2 text-left transition-colors ${
                  active
                    ? 'border-violet-600 bg-violet-600 text-white'
                    : 'border-slate-200 bg-slate-50/70 text-slate-800 hover:border-violet-300 hover:bg-violet-50/60'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`font-ipa text-[10px] font-bold ${
                      active ? 'text-violet-100' : 'text-violet-700'
                    }`}
                  >
                    {st.code}
                  </span>
                  <span
                    className={`text-[10px] font-medium ${
                      active ? 'text-violet-100' : 'text-slate-400'
                    }`}
                  >
                    {st.pages}
                  </span>
                </div>
                <p className="text-xs font-bold mt-0.5 truncate">{st.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ==================== STATION 01: /b/-/p/ & VOCAB (pp.65–67) ==================== */}
      {station === 'phonetics_vocab' && (
        <div className="space-y-6">
          {/* Bài I.1 & I.2: 12 SVG Pictures + Live 2-Column /b/ vs /p/ Sort */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài I.1 &amp; I.2 · Trang 65–66
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Điền chữ &ldquo;p&rdquo; hoặc &ldquo;b&rdquo; vào 12 bức tranh &amp; Phân loại âm /b/ – /p/
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-ipa text-xs font-bold text-violet-700 tabular-nums">
                  Đúng: {bpCorrectCount}/12
                </span>
                <button
                  type="button"
                  onClick={() => setBpChoices({})}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Làm lại
                </button>
              </div>
            </div>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {U3_EX1_BP_PICS.map((item) => {
                const chosen = bpChoices[item.id];
                const ok = chosen === item.letter;
                const displayWord = chosen ? `${chosen}${item.stem.slice(1)}` : item.stem;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3.5 flex flex-col items-center text-center gap-2 transition-colors ${
                      chosen
                        ? ok
                          ? 'border-emerald-300 bg-emerald-50/60'
                          : 'border-rose-300 bg-rose-50/60'
                        : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <div className="w-full flex items-center justify-between">
                      <span className="font-ipa text-[11px] font-bold text-slate-400">
                        #{item.id}
                      </span>
                      <button
                        type="button"
                        onClick={() => speakEnglish(item.word)}
                        className="rounded-md p-1 text-violet-700 hover:bg-violet-100"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <BpPictureSvg iconKey={item.iconKey} />
                    <div>
                      <p className="font-display text-sm font-extrabold text-slate-900">
                        {displayWord}
                      </p>
                      <p className="text-[11px] text-slate-500">{item.meaningVi}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 w-full mt-1">
                      {(['p', 'b'] as const).map((ltr) => {
                        const isPicked = chosen === ltr;
                        return (
                          <button
                            key={ltr}
                            type="button"
                            onClick={() => {
                              setBpChoices((prev) => ({ ...prev, [item.id]: ltr }));
                              speakEnglish(item.word);
                            }}
                            className={`rounded-lg border py-1 font-ipa text-xs font-bold transition-colors ${
                              isPicked
                                ? ltr === item.letter
                                  ? 'border-emerald-600 bg-emerald-600 text-white'
                                  : 'border-rose-500 bg-rose-500 text-white'
                                : 'border-slate-300 bg-white text-slate-800 hover:border-violet-400'
                            }`}
                          >
                            {ltr}
                          </button>
                        );
                      })}
                    </div>
                    {chosen && (
                      <p className={`font-ipa text-[11px] font-semibold ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {ok ? `Đúng! ${item.ipa}` : `Phải là "${item.letter}" (${item.word})`}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bài I.2: Automatic Live 2-Column /b/ vs /p/ Reference Table */}
            <div className="rounded-xl border border-violet-200 bg-violet-50/40 p-4 space-y-3">
              <p className="text-xs font-bold text-violet-900">
                Bài I.2 (Trang 66) — Bảng tổng hợp 2 cột âm /b/ (hữu thanh) và /p/ (vô thanh):
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-emerald-200 bg-white p-3.5">
                  <p className="font-ipa text-sm font-extrabold text-emerald-700 mb-2">
                    Cột /b/ — Rung cổ họng (6 từ)
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {bWords.map((w) => {
                      const unlocked = bpChoices[w.id] === 'b';
                      return (
                        <button
                          key={w.id}
                          type="button"
                          onClick={() => speakEnglish(w.word)}
                          className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold ${
                            unlocked
                              ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                              : 'border-slate-200 bg-slate-50 text-slate-600'
                          }`}
                        >
                          <span>{w.word}</span>
                          <span className="font-ipa text-[10px] text-slate-400">{w.ipa}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="rounded-xl border border-sky-200 bg-white p-3.5">
                  <p className="font-ipa text-sm font-extrabold text-sky-700 mb-2">
                    Cột /p/ — Bật hơi mạnh (6 từ)
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pWords.map((w) => {
                      const unlocked = bpChoices[w.id] === 'p';
                      return (
                        <button
                          key={w.id}
                          type="button"
                          onClick={() => speakEnglish(w.word)}
                          className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold ${
                            unlocked
                              ? 'border-sky-300 bg-sky-50 text-sky-900'
                              : 'border-slate-200 bg-slate-50 text-slate-600'
                          }`}
                        >
                          <span>{w.word}</span>
                          <span className="font-ipa text-[10px] text-slate-400">{w.ipa}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bài II.1: 27-Word 4-Group Sorter */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.1 · Trang 66
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Phân loại 27 tính từ miêu tả vào 4 nhóm (Build · Eyes · Hair · Appearance)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Bước 1: Chọn nhóm mục tiêu bên dưới → Bước 2: Chạm từng từ trong kho để xếp vào nhóm đó.
                </p>
              </div>
              <div className="flex items-center gap-2">
                {sortChecked && (
                  <span className="font-ipa text-xs font-bold text-emerald-700">
                    Đúng: {sortCorrectCount}/27
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setSortChecked(true)}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                >
                  Kiểm tra
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setWordGroupMap({});
                    setSortChecked(false);
                  }}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Làm lại
                </button>
              </div>
            </div>

            {/* Active Target Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {U3_EX2_1_GROUPS_META.map((grp) => {
                const isActive = activeGroup === grp.id;
                const count = Object.values(wordGroupMap).filter((v) => v === grp.id).length;
                return (
                  <button
                    key={grp.id}
                    type="button"
                    onClick={() => setActiveGroup(grp.id)}
                    className={`rounded-xl border-2 px-3 py-2.5 text-left transition-all ${
                      isActive
                        ? `${grp.colorCls} ring-2 ring-violet-500`
                        : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-bold">{grp.labelEn}</span>
                      <span className="font-ipa text-xs font-bold">{count}</span>
                    </div>
                    <p className="text-[11px] opacity-80">{grp.labelVi}</p>
                  </button>
                );
              })}
            </div>

            {/* Unassigned Word Bank */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5">
              <p className="text-xs font-semibold text-slate-600 mb-2">
                Kho từ vựng (chạm để xếp vào nhóm{' '}
                <strong className="text-violet-700 uppercase">{activeGroup}</strong>):
              </p>
              <div className="flex flex-wrap gap-1.5">
                {U3_EX2_1_WORDS.map((w) => {
                  const assigned = wordGroupMap[w.id];
                  if (assigned) return null;
                  return (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => {
                        setWordGroupMap((prev) => ({ ...prev, [w.id]: activeGroup }));
                        if (sortChecked) setSortChecked(false);
                      }}
                      title={w.meaningVi}
                      className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-800 hover:border-violet-500 hover:bg-violet-50"
                    >
                      {w.word}{' '}
                      <span className="text-[10px] font-normal text-slate-400">({w.meaningVi})</span>
                    </button>
                  );
                })}
                {Object.keys(wordGroupMap).length === U3_EX2_1_WORDS.length && (
                  <span className="text-xs font-semibold text-emerald-700">
                    Em đã xếp hết cả 27 từ! Nhấn &ldquo;Kiểm tra&rdquo; để xem kết quả.
                  </span>
                )}
              </div>
            </div>

            {/* 4 Buckets Display */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {U3_EX2_1_GROUPS_META.map((grp) => {
                const itemsInGrp = U3_EX2_1_WORDS.filter((w) => wordGroupMap[w.id] === grp.id);
                return (
                  <div
                    key={grp.id}
                    className={`rounded-xl border p-3 min-h-28 ${grp.colorCls}`}
                  >
                    <p className="font-display text-xs font-extrabold uppercase mb-2">
                      {grp.labelEn} · {grp.labelVi}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {itemsInGrp.map((w) => {
                        const ok = w.acceptedGroups.includes(grp.id);
                        return (
                          <button
                            key={w.id}
                            type="button"
                            onClick={() => {
                              setWordGroupMap((prev) => {
                                const copy = { ...prev };
                                delete copy[w.id];
                                return copy;
                              });
                              if (sortChecked) setSortChecked(false);
                            }}
                            className={`rounded-md border px-2 py-0.5 text-xs font-semibold ${
                              sortChecked
                                ? ok
                                  ? 'border-emerald-500 bg-emerald-100 text-emerald-950'
                                  : 'border-rose-500 bg-rose-100 text-rose-950'
                                : 'border-white/70 bg-white text-slate-900'
                            }`}
                            title="Chạm để gỡ ra"
                          >
                            {w.word}
                            {sortChecked && !ok && ` → ${w.primaryGroup}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.2: 10 Body-Part Choices */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.2 · Trang 66–67
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Chọn bộ phận cơ thể đúng trong câu (10 câu)
                </h3>
              </div>
              <span className="font-ipa text-xs font-bold text-violet-700">
                Đúng: {U3_EX2_2_BODY_PARTS.filter((i) => bodyChoices[i.id] === i.correctIndex).length}/10
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {U3_EX2_2_BODY_PARTS.map((item) => {
                const chosen = bodyChoices[item.id];
                const answered = chosen !== undefined;
                const ok = chosen === item.correctIndex;
                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
                  >
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed flex flex-wrap items-center gap-1.5">
                      <span className="font-ipa font-bold text-violet-700">{item.id}.</span>
                      <span>{item.before}</span>
                      {item.options.map((opt, idx) => {
                        const oIdx = idx as 0 | 1;
                        let cls = 'border-slate-300 bg-white text-slate-800 hover:border-violet-400';
                        if (answered) {
                          if (oIdx === item.correctIndex) cls = 'border-emerald-600 bg-emerald-600 text-white';
                          else if (oIdx === chosen) cls = 'border-rose-500 bg-rose-500 text-white';
                        }
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setBodyChoices((p) => ({ ...p, [item.id]: oIdx }))}
                            className={`rounded-md border px-2.5 py-0.5 font-ipa text-xs font-bold transition-colors ${cls}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                      <span>{item.after}</span>
                    </div>
                    {answered && (
                      <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                        {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.3: 15 Opposite Pairs Matching */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.3 · Trang 67
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Ghép 15 cặp tính từ trái nghĩa (Opposites)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setOppChecked(true)}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                >
                  Kiểm tra ({oppChecked ? `${U3_EX2_3_OPPOSITES.filter((i) => oppChoices[i.id] === i.answer).length}/15` : '15 cặp'})
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOppChoices({});
                    setOppChecked(false);
                  }}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Làm lại
                </button>
              </div>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {U3_EX2_3_OPPOSITES.map((item) => {
                const val = oppChoices[item.id] ?? '';
                const ok = val === item.answer;
                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="font-ipa text-xs font-bold text-violet-700 mr-1">
                          {item.id}.
                        </span>
                        <span className="font-display text-sm font-bold text-slate-900">
                          {item.left}
                        </span>
                        <span className="text-[11px] text-slate-500 ml-1">({item.leftVi})</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => speakEnglish(`${item.left}, ${item.answer}`)}
                        className="text-violet-700 hover:text-violet-900"
                        title="Nghe cặp từ"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <select
                      value={val}
                      onChange={(e) => {
                        setOppChoices((p) => ({ ...p, [item.id]: e.target.value }));
                        if (oppChecked) setOppChecked(false);
                      }}
                      className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold focus:outline-none ${
                        oppChecked
                          ? ok
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white text-slate-800 focus:border-violet-500'
                      }`}
                    >
                      <option value="">-- Chọn từ trái nghĩa --</option>
                      {U3_EX2_3_OPPOSITES_BANK.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                    {oppChecked && (
                      <p className={`text-[11px] font-medium ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {ok ? `Chính xác! (${item.answerVi})` : `Đúng: ${item.answer} (${item.answerVi})`}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ==================== STATION 02: BE vs HAVE & PERSONALITY (pp.67–69) ==================== */}
      {station === 'be_have' && (
        <div className="space-y-6">
          {/* Bài II.4: BE -> HAVE */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.4 · Trang 67
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Viết lại câu chuyển từ BE sang HAVE / HAS (6 câu)
                </h3>
                <p className="text-xs text-slate-500">
                  Mẫu: <em>Her hair is long and black. → She has long black hair.</em>
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEx24Checked(true)}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                >
                  Kiểm tra
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEx24({});
                    setEx24Checked(false);
                  }}
                  className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                >
                  Làm lại
                </button>
              </div>
            </div>
            <div className="space-y-2.5">
              {U3_EX2_4_TO_HAVE.map((item) => {
                const ok = matchesAny(ex24[item.id] ?? '', item.answer, item.accepted);
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">
                      <span className="font-ipa text-violet-700 mr-1">{item.id}.</span>
                      {item.prompt}
                    </p>
                    <input
                      type="text"
                      value={ex24[item.id] ?? ''}
                      onChange={(e) => {
                        setEx24((p) => ({ ...p, [item.id]: e.target.value }));
                        if (ex24Checked) setEx24Checked(false);
                      }}
                      placeholder="Viết lại dùng have / has..."
                      className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                        ex24Checked
                          ? ok
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white focus:border-violet-500'
                      }`}
                    />
                    {ex24Checked && (
                      <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                        <strong>{item.answer}</strong> — {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.5: HAVE -> BE */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.5 · Trang 68
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Viết lại câu chuyển từ HAVE / HAS sang BE (6 câu)
                </h3>
                <p className="text-xs text-slate-500">
                  Mẫu: <em>She has blue eyes. → Her eyes are blue.</em>
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEx25Checked(true)}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                >
                  Kiểm tra
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEx25({});
                    setEx25Checked(false);
                  }}
                  className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                >
                  Làm lại
                </button>
              </div>
            </div>
            <div className="space-y-2.5">
              {U3_EX2_5_TO_BE.map((item) => {
                const ok = matchesAny(ex25[item.id] ?? '', item.answer, item.accepted);
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">
                      <span className="font-ipa text-violet-700 mr-1">{item.id}.</span>
                      {item.prompt}
                    </p>
                    <input
                      type="text"
                      value={ex25[item.id] ?? ''}
                      onChange={(e) => {
                        setEx25((p) => ({ ...p, [item.id]: e.target.value }));
                        if (ex25Checked) setEx25Checked(false);
                      }}
                      placeholder="Viết lại dùng is / are..."
                      className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                        ex25Checked
                          ? ok
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white focus:border-violet-500'
                      }`}
                    />
                    {ex25Checked && (
                      <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                        <strong>{item.answer}</strong> — {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.6: 8 Opposite Replies */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.6 · Trang 68
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Trả lời phủ định bằng tính từ trái nghĩa (8 câu)
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEx26Checked(true)}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                >
                  Kiểm tra
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEx26({});
                    setEx26Checked(false);
                  }}
                  className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                >
                  Làm lại
                </button>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {U3_EX2_6_OPPOSITE_REPLY.map((item) => {
                const ok = matchesAny(ex26[item.id] ?? '', item.answer, item.accepted);
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">
                      <span className="font-ipa text-violet-700 mr-1">{item.id}.</span>
                      {item.prompt}
                    </p>
                    <input
                      type="text"
                      value={ex26[item.id] ?? ''}
                      onChange={(e) => {
                        setEx26((p) => ({ ...p, [item.id]: e.target.value }));
                        if (ex26Checked) setEx26Checked(false);
                      }}
                      placeholder="No, ..."
                      className={`w-full rounded-lg border px-3 py-1.5 text-xs sm:text-sm focus:outline-none ${
                        ex26Checked
                          ? ok
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white focus:border-violet-500'
                      }`}
                    />
                    {ex26Checked && (
                      <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                        <strong>{item.answer}</strong> — {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.7: 4 Paragraphs (20 blanks am/is/are/have/has) */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.7 · Trang 68
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Điền am / is / are / have / has vào 4 đoạn văn miêu tả (20 chỗ trống)
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEx27Checked(true)}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                >
                  Kiểm tra 4 đoạn
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEx27({});
                    setEx27Checked(false);
                  }}
                  className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                >
                  Làm lại
                </button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {U3_EX2_7_BE_HAVE_PARAS.map((para) => {
                const fullText = para.parts.reduce(
                  (acc, p, idx) => acc + p + (para.answers[idx] ?? ''),
                  ''
                );
                return (
                  <div
                    key={para.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-xs font-bold text-violet-800">
                        {para.titleVi}
                      </p>
                      <button
                        type="button"
                        onClick={() => speakEnglish(fullText)}
                        className="text-violet-700 hover:text-violet-900"
                        title="Nghe đoạn hoàn chỉnh"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm leading-loose text-slate-800">
                      {para.parts.map((seg, bIdx) => {
                        const ans = para.answers[bIdx];
                        const key = `${para.id}-${bIdx}`;
                        const val = ex27[key] ?? '';
                        const ok = val === ans;
                        return (
                          <span key={bIdx}>
                            {seg}
                            {ans && (
                              <span className="inline-flex items-center gap-1 mx-0.5">
                                <select
                                  value={val}
                                  onChange={(e) => {
                                    setEx27((p) => ({ ...p, [key]: e.target.value }));
                                    if (ex27Checked) setEx27Checked(false);
                                  }}
                                  className={`rounded-md border px-1.5 py-0.5 font-ipa text-xs font-bold focus:outline-none ${
                                    ex27Checked
                                      ? ok
                                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                                        : 'border-rose-400 bg-rose-50 text-rose-900'
                                      : 'border-slate-300 bg-white focus:border-violet-500'
                                  }`}
                                >
                                  <option value="">...</option>
                                  {(['am', 'is', 'are', 'have', 'has'] as const).map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                                {ex27Checked && !ok && (
                                  <span className="font-ipa text-[11px] font-bold text-emerald-700">
                                    [{ans}]
                                  </span>
                                )}
                              </span>
                            )}
                          </span>
                        );
                      })}
                    </p>
                    {ex27Checked && (
                      <p className="text-[11px] text-slate-600 bg-white rounded-lg border border-slate-200 p-2">
                        {para.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.8: 10 Personality Adjectives */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.8 · Trang 69
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Điền 10 tính từ chỉ tính cách từ khung cho sẵn
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEx28Checked(true)}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                >
                  Kiểm tra
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEx28({});
                    setEx28Checked(false);
                  }}
                  className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                >
                  Làm lại
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 rounded-xl border border-violet-200 bg-violet-50/50 p-3">
              {U3_EX2_8_ADJ_BOX.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => speakEnglish(w)}
                  className="inline-flex items-center gap-1 rounded-md border border-violet-200 bg-white px-2.5 py-1 font-ipa text-xs font-bold text-slate-800 hover:border-violet-400"
                >
                  <span>{w}</span>
                  <Volume2 className="h-3 w-3 text-violet-600" />
                </button>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U3_EX2_8_PERSONALITY.map((item) => {
                const val = ex28[item.id] ?? '';
                const ok = val === item.answer;
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      <span className="font-ipa font-bold text-violet-700 mr-1">{item.id}.</span>
                      {item.before}{' '}
                      <select
                        value={val}
                        onChange={(e) => {
                          setEx28((p) => ({ ...p, [item.id]: e.target.value }));
                          if (ex28Checked) setEx28Checked(false);
                        }}
                        className={`mx-1 rounded-md border px-2 py-0.5 font-ipa text-xs font-bold focus:outline-none ${
                          ex28Checked
                            ? ok
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : 'border-rose-400 bg-rose-50 text-rose-900'
                            : 'border-slate-300 bg-white focus:border-violet-500'
                        }`}
                      >
                        <option value="">-- chọn từ --</option>
                        {U3_EX2_8_ADJ_BOX.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>{' '}
                      {item.after}
                    </div>
                    {ex28Checked && (
                      <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                        <strong>{item.answer}</strong> — {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ==================== STATION 03: PRESENT CONTINUOUS & SIMPLE (pp.69–71) ==================== */}
      {station === 'tenses' && (
        <div className="space-y-6">
          {/* Bài II.9: 10 Action Scene SVGs */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.9 · Trang 69–70
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Nhìn 10 tranh hành động &amp; chia thì Hiện tại tiếp diễn (am / is / are + V-ing)
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEx29Checked(true)}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                >
                  Kiểm tra
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEx29({});
                    setEx29Checked(false);
                  }}
                  className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                >
                  Làm lại
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 rounded-xl border border-violet-200 bg-violet-50/50 p-3">
              {U3_EX2_9_BOX.map((v) => (
                <span
                  key={v}
                  className="rounded-md border border-violet-200 bg-white px-2.5 py-1 font-ipa text-xs font-bold text-slate-800"
                >
                  {v}
                </span>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U3_EX2_9_ACTIONS.map((item) => {
                const accepted = item.id === 5 ? ['is having', 'are having'] : undefined;
                const ok = matchesAny(ex29[item.id] ?? '', item.answer, accepted);
                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <ActionSceneSvg sceneKey={item.sceneKey} />
                      <div className="min-w-0 flex-1 space-y-1">
                        <p className="text-[11px] font-semibold text-slate-500">
                          Tranh {item.id}: {item.captionVi}
                        </p>
                        <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm font-medium text-slate-900">
                          <span>{item.before}</span>
                          <input
                            type="text"
                            value={ex29[item.id] ?? ''}
                            onChange={(e) => {
                              setEx29((p) => ({ ...p, [item.id]: e.target.value }));
                              if (ex29Checked) setEx29Checked(false);
                            }}
                            placeholder="is/are V-ing..."
                            className={`w-32 rounded-md border px-2 py-0.5 font-ipa text-xs font-bold focus:outline-none ${
                              ex29Checked
                                ? ok
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                                  : 'border-rose-400 bg-rose-50 text-rose-900'
                                : 'border-slate-300 bg-white focus:border-violet-500'
                            }`}
                          />
                          <span>{item.after}</span>
                        </div>
                      </div>
                    </div>
                    {ex29Checked && (
                      <div
                        className={`flex items-start gap-1.5 rounded px-2 py-1 text-xs ${
                          ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'
                        }`}
                      >
                        {ok ? (
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                        ) : (
                          <XCircle className="h-3.5 w-3.5 shrink-0 text-rose-600 mt-0.5" />
                        )}
                        <span>
                          <strong>{item.answer}</strong> — {item.explainVi}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.10: 10 Future-Arrangement Present Continuous */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.10 · Trang 70
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Hiện tại tiếp diễn diễn tả kế hoạch tương lai (10 câu)
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEx210Checked(true)}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                >
                  Kiểm tra
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEx210({});
                    setEx210Checked(false);
                  }}
                  className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                >
                  Làm lại
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 rounded-xl border border-violet-200 bg-violet-50/50 p-3">
              {U3_EX2_10_BOX.map((v) => (
                <span
                  key={v}
                  className="rounded-md border border-violet-200 bg-white px-2.5 py-1 font-ipa text-xs font-bold text-slate-800"
                >
                  {v}
                </span>
              ))}
            </div>

            <div className="space-y-2.5">
              {U3_EX2_10_FUTURE_CONT.map((item) => {
                const allOk = item.answers.every((ans, bIdx) =>
                  matchesAny(ex210[`${item.id}-${bIdx}`] ?? '', ans, item.acceptedPerBlank?.[bIdx])
                );
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      <span className="font-ipa font-bold text-violet-700 mr-1">{item.id}.</span>
                      {item.parts.map((seg, bIdx) => (
                        <span key={bIdx}>
                          {seg}
                          {bIdx < item.answers.length && (
                            <input
                              type="text"
                              value={ex210[`${item.id}-${bIdx}`] ?? ''}
                              onChange={(e) => {
                                setEx210((p) => ({
                                  ...p,
                                  [`${item.id}-${bIdx}`]: e.target.value,
                                }));
                                if (ex210Checked) setEx210Checked(false);
                              }}
                              placeholder="..."
                              className={`mx-1 ${
                                item.answers.length > 1 && bIdx === 0 ? 'w-16' : 'w-32'
                              } rounded-md border px-2 py-0.5 font-ipa text-xs font-bold focus:outline-none ${
                                ex210Checked
                                  ? matchesAny(
                                      ex210[`${item.id}-${bIdx}`] ?? '',
                                      item.answers[bIdx],
                                      item.acceptedPerBlank?.[bIdx]
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
                    {ex210Checked && (
                      <p className={`text-xs rounded px-2 py-1 ${allOk ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                        <strong>{item.answers.join(' ... ')}</strong> — {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.11: Present Simple vs Present Continuous */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Bài II.11 · Trang 70–71
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Phân biệt Hiện tại đơn (thói quen) &amp; Hiện tại tiếp diễn (kế hoạch) (10 câu)
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEx211Checked(true)}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                >
                  Kiểm tra
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEx211({});
                    setEx211Checked(false);
                  }}
                  className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                >
                  Làm lại
                </button>
              </div>
            </div>
            <div className="space-y-2.5">
              {U3_EX2_11_SIMPLE_VS_CONT.map((item) => {
                const ok = matchesAny(
                  ex211[item.id] ?? '',
                  item.answers[0],
                  item.acceptedPerBlank?.[0]
                );
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      <span className="font-ipa font-bold text-violet-700 mr-1">{item.id}.</span>
                      {item.parts[0]}
                      <input
                        type="text"
                        value={ex211[item.id] ?? ''}
                        onChange={(e) => {
                          setEx211((p) => ({ ...p, [item.id]: e.target.value }));
                          if (ex211Checked) setEx211Checked(false);
                        }}
                        placeholder="chia động từ..."
                        className={`mx-1 w-36 rounded-md border px-2 py-0.5 font-ipa text-xs font-bold focus:outline-none ${
                          ex211Checked
                            ? ok
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : 'border-rose-400 bg-rose-50 text-rose-900'
                            : 'border-slate-300 bg-white focus:border-violet-500'
                        }`}
                      />
                      {item.parts[1]}
                    </div>
                    {ex211Checked && (
                      <p className={`text-xs rounded px-2 py-1 ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                        <strong>{item.answers[0]}</strong> — {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ==================== STATIONS 04–07 ==================== */}
      {station === 'mcq_dialogue' && <Unit3Station4 />}
      {station === 'reading' && <Unit3Station5 />}
      {station === 'writing' && <Unit3Station6 />}
      {station === 'unit3_test' && <Unit3FullTestSection />}
    </div>
  );
}
