import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "./Footer";
import { motion } from "framer-motion";

const MainContainer = styled.main`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

function Main() {
  return (
    <MainContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </MainContainer>
  );
}

export default Main;
