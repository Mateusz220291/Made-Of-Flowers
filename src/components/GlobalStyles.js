import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Alegreya Sans', sans-serif;
}
:root {
    --maincolor: pink;
    --secondcolor: #043300;
    --thirdcolor: #DAA520;
}
`;

export const Button = styled.button`
  border: 2px solid var(--maincolor);
  text-transform: uppercase;
  background: white;
  white-space: nowrap;
  padding: 10px 20px;
  color: var(--maincolor);
  font-size: 20px;
  outline: none;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    transition: all 0.5s ease-out;
    background: #fff;
    background: var(--maincolor);
    color: white;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
