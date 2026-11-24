import { useState } from 'react';
import { AnswerKeyHub } from './components/AnswerKeyHub';
import { Navbar, type AppView } from './components/Navbar';
import { PracticeArena } from './components/PracticeArena';
import { UnitRoadmap } from './components/UnitRoadmap';
import type { Unit1StationId } from './components/Unit1Workbook';
import type { Unit2StationId } from './components/Unit2Workbook';
import type { Unit3StationId } from './components/Unit3Workbook';
import type { Unit4StationId } from './components/Unit4Workbook';
import type { Unit5StationId } from './components/Unit5Workbook';
import type { Unit6StationId } from './components/Unit6Workbook';
import type { Unit7StationId } from './components/Unit7Workbook';
import type { Unit8StationId } from './components/Unit8Workbook';
import { UnitWorkspace, type UnitWorkspaceTab } from './components/UnitWorkspace';
import { VocabHub } from './components/VocabHub';
import { getUnitById } from './data/curriculum';
import { useProgress } from './hooks/useProgress';
import { stopSpeaking } from './utils/speech';

export default function App() {
  const {
    progress,
    setLastUnit,
    markSectionDone,
    toggleVocabMastered,
    recordExerciseAnswer,
    recordUnitScore,
  } = useProgress();

  const [activeView, setActiveView] = useState<AppView>('roadmap');
  const [selectedUnitId, setSelectedUnitId] = useState<number>(progress.lastUnitId || 1);
  const [unitInitialTab, setUnitInitialTab] = useState<UnitWorkspaceTab>('grammar');
  const [unit1InitialStation, setUnit1InitialStation] = useState<Unit1StationId>('phonetics');
  const [unit2InitialStation, setUnit2InitialStation] = useState<Unit2StationId>('sound_sort');
  const [unit3InitialStation, setUnit3InitialStation] =
    useState<Unit3StationId>('phonetics_vocab');
  const [unit4InitialStation, setUnit4InitialStation] = useState<Unit4StationId>('phonetics');
  const [unit5InitialStation, setUnit5InitialStation] =
    useState<Unit5StationId>('phonetics_nature');
  const [unit6InitialStation, setUnit6InitialStation] =
    useState<Unit6StationId>('phonetics_tet');
  const [unit7InitialStation, setUnit7InitialStation] =
    useState<Unit7StationId>('phonetics_tv');
  const [unit8InitialStation, setUnit8InitialStation] =
    useState<Unit8StationId>('phonetics_sports');

  const handleNavigate = (view: AppView) => {
    stopSpeaking();
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenUnit = (
    unitId: number,
    tab: UnitWorkspaceTab = 'grammar',
    station1?: Unit1StationId,
    station2?: Unit2StationId,
    station3?: Unit3StationId,
    station4?: Unit4StationId,
    station5?: Unit5StationId,
    station6?: Unit6StationId,
    station7?: Unit7StationId,
    station8?: Unit8StationId
  ) => {
    stopSpeaking();
    setSelectedUnitId(unitId);
    setUnitInitialTab(tab);
    if (station1) {
      setUnit1InitialStation(station1);
    }
    if (station2) {
      setUnit2InitialStation(station2);
    }
    if (station3) {
      setUnit3InitialStation(station3);
    }
    if (station4) {
      setUnit4InitialStation(station4);
    }
    if (station5) {
      setUnit5InitialStation(station5);
    }
    if (station6) {
      setUnit6InitialStation(station6);
    }
    if (station7) {
      setUnit7InitialStation(station7);
    }
    if (station8) {
      setUnit8InitialStation(station8);
    }
    setLastUnit(unitId);
    setActiveView('unit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenUnitFromAnswerKey = (
    unitId: 1 | 2 | 3 | 4 | 5 | 6,
    openTest = false
  ) => {
    switch (unitId) {
      case 1:
        handleOpenUnit(1, 'workbook', openTest ? 'unit1_test' : 'phonetics');
        break;
      case 2:
        handleOpenUnit(2, 'workbook', undefined, openTest ? 'unit2_test' : 'sound_sort');
        break;
      case 3:
        handleOpenUnit(
          3,
          'workbook',
          undefined,
          undefined,
          openTest ? 'unit3_test' : 'phonetics_vocab'
        );
        break;
      case 4:
        handleOpenUnit(
          4,
          'workbook',
          undefined,
          undefined,
          undefined,
          openTest ? 'unit4_test' : 'phonetics'
        );
        break;
      case 5:
        handleOpenUnit(
          5,
          'workbook',
          undefined,
          undefined,
          undefined,
          undefined,
          openTest ? 'unit5_test' : 'phonetics_nature'
        );
        break;
      case 6:
        handleOpenUnit(
          6,
          'workbook',
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          openTest ? 'unit6_test' : 'phonetics_tet'
        );
        break;
    }
  };

  const activeUnit = getUnitById(selectedUnitId);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        lastUnitId={progress.lastUnitId || 1}
        onContinueUnit={() => handleOpenUnit(progress.lastUnitId || 1)}
      />

      <div className="flex-1">
        {activeView === 'roadmap' && (
          <UnitRoadmap
            progress={progress}
            onSelectUnit={(id) => handleOpenUnit(id, 'grammar')}
            onOpenUnit1Workbook={(station) =>
              handleOpenUnit(1, 'workbook', station ?? 'phonetics')
            }
            onOpenUnit2Workbook={(station) =>
              handleOpenUnit(2, 'workbook', undefined, station ?? 'sound_sort')
            }
            onOpenUnit3Workbook={(station) =>
              handleOpenUnit(3, 'workbook', undefined, undefined, station ?? 'phonetics_vocab')
            }
            onOpenUnit4Workbook={(station) =>
              handleOpenUnit(4, 'workbook', undefined, undefined, undefined, station ?? 'phonetics')
            }
            onOpenUnit5Workbook={(station) =>
              handleOpenUnit(
                5,
                'workbook',
                undefined,
                undefined,
                undefined,
                undefined,
                station ?? 'phonetics_nature'
              )
            }
            onOpenUnit6Workbook={(station) =>
              handleOpenUnit(
                6,
                'workbook',
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                station ?? 'phonetics_tet'
              )
            }
            onOpenUnit7Workbook={(station) =>
              handleOpenUnit(
                7,
                'workbook',
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                station ?? 'phonetics_tv'
              )
            }
            onOpenUnit8Workbook={(station) =>
              handleOpenUnit(
                8,
                'workbook',
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                station ?? 'phonetics_sports'
              )
            }
            onOpenPractice={() => handleNavigate('practice')}
            onOpenVocab={() => handleNavigate('vocab')}
            onOpenAnswerKey={() => handleNavigate('answerkey')}
          />
        )}

        {activeView === 'unit' && (
          <UnitWorkspace
            unit={activeUnit}
            progress={progress}
            initialTab={unitInitialTab}
            initialUnit1Station={unit1InitialStation}
            initialUnit2Station={unit2InitialStation}
            initialUnit3Station={unit3InitialStation}
            initialUnit4Station={unit4InitialStation}
            initialUnit5Station={unit5InitialStation}
            initialUnit6Station={unit6InitialStation}
            initialUnit7Station={unit7InitialStation}
            initialUnit8Station={unit8InitialStation}
            onSelectUnit={(id) => handleOpenUnit(id, 'grammar')}
            onBackToRoadmap={() => handleNavigate('roadmap')}
            onMarkSectionDone={markSectionDone}
            onToggleVocabMastered={toggleVocabMastered}
            onRecordAnswer={recordExerciseAnswer}
            onRecordUnitScore={recordUnitScore}
          />
        )}

        {activeView === 'vocab' && (
          <VocabHub
            progress={progress}
            onToggleVocabMastered={toggleVocabMastered}
            onOpenUnit={handleOpenUnit}
          />
        )}

        {activeView === 'practice' && (
          <PracticeArena
            progress={progress}
            onRecordAnswer={recordExerciseAnswer}
          />
        )}

        {activeView === 'answerkey' && (
          <AnswerKeyHub onOpenUnitWorkbook={handleOpenUnitFromAnswerKey} />
        )}
      </div>

      <footer className="mt-12 border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p className="font-semibold text-slate-700">
            Global 6 — Học Tiếng Anh Lớp 6 Trực Quan (Chương trình GDPT 2018 · Tập 1 &amp; Tập 2)
          </p>
          <p>Trọn bộ 12 Unit · 120 Từ vựng có âm thanh · 96 Bài tập 4 dạng chuẩn IOE</p>
        </div>
      </footer>
    </div>
  );
}
