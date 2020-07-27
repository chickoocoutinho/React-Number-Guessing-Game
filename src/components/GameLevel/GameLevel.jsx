import React,{useState, useEffect, useRef} from 'react';
import styles from './GameLevel.module.css';
import cx from 'classnames';
import Div100vh from 'react-div-100vh'

import NumberInput from '../NumberInput/NumberInput';

const GameLevel = ({level, nextLevel}) => {
    const [number, setNumber]= useState(1);
    const [userInput, setUserInput]= useState();
    const [gameState, setGameState]= useState({
        state: "",
        style: null
    });
    const levelRef= useRef(null);

    useEffect(()=>{
        setNumber(()=> Math.round((Math.random() * 100 * level) + 1) )
    },[level]);

    const scrollDown = ()=>{
        setTimeout(() => {
            window.scrollTo({top: levelRef.current.offsetTop + levelRef.current.offsetHeight , behavior: 'smooth'})
        }, 2000);
    };

    const checkNumber= ()=>{
        let x= Math.abs(number- userInput);
        if (x===0){
            setGameState({
                state: "Cottect !!",
                style: styles.correct
            })
            nextLevel(level+1);
            scrollDown();
        }
        else if (x>=1 && x<=4)
            setGameState({
                state: "Hot",
                style: styles.hot
            })
        else if (x>=5 && x<=15 )
            setGameState({
                state: "Warm",
                style: styles.warm
            });
        else
            setGameState({
                state: "Cold",
                style: styles.cold
            });
    };

    return (
        <Div100vh className={cx(styles.container,gameState.style)}>
            <div className={styles.content} ref={levelRef}>
                <h2>Level {level}</h2>
                <h6>Range 1 - {level*100}</h6>
                <NumberInput level={level} setUserInput={setUserInput} gameState={gameState} 
                    checkNumber={checkNumber} userInput={userInput} />
                <h3>{gameState.state}</h3>
            </div>
        </Div100vh>
    );
}

export default GameLevel;