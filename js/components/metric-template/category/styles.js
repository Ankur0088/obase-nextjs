import styled from "styled-components";
import { FLEX } from "../../../../styles/common/common.style";

export const programs = styled.div`
  padding: 10px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 66px);
`;

export const formContainer = styled.div`
  ${FLEX(null, "flex-start", null)}
  gap: 10px;

  label {
    font-weight: bold;
  }

  input {
    margin-top: 6px;
  }
`;

export const submitBtn = styled.div`
  margin-top: 50px;
  ${FLEX(null, "flex-end", null)}

  button {
    font-size: 16px;
    height: 40px;
    padding: 6px 25px;
  }
`;
