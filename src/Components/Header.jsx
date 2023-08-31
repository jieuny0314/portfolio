import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Link } from "react-scroll";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  min-width: 375px;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 50;
  /* box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px; */

  .navi {
    height: 100px;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    font-size: ${(props) => (props.$ismobile ? "1rem" : "1.7rem")};
    margin: ${(props) => (props.$ismobile ? "0 15px" : "0 100px")};
  }
`;

const AboutMe = styled.li`
  cursor: pointer;
  position: relative;
  .lineBox {
    position: absolute;
    bottom: -10px;
    left: ${(props) => (props.$ismobile ? "-1px" : "-13px")};
    height: 5px;
    background-color: #d9d9d9;
    width: ${(props) =>
      props.$naviValue === 0 ? (props.$ismobile ? "75px" : "150px") : "0"};
  }

  &:hover .lineBox {
    width: ${(props) => (props.$ismobile ? "75px" : "150px")};
    transition: all 0.5s;
  }
`;

const Skills = styled.li`
  cursor: pointer;
  position: relative;

  .lineBox {
    position: absolute;
    bottom: -10px;
    left: ${(props) => (props.$ismobile ? "-3px" : "-24px")};
    height: 5px;
    background-color: #d9d9d9;
    width: ${(props) =>
      props.$naviValue === 1 ? (props.$ismobile ? "45px" : "110px") : "0"};
  }

  &:hover .lineBox {
    width: ${(props) => (props.$ismobile ? "45px" : "110px")};
    transition: all 0.5s;
  }
`;

const Projects = styled.li`
  position: relative;
  cursor: pointer;

  .lineBox {
    position: absolute;
    bottom: -10px;
    left: ${(props) => (props.$ismobile ? "-1px" : "-25px")};
    width: ${(props) =>
      props.$naviValue === 2 ? (props.$ismobile ? "65px" : "150px") : "0"};
    height: 5px;
    background-color: #d9d9d9;
  }

  &:hover .lineBox {
    width: ${(props) => (props.$ismobile ? "65px" : "150px")};
    transition: all 0.5s;
  }
`;

const Contact = styled.li`
  position: relative;
  cursor: pointer;

  .lineBox {
    position: absolute;
    bottom: -10px;
    left: ${(props) => (props.$ismobile ? "-1px" : "-24px")};
    height: 5px;
    background-color: #d9d9d9;
    width: ${(props) =>
      props.$naviValue === 3 ? (props.$ismobile ? "65px" : "140px") : "0"};
  }

  &:hover .lineBox {
    width: ${(props) => (props.$ismobile ? "65px" : "140px")};
    transition: all 0.5s;
  }
`;

function Header() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [naviValue, setNaviValue] = useState(0);

  function setAboutMe() {
    setNaviValue(0);
  }

  function setSkills() {
    setNaviValue(1);
  }

  function setProjects() {
    setNaviValue(2);
  }

  function setContact() {
    setNaviValue(3);
  }

  return (
    <HeaderContainer $ismobile={isMobile}>
      <nav className="navi">
        <Link to="aboutMe" spy={true} smooth={true}>
          <AboutMe
            onClick={setAboutMe}
            $naviValue={naviValue}
            $ismobile={isMobile}
          >
            About Me
            <div className="lineBox"></div>
          </AboutMe>
        </Link>
        <Link to="skills" spy={true} smooth={true}>
          <Skills
            onClick={setSkills}
            $naviValue={naviValue}
            $ismobile={isMobile}
          >
            Skills
            <div className="lineBox"></div>
          </Skills>
        </Link>
        <Link to="projects" spy={true} smooth={true}>
          <Projects
            onClick={setProjects}
            $naviValue={naviValue}
            $ismobile={isMobile}
          >
            Projects
            <div className="lineBox"></div>
          </Projects>
        </Link>
        <Link to="contact" spy={true} smooth={true}>
          <Contact
            onClick={setContact}
            $naviValue={naviValue}
            $ismobile={isMobile}
          >
            Contact
            <div className="lineBox"></div>
          </Contact>
        </Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
