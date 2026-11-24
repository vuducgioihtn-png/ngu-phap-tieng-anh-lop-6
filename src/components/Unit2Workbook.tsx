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
  UNIT2_HOUSE_PICS_10,
  UNIT2_SOUND_SORT_34,
  UNIT2_SOUND_SORT_ORDER,
  type EndingSoundCategory,
  type HouseIconKey,
} from '../data/unit2Pages35To41';
import { speakEnglish } from '../utils/speech';
import {
  Unit2FullTestSection,
  Unit2Station3,
  Unit2Station4,
  Unit2Station5,
  Unit2Station6,
} from './Unit2Pages42To58';

export type Unit2StationId =
  | 'sound_sort'
  | 'house_pics'
  | 'rooms_furniture'
  | 'possessive'
  | 'prepositions'
  | 'reading_writing'
  | 'unit2_test';

const UNIT2_STATIONS: { id: Unit2StationId; num: string; label: string; pages: string }[] = [
  { id: 'sound_sort', num: '01', label: 'Bài I · 34 từ /z/–/s/–/ɪz/', pages: 'Tr.41' },
  { id: 'house_pics', num: '02', label: 'Bài II.1 · 10 tranh Nhà', pages: 'Tr.41–42' },
  { id: 'rooms_furniture', num: '03', label: 'Bài II.2–4 · Phòng & Đồ đạc', pages: 'Tr.42–43' },
  { id: 'possessive', num: '04', label: 'Bài II.5–7 · Sở hữu cách', pages: 'Tr.43–45' },
  { id: 'prepositions', num: '05', label: 'Bài II.8–11 · Giới từ & Lỗi sai', pages: 'Tr.45–48' },
  { id: 'reading_writing', num: '06', label: 'Bài III–IV · Đọc hiểu & Viết', pages: 'Tr.48–51' },
  { id: 'unit2_test', num: '07', label: 'TEST FOR UNIT 2 (12 phần)', pages: 'Tr.52–58' },
];

function normalizeWord(v: string): string {
  return v.trim().toLowerCase().replace(/\s+/g, ' ');
}

function HouseRoomSvg({ iconKey }: { iconKey: HouseIconKey }) {
  const cls = 'h-14 w-14';
  switch (iconKey) {
    case 'country_house':
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" aria-hidden="true">
          <path d="M10 31L32 14l22 17" stroke="#B45309" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 28v24h34V28" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.2" />
          <rect x="27" y="38" width="10" height="14" rx="1.5" fill="#F59E0B" stroke="#B45309" strokeWidth="1.8" />
          <rect x="19" y="34" width="6" height="6" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
          <circle cx="53" cy="39" r="6" fill="#34D399" stroke="#059669" strokeWidth="1.8" />
          <path d="M53 45v7M6 52h52" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'apartment':
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" aria-hidden="true">
          <rect x="16" y="10" width="32" height="44" rx="3" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          {[16, 25, 34].map((y) => (
            <g key={y}>
              <rect x="22" y={y} width="6" height="5" rx="1" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
              <rect x="36" y={y} width="6" height="5" rx="1" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
            </g>
          ))}
          <rect x="28" y="44" width="8" height="10" fill="#0284C7" />
          <path d="M10 54h44" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'villa':
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" aria-hidden="true">
          <path d="M10 28h44v22H10V28Z" fill="#ECFDF5" stroke="#059669" strokeWidth="2.2" />
          <path d="M18 16h28v12H18V16Z" fill="#D1FAE5" stroke="#059669" strokeWidth="2.2" />
          <rect x="26" y="36" width="12" height="14" fill="#FFFFFF" stroke="#059669" strokeWidth="1.8" />
          <rect x="14" y="34" width="8" height="8" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" />
          <rect x="42" y="34" width="8" height="8" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" />
          <ellipse cx="32" cy="55" rx="20" ry="3.5" fill="#7DD3FC" />
        </svg>
      );
    case 'town_house':
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" aria-hidden="true">
          <rect x="10" y="22" width="14" height="32" fill="#F1F5F9" stroke="#64748B" strokeWidth="2" />
          <rect x="24" y="14" width="16" height="40" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <rect x="40" y="22" width="14" height="32" fill="#F1F5F9" stroke="#64748B" strokeWidth="2" />
          <rect x="29" y="20" width="6" height="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
          <rect x="29" y="30" width="6" height="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
          <rect x="29" y="43" width="6" height="11" fill="#0284C7" />
        </svg>
      );
    case 'stilt_house':
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" aria-hidden="true">
          <path d="M10 26L32 12l22 14" stroke="#92400E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14" y="26" width="36" height="14" fill="#FDE68A" stroke="#B45309" strokeWidth="2.2" />
          <path d="M18 40v14M32 40v14M46 40v14" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 40l-4 14M28 40l-4 14M22 45h4M21 49h4" stroke="#B45309" strokeWidth="1.6" />
        </svg>
      );
    case 'garden':
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" aria-hidden="true">
          <circle cx="22" cy="26" r="11" fill="#A7F3D0" stroke="#059669" strokeWidth="2.2" />
          <path d="M22 37v15" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
          <circle cx="44" cy="36" r="5" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
          <path d="M44 41v11" stroke="#059669" strokeWidth="2.2" />
          <path d="M8 52h48" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="38" cy="46" r="3" fill="#FDA4AF" />
          <circle cx="50" cy="46" r="3" fill="#93C5FD" />
        </svg>
      );
    case 'living_room':
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" aria-hidden="true">
          <rect x="12" y="30" width="40" height="14" rx="4" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2.2" />
          <rect x="10" y="34" width="6" height="12" rx="2" fill="#7DD3FC" stroke="#0284C7" strokeWidth="1.8" />
          <rect x="48" y="34" width="6" height="12" rx="2" fill="#7DD3FC" stroke="#0284C7" strokeWidth="1.8" />
          <rect x="22" y="14" width="20" height="12" rx="2" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" />
          <path d="M16 46v5M48 46v5" stroke="#0369A1" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );
    case 'bedroom':
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" aria-hidden="true">
          <rect x="10" y="32" width="44" height="14" rx="3" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="2.2" />
          <rect x="14" y="25" width="14" height="7" rx="2.5" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="1.8" />
          <path d="M10 22v28M54 32v18" stroke="#6D28D9" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="48" cy="18" r="5" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.8" />
        </svg>
      );
    case 'kitchen':
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" aria-hidden="true">
          <rect x="12" y="26" width="26" height="24" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.2" />
          <circle cx="20" cy="31" r="2" fill="#B45309" />
          <circle cx="30" cy="31" r="2" fill="#B45309" />
          <rect x="17" y="36" width="16" height="10" rx="1.5" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.6" />
          <rect x="42" y="16" width="12" height="34" rx="2" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M42 29h12" stroke="#0284C7" strokeWidth="1.8" />
        </svg>
      );
    case 'bathroom':
      return (
        <svg viewBox="0 0 64 64" className={cls} fill="none" aria-hidden="true">
          <path d="M12 34h40v8a8 8 0 0 1-8 8H20a8 8 0 0 1-8-8v-8Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
          <path d="M18 34V18a6 6 0 0 1 12 0v2" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M27 24l-2 4M31 24l0 4M34 24l2 4" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 50v4M46 50v4" stroke="#0369A1" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function Unit2Workbook({
  initialStation = 'sound_sort',
}: {
  initialStation?: Unit2StationId;
}) {
  const [station, setStation] = useState<Unit2StationId>(initialStation);

  useEffect(() => {
    setStation(initialStation);
  }, [initialStation]);

  // Station 1: 34-word /z/ - /s/ - /ɪz/ sorter
  const [sortMap, setSortMap] = useState<Record<number, EndingSoundCategory>>({});
  const [sortChecked, setSortChecked] = useState(false);
  const [showSortCheat, setShowSortCheat] = useState(true);

  // Station 2: 10 house/room picture cards
  const [picInputs, setPicInputs] = useState<Record<number, string>>({});
  const [picHints, setPicHints] = useState<Record<number, boolean>>({});
  const [picChecked, setPicChecked] = useState(false);

  const orderedWords = useMemo(() => {
    const byId = new Map(UNIT2_SOUND_SORT_34.map((w) => [w.id, w]));
    return UNIT2_SOUND_SORT_ORDER.map((id) => byId.get(id)!).filter(Boolean);
  }, []);

  const sortCorrectCount = useMemo(
    () => UNIT2_SOUND_SORT_34.filter((w) => sortMap[w.id] === w.category).length,
    [sortMap]
  );

  const picCorrectCount = useMemo(
    () =>
      UNIT2_HOUSE_PICS_10.filter((item) => {
        const val = normalizeWord(picInputs[item.id] ?? '');
        const accepted = [item.answer, ...(item.accepted ?? [])].map(normalizeWord);
        return accepted.includes(val);
      }).length,
    [picInputs]
  );

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 sm:p-6 space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Sách Chinh phục Ngữ pháp &amp; Bài tập Tiếng Anh 6 · Tập 1 (Trọn bộ Unit 2 · Trang 35–58)
          </p>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Unit 2: My House — 7 Trạm Thực Hành Chi Tiết &amp; Đề Kiểm Tra 12 Phần
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Đầy đủ từ Bài I (34 từ /z/–/s/–/ɪz/) → Bài II.1–II.11 (Phòng, Đồ đạc, Sở hữu cách, 8 Tranh giới từ, Sửa lỗi) → Bài III–IV (Đọc &amp; Viết) → TEST FOR UNIT 2 (12 phần).
          </p>
        </div>

        {/* 7 Station Switcher */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {UNIT2_STATIONS.map((st) => {
            const active = station === st.id;
            const isTest = st.id === 'unit2_test';
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setStation(st.id)}
                className={`rounded-xl border px-3 py-2.5 text-left transition-colors ${
                  active
                    ? isTest
                      ? 'border-sky-600 bg-sky-600 text-white'
                      : 'border-emerald-600 bg-emerald-600 text-white'
                    : isTest
                    ? 'border-sky-300 bg-sky-50 text-sky-950 hover:bg-sky-100'
                    : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-ipa text-[11px] font-bold ${active ? 'text-white/80' : 'text-slate-400'}`}>
                    Trạm {st.num}
                  </span>
                  <span className={`font-ipa text-[10px] font-semibold ${active ? 'text-white/90' : 'text-slate-500'}`}>
                    {st.pages}
                  </span>
                </div>
                <p className="font-display text-xs font-bold mt-0.5 truncate">{st.label}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* ==================== STATION 01: 34-WORD /z/ - /s/ - /ɪz/ SORTER ==================== */}
      {station === 'sound_sort' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Bài I · Phân loại 34 danh từ vào 3 cột /z/ · /s/ · /ɪz/ (Trang 41)
              </p>
              <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                Bấm nút loa để nghe và chọn nhóm phát âm đuôi đúng cho từng từ
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setShowSortCheat((v) => !v)}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                <Eye className="h-3.5 w-3.5" />
                {showSortCheat ? 'Ẩn mẹo 3 quy tắc' : 'Hiện mẹo 3 quy tắc'}
              </button>
              <button
                type="button"
                onClick={() => setSortChecked(true)}
                className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
              >
                Chấm điểm ({Object.keys(sortMap).length}/34)
              </button>
              <button
                type="button"
                onClick={() => {
                  setSortMap({});
                  setSortChecked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </div>

          {showSortCheat && (
            <div className="grid gap-3 md:grid-cols-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
              <div className="rounded-lg bg-white border border-sky-200 p-3">
                <p className="font-ipa font-bold text-sky-700 text-sm">1. Đuôi /s/ (11 từ)</p>
                <p className="text-slate-600 mt-1">
                  Sau âm vô thanh <strong>/p, k, t, f, θ/</strong> (Mẹo: <em>Phải Kiếm Tiền Phỏng Thôi</em>). VD: lamps, books, lights.
                </p>
              </div>
              <div className="rounded-lg bg-white border border-amber-200 p-3">
                <p className="font-ipa font-bold text-amber-700 text-sm">2. Đuôi /ɪz/ (8 từ)</p>
                <p className="text-slate-600 mt-1">
                  Sau âm gió <strong>/s, z, ʃ, ʒ, tʃ, dʒ/</strong> (s, ss, sh, ch, x, ge, ce). Chú ý: <strong>houses</strong> đọc /ˈhaʊzɪz/!
                </p>
              </div>
              <div className="rounded-lg bg-white border border-emerald-200 p-3">
                <p className="font-ipa font-bold text-emerald-700 text-sm">3. Đuôi /z/ (15 từ)</p>
                <p className="text-slate-600 mt-1">
                  Các âm hữu thanh &amp; nguyên âm còn lại (b, d, g, l, m, n, v, nguyên âm). Chú ý chuẩn SGK: <strong>baths</strong> /bɑːðz/.
                </p>
              </div>
            </div>
          )}

          {sortChecked && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 flex items-center justify-between text-sm">
              <span className="font-bold text-emerald-900">
                Kết quả Bài I: Đúng {sortCorrectCount}/34 từ
              </span>
              <span className="font-ipa text-xs font-semibold text-emerald-800">
                {Math.round((sortCorrectCount / 34) * 100)}%
              </span>
            </div>
          )}

          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {orderedWords.map((item) => {
              const picked = sortMap[item.id];
              const ok = picked === item.category;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-3 space-y-2 ${
                    sortChecked
                      ? ok
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="font-display text-sm font-bold text-slate-900">
                        {item.word}
                      </span>
                      <span className="ml-1.5 text-[11px] text-slate-500">({item.meaningVi})</span>
                      {sortChecked && (
                        <p className="font-ipa text-[11px] text-sky-700">{item.ipa}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.word)}
                      className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-slate-200 text-sky-700 hover:bg-sky-50"
                      title={`Nghe ${item.word}`}
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    {([
                      { id: 'z', label: '/z/' },
                      { id: 's', label: '/s/' },
                      { id: 'iz', label: '/ɪz/' },
                    ] as const).map((col) => {
                      const active = picked === col.id;
                      return (
                        <button
                          key={col.id}
                          type="button"
                          onClick={() => setSortMap((prev) => ({ ...prev, [item.id]: col.id }))}
                          className={`rounded-lg border py-1 font-ipa text-xs font-bold transition-colors ${
                            active
                              ? 'border-sky-600 bg-sky-600 text-white'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300'
                          }`}
                        >
                          {col.label}
                        </button>
                      );
                    })}
                  </div>

                  {sortChecked && (
                    <p
                      className={`text-[11px] font-medium flex items-start gap-1 ${
                        ok ? 'text-emerald-800' : 'text-rose-800'
                      }`}
                    >
                      {ok ? (
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                      )}
                      <span>{item.ruleVi}</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ==================== STATION 02: 10 HOUSE & ROOM PICTURE CARDS (EX II.1) ==================== */}
      {station === 'house_pics' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Bài II.1 · Nhìn tranh và chữ cái đầu viết tên kiểu nhà / căn phòng (Trang 41–42)
              </p>
              <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                Gõ từ tiếng Anh hoàn chỉnh cho 10 hình minh họa dưới đây
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {picChecked && (
                <span className="font-ipa text-xs font-bold text-emerald-700">
                  Đúng {picCorrectCount}/10
                </span>
              )}
              <button
                type="button"
                onClick={() => setPicChecked(true)}
                className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
              >
                Chấm Bài II.1
              </button>
              <button
                type="button"
                onClick={() => {
                  setPicInputs({});
                  setPicChecked(false);
                }}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Làm lại
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {UNIT2_HOUSE_PICS_10.map((item) => {
              const val = picInputs[item.id] ?? '';
              const accepted = [item.answer, ...(item.accepted ?? [])].map(normalizeWord);
              const ok = accepted.includes(normalizeWord(val));
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-4 space-y-3 ${
                    picChecked
                      ? ok
                        ? 'border-emerald-300 bg-emerald-50/50'
                        : 'border-rose-300 bg-rose-50/50'
                      : 'border-slate-200 bg-slate-50/40'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white">
                      <HouseRoomSvg iconKey={item.iconKey} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-ipa text-xs font-bold text-slate-500">
                          Hình {item.id}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setPicHints((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                          }
                          className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                        >
                          <HelpCircle className="h-3.5 w-3.5" />
                          Gợi ý
                        </button>
                      </div>
                      <p className="font-ipa text-sm font-bold tracking-wider text-slate-900 mt-0.5">
                        {item.starterCue}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.meaningVi}</p>
                    </div>
                  </div>

                  {picHints[item.id] && (
                    <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5">
                      {item.hintVi}
                    </p>
                  )}

                  <input
                    type="text"
                    value={val}
                    onChange={(e) =>
                      setPicInputs((prev) => ({ ...prev, [item.id]: e.target.value }))
                    }
                    placeholder="Gõ từ tiếng Anh hoàn chỉnh..."
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 focus:border-emerald-500 focus:outline-none"
                  />

                  {picChecked && (
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={`text-xs font-medium flex items-center gap-1.5 ${
                          ok ? 'text-emerald-800' : 'text-rose-800'
                        }`}
                      >
                        {ok ? (
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                        ) : (
                          <XCircle className="h-3.5 w-3.5 shrink-0" />
                        )}
                        <span>
                          <strong>{item.answer}</strong>{' '}
                          <span className="font-ipa text-sky-700">{item.ipa}</span>
                        </span>
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

      {/* ==================== STATIONS 03–07: BOOK PAGES 42–58 ==================== */}
      {station === 'rooms_furniture' && <Unit2Station3 />}
      {station === 'possessive' && <Unit2Station4 />}
      {station === 'prepositions' && <Unit2Station5 />}
      {station === 'reading_writing' && <Unit2Station6 />}
      {station === 'unit2_test' && <Unit2FullTestSection />}
    </div>
  );
}
