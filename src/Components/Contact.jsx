import styled from "styled-components";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setNaviValue } from "../redux/action";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

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

const ContentsContainer = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .link {
    width: 40%;
    border: 1px solid black;
  }
`;

const SendEmailContainer = styled.div`
  width: 60%;
  height: 100%;
  border: 1px solid black;

  .formTitle {
    height: 10%;
    margin: 0;
  }

  .emailForm {
    width: 100%;
    height: 90%;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
      margin: 0;
    }

    input,
    textarea {
      padding: 10px;
    }

    textarea {
      width: 70%;
      height: 100%;
    }

    .nameLabel,
    .emailLabel,
    .messageLabel {
      border: 1px solid black;
      width: 100%;

      input {
        width: 200px;
      }
    }

    .text {
      margin-bottom: 10px;
    }

    .submitBtn {
      width: 100px;
    }
  }
`;

function Contact() {
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
      <ContentsContainer>
        <div className="link">
          <div className="email">
            <h2>이메일</h2>
            <p>ccomo7071@gmail.com</p>
          </div>
          <div className="gitHub">
            <h2>깃허브</h2>
            <a href="https://github.com/jieuny0314">
              https://github.com/jieuny0314
            </a>
          </div>
          <div className="blog">
            <h2>블로그</h2>
            <a href="https://jieunny.tistory.com/">
              https://jieunny.tistory.com/
            </a>
          </div>
        </div>
        <SendEmailContainer>
          <h3 className="formTitle">이메일 보내기</h3>
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
      <div className="detective" ref={ref} />
      <Footer />
    </ContactContainer>
  );
}

export default Contact;
