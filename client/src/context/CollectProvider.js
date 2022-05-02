import React, { useState } from "react";
import CollectContext from "../context/CollectContext";
import PropTypes from 'prop-types';

function CollectProvider({ children }) {
  const [answer1, setAnswer1] = useState('Sim', 'Não');
  const [answer2, setAnswer2] = useState('Sim', 'Não');
  const [answer3, setAnswer3] = useState('Sim', 'Não', 'Não Sei', 'Agora!!');
  const [answer4, setanswer4] = useState('');
  const [answers, setAnswers] = useState({
    Pergunta1: '',
    Pergunta2: '',
    Pergunta3: '',
    Pergunta4: '',
  });

  const data = {
    answer1,
    setAnswer1,
    answer2,
    setAnswer2,
    answer3,
    setAnswer3,
    answer4,
    setanswer4,
    answers,
    setAnswers,
  };
  
  return (
    <CollectContext.Provider value={ data }>
        { children }
    </CollectContext.Provider>
  );
}

CollectContext.propTypes = ({
    children: PropTypes.element.isRequired,
});

export default CollectProvider;
