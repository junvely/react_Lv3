import React from "react";
import styled from "styled-components";

function Input({ children, type, value, name, onChange }) {
  return (
    <StInputCon>
      {children}
      <input
        type={type}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
      ></input>
    </StInputCon>
  );
}

const StInputCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 226px;
    line-height: 44px;
    border: 1px solid;
    border-radius: 10px;
    padding: 0 20px;
    margin: 0 20px;
  }
`;

export default Input;
