import React from "react";
import { Button } from "./styles";

function ActionButton({ isPrimary, defaultText = "Default Button" }) {
  return (
    <div>
      <Button isPrimary={isPrimary}> {defaultText} </Button>
    </div>
  );
}

export default ActionButton;
