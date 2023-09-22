import React from "react";
import Questions from "./Questions";

export default function Start() {
  const [showComponent, setShowComponent] = React.useState(true);

  const handleCheckScore = () => {
    setShowComponent(!showComponent); // Toggle the value of showComponent on each click
  };

  return (
    <div className="start">
      {showComponent ? (
        <div className="start-page">
          <h1 className="start-title">Quizzical</h1>
          <button onClick={handleCheckScore}>Start quiz</button>
        </div>
      ) : (
        <Questions />
      )}
    </div>
  );
}
