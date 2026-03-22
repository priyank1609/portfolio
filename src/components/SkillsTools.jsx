import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },
  {
    title: 'Frontend Frameworks',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    ],
  },
  {
    title: 'State Management',
    skills: [
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    ],
  },
  {
    title: 'Styling',
    skills: [
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
  },
  {
    title: 'Testing & API Tools',
    skills: [
      { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    ],
  },
  {
    title: 'DevOps & Build Tools',
    skills: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Confluence', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg' },
      { name: 'ESLint', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg' },
    ],
  },
];

function ScrollRow({ categories, direction = 'left' }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    let position = direction === 'left' ? 0 : -el.scrollWidth / 2;
    const speed = direction === 'left' ? 0.5 : -0.5;

    const animate = () => {
      position -= speed;
      if (direction === 'left' && Math.abs(position) >= el.scrollWidth / 2) {
        position = 0;
      }
      if (direction === 'right' && position >= 0) {
        position = -el.scrollWidth / 2;
      }
      el.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  const cards = categories.map((cat, i) => (
    <div
      key={`${cat.title}-${i}`}
      className="flex-shrink-0 w-72 md:w-80 p-6 rounded-2xl border border-slate-700/60 bg-slate-800/40 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
    >
      <h3 className="text-base font-semibold text-slate-300 text-center mb-5">
        {cat.title}
      </h3>
      <div className="flex flex-wrap justify-center gap-5">
        {cat.skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-700/50 group-hover:bg-slate-700 transition-colors duration-200">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8"
                loading="lazy"
              />
            </div>
            <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="overflow-hidden">
      <div ref={scrollRef} className="flex gap-6 w-max">
        {cards}
        {cards}
      </div>
    </div>
  );
}

function SkillsTools() {
  const row1 = skillCategories.slice(0, 4);
  const row2 = skillCategories.slice(4);

  return (
    <section id="skills" className="bg-slate-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
          Skills & Tools
        </h2>
        <p className="text-slate-400 text-center text-lg max-w-2xl mx-auto">
          Technologies and tools I work with to build modern, scalable web applications.
        </p>
      </div>

      <div className="space-y-6">
        <ScrollRow categories={row1} direction="left" />
        <ScrollRow categories={row2} direction="right" />
      </div>
    </section>
  );
}

export default SkillsTools;
