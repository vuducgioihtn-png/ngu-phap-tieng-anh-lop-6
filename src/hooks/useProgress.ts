import { useCallback, useEffect, useState } from 'react';

export type UnitSectionKey = 'grammar' | 'pronunciation' | 'vocabulary' | 'practice';

export interface StudentProgress {
  lastUnitId: number;
  completedSections: Record<number, UnitSectionKey[]>;
  masteredVocabIds: string[];
  unitBestScores: Record<number, { correct: number; total: number }>;
  mistakeExerciseIds: string[];
  totalAnswered: number;
  totalCorrect: number;
}

const STORAGE_KEY = 'global6_student_progress_v1';

const DEFAULT_PROGRESS: StudentProgress = {
  lastUnitId: 1,
  completedSections: {},
  masteredVocabIds: [],
  unitBestScores: {},
  mistakeExerciseIds: [],
  totalAnswered: 0,
  totalCorrect: 0,
};

function loadProgress(): StudentProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<StudentProgress>;
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      completedSections: parsed.completedSections ?? {},
      masteredVocabIds: Array.isArray(parsed.masteredVocabIds) ? parsed.masteredVocabIds : [],
      unitBestScores: parsed.unitBestScores ?? {},
      mistakeExerciseIds: Array.isArray(parsed.mistakeExerciseIds) ? parsed.mistakeExerciseIds : [],
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<StudentProgress>(() => loadProgress());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota errors
    }
  }, [progress]);

  const setLastUnit = useCallback((unitId: number) => {
    setProgress((prev) => (prev.lastUnitId === unitId ? prev : { ...prev, lastUnitId: unitId }));
  }, []);

  const markSectionDone = useCallback((unitId: number, section: UnitSectionKey) => {
    setProgress((prev) => {
      const existing = prev.completedSections[unitId] ?? [];
      if (existing.includes(section)) return prev;
      return {
        ...prev,
        completedSections: {
          ...prev.completedSections,
          [unitId]: [...existing, section],
        },
      };
    });
  }, []);

  const toggleVocabMastered = useCallback((vocabId: string) => {
    setProgress((prev) => {
      const exists = prev.masteredVocabIds.includes(vocabId);
      return {
        ...prev,
        masteredVocabIds: exists
          ? prev.masteredVocabIds.filter((id) => id !== vocabId)
          : [...prev.masteredVocabIds, vocabId],
      };
    });
  }, []);

  const recordExerciseAnswer = useCallback((exerciseId: string, isCorrect: boolean) => {
    setProgress((prev) => {
      const mistakes = isCorrect
        ? prev.mistakeExerciseIds.filter((id) => id !== exerciseId)
        : prev.mistakeExerciseIds.includes(exerciseId)
          ? prev.mistakeExerciseIds
          : [...prev.mistakeExerciseIds, exerciseId];
      return {
        ...prev,
        totalAnswered: prev.totalAnswered + 1,
        totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
        mistakeExerciseIds: mistakes,
      };
    });
  }, []);

  const recordUnitScore = useCallback((unitId: number, correct: number, total: number) => {
    setProgress((prev) => {
      const existing = prev.unitBestScores[unitId];
      const existingRatio = existing && existing.total > 0 ? existing.correct / existing.total : -1;
      const nextRatio = total > 0 ? correct / total : 0;
      const shouldReplace = nextRatio >= existingRatio;

      const sections = prev.completedSections[unitId] ?? [];
      const nextSections: UnitSectionKey[] = sections.includes('practice')
        ? sections
        : [...sections, 'practice'];

      return {
        ...prev,
        completedSections: {
          ...prev.completedSections,
          [unitId]: nextSections,
        },
        unitBestScores: shouldReplace
          ? { ...prev.unitBestScores, [unitId]: { correct, total } }
          : prev.unitBestScores,
      };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS);
  }, []);

  return {
    progress,
    setLastUnit,
    markSectionDone,
    toggleVocabMastered,
    recordExerciseAnswer,
    recordUnitScore,
    resetProgress,
  };
}
