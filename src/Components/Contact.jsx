import styled from "styled-components";
import Footer from "./Footer";

const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  scroll-snap-align: start;
  position: relative;
`;

function Contact() {
  return (
    <ContactContainer>
      <Footer />
    </ContactContainer>
  );
}

export default Contact;
