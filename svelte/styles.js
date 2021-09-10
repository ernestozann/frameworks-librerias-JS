import { css } from "@emotion/css";

export const title = css`
  border-bottom: 1px solid var(--color2);
  padding-bottom: 10px;
`;

export const form = css`
  background: var(--bg);
  color: var(--color2);
  border: 1px solid var(--color);
  font-family: "Courier New", Courier, monospace;
  margin: 0 50px 25px;
  padding: 10px 25px 25px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const button = css`
  background: var(--color);
  border: 1px solid transparent;
  padding: 5px 10px;
  margin: 0 5px;
  transition: border 0.15s;

  &:hover {
    border: 1px solid var(--color2);
    cursor: pointer;
  }

  &[disabled] {
    opacity: 0.5;
  }
`;
