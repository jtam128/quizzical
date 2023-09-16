import React, { useEffect, useState } from "react";
import { decode } from "html-entities";
import { all } from "q";

// const [setselectItem, setSelectItem] = React.useState([]);

export default function QuestionsList(props) {
  const [tempArray, setTempArray] = React.useState([]);
  const [formData, setFormData] = React.useState({
    employment: "",
  });

  const { category, question, incorrect_answers, correct_answer } = props.item;

  // const [randomizeAns, setRandomizeAns] = React.useState([]);

  const randomizeAns = [];

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  //:> xNNN..
  const allAns = [correct_answer, ...incorrect_answers];
  const originalList = allAns.join("--og list--");
  const randomQuestionList = shuffleArray(allAns);
  const randomizeList = randomQuestionList.join("--rand list--");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // :> xCCC..//:> xNNN.. (((())))
  return (
    // <ul className="ans-container">
    <div>
      <h1>{decode(question)}</h1>
      {/* <h1>{allAns}</h1> */}
      <form>
        {/* {tempArray.map((ans, index) => ( */}
        {true && allAns}
        <hr />
        <br />
        {true && originalList}
        <br />
        {true && randomizeList}
        {randomQuestionList.map((ans, index) => (
          <div key={index}>
            <p>
              {index} - {decode(ans)}
            </p>

            {/* <p>decode answer {decode(ans)}</p>
          <p>{randomizeAns[0]}</p> */}
            {/* //:> xNNN..2 */}
            {/* //:> xCCC..//:> xNNN.. (((()))) */}
            {/* <p>{props.correct_answer}</p> */}
            {/* <input
            type="radio"
            id={index}
            // id={ans}
            name="answer"
            value={decode(ans)}
            onChange={handleChange}
          />

          <label htmlFor="unemployed">{decode(ans)}</label> */}
          </div>
        ))}
      </form>
    </div>
  );
}

/*

const allAns = questions.map((item) => [
  ...item.incorrect_answers,
  item.correct_answer,
]);

questions.forEach((item) => {
  item.allAns = allAns;
  let id = 0;
  item.allAns.forEach((item) => (item.id = id++));


  item.answers = Object.keys(item).forEach((question) =>
    item.allAns.forEach((ans) => {
      if (question.id !== ans.id) {
        ans.splice(ans, 1);
      }
    })
  );
});
*/
