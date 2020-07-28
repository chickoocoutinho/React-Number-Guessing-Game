import React,{useState} from 'react';

import HomePage from './components/HomePage/HomePage';
import GameLevel from './components/GameLevel/GameLevel';
import Footer from './components/Footer/Footer';

const App = () => {
  const [levels, setLevels] = useState([1]);

  const nextLevel= (levelUp)=>{
    setLevels((levels)=>[...levels,levelUp]);
  }

  return (
    <>
      <HomePage />
      {
        levels.map((value)=>{
          return(
            <GameLevel level={value} nextLevel={nextLevel} key={value}/>
          )
        })
      }   
      <Footer />
    </> 
  );
}

export default App;