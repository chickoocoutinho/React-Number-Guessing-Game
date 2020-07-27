import React from 'react';
import styles from './HomePage.module.css';

import Div100vh from 'react-div-100vh'


const HomePage = () => {
    return (
        <Div100vh className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Guess the Number</h1>
                <div className={styles.instructions}>
                    <h5>How far can you reach?</h5>
                    <h4> Guess the correct number and unlock the next level.</h4>
                    <ul>
                        <li>
                        If the clour is Red, you're getting close <br /> (within 1-5 range).
                        </li>
                        <li>
                        If the clour is Yellow, you're getting warm <br /> (within 5-15 range).
                        </li>
                        <li>
                        If the color is Blue, keep guessing.
                        </li>
                    </ul>
                </div>
            </div>
        </Div100vh>
    );
}

export default HomePage;