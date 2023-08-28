import styled from "styled-components";
import Logo from "../Images/Logo_big.png";
import { useMediaQuery } from "react-responsive";

const AboutMeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;

  .logoImg {
    width: ${(props) => (props.$ismobile ? "150px" : "350px")};
  }
`;

function AboutMe() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <AboutMeContainer $ismobile={isMobile}>
      <img className="logoImg" src={Logo} alt="LogoImage" />
    </AboutMeContainer>
  );
}

export default AboutMe;
