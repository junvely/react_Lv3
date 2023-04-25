import styled from "styled-components";

export const colors = {
  green: "#c8d53e",
  lightGreen: "#a3c844",
  lightPink: "#e9b0b0",
  darkPink: "rgb(214, 48, 49)",
  white: "#fff",
  gray: "#c7c7c797",
  black: "#000",
};

export const StSection = styled.section`
  padding: 30px;
  margin-bottom: 5px;
  border: 3px solid ${colors.green};
  border-radius: 10px;
`;

export const StTitle = styled.h1`
  font-size: 30px;
`;

export const StFlexCon = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
