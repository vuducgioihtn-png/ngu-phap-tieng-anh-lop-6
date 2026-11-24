import { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Eye,
  RotateCcw,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  U6_EX_I1_SORT,
  U6_EX_I2_MCQ,
  U6_EX_II1_BOX,
  U6_EX_II1_PICS,
  U6_EX_II2_NOUNS,
  U6_EX_II2_VERBS,
  U6_EX_II3_PAIRS,
  U6_EX_II4_SHOULD,
  U6_EX_II5_ADVICE,
  U6_EX_II6_LEFT,
  U6_EX_II6_RIGHT,
  U6_EX_II7_MCQ,
  U6_EX_II8_SOME_ANY,
  U6_EX_II9_MISTAKES,
  type U6TetSvgKey,
} from '../data/unit6Pages129To149';
import { speakEnglish } from '../utils/speech';
import {
  Unit6FullTestSection,
  Unit6Station5,
  Unit6Station6,
} from './Unit6Pages139To149';

export type Unit6StationId =
  | 'phonetics_tet'
  | 'collocations_should'
  | 'advice_mcq'
  | 'some_any_mistakes'
  | 'reading'
  | 'writing'
  | 'unit6_test';

const STATIONS: { id: Unit6StationId; step: string; label: string; pages: string }[] = [
  { id: 'phonetics_tet', step: 'Trạm 01', label: 'Phát âm /s/–/ʃ/ & Từ Tết', pages: 'Tr.134–135' },
  { id: 'collocations_should', step: 'Trạm 02', label: 'Cụm từ Tết & Should', pages: 'Tr.135–136' },
  { id: 'advice_mcq', step: 'Trạm 03', label: 'Lời khuyên & Trắc nghiệm', pages: 'Tr.136–138' },
  { id: 'some_any_mistakes', step: 'Trạm 04', label: 'Some / Any & Sửa lỗi', pages: 'Tr.138–139' },
  { id: 'reading', step: 'Trạm 05', label: 'Đọc hiểu Tết Việt', pages: 'Tr.139–141' },
  { id: 'writing', step: 'Trạm 06', label: 'Viết câu & Đoạn văn Tết', pages: 'Tr.141–142' },
  { id: 'unit6_test', step: 'Trạm 07', label: 'TEST UNIT 6 (10 Phần)', pages: 'Tr.143–149' },
];

const normalizeAnswer = (val: string) =>
  val
    .trim()
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, ' ');

const normalizeSentence = (val: string) =>
  normalizeAnswer(val)
    .replace(/\s+([.?!,])/g, '$1')
    .replace(/[.?!]+$/g, '');

/* 8 Crisp Flat-Vector Festive Tet Illustrations (Book p.135) */
function TetItemSvg({ svgKey }: { svgKey: U6TetSvgKey }) {
  switch (svgKey) {
    case 'present':
      return (
        <svg viewBox="0 0 120 90" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="82" rx="12" fill="#FFF1F2" />
          <rect x="34" y="38" width="52" height="36" rx="4" fill="#E11D48" />
          <rect x="30" y="30" width="60" height="11" rx="3" fill="#BE123C" />
          <rect x="55" y="30" width="10" height="44" fill="#FBBF24" />
          <rect x="34" y="51" width="52" height="8" fill="#FBBF24" />
          <path d="M60 30 C48 16 38 22 46 30 Z" fill="#F59E0B" />
          <path d="M60 30 C72 16 82 22 74 30 Z" fill="#F59E0B" />
          <circle cx="60" cy="30" r="4" fill="#FDE68A" />
        </svg>
      );
    case 'lucky_money':
      return (
        <svg viewBox="0 0 120 90" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="82" rx="12" fill="#FFFBEB" />
          {/* Back envelope */}
          <g transform="rotate(-10 50 48)">
            <rect x="30" y="20" width="38" height="54" rx="5" fill="#BE123C" />
            <path d="M30 28 Q49 40 68 28" stroke="#FBBF24" strokeWidth="2.5" fill="none" />
          </g>
          {/* Front envelope */}
          <g transform="rotate(8 72 48)">
            <rect x="50" y="18" width="40" height="56" rx="5" fill="#E11D48" stroke="#9F1239" strokeWidth="1.5" />
            <path d="M50 28 Q70 42 90 28" stroke="#FCD34D" strokeWidth="2.5" fill="none" />
            <circle cx="70" cy="48" r="10" fill="#FBBF24" />
            <rect x="66.5" y="44.5" width="7" height="7" rx="1" fill="#E11D48" />
          </g>
          {/* Gold coins */}
          <circle cx="24" cy="68" r="7" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
          <rect x="22" y="66" width="4" height="4" fill="#FFFBEB" />
        </svg>
      );
    case 'furniture':
      return (
        <svg viewBox="0 0 120 90" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="82" rx="12" fill="#F8FAFC" />
          {/* Floor */}
          <line x1="14" y1="74" x2="106" y2="74" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          {/* Sofa */}
          <rect x="22" y="34" width="54" height="24" rx="6" fill="#0F766E" />
          <rect x="18" y="44" width="10" height="22" rx="4" fill="#115E59" />
          <rect x="70" y="44" width="10" height="22" rx="4" fill="#115E59" />
          <rect x="26" y="50" width="46" height="16" rx="3" fill="#14B8A6" />
          <line x1="25" y1="66" x2="25" y2="73" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
          <line x1="73" y1="66" x2="73" y2="73" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
          {/* Side table + lamp */}
          <rect x="85" y="54" width="20" height="4" rx="1.5" fill="#B45309" />
          <line x1="89" y1="58" x2="89" y2="73" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="101" y1="58" x2="101" y2="73" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="95" y1="42" x2="95" y2="54" stroke="#64748B" strokeWidth="2" />
          <path d="M88 42 L92 31 H98 L102 42 Z" fill="#FBBF24" />
        </svg>
      );
    case 'fireworks':
      return (
        <svg viewBox="0 0 120 90" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="82" rx="12" fill="#0F172A" />
          {/* Big rose/gold burst */}
          <g strokeLinecap="round" strokeWidth="2.4">
            <line x1="56" y1="42" x2="56" y2="18" stroke="#FB7185" />
            <line x1="56" y1="42" x2="56" y2="66" stroke="#FB7185" />
            <line x1="56" y1="42" x2="32" y2="42" stroke="#FBBF24" />
            <line x1="56" y1="42" x2="80" y2="42" stroke="#FBBF24" />
            <line x1="56" y1="42" x2="39" y2="25" stroke="#38BDF8" />
            <line x1="56" y1="42" x2="73" y2="59" stroke="#38BDF8" />
            <line x1="56" y1="42" x2="73" y2="25" stroke="#F43F5E" />
            <line x1="56" y1="42" x2="39" y2="59" stroke="#F43F5E" />
          </g>
          <circle cx="56" cy="42" r="4" fill="#FEF08A" />
          {/* Second smaller burst */}
          <g strokeLinecap="round" strokeWidth="1.8">
            <line x1="92" y1="28" x2="92" y2="16" stroke="#34D399" />
            <line x1="92" y1="28" x2="92" y2="40" stroke="#34D399" />
            <line x1="92" y1="28" x2="80" y2="28" stroke="#FDE047" />
            <line x1="92" y1="28" x2="104" y2="28" stroke="#FDE047" />
            <line x1="92" y1="28" x2="84" y2="20" stroke="#FB7185" />
            <line x1="92" y1="28" x2="100" y2="36" stroke="#FB7185" />
          </g>
          <circle cx="24" cy="24" r="2" fill="#FDE047" />
          <circle cx="28" cy="64" r="1.8" fill="#38BDF8" />
          <circle cx="96" cy="62" r="2" fill="#FB7185" />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 120 90" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="82" rx="12" fill="#F0F9FF" />
          <rect x="28" y="18" width="64" height="58" rx="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          <path d="M28 25 C28 21 31 18 35 18 H85 C89 18 92 21 92 25 V34 H28 V25 Z" fill="#E11D48" />
          <rect x="42" y="12" width="5" height="12" rx="2.5" fill="#475569" />
          <rect x="73" y="12" width="5" height="12" rx="2.5" fill="#475569" />
          <text x="60" y="29" textAnchor="middle" fontSize="8" fontWeight="800" fill="#FFFFFF">TET · JAN</text>
          <text x="60" y="61" textAnchor="middle" fontSize="24" fontWeight="900" fill="#E11D48">01</text>
        </svg>
      );
    case 'apricot_blossoms':
      return (
        <svg viewBox="0 0 120 90" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="82" rx="12" fill="#FFFBEB" />
          {/* Branch */}
          <path d="M16 72 Q52 50 102 22" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
          <path d="M46 53 Q40 34 32 24" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
          <path d="M72 39 Q86 44 98 54" stroke="#78350F" strokeWidth="2.8" strokeLinecap="round" />
          {/* Yellow 5-petal apricot blossoms (Hoa Mai) */}
          {[
            { cx: 40, cy: 36, r: 6 },
            { cx: 66, cy: 34, r: 7 },
            { cx: 88, cy: 26, r: 6 },
            { cx: 82, cy: 52, r: 6.5 },
            { cx: 34, cy: 62, r: 5.5 },
          ].map((f, idx) => (
            <g key={idx} transform={`translate(${f.cx}, ${f.cy})`}>
              {[0, 72, 144, 216, 288].map((deg) => (
                <circle
                  key={deg}
                  cx={Math.cos((deg * Math.PI) / 180) * (f.r * 0.85)}
                  cy={Math.sin((deg * Math.PI) / 180) * (f.r * 0.85)}
                  r={f.r * 0.65}
                  fill="#FACC15"
                />
              ))}
              <circle cx="0" cy="0" r={f.r * 0.45} fill="#EA580C" />
            </g>
          ))}
        </svg>
      );
    case 'pagoda':
      return (
        <svg viewBox="0 0 120 90" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="82" rx="12" fill="#FEF2F2" />
          {/* Base */}
          <rect x="24" y="72" width="72" height="6" rx="2" fill="#94A3B8" />
          {/* Lower tier */}
          <rect x="36" y="55" width="48" height="17" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
          <rect x="54" y="61" width="12" height="11" rx="2" fill="#7C2D12" />
          <path d="M22 57 Q60 44 98 57 L88 47 H32 Z" fill="#B91C1C" />
          {/* Middle tier */}
          <rect x="44" y="38" width="32" height="11" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
          <path d="M30 40 Q60 28 90 40 L80 31 H40 Z" fill="#DC2626" />
          {/* Top spire */}
          <path d="M40 27 Q60 16 80 27 L60 15 Z" fill="#B91C1C" />
          <line x1="60" y1="9" x2="60" y2="16" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'peach_blossoms':
      return (
        <svg viewBox="0 0 120 90" className="h-24 w-full" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="112" height="82" rx="12" fill="#FFF1F2" />
          {/* Branch */}
          <path d="M16 70 Q56 54 104 26" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 54 Q42 36 30 26" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
          <path d="M74 42 Q84 52 94 60" stroke="#78350F" strokeWidth="2.6" strokeLinecap="round" />
          {/* Pink peach blossoms (Hoa Đào) */}
          {[
            { cx: 38, cy: 36, r: 6.5 },
            { cx: 64, cy: 36, r: 7 },
            { cx: 88, cy: 28, r: 6 },
            { cx: 84, cy: 56, r: 6 },
            { cx: 34, cy: 60, r: 5.5 },
          ].map((f, idx) => (
            <g key={idx} transform={`translate(${f.cx}, ${f.cy})`}>
              {[0, 72, 144, 216, 288].map((deg) => (
                <circle
                  key={deg}
                  cx={Math.cos((deg * Math.PI) / 180) * (f.r * 0.82)}
                  cy={Math.sin((deg * Math.PI) / 180) * (f.r * 0.82)}
                  r={f.r * 0.65}
                  fill="#FB7185"
                />
              ))}
              <circle cx="0" cy="0" r={f.r * 0.42} fill="#FEF08A" />
            </g>
          ))}
        </svg>
      );
  }
}

export function Unit6Workbook({
  initialStation = 'phonetics_tet',
}: {
  initialStation?: Unit6StationId;
}) {
  const [station, setStation] = useState<Unit6StationId>(initialStation);

  useEffect(() => {
    setStation(initialStation);
  }, [initialStation]);

  return (
    <div className="space-y-6">
      {/* Header + 7-Station Rose Navigation */}
      <section className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-800">
              Sách Chinh phục Ngữ pháp &amp; Bài tập TA6 Tập 1 · Unit 6 (Trang 129–149 · Trọn vẹn Tập 1)
            </p>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Our Tet Holiday — Thực hành Chi tiết &amp; TEST UNIT 6
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Toàn bộ 15 bài tập thực hành từ trang 134–142 (Phát âm /s/–/ʃ/, Từ vựng Tết, Should/Shouldn&apos;t, Some/Any, Đọc hiểu &amp; Viết) cùng trọn bộ 10 phần Đề kiểm tra Unit 6 (trang 143–149) chấm điểm tự động.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {STATIONS.map((s) => {
            const active = station === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setStation(s.id)}
                className={`flex flex-col items-start rounded-xl border px-3 py-2.5 text-left transition-colors ${
                  active
                    ? 'border-rose-600 bg-rose-600 text-white shadow-2xs'
                    : 'border-rose-200 bg-white text-slate-700 hover:bg-rose-50'
                }`}
              >
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    active ? 'text-rose-100' : 'text-rose-700'
                  }`}
                >
                  {s.step} · {s.pages}
                </span>
                <span className="mt-0.5 text-xs font-bold leading-snug">{s.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {station === 'phonetics_tet' && <Unit6Station1 />}
      {station === 'collocations_should' && <Unit6Station2 />}
      {station === 'advice_mcq' && <Unit6Station3 />}
      {station === 'some_any_mistakes' && <Unit6Station4 />}
      {station === 'reading' && <Unit6Station5 />}
      {station === 'writing' && <Unit6Station6 />}
      {station === 'unit6_test' && <Unit6FullTestSection />}
    </div>
  );
}

/* =====================================================================
   TRẠM 01: PHÁT ÂM /s/–/ʃ/ (I.1, I.2) & 8 TRANH TẾT SVG (II.1) · TR.134–135
   ===================================================================== */
function Unit6Station1() {
  // I.1: 20-word /s/ vs /ʃ/ sorter
  const [sortChoice, setSortChoice] = useState<Record<number, 's' | 'sh'>>({});
  const [sortChecked, setSortChecked] = useState(false);

  // I.2: 5 phonetics MCQs
  const [i2Ans, setI2Ans] = useState<Record<number, number>>({});

  // II.1: 8 Tet pictures
  const [picAns, setPicAns] = useState<Record<number, string>>({});
  const [picChecked, setPicChecked] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const sortCorrect = U6_EX_I1_SORT.filter((w) => sortChoice[w.id] === w.sound).length;
  const picCorrect = U6_EX_II1_PICS.filter(
    (p) => normalizeAnswer(picAns[p.id] ?? '') === normalizeAnswer(p.answer)
  ).length;

  return (
    <div className="space-y-6">
      {/* Bài I.1: Sort 20 words into /s/ and /ʃ/ */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài I.1 · Trang 134 · Phân loại 20 từ vào cột /s/ hoặc /ʃ/
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Put the words with the underlined part into the correct column
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Chạm vào nút <strong>/s/</strong> (môi bè) hoặc <strong>/ʃ/</strong> (môi chu tròn) ngay trên từng thẻ từ, và bấm loa để nghe kiểm chứng.
            </p>
          </div>
          {sortChecked && (
            <span className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-ipa text-xs font-bold text-rose-800">
              Đúng {sortCorrect}/{U6_EX_I1_SORT.length}
            </span>
          )}
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {U6_EX_I1_SORT.map((item) => {
            const chosen = sortChoice[item.id];
            const isOk = chosen === item.sound;
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3 transition-colors ${
                  sortChecked
                    ? isOk
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-sm font-bold text-slate-900">
                    <span className="text-xs text-slate-400 mr-1">{item.id}.</span>
                    {item.before}
                    <span className="underline decoration-2 decoration-rose-600 text-rose-700">
                      {item.under}
                    </span>
                    {item.after}
                  </span>
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.word)}
                    className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-600 hover:border-rose-300 hover:text-rose-700"
                    title={`Nghe từ ${item.word}`}
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                  {(['s', 'sh'] as const).map((snd) => {
                    const active = chosen === snd;
                    return (
                      <button
                        key={snd}
                        type="button"
                        onClick={() => {
                          setSortChoice((prev) => ({ ...prev, [item.id]: snd }));
                          setSortChecked(false);
                        }}
                        className={`rounded-lg border px-2 py-1 font-ipa text-xs font-bold transition-colors ${
                          active
                            ? 'border-rose-600 bg-rose-600 text-white'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {snd === 's' ? '/s/' : '/ʃ/'}
                      </button>
                    );
                  })}
                </div>

                {sortChecked && (
                  <p className={`mt-2 text-[11px] leading-snug ${isOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <span className="font-ipa font-bold">{item.ipa}</span> — {item.noteVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setSortChecked(true)}
            className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700"
          >
            Kiểm tra 20 từ
          </button>
          <button
            type="button"
            onClick={() => {
              const all: Record<number, 's' | 'sh'> = {};
              U6_EX_I1_SORT.forEach((w) => {
                all[w.id] = w.sound;
              });
              setSortChoice(all);
              setSortChecked(true);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Eye className="h-3.5 w-3.5" />
            Xem đáp án
          </button>
          <button
            type="button"
            onClick={() => {
              setSortChoice({});
              setSortChecked(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* Bài I.2: 5 Phonetics MCQs */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
            Bài I.2 · Trang 134–135 · Chọn từ có phần gạch chân phát âm khác
          </p>
          <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
            Find the word which has a different sound in the part underlined
          </h3>
        </div>

        <div className="space-y-3">
          {U6_EX_I2_MCQ.map((q) => {
            const chosen = i2Ans[q.id];
            const answered = chosen !== undefined;
            const isOk = chosen === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-3">
                <p className="text-xs font-bold text-slate-600">Câu {q.id}.</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {q.options.map((opt, oIdx) => {
                    const letter = String.fromCharCode(65 + oIdx);
                    let cls = 'border-slate-200 bg-white text-slate-800 hover:border-rose-300';
                    if (answered) {
                      if (oIdx === q.correctIndex) {
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-950';
                      } else if (oIdx === chosen) {
                        cls = 'border-rose-400 bg-rose-50 text-rose-950';
                      }
                    }
                    return (
                      <div key={opt.word} className="flex items-stretch gap-1">
                        <button
                          type="button"
                          onClick={() => setI2Ans((prev) => ({ ...prev, [q.id]: oIdx }))}
                          className={`flex-1 rounded-xl border px-3 py-2 text-left text-sm font-semibold transition-colors ${cls}`}
                        >
                          <span className="text-xs font-bold text-slate-400 mr-1.5">{letter}.</span>
                          {opt.before}
                          <span className="underline decoration-2 decoration-rose-600">{opt.under}</span>
                          {opt.after}
                          {answered && (
                            <span className="block font-ipa text-[11px] text-slate-500 mt-0.5">
                              {opt.ipa}
                            </span>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => speakEnglish(opt.word)}
                          className="rounded-xl border border-slate-200 bg-white px-2 text-slate-500 hover:text-rose-700"
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
                    className={`flex items-start gap-2 rounded-lg p-2.5 text-xs font-medium ${
                      isOk ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'
                    }`}
                  >
                    {isOk ? (
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

      {/* Bài II.1: 8 Tet Vocabulary Pictures with SVG */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài II.1 · Trang 135 · Từ vựng ngày Tết qua 8 hình minh họa
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Write the words under the pictures
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Chọn 1 từ trong hộp rồi chạm vào ô tranh tương ứng (hoặc gõ trực tiếp đáp án).
            </p>
          </div>
          {picChecked && (
            <span className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-ipa text-xs font-bold text-rose-800">
              Đúng {picCorrect}/{U6_EX_II1_PICS.length}
            </span>
          )}
        </div>

        {/* Clickable Word Box */}
        <div className="flex flex-wrap gap-2 rounded-xl border border-rose-200 bg-rose-50/60 p-3">
          {U6_EX_II1_BOX.map((w) => {
            const isSelected = selectedWord === w;
            const isUsed = Object.values(picAns).some((v) => normalizeAnswer(v) === normalizeAnswer(w));
            return (
              <button
                key={w}
                type="button"
                onClick={() => setSelectedWord(isSelected ? null : w)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors ${
                  isSelected
                    ? 'border-rose-600 bg-rose-600 text-white'
                    : isUsed
                      ? 'border-slate-200 bg-slate-100 text-slate-400 line-through'
                      : 'border-rose-200 bg-white text-slate-800 hover:border-rose-400'
                }`}
              >
                {w}
              </button>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {U6_EX_II1_PICS.map((item) => {
            const val = picAns[item.id] ?? '';
            const isOk = normalizeAnswer(val) === normalizeAnswer(item.answer);
            return (
              <div
                key={item.id}
                onClick={() => {
                  if (selectedWord) {
                    setPicAns((prev) => ({ ...prev, [item.id]: selectedWord }));
                    setSelectedWord(null);
                    setPicChecked(false);
                  }
                }}
                className={`rounded-xl border p-3 space-y-2.5 transition-colors ${
                  selectedWord ? 'cursor-pointer hover:border-rose-400' : ''
                } ${
                  picChecked
                    ? isOk
                      ? 'border-emerald-300 bg-emerald-50/40'
                      : 'border-rose-300 bg-rose-50/40'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">Hình {item.id}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakEnglish(item.answer);
                    }}
                    className="rounded-lg bg-rose-50 p-1 text-rose-700 hover:bg-rose-100"
                    title="Nghe từ vựng"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <TetItemSvg svgKey={item.svgKey} />

                <p className="text-[11px] text-slate-500 min-h-8">{item.clueVi}</p>

                <input
                  type="text"
                  value={val}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    setPicAns((prev) => ({ ...prev, [item.id]: e.target.value }));
                    setPicChecked(false);
                  }}
                  placeholder="Nhập từ tiếng Anh..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-900 focus:border-rose-500 focus:bg-white focus:outline-none"
                />

                {picChecked && (
                  <p className={`text-[11px] font-semibold ${isOk ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {item.answer} <span className="font-ipa font-normal">{item.ipa}</span> · {item.meaningVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setPicChecked(true)}
            className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700"
          >
            Kiểm tra 8 hình
          </button>
          <button
            type="button"
            onClick={() => {
              const all: Record<number, string> = {};
              U6_EX_II1_PICS.forEach((p) => {
                all[p.id] = p.answer;
              });
              setPicAns(all);
              setPicChecked(true);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Eye className="h-3.5 w-3.5" />
            Xem đáp án
          </button>
          <button
            type="button"
            onClick={() => {
              setPicAns({});
              setPicChecked(false);
              setSelectedWord(null);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>
    </div>
  );
}

/* =====================================================================
   TRẠM 02: CỤM TỪ TẾT (II.2), CHỌN TỪ (II.3) & SHOULD/SHOULDN'T (II.4)
   ===================================================================== */
function Unit6Station2() {
  // II.2: 10 Verb + Noun collocations
  const [matchAns, setMatchAns] = useState<Record<number, string>>({});
  const [matchChecked, setMatchChecked] = useState(false);

  // II.3: 8 pair choices
  const [pairAns, setPairAns] = useState<Record<number, number>>({});

  // II.4: 10 should / shouldn't toggles
  const [shouldAns, setShouldAns] = useState<Record<number, 'should' | "shouldn't">>({});
  const [shouldChecked, setShouldChecked] = useState(false);

  const matchCorrect = U6_EX_II2_VERBS.filter((v) => matchAns[v.id] === v.answerKey).length;
  const shouldCorrect = U6_EX_II4_SHOULD.filter((s) => shouldAns[s.id] === s.answer).length;

  return (
    <div className="space-y-6">
      {/* Bài II.2: 10 Verb-Noun Tet Collocations */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài II.2 · Trang 135–136 · Ghép 10 động từ với cụm danh từ ngày Tết
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Match the verbs in column A with the words/phrases in column B
            </h3>
          </div>
          {matchChecked && (
            <span className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-ipa text-xs font-bold text-rose-800">
              Đúng {matchCorrect}/{U6_EX_II2_VERBS.length}
            </span>
          )}
        </div>

        <div className="grid gap-2.5 md:grid-cols-2">
          {U6_EX_II2_VERBS.map((v) => {
            const picked = matchAns[v.id] ?? '';
            const isOk = picked === v.answerKey;
            return (
              <div
                key={v.id}
                className={`rounded-xl border p-3 space-y-2 ${
                  matchChecked
                    ? isOk
                      ? 'border-emerald-300 bg-emerald-50/40'
                      : 'border-rose-300 bg-rose-50/40'
                    : 'border-slate-200 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose-600 text-xs font-bold text-white">
                    {v.id}
                  </span>
                  <span className="font-display text-sm font-bold text-slate-900 w-20 shrink-0">
                    {v.verb}
                  </span>
                  <select
                    value={picked}
                    onChange={(e) => {
                      setMatchAns((prev) => ({ ...prev, [v.id]: e.target.value }));
                      setMatchChecked(false);
                    }}
                    className="flex-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:border-rose-500 focus:outline-none"
                  >
                    <option value="">-- Chọn cụm ở cột B --</option>
                    {U6_EX_II2_NOUNS.map((n) => (
                      <option key={n.key} value={n.key}>
                        {n.key}. {n.text}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => speakEnglish(v.fullEn)}
                    className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-500 hover:text-rose-700"
                    title="Nghe cụm từ chuẩn"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                {matchChecked && (
                  <p className={`text-[11px] font-medium ${isOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    Đáp án: <strong>{v.answerKey}</strong> — {v.fullEn} ({v.vi})
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setMatchChecked(true)}
            className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700"
          >
            Kiểm tra 10 cặp
          </button>
          <button
            type="button"
            onClick={() => {
              const all: Record<number, string> = {};
              U6_EX_II2_VERBS.forEach((v) => {
                all[v.id] = v.answerKey;
              });
              setMatchAns(all);
              setMatchChecked(true);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Eye className="h-3.5 w-3.5" />
            Xem đáp án
          </button>
          <button
            type="button"
            onClick={() => {
              setMatchAns({});
              setMatchChecked(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* Bài II.3: 8 Inline Pair Choices */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
            Bài II.3 · Trang 136 · Chọn từ vựng phù hợp ngữ cảnh Tết
          </p>
          <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
            Underline the right word in brackets to complete each sentence
          </h3>
        </div>

        <div className="space-y-3">
          {U6_EX_II3_PAIRS.map((item) => {
            const chosen = pairAns[item.id];
            const answered = chosen !== undefined;
            const isOk = chosen === item.correctIndex;
            const fullSentence = `${item.before} ${item.choices[item.correctIndex]}${item.after.startsWith('.') ? '' : ' '}${item.after}`;
            return (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-sm font-medium text-slate-800 leading-relaxed flex flex-wrap items-center gap-1.5">
                    <span className="font-bold text-slate-400">{item.id}.</span>
                    <span>{item.before}</span>
                    <span className="inline-flex items-center gap-1">
                      {item.choices.map((ch, idx) => {
                        let cls = 'border-slate-300 bg-white text-slate-800 hover:border-rose-400';
                        if (answered) {
                          if (idx === item.correctIndex) {
                            cls = 'border-emerald-600 bg-emerald-600 text-white';
                          } else if (idx === chosen) {
                            cls = 'border-rose-500 bg-rose-100 text-rose-800 line-through';
                          }
                        }
                        return (
                          <button
                            key={ch}
                            type="button"
                            onClick={() => setPairAns((prev) => ({ ...prev, [item.id]: idx }))}
                            className={`rounded-lg border px-2.5 py-0.5 text-xs font-bold transition-colors ${cls}`}
                          >
                            {ch}
                          </button>
                        );
                      })}
                    </span>
                    <span>{item.after}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakEnglish(fullSentence)}
                    className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-500 hover:text-rose-700"
                    title="Nghe câu chuẩn"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                {answered && (
                  <p className={`text-xs font-medium ${isOk ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {isOk ? 'Chính xác!' : 'Chưa đúng.'} {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bài II.4: 10 should / shouldn't blanks */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài II.4 · Trang 136 · Điền should hoặc shouldn&apos;t (10 câu)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Complete the sentences with &ldquo;should&rdquo; or &ldquo;shouldn&apos;t&rdquo;
            </h3>
          </div>
          {shouldChecked && (
            <span className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-ipa text-xs font-bold text-rose-800">
              Đúng {shouldCorrect}/{U6_EX_II4_SHOULD.length}
            </span>
          )}
        </div>

        <div className="space-y-2.5">
          {U6_EX_II4_SHOULD.map((item) => {
            const val = shouldAns[item.id];
            const isOk = val === item.answer;
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  shouldChecked
                    ? isOk
                      ? 'border-emerald-300 bg-emerald-50/40'
                      : 'border-rose-300 bg-rose-50/40'
                    : 'border-slate-200 bg-slate-50/50'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-slate-800">
                    <span className="font-bold text-slate-400">{item.id}.</span>
                    <span>{item.before}</span>
                    <span className="inline-flex gap-1">
                      {(['should', "shouldn't"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setShouldAns((prev) => ({ ...prev, [item.id]: opt }));
                            setShouldChecked(false);
                          }}
                          className={`rounded-lg border px-2.5 py-0.5 font-ipa text-xs font-bold transition-colors ${
                            val === opt
                              ? 'border-rose-600 bg-rose-600 text-white'
                              : 'border-slate-300 bg-white text-slate-700 hover:border-rose-400'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </span>
                    <span>{item.after}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakEnglish(`${item.before} ${item.answer} ${item.after}`)}
                    className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-500 hover:text-rose-700"
                    title="Nghe câu chuẩn"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                {shouldChecked && (
                  <p className={`text-xs font-medium ${isOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    Đáp án: <strong className="font-ipa">{item.answer}</strong> — {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setShouldChecked(true)}
            className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700"
          >
            Kiểm tra 10 câu
          </button>
          <button
            type="button"
            onClick={() => {
              const all: Record<number, 'should' | "shouldn't"> = {};
              U6_EX_II4_SHOULD.forEach((s) => {
                all[s.id] = s.answer;
              });
              setShouldAns(all);
              setShouldChecked(true);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Eye className="h-3.5 w-3.5" />
            Xem đáp án
          </button>
          <button
            type="button"
            onClick={() => {
              setShouldAns({});
              setShouldChecked(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>
    </div>
  );
}

/* =====================================================================
   TRẠM 03: VIẾT LỜI KHUYÊN (II.5), GHÉP CẶP (II.6) & TRẮC NGHIỆM (II.7)
   ===================================================================== */
function Unit6Station3() {
  // II.5: 10 advice writing items
  const [adviceAns, setAdviceAns] = useState<Record<number, string>>({});
  const [adviceChecked, setAdviceChecked] = useState(false);

  // II.6: 8 situation -> advice matching
  const [sitAns, setSitAns] = useState<Record<number, string>>({});
  const [sitChecked, setSitChecked] = useState(false);

  // II.7: 10 MCQs
  const [mcqAns, setMcqAns] = useState<Record<number, number>>({});

  const adviceCorrect = U6_EX_II5_ADVICE.filter((item) =>
    item.answers.some((a) => normalizeSentence(a) === normalizeSentence(adviceAns[item.id] ?? ''))
  ).length;
  const sitCorrect = U6_EX_II6_LEFT.filter((item) => sitAns[item.id] === item.answerKey).length;

  return (
    <div className="space-y-6">
      {/* Bài II.5: Give advice with should / shouldn't */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài II.5 · Trang 136–137 · Viết câu lời khuyên dùng should / shouldn&apos;t (10 câu)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Give advice with &ldquo;should&rdquo; or &ldquo;shouldn&apos;t&rdquo; using the cues in brackets
            </h3>
            <p className="mt-1.5 rounded-lg bg-rose-50/70 border border-rose-200 px-3 py-1.5 text-xs text-rose-900">
              <strong>Ví dụ mẫu (Ex):</strong> I feel very cold. (wear warm clothes) &rarr;{' '}
              <span className="font-bold">You should wear warm clothes.</span>
            </p>
          </div>
          {adviceChecked && (
            <span className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-ipa text-xs font-bold text-rose-800">
              Đúng {adviceCorrect}/{U6_EX_II5_ADVICE.length}
            </span>
          )}
        </div>

        <div className="space-y-3">
          {U6_EX_II5_ADVICE.map((item) => {
            const val = adviceAns[item.id] ?? '';
            const isOk = item.answers.some(
              (a) => normalizeSentence(a) === normalizeSentence(val)
            );
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  adviceChecked
                    ? isOk
                      ? 'border-emerald-300 bg-emerald-50/40'
                      : 'border-rose-300 bg-rose-50/40'
                    : 'border-slate-200 bg-slate-50/50'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <p className="font-semibold text-slate-900">
                    <span className="text-slate-400 mr-1.5">{item.id}.</span>
                    {item.situation}{' '}
                    <span className="font-ipa text-xs font-semibold text-rose-700">
                      ({item.cue})
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(item.displayAnswer)}
                    className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-500 hover:text-rose-700"
                    title="Nghe câu đáp án mẫu"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => {
                    setAdviceAns((prev) => ({ ...prev, [item.id]: e.target.value }));
                    setAdviceChecked(false);
                  }}
                  placeholder="Viết câu lời khuyên hoàn chỉnh (VD: You should ...)"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm font-medium text-slate-900 focus:border-rose-500 focus:outline-none"
                />
                {adviceChecked && (
                  <p className={`text-xs font-medium ${isOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    Đáp án: <strong>{item.displayAnswer}</strong> — {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setAdviceChecked(true)}
            className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700"
          >
            Kiểm tra 10 câu
          </button>
          <button
            type="button"
            onClick={() => {
              const all: Record<number, string> = {};
              U6_EX_II5_ADVICE.forEach((a) => {
                all[a.id] = a.displayAnswer;
              });
              setAdviceAns(all);
              setAdviceChecked(true);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Eye className="h-3.5 w-3.5" />
            Xem đáp án
          </button>
          <button
            type="button"
            onClick={() => {
              setAdviceAns({});
              setAdviceChecked(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* Bài II.6: Match 8 Situations to Advice */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài II.6 · Trang 137 · Ghép 8 tình huống với lời khuyên tương ứng
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Match the situations in column A with the advice in column B
            </h3>
          </div>
          {sitChecked && (
            <span className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-ipa text-xs font-bold text-rose-800">
              Đúng {sitCorrect}/{U6_EX_II6_LEFT.length}
            </span>
          )}
        </div>

        <div className="space-y-2.5">
          {U6_EX_II6_LEFT.map((item) => {
            const val = sitAns[item.id] ?? '';
            const isOk = val === item.answerKey;
            const rightObj = U6_EX_II6_RIGHT.find((r) => r.key === item.answerKey);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  sitChecked
                    ? isOk
                      ? 'border-emerald-300 bg-emerald-50/40'
                      : 'border-rose-300 bg-rose-50/40'
                    : 'border-slate-200 bg-slate-50/50'
                }`}
              >
                <div className="grid gap-2.5 md:grid-cols-12 md:items-center">
                  <p className="md:col-span-5 text-sm font-semibold text-slate-900">
                    <span className="text-slate-400 mr-1.5">{item.id}.</span>
                    {item.text}
                  </p>
                  <div className="md:col-span-7 flex items-center gap-2">
                    <select
                      value={val}
                      onChange={(e) => {
                        setSitAns((prev) => ({ ...prev, [item.id]: e.target.value }));
                        setSitChecked(false);
                      }}
                      className="flex-1 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-semibold text-slate-800 focus:border-rose-500 focus:outline-none"
                    >
                      <option value="">-- Chọn lời khuyên (A–H) --</option>
                      {U6_EX_II6_RIGHT.map((r) => (
                        <option key={r.key} value={r.key}>
                          {r.key}. {r.text}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => speakEnglish(`${item.text} ${rightObj?.text ?? ''}`)}
                      className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-500 hover:text-rose-700"
                      title="Nghe cặp hội thoại"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                {sitChecked && (
                  <p className={`text-xs font-medium ${isOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    Đáp án: <strong>{item.answerKey}</strong> — {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setSitChecked(true)}
            className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700"
          >
            Kiểm tra 8 tình huống
          </button>
          <button
            type="button"
            onClick={() => {
              const all: Record<number, string> = {};
              U6_EX_II6_LEFT.forEach((s) => {
                all[s.id] = s.answerKey;
              });
              setSitAns(all);
              setSitChecked(true);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Eye className="h-3.5 w-3.5" />
            Xem đáp án
          </button>
          <button
            type="button"
            onClick={() => {
              setSitAns({});
              setSitChecked(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* Bài II.7: 10 Grammar MCQs */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
            Bài II.7 · Trang 137–138 · Trắc nghiệm Ngữ pháp (10 câu)
          </p>
          <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
            Choose the best answer A, B, C or D
          </h3>
        </div>

        <div className="space-y-3">
          {U6_EX_II7_MCQ.map((q) => {
            const chosen = mcqAns[q.id];
            const answered = chosen !== undefined;
            const isOk = chosen === q.correctIndex;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2.5">
                <p className="text-sm font-semibold text-slate-900">
                  <span className="text-slate-400 mr-1.5">{q.id}.</span>
                  {q.question}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {q.options.map((opt, idx) => {
                    const letter = String.fromCharCode(65 + idx);
                    let cls = 'border-slate-200 bg-white text-slate-800 hover:border-rose-300';
                    if (answered) {
                      if (idx === q.correctIndex) {
                        cls = 'border-emerald-500 bg-emerald-50 text-emerald-950';
                      } else if (idx === chosen) {
                        cls = 'border-rose-400 bg-rose-50 text-rose-950';
                      }
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setMcqAns((prev) => ({ ...prev, [q.id]: idx }))}
                        className={`rounded-xl border px-3 py-2 text-left text-xs sm:text-sm font-semibold transition-colors ${cls}`}
                      >
                        <span className="text-xs font-bold text-slate-400 mr-1.5">{letter}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <p className={`text-xs font-medium ${isOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {isOk ? 'Chính xác!' : 'Chưa đúng.'} {q.explainVi}
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

/* =====================================================================
   TRẠM 04: SOME / ANY (II.8 — 20 CÂU) & TÌM LỖI SAI (II.9 — 8 CÂU) · TR.138–139
   ===================================================================== */
function Unit6Station4() {
  // II.8: 20 sentences (keyed as `${itemId}-${blankIdx}`)
  const [saAns, setSaAns] = useState<Record<string, 'some' | 'any'>>({});
  const [saChecked, setSaChecked] = useState(false);

  // II.9: 8 mistakes (wrongWord & correction inputs)
  const [wrongAns, setWrongAns] = useState<Record<number, string>>({});
  const [fixAns, setFixAns] = useState<Record<number, string>>({});
  const [mChecked, setMChecked] = useState(false);

  const totalSaBlanks = U6_EX_II8_SOME_ANY.reduce((acc, s) => acc + s.answers.length, 0);
  const saCorrect = U6_EX_II8_SOME_ANY.reduce(
    (acc, item) =>
      acc +
      item.answers.filter((expected, bIdx) => saAns[`${item.id}-${bIdx}`] === expected).length,
    0
  );

  const mCorrect = U6_EX_II9_MISTAKES.filter((m) => {
    const wOk = normalizeAnswer(wrongAns[m.id] ?? '') === normalizeAnswer(m.wrongWord);
    const fOk = m.acceptedCorrections.some(
      (c) => normalizeAnswer(c) === normalizeAnswer(fixAns[m.id] ?? '')
    );
    return wOk && fOk;
  }).length;

  return (
    <div className="space-y-6">
      {/* Bài II.8: 20 sentences with some / any */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài II.8 · Trang 138–139 · Điền some hoặc any vào 20 câu ({totalSaBlanks} chỗ trống)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Complete the sentences with &ldquo;some&rdquo; or &ldquo;any&rdquo;
            </h3>
          </div>
          {saChecked && (
            <span className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-ipa text-xs font-bold text-rose-800">
              Đúng {saCorrect}/{totalSaBlanks} ô
            </span>
          )}
        </div>

        <div className="space-y-2.5">
          {U6_EX_II8_SOME_ANY.map((item) => {
            const allOk = item.answers.every(
              (expected, bIdx) => saAns[`${item.id}-${bIdx}`] === expected
            );
            const fullSentence = item.parts
              .map((part, idx) => {
                if (idx >= item.answers.length) return part;
                const ans =
                  idx === 0 && item.capitalizeFirst
                    ? item.answers[idx][0].toUpperCase() + item.answers[idx].slice(1)
                    : item.answers[idx];
                return `${part}${ans}`;
              })
              .join('');

            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  saChecked
                    ? allOk
                      ? 'border-emerald-300 bg-emerald-50/40'
                      : 'border-rose-300 bg-rose-50/40'
                    : 'border-slate-200 bg-slate-50/50'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-sm font-medium text-slate-800 leading-relaxed flex flex-wrap items-center gap-1">
                    <span className="font-bold text-slate-400 mr-1">{item.id}.</span>
                    {item.parts.map((part, idx) => (
                      <span key={idx} className="inline-flex flex-wrap items-center gap-1">
                        {part && <span>{part}</span>}
                        {idx < item.answers.length && (
                          <span className="inline-flex gap-1 mx-0.5">
                            {(['some', 'any'] as const).map((opt) => {
                              const key = `${item.id}-${idx}`;
                              const label =
                                idx === 0 && item.capitalizeFirst
                                  ? opt[0].toUpperCase() + opt.slice(1)
                                  : opt;
                              const active = saAns[key] === opt;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => {
                                    setSaAns((prev) => ({ ...prev, [key]: opt }));
                                    setSaChecked(false);
                                  }}
                                  className={`rounded-lg border px-2.5 py-0.5 font-ipa text-xs font-bold transition-colors ${
                                    active
                                      ? 'border-rose-600 bg-rose-600 text-white'
                                      : 'border-slate-300 bg-white text-slate-700 hover:border-rose-400'
                                  }`}
                                >
                                  {label}
                                </button>
                              );
                            })}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => speakEnglish(fullSentence)}
                    className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-500 hover:text-rose-700 shrink-0"
                    title="Nghe câu chuẩn"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                {saChecked && (
                  <p className={`text-xs font-medium ${allOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    Đáp án:{' '}
                    <strong className="font-ipa">
                      {item.answers
                        .map((a, idx) =>
                          idx === 0 && item.capitalizeFirst ? a[0].toUpperCase() + a.slice(1) : a
                        )
                        .join(' / ')}
                    </strong>{' '}
                    — {item.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setSaChecked(true)}
            className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700"
          >
            Kiểm tra 20 câu
          </button>
          <button
            type="button"
            onClick={() => {
              const all: Record<string, 'some' | 'any'> = {};
              U6_EX_II8_SOME_ANY.forEach((item) => {
                item.answers.forEach((a, idx) => {
                  all[`${item.id}-${idx}`] = a;
                });
              });
              setSaAns(all);
              setSaChecked(true);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Eye className="h-3.5 w-3.5" />
            Xem đáp án
          </button>
          <button
            type="button"
            onClick={() => {
              setSaAns({});
              setSaChecked(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>

      {/* Bài II.9: 8 Find & Correct Mistakes */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Bài II.9 · Trang 139 · Tìm và sửa 8 lỗi sai về some / any &amp; danh từ
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Find and correct the mistakes in the following sentences
            </h3>
          </div>
          {mChecked && (
            <span className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-ipa text-xs font-bold text-rose-800">
              Đúng {mCorrect}/{U6_EX_II9_MISTAKES.length}
            </span>
          )}
        </div>

        <div className="space-y-3">
          {U6_EX_II9_MISTAKES.map((m) => {
            const wOk = normalizeAnswer(wrongAns[m.id] ?? '') === normalizeAnswer(m.wrongWord);
            const fOk = m.acceptedCorrections.some(
              (c) => normalizeAnswer(c) === normalizeAnswer(fixAns[m.id] ?? '')
            );
            const isOk = wOk && fOk;
            return (
              <div
                key={m.id}
                className={`rounded-xl border p-3.5 space-y-2.5 ${
                  mChecked
                    ? isOk
                      ? 'border-emerald-300 bg-emerald-50/40'
                      : 'border-rose-300 bg-rose-50/40'
                    : 'border-slate-200 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="text-slate-400 mr-1.5">{m.id}.</span>
                    {m.sentence}
                  </p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(m.fixedSentence)}
                    className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-500 hover:text-rose-700"
                    title="Nghe câu đã sửa đúng"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <input
                    type="text"
                    value={wrongAns[m.id] ?? ''}
                    onChange={(e) => {
                      setWrongAns((prev) => ({ ...prev, [m.id]: e.target.value }));
                      setMChecked(false);
                    }}
                    placeholder="Từ sai (VD: any)"
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 focus:border-rose-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={fixAns[m.id] ?? ''}
                    onChange={(e) => {
                      setFixAns((prev) => ({ ...prev, [m.id]: e.target.value }));
                      setMChecked(false);
                    }}
                    placeholder="Sửa thành (VD: some)"
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 focus:border-rose-500 focus:outline-none"
                  />
                </div>
                {mChecked && (
                  <p className={`text-xs font-medium ${isOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    Sửa: <span className="line-through text-rose-600">{m.wrongWord}</span> &rarr;{' '}
                    <strong className="text-emerald-700">{m.correctWord}</strong> · {m.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setMChecked(true)}
            className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700"
          >
            Kiểm tra 8 câu
          </button>
          <button
            type="button"
            onClick={() => {
              const w: Record<number, string> = {};
              const f: Record<number, string> = {};
              U6_EX_II9_MISTAKES.forEach((m) => {
                w[m.id] = m.wrongWord;
                f[m.id] = m.correctWord;
              });
              setWrongAns(w);
              setFixAns(f);
              setMChecked(true);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Eye className="h-3.5 w-3.5" />
            Xem đáp án
          </button>
          <button
            type="button"
            onClick={() => {
              setWrongAns({});
              setFixAns({});
              setMChecked(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Làm lại
          </button>
        </div>
      </section>
    </div>
  );
}
