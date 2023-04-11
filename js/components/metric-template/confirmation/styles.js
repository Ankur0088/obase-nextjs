import styled from "styled-components";
import { FLEX } from "../../common/styles";

export const modalBody = styled.div`
  margin: 30px 30px 30px 10px;
`;

export const confirmationContainer = styled.div`
  ${FLEX("end", "flex-end", null)};

  button {
    margin: 5px;
  }
`;
