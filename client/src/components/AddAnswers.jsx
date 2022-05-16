import React, { useContext } from "react";
import CollectContext from "../context/CollectContext";
import './AddAnswers.css';
import Questions from "./Questions";
import Answers from "./Answers";

function AddAnswers() {
  const {
    home,
  } = useContext(CollectContext);

  return (
    <>
      {home ? <Questions/> : <Answers />}
    </>
  );
}

export default AddAnswers;