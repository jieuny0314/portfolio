import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setNaviValue } from "../redux/action";

const ProjectsContainer = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  scroll-snap-align: start;
  background-color: #fffafa;

  @keyframes right {
    0% {
      transform: translateX(10px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(10px);
    }
  }

  @keyframes left {
    0% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-10px);
    }
  }

  .arrow {
    color: #7d7d7d;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }

  .next {
    animation: right 2s infinite linear;
  }

  .prev {
    animation: left 2s infinite linear;
  }

  .notice {
    width: ${(props) => (props.$ismobile ? "60%" : "57%")};
    font-family: "Sriracha", cursive;
    position: absolute;
    top: ${(props) => (props.$ismobile ? "21%" : "13%")};
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: ${(props) => (props.$ismobile ? "0.8rem" : "1rem")};
  }
`;

const ProjectSliderContainer = styled.div`
  width: ${(props) => (props.$ismobile ? "100%" : "60%")};
  height: ${(props) => (props.$ismobile ? "70%" : "85%")};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  margin: 0 10px;
  border-radius: 10px;
  position: relative;
  min-width: 240px;
`;

function Projects() {
  const [popUp, setPopUp] = useState([false, false, false, false]);
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const dispatch = useDispatch();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      dispatch(setNaviValue(2));
    }
  }, [inView]);

  const projects = [
    {
      id: 1,
      title: "Perpett",
      service:
        "서울의 애견유치원을 모아서 보여주고, 각 유치원 커뮤니티를 사용할 수 있는 서비스",
      period: "2023.04 - 2023.05",
      stacks: [
        "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black",
        "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/tailwind%20css-06B6D4?style=for-the-badge&logo=tailwind%20css&logoColor=black",
        "https://img.shields.io/badge/redux%20toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=black",
      ],
      backgroundImg: `${process.env.PUBLIC_URL}/Perpett.png`,
    },
    {
      id: 2,
      title: "Usum",
      service: "연인 간 데이트 비용을 효율적으로 관리해주는 금융 비서 서비스",
      period: "2021.03 - 2021.04",
      stacks: [
        "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",
        "https://img.shields.io/badge/chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=black",
      ],
      backgroundImg: `${process.env.PUBLIC_URL}/Usum.png`,
    },
    {
      id: 3,
      title: "TodoList",
      service: "캘린더 및 메모 기능을 포함한 투 두 리스트 서비스",
      period: "2023.03 - 2023.04",
      stacks: [
        "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black",
        "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black",
        "https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled%20components&logoColor=black",
      ],
      backgroundImg: `${process.env.PUBLIC_URL}/TodoList.png`,
    },
    {
      id: 4,
      title: "Portfolio",
      service: "프로젝트 및 프로필 소개를 위한 포트폴리오",
      period: "2023.08 - 2023.09",
      stacks: [
        "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black",
        "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled%20components&logoColor=black",
        "https://img.shields.io/badge/redux%20toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=black",
      ],
      backgroundImg: `${process.env.PUBLIC_URL}/Portfolio.png`,
    },
  ];

  const [currentPr, setCurrentPr] = useState(0);

  function next() {
    setCurrentPr((currentPr + 1) % 4);
  }

  function prev() {
    if (currentPr > 0) {
      setCurrentPr((currentPr - 1) % 4);
    }
  }

  return (
    <ProjectsContainer $ismobile={isMobile}>
      <p className="notice">
        {!isMobile
          ? "프로젝트에 마우스를 올려보세요."
          : "프로젝트를 클릭해보세요."}
      </p>
      <div className="detective" ref={ref} />
      <FaAngleLeft size="36" className="arrow prev" onClick={prev} />
      <ProjectSliderContainer $ismobile={isMobile}>
        {projects.map((el, i) => {
          return (
            <ProjectCard
              project={projects[i]}
              key={el.id}
              index={i}
              popUp={popUp}
              setPopUp={setPopUp}
              currentPr={currentPr}
            />
          );
        })}
      </ProjectSliderContainer>
      <FaAngleRight size="36" className="arrow next" onClick={next} />
    </ProjectsContainer>
  );
}

export default Projects;
