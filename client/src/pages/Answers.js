import React from 'react';
import Header from '../components/Header'
import CollectProvider from '../context/CollectProvider';

function Answers() {
  return (
    <CollectProvider>
      <Header />
    </CollectProvider>
  );
}

export default Answers;