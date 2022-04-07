import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { updateValidUserInput } from "../actions";
import { VALID_ENGLISH_WORD_LIST } from "../setting";


export default function Input(props) {
  const validWordLength = props.validWordLength;
  //TODO: Word length should be passed in through props
  let userInput;
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
   * 0: too short
   * 1: correct length
   * 2: too long
   */
  function checkLength(userInput, wordLength) {
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
      <input
        onChange={(event) => {userInput = event.target.value;
        console.log("userInput at onChange: ", userInput)}}
        type={"text"}
      />
      <button onClick={
        () => {
          if (validateInput(userInput, validWordLength)) {
            console.log("Inside Input, totalAttemptNumber", props.totalAttemptNumber);
            dispatch(updateValidUserInput(userInput, props.totalAttemptNumber));
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