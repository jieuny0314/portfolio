import "./App.css";
import Main from "./Components/Main";
import ProjectDetail from "./Components/ProjectDetail";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/project/:id" element={<ProjectDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
