import Row from './Row';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';

import {updateStatusCorrectGuess} from '../actions';


export default function Output(props) {

    const wordLength = props.wordLength;

    const answer = props.answer;

    const dispatch = useDispatch();


    console.log("Output is re-rendered!")

    // WHENEVER state.game.status.currentUserInput is updated (i.e. whever there's a valid input),
    // state.game.status becomes different, which triggers re-rendering of this Component.
    const status = useSelector(state => state.game.status, shallowEqual);
    //TODO: Do we need shallowEqual for string type(primitive type)??
    const userGuess = status.currentUserInput;
    const remainAttemptNumber = status.remainAttemptNumber;
    const historyGuess = status.historyGuess;   // [{guess: "world" colors: ["grey", "grey","yellow","green","yellow"]}]
    console.log(`userGuess: ${userGuess}, remainAttemptNumber: ${remainAttemptNumber}, historyGuess: ${historyGuess}`);

    /* Cannot use historyColor as local state:
     * setHistoryColor will trigger re-render, and since setHistoryColor is not
     * wrapped inside any condition, when re-rendered setHistoryColor will be called again,
     * and again push the same colors into the new historyColor,
     * which again triggers re-render ..... -> INFINITE RE-RENDER!
    // Local State: historyColor (an array of {colors array}'s)
    const [historyColor, setHistoryColor] = useState([]);
    */


    // WHENEVER a re-rending happens (i.e. Whenever there's a valid input),
    // check the valid input, and get the array of colors.
    /* Since colors should be stored in global state,
     (which could be then update in Input.js when user gives a valid input),
     we need to move checkUserGuess to gameReducer.js
    const { correctCount, colors } = checkUserGuess(userGuess);
    */

    /* Cannot use historyColor as local state
     setHistoryColor([...historyColor, colors]);
    */


    // if (correctCount === wordLength) {
    if (userGuess === answer) {
        dispatch(updateStatusCorrectGuess());  //change guessResult to True
        console.log("Dispatched updateStatusCorrectGuess")
    }

    console.log("0-index historyGuess", historyGuess[0]);
    return (
        <div>
            {
                // historyGuess.map((guess) => <Row wordLength={wordLength} guess={guess}/>)
                
                historyGuess.map((guess,i) => <Row key={i} wordLength={wordLength} guess={guess}/>)
            }
        </div>
    )


}