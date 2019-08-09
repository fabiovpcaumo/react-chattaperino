import React from "react";
import ReactDOM from "react-dom";
import MessageBox from "./components/MessageBox";
import ActionButton from "./components/ActionButton";
import LoginPage from "./pages/LoginPage";

import "./styles.css";

function App() {
  return (
    //<div className="App">
    //  <h1>Hello CodeSandbox</h1>
    // <MessageBox />
    //<ActionButton isPrimary />
    //<ActionButton />
    //</div>
    <LoginPage />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
