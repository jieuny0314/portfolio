import styled from "styled-components";

const ProjectCardContainer = styled.div`
  width: 22vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid green;
  padding: 20px;
  border-radius: 10px;

  &:hover {
  }

  h3 {
    margin: 0;
    padding: 0;
  }

  .title,
  .contents,
  .period,
  .stacks {
    width: 100%;
    /* border: 1px solid black; */
    display: flex;
  }

  .title {
    height: 15%;

    h2 {
      margin: 0;
    }
  }

  .contents {
    height: 25%;
    /* border: 1px solid black; */
    flex-direction: column;
    justify-content: center;
  }

  .period {
    height: 20%;
    /* border: 1px solid black; */
    flex-direction: column;
  }

  .stacks {
    height: 30%;
    /* border: 1px solid black; */
    align-items: center;
    flex-wrap: wrap;
    .stackBadge {
      margin-right: 10px;
    }
    .title {
      display: inline-block;
    }
  }
`;

function ProjectCard({ project }) {
  return (
    <div id="projects">
      <ProjectCardContainer>
        {/* <div className="title">
          <h2>{project.title}</h2>
        </div>
        <div className="contents">
          <h3>서비스 소개</h3>
          <p>{project.service}</p>
        </div>
        <div className="period">
          <h3>기간</h3>
          <p>{project.period}</p>
        </div>
        <div className="stacks">
          <h3 className="title">사용한 기술 스택</h3>
          {project.stacks.map((el, i) => {
            return (
              <img
                className="stackBadge"
                src={project.stacks[i]}
                key={i}
                alt="skillBadge"
              />
            );
          })}
        </div> */}
      </ProjectCardContainer>
    </div>
  );
}

export default ProjectCard;
