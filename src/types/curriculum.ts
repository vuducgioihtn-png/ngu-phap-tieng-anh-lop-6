export type ExerciseType = 'FILL_BLANK' | 'REARRANGE' | 'LISTEN_CHOICE' | 'MATCHING';

export type VisualWidgetType =
  | 'present_simple_frequency'
  | 'prepositions_room'
  | 'present_continuous_desc'
  | 'comparative_scale'
  | 'countable_must'
  | 'tet_should_some_any'
  | 'wh_conjunctions'
  | 'past_simple_imperative'
  | 'possessive_transformer'
  | 'future_will_might'
  | 'articles_conditional'
  | 'superlative_robot';

export interface FormulaToken {
  label: string;
  role: 'subject' | 'verb' | 'auxiliary' | 'object' | 'connector' | 'modifier';
}

export interface GrammarFormula {
  formLabel: string;
  tokens: FormulaToken[];
  exampleEn: string;
  exampleVi: string;
}

export interface GrammarTopic {
  id: string;
  titleVi: string;
  titleEn: string;
  summaryVi: string;
  formulas: GrammarFormula[];
  keyRules: {
    heading: string;
    detail: string;
    example: string;
  }[];
  signalWords?: string[];
  rememberNote: string;
}

export interface PronunciationSound {
  symbol: string;
  labelVi: string;
  mouthGuideVi: string;
  spellingClues: string[];
  words: {
    word: string;
    ipa: string;
    meaningVi: string;
    highlight: string;
  }[];
}

export interface PronunciationLabData {
  titleVi: string;
  subtitleVi: string;
  mode: 'pair' | 'rule';
  sounds: PronunciationSound[];
  minimalPairs: {
    left: string;
    leftIpa: string;
    right: string;
    rightIpa: string;
    noteVi: string;
  }[];
  quickDrill: {
    promptVi: string;
    targetWord: string;
    options: string[];
    correctIndex: number;
    explanationVi: string;
  }[];
}

export interface VocabItem {
  id: string;
  unitId: number;
  word: string;
  ipa: string;
  pos: string;
  meaningVi: string;
  exampleEn: string;
  exampleVi: string;
  topicGroup: string;
}

export interface MatchingPair {
  left: string;
  right: string;
}

export interface ExerciseItem {
  id: string;
  grade: 6;
  unit: string;
  unitId: number;
  type: ExerciseType;
  question_text: string;
  audio_script: string | null;
  options: string[] | null;
  segments: string[] | null;
  pairs: MatchingPair[] | null;
  correct_answer: string;
  explanation: string;
  hint?: string;
}

export interface UnitData {
  id: number;
  semester: 1 | 2;
  code: string;
  titleEn: string;
  titleVi: string;
  themeSummaryVi: string;
  accentHex: string;
  visualWidget: VisualWidgetType;
  grammarTopics: GrammarTopic[];
  pronunciation: PronunciationLabData;
  vocabulary: VocabItem[];
  exercises: ExerciseItem[];
}
