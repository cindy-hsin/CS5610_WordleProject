import React, { useState } from "react";
import { shallowEqual, useSelector } from 'react-redux';

export default function Status(props) {

    const [statusMessage, setStatusMessage] = useState("");
    // const gameStatus = useSelector(state => state.game.guessResult);//shallowequal??
    // const remainAttemptNumber = useSelector(state => state.game.remainAttemptNumber);

    // const status = useSelector(state => state.game.status, shallowEqual);
    // const gameStatus = status.guessResult;
    // const remainAttemptNumber = status.remainAttemptNumber;
    // console.log("game Status: " + gameStatus);
    // console.log("remain Attempt: " + remainAttemptNumber);

    // function displayGameStatus(){
    //     if(gameStatus){
    //         setStatusMessage("Congrats!");
    //     }else{
    //         if(remainAttemptNumber > 0){
    //             setStatusMessage("You can guess " + remainAttemptNumber + " times!");
    //         }else{
    //             setStatusMessage("End of game! Press the Reset Button to restart the game and try!");
    //         }
    //     }
    // }


    return (
        <div>
            {/*Status: {statusMessage}*/}
            Status
        </div>
    )
}