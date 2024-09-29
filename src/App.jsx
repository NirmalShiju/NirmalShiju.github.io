import styles from './App.module.css';
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
