import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { resetRemainAttemptNumber, resetAnswerWord, resetHistoryGuess } from '../actions';


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
  const answerInfo = generateAnswerInfo(answer);

  const historyGuess = Array(currentDifficultySetting.attemptNumber).fill(null);
  const dispatch = useDispatch();
  // dispatch(resetDifficulty(currentDifficulty));
  dispatch(resetAnswerWord(answer));
  dispatch(resetRemainAttemptNumber(currentDifficultySetting.attemptNumber));
  dispatch(resetHistoryGuess(historyGuess));

  // TODO: Update global state "historyGuesses"

  function generateAnswerInfo(answer) {
    const answerInfo = {}
    for (let i in answer) {
      const char = answer[i];
      if (!(char in answerInfo)) {
        answerInfo[char] = {
          index: new Set([i]),
          remainCount: 1
        }
      } else {
        answerInfo[char].index.add(i);
        answerInfo[char].remainCount +=1;
      }
    }
  
    return answerInfo;

  }




  return (
  

  /** Conditional rendering - documentation: 
   * https://reactjs.org/docs/conditional-rendering.html#:~:text=isLoggedIn%3B%0A%20%20%20%20let%20button%3B-,if%20(isLoggedIn)%20%7B,%7D,-return%20(%0A%20%20%20%20%20%20%3Cdiv%3E
   */
    
    <div>
      <div>Game Level: {currentDifficulty}</div>
      <div>Target Word: {answer}</div>

      <Status/>
      <Input 
        validWordLength={currentDifficultySetting.wordLength}
        totalAttemptNumber = {currentDifficultySetting.attemptNumber} />
      <Output 
        rowNumber = {currentDifficultySetting.attemptNumber}
        wordLength = {currentDifficultySetting.wordLength}
        answer={answer}
        answerInfo={answerInfo}/>


      
    </div>
  )
};