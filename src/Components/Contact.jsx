import styled from "styled-components";

const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
`;

function Contact() {
  return (
    <div id="contact">
      <ContactContainer></ContactContainer>
    </div>
  );
}

export default Contact;
