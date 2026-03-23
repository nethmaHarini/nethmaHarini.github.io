import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen &&
          !event.target.closest('header') &&
          !event.target.closest('[data-mobile-menu]') &&
          !event.target.closest('button[aria-label="Toggle mobile menu"]')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store current scroll position without moving the page
      const currentScrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else {
      // Restore scroll position when just closing menu (not when navigating)
      const scrollY = document.body.style.top;

      // Only restore if we have a scroll position and the menu was actually open
      if (scrollY) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';

        const numericScrollY = parseInt(scrollY || '0') * -1;
        window.scrollTo(0, numericScrollY);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    // Simply close menu and navigate - no complex position handling
    setIsMobileMenuOpen(false);

    // Let menu close animation finish, then scroll
    setTimeout(() => {
      // Clear any body positioning that might interfere
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';

      // Direct scroll to target
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  };

  const handleMobileMenuClick = (e) => {
    // Prevent any default behavior or propagation
    e.preventDefault();
    e.stopPropagation();

    // Pure toggle - no scrolling, no navigation
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-none will-change-transform ${
          isScrolled
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/5 dark:border-primary/30 shadow-lg shadow-black/5 dark:shadow-primary/10'
            : 'bg-transparent border-b border-black/5 dark:border-white/10'
        }`}
        style={{
          WebkitTransform: 'translate3d(0,0,0)',
          transform: 'translate3d(0,0,0)'
        }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
          <div
            className="flex items-center gap-2 select-none md:cursor-pointer hover:opacity-80 transition-opacity"
            onClick={(e) => {
              // Only work on desktop
              if (window.innerWidth >= 768) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="w-fit h-8 px-2 bg-primary rounded-sm flex items-center justify-center font-black text-white italic">
              NETHMA
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-black dark:text-white">
              HARINI
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <button
              className="nav-link text-sm font-medium transition-colors text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </button>
            <button
              className="nav-link text-sm font-medium transition-colors text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={() => scrollToSection('about-me')}
            >
              About
            </button>
            <button
              className="nav-link text-sm font-medium transition-colors text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button
              className="nav-link text-sm font-medium transition-colors text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button
              className="nav-link text-sm font-medium transition-colors text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 group"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined text-xl text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
              onClick={handleMobileMenuClick}
              type="button"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-slate-900 dark:text-white">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        data-mobile-menu
        className={`md:hidden fixed top-16 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'transform translate-y-0 opacity-100'
            : 'transform -translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/5 dark:border-primary/30 shadow-lg">
          <nav className="px-6 py-4 space-y-4">
            <button
              className="block w-full text-left py-3 px-4 rounded-lg text-slate-800 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
              onClick={() => {
                // Simply close menu and navigate to home
                setIsMobileMenuOpen(false);

                // Let menu close animation finish, then scroll
                setTimeout(() => {
                  // Clear any body positioning that might interfere
                  document.body.style.position = '';
                  document.body.style.top = '';
                  document.body.style.left = '';
                  document.body.style.right = '';
                  document.body.style.width = '';

                  // Direct scroll to top
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }}
            >
              Home
            </button>
            <button
              className="block w-full text-left py-3 px-4 rounded-lg text-slate-800 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
              onClick={() => scrollToSection('about-me')}
            >
              About
            </button>
            <button
              className="block w-full text-left py-3 px-4 rounded-lg text-slate-800 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button
              className="block w-full text-left py-3 px-4 rounded-lg text-slate-800 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button
              className="block w-full text-left py-3 px-4 rounded-lg text-slate-800 dark:text-white hover:bg-primary/5 hover:text-primary transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20"></div>

      {/* Animated border line */}
      <div className={`fixed top-16 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'w-full h-[1px] bg-primary/60 shadow-[0_0_12px_rgba(209,0,28,0.6)]'
          : 'w-full h-[1px] bg-primary/20 shadow-[0_0_8px_rgba(209,0,28,0.1)]'
      }`}></div>
    </>
  );
};

export default Header;
