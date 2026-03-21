import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-primary/30 shadow-lg shadow-primary/10'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-fit h-8 px-2 bg-primary rounded-sm flex items-center justify-center font-black text-white italic">
              NETHMA
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-white">
              HARINI
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <button
              className="nav-link text-sm font-medium transition-colors text-white hover:text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </button>
            <button
              className="nav-link text-sm font-medium transition-colors text-white hover:text-primary"
              onClick={() => scrollToSection('about-me')}
            >
              About
            </button>
            <button
              className="nav-link text-sm font-medium transition-colors text-white hover:text-primary"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button
              className="nav-link text-sm font-medium transition-colors text-white hover:text-primary"
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button
              className="nav-link text-sm font-medium transition-colors text-white hover:text-primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-full hover:bg-white/5 dark:hover:bg-white/5 hover:bg-black/5 transition-all duration-300 group"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined text-xl text-white dark:text-white text-slate-900 group-hover:text-primary transition-colors duration-300">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button className="md:hidden p-2">
              <span className="material-symbols-outlined text-white dark:text-white text-slate-900">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20"></div>

      {/* Animated border line */}
      <div className={`fixed top-16 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'w-full h-[1px] bg-primary/60 shadow-[0_0_12px_rgba(209,0,28,0.6)]'
          : 'w-full h-[1px] bg-primary/40 shadow-[0_0_8px_rgba(209,0,28,0.4)]'
      }`}></div>
    </>
  );
};

export default Header;
