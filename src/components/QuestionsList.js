import React, { useState, useEffect } from "react";
import { decode } from "html-entities";

export default function QuestionsList(props) {
  const [selectedButton, setSelectedButton] = useState(null);
  const { category, question, incorrect_answers, correct_answer } = props.item;
  const [randomQuestionList, setRandomQuestionList] = useState([]);

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  let allAns = [];
  useEffect(() => {
    if (!props.checkAnsFlag) {
      allAns = [correct_answer, ...incorrect_answers];
      // randomQuestionList = shuffleArray(allAns);
      setRandomQuestionList(shuffleArray(allAns));
    }
  }, [props.checkAnsFlag]);

  const originalList = allAns.join("--OG LIST--");
  const randomizeList = randomQuestionList.join("--RANDOM LIST--");

  function handleAnsClick(id) {
    setSelectedButton(id);
  }

  if (props.checkAnsFlag) {
    props.handleClick("You scored 3/5");
  }

  return (
    <>
      <div>
        <h1 className="question">{decode(question)}</h1>
        {true && allAns}
        <br />
        {true && originalList}
        <br />
        {true && randomizeList}
        <ul className="ans-container">
          {randomQuestionList.map((ans, index) => (
            <div key={index}>
              {!props.checkAnsFlag ? (
                <li
                  // className="ans"
                  key={index}
                  className={selectedButton === index ? "selected ans" : "ans"}
                  onClick={() => handleAnsClick(index)}
                >
                  {decode(ans)}
                </li>
              ) : (
                <p> color your answer here</p>
              )}

              {/* {decode(ans)} */}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
