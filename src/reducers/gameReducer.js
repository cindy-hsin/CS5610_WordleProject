
const GRAY = "gray";
const GREEN = "green";
const YELLOW = "yellow";

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
    currentUserInput:null,  // only store VALID user input
    historyGuess:[], // [{inputValidWord: "world" colors: ["grey", "grey","yellow","green","yellow"]}]
    remainAttemptNumber: -1,
    guessResult: false,
  },
  isInputDisabled: false
  
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
    case "UPDATE_VALID_USER_INPUT": 
      const colors = checkUserGuess(action.inputValidWord, action.answerInfoCopy, action.wordLength);
      console.log("TEST HISTORYGUESS!: ", [...state.status.historyGuess, {
        inputValidWord: action.inputValidWord, 
        colors: colors}])

      return {...state,
        status: {...state.status,
          currentUserInput: action.inputValidWord,
          historyGuess: [...state.status.historyGuess, {
            inputValidWord: action.inputValidWord, 
            colors: colors}],
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
    case "DISABLE_INPUT": 
      return {...state,
        isInputDisabled: true
      };
    default:
      return state;
  }
  

}



function checkUserGuess(inputValidWord, answerInfoCopy, wordLength) {
  // NOTICE!! Need to make a deep copy of answerInfo!!! 
  
  // const answerInfoCopy = {...answerInfo};

  // answerInfo is an object, 
  // where each key is a char in the answer word,
  // and each value is an object that represents the info of a char: {index: charIndexSet, count: charCount}
  // const answerInfoCopy = {};
  // for (let char in answerInfo) { //char is the key
  //   answerInfoCopy[char] = {
  //     index: answerInfo[char].index,
  //     count: answerInfo[char].count
  //   }
  // }

  // console.log(answerInfo, answerInfoCopy);

  const colors = Array(wordLength).fill(null);
  console.log("INSIDE checkUserGuess, colors: ", colors);
  
  for (let i in inputValidWord) {
    const char = inputValidWord[i];
    if (!(char in answerInfoCopy)) {
      
      console.log(`Index: ${i}, Char: ${char} Color: Gray`);
      colors[i] = GRAY;
      // Gray;
    } else {
      if (answerInfoCopy[char].count === 0) {
        console.log(`Index: ${i}, Char: ${char} Color: Gray`);
        colors[i] = GRAY;
        //Gray;
      } else {
        
        if (answerInfoCopy[char].index.has(i)) {
          console.log(`Index: ${i}, Char: ${char} Color: Green`);
          // Green;
          colors[i] = GREEN;
        } else {
          console.log(`Index: ${i}, Char: ${char} Color: Yellow`);
          colors[i] = YELLOW;
          // Yellow
        }
        answerInfoCopy[char].count -= 1;
        // NOTICE!! Don't modify the original answerInfo object!!
      }
    }
  }
  console.log("INSIDE checkUserGuess, before returning, colors: ", colors);
  return colors;
}