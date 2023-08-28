import styled from "styled-components";

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
`;

function Projects() {
  return (
    <div id="projects">
      <ProjectsContainer></ProjectsContainer>
    </div>
  );
}

export default Projects;
