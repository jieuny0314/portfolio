import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectCardContainer = styled.div`
  width: 22vw;
  min-width: 300px;
  min-height: 500px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-image: url(${(props) => props.$backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50.5% 0%;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  z-index: 2;
  overflow-x: visible;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f6f6f6;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    z-index: 3;
  }

  &:hover .background {
    opacity: 0.95;
    transition: all 0.5s;
  }

  &:hover .contentsBox {
    opacity: 1;
    transition: all 0.5s;
  }

  &:hover .contentsBox .learnMore {
    right: 10px;
    transition: 0.5s all;
  }

  .contentsBox {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: relative;
    z-index: 5;
    padding: 10px;
    font-family: "Nanum Gothic", sans-serif;
    overflow-x: hidden;

    .learnMore {
      position: absolute;
      right: -60%;
      top: 5%;
      border: none;
      background-color: transparent;
      font-family: "Sriracha", cursive;
      font-size: 1.2rem;
      cursor: pointer;
      z-index: 20;
      &:active,
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }

  h3,
  p {
    margin: 0;
    margin-bottom: 5px;
    padding: 0;
  }

  .title,
  .contents,
  .period,
  .stacks {
    width: 100%;
    display: flex;
  }

  .title {
    height: 15%;
    position: relative;
    z-index: 10;

    h2 {
      margin: 0;
    }
  }

  .title::before {
    content: "";
    width: 40%;
    height: 22%;
    background-color: ${(props) =>
      props.$index === 0
        ? "#ffcd4a"
        : (props) =>
            props.$index === 1
              ? "#bfb0de"
              : (props) =>
                  props.$index === 2
                    ? "#f9a698"
                    : (props) => (props.$index === 3 ? "#d9d9d9" : "#fffff")};
    position: absolute;
    top: 10px;
    opacity: 0.8;
    z-index: -1;
  }

  .contents {
    height: 30%;
    flex-direction: column;
    justify-content: center;
  }

  .period {
    height: 20%;
    flex-direction: column;
  }

  .stacks {
    height: 35%;
    align-items: center;
    flex-wrap: wrap;
    .stackBadge {
      margin-right: 10px;
    }
    .stackTitle {
      display: inline-block;
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

function ProjectCard({ project, index, popUp, setPopUp }) {
  function onPopUp(index) {
    const copy = [...popUp];
    // copy[index] = true;
    copy[index] = !popUp[index];
    setPopUp(copy);
    console.log(index);
    console.log(popUp);
  }

  return (
    <>
      <ProjectCardContainer $backImg={project.backgroundImg} $index={index}>
        <div className="background" />
        <div className="contentsBox">
          <div className="title">
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
            <h3 className="stackTitle">사용한 기술 스택</h3>
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
          </div>
          <Link to={`/project/${index}`}>
            <button className="learnMore" onClick={() => onPopUp(index)}>
              Learn More
            </button>
          </Link>
        </div>
      </ProjectCardContainer>
    </>
  );
}

export default ProjectCard;
