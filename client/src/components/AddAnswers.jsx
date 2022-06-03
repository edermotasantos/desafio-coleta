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
    <div class="forms-container">
      {home ? <Questions/> : <Answers />}
    </div>
  );
}

export default AddAnswers;