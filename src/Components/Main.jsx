import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }

  .test {
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
  }

  .test2 {
    width: 100%;
    height: 50vh;
    position: relative;
    top: 100vh;
    border: 1px solid black;
  }
`;

function Main() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {}, [aboutMeRef]);

  return (
    <MainContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header
          aboutMeRef={aboutMeRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <div ref={aboutMeRef} className="aboutMe" />
        <AboutMe />
        <div ref={skillsRef} className="skills" />
        <Skills />
        <div ref={projectsRef} className="projects" />
        <Projects />
        <div ref={contactRef} className="contact" />
        <Contact />
      </motion.div>
    </MainContainer>
  );
}

export default Main;
