import { ThemeProvider } from "styled-components";

const themes = {
  avengers: {
    bg: "#ceceff",
    color: "#335",
    color2: "rgba(5, 5, 100, 0.5)"
  },
  terminator: {
    bg: "#ceceff",
    color: "#335",
    color2: "rgba(50, 100, 50, 0.5)"
  }
};

export const Theme = (props) => (
  <ThemeProvider theme={themes["avengers"]}>{props.children}</ThemeProvider>
);
