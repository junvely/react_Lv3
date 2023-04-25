import React from "react";
import {
  ButtonsContainer,
  ButtonsDiv,
  ButtonsTitle,
  ButtonIconSpan,
  ButtonInfoDiv,
  StButton,
} from "../styles/Buttons.styles";
import { FaAngleRight, FaInfo } from "react-icons/fa";

function Button() {
  const largePrimaryButton = () => {
    alert("버튼을 만들어보세요!");
  };

  const largeDangerButton = () => {
    prompt("어렵나요?");
  };

  return (
    <ButtonsContainer>
      <ButtonsTitle>Buttons</ButtonsTitle>

      <ButtonsDiv>
        <StButton
          width="var(--size-large)"
          borderWidth="2px"
          borderColor="var(--color-light-green)"
          color="var(--color-green)"
          fontWeight="var(--weight-bold)"
          onClick={largePrimaryButton}
        >
          <ButtonInfoDiv>
            Large Primary Button
            <ButtonIconSpan>
              <FaAngleRight />
            </ButtonIconSpan>
          </ButtonInfoDiv>
        </StButton>

        <StButton
          width="var(--size-medium)"
          backgroundColor="var(--color-light-green)"
          borderColor="var(--color-light-green)"
          color="var(--color-green)"
          backgroundColorActive="var(--color-green)"
          colorActive="var(--color-white)"
        >
          Medium
        </StButton>

        <StButton
          width="var(--size-small)"
          backgroundColor="var(--color-light-green)"
          borderColor="var(--color-light-green)"
          color="var(--color-green)"
          backgroundColorActive="var(--color-green)"
          colorActive="var(--color-white)"
        >
          Small
        </StButton>
      </ButtonsDiv>

      <ButtonsDiv>
        <StButton
          width="var(--size-large)"
          borderWidth="2px"
          borderColor="var(--color-light-red)"
          color="var(--color-red)"
          fontWeight="var(--weight-bold)"
          onClick={largeDangerButton}
        >
          <ButtonInfoDiv>
            Large Danger Button
            <ButtonIconSpan>
              <FaInfo />
            </ButtonIconSpan>
          </ButtonInfoDiv>
        </StButton>

        <StButton
          width="var(--size-medium)"
          backgroundColor="var(--color-light-red)"
          borderColor="var(--color-light-red)"
          color="var(--color-red)"
          backgroundColorActive="var(--color-red)"
          colorActive="var(--color-white)"
        >
          Medium
        </StButton>

        <StButton
          width="var(--size-small)"
          backgroundColor="var(--color-light-red)"
          borderColor="var(--color-light-red)"
          color="var(--color-red)"
          backgroundColorActive="var(--color-red)"
          colorActive="var(--color-white)"
        >
          Small
        </StButton>
      </ButtonsDiv>
    </ButtonsContainer>
  );
}

export default Button;
