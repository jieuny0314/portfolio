import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Tstory from "../Images/tstory_logo.png";
import { AiFillGithub } from "react-icons/ai";

const FooterContainer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: ${(props) => (props.$ismobile ? "end" : "center")};
  justify-content: space-between;
  padding: 10px;
  color: white;
  font-size: ${(props) => (props.$ismobile ? "0.7rem" : "1rem")};

  .link {
    display: flex;
    align-items: center;
    margin-left: ${(props) => (props.$ismobile ? "0" : "10px")};

    .logo {
      width: ${(props) => (props.$ismobile ? "30px" : "35px")};
      height: ${(props) => (props.$ismobile ? "30px" : "35px")};
      margin-right: 5px;
      cursor: pointer;
    }

    .github {
      width: ${(props) => (props.$ismobile ? "35px" : "40px")};
      height: ${(props) => (props.$ismobile ? "35px" : "40px")};
    }
  }

  p {
    margin: 0;
    padding: 0;
  }

  .copyright {
    margin-bottom: ${(props) => (props.$ismobile ? "5px" : "0")};
  }
`;

function Footer() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <FooterContainer $ismobile={isMobile}>
      <div className="link">
        <a href="https://jieunny.tistory.com/">
          <img src={Tstory} alt="TstoryLogo" className="logo" />
        </a>
        <a href="https://github.com/jieuny0314">
          <AiFillGithub color="white" className="logo github" />
        </a>
      </div>
      <p className="copyright">Copyright 2023. Jieun. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
