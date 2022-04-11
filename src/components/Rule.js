import React from 'react';
import './Rule.css';


export default function Rule() {
  return (
    <div>
        <div className="rule-content">
            <h3>How to play</h3>
            <p>Guess the hidden words in certain tries. To start the game, just enter any valid word. After each guess, the color of the tiles will change to show how close your guess was to the word. The letter in green means it is in the word and in the correct spot. The letter in Yellow means it is in the word but in the wrong spot. The letter in grey means it is not in the word in any spot.</p>
            <p>There are three level of difficulties in this game. In easy mode, you  need to find a 5-letter random word with 7 tries. In medium mode, you need to find a 6-letter random word with 6 tries. In easy mode, you need to find a 7-letter random word with 5 tries.</p>
            <hr/>
            <div>Example:</div>
            <div>Correct Answer: FACES</div>
            <div>You enter: EATER</div>
            <div>You will get：</div>
            <div className="word-row">
                <div className="letter-box yellow">E</div>
                <div className="letter-box green">A</div>
                <div className="letter-box grey">T</div>
                <div className="letter-box grey">E</div>
                <div className="letter-box grey">R</div>
            </div>
            <hr/>
            <h5>GLHF!😃</h5>
        </div>
    </div>
  )
};