import React, { useState } from "react";
import { Input } from "unform";
import { LoginForm } from "./styles";
import ActionButton from "../ActionButton";

function LoginPanel() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <LoginForm onSubmit={handleSubmit([])}>
        <Input name="email" />
        <Input name="password" type="password" />
      </LoginForm>
      <ActionButton isPrimary defaultText="Login" />
      <ActionButton defaultText="Cadastrar" />
    </div>
  );
}

export default LoginPanel;
