import styled from "styled-components";

const SkillsContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
`;

function Skills() {
  return (
    <div id="skills">
      <SkillsContainer></SkillsContainer>
    </div>
  );
}

export default Skills;
