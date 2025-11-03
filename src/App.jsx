import { useState } from "react";
import reactLogo from "./assets/react.svg";
import SFLLogo from "/logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // bikash is hero
  return (
    <>
      <div>
        <a href="https://snowfoxlab.com.np" target="_blank">
          <img src={SFLLogo} className="logo" alt="Snow Fox Lab logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Frontend Internship </h1>

      <p className="read-the-docs">snowfoxlab-react-guide</p>
    </>
  );
}

export default App;
