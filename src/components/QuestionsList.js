import React, { useState, useEffect } from "react";
import { decode } from "html-entities";
import { all } from "q";

export default function QuestionsList(props) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [firstTime, setFirstTime] = useState(true);

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
  // let originalList = [];
  // let randomQuestionList = [];
  // let randomizeList = [];
  useEffect(() => {
    allAns = [correct_answer, ...incorrect_answers];

    // randomQuestionList = shuffleArray(allAns);
    setRandomQuestionList(shuffleArray(allAns));
  }, []);
  const originalList = allAns.join("--OG LIST--");
  const randomizeList = randomQuestionList.join("--RANDOM LIST--");

  function handleChange(id) {
    console.log(`Clicked item with id ${id}`);
    setSelectedButton(id);
  }

  return (
    <div>
      <h1 className="question">{decode(question)}</h1>
      {/* <h1>{allAns}</h1> */}
      {/* <form> */}
      {/* {tempArray.map((ans, index) => ( */}
      {true && allAns}
      {/* <hr /> */}
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
            {/* <p>
              {index} - {decode(ans)}
              </p> */}
            {/* <p>{randomizeAns[0]}</p> */}
          </div>
        ))}
      </ul>
      {/* </form> */}
    </div>
  );
}
