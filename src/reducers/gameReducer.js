const initState = {
  difficulty: "Not DEFINED!!",  // To be updated at first loading
  answer: "",
  historyGuess: [],
  currentUserInput: "",     // TODO: 
  remainAttemptNumber: -1,  // To be updated at first loading
  guessResult: false
}


export default function game(state=initState, action) {
  switch(action.type) {
    case "CHANGE_DIFFICULTY":
      return "xxxxx";   // TODO: DO we need this action type??   
    case "UPDATE_STATUS_CORRECT_GUESS":
      return {...state,
        remainAttemptNumber: state.remainAttemptNumber - 1,
        guessResult: true
      };
    case "UPDATE_STATUS_WRONG_GUESS":
      return {...state,
        remainAttemptNumber: state.remainAttemptNumber + 1,
      };
    
    default:
      return state;
  }
  

}