import { useMemo, useState } from 'react';
import { CheckCircle2, Search, Turtle, Volume2 } from 'lucide-react';
import { ALL_UNITS, ALL_VOCABULARY } from '../data/curriculum';
import type { StudentProgress } from '../hooks/useProgress';
import { speakEnglish } from '../utils/speech';

interface VocabHubProps {
  progress: StudentProgress;
  onToggleVocabMastered: (vocabId: string) => void;
  onOpenUnit: (unitId: number) => void;
}

export function VocabHub({
  progress,
  onToggleVocabMastered,
  onOpenUnit,
}: VocabHubProps) {
  const [query, setQuery] = useState('');
  const [unitFilter, setUnitFilter] = useState<'all' | number>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unmastered' | 'mastered'>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_VOCABULARY.filter((item) => {
      if (unitFilter !== 'all' && item.unitId !== unitFilter) return false;
      const mastered = progress.masteredVocabIds.includes(item.id);
      if (statusFilter === 'mastered' && !mastered) return false;
      if (statusFilter === 'unmastered' && mastered) return false;
      if (!q) return true;
      return (
        item.word.toLowerCase().includes(q) ||
        item.meaningVi.toLowerCase().includes(q) ||
        item.topicGroup.toLowerCase().includes(q)
      );
    });
  }, [query, unitFilter, statusFilter, progress.masteredVocabIds]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Kho từ vựng chuẩn Global Success 6
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Tra cứu &amp; Luyện nghe {ALL_VOCABULARY.length} từ vựng trọng tâm
          </h1>
        </div>
        <div className="text-sm font-semibold text-emerald-700 tabular-nums">
          Đã thuộc: {progress.masteredVocabIds.length} / {ALL_VOCABULARY.length} từ
        </div>
      </div>

      {/* Filters Bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 mb-6 grid gap-3 sm:grid-cols-12">
        <div className="sm:col-span-5 relative">
          <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm từ Tiếng Anh, nghĩa Tiếng Việt..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="vocab-unit-filter" className="sr-only">
            Lọc theo Unit
          </label>
          <select
            id="vocab-unit-filter"
            value={unitFilter}
            onChange={(e) =>
              setUnitFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))
            }
            className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:border-sky-500 focus:outline-none"
          >
            <option value="all">Tất cả 12 Unit</option>
            {ALL_UNITS.map((u) => (
              <option key={u.id} value={u.id}>
                {u.code}: {u.titleEn}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-3 flex rounded-xl border border-slate-200 bg-slate-50 p-1">
          {[
            { id: 'all' as const, label: 'Tất cả' },
            { id: 'unmastered' as const, label: 'Cần ôn' },
            { id: 'mastered' as const, label: 'Đã thuộc' },
          ].map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStatusFilter(s.id)}
              className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-colors ${
                statusFilter === s.id
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <p className="text-sm font-semibold text-slate-700">
            Không tìm thấy từ vựng nào phù hợp với bộ lọc hiện tại.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const mastered = progress.masteredVocabIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-sky-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <button
                      type="button"
                      onClick={() => onOpenUnit(item.unitId)}
                      className="text-xs font-semibold text-sky-700 hover:underline"
                    >
                      Unit {item.unitId} · {item.topicGroup}
                    </button>
                    <span className="font-ipa text-xs text-slate-400">({item.pos})</span>
                  </div>

                  <h2 className="font-display text-lg font-bold text-slate-900">
                    {item.word}
                  </h2>
                  <p className="font-ipa text-xs text-sky-700 mt-0.5">{item.ipa}</p>
                  <p className="text-sm font-semibold text-slate-800 mt-2">
                    {item.meaningVi}
                  </p>
                  <div className="mt-3 rounded-xl bg-slate-50 border border-slate-100 p-3 text-xs">
                    <p className="font-medium text-slate-800">{item.exampleEn}</p>
                    <p className="text-slate-500 mt-0.5">{item.exampleVi}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.word, { slow: false })}
                      className="inline-flex items-center gap-1 rounded-lg bg-sky-50 px-2.5 py-1.5 text-xs font-semibold text-sky-700 hover:bg-sky-100"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      Nghe
                    </button>
                    <button
                      type="button"
                      onClick={() => speakEnglish(item.word, { slow: true })}
                      className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200"
                      title="Nghe chậm"
                    >
                      <Turtle className="h-3.5 w-3.5" />
                      Chậm
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleVocabMastered(item.id)}
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold border transition-colors ${
                      mastered
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {mastered ? 'Đã thuộc' : 'Ghi nhớ'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
