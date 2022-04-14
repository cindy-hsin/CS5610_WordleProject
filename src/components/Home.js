import React from 'react';
import pic from '../wordle_title.png';
import './Home.css';

export default function Home() {
    return (
        <div className="container">
            {/*<div>Welcome to Wordle!</div>*/}
            <img id="wordle-pic" src={pic} alt="wordle-game-pic"/>
        </div>

    )
};