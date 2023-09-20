export default function Status(props) {
  function handleCheckAns() {
    props.checkAnsClick();
  }

  return (
    <>
      {/* <p>{props.result}</p> */}
      <button onClick={() => handleCheckAns}>Check answers</button>
    </>
  );
}
