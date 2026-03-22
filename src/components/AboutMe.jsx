import developerImg from '../assets/developer.png';
import cvFile from '../assets/cv.pdf';

function AboutMe() {
  return (
    <section id="about" className="bg-slate-900 py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left — Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Hello, I'm Priyank
              <br />
              Sharma,
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              I'm a Frontend Engineer with 4+ years of experience building scalable
              web applications using React.js, Next.js, TypeScript, and modern
              JavaScript (ES6+). Skilled in component-driven architecture, state
              management with Redux and Zustand, and performance optimization
              through code splitting, lazy loading, and memoization. From wireframing
              to production-grade code, I enjoy the entire process of bringing ideas
              to life.
            </p>

            <a
              href={cvFile}
              download="Priyank_Sharma_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Right — Illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl scale-110" />
              <img
                src={developerImg}
                alt="Developer illustration"
                className="relative w-72 md:w-96 lg:w-[28rem] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
