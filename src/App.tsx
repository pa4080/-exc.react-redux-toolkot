import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import reduxLogo from "/redux.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://redux-toolkit.js.org/" target="_blank">
          <img src={reduxLogo} className="logo redux" alt="Redux logo" />
        </a>
      </div>
      <h1>Vite + React + ReduxToolkit</h1>
      <div className="card">
        <div className="counter-container">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5yEG6GhoJBs?si=5JIbmY8CTbC1ejGP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <p>Tutorial on which th current app is based on.</p>
        </div>
      </div>
    </>
  );
}

export default App;
