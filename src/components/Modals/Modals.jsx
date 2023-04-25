import React, { useState } from "react";
import { ModalsContainer, ModalsTitle, ModalsDiv } from "../../styles/Modals";
import PrimarySmallButton from "../Buttons/PrimaryButtons/PrimarySmallButton";
import DangerLargeButton from "../Buttons/DangerButtons/DangerLargeButton";

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isOpen = () => {
    setIsModalOpen(true);
    alert(isModalOpen);
  };

  return (
    <ModalsContainer>
      <ModalsTitle>Modals</ModalsTitle>
      <ModalsDiv>
        <PrimarySmallButton buttonName={"open modal"}></PrimarySmallButton>
        <DangerLargeButton buttonName={"open modal"}></DangerLargeButton>
      </ModalsDiv>
    </ModalsContainer>
  );
}

export default Modals;
