import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <StSection>
        <StTitle>Button</StTitle>
        {/* buttons */}
      </StSection>
      <StSection>
        <StTitle>Input</StTitle>
        {/* inputs */}
      </StSection>
      <StSection>
        <StTitle>Modal</StTitle>
        {/* modals */}
      </StSection>
      <StSection>
        <StTitle>Select</StTitle>
        {/* selects */}
      </StSection>
    </>
  );
}

const StSection = styled.section``;
const StTitle = styled.h1`
  font-size: 30px;
`;

export default App;
