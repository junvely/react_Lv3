import React from "react";
import { StCon, StSection, StTitle } from "../styles/them";

function ModalSec({ children }) {
  return (
    <StSection>
      <StTitle>{children}</StTitle>
      <StCon></StCon>
    </StSection>
  );
}

export default ModalSec;
