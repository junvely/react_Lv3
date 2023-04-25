import React from "react";
import {
  ButtonIconSpan,
  StButton,
} from "../../../styles/Buttons.styles";

function DangerLargeButton({ largeDangerButton, buttonName, children }) {
  
  return (
    <>
      <StButton
        width="var(--size-large)"
        borderWidth="2px"
        borderColor="var(--color-light-red)"
        color="var(--color-red)"
        fontWeight="var(--weight-bold)"
        onClick={largeDangerButton}
      >
        {buttonName}
        <ButtonIconSpan>{children}</ButtonIconSpan>
      </StButton>
    </>
  );
}

export default DangerLargeButton;
