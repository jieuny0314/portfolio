import styled from "styled-components";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setNaviValue } from "../redux/action";
import { useEffect, useRef } from "react";
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
    font-size: 1rem;
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
      height: 80%;
      resize: none;
    }

    .nameLabel,
    .emailLabel {
      width: 100%;
      height: 20%;
      input {
        width: 200px;
      }
    }

    .messageLabel {
      width: 100%;
      height: 60%;
    }

    .text {
      margin-bottom: 10px;
      font-size: 1rem;
    }

    .submitBtn {
      width: ${(props) => (props.$ismobile ? "80px" : "120px")};
      border-radius: 0;
      background-color: white;
      cursor: pointer;
      border-bottom: 2px solid #d9d9d9;

      &:hover {
        background-color: #d9d9d9;
        color: white;
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

  return (
    <ContactContainer>
      <ContentsContainer $ismobile={isMobile}>
        {/* <div className="link">
          <div className="inner">
            <div className="email">
              <h2 className="linkTitle">이메일</h2>
              <p>ccomo7071@gmail.com</p>
            </div>
            <div className="github">
              <h2 className="linkTitle">깃허브</h2>
              <a href="https://github.com/jieuny0314">
                https://github.com/jieuny0314
              </a>
            </div>
            <div className="blog">
              <h2 className="linkTitle">블로그</h2>
              <a href="https://jieunny.tistory.com/">
                https://jieunny.tistory.com/
              </a>
            </div>
          </div>
        </div> */}
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
              />
            </label>
            <label className="emailLabel">
              <h3 className="text">Email</h3>
              <input
                type="email"
                name="user_email"
                placeholder="이메일을 입력해주세요."
                className="emailInput"
              />
            </label>
            <label className="messageLabel">
              <h3 className="text">Message</h3>
              <textarea
                name="message"
                placeholder="내용을 입력해주세요."
                className="messageInput"
              />
            </label>
            <input type="submit" value="Send" className="submitBtn" />
          </form>
        </SendEmailContainer>
      </ContentsContainer>
      <Footer />
    </ContactContainer>
  );
}

export default Contact;
