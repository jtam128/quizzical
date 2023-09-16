import React, { useEffect, useState } from "react";
import { decode } from "html-entities";

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

  const allAns = [correct_answer, ...incorrect_answers];

  useEffect(() => {
    // setTempArray(["a", "b", "c"]);
    // setTempArray(allAns);
    // return (cleanUp = () => {});
    // let tempArray1 = shuffleArray(allAns);
    // let tempArray1 = allAns;
    // setTempArray(tempArray1);
    // setTempArray([...allAns]);
  }, []);

  // let shuffledArray = shuffleArray(allAns);

  // let tempArray1 = shuffleArray(allAns);
  // setRandomizeAns(shuffleArray(tempArray));

  // setRandomizeAns(allAns);

  // return (cleanUp = () => {});

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  if (!randomizeAns) return <p>not ready</p>;

  const printx = 1;

  return (
    // <ul className="ans-container">
    <div>
      <h1>{decode(question)}</h1>
      {/* <h1>{allAns}</h1> */}
      <form>
        {/* {tempArray.map((ans, index) => ( */}
        {allAns.map((ans, index) => (
          <div key={index}>
            <p>
              {index} - {ans}
            </p>

            <p>{printx && console.log("aaa", tempArray[0])}</p>
            {/* <p>decode answer {decode(ans)}</p>
          <p>{randomizeAns[0]}</p> */}
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
