import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Tstory from "../Images/tstory_logo.png";
import { AiFillGithub } from "react-icons/ai";

const FooterContainer = styled.footer`
  width: ${(props) => (props.$ismobile ? "100%" : "70%")};
  margin: 0;
  display: flex;
  align-items: ${(props) => (props.$ismobile ? "end" : "center")};
  justify-content: space-between;
  color: white;
  font-size: ${(props) => (props.$ismobile ? "0.7rem" : "1rem")};
  padding: ${(props) => (props.$ismobile ? "10px" : "10px 0")};
  border-top: ${(props) => (props.$ismobile ? "" : "1px solid #ffffff;")};

  @font-face {
    font-family: "SUITE-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2")
      format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  font-family: "SUITE-Regular";

  .link {
    display: flex;
    align-items: center;

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
