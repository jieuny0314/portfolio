import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const SkillsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 140px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  z-index: 100;
`;

const StackBox = styled.div`
  width: ${(props) => (props.$ismobile ? "160px" : "300px")};
  height: ${(props) => (props.$ismobile ? "160px" : "300px")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  background-color: white;

  @keyframes move {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .text {
    font-size: ${(props) => (props.$ismobile ? "1.1rem" : "1.5rem")};
    z-index: 10;
    font-family: "Sriracha", cursive;
    animation: move 2s infinite linear;
  }

  .text::before {
    background-color: #d9d9d9;
    position: absolute;
    z-index: -1;
    left: -3px;
    bottom: 10px;
    width: ${(props) => (props.$ismobile ? "90px" : "120px")};
    height: ${(props) => (props.$ismobile ? "5px" : "10px")};
    content: "";
  }

  .skill {
    width: ${(props) => (props.$ismobile ? "100px" : "180px")};
    height: ${(props) => (props.$ismobile ? "100px" : "180px")};
    position: absolute;
    top: 20%;
    left: 20%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -5;
    transition-property: left, top, z-index;
    transition-duration: 1s, 1s, 0.3s;

    img {
      width: ${(props) => (props.$ismobile ? "60px" : "110px")};
      cursor: pointer;
    }
  }

  .javaScript img {
    width: ${(props) => (props.$ismobile ? "60px" : "80px")};
  }

  .htmlMove {
    left: 100%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;

    &:hover {
      transform: rotateY(360deg);
    }
  }

  .cssMove {
    left: -63%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;

    &:hover {
      transform: rotateY(360deg);
    }
  }

  .javaScriptMove {
    top: 100%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;

    &:hover {
      transform: rotateY(360deg);
    }
  }

  .gitMove {
    top: -37%;
    left: 78%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;
    &:hover {
      transform: rotateY(360deg);
    }
  }

  .figmaMove {
    top: 77%;
    left: 77%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;

    &:hover {
      transform: rotateY(360deg);
    }
  }

  .reactMove {
    top: -63%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;

    &:hover {
      transform: rotateY(360deg);
    }
  }

  .reduxMove {
    top: -39%;
    left: -39%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;

    &:hover {
      transform: rotateY(360deg);
    }
  }

  .styledComponentMove {
    top: 78%;
    left: -38%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;

    &:hover {
      transform: rotateY(360deg);
    }
  }
`;

function Skills() {
  const [isClicked, setIsClicked] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  function clickedOn() {
    setIsClicked(!isClicked);
  }

  return (
    <div id="skills">
      <SkillsContainer $ismobile={isMobile}>
        <StackBox $ismobile={isMobile} $isclicked={isClicked}>
          <div onClick={clickedOn} className="text">
            Click Here!
          </div>
          <div className={isClicked ? "htmlMove skill html" : "skill html"}>
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566995514/noticon/jufppyr8htislboas4ve.png"
              alt="html"
            ></img>
          </div>
          <div className={isClicked ? "cssMove skill html" : "skill css"}>
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912109/noticon/puksfce6wca36hes1vom.png"
              alt="css"
            ></img>
          </div>
          <div
            className={
              isClicked ? "javaScriptMove skill html" : "skill javaScript"
            }
          >
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629279836/noticon/qopgwljhqw2ezqxnfjpe.png"
              alt="javaScript"
            ></img>
          </div>
          <div className={isClicked ? "gitMove skill html" : "skill git"}>
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566899596/noticon/slhw4nu8hybreryigopq.png"
              alt="git"
            ></img>
          </div>
          <div className={isClicked ? "figmaMove skill html" : "skill figma"}>
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608448196/noticon/a0fgk99dgqtyrwwmqsbt.png"
              alt="figma"
            ></img>
          </div>
          <div className={isClicked ? "reactMove skill html" : "skill react"}>
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png"
              alt="react"
            ></img>
          </div>
          <div className={isClicked ? "reduxMove skill html" : "skill redux"}>
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567749614/noticon/zgdaxpaif5ojeduonygb.png"
              alt="redux"
            ></img>
          </div>
          <div
            className={
              isClicked
                ? "styledComponentMove skill html"
                : "skill styledComponent"
            }
          >
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568851518/noticon/lwj3hr9v1yoheimtwc1w.png"
              alt="styledComponent"
            ></img>
          </div>
        </StackBox>
      </SkillsContainer>
    </div>
  );
}

export default Skills;
