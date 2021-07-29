import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Alegreya Sans', sans-serif;
}
:root {
    --maincolor: #faf1d9;
    --secondcolor: #043300;
    --thirdcolor: pink;
    --fourthcolor: #DAA520;
    --fifthcolor:#665A3A;
}
`;

export const Button = styled.button`
  border: 2px solid var(--fifthcolor);
  text-transform: uppercase;
  background: white;
  white-space: nowrap;
  padding: 10px 20px;
  color: var(--fifthcolor);
  font-size: 20px;
  outline: none;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    transition: all 0.5s ease-out;
    background: #fff;
    background: var(--fifthcolor);
    color: white;
    border: 2px solid white;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
