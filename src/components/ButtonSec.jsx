import React from "react";
import { StFlexCon, StSection, StTitle } from "../styles/them";
import Button from "./Button";
import { colors } from "../styles/them";
import { IoIosArrowForward } from "react-icons/io";
import { VscBellDot } from "react-icons/vsc";
import { ButtonSize } from "../styles/Button.styles";

function ButtonSec({ children }) {
  const handleClickPrimaryButton = () => {
    alert("버튼을 만들어 보세요");
  };

  const handleClickNegativeButton = () => {
    prompt("어렵나요?");
  };

  return (
    <StSection>
      <StTitle>{children}</StTitle>
      <StFlexCon>
        <Button
          size="large"
          name="Large Primary Button"
          width={ButtonSize.large.width}
          height={ButtonSize.large.height}
          border={ButtonSize.large.border}
          borderColor={colors.lightGreen}
          onClick={handleClickPrimaryButton}
        >
          {<IoIosArrowForward />}
        </Button>
        <Button
          name="Medium"
          width={ButtonSize.medium.width}
          height={ButtonSize.medium.height}
          bgColor={colors.lightGreen}
        ></Button>
        <Button name="Small" bgColor={colors.lightGreen}></Button>
      </StFlexCon>
      <StFlexCon>
        <Button
          size="large"
          name="Large Negative Button"
          width={ButtonSize.large.width}
          height={ButtonSize.large.height}
          color={colors.darkPink}
          border={ButtonSize.large.border}
          borderColor={colors.lightPink}
          onClick={handleClickNegativeButton}
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
          color={colors.darkPink}
          bgColor={colors.lightPink}
        ></Button>
      </StFlexCon>
    </StSection>
  );
}

export default ButtonSec;
