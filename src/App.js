import "./App.css";
import Main from "./Pages/Main";
import ProjectDetail from "./Pages/ProjectDetail";
import { useRef } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              aboutMeRef={aboutMeRef}
              skillsRef={skillsRef}
              projectsRef={projectsRef}
              contactRef={contactRef}
            />
          }
        ></Route>
        <Route
          path="/project/:id"
          element={<ProjectDetail projectsRef={projectsRef} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
