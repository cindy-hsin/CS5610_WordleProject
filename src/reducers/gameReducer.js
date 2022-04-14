
const GRAY = "gray";
const GREEN = "green";
const YELLOW = "yellow";

const initState = {

    answer: "",   // NEED THIS AS A Global state!
    // Although we only need to READ the value of "answer" in <Row>,
    // (which means we can pass answer down all the way to <Row/> using props)
    // the "RESET" button still needs to UPDATE answer.
    // It's easier to implement the UPDATE logic using global state.

    status: {
        currentUserInput:null,  // only store VALID user input
        historyGuess:[],  // [{inputValidWord: "world" colors: ["grey", "grey","yellow","green","yellow"]}]
        remainAttemptNumber: -1,
        guessResult: false,
    },
    isInputDisabled: false

}


export default function game(state=initState, action) {
    switch(action.type) {

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
            console.log(state.status.historyGuess);

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
                    guessResult: true
                }
            };
        case "UPDATE_STATUS_WRONG_GUESS":
            return state;

        case "DISABLE_INPUT":
            return {...state,
                isInputDisabled: true
            };
        default:
            return state;
    }


}



function checkUserGuess(inputValidWord, answerInfoCopy, wordLength) {
    const colors = Array(wordLength).fill(null);

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
                // NOTICE!! Here we modify the count!
                // That's why we need to make a deep copy of the original answerInfo object!!
            }
        }
    }

    return colors;
}
