const ENGLISH_WORD_LIST = [];

const answer = "fewer";
const userGuess = "renew";

const answerInfo = {};

let validationMessage = "";


function generateAnswerInfo(answer) {
  for (let i in answer) {
    const char = answer[i];
    if (!(char in answerInfo)) {
      answerInfo[char] = {
        index: new Set([i]),
        remainCount: 1
      }
    } else {
      answerInfo[char].index.add(i);
      answerInfo[char].remainCount +=1;
    }
  }

  return answerInfo;

}

// ==============  In <Input> Component =================
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
    validationMessage = "Your input word is too short";
    return false;
  } else if (userInput.length > wordLength) {
    // Update  validation message: Your input word is too long"
    validationMessage = "Your input word is too long";
    return false;
  }
  validationMessage = "";
  return true;
}

function checkEnglishWord(userInput) {
  if (! (ENGLISH_WORD_LIST.includes(userInput))) {
    validationMessage = "Your input word is not a valid English word! ";
    return false;
  }
  validationMessage = "";
  return true;
}


// ==============  In <Output> Component =================





function checkUserGuess(userGuess) {
  let correctCount = 0;

  for (let i in userGuess) {
    const char = userGuess[i];
    if (!(char in answerInfo)) {
      
      console.log(`Index: ${i}, Char: ${char} Color: Gray`);
      // Gray;
    } else {
      if (answerInfo[char].remainCount === 0) {
        console.log(`Index: ${i}, Char: ${char} Color: Gray`);
        //Gray;
      } else {
        
        if (answerInfo[char].index.has(i)) {
          console.log(`Index: ${i}, Char: ${char} Color: Green`);
          // Green;
          correctCount += 1;
        } else {
          console.log(`Index: ${i}, Char: ${char} Color: Yellow`);
          // Yellow
        }
        answerInfo[char].remainCount -= 1;
      }
    }

  }

  // TODO: update <StatusMessage> based on correctCount


}
console.log(generateAnswerInfo(answer));
console.log(checkUserGuess(userGuess));