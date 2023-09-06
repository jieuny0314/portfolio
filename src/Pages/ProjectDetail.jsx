import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { LiaHandPaperSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  AiOutlinePaperClip,
  AiOutlineBulb,
  AiOutlineFunction,
} from "react-icons/ai";
import { setNaviValue } from "../redux/action";
import { useDispatch } from "react-redux";

const Background = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

const ProjectDetailContainer = styled.section`
  width: ${(props) => (props.$ismobile ? "" : "45%")};
  padding: ${(props) => (props.$ismobile ? "30px" : "10px")};
  overflow-x: hidden;
  min-width: ${(props) => (props.$ismobile ? "350px" : "600px")};
  padding-top: 90px;

  .fixed {
    position: fixed;
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
  }

  .titleBox {
    background-color: white;
    padding: 0 15px;
    width: ${(props) => (props.$ismobile ? "100%" : "45%")};
    min-width: ${(props) => (props.$ismobile ? "350px" : "600px")};
    border-bottom: 0.5px solid #d9d9d9;
    display: flex;
    align-items: end;
    justify-content: space-between;
    box-shadow: 0 4px 4px -5px #d9d9d9;

    .title {
      font-size: 2rem;
      font-family: "Sriracha", cursive;
      margin: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0;
    margin-bottom: 10px;
    margin-left: 30px;
    line-height: 1.5rem;
    padding: 0 10px;
  }

  .divisionLine {
    width: 100%;
    height: 0.5px;
    background-color: #d9d9d9;
  }

  .divisionLine,
  .previewBox,
  .roleBox,
  .functionBox,
  .reviewBox,
  .linkBox {
    width: 100%;
    margin-bottom: 50px;
    min-width: ${(props) => (props.$ismobile ? "" : "600px")};
  }

  .flex {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .previewBox {
    width: 100%;
    height: ${(props) => (props.$ismobile ? "175px" : "350px")};
    display: flex;
    align-items: center;
    justify-content: center;

    .arrow {
      color: #7d7d7d;
      cursor: pointer;

      &:hover {
        color: black;
      }
    }

    .imgBox {
      width: 85%;
      height: 100%;
      margin: 0 10px;
      display: flex;
      overflow-x: hidden;
    }
  }
  .roleTitle,
  .functionTitle,
  .reviewTitle,
  .linkTitle {
    margin: 0;
    margin-left: 10px;
    padding: 0;
  }

  .role {
    &:first-child {
      list-style: none;
      font-weight: bold;
      margin-left: 0;
    }
  }

  .linkBox {
    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
    }
    .linkList {
      margin: 0;
      margin-left: 10px;
      margin-right: 20px;
      padding: 0;
    }

    .linkKind {
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
    }

    .linkA {
      color: black;
      text-decoration: none;
      border-bottom: 1px solid black;
      padding-bottom: 1px;

      &:hover {
        font-weight: bold;
      }
    }
  }
`;

const PreviewImg = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  right: ${(props) =>
    props.$curimg === 0
      ? "0%"
      : props.$curimg === 1
      ? "100%"
      : props.$curimg === 2
      ? "200%"
      : props.$curimg === 3
      ? "300%"
      : ""};
  transition: all 1s ease-in-out;
`;

const MainBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  margin-bottom: 10px;
  padding-right: 5px;
  color: #8f8f8f;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

function ProjectDetail({ projectsRef }) {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const dispatch = useDispatch();
  const [currentImg, setCurrentImg] = useState(0);

  function next() {
    setCurrentImg((currentImg + 1) % 4);
  }

  function prev() {
    if (currentImg > 0) {
      setCurrentImg((currentImg - 1) % 4);
    }
  }

  function goMain() {
    dispatch(setNaviValue(2));
    setTimeout(() => {
      projectsRef.current.scrollIntoView();
    }, 100);
  }

  const projectsDetail = [
    {
      title: "Perpett",
      preview: [
        `${process.env.PUBLIC_URL}/Perpett1.png`,
        `${process.env.PUBLIC_URL}/Perpett2.png`,
        `${process.env.PUBLIC_URL}/Perpett3.png`,
        `${process.env.PUBLIC_URL}/Perpett4.png`,
      ],
      role: [
        "[ 팀장, 프론트엔드 ]",
        "EsLint 와 Prettier 설정",
        "Redux-toolkit 설정 및 상태 관리",
        "메인 페이지, 지도페이지, 헤더, 댓글 CRUD, 후기 CRUD",
      ],
      function: [
        "useMediaQuery와 Grid를 사용해서 반응형으로 구현했습니다.",
        "react-intersection-observer 라이브러리를 통해 마지막 요소를 탐지하는 방법으로 무한스크롤을 구현했습니다.",
        "구글 맵 플랫폼에서 API 키를 발급받았고, react-google-maps/api 라이브러리를 사용해 React에서 지도 컴포넌트를 불러왔습니다.",
        "axios를 통한 HTTP 비동기 통신으로 기본적인 CRUD 기능을 구현했고, 후기에 이미지를 업로드 하기 위해서 formdata 형식을 사용했습니다.",
      ],
      review: [
        "지도페이지에서 상태 관련 오류를 겪었고, Redux를 사용하면서 해결했습니다. 이 경험을 통해 전역 상태관리의 대한 중요성을 느꼈습니다.",
        "처음으로 Tailwind CSS를 사용하면서 styled-component와 비교해서 각 라이브러리의 장단점을 느꼈습니다.",
        "메인 페이지의 이미지 용량이 너무 커서 로딩이 늦어진다는 걸 깨달았고, 이미지 최적화의 중요성을 깨달았습니다.",
        "기획부터 개발까지 경험하며 전체적인 팀 프로젝트 과정에 대해 배우고, GIthub, Figma와 같은 협업 툴에 익숙해졌습니다.",
      ],
      link: [
        [
          "배포링크",
          "http://testqjzlt.s3-website.ap-northeast-2.amazonaws.com/",
        ],
        ["깃허브", "https://github.com/codestates-seb/seb43_main_030"],
        [
          "피그마",
          "https://www.figma.com/file/PFOgIanoWAdQqqgtEtRWUM/반려동물-유치원-기획-및-디자인?type=design&node-id=0-1&mode=design",
        ],
      ],
    },
    {
      title: "Usum",
      preview: [
        `${process.env.PUBLIC_URL}/Usum1.png`,
        `${process.env.PUBLIC_URL}/Usum2.png`,
        `${process.env.PUBLIC_URL}/Usum3.png`,
        `${process.env.PUBLIC_URL}/Usum4.png`,
      ],
      role: [
        "[ 서비스 기획, 디자인 & UI ]",
        "각 페이지 디자인 설계 및 UI 구현",
      ],
      function: [
        "디자인은 편한가계부, 데이트팝 어플 등을 참고해서 한눈에 보기 편한 UI로 구현하였습니다.",
        "Chart.js를 통한 데이터 시각화로 비율을 보기 쉽해 구현했습니다.",
        "animate를 활용해서 움직이는 퍼센트바를 구현했습니다.",
        "각 페이지는 기본적인 HTML, CSS로 구현했습니다.",
      ],
      review: [
        "당시 Github 같은 협업 툴을 활용하지 못해서 카카오톡으로 의견을 나누고 소스 코드를 공유하였습니다. 이로 인해 에러 발생 시 코드를 수동으로 돌려야 하는 점, 개발 과정을 기록할 수 없는 점 등의 불편함을 겪었고, 현재는 적극적으로 Github를 활용하고 있습니다.",
        "독학한 지식으로 하나의 서비스를 개발하면서 완벽하지는 않더라도 화면을 구현하는 것에 대한 재미와 보람을 느꼈습니다. 프론트엔드 분야에 대한 흥미를 깨닫고 적극적으로 공부하게 된 계기가 되었습니다.",
      ],
      link: [
        ["깃허브", "https://github.com/jieuny0314/Usum"],
        ["시연영상", "https://youtu.be/qU5FdTcmIiM"],
      ],
    },
    {
      title: "Portfolio",
      preview: [
        `${process.env.PUBLIC_URL}/Portfolio1.png`,
        `${process.env.PUBLIC_URL}/Portfolio2.png`,
        `${process.env.PUBLIC_URL}/Portfolio3.png`,
        `${process.env.PUBLIC_URL}/Portfolio4.png`,
      ],
      role: [
        "[ 서비스 기획 및 디자인, 프론트엔드 ]",
        "각 페이지 디자인 및 구현",
      ],
      function: [
        "keyframes을 사용해서 애니메이션을 구현하였습니다.",
        "emailjs를 사용해서 사용자가 메일을 보낼 수 있는 기능을 구현했습니다.",
        "Redux-toolkit으로 헤더 상태를 전역으로 관리했습니다.",
        "useMediaQuery 사용해서 반응형으로 구현했습니다.",
        "scroll-snap 속성을 사용해서 원페이지 스크롤을 구현했습니다.",
        // "Lighthouse를 사용해서 성능을 계산하고, 최적화 과정을 거쳤습니다.",
      ],
      review: [
        "현재까지 쌓아온 것에 대해 돌아보는 기회가 되었습니다.",
        "원페이지 스크롤에 대해 배우고, 직접 적용해 볼 수 있었습니다.",
        "구현을 목표로 두다보니 코드가 깨끗하지 못하고 반복되는 부분이 많습니다. 그런 코드들을 Hook으로 따로 구현하는 리팩토링을 거칠 예정입니다.",
        // "최적화에 대해 학습하고, 직접 적용해보는 기회가 되었습니다.",
      ],
      link: [
        ["배포링크", "https://jieuny0314.github.io/portfolio/"],
        ["깃허브", "https://github.com/jieuny0314/Portfolio"],
      ],
    },
    {
      title: "TodoList",
      preview: [
        `${process.env.PUBLIC_URL}/TodoList1.png`,
        `${process.env.PUBLIC_URL}/TodoList2.png`,
        `${process.env.PUBLIC_URL}/TodoList3.png`,
        `${process.env.PUBLIC_URL}/TodoList4.png`,
      ],
      role: [
        "[ 서비스 기획 및 디자인, 프론트엔드 ]",
        "각 페이지 디자인 및 구현",
      ],
      function: [
        "JSON 서버를 사용하여 테스트 서버를 구축하였습니다.",
        "JSON 서버에 계정을 저장하는 방법으로 회원가입 및 로그인 기능을 구현하였습니다.",
        "combineReducers를 사용해서 할 일과 메모 두 가지의 상태를 관리했습니다.",
        "fetch를 통한 HTTP 비동기 통신으로 기본적인 CRUD 기능을 구현했습니다.",
        "date를 쉽게 조작할 수 있는 moment.js를 사용해서 캘린더를 구현했고, 완료한 일이 있는 날을 표시했습니다.",
      ],
      review: [
        "Redux를 사용하면서 전역 상태 관리에 대해 익숙해졌습니다.",
        "기본 CRUD를 구현하면서 HTTP 통신을 경험했습니다.",
        "투두리스트인 만큼 할일이 남아있다는 알람 기능을 추가하고 싶었습니다. 하루가 끝나기 한시간 전에도 아직 끝내지 못한 일이 남았다면 푸시 알람을 보내주는 기능을 만들면 좋을 것 같습니다.",
        "개선 하고싶은 부분은 리덕스 툴킷을 사용해서 좀 더 간결한 코드로 구현하고 싶습니다. 또, 완료한 일을 렌더링하는 부분의 코드가 복잡해서 리팩토링이 필요할 것 같습니다.",
      ],
      link: [
        ["깃허브", "https://github.com/jieuny0314/TodoList_react"],
        ["시연영상", "https://www.youtube.com/watch?v=vVqeEzGQMfw"],
      ],
    },
  ];

  const projectNum = useLocation().pathname.split("/")[2];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Background>
        <ProjectDetailContainer $ismobile={isMobile}>
          <div className="fixed">
            <header className="titleBox">
              <h2 className="title">{projectsDetail[projectNum].title}</h2>
              <Link to="/">
                <MainBtn onClick={goMain}>Go Main</MainBtn>
              </Link>
            </header>
          </div>
          {/* <div className="divisionLine" /> */}
          <article className="previewBox">
            <FaAngleLeft size="36" className="arrow prev" onClick={prev} />
            <figure className="imgBox">
              {projectsDetail[projectNum].preview.map((el, i) => {
                return (
                  <PreviewImg
                    className="previewImg"
                    $url={el}
                    $curimg={currentImg}
                    key={i}
                  />
                );
              })}
            </figure>
            <FaAngleRight size="36" className="arrow next" onClick={next} />
          </article>
          <article className="roleBox">
            <div className="flex">
              <LiaHandPaperSolid className="icon" size="24" color="#eecb9a" />
              <h3 className="roleTitle">맡은 역할</h3>
            </div>
            <ul>
              {projectsDetail[projectNum].role.map((el, i) => {
                return (
                  <li className="role" key={i}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="functionBox">
            <div className="flex">
              <AiOutlineFunction className="icon" size="24" />
              <h3 className="functionTitle">구현 기능 설명</h3>
            </div>
            <ul>
              {projectsDetail[projectNum].function.map((el, i) => {
                return (
                  <li className="function" key={i}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="reviewBox">
            <div className="flex">
              <AiOutlineBulb className="icon" size="24" color="#ffcd4a" />
              <h3 className="reviewTitle">회고</h3>
            </div>
            <ul>
              {projectsDetail[projectNum].review.map((el, i) => {
                return (
                  <li className="review" key={i}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="linkBox">
            <div className="flex">
              <AiOutlinePaperClip className="icon" size="24" color="#b4b4b4" />
              <h3 className="linkTitle">관련 링크</h3>
            </div>
            <ul>
              {projectsDetail[projectNum].link.map((el, i) => {
                return (
                  <li className="linkList" key={i}>
                    <a href={el[1]} className="linkA">
                      {el[0]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </article>
        </ProjectDetailContainer>
      </Background>
    </motion.div>
  );
}

export default ProjectDetail;
