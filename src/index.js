import React from "react";
import ReactDOM from "react-dom";
import { Form, Input } from "unform";
import MessageBox from "./components/MessageBox";
import ActionButton from "./components/ActionButton";
import LoginPanel from "./components/LoginPanel";

import "./styles.css";

function App() {
  function handleSubmit(data) {
    return true;
  }

  return (
    <div className="App">
      <LoginPanel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
