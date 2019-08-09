import styled from "styled-components";

export const MessageBoxContainer = styled.div`
  background: ${props =>
    props.isOwnedByUser
      ? `rgba(170, 242, 178, 0.5)`
      : `rgba(145, 240, 255, 0.5)`};
  border-width: 10px;
  width: auto;
  max-width: 280px;
  height: auto;
  max-height: 90px;
`;
