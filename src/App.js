import React,{useState} from 'react';
import HomePage from './components/HomePage/HomePage';
import GameLevel from './components/GameLevel/GameLevel';

const App = () => {
  const [levels, setLevels] = useState([1]);

  const nextLevel= (levelUp)=>{
    setLevels((levels)=>[...levels,levelUp]);
  }

  const onScroll= (e)=>{
    console.log(window.pageYOffset, window.innerHeight);
    
    if(e.deltaY > 0) {
      window.scrollTo({top: window.pageYOffset+ window.innerHeight, behavior: "smooth"})
    } else {
      window.scrollTo({top: window.pageYOffset- window.innerHeight, behavior: "smooth"})
    }
  }

  return (
    <>
    <div onWheel={onScroll}>
      <HomePage />
      {
        levels.map((value)=>{
          return(
            <GameLevel level={value} nextLevel={nextLevel} key={value}/>
          )
        })
      }   
    </div> 
  
    </>
  );
}

export default App;