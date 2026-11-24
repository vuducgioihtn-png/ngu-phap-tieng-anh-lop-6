import { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  Eye,
  HelpCircle,
  RotateCcw,
  Turtle,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  U5_EX_I_PRONUNCIATION,
  U5_EX_II10_MUST,
  U5_EX_II11_SITUATIONS,
  U5_EX_II12_MISTAKES,
  U5_EX_II1_NATURE_PICS,
  U5_EX_II2_PAIR_CHOICE,
  U5_EX_II3_BOX,
  U5_EX_II3_CAMPING,
  U5_EX_II4_NOUNS,
  U5_EX_II5_MISTAKES,
  U5_EX_II6_QUANTIFIERS,
  U5_EX_II7_CHOICES,
  U5_EX_II7_DIALOGUE,
  U5_EX_II8_QUANTIFIERS,
  U5_EX_II9_FEW_LITTLE,
  type U5NatureSvgKey,
} from '../data/unit5Pages107To128';
import { speakEnglish } from '../utils/speech';
import {
  Unit5FullTestSection,
  Unit5Station5,
  Unit5Station6,
} from './Unit5Pages118To128';

export type Unit5StationId =
  | 'phonetics_nature'
  | 'camping_nouns'
  | 'quantifiers'
  | 'must_mistakes'
  | 'reading'
  | 'writing'
  | 'unit5_test';

const STATIONS: { id: Unit5StationId; code: string; label: string; pages: string }[] = [
  { id: 'phonetics_nature', code: 'Trạm 01', label: 'Phát âm /t/–/d/ & 9 Kỳ quan', pages: 'Tr.112–113' },
  { id: 'camping_nouns', code: 'Trạm 02', label: 'Đồ cắm trại & 30 Danh từ C/U', pages: 'Tr.113–114' },
  { id: 'quantifiers', code: 'Trạm 03', label: 'Lượng từ & Hội thoại Apple Pie', pages: 'Tr.115–116' },
  { id: 'must_mistakes', code: 'Trạm 04', label: "Must / Mustn't & Sửa lỗi sai", pages: 'Tr.116–118' },
  { id: 'reading', code: 'Trạm 05', label: 'Đọc hiểu (Hội An · Huế · Mũi Né)', pages: 'Tr.118–120' },
  { id: 'writing', code: 'Trạm 06', label: 'Ghép thẻ từ & Viết lại câu', pages: 'Tr.120–121' },
  { id: 'unit5_test', code: 'Trạm 07', label: 'TEST UNIT 5 (10 Phần)', pages: 'Tr.122–128' },
];

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

/* Crisp Inline Flat-Vector Illustrations for 9 Natural Wonders (Book p.112) */
function NatureWonderSvg({ svgKey }: { svgKey: U5NatureSvgKey }) {
  switch (svgKey) {
    case 'desert':
      return (
        <svg viewBox="0 0 160 96" className="w-full h-24 rounded-xl" aria-hidden="true">
          <rect width="160" height="96" fill="#FEF3C7" />
          <circle cx="126" cy="24" r="12" fill="#F59E0B" />
          <path d="M0 70 Q42 40 90 66 T160 58 L160 96 L0 96 Z" fill="#FBBF24" />
          <path d="M0 80 Q58 58 118 80 T160 72 L160 96 L0 96 Z" fill="#D97706" />
          {/* Cactus */}
          <rect x="34" y="44" width="7" height="28" rx="3.5" fill="#15803D" />
          <path d="M34 56 H27 V48" fill="none" stroke="#15803D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M41 53 H48 V45" fill="none" stroke="#15803D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'waterfall':
      return (
        <svg viewBox="0 0 160 96" className="w-full h-24 rounded-xl" aria-hidden="true">
          <rect width="160" height="96" fill="#E0F2FE" />
          <path d="M0 24 L56 24 L64 80 L0 80 Z" fill="#475569" />
          <path d="M104 28 L160 28 L160 80 L96 80 Z" fill="#334155" />
          {/* Falling water */}
          <rect x="56" y="24" width="44" height="54" fill="#38BDF8" />
          <path d="M64 28 V74 M76 30 V74 M88 28 V74" stroke="#E0F2FE" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 6" />
          {/* Splash & pool */}
          <rect x="0" y="76" width="160" height="20" fill="#0284C7" />
          <ellipse cx="78" cy="76" rx="32" ry="6" fill="#F0F9FF" />
          <circle cx="26" cy="22" r="10" fill="#16A34A" />
          <circle cx="136" cy="24" r="11" fill="#15803D" />
        </svg>
      );
    case 'island':
      return (
        <svg viewBox="0 0 160 96" className="w-full h-24 rounded-xl" aria-hidden="true">
          <rect width="160" height="96" fill="#BAE6FD" />
          <circle cx="30" cy="22" r="10" fill="#FDE047" />
          <rect x="0" y="64" width="160" height="32" fill="#0284C7" />
          <path d="M38 68 Q80 42 122 68 Z" fill="#FDE68A" />
          {/* Palm tree */}
          <path d="M82 54 Q88 38 80 26" fill="none" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />
          <path d="M80 26 Q64 20 56 30 M80 26 Q72 12 62 16 M80 26 Q96 18 106 28 M80 26 Q94 12 102 18" fill="none" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />
          <path d="M12 78 Q26 74 40 78 M112 82 Q128 78 144 82" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'mountain':
      return (
        <svg viewBox="0 0 160 96" className="w-full h-24 rounded-xl" aria-hidden="true">
          <rect width="160" height="96" fill="#DBEAFE" />
          <polygon points="10,96 58,28 106,96" fill="#64748B" />
          <polygon points="58,28 45,46 54,43 58,49 64,43 71,46" fill="#FFFFFF" />
          <polygon points="62,96 112,18 160,96" fill="#475569" />
          <polygon points="112,18 98,40 107,37 112,44 118,37 126,40" fill="#FFFFFF" />
          <rect x="0" y="84" width="160" height="12" fill="#16A34A" />
        </svg>
      );
    case 'valley':
      return (
        <svg viewBox="0 0 160 96" className="w-full h-24 rounded-xl" aria-hidden="true">
          <rect width="160" height="96" fill="#E0F2FE" />
          <path d="M0 24 Q40 28 76 74 L0 74 Z" fill="#15803D" />
          <path d="M160 22 Q118 28 84 74 L160 74 Z" fill="#166534" />
          <path d="M0 70 Q80 84 160 70 L160 96 L0 96 Z" fill="#22C55E" />
          {/* Gentle stream in valley floor */}
          <path d="M78 72 Q70 82 84 96 L96 96 Q84 82 84 72 Z" fill="#38BDF8" />
        </svg>
      );
    case 'beach':
      return (
        <svg viewBox="0 0 160 96" className="w-full h-24 rounded-xl" aria-hidden="true">
          <rect width="160" height="96" fill="#BAE6FD" />
          <circle cx="132" cy="22" r="10" fill="#FACC15" />
          <rect x="0" y="48" width="160" height="22" fill="#0EA5E9" />
          <path d="M0 66 Q80 56 160 70 L160 96 L0 96 Z" fill="#FDE68A" />
          {/* Beach umbrella */}
          <line x1="56" y1="42" x2="56" y2="78" stroke="#78350F" strokeWidth="3" />
          <path d="M32 48 Q56 26 80 48 Z" fill="#F43F5E" />
          <path d="M44 48 Q56 32 68 48 Z" fill="#FFFFFF" />
        </svg>
      );
    case 'river':
      return (
        <svg viewBox="0 0 160 96" className="w-full h-24 rounded-xl" aria-hidden="true">
          <rect width="160" height="96" fill="#DCFCE7" />
          <rect width="160" height="32" fill="#BAE6FD" />
          <path d="M0 32 Q80 24 160 32 L160 96 L0 96 Z" fill="#4ADE80" />
          {/* Winding blue river */}
          <path d="M76 30 Q98 44 64 60 T96 96 L64 96 Q38 78 58 60 T66 30 Z" fill="#0284C7" />
          <circle cx="26" cy="56" r="9" fill="#15803D" />
          <circle cx="132" cy="52" r="10" fill="#16A34A" />
        </svg>
      );
    case 'lake':
      return (
        <svg viewBox="0 0 160 96" className="w-full h-24 rounded-xl" aria-hidden="true">
          <rect width="160" height="96" fill="#E0F2FE" />
          <path d="M0 44 Q42 18 82 44 T160 38 L160 96 L0 96 Z" fill="#86EFAC" />
          {/* Calm oval lake */}
          <ellipse cx="80" cy="70" rx="56" ry="18" fill="#0EA5E9" stroke="#E0F2FE" strokeWidth="2.5" />
          <path d="M56 68 H82 M74 75 H106" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="48" r="8" fill="#15803D" />
          <circle cx="138" cy="48" r="9" fill="#15803D" />
        </svg>
      );
    case 'forest':
      return (
        <svg viewBox="0 0 160 96" className="w-full h-24 rounded-xl" aria-hidden="true">
          <rect width="160" height="96" fill="#ECFDF5" />
          <rect x="0" y="76" width="160" height="20" fill="#16A34A" />
          {[22, 52, 82, 112, 138].map((x, idx) => (
            <g key={x}>
              <rect x={x - 3} y="60" width="6" height="20" fill="#78350F" />
              <polygon
                points={`${x},${idx % 2 === 0 ? 18 : 26} ${x - 18},64 ${x + 18},64`}
                fill={idx % 2 === 0 ? '#15803D' : '#0D9488'}
              />
            </g>
          ))}
        </svg>
      );
  }
}

interface Unit5WorkbookProps {
  initialStation?: Unit5StationId;
}

export function Unit5Workbook({ initialStation = 'phonetics_nature' }: Unit5WorkbookProps) {
  const [station, setStation] = useState<Unit5StationId>(initialStation);

  useEffect(() => {
    setStation(initialStation);
  }, [initialStation]);

  // ===== STATION 1 STATES =====
  const [iRevealed, setIRevealed] = useState<Record<number, boolean>>({});
  const [iClicked, setIClicked] = useState<Record<string, boolean>>({});

  const [ii1Vals, setIi1Vals] = useState<Record<number, string>>({});
  const [ii1Checked, setIi1Checked] = useState(false);

  const [ii2Ans, setIi2Ans] = useState<Record<number, number>>({});

  // ===== STATION 2 STATES =====
  const [ii3Vals, setIi3Vals] = useState<Record<number, string>>({});
  const [ii3Active, setIi3Active] = useState<number>(1);
  const [ii3Checked, setIi3Checked] = useState(false);

  const [ii4Ans, setIi4Ans] = useState<Record<number, 'C' | 'U'>>({});

  const [ii5Vals, setIi5Vals] = useState<Record<number, string>>({});
  const [ii5Checked, setIi5Checked] = useState(false);

  // ===== STATION 3 STATES =====
  const [ii6Ans, setIi6Ans] = useState<Record<number, string>>({});
  const [ii7Ans, setIi7Ans] = useState<Record<number, number>>({});
  const [ii8Ans, setIi8Ans] = useState<Record<number, string>>({});
  const [ii9Ans, setIi9Ans] = useState<Record<number, 'a few' | 'a little'>>({});

  // ===== STATION 4 STATES =====
  const [ii10Ans, setIi10Ans] = useState<Record<string, 'must' | "mustn't">>({});
  const [ii11Vals, setIi11Vals] = useState<Record<number, string>>({});
  const [ii11Checked, setIi11Checked] = useState(false);
  const [ii12Vals, setIi12Vals] = useState<Record<number, string>>({});
  const [ii12Checked, setIi12Checked] = useState(false);

  // Computed counts
  const ii1Correct = U5_EX_II1_NATURE_PICS.filter(
    (p) => norm(ii1Vals[p.id] ?? '') === norm(p.answer)
  ).length;

  const ii2Correct = U5_EX_II2_PAIR_CHOICE.filter(
    (q) => ii2Ans[q.id] === q.correctIndex
  ).length;

  const ii3Correct = U5_EX_II3_CAMPING.filter((q) =>
    matchesAny(ii3Vals[q.id] ?? '', q.answers)
  ).length;

  const usedCampingWords = useMemo(() => {
    const s = new Set<string>();
    Object.values(ii3Vals).forEach((v) => {
      if (v.trim()) s.add(v.trim().toLowerCase());
    });
    return s;
  }, [ii3Vals]);

  const ii4Correct = U5_EX_II4_NOUNS.filter((n) => ii4Ans[n.id] === n.type).length;
  const ii5Correct = U5_EX_II5_MISTAKES.filter((m) =>
    matchesAny(ii5Vals[m.id] ?? '', m.acceptedCorrections)
  ).length;

  const ii6Correct = U5_EX_II6_QUANTIFIERS.filter((q) => ii6Ans[q.id] === q.answer).length;
  const ii7Correct = Object.values(U5_EX_II7_CHOICES).filter(
    (c) => ii7Ans[c.id] !== undefined && c.acceptedIndices.includes(ii7Ans[c.id])
  ).length;
  const ii8Correct = U5_EX_II8_QUANTIFIERS.filter((q) => ii8Ans[q.id] === q.answer).length;
  const ii9Correct = U5_EX_II9_FEW_LITTLE.filter((q) => ii9Ans[q.id] === q.answer).length;

  const ii10TotalBlanks = U5_EX_II10_MUST.reduce((sum, it) => sum + it.answers.length, 0);
  const ii10Correct = U5_EX_II10_MUST.reduce((sum, it) => {
    return (
      sum +
      it.answers.filter((ans, idx) => ii10Ans[`${it.id}_${idx}`] === ans).length
    );
  }, 0);

  const ii11Correct = U5_EX_II11_SITUATIONS.filter((s) =>
    matchesAny(ii11Vals[s.id] ?? '', s.answers)
  ).length;

  const ii12Correct = U5_EX_II12_MISTAKES.filter((m) =>
    matchesAny(ii12Vals[m.id] ?? '', [...m.acceptedCorrections, m.fixedSentence])
  ).length;

  const fullApplePieDialogue = useMemo(() => {
    return U5_EX_II7_DIALOGUE.map((line) =>
      line.segments
        .map((seg) => {
          if (typeof seg === 'string') return seg;
          const c = U5_EX_II7_CHOICES[seg];
          return c.choices[c.primaryIndex];
        })
        .join('')
    ).join(' ');
  }, []);

  return (
    <div className="space-y-6">
      {/* 7-Station Teal Workbook Navigation Header */}
      <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Sách Chinh phục Ngữ pháp &amp; Bài tập TA6 · Tập 1 · Trang 107 – 128
            </p>
            <h2 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
              Unit 5: Natural Wonders of Viet Nam — 7 Trạm Thực Hành &amp; Đề Kiểm Tra
            </h2>
          </div>
        </div>

        <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
          {STATIONS.map((st) => {
            const active = station === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setStation(st.id)}
                className={`rounded-xl border px-3 py-2.5 text-left transition-colors ${
                  active
                    ? 'border-teal-600 bg-teal-600 text-white shadow-2xs'
                    : 'border-teal-200/80 bg-white text-slate-800 hover:bg-teal-50'
                }`}
              >
                <p
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    active ? 'text-teal-100' : 'text-teal-700'
                  }`}
                >
                  {st.code} · {st.pages}
                </p>
                <p className="text-xs font-bold mt-0.5 line-clamp-2 leading-snug">
                  {st.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================================================
          TRẠM 01 · PHÁT ÂM /t/–/d/ & 9 KỲ QUAN SVG (TR.112–113)
         ============================================================ */}
      {station === 'phonetics_nature' && (
        <div className="space-y-6">
          {/* Bài I: Pronunciation Sentences */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài I · Trang 112 · Nghe &amp; nhận diện âm /t/ và /d/ trong câu
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Chạm vào từng từ có chứa âm /t/ hoặc /d/ rồi nghe phát âm chuẩn
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Quy ước màu khi mở đáp án: <strong className="text-teal-700">Xanh ngọc = /t/</strong> ·{' '}
                  <strong className="text-amber-700">Vàng cam = /d/</strong> ·{' '}
                  <strong className="text-violet-700">Tím = có cả /t/ và /d/</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const next: Record<number, boolean> = {};
                  const allOpen = U5_EX_I_PRONUNCIATION.every((s) => iRevealed[s.id]);
                  U5_EX_I_PRONUNCIATION.forEach((s) => {
                    next[s.id] = !allOpen;
                  });
                  setIRevealed(next);
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-3.5 py-2 text-xs font-bold text-teal-800 hover:bg-teal-100"
              >
                <Eye className="h-3.5 w-3.5" />
                {U5_EX_I_PRONUNCIATION.every((s) => iRevealed[s.id])
                  ? 'Ẩn tất cả đáp án'
                  : 'Hiện màu /t/ & /d/ cả 5 câu'}
              </button>
            </div>

            <div className="space-y-3">
              {U5_EX_I_PRONUNCIATION.map((sent) => {
                const revealed = iRevealed[sent.id];
                return (
                  <div
                    key={sent.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-500">Câu {sent.id}</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => speakEnglish(sent.fullText)}
                          className="inline-flex items-center gap-1 rounded-lg border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-800 hover:bg-teal-100"
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                          Nghe chuẩn
                        </button>
                        <button
                          type="button"
                          onClick={() => speakEnglish(sent.fullText, { slow: true })}
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          <Turtle className="h-3.5 w-3.5" />
                          Chậm
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setIRevealed((prev) => ({ ...prev, [sent.id]: !prev[sent.id] }))
                          }
                          className="text-xs font-semibold text-teal-700 hover:underline"
                        >
                          {revealed ? 'Ẩn' : 'Xem đáp án'}
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {sent.tokens.map((tok, tIdx) => {
                        const key = `${sent.id}_${tIdx}`;
                        const clicked = iClicked[key];
                        const showColor = revealed || clicked;
                        let cls =
                          'border-slate-200 bg-white text-slate-800 hover:border-teal-300';
                        if (showColor) {
                          if (tok.sound === 't') {
                            cls = 'border-teal-400 bg-teal-50 text-teal-900 font-bold';
                          } else if (tok.sound === 'd') {
                            cls = 'border-amber-400 bg-amber-50 text-amber-900 font-bold';
                          } else if (tok.sound === 'both') {
                            cls = 'border-violet-400 bg-violet-50 text-violet-900 font-bold';
                          } else if (clicked) {
                            cls = 'border-slate-300 bg-slate-100 text-slate-500';
                          }
                        }
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => {
                              setIClicked((prev) => ({ ...prev, [key]: true }));
                              speakEnglish(tok.text.replace(/[.,!?]/g, ''));
                            }}
                            title={tok.highlightNote ?? 'Chạm để nghe từ'}
                            className={`rounded-lg border px-2.5 py-1 text-sm transition-colors ${cls}`}
                          >
                            {tok.text}
                          </button>
                        );
                      })}
                    </div>

                    <p className="text-xs text-slate-600">Nghĩa: {sent.vi}</p>
                    {revealed && (
                      <p className="text-xs font-semibold text-teal-800">{sent.summaryVi}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.1: 9 Nature Wonder SVG Pictures */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.1 · Trang 112 · Nhìn tranh gọi tên 9 Kỳ quan &amp; Địa hình tự nhiên
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Viết từ tiếng Anh dựa theo chữ cái đầu gợi ý
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                  {ii1Correct}/9 đúng
                </span>
                <button
                  type="button"
                  onClick={() => setIi1Checked(true)}
                  className="rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-teal-700"
                >
                  Chấm điểm
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const filled: Record<number, string> = {};
                    U5_EX_II1_NATURE_PICS.forEach((p) => {
                      filled[p.id] = p.answer;
                    });
                    setIi1Vals(filled);
                    setIi1Checked(true);
                  }}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-3.5 w-3.5" />
                  Đáp án
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {U5_EX_II1_NATURE_PICS.map((item) => {
                const val = ii1Vals[item.id] ?? '';
                const ok = norm(val) === norm(item.answer);
                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 space-y-2.5"
                  >
                    <NatureWonderSvg svgKey={item.svgKey} />
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-700">
                        {item.id}. Gợi ý: <span className="font-ipa text-teal-700">{item.hintLetter}_______</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => speakEnglish(item.answer)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:underline"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        Nghe
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-500">{item.clueVi}</p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setIi1Vals((prev) => ({ ...prev, [item.id]: e.target.value }));
                        setIi1Checked(false);
                      }}
                      placeholder={`${item.hintLetter}...`}
                      className={`w-full rounded-lg border px-3 py-1.5 text-sm font-semibold focus:outline-none ${
                        ii1Checked
                          ? ok
                            ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-300 bg-white text-slate-900 focus:border-teal-500'
                      }`}
                    />
                    {ii1Checked && (
                      <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-amber-900'}`}>
                        {ok ? 'Đúng! ' : `Đáp án: ${item.answer} `}
                        <span className="font-ipa text-slate-500">{item.ipa}</span> ({item.meaningVi})
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.2: 8 Pair Choices */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.2 · Trang 112–113 · Khoanh tròn từ đúng (8 câu)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Chọn địa danh tự nhiên hợp ngữ cảnh
                </h3>
              </div>
              <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                {ii2Correct}/8 đúng
              </span>
            </div>

            <div className="space-y-2.5">
              {U5_EX_II2_PAIR_CHOICE.map((item) => {
                const picked = ii2Ans[item.id];
                const ok = picked === item.correctIndex;
                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
                  >
                    <div className="text-sm text-slate-900 leading-8 flex flex-wrap items-center gap-1.5">
                      <span className="font-bold text-slate-500">{item.id}.</span>
                      <span>{item.before}</span>
                      <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-0.5">
                        {item.choices.map((c, cIdx) => {
                          let cls = 'text-slate-700 hover:bg-teal-50';
                          if (picked !== undefined) {
                            if (cIdx === item.correctIndex) {
                              cls = 'bg-emerald-600 text-white font-bold';
                            } else if (picked === cIdx) {
                              cls = 'bg-rose-600 text-white font-bold';
                            } else {
                              cls = 'text-slate-400';
                            }
                          }
                          return (
                            <button
                              key={c}
                              type="button"
                              onClick={() => setIi2Ans((prev) => ({ ...prev, [item.id]: cIdx }))}
                              className={`rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${cls}`}
                            >
                              {c}
                            </button>
                          );
                        })}
                      </span>
                      <span>{item.after}</span>
                    </div>
                    {picked !== undefined && (
                      <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {ok ? 'Chính xác! ' : 'Chưa đúng. '}
                        {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ============================================================
          TRẠM 02 · ĐỒ CẮM TRẠI & 30 DANH TỪ C/U (TR.113–114)
         ============================================================ */}
      {station === 'camping_nouns' && (
        <div className="space-y-6">
          {/* Bài II.3: 10 Camping Items */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.3 · Trang 113 · Điền 10 vật dụng cắm trại từ hộp
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Hành trang khám phá thiên nhiên
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                  {ii3Correct}/10 đúng
                </span>
                <button
                  type="button"
                  onClick={() => setIi3Checked(true)}
                  className="rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-teal-700"
                >
                  Chấm bài
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const filled: Record<number, string> = {};
                    U5_EX_II3_CAMPING.forEach((q) => {
                      filled[q.id] = q.displayAnswer;
                    });
                    setIi3Vals(filled);
                    setIi3Checked(true);
                  }}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Eye className="h-3.5 w-3.5" />
                  Đáp án
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-teal-800 mb-2">
                Chạm vật dụng để điền vào câu {ii3Active}:
              </p>
              <div className="flex flex-wrap gap-2">
                {U5_EX_II3_BOX.map((w) => {
                  const used = usedCampingWords.has(w.toLowerCase());
                  return (
                    <button
                      key={w}
                      type="button"
                      onClick={() => {
                        setIi3Vals((prev) => ({ ...prev, [ii3Active]: w }));
                        setIi3Checked(false);
                        speakEnglish(w);
                        if (ii3Active < 10) setIi3Active(ii3Active + 1);
                      }}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors ${
                        used
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

            <div className="grid gap-3 md:grid-cols-2">
              {U5_EX_II3_CAMPING.map((item) => {
                const val = ii3Vals[item.id] ?? '';
                const ok = matchesAny(val, item.answers);
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3.5 space-y-2 ${
                      ii3Active === item.id
                        ? 'border-teal-400 bg-teal-50/30'
                        : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <p className="text-sm text-slate-900 leading-relaxed">
                      <span className="font-bold text-slate-500 mr-1">{item.id}.</span>
                      {item.before}{' '}
                      <input
                        type="text"
                        value={val}
                        onFocus={() => setIi3Active(item.id)}
                        onChange={(e) => {
                          setIi3Vals((prev) => ({ ...prev, [item.id]: e.target.value }));
                          setIi3Checked(false);
                        }}
                        className={`inline-block w-36 rounded-lg border px-2 py-0.5 text-xs font-bold focus:outline-none ${
                          ii3Checked
                            ? ok
                              ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                              : 'border-rose-400 bg-rose-50 text-rose-900'
                            : 'border-slate-300 bg-white text-slate-900 focus:border-teal-500'
                        }`}
                      />{' '}
                      {item.after}
                    </p>
                    {ii3Checked && (
                      <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-amber-900'}`}>
                        {ok ? 'Đúng! ' : `Đáp án: ${item.displayAnswer}. `}
                        {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.4: 30 Countable vs Uncountable Nouns */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.4 · Trang 114 · Phân loại 30 Danh từ Đếm được (C) &amp; Không đếm được (U)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Bảng luyện phản xạ nhanh C / U (11 C · 19 U)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                  Đúng: {ii4Correct}/30
                </span>
                <button
                  type="button"
                  onClick={() => setIi4Ans({})}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Làm lại
                </button>
              </div>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {U5_EX_II4_NOUNS.map((n) => {
                const picked = ii4Ans[n.id];
                const ok = picked === n.type;
                return (
                  <div
                    key={n.id}
                    className={`rounded-xl border p-3 space-y-2 transition-colors ${
                      picked === undefined
                        ? 'border-slate-200 bg-slate-50/40'
                        : ok
                          ? 'border-emerald-200 bg-emerald-50/50'
                          : 'border-rose-200 bg-rose-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => speakEnglish(n.word)}
                        className="inline-flex items-center gap-1.5 text-left group"
                      >
                        <span className="text-xs font-bold text-slate-400 tabular-nums">
                          {n.id}.
                        </span>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-teal-700">
                          {n.word}
                        </span>
                        <Volume2 className="h-3 w-3 text-slate-400 group-hover:text-teal-600" />
                      </button>
                      <div className="flex items-center gap-1">
                        {(['C', 'U'] as const).map((t) => {
                          let cls =
                            'border-slate-300 bg-white text-slate-700 hover:border-teal-400';
                          if (picked !== undefined) {
                            if (t === n.type) {
                              cls =
                                t === 'C'
                                  ? 'border-sky-600 bg-sky-600 text-white font-bold'
                                  : 'border-amber-600 bg-amber-600 text-white font-bold';
                            } else if (picked === t) {
                              cls = 'border-rose-500 bg-rose-600 text-white font-bold';
                            } else {
                              cls = 'border-slate-200 bg-white text-slate-300';
                            }
                          }
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setIi4Ans((prev) => ({ ...prev, [n.id]: t }))}
                              className={`h-7 w-8 rounded-lg border text-xs font-bold transition-colors ${cls}`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      {n.vi}
                      {picked !== undefined && (
                        <span className={`block mt-0.5 font-medium ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                          {n.noteVi}
                        </span>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.5: 10 Plural/Uncountable Mistake Fixes */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.5 · Trang 114 · Tìm và sửa lỗi danh từ số nhiều / không đếm được (10 câu)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Gõ từ đúng thay thế cho từ bị sai trong câu
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                  {ii5Correct}/10 đúng
                </span>
                <button
                  type="button"
                  onClick={() => setIi5Checked(true)}
                  className="rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-teal-700"
                >
                  Chấm bài
                </button>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U5_EX_II5_MISTAKES.map((m) => {
                const val = ii5Vals[m.id] ?? '';
                const ok = matchesAny(val, m.acceptedCorrections);
                return (
                  <div
                    key={m.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {m.id}. {m.sentence}
                    </p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setIi5Vals((prev) => ({ ...prev, [m.id]: e.target.value }));
                        setIi5Checked(false);
                      }}
                      placeholder="Gõ từ đúng (vd: carrots)..."
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                    />
                    {ii5Checked && (
                      <div
                        className={`rounded-lg border p-2 text-xs ${
                          ok
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                            : 'border-amber-200 bg-amber-50 text-amber-950'
                        }`}
                      >
                        <p className="font-bold">
                          {ok ? 'Chính xác! ' : `Sửa: ${m.wrongWord} → ${m.correctWord}. `}
                          ({m.fixedSentence})
                        </p>
                        <p className="text-slate-600 mt-0.5">{m.explainVi}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ============================================================
          TRẠM 03 · LƯỢNG TỪ & HỘI THOẠI APPLE PIE (TR.115–116)
         ============================================================ */}
      {station === 'quantifiers' && (
        <div className="space-y-6">
          {/* Bài II.6: a / an / some / any */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.6 · Trang 115 · Chọn a / an / some / any (12 câu)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Phản xạ nhanh mạo từ &amp; lượng từ
                </h3>
              </div>
              <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                {ii6Correct}/12 đúng
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U5_EX_II6_QUANTIFIERS.map((q) => {
                const picked = ii6Ans[q.id];
                const ok = picked === q.answer;
                return (
                  <div
                    key={q.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2.5"
                  >
                    <p className="text-sm text-slate-900 leading-relaxed">
                      <span className="font-bold text-slate-500 mr-1">{q.id}.</span>
                      {q.before}{' '}
                      <span className="inline-block min-w-[44px] border-b-2 border-teal-400 text-center font-ipa font-bold text-teal-800">
                        {picked ?? '___'}
                      </span>{' '}
                      {q.after}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(['a', 'an', 'some', 'any'] as const).map((opt) => {
                        let cls =
                          'border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:bg-teal-50';
                        if (picked !== undefined) {
                          if (opt === q.answer) {
                            cls = 'border-emerald-500 bg-emerald-600 text-white font-bold';
                          } else if (picked === opt) {
                            cls = 'border-rose-500 bg-rose-600 text-white font-bold';
                          } else {
                            cls = 'border-slate-200 bg-white text-slate-400';
                          }
                        }
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setIi6Ans((prev) => ({ ...prev, [q.id]: opt }))}
                            className={`rounded-lg border px-3 py-1 text-xs font-bold transition-colors ${cls}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {picked !== undefined && (
                      <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {ok ? 'Đúng! ' : `Đáp án: ${q.answer}. `}
                        {q.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.7: Apple Pie Dialogue (15 choices) */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.7 · Trang 115 · Hội thoại làm bánh táo (15 lựa chọn)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Lucy, Alan, Sue &amp; Andy chuẩn bị nguyên liệu làm Apple Pie
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                  {ii7Correct}/15 đúng
                </span>
                <button
                  type="button"
                  onClick={() => speakEnglish(fullApplePieDialogue)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800 hover:bg-teal-100"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                  Nghe hội thoại
                </button>
              </div>
            </div>

            <div className="space-y-2.5 rounded-xl border border-slate-200 bg-slate-50/50 p-4">
              {U5_EX_II7_DIALOGUE.map((line, lIdx) => (
                <div
                  key={lIdx}
                  className="flex flex-wrap items-baseline gap-1.5 text-sm leading-8 text-slate-800 border-b border-slate-100 pb-2 last:border-b-0 last:pb-0"
                >
                  <span className="font-display text-xs font-extrabold text-teal-800 w-12 shrink-0">
                    {line.speaker}:
                  </span>
                  <div className="flex-1 flex flex-wrap items-center gap-1">
                    {line.segments.map((seg, sIdx) => {
                      if (typeof seg === 'string') {
                        return <span key={sIdx}>{seg}</span>;
                      }
                      const choiceObj = U5_EX_II7_CHOICES[seg];
                      const picked = ii7Ans[seg];
                      return (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-0.5 mx-0.5"
                        >
                          <span className="px-1 text-[10px] font-bold text-slate-400">
                            ({seg})
                          </span>
                          {choiceObj.choices.map((opt, oIdx) => {
                            let cls = 'text-slate-700 hover:bg-teal-50';
                            if (picked !== undefined) {
                              if (choiceObj.acceptedIndices.includes(oIdx)) {
                                cls = 'bg-emerald-600 text-white font-bold';
                              } else if (picked === oIdx) {
                                cls = 'bg-rose-600 text-white font-bold';
                              } else {
                                cls = 'text-slate-400';
                              }
                            }
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setIi7Ans((prev) => ({ ...prev, [seg]: oIdx }))}
                                className={`rounded-md px-2 py-0.5 text-xs font-semibold transition-colors ${cls}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {Object.keys(ii7Ans).length > 0 && (
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 text-xs">
                {Object.keys(ii7Ans)
                  .map(Number)
                  .sort((a, b) => a - b)
                  .map((id) => {
                    const obj = U5_EX_II7_CHOICES[id];
                    const ok = obj.acceptedIndices.includes(ii7Ans[id]);
                    return (
                      <div
                        key={id}
                        className={`rounded-lg border p-2.5 ${
                          ok
                            ? 'border-emerald-200 bg-emerald-50/70 text-emerald-950'
                            : 'border-amber-200 bg-amber-50/70 text-amber-950'
                        }`}
                      >
                        <strong>({id})</strong> {obj.explainVi}
                      </div>
                    );
                  })}
              </div>
            )}
          </section>

          {/* Bài II.8: some / any / few / little */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.8 · Trang 115–116 · Điền some / any / few / little (10 câu)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Phân biệt a few (đếm được) vs a little (không đếm được)
                </h3>
              </div>
              <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                {ii8Correct}/10 đúng
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U5_EX_II8_QUANTIFIERS.map((q) => {
                const picked = ii8Ans[q.id];
                const ok = picked === q.answer;
                return (
                  <div
                    key={q.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
                  >
                    <p className="text-sm text-slate-900">
                      <span className="font-bold text-slate-500 mr-1">{q.id}.</span>
                      {q.before}{' '}
                      <span className="inline-block min-w-[48px] border-b-2 border-teal-400 text-center font-ipa font-bold text-teal-800">
                        {picked ?? '___'}
                      </span>{' '}
                      {q.after}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(['some', 'any', 'few', 'little'] as const).map((opt) => {
                        let cls =
                          'border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:bg-teal-50';
                        if (picked !== undefined) {
                          if (opt === q.answer) {
                            cls = 'border-emerald-500 bg-emerald-600 text-white font-bold';
                          } else if (picked === opt) {
                            cls = 'border-rose-500 bg-rose-600 text-white font-bold';
                          } else {
                            cls = 'border-slate-200 bg-white text-slate-400';
                          }
                        }
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setIi8Ans((prev) => ({ ...prev, [q.id]: opt }))}
                            className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition-colors ${cls}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {picked !== undefined && (
                      <p className={`text-xs ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {ok ? 'Đúng! ' : `Đáp án: ${q.answer}. `}
                        {q.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.9: Change some -> a few / a little */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.9 · Trang 116 · Đổi &ldquo;some&rdquo; thành &ldquo;a few&rdquo; hoặc &ldquo;a little&rdquo; (6 câu)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Nhìn danh từ đứng ngay sau để chọn chuẩn xác
                </h3>
              </div>
              <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                {ii9Correct}/6 đúng
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U5_EX_II9_FEW_LITTLE.map((item) => {
                const picked = ii9Ans[item.id];
                const ok = picked === item.answer;
                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2.5"
                  >
                    <p className="text-sm text-slate-900 leading-relaxed">
                      <span className="font-bold text-slate-500 mr-1">{item.id}.</span>
                      {item.beforeSome}{' '}
                      <span className="line-through text-slate-400">some</span>{' '}
                      <span className="font-ipa font-bold text-teal-700">
                        {picked ?? '______'}
                      </span>{' '}
                      {item.afterSome}
                    </p>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-2">
                        {(['a few', 'a little'] as const).map((opt) => {
                          let cls =
                            'border-slate-300 bg-white text-slate-700 hover:border-teal-400';
                          if (picked !== undefined) {
                            if (opt === item.answer) {
                              cls = 'border-emerald-500 bg-emerald-600 text-white font-bold';
                            } else if (picked === opt) {
                              cls = 'border-rose-500 bg-rose-600 text-white font-bold';
                            } else {
                              cls = 'border-slate-200 bg-white text-slate-400';
                            }
                          }
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setIi9Ans((prev) => ({ ...prev, [item.id]: opt }))}
                              className={`rounded-lg border px-3 py-1 text-xs font-bold transition-colors ${cls}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      <span className="font-ipa text-[11px] font-semibold text-slate-500">
                        {item.nounHighlight}
                      </span>
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
        </div>
      )}

      {/* ============================================================
          TRẠM 04 · MUST / MUSTN'T & SỬA LỖI SAI (TR.116–118)
         ============================================================ */}
      {station === 'must_mistakes' && (
        <div className="space-y-6">
          {/* Bài II.10: 20 must / mustn't */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.10 · Trang 116 · Chọn must hoặc mustn&apos;t (20 câu · 21 chỗ trống)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Nội quy lớp học, gia đình &amp; thiên nhiên
                </h3>
              </div>
              <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                {ii10Correct}/{ii10TotalBlanks} đúng
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U5_EX_II10_MUST.map((item) => {
                const allPicked = item.answers.every(
                  (_, idx) => ii10Ans[`${item.id}_${idx}`] !== undefined
                );
                const allCorrect = item.answers.every(
                  (ans, idx) => ii10Ans[`${item.id}_${idx}`] === ans
                );
                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
                  >
                    <div className="text-sm text-slate-900 leading-8 flex flex-wrap items-center gap-1">
                      <span className="font-bold text-slate-500 mr-1">{item.id}.</span>
                      {item.parts.map((part, pIdx) => {
                        const ans = item.answers[pIdx];
                        const key = `${item.id}_${pIdx}`;
                        const picked = ii10Ans[key];
                        return (
                          <span key={pIdx} className="inline-flex flex-wrap items-center gap-1">
                            <span>{part}</span>
                            {ans && (
                              <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-0.5">
                                {(['must', "mustn't"] as const).map((opt) => {
                                  let cls = 'text-slate-700 hover:bg-teal-50';
                                  if (picked !== undefined) {
                                    if (opt === ans) {
                                      cls = 'bg-emerald-600 text-white font-bold';
                                    } else if (picked === opt) {
                                      cls = 'bg-rose-600 text-white font-bold';
                                    } else {
                                      cls = 'text-slate-400';
                                    }
                                  }
                                  return (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() =>
                                        setIi10Ans((prev) => ({ ...prev, [key]: opt }))
                                      }
                                      className={`rounded-md px-2 py-0.5 text-xs font-bold transition-colors ${cls}`}
                                    >
                                      {opt}
                                    </button>
                                  );
                                })}
                              </span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                    {allPicked && (
                      <p className={`text-xs ${allCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {allCorrect ? 'Đúng! ' : 'Xem lại: '}
                        {item.explainVi}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.11: I must ... situations */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.11 · Trang 117 · Viết câu với &ldquo;I must ...&rdquo; (9 câu thực hành)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Xử lý tình huống hàng ngày bằng động từ khuyết thiếu must
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                  {ii11Correct}/9 đúng
                </span>
                <button
                  type="button"
                  onClick={() => setIi11Checked(true)}
                  className="rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-teal-700"
                >
                  Chấm bài
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-teal-100 bg-teal-50/60 p-3 text-xs text-teal-950">
              <strong>Câu mẫu (1):</strong> I eat too many sweets. <em>(stop eating)</em> →{' '}
              <span className="font-bold text-teal-800">I must stop eating sweets.</span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U5_EX_II11_SITUATIONS.map((s) => {
                const val = ii11Vals[s.id] ?? '';
                const ok = matchesAny(val, s.answers);
                return (
                  <div
                    key={s.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {s.id}. {s.situation}
                    </p>
                    <p className="font-ipa text-xs text-teal-800">Gợi ý: ({s.cue})</p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setIi11Vals((prev) => ({ ...prev, [s.id]: e.target.value }));
                        setIi11Checked(false);
                      }}
                      placeholder="I must ..."
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                    />
                    {ii11Checked && (
                      <div
                        className={`rounded-lg border p-2 text-xs ${
                          ok
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                            : 'border-amber-200 bg-amber-50 text-amber-950'
                        }`}
                      >
                        <p className="font-bold inline-flex items-center gap-1">
                          {ok ? (
                            <>
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                              Chính xác!
                            </>
                          ) : (
                            <>
                              <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
                              Đáp án: {s.displayAnswer}
                            </>
                          )}
                        </p>
                        <p className="text-slate-600 mt-0.5">{s.explainVi}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bài II.12: 10 Find & Correct Mistakes */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Bài II.12 · Trang 117–118 · Tìm và sửa lỗi sai tổng hợp (10 câu)
                </p>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  Ôn tổng hợp So sánh hơn · Lượng từ · Must/Mustn&apos;t
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-ipa text-xs font-bold text-teal-700 tabular-nums">
                  {ii12Correct}/10 đúng
                </span>
                <button
                  type="button"
                  onClick={() => setIi12Checked(true)}
                  className="rounded-xl bg-teal-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-teal-700"
                >
                  Chấm 10 câu
                </button>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {U5_EX_II12_MISTAKES.map((m) => {
                const val = ii12Vals[m.id] ?? '';
                const ok = matchesAny(val, [...m.acceptedCorrections, m.fixedSentence]);
                return (
                  <div
                    key={m.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {m.id}. {m.sentence}
                    </p>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => {
                        setIi12Vals((prev) => ({ ...prev, [m.id]: e.target.value }));
                        setIi12Checked(false);
                      }}
                      placeholder="Gõ từ đúng để sửa lỗi..."
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                    />
                    {ii12Checked && (
                      <div
                        className={`rounded-lg border p-2 text-xs ${
                          ok
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                            : 'border-amber-200 bg-amber-50 text-amber-950'
                        }`}
                      >
                        <p className="font-bold inline-flex items-center gap-1">
                          {ok ? (
                            <>
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                              Chính xác!
                            </>
                          ) : (
                            <>
                              <XCircle className="h-3.5 w-3.5 text-amber-600" />
                              Sửa: {m.wrongWord} → {m.correctWord}
                            </>
                          )}
                        </p>
                        <p className="text-slate-700 mt-0.5">{m.fixedSentence}</p>
                        <p className="text-slate-600 mt-0.5">{m.explainVi}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ============================================================
          TRẠM 05 · ĐỌC HIỂU (TR.118–120)
         ============================================================ */}
      {station === 'reading' && <Unit5Station5 />}

      {/* ============================================================
          TRẠM 06 · VIẾT (TR.120–121)
         ============================================================ */}
      {station === 'writing' && <Unit5Station6 />}

      {/* ============================================================
          TRẠM 07 · TEST FOR UNIT 5 — TRỌN BỘ 10 PHẦN (TR.122–128)
         ============================================================ */}
      {station === 'unit5_test' && <Unit5FullTestSection />}
    </div>
  );
}
