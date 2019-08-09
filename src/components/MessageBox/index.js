import React, { useState } from "react";
import { MessageBoxContainer } from "./styles";

function MessageBox() {
  const [content, setContent] = useState("akasjdajsidjas");
  const [isOwnedByUser, setIsOwnedByUser] = useState(true);

  function setPositionOnScreen() {
    if (isOwnedByUser === true) return true;
    return false;
  }

  return (
    <MessageBoxContainer isOwnedByUser={isOwnedByUser}>
      <p>{content}</p>
    </MessageBoxContainer>
  );
}

export default MessageBox;
