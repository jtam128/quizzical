import React, { useState, useEffect } from "react";
import { decode } from "html-entities";
import { all } from "q";

export default function QuestionsList(props) {
  const [setselectIndex, setSetselectIndex] = useState(0);

  const [selectedButton, setSelectedButton] = useState(null);

  const { category, question, incorrect_answers, correct_answer } = props.item;

  const [randomQuestionList, setRandomQuestionList] = useState([]);

  if (props.checkAnsFlag) {
    props.handleClick("//test result");
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  let allAns = [];
  useEffect(() => {
    allAns = [correct_answer, ...incorrect_answers];
    // randomQuestionList = shuffleArray(allAns);
    setRandomQuestionList(shuffleArray(allAns));
  }, []);
  const originalList = allAns.join("--OG LIST--");

  const randomizeList = randomQuestionList.join("--RANDOM LIST--");

  function handleChange(id) {
    setSelectedButton(id);
    console.log(`Clicked item with id ${id}`);
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
              <li
                // className="ans"
                key={index}
                className={selectedButton === index ? "selected ans" : "ans"}
                onClick={() => handleChange(index)}
              >
                {decode(ans)}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
