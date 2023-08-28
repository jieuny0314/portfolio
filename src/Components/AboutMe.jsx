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
    background-color: aqua;
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
    left: -50%;
    transition: all 1s ease;
  }

  /* .hover {
    left: -50%;
    transition: all 1s ease-in-out;
  } */
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
      </div>
    </AboutMeContainer>
  );
}

export default AboutMe;
