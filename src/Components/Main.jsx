import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Main() {
  return (
    <MainContainer>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </MainContainer>
  );
}

export default Main;
