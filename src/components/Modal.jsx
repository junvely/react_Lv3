import React from "react";
import {
  StButtonCon,
  StModalCon,
  StOutCon,
  StTopCloseButton,
} from "../styles/Modal.styles";
import { colors } from "../styles/them";
import Button from "../components/Button";

function Modal({ children, type, width, height, onClick }) {
  return (
    <StOutCon
      onClick={() => {
        type === "small" && onClick();
      }}
    >
      <StModalCon width={width} height={height}>
        {/* small 모달창의 TopCloseButton display */}
        {type === "small" && (
          <StTopCloseButton>
            <Button
              name="X"
              width="30px"
              height="30px"
              bgColor={colors.gray}
              onClick={onClick}
            ></Button>
          </StTopCloseButton>
        )}
        <p>{children}</p>
        {/* large 모달창의 Buttons display */}
        {type === "large" && (
          <StButtonCon>
            <Button
              name="닫기"
              bgColor={colors.lightPink}
              onClick={onClick}
            ></Button>
            <Button name="확인" bgColor={colors.lightGreen}></Button>
          </StButtonCon>
        )}
      </StModalCon>
    </StOutCon>
  );
}

export default Modal;
