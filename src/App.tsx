import './App.css';
import { Header } from './sections/Header/Header';
import { Contacts } from './sections/Contacts/Contacts';
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Skills } from './sections/Skills/Skills';
import { PetProjects } from './sections/Projects/PetProjects';
import { Education } from './sections/Education/Education';
import { Courses } from './sections/Courses/Courses';
import { Career } from './sections/Career/Career';

function App() {
  return (
    <>
      <Header />
      <main>
        <Contacts />
        <AboutMe />
        <Skills />
        <br />
        <br />
        <Career />
        <br />
        <br />
        <PetProjects />
        <br />
        <br />
        <Education />
        <br />
        <Courses />
      </main>
    </>
  );
}

export default App;
