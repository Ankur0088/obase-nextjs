import styled from "styled-components";
import { FLEX } from "../../../../styles/common/common.style";

export const headerContainer = styled.div`
  height: 35px;
  ${FLEX}
  border-bottom: 1px solid ${(p) => p.theme.color.Iron};
`;

export const pColor = styled.span`
  color: ${(p) => p.theme.color.BrightBlue};
  margin-right: 10px;
`;

export const dColor = styled.span`
  color: ${(p) => p.theme.color.Watermelon};
  margin-right: 10px;
`;
