const Skills = () => {
  const managementSkills = [
    {
      title: 'Project Planning',
      description: 'Structured roadmaps, milestone tracking, and timeline alignment.',
    },
    {
      title: 'Risk Management',
      description: 'Identifying bottlenecks early and implementing mitigation strategies.',
    },
    {
      title: 'Stakeholder Communication',
      description: 'Ensuring transparency and expectation alignment across teams.',
    },
  ];

  const leadershipSkills = [
    {
      title: 'Agile & Scrum',
      description: 'Streamlining workflows and delivering value through iterative processes.',
    },
    {
      title: 'Team Leadership',
      description: 'Empowering cross-functional teams to achieve high-performance outcomes.',
    },
    {
      title: 'Resource Management',
      description: 'Optimizing talent and budget allocation for maximum efficiency.',
    },
  ];

  return (
    <section className="px-6 py-24" id="skills">
      <div className="max-w-5xl mx-auto">
        <div className="about-glow-border relative overflow-hidden bg-[#F8F8F8]/90 dark:bg-black backdrop-blur-[10px] shadow-2xl shadow-black/5 dark:shadow-none rounded-[30px] p-8 md:p-16">
          <div className="relative z-10 space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tight">
                Core Competencies
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Strategic skills for leading complex initiatives and high-performing teams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Management Focus */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-primary"></div>
                  <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                    Management Focus
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {managementSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-white/50 dark:bg-black backdrop-blur-sm border border-slate-200 dark:border-primary/20 rounded-2xl hover:border-primary/40 dark:hover:border-primary/60 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-[0_0_15px_rgba(209,0,28,0.2)] transition-all duration-300"
                    >
                      <h4 className="text-black dark:text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {skill.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership & Execution */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-primary"></div>
                  <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                    Leadership & Execution
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {leadershipSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-white/50 dark:bg-black backdrop-blur-sm border border-slate-200 dark:border-primary/20 rounded-2xl hover:border-primary/40 dark:hover:border-primary/60 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-[0_0_15px_rgba(209,0,28,0.2)] transition-all duration-300"
                    >
                      <h4 className="text-black dark:text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {skill.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
