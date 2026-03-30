import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What does Nethma Harini specialize in?",
      answer:
        "I specialize in project management with a focus on strategic planning, team coordination, and Agile methodologies. As an IT undergraduate, I combine technical knowledge with management expertise to deliver measurable organizational success.",
    },
    {
      question: "What project management methodologies do you use?",
      answer:
        "I primarily use Agile and Scrum methodologies for iterative project delivery. I focus on risk management, stakeholder communication, and resource optimization to ensure projects stay on track and meet defined objectives.",
    },
    {
      question: "What types of projects have you managed?",
      answer:
        "I've managed diverse projects including mobile app development (React Native, Android), FinTech product launches with 5k+ downloads, digital transformation initiatives achieving 85% efficiency increase, and AI-powered analytics platforms resulting in 40% cost reduction.",
    },
    {
      question: "How do you ensure project success?",
      answer:
        "I ensure project success through structured roadmaps, milestone tracking, early bottleneck identification, transparent stakeholder communication, and high-performance team collaboration. I deliver work that is organized, efficient, and aligned with defined objectives.",
    },
    {
      question: "What technical skills do you bring to project management?",
      answer:
        "I have hands-on experience with React Native, Android development (Java/Kotlin), AI/ML integration, and software architecture. This technical background helps me understand development challenges and communicate effectively with engineering teams.",
    },
    {
      question: "How can I work with Nethma Harini?",
      answer:
        "You can reach me through the contact form on this website or email me directly at nethmaharini03@gmail.com. I'm open to project management opportunities, consulting engagements, and collaborative initiatives.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-24 bg-slate-50/50 dark:bg-transparent" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[2px] bg-primary"></div>
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
              FAQ
            </p>
            <div className="w-8 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Common questions about my work and expertise
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/40 dark:hover:border-primary/60"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-primary/5 dark:hover:bg-primary/10"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-bold text-black dark:text-white pr-8">
                  {faq.question}
                </h3>
                <span
                  className={`material-symbols-outlined text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Schema for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default FAQ;
