import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { setNaviValue } from "../redux/action";

const HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => (props.$ismobile ? "80px" : "100px")};
  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 50;
  font-family: "Sriracha", cursive;

  .navi {
    height: ${(props) => (props.$ismobile ? "80px" : "100px")};
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    font-size: ${(props) => (props.$ismobile ? "1rem" : "1.7rem")};
    margin: ${(props) => (props.$ismobile ? "0 15px" : "0 100px")};

    .lineBox {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      background-color: ${(props) =>
        props.$naviValue === 0
          ? "#d5b4b4"
          : (props) =>
              props.$naviValue === 1
                ? "#dcd6f7"
                : (props) =>
                    props.$naviValue === 2
                      ? "#a4926d"
                      : (props) => (props.$naviValue === 3 ? "#9eb9c5" : "")};
    }
  }
`;

const AboutMe = styled.li`
  cursor: pointer;
  position: relative;
  .lineBox {
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
    width: ${(props) =>
      props.$naviValue === 2 ? (props.$ismobile ? "65px" : "150px") : "0"};
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
    width: ${(props) =>
      props.$naviValue === 3 ? (props.$ismobile ? "65px" : "140px") : "0"};
  }

  &:hover .lineBox {
    width: ${(props) => (props.$ismobile ? "65px" : "140px")};
    transition: all 0.5s;
  }
`;

function Header({ aboutMeRef, skillsRef, projectsRef, contactRef }) {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const naviValue = useSelector((state) => state.naviValue);
  const dispatch = useDispatch();

  function setAboutMe() {
    dispatch(setNaviValue(0));
  }

  function setSkills() {
    dispatch(setNaviValue(1));
  }

  function setProjects() {
    dispatch(setNaviValue(2));
  }

  function setContact() {
    dispatch(setNaviValue(3));
  }

  function scrollMove(element) {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <HeaderContainer $ismobile={isMobile} $naviValue={naviValue}>
      <nav className="navi">
        <AboutMe
          onClick={() => {
            setAboutMe();
            scrollMove(aboutMeRef);
          }}
          $naviValue={naviValue}
          $ismobile={isMobile}
        >
          About Me
          <div className="lineBox"></div>
        </AboutMe>
        <Skills
          onClick={() => {
            setSkills();
            scrollMove(skillsRef);
          }}
          $naviValue={naviValue}
          $ismobile={isMobile}
        >
          Skills
          <div className="lineBox"></div>
        </Skills>

        <Projects
          onClick={() => {
            setProjects();
            scrollMove(projectsRef);
          }}
          $naviValue={naviValue}
          $ismobile={isMobile}
        >
          Projects
          <div className="lineBox"></div>
        </Projects>

        <Contact
          onClick={() => {
            setContact();
            scrollMove(contactRef);
          }}
          $naviValue={naviValue}
          $ismobile={isMobile}
        >
          Contact
          <div className="lineBox"></div>
        </Contact>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
