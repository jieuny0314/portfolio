import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}

export default App;
