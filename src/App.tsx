import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import reduxLogo from "/redux.svg";
import "./App.scss";
import Counter from "./Counter";

function App() {
  const [showVideo, setShowVideo] = useState(false);

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
        <Counter />

        <p
          onClick={() => setShowVideo(!showVideo)}
          className="tutorial-display"
        >
          Click to {showVideo ? "hide" : "display"} the tutorial on which th
          current app is based on.
        </p>

        <div
          className="video-container"
          style={{
            display: showVideo ? "block" : "none",
          }}
        >
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
      </div>
    </>
  );
}

export default App;
