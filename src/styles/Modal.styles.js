import styled from "styled-components";

export const StOutCon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cccccc8d;
`;

export const StModalCon = styled.div`
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "300px"};
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  box-sizing: border-box;
`;

export const StButtonCon = styled.div`
  display: flex;
`;

export const StTopCloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: -5px;
`;
