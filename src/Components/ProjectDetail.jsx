import styled from "styled-components";

const ProjectDetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blue;
  position: absolute;
  top: 100px;
  left: 0;
`;

function ProjectDetail({ projectNum }) {
  const projectsDetail = [
    {
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
        "- 지도페이지에서 상태 관련 오류를 겪었고, Redux를 사용하면서 해결했습니다. 이 경험을 통해 전역 상태관리의 대한 중요성을 느꼈습니다.",
        "처음으로 Tailwind CSS를 사용하면서 styled-component와 비교해서 각 라이브러리의 장단점을 느꼈습니다.",
        "메인 페이지의 이미지 용량이 너무 커서 로딩이 늦어진다는 걸 깨달았고, 이미지 최적화의 중요성을 깨달았습니다.",
        "기획부터 개발까지 경험하며 전체적인 팀 프로젝트 과정에 대해 배우고, GIthub, Figma와 같은 협업 툴에 익숙해졌습니다.",
      ],
      link: [
        [
          "http://testqjzlt.s3-website.ap-northeast-2.amazonaws.com/",
          "https://github.com/codestates-seb/seb43_main_030",
          "https://www.figma.com/file/PFOgIanoWAdQqqgtEtRWUM/반려동물-유치원-기획-및-디자인?type=design&node-id=0-1&mode=design",
          "",
        ],
      ],
    },
    {
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
        [
          "",
          "https://github.com/jieuny0314/Usum",
          "",
          "https://youtu.be/qU5FdTcmIiM",
        ],
      ],
    },
    {
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
        "개선 하고싶은 부분은 리덕스 툴킷을 사용해서 좀 더 간결한 코드로 구현하고 싶습니다. 또, 완료한 일을 렌더링하는 부분의 코드가 개발한 제가 보기에도 너무 복잡해서 리팩토링이 필요할 것 같습니다.",
      ],
      link: [
        [
          "",
          "https://github.com/jieuny0314/TodoList_react",
          "",
          "https://www.youtube.com/watch?v=vVqeEzGQMfw",
        ],
      ],
    },
    {
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
        "개선 하고싶은 부분은 리덕스 툴킷을 사용해서 좀 더 간결한 코드로 구현하고 싶습니다. 또, 완료한 일을 렌더링하는 부분의 코드가 개발한 제가 보기에도 너무 복잡해서 리팩토링이 필요할 것 같습니다.",
      ],
      link: [
        [
          "",
          "https://github.com/jieuny0314/TodoList_react",
          "",
          "https://www.youtube.com/watch?v=vVqeEzGQMfw",
        ],
      ],
    },
  ];

  return <ProjectDetailContainer>ddddddhjgjhgjkg</ProjectDetailContainer>;
}

export default ProjectDetail;
