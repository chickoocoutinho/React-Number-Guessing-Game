import React,{useState, useEffect} from 'react';
import styles from './GameLevel.module.css';
import cx from 'classnames';

import NumberInput from '../NumberInput/NumberInput';

const GameLevel = ({level}) => {
    const [number, setNumber]= useState(1);
    const [userInput, setUserInput]= useState();
    const [gameState, setGameState]= useState(null)

    useEffect(()=>{
        setNumber(()=> Math.round((Math.random() * 100 * level) + 1) )
    },[]);

    const checkNumber= ()=>{
        let x= Math.abs(number- userInput);
        if (x===0){
            setGameState(styles.correct)
        }
        else if (x>=1 && x<=4)
            setGameState(styles.hot)
        else if (x>=5 && x<=15 )
            setGameState(styles.warm);
        else
            setGameState(styles.cold);
    };

    return (
        <div className={cx(styles.container,gameState)}>
            <div className={styles.content}>
                <NumberInput level={level} setUserInput={setUserInput} 
                    checkNumber={checkNumber} userInput={userInput} number={number} />
                <h2>Hott</h2>
            </div>
        </div>
    );
}

export default GameLevel;