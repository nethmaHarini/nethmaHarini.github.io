import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-6 py-20" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-primary"></div>
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                Driven by Execution
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tight leading-tight">
              Open for Collaboration
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I'm open to discussing project opportunities, collaboration, and
            strategic initiatives.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span>nethmaharini03@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <span>Kandy, Sri Lanka</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form
            ref={form}
            className="space-y-6 bg-white/60 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-none"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Full Name *
              </label>
              <input
                name="from_name"
                className="w-full bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-black dark:text-white"
                placeholder="Enter your full name here"
                type="text"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Email Address *
              </label>
              <input
                name="from_email"
                className="w-full bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-black dark:text-white"
                placeholder="Enter your email here"
                type="email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Subject
              </label>
              <input
                name="subject"
                className="w-full bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-black dark:text-white"
                placeholder="Project Collaboration"
                type="text"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Message *
              </label>
              <textarea
                name="message"
                className="w-full bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-black dark:text-white"
                placeholder="Tell me about your project..."
                rows="4"
                required
              ></textarea>
            </div>

            <button
              className={`w-full py-4 font-bold rounded-lg transition-all duration-300 ${
                isLoading
                  ? 'bg-primary/50 cursor-not-allowed'
                  : 'btn-lift bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20'
              } text-white`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-25"/>
                    <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 text-center">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-center">
                ❌ Failed to send message. Please try again or contact me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
