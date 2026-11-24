import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Eye,
  EyeOff,
  FileText,
  GraduationCap,
  Lightbulb,
  Repeat,
  Search,
  Square,
  Volume2,
} from 'lucide-react';
import {
  ERROR_CORRECTION_VAULT,
  SAMPLE_WRITING_ESSAYS,
  SEMESTER1_ANSWER_KEYS,
  SEMESTER1_MASTER_MATRIX,
  SEMESTER1_REWRITE_FORMULAS,
  type KeyExerciseBlock,
} from '../data/semester1AnswerKey';
import { speakEnglish, stopSpeaking } from '../utils/speech';

type HubMode = 'keys' | 'mastery' | 'essays' | 'traps';
type BlockFilter = 'all' | 'exercise' | 'test';

interface AnswerKeyHubProps {
  onOpenUnitWorkbook: (unitId: 1 | 2 | 3 | 4 | 5 | 6, openTest?: boolean) => void;
}

export function AnswerKeyHub({ onOpenUnitWorkbook }: AnswerKeyHubProps) {
  const [mode, setMode] = useState<HubMode>('keys');
  const [selectedUnitId, setSelectedUnitId] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [blockFilter, setBlockFilter] = useState<BlockFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hideAnswers, setHideAnswers] = useState(false);
  const [revealedKeys, setRevealedKeys] = useState<Record<string, boolean>>({});
  const [slowAudio, setSlowAudio] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  // Essay mode states
  const [selectedEssayId, setSelectedEssayId] = useState<string>(SAMPLE_WRITING_ESSAYS[0].id);
  const [showEssayVi, setShowEssayVi] = useState(true);

  // Error traps mode states
  const [trapUnitFilter, setTrapUnitFilter] = useState<'all' | 1 | 2 | 3 | 4 | 5 | 6>('all');
  const [trapQuizMode, setTrapQuizMode] = useState(false);
  const [revealedTraps, setRevealedTraps] = useState<Record<string, boolean>>({});

  // Mastery / Rewrite mode states
  const [rewriteUnitFilter, setRewriteUnitFilter] = useState<'all' | 1 | 2 | 3 | 4 | 5 | 6>('all');
  const [rewriteQuizMode, setRewriteQuizMode] = useState(false);
  const [revealedRewrites, setRevealedRewrites] = useState<Record<string, boolean>>({});

  const activeUnitKey = useMemo(
    () =>
      SEMESTER1_ANSWER_KEYS.find((u) => u.unitId === selectedUnitId) ??
      SEMESTER1_ANSWER_KEYS[0],
    [selectedUnitId]
  );

  const filteredBlocks = useMemo<KeyExerciseBlock[]>(() => {
    const q = searchQuery.trim().toLowerCase();
    return activeUnitKey.blocks.filter((block) => {
      if (blockFilter !== 'all' && block.category !== blockFilter) return false;
      if (!q) return true;
      const inMeta =
        block.partLabel.toLowerCase().includes(q) ||
        block.page.toLowerCase().includes(q) ||
        block.memoryTipVi.toLowerCase().includes(q);
      const inItems = block.items.some(
        (it) =>
          it.num.toLowerCase().includes(q) ||
          it.answer.toLowerCase().includes(q) ||
          (it.note && it.note.toLowerCase().includes(q))
      );
      return inMeta || inItems;
    });
  }, [activeUnitKey, blockFilter, searchQuery]);

  const activeEssay = useMemo(
    () =>
      SAMPLE_WRITING_ESSAYS.find((e) => e.id === selectedEssayId) ??
      SAMPLE_WRITING_ESSAYS[0],
    [selectedEssayId]
  );

  const filteredTraps = useMemo(() => {
    if (trapUnitFilter === 'all') return ERROR_CORRECTION_VAULT;
    return ERROR_CORRECTION_VAULT.filter((t) => t.unitId === trapUnitFilter);
  }, [trapUnitFilter]);

  const filteredRewrites = useMemo(() => {
    if (rewriteUnitFilter === 'all') return SEMESTER1_REWRITE_FORMULAS;
    return SEMESTER1_REWRITE_FORMULAS.filter((rw) => rw.unitId === rewriteUnitFilter);
  }, [rewriteUnitFilter]);

  const handleSpeak = (id: string, text: string, forceSlow?: boolean) => {
    if (speakingId === id) {
      stopSpeaking();
      setSpeakingId(null);
      return;
    }
    const cleanText = text.replace(/\s*\([^)]*\)/g, '').trim();
    setSpeakingId(id);
    speakEnglish(cleanText, {
      slow: forceSlow ?? slowAudio,
      onEnd: () => setSpeakingId((prev) => (prev === id ? null : prev)),
    });
  };

  const toggleRevealItem = (keyId: string) => {
    setRevealedKeys((prev) => ({ ...prev, [keyId]: !prev[keyId] }));
  };

  const toggleRevealTrap = (trapId: string) => {
    setRevealedTraps((prev) => ({ ...prev, [trapId]: !prev[trapId] }));
  };

  const toggleRevealRewrite = (rwId: string) => {
    setRevealedRewrites((prev) => ({ ...prev, [rwId]: !prev[rwId] }));
  };

  const handleToggleHideAll = () => {
    setHideAnswers((prev) => {
      const next = !prev;
      if (next) {
        setRevealedKeys({});
      }
      return next;
    });
  };

  const handleUnitChange = (unitId: 1 | 2 | 3 | 4 | 5 | 6) => {
    stopSpeaking();
    setSpeakingId(null);
    setSelectedUnitId(unitId);
    setSearchQuery('');
    setRevealedKeys({});
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      {/* Page Header */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Hoàn thiện 100% Tập 1 · Cập nhật chi tiết Trang 168–188 (PDF Tr.168–188 · Sách Tr.160–179)
            </p>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Sổ Tay Đáp Án &amp; Tổng Ôn Cuối Học Kỳ 1
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Đối chiếu chuẩn xác 100% nguyên văn <strong className="font-semibold text-slate-800">KEY / ĐÁP ÁN</strong> sách{' '}
              <em>Chinh phục Ngữ pháp &amp; Bài tập TA6 Tập 1</em> (Unit 1–6), kèm chế độ{' '}
              <strong className="font-semibold text-slate-800">che đáp án tự nhẩm</strong>, bản đồ tổng ôn 6 Unit + 18 mẫu viết lại câu kinh điển, 6 bài văn mẫu song ngữ nguyên văn SGK và {ERROR_CORRECTION_VAULT.length} bẫy lỗi sai hay gặp nhất.
            </p>
            <p className="text-xs text-slate-500 pt-0.5">
              Tr.150–160 (PDF 157–168): KEY Unit 1–2 · Tr.161–170 (PDF 169–178): KEY Unit 3–4 · Tr.171–179 (PDF 179–187): KEY Unit 5–6 · PDF Tr.188: Hoàn tất Tập 1
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                stopSpeaking();
                setSpeakingId(null);
                setMode('mastery');
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-sky-700"
            >
              <GraduationCap className="h-4 w-4" />
              <span>Tổng Ôn Cuối HK1</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenUnitWorkbook(6, true)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-xs font-bold text-rose-900 transition-colors hover:bg-rose-100"
            >
              <span>Làm TEST Unit 6</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Mode Segmented Tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <div className="inline-flex flex-wrap rounded-xl border border-slate-200 bg-slate-50 p-1 gap-1">
            {[
              { id: 'keys' as const, label: 'Đáp án Unit 1–6 (Tr.150–179)', icon: BookOpen },
              { id: 'mastery' as const, label: 'Tổng Ôn HK1 & 18 Mẫu Viết Lại', icon: GraduationCap },
              { id: 'essays' as const, label: '6 Bài Văn Mẫu SGK', icon: FileText },
              { id: 'traps' as const, label: `${ERROR_CORRECTION_VAULT.length} Bẫy Lỗi Sai`, icon: AlertTriangle },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = mode === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    stopSpeaking();
                    setSpeakingId(null);
                    setMode(tab.id);
                  }}
                  className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={slowAudio}
              onChange={(e) => setSlowAudio(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
            />
            <span>Đọc chậm 0.7x dễ nghe</span>
          </label>
        </div>
      </section>

      {/* =================================================================== */}
      {/* MODE 1: ANSWER KEY BY UNIT (PP. 150–179)                            */}
      {/* =================================================================== */}
      {mode === 'keys' && (
        <div className="mt-6 space-y-6">
          {/* Unit 1–6 Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {SEMESTER1_ANSWER_KEYS.map((u) => {
              const active = u.unitId === selectedUnitId;
              return (
                <button
                  key={u.unitId}
                  type="button"
                  onClick={() => handleUnitChange(u.unitId)}
                  className={`rounded-2xl border p-3.5 text-left transition-all ${
                    active
                      ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-lg font-display text-xs font-extrabold text-white"
                      style={{ backgroundColor: u.accentHex }}
                    >
                      {u.unitId}
                    </span>
                    <span
                      className={`font-ipa text-[11px] font-semibold tabular-nums ${
                        active ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {u.pageRange}
                    </span>
                  </div>
                  <p className="mt-2 font-display text-sm font-bold truncate">
                    {u.titleEn}
                  </p>
                  <p
                    className={`text-[11px] truncate mt-0.5 ${
                      active ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {u.pdfRange}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Unit Overview & Toolbar */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {activeUnitKey.code} · Sách {activeUnitKey.pageRange} ({activeUnitKey.pdfRange}) · {activeUnitKey.workbookRange}
                </p>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                  {activeUnitKey.titleEn} — {activeUnitKey.titleVi}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  {activeUnitKey.summaryVi}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenUnitWorkbook(activeUnitKey.unitId, false)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span>Làm BT {activeUnitKey.code}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenUnitWorkbook(activeUnitKey.unitId, true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-sky-700 transition-colors"
                >
                  <span>Làm TEST {activeUnitKey.code}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Filter + Search + Active Recall Toggle */}
            <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
                  {[
                    { id: 'all' as const, label: 'Tất cả phần' },
                    { id: 'exercise' as const, label: 'Bài tập I–IV' },
                    { id: 'test' as const, label: `TEST ${activeUnitKey.code}` },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setBlockFilter(f.id)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                        blockFilter === f.id
                          ? 'bg-white text-slate-900 shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleToggleHideAll}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-colors ${
                    hideAnswers
                      ? 'border-amber-300 bg-amber-50 text-amber-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {hideAnswers ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                  <span>{hideAnswers ? 'Đang che đáp án (Bấm từng câu để mở)' : 'Che đáp án để tự nhẩm'}</span>
                </button>
              </div>

              <div className="relative w-full md:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm nhanh từ, số câu, trang..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* Interactive Pronunciation Key Table */}
          {blockFilter !== 'test' && !searchQuery.trim() && (
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                    {activeUnitKey.pronunciation.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {activeUnitKey.pronunciation.page} · Bấm vào bất kỳ từ nào để nghe phát âm chuẩn và phân biệt âm dễ nhầm
                  </p>
                </div>
              </div>

              <div
                className={`grid gap-4 ${
                  activeUnitKey.pronunciation.columns.length === 3
                    ? 'md:grid-cols-3'
                    : 'md:grid-cols-2'
                }`}
              >
                {activeUnitKey.pronunciation.columns.map((col) => (
                  <div
                    key={col.ipa}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-display text-sm font-bold text-slate-900">
                        {col.soundLabel}
                      </span>
                      <span className="font-ipa text-sm font-bold text-sky-700">
                        {col.ipa}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {col.tipVi}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {col.words.map((word) => {
                        const audioId = `pron-${activeUnitKey.unitId}-${col.ipa}-${word}`;
                        const isPlaying = speakingId === audioId;
                        return (
                          <button
                            key={word}
                            type="button"
                            onClick={() => handleSpeak(audioId, word)}
                            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                              isPlaying
                                ? 'border-sky-500 bg-sky-600 text-white'
                                : 'border-slate-200 bg-white text-slate-800 hover:border-sky-300 hover:text-sky-800'
                            }`}
                          >
                            <Volume2 className="h-3.5 w-3.5 shrink-0" />
                            <span>{word}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Exercise & Test Answer Blocks */}
          {filteredBlocks.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <p className="font-display text-base font-bold text-slate-800">
                Không tìm thấy mục đáp án phù hợp với &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setBlockFilter('all');
                }}
                className="mt-3 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
              >
                Xóa bộ lọc tìm kiếm
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredBlocks.map((block) => (
                <article
                  key={block.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-slate-100">
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {block.partLabel}
                    </h3>
                    <span className="font-ipa text-xs font-semibold text-slate-500 tabular-nums">
                      {block.category === 'test' ? 'Đề kiểm tra' : 'Bài tập'} · {block.page}
                    </span>
                  </div>

                  {block.layout === 'list' ? (
                    <div className="mt-4 space-y-2.5">
                      {block.items.map((item) => {
                        const keyId = `${block.id}-${item.num}`;
                        const isHidden = hideAnswers && !revealedKeys[keyId];
                        return (
                          <div
                            key={keyId}
                            className="rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3"
                          >
                            <span className="font-ipa text-xs font-bold text-sky-700 shrink-0 sm:w-36 pt-0.5 tabular-nums">
                              {item.num}
                            </span>
                            <div className="flex-1 min-w-0">
                              <button
                                type="button"
                                onClick={() => hideAnswers && toggleRevealItem(keyId)}
                                className={`text-left text-xs sm:text-sm leading-relaxed transition-all ${
                                  hideAnswers ? 'cursor-pointer' : 'cursor-default'
                                } ${
                                  isHidden
                                    ? 'rounded bg-slate-200/80 px-2 py-0.5 text-transparent select-none hover:bg-slate-300/80'
                                    : 'font-medium text-slate-800'
                                }`}
                              >
                                {item.answer}
                              </button>
                              {item.note && !isHidden && (
                                <p className="mt-1 text-[11px] font-medium text-amber-800">
                                  Lưu ý SGK: {item.note}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                      {block.items.map((item) => {
                        const keyId = `${block.id}-${item.num}`;
                        const isHidden = hideAnswers && !revealedKeys[keyId];
                        return (
                          <button
                            key={keyId}
                            type="button"
                            onClick={() => hideAnswers && toggleRevealItem(keyId)}
                            className={`rounded-xl border px-3 py-2 text-left transition-all ${
                              isHidden
                                ? 'border-amber-200 bg-amber-50/70 hover:bg-amber-100/70 cursor-pointer'
                                : 'border-slate-200 bg-slate-50/70 cursor-default'
                            }`}
                          >
                            <span className="font-ipa text-[11px] font-bold text-slate-400 tabular-nums">
                              Câu {item.num}
                            </span>
                            <p
                              className={`mt-0.5 text-xs sm:text-sm font-bold ${
                                isHidden
                                  ? 'text-amber-700'
                                  : 'text-slate-900'
                              }`}
                            >
                              {isHidden ? 'Bấm để xem' : item.answer}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Concise Memory Tip */}
                  <div className="mt-4 flex items-start gap-2 rounded-xl bg-sky-50/70 px-3.5 py-2.5 text-xs text-sky-950">
                    <Lightbulb className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong className="font-bold">Mẹo nhớ nhanh:</strong> {block.memoryTipVi}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* MODE 2: SEMESTER 1 FINAL MASTERY & 18 REWRITE FORMULAS              */}
      {/* =================================================================== */}
      {mode === 'mastery' && (
        <div className="mt-6 space-y-8">
          {/* Section A: 6-Unit Visual Synthesis Matrix */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Tóm tắt cô đọng toàn bộ Học Kỳ 1 (Trang 1–179 · PDF Trang 1–188)
                </p>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                  Bản Đồ 6 Unit Trong 1 Màn Hình (Phát âm · Công thức · Bẫy số 1)
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Bấm từng từ tiếng Anh để nghe phát âm chuẩn trước kỳ thi HK1
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SEMESTER1_MASTER_MATRIX.map((unit) => (
                <article
                  key={unit.unitId}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-display text-sm font-extrabold text-white"
                          style={{ backgroundColor: unit.accentHex }}
                        >
                          {unit.unitId}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            {unit.code}
                          </p>
                          <h3 className="font-display text-base font-bold text-slate-900 truncate">
                            {unit.titleEn}
                          </h3>
                        </div>
                      </div>
                      <span className="font-ipa text-xs font-bold text-sky-700 shrink-0">
                        {unit.ipaPair}
                      </span>
                    </div>

                    {/* Clickable IPA Examples */}
                    <div className="flex flex-wrap gap-1.5">
                      {unit.ipaExamples.map((word) => {
                        const audioId = `matrix-${unit.unitId}-${word}`;
                        const isPlaying = speakingId === audioId;
                        return (
                          <button
                            key={word}
                            type="button"
                            onClick={() => handleSpeak(audioId, word)}
                            className={`inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-xs font-semibold transition-colors ${
                              isPlaying
                                ? 'border-sky-500 bg-sky-600 text-white'
                                : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-300 hover:text-sky-800'
                            }`}
                          >
                            <Volume2 className="h-3 w-3 shrink-0" />
                            <span>{word}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Core Grammar + Formula */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3 space-y-1">
                      <p className="text-xs font-bold text-slate-900">{unit.grammarCoreVi}</p>
                      <p className="font-ipa text-xs font-semibold text-sky-800 leading-relaxed">
                        {unit.formulaEn}
                      </p>
                    </div>

                    {/* Top Exam Trap */}
                    <div className="flex items-start gap-2 rounded-xl bg-amber-50/80 border border-amber-200/70 px-3 py-2 text-xs text-amber-950">
                      <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        <strong className="font-bold">Bẫy số 1:</strong> {unit.topTrapVi}
                      </p>
                    </div>
                  </div>

                  {/* Quick Jump Actions */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        handleUnitChange(unit.unitId);
                        setMode('keys');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-sky-700 hover:text-sky-800 hover:underline"
                    >
                      Xem Đáp án {unit.code}
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenUnitWorkbook(unit.unitId, true)}
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <span>Làm TEST</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section B: 18 Classic HK1 Rewrite Templates */}
          <section className="space-y-4 pt-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Repeat className="h-4 w-4 text-sky-600" />
                  <h2 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
                    18 Mẫu Viết Lại Câu Kinh Điển HK1 (Tr.155–179)
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Tổng hợp đầy đủ 18 cấu trúc chuyển đổi câu xuất hiện lặp đi lặp lại trong bài kiểm tra Tập 1. Bật chế độ che vế sau để tự tập viết lại!
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setRewriteQuizMode((prev) => {
                    const next = !prev;
                    if (next) setRevealedRewrites({});
                    return next;
                  });
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-colors shrink-0 ${
                  rewriteQuizMode
                    ? 'border-amber-300 bg-amber-50 text-amber-900'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {rewriteQuizMode ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                <span>
                  {rewriteQuizMode
                    ? 'Đang che vế viết lại (Bấm từng thẻ để mở)'
                    : 'Che vế viết lại để tự thử sức'}
                </span>
              </button>
            </div>

            {/* Unit Filter Bar */}
            <div className="flex flex-wrap items-center gap-1.5">
              {(['all', 1, 2, 3, 4, 5, 6] as const).map((u) => {
                const active = rewriteUnitFilter === u;
                return (
                  <button
                    key={String(u)}
                    type="button"
                    onClick={() => setRewriteUnitFilter(u)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                      active
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {u === 'all' ? `Tất cả (${SEMESTER1_REWRITE_FORMULAS.length})` : `Unit ${u}`}
                  </button>
                );
              })}
            </div>

            {/* 18 Rewrite Formula Cards */}
            <div className="grid gap-4 md:grid-cols-2">
              {filteredRewrites.map((rw) => {
                const hidden = rewriteQuizMode && !revealedRewrites[rw.id];
                const audioId = `rw-${rw.id}`;

                return (
                  <article
                    key={rw.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between gap-3"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-ipa text-xs font-bold text-sky-800 leading-snug">
                          {rw.patternVi}
                        </p>
                        <span className="font-ipa text-[11px] font-semibold text-slate-500 shrink-0 tabular-nums">
                          Unit {rw.unitId} · {rw.page}
                        </span>
                      </div>

                      {/* Original Sentence */}
                      <div className="rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Câu gốc
                        </p>
                        <p className="mt-0.5 text-xs sm:text-sm font-medium text-slate-800">
                          {rw.originalEn}
                        </p>
                      </div>

                      {/* Rewritten Sentence or Reveal Button */}
                      {hidden ? (
                        <button
                          type="button"
                          onClick={() => toggleRevealRewrite(rw.id)}
                          className="w-full rounded-xl border border-amber-200 bg-amber-50 py-2.5 text-xs font-bold text-amber-900 hover:bg-amber-100 transition-colors"
                        >
                          Em tự nhẩm câu viết lại xong? Bấm để mở đáp án chuẩn
                        </button>
                      ) : (
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 px-3.5 py-2.5 flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                              Viết lại chuẩn SGK
                            </p>
                            <p className="mt-0.5 text-xs sm:text-sm font-bold text-emerald-950">
                              {rw.rewrittenEn}
                            </p>
                          </div>
                          <button
                            type="button"
                            aria-label={`Nghe câu chuẩn ${rw.rewrittenEn}`}
                            onClick={() => handleSpeak(audioId, rw.rewrittenEn)}
                            className={`shrink-0 inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition-colors ${
                              speakingId === audioId
                                ? 'border-sky-500 bg-sky-600 text-white'
                                : 'border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-100'
                            }`}
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                            <span>Nghe</span>
                          </button>
                        </div>
                      )}

                      <p className="text-xs text-slate-600 leading-relaxed">
                        <strong className="text-slate-800">Mẹo nhớ:</strong> {rw.tipVi}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* =================================================================== */}
      {/* MODE 3: 6 OFFICIAL TEXTBOOK SAMPLE ESSAYS (PP. 154–177)             */}
      {/* =================================================================== */}
      {mode === 'essays' && (
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Left Rail: Essay List */}
          <div className="lg:col-span-4 space-y-2.5">
            {SAMPLE_WRITING_ESSAYS.map((essay) => {
              const active = essay.id === activeEssay.id;
              return (
                <button
                  key={essay.id}
                  type="button"
                  onClick={() => {
                    stopSpeaking();
                    setSpeakingId(null);
                    setSelectedEssayId(essay.id);
                  }}
                  className={`w-full rounded-2xl border p-4 text-left transition-all ${
                    active
                      ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <p
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      active ? 'text-sky-300' : 'text-sky-700'
                    }`}
                  >
                    {essay.sourceLabel} · {essay.page}
                  </p>
                  <p className="mt-1 font-display text-sm font-bold leading-snug">
                    {essay.titleEn}
                  </p>
                  <p
                    className={`mt-0.5 text-xs ${
                      active ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {essay.titleVi}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Pane: Bilingual Interactive Essay Studio */}
          <article className="lg:col-span-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  {activeEssay.sourceLabel} · Đáp án SGK {activeEssay.page}
                </p>
                <h2 className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                  {activeEssay.titleEn}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {activeEssay.promptVi}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleSpeak(`essay-norm-${activeEssay.id}`, activeEssay.englishText, false)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-colors ${
                    speakingId === `essay-norm-${activeEssay.id}`
                      ? 'bg-rose-600 text-white hover:bg-rose-700'
                      : 'bg-sky-600 text-white hover:bg-sky-700'
                  }`}
                >
                  {speakingId === `essay-norm-${activeEssay.id}` ? (
                    <>
                      <Square className="h-3.5 w-3.5 fill-current" />
                      <span>Dừng đọc</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-4 w-4" />
                      <span>Nghe chuẩn</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => handleSpeak(`essay-slow-${activeEssay.id}`, activeEssay.englishText, true)}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-colors ${
                    speakingId === `essay-slow-${activeEssay.id}`
                      ? 'border-rose-300 bg-rose-50 text-rose-800'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Volume2 className="h-3.5 w-3.5" />
                  <span>Nghe chậm 0.7x</span>
                </button>
              </div>
            </div>

            {/* English Sample Text */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Bài văn mẫu tiếng Anh chuẩn SGK
              </p>
              <p className="text-sm sm:text-base leading-8 text-slate-900 font-medium">
                {activeEssay.englishText}
              </p>
            </div>

            {/* Toggleable Vietnamese Translation */}
            <div>
              <button
                type="button"
                onClick={() => setShowEssayVi((prev) => !prev)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800"
              >
                {showEssayVi ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                <span>{showEssayVi ? 'Ẩn bản dịch tiếng Việt' : 'Hiện bản dịch tiếng Việt'}</span>
              </button>

              {showEssayVi && (
                <div className="mt-2.5 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs sm:text-sm leading-7 text-slate-700">
                    {activeEssay.vietnameseText}
                  </p>
                </div>
              )}
            </div>

            {/* 3 Key Scoring Structures */}
            <div className="space-y-2.5">
              <h3 className="font-display text-sm font-bold text-slate-900">
                3 Mẫu câu &amp; cấu trúc ăn điểm cần thuộc trong bài
              </h3>
              <div className="grid gap-2.5">
                {activeEssay.keyStructures.map((st, idx) => {
                  const sId = `struct-${activeEssay.id}-${idx}`;
                  return (
                    <div
                      key={sId}
                      className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-3.5"
                    >
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">{st.en}</p>
                        <p className="mt-0.5 text-xs text-slate-600">{st.vi}</p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Nghe mẫu câu ${st.en}`}
                        onClick={() => handleSpeak(sId, st.en)}
                        className={`shrink-0 rounded-lg border p-2 transition-colors ${
                          speakingId === sId
                            ? 'border-sky-500 bg-sky-600 text-white'
                            : 'border-slate-200 bg-white text-slate-600 hover:text-sky-700'
                        }`}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Exam Tip */}
            <div className="flex items-start gap-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 p-4 text-xs sm:text-sm text-emerald-950">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="font-bold">Mẹo đạt điểm tối đa:</strong> {activeEssay.examTipVi}
              </p>
            </div>
          </article>
        </div>
      )}

      {/* =================================================================== */}
      {/* MODE 3: 32 CLASSIC ERROR-CORRECTION TRAPS (PP. 152–178)             */}
      {/* =================================================================== */}
      {mode === 'traps' && (
        <div className="mt-6 space-y-5">
          {/* Filter Bar */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {(['all', 1, 2, 3, 4, 5, 6] as const).map((u) => {
                const active = trapUnitFilter === u;
                return (
                  <button
                    key={String(u)}
                    type="button"
                    onClick={() => setTrapUnitFilter(u)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                      active
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {u === 'all' ? `Tất cả (${ERROR_CORRECTION_VAULT.length})` : `Unit ${u}`}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                setTrapQuizMode((prev) => {
                  const next = !prev;
                  if (next) setRevealedTraps({});
                  return next;
                });
              }}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-colors shrink-0 ${
                trapQuizMode
                  ? 'border-amber-300 bg-amber-50 text-amber-900'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {trapQuizMode ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
              <span>
                {trapQuizMode ? 'Đang bật Tự kiểm tra (Che cách sửa)' : 'Che cách sửa để tự kiểm tra'}
              </span>
            </button>
          </div>

          {/* Traps Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {filteredTraps.map((trap) => {
              const hidden = trapQuizMode && !revealedTraps[trap.id];
              const fixedSentence = trap.sentence.replace(trap.wrong, trap.correct);
              const audioId = `trap-${trap.id}`;

              return (
                <article
                  key={trap.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                      <span className="font-bold text-slate-700">{trap.source}</span>
                      <span className="font-ipa tabular-nums">{trap.page}</span>
                    </div>

                    <p className="mt-2.5 text-sm font-medium text-slate-900 leading-relaxed">
                      {trap.sentence}
                    </p>

                    {hidden ? (
                      <button
                        type="button"
                        onClick={() => toggleRevealTrap(trap.id)}
                        className="mt-3 w-full rounded-xl border border-amber-200 bg-amber-50 py-2.5 text-xs font-bold text-amber-900 hover:bg-amber-100 transition-colors"
                      >
                        Em đã tìm ra lỗi sai? Bấm để xem cách sửa &amp; quy tắc
                      </button>
                    ) : (
                      <div className="mt-3 space-y-2.5">
                        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5">
                          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                            <span className="line-through font-bold text-rose-700">
                              {trap.wrong}
                            </span>
                            <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                            <span className="font-extrabold text-emerald-700">
                              {trap.correct}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleSpeak(audioId, fixedSentence)}
                            className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition-colors ${
                              speakingId === audioId
                                ? 'border-sky-500 bg-sky-600 text-white'
                                : 'border-slate-200 bg-white text-slate-600 hover:text-sky-700'
                            }`}
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                            <span>Nghe câu đúng</span>
                          </button>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          <strong className="text-slate-800">Quy tắc:</strong> {trap.ruleVi}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
