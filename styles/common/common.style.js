import { css } from "styled-components";

export const FLEX = (align = null, justify = null, direction = null) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
`;
