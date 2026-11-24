import { useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Filter } from 'lucide-react';
import { ALL_EXERCISES, ALL_UNITS } from '../data/curriculum';
import type { StudentProgress } from '../hooks/useProgress';
import type { ExerciseType } from '../types/curriculum';
import { ExerciseEngine } from './ExerciseEngine';

interface PracticeArenaProps {
  progress: StudentProgress;
  onRecordAnswer: (exerciseId: string, isCorrect: boolean) => void;
}

type ScopeType = 'all' | 'sem1' | 'sem2' | 'mistakes' | number;

const FORMAT_OPTIONS: { id: 'all' | ExerciseType; label: string }[] = [
  { id: 'all', label: 'Đủ 4 dạng bài' },
  { id: 'FILL_BLANK', label: '1. Điền từ' },
  { id: 'REARRANGE', label: '2. Sắp xếp câu' },
  { id: 'LISTEN_CHOICE', label: '3. Nghe hiểu' },
  { id: 'MATCHING', label: '4. Ghép cặp' },
];

export function PracticeArena({ progress, onRecordAnswer }: PracticeArenaProps) {
  const [scope, setScope] = useState<ScopeType>('sem1');
  const [format, setFormat] = useState<'all' | ExerciseType>('all');
  const [questionLimit, setQuestionLimit] = useState<number>(8);

  const selectedExercises = useMemo(() => {
    let pool = ALL_EXERCISES;

    if (scope === 'mistakes') {
      pool = ALL_EXERCISES.filter((e) => progress.mistakeExerciseIds.includes(e.id));
    } else if (scope === 'sem1') {
      pool = ALL_EXERCISES.filter((e) => e.unitId <= 6);
    } else if (scope === 'sem2') {
      pool = ALL_EXERCISES.filter((e) => e.unitId >= 7);
    } else if (typeof scope === 'number') {
      pool = ALL_EXERCISES.filter((e) => e.unitId === scope);
    }

    if (format !== 'all') {
      pool = pool.filter((e) => e.type === format);
    }

    if (scope === 'mistakes') {
      return pool;
    }

    // Evenly pick across types when format === 'all'
    if (format === 'all' && pool.length > questionLimit) {
      const buckets: Record<ExerciseType, typeof pool> = {
        FILL_BLANK: [],
        REARRANGE: [],
        LISTEN_CHOICE: [],
        MATCHING: [],
      };
      for (const item of pool) {
        buckets[item.type].push(item);
      }
      const balanced: typeof pool = [];
      const order: ExerciseType[] = ['FILL_BLANK', 'REARRANGE', 'LISTEN_CHOICE', 'MATCHING'];
      let round = 0;
      while (balanced.length < questionLimit) {
        let added = false;
        for (const t of order) {
          if (buckets[t][round] && balanced.length < questionLimit) {
            balanced.push(buckets[t][round]);
            added = true;
          }
        }
        if (!added) break;
        round++;
      }
      return balanced;
    }

    return pool.slice(0, questionLimit);
  }, [scope, format, questionLimit, progress.mistakeExerciseIds]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
          Phòng luyện thi chuẩn IOE &amp; Global Success 6
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          Luyện tập tổng hợp 4 Dạng bài
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Chọn phạm vi kiến thức và dạng bài muốn ôn luyện — hệ thống tự động phân bổ đều 4 dạng bài và giải thích chi tiết từng câu.
        </p>
      </div>

      {/* Config Panel */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 mb-6 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          <Filter className="h-3.5 w-3.5" />
          <span>Cấu hình bộ đề luyện tập</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-12">
          {/* Scope Selector */}
          <div className="sm:col-span-5">
            <label
              htmlFor="arena-scope"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Phạm vi kiến thức
            </label>
            <select
              id="arena-scope"
              value={String(scope)}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'all' || val === 'sem1' || val === 'sem2' || val === 'mistakes') {
                  setScope(val);
                } else {
                  setScope(Number(val));
                }
              }}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-sky-500 focus:bg-white focus:outline-none"
            >
              <option value="sem1">Học kỳ 1 (Unit 1 – Unit 6)</option>
              <option value="sem2">Học kỳ 2 (Unit 7 – Unit 12)</option>
              <option value="all">Tổng hợp cả năm (12 Unit)</option>
              <option value="mistakes">
                Ôn lại các câu từng làm sai ({progress.mistakeExerciseIds.length} câu)
              </option>
              <optgroup label="Luyện riêng từng Unit">
                {ALL_UNITS.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.code}: {u.titleEn}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Format Selector */}
          <div className="sm:col-span-5">
            <label
              htmlFor="arena-format"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Dạng bài tập
            </label>
            <select
              id="arena-format"
              value={format}
              onChange={(e) => setFormat(e.target.value as 'all' | ExerciseType)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-sky-500 focus:bg-white focus:outline-none"
            >
              {FORMAT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Count Selector */}
          <div className="sm:col-span-2">
            <label
              htmlFor="arena-count"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Số câu
            </label>
            <select
              id="arena-count"
              value={questionLimit}
              disabled={scope === 'mistakes'}
              onChange={(e) => setQuestionLimit(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2.5 text-sm font-semibold text-slate-800 focus:border-sky-500 focus:bg-white focus:outline-none disabled:opacity-50"
            >
              <option value={4}>4 câu</option>
              <option value={8}>8 câu</option>
              <option value={12}>12 câu</option>
              <option value={16}>16 câu</option>
            </select>
          </div>
        </div>
      </div>

      {/* Empty Mistakes State or Active Quiz Engine */}
      {scope === 'mistakes' && selectedExercises.length === 0 ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center">
          <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
          <h2 className="font-display text-lg font-bold text-slate-900">
            Tuyệt vời! Em hiện không có câu nào làm sai cần ôn lại.
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Hãy chuyển sang luyện đề Học kỳ 1, Học kỳ 2 hoặc Tổng hợp 12 Unit nhé.
          </p>
        </div>
      ) : selectedExercises.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <AlertCircle className="h-8 w-8 text-slate-400 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-700">
            Không có câu hỏi khớp bộ lọc hiện tại.
          </p>
        </div>
      ) : (
        <ExerciseEngine
          exercises={selectedExercises}
          title={
            scope === 'mistakes'
              ? 'Ôn lại câu sai'
              : scope === 'sem1'
                ? 'Tổng hợp Học kỳ 1'
                : scope === 'sem2'
                  ? 'Tổng hợp Học kỳ 2'
                  : scope === 'all'
                    ? 'Tổng hợp 12 Unit'
                    : `Luyện tập Unit ${scope}`
          }
          onAnswerResult={onRecordAnswer}
        />
      )}
    </div>
  );
}
