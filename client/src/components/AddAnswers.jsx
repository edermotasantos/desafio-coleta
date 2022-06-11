import React, { useContext } from "react";
import CollectContext from "../context/CollectContext";
import './AddAnswers.css';
import Questions from "./Questions";
import Answers from "./Answers";
import imagem from '../img/undraw_knowledge_re_5v9l.svg';

function AddAnswers() {
  const {
    home,
  } = useContext(CollectContext);

  return (
    <div className="home-container">
      <img className="banner" alt="banner" src={imagem} />
      <div className="forms-container">
        {home ? <Questions/> : <Answers />}
      </div>
    </div>
  );
}

export default AddAnswers;