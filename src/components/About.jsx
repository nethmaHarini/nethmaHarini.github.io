const About = () => {
  return (
    <section className="px-6 py-24" id="about-me">
      <div className="max-w-5xl mx-auto">
        <div className="border rounded-[2rem] p-8 md:p-16 relative overflow-hidden border-primary/20 bg-black">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Column: Title and Lead */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                  The Approach
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight text-[#ffffff]">
                  About Me
                </h2>
                <div className="w-16 h-1 bg-primary"></div>
              </div>

              <p className="text-2xl md:text-3xl text-white font-medium leading-tight">
                I transform complex ideas into structured, goal-driven outcomes
                through strategic leadership.
              </p>

              <p className="text-lg leading-relaxed text-slate-200">
                Bridging the gap between ambitious vision and operational
                reality. I focus on high-impact execution, data-driven decision
                making, and empowering cross-functional teams to deliver
                excellence.
              </p>
            </div>

            {/* Right Column: Highlights */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="grid grid-cols-1 gap-6">
                <div className="group flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-primary/5">
                  <span className="material-symbols-outlined text-primary mt-1">
                    analytics
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-[#ffffff]">
                      Strategic Planning
                    </h4>
                    <p className="text-sm">
                      Aligning long-term goals with actionable execution
                      roadmaps.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-primary/5">
                  <span className="material-symbols-outlined text-primary mt-1">
                    groups
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-[#ffffff]">
                      Team Coordination
                    </h4>
                    <p className="text-sm">
                      Fostering accountability and high-performance
                      collaboration.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-primary/5">
                  <span className="material-symbols-outlined text-primary mt-1">
                    verified
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-[#ffffff]">
                      Result Driven
                    </h4>
                    <p className="text-sm">
                      Delivering measurable organizational success through Agile
                      methodologies.
                    </p>
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

export default About;
