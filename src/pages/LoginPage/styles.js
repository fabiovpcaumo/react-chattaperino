import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { ActionButton } from "../../components/ActionButton";

function LoginPage() {
  function handleSubmit(data) {
    return true;
  }

  return (
    <div>
      <Form>
        <Input name="email" />
        <Input name="password" type="password" />
        <ActionButton />
      </Form>
    </div>
  );
}

export default LoginPage;
