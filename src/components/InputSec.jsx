import React from "react";
import { StCon, StSection, StTitle } from "../styles/them";
import Input from "./Input";

function InputSec({ children }) {
  return (
    <StSection>
      <StTitle>{children}</StTitle>
      <StCon>
        <Input></Input>
      </StCon>
    </StSection>
  );
}

export default InputSec;
