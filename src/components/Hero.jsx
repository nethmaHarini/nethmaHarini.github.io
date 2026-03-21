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
    <section className="flex flex-col md:flex-row items-center gap-12 px-6 py-20 md:py-32">
      <div className="flex-1 space-y-8 order-2 md:order-1 text-center md:text-left">
        <div className="space-y-2">
          <p className="text-primary font-semibold tracking-widest uppercase text-lg">
            Hey, I'm
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-white glow-red leading-tight">
            NETHMA HARINI
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-xl mx-auto md:mx-0">
            Aspiring Project Manager | Strategic Planner | Team Coordinator
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button
            className="btn-lift px-8 py-4 bg-primary text-white font-bold rounded shadow-lg shadow-primary/20 transition-all"
            onClick={() => scrollToSection('projects')}
          >
            View My Projects
          </button>
          <button
            className="btn-lift px-8 py-4 border border-primary/50 text-white font-bold rounded hover:bg-primary/10 transition-all"
            onClick={() => scrollToSection('contact')}
          >
            Let's Connect
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center order-1 md:order-2">
        <div className="relative group">
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all"></div>
          {/* Circular Frame */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border border-primary/40 p-2">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary">
              <div
                className="w-full h-full bg-slate-800 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida/ADBb0ugePmYfjz_Jwmtt32up8LjCHFJPqSxRxxQgp8yQTzFEpNK7oGpcyDwT4kwis53-rjIxWr2zRh6p2Xx2ZUQkxDh95ia9_AaK4M-Pxb5Y2xT5eJCX3UdNSwZkbxQb-y5o6-O_Zp7vs4nFYaImiFWxYytFKWWvL8FwmER0hOtu2_t-8zfIwqOasznQvB54h5m6mYse5h7erIQNydIiS_MeRKl3yu5B7ozddyUmVeulsuUzxRfTi0qPyiW69NAydP8Df3yLNSGfj21ONP0")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
