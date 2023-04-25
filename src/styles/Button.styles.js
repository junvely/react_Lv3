import styled from "styled-components";
import { colors } from "./them";

// Button 종류(자주 쓰이는 것들만 객체화)
export const ButtonSize = {
  small: {
    width: "100px",
    height: "40px",
  },
  medium: {
    width: "130px",
    height: "45px",
  },
  large: {
    width: "200px",
    height: "50px",
    border: "4px solid",
  },
};

// 어떤 값이 들어오든 적용 가능
export const StButtonCon = styled.div`
  width: ${(props) => props.width || ButtonSize.small.width};
  line-height: ${(props) => props.height || ButtonSize.small.height};
  height: ${(props) => props.height || ButtonSize.small.height};
  color: ${(props) => props.color || colors.black};
  background-color: ${(props) => props.bgColor || colors.white};
  border: ${(props) => props.border || "none"};
  border-color: ${(props) => props.borderColor};
  border-radius: 10px;
  margin-right: 10px;
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
  color: ${(props) => props.color || colors.black};
  font-weight: ${(props) => props.size === "large" && "bold"};
  cursor: pointer;
`;

// label 내부 icon
export const StLabel = styled.label`
  padding-top: 5px;
  svg {
    width: 17px;
    height: 17px;
  }
`;
