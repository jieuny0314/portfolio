import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 2%;
  color: #c9c9c9;
  font-size: ${(props) => (props.$ismobile ? "0.7rem" : "1rem")};
`;

function Footer() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <FooterContainer $ismobile={isMobile}>
      <p>Copyright 2023. Jieun. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
