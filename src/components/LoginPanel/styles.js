import styled from "styled-components";
import { Form } from "unform";

export const LoginForm = styled(Form)`
  align-content: space-between;
  display: flex;
  flex-direction: column;
  input {
    max-width: 160px;
  }
`;
