import React, { useState } from "react";
import CollectContext from "../context/CollectContext";
import PropTypes from 'prop-types';

function CollectProvider({ children }) {
  const [answers, setAnswers] = useState({
    Pergunta1: '',
    Pergunta2: '',
    Pergunta3: '',
    Pergunta4: '',
  });

  const data = {
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
