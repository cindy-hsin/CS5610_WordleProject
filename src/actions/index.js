// const resetDifficulty = (newDifficulty) => {
//   return {
//     type: "RESET_DIFFICULTY",
//     payload: newDifficulty
//   }
// }


export const resetRemainAttemptNumber = (newRemainNumber) => {
  return {
    type: "RESET_REMAIN_ATTEMPT_NUMBER",
    payload: newRemainNumber
  }
}

export const resetAnswerWord = (newAnswerWord) => {
  return {
    type: "RESET_ANSWER_WORD",
    payload: newAnswerWord
  };
}

export const updateValidUserInput = (inputValidWord, answerInfoCopy, wordLength) => {
  return {
    type: "UPDATE_VALID_USER_INPUT",
    inputValidWord,
    answerInfoCopy,
    wordLength
  };

}

export const updateStatusCorrectGuess = ()=> {
  return {
    type: "UPDATE_STATUS_CORRECT_GUESS"
  };
}

// export const updateStatusWrongGuess = ()=> {
//   return {
//     type: "UPDATE_STATUS_WRONG_GUESS"
//   };
// }

export const disableInput = () => {
  return {
    type: "DISABLE_INPUT"
  };
}


export const addToHistoryGuess = (newGuess) => {
  return {
    type: "ADD_TO_HISTORY_GUESS",
    payload: newGuess
  }
}
// const actions = {
//   resetRemainAttempNumber,
//   // resetDifficulty,
//   resetAnswerWord,
//   updateValidUserInput,
//   updateStatusCorrectGuess,
//   updateStatusWrongGuess
// }

// export default actions;