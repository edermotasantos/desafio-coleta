import React from 'react';
import Header from '../components/Header'
import CollectProvider from '../context/CollectProvider';
import AddAnswers from '../components/AddAnswers';

function Home() {
  return (
    <CollectProvider>
      <Header />
      <AddAnswers />
    </CollectProvider>
  );
}

export default Home;
