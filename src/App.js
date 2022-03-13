import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {" "}
      <Navbar />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
      <Toggle />
    </div>
  );
}

export default App;
