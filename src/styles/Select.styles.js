import styled from "styled-components";

export const StSecCon = styled.div`
  width: 100%;
  height: 200px;
  padding: 30px;
  border: 1px solid #ccc;
  overflow: hidden;
`;

export const StSelectCon = styled.div`
  width: 300px;
  margin: 10px;
`;

export const StSelectButton = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;

  p {
    padding: 0;
    margin: 0;
  }
`;

export const StDropDown = styled.div`
  width: 100%;

  ul,
  li {
    list-style: none;
    padding: 0;
    border-radius: 5px;
    overflow: hidden;
  }
  ul {
    width: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    position: absolute;
    position: ${(props) => props.position || "relative"};
    z-index: 1000;

    li {
      padding: 10px;
      font-size: 12px;
      transition: all 0.2s;
      cursor: pointer;
      &:hover {
        background-color: #ccc;
      }
    }
  }
`;
