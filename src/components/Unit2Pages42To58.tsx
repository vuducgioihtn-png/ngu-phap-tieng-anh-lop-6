import { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Eye,
  HelpCircle,
  RotateCcw,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  TEST2_PART1_PHONETICS,
  TEST2_PART2_ODD_ONE_OUT,
  TEST2_PART3_MCQ,
  TEST2_PART4_BOX,
  TEST2_PART4_PREPOSITIONS,
  TEST2_PART5_VERBS,
  TEST2_PART6_WORD_FORM,
  TEST2_PART7_WHERE_QA,
  TEST2_PART8_DIALOGUE,
  TEST2_PART9_MCQS,
  TEST2_PART9_PASSAGE,
  TEST2_PART10_MCQS,
  TEST2_PART10_PASSAGE,
  TEST2_PART11_REWRITE,
  TEST2_PART12_WRITING,
  U2_EX2_ROOMS,
  U2_EX2_WORD_BOX,
  U2_EX3_ROOMS_META,
  U2_EX3_SORT_ITEMS,
  U2_EX4_FURNITURE,
  U2_EX4_WORD_BOX,
  U2_EX5_POSSESSIVE_CHOICE,
  U2_EX6_POSSESSIVE_MCQ,
  U2_EX7_POSSESSIVE_JOIN,
  U2_EX8_PREP_PICTURES,
  U2_EX9_PREP_CIRCLE,
  U2_EX10_IN_ON_AT,
  U2_EX11_MISTAKES,
  U2_EX_III1_BLANKS,
  U2_EX_III1_SEGMENTS,
  U2_EX_III2_MCQS,
  U2_EX_III2_PASSAGE,
  U2_EX_III3_PASSAGE,
  U2_EX_III3_QA,
  U2_EX_IV1_REWRITE,
  U2_EX_IV2_REORDER,
  U2_EX_IV3_CUES,
  U2_EX_IV3_FULL_PARAGRAPH,
  type PrepSceneKey,
  type RoomCategoryKey,
} from '../data/unit2Pages42To58';
import { speakEnglish } from '../utils/speech';

function norm(v: string): string {
  return v
    .trim()
    .toLowerCase()
    .replace(/’/g, "'")
    .replace(/\s+/g, ' ');
}

function normSentence(v: string): string {
  return norm(v).replace(/[.?!]+$/, '').replace(/\s+,/g, ',');
}

function matchList(userVal: string, targets: string[], sentenceMode = false): boolean {
  const fn = sentenceMode ? normSentence : norm;
  const u = fn(userVal);
  if (!u) return false;
  return targets.some((t) => fn(t) === u);
}

/* ==================== CUSTOM SVG PREPOSITION SCENES (EX II.8) ==================== */
function PrepSceneSvg({ sceneKey }: { sceneKey: PrepSceneKey }) {
  return (
    <svg viewBox="0 0 180 110" className="w-full h-28 rounded-xl border border-slate-200 bg-sky-50/50" fill="none" aria-hidden="true">
      {sceneKey === 'son_under_tree' && (
        <>
          <rect x="0" y="92" width="180" height="18" fill="#BBF7D0" />
          {/* Tree */}
          <rect x="78" y="48" width="14" height="44" fill="#92400E" />
          <circle cx="85" cy="34" r="24" fill="#34D399" stroke="#059669" strokeWidth="2" />
          <circle cx="66" cy="40" r="14" fill="#34D399" stroke="#059669" strokeWidth="2" />
          <circle cx="104" cy="40" r="14" fill="#34D399" stroke="#059669" strokeWidth="2" />
          {/* Boy sitting under tree */}
          <circle cx="106" cy="72" r="7" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
          <rect x="100" y="79" width="12" height="13" rx="3" fill="#0284C7" />
          <text x="122" y="84" fontSize="10" fontWeight="700" fill="#0369A1">Son</text>
        </>
      )}
      {sceneKey === 'mary_between_parents' && (
        <>
          <rect x="0" y="94" width="180" height="16" fill="#E2E8F0" />
          {/* Mother */}
          <circle cx="48" cy="36" r="10" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
          <path d="M36 50h24l4 44H32l4-44Z" fill="#EC4899" />
          <text x="34" y="106" fontSize="9" fontWeight="700" fill="#9D174D">Mother</text>
          {/* Mary in center */}
          <circle cx="90" cy="52" r="8" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
          <path d="M81 63h18l3 31H78l3-31Z" fill="#7C3AED" />
          <text x="78" y="106" fontSize="9" fontWeight="800" fill="#5B21B6">Mary</text>
          {/* Father */}
          <circle cx="132" cy="32" r="10" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
          <rect x="120" y="45" width="24" height="49" rx="4" fill="#0284C7" />
          <text x="118" y="106" fontSize="9" fontWeight="700" fill="#0369A1">Father</text>
        </>
      )}
      {sceneKey === 'dog_behind_box' && (
        <>
          <rect x="0" y="92" width="180" height="18" fill="#F1F5F9" />
          {/* Dog peeking behind */}
          <circle cx="102" cy="40" r="12" fill="#D97706" stroke="#92400E" strokeWidth="1.8" />
          <ellipse cx="91" cy="37" rx="4" ry="8" fill="#92400E" />
          <ellipse cx="113" cy="37" rx="4" ry="8" fill="#92400E" />
          <circle cx="98" cy="38" r="1.8" fill="#FFFFFF" />
          <circle cx="106" cy="38" r="1.8" fill="#FFFFFF" />
          <circle cx="102" cy="43" r="2.2" fill="#1E293B" />
          {/* Box in front */}
          <rect x="58" y="48" width="64" height="44" rx="4" fill="#FDE68A" stroke="#B45309" strokeWidth="2.2" />
          <line x1="58" y1="62" x2="122" y2="62" stroke="#B45309" strokeWidth="1.6" />
          <text x="78" y="80" fontSize="10" fontWeight="700" fill="#92400E">BOX</text>
        </>
      )}
      {sceneKey === 'table_next_to_sofa' && (
        <>
          <rect x="0" y="92" width="180" height="18" fill="#F1F5F9" />
          {/* Sofa */}
          <rect x="24" y="46" width="76" height="36" rx="6" fill="#7DD3FC" stroke="#0284C7" strokeWidth="2" />
          <rect x="20" y="56" width="10" height="28" rx="3" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.8" />
          <rect x="94" y="56" width="10" height="28" rx="3" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.8" />
          <path d="M30 84v8M94 84v8" stroke="#0369A1" strokeWidth="2.5" />
          <text x="48" y="69" fontSize="10" fontWeight="700" fill="#0C4A6E">SOFA</text>
          {/* Side table right next to it */}
          <rect x="114" y="58" width="40" height="8" rx="2" fill="#D97706" stroke="#92400E" strokeWidth="1.8" />
          <path d="M120 66v26M148 66v26" stroke="#92400E" strokeWidth="2.5" />
          <circle cx="134" cy="49" r="7" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.6" />
          <text x="118" y="105" fontSize="9" fontWeight="700" fill="#92400E">Table</text>
        </>
      )}
      {sceneKey === 'bertha_in_front_of_lisa' && (
        <>
          <rect x="0" y="94" width="180" height="16" fill="#F1F5F9" />
          {/* Lisa behind */}
          <circle cx="116" cy="36" r="10" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
          <rect x="106" y="48" width="20" height="44" rx="4" fill="#94A3B8" />
          <text x="106" y="106" fontSize="9" fontWeight="700" fill="#475569">Lisa</text>
          {/* Arrow indicating facing left */}
          <path d="M84 54H62M68 48l-6 6 6 6" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Bertha in front */}
          <circle cx="52" cy="40" r="10" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
          <rect x="42" y="52" width="20" height="42" rx="4" fill="#10B981" />
          <text x="36" y="106" fontSize="9" fontWeight="800" fill="#047857">Bertha</text>
        </>
      )}
      {sceneKey === 'phone_near_mary' && (
        <>
          <rect x="0" y="92" width="180" height="18" fill="#F1F5F9" />
          {/* Mary */}
          <circle cx="56" cy="38" r="10" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
          <path d="M44 50h24l3 42H41l3-42Z" fill="#7C3AED" />
          <text x="44" y="105" fontSize="9" fontWeight="700" fill="#5B21B6">Mary</text>
          {/* Dashed proximity line */}
          <line x1="78" y1="68" x2="108" y2="68" stroke="#0284C7" strokeWidth="1.8" strokeDasharray="4 3" />
          {/* Telephone on stand */}
          <rect x="112" y="58" width="38" height="34" rx="4" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <path d="M120 50c4-4 18-4 22 0" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
          <rect x="122" y="52" width="18" height="10" rx="2" fill="#1E293B" />
          <text x="116" y="82" fontSize="9" fontWeight="700" fill="#0369A1">Phone</text>
        </>
      )}
      {sceneKey === 'shop_opposite_cafe' && (
        <>
          {/* Road in middle */}
          <rect x="0" y="45" width="180" height="22" fill="#CBD5E1" />
          <line x1="8" y1="56" x2="172" y2="56" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 6" />
          {/* Sports shop top */}
          <rect x="44" y="8" width="92" height="32" rx="4" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
          <text x="58" y="28" fontSize="10" fontWeight="800" fill="#1E40AF">SPORTS SHOP</text>
          {/* Cafe bottom */}
          <rect x="52" y="72" width="76" height="30" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <text x="76" y="91" fontSize="10" fontWeight="800" fill="#92400E">CAFE</text>
        </>
      )}
      {sceneKey === 'cat_on_tv' && (
        <>
          <rect x="0" y="92" width="180" height="18" fill="#F1F5F9" />
          {/* TV */}
          <rect x="50" y="44" width="80" height="46" rx="5" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          <rect x="57" y="50" width="66" height="34" rx="2" fill="#BAE6FD" />
          <text x="83" y="71" fontSize="11" fontWeight="800" fill="#0369A1">TV</text>
          {/* Cat sitting on top of TV */}
          <ellipse cx="90" cy="36" rx="16" ry="8" fill="#FB923C" stroke="#C2410C" strokeWidth="1.8" />
          <circle cx="77" cy="29" r="7" fill="#FB923C" stroke="#C2410C" strokeWidth="1.8" />
          <path d="M72 24l2-6 4 5M78 23l3-5 2 6" fill="#FB923C" stroke="#C2410C" strokeWidth="1.5" />
          <path d="M106 36c6-2 10-7 8-12" stroke="#C2410C" strokeWidth="2.2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

/* ==================== LINDA'S STREET MAP SVG (EX III.3) ==================== */
function LindaStreetMapSvg() {
  const buildings = [
    { name: 'Bookshop 1', vi: 'Hiệu sách', color: 'fill-amber-100 stroke-amber-500 text-amber-900' },
    { name: "Linda's House", vi: 'Nhà Linda', color: 'fill-emerald-100 stroke-emerald-600 text-emerald-900', highlight: true },
    { name: 'Bookshop 2', vi: 'Hiệu sách', color: 'fill-amber-100 stroke-amber-500 text-amber-900' },
    { name: 'Bakery', vi: 'Tiệm bánh', color: 'fill-rose-100 stroke-rose-500 text-rose-900' },
    { name: 'Restaurant', vi: 'Nhà hàng', color: 'fill-sky-100 stroke-sky-500 text-sky-900' },
    { name: 'Police Station', vi: 'Đồn công an', color: 'fill-indigo-100 stroke-indigo-500 text-indigo-900' },
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 space-y-2">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
        Sơ đồ con phố Green Street của Linda (Trái → Phải)
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {buildings.map((b, i) => (
          <div
            key={b.name}
            className={`rounded-xl border p-2.5 text-center ${
              b.highlight
                ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-300'
                : 'border-slate-200 bg-white'
            }`}
          >
            <p className="font-ipa text-[10px] font-bold text-slate-400">#{i + 1}</p>
            <p className="font-display text-xs font-extrabold text-slate-900 mt-0.5">{b.name}</p>
            <p className="text-[11px] text-slate-500">{b.vi}</p>
          </div>
        ))}
      </div>
      <div className="h-3 rounded-full bg-slate-300 relative overflow-hidden">
        <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-white" />
      </div>
      <p className="text-[11px] text-slate-500 text-center">
        Green Street · Không có siêu thị (No supermarket)
      </p>
    </div>
  );
}

/* =====================================================================================
   STATION 03: BÀI II.2, II.3 (35-ITEM ROOM SORTER), II.4 (TRANG 42–43)
   ===================================================================================== */
export function Unit2Station3() {
  // Ex II.2
  const [ex2Inputs, setEx2Inputs] = useState<Record<number, string>>({});
  const [ex2Checked, setEx2Checked] = useState(false);

  // Ex II.3: 35 items into 5 rooms
  const [ex3Room, setEx3Room] = useState<RoomCategoryKey>('living_room');
  const [ex3Map, setEx3Map] = useState<Record<number, RoomCategoryKey>>({});
  const [ex3Checked, setEx3Checked] = useState(false);

  // Ex II.4
  const [ex4Inputs, setEx4Inputs] = useState<Record<string, string>>({});
  const [ex4Checked, setEx4Checked] = useState(false);

  const ex2Score = useMemo(
    () => U2_EX2_ROOMS.filter((it) => norm(ex2Inputs[it.id] ?? '') === norm(it.answer)).length,
    [ex2Inputs]
  );

  const ex3Score = useMemo(
    () =>
      U2_EX3_SORT_ITEMS.filter((it) => {
        const picked = ex3Map[it.id];
        return picked ? it.acceptedRooms.includes(picked) : false;
      }).length,
    [ex3Map]
  );

  const ex4Score = useMemo(() => {
    let ok = 0;
    U2_EX4_FURNITURE.forEach((it) => {
      it.answers.forEach((ans, idx) => {
        if (norm(ex4Inputs[`${it.id}-${idx}`] ?? '') === norm(ans)) ok++;
      });
    });
    return ok;
  }, [ex4Inputs]);

  return (
    <div className="space-y-6">
      {/* BÀI II.2 */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài II.2 · Điền tên phòng / khu vực trong nhà (Trang 42)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Chọn từ trong hộp điền vào 8 câu sau
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex2Checked && (
              <span className="font-ipa text-xs font-bold text-emerald-700">
                Đúng {ex2Score}/8
              </span>
            )}
            <button
              type="button"
              onClick={() => setEx2Checked(true)}
              className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
            >
              Chấm Bài II.2
            </button>
            <button
              type="button"
              onClick={() => {
                setEx2Inputs({});
                setEx2Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
          {U2_EX2_WORD_BOX.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => speakEnglish(w)}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-800 hover:border-sky-300"
            >
              <span>{w}</span>
              <Volume2 className="h-3 w-3 text-sky-600" />
            </button>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U2_EX2_ROOMS.map((item) => {
            const val = ex2Inputs[item.id] ?? '';
            const ok = norm(val) === norm(item.answer);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  ex2Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <p className="text-sm text-slate-800 leading-relaxed">
                  <strong className="font-ipa text-slate-500 mr-1.5">{item.id}.</strong>
                  {item.before}{' '}
                  <input
                    type="text"
                    value={val}
                    onChange={(e) =>
                      setEx2Inputs((prev) => ({ ...prev, [item.id]: e.target.value }))
                    }
                    placeholder="..."
                    className="inline-block w-36 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-sm font-semibold text-slate-900 focus:border-emerald-500 focus:outline-none"
                  />
                  {item.after}
                </p>
                {ex2Checked && (
                  <p className={`text-xs flex items-start gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                    <span>
                      <strong>{item.answer}</strong> — {item.explainVi}
                    </span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BÀI II.3: 35-ITEM 5-ROOM SORTER */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài II.3 · Phân loại 35 đồ vật vào 5 căn phòng (Trang 42–43)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Bước 1: Chọn căn phòng đang xếp · Bước 2: Chạm vào đồ vật để xếp vào phòng đó
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex3Checked && (
              <span className="font-ipa text-xs font-bold text-emerald-700">
                Đúng {ex3Score}/35
              </span>
            )}
            <button
              type="button"
              onClick={() => setEx3Checked(true)}
              className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
            >
              Chấm Bài II.3 ({Object.keys(ex3Map).length}/35)
            </button>
            <button
              type="button"
              onClick={() => {
                setEx3Map({});
                setEx3Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        {/* 5 Room Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {U2_EX3_ROOMS_META.map((r) => {
            const count = Object.values(ex3Map).filter((v) => v === r.id).length;
            const active = ex3Room === r.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setEx3Room(r.id)}
                className={`rounded-xl border px-3 py-2.5 text-left transition-colors ${
                  active
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <p className="font-display text-xs font-bold">{r.labelEn}</p>
                <p className={`text-[11px] ${active ? 'text-slate-300' : 'text-slate-500'}`}>
                  {r.labelVi} ({count})
                </p>
              </button>
            );
          })}
        </div>

        {/* 35 Items Grid */}
        <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {U2_EX3_SORT_ITEMS.map((item) => {
            const assigned = ex3Map[item.id];
            const roomMeta = U2_EX3_ROOMS_META.find((r) => r.id === assigned);
            const ok = assigned ? item.acceptedRooms.includes(assigned) : false;
            const primaryLabel =
              U2_EX3_ROOMS_META.find((r) => r.id === item.primaryRoom)?.labelEn ?? '';

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setEx3Map((prev) => ({
                    ...prev,
                    [item.id]: ex3Room,
                  }))
                }
                className={`rounded-xl border p-2.5 text-left transition-colors ${
                  ex3Checked
                    ? ok
                      ? 'border-emerald-400 bg-emerald-50/70'
                      : 'border-rose-400 bg-rose-50/70'
                    : roomMeta
                    ? roomMeta.colorCls
                    : 'border-slate-200 bg-white hover:border-sky-300'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-display text-xs font-bold text-slate-900 truncate">
                    {item.word}
                  </span>
                  <span
                    role="button"
                    tabIndex={-1}
                    onClick={(e) => {
                      e.stopPropagation();
                      speakEnglish(item.word);
                    }}
                    className="text-sky-600 hover:text-sky-800"
                    title={`Nghe ${item.word}`}
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 truncate">{item.meaningVi}</p>
                <p className="mt-1 font-ipa text-[10px] font-bold text-slate-700">
                  {roomMeta ? `→ ${roomMeta.labelEn}` : 'Chưa xếp'}
                </p>
                {ex3Checked && !ok && (
                  <p className="text-[10px] font-bold text-rose-700 mt-0.5">
                    Gợi ý: {primaryLabel}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* BÀI II.4: FURNITURE BLANKS */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài II.4 · Điền 10 tên đồ đạc trong nhà (Trang 43)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Hoàn thành 9 câu (10 chỗ trống) bằng từ trong hộp
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex4Checked && (
              <span className="font-ipa text-xs font-bold text-emerald-700">
                Đúng {ex4Score}/10
              </span>
            )}
            <button
              type="button"
              onClick={() => setEx4Checked(true)}
              className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
            >
              Chấm Bài II.4
            </button>
            <button
              type="button"
              onClick={() => {
                setEx4Inputs({});
                setEx4Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
          {U2_EX4_WORD_BOX.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => speakEnglish(w)}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-800 hover:border-sky-300"
            >
              <span>{w}</span>
              <Volume2 className="h-3 w-3 text-sky-600" />
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {U2_EX4_FURNITURE.map((item) => {
            const allOk = item.answers.every(
              (ans, idx) => norm(ex4Inputs[`${item.id}-${idx}`] ?? '') === norm(ans)
            );
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  ex4Checked
                    ? allOk
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <p className="text-sm text-slate-800 leading-relaxed">
                  <strong className="font-ipa text-slate-500 mr-1.5">{item.id}.</strong>
                  {item.parts.map((part, pIdx) => (
                    <span key={pIdx}>
                      {part}
                      {pIdx < item.answers.length && (
                        <input
                          type="text"
                          value={ex4Inputs[`${item.id}-${pIdx}`] ?? ''}
                          onChange={(e) =>
                            setEx4Inputs((prev) => ({
                              ...prev,
                              [`${item.id}-${pIdx}`]: e.target.value,
                            }))
                          }
                          placeholder="..."
                          className="mx-1 inline-block w-32 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-sm font-semibold text-slate-900 focus:border-emerald-500 focus:outline-none"
                        />
                      )}
                    </span>
                  ))}
                </p>
                {ex4Checked && (
                  <p className={`text-xs flex items-start gap-1.5 ${allOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {allOk ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                    <span>
                      <strong>{item.answers.join(' / ')}</strong> — {item.explainVi}
                    </span>
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

/* =====================================================================================
   STATION 04: BÀI II.5, II.6, II.7 — POSSESSIVE CASE MASTERY (TRANG 43–45)
   ===================================================================================== */
export function Unit2Station4() {
  const [ex5Ans, setEx5Ans] = useState<Record<number, number>>({});
  const [ex5Checked, setEx5Checked] = useState(false);

  const [ex6Ans, setEx6Ans] = useState<Record<number, number>>({});
  const [ex6Checked, setEx6Checked] = useState(false);

  const [ex7Inputs, setEx7Inputs] = useState<Record<number, string>>({});
  const [ex7Checked, setEx7Checked] = useState(false);

  const ex5Score = useMemo(
    () => U2_EX5_POSSESSIVE_CHOICE.filter((it) => ex5Ans[it.id] === it.correctIndex).length,
    [ex5Ans]
  );
  const ex6Score = useMemo(
    () => U2_EX6_POSSESSIVE_MCQ.filter((it) => ex6Ans[it.id] === it.correctIndex).length,
    [ex6Ans]
  );
  const ex7Score = useMemo(
    () =>
      U2_EX7_POSSESSIVE_JOIN.filter((it) =>
        matchList(ex7Inputs[it.id] ?? '', [it.answer, ...(it.accepted ?? [])], true)
      ).length,
    [ex7Inputs]
  );

  return (
    <div className="space-y-6">
      {/* Quick Possessive Case Reminder Strip */}
      <div className="grid gap-3 md:grid-cols-3 rounded-2xl border border-violet-200 bg-violet-50/60 p-4 text-xs">
        <div className="rounded-xl bg-white border border-violet-200 p-3">
          <p className="font-display font-bold text-violet-900">1. Danh từ số ít / tên riêng</p>
          <p className="text-slate-600 mt-1">Thêm <strong>&apos;s</strong> → <em>Peter&apos;s house, sister&apos;s friend, children&apos;s toys</em></p>
        </div>
        <div className="rounded-xl bg-white border border-violet-200 p-3">
          <p className="font-display font-bold text-violet-900">2. Danh từ số nhiều có -s</p>
          <p className="text-slate-600 mt-1">Chỉ thêm dấu <strong>&apos;</strong> → <em>boys&apos; toys, brothers&apos; names, students&apos; task</em></p>
        </div>
        <div className="rounded-xl bg-white border border-violet-200 p-3">
          <p className="font-display font-bold text-violet-900">3. Sở hữu chung vs Sở hữu riêng</p>
          <p className="text-slate-600 mt-1">Chung: <em>Mary and Paul&apos;s son</em> · Riêng: <em>Bill&apos;s and Jim&apos;s wives</em></p>
        </div>
      </div>

      {/* BÀI II.5 */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài II.5 · Chọn dạng Sở hữu cách đúng (12 câu · Trang 43–44)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Chạm vào từ đúng trong ngoặc cho từng câu
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex5Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {ex5Score}/12</span>}
            <button type="button" onClick={() => setEx5Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài II.5
            </button>
            <button
              type="button"
              onClick={() => {
                setEx5Ans({});
                setEx5Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U2_EX5_POSSESSIVE_CHOICE.map((item) => {
            const chosen = ex5Ans[item.id];
            const ok = chosen === item.correctIndex;
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  ex5Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <div className="flex flex-wrap items-center gap-1.5 text-sm text-slate-800">
                  <strong className="font-ipa text-slate-500">{item.id}.</strong>
                  <span>{item.before}</span>
                  <div className="inline-flex gap-1">
                    {item.options.map((opt, oIdx) => {
                      const active = chosen === oIdx;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setEx5Ans((prev) => ({ ...prev, [item.id]: oIdx }))}
                          className={`rounded-lg border px-2.5 py-0.5 text-xs font-bold transition-colors ${
                            active
                              ? 'border-sky-600 bg-sky-600 text-white'
                              : 'border-slate-300 bg-white text-slate-700 hover:border-sky-400'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  <span>{item.after}</span>
                </div>
                {ex5Checked && (
                  <p className={`text-xs flex items-start gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                    <span><strong>{item.options[item.correctIndex]}</strong> — {item.explainVi}</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BÀI II.6 */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài II.6 · Trắc nghiệm phân biệt Số nhiều &amp; Sở hữu cách (12 câu · Trang 44–45)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Chọn đáp án đúng A, B hoặc C
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex6Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {ex6Score}/12</span>}
            <button type="button" onClick={() => setEx6Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài II.6
            </button>
            <button
              type="button"
              onClick={() => {
                setEx6Ans({});
                setEx6Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U2_EX6_POSSESSIVE_MCQ.map((item) => {
            const chosen = ex6Ans[item.id];
            const ok = chosen === item.correctIndex;
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2.5 ${
                  ex6Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  <span className="font-ipa text-slate-500 mr-1.5">{item.id}.</span>
                  {item.question}
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  {item.options.map((opt, oIdx) => {
                    const letter = String.fromCharCode(65 + oIdx);
                    const active = chosen === oIdx;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setEx6Ans((prev) => ({ ...prev, [item.id]: oIdx }))}
                        className={`rounded-lg border px-2 py-1.5 text-xs font-semibold text-left transition-colors ${
                          active
                            ? 'border-sky-600 bg-sky-600 text-white'
                            : 'border-slate-200 bg-white text-slate-800 hover:border-sky-300'
                        }`}
                      >
                        <span className="font-ipa mr-1">{letter}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {ex6Checked && (
                  <p className={`text-xs flex items-start gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                    <span><strong>{String.fromCharCode(65 + item.correctIndex)}. {item.options[item.correctIndex]}</strong> — {item.explainVi}</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BÀI II.7 */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài II.7 · Nối 2 câu thành 1 câu dùng Sở hữu cách (Câu 2–10 · Trang 45)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Mẫu câu 1: Helen has a cat. It is white. → Helen&apos;s cat is white.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex7Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {ex7Score}/9</span>}
            <button type="button" onClick={() => setEx7Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài II.7
            </button>
            <button
              type="button"
              onClick={() => {
                setEx7Inputs({});
                setEx7Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {U2_EX7_POSSESSIVE_JOIN.map((item) => {
            const val = ex7Inputs[item.id] ?? '';
            const ok = matchList(val, [item.answer, ...(item.accepted ?? [])], true);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  ex7Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <p className="text-sm font-semibold text-slate-800">
                  <span className="font-ipa text-slate-500 mr-1.5">{item.id}.</span>
                  {item.prompt}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setEx7Inputs((prev) => ({ ...prev, [item.id]: e.target.value }))}
                  placeholder="Viết lại câu hoàn chỉnh có sử dụng 's hoặc '..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 focus:border-emerald-500 focus:outline-none"
                />
                {ex7Checked && (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className={`text-xs flex items-start gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                      <span><strong>{item.answer}</strong> — {item.explainVi}</span>
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
    </div>
  );
}

/* =====================================================================================
   STATION 05: BÀI II.8 (8 SVG SCENES), II.9, II.10 (IN/ON/AT), II.11 (MISTAKES) (TR.45–48)
   ===================================================================================== */
export function Unit2Station5() {
  const [ex8Ans, setEx8Ans] = useState<Record<number, number>>({});
  const [ex8Checked, setEx8Checked] = useState(false);

  const [ex9Ans, setEx9Ans] = useState<Record<string, number>>({});
  const [ex9Checked, setEx9Checked] = useState(false);

  const [ex10Ans, setEx10Ans] = useState<Record<string, 'in' | 'on' | 'at'>>({});
  const [ex10Checked, setEx10Checked] = useState(false);

  const [ex11Wrong, setEx11Wrong] = useState<Record<number, string>>({});
  const [ex11Fix, setEx11Fix] = useState<Record<number, string>>({});
  const [ex11Checked, setEx11Checked] = useState(false);

  const ex8Score = useMemo(
    () => U2_EX8_PREP_PICTURES.filter((it) => ex8Ans[it.id] === it.correctIndex).length,
    [ex8Ans]
  );

  const ex9Total = useMemo(
    () => U2_EX9_PREP_CIRCLE.reduce((acc, it) => acc + it.correctIndices.length, 0),
    []
  );
  const ex9Score = useMemo(() => {
    let ok = 0;
    U2_EX9_PREP_CIRCLE.forEach((it) => {
      it.correctIndices.forEach((ci, bIdx) => {
        if (ex9Ans[`${it.id}-${bIdx}`] === ci) ok++;
      });
    });
    return ok;
  }, [ex9Ans]);

  const ex10Total = useMemo(
    () => U2_EX10_IN_ON_AT.reduce((acc, it) => acc + it.answers.length, 0),
    []
  );
  const ex10Score = useMemo(() => {
    let ok = 0;
    U2_EX10_IN_ON_AT.forEach((it) => {
      it.answers.forEach((ans, bIdx) => {
        if (ex10Ans[`${it.id}-${bIdx}`] === ans) ok++;
      });
    });
    return ok;
  }, [ex10Ans]);

  const ex11Score = useMemo(
    () =>
      U2_EX11_MISTAKES.filter(
        (it) =>
          norm(ex11Wrong[it.id] ?? '') === norm(it.wrongWord) &&
          norm(ex11Fix[it.id] ?? '') === norm(it.correction)
      ).length,
    [ex11Wrong, ex11Fix]
  );

  return (
    <div className="space-y-6">
      {/* BÀI II.8: 8 PICTURE SCENES */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài II.8 · Nhìn 8 tranh minh họa chọn Giới từ vị trí đúng (Trang 45–46)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Quan sát vị trí các nhân vật &amp; đồ vật trong tranh rồi chọn A, B hoặc C
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex8Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {ex8Score}/8</span>}
            <button type="button" onClick={() => setEx8Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài II.8
            </button>
            <button
              type="button"
              onClick={() => {
                setEx8Ans({});
                setEx8Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {U2_EX8_PREP_PICTURES.map((item) => {
            const chosen = ex8Ans[item.id];
            const ok = chosen === item.correctIndex;
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 flex flex-col justify-between gap-3 ${
                  ex8Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-ipa text-xs font-bold text-slate-500">Tranh {item.id}</span>
                    <button
                      type="button"
                      onClick={() =>
                        speakEnglish(item.question.replace('____', item.options[item.correctIndex]))
                      }
                      className="text-sky-600 hover:text-sky-800"
                      title="Nghe câu mẫu"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <PrepSceneSvg sceneKey={item.sceneKey} />
                  <p className="text-[11px] text-slate-500">{item.captionVi}</p>
                  <p className="font-display text-sm font-bold text-slate-900">{item.question}</p>
                </div>

                <div className="space-y-1.5">
                  {item.options.map((opt, oIdx) => {
                    const letter = String.fromCharCode(65 + oIdx);
                    const active = chosen === oIdx;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setEx8Ans((prev) => ({ ...prev, [item.id]: oIdx }))}
                        className={`w-full rounded-lg border px-2.5 py-1.5 text-xs font-semibold text-left transition-colors ${
                          active
                            ? 'border-sky-600 bg-sky-600 text-white'
                            : 'border-slate-200 bg-white text-slate-800 hover:border-sky-300'
                        }`}
                      >
                        <span className="font-ipa mr-1.5">{letter}.</span>
                        {opt}
                      </button>
                    );
                  })}
                  {ex8Checked && (
                    <p className={`text-[11px] pt-1 flex items-start gap-1 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                      <span>{item.explainVi}</span>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BÀI II.9: CIRCLE PREPOSITION */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài II.9 · Khoanh chọn Giới từ đúng trong câu (10 câu · Trang 46–47)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Chạm vào giới từ phù hợp nhất với ngữ cảnh của từng câu
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex9Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {ex9Score}/{ex9Total}</span>}
            <button type="button" onClick={() => setEx9Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài II.9
            </button>
            <button
              type="button"
              onClick={() => {
                setEx9Ans({});
                setEx9Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {U2_EX9_PREP_CIRCLE.map((item) => {
            const allOk = item.correctIndices.every((ci, bIdx) => ex9Ans[`${item.id}-${bIdx}`] === ci);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  ex9Checked
                    ? allOk
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <div className="flex flex-wrap items-center gap-1.5 text-sm text-slate-800">
                  <strong className="font-ipa text-slate-500">{item.id}.</strong>
                  {item.parts.map((part, pIdx) => (
                    <span key={pIdx} className="inline-flex flex-wrap items-center gap-1">
                      <span>{part}</span>
                      {pIdx < item.choices.length && (
                        <span className="inline-flex gap-1 mx-0.5">
                          {item.choices[pIdx].map((opt, oIdx) => {
                            const active = ex9Ans[`${item.id}-${pIdx}`] === oIdx;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() =>
                                  setEx9Ans((prev) => ({ ...prev, [`${item.id}-${pIdx}`]: oIdx }))
                                }
                                className={`rounded-lg border px-2 py-0.5 text-xs font-bold transition-colors ${
                                  active
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
                {ex9Checked && (
                  <p className={`text-xs flex items-start gap-1.5 ${allOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {allOk ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                    <span>
                      <strong>
                        {item.correctIndices.map((ci, idx) => item.choices[idx][ci]).join(' — ')}
                      </strong>{' '}
                      · {item.explainVi}
                    </span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BÀI II.10: IN / ON / AT */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài II.10 · Phân biệt bộ 3 giới từ IN / ON / AT (10 câu · Trang 47)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Bấm chọn in, on hoặc at cho từng ô trống
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex10Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {ex10Score}/{ex10Total}</span>}
            <button type="button" onClick={() => setEx10Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài II.10
            </button>
            <button
              type="button"
              onClick={() => {
                setEx10Ans({});
                setEx10Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        {/* Triangle rule reminder */}
        <div className="grid gap-2 sm:grid-cols-3 rounded-xl border border-sky-200 bg-sky-50/70 p-3 text-xs">
          <div><strong className="text-sky-900">IN (Bên trong / Không gian lớn):</strong> phòng, nhà, hộp, tủ, thành phố (Sa Pa, London).</div>
          <div><strong className="text-sky-900">ON (Trên bề mặt / Tầng lầu):</strong> tường, thảm, kệ, ghế sofa, tầng 16 (the 16th floor).</div>
          <div><strong className="text-sky-900">AT (Điểm địa chỉ cụ thể):</strong> số nhà kèm tên phố (at 57 Pine Street).</div>
        </div>

        <div className="space-y-3">
          {U2_EX10_IN_ON_AT.map((item) => {
            const allOk = item.answers.every((ans, idx) => ex10Ans[`${item.id}-${idx}`] === ans);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  ex10Checked
                    ? allOk
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <div className="flex flex-wrap items-center gap-1.5 text-sm text-slate-800">
                  <strong className="font-ipa text-slate-500">{item.id}.</strong>
                  {item.parts.map((part, pIdx) => (
                    <span key={pIdx} className="inline-flex flex-wrap items-center gap-1">
                      <span>{part}</span>
                      {pIdx < item.answers.length && (
                        <span className="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 mx-0.5">
                          {(['in', 'on', 'at'] as const).map((prep) => {
                            const active = ex10Ans[`${item.id}-${pIdx}`] === prep;
                            return (
                              <button
                                key={prep}
                                type="button"
                                onClick={() =>
                                  setEx10Ans((prev) => ({ ...prev, [`${item.id}-${pIdx}`]: prep }))
                                }
                                className={`rounded-md px-2 py-0.5 text-xs font-bold transition-colors ${
                                  active ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                                }`}
                              >
                                {prep}
                              </button>
                            );
                          })}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                {ex10Checked && (
                  <p className={`text-xs flex items-start gap-1.5 ${allOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {allOk ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                    <span><strong>{item.answers.join(' — ')}</strong> · {item.explainVi}</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BÀI II.11: FIND & CORRECT 8 MISTAKES */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài II.11 · Tìm và sửa 8 lỗi sai ngữ pháp (Trang 47–48)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Gõ từ bị sai vào ô 1 và từ sửa đúng vào ô 2
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {ex11Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {ex11Score}/8</span>}
            <button type="button" onClick={() => setEx11Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài II.11
            </button>
            <button
              type="button"
              onClick={() => {
                setEx11Wrong({});
                setEx11Fix({});
                setEx11Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U2_EX11_MISTAKES.map((item) => {
            const ok =
              norm(ex11Wrong[item.id] ?? '') === norm(item.wrongWord) &&
              norm(ex11Fix[item.id] ?? '') === norm(item.correction);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2.5 ${
                  ex11Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  <span className="font-ipa text-slate-500 mr-1.5">{item.id}.</span>
                  {item.sentence}
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={ex11Wrong[item.id] ?? ''}
                    onChange={(e) => setEx11Wrong((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder="Từ sai..."
                    className="w-1/2 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-rose-700 focus:border-rose-500 focus:outline-none"
                  />
                  <span className="font-bold text-slate-400">→</span>
                  <input
                    type="text"
                    value={ex11Fix[item.id] ?? ''}
                    onChange={(e) => setEx11Fix((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    placeholder="Sửa thành..."
                    className="w-1/2 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-emerald-700 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                {ex11Checked && (
                  <p className={`text-xs flex items-start gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                    <span>
                      <strong>{item.wrongWord} → {item.correction}</strong> · {item.explainVi}
                    </span>
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

/* =====================================================================================
   STATION 06: READING (III.1, III.2, III.3) & WRITING (IV.1, IV.2, IV.3) (TRANG 48–51)
   ===================================================================================== */
export function Unit2Station6() {
  // III.1
  const [r1Inputs, setR1Inputs] = useState<Record<number, string>>({});
  const [r1Checked, setR1Checked] = useState(false);

  // III.2
  const [r2Ans, setR2Ans] = useState<Record<number, number>>({});
  const [r2Checked, setR2Checked] = useState(false);

  // III.3
  const [r3Inputs, setR3Inputs] = useState<Record<number, string>>({});
  const [r3Checked, setR3Checked] = useState(false);

  // IV.1
  const [w1Inputs, setW1Inputs] = useState<Record<number, string>>({});
  const [w1Checked, setW1Checked] = useState(false);

  // IV.2 Reorder (click-to-build)
  const [w2Picked, setW2Picked] = useState<Record<number, number[]>>({});
  const [w2Checked, setW2Checked] = useState(false);

  // IV.3 Guided paragraph
  const [w3Inputs, setW3Inputs] = useState<Record<number, string>>({});
  const [w3ShowModel, setW3ShowModel] = useState(false);

  const r1Score = useMemo(
    () => U2_EX_III1_BLANKS.filter((b) => norm(r1Inputs[b.id] ?? '') === norm(b.answer)).length,
    [r1Inputs]
  );
  const r2Score = useMemo(
    () => U2_EX_III2_MCQS.filter((q) => r2Ans[q.id] === q.correctIndex).length,
    [r2Ans]
  );
  const r3Score = useMemo(
    () =>
      U2_EX_III3_QA.filter((q) =>
        matchList(r3Inputs[q.id] ?? '', [q.answer, ...q.accepted], true)
      ).length,
    [r3Inputs]
  );
  const w1Score = useMemo(
    () =>
      U2_EX_IV1_REWRITE.filter((q) =>
        matchList(w1Inputs[q.id] ?? '', [q.answer, ...(q.accepted ?? [])], true)
      ).length,
    [w1Inputs]
  );
  const w2Score = useMemo(
    () =>
      U2_EX_IV2_REORDER.filter((q) => {
        const idxList = w2Picked[q.id] ?? [];
        const built = idxList.map((i) => q.words[i]).join(' ');
        return normSentence(built) === normSentence(q.answer);
      }).length,
    [w2Picked]
  );

  return (
    <div className="space-y-6">
      {/* III.1 PICTURE CLOZE */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài III.1 · Đọc điền từ theo tranh: &ldquo;I like my big house&rdquo; (Trang 48)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Điền tên 8 căn phòng / khu vực tương ứng vào đoạn văn
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {r1Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {r1Score}/8</span>}
            <button type="button" onClick={() => setR1Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài III.1
            </button>
            <button
              type="button"
              onClick={() => {
                setR1Inputs({});
                setR1Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        {/* Inline passage */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-8 text-slate-800">
          {U2_EX_III1_SEGMENTS.map((seg, sIdx) => {
            const blank = U2_EX_III1_BLANKS[sIdx];
            return (
              <span key={sIdx}>
                {seg}
                {blank && (
                  <input
                    type="text"
                    value={r1Inputs[blank.id] ?? ''}
                    onChange={(e) =>
                      setR1Inputs((prev) => ({ ...prev, [blank.id]: e.target.value }))
                    }
                    placeholder={`(${blank.id}) ${blank.cueVi}`}
                    className={`mx-1 inline-block w-40 rounded-lg border px-2 py-0.5 text-xs font-bold focus:outline-none ${
                      r1Checked
                        ? norm(r1Inputs[blank.id] ?? '') === norm(blank.answer)
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-rose-400 bg-rose-50 text-rose-900'
                        : 'border-slate-300 bg-white text-slate-900 focus:border-emerald-500'
                    }`}
                  />
                )}
              </span>
            );
          })}
        </div>

        {r1Checked && (
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {U2_EX_III1_BLANKS.map((b) => {
              const ok = norm(r1Inputs[b.id] ?? '') === norm(b.answer);
              return (
                <div
                  key={b.id}
                  className={`rounded-lg border p-2.5 text-xs ${
                    ok ? 'border-emerald-200 bg-emerald-50/50 text-emerald-900' : 'border-rose-200 bg-rose-50/50 text-rose-900'
                  }`}
                >
                  <p className="font-bold">({b.id}) {b.answer}</p>
                  <p className="text-[11px] opacity-90 mt-0.5">{b.explainVi}</p>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* III.2 PHONG'S COUNTRYSIDE HOUSE */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài III.2 · Đọc điền trắc nghiệm: Ngôi nhà ở quê của Phong (5 câu · Trang 48–49)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Đọc đoạn văn và chọn đáp án đúng cho 5 chỗ trống
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {r2Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {r2Score}/5</span>}
            <button type="button" onClick={() => setR2Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài III.2
            </button>
            <button
              type="button"
              onClick={() => {
                setR2Ans({});
                setR2Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {U2_EX_III2_PASSAGE}
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {U2_EX_III2_MCQS.map((q) => {
            const chosen = r2Ans[q.id];
            const ok = chosen === q.correctIndex;
            return (
              <div
                key={q.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  r2Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <p className="text-xs font-bold text-slate-900">{q.question}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {q.options.map((opt, oIdx) => {
                    const active = chosen === oIdx;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setR2Ans((prev) => ({ ...prev, [q.id]: oIdx }))}
                        className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold text-left ${
                          active ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-200 bg-white text-slate-700'
                        }`}
                      >
                        {String.fromCharCode(65 + oIdx)}. {opt}
                      </button>
                    );
                  })}
                </div>
                {r2Checked && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* III.3 LINDA'S STREET + INTERACTIVE MAP + 5 Q&A */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài III.3 · Đọc hiểu &amp; Sơ đồ phố nhà Linda (5 câu hỏi · Trang 49)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Đọc đoạn văn, đối chiếu sơ đồ phố và trả lời 5 câu hỏi bằng Tiếng Anh
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglish(U2_EX_III3_PASSAGE)}
              className="inline-flex items-center gap-1 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-bold text-sky-800 hover:bg-sky-100"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Nghe bài đọc
            </button>
            {r3Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {r3Score}/5</span>}
            <button type="button" onClick={() => setR3Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài III.3
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {U2_EX_III3_PASSAGE}
        </div>

        <LindaStreetMapSvg />

        <div className="space-y-3">
          {U2_EX_III3_QA.map((q) => {
            const val = r3Inputs[q.id] ?? '';
            const ok = matchList(val, [q.answer, ...q.accepted], true);
            return (
              <div
                key={q.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  r3Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  <span className="font-ipa text-slate-500 mr-1.5">{q.id}.</span>
                  {q.question}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setR3Inputs((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Viết câu trả lời tiếng Anh..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none"
                />
                {r3Checked && (
                  <p className={`text-xs flex items-start gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                    <span><strong>{q.answer}</strong> — {q.explainVi}</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* IV.1 REWRITE 10 POSSESSIVE SENTENCES */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài IV.1 · Viết lại 10 câu dùng Sở hữu cách (Trang 49–50)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Đổi cụm &ldquo;... of ...&rdquo; sang dạng &apos;s hoặc &apos;
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {w1Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {w1Score}/10</span>}
            <button type="button" onClick={() => setW1Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài IV.1
            </button>
            <button
              type="button"
              onClick={() => {
                setW1Inputs({});
                setW1Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {U2_EX_IV1_REWRITE.map((item) => {
            const val = w1Inputs[item.id] ?? '';
            const ok = matchList(val, [item.answer, ...(item.accepted ?? [])], true);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-3.5 space-y-2 ${
                  w1Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <p className="text-sm font-semibold text-slate-800">
                  <span className="font-ipa text-slate-500 mr-1.5">{item.id}.</span>
                  {item.prompt}
                </p>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setW1Inputs((prev) => ({ ...prev, [item.id]: e.target.value }))}
                  placeholder="Viết lại câu..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none"
                />
                {w1Checked && (
                  <p className={`text-xs flex items-start gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                    <span><strong>{item.answer}</strong> — {item.explainVi}</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* IV.2 REORDER 6 SENTENCES */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài IV.2 · Sắp xếp từ thành câu hoàn chỉnh (6 câu · Trang 50)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Chạm từng mảnh từ theo đúng thứ tự ngữ pháp (bấm lại để gỡ)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {w2Checked && <span className="font-ipa text-xs font-bold text-emerald-700">Đúng {w2Score}/6</span>}
            <button type="button" onClick={() => setW2Checked(true)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              Chấm Bài IV.2
            </button>
            <button
              type="button"
              onClick={() => {
                setW2Picked({});
                setW2Checked(false);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {U2_EX_IV2_REORDER.map((item) => {
            const picked = w2Picked[item.id] ?? [];
            const built = picked.map((i) => item.words[i]).join(' ');
            const ok = normSentence(built) === normSentence(item.answer);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-4 space-y-3 ${
                  w2Checked
                    ? ok
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-rose-300 bg-rose-50/50'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-ipa text-xs font-bold text-slate-500">Câu {item.id}</span>
                  <button
                    type="button"
                    onClick={() => setW2Picked((prev) => ({ ...prev, [item.id]: [] }))}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Xóa xếp lại
                  </button>
                </div>
                {/* Output tray */}
                <div className="min-h-10 rounded-lg border border-dashed border-slate-300 bg-white px-3 py-2 flex flex-wrap items-center gap-1.5">
                  {picked.length === 0 ? (
                    <span className="text-xs text-slate-400">Chạm vào các thẻ từ bên dưới...</span>
                  ) : (
                    picked.map((wordIdx, pos) => (
                      <button
                        key={`${wordIdx}-${pos}`}
                        type="button"
                        onClick={() =>
                          setW2Picked((prev) => ({
                            ...prev,
                            [item.id]: (prev[item.id] ?? []).filter((_, idx) => idx !== pos),
                          }))
                        }
                        className="rounded-lg bg-sky-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-sky-700"
                      >
                        {item.words[wordIdx]}
                      </button>
                    ))
                  )}
                </div>
                {/* Word bank */}
                <div className="flex flex-wrap gap-1.5">
                  {item.words.map((w, wIdx) => {
                    const used = picked.includes(wIdx);
                    return (
                      <button
                        key={`${w}-${wIdx}`}
                        type="button"
                        disabled={used}
                        onClick={() =>
                          setW2Picked((prev) => ({
                            ...prev,
                            [item.id]: [...(prev[item.id] ?? []), wIdx],
                          }))
                        }
                        className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors ${
                          used
                            ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
                            : 'border-slate-300 bg-white text-slate-800 hover:border-sky-400'
                        }`}
                      >
                        {w}
                      </button>
                    );
                  })}
                </div>
                {w2Checked && (
                  <div className="flex items-center justify-between gap-2">
                    <p className={`text-xs flex items-start gap-1.5 ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                      {ok ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" /> : <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />}
                      <span><strong>{item.answer}</strong> — {item.explainVi}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.answer)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline shrink-0"
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

      {/* IV.3: 9-CUE GUIDED PARAGRAPH */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Bài IV.3 · Viết đoạn văn miêu tả Phòng ngủ yêu thích từ 9 gợi ý (Trang 50–51)
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
              Tập viết từng câu rồi ghép thành đoạn văn hoàn chỉnh
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setW3ShowModel((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-700"
            >
              <Eye className="h-3.5 w-3.5" />
              {w3ShowModel ? 'Ẩn bài mẫu chuẩn' : 'Xem đáp án & đoạn văn mẫu'}
            </button>
          </div>
        </div>

        <div className="space-y-2.5">
          {U2_EX_IV3_CUES.map((c) => (
            <div key={c.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 space-y-1.5">
              <p className="font-ipa text-xs font-bold text-slate-700">
                Gợi ý {c.id}: {c.cue}
              </p>
              <input
                type="text"
                value={w3Inputs[c.id] ?? ''}
                onChange={(e) => setW3Inputs((prev) => ({ ...prev, [c.id]: e.target.value }))}
                placeholder="Viết câu đầy đủ từ gợi ý trên..."
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none"
              />
              {w3ShowModel && (
                <p className="text-xs text-emerald-800">
                  <strong>Đáp án chuẩn:</strong> {c.answer}{' '}
                  <span className="text-slate-500">({c.explainVi})</span>
                </p>
              )}
            </div>
          ))}
        </div>

        {w3ShowModel && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Đoạn văn hoàn chỉnh chuẩn Sách bài tập (Trang 50–51)
              </p>
              <button
                type="button"
                onClick={() => speakEnglish(U2_EX_IV3_FULL_PARAGRAPH)}
                className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
              >
                <Volume2 className="h-3.5 w-3.5" />
                Nghe cả đoạn
              </button>
            </div>
            <p className="text-sm leading-relaxed text-slate-900 font-medium">
              {U2_EX_IV3_FULL_PARAGRAPH}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

/* =====================================================================================
   STATION 07: TEST FOR UNIT 2 — COMPLETE 12-PART EXAM (TRANG 52–58)
   ===================================================================================== */
export function Unit2FullTestSection() {
  const [p1Ans, setP1Ans] = useState<Record<number, number>>({});
  const [p2Ans, setP2Ans] = useState<Record<number, number>>({});
  const [p3Ans, setP3Ans] = useState<Record<number, number>>({});
  const [p4Inputs, setP4Inputs] = useState<Record<string, string>>({});
  const [p5Inputs, setP5Inputs] = useState<Record<string, string>>({});
  const [p6Inputs, setP6Inputs] = useState<Record<number, string>>({});
  const [p7Q, setP7Q] = useState<Record<number, string>>({});
  const [p7A, setP7A] = useState<Record<number, string>>({});
  const [p8Inputs, setP8Inputs] = useState<Record<number, string>>({});
  const [p9Ans, setP9Ans] = useState<Record<number, number>>({});
  const [p10Ans, setP10Ans] = useState<Record<number, number>>({});
  const [p11Inputs, setP11Inputs] = useState<Record<number, string>>({});
  const [p12Essay, setP12Essay] = useState('');
  const [showP12Model, setShowP12Model] = useState(false);

  const [graded, setGraded] = useState(false);

  const scores = useMemo(() => {
    const s1 = TEST2_PART1_PHONETICS.filter((q) => p1Ans[q.id] === q.correctIndex).length;
    const s2 = TEST2_PART2_ODD_ONE_OUT.filter((q) => p2Ans[q.id] === q.correctIndex).length;
    const s3 = TEST2_PART3_MCQ.filter((q) => p3Ans[q.id] === q.correctIndex).length;
    let s4 = 0;
    let t4 = 0;
    TEST2_PART4_PREPOSITIONS.forEach((q) => {
      q.answers.forEach((ans, idx) => {
        t4++;
        if (norm(p4Inputs[`${q.id}-${idx}`] ?? '') === norm(ans)) s4++;
      });
    });
    let s5 = 0;
    let t5 = 0;
    TEST2_PART5_VERBS.forEach((q) => {
      q.answers.forEach((ans, idx) => {
        t5++;
        const accepted = q.acceptedPerBlank?.[idx] ?? [ans];
        if (matchList(p5Inputs[`${q.id}-${idx}`] ?? '', accepted, false)) s5++;
      });
    });
    const s6 = TEST2_PART6_WORD_FORM.filter((q) => {
      const accepted = q.answer === 'favourite' ? ['favourite', 'favorite'] : [q.answer];
      return matchList(p6Inputs[q.id] ?? '', accepted, false);
    }).length;
    const s7 = TEST2_PART7_WHERE_QA.filter(
      (q) =>
        matchList(p7Q[q.id] ?? '', [q.questionAnswer, ...(q.acceptedQuestions ?? [])], true) &&
        matchList(p7A[q.id] ?? '', [q.replyAnswer, ...(q.acceptedReplies ?? [])], true)
    ).length;
    const s8 = TEST2_PART8_DIALOGUE.filter((q) =>
      matchList(p8Inputs[q.id] ?? '', [q.answer, ...q.accepted], true)
    ).length;
    const s9 = TEST2_PART9_MCQS.filter((q) => p9Ans[q.id] === q.correctIndex).length;
    const s10 = TEST2_PART10_MCQS.filter((q) => p10Ans[q.id] === q.correctIndex).length;
    const s11 = TEST2_PART11_REWRITE.filter((q) =>
      matchList(p11Inputs[q.id] ?? '', [q.answer, ...(q.accepted ?? [])], true)
    ).length;

    const totalCorrect = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11;
    const totalMax = 10 + 6 + 15 + t4 + t5 + 8 + 8 + 8 + 5 + 5 + 8;
    return { s1, s2, s3, s4, t4, s5, t5, s6, s7, s8, s9, s10, s11, totalCorrect, totalMax };
  }, [p1Ans, p2Ans, p3Ans, p4Inputs, p5Inputs, p6Inputs, p7Q, p7A, p8Inputs, p9Ans, p10Ans, p11Inputs]);

  const essayWordCount = useMemo(() => {
    const trimmed = p12Essay.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  }, [p12Essay]);

  const handleResetAll = () => {
    setP1Ans({});
    setP2Ans({});
    setP3Ans({});
    setP4Inputs({});
    setP5Inputs({});
    setP6Inputs({});
    setP7Q({});
    setP7A({});
    setP8Inputs({});
    setP9Ans({});
    setP10Ans({});
    setP11Inputs({});
    setGraded(false);
  };

  const partAnchors = [
    { id: 't2-p1', label: 'I. Phát âm (10)' },
    { id: 't2-p2', label: 'II. Khác loại (6)' },
    { id: 't2-p3', label: 'III. Trắc nghiệm (15)' },
    { id: 't2-p4', label: 'IV. Giới từ (10)' },
    { id: 't2-p5', label: 'V. Chia động từ (10)' },
    { id: 't2-p6', label: 'VI. Từ loại (8)' },
    { id: 't2-p7', label: 'VII. Hỏi Where (8)' },
    { id: 't2-p8', label: 'VIII. Hội thoại (8)' },
    { id: 't2-p9', label: 'IX. Đọc điền (5)' },
    { id: 't2-p10', label: 'X. Đọc hiểu (5)' },
    { id: 't2-p11', label: 'XI. Viết lại câu (8)' },
    { id: 't2-p12', label: 'XII. Viết đoạn văn' },
  ];

  return (
    <div className="space-y-6">
      {/* Sticky Exam Control Header */}
      <section className="rounded-2xl border border-sky-200 bg-sky-50/70 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-800">
              TEST FOR UNIT 2 · Đề Kiểm Tra Toàn Diện 12 Phần (Trang 52–58)
            </p>
            <h3 className="font-display text-xl font-extrabold text-slate-900 mt-0.5">
              Chinh phục trọn vẹn 12 phần Đề thi Unit 2: My House
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setGraded(true)}
              className="rounded-xl bg-sky-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-sky-700"
            >
              Nộp bài &amp; Chấm điểm 11 phần tự động
            </button>
            <button
              type="button"
              onClick={handleResetAll}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Làm lại đề
            </button>
          </div>
        </div>

        {graded && (
          <div className="rounded-xl border border-emerald-300 bg-white p-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Tổng điểm phần trắc nghiệm &amp; điền tự động (I → XI)
              </p>
              <p className="font-display text-2xl font-extrabold text-slate-900 mt-0.5 tabular-nums">
                {scores.totalCorrect} / {scores.totalMax} ý đúng (
                {Math.round((scores.totalCorrect / scores.totalMax) * 100)}%)
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] font-ipa text-slate-600">
              <span>I: {scores.s1}/10</span>
              <span>· II: {scores.s2}/6</span>
              <span>· III: {scores.s3}/15</span>
              <span>· IV: {scores.s4}/{scores.t4}</span>
              <span>· V: {scores.s5}/{scores.t5}</span>
              <span>· VI: {scores.s6}/8</span>
              <span>· VII: {scores.s7}/8</span>
              <span>· VIII: {scores.s8}/8</span>
              <span>· IX: {scores.s9}/5</span>
              <span>· X: {scores.s10}/5</span>
              <span>· XI: {scores.s11}/8</span>
            </div>
          </div>
        )}

        {/* Quick-jump anchors */}
        <div className="flex flex-wrap gap-1.5">
          {partAnchors.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="rounded-lg border border-sky-200 bg-white px-2.5 py-1 text-[11px] font-bold text-sky-900 hover:bg-sky-100"
            >
              {a.label}
            </a>
          ))}
        </div>
      </section>

      {/* PART I: PHONETICS (10) */}
      <section id="t2-p1" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <h4 className="font-display text-base font-bold text-slate-900">
          Part I. Chọn từ có phát âm đuôi -s / -es khác các từ còn lại (10 câu)
        </h4>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST2_PART1_PHONETICS.map((q) => {
            const chosen = p1Ans[q.id];
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className={`rounded-xl border p-3 space-y-2 ${graded ? (ok ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <div className="flex items-center justify-between">
                  <span className="font-ipa text-xs font-bold text-slate-500">Câu {q.id}</span>
                  <button type="button" onClick={() => speakEnglish(q.options.join(', '))} className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700 hover:underline">
                    <Volume2 className="h-3.5 w-3.5" /> Nghe 4 từ
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {q.options.map((opt, idx) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setP1Ans((prev) => ({ ...prev, [q.id]: idx }))}
                      className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold text-left ${
                        chosen === idx ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-sky-300'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  ))}
                </div>
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART II: ODD ONE OUT (6) */}
      <section id="t2-p2" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <h4 className="font-display text-base font-bold text-slate-900">
          Part II. Chọn từ khác loại (Odd one out · 6 câu)
        </h4>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST2_PART2_ODD_ONE_OUT.map((q) => {
            const chosen = p2Ans[q.id];
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className={`rounded-xl border p-3 space-y-2 ${graded ? (ok ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <span className="font-ipa text-xs font-bold text-slate-500">Câu {q.id}</span>
                <div className="grid grid-cols-2 gap-1.5">
                  {q.options.map((opt, idx) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setP2Ans((prev) => ({ ...prev, [q.id]: idx }))}
                      className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold text-left ${
                        chosen === idx ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-sky-300'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  ))}
                </div>
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART III: MULTIPLE CHOICE (15) */}
      <section id="t2-p3" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <h4 className="font-display text-base font-bold text-slate-900">
          Part III. Chọn đáp án đúng nhất A, B, C hoặc D (15 câu)
        </h4>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST2_PART3_MCQ.map((q) => {
            const chosen = p3Ans[q.id];
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className={`rounded-xl border p-3.5 space-y-2 ${graded ? (ok ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <p className="text-sm font-semibold text-slate-900">
                  <span className="font-ipa text-slate-500 mr-1.5">{q.id}.</span>
                  {q.question}
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {q.options.map((opt, idx) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setP3Ans((prev) => ({ ...prev, [q.id]: idx }))}
                      className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold text-left ${
                        chosen === idx ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-sky-300'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  ))}
                </div>
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART IV: PREPOSITIONS FROM BOX (10) */}
      <section id="t2-p4" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <h4 className="font-display text-base font-bold text-slate-900">
          Part IV. Điền giới từ thích hợp từ hộp cho sẵn (10 câu)
        </h4>
        <div className="flex flex-wrap gap-1.5 rounded-xl border border-slate-200 bg-slate-50 p-3">
          {TEST2_PART4_BOX.map((w) => (
            <span key={w} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-ipa text-xs font-bold text-slate-800">
              {w}
            </span>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST2_PART4_PREPOSITIONS.map((q) => {
            const allOk = q.answers.every((ans, idx) => norm(p4Inputs[`${q.id}-${idx}`] ?? '') === norm(ans));
            return (
              <div key={q.id} className={`rounded-xl border p-3.5 space-y-2 ${graded ? (allOk ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <p className="text-sm text-slate-800 leading-relaxed">
                  <strong className="font-ipa text-slate-500 mr-1.5">{q.id}.</strong>
                  {q.parts.map((part, idx) => (
                    <span key={idx}>
                      {part}
                      {idx < q.answers.length && (
                        <input
                          type="text"
                          value={p4Inputs[`${q.id}-${idx}`] ?? ''}
                          onChange={(e) => setP4Inputs((prev) => ({ ...prev, [`${q.id}-${idx}`]: e.target.value }))}
                          placeholder="..."
                          className="mx-1 inline-block w-24 rounded-lg border border-slate-300 bg-white px-2 py-0.5 text-xs font-bold text-slate-900 focus:border-sky-500 focus:outline-none"
                        />
                      )}
                    </span>
                  ))}
                </p>
                {graded && (
                  <p className={`text-[11px] ${allOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{q.answers.join(' / ')}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART V: VERB TENSE (10) */}
      <section id="t2-p5" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <h4 className="font-display text-base font-bold text-slate-900">
          Part V. Chia dạng đúng của động từ trong ngoặc (10 câu)
        </h4>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST2_PART5_VERBS.map((q) => {
            const allOk = q.answers.every((ans, idx) => {
              const acc = q.acceptedPerBlank?.[idx] ?? [ans];
              return matchList(p5Inputs[`${q.id}-${idx}`] ?? '', acc, false);
            });
            return (
              <div key={q.id} className={`rounded-xl border p-3.5 space-y-2 ${graded ? (allOk ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <p className="text-sm text-slate-800 leading-relaxed">
                  <strong className="font-ipa text-slate-500 mr-1.5">{q.id}.</strong>
                  {q.parts.map((part, idx) => (
                    <span key={idx}>
                      {part}
                      {idx < q.answers.length && (
                        <input
                          type="text"
                          value={p5Inputs[`${q.id}-${idx}`] ?? ''}
                          onChange={(e) => setP5Inputs((prev) => ({ ...prev, [`${q.id}-${idx}`]: e.target.value }))}
                          placeholder="..."
                          className="mx-1 inline-block w-32 rounded-lg border border-slate-300 bg-white px-2 py-0.5 text-xs font-bold text-slate-900 focus:border-sky-500 focus:outline-none"
                        />
                      )}
                    </span>
                  ))}
                </p>
                {graded && (
                  <p className={`text-[11px] ${allOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{q.answers.join(' / ')}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VI: WORD FORM (8) */}
      <section id="t2-p6" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <h4 className="font-display text-base font-bold text-slate-900">
          Part VI. Cho dạng đúng của từ in hoa trong ngoặc (Word Form · 8 câu)
        </h4>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST2_PART6_WORD_FORM.map((q) => {
            const accepted = q.answer === 'favourite' ? ['favourite', 'favorite'] : [q.answer];
            const ok = matchList(p6Inputs[q.id] ?? '', accepted, false);
            return (
              <div key={q.id} className={`rounded-xl border p-3.5 space-y-2 ${graded ? (ok ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <p className="text-sm text-slate-800 leading-relaxed">
                  <strong className="font-ipa text-slate-500 mr-1.5">{q.id}.</strong>
                  {q.before}{' '}
                  <input
                    type="text"
                    value={p6Inputs[q.id] ?? ''}
                    onChange={(e) => setP6Inputs((prev) => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder={q.rootWord}
                    className="mx-1 inline-block w-32 rounded-lg border border-slate-300 bg-white px-2 py-0.5 text-xs font-bold text-slate-900 focus:border-sky-500 focus:outline-none"
                  />{' '}
                  {q.after}{' '}
                  <span className="font-ipa text-xs font-bold text-sky-700">({q.rootWord})</span>
                </p>
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{q.answer}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VII: WHERE Q&A (8) */}
      <section id="t2-p7" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <h4 className="font-display text-base font-bold text-slate-900">
          Part VII. Đặt câu hỏi với Where và trả lời theo gợi ý (8 câu)
        </h4>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST2_PART7_WHERE_QA.map((q) => {
            const okQ = matchList(p7Q[q.id] ?? '', [q.questionAnswer, ...(q.acceptedQuestions ?? [])], true);
            const okA = matchList(p7A[q.id] ?? '', [q.replyAnswer, ...(q.acceptedReplies ?? [])], true);
            const allOk = okQ && okA;
            return (
              <div key={q.id} className={`rounded-xl border p-3.5 space-y-2 ${graded ? (allOk ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <p className="font-ipa text-xs font-bold text-slate-700">
                  {q.id}. {q.cue}
                </p>
                <input
                  type="text"
                  value={p7Q[q.id] ?? ''}
                  onChange={(e) => setP7Q((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Câu hỏi: Where is / are ...?"
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-900 focus:border-sky-500 focus:outline-none"
                />
                <input
                  type="text"
                  value={p7A[q.id] ?? ''}
                  onChange={(e) => setP7A((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Câu trả lời..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-900 focus:border-sky-500 focus:outline-none"
                />
                {graded && (
                  <p className={`text-[11px] ${allOk ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{q.questionAnswer}</strong> — {q.replyAnswer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART VIII: DIALOGUE TUAN & HA (8) */}
      <section id="t2-p8" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <h4 className="font-display text-base font-bold text-slate-900">
          Part VIII. Hoàn thành câu hỏi của Tuấn trong đoạn hội thoại với Hà (8 câu)
        </h4>
        <div className="space-y-3">
          {TEST2_PART8_DIALOGUE.map((d) => {
            const ok = matchList(p8Inputs[d.id] ?? '', [d.answer, ...d.accepted], true);
            return (
              <div key={d.id} className={`rounded-xl border p-3.5 space-y-2 ${graded ? (ok ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-xs font-bold text-sky-700">Tuan ({d.id}):</span>
                  <input
                    type="text"
                    value={p8Inputs[d.id] ?? ''}
                    onChange={(e) => setP8Inputs((prev) => ({ ...prev, [d.id]: e.target.value }))}
                    placeholder={d.tuanPromptHint}
                    className="flex-1 min-w-56 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <p className="text-xs text-slate-700">
                  <strong className="text-emerald-700">Ha:</strong> {d.haReply}
                </p>
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{d.answer}</strong> — {d.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART IX: NAM'S VILLA CLOZE (5) */}
      <section id="t2-p9" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <h4 className="font-display text-base font-bold text-slate-900">
          Part IX. Đọc đoạn văn về biệt thự của Nam và chọn từ điền chỗ trống (5 câu)
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {TEST2_PART9_PASSAGE}
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {TEST2_PART9_MCQS.map((q) => {
            const chosen = p9Ans[q.id];
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className={`rounded-xl border p-3 space-y-2 ${graded ? (ok ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <p className="text-xs font-bold text-slate-900">{q.question}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {q.options.map((opt, idx) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setP9Ans((prev) => ({ ...prev, [q.id]: idx }))}
                      className={`rounded-lg border px-2 py-1 text-xs font-semibold text-left ${
                        chosen === idx ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-200 bg-white text-slate-800'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  ))}
                </div>
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART X: LAURY'S BEDROOM READING (5) */}
      <section id="t2-p10" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="font-display text-base font-bold text-slate-900">
            Part X. Đọc hiểu đoạn văn về phòng ngủ của Laury và chọn đáp án đúng (5 câu)
          </h4>
          <button
            type="button"
            onClick={() => speakEnglish(TEST2_PART10_PASSAGE)}
            className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-800 hover:bg-sky-100"
          >
            <Volume2 className="h-3.5 w-3.5" /> Nghe bài đọc
          </button>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-800">
          {TEST2_PART10_PASSAGE}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST2_PART10_MCQS.map((q) => {
            const chosen = p10Ans[q.id];
            const ok = chosen === q.correctIndex;
            return (
              <div key={q.id} className={`rounded-xl border p-3.5 space-y-2 ${graded ? (ok ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <p className="text-xs font-bold text-slate-900">{q.id}. {q.question}</p>
                <div className="space-y-1">
                  {q.options.map((opt, idx) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setP10Ans((prev) => ({ ...prev, [q.id]: idx }))}
                      className={`w-full rounded-lg border px-2.5 py-1.5 text-xs font-semibold text-left ${
                        chosen === idx ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-200 bg-white text-slate-800'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  ))}
                </div>
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART XI: REWRITE 8 EQUIVALENT SENTENCES */}
      <section id="t2-p11" className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <h4 className="font-display text-base font-bold text-slate-900">
          Part XI. Viết lại câu giữ nguyên nghĩa (8 câu)
        </h4>
        <div className="grid gap-3 md:grid-cols-2">
          {TEST2_PART11_REWRITE.map((q) => {
            const ok = matchList(p11Inputs[q.id] ?? '', [q.answer, ...(q.accepted ?? [])], true);
            return (
              <div key={q.id} className={`rounded-xl border p-3.5 space-y-2 ${graded ? (ok ? 'border-emerald-300 bg-emerald-50/40' : 'border-rose-300 bg-rose-50/40') : 'border-slate-200 bg-slate-50/40'}`}>
                <p className="text-sm font-semibold text-slate-800">
                  <span className="font-ipa text-slate-500 mr-1.5">{q.id}.</span>
                  {q.prompt}
                </p>
                <p className="text-xs font-semibold text-sky-700">Bắt đầu bằng: {q.starter}</p>
                <input
                  type="text"
                  value={p11Inputs[q.id] ?? ''}
                  onChange={(e) => setP11Inputs((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Viết lại câu hoàn chỉnh..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 focus:border-sky-500 focus:outline-none"
                />
                {graded && (
                  <p className={`text-[11px] ${ok ? 'text-emerald-800' : 'text-rose-800'}`}>
                    <strong>{q.answer}</strong> — {q.explainVi}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART XII: GUIDED WRITING */}
      <section id="t2-p12" className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Part XII · Tập viết đoạn văn miêu tả căn phòng yêu thích (Trang 58)
            </p>
            <h4 className="font-display text-base font-bold text-slate-900 mt-0.5">
              {TEST2_PART12_WRITING.promptVi}
            </h4>
          </div>
          <span className="font-ipa text-xs font-bold text-slate-600 tabular-nums">
            Số từ: {essayWordCount} từ
          </span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5">
          <p className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <HelpCircle className="h-3.5 w-3.5 text-sky-600" />
            Checklist giúp bài viết đạt điểm tối đa:
          </p>
          <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
            {TEST2_PART12_WRITING.checklistVi.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <textarea
          rows={5}
          value={p12Essay}
          onChange={(e) => setP12Essay(e.target.value)}
          placeholder="My favourite room in my house is..."
          className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none"
        />

        <div className="flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setShowP12Model((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-sky-300 bg-sky-50 px-4 py-2 text-xs font-bold text-sky-900 hover:bg-sky-100"
          >
            <Eye className="h-3.5 w-3.5" />
            {showP12Model ? 'Ẩn bài văn mẫu' : 'Xem bài văn mẫu chuẩn SGK & Dịch tiếng Việt'}
          </button>
          <button
            type="button"
            onClick={() => setGraded(true)}
            className="rounded-xl bg-sky-600 px-5 py-2 text-xs font-bold text-white hover:bg-sky-700"
          >
            Chấm toàn bộ Đề TEST Unit 2
          </button>
        </div>

        {showP12Model && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Bài mẫu chuẩn Sách bài tập (Đáp án Trang 160 / PDF Tr.168)
              </p>
              <button
                type="button"
                onClick={() => speakEnglish(TEST2_PART12_WRITING.sampleParagraph)}
                className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
              >
                <Volume2 className="h-3.5 w-3.5" />
                Nghe bài mẫu
              </button>
            </div>
            <p className="text-sm leading-relaxed text-slate-900 font-medium">
              {TEST2_PART12_WRITING.sampleParagraph}
            </p>
            <p className="text-xs leading-relaxed text-slate-600 border-t border-emerald-200 pt-2">
              <strong>Dịch nghĩa:</strong> {TEST2_PART12_WRITING.sampleTranslationVi}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
