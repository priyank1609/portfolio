import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Virtual Cryptography Lab',
    domain: 'Web Application',
    tech: ['React.js', 'HTML5', 'CSS3'],
    points: [
      'Developed an interactive web-based educational platform using React.js to simulate symmetric and asymmetric encryption algorithms, enabling users to visualize real-time encryption and decryption processes.',
      'Built reusable and modular UI components using React functional components and JavaScript (ES6+) to create a dynamic and interactive learning interface.',
      'Implemented responsive UI and optimized user experience using modern HTML5 and CSS3, ensuring cross-browser compatibility and accessibility.',
      'Managed source code using Git and collaborated through Git-based workflows while integrating CI/CD pipelines for automated build and deployment.',
    ],
  },
  {
    title: 'AudioFlux Player',
    domain: 'Frontend Web Application',
    tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
    points: [
      'Developed a responsive web-based music streaming interface featuring playlist management, navigation menus, and media playback controls to simulate a modern digital audio platform.',
      'Implemented dynamic playlist rendering and interactive media control functionality using JavaScript (ES6+) to enable real-time UI updates and improved user interactivity.',
      'Built mobile-responsive layouts using HTML5 and CSS3, ensuring consistent user experience across multiple screen sizes, devices, and browsers.',
      'Applied modular frontend development practices and reusable UI component patterns to improve maintainability and scalability of the application.',
      'Optimized UI rendering and resource loading to deliver smooth interactions and faster page load times.',
    ],
  },
  {
    title: 'Car Trading Platform',
    domain: 'Full-Stack Web Application',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'Java', 'Spring Boot', 'MySQL'],
    points: [
      'Designed and developed a full-stack vehicle marketplace platform enabling users to list, browse, and manage car listings through a secure web interface.',
      'Built a responsive frontend using HTML5, CSS3, and Bootstrap, ensuring mobile compatibility and intuitive user experience.',
      'Implemented RESTful backend services using Spring Boot, supporting secure authentication and efficient CRUD operations.',
      'Integrated MySQL database for data persistence, optimizing queries and schema design for improved performance.',
      'Utilized Git-based version control and collaborative development workflows to streamline development and code management.',
    ],
  },
];

function Projects() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

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

  const project = projects[current];

  return (
    <section id="projects" className="bg-slate-900 py-16 md:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
          Projects
        </h2>
        <p className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-14">
          A showcase of my recent work and personal projects.
        </p>

        {/* Slideshow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-300"
            aria-label="Previous project"
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
                {/* Title & Domain */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-cyan-400 font-medium text-sm">
                    {project.domain}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {project.points.map((point, i) => (
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
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-cyan-400 w-8'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
