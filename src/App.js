import React from 'react';
import HomePage from './components/HomePage/HomePage';
import GameLevel from './components/GameLevel/GameLevel';

const App = () => {
  return (
    <>
    <HomePage />
    <GameLevel level={1}/>
    </>
  );
}

export default App;