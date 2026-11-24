let currentUtterance: SpeechSynthesisUtterance | null = null;

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function pickEnglishVoice(): SpeechSynthesisVoice | null {
  if (!isSpeechSupported()) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const preferred =
    voices.find((v) => v.lang === 'en-GB' && /Google|Natural|Daniel|Serena/i.test(v.name)) ||
    voices.find((v) => v.lang === 'en-US' && /Google|Natural|Samantha|Aria/i.test(v.name)) ||
    voices.find((v) => v.lang.startsWith('en-GB')) ||
    voices.find((v) => v.lang.startsWith('en-US')) ||
    voices.find((v) => v.lang.startsWith('en'));

  return preferred || null;
}

export function stopSpeaking(): void {
  if (!isSpeechSupported()) return;
  window.speechSynthesis.cancel();
  currentUtterance = null;
}

export function speakEnglish(
  text: string,
  options?: {
    slow?: boolean;
    onStart?: () => void;
    onEnd?: () => void;
  }
): void {
  if (!isSpeechSupported() || !text.trim()) {
    options?.onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-GB';
  utterance.rate = options?.slow ? 0.68 : 0.94;
  utterance.pitch = 1.0;

  const voice = pickEnglishVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  }

  utterance.onstart = () => {
    options?.onStart?.();
  };
  utterance.onend = () => {
    if (currentUtterance === utterance) {
      currentUtterance = null;
    }
    options?.onEnd?.();
  };
  utterance.onerror = () => {
    if (currentUtterance === utterance) {
      currentUtterance = null;
    }
    options?.onEnd?.();
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}
