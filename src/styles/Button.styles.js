import styled from "styled-components";
import { colors } from "./them";

export const ButtonSize = {
  small: {
    width: "100px",
    lineHeight: "40px",
  },
  medium: {
    width: "130px",
    lineHeight: "45px",
  },
  large: {
    width: "200px",
    lineHeight: "50px",
    border: "3px solid",
  },
};

export const StButtonCon = styled.div`
  width: ${(props) => props.width || ButtonSize.small.width};
  line-height: ${(props) => props.height || ButtonSize.small.lineHeight};
  height: ${(props) => props.height || ButtonSize.small.lineHeight};
  color: ${(props) => props.color || colors.black};
  background-color: ${(props) => props.bgColor || colors.white};
  border: ${(props) => props.border || "none"};
  border-color: ${(props) => props.borderColor};
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StButton = styled.button`
  width: 75%;
  background-color: transparent;
  border: none;
  padding: 0;
  font-weight: ${(props) => props.size === "large" && "bold"};
  cursor: pointer;
`;

export const StLabel = styled.label`
  padding-top: 5px;
  svg {
    width: 17px;
    height: 17px;
  }
`;
