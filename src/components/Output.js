import Row from './Row';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {updateStatusCorrectGuess, updateStatusWrongGuess} from "../actions";
import React, {useState} from "react";



export default function Output(props) {
    const rowNumber = props.rowNumber;
    console.log("rowNumber" + rowNumber);
    const wordLength = props.wordLength;

    // const [currRowIdx, setCurrRowIdx] = useState(0);//--------------

    // const answer = useSelector(state => state.game.answer);//shallowequal??
    const answer = props.answer;
    // const currentUserInput = useSelector(state => state.game.currentUserInput);//shallowequal??
    const status = useSelector(state => state.game.status, shallowEqual);
    const currentUserInput = status.currentUserInput;

    const dispatch = useDispatch();
    console.log("input: " + currentUserInput);

    if(currentUserInput){
        console.log("check answer")
        // checkUserGuess(currentUserInput);//------------
        if(answer === currentUserInput){
            //修改guessResult
            console.log("right answer!!!");
            dispatch(updateStatusCorrectGuess());//()!!!
        }else{
            console.log("wrong answer!");
            dispatch(updateStatusWrongGuess());
            //算在第几行 填入row
            //attemptNumber也要更新
        }
    }
    const temp = document.getElementById('0');
    console.log(temp);


    // function checkUserGuess(userGuess) {
    //     let correctCount = 0;
        // const colors = Array(rowNumber).fill(null);
        // let idx =

        // for (let i in userGuess) {
        //     const char = userGuess[i];
        //     if (!(char in answerInfo)) {
        //
        //         console.log(`Index: ${i}, Char: ${char} Color: Gray`);
        //         colors[i] = GRAY;
        //         // Gray;
        //     } else {
        //         if (answerInfo[char].remainCount === 0) {
        //             console.log(`Index: ${i}, Char: ${char} Color: Gray`);
        //             colors[i] = GRAY;
        //             //Gray;
        //         } else {
        //
        //             if (answerInfo[char].index.has(i)) {
        //                 console.log(`Index: ${i}, Char: ${char} Color: Green`);
        //                 // Green;
        //                 colors[i] = GREEN;
        //                 correctCount += 1;
        //             } else {
        //                 console.log(`Index: ${i}, Char: ${char} Color: Yellow`);
        //                 colors[i] = YELLOW;
        //                 // Yellow
        //             }
        //             answerInfo[char].remainCount -= 1;   //TODO: Notice we updated answerInfo here!!!!
        //         }
        //     }

        // }
        //
        // // TODO: update <StatusMessage> based on correctCount
        //
        // return {
        //     correctCount ,
        //     colors
        // };
    // }
  
  
  return(
    <div>
      <div>rowNumber: {rowNumber}</div>
      <div>wordLength: {wordLength}</div>
        {/*{Array.from({length: rowNumber}, (ele, idx) => <Row id={idx} key={idx} wordLength={wordLength}/>)}*/}
      {Array.from({length: rowNumber}, (ele, idx) => <Row id={idx} userInput={currentUserInput} key={idx} wordLength={wordLength} rowNumber={rowNumber}/>)}
    </div>
  )

  


}