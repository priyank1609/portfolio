import AboutMe from './AboutMe';
import SkillsTools from './SkillsTools';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

function Body() {
  return (
    <main className="flex-grow">
      <AboutMe />
      <SkillsTools />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}

export default Body;
