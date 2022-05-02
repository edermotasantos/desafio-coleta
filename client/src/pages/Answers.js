import React from 'react';
import Header from '../components/Header'
import CollectProvider from '../context/CollectProvider';
import AddAnswers from '../components/AddAnswers';

function Answers() {
  return (
    <CollectProvider>
      <Header />
      <p>Resultados</p>
    </CollectProvider>
  );
}

export default Answers;