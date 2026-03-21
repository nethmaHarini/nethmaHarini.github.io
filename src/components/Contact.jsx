const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className="px-6 py-20" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-5xl font-black text-white glow-red">
            Let's Lead Something Great Together
          </h2>
          <p className="text-slate-400 leading-relaxed">
            I'm open to discussing project opportunities, collaboration, and
            strategic initiatives.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span>hello@alexrivera.dev</span>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form
            className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Full Name
              </label>
              <input
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                placeholder="John Doe"
                type="text"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Email Address
              </label>
              <input
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                placeholder="john@company.com"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Message
              </label>
              <textarea
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                placeholder="Tell me about your project..."
                rows="4"
              ></textarea>
            </div>

            <button
              className="w-full btn-lift py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
