import React,{useState} from 'react';
import styles from './NumberInput.module.css';

const NumberInput = ({setUserInput, userInput, checkNumber, level, number}) => {
    const [isError, setIsError]= useState({
        error: false,
        message: ""
    });
    
    const handleSubmit= (event)=>{
        event.preventDefault();
        if(userInput===NaN)
            setIsError({
                error:true,
                message:"Please Enter a valid Number"
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
        else if(!userInput)
            setIsError({
                error: true,
                message: "Please Enter a Number"
            })
        else{
            setIsError({
                error: false,
                message:""
            });
            checkNumber();
        }
    };

    const handleUserInput= (event)=>{
        if(event.target.value.length<6)
            setUserInput(parseInt(event.target.value));
    };

    return (
        <div className={styles.container}>
            <input type="number" id="user input" className={userInput===number?styles.correct:styles.wrong}
                placeholder="Guess" onChange={handleUserInput} value={userInput}/>
            <button onClick={handleSubmit}> Submit </button>
        </div>
    );
}

export default NumberInput;