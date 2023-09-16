import React, { useEffect } from "react";
import { decode } from "html-entities";
import QuestionsList from "./QuestionsList";

export default function Questions() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(function () {
    async function getQuestions() {
      const res = await fetch("https://opentdb.com/api.php?amount=1");
      const data = await res.json();
      setQuestions(data.results);

      // let id = 0;
      // data.results.forEach((item) => (item.id = id++));
    }
    getQuestions();
  }, []);

  // loop through questions array
  // loop through allAns array
  // if id from each array is equal, assign the allAns array to that question array
  // if id from allAns is !== to id from question object, then remove those other arrays in allAns

  if (!questions) return <p>loading question</p>;
  return (
    <div>
      {questions.map((item, index) => (
        <div key={index}>
          <p>category: {item.category}</p>
          <p>{decode(item.question)}</p>
          {/* <p>incorrect answer : {item.incorrect_answers}</p>
          <p>correct answer : {item.correct_answer}</p> */}

          <QuestionsList
            incorrect_answers={item.incorrect_answers}
            correct_answer={item.correct_answer}
          />

          <br />
          <p>Correct answer: {item.correct_answer}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
