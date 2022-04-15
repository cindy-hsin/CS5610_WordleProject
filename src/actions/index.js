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

export const resetHistoryGuess = (newHistoryGuess) => {
  return {
    type: "RESET_HISTORY_GUESS",
    payload: newHistoryGuess
  }
}

export const updateValidUserInput = (inputValidWord, answerInfoCopy, wordLength, totalAttemptNumber) => {
    return {
        type: "UPDATE_VALID_USER_INPUT",
        inputValidWord,
        answerInfoCopy,
        wordLength,
        totalAttemptNumber
    };
}

export const updateStatusCorrectGuess = () => {
    return {
        type: "UPDATE_STATUS_CORRECT_GUESS"
    };
}


export const disableInput = () => {
    return {
        type: "DISABLE_INPUT"
    };
}