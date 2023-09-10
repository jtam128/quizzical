import React from "react";
import { decode } from "html-entities";

export default function Questions() {
  const [questions, setQuestions] = React.useState([]);

  console.log("Component rendered");

  React.useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data.results);
      });
  }, []);

  return (
    <div>
      {questions.map((item) => (
        <div>
          <p>category: {item.category}</p>
          <p>{decode(item.question)}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
