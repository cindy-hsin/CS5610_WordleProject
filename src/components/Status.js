import { useSelector, useDispatch, shallowEqual} from "react-redux";
import { disableInput } from  '../actions';
import {Alert} from "react-bootstrap";
import React from "react";
import './Status.css';


export default function Status(props) {
    const status = useSelector(state => state.game.status, shallowEqual);
    const { guessResult, remainAttemptNumber}= status;
    const dispatch = useDispatch();

    let message = "";

    if (!guessResult && remainAttemptNumber > 0) {
        message = `You have ${remainAttemptNumber} more chance(s).`;
    } else { // End of Game situations:
        if (guessResult) {
            message = "Congrats! You've got the correct word!";
        } else {
            message = "Game Over! You've run out of chances!";
        }

        dispatch(disableInput());
    }

    return (
        // <div>
        //     Status: {message}
        // </div>
        <Alert className="alert" variant="warning" style={{padding: "0.5rem 0.5rem"}}>
            <p style={{marginBottom: "0"}}>{message}</p>
        </Alert>
    )
}