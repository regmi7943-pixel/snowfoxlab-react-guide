import { useState } from "react";
import reactLogo from "./assets/react.svg";
import SFLLogo from "./assets/logo.jpeg";
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
      <p className="name">hello my name is kiran regmi</p>
      <p className="name">I am happy to work with you guys</p>
    </>
  );
}

export default App;
