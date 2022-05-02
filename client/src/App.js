import React from 'react';
import Header from './components/Header';
import CollectProvider from './context/CollectProvider';
import AddAnswers from './components/AddAnswers';

function App() {
  return (
    <CollectProvider>
      <Header />
      <AddAnswers />
    </CollectProvider>
  );
}

export default App;
