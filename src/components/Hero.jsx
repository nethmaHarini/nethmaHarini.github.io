const Hero = () => {
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
    <section className="px-6 pt-8 pb-12 min-h-[calc(100vh-1rem)] flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Premium Modern Container */}
        <div className="bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/20 p-6 md:p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-8 order-2 md:order-1 text-center md:text-left">
              <div className="space-y-2">
                <p className="text-primary font-semibold tracking-widest uppercase text-lg">
                  Hey, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-black text-black dark:text-white glow-red leading-tight">
                  NETHMA HARINI
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto md:mx-0 leading-relaxed">
                  <span className="whitespace-nowrap">Aspiring Project Manager</span> | <span className="whitespace-nowrap">Strategic Planner</span> | <span className="whitespace-nowrap">IT Undergraduate</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  className="btn-lift px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:shadow-xl"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Projects
                </button>
                <button
                  className="btn-lift px-8 py-4 border border-primary/50 dark:border-primary/40 text-primary font-bold rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all backdrop-blur-sm"
                  onClick={() => scrollToSection('contact')}
                >
                  Let's Connect
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center order-1 md:order-2">
              <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/15 dark:group-hover:bg-primary/30 transition-all"></div>
                {/* Circular Frame */}
                <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border border-primary/20 dark:border-primary/40 p-2 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary shadow-xl shadow-primary/20">
                    <div
                      className="w-full h-full bg-slate-100 dark:bg-slate-800 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida/ADBb0ugePmYfjz_Jwmtt32up8LjCHFJPqSxRxxQgp8yQTzFEpNK7oGpcyDwT4kwis53-rjIxWr2zRh6p2Xx2ZUQkxDh95ia9_AaK4M-Pxb5Y2xT5eJCX3UdNSwZkbxQb-y5o6-O_Zp7vs4nFYaImiFWxYytFKWWvL8FwmER0hOtu2_t-8zfIwqOasznQvB54h5m6mYse5h7erIQNydIiS_MeRKl3yu5B7ozddyUmVeulsuUzxRfTi0qPyiW69NAydP8Df3yLNSGfj21ONP0")',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
