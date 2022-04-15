import React from 'react';
import {useParams} from 'react-router';
import {useDispatch} from 'react-redux';
import {resetRemainAttemptNumber, resetAnswerWord, resetHistoryGuess } from '../actions';


import Status from './Status';
import Input from './Input';
import Output from './Output';
import {Button} from 'react-bootstrap';
import {DIFFICULTY_SETTING} from '../setting';

import './Game.css';

export default function Game(props) {
    console.log("Game is Re-rendered!");
    const pathParams = useParams();
    const currentDifficulty = pathParams.difficulty;
    const currentDifficultySetting = DIFFICULTY_SETTING[currentDifficulty];
    console.log("Game currentDifficultySetting: ", currentDifficultySetting);

    const answerWordList = currentDifficultySetting.answerWordList;
    console.log("Answer word list: ", answerWordList);
    const randomIndex = Math.floor(Math.random() * answerWordList.length);
    console.log("Random Index: ", randomIndex);
    const answer = answerWordList[randomIndex];
    console.log("Answer word: ", answer);
    const answerInfo = generateAnswerInfo(answer);

    // !!! 
    const historyGuess = Array(currentDifficultySetting.attemptNumber).fill({
      inputValidWord: null, 
      colors: null});
      // color: Array(currentDifficultySetting.wordLength).fill("white")});
    console.log("Initial historyGuess:", historyGuess);
    const dispatch = useDispatch();

    dispatch(resetAnswerWord(answer));
    dispatch(resetRemainAttemptNumber(currentDifficultySetting.attemptNumber));
    dispatch(resetHistoryGuess(historyGuess));

    function generateAnswerInfo(answer) {
        const answerInfo = {}
        for (let i in answer) {
            const char = answer[i];
            if (!(char in answerInfo)) {
                answerInfo[char] = {
                    index: new Set([i]),
                    count: 1
                }
            } else {
                answerInfo[char].index.add(i);
                answerInfo[char].count += 1;
            }
        }
        console.log("Generate Answer Info: ", answerInfo)
        return answerInfo;

    }

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        /** Conditional rendering - documentation:
         * https://reactjs.org/docs/conditional-rendering.html#:~:text=isLoggedIn%3B%0A%20%20%20%20let%20button%3B-,if%20(isLoggedIn)%20%7B,%7D,-return%20(%0A%20%20%20%20%20%20%3Cdiv%3E
         */

        <div className={"game-" + currentDifficulty}>
            <Button className="restart" href={"/game/" + currentDifficulty}
                    variant="dark">Restart</Button>
            <div className="game-level">Game Level: {capitalizeFirstLetter(currentDifficulty)}</div>
            {/*<div>Target Word: {answer}</div>*/}


            <Input
                validWordLength={currentDifficultySetting.wordLength}
                answerInfo={answerInfo}
                totalAttemptNumber={currentDifficultySetting.attemptNumber}
            />

            <Status/>
            <Output
                wordLength={currentDifficultySetting.wordLength}
                answer={answer}/>

        </div>
    )
};