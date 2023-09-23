import React from "react";
import Questions from "./Questions";

export default function Start() {
  const [showComponent, setShowComponent] = React.useState(true);

  function handleClickStart() {
    setShowComponent(!showComponent);
  }

  return (
    <div className="start">
      {showComponent ? (
        <div className="start-page">
          <h1 className="start-page-title">Quizzical</h1>
          <button className="start-page-btn" onClick={handleClickStart}>
            Start quiz
          </button>
        </div>
      ) : (
        <Questions />
      )}
    </div>
  );
}
