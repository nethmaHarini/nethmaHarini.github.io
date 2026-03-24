import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

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
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest("header") &&
        !event.target.closest("[data-mobile-menu]") &&
        !event.target.closest('button[aria-label="Toggle mobile menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    // Close the menu first
    setIsMobileMenuOpen(false);

    // Scroll to target immediately
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleMobileMenuClick = (e) => {
    // Prevent any default behavior or propagation
    e.preventDefault();
    e.stopPropagation();

    // Pure toggle - no scrolling, no navigation
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-none will-change-transform ${
          isScrolled
            ? "bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/5 dark:border-primary/30 shadow-lg shadow-black/5 dark:shadow-primary/10"
            : "bg-transparent border-b border-black/5 dark:border-white/10"
        }`}
        style={{
          WebkitTransform: "translate3d(0,0,0)",
          transform: "translate3d(0,0,0)",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
          <div
            className="flex items-center gap-2 transition-opacity select-none md:cursor-pointer hover:opacity-80"
            onClick={(e) => {
              // Only work on desktop
              if (window.innerWidth >= 768) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <div className="relative flex items-center justify-center h-10 w-fit">
              {/* Custom NH Logo */}
              <div className="flex items-center">
                {/* N - Red */}
                <div className="px-2 py-1">
                  <span className="text-2xl font-black text-primary tracking-tight">N</span>
                </div>
                {/* H - Theme-responsive gradient */}
                <div className="px-2 py-1">
                  <span
                    className="text-2xl font-black tracking-tight"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(45deg, #ffffff, #f1f5f9)'
                        : 'linear-gradient(45deg, #000000, #334155)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    H
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>

          <nav className="items-center hidden gap-10 md:flex">
            <button
              className="text-sm font-medium transition-colors nav-link text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </button>
            <button
              className="text-sm font-medium transition-colors nav-link text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={() => scrollToSection("about-me")}
            >
              About
            </button>
            <button
              className="text-sm font-medium transition-colors nav-link text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="text-sm font-medium transition-colors nav-link text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button
              className="text-sm font-medium transition-colors nav-link text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="p-2 transition-all duration-300 rounded-full hover:bg-black/5 dark:hover:bg-white/5 group"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span className="text-xl transition-colors duration-300 material-symbols-outlined text-slate-900 dark:text-white group-hover:text-primary">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <button
              className="p-2 transition-all duration-300 rounded-full md:hidden hover:bg-black/5 dark:hover:bg-white/5"
              onClick={handleMobileMenuClick}
              type="button"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-slate-900 dark:text-white">
                {isMobileMenuOpen ? "close" : "menu"}
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
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="border-b shadow-lg bg-white/95 dark:bg-black/95 backdrop-blur-md border-black/5 dark:border-primary/30">
          <nav className="px-6 py-4 space-y-4">
            <button
              className="block w-full px-4 py-3 text-left transition-colors rounded-lg text-slate-800 dark:text-white hover:bg-primary/5 hover:text-primary"
              onClick={() => {
                // Close menu and scroll to top
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </button>
            <button
              className="block w-full px-4 py-3 text-left transition-colors rounded-lg text-slate-800 dark:text-white hover:bg-primary/5 hover:text-primary"
              onClick={() => scrollToSection("about-me")}
            >
              About
            </button>
            <button
              className="block w-full px-4 py-3 text-left transition-colors rounded-lg text-slate-800 dark:text-white hover:bg-primary/5 hover:text-primary"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="block w-full px-4 py-3 text-left transition-colors rounded-lg text-slate-800 dark:text-white hover:bg-primary/5 hover:text-primary"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button
              className="block w-full px-4 py-3 text-left transition-colors rounded-lg text-slate-800 dark:text-white hover:bg-primary/5 hover:text-primary"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16"></div>

      {/* Animated border line */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "w-full h-[1px] bg-primary/60 shadow-[0_0_12px_rgba(209,0,28,0.6)]"
            : "w-full h-[1px] bg-primary/20 shadow-[0_0_8px_rgba(209,0,28,0.1)]"
        }`}
      ></div>
    </>
  );
};

export default Header;
