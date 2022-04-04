import Box from './Box';


export default function Row(props) {
  //   Deep copy answerInfo;
  //   checkUserGuess(answerInfoCopy);  -> result用props传给对应的Box改颜色
  
  //   If (correctCount === currentDifficultySetting.wordLength) {
  // 	UPDATE STORE: state.guessResult => true;
  // } else {
  // UPDATE STORE: state.remianAttemptNumber => -1;
  
  // }

  const boxNumber = props.wordLength;

  return(
    <div>
      {Array.from({length: boxNumber}, () => <Box />)}
    </div>
  )
  
}