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
    <section className="px-6 py-20 rounded-3xl mx-6 border border-white/10 bg-black" id="skills">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Core Competencies
          </h2>
          <p className="text-slate-400">
            Strategic skills for leading complex initiatives and high-performing teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Management Focus */}
          <div className="space-y-6">
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm border-l-2 border-primary pl-4">
              Management Focus
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {managementSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 border border-primary/20 rounded-xl hover:border-primary/60 hover:shadow-[0_0_15px_rgba(209,0,28,0.2)] transition-all duration-300 bg-black"
                >
                  <h4 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Execution */}
          <div className="space-y-6">
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm border-l-2 border-primary pl-4">
              Leadership & Execution
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {leadershipSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 border border-primary/20 rounded-xl hover:border-primary/60 hover:shadow-[0_0_15px_rgba(209,0,28,0.2)] transition-all duration-300 bg-black"
                >
                  <h4 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
