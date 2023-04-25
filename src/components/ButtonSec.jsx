import React from "react";
import { StCon, StSection, StTitle } from "../styles/them";
import Button from "./Button";
import { colors } from "../styles/them";
import { IoIosArrowForward } from "react-icons/io";
import { VscBellDot } from "react-icons/vsc";
import { ButtonSize } from "../styles/Button.styles";

function ButtonSec({ children }) {
  const onClickPrimaryButton = () => {
    alert("버튼을 만들어 보세요");
  };

  const onClickNegativeButton = () => {
    prompt("어렵나요?");
  };

  return (
    <StSection>
      <StTitle>{children}</StTitle>
      <StCon>
        <Button
          name="Large Primary Button"
          width={ButtonSize.large.width}
          height={ButtonSize.large.height}
          border={ButtonSize.large.border}
          borderColor={colors.lightGreen}
          onClick={onClickPrimaryButton}
        >
          {<IoIosArrowForward />}
        </Button>
        <Button
          name="Medium"
          width={ButtonSize.medium.width}
          height={ButtonSize.medium.height}
          bgColor={colors.lightGreen}
        ></Button>
        <Button
          name="Small"
          width={ButtonSize.small.width}
          height={ButtonSize.small.height}
          bgColor={colors.lightGreen}
        ></Button>
      </StCon>
      <StCon>
        <Button
          name="Large Negative Button"
          width={ButtonSize.large.width}
          height={ButtonSize.large.height}
          color={colors.darkPink}
          border={ButtonSize.large.border}
          borderColor={colors.lightPink}
          onClick={onClickNegativeButton}
        >
          {<VscBellDot />}
        </Button>
        <Button
          name="Medium"
          width={ButtonSize.medium.width}
          height={ButtonSize.medium.height}
          color={colors.darkPink}
          bgColor={colors.lightPink}
        ></Button>
        <Button
          name="Small"
          width={ButtonSize.small.width}
          height={ButtonSize.small.height}
          color={colors.darkPink}
          bgColor={colors.lightPink}
        ></Button>
      </StCon>
    </StSection>
  );
}

export default ButtonSec;
