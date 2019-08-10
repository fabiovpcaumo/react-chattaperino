import styled from "styled-components";
import { Form } from "unform";

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  input {
    max-width: 160px;
    padding: 5px 3px;
    margin: 5px 3px;
  }
`;
