import Box from './Box';
import './Row.css';


export default function Row(props) {
  const answerInfo = generateAnswerInfo(props.answer);




  function generateAnswerInfo(answer) {
    const answerInfo = {};
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



  //   Deep copy answerInfo;
  //   checkUserGuess(answerInfoCopy);  -> result用props传给对应的Box改颜色
  
  //   If (correctCount === currentDifficultySetting.wordLength) {
  // 	UPDATE STORE: state.guessResult => true;
  // } else {
  // UPDATE STORE: state.remainAttemptNumber => -1;
  
  // }

  
  

  return(
    <div className='word-row'> 
      {Array.from({length: props.wordLength}, () => <Box />)}
    </div>
  )
  
}