import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  touch-action: pan-x pan-y;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Main({ aboutMeRef, skillsRef, projectsRef, contactRef }) {
  const projectsScroll = useSelector((state) => state.projectsScroll);
  function scrollMove(element) {
    if (element.current) {
      element.current.scrollIntoView();
    }
  }
  useEffect(() => {
    if (projectsScroll) {
      scrollMove(projectsRef);
    }
  }, [aboutMeRef]);

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
        <Projects projectsRef={projectsRef} />
        <div ref={contactRef} className="contact" />
        <Contact />
      </motion.div>
    </MainContainer>
  );
}

export default Main;
