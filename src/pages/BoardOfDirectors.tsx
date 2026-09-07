import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { currentBoardMembers, previousBoards, BoardMember } from "@/data/bseOfficialData";
import {
  BoardContactSection,
  BoardHeroSection,
  CommitteesSection,
  CurrentBoardSection,
  PreviousBoardsSection,
} from "@/components/board/BoardBlueprintSections";
import { Users, History, Shield, Sparkles } from "lucide-react";
import "@/styles/bse-blueprint.css";

const BoardOfDirectors = () => {
  const { lang: currentLang, dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<'current' | 'previous'>('current');
  const [selectedPresident, setSelectedPresident] = useState<any>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [timelinePosition, setTimelinePosition] = useState(0);
  const [selectedDecade, setSelectedDecade] = useState<string>('all');
  const [boardSearch, setBoardSearch] = useState<string>('');

  const presidentMember = currentBoardMembers.find(m => m.isPresident) || currentBoardMembers[0];
  const otherMembers = currentBoardMembers.filter(m => m.id !== presidentMember?.id);

  const filteredPreviousBoards = previousBoards.filter(board => {
    const year = board.year || 0;
    if (selectedDecade !== 'all') {
      if (selectedDecade === '2020s' && (year < 2020 || year > 2029)) return false;
      if (selectedDecade === '2010s' && (year < 2010 || year > 2019)) return false;
      if (selectedDecade === '2000s' && (year < 2000 || year > 2009)) return false;
      if (selectedDecade === '1990s' && (year < 1990 || year > 1999)) return false;
      if (selectedDecade === '1980s' && (year < 1980 || year > 1989)) return false;
      if (selectedDecade === '1970s' && (year < 1970 || year > 1979)) return false;
    }
    if (!boardSearch.trim()) return true;
    const query = boardSearch.toLowerCase().trim();
    const yearMatch = year.toString().includes(query);
    const presMatch = (board.presidentAr || board.presidentEn || '').toLowerCase().includes(query);
    const memberMatch = board.members.some(m => 
      (m.nameAr || m.name || '').toLowerCase().includes(query) ||
      (m.positionAr || m.position || '').toLowerCase().includes(query)
    );
    return yearMatch || presMatch || memberMatch;
  });

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />
      
      <main className="bse-blueprint">
        <BoardHeroSection
          currentLang={currentLang}
          selectedPresident={selectedPresident}
          setSelectedPresident={setSelectedPresident}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          timelinePosition={timelinePosition}
          setTimelinePosition={setTimelinePosition}
        />

        {/* Blueprint Tab Navigation */}
        <nav
          className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[var(--bse-line)] shadow-sm transition-all"
          aria-label={currentLang === 'ar' ? 'تبويبات مجلس الإدارة' : 'Board of Directors Tabs'}
        >
          <div className="bp-shell py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="inline-flex p-1.5 bg-[var(--bse-sky)]/80 rounded-2xl border border-[var(--bse-line)] w-full sm:w-auto shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab('current')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === 'current'
                    ? 'bg-[var(--bse-navy)] text-white shadow-lg shadow-blue-950/20 ring-1 ring-white/20'
                    : 'text-[var(--bse-muted)] hover:text-[var(--bse-navy)] hover:bg-white/60'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>{currentLang === 'ar' ? 'مجلس الإدارة الحالي' : 'Current Board'}</span>
                <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono transition-colors ${
                  activeTab === 'current' ? 'bg-blue-500 text-white' : 'bg-blue-100/90 text-blue-800'
                }`}>
                  2026 - 2028
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('previous')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === 'previous'
                    ? 'bg-[var(--bse-navy)] text-white shadow-lg shadow-blue-950/20 ring-1 ring-white/20'
                    : 'text-[var(--bse-muted)] hover:text-[var(--bse-navy)] hover:bg-white/60'
                }`}
              >
                <History className="w-4 h-4" />
                <span>{currentLang === 'ar' ? 'مجالس الإدارة السابقة' : 'Previous Boards'}</span>
                <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono transition-colors ${
                  activeTab === 'previous' ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  1972 - 2025
                </span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-[var(--bse-muted)]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>BSE / GOVERNANCE ARCHIVE</span>
              <span className="text-[var(--bse-line)]">•</span>
              <span className="text-[var(--bse-blue)] font-bold">
                {activeTab === 'current' 
                  ? (currentLang === 'ar' ? 'الدورة 2026 - 2028' : 'TERM 2026 - 2028')
                  : (currentLang === 'ar' ? 'أرشيف 50+ عاماً' : '50+ YEARS ARCHIVE')}
              </span>
            </div>
          </div>
        </nav>

        {/* Tab Content Display */}
        {activeTab === 'current' ? (
          <>
            <CurrentBoardSection
              currentLang={currentLang}
              presidentMember={presidentMember}
              otherMembers={otherMembers}
            />
            <CommitteesSection currentLang={currentLang} />
          </>
        ) : (
          <PreviousBoardsSection
            currentLang={currentLang}
            selectedDecade={selectedDecade}
            setSelectedDecade={setSelectedDecade}
            boardSearch={boardSearch}
            setBoardSearch={setBoardSearch}
            filteredPreviousBoards={filteredPreviousBoards}
          />
        )}

        <BoardContactSection currentLang={currentLang} />
      </main>

      <Footer />
    </div>
  );
};

export default BoardOfDirectors;
