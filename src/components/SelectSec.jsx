import React from "react";
import { StCon, StSection, StTitle } from "../styles/them";

function SelectSec({ children }) {
  return (
    <StSection>
      <StTitle>{children}</StTitle>
      <StCon></StCon>
    </StSection>
  );
}

export default SelectSec;
