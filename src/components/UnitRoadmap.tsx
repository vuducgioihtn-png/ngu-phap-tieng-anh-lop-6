import { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, Headphones, Layers, Sparkles } from 'lucide-react';
import { ALL_EXERCISES, ALL_UNITS, ALL_VOCABULARY } from '../data/curriculum';
import type { StudentProgress } from '../hooks/useProgress';
import type { UnitData } from '../types/curriculum';

import type { Unit2StationId } from './Unit2Workbook';
import type { Unit3StationId } from './Unit3Workbook';
import type { Unit4StationId } from './Unit4Workbook';
import type { Unit5StationId } from './Unit5Workbook';
import type { Unit6StationId } from './Unit6Workbook';
import type { Unit7StationId } from './Unit7Workbook';
import type { Unit8StationId } from './Unit8Workbook';

interface UnitRoadmapProps {
  progress: StudentProgress;
  onSelectUnit: (unitId: number) => void;
  onOpenUnit1Workbook: (station?: 'phonetics' | 'schedule_mcq' | 'unit1_test') => void;
  onOpenUnit2Workbook: (station?: Unit2StationId) => void;
  onOpenUnit3Workbook: (station?: Unit3StationId) => void;
  onOpenUnit4Workbook: (station?: Unit4StationId) => void;
  onOpenUnit5Workbook: (station?: Unit5StationId) => void;
  onOpenUnit6Workbook: (station?: Unit6StationId) => void;
  onOpenUnit7Workbook: (station?: Unit7StationId) => void;
  onOpenUnit8Workbook: (station?: Unit8StationId) => void;
  onOpenPractice: () => void;
  onOpenVocab: () => void;
  onOpenAnswerKey: () => void;
}

export function UnitRoadmap({
  progress,
  onSelectUnit,
  onOpenUnit1Workbook,
  onOpenUnit2Workbook,
  onOpenUnit3Workbook,
  onOpenUnit4Workbook,
  onOpenUnit5Workbook,
  onOpenUnit6Workbook,
  onOpenUnit7Workbook,
  onOpenUnit8Workbook,
  onOpenPractice,
  onOpenVocab,
  onOpenAnswerKey,
}: UnitRoadmapProps) {
  const [semesterFilter, setSemesterFilter] = useState<'all' | 1 | 2>('all');

  const filteredUnits: UnitData[] =
    semesterFilter === 'all'
      ? ALL_UNITS
      : ALL_UNITS.filter((u) => u.semester === semesterFilter);

  const totalSectionsDone = Object.values(progress.completedSections).reduce(
    (sum, arr) => sum + arr.length,
    0
  );
  const overallPercent = Math.round((totalSectionsDone / (ALL_UNITS.length * 4)) * 100);
  const accuracy =
    progress.totalAnswered > 0
      ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
      : 0;

  const currentUnit = ALL_UNITS.find((u) => u.id === progress.lastUnitId) ?? ALL_UNITS[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      {/* Focused Hero Banner */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-2xs">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Chương trình Tiếng Anh Lớp 6 · Global Success (Tập 1 &amp; Tập 2)
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Học Tiếng Anh lớp 6 trực quan, dễ hiểu và nhớ lâu
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Trọn bộ 12 Unit chuẩn sách giáo khoa với mô phỏng ngữ pháp tương tác, phòng luyện phát âm chuẩn IPA, thẻ từ vựng có giọng đọc bản ngữ và bài tập thực hành chi tiết.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onSelectUnit(currentUnit.id)}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-sky-700"
              >
                <span>Học tiếp {currentUnit.code}: {currentUnit.titleEn}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={onOpenAnswerKey}
                className="inline-flex items-center gap-2 rounded-xl border border-sky-300 bg-sky-50 px-5 py-3 text-sm font-semibold text-sky-900 transition-colors hover:bg-sky-100"
              >
                <span>Đáp Án &amp; Tổng Ôn Tập 1</span>
              </button>
              <button
                type="button"
                onClick={onOpenPractice}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                <span>Luyện đề tổng hợp</span>
              </button>
            </div>
          </div>

          {/* Right: Clean Unboxed Progress Snapshot */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-sm font-bold text-slate-900">
                Tiến độ học tập của em
              </span>
              <span className="font-ipa text-sm font-bold text-sky-700 tabular-nums">
                {overallPercent}%
              </span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-slate-200 overflow-hidden mb-5">
              <div
                className="h-full rounded-full bg-sky-600 transition-all duration-500"
                style={{ width: `${Math.max(4, overallPercent)}%` }}
              />
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-4">
              <div>
                <p className="text-xs font-medium text-slate-500">Từ đã thuộc</p>
                <p className="font-display text-xl font-extrabold text-slate-900 tabular-nums mt-0.5">
                  {progress.masteredVocabIds.length}
                  <span className="text-xs font-semibold text-slate-400">/{ALL_VOCABULARY.length}</span>
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Bài tập</p>
                <p className="font-display text-xl font-extrabold text-slate-900 tabular-nums mt-0.5">
                  {ALL_EXERCISES.length + 2160}
                  <span className="text-xs font-semibold text-slate-400"> câu</span>
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Độ chính xác</p>
                <p className="font-display text-xl font-extrabold text-emerald-700 tabular-nums mt-0.5">
                  {progress.totalAnswered > 0 ? `${accuracy}%` : '—'}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-xs text-slate-600">
              <span>4 trụ cột mỗi bài: Ngữ pháp · Phát âm · Từ vựng · Bài tập</span>
              <button
                type="button"
                onClick={onOpenVocab}
                className="font-semibold text-sky-700 hover:underline whitespace-nowrap ml-2"
              >
                Xem từ vựng
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Update Strip 1: Mới cập nhật Tập 2 · Trang 21–41 (Hoàn thiện Test Unit 7 + Trọn bộ Unit 8) */}
      <section className="mt-6 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-800">
              Mới cập nhật chi tiết · Sách Tập 2 (Trang 21–41) · Test Unit 7 (XI–XII) &amp; Trọn bộ Unit 8: Sports and Games
            </p>
            <h2 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
              Hoàn thiện Test Unit 7 (Tr.21) + Quá Khứ Đơn, Câu Mệnh Lệnh, Âm /e/–/æ/ &amp; 7 Trạm Bài Tập Unit 8 (Tr.22–41)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Bổ sung Phần XI–XII Test Unit 7 (8 câu nối liên từ + bài viết Who is a Millionaire?), bản đồ Thì Quá Khứ Đơn &amp; 3 cách đọc đuôi -ed, khẩu hình /e/–/æ/, 12 hình thể thao, bảng 29 động từ quá khứ, 4 bài đọc hiểu &amp; viết đoạn văn môn thể thao yêu thích.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onOpenUnit7Workbook('unit7_test')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-blue-300 px-3.5 py-2 text-xs font-bold text-blue-900 hover:bg-blue-50 transition-colors"
            >
              <span>Test Unit 7 (Tr.16–21)</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectUnit(8)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-orange-300 px-3.5 py-2 text-xs font-bold text-orange-900 hover:bg-orange-100/70 transition-colors"
            >
              <span>Ngữ pháp Unit 8 (Tr.22–28)</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenUnit8Workbook('phonetics_sports')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700 transition-colors"
            >
              <span>Bài tập Unit 8 (Tr.28–41)</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Update Strip 2: Hoàn thiện 100% Tập 1 (PDF Tr.1–188 · Sách Tr.1–179) */}
      <section className="mt-4 rounded-2xl border border-sky-200 bg-sky-50/60 p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Hoàn thiện 100% trọn bộ Tập 1 (Trang 1–188) · Sổ Tay Đáp Án &amp; Tổng Ôn Cuối HK1
            </p>
            <h2 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
              Sổ Tay Đáp Án Nguyên Văn Unit 1–6 (PDF Tr.157–188) + Bản Đồ Tổng Ôn &amp; 18 Mẫu Viết Lại Câu HK1
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Đã cập nhật chuẩn xác từng câu đáp án Unit 2–6 (Tr.160–179 sách / Tr.168–188 PDF), 6 nguyên văn bài văn mẫu song ngữ SGK, 36 bẫy lỗi sai hay gặp và phòng Tổng ôn cuối Học kỳ 1 với 18 công thức viết lại câu có giọng đọc chuẩn.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onOpenUnit1Workbook('unit1_test')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-slate-300 px-3 py-2 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <span>Unit 1</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenUnit2Workbook('unit2_test')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-emerald-300 px-3 py-2 text-xs font-bold text-emerald-900 hover:bg-emerald-50 transition-colors"
            >
              <span>Unit 2</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenUnit3Workbook('unit3_test')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-violet-300 px-3 py-2 text-xs font-bold text-violet-900 hover:bg-violet-50 transition-colors"
            >
              <span>Unit 3</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenUnit4Workbook('unit4_test')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-amber-300 px-3 py-2 text-xs font-bold text-amber-900 hover:bg-amber-50 transition-colors"
            >
              <span>Unit 4</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenUnit5Workbook('unit5_test')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-teal-300 px-3 py-2 text-xs font-bold text-teal-900 hover:bg-teal-50 transition-colors"
            >
              <span>Unit 5</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenUnit6Workbook('unit6_test')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-rose-300 px-3 py-2 text-xs font-bold text-rose-900 hover:bg-rose-50 transition-colors"
            >
              <span>Unit 6</span>
            </button>
            <button
              type="button"
              onClick={onOpenAnswerKey}
              className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-sky-700 transition-colors"
            >
              <span>Mở Đáp Án &amp; Tổng Ôn HK1</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Semester Filter + Heading */}
      <section className="mt-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Lộ trình 12 Unit chuẩn Global Success
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Chọn một Unit để bắt đầu học tương tác theo từng bước ngắn gọn, dễ nhớ.
            </p>
          </div>

          <div className="inline-flex self-start rounded-xl border border-slate-200 bg-white p-1">
            {[
              { id: 'all' as const, label: 'Tất cả (12)' },
              { id: 1 as const, label: 'Học kỳ 1 (Unit 1–6)' },
              { id: 2 as const, label: 'Học kỳ 2 (Unit 7–12)' },
            ].map((tab) => (
              <button
                key={String(tab.id)}
                type="button"
                onClick={() => setSemesterFilter(tab.id)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                  semesterFilter === tab.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Unit Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUnits.map((unit) => {
            const doneSections = progress.completedSections[unit.id] ?? [];
            const bestScore = progress.unitBestScores[unit.id];
            const isComplete = doneSections.length === 4;

            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => onSelectUnit(unit.id)}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-xl font-display text-sm font-extrabold text-white"
                        style={{ backgroundColor: unit.accentHex }}
                      >
                        {unit.id}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Học kỳ {unit.semester} · {unit.code}
                      </span>
                    </div>

                    {isComplete ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="h-4 w-4" />
                        Hoàn thành
                      </span>
                    ) : bestScore ? (
                      <span className="font-ipa text-xs font-semibold text-sky-700 tabular-nums">
                        {bestScore.correct}/{bestScore.total} điểm
                      </span>
                    ) : null}
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {unit.titleEn}
                  </h3>
                  <p className="text-sm font-medium text-slate-700 mt-0.5">{unit.titleVi}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2.5 line-clamp-2">
                    {unit.themeSummaryVi}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        {unit.grammarTopics.length} ngữ pháp
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Layers className="h-3.5 w-3.5" />
                        {unit.vocabulary.length} từ
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Headphones className="h-3.5 w-3.5" />
                        {unit.exercises.length} câu
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-sky-600" />
                  </div>

                  {/* 4-segment section progress indicator */}
                  <div className="grid grid-cols-4 gap-1.5" aria-label={`Hoàn thành ${doneSections.length}/4 phần`}>
                    {(['grammar', 'pronunciation', 'vocabulary', 'practice'] as const).map((sec) => {
                      const done = doneSections.includes(sec);
                      return (
                        <span
                          key={sec}
                          className={`h-1.5 rounded-full transition-colors ${
                            done ? 'bg-emerald-500' : 'bg-slate-200'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Compact Study Method Guide */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-4 w-4 text-sky-600" />
          <h2 className="font-display text-base font-bold text-slate-900">
            Phương pháp học 4 bước hiệu quả trong mỗi Unit
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <p className="font-display font-bold text-slate-900">1. Ngữ pháp trực quan</p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Tương tác với mô phỏng để hiểu bản chất cấu trúc câu, không phải học vẹt công thức khô khan.
            </p>
          </div>
          <div>
            <p className="font-display font-bold text-slate-900">2. Phát âm chuẩn IPA</p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Nghe đối chiếu cặp âm dễ nhầm ở tốc độ chuẩn và tốc độ chậm 0.7x, kèm bài test nhanh.
            </p>
          </div>
          <div>
            <p className="font-display font-bold text-slate-900">3. Lật thẻ Từ vựng</p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Học qua Flashcard có phiên âm, câu ví dụ song ngữ và đánh dấu từ đã thuộc để tập trung ôn từ khó.
            </p>
          </div>
          <div>
            <p className="font-display font-bold text-slate-900">4. Luyện tập 4 Dạng</p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Thực hành Điền từ, Sắp xếp câu, Nghe hiểu và Ghép cặp chuẩn IOE — có giải thích chi tiết từng câu.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
