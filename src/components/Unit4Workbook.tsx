import { useEffect, useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Eye,
  Headphones,
  Layers,
  PenTool,
  RotateCcw,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  U4_EX_I1_WORDS,
  U4_EX_I2_PHONETICS,
  U4_EX_II1_PLACES,
  U4_EX_II1_WORD_BANK,
  U4_EX_II2_ADJ_BOX,
  U4_EX_II2_WORD_BANK,
  U4_EX_II3_PAIRS,
  U4_EX_II4_COMP_TABLE,
  U4_EX_II5_COMP_BOX,
  U4_EX_II5_WORD_BANK,
  U4_EX_II6_MCQ,
  U4_EX_II7_CUES,
  U4_EX_II8_COMP_THAN,
  U4_EX_II9_WHICH,
  U4_EX_II10_PREP,
  U4_EX_II11_MISTAKES,
  U4_EX_II12_UNDERLINE,
  type U4PlaceSvgKey,
} from '../data/unit4Pages84To106';
import { speakEnglish } from '../utils/speech';
import {
  Unit4FullTestSection,
  Unit4Station5,
  Unit4Station6,
} from './Unit4Pages95To106';

export type Unit4StationId =
  | 'phonetics'
  | 'places_vocab'
  | 'comparatives_core'
  | 'comparatives_prep'
  | 'reading'
  | 'writing'
  | 'unit4_test';

interface Unit4WorkbookProps {
  initialStation?: Unit4StationId;
}

const STATIONS: {
  id: Unit4StationId;
  num: string;
  label: string;
  pages: string;
  icon: typeof Headphones;
}[] = [
  { id: 'phonetics', num: '01', label: 'Phát âm /ɪ/ & /iː/', pages: 'Tr.89', icon: Headphones },
  { id: 'places_vocab', num: '02', label: 'Địa điểm & Tính từ', pages: 'Tr.90–91', icon: Compass },
  { id: 'comparatives_core', num: '03', label: 'So sánh hơn cơ bản', pages: 'Tr.91–93', icon: Layers },
  { id: 'comparatives_prep', num: '04', label: 'Viết câu & Giới từ', pages: 'Tr.93–95', icon: ClipboardCheck },
  { id: 'reading', num: '05', label: 'Đọc hiểu 3 bài', pages: 'Tr.95–97', icon: BookOpen },
  { id: 'writing', num: '06', label: 'Sắp xếp & Viết lại', pages: 'Tr.97–98', icon: PenTool },
  { id: 'unit4_test', num: '07', label: 'TEST UNIT 4 (12 Phần)', pages: 'Tr.99–106', icon: Award },
];

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
 * 8 FLAT-VECTOR INLINE SVG LANDMARK ILLUSTRATIONS (BÀI II.1 · TR.90)
 * ========================================================================== */

function PlaceLandmarkSvg({ svgKey }: { svgKey: U4PlaceSvgKey }) {
  switch (svgKey) {
    case 'railway_station':
      return (
        <svg viewBox="0 0 180 100" className="h-24 w-full rounded-lg bg-sky-50/80" aria-hidden="true">
          <rect x="0" y="76" width="180" height="24" fill="#CBD5E1" />
          <line x1="8" y1="86" x2="172" y2="86" stroke="#475569" strokeWidth="2.5" />
          <line x1="8" y1="92" x2="172" y2="92" stroke="#475569" strokeWidth="2.5" />
          {/* Station roof */}
          <path d="M18 32 L90 12 L162 32 Z" fill="#D97706" />
          <rect x="26" y="32" width="128" height="44" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
          {/* Clock */}
          <circle cx="90" cy="24" r="7" fill="#FFFFFF" stroke="#92400E" strokeWidth="1.5" />
          <path d="M90 24 L90 20 M90 24 L93 25" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
          {/* Train front */}
          <rect x="44" y="42" width="92" height="34" rx="8" fill="#0284C7" />
          <rect x="52" y="48" width="24" height="14" rx="2" fill="#E0F2FE" />
          <rect x="80" y="48" width="24" height="14" rx="2" fill="#E0F2FE" />
          <rect x="108" y="48" width="20" height="14" rx="2" fill="#E0F2FE" />
          <circle cx="56" cy="70" r="3" fill="#FDE047" />
          <circle cx="124" cy="70" r="3" fill="#FDE047" />
        </svg>
      );
    case 'art_gallery':
      return (
        <svg viewBox="0 0 180 100" className="h-24 w-full rounded-lg bg-amber-50/70" aria-hidden="true">
          <rect x="0" y="78" width="180" height="22" fill="#E2E8F0" />
          {/* 3 framed paintings */}
          <rect x="16" y="20" width="42" height="36" rx="2" fill="#FFFFFF" stroke="#B45309" strokeWidth="3" />
          <circle cx="30" cy="34" r="6" fill="#F59E0B" />
          <path d="M20 52 L32 38 L44 48 L54 40 L54 52 Z" fill="#10B981" />

          <rect x="69" y="16" width="42" height="42" rx="2" fill="#FFFFFF" stroke="#92400E" strokeWidth="3" />
          <circle cx="90" cy="34" r="10" fill="#38BDF8" />
          <rect x="77" y="44" width="26" height="9" fill="#F43F5E" />

          <rect x="122" y="20" width="42" height="36" rx="2" fill="#FFFFFF" stroke="#B45309" strokeWidth="3" />
          <path d="M128 50 Q143 24 158 50" fill="none" stroke="#7C3AED" strokeWidth="3" />
          <circle cx="143" cy="33" r="5" fill="#FB923C" />
          {/* Velvet rope */}
          <line x1="28" y1="68" x2="28" y2="84" stroke="#92400E" strokeWidth="2.5" />
          <line x1="90" y1="68" x2="90" y2="84" stroke="#92400E" strokeWidth="2.5" />
          <line x1="152" y1="68" x2="152" y2="84" stroke="#92400E" strokeWidth="2.5" />
          <path d="M28 72 Q59 80 90 72 Q121 80 152 72" fill="none" stroke="#DC2626" strokeWidth="2.5" />
        </svg>
      );
    case 'square':
      return (
        <svg viewBox="0 0 180 100" className="h-24 w-full rounded-lg bg-sky-50/80" aria-hidden="true">
          <rect x="0" y="64" width="180" height="36" fill="#E2E8F0" />
          {/* Paving tiles */}
          <path d="M30 100 L60 64 M90 100 L90 64 M150 100 L120 64" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Trees on both sides */}
          <rect x="24" y="50" width="6" height="16" fill="#78350F" />
          <circle cx="27" cy="44" r="12" fill="#22C55E" />
          <rect x="150" y="50" width="6" height="16" fill="#78350F" />
          <circle cx="153" cy="44" r="12" fill="#16A34A" />
          {/* Central monument / flag pole */}
          <rect x="72" y="54" width="36" height="14" rx="2" fill="#94A3B8" />
          <rect x="82" y="34" width="16" height="20" fill="#64748B" />
          <line x1="90" y1="12" x2="90" y2="34" stroke="#334155" strokeWidth="2" />
          <rect x="90" y="13" width="18" height="11" fill="#EF4444" />
          <circle cx="99" cy="18.5" r="2.2" fill="#FDE047" />
        </svg>
      );
    case 'museum':
      return (
        <svg viewBox="0 0 180 100" className="h-24 w-full rounded-lg bg-slate-50" aria-hidden="true">
          <rect x="0" y="80" width="180" height="20" fill="#CBD5E1" />
          {/* Classical pediment */}
          <path d="M24 34 L90 12 L156 34 Z" fill="#D97706" />
          <rect x="28" y="34" width="124" height="6" fill="#B45309" />
          {/* Columns */}
          <rect x="34" y="40" width="112" height="36" fill="#FEF3C7" />
          {[42, 66, 90, 114, 138].map((x) => (
            <rect key={x} x={x - 4} y="40" width="8" height="36" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
          ))}
          {/* Steps */}
          <rect x="24" y="76" width="132" height="5" fill="#94A3B8" />
          <rect x="18" y="81" width="144" height="5" fill="#64748B" />
        </svg>
      );
    case 'pagoda':
      return (
        <svg viewBox="0 0 180 100" className="h-24 w-full rounded-lg bg-amber-50/70" aria-hidden="true">
          <rect x="0" y="82" width="180" height="18" fill="#BBF7D0" />
          {/* Tier 1 */}
          <rect x="52" y="64" width="76" height="18" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
          <path d="M36 66 Q90 54 144 66 L132 56 L48 56 Z" fill="#DC2626" />
          {/* Tier 2 */}
          <rect x="64" y="44" width="52" height="14" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
          <path d="M50 46 Q90 36 130 46 L118 36 L62 36 Z" fill="#DC2626" />
          {/* Tier 3 & Spire */}
          <rect x="74" y="28" width="32" height="10" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
          <path d="M64 30 Q90 22 116 30 L104 20 L76 20 Z" fill="#DC2626" />
          <line x1="90" y1="8" x2="90" y2="20" stroke="#B45309" strokeWidth="2.5" />
          <circle cx="90" cy="8" r="3" fill="#F59E0B" />
          {/* Door */}
          <rect x="83" y="69" width="14" height="13" rx="2" fill="#92400E" />
        </svg>
      );
    case 'palace':
      return (
        <svg viewBox="0 0 180 100" className="h-24 w-full rounded-lg bg-sky-50/80" aria-hidden="true">
          <rect x="0" y="80" width="180" height="20" fill="#DCFCE7" />
          {/* Side wings */}
          <rect x="22" y="48" width="136" height="32" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
          {/* Domes */}
          <path d="M30 48 Q44 28 58 48 Z" fill="#F59E0B" />
          <path d="M122 48 Q136 28 150 48 Z" fill="#F59E0B" />
          {/* Central royal dome */}
          <rect x="68" y="38" width="44" height="42" fill="#FDE68A" stroke="#B45309" strokeWidth="1.5" />
          <path d="M68 38 Q90 12 112 38 Z" fill="#D97706" />
          <line x1="90" y1="8" x2="90" y2="18" stroke="#92400E" strokeWidth="2" />
          <path d="M90 8 L100 11 L90 14 Z" fill="#EF4444" />
          {/* Arched royal gate */}
          <path d="M80 80 L80 62 Q90 54 100 62 L100 80 Z" fill="#92400E" />
          {/* Windows */}
          {[36, 52, 128, 144].map((x) => (
            <rect key={x} x={x - 3} y="58" width="6" height="10" rx="3" fill="#0284C7" />
          ))}
        </svg>
      );
    case 'cathedral':
      return (
        <svg viewBox="0 0 180 100" className="h-24 w-full rounded-lg bg-indigo-50/70" aria-hidden="true">
          <rect x="0" y="82" width="180" height="18" fill="#CBD5E1" />
          {/* Twin Gothic Spires */}
          <rect x="38" y="34" width="24" height="48" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
          <path d="M36 34 L50 10 L64 34 Z" fill="#475569" />
          <rect x="118" y="34" width="24" height="48" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
          <path d="M116 34 L130 10 L144 34 Z" fill="#475569" />
          {/* Center facade */}
          <rect x="62" y="42" width="56" height="40" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.5" />
          <path d="M62 42 L90 22 L118 42 Z" fill="#64748B" />
          {/* Rose window */}
          <circle cx="90" cy="54" r="8" fill="#F59E0B" stroke="#475569" strokeWidth="1.5" />
          <circle cx="90" cy="54" r="3" fill="#FEF3C7" />
          {/* Cross */}
          <line x1="90" y1="12" x2="90" y2="22" stroke="#B45309" strokeWidth="2" />
          <line x1="86" y1="16" x2="94" y2="16" stroke="#B45309" strokeWidth="2" />
          {/* Arch door */}
          <path d="M82 82 L82 68 Q90 62 98 68 L98 82 Z" fill="#334155" />
        </svg>
      );
    case 'stadium':
      return (
        <svg viewBox="0 0 180 100" className="h-24 w-full rounded-lg bg-emerald-50/70" aria-hidden="true">
          {/* Floodlights */}
          <line x1="34" y1="20" x2="34" y2="48" stroke="#475569" strokeWidth="2.5" />
          <rect x="24" y="14" width="20" height="7" rx="2" fill="#FDE047" stroke="#475569" strokeWidth="1" />
          <line x1="146" y1="20" x2="146" y2="48" stroke="#475569" strokeWidth="2.5" />
          <rect x="136" y="14" width="20" height="7" rx="2" fill="#FDE047" stroke="#475569" strokeWidth="1" />
          {/* Outer stadium bowl */}
          <ellipse cx="90" cy="60" rx="72" ry="28" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
          <ellipse cx="90" cy="60" rx="58" ry="20" fill="#CBD5E1" />
          {/* Football pitch */}
          <ellipse cx="90" cy="60" rx="44" ry="13" fill="#22C55E" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="90" y1="47" x2="90" y2="73" stroke="#FFFFFF" strokeWidth="1.2" />
          <circle cx="90" cy="60" r="5" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
        </svg>
      );
  }
}

/* ============================================================================
 * MAIN UNIT 4 WORKBOOK SHELL (7 STATIONS · BOOK pp.89–106)
 * ========================================================================== */

export function Unit4Workbook({ initialStation = 'phonetics' }: Unit4WorkbookProps) {
  const [station, setStation] = useState<Unit4StationId>(initialStation);

  useEffect(() => {
    setStation(initialStation);
  }, [initialStation]);

  // --- STATION 01: I.1 (25-word sorter) & I.2 (10 phonetics MCQs) ---
  const [i1Choice, setI1Choice] = useState<Record<number, 'short_i' | 'long_i'>>({});
  const [i1Checked, setI1Checked] = useState(false);
  const [i2Choice, setI2Choice] = useState<Record<number, number>>({});

  // --- STATION 02: II.1 (8 Places SVG), II.2 (8 Adj Box), II.3 (8 Pairs) ---
  const [ii1Inputs, setIi1Inputs] = useState<Record<number, string>>({});
  const [ii1Active, setIi1Active] = useState<number>(1);
  const [ii1Checked, setIi1Checked] = useState(false);

  const [ii2Inputs, setIi2Inputs] = useState<Record<string, string>>({});
  const [ii2Active, setIi2Active] = useState<string>('1-0');
  const [ii2Checked, setIi2Checked] = useState(false);

  const [ii3Choice, setIi3Choice] = useState<Record<number, number>>({});

  // --- STATION 03: II.4 (19 Comp forms), II.5 (10 Comp box), II.6 (12 MCQs) ---
  const [ii4Inputs, setIi4Inputs] = useState<Record<number, string>>({});
  const [ii4Checked, setIi4Checked] = useState(false);

  const [ii5Inputs, setIi5Inputs] = useState<Record<number, string>>({});
  const [ii5Checked, setIi5Checked] = useState(false);

  const [ii6Choice, setIi6Choice] = useState<Record<number, number>>({});

  // --- STATION 04: II.7 (10 Cues), II.8 (10 Comp+than), II.9 (10 Which), II.10 (8 Prep), II.11 (5 Mistakes), II.12 (5 Underline) ---
  const [ii7Inputs, setIi7Inputs] = useState<Record<number, string>>({});
  const [ii7Checked, setIi7Checked] = useState(false);

  const [ii8Inputs, setIi8Inputs] = useState<Record<number, string>>({});
  const [ii8Checked, setIi8Checked] = useState(false);

  const [ii9Inputs, setIi9Inputs] = useState<Record<number, string>>({});
  const [ii9Checked, setIi9Checked] = useState(false);

  const [ii10Inputs, setIi10Inputs] = useState<Record<string, string>>({});
  const [ii10Checked, setIi10Checked] = useState(false);

  const [ii11Inputs, setIi11Inputs] = useState<Record<number, { wrong: string; correct: string }>>({});
  const [ii11Checked, setIi11Checked] = useState(false);

  const [ii12Choice, setIi12Choice] = useState<Record<number, number>>({});

  // Helper for advancing II.2 active key
  const ii2Keys = U4_EX_II2_ADJ_BOX.flatMap((q) => q.answers.map((_, idx) => `${q.id}-${idx}`));
  const fillIi2Word = (word: string) => {
    setIi2Inputs((prev) => ({ ...prev, [ii2Active]: word }));
    setIi2Checked(false);
    const curPos = ii2Keys.indexOf(ii2Active);
    if (curPos !== -1 && curPos < ii2Keys.length - 1) {
      setIi2Active(ii2Keys[curPos + 1]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Amber Workbook Header + 7-Station Navigation */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Sách Chinh phục Ngữ pháp &amp; Bài tập Tiếng Anh 6 · Unit 4 (Trang 84–106)
            </p>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
              Thực hành trọn bộ Unit 4: My Neighbourhood
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              7 trạm học tương tác bám sát 100% sách giáo khoa: Phát âm /ɪ/–/iː/, 8 tranh SVG địa điểm, So sánh hơn, Giới từ chỉ đường, 3 bài Đọc hiểu, Viết lại câu &amp; trọn bộ TEST FOR UNIT 4 (12 phần).
            </p>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {STATIONS.map((st) => {
            const Icon = st.icon;
            const active = station === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setStation(st.id)}
                className={`flex flex-col items-start gap-1 rounded-xl border p-3 text-left transition-colors ${
                  active
                    ? 'border-amber-600 bg-amber-600 text-white shadow-2xs'
                    : 'border-amber-200/80 bg-white text-slate-700 hover:bg-amber-50'
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`font-ipa text-[11px] font-bold ${
                      active ? 'text-amber-100' : 'text-amber-700'
                    }`}
                  >
                    Trạm {st.num} · {st.pages}
                  </span>
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                </div>
                <span className="text-xs font-bold leading-snug">{st.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ====================================================================
       * TRẠM 01: PHONETICS (I.1 & I.2 · BOOK p.89)
       * ==================================================================== */}
      {station === 'phonetics' && (
        <div className="space-y-8">
          {/* Bài I.1: 25-Word Sorter /ɪ/ vs /iː/ */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  I. Phonetics · Bài 1 (Tr.89)
                </p>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                  Phân loại 25 từ vào 2 cột âm /ɪ/ (i ngắn) và /iː/ (i dài)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Nhấn biểu tượng loa để nghe phát âm chuẩn, rồi chọn nút <strong>/ɪ/</strong> hoặc <strong>/iː/</strong> cho từng từ.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setI1Checked(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kiểm tra</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key: Record<number, 'short_i' | 'long_i'> = {};
                    U4_EX_I1_WORDS.forEach((w) => (key[w.id] = w.group));
                    setI1Choice(key);
                    setI1Checked(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                  <span>Đáp án</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setI1Choice({});
                    setI1Checked(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Làm lại</span>
                </button>
              </div>
            </div>

            {i1Checked && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-2.5 text-xs font-bold text-emerald-900">
                Kết quả Bài I.1:{' '}
                {U4_EX_I1_WORDS.filter((w) => i1Choice[w.id] === w.group).length}/
                {U4_EX_I1_WORDS.length} từ chính xác!
              </div>
            )}

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {U4_EX_I1_WORDS.map((item) => {
                const picked = i1Choice[item.id];
                const ok = picked === item.group;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3 space-y-2 transition-colors ${
                      i1Checked
                        ? ok
                          ? 'border-emerald-300 bg-emerald-50/50'
                          : 'border-rose-300 bg-rose-50/50'
                        : 'border-slate-200 bg-slate-50/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-sm font-bold text-slate-900">
                          {item.id}. {renderUnderlinedWord(item.word, item.underline)}
                        </span>
                        <span className="ml-1.5 text-[11px] text-slate-500">({item.meaningVi})</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => speakEnglish(item.word)}
                        className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-600 hover:text-amber-700"
                        title={`Nghe từ ${item.word}`}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { val: 'short_i' as const, label: '/ɪ/ (ngắn)' },
                        { val: 'long_i' as const, label: '/iː/ (dài)' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => {
                            setI1Choice((prev) => ({ ...prev, [item.id]: opt.val }));
                            setI1Checked(false);
                          }}
                          className={`rounded-lg border py-1.5 text-xs font-ipa font-bold transition-colors ${
                            picked === opt.val
                              ? 'border-amber-600 bg-amber-600 text-white'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-amber-50'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    {i1Checked && (
                      <p className={`text-[11px] ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        <strong className="font-ipa">{item.ipa}</strong> — {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài I.2: 10 Odd-Sound MCQs */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                I. Phonetics · Bài 2 (Tr.89)
              </p>
              <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                Chọn từ có phần gạch chân phát âm khác với các từ còn lại (10 câu)
              </h3>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U4_EX_I2_PHONETICS.map((q) => {
                const chosen = i2Choice[q.id];
                const answered = chosen !== undefined;
                const ok = chosen === q.correctIndex;
                return (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-4 space-y-2.5">
                    <p className="text-xs font-bold text-slate-500">Câu {q.id}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {q.options.map((opt, idx) => {
                        const letter = ['A', 'B', 'C', 'D'][idx];
                        const isRight = idx === q.correctIndex;
                        const isPicked = chosen === idx;
                        return (
                          <div key={opt.word} className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => setI2Choice((prev) => ({ ...prev, [q.id]: idx }))}
                              className={`flex-1 rounded-lg border px-2.5 py-2 text-left text-xs font-semibold transition-colors ${
                                answered && isRight
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                                  : answered && isPicked && !ok
                                    ? 'border-rose-400 bg-rose-50 text-rose-900'
                                    : 'border-slate-200 bg-white text-slate-800 hover:border-amber-400'
                              }`}
                            >
                              <span className="font-bold mr-1">{letter}.</span>
                              {renderUnderlinedWord(opt.word, opt.underline)}
                              {answered && (
                                <span className="block font-ipa text-[10px] text-slate-500 mt-0.5">
                                  {opt.ipa}
                                </span>
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => speakEnglish(opt.word)}
                              className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:text-amber-700"
                              title={`Nghe ${opt.word}`}
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
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
        </div>
      )}

      {/* ====================================================================
       * TRẠM 02: PLACES SVG & ADJECTIVES (II.1, II.2, II.3 · BOOK pp.90–91)
       * ==================================================================== */}
      {station === 'places_vocab' && (
        <div className="space-y-8">
          {/* Bài II.1: 8 Landmark SVG Cards */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  II. Vocabulary &amp; Grammar · Bài 1 (Tr.90)
                </p>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                  Nhìn 8 tranh địa điểm khu phố và ghép tên tiếng Anh chính xác
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Chọn ô dưới mỗi tranh rồi chạm tên địa điểm trong khung để điền nhanh.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIi1Checked(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kiểm tra</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key: Record<number, string> = {};
                    U4_EX_II1_PLACES.forEach((p) => (key[p.id] = p.answer));
                    setIi1Inputs(key);
                    setIi1Checked(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                  <span>Đáp án</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIi1Inputs({});
                    setIi1Active(1);
                    setIi1Checked(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Làm lại</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 rounded-xl border border-amber-200/80 bg-amber-50/40 p-3">
              <span className="text-xs font-bold text-amber-900 self-center">Khung từ:</span>
              {U4_EX_II1_WORD_BANK.map((w) => {
                const used = Object.values(ii1Inputs).some(
                  (v) => normalizeAnswer(v) === normalizeAnswer(w)
                );
                return (
                  <button
                    key={w}
                    type="button"
                    onClick={() => {
                      setIi1Inputs((prev) => ({ ...prev, [ii1Active]: w }));
                      setIi1Checked(false);
                      if (ii1Active < U4_EX_II1_PLACES.length) setIi1Active(ii1Active + 1);
                    }}
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

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {U4_EX_II1_PLACES.map((place) => {
                const val = ii1Inputs[place.id] ?? '';
                const ok = isAccepted(val, [place.answer]);
                return (
                  <div
                    key={place.id}
                    className={`rounded-xl border p-3 space-y-2 transition-colors ${
                      ii1Active === place.id
                        ? 'border-amber-500 bg-amber-50/30'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <PlaceLandmarkSvg svgKey={place.svgKey} />
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[11px] font-bold text-slate-500">Tranh {place.id}</span>
                      <button
                        type="button"
                        onClick={() => speakEnglish(place.answer)}
                        className="rounded-md border border-slate-200 p-1 text-slate-500 hover:text-amber-700"
                        title={`Nghe phát âm ${place.answer}`}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">{place.clueVi}</p>
                    <input
                      type="text"
                      value={val}
                      onFocus={() => setIi1Active(place.id)}
                      onChange={(e) => {
                        setIi1Inputs((prev) => ({ ...prev, [place.id]: e.target.value }));
                        setIi1Checked(false);
                      }}
                      placeholder="Nhập tên địa điểm..."
                      className={`w-full rounded-lg border px-2.5 py-1.5 text-xs font-bold outline-none ${
                        ii1Checked
                          ? ok
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white focus:border-amber-500'
                      }`}
                    />
                    {ii1Checked && (
                      <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                        <strong>{place.answer}</strong>{' '}
                        <span className="font-ipa text-[10px]">{place.ipa}</span> ({place.meaningVi})
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.2: 8 Sentences (9 Blanks) from Adjectives Box */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  II. Vocabulary &amp; Grammar · Bài 2 (Tr.90)
                </p>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                  Hoàn thành 8 câu (9 chỗ trống) với các tính từ miêu tả khu phố
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIi2Checked(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kiểm tra</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key: Record<string, string> = {};
                    U4_EX_II2_ADJ_BOX.forEach((q) =>
                      q.answers.forEach((acc, idx) => (key[`${q.id}-${idx}`] = acc[0]))
                    );
                    setIi2Inputs(key);
                    setIi2Checked(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                  <span>Đáp án</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIi2Inputs({});
                    setIi2Active('1-0');
                    setIi2Checked(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Làm lại</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 rounded-xl border border-amber-200/80 bg-amber-50/40 p-3">
              {U4_EX_II2_WORD_BANK.map((w) => {
                const used = Object.values(ii2Inputs).some(
                  (v) => normalizeAnswer(v) === normalizeAnswer(w)
                );
                return (
                  <button
                    key={w}
                    type="button"
                    onClick={() => fillIi2Word(w)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${
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

            <div className="space-y-2.5">
              {U4_EX_II2_ADJ_BOX.map((q) => {
                const allOk = q.answers.every((acc, idx) =>
                  isAccepted(ii2Inputs[`${q.id}-${idx}`], acc)
                );
                return (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-1.5 text-sm">
                    <p className="text-slate-800 leading-8">
                      <strong>{q.id}.</strong>{' '}
                      {q.parts.map((part, idx) => {
                        const ans = q.answers[idx];
                        const k = `${q.id}-${idx}`;
                        const ok = ans ? isAccepted(ii2Inputs[k], ans) : false;
                        return (
                          <span key={idx}>
                            {part}
                            {ans && (
                              <input
                                type="text"
                                value={ii2Inputs[k] ?? ''}
                                onFocus={() => setIi2Active(k)}
                                onChange={(e) => {
                                  setIi2Inputs((prev) => ({ ...prev, [k]: e.target.value }));
                                  setIi2Checked(false);
                                }}
                                placeholder="..."
                                className={`mx-1 w-28 rounded-lg border px-2 py-0.5 text-center text-xs font-bold outline-none ${
                                  ii2Checked
                                    ? ok
                                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                                      : 'border-rose-400 bg-rose-50 text-rose-900'
                                    : ii2Active === k
                                      ? 'border-amber-500 bg-amber-50'
                                      : 'border-slate-300 bg-white'
                                }`}
                              />
                            )}
                          </span>
                        );
                      })}
                    </p>
                    {ii2Checked && (
                      <p className={`text-xs ${allOk ? 'text-emerald-700' : 'text-rose-700'}`}>
                        <strong>Đáp án: {q.answers.map((a) => a[0]).join(' / ')}</strong> — {q.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.3: 8 Pair-Choice Buttons */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                II. Vocabulary &amp; Grammar · Bài 3 (Tr.91)
              </p>
              <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                Chọn tính từ đúng nghĩa trong cặp từ trái nghĩa (8 câu)
              </h3>
            </div>
            <div className="space-y-2.5">
              {U4_EX_II3_PAIRS.map((item) => {
                const chosen = ii3Choice[item.id];
                const answered = chosen !== undefined;
                const ok = chosen === item.correctIndex;
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                    <div className="flex flex-wrap items-center gap-1.5 text-sm text-slate-800">
                      <strong>{item.id}.</strong>
                      <span>{item.before}</span>
                      <span className="inline-flex items-center gap-1">
                        {item.pair.map((w, idx) => {
                          const isRight = idx === item.correctIndex;
                          const isPicked = chosen === idx;
                          return (
                            <button
                              key={w}
                              type="button"
                              onClick={() => setIi3Choice((prev) => ({ ...prev, [item.id]: idx }))}
                              className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition-colors ${
                                answered && isRight
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                                  : answered && isPicked && !ok
                                    ? 'border-rose-400 bg-rose-50 text-rose-900'
                                    : 'border-amber-300 bg-amber-50/50 text-amber-950 hover:bg-amber-100'
                              }`}
                            >
                              {w}
                            </button>
                          );
                        })}
                      </span>
                      <span>{item.after}</span>
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
      )}

      {/* ====================================================================
       * TRẠM 03: COMPARATIVES CORE (II.4, II.5, II.6 · BOOK pp.91–93)
       * ==================================================================== */}
      {station === 'comparatives_core' && (
        <div className="space-y-8">
          {/* Bài II.4: 20 Comparative Forms Table (#1 example + #2..#20) */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  II. Grammar · Bài 4 (Tr.91)
                </p>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                  Viết dạng so sánh hơn của 20 tính từ / trạng từ (VD: 1. slow → slower)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIi4Checked(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kiểm tra (19 từ)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key: Record<number, string> = {};
                    U4_EX_II4_COMP_TABLE.forEach((item) => (key[item.id] = item.accepted[0]));
                    setIi4Inputs(key);
                    setIi4Checked(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                  <span>Đáp án</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIi4Inputs({});
                    setIi4Checked(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Làm lại</span>
                </button>
              </div>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Example #1 */}
              <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">1. slow</span>
                  <span className="text-[10px] font-bold text-amber-800">Ví dụ mẫu</span>
                </div>
                <div className="rounded-lg border border-amber-300 bg-white px-2.5 py-1 text-xs font-bold text-amber-900">
                  slower
                </div>
                <p className="text-[11px] text-slate-600">Tính từ 1 âm tiết + -er.</p>
              </div>

              {U4_EX_II4_COMP_TABLE.map((item) => {
                const val = ii4Inputs[item.id] ?? '';
                const ok = isAccepted(val, item.accepted);
                return (
                  <div key={item.id} className="rounded-xl border border-slate-200 p-3 space-y-1.5">
                    <div className="flex items-center justify-between gap-1 text-xs">
                      <span className="font-bold text-slate-900">
                        {item.id}. {item.base}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500">{item.ruleTag}</span>
                    </div>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setIi4Inputs((prev) => ({ ...prev, [item.id]: e.target.value }));
                        setIi4Checked(false);
                      }}
                      placeholder="Nhập dạng so sánh hơn..."
                      className={`w-full rounded-lg border px-2.5 py-1 text-xs font-bold outline-none ${
                        ii4Checked
                          ? ok
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white focus:border-amber-500'
                      }`}
                    />
                    {ii4Checked && (
                      <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                        <strong>{item.accepted.join(' / ')}</strong> — {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.5: 10 Comparative Sentences from Box */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  II. Grammar · Bài 5 (Tr.91–92)
                </p>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                  Chọn tính từ phù hợp trong khung và chia ở dạng so sánh hơn (10 câu)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIi5Checked(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kiểm tra</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key: Record<number, string> = {};
                    U4_EX_II5_COMP_BOX.forEach((q) => (key[q.id] = q.accepted[0]));
                    setIi5Inputs(key);
                    setIi5Checked(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                  <span>Đáp án</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIi5Inputs({});
                    setIi5Checked(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Làm lại</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 rounded-xl border border-amber-200/80 bg-amber-50/40 p-3 text-xs">
              <span className="font-bold text-amber-900 self-center mr-1">Khung tính từ gốc:</span>
              {U4_EX_II5_WORD_BANK.map((w) => (
                <span
                  key={w}
                  className="rounded-lg border border-amber-200 bg-white px-2.5 py-1 font-semibold text-slate-700"
                >
                  {w}
                </span>
              ))}
            </div>

            <div className="space-y-2.5">
              {U4_EX_II5_COMP_BOX.map((q) => {
                const val = ii5Inputs[q.id] ?? '';
                const ok = isAccepted(val, q.accepted);
                return (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-1.5 text-sm">
                    <p className="text-slate-800 leading-8">
                      <strong>{q.id}.</strong> {q.before}
                      <input
                        type="text"
                        value={val}
                        onChange={(e) => {
                          setIi5Inputs((prev) => ({ ...prev, [q.id]: e.target.value }));
                          setIi5Checked(false);
                        }}
                        placeholder="so sánh hơn..."
                        className={`mx-1 w-36 rounded-lg border px-2 py-0.5 text-center text-xs font-bold outline-none ${
                          ii5Checked
                            ? ok
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : 'border-rose-400 bg-rose-50 text-rose-900'
                            : 'border-slate-300 bg-white focus:border-amber-500'
                        }`}
                      />
                      {q.after}
                    </p>
                    {ii5Checked && (
                      <p className={`text-xs ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                        <strong>Đáp án: {q.accepted.join(' / ')}</strong> — {q.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.6: 12 MCQs */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                II. Grammar · Bài 6 (Tr.92–93)
              </p>
              <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                Trắc nghiệm Từ vựng &amp; So sánh hơn (12 câu)
              </h3>
            </div>
            <div className="space-y-3">
              {U4_EX_II6_MCQ.map((q) => {
                const chosen = ii6Choice[q.id];
                const answered = chosen !== undefined;
                const ok = chosen === q.correctIndex;
                return (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-4 space-y-2.5">
                    <p className="text-sm font-semibold text-slate-900">
                      {q.id}. {q.question}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-4">
                      {q.options.map((opt, idx) => {
                        const letter = ['A', 'B', 'C', 'D'][idx];
                        const isRight = idx === q.correctIndex;
                        const isPicked = chosen === idx;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setIi6Choice((prev) => ({ ...prev, [q.id]: idx }))}
                            className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-colors ${
                              answered && isRight
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                                : answered && isPicked && !ok
                                  ? 'border-rose-400 bg-rose-50 text-rose-900'
                                  : 'border-slate-200 bg-white text-slate-800 hover:border-amber-400'
                            }`}
                          >
                            <span className="font-bold mr-1">{letter}.</span>
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
        </div>
      )}

      {/* ====================================================================
       * TRẠM 04: SENTENCES, PREPOSITIONS & MISTAKES (II.7–II.12 · BOOK pp.93–95)
       * ==================================================================== */}
      {station === 'comparatives_prep' && (
        <div className="space-y-8">
          {/* Bài II.7: 10 Cue-to-Sentence Rewrites */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  II. Grammar · Bài 7 (Tr.93)
                </p>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                  Viết câu so sánh hơn hoàn chỉnh từ các từ gợi ý (10 câu)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIi7Checked(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kiểm tra</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key: Record<number, string> = {};
                    U4_EX_II7_CUES.forEach((q) => (key[q.id] = q.accepted[0]));
                    setIi7Inputs(key);
                    setIi7Checked(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                  <span>Đáp án</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIi7Inputs({});
                    setIi7Checked(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Làm lại</span>
                </button>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {U4_EX_II7_CUES.map((q) => {
                const val = ii7Inputs[q.id] ?? '';
                const ok = isAccepted(val, q.accepted);
                return (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                    <p className="text-xs font-bold text-amber-900">
                      {q.id}. {q.prompt}
                    </p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setIi7Inputs((prev) => ({ ...prev, [q.id]: e.target.value }));
                        setIi7Checked(false);
                      }}
                      placeholder="VD: Mary is taller than Peter."
                      className={`w-full rounded-lg border px-3 py-1.5 text-xs font-semibold outline-none ${
                        ii7Checked
                          ? ok
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white focus:border-amber-500'
                      }`}
                    />
                    {ii7Checked && (
                      <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                        <strong>{q.accepted[0]}</strong> — {q.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.8: 10 Comparative + than */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  II. Grammar · Bài 8 (Tr.94)
                </p>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                  Điền dạng so sánh hơn kèm &ldquo;than&rdquo; (10 câu)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIi8Checked(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kiểm tra</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key: Record<number, string> = {};
                    U4_EX_II8_COMP_THAN.forEach((q) => (key[q.id] = q.accepted[0]));
                    setIi8Inputs(key);
                    setIi8Checked(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                  <span>Đáp án</span>
                </button>
              </div>
            </div>
            <div className="grid gap-2.5 md:grid-cols-2">
              {U4_EX_II8_COMP_THAN.map((q) => {
                const val = ii8Inputs[q.id] ?? '';
                const ok = isAccepted(val, q.accepted);
                return (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-3 space-y-1.5 text-xs sm:text-sm">
                    <p className="text-slate-800 leading-7">
                      <strong>{q.id}.</strong> {q.before}
                      <input
                        type="text"
                        value={val}
                        onChange={(e) => {
                          setIi8Inputs((prev) => ({ ...prev, [q.id]: e.target.value }));
                          setIi8Checked(false);
                        }}
                        placeholder={`${q.hint} + than`}
                        className={`mx-1 w-36 rounded-lg border px-2 py-0.5 text-center text-xs font-bold outline-none ${
                          ii8Checked
                            ? ok
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : 'border-rose-400 bg-rose-50 text-rose-900'
                            : 'border-slate-300 bg-white focus:border-amber-500'
                        }`}
                      />
                      {q.after} <span className="font-semibold text-amber-800">({q.hint})</span>
                    </p>
                    {ii8Checked && (
                      <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                        <strong>{q.accepted.join(' / ')}</strong> — {q.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.9: 10 Which ... questions */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  II. Grammar · Bài 9 (Tr.94)
                </p>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                  Hoàn thành 10 câu hỏi so sánh &ldquo;Which ...?&rdquo;
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIi9Checked(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kiểm tra</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key: Record<number, string> = {};
                    U4_EX_II9_WHICH.forEach((q) => (key[q.id] = q.accepted[0]));
                    setIi9Inputs(key);
                    setIi9Checked(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                  <span>Đáp án</span>
                </button>
              </div>
            </div>
            <div className="grid gap-2.5 md:grid-cols-2">
              {U4_EX_II9_WHICH.map((q) => {
                const val = ii9Inputs[q.id] ?? '';
                const ok = isAccepted(val, q.accepted);
                return (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-3 space-y-1.5 text-xs sm:text-sm">
                    <p className="text-slate-800 leading-7">
                      <strong>{q.id}.</strong> {q.before}
                      <input
                        type="text"
                        value={val}
                        onChange={(e) => {
                          setIi9Inputs((prev) => ({ ...prev, [q.id]: e.target.value }));
                          setIi9Checked(false);
                        }}
                        placeholder={q.hint}
                        className={`mx-1 w-32 rounded-lg border px-2 py-0.5 text-center text-xs font-bold outline-none ${
                          ii9Checked
                            ? ok
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : 'border-rose-400 bg-rose-50 text-rose-900'
                            : 'border-slate-300 bg-white focus:border-amber-500'
                        }`}
                      />
                      {q.after} <span className="font-semibold text-amber-800">({q.hint})</span>
                    </p>
                    {ii9Checked && (
                      <p className={`text-[11px] ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                        <strong>{q.accepted[0]}</strong> — {q.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.10: 8 Prepositions (11 blanks) */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  II. Grammar · Bài 10 (Tr.94–95)
                </p>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                  Điền giới từ chỉ vị trí &amp; chỉ đường thích hợp (8 câu · 11 chỗ trống)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Gợi ý nhóm giới từ thường gặp: <strong>between, in, on, opposite, at, from, to</strong>.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIi10Checked(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kiểm tra</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key: Record<string, string> = {};
                    U4_EX_II10_PREP.forEach((q) =>
                      q.answers.forEach((acc, idx) => (key[`${q.id}-${idx}`] = acc[0]))
                    );
                    setIi10Inputs(key);
                    setIi10Checked(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                  <span>Đáp án</span>
                </button>
              </div>
            </div>
            <div className="grid gap-2.5 md:grid-cols-2">
              {U4_EX_II10_PREP.map((q) => {
                const allOk = q.answers.every((acc, idx) =>
                  isAccepted(ii10Inputs[`${q.id}-${idx}`], acc)
                );
                return (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-3 space-y-1.5 text-xs sm:text-sm">
                    <p className="text-slate-800 leading-8">
                      <strong>{q.id}.</strong>{' '}
                      {q.parts.map((part, idx) => {
                        const ans = q.answers[idx];
                        const k = `${q.id}-${idx}`;
                        const ok = ans ? isAccepted(ii10Inputs[k], ans) : false;
                        return (
                          <span key={idx}>
                            {part}
                            {ans && (
                              <input
                                type="text"
                                value={ii10Inputs[k] ?? ''}
                                onChange={(e) => {
                                  setIi10Inputs((prev) => ({ ...prev, [k]: e.target.value }));
                                  setIi10Checked(false);
                                }}
                                placeholder="..."
                                className={`mx-1 w-24 rounded-lg border px-2 py-0.5 text-center text-xs font-bold outline-none ${
                                  ii10Checked
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
                    {ii10Checked && (
                      <p className={`text-[11px] ${allOk ? 'text-emerald-700' : 'text-rose-700'}`}>
                        <strong>Đáp án: {q.answers.map((a) => a[0]).join(' / ')}</strong> — {q.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.11: 5 Find & Correct Mistakes */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  II. Grammar · Bài 11 (Tr.95)
                </p>
                <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                  Tìm 1 lỗi sai trong mỗi câu và sửa lại cho đúng (5 câu)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIi11Checked(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kiểm tra</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key: Record<number, { wrong: string; correct: string }> = {};
                    U4_EX_II11_MISTAKES.forEach(
                      (q) => (key[q.id] = { wrong: q.wrong, correct: q.correct })
                    );
                    setIi11Inputs(key);
                    setIi11Checked(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                  <span>Đáp án</span>
                </button>
              </div>
            </div>
            <div className="space-y-2.5">
              {U4_EX_II11_MISTAKES.map((q) => {
                const entry = ii11Inputs[q.id] ?? { wrong: '', correct: '' };
                const okW = isAccepted(entry.wrong, q.acceptedWrong ?? [q.wrong]);
                const okC = isAccepted(entry.correct, q.acceptedCorrect ?? [q.correct]);
                return (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2">
                    <p className="text-sm font-semibold text-slate-900">
                      {q.id}. {q.sentence}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <input
                        type="text"
                        value={entry.wrong}
                        onChange={(e) => {
                          setIi11Inputs((prev) => ({
                            ...prev,
                            [q.id]: { ...entry, wrong: e.target.value },
                          }));
                          setIi11Checked(false);
                        }}
                        placeholder="Từ sai..."
                        className={`w-32 rounded-lg border px-2.5 py-1 font-bold outline-none ${
                          ii11Checked
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
                        onChange={(e) => {
                          setIi11Inputs((prev) => ({
                            ...prev,
                            [q.id]: { ...entry, correct: e.target.value },
                          }));
                          setIi11Checked(false);
                        }}
                        placeholder="Sửa thành..."
                        className={`w-36 rounded-lg border px-2.5 py-1 font-bold outline-none ${
                          ii11Checked
                            ? okC
                              ? 'border-emerald-500 bg-emerald-50'
                              : 'border-rose-400 bg-rose-50'
                            : 'border-slate-300 bg-white focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {ii11Checked && (
                      <p className={`text-xs ${okW && okC ? 'text-emerald-700' : 'text-rose-700'}`}>
                        <strong>Sửa: {q.wrong} → {q.correct}</strong>. {q.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.12: 5 Underlined Error MCQs */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                II. Grammar · Bài 12 (Tr.95)
              </p>
              <h3 className="font-display text-lg font-extrabold text-slate-900 mt-0.5">
                Chọn phần gạch chân bị sai A, B, C hoặc D (5 câu)
              </h3>
            </div>
            <div className="space-y-3">
              {U4_EX_II12_UNDERLINE.map((q) => {
                const chosen = ii12Choice[q.id];
                const answered = chosen !== undefined;
                const ok = chosen === q.correctIndex;
                return (
                  <div key={q.id} className="rounded-xl border border-slate-200 p-4 space-y-2.5">
                    <p className="text-sm font-semibold text-slate-900">
                      {q.id}. {q.sentence}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-4">
                      {q.options.map((opt, idx) => {
                        const letter = ['A', 'B', 'C', 'D'][idx];
                        const isRight = idx === q.correctIndex;
                        const isPicked = chosen === idx;
                        return (
                          <button
                            key={`${q.id}-${letter}`}
                            type="button"
                            onClick={() => setIi12Choice((prev) => ({ ...prev, [q.id]: idx }))}
                            className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold ${
                              answered && isRight
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                                : answered && isPicked && !ok
                                  ? 'border-rose-400 bg-rose-50 text-rose-900'
                                  : 'border-slate-200 bg-white text-slate-800 hover:border-amber-400'
                            }`}
                          >
                            <span className="font-bold mr-1">{letter}.</span>
                            <span className="underline decoration-amber-600 underline-offset-2">{opt}</span>
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
                        <div>
                          <p className="font-bold">Cách sửa: {q.correction}</p>
                          <p>{q.explainVi}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* TRẠM 05, 06, 07 */}
      {station === 'reading' && <Unit4Station5 />}
      {station === 'writing' && <Unit4Station6 />}
      {station === 'unit4_test' && <Unit4FullTestSection />}
    </div>
  );
}
