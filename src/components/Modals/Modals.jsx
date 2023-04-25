import React, { useState } from "react";
import { ModalsContainer, ModalsTitle, ModalsDiv } from "../styles/Modals";
import { StButton } from "../styles/Buttons.styles";

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isOpen = () => {
    setIsModalOpen(true)
    alert(isModalOpen)
  };

  return (
    <ModalsContainer>
      <ModalsTitle>Modals</ModalsTitle>
      <ModalsDiv>
        <StButton
          width="var(--size-small)"
          backgroundColor="var(--color-light-green)"
          borderColor="var(--color-light-green)"
          color="var(--color-green)"
          backgroundColorActive="var(--color-green)"
          colorActive="var(--color-white)"
          onClick={isOpen}
        >
          open modal
        </StButton>

        <StButton
          width="var(--size-large)"
          borderWidth="2px"
          borderColor="var(--color-light-red)"
          color="var(--color-red)"
          fontWeight="var(--weight-bold)"
        >
          open modal
        </StButton>
      </ModalsDiv>
    </ModalsContainer>
  );
}

export default Modals;
