import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header";
import { useMediaQuery } from "react-responsive";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
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
    <MainContainer>
      <Header />
    </MainContainer>
  );
}

export default App;
