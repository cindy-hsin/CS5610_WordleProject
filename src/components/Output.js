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
  const answerInfo = props.answerInfo;

  const dispatch = useDispatch();
  
  // const [historyGuess, setHistoryGuess] = useState(Array(rowNumber).fill(null));
  // WHENEVER currentUserInput is updated:    //TODO: consider dupcliate valid input(user input the same valid input values twice)
  // UPDATE 

  // const guesses = Array(rowNumber).fill(null); 
  
  //TODO: Do we need shallowEqual for string type(primitive type)??
  
  const status = useSelector(state => state.game.status); 
  const userGuess = status.currentUserInput;
  const remainAttemptNumber = status.remainAttemptNumber;
  const historyGuess = status.historyGuess;
  console.log(`userGuess: ${userGuess}, remainAttemptNumber: ${remainAttemptNumber}, historyGuess: ${historyGuess}`);
  // const remainAttemptNumber = useSelector(state => state.game.remainAttemptNumber);
  // console.log(`UserGuess:${userGuess}, remainAttemptNumber: ${remainAttemptNumber} `);
  // const remainAttemptNumber = useSelector(state => state.game.remainAttemptNumber);
  // console.log("RemainAttemptNumber: ", remainAttemptNumber);

  if (userGuess !== null) {// NOTE: userGuess's initial value is null. This is to stop dispatching updateStatus actions when page is first loaded.  
    const { correctCount, colors } = checkUserGuess(userGuess);
    console.log(`User guess Checked!  correctCount: ${correctCount}, colors: ${colors}`);
  
    if (correctCount === wordLength) {
      dispatch(updateStatusCorrectGuess());  //TODO: re-render Status component;
      console.log("Dispatched updateStatusCorrectGuess")
    }
    // } else {
    //   dispatch(updateStatusWrongGuess());
    //   console.log("Dispatched updateStatusWrongGuess")
    // }
    // dispatch(addToHistoryGuess(userGuess));
    // console.log("Dispatched addToHistoryGuess.");

      // //TODO: Having two useSelector in Output. What's the logic for re-rendering?
    // const currentRowId = rowNumber - remainAttemptNumber - 1;
    // const currentRowId = rowNumber - remainAttemptNumber - 1;
  }

  // const updatedHistoryGuess = useSelector(state=>state.game.historyGuess);
  // const currentRow = 
  // setHistoryGuess([...historyGuess, ]); 
  // console.log("Updated history guess: ", updatedHistoryGuess);

  // TODO: updatedHistoryGuess should be local state?

  function checkUserGuess(userGuess) {
    let correctCount = 0;
    const colors = Array(rowNumber).fill(null);
  
    for (let i in userGuess) {
      const char = userGuess[i];
      if (!(char in answerInfo)) {
        
        console.log(`Index: ${i}, Char: ${char} Color: Gray`);
        colors[i] = GRAY;
        // Gray;
      } else {
        if (answerInfo[char].remainCount === 0) {
          console.log(`Index: ${i}, Char: ${char} Color: Gray`);
          colors[i] = GRAY;
          //Gray;
        } else {
          
          if (answerInfo[char].index.has(i)) {
            console.log(`Index: ${i}, Char: ${char} Color: Green`);
            // Green;
            colors[i] = GREEN;
            correctCount += 1;
          } else {
            console.log(`Index: ${i}, Char: ${char} Color: Yellow`);
            colors[i] = YELLOW;
            // Yellow
          }
          answerInfo[char].remainCount -= 1;   //TODO: Notice we updated answerInfo here!!!!
        }
      }
  
    }
  
    // TODO: update <StatusMessage> based on correctCount
    
    return {
      correctCount ,
      colors
    };
  }

  console.log("HistoryGuess.map result:", historyGuess.map((guess,i) => <Row rowId={i} guess={guess}/>))


  return(
    <div>
      <div>rowNumber: {rowNumber}</div>
      <div>wordLength: {wordLength}</div>
      {/* <Row guess={}/> */}
       {/* {Array.from({length: rowNumber}, (v,i) => <Row wordLength={wordLength} key={i}/>)} */}
      {
        historyGuess.map((guess,i) => <Row wordLength={wordLength} rowId={i} guess={guess}/>)
      }
    </div>
  )

  


}