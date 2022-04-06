import Row from './Row';
import { useSelector, useDispatch } from 'react-redux';

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
  
  // WHENEVER currentUserInput is updated:    //TODO: consider dupcliate valid input(user input the same valid input values twice)
  // UPDATE 

  // const guesses = Array(rowNumber).fill(null); 
  
  //TODO: Do we need shallowEqual for string type(primitive type)??
  const userGuess = useSelector(state => state.game.currentUserInput); 
 
  
  const { correctCount, colors } = checkUserGuess(userGuess);

  if (correctCount === wordLength) {
    dispatch(updateStatusCorrectGuess);  //TODO: re-render Status component;
  } else {
    dispatch(updateStatusWrongGuess);
  }
  dispatch(addToHistoryGuess(userGuess));

  //TODO: Having two useSelector in Output. What's the logic for re-rendering?
  const updatedHistoryGuess = useSelector(state=>state.game.historyGuess);


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




  return(
    <div>
      <div>rowNumber: {rowNumber}</div>
      <div>wordLength: {wordLength}</div>
      {/* {Array.from({length: rowNumber}, () => <Row wordLength={wordLength}/>)} */}
      {
        updatedHistoryGuess.map((guess)=>{<Row guess={}/>})

      }
    </div>
  )

  


}