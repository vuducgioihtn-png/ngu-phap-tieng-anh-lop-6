import { useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

export type AppView = 'roadmap' | 'unit' | 'vocab' | 'practice' | 'answerkey';

interface NavbarProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
  lastUnitId: number;
  onContinueUnit: () => void;
}

const NAV_ITEMS: { id: AppView; label: string }[] = [
  { id: 'roadmap', label: 'Lộ trình 12 Unit' },
  { id: 'unit', label: 'Học theo Unit' },
  { id: 'vocab', label: 'Kho Từ vựng' },
  { id: 'practice', label: 'Luyện tập 4 Dạng' },
  { id: 'answerkey', label: 'Đáp án Tập 1' },
];

export function Navbar({
  activeView,
  onNavigate,
  lastUnitId,
  onContinueUnit,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (view: AppView) => {
    onNavigate(view);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('roadmap')}
          className="flex shrink-0 items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white shadow-xs">
            <BookOpen className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
            Global 6
          </span>
        </button>

        {/* Zone 2: Primary Navigation (single-line, 5 items) */}
        <nav aria-label="Điều hướng chính" className="hidden md:flex items-center gap-5 lg:gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`relative whitespace-nowrap py-1 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-sky-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-[19px] h-0.5 rounded-full bg-sky-600" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              onContinueUnit();
              setMobileOpen(false);
            }}
            className="hidden sm:inline-flex shrink-0 items-center justify-center rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shadow-xs transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Học Unit {lastUnitId}
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-3 shadow-sm md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={`rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                onContinueUnit();
                setMobileOpen(false);
              }}
              className="mt-2 rounded-xl bg-sky-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-sky-700"
            >
              Học tiếp Unit {lastUnitId}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
