const answer = "fewer";
const userGuess = "renew";

const answerInfo = {};

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

function checkUserGuess(userGuess) {
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
        } else {
          console.log(`Index: ${i}, Char: ${char} Color: Yellow`);
          // Yellow
        }
        answerInfo[char].remainCount -= 1;
      }
    }

  }


}
console.log(generateAnswerInfo(answer));
console.log(checkUserGuess(userGuess));