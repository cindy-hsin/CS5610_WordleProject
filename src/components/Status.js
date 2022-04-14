import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {disableInput} from '../actions';
import {Alert} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './Status.css';

import Confetti from 'react-confetti'
// import useWindowSize from './useWindowSize';



export default function Status(props) {
    const status = useSelector(state => state.game.status, shallowEqual);
    const {guessResult, remainAttemptNumber} = status;
    const dispatch = useDispatch();

    let message = "";
    let { width, height } = useWindowSize();

    if (!guessResult && remainAttemptNumber > 0) {
        message = `You have ${remainAttemptNumber} more chance(s).`;
        width = 0; height = 0;
    } else { // End of Game situations:
        if (guessResult) {
            message = "Congrats! You've got the correct word!";
        } else {
            message = "Game Over! You've run out of chances!";
            width = 0; height = 0;
        }

        dispatch(disableInput());
    }

    return (
        <div>
            <Alert className="alert" variant="warning" style={{padding: "0.5rem 0.5rem"}}>
                <p style={{marginBottom: "0"}}>{message}</p>
            </Alert>
            <Confetti width={width} height={height}/>
        }
        </div>
    )
}
//function to get the window size of the device
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}