const initState = {
  difficulty: "UNDEFINED",  // To be updated at first loading
  answer: "",
  historyGuess: [],
  currentUserInput: "",
  remainAttemptNumber: -1,  // To be updated at first loading
  guessResult: false
}



export default function game(state=initState, action) {
  switch(action.type) {
    case "CHANGE_DIFFICULTY":
      return "xxx";   // TODO: return;
    case "UPDATE_STATUS_CORRECT_GUESS":
      return 
        {...state,
        remainAttemptNumber: state.remainAttemptNumber - 1,
        guessResult: true
        };
    default:
      return state;
  }
  

}