import Box from './Box';
import './Row.css';
import React, {useState} from "react";
import {shallowEqual, useSelector} from "react-redux";


export default function Row(props) {
  const answerInfo = generateAnswerInfo(props.answer);

  // const [currRowIdx, setCurrRowIdx] = useState(0);//--------------

  const status = useSelector(state => state.game.status, shallowEqual);
  const currentUserInput = status.currentUserInput;

  // const [letter, setLetter] = useState("");
  // const currAttemptIdx = props.rowNumber - status.remainAttemptNumber - 1;//---- -1????
  // if(currAttemptIdx === props.id){
  //   setLetter(props.userInput);
  // }






  function generateAnswerInfo(answer) {//得到的是一个set里头装着answer里面每个出现的字母的对应的index和次数
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
      {/*{Array.from({length: props.wordLength}, (ele, idx) => <Box id={idx} key={idx}/>)}*/}
      {Array.from({length: props.wordLength}, (ele, idx) => <Box id={idx} letter={currentUserInput[idx]}key={idx}/>)}
    </div>
  )
  
}