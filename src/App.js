import "./App.css";
import styled from "styled-components";
import Main from "./Components/Main";
import ProjectDetail from "./Components/ProjectDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const MainContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/project:id" element={<ProjectDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
