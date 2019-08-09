import React, { useState } from "react";
import { Button } from "./styles";

function ActionButton({ isPrimary }) {
  const [content, setContent] = useState("akasjdajsidjas");

  return (
    <div>
      <Button isPrimary={isPrimary}> {content} </Button>
    </div>
  );
}

export default ActionButton;
