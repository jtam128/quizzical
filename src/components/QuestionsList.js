import React, { useState, useEffect, useRef } from "react";
import { decode } from "html-entities";
import { findMatchingIndex } from "../util.js";

export default function QuestionsList(props) {
  const [randomQuestionList, setRandomQuestionList] = useState([]);
  const [correctAnsIndex, setCorrectAnsIndex] = useState(-1);
  const [selectedAnsIndex, setSelectedAnsIndex] = useState(-1);

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  let allAns = [];

  useEffect(() => {
    const { category, question, incorrect_answers, correct_answer } =
      props.item;
    if (!props.checkAnsFlag) {
      allAns = [correct_answer, ...incorrect_answers];
      let tempArray = [];
      tempArray = shuffleArray(allAns);
      const correctAnsIndex = findMatchingIndex(correct_answer, tempArray);
      setCorrectAnsIndex(correctAnsIndex);
      setRandomQuestionList(tempArray);
    }
  }, [props.checkAnsFlag]);

  // const originalList = allAns.join("--OG LIST--");
  // const randomizeList = randomQuestionList.join("--RL--");

  function handleAnsClick(id) {
    setSelectedAnsIndex(id);
  }

  function colorChange(index) {
    if (index === 0)
      if (selectedAnsIndex === correctAnsIndex) props.handleCheckScore(true);
      else props.handleCheckScore(false);

    if (selectedAnsIndex === correctAnsIndex) {
      if (index === selectedAnsIndex) {
        return "selected ans green";
      } else {
        return "ans grey";
      }
    } else {
      if (index === correctAnsIndex) {
        return "selected ans green";
      } else if (index === selectedAnsIndex) {
        return "selected ans red";
      } else {
        return "ans grey";
      }
    }
  }

  return (
    <>
      <div>
        <h1 className="question">{decode(props.item.question)}</h1>
        <ul className="ans-container">
          {randomQuestionList.map((ans, index) => (
            <div key={index}>
              {!props.checkAnsFlag ? (
                <li
                  key={index}
                  className={
                    selectedAnsIndex === index ? "selected ans" : "ans"
                  }
                  onClick={() => handleAnsClick(index)}
                >
                  {decode(ans)}
                </li>
              ) : (
                <>
                  {/* {true && index} */}
                  <li key={index} className={colorChange(index)}>
                    {decode(ans)}
                  </li>
                </>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
