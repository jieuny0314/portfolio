import styled from "styled-components";
import Logo from "../Images/Logo_big.png";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const AboutMeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;

  .logoImgContainer {
    width: ${(props) => (props.$ismobile ? "150px" : "350px")};
    position: relative;
    height: 125px;
  }

  .logoImg {
    width: ${(props) => (props.$ismobile ? "150px" : "350px")};
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 1s;
  }

  .logoImgContainer:hover .logoImg {
    left: ${(props) => (props.$ismobile ? "0" : "-70%")};
    top: ${(props) => (props.$ismobile ? "-120%" : "0")};
    transition: all 1s ease;
  }

  .detailContainer {
    width: ${(props) => (props.$ismobile ? "300px" : "690px")};
    border: 1px solid black;
    position: absolute;
    transition: all 1s;
    height: ${(props) => (props.$ismobile ? "60px" : "125px")};
    overflow: hidden;
    top: 0;
    left: ${(props) => (props.$ismobile ? "-50%" : "0")};
    padding: 20px;
    font-family: "Nanum Gothic", sans-serif;
    /* opacity: 0; */

    .title {
      font-size: ${(props) => (props.$ismobile ? "1.5rem" : "2rem")};
    }

    .contents {
      font-size: ${(props) => (props.$ismobile ? "1rem" : "1.3rem")};
    }

    .blogLink {
      color: black;
      text-decoration-line: none;
      font-family: "Sriracha", cursive;
      font-size: ${(props) => (props.$ismobile ? "1.2rem" : "1.5rem")};
    }
  }

  .logoImgContainer:hover .detailContainer {
    left: ${(props) => (props.$ismobile ? "-50%" : "55%")};
    top: ${(props) => (props.$ismobile ? "-100px" : "-150px")};
    height: ${(props) => (props.$ismobile ? "400px" : "400px")};
    opacity: 1;
    transition: all 1s;
  }
`;

function AboutMe() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <AboutMeContainer $ismobile={isMobile}>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="logoImgContainer"
      >
        <img className="logoImg" src={Logo} alt="LogoImage" />
        <div className="detailContainer" ismobile={isMobile}>
          <div className="outerBox">
            <h2 className="title">기록하는 개발자 김지은</h2>
            <p className="contents">
              알아가는 걸 기록하고,<br></br>프로젝트로 구현하고,<br></br>
              이후 회고를 통해 내 것으로 만드는,
            </p>
            <p className="contents">
              같은 걸 두 번 물어보는 게 아닌 기록한 걸 읽고 적용할 수 있는
              개발자입니다.<br></br> 개인 학습 및 회고 블로그를 운영하고 있으며
              약 330개의 포스팅을 남겼습니다.<br></br>
            </p>
            <p className="contents"> 제 기록이 궁금하신가요?</p>
            <a className="blogLink" href="https://jieunny.tistory.com/">
              Click Me!
            </a>
          </div>
        </div>
      </div>
    </AboutMeContainer>
  );
}

export default AboutMe;
