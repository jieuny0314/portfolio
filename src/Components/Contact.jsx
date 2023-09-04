import styled from "styled-components";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setNaviValue } from "../redux/action";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";

const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  position: relative;
  overflow-y: scroll;
  background-color: #daeaf1;
`;

const ContentsContainer = styled.div`
  width: ${(props) => (props.$ismobile ? "100%" : "80%")};
  height: ${(props) => (props.$ismobile ? "90%" : "80%")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};
`;

const SendEmailContainer = styled.div`
  width: ${(props) => (props.$ismobile ? "100%" : "70%")};
  height: 100%;
  padding: ${(props) => (props.$ismobile ? "20px" : "0")};

  .formTitle {
    height: 10%;
    margin: 0;
    font-size: ${(props) => (props.$ismobile ? "1.2rem" : "1.5rem")};
  }

  .emailForm {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-around;

    h3 {
      margin: 0;
    }

    input,
    textarea {
      padding: 15px;
      border: none;
      background-color: aliceblue;
      border-radius: 10px;
      &:active,
      &:focus {
        outline: none;
      }
    }

    textarea {
      width: 100%;
      height: ${(props) => (props.$ismobile ? "145px" : "85%")};
      resize: none;
      margin-top: ${(props) => (props.$ismobile ? "" : "10px")};
    }

    .nameLabel,
    .emailLabel {
      width: 100%;
      height: 15%;
      margin-bottom: 15px;
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      input {
        width: 200px;
      }

      .warning {
        position: absolute;
        left: 205px;
        bottom: 0;
        color: #e97777;
        font-size: ${(props) => (props.$ismobile ? "0.7rem" : "1rem")};
      }
    }

    .messageLabel {
      width: 100%;
      height: ${(props) => (props.$ismobile ? "40%" : "60%")};
      position: relative;
      .warning {
        position: absolute;
        left: 0;
        color: #e97777;
        font-size: ${(props) => (props.$ismobile ? "0.7rem" : "1rem")};
      }
    }

    .text {
      font-size: ${(props) => (props.$ismobile ? "0.9rem" : "1.2rem")};
      margin-bottom: ${(props) => (props.$ismobile ? "10px" : "0")};
    }

    .submitBtn {
      width: ${(props) => (props.$ismobile ? "90px" : "160px")};
      background-color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border: 2px solid white;
      padding: 10px 0;
      background-color: transparent;
      font-size: ${(props) => (props.$ismobile ? "0.8rem" : "1.2rem")};
      border-radius: 10px;

      &:hover {
        border: 2px solid #8fbdd3;
      }
    }
  }
`;

function Contact() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const dispatch = useDispatch();
  const [ref, inView] = useInView();
  const form = useRef();
  const [emailCheck, setEmailCheck] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [messageCheck, setMessageCheck] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "Portfolio_account",
        "Portfolio_template",
        form.current,
        "jV3WPUcUBWCycB7V4"
      )
      .then(
        (result) => {
          alert("메일이 전송되었습니다.");
        },
        (error) => {
          alert("메일 전송을 실패했습니다.");
        }
      );
  }

  useEffect(() => {
    if (inView) {
      dispatch(setNaviValue(3));
    }
  }, [inView]);

  function nameChange(e) {
    setNameValue(e.target.value);
  }

  function emailChange(e) {
    setEmailValue(e.target.value);
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setEmailCheck(true);
    } else if (!e.target.value.includes("@")) {
      setEmailCheck(false);
    }
  }

  function messageChange(e) {
    setMessageValue(e.target.value);
    if (e.target.value.length >= 10) {
      setMessageCheck(true);
    } else {
      setMessageCheck(false);
    }
  }

  function onSubmit(e) {
    if (nameValue.length !== 0 && emailCheck && messageCheck) {
      setNameValue("");
      setEmailValue("");
      setMessageValue("");
    } else {
      e.preventDefault();
      alert("모든 내용을 작성해주세요.");
    }
  }

  return (
    <ContactContainer>
      <ContentsContainer $ismobile={isMobile}>
        <div className="detective" ref={ref} />
        <SendEmailContainer $ismobile={isMobile}>
          <h3 className="formTitle">궁금한 점은 이메일로 연락해주세요.</h3>
          <form className="emailForm" ref={form} onSubmit={sendEmail}>
            <label className="nameLabel">
              <h3 className="text">Name</h3>
              <input
                type="text"
                name="user_name"
                placeholder="이름을 입력해주세요."
                className="nameInput"
                onChange={(e) => nameChange(e)}
                autoComplete="off"
              />
            </label>
            <label className="emailLabel">
              <h3 className="text">Email</h3>
              <input
                type="text"
                name="user_email"
                placeholder="이메일을 입력해주세요."
                className="emailInput"
                onChange={(e) => emailChange(e)}
                autoComplete="off"
              />
              {!emailCheck && emailValue.length !== 0 ? (
                <div className="warning">이메일 형식을 지켜주세요.</div>
              ) : (
                ""
              )}
            </label>
            <label className="messageLabel">
              <h3 className="text">Message</h3>
              <textarea
                name="message"
                placeholder="내용을 입력해주세요."
                className="messageInput"
                onChange={(e) => messageChange(e)}
              />
              {!messageCheck && messageValue.length !== 0 ? (
                <div className="warning">10자 이상 입력해주세요.</div>
              ) : (
                ""
              )}
            </label>
            <button
              type="submit"
              value="Send"
              className="submitBtn"
              onClick={(e) => onSubmit(e)}
            >
              Send
            </button>
          </form>
        </SendEmailContainer>
      </ContentsContainer>
      <Footer />
    </ContactContainer>
  );
}

export default Contact;
