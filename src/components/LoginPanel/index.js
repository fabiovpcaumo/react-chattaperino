import React, { useState } from "react";
import { Input } from "unform";
import { LoginForm } from "./styles";
import ActionButton from "../ActionButton";

function LoginPanel() {
  function handleSubmit(data) {}

  return (
    <div>
      <LoginForm onSubmit={handleSubmit([])}>
        <Input name="email" />
        <Input name="password" type="password" />
      </LoginForm>
      <div>
        <ActionButton isPrimary defaultText="Login" />
        <ActionButton defaultText="Cadastrar" />
      </div>
    </div>
  );
}

export default LoginPanel;
