import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Headphones,
  Layers,
  Lightbulb,
  RotateCw,
  Turtle,
  Volume2,
  XCircle,
} from 'lucide-react';
import { ALL_UNITS } from '../data/curriculum';
import type { StudentProgress, UnitSectionKey } from '../hooks/useProgress';
import type { FormulaToken, UnitData } from '../types/curriculum';
import { speakEnglish, stopSpeaking } from '../utils/speech';
import { ExerciseEngine } from './ExerciseEngine';
import { GrammarVisual } from './GrammarVisuals';
import { Unit1Workbook, type Unit1StationId } from './Unit1Workbook';
import { Unit2Workbook, type Unit2StationId } from './Unit2Workbook';
import { Unit3Workbook, type Unit3StationId } from './Unit3Workbook';
import { Unit4Workbook, type Unit4StationId } from './Unit4Workbook';
import { Unit5Workbook, type Unit5StationId } from './Unit5Workbook';
import { Unit6Workbook, type Unit6StationId } from './Unit6Workbook';
import { Unit7Workbook, type Unit7StationId } from './Unit7Workbook';
import { Unit8Workbook, type Unit8StationId } from './Unit8Workbook';
import { U4_PRONUNCIATION_SIGNS } from '../data/unit4Pages84To106';
import { U5_PRONUNCIATION_SIGNS } from '../data/unit5Pages107To128';
import { U6_PRONUNCIATION_SIGNS } from '../data/unit6Pages129To149';
import {
  U7_CONJUNCTION_6_GUIDE,
  U7_PRONUNCIATION_SIGNS,
  U7_WH_24_GUIDE,
} from '../data/unit7Pages1To20';
import {
  U8_ED_PRONUNCIATION_3,
  U8_ED_SPELLING_RULES,
  U8_IMPERATIVE_4_GUIDE,
  U8_PAST_SIMPLE_BE,
  U8_PAST_SIMPLE_VERB,
  U8_PRONUNCIATION_SIGNS,
  U8_TIME_SIGNALS,
} from '../data/unit8Pages22To41';

export type UnitWorkspaceTab = UnitSectionKey | 'workbook';

interface UnitWorkspaceProps {
  unit: UnitData;
  progress: StudentProgress;
  initialTab?: UnitWorkspaceTab;
  initialUnit1Station?: Unit1StationId;
  initialUnit2Station?: Unit2StationId;
  initialUnit3Station?: Unit3StationId;
  initialUnit4Station?: Unit4StationId;
  initialUnit5Station?: Unit5StationId;
  initialUnit6Station?: Unit6StationId;
  initialUnit7Station?: Unit7StationId;
  initialUnit8Station?: Unit8StationId;
  onSelectUnit: (unitId: number) => void;
  onBackToRoadmap: () => void;
  onMarkSectionDone: (unitId: number, section: UnitSectionKey) => void;
  onToggleVocabMastered: (vocabId: string) => void;
  onRecordAnswer: (exerciseId: string, isCorrect: boolean) => void;
  onRecordUnitScore: (unitId: number, correct: number, total: number) => void;
}

const TOKEN_COLORS: Record<FormulaToken['role'], string> = {
  subject: 'bg-sky-50 text-sky-900 border-sky-200',
  verb: 'bg-emerald-50 text-emerald-900 border-emerald-200',
  auxiliary: 'bg-violet-50 text-violet-900 border-violet-200',
  object: 'bg-slate-100 text-slate-900 border-slate-200',
  connector: 'bg-amber-50 text-amber-900 border-amber-200',
  modifier: 'bg-rose-50 text-rose-900 border-rose-200',
};

const TABS: { id: UnitSectionKey; label: string; icon: typeof BookOpen }[] = [
  { id: 'grammar', label: 'Ngữ pháp trực quan', icon: BookOpen },
  { id: 'pronunciation', label: 'Phát âm chuẩn', icon: Headphones },
  { id: 'vocabulary', label: 'Từ vựng & Flashcard', icon: Layers },
  { id: 'practice', label: 'Luyện tập 4 Dạng', icon: ClipboardCheck },
];

export function UnitWorkspace({
  unit,
  progress,
  initialTab = 'grammar',
  initialUnit1Station = 'phonetics',
  initialUnit2Station = 'sound_sort',
  initialUnit3Station = 'phonetics_vocab',
  initialUnit4Station = 'phonetics',
  initialUnit5Station = 'phonetics_nature',
  initialUnit6Station = 'phonetics_tet',
  initialUnit7Station = 'phonetics_tv',
  initialUnit8Station = 'phonetics_sports',
  onSelectUnit,
  onBackToRoadmap,
  onMarkSectionDone,
  onToggleVocabMastered,
  onRecordAnswer,
  onRecordUnitScore,
}: UnitWorkspaceProps) {
  const hasWorkbook =
    unit.id === 1 ||
    unit.id === 2 ||
    unit.id === 3 ||
    unit.id === 4 ||
    unit.id === 5 ||
    unit.id === 6 ||
    unit.id === 7 ||
    unit.id === 8;
  const [activeTab, setActiveTab] = useState<UnitWorkspaceTab>(
    hasWorkbook ? initialTab : initialTab === 'workbook' ? 'grammar' : initialTab
  );

  // Unit 7 interactive 24 Wh-questions group filter (Tập 2 · Tr.3–4)
  const [u7WhGroup, setU7WhGroup] = useState<'basic' | 'how_measure' | 'price_qty' | 'what_spec'>(
    'basic'
  );

  // Unit 8 interactive Past Simple explorer tab (Tập 2 · Tr.22–25)
  const [u8PastTab, setU8PastTab] = useState<'forms' | 'ed_rules' | 'signals'>('forms');

  // Flashcard state
  const [cardIdx, setCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Pronunciation drill state
  const [drillAnswers, setDrillAnswers] = useState<Record<number, number>>({});

  useEffect(() => {
    stopSpeaking();
    setCardIdx(0);
    setFlipped(false);
    setDrillAnswers({});
    if (
      unit.id !== 1 &&
      unit.id !== 2 &&
      unit.id !== 3 &&
      unit.id !== 4 &&
      unit.id !== 5 &&
      unit.id !== 6 &&
      unit.id !== 7 &&
      unit.id !== 8 &&
      activeTab === 'workbook'
    ) {
      setActiveTab('grammar');
    }
  }, [unit.id]);

  useEffect(() => {
    if (
      (unit.id === 1 ||
        unit.id === 2 ||
        unit.id === 3 ||
        unit.id === 4 ||
        unit.id === 5 ||
        unit.id === 6 ||
        unit.id === 7 ||
        unit.id === 8) &&
      initialTab
    ) {
      setActiveTab(initialTab);
    }
  }, [
    initialTab,
    unit.id,
    initialUnit1Station,
    initialUnit2Station,
    initialUnit3Station,
    initialUnit4Station,
    initialUnit5Station,
    initialUnit6Station,
    initialUnit7Station,
    initialUnit8Station,
  ]);

  useEffect(() => {
    stopSpeaking();
  }, [activeTab]);

  const doneSections = progress.completedSections[unit.id] ?? [];
  const currentCard = unit.vocabulary[cardIdx] ?? unit.vocabulary[0];
  const isCardMastered = currentCard
    ? progress.masteredVocabIds.includes(currentCard.id)
    : false;
  const masteredInUnit = unit.vocabulary.filter((v) =>
    progress.masteredVocabIds.includes(v.id)
  ).length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Top breadcrumb + mobile unit selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <button
          type="button"
          onClick={onBackToRoadmap}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Quay lại Lộ trình 12 Unit</span>
        </button>

        {/* Mobile Unit Dropdown */}
        <div className="lg:hidden">
          <label htmlFor="mobile-unit-select" className="sr-only">
            Chọn Unit
          </label>
          <select
            id="mobile-unit-select"
            value={unit.id}
            onChange={(e) => onSelectUnit(Number(e.target.value))}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 focus:border-sky-500 focus:outline-none"
          >
            {ALL_UNITS.map((u) => (
              <option key={u.id} value={u.id}>
                {u.code}: {u.titleEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-12 items-start">
        {/* Desktop Unit Switcher Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 rounded-2xl border border-slate-200 bg-white p-3">
          <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            Danh mục 12 Unit
          </p>
          <div className="space-y-1 max-h-[calc(100vh-170px)] overflow-y-auto pr-1">
            {ALL_UNITS.map((u) => {
              const isCurrent = u.id === unit.id;
              const uDone = (progress.completedSections[u.id] ?? []).length;
              return (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => onSelectUnit(u.id)}
                  className={`w-full flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left transition-colors ${
                    isCurrent
                      ? 'bg-sky-50 text-sky-900 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] font-bold text-white"
                        style={{ backgroundColor: u.accentHex }}
                      >
                        {u.id}
                      </span>
                      <span className="truncate text-xs font-semibold">{u.titleEn}</span>
                    </div>
                  </div>
                  <span className="font-ipa text-[11px] text-slate-400 tabular-nums shrink-0">
                    {uDone}/4
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Learning Studio */}
        <main className="lg:col-span-9 space-y-6">
          {/* Unit Header Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Học kỳ {unit.semester} · {unit.code} · Global Success 6
                </p>
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {unit.titleEn}{' '}
                  <span className="font-semibold text-slate-500 text-lg sm:text-xl">
                    — {unit.titleVi}
                  </span>
                </h1>
                <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                  {unit.themeSummaryVi}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-medium text-slate-500">Tiến độ Unit</p>
                <p className="font-display text-xl font-extrabold text-slate-900 tabular-nums">
                  {doneSections.length}/4 phần
                </p>
              </div>
            </div>

            {/* Lesson Tabs (4 standard tabs + 5th Workbook tab for Unit 1 & Unit 2) */}
            <div
              className={`mt-6 grid gap-2 border-t border-slate-100 pt-4 ${
                hasWorkbook ? 'grid-cols-2 sm:grid-cols-5' : 'grid-cols-2 sm:grid-cols-4'
              }`}
            >
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                const done = doneSections.includes(tab.id);
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap border transition-colors ${
                      active
                        ? 'border-sky-600 bg-sky-600 text-white shadow-2xs'
                        : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{tab.label}</span>
                    {done && (
                      <CheckCircle2
                        className={`h-3.5 w-3.5 shrink-0 ${
                          active ? 'text-emerald-200' : 'text-emerald-600'
                        }`}
                      />
                    )}
                  </button>
                );
              })}

              {hasWorkbook && (
                <button
                  type="button"
                  onClick={() => setActiveTab('workbook')}
                  className={`col-span-2 sm:col-span-1 flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap border transition-colors ${
                    unit.id === 8
                      ? activeTab === 'workbook'
                        ? 'border-orange-600 bg-orange-600 text-white shadow-2xs'
                        : 'border-orange-200 bg-orange-50/70 text-orange-900 hover:bg-orange-100/80'
                      : unit.id === 7
                        ? activeTab === 'workbook'
                          ? 'border-blue-600 bg-blue-600 text-white shadow-2xs'
                          : 'border-blue-200 bg-blue-50/70 text-blue-900 hover:bg-blue-100/80'
                        : unit.id === 6
                          ? activeTab === 'workbook'
                            ? 'border-rose-600 bg-rose-600 text-white shadow-2xs'
                            : 'border-rose-200 bg-rose-50/70 text-rose-900 hover:bg-rose-100/80'
                          : unit.id === 5
                            ? activeTab === 'workbook'
                              ? 'border-teal-600 bg-teal-600 text-white shadow-2xs'
                              : 'border-teal-200 bg-teal-50/70 text-teal-900 hover:bg-teal-100/80'
                            : unit.id === 4
                              ? activeTab === 'workbook'
                                ? 'border-amber-600 bg-amber-600 text-white shadow-2xs'
                                : 'border-amber-200 bg-amber-50/70 text-amber-900 hover:bg-amber-100/80'
                              : unit.id === 3
                                ? activeTab === 'workbook'
                                  ? 'border-violet-600 bg-violet-600 text-white shadow-2xs'
                                  : 'border-violet-200 bg-violet-50/70 text-violet-900 hover:bg-violet-100/80'
                                : activeTab === 'workbook'
                                  ? 'border-emerald-600 bg-emerald-600 text-white shadow-2xs'
                                  : 'border-emerald-200 bg-emerald-50/70 text-emerald-900 hover:bg-emerald-100/80'
                  }`}
                >
                  <FileText className="h-4 w-4 shrink-0" />
                  <span className="truncate">
                    {unit.id === 1
                      ? 'Sách BT & Đề Tr.1–34'
                      : unit.id === 2
                        ? 'Sách BT & Đề Tr.35–58'
                        : unit.id === 3
                          ? 'Sách BT & Đề Tr.59–83'
                          : unit.id === 4
                            ? 'Sách BT & Đề Tr.84–106'
                            : unit.id === 5
                              ? 'Sách BT & Đề Tr.107–128'
                              : unit.id === 6
                                ? 'Sách BT & Đề Tr.129–149'
                                : unit.id === 7
                                  ? 'Sách BT & Đề Tr.1–21'
                                  : 'Sách BT Tr.22–41'}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* TAB 1: GRAMMAR */}
          {activeTab === 'grammar' && (
            <div className="space-y-6">
              {/* Interactive Simulation Stage */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="mb-4">
                  <h2 className="font-display text-lg font-bold text-slate-900">
                    Mô phỏng tương tác — Hiểu ngay trong 30 giây
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Chạm trực tiếp vào các nút hoặc thanh trượt để quan sát quy luật ngữ pháp thay đổi.
                  </p>
                </div>
                <GrammarVisual type={unit.visualWidget} />
              </section>

              {/* Structured Grammar Topics */}
              {unit.grammarTopics.map((topic, index) => (
                <section
                  key={topic.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                      Trọng tâm ngữ pháp #{index + 1} · {topic.titleEn}
                    </p>
                    <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                      {topic.titleVi}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {topic.summaryVi}
                    </p>
                  </div>

                  {/* Color-coded Formula Blocks */}
                  <div className="space-y-3">
                    {topic.formulas.map((formula) => (
                      <div
                        key={formula.formLabel}
                        className="rounded-xl border border-slate-200 bg-slate-50/60 p-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                          <span className="text-xs font-bold text-slate-700">
                            {formula.formLabel}
                          </span>
                          <button
                            type="button"
                            onClick={() => speakEnglish(formula.exampleEn)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                            Nghe ví dụ
                          </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {formula.tokens.map((tok, tIdx) => (
                            <div key={`${tok.label}-${tIdx}`} className="flex items-center gap-2">
                              <span
                                className={`rounded-lg border px-3 py-1.5 font-ipa text-xs sm:text-sm font-semibold ${TOKEN_COLORS[tok.role]}`}
                              >
                                {tok.label}
                              </span>
                              {tIdx < formula.tokens.length - 1 && (
                                <span className="text-slate-400 font-bold">+</span>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="text-sm">
                          <p className="font-semibold text-slate-900">{formula.exampleEn}</p>
                          <p className="text-xs text-slate-600 mt-0.5">{formula.exampleVi}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Rules Grid */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {topic.keyRules.map((rule) => (
                      <div
                        key={rule.heading}
                        className="rounded-xl border border-slate-200 bg-white p-4"
                      >
                        <h4 className="font-display text-sm font-bold text-slate-900">
                          {rule.heading}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {rule.detail}
                        </p>
                        <p className="mt-2 rounded-lg bg-slate-50 px-3 py-1.5 font-ipa text-xs font-medium text-sky-800">
                          {rule.example}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Signal Words if present */}
                  {topic.signalWords && topic.signalWords.length > 0 && (
                    <div className="rounded-xl bg-sky-50/70 border border-sky-200 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-2">
                        Dấu hiệu nhận biết nhanh trong đề thi
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {topic.signalWords.map((sw) => (
                          <span
                            key={sw}
                            className="rounded-lg bg-white border border-sky-200 px-2.5 py-1 font-ipa text-xs font-semibold text-slate-800"
                          >
                            {sw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Remember Note */}
                  <div className="flex items-start gap-3 rounded-xl bg-amber-50/80 border border-amber-200 p-4">
                    <Lightbulb className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium text-amber-950 leading-relaxed">
                      <strong>Ghi nhớ tránh sai:</strong> {topic.rememberNote}
                    </p>
                  </div>
                </section>
              ))}

              {/* Unit 7 Extended Textbook Reference: 24 Wh-Questions & 6 Conjunctions (Tập 2 · Tr.3–4) */}
              {unit.id === 7 && (
                <div className="space-y-6">
                  {/* 24 Wh-Questions Interactive Explorer */}
                  <section className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                          Sách Tập 2 · Trang 3–4 · Bản đồ 24 Từ &amp; Cụm Từ Để Hỏi
                        </p>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                          Tra cứu nhanh 24 mẫu Wh-Questions chuẩn sách Global Success
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Chia thành 4 nhóm rõ ràng giúp em phân biệt ngay <strong>How tall / How high / How far / How long / How often / How much / How many</strong>.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab('workbook')}
                        className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-blue-700 shrink-0"
                      >
                        <span>Làm bài tập Tr.6–21</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          { id: 'basic', label: '1–9 · 9 Từ cơ bản (What → How)' },
                          { id: 'how_measure', label: '10–16 · 7 Đo lường HOW' },
                          { id: 'price_qty', label: '17–21 · 5 Giá & Số lượng' },
                          { id: 'what_spec', label: '22–24 · 3 Đặc điểm WHAT' },
                        ] as const
                      ).map((grp) => (
                        <button
                          key={grp.id}
                          type="button"
                          onClick={() => setU7WhGroup(grp.id)}
                          className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition-colors ${
                            u7WhGroup === grp.id
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {grp.label}
                        </button>
                      ))}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {U7_WH_24_GUIDE.filter((item) => item.group === u7WhGroup).map((item) => (
                        <div
                          key={item.num}
                          className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 flex flex-col justify-between gap-2.5"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-ipa text-xs font-extrabold text-blue-700 tabular-nums">
                                #{item.num}
                              </span>
                              <button
                                type="button"
                                onClick={() => speakEnglish(item.exampleEn)}
                                className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 shrink-0"
                                title="Nghe câu ví dụ"
                              >
                                <Volume2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <p className="font-display text-sm font-extrabold text-slate-900 mt-1">
                              {item.phrase}
                            </p>
                            <p className="text-xs font-bold text-blue-800 mt-0.5">
                              {item.meaningVi}
                            </p>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {item.usageVi}
                            </p>
                          </div>
                          <div className="rounded-lg bg-white border border-slate-200 px-2.5 py-2 text-xs">
                            <p className="font-semibold text-slate-900">{item.exampleEn}</p>
                            <p className="text-slate-500 mt-0.5">{item.exampleVi}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 6 Conjunctions Logic Grid (Tập 2 · Tr.4) */}
                  <section className="rounded-2xl border border-indigo-200 bg-white p-5 sm:p-6 space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                        Sách Tập 2 · Trang 4 · 6 Liên Từ Kết Nối Câu (Conjunctions)
                      </p>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                        Nhớ nhanh 6 liên từ bằng ký hiệu logic: and · or · but · because · although · so
                      </h3>
                    </div>

                    <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                      {U7_CONJUNCTION_6_GUIDE.map((conj) => (
                        <div
                          key={conj.word}
                          className="rounded-xl border border-indigo-200/80 bg-indigo-50/40 p-4 flex flex-col justify-between gap-3"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-display text-sm font-extrabold text-white">
                                  {conj.symbol}
                                </span>
                                <div>
                                  <p className="font-display text-base font-extrabold text-slate-900">
                                    {conj.word}
                                  </p>
                                  <p className="text-[11px] font-bold text-indigo-800">
                                    {conj.meaningVi}
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => speakEnglish(conj.exampleEn)}
                                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-100 shrink-0"
                                title="Nghe câu ví dụ"
                              >
                                <Volume2 className="h-4 w-4" />
                              </button>
                            </div>
                            <p className="text-xs text-slate-700 mt-2.5 leading-relaxed">
                              {conj.functionVi}
                            </p>
                          </div>

                          <div className="rounded-lg bg-white border border-indigo-100 p-2.5 text-xs">
                            <p className="font-semibold text-slate-900">{conj.exampleEn}</p>
                            <p className="text-slate-500 mt-0.5">{conj.exampleVi}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              {/* Unit 8 Extended Textbook Reference: Past Simple Explorer & 4 Imperative Forms (Tập 2 · Tr.22–26) */}
              {unit.id === 8 && (
                <div className="space-y-6">
                  {/* Past Simple Interactive 3-Tab Explorer */}
                  <section className="rounded-2xl border border-orange-200 bg-white p-5 sm:p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                          Sách Tập 2 · Trang 22–25 · Bản đồ Thì Quá Khứ Đơn (The Past Simple)
                        </p>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                          Nắm chắc To be (was/were), Động từ thường (V-ed/V2) &amp; 3 cách đọc đuôi -ed
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          Chuyển đổi giữa 3 thẻ bên dưới để học từng bước: Công thức, Quy tắc thêm &amp; phát âm -ed, và 7 Dấu hiệu nhận biết chuẩn SGK.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab('workbook')}
                        className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-xl bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-700 shrink-0"
                      >
                        <span>Làm bài tập Tr.28–41</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          { id: 'forms', label: '1. Công thức To be vs Động từ thường (Tr.22–23)' },
                          { id: 'ed_rules', label: '2. 5 Quy tắc chính tả & 3 Cách đọc -ed (Tr.24–25)' },
                          { id: 'signals', label: '3. 7 Dấu hiệu thời gian Quá khứ (Tr.23–24)' },
                        ] as const
                      ).map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setU8PastTab(tab.id)}
                          className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition-colors ${
                            u8PastTab === tab.id
                              ? 'border-orange-600 bg-orange-600 text-white'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {u8PastTab === 'forms' && (
                      <div className="grid gap-4 lg:grid-cols-2">
                        {/* Column A: To be */}
                        <div className="rounded-2xl border border-orange-200 bg-orange-50/40 p-4 space-y-3">
                          <p className="font-display text-sm font-extrabold text-orange-900">
                            A. Động từ &ldquo;To be&rdquo; (was / were) · Tr.22
                          </p>
                          {U8_PAST_SIMPLE_BE.map((card) => (
                            <div
                              key={card.title}
                              className="rounded-xl border border-orange-100 bg-white p-3.5 space-y-2"
                            >
                              <p className="text-xs font-extrabold text-slate-900">{card.title}</p>
                              <p className="rounded-lg bg-orange-50 px-2.5 py-1.5 font-ipa text-xs font-bold text-orange-950">
                                {card.formula}
                              </p>
                              <p className="text-xs text-slate-600">{card.noteVi}</p>
                              <div className="space-y-1.5 pt-1">
                                {card.examples.map((ex) => (
                                  <div
                                    key={ex.en}
                                    className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs"
                                  >
                                    <div>
                                      <p className="font-semibold text-slate-900">{ex.en}</p>
                                      <p className="text-[11px] text-slate-500">{ex.vi}</p>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => speakEnglish(ex.en)}
                                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-700 hover:bg-orange-100"
                                      title="Nghe ví dụ"
                                    >
                                      <Volume2 className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Column B: Ordinary Verbs */}
                        <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-4 space-y-3">
                          <p className="font-display text-sm font-extrabold text-amber-950">
                            B. Động từ thường (V-ed / V2 · didn&apos;t + V) · Tr.22–23
                          </p>
                          {U8_PAST_SIMPLE_VERB.map((card) => (
                            <div
                              key={card.title}
                              className="rounded-xl border border-amber-100 bg-white p-3.5 space-y-2"
                            >
                              <p className="text-xs font-extrabold text-slate-900">{card.title}</p>
                              <p className="rounded-lg bg-amber-50 px-2.5 py-1.5 font-ipa text-xs font-bold text-amber-950">
                                {card.formula}
                              </p>
                              <p className="text-xs text-slate-600">{card.noteVi}</p>
                              <div className="space-y-1.5 pt-1">
                                {card.examples.map((ex) => (
                                  <div
                                    key={ex.en}
                                    className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs"
                                  >
                                    <div>
                                      <p className="font-semibold text-slate-900">{ex.en}</p>
                                      <p className="text-[11px] text-slate-500">{ex.vi}</p>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => speakEnglish(ex.en)}
                                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100"
                                      title="Nghe ví dụ"
                                    >
                                      <Volume2 className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {u8PastTab === 'ed_rules' && (
                      <div className="space-y-4">
                        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2.5">
                          <p className="text-xs font-bold uppercase tracking-wider text-orange-800">
                            5 Quy tắc chính tả khi thêm đuôi &ldquo;-ed&rdquo; (Tr.24)
                          </p>
                          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                            {U8_ED_SPELLING_RULES.map((item, idx) => (
                              <div
                                key={item.rule}
                                className="rounded-xl border border-slate-200 bg-white p-3 space-y-1.5"
                              >
                                <p className="text-xs font-bold text-slate-900">
                                  <span className="font-ipa text-orange-700 mr-1">#{idx + 1}</span>
                                  {item.rule}
                                </p>
                                <p className="font-ipa text-xs font-semibold text-orange-900 bg-orange-50/80 rounded-lg px-2.5 py-1.5">
                                  {item.examples}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-3 md:grid-cols-3">
                          {U8_ED_PRONUNCIATION_3.map((grp) => (
                            <div
                              key={grp.sound}
                              className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span
                                  className={`rounded-lg px-2.5 py-1 font-ipa text-sm font-extrabold text-white ${
                                    grp.color === 'amber'
                                      ? 'bg-amber-600'
                                      : grp.color === 'sky'
                                        ? 'bg-sky-600'
                                        : 'bg-emerald-600'
                                  }`}
                                >
                                  Đuôi {grp.sound}
                                </span>
                              </div>
                              <p className="text-xs text-slate-700 leading-relaxed">{grp.ruleVi}</p>
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {grp.words.map((w) => (
                                  <button
                                    key={w}
                                    type="button"
                                    onClick={() => speakEnglish(w)}
                                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-900 hover:bg-orange-50 hover:border-orange-300"
                                  >
                                    <span>{w}</span>
                                    <Volume2 className="h-3 w-3 text-orange-600" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {u8PastTab === 'signals' && (
                      <div className="space-y-4">
                        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                          {U8_TIME_SIGNALS.map((sig) => (
                            <button
                              key={sig.en}
                              type="button"
                              onClick={() => speakEnglish(sig.en.replace(/\s*\+\s*/g, ' '))}
                              className="flex items-center justify-between gap-2 rounded-xl border border-orange-200 bg-orange-50/50 p-3 text-left hover:bg-orange-100/70 transition-colors"
                            >
                              <div>
                                <p className="font-ipa text-xs sm:text-sm font-extrabold text-orange-950">
                                  {sig.en}
                                </p>
                                <p className="text-[11px] text-slate-600 mt-0.5">{sig.vi}</p>
                              </div>
                              <Volume2 className="h-3.5 w-3.5 shrink-0 text-orange-700" />
                            </button>
                          ))}
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950">
                          <p>
                            <strong>Mẹo thực hành ngay:</strong> Em có thể luyện bảng 29 động từ Quá khứ đơn (17 có quy tắc + 12 bất quy tắc) ở <strong>Trạm 03 · Sách BT Tr.22–41</strong>.
                          </p>
                          <button
                            type="button"
                            onClick={() => setActiveTab('workbook')}
                            className="inline-flex items-center gap-1 rounded-lg bg-orange-600 px-3 py-1.5 font-bold text-white hover:bg-orange-700 shrink-0"
                          >
                            <span>Mở Sách BT Unit 8</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </section>

                  {/* 4 Imperative Forms Grid (Tập 2 · Tr.25–26) */}
                  <section className="rounded-2xl border border-amber-200 bg-white p-5 sm:p-6 space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                        Sách Tập 2 · Trang 25–26 · Câu Mệnh Lệnh (Imperatives)
                      </p>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                        4 Dạng Câu Mệnh Lệnh Trực Tiếp &amp; Dạng Phủ Định (Don&apos;t + V)
                      </h3>
                    </div>

                    <div className="grid gap-3.5 sm:grid-cols-2">
                      {U8_IMPERATIVE_4_GUIDE.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl border border-amber-200/80 bg-amber-50/40 p-4 flex flex-col justify-between gap-3"
                        >
                          <div className="space-y-1.5">
                            <p className="font-display text-sm font-extrabold text-slate-900">
                              {item.title}
                            </p>
                            <p className="rounded-lg bg-white border border-amber-200 px-2.5 py-1.5 font-ipa text-xs font-bold text-amber-950">
                              {item.formula}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">{item.noteVi}</p>
                          </div>

                          <div className="space-y-1.5">
                            {item.examples.map((ex) => (
                              <div
                                key={ex.en}
                                className="flex items-center justify-between gap-2 rounded-lg bg-white border border-amber-100 px-2.5 py-1.5 text-xs"
                              >
                                <div>
                                  <p className="font-semibold text-slate-900">{ex.en}</p>
                                  <p className="text-[11px] text-slate-500">{ex.vi}</p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => speakEnglish(ex.en)}
                                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100"
                                  title="Nghe câu mệnh lệnh"
                                >
                                  <Volume2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              {/* Complete Grammar & Move Next */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <button
                  type="button"
                  onClick={() => onMarkSectionDone(unit.id, 'grammar')}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold border transition-colors ${
                    doneSections.includes('grammar')
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {doneSections.includes('grammar')
                    ? 'Đã hoàn thành phần Ngữ pháp'
                    : 'Đánh dấu đã hiểu Ngữ pháp'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onMarkSectionDone(unit.id, 'grammar');
                    setActiveTab('pronunciation');
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition-colors"
                >
                  <span>Sang phần Phát âm</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: PRONUNCIATION LAB */}
          {activeTab === 'pronunciation' && (
            <div className="space-y-6">
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  {unit.pronunciation.titleVi}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {unit.pronunciation.subtitleVi}
                </p>

                {/* Visual Mouth Shape Comparison SVG for Unit 1 (/ɑː/ vs /ʌ/ — Book p.12) */}
                {unit.id === 1 && (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <div className="flex items-center gap-4 rounded-xl bg-white border border-sky-200 p-3.5">
                      <svg viewBox="0 0 88 88" className="h-20 w-20 shrink-0" fill="none" aria-hidden="true">
                        <circle cx="44" cy="44" r="38" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2" />
                        <ellipse cx="44" cy="52" rx="18" ry="20" fill="#0369A1" stroke="#0284C7" strokeWidth="2.5" />
                        <path d="M31 61c4-5 22-5 26 0" stroke="#FCA5A5" strokeWidth="4.5" strokeLinecap="round" />
                        <path d="M32 37h24" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
                        <path d="M68 38v28M64 42l4-4 4 4M64 62l4 4 4-4" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="min-w-0">
                        <p className="font-ipa text-sm font-extrabold text-sky-700">/ɑː/ · Mở to như ngáp</p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Hàm dưới hạ thấp tối đa, lưỡi đặt thấp ở phía sau và kéo hơi dài (~2 nhịp).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-white border border-emerald-200 p-3.5">
                      <svg viewBox="0 0 88 88" className="h-20 w-20 shrink-0" fill="none" aria-hidden="true">
                        <circle cx="44" cy="44" r="38" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
                        <ellipse cx="44" cy="52" rx="15" ry="10" fill="#047857" stroke="#059669" strokeWidth="2.5" />
                        <path d="M34 55c4-3 16-3 20 0" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
                        <path d="M34 45h20" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                        <path d="M68 45v14M65 48l3-3 3 3M65 56l3 3 3-3" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="min-w-0">
                        <p className="font-ipa text-sm font-extrabold text-emerald-700">/ʌ/ · Mở vừa, bật gọn</p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Miệng mở vừa phải (bằng 1/2), thân lưỡi nâng nhẹ ở giữa, bật ngắn gọn giống chữ &ldquo;ă&rdquo;.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Airflow /s/ vs Throat-Vibration /z/ SVG + 3-Rule Box for Unit 2 (Book pp.39–40) */}
                {unit.id === 2 && (
                  <div className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-sky-200 p-3.5">
                        <svg viewBox="0 0 88 88" className="h-20 w-20 shrink-0" fill="none" aria-hidden="true">
                          <circle cx="44" cy="44" r="38" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2" />
                          {/* Teeth + smiling lips */}
                          <rect x="24" y="34" width="24" height="10" rx="3" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
                          <line x1="24" y1="39" x2="48" y2="39" stroke="#0284C7" strokeWidth="1.5" />
                          {/* Airflow waves */}
                          <path d="M54 35c5 0 7-3 12-3M54 40c6 0 8 0 14 0M54 45c5 0 7 3 12 3" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
                          {/* Calm throat */}
                          <path d="M30 62h14" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
                          <text x="48" y="65" fontSize="9" fontWeight="700" fill="#64748B">0 rung</text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-sky-700">/s/ · Thổi gió mát (Vô thanh)</p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Đặt lòng bàn tay trước miệng thấy <strong>luồng gió</strong> thoát qua khe răng; chạm tay cổ họng <strong>KHÔNG rung</strong>.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 rounded-xl bg-white border border-emerald-200 p-3.5">
                        <svg viewBox="0 0 88 88" className="h-20 w-20 shrink-0" fill="none" aria-hidden="true">
                          <circle cx="44" cy="44" r="38" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
                          <rect x="24" y="34" width="24" height="10" rx="3" fill="#FFFFFF" stroke="#059669" strokeWidth="2" />
                          <line x1="24" y1="39" x2="48" y2="39" stroke="#059669" strokeWidth="1.5" />
                          {/* Vocal cord vibration waves */}
                          <path d="M26 60l4-4 4 4 4-4 4 4 4-4 4 4" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          <text x="53" y="42" fontSize="11" fontWeight="800" fill="#059669">ZZZZ</text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-emerald-700">/z/ · Rung cổ họng (Hữu thanh)</p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Giữ nguyên khẩu hình răng/lưỡi như /s/ nhưng <strong>rung dây thanh âm</strong> như tiếng ong kêu &ldquo;zzzz&rdquo;.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 3 Rules for -s/-es (Book p.40) */}
                    <div className="grid gap-3 md:grid-cols-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
                      <div className="rounded-xl bg-white border border-amber-200 p-3.5">
                        <p className="font-ipa text-sm font-extrabold text-amber-700">Quy tắc 1: Đọc /ɪz/</p>
                        <p className="text-slate-600 mt-1">Sau các âm gió <strong>/s, z, ʃ, ʒ, tʃ, dʒ/</strong></p>
                        <p className="mt-1.5 font-ipa text-slate-800">boxes · roses · dishes · rouges · watches · changes</p>
                      </div>
                      <div className="rounded-xl bg-white border border-sky-200 p-3.5">
                        <p className="font-ipa text-sm font-extrabold text-sky-700">Quy tắc 2: Đọc /s/</p>
                        <p className="text-slate-600 mt-1">Sau 5 âm vô thanh <strong>/p, k, t, f, θ/</strong></p>
                        <p className="mt-1.5 font-ipa text-slate-800">stops · books · hats · chefs · heaths</p>
                      </div>
                      <div className="rounded-xl bg-white border border-emerald-200 p-3.5">
                        <p className="font-ipa text-sm font-extrabold text-emerald-700">Quy tắc 3: Đọc /z/</p>
                        <p className="text-slate-600 mt-1">Sau nguyên âm &amp; phụ âm hữu thanh còn lại</p>
                        <p className="mt-1.5 font-ipa text-slate-800">fans · drums · rooms · beds · walls</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Paper-Blow /p/ vs Throat-Vibration /b/ SVG + Silent b/p Rules for Unit 3 (Book pp.63–65) */}
                {unit.id === 3 && (
                  <div className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-emerald-200 p-3.5">
                        <svg viewBox="0 0 88 88" className="h-20 w-20 shrink-0" fill="none" aria-hidden="true">
                          <circle cx="44" cy="44" r="38" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
                          {/* Closed lips popping */}
                          <path d="M22 38c6-5 16-5 22 0c-6 5-16 5-22 0z" fill="#FCA5A5" stroke="#059669" strokeWidth="2" />
                          {/* Paper stays still */}
                          <rect x="56" y="24" width="12" height="24" rx="2" fill="#FFFFFF" stroke="#059669" strokeWidth="2" />
                          <line x1="62" y1="24" x2="62" y2="18" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
                          {/* Throat vibration */}
                          <path d="M20 62l4-4 4 4 4-4 4 4 4-4 4 4" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          <text x="50" y="65" fontSize="9" fontWeight="800" fill="#059669">Rung!</text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-emerald-700">/b/ · Mím môi bật tiếng (Hữu thanh)</p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Mím hai môi rồi mở bật tiếng: <strong>cổ họng rung rõ</strong>, đặt tờ giấy trước miệng <strong>giấy KHÔNG bay</strong>. (buy, bear, robe, butterfly, rabbit)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 rounded-xl bg-white border border-violet-200 p-3.5">
                        <svg viewBox="0 0 88 88" className="h-20 w-20 shrink-0" fill="none" aria-hidden="true">
                          <circle cx="44" cy="44" r="38" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="2" />
                          <path d="M20 38c5-4 14-4 19 0c-5 4-14 4-19 0z" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="2" />
                          {/* Strong air puff */}
                          <path d="M41 35h10M41 39h13M41 43h10" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" />
                          {/* Paper blown forward */}
                          <path d="M58 24l12 3-5 22-12-3 5-22z" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="2" />
                          {/* No throat vibration */}
                          <path d="M22 62h16" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
                          <text x="42" y="65" fontSize="9" fontWeight="700" fill="#64748B">0 rung · Bay giấy!</text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-violet-700">/p/ · Nén môi bật hơi (Vô thanh)</p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Mím chặt hai môi rồi <strong>bật luồng gió mạnh</strong>: đặt tờ giấy trước miệng <strong>giấy rung/bay</strong>, cổ họng <strong>KHÔNG rung</strong>. (pear, public, pupil, apple)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Silent b & Silent p Rules (Book pp.64–65) */}
                    <div className="grid gap-3 md:grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
                      <div className="rounded-xl bg-white border border-amber-200 p-3.5 space-y-2">
                        <p className="font-ipa text-sm font-extrabold text-amber-800">
                          Lưu ý 1: Chữ &ldquo;b&rdquo; câm (Silent b · Tr.64)
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          Chữ <strong>b</strong> thường <strong>không đọc (câm)</strong> khi đứng trước <strong>t</strong> hoặc đứng sau <strong>m</strong> ở cuối âm tiết.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            { w: 'climb', ipa: '/klaɪm/' },
                            { w: 'debt', ipa: '/det/' },
                            { w: 'limb', ipa: '/lɪm/' },
                          ].map((ex) => (
                            <button
                              key={ex.w}
                              type="button"
                              onClick={() => speakEnglish(ex.w)}
                              className="inline-flex items-center gap-1 rounded-lg border border-amber-200 bg-amber-50/70 px-2.5 py-1 font-semibold text-slate-900 hover:bg-amber-100"
                            >
                              <span>{ex.w}</span>
                              <span className="font-ipa text-[10px] text-amber-800">{ex.ipa}</span>
                              <Volume2 className="h-3 w-3 text-amber-700" />
                            </button>
                          ))}
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Ngoại lệ: KHÔNG câm nếu <strong>b</strong> mở đầu âm tiết mới: <span className="font-ipa font-semibold text-slate-700">camber, chambermaid, gumbo</span>.
                        </p>
                      </div>

                      <div className="rounded-xl bg-white border border-violet-200 p-3.5 space-y-2">
                        <p className="font-ipa text-sm font-extrabold text-violet-800">
                          Lưu ý 2: Chữ &ldquo;p&rdquo; câm (Silent p · Tr.65)
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          Chữ <strong>p</strong> bị <strong>câm</strong> khi đứng đầu từ ngay trước các phụ âm <strong>n, s, t</strong>.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            { w: 'psychiatrist', ipa: '/saɪˈkaɪətrɪst/' },
                            { w: 'psychologist', ipa: '/saɪˈkɒlədʒɪst/' },
                            { w: 'psychology', ipa: '/saɪˈkɒlədʒi/' },
                          ].map((ex) => (
                            <button
                              key={ex.w}
                              type="button"
                              onClick={() => speakEnglish(ex.w)}
                              className="inline-flex items-center gap-1 rounded-lg border border-violet-200 bg-violet-50/70 px-2.5 py-1 font-semibold text-slate-900 hover:bg-violet-100"
                            >
                              <span>{ex.w}</span>
                              <span className="font-ipa text-[10px] text-violet-800">{ex.ipa}</span>
                              <Volume2 className="h-3 w-3 text-violet-700" />
                            </button>
                          ))}
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Chạm từng từ để nghe giọng đọc bản ngữ kiểm chứng chữ <strong>p</strong> hoàn toàn không phát âm!
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Mouth-Shape Diagram & 9 Spelling Signs for Unit 4 (/ɪ/ vs /iː/, Book pp.85–88) */}
                {unit.id === 4 && (
                  <div className="mt-5 space-y-4">
                    {/* Side-by-side Mouth Shape SVG */}
                    <div className="grid gap-3 sm:grid-cols-2 rounded-2xl border border-amber-200 bg-amber-50/50 p-4">
                      {/* /ɪ/ short i */}
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-slate-200 p-3.5">
                        <svg viewBox="0 0 110 74" className="h-16 w-24 shrink-0" aria-hidden="true">
                          <rect x="2" y="2" width="106" height="70" rx="10" fill="#FFFBEB" stroke="#FDE68A" />
                          {/* Relaxed neutral lips */}
                          <ellipse cx="55" cy="34" rx="22" ry="12" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />
                          {/* Lower relaxed tongue */}
                          <path d="M38 40 Q55 34 72 40" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                          {/* Short pulse indicator */}
                          <line x1="45" y1="58" x2="65" y2="58" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
                          <text x="55" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="#B45309">
                            Bật ngắn · Thả lỏng
                          </text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-amber-800">
                            /ɪ/ · Nguyên âm ngắn (Tr.85)
                          </p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Mở miệng tự nhiên, <strong>môi thả lỏng không căng</strong>, lưỡi hơi hạ thấp và phát âm <strong>ngắn, dứt khoát</strong> (sit, ship, city, village).
                          </p>
                        </div>
                      </div>

                      {/* /iː/ long i */}
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-slate-200 p-3.5">
                        <svg viewBox="0 0 110 74" className="h-16 w-24 shrink-0" aria-hidden="true">
                          <rect x="2" y="2" width="106" height="70" rx="10" fill="#F0F9FF" stroke="#BAE6FD" />
                          {/* Wide smiling lips */}
                          <path d="M22 34 Q55 24 88 34 Q55 44 22 34 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
                          {/* Pull arrows */}
                          <path d="M18 34 L10 34 M13 31 L10 34 L13 37" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M92 34 L100 34 M97 31 L100 34 L97 37" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          {/* Long sound bar */}
                          <line x1="25" y1="58" x2="85" y2="58" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
                          <text x="55" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0369A1">
                            Cười rộng · Ngân dài
                          </text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-sky-700">
                            /iː/ · Nguyên âm dài (Tr.86)
                          </p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Kéo <strong>khóe miệng rộng sang hai bên như đang cười</strong>, lưỡi nâng cao sát vòm miệng và <strong>kéo dài hơi</strong> (seat, sheep, cheap, peaceful).
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 9 Spelling Signs & Exceptions (Book pp.86–88) */}
                    <div className="grid gap-4 md:grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
                      {/* 4 Signs for /ɪ/ */}
                      <div className="rounded-xl bg-white border border-amber-200 p-4 space-y-3">
                        <p className="font-ipa text-sm font-extrabold text-amber-800">
                          4 Dấu hiệu chính tả của âm /ɪ/ (Tr.86–87)
                        </p>
                        <div className="space-y-3">
                          {U4_PRONUNCIATION_SIGNS.filter((s) => s.sound === 'short_i').map((sign, i) => (
                            <div key={sign.id} className="space-y-1.5 border-t border-slate-100 pt-2.5 first:border-t-0 first:pt-0">
                              <p className="font-bold text-slate-900">
                                {i + 1}. {sign.pattern}
                              </p>
                              <p className="text-slate-600 leading-relaxed">{sign.ruleVi}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {sign.examples.map((ex) => (
                                  <button
                                    key={ex.word}
                                    type="button"
                                    onClick={() => speakEnglish(ex.word)}
                                    className="inline-flex items-center gap-1 rounded-lg border border-amber-200 bg-amber-50/70 px-2 py-1 font-semibold text-slate-900 hover:bg-amber-100"
                                    title={ex.meaningVi}
                                  >
                                    <span>{ex.word}</span>
                                    <span className="font-ipa text-[10px] text-amber-800">{ex.ipa}</span>
                                    <Volume2 className="h-3 w-3 text-amber-700" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 5 Signs + Exceptions for /iː/ */}
                      <div className="rounded-xl bg-white border border-sky-200 p-4 space-y-3">
                        <p className="font-ipa text-sm font-extrabold text-sky-800">
                          5 Dấu hiệu chính tả &amp; Ngoại lệ của âm /iː/ (Tr.87–88)
                        </p>
                        <div className="space-y-3">
                          {U4_PRONUNCIATION_SIGNS.filter((s) => s.sound === 'long_i').map((sign, i) => (
                            <div key={sign.id} className="space-y-1.5 border-t border-slate-100 pt-2.5 first:border-t-0 first:pt-0">
                              <p className="font-bold text-slate-900">
                                {i + 1}. {sign.pattern}
                              </p>
                              <p className="text-slate-600 leading-relaxed">{sign.ruleVi}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {sign.examples.map((ex) => (
                                  <button
                                    key={ex.word}
                                    type="button"
                                    onClick={() => speakEnglish(ex.word)}
                                    className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50/70 px-2 py-1 font-semibold text-slate-900 hover:bg-sky-100"
                                    title={ex.meaningVi}
                                  >
                                    <span>{ex.word}</span>
                                    <span className="font-ipa text-[10px] text-sky-800">{ex.ipa}</span>
                                    <Volume2 className="h-3 w-3 text-sky-700" />
                                  </button>
                                ))}
                              </div>
                              {sign.exceptionsVi && (
                                <p className="text-[11px] font-medium text-rose-700">
                                  {sign.exceptionsVi}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Tongue-to-Ridge SVG Diagram & Spelling Signs for Unit 5 (/t/ vs /d/, Book pp.110–111) */}
                {unit.id === 5 && (
                  <div className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 rounded-2xl border border-teal-200 bg-teal-50/50 p-4">
                      {/* /t/ Voiceless aspirated */}
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-teal-200 p-3.5">
                        <svg viewBox="0 0 110 80" className="h-20 w-24 shrink-0" aria-hidden="true">
                          <rect x="2" y="2" width="106" height="76" rx="10" fill="#F0FDFA" stroke="#99F6E4" />
                          {/* Upper teeth & alveolar ridge */}
                          <path d="M22 28 Q42 20 56 26 L56 38 L48 38 L48 30" fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" />
                          {/* Tongue tip touching ridge behind teeth */}
                          <path d="M20 52 Q38 46 46 31" fill="none" stroke="#F43F5E" strokeWidth="4" strokeLinecap="round" />
                          <circle cx="46" cy="30" r="3" fill="#0D9488" />
                          {/* Strong air puff into palm */}
                          <path d="M62 32 H80 M62 38 H84 M62 44 H78" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" />
                          <path d="M90 24 V52" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />
                          <text x="55" y="15" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#0F766E">
                            Bật hơi mạnh · 0 rung
                          </text>
                          <text x="55" y="70" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#64748B">
                            Chạm chân răng trên
                          </text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-teal-800">
                            /t/ · Vô thanh, bật hơi (Tr.110)
                          </p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Nâng đầu lưỡi chạm <strong>chân răng cửa hàm trên</strong> (KHÔNG chạm mặt sau răng kẻo thành âm &ldquo;th&rdquo; tiếng Việt), rồi hạ lưỡi <strong>bật hơi mạnh</strong> vào lòng bàn tay. (time, tore, write, hat)
                          </p>
                        </div>
                      </div>

                      {/* /d/ Voiced vibrating throat */}
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-amber-200 p-3.5">
                        <svg viewBox="0 0 110 80" className="h-20 w-24 shrink-0" aria-hidden="true">
                          <rect x="2" y="2" width="106" height="76" rx="10" fill="#FFFBEB" stroke="#FDE68A" />
                          <path d="M22 28 Q42 20 56 26 L56 38 L48 38 L48 30" fill="none" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M20 52 Q38 46 46 31" fill="none" stroke="#F43F5E" strokeWidth="4" strokeLinecap="round" />
                          <circle cx="46" cy="30" r="3" fill="#D97706" />
                          {/* Throat vibration wave */}
                          <path d="M26 64 l4-4 4 4 4-4 4 4 4-4 4 4" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          <text x="74" y="67" fontSize="9" fontWeight="800" fill="#B45309">Rung cổ!</text>
                          <text x="55" y="15" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#B45309">
                            Hữu thanh · Rung thanh quản
                          </text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-amber-800">
                            /d/ · Hữu thanh, rung cổ (Tr.110)
                          </p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Đặt lưỡi giống hệt /t/ (chạm chân răng trên), nhưng phát âm <strong>rung rõ dây thanh quản</strong> và <strong>không bật luồng hơi</strong> vào tay. (doll, dog, hand, dream)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Pronunciation Recognition Signs (Book p.111) */}
                    <div className="grid gap-3 md:grid-cols-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
                      {U5_PRONUNCIATION_SIGNS.map((sign) => (
                        <div
                          key={sign.titleVi}
                          className={`rounded-xl bg-white border p-3.5 space-y-2 ${
                            sign.sound === '/t/' ? 'border-teal-200' : 'border-amber-200'
                          }`}
                        >
                          <p
                            className={`font-ipa text-sm font-extrabold ${
                              sign.sound === '/t/' ? 'text-teal-800' : 'text-amber-800'
                            }`}
                          >
                            {sign.titleVi}
                          </p>
                          <p className="text-slate-600 leading-relaxed">{sign.ruleVi}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {sign.examples.map((ex) => (
                              <button
                                key={ex.word}
                                type="button"
                                onClick={() => speakEnglish(ex.word)}
                                title={ex.vi}
                                className={`inline-flex items-center gap-1 rounded-lg border px-2 py-1 font-semibold text-slate-900 transition-colors ${
                                  sign.sound === '/t/'
                                    ? 'border-teal-200 bg-teal-50/70 hover:bg-teal-100'
                                    : 'border-amber-200 bg-amber-50/70 hover:bg-amber-100'
                                }`}
                              >
                                <span>{ex.word}</span>
                                <span
                                  className={`font-ipa text-[10px] ${
                                    sign.sound === '/t/' ? 'text-teal-800' : 'text-amber-800'
                                  }`}
                                >
                                  {ex.ipa}
                                </span>
                                <Volume2
                                  className={`h-3 w-3 ${
                                    sign.sound === '/t/' ? 'text-teal-700' : 'text-amber-700'
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visual Mouth/Lip Diagram & 8 Spelling Signs for Unit 6 (/s/ vs /ʃ/, Book pp.131–134) */}
                {unit.id === 6 && (
                  <div className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 rounded-2xl border border-rose-200 bg-rose-50/50 p-4">
                      {/* /s/ stretched lips */}
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-sky-200 p-3.5">
                        <svg viewBox="0 0 110 80" className="h-20 w-24 shrink-0" aria-hidden="true">
                          <rect x="2" y="2" width="106" height="76" rx="10" fill="#F0F9FF" stroke="#BAE6FD" />
                          {/* Stretched smiling lips */}
                          <path d="M22 40 Q55 30 88 40 Q55 50 22 40 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
                          <line x1="28" y1="40" x2="82" y2="40" stroke="#94A3B8" strokeWidth="1.5" />
                          {/* Outward pull arrows */}
                          <path d="M18 40 L10 40 M13 37 L10 40 L13 43" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M92 40 L100 40 M97 37 L100 40 L97 43" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          <text x="55" y="16" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#0369A1">
                            Môi bè nhẹ · Như chữ &ldquo;x&rdquo;
                          </text>
                          <text x="55" y="68" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#64748B">
                            Hơi xì thẳng · 0 rung
                          </text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-sky-800">
                            /s/ · Âm &ldquo;x&rdquo; nhẹ, môi bè (Tr.131)
                          </p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Đầu lưỡi đặt gần chân răng cửa trên, <strong>khóe miệng hơi kéo sang hai bên</strong> như cười nhẹ, đẩy luồng gió xì thẳng ra ngoài. (sea, sing, city, celebrate)
                          </p>
                        </div>
                      </div>

                      {/* /ʃ/ rounded protruding lips */}
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-rose-200 p-3.5">
                        <svg viewBox="0 0 110 80" className="h-20 w-24 shrink-0" aria-hidden="true">
                          <rect x="2" y="2" width="106" height="76" rx="10" fill="#FFF1F2" stroke="#FECDD3" />
                          {/* Rounded protruding lips */}
                          <ellipse cx="55" cy="40" rx="16" ry="13" fill="#FFE4E6" stroke="#E11D48" strokeWidth="2.5" />
                          <ellipse cx="55" cy="40" rx="8" ry="6" fill="#9F1239" />
                          {/* Push forward / hush waves */}
                          <path d="M77 35 C82 37 82 43 77 45 M84 32 C91 36 91 44 84 48" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
                          <text x="55" y="16" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#BE123C">
                            Chu tròn môi · &ldquo;Shhh!&rdquo;
                          </text>
                          <text x="55" y="68" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#64748B">
                            Đẩy môi ra trước · 0 rung
                          </text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-rose-800">
                            /ʃ/ · Âm &ldquo;s&rdquo; nặng, chu môi (Tr.131)
                          </p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            <strong>Chu tròn hai môi đẩy về phía trước</strong> giống ra hiệu im lặng &ldquo;Shhh!&rdquo;, thân lưỡi nâng cao gần vòm miệng và thổi hơi dày. (shop, wish, special, sugar)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 8 Grouped Spelling Signs & Exceptions (Book pp.132–134) */}
                    <div className="grid gap-4 md:grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
                      <div className="rounded-xl bg-white border border-sky-200 p-4 space-y-3">
                        <p className="font-ipa text-sm font-extrabold text-sky-800">
                          Dấu hiệu nhận biết âm /s/ (Tr.132–133)
                        </p>
                        <div className="space-y-3">
                          {U6_PRONUNCIATION_SIGNS.filter((s) => s.sound === '/s/').map((sign) => (
                            <div
                              key={sign.titleVi}
                              className="space-y-1.5 border-t border-slate-100 pt-2.5 first:border-t-0 first:pt-0"
                            >
                              <p className="font-bold text-slate-900">{sign.titleVi}</p>
                              <p className="text-slate-600 leading-relaxed">{sign.ruleVi}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {sign.examples.map((ex) => (
                                  <button
                                    key={ex.word}
                                    type="button"
                                    onClick={() => speakEnglish(ex.word)}
                                    title={ex.vi}
                                    className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50/70 px-2 py-1 font-semibold text-slate-900 hover:bg-sky-100"
                                  >
                                    <span>{ex.word}</span>
                                    <span className="font-ipa text-[10px] text-sky-800">{ex.ipa}</span>
                                    <Volume2 className="h-3 w-3 text-sky-700" />
                                  </button>
                                ))}
                              </div>
                              {sign.exceptionsVi && (
                                <p className="text-[11px] font-medium text-rose-700">
                                  {sign.exceptionsVi}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl bg-white border border-rose-200 p-4 space-y-3">
                        <p className="font-ipa text-sm font-extrabold text-rose-800">
                          Dấu hiệu nhận biết âm /ʃ/ (Tr.133–134)
                        </p>
                        <div className="space-y-3">
                          {U6_PRONUNCIATION_SIGNS.filter((s) => s.sound === '/ʃ/').map((sign) => (
                            <div
                              key={sign.titleVi}
                              className="space-y-1.5 border-t border-slate-100 pt-2.5 first:border-t-0 first:pt-0"
                            >
                              <p className="font-bold text-slate-900">{sign.titleVi}</p>
                              <p className="text-slate-600 leading-relaxed">{sign.ruleVi}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {sign.examples.map((ex) => (
                                  <button
                                    key={ex.word}
                                    type="button"
                                    onClick={() => speakEnglish(ex.word)}
                                    title={ex.vi}
                                    className="inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50/70 px-2 py-1 font-semibold text-slate-900 hover:bg-rose-100"
                                  >
                                    <span>{ex.word}</span>
                                    <span className="font-ipa text-[10px] text-rose-800">{ex.ipa}</span>
                                    <Volume2 className="h-3 w-3 text-rose-700" />
                                  </button>
                                ))}
                              </div>
                              {sign.exceptionsVi && (
                                <p className="text-[11px] font-medium text-rose-700">
                                  {sign.exceptionsVi}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Palm Air-Puff Test SVG & 5 Spelling Signs for Unit 7 (/θ/ vs /ð/, Tập 2 · Tr.5–6) */}
                {unit.id === 7 && (
                  <div className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 rounded-2xl border border-blue-200 bg-blue-50/50 p-4">
                      {/* /θ/ Voiceless — Palm feels puff of air */}
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-sky-200 p-3.5">
                        <svg viewBox="0 0 116 84" className="h-20 w-28 shrink-0" aria-hidden="true">
                          <rect x="2" y="2" width="112" height="80" rx="10" fill="#F0F9FF" stroke="#BAE6FD" />
                          {/* Upper & lower teeth + tongue tip between teeth */}
                          <rect x="18" y="26" width="18" height="9" rx="2" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.6" />
                          <rect x="18" y="47" width="18" height="9" rx="2" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.6" />
                          <path d="M12 41 Q30 37 44 41 Q30 45 12 41 Z" fill="#FDA4AF" stroke="#E11D48" strokeWidth="1.4" />
                          {/* Air-puff stream arrows hitting palm */}
                          <path d="M47 36 L66 33 M48 41 L70 41 M47 46 L66 49" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
                          <path d="M67 38 L71 41 L67 44" fill="none" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          {/* Palm icon */}
                          <rect x="76" y="25" width="18" height="32" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
                          <line x1="82" y1="26" x2="82" y2="39" stroke="#D97706" strokeWidth="1.2" />
                          <line x1="88" y1="26" x2="88" y2="39" stroke="#D97706" strokeWidth="1.2" />
                          <text x="58" y="16" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#0369A1">
                            /θ/ Vô thanh · CÓ luồng hơi
                          </text>
                          <text x="58" y="73" textAnchor="middle" fontSize="8.2" fontWeight="700" fill="#64748B">
                            Đưa lòng bàn tay trước miệng: MÁT HƠI
                          </text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-sky-800">
                            /θ/ · Lưỡi giữa 2 hàm răng + Thổi hơi (Tr.5)
                          </p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Đặt nhẹ đầu lưỡi giữa hai hàm răng rồi <strong>thổi hơi mạnh ra ngoài</strong>. Giơ lòng bàn tay trước miệng sẽ cảm nhận rõ <strong>luồng khí mát bật vào tay</strong>, cổ họng không rung.
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {['think', 'bath', 'thank', 'earth'].map((w) => (
                              <button
                                key={w}
                                type="button"
                                onClick={() => speakEnglish(w)}
                                className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-2 py-0.5 text-[11px] font-bold text-sky-900 hover:bg-sky-100"
                              >
                                <span>{w}</span>
                                <Volume2 className="h-3 w-3 text-sky-700" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* /ð/ Voiced — Throat vibrates, no air puff on palm */}
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-indigo-200 p-3.5">
                        <svg viewBox="0 0 116 84" className="h-20 w-28 shrink-0" aria-hidden="true">
                          <rect x="2" y="2" width="112" height="80" rx="10" fill="#EEF2FF" stroke="#C7D2FE" />
                          {/* Upper & lower teeth + tongue tip */}
                          <rect x="18" y="26" width="18" height="9" rx="2" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.6" />
                          <rect x="18" y="47" width="18" height="9" rx="2" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.6" />
                          <path d="M12 41 Q30 37 44 41 Q30 45 12 41 Z" fill="#FDA4AF" stroke="#E11D48" strokeWidth="1.4" />
                          {/* Throat vibration waves */}
                          <path d="M52 33 Q57 37 52 41 Q57 45 52 49" fill="none" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round" />
                          <path d="M60 30 Q67 36 60 41 Q67 46 60 52" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
                          {/* Calm palm */}
                          <rect x="76" y="25" width="18" height="32" rx="6" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.8" />
                          <line x1="82" y1="26" x2="82" y2="39" stroke="#64748B" strokeWidth="1.2" />
                          <line x1="88" y1="26" x2="88" y2="39" stroke="#64748B" strokeWidth="1.2" />
                          <text x="58" y="16" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#3730A3">
                            /ð/ Hữu thanh · RUNG cổ họng
                          </text>
                          <text x="58" y="73" textAnchor="middle" fontSize="8.2" fontWeight="700" fill="#64748B">
                            Cổ họng rung rõ · KHÔNG bật hơi vào tay
                          </text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-indigo-800">
                            /ð/ · Lưỡi giữa 2 hàm răng + Rung dây thanh (Tr.5)
                          </p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Đặt lưỡi tương tự nhưng <strong>đẩy tiếng ra làm rung cổ họng</strong>. Đặt lòng bàn tay trước miệng sẽ <strong>không thấy luồng hơi thổi mạnh</strong> như /θ/.
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {['this', 'mother', 'weather', 'brother'].map((w) => (
                              <button
                                key={w}
                                type="button"
                                onClick={() => speakEnglish(w)}
                                className="inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[11px] font-bold text-indigo-900 hover:bg-indigo-100"
                              >
                                <span>{w}</span>
                                <Volume2 className="h-3 w-3 text-indigo-700" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5 Spelling Signs for /θ/ and /ð/ (Tập 2 · Tr.5–6) */}
                    <div className="grid gap-4 md:grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
                      <div className="rounded-xl bg-white border border-sky-200 p-4 space-y-3">
                        <p className="font-ipa text-sm font-extrabold text-sky-800">
                          4 Dấu hiệu chữ &ldquo;th&rdquo; đọc là /θ/ (Tr.5–6)
                        </p>
                        <div className="space-y-3">
                          {U7_PRONUNCIATION_SIGNS.filter((s) => s.sound === '/θ/').map((sign) => (
                            <div
                              key={sign.ruleTitle}
                              className="space-y-1.5 border-t border-slate-100 pt-2.5 first:border-t-0 first:pt-0"
                            >
                              <p className="font-bold text-slate-900">{sign.ruleTitle}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {sign.words.map((ex) => (
                                  <button
                                    key={ex.word}
                                    type="button"
                                    onClick={() => speakEnglish(ex.word)}
                                    title={ex.vi}
                                    className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50/70 px-2 py-1 font-semibold text-slate-900 hover:bg-sky-100"
                                  >
                                    <span>{ex.word}</span>
                                    <span className="font-ipa text-[10px] text-sky-800">{ex.ipa}</span>
                                    <Volume2 className="h-3 w-3 text-sky-700" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl bg-white border border-indigo-200 p-4 space-y-3">
                        <p className="font-ipa text-sm font-extrabold text-indigo-800">
                          Dấu hiệu chữ &ldquo;th&rdquo; đọc là /ð/ (Tr.6)
                        </p>
                        <div className="space-y-3">
                          {U7_PRONUNCIATION_SIGNS.filter((s) => s.sound === '/ð/').map((sign) => (
                            <div key={sign.ruleTitle} className="space-y-2">
                              <p className="font-bold text-slate-900">{sign.ruleTitle}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {sign.words.map((ex) => (
                                  <button
                                    key={ex.word}
                                    type="button"
                                    onClick={() => speakEnglish(ex.word)}
                                    title={ex.vi}
                                    className="inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50/70 px-2 py-1 font-semibold text-slate-900 hover:bg-indigo-100"
                                  >
                                    <span>{ex.word}</span>
                                    <span className="font-ipa text-[10px] text-indigo-800">{ex.ipa}</span>
                                    <Volume2 className="h-3 w-3 text-indigo-700" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual 3-Step Mouth-Height SVG & 7 Spelling Signs for Unit 8 (/e/ vs /æ/, Tập 2 · Tr.26–28) */}
                {unit.id === 8 && (
                  <div className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 rounded-2xl border border-orange-200 bg-orange-50/50 p-4">
                      {/* /e/ Natural Relaxed Mouth */}
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-sky-200 p-3.5">
                        <svg viewBox="0 0 116 84" className="h-20 w-28 shrink-0" aria-hidden="true">
                          <rect x="2" y="2" width="112" height="80" rx="10" fill="#F0F9FF" stroke="#BAE6FD" />
                          {/* Natural medium-open lips */}
                          <ellipse cx="58" cy="43" rx="22" ry="11" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.2" />
                          {/* Mid-height tongue */}
                          <path d="M40 46 Q58 38 76 46 Q58 52 40 46 Z" fill="#FDA4AF" stroke="#E11D48" strokeWidth="1.4" />
                          {/* Short duration arrow */}
                          <path d="M90 36 L90 50" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
                          <path d="M87 39 L90 36 L93 39 M87 47 L90 50 L93 47" fill="none" stroke="#0284C7" strokeWidth="1.4" />
                          <text x="58" y="16" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#0369A1">
                            /e/ Mở tự nhiên · Nhanh &lt; 1s
                          </text>
                          <text x="58" y="73" textAnchor="middle" fontSize="8.2" fontWeight="700" fill="#64748B">
                            Môi thư giãn · Lưỡi độ cao vừa phải
                          </text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-sky-800">
                            /e/ · Âm &ldquo;e&rdquo; ngắn, môi thư giãn (Tr.26)
                          </p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Mở miệng <strong>tự nhiên, môi hoàn toàn thư giãn</strong>, lưỡi đặt ở độ cao vừa phải và phát âm dứt khoát <strong>nhanh hơn 1 giây</strong>.
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {['head', 'egg', 'ten', 'leg'].map((w) => (
                              <button
                                key={w}
                                type="button"
                                onClick={() => speakEnglish(w)}
                                className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-2 py-0.5 text-[11px] font-bold text-sky-900 hover:bg-sky-100"
                              >
                                <span>{w}</span>
                                <Volume2 className="h-3 w-3 text-sky-700" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* /æ/ Wide Stretched Open Mouth + Lowest Tongue */}
                      <div className="flex items-center gap-4 rounded-xl bg-white border border-orange-200 p-3.5">
                        <svg viewBox="0 0 116 84" className="h-20 w-28 shrink-0" aria-hidden="true">
                          <rect x="2" y="2" width="112" height="80" rx="10" fill="#FFF7ED" stroke="#FED7AA" />
                          {/* Wide open stretched mouth */}
                          <ellipse cx="58" cy="43" rx="26" ry="18" fill="#FFEDD5" stroke="#EA580C" strokeWidth="2.2" />
                          {/* Lowest tongue touching bottom front teeth */}
                          <path d="M36 53 Q58 47 80 53 Q58 60 36 53 Z" fill="#FDA4AF" stroke="#E11D48" strokeWidth="1.4" />
                          {/* Wide opening vertical arrow */}
                          <path d="M93 28 L93 58" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
                          <path d="M90 32 L93 28 L96 32 M90 54 L93 58 L96 54" fill="none" stroke="#EA580C" strokeWidth="1.5" />
                          <text x="58" y="16" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#C2410C">
                            /æ/ Mở RỘNG &amp; CĂNG · &lt; 1s
                          </text>
                          <text x="58" y="73" textAnchor="middle" fontSize="8.2" fontWeight="700" fill="#64748B">
                            Hạ lưỡi thấp nhất chạm răng cửa dưới
                          </text>
                        </svg>
                        <div className="min-w-0">
                          <p className="font-ipa text-sm font-extrabold text-orange-800">
                            /æ/ · Âm &ldquo;e bẹt&rdquo;, mở rộng hàm dưới (Tr.26–27)
                          </p>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            <strong>Mở miệng rộng và căng sang 2 bên</strong>, hạ lưỡi xuống <strong>vị trí thấp nhất</strong> chạm chân răng cửa dưới, phát âm gọn trong 1 nhịp ngắn.
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {['hand', 'cat', 'back', 'family'].map((w) => (
                              <button
                                key={w}
                                type="button"
                                onClick={() => speakEnglish(w)}
                                className="inline-flex items-center gap-1 rounded-lg border border-orange-200 bg-orange-50 px-2 py-0.5 text-[11px] font-bold text-orange-950 hover:bg-orange-100"
                              >
                                <span>{w}</span>
                                <Volume2 className="h-3 w-3 text-orange-700" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 7 Spelling Signs for /e/ and /æ/ (Tập 2 · Tr.27–28) */}
                    <div className="grid gap-4 md:grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
                      <div className="rounded-xl bg-white border border-sky-200 p-4 space-y-3">
                        <p className="font-ipa text-sm font-extrabold text-sky-800">
                          4 Dấu hiệu nhận biết âm /e/ (Tr.27)
                        </p>
                        <div className="space-y-3">
                          {U8_PRONUNCIATION_SIGNS.filter((s) => s.sound === '/e/').map((sign) => (
                            <div
                              key={sign.ruleTitle}
                              className="space-y-1.5 border-t border-slate-100 pt-2.5 first:border-t-0 first:pt-0"
                            >
                              <p className="font-bold text-slate-900">{sign.ruleTitle}</p>
                              {sign.noteVi && (
                                <p className="text-[11px] font-medium text-rose-700">
                                  {sign.noteVi}
                                </p>
                              )}
                              <div className="flex flex-wrap gap-1.5">
                                {sign.words.map((ex) => (
                                  <button
                                    key={ex.word}
                                    type="button"
                                    onClick={() => speakEnglish(ex.word)}
                                    title={ex.vi}
                                    className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50/70 px-2 py-1 font-semibold text-slate-900 hover:bg-sky-100"
                                  >
                                    <span>{ex.word}</span>
                                    <span className="font-ipa text-[10px] text-sky-800">{ex.ipa}</span>
                                    <Volume2 className="h-3 w-3 text-sky-700" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl bg-white border border-orange-200 p-4 space-y-3">
                        <p className="font-ipa text-sm font-extrabold text-orange-800">
                          3 Dấu hiệu nhận biết âm /æ/ (Tr.27–28)
                        </p>
                        <div className="space-y-3">
                          {U8_PRONUNCIATION_SIGNS.filter((s) => s.sound === '/æ/').map((sign) => (
                            <div
                              key={sign.ruleTitle}
                              className="space-y-1.5 border-t border-slate-100 pt-2.5 first:border-t-0 first:pt-0"
                            >
                              <p className="font-bold text-slate-900">{sign.ruleTitle}</p>
                              {sign.noteVi && (
                                <p className="text-[11px] font-medium text-rose-700">
                                  {sign.noteVi}
                                </p>
                              )}
                              <div className="flex flex-wrap gap-1.5">
                                {sign.words.map((ex) => (
                                  <button
                                    key={ex.word}
                                    type="button"
                                    onClick={() => speakEnglish(ex.word)}
                                    title={ex.vi}
                                    className="inline-flex items-center gap-1 rounded-lg border border-orange-200 bg-orange-50/70 px-2 py-1 font-semibold text-slate-900 hover:bg-orange-100"
                                  >
                                    <span>{ex.word}</span>
                                    <span className="font-ipa text-[10px] text-orange-800">{ex.ipa}</span>
                                    <Volume2 className="h-3 w-3 text-orange-700" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Side-by-side Sound Cards */}
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {unit.pronunciation.sounds.map((sound, sIdx) => (
                    <div
                      key={sound.symbol}
                      className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 flex flex-col justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className={`rounded-xl px-3.5 py-1.5 font-ipa text-lg font-bold text-white ${
                              sIdx === 0 ? 'bg-sky-600' : 'bg-emerald-600'
                            }`}
                          >
                            {sound.symbol}
                          </span>
                          <span className="text-xs font-bold text-slate-700">
                            {sound.labelVi}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <strong>Cách phát âm:</strong> {sound.mouthGuideVi}
                        </p>
                        <div className="mt-3 text-xs text-slate-600">
                          <strong>Dấu hiệu chính tả:</strong>{' '}
                          {sound.spellingClues.join(' · ')}
                        </div>
                      </div>

                      {/* Clickable Practice Words */}
                      <div className="space-y-2 border-t border-slate-200 pt-3">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          Chạm từng từ để nghe phát âm mẫu
                        </p>
                        {sound.words.map((w) => (
                          <div
                            key={w.word}
                            className="flex items-center justify-between gap-2 rounded-xl bg-white border border-slate-200 px-3 py-2"
                          >
                            <div className="min-w-0">
                              <span className="font-display text-sm font-bold text-slate-900">
                                {w.word}
                              </span>{' '}
                              <span className="font-ipa text-xs text-sky-700">{w.ipa}</span>
                              <p className="text-[11px] text-slate-500 truncate">
                                {w.meaningVi}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => speakEnglish(w.word, { slow: false })}
                                className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100"
                                title="Nghe chuẩn"
                              >
                                <Volume2 className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => speakEnglish(w.word, { slow: true })}
                                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200"
                                title="Nghe chậm"
                              >
                                <Turtle className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Minimal Pairs Comparison */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="font-display text-base font-bold text-slate-900 mb-3">
                  Đối chiếu cặp từ dễ nhầm (Minimal Pairs)
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {unit.pronunciation.minimalPairs.map((pair) => (
                    <div
                      key={`${pair.left}-${pair.right}`}
                      className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => speakEnglish(pair.left)}
                          className="flex-1 flex items-center justify-between rounded-lg bg-white border border-slate-200 px-3 py-2 text-left hover:border-sky-300"
                        >
                          <div>
                            <p className="font-display text-sm font-bold text-slate-900">
                              {pair.left}
                            </p>
                            <p className="font-ipa text-[11px] text-sky-700">{pair.leftIpa}</p>
                          </div>
                          <Volume2 className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                        </button>
                        <span className="text-xs font-bold text-slate-400">vs</span>
                        <button
                          type="button"
                          onClick={() => speakEnglish(pair.right)}
                          className="flex-1 flex items-center justify-between rounded-lg bg-white border border-slate-200 px-3 py-2 text-left hover:border-emerald-300"
                        >
                          <div>
                            <p className="font-display text-sm font-bold text-slate-900">
                              {pair.right}
                            </p>
                            <p className="font-ipa text-[11px] text-emerald-700">{pair.rightIpa}</p>
                          </div>
                          <Volume2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 mt-2 text-center">{pair.noteVi}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quick Audio Discrimination Mini-Test */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="font-display text-base font-bold text-slate-900 mb-4">
                  Kiểm tra tai nghe nhanh (2 câu)
                </h3>
                <div className="space-y-4">
                  {unit.pronunciation.quickDrill.map((q, qIdx) => {
                    const chosen = drillAnswers[qIdx];
                    const answered = chosen !== undefined;
                    const ok = chosen === q.correctIndex;
                    return (
                      <div
                        key={q.targetWord}
                        className="rounded-xl border border-slate-200 bg-slate-50/60 p-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                          <p className="text-sm font-semibold text-slate-800">
                            Câu {qIdx + 1}: {q.promptVi}
                          </p>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => speakEnglish(q.targetWord, { slow: false })}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-700"
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                              Nghe từ
                            </button>
                            <button
                              type="button"
                              onClick={() => speakEnglish(q.targetWord, { slow: true })}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                            >
                              <Turtle className="h-3.5 w-3.5" />
                              Chậm
                            </button>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {q.options.map((opt, oIdx) => {
                            let cls =
                              'border-slate-200 bg-white text-slate-800 hover:border-sky-300';
                            if (answered) {
                              if (oIdx === q.correctIndex) {
                                cls = 'border-emerald-500 bg-emerald-50 text-emerald-900';
                              } else if (oIdx === chosen) {
                                cls = 'border-rose-400 bg-rose-50 text-rose-900';
                              }
                            }
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() =>
                                  setDrillAnswers((prev) => ({ ...prev, [qIdx]: oIdx }))
                                }
                                className={`rounded-xl border px-4 py-2.5 text-left text-sm font-semibold transition-colors ${cls}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {answered && (
                          <div
                            className={`mt-3 flex items-start gap-2 rounded-lg p-3 text-xs font-medium ${
                              ok
                                ? 'bg-emerald-50 text-emerald-900'
                                : 'bg-rose-50 text-rose-900'
                            }`}
                          >
                            {ok ? (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700 mt-0.5" />
                            ) : (
                              <XCircle className="h-4 w-4 shrink-0 text-rose-700 mt-0.5" />
                            )}
                            <span>
                              <strong>{ok ? 'Chính xác!' : 'Chưa đúng.'}</strong> ({q.targetWord}) —{' '}
                              {q.explanationVi}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <button
                  type="button"
                  onClick={() => onMarkSectionDone(unit.id, 'pronunciation')}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold border transition-colors ${
                    doneSections.includes('pronunciation')
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {doneSections.includes('pronunciation')
                    ? 'Đã hoàn thành Phát âm'
                    : 'Đánh dấu đã luyện Phát âm'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onMarkSectionDone(unit.id, 'pronunciation');
                    setActiveTab('vocabulary');
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition-colors"
                >
                  <span>Sang học Từ vựng</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: VOCABULARY FLASHCARDS + TABLE */}
          {activeTab === 'vocabulary' && currentCard && (
            <div className="space-y-6">
              {/* Interactive 3D Flashcard Deck */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div>
                    <h2 className="font-display text-lg font-bold text-slate-900">
                      Thẻ ghi nhớ Flashcard ({cardIdx + 1}/{unit.vocabulary.length})
                    </h2>
                    <p className="text-xs text-slate-500">
                      Chạm vào thẻ để lật xem nghĩa Tiếng Việt và câu ví dụ song ngữ
                    </p>
                  </div>
                  <span className="font-ipa text-xs font-semibold text-emerald-700 tabular-nums">
                    Đã thuộc: {masteredInUnit}/{unit.vocabulary.length} từ
                  </span>
                </div>

                {/* Flip Card */}
                <div className="mx-auto max-w-xl">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setFlipped((prev) => !prev)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setFlipped((prev) => !prev);
                      }
                    }}
                    className="perspective-1000 cursor-pointer select-none focus:outline-none"
                  >
                    <div
                      className={`relative min-h-60 w-full transition-transform duration-500 transform-style-3d ${
                        flipped ? 'rotate-y-180' : ''
                      }`}
                    >
                      {/* Front Face */}
                      <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-slate-200 bg-slate-50/80 p-6 text-center">
                        <span className="text-xs font-semibold text-sky-700 mb-2">
                          {currentCard.topicGroup} · ({currentCard.pos})
                        </span>
                        <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                          {currentCard.word}
                        </p>
                        <p className="font-ipa text-base text-slate-500 mt-2">
                          {currentCard.ipa}
                        </p>

                        <div
                          className="mt-5 flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={() => speakEnglish(currentCard.word, { slow: false })}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-sky-700"
                          >
                            <Volume2 className="h-4 w-4" />
                            Phát âm chuẩn
                          </button>
                          <button
                            type="button"
                            onClick={() => speakEnglish(currentCard.word, { slow: true })}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                          >
                            <Turtle className="h-4 w-4" />
                            Chậm
                          </button>
                        </div>

                        <p className="mt-4 inline-flex items-center gap-1 text-xs text-slate-400">
                          <RotateCw className="h-3.5 w-3.5" />
                          Chạm thẻ để lật mặt sau
                        </p>
                      </div>

                      {/* Back Face */}
                      <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-sky-300 bg-sky-50/70 p-6 text-center">
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                          Nghĩa Tiếng Việt
                        </span>
                        <p className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                          {currentCard.meaningVi}
                        </p>

                        <div className="mt-4 w-full rounded-xl bg-white border border-sky-200 p-3.5 text-left">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-semibold text-slate-900">
                              {currentCard.exampleEn}
                            </p>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                speakEnglish(currentCard.exampleEn);
                              }}
                              className="shrink-0 rounded-lg bg-sky-50 p-1.5 text-sky-700 hover:bg-sky-100"
                              title="Nghe câu ví dụ"
                            >
                              <Volume2 className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            {currentCard.exampleVi}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Controls */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setFlipped(false);
                        setCardIdx((prev) =>
                          prev === 0 ? unit.vocabulary.length - 1 : prev - 1
                        );
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Thẻ trước
                    </button>

                    <button
                      type="button"
                      onClick={() => onToggleVocabMastered(currentCard.id)}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold border transition-colors ${
                        isCardMastered
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      {isCardMastered ? 'Đã thuộc từ này' : 'Đánh dấu đã thuộc'}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setFlipped(false);
                        setCardIdx((prev) => (prev + 1) % unit.vocabulary.length);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                    >
                      Thẻ tiếp
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </section>

              {/* Complete Unit Vocabulary Table */}
              <section className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <div className="border-b border-slate-200 px-5 py-4">
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Danh sách từ vựng trọng tâm {unit.code}
                  </h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {unit.vocabulary.map((item, idx) => {
                    const mastered = progress.masteredVocabIds.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3.5 hover:bg-slate-50/70"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setCardIdx(idx);
                                setFlipped(false);
                              }}
                              className="font-display text-sm font-bold text-slate-900 hover:text-sky-700"
                            >
                              {item.word}
                            </button>
                            <span className="font-ipa text-xs text-sky-700">{item.ipa}</span>
                            <span className="text-xs text-slate-400">({item.pos})</span>
                            <span className="text-sm font-medium text-slate-700">
                              — {item.meaningVi}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">
                            {item.exampleEn} ({item.exampleVi})
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => speakEnglish(item.word)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => onToggleVocabMastered(item.id)}
                            className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold border transition-colors ${
                              mastered
                                ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {mastered ? 'Đã thuộc' : 'Chưa thuộc'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <button
                  type="button"
                  onClick={() => onMarkSectionDone(unit.id, 'vocabulary')}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold border transition-colors ${
                    doneSections.includes('vocabulary')
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {doneSections.includes('vocabulary')
                    ? 'Đã hoàn thành Từ vựng'
                    : 'Đánh dấu đã học Từ vựng'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onMarkSectionDone(unit.id, 'vocabulary');
                    setActiveTab('practice');
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition-colors"
                >
                  <span>Làm bài Luyện tập 4 Dạng</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: PRACTICE 4 TYPES */}
          {activeTab === 'practice' && (
            <div className="space-y-4">
              <ExerciseEngine
                exercises={unit.exercises}
                title={`Luyện tập ${unit.code}`}
                onAnswerResult={onRecordAnswer}
                onCompleteSession={(correct, total) =>
                  onRecordUnitScore(unit.id, correct, total)
                }
              />

              {/* Next Unit Shortcut */}
              {unit.id < ALL_UNITS.length && (
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5">
                  <div>
                    <p className="text-xs font-medium text-slate-500">Bài học tiếp theo</p>
                    <p className="font-display text-sm font-bold text-slate-900">
                      Unit {unit.id + 1}: {ALL_UNITS[unit.id].titleEn} — {ALL_UNITS[unit.id].titleVi}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectUnit(unit.id + 1);
                      setActiveTab('grammar');
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-slate-800"
                  >
                    <span>Học Unit {unit.id + 1}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: INTERACTIVE WORKBOOK (UNIT 1–6 Tập 1 Tr.1–149 + UNIT 7–8 Tập 2 Tr.1–41) */}
          {unit.id === 1 && activeTab === 'workbook' && (
            <Unit1Workbook initialStation={initialUnit1Station} />
          )}
          {unit.id === 2 && activeTab === 'workbook' && (
            <Unit2Workbook initialStation={initialUnit2Station} />
          )}
          {unit.id === 3 && activeTab === 'workbook' && (
            <Unit3Workbook initialStation={initialUnit3Station} />
          )}
          {unit.id === 4 && activeTab === 'workbook' && (
            <Unit4Workbook initialStation={initialUnit4Station} />
          )}
          {unit.id === 5 && activeTab === 'workbook' && (
            <Unit5Workbook initialStation={initialUnit5Station} />
          )}
          {unit.id === 6 && activeTab === 'workbook' && (
            <Unit6Workbook initialStation={initialUnit6Station} />
          )}
          {unit.id === 7 && activeTab === 'workbook' && (
            <Unit7Workbook initialStation={initialUnit7Station} />
          )}
          {unit.id === 8 && activeTab === 'workbook' && (
            <Unit8Workbook initialStation={initialUnit8Station} />
          )}
        </main>
      </div>
    </div>
  );
}
