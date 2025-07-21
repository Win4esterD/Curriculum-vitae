import './App.css';
import { Header } from './sections/Header/Header';
import { Contacts } from './sections/Contacts/Contacts';
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Skills } from './sections/Skills/Skills';
import { Projects } from './sections/Projects/Projects';

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
        <Projects />
      </main>
    </>
  );
}

export default App;
