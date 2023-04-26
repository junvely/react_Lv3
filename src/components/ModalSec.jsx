import React, { useState } from "react";
import { colors } from "../styles/them";
import { StFlexCon, StSection, StTitle } from "../styles/Global.styles";
import { ButtonSize } from "../styles/Button.styles";
import Button from "./Button";
import Modal from "./Modal";

function ModalSec({ children }) {
  const [largeModal, setLargeModal] = useState(false);
  const [smallModal, setSmallModal] = useState(false);

  const largeModalToggle = () => {
    setLargeModal(!largeModal);
  };

  const smallModalToggle = () => {
    setSmallModal(!smallModal);
  };

  return (
    <StSection>
      <StTitle>{children}</StTitle>
      <StFlexCon>
        <Button
          name="open modal"
          bgColor={colors.lightGreen}
          onClick={largeModalToggle}
        ></Button>
        {largeModal && (
          <Modal
            type="large"
            width="500px"
            height="300px"
            onClick={largeModalToggle}
          >
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </Modal>
        )}
        <Button
          name="open modal"
          size="large"
          width={ButtonSize.large.width}
          height={ButtonSize.large.height}
          border={ButtonSize.large.border}
          color={colors.darkPink}
          borderColor={colors.lightPink}
          onClick={smallModalToggle}
        ></Button>
        {smallModal && (
          <Modal
            type="small"
            width="300px"
            height="200px"
            onClick={smallModalToggle}
          >
            닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.
          </Modal>
        )}
      </StFlexCon>
    </StSection>
  );
}

export default ModalSec;
