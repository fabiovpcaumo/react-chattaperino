import styled from "styled-components";

export const Button = styled.button`
  background: ${props =>
    props.isPrimary ? "#91F0FF" : `rgba(170, 242, 178, 0.5)`};
  color: ${props => (props.isPrimary ? "black" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  min-width: 120px;
  height: 50px;
`;
