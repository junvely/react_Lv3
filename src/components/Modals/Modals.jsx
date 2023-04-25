import React, { useState } from "react";
import {
  ModalsContainer,
  ModalsTitle,
  ModalsDiv,
  ModalOpen,
  ModalContent,
  ModalContentDiv,
  ModalContentP,
  ModalContentButtonDiv,
} from "../../styles/Modals";
import PrimarySmallButton from "../Buttons/PrimaryButtons/PrimarySmallButton";
import DangerLargeButton from "../Buttons/DangerButtons/DangerLargeButton";
import DangerSmallButton from "../Buttons/DangerButtons/DangerSmallButton";

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenOut, setIsModalOpenOut] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("열기!");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("닫기!");
  };

  const openModalOut = () => {
    setIsModalOpenOut(true);
    console.log("열기!");
  };

  const closeModalOut = () => {
    setIsModalOpenOut(false);
    console.log("외부영역닫기!");
  };

  return (
    <ModalsContainer>
      <ModalsTitle>Modals</ModalsTitle>
      <ModalsDiv>
        {/* Open and Close Modal by clicking on buttons */}
        <PrimarySmallButton
          buttonName={"open modal"}
          onClick={openModal}
        ></PrimarySmallButton>
        <ModalOpen style={{ display: isModalOpen ? "block" : "none" }}>
          <ModalContent>
            <ModalContentP>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요.
            </ModalContentP>
            <ModalContentButtonDiv>
              <DangerSmallButton
                buttonName={"닫기"}
                onClick={closeModal}
              ></DangerSmallButton>
              <PrimarySmallButton buttonName={"확인"}></PrimarySmallButton>
            </ModalContentButtonDiv>
          </ModalContent>
        </ModalOpen>

        {/* Open and Close Modal by clicking outside content */}
        <DangerLargeButton
          buttonName={"open modal"}
          onClick={openModalOut}
        ></DangerLargeButton>
        <ModalOpen
          style={{ display: isModalOpenOut ? "block" : "none" }}
          onClick={closeModalOut}
        ></ModalOpen>
        <ModalContent style={{ display: isModalOpenOut ? "block" : "none" }}>
          <ModalContentDiv>
            <ModalContentP>
              닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.
            </ModalContentP>
            <ModalContentButtonDiv>
              <DangerSmallButton
                buttonName={"닫기"}
                onClick={closeModalOut}
              ></DangerSmallButton>
            </ModalContentButtonDiv>
          </ModalContentDiv>
        </ModalContent>
      </ModalsDiv>
    </ModalsContainer>
  );
}

export default Modals;
