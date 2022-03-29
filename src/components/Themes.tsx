import { createGlobalStyle } from "styled-components";

export const darkTheme = { color: "black", background: "white", left: "1px" };
export const LightTheme = { color: "white", background: "black", left: "30px" };

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;

    color: string
  }
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
  }
  h1 {
      color: ${(props) => props.theme.color};
  }
  p {
    color: ${(props) => props.theme.color};
  }
  #calc-box {
    border: ${(props) => props.theme.color} 5px solid;
  }
  .float {
    background-color: ${(props) => props.theme.background};
  }
  .fa, .fa-solid {
    padding: 5px;
    color: ${(props) => props.theme.color};
  }
`;
