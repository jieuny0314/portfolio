import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { SectionsContainer, Section } from "react-fullpage";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

function Main() {
  let options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: ["one", "two", "three", "four"], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    className: "SectionContainer", // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: "Section", // the section class name
    sectionPaddingTop: "0", // the section top padding
    sectionPaddingBottom: "0", // the section bottom padding
    verticalAlign: false, // align the content of each section vertical
  };
  return (
    // <SectionsContainer {...options}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainContainer>
        <Header />
        {/* <Section> */}
        <AboutMe />
        {/* </Section> */}
        {/* <Section> */}
        <Skills />
        {/* </Section> */}
        {/* <Section> */}
        <Projects />
        {/* </Section> */}
        {/* <Section> */}
        <Contact />
        <Footer />
        {/* </Section> */}
      </MainContainer>
    </motion.div>
    // </SectionsContainer>
  );
}

export default Main;
