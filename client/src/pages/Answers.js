import React from 'react';
import Header from '../components/Header';
import AmountAnswers from '../components/AmountAnswers';
import CollectProvider from '../context/CollectProvider';

function Answers() {
  return (
    <CollectProvider>
      <Header />
      <AmountAnswers />
    </CollectProvider>
  );
}

export default Answers;