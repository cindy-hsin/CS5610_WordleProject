import Box from './Box';
import './Row.css';


export default function Row(props) {
  


  //   Deep copy answerInfo;
  //   checkUserGuess(answerInfoCopy);  -> result用props传给对应的Box改颜色
  
  //   If (correctCount === currentDifficultySetting.wordLength) {
  // 	UPDATE STORE: state.guessResult => true;
  // } else {
  // UPDATE STORE: state.remainAttemptNumber => -1;
  
  // }

  
  
  console.log(`Row id: ${props.rowId}, guess: ${props.guess}`);
  return(
    <div className='word-row'> 
      row: {props.rowId}, guess: {props.guess}
      {Array(props.wordLength).fill(<Box/>)}
    </div>
  )
  
}