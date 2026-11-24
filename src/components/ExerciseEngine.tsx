import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  Turtle,
  Volume2,
  XCircle,
} from 'lucide-react';
import type { ExerciseItem, ExerciseType } from '../types/curriculum';
import { speakEnglish, stopSpeaking } from '../utils/speech';

interface ExerciseEngineProps {
  exercises: ExerciseItem[];
  title?: string;
  onAnswerResult?: (exerciseId: string, isCorrect: boolean) => void;
  onCompleteSession?: (correct: number, total: number) => void;
}

const TYPE_META: Record<ExerciseType, { label: string; shortGuide: string }> = {
  FILL_BLANK: {
    label: 'Điền từ còn thiếu',
    shortGuide: 'Gõ đáp án ngắn gọn vào ô trống rồi bấm Kiểm tra',
  },
  REARRANGE: {
    label: 'Sắp xếp thành câu',
    shortGuide: 'Chạm lần lượt các mảnh từ bên dưới để ghép thành câu đúng',
  },
  LISTEN_CHOICE: {
    label: 'Nghe hiểu chọn đáp án',
    shortGuide: 'Bấm nghe đoạn Tiếng Anh rồi chọn 1 trong 4 đáp án A, B, C, D',
  },
  MATCHING: {
    label: 'Ghép cặp tương ứng',
    shortGuide: 'Chọn 1 thẻ bên trái rồi chọn thẻ khớp nghĩa bên phải',
  },
};

function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,?!])/g, '$1');
}

function deterministicShuffle<T>(items: T[], seedStr: string): T[] {
  const arr = [...items];
  let seed = 0;
  for (let i = 0; i < seedStr.length; i++) {
    seed = (seed * 31 + seedStr.charCodeAt(i)) % 100000;
  }
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 16807) % 2147483647;
    const j = seed % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function ExerciseEngine({
  exercises,
  title,
  onAnswerResult,
  onCompleteSession,
}: ExerciseEngineProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  // Per-question answer states
  const [blankInput, setBlankInput] = useState('');
  const [selectedSegments, setSelectedSegments] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Matching states
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedMap, setMatchedMap] = useState<Record<string, string>>({});
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);

  // Session summary states
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const exerciseKey = exercises.map((e) => e.id).join(',');

  useEffect(() => {
    stopSpeaking();
    setCurrentIdx(0);
    setChecked(false);
    setIsCorrect(false);
    setShowHint(false);
    setBlankInput('');
    setSelectedSegments([]);
    setSelectedOption(null);
    setSelectedLeft(null);
    setMatchedMap({});
    setWrongFlash(null);
    setResults({});
    setFinished(false);
  }, [exerciseKey]);

  const current = exercises[currentIdx];

  const shuffledRightPairs = useMemo(() => {
    if (!current || current.type !== 'MATCHING' || !current.pairs) return [];
    return deterministicShuffle(
      current.pairs.map((p) => p.right),
      current.id + '_right'
    );
  }, [current]);

  if (!exercises.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-sm font-semibold text-slate-700">Chưa có bài tập nào trong mục này.</p>
      </div>
    );
  }

  const resetQuestionInputs = () => {
    stopSpeaking();
    setSpeaking(false);
    setChecked(false);
    setIsCorrect(false);
    setShowHint(false);
    setBlankInput('');
    setSelectedSegments([]);
    setSelectedOption(null);
    setSelectedLeft(null);
    setMatchedMap({});
    setWrongFlash(null);
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setResults({});
    setFinished(false);
    resetQuestionInputs();
  };

  const finalizeAnswer = (correct: boolean) => {
    setChecked(true);
    setIsCorrect(correct);
    setResults((prev) => ({ ...prev, [current.id]: correct }));
    onAnswerResult?.(current.id, correct);
  };

  const handleCheck = () => {
    if (checked) return;

    if (current.type === 'FILL_BLANK') {
      const ok = normalizeText(blankInput) === normalizeText(current.correct_answer);
      finalizeAnswer(ok);
      return;
    }

    if (current.type === 'REARRANGE' && current.segments) {
      const built = selectedSegments.map((i) => current.segments![i]).join(' ');
      const ok = normalizeText(built) === normalizeText(current.correct_answer);
      finalizeAnswer(ok);
      return;
    }

    if (current.type === 'LISTEN_CHOICE') {
      const ok = selectedOption !== null && normalizeText(selectedOption) === normalizeText(current.correct_answer);
      finalizeAnswer(ok);
      return;
    }
  };

  const handleMatchRight = (rightText: string) => {
    if (!selectedLeft || checked || !current.pairs) return;
    const expected = current.pairs.find((p) => p.left === selectedLeft)?.right;
    if (expected === rightText) {
      const nextMap = { ...matchedMap, [selectedLeft]: rightText };
      setMatchedMap(nextMap);
      setSelectedLeft(null);
      setWrongFlash(null);

      if (Object.keys(nextMap).length === current.pairs.length) {
        finalizeAnswer(true);
      }
    } else {
      setWrongFlash(rightText);
      window.setTimeout(() => setWrongFlash(null), 550);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < exercises.length) {
      setCurrentIdx((prev) => prev + 1);
      resetQuestionInputs();
    } else {
      const correctCount = Object.values(results).filter(Boolean).length;
      setFinished(true);
      onCompleteSession?.(correctCount, exercises.length);
    }
  };

  const playAudio = (slow = false) => {
    if (!current.audio_script) return;
    speakEnglish(current.audio_script, {
      slow,
      onStart: () => setSpeaking(true),
      onEnd: () => setSpeaking(false),
    });
  };

  const canCheck =
    (current.type === 'FILL_BLANK' && blankInput.trim().length > 0) ||
    (current.type === 'REARRANGE' && current.segments && selectedSegments.length === current.segments.length) ||
    (current.type === 'LISTEN_CHOICE' && selectedOption !== null);

  if (finished) {
    const correctCount = Object.values(results).filter(Boolean).length;
    const pct = Math.round((correctCount / exercises.length) * 100);
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 mb-4">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-slate-900">
            Hoàn thành bài luyện tập!
          </h3>
          <p className="mt-1.5 text-sm text-slate-600">
            {pct >= 80
              ? 'Xuất sắc! Em đã nắm rất chắc kiến thức phần này.'
              : pct >= 50
                ? 'Làm tốt lắm! Em hãy xem lại các câu sai để đạt điểm tối đa nhé.'
                : 'Cố gắng thêm chút nữa nhé! Xem lại phần Ngữ pháp rồi thử lại nào.'}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div>
              <p className="text-xs font-medium text-slate-500">Số câu đúng</p>
              <p className="font-display text-2xl font-extrabold text-emerald-700 tabular-nums mt-0.5">
                {correctCount}/{exercises.length}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Độ chính xác</p>
              <p className="font-display text-2xl font-extrabold text-sky-700 tabular-nums mt-0.5">
                {pct}%
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Cần ôn lại</p>
              <p className="font-display text-2xl font-extrabold text-rose-600 tabular-nums mt-0.5">
                {exercises.length - correctCount}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRestart}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Làm lại bộ câu hỏi này
          </button>
        </div>
      </div>
    );
  }

  const meta = TYPE_META[current.type];
  const progressPct = Math.round(((currentIdx + (checked ? 1 : 0)) / exercises.length) * 100);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      {/* Top Progress Header */}
      <div className="border-b border-slate-200 bg-slate-50/70 px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2.5">
            {title && (
              <span className="font-display text-sm font-bold text-slate-900">{title}</span>
            )}
            <span className="text-xs font-semibold text-sky-700">
              {meta.label}
            </span>
          </div>
          <span className="font-ipa text-xs font-semibold text-slate-600 tabular-nums">
            Câu {currentIdx + 1} / {exercises.length}
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-sky-600 transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Question Body */}
      <div className="p-5 sm:p-7">
        <p className="text-xs font-medium text-slate-500 mb-1.5">
          {current.unit} · {meta.shortGuide}
        </p>
        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug">
          {current.question_text}
        </h3>

        {/* 1. FILL_BLANK */}
        {current.type === 'FILL_BLANK' && (
          <div className="mt-5 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={blankInput}
                disabled={checked}
                onChange={(e) => setBlankInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && canCheck && !checked) {
                    handleCheck();
                  }
                }}
                placeholder="Nhập từ/cụm từ còn thiếu..."
                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-semibold text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 disabled:bg-slate-50"
              />
              {current.hint && !checked && (
                <button
                  type="button"
                  onClick={() => setShowHint((prev) => !prev)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  <HelpCircle className="h-4 w-4 text-amber-600" />
                  Gợi ý
                </button>
              )}
            </div>
            {showHint && current.hint && !checked && (
              <p className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-2.5 text-xs font-medium text-amber-900">
                Gợi ý: {current.hint}
              </p>
            )}
          </div>
        )}

        {/* 2. REARRANGE */}
        {current.type === 'REARRANGE' && current.segments && (
          <div className="mt-5 space-y-4">
            {/* Answer Tray */}
            <div className="min-h-16 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/70 p-3 flex flex-wrap items-center gap-2">
              {selectedSegments.length === 0 ? (
                <span className="text-sm text-slate-400 px-1">
                  Bấm vào các mảnh từ bên dưới để ghép thành câu hoàn chỉnh...
                </span>
              ) : (
                selectedSegments.map((segIdx, orderIdx) => (
                  <button
                    key={`${segIdx}-${orderIdx}`}
                    type="button"
                    disabled={checked}
                    onClick={() =>
                      setSelectedSegments((prev) => prev.filter((_, i) => i !== orderIdx))
                    }
                    className="rounded-lg border border-sky-300 bg-sky-50 px-3.5 py-2 text-sm font-semibold text-sky-900 shadow-2xs transition-colors hover:bg-sky-100 disabled:cursor-default"
                  >
                    {current.segments![segIdx]}
                  </button>
                ))
              )}
            </div>

            {/* Available Word Bank */}
            <div className="flex flex-wrap items-center gap-2">
              {current.segments.map((seg, segIdx) => {
                const used = selectedSegments.includes(segIdx);
                return (
                  <button
                    key={`${seg}-${segIdx}`}
                    type="button"
                    disabled={used || checked}
                    onClick={() => setSelectedSegments((prev) => [...prev, segIdx])}
                    className={`rounded-lg border px-3.5 py-2 text-sm font-semibold transition-all ${
                      used
                        ? 'border-slate-200 bg-slate-100 text-slate-300 cursor-default'
                        : 'border-slate-300 bg-white text-slate-800 hover:border-sky-400 hover:bg-sky-50'
                    }`}
                  >
                    {seg}
                  </button>
                );
              })}

              {selectedSegments.length > 0 && !checked && (
                <button
                  type="button"
                  onClick={() => setSelectedSegments([])}
                  className="ml-auto inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Xếp lại
                </button>
              )}
            </div>
          </div>
        )}

        {/* 3. LISTEN_CHOICE */}
        {current.type === 'LISTEN_CHOICE' && current.options && (
          <div className="mt-5 space-y-5">
            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-sky-200 bg-sky-50/70 p-4">
              <button
                type="button"
                onClick={() => playAudio(false)}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-700 transition-colors"
              >
                <Volume2 className={`h-4 w-4 ${speaking ? 'scale-110' : ''}`} />
                {speaking ? 'Đang phát...' : 'Nghe giọng chuẩn'}
              </button>
              <button
                type="button"
                onClick={() => playAudio(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-sky-300 bg-white px-4 py-2.5 text-sm font-semibold text-sky-800 hover:bg-sky-100 transition-colors"
              >
                <Turtle className="h-4 w-4" />
                Nghe chậm (0.7x)
              </button>
              <span className="text-xs text-slate-600">
                Có thể nghe lại nhiều lần trước khi chọn đáp án.
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {current.options.map((opt, idx) => {
                const letter = String.fromCharCode(65 + idx);
                const isSelected = selectedOption === opt;
                const isAnswer = normalizeText(opt) === normalizeText(current.correct_answer);

                let style = 'border-slate-200 bg-white text-slate-800 hover:border-sky-300 hover:bg-slate-50';
                if (checked) {
                  if (isAnswer) {
                    style = 'border-emerald-500 bg-emerald-50 text-emerald-950';
                  } else if (isSelected && !isAnswer) {
                    style = 'border-rose-400 bg-rose-50 text-rose-950';
                  } else {
                    style = 'border-slate-200 bg-white text-slate-400';
                  }
                } else if (isSelected) {
                  style = 'border-sky-600 bg-sky-50 text-sky-950 ring-1 ring-sky-600';
                }

                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={checked}
                    onClick={() => setSelectedOption(opt)}
                    className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all ${style}`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 font-display text-xs font-bold text-slate-700">
                      {letter}
                    </span>
                    <span className="text-sm font-semibold">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. MATCHING */}
        {current.type === 'MATCHING' && current.pairs && (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Cột A (Chọn trước)
              </p>
              {current.pairs.map((pair) => {
                const isMatched = Boolean(matchedMap[pair.left]);
                const isPicked = selectedLeft === pair.left;
                return (
                  <button
                    key={pair.left}
                    type="button"
                    disabled={isMatched || checked}
                    onClick={() => setSelectedLeft(pair.left)}
                    className={`w-full flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                      isMatched
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                        : isPicked
                          ? 'border-sky-600 bg-sky-50 text-sky-950 ring-2 ring-sky-500/20'
                          : 'border-slate-200 bg-white text-slate-800 hover:border-sky-300 hover:bg-slate-50'
                    }`}
                  >
                    <span>{pair.left}</span>
                    {isMatched && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Cột B (Chọn cặp khớp)
              </p>
              {shuffledRightPairs.map((rightText) => {
                const isMatched = Object.values(matchedMap).includes(rightText);
                const isWrong = wrongFlash === rightText;
                return (
                  <button
                    key={rightText}
                    type="button"
                    disabled={isMatched || !selectedLeft || checked}
                    onClick={() => handleMatchRight(rightText)}
                    className={`w-full flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                      isMatched
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                        : isWrong
                          ? 'border-rose-500 bg-rose-50 text-rose-800'
                          : selectedLeft
                            ? 'border-slate-300 bg-white text-slate-800 hover:border-sky-500 hover:bg-sky-50'
                            : 'border-slate-200 bg-slate-50/70 text-slate-500'
                    }`}
                  >
                    <span>{rightText}</span>
                    {isMatched && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />}
                    {isWrong && <XCircle className="h-4 w-4 shrink-0 text-rose-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Feedback & Explanation Panel */}
        {checked && (
          <div
            className={`mt-6 rounded-xl border p-4 sm:p-5 ${
              isCorrect
                ? 'border-emerald-200 bg-emerald-50/80'
                : 'border-rose-200 bg-rose-50/80'
            }`}
          >
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 shrink-0 text-rose-700 mt-0.5" />
              )}
              <div className="space-y-1.5 text-sm">
                <p className={`font-display font-bold ${isCorrect ? 'text-emerald-900' : 'text-rose-900'}`}>
                  {isCorrect ? 'Chính xác! Rất tốt.' : 'Chưa đúng rồi — cùng xem lời giải nhé!'}
                </p>
                {!isCorrect && current.type !== 'MATCHING' && (
                  <p className="font-semibold text-slate-900">
                    Đáp án đúng: <span className="text-emerald-800">{current.correct_answer}</span>
                  </p>
                )}
                {current.type === 'LISTEN_CHOICE' && current.audio_script && (
                  <p className="rounded-lg bg-white/80 border border-slate-200 px-3 py-2 text-xs text-slate-700">
                    <strong>Nội dung nghe:</strong> &ldquo;{current.audio_script}&rdquo;
                  </p>
                )}
                <p className="text-slate-700 leading-relaxed">
                  <strong>Giải thích:</strong> {current.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Bar */}
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
          {!checked ? (
            current.type === 'MATCHING' ? (
              <p className="text-xs font-medium text-slate-500">
                Đã ghép đúng {Object.keys(matchedMap).length} / {current.pairs?.length ?? 4} cặp
              </p>
            ) : (
              <button
                type="button"
                disabled={!canCheck}
                onClick={handleCheck}
                className="ml-auto inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-sky-700 disabled:bg-slate-200 disabled:text-slate-400"
              >
                Kiểm tra đáp án
              </button>
            )
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-slate-800"
            >
              <span>{currentIdx + 1 < exercises.length ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
