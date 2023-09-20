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
        const res = await fetch("https://opentdb.com/api.php?amount=2");
        const data = await res.json();
        setQuestions(data.results);
      }
      if (!checkAnsFlag) {
        getQuestions();
      }
    },
    [checkAnsFlag]
  );

  // loop through questions array
  // loop through allAns array
  // if id from each array is equal, assign the allAns array to that question array
  // if id from allAns is !== to id from question object, then remove those other arrays in allAns

  function handleAnswerClick(data) {
    setResult(data);
  }

  if (!questions) return <p>loading question</p>;
  return (
    <div className="questions">
      {questions.map((item, index) => (
        <div key={index}>
          <QuestionsList
            item={item}
            handleClick={handleAnswerClick}
            checkAnsFlag={checkAnsFlag}
          />
          <br />
          <p>Q Correct answer: {item.correct_answer}</p>
          <hr />
        </div>
      ))}
      {checkAnsFlag ? (
        <>
          <p>{result}</p>
          <button
            onClick={() => {
              // console.log("in here");
              window.location.reload();
              // setCheckAnsFlag(false);
            }}
          >
            play again
          </button>
        </>
      ) : (
        // checkAns is false
        <button
          onClick={() => {
            // console.log("in here");
            setCheckAnsFlag(true);
          }}
        >
          check answer
        </button>
      )}
    </div>
  );
}
