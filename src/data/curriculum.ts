import { SEMESTER_1_UNITS } from './semester1';
import { SEMESTER_2_UNITS } from './semester2';
import type { ExerciseItem, UnitData, VocabItem } from '../types/curriculum';

export const ALL_UNITS: UnitData[] = [...SEMESTER_1_UNITS, ...SEMESTER_2_UNITS];

export const ALL_VOCABULARY: VocabItem[] = ALL_UNITS.flatMap((u) => u.vocabulary);

export const ALL_EXERCISES: ExerciseItem[] = ALL_UNITS.flatMap((u) => u.exercises);

export function getUnitById(id: number): UnitData {
  return ALL_UNITS.find((u) => u.id === id) ?? ALL_UNITS[0];
}
