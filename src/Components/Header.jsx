import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const HeaderContainer = styled.div`
  width: 100%;
  min-width: 375px;
  border: 1px solid red;

  .navi {
    border: 1px solid blue;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    font-size: ${(props) => (props.$ismobile ? "1rem" : "1.5rem")};
    margin: ${(props) => (props.$ismobile ? "24px 0" : "24px 100px")};
  }
`;

function Header() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <HeaderContainer $ismobile={isMobile}>
      <ul className="navi">
        <li className="li">About Me</li>
        <li className="li">Skills</li>
        <li className="li">Projects</li>
        <li className="li">Contact</li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
