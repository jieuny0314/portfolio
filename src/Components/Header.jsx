import styled from "styled-components";

const HeaderContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  border: 1px solid red;

  .navi {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    font-size: 1.5rem;
  }
`;

function Header() {
  return (
    <HeaderContainer>
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
