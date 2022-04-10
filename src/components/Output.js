import Row from './Row';
import { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { updateStatusCorrectGuess, 
         updateStatusWrongGuess,
         addToHistoryGuess } from '../actions';


const GRAY = "gray";
const GREEN = "green";
const YELLOW = "yellow";


export default function Output(props) {
  const rowNumber = props.rowNumber;
  const wordLength = props.wordLength;

  const answer = props.answer;
  // const answerInfo = props.answerInfo;

  const dispatch = useDispatch();

  
  console.log("Output is re-rendered!")
  
  // WHENEVER state.game.status.currentUserInput is updated (i.e. whever there's a valid input), 
  // state.game.status becomes different, which triggers re-rendering of this Component.
  const status = useSelector(state => state.game.status, shallowEqual); 
  //TODO: Do we need shallowEqual for string type(primitive type)??
  const userGuess = status.currentUserInput;
  const remainAttemptNumber = status.remainAttemptNumber;
  const historyGuess = status.historyGuess;   // [{guess: "world" colors: ["grey", "grey","yellow","green","yellow"]}]
  console.log(`userGuess: ${userGuess}, remainAttemptNumber: ${remainAttemptNumber}, historyGuess: ${historyGuess}`);

  /* Cannot use historyColor as local state: 
   * setHistoryColor will trigger re-render, and since setHistoryColor is not
   * wrapped inside any condition, when re-rendered setHistoryColor will be called again,
   * and again push the same colors into the new historyColor, 
   * which again triggers re-render ..... -> INFINITE RE-RENDER! 
  // Local State: historyColor (an array of {colors array}'s)
  const [historyColor, setHistoryColor] = useState([]);
  */



  // WHENEVER a re-rending happens (i.e. Whenever there's a valid input),
  // check the valid input, and get the array of colors.
  /* Need to move checkUserGuess to gameReducer.js
  const { correctCount, colors } = checkUserGuess(userGuess);
  */
  
  
  /* Cannot use historyColor as local state
   setHistoryColor([...historyColor, colors]);
  */
  
  

  // if (correctCount === wordLength) {
  if (userGuess === answer) {
    dispatch(updateStatusCorrectGuess());  //change guessResult to True
    console.log("Dispatched updateStatusCorrectGuess")
  }
  

  // function checkUserGuess(userGuess) {
  //   let correctCount = 0;
  //   const colors = Array(rowNumber).fill(null);
  
  //   for (let i in userGuess) {
  //     const char = userGuess[i];
  //     if (!(char in answerInfo)) {
        
  //       console.log(`Index: ${i}, Char: ${char} Color: Gray`);
  //       colors[i] = GRAY;
  //       // Gray;
  //     } else {
  //       if (answerInfo[char].remainCount === 0) {
  //         console.log(`Index: ${i}, Char: ${char} Color: Gray`);
  //         colors[i] = GRAY;
  //         //Gray;
  //       } else {
          
  //         if (answerInfo[char].index.has(i)) {
  //           console.log(`Index: ${i}, Char: ${char} Color: Green`);
  //           // Green;
  //           colors[i] = GREEN;
  //           correctCount += 1;
  //         } else {
  //           console.log(`Index: ${i}, Char: ${char} Color: Yellow`);
  //           colors[i] = YELLOW;
  //           // Yellow
  //         }
  //         answerInfo[char].remainCount -= 1;   //TODO: Notice we updated answerInfo here!!!!
  //       }
  //     }
  
  //   }
  
  //   // TODO: update <StatusMessage> based on correctCount
    
  //   return {
  //     correctCount ,
  //     colors
  //   };
  // }

  console.log("HistoryGuess result:", historyGuess);


  return(
    <div>
      {/* <div>rowNumber: {rowNumber}</div>
      <div>wordLength: {wordLength}</div> */}
      {/* <Row guess={}/> */}
       {/* {Array.from({length: rowNumber}, (v,i) => <Row wordLength={wordLength} key={i}/>)} */}
      {
        // historyGuess.map((guess,i) => <Row wordLength={wordLength} rowId={i} guess={guess}/>)
        historyGuess.map((guess) => <Row wordLength={wordLength} guess={guess}/>)
      }
    </div>
  )

  


}