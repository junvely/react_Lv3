import React from "react";
import { StFlexCon, StSection, StTitle } from "../styles/them";

function SelectSec({ children }) {
  return (
    <StSection>
      <StTitle>{children}</StTitle>
      <StFlexCon></StFlexCon>
    </StSection>
  );
}

export default SelectSec;
