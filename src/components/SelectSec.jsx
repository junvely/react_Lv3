import React from "react";
import { StFlexCon, StTitle } from "../styles/them";
import Select from "./Select";
import { StSecCon } from "../styles/Select.styles";

function SelectSec({ children }) {
  return (
    <StSecCon>
      <StTitle>{children}</StTitle>
      <StFlexCon>
        <Select position="absolute"></Select>
        <Select></Select>
      </StFlexCon>
      <StFlexCon></StFlexCon>
    </StSecCon>
  );
}

export default SelectSec;
