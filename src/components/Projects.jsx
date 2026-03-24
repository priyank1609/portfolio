import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'HealthX Smart Fitness Tracker',
    domain: 'Web Application',
    github: 'https://github.com/priyank1609/fitness-tracker',
    tech: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Chart.js', 'Local Storage'],
    points: [
      'Developed a fitness tracking web application using React.js to log workouts, manage sets/reps/weight, and perform CRUD operations for daily exercise tracking.',
      'Built a dashboard-based interface with workout history, weight tracking, BMI calculator, and diet planning features to enable data-driven fitness monitoring.',
      'Implemented interactive charts and analytics using Chart.js to visualize workout trends, calorie intake, and weight progress over time.',
      'Designed reusable and modular UI components using React Hooks, ensuring scalable architecture, efficient state management, and improved maintainability.',
      'Integrated client-side data persistence using Local Storage, enabling seamless user experience without backend dependency.',
      'Developed a responsive and performance-optimized UI using modern HTML5 and CSS3 for smooth user interaction across devices.',
    ],
  },
  {
    title: 'Personal Developer Portfolio',
    domain: 'Web Application',
    github: 'https://github.com/priyank1609/portfolio',
    tech: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite/Netlify'],
    points: [
      'Developed a personal portfolio web application using React.js and modern frontend technologies to showcase projects, technical skills, and professional experience.',
      'Built modular and reusable UI components using React Hooks, ensuring scalable architecture and maintainable code structure.',
      'Implemented responsive and performance-optimized design using HTML5, CSS3, and modern styling frameworks, ensuring seamless experience across devices.',
      'Integrated project showcase section with live demos and GitHub links, improving visibility of development work and user engagement.',
      'Optimized application performance using code splitting, lazy loading, and efficient rendering techniques for faster load times.',
      'Deployed the application on Netlify with CI/CD workflows, enabling continuous deployment and smooth updates.',
    ],
  },
  {
    title: 'Virtual Cryptography Lab',
    domain: 'Web Application',
    github: 'https://github.com/priyank1609/Virtual-Crypto-Lab',
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
    github: null,
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
    github: 'https://github.com/priyank1609/sellandbuycars-project',
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

                {/* GitHub Link */}
                {project.github && (
                  <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-300 text-sm font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                )}
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
