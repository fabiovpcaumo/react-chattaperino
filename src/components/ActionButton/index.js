import React from "react";
import { Button } from "./styles";

function ActionButton({ isPrimary, defaultText = "Default Button", action }) {
  return (
    <div>
      <Button isPrimary={isPrimary} onClick={() => action()}>
        {" "}
        {defaultText}{" "}
      </Button>
    </div>
  );
}

export default ActionButton;
