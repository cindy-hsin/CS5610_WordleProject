const initState = {
  // difficulty: "Not DEFINED!!",  // To be updated at first loading
  answer: "",   // NEED THIS AS A Global state! 
  // Although we only need to READ the value of "answer" in <Row>,
  // (which means we can pass answer down all the way to <Row/> using props)
  // the "RESET" button still needs to UPDATE answer.
  // It's easier to implement the UPDATE logic using global state.
  // historyGuess: [],
  // currentUserInput: null,     // TODO: 
  // remainAttemptNumber: -1,  // To be updated at first loading
  // guessResult: false
  status: {
    currentUserInput:null,
    historyGuess:[],
    remainAttemptNumber: -1,
    guessResult: false
  }
}


export default function game(state=initState, action) {
  switch(action.type) {
    // case "RESET_DIFFICULTY":
    //   return {...state,
    //     difficulty: action.payload
    //   };   // TODO: DO we need this action type??
    case "RESET_ANSWER_WORD":    // Used when first load the page, and when the RESET button is clicked.
      return {...state,
        answer: action.payload
      };
    case "RESET_REMAIN_ATTEMPT_NUMBER": 
      return {...state,
        status: {...state.status, 
          remainAttemptNumber: action.payload}
      }; 
    case "RESET_HISTORY_GUESS": 
      return {...state,
        status: {...state.status, 
          historyGuess: action.payload}
      }; 
    case "UPDATE_VALID_USER_INPUT": 
      const newHistoryGuess = [...state.status.historyGuess];
      const currentRowId = action.payload.totalAttemptNumber - state.status.remainAttemptNumber;
      console.log("totalAttemptNumber: ", action.payload.totalAttemptNumber );
      console.log("remainAttemptNumber: ", state.status.remainAttemptNumber );
      console.log("currentRowId: ", currentRowId)

      // action.payload.totalAttempt is the total number of attempt of the current difficulty.

      
      newHistoryGuess[currentRowId] = action.payload.userInput;
      return {...state,
        status: {...state.status,
          currentUserInput: action.payload.userInput,
          historyGuess: newHistoryGuess,
          remainAttemptNumber: state.status.remainAttemptNumber - 1
        }
      };
  
    case "UPDATE_STATUS_CORRECT_GUESS":
      return {...state,
        status: {...state.status,
          // remainAttemptNumber: state.status.remainAttemptNumber - 1,
          guessResult: true
        }
      };
    case "UPDATE_STATUS_WRONG_GUESS":
      // return {...state,
      //   status: {...state.status,
      //     remainAttemptNumber: state.status.remainAttemptNumber - 1,
      //   }
      // };
      return state;
    // case "ADD_TO_HISTORY_GUESS":
    //   return {...state,
    //     status: {...state.status,
    //       historyGuess: [...state.status.historyGuess, action.payload]
    //     }
        
    //   }
    
    default:
      return state;
  }
  

}