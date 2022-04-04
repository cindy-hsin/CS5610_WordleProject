import React from 'react';
import { useParams } from 'react-router';
import Status from './Status';
import Input from './Input';
import Output from './Output';



// Default values: Correspond to Easy level
const DIFFICULTY_SETTING = {
  easy: {
    wordLength : 5,
    attemptNumber: 7
  },
  medium: {
    wordLength : 6,
    attemptNumber: 7
  },
  hard: {
    wordLength : 7,
    attemptNumber: 5
  }
}


export default function Game(props) {
  const pathParams = useParams();
  const currentDifficulty = pathParams.difficulty;

  // TODO: Update global state "difficulty", "remainAttemptNumber"

  /** Conditional rendering - documentation: 
   * https://reactjs.org/docs/conditional-rendering.html#:~:text=isLoggedIn%3B%0A%20%20%20%20let%20button%3B-,if%20(isLoggedIn)%20%7B,%7D,-return%20(%0A%20%20%20%20%20%20%3Cdiv%3E
   */


  console.log("Game currentDifficultySetting: ", DIFFICULTY_SETTING[currentDifficulty]);
  return (
    

    <div>
      <div>Game Level: {currentDifficulty}</div>
      

      <Status/>
      <Input />
      <Output currentDifficultySetting={DIFFICULTY_SETTING[currentDifficulty]}/>


      
    </div>
  )
};