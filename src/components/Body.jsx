import AboutMe from './AboutMe';
import SkillsTools from './SkillsTools';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';

function Body() {
  return (
    <main className="flex-grow">
      <AboutMe />
      <SkillsTools />
      <Experience />
      <Projects />
      <Education />
    </main>
  );
}

export default Body;
