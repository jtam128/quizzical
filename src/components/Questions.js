import React, { useEffect, useState } from "react";
import { decode } from "html-entities";
import QuestionsList from "./QuestionsList";

export default function Questions() {
  const [checkAnsFlag, setCheckAnsFlag] = useState(false);
  const [result, setResult] = useState("");
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(
    function () {
      async function getQuestions() {
        const res = await fetch("https://opentdb.com/api.php?amount=3");
        const data = await res.json();
        setQuestions(data.results);
      }
      if (!checkAnsFlag) {
        getQuestions();
      }
    },
    [checkAnsFlag]
  );

  let correct = 0;
  let wrong = 0;
  let totalQuestions = 0;
  let tempResult = "";
  function handleCheckScore(data) {
    console.log("data = " + data);
    if (data === false) {
      wrong++;
      totalQuestions++;
    }
    if (data === true) {
      correct++;
      totalQuestions++;
    }

    if (totalQuestions === questions.length) {
      tempResult = `You scored ${correct}/${totalQuestions} correct answers`;
      setResult(tempResult);
    }
  }

  if (!questions) return <p>loading question</p>;
  return (
    <div className="questions">
      {questions.map((item, index) => (
        <div key={index}>
          <QuestionsList
            questionNum={index}
            item={item}
            handleCheckScore={handleCheckScore}
            checkAnsFlag={checkAnsFlag}
          />
          <br />
          <p>Q Correct answer: {item.correct_answer}</p>
          <hr />
        </div>
      ))}
      {checkAnsFlag ? (
        <div className="btn-div">
          {/* // <div> */}
          <p>{result}</p>
          <button
            className="play-again-btn"
            onClick={() => {
              window.location.reload();
            }}
          >
            play again
          </button>
        </div>
      ) : (
        <div className="btn-div">
          <button
            className="check-ans-btn"
            onClick={() => {
              setCheckAnsFlag(true);
            }}
          >
            check answers
          </button>
        </div>
      )}
    </div>
  );
}
