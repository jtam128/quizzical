import React, { useEffect, useState } from "react";
import { decode } from "html-entities";

// const [setselectItem, setSelectItem] = React.useState([]);

export default function QuestionsList(props) {
  const [tempArray, setTempArray] = React.useState([]);
  const [formData, setFormData] = React.useState({
    employment: "",
  });

  const { incorrect_answers, correct_answer } = props;

  // const [randomizeAns, setRandomizeAns] = React.useState([]);

  const randomizeAns = [];

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const allAns = [props.correct_answer, ...props.incorrect_answers];

  useEffect(() => {
    // setTempArray(["a", "b", "c"]);
    setTempArray(allAns);

    // return (cleanUp = () => {});
  }, []);

  // let shuffledArray = shuffleArray(allAns);
  if (!randomizeAns.length) {
    let tempArray = shuffleArray(allAns);
    // setRandomizeAns(shuffleArray(tempArray));
  }
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
    <form>
      {tempArray.map((ans, index) => (
        <div key={index}>
          <p>{index}</p>
          <p>{ans}</p>
          <p>{printx && console.log("aaa", tempArray[0])}</p>
          {/* <p>decode answer {decode(ans)}</p>
          <p>{randomizeAns[0]}</p> */}
          <p>{props.correct_answer}</p>
          {/* <input
            type="radio"
            id={index}
            // id={ans}
            name="answer"
            value={decode(ans)}
            onChange={handleChange}
          />

          <label htmlFor="unemployed">{decode(ans)}</label> */}
          <hr />
        </div>
      ))}
    </form>
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
