import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export const StWrap = styled.div`
  position: relative;
`;

export const StSection = styled.section`
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const StTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const StFlexCon = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
