import { useState } from "react";
import { trackProjectClick, trackOutboundLink } from '../analytics';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: " AI Music Separation & Player App",
      description:
        "A professional React Native music player with advanced AI-powered source separation capabilities. Load any song and separate it into individual vocal and instrumental tracks with studio-quality results.",
      tags: ["React Native", "AI/ML", "Audio Processing"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBWDG2A0bpz1k7P-KsLbcdiB-pUg2wbK5iuHdjBRCcR-jafOfaH-4SVOk0k1N66GyfFH70xJraHO4mmxy7mx78TOgK7C-HqpsRfiKJvqVRzLWMUOJan_ubwcWdAT6TG-PO-IxgP0Et3Tn_dPFTBfmNFFyJN8Ed1Bcuu5zX6hXsQSRukcPQecP59iGwRVSOwjogBQn6G7JSvK1zhQ3il6OhBq_1ncffjZreiR6ksZSiOqXmEdp2CLSmImJyuvpm97MLRmnTXvmVoOD0g",
      stats: "GitHub Repository",
      status: "Live Demo",
      link: "https://github.com/nethmaHarini/MediaPlayer.git",
    },
    {
      title: " Book Diary App",
      description:
        "BookDiary is a personal book tracking and recommendation diary built for Android. Track your reading progress, discover new books, and maintain a personal library with reviews and ratings.",
      tags: ["Android", "Java/Kotlin", "SQLite"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDsfbmIK08mzNkphU25ubTLAhSZqe0G3wIphdd17QkIodM6VAKVPYvf_ceWCNOHmF8oPoSpuaK74X8rBa4hzAOedjHhIn_VtJ39A7hmCJeyErqi2DIChEFyoOWBJqlWVmnILTTFpasVrHvx_NSb7TddyCAjasVwPInh7e62KOVdogWqcwIpYV4yrNBcNdF7Ff7p2kd7XTCbxH9fmCU6pMfKMkw8TASFZfL1isLXFuc0iAWZsrg8ZYB8Tq5QudV7SozCVS5W3XckrY0b",
      stats: "Android App",
      status: "Published",
      link: "https://github.com/nethmaHarini/BookDiary.git",
    },
    {
      title: "FinTech Product Launch",
      description: "Managed end-to-end delivery of a mobile payment solution.",
      tags: ["Team Leadership", "Scrum"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD8rWk7Bv2pLURorRoamfdbrwRk1-rJhj4n8yPDRkxi0ozW3CCzdH6TZGN_Xx2DxNspdpEc_pqPTdCFZjHv7ZfBfdR1TnXMmNTHHiMr3zE-FVF-Nb7m97GWEyyIJq3u6y5hPTlLjT6hspLgDxJN0_lkAIleiRaceCSQjHwaua6rBrPvhAqRFQuyWZ0G573mvJjkpwZOoXysCa8GZJF9f7AEE5RXBGLOZ5gDTjOXw5dcynXKGh9GMjzgiX80ZyBIiHxrsRx0ZA1mNtrf",
      stats: "5k+ App Store downloads",
      status: "Public",
    },
    {
      title: "Digital Transformation Initiative",
      description:
        "Orchestrated company-wide digital transformation across 5 departments.",
      tags: ["Change Management", "Digital Strategy"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDWDG2A0bpz1k7P-KsLbcdiB-pUg2wbK5iuHdjBRCcR-jafOfaH-4SVOk0k1N66GyfFH70xJraHO4mmxy7mx78TOgK7C-HqpsRfiKJvqVRzLWMUOJan_ubwcWdAT6TG-PO-IxgP0Et3Tn_dPFTBfmNFFyJN8Ed1Bcuu5zX6hXsQSRukcPQecP59iGwRVSOwjogBQn6G7JSvK1zhQ3il6OhBq_1ncffjZreiR6ksZSiOqXmEdp2CLSmImJyuvpm97MLRmnTXvmVoOD0g",
      stats: "85% efficiency increase",
      status: "Completed",
    },
    {
      title: "AI-Powered Analytics Platform",
      description:
        "Built predictive analytics solution for supply chain optimization.",
      tags: ["Data Science", "Machine Learning"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDsfbmIK08mzNkphU25ubTLAhSZqe0G3wIphdd17QkIodM6VAKVPYvf_ceWCNOHmF8oPoSpuaK74X8rBa4hzAOedjHhIn_VtJ39A7hmCJeyErqi2DIChEFyoOWBJqlWVmnILTTFpasVrHvx_NSb7TddyCAjasVwPInh7e62KOVdogWqcwIpYV4yrNBcNdF7Ff7p2kd7XTCbxH9fmCU6pMfKMkw8TASFZfL1isLXFuc0iAWZsrg8ZYB8Tq5QudV7SozCVS5W3XckrY0b",
      stats: "40% cost reduction",
      status: "In Progress",
    },
    {
      title: "Remote Team Productivity Suite",
      description:
        "Designed and implemented tools for distributed workforce management.",
      tags: ["Remote Work", "Productivity"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD8rWk7Bv2pLURorRoamfdbrwRk1-rJhj4n8yPDRkxi0ozW3CCzdH6TZGN_Xx2DxNspdpEc_pqPTdCFZjHv7ZfBfdR1TnXMmNTHHiMr3zE-FVF-Nb7m97GWEyyIJq3u6y5hPTlLjT6hspLgDxJN0_lkAIleiRaceCSQjHwaua6rBrPvhAqRFQuyWZ0G573mvJjkpwZOoXysCa8GZJF9f7AEE5RXBGLOZ5gDTjOXw5dcynXKGh9GMjzgiX80ZyBIiHxrsRx0ZA1mNtrf",
      stats: "300% team engagement",
      status: "Live Now",
    },
  ];

  // Show featured projects (first 3) or all projects based on state
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="px-6 py-20 space-y-12" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-black dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            A selection of my recent software and application development
            projects.
          </p>
        </div>
        <button
          className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
          onClick={toggleShowAll}
        >
          {showAll ? "Show Less" : "View All"}
          <span
            className={`material-symbols-outlined transition-transform duration-300 ${
              showAll ? "rotate-90" : ""
            } group-hover:scale-110`}
          >
            {showAll ? "keyboard_arrow_up" : "arrow_forward"}
          </span>
        </button>
      </div>

      <div
        className={`grid gap-8 transition-all duration-500 ease-in-out ${
          showAll
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className={`group card-hover flex flex-col bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-500 shadow-sm cursor-pointer ${
              index >= 3 && showAll ? "animate-fadeInUp" : ""
            }`}
            onClick={() => {
              if (project.link) {
                trackProjectClick(project.title);
                trackOutboundLink(project.link, project.title);
                window.open(project.link, "_blank");
              }
            }}
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={project.image}
                alt={`${project.title} - Project showcase`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 dark:bg-black/40 group-hover:bg-transparent transition-all"></div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/5 border border-primary/20 rounded-full text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex justify-between items-center text-xs text-slate-500 font-medium">
                <span>{project.stats}</span>
                <span className="text-primary">{project.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAll && (
        <div className="text-center pt-8">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Showing all {allProjects.length} projects
          </p>
        </div>
      )}
    </section>
  );
};

export default Projects;
