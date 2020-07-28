import React,{useState} from 'react';
import styles from './NumberInput.module.css';

const NumberInput = ({setUserInput, userInput, checkNumber, level, gameState}) => {
    const [isError, setIsError]= useState({
        error: false,
        message: ""
    });
    
    const handleSubmit= (event)=>{
        event.preventDefault();
        if(!userInput)
            setIsError({
                error: true,
                message: "Please Enter a Valid Number"
            })
        else if(userInput<1)
            setIsError({
                error:true,
                message:"Please Enter a Number equal to or greater than 1"
            });
        else if(userInput> 100*level)
            setIsError({
                error: true,
                message: `Please Enter a Number equal to or less than ${100*level}`
            })
        else{
            checkNumber();
        }
    };

    const handleError= ()=>{
        setTimeout(()=>{
            setIsError({
                error: false,
                message: ""
            })
        },3100)
        return(styles.modal)
    }

    const handleUserInput= (event)=>{
        let value= parseInt(event.target.value);
        if (isNaN(value))
            setUserInput(undefined)
        else if(event.target.value.length<6)
            setUserInput(value);
    };

    const handleKeyboardEnter= (event)=>{
        if(event.charCode === 13)
            handleSubmit(event)
    }

    return (
        <div className={styles.container}>
            <input type="number" id="user input" placeholder="Guess"
                disabled={gameState.state==="Correct !"? true:false} onKeyPress={handleKeyboardEnter}         
                onChange={handleUserInput} value={userInput} />
            <button onClick={handleSubmit} disabled={gameState.state==="Correct !"? true:false}
                className={gameState.state==="Correct !"?styles.correct:styles.wrong} > 
                Submit 
            </button>
            <div className={isError.error? handleError():styles.null}>
                <h6>{isError.message}</h6>
            </div>
        </div>
    );
}

export default NumberInput;