import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { resetRemainAttempNumber, resetAnswerWord } from '../actions';


import Status from './Status';
import Input from './Input';
import Output from './Output';
import { DIFFICULTY_SETTING } from '../setting';



export default function Game(props) {
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

  const dispatch = useDispatch();
  // dispatch(resetDifficulty(currentDifficulty));
  dispatch(resetAnswerWord(answer));
  dispatch(resetRemainAttempNumber(currentDifficultySetting.attemptNumber));

  // TODO: Update global state "remainAttemptNumber"


  return (
  

  /** Conditional rendering - documentation: 
   * https://reactjs.org/docs/conditional-rendering.html#:~:text=isLoggedIn%3B%0A%20%20%20%20let%20button%3B-,if%20(isLoggedIn)%20%7B,%7D,-return%20(%0A%20%20%20%20%20%20%3Cdiv%3E
   */
    
    <div>
      <div>Game Level: {currentDifficulty}</div>
      <div>Target Word: {answer}</div>

      <Status/>
      <Input validWordLength={currentDifficultySetting.wordLength}/>
      <Output 
        rowNumber = {currentDifficultySetting.attemptNumber}
        wordLength = {currentDifficultySetting.wordLength}
        answer={answer}/>


      
    </div>
  )
};