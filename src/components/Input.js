import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { updateValidUserInput } from "../actions";
import { VALID_ENGLISH_WORD_LIST } from "../setting";


export default function Input(props) {
  const validWordLength = props.validWordLength;
  //TODO: Word length should be passed in through props

  // let userInput;
  // let userInput = document.getElementById("input").value;
  // console.log("init userInput: " + userInput);
  let[userInput, setUserInput] = useState("");//需要用useState吗
  const [validationMessage, setValidationMessage] = useState("");
  const dispatch = useDispatch();


  function validateInput(userInput, wordLength) {
    if (checkLength(userInput, wordLength)) {
      return checkEnglishWord(userInput)
    }
    return false;
  }
  
  /**
   * Check input length and Update validation Message
   */
  function checkLength(userInput, wordLength) {
    console.log("checkLength: " + userInput);
    if (userInput.length < wordLength) {
      // Update  validation message: Your input word is too short"
      setValidationMessage("Your input word is too short");
      return false;
    } else if (userInput.length > wordLength) {
      // Update  validation message: Your input word is too long"
      setValidationMessage("Your input word is too long");
      return false;
    }
    // setValidationMessage("");  //Don't need this. As long as we reset message to "" in checkEnglishWord.
    return true;
  }
  
  function checkEnglishWord(userInput) {
    if (! (VALID_ENGLISH_WORD_LIST.includes(userInput))) {
      setValidationMessage("Your input word is not a valid English word! ");
      return false;
    }
    setValidationMessage(""); //?? Do we need this?
    return true;
  }
  

  
  return (
    <div>Input Component!
      <input id="input"
        onChange={(event) => {
          setUserInput(event.target.value);
          // userInput = event.target.value;
        console.log("userInput at onChange: ", userInput)}}
        type={"text"}
      />
      <button onClick={
        () => {
          if (validateInput(userInput, validWordLength)) {
            console.log("dispatch input");
            dispatch(updateValidUserInput(userInput));
            console.log("dispatch??");
          }
        }
      }>{"Submit"}</button>
      <div>Validation Message: {validationMessage}</div>
       {/** TODO: Erase literal "Validation Message:", so that
        * when user enters a valid input, no message is shown.
        */}
    </div>
  )
}