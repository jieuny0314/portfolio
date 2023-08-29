import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
`;

function Projects() {
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
      backgroundImg: "/Perpett.png",
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
      backgroundImg: "/Usum.png",
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
      backgroundImg: "/TodoList.png",
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
      ],
      backgroundImg: "/Portfolio.png",
    },
  ];

  return (
    <div id="projects">
      <ProjectsContainer>
        {projects.map((el, i) => {
          return <ProjectCard project={projects[i]} key={el.id} />;
        })}
      </ProjectsContainer>
    </div>
  );
}

export default Projects;
