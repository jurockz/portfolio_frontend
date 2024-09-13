import "./App.css";
import Contact from "./components/Contact";
import Curriculum from "./components/Curriculum";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Introduction from "./components/Introduction";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Expertise />
      <Curriculum />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
