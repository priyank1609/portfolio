import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    company: 'Oracle',
    role: 'Software Engineer (React Developer)',
    period: 'Aug 2024 – Present',
    location: 'Noida, IN',
    points: [
      'Led the upgrade of the frontend framework from React v17 to v18, optimizing component rendering and improving UI performance and load times by 25% across enterprise applications.',
      'Shipped 4+ full-scale Proof of Concepts (POCs) using React.js, JavaScript (ES6+), and component-driven architecture, accelerating prototype delivery timelines by 40%.',
      'Executed AI-driven code analysis and automation tools to support debugging, refactoring, and optimization of frontend modules.',
      'Developed scalable and reusable React components using React Hooks, reducing development effort by 20%.',
      'Optimized application performance using Redux for state management and Lazy Loading and Code Splitting to reduce bundle size.',
      'Integrated REST APIs using Fetch/Axios and built dynamic data-driven UI components for enterprise automation platforms.',
    ],
  },
  {
    company: 'Oracle',
    role: 'Software Engineer (React Developer)',
    period: 'Oct 2022 – Jul 2024',
    location: 'Noida, IN',
    points: [
      'Developed core modules of Oracle\'s Telecom Management Portal using React, JavaScript (ES6+), HTML5, and CSS3 while supporting data workflows using Python.',
      'Contributed to a frontend framework upgrade (v11 → v17) and improved client-side routing, enhancing application performance and user engagement by 25%.',
      'Developed responsive UI components and improved application load performance by optimizing DOM rendering and asynchronous data handling.',
      'Integrated REST APIs with the React frontend to fetch and display data from backend services and microservices.',
      'Built reusable UI components to improve maintainability and consistency across the application.',
      'Collaborated in Agile Scrum teams, participating in sprint planning, debugging, code reviews, and release activities.',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Software Engineer (Angular Developer)',
    period: 'Jul 2021 – Oct 2022',
    location: 'Noida, IN',
    points: [
      'Developed enterprise web application features using Angular, TypeScript, and JavaScript (ES6+), building reusable UI components.',
      'Built responsive and scalable web interfaces using Angular, HTML5, CSS3, and Bootstrap, improving UI performance by 30% across browsers and devices.',
      'Implemented component-based architecture in Angular, improving modularity and development efficiency across the frontend codebase.',
      'Integrated REST APIs with Angular services to enable dynamic data rendering and seamless communication with backend systems.',
      'Contributed to CI/CD pipelines and Docker-based environments to support automated builds and deployment workflows.',
      'Optimized DOM rendering, API calls, and frontend logic, improving application load time and overall user interaction.',
    ],
  },
];

function Experience() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const prev = () => setCurrent((c) => (c === 0 ? experiences.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === experiences.length - 1 ? 0 : c + 1));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const exp = experiences[current];

  return (
    <section id="experience" className="bg-slate-900 py-16 md:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
          Experience
        </h2>
        <p className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-14">
          My professional journey in software engineering.
        </p>

        {/* Slideshow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-300"
            aria-label="Previous experience"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Card */}
          <div
            className="relative rounded-2xl border border-slate-700/60 bg-slate-800/40 backdrop-blur-sm p-8 md:p-10 overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Gradient bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {exp.company}
                  </h3>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-cyan-400 font-medium text-sm md:text-base">
                    {exp.role}
                  </span>
                </div>

                {/* Period & Location */}
                <p className="text-slate-400 text-sm mb-6 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {exp.period}
                  <span className="text-slate-600 mx-1">|</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {exp.location}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                      <span className="mt-2 w-2 h-2 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-300"
            aria-label="Next experience"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {experiences.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-cyan-400 w-8'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to experience ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
