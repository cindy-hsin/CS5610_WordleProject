import React from 'react';
import './Rule.css';


export default function Rule() {
    return (
        <div>
            <div className="rule-content">
                <div className="instruction">
                    <h3>How to play</h3>
                    <p>Guess the target word in certain tries. To start the game, just enter any valid word. After each
                        guess, the color of the tiles will change to show how close your guess was to the target word. A green 
                        tile suggests that the letter is in the word, and in the correct spot. A yellow tile suggests 
                        that the letter is in the word, but in the wrong spot. A grey tile suggests that the 
                        letter is not in the word in any spot</p>
                    <p>There are three difficulty levels in this game. In Easy mode, you need to guess a 5-letter
                        random word within 7 tries. In Medium mode, you need to guess a 6-letter random word within 6 tries.
                        In Hard mode, you need to guess a 7-letter random word within 5 tries. By clicking the "Restart"
                        button, you can start a new game to guess a new word.</p>
                </div>
                <hr/>
                <div className="example">
                    <div>Example:</div>
                    <div>Correct Answer: FACES</div>
                    <div>Enter: EATER</div>
                    <div>You will get:</div>
                    <div className="word-row">
                        <div className="letter-box yellow">E</div>
                        <div className="letter-box green">A</div>
                        <div className="letter-box grey">T</div>
                        <div className="letter-box grey">E</div>
                        <div className="letter-box grey">R</div>
                    </div>
                </div>
                <hr/>
                <h5>GLHF!😃</h5>
            </div>
        </div>
    )
};