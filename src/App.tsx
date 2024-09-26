import "./App.css";
import Contact from "./components/Contact";
import Curriculum from "./components/Curriculum";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Introduction from "./components/Introduction";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Expertise />
      <Curriculum />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
