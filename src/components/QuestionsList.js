import React, { useEffect, useState } from "react";
import { decode } from "html-entities";
import { all } from "q";

// const [setselectItem, setSelectItem] = React.useState([]);

export default function QuestionsList(props) {
  const [tempArray, setTempArray] = React.useState([]);
  const [formData, setFormData] = React.useState({
    answer: "",
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

  const allAns = [correct_answer, ...incorrect_answers];
  const originalList = allAns.join("--og list--");
  const randomQuestionList = shuffleArray(allAns);
  const randomizeList = randomQuestionList.join("--rand list--");

  // function radioChange(event) {
  //   console.log(event.target.value);
  // }

  function handleChange(id) {
    console.log(`Clicked item with id ${id}`);
  }
  // function radioChange(event) {
  //   console.log("rb value", event.target.value);
  //   const { name, value, type, checked } = event.target;
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }

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
        <ul className="ans-container">
          {randomQuestionList.map((ans, index) => (
            <div key={index}>
              <li
                className="ans"
                key={index}
                onClick={() => handleChange(index)}
              >
                {ans}
              </li>
              {/* <p>
              {index} - {decode(ans)}
            </p> */}

              {/* <p>decode answer {decode(ans)}</p>
          <p>{randomizeAns[0]}</p> */}
              {/* <p>{props.correct_answer}</p> */}
              {/* <input
              type="radio"
              id={index}
              // id={ans}
              name="answer"
              value={decode(ans)}
              // checked={formData.ans === decode(ans)}
              // onChange={handleChange(this)}
              onChange={(e) => radioChange(e)}
            />

            <label htmlFor={decode(ans)}>{decode(ans)}</label> */}
            </div>
          ))}
        </ul>
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
