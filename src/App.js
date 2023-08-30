import "./App.css";
import styled from "styled-components";
import Main from "./Components/Main";
import ProjectDetail from "./Components/ProjectDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/project/:id" element={<ProjectDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
