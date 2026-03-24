const About = () => {
  return (
    <section className="px-6 py-24" id="about-me">
      <div className="max-w-5xl mx-auto">
        <div className="about-glow-border rounded-[2rem] p-8 md:p-16 relative overflow-hidden border-primary/20 bg-[#F8F8F8]/90 dark:bg-black backdrop-blur-[10px] shadow-2xl shadow-black/5 dark:shadow-none">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>

          <div className="relative z-10 space-y-12">
            {/* Title and About Me Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-primary"></div>
                  <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                    About Me
                  </p>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tight leading-tight">
                  About Me
                </h2>
              </div>

              {/* Paragraphs */}
              <div className="space-y-6 max-w-4xl">
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-200">
                  I focus on delivering projects through clear planning, structured execution, and consistent coordination.
                </p>

                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-200">
                  As an aspiring Project Manager, I am committed to organizing complex requirements into actionable plans,
                  aligning team efforts, and ensuring steady progress from initiation to delivery. I emphasize clarity in
                  communication, accountability in execution, and efficiency in every stage of the project lifecycle.
                </p>

                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-200">
                  Through my experience with system-based projects, I have developed the ability to manage workflows,
                  adapt to changing requirements, and maintain focus on achieving defined objectives.
                </p>

                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-200">
                  My goal is to grow as a Project Manager who ensures projects are delivered on time, aligned with objectives,
                  and capable of creating measurable value.
                </p>
              </div>
            </div>

            {/* Key Points - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group flex flex-col items-center text-center gap-4 p-6 rounded-xl transition-colors hover:bg-primary/5">
                <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">analytics</span>
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-bold text-lg leading-tight mb-2">
                    Strategic Planning
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Aligning long-term goals with actionable execution roadmaps.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col items-center text-center gap-4 p-6 rounded-xl transition-colors hover:bg-primary/5">
                <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">groups</span>
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-bold text-lg leading-tight mb-2">
                    Team Coordination
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Fostering accountability and high-performance collaboration.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col items-center text-center gap-4 p-6 rounded-xl transition-colors hover:bg-primary/5">
                <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-bold text-lg leading-tight mb-2">
                    Result Driven
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Delivering measurable organizational success through Agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
