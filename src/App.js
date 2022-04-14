import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import Game from './components/Game';
import Rule from './components/Rule';
import NavBar from './components/NavBar';

function App() {
    return (
        <BrowserRouter>
            {/* Anything here that is Not in a <Route/>
      is displayed on EVERY PAGE,
      because App is the highest parent!*/}
            <NavBar/>

            <Routes>
                {/** v6 React Router:
                 *  Pass in element props, instead of component props.
                 * React Router v6 only works with element props.
                 */}

                {/* 'exact' in Home's Route: Only show Home component when the path exactly matches "/".
         Do not show when path contains "/". 
         Without 'exact': 'localhost:3000/game' will show both Home and Game component; */}
                <Route path="/" exact element={<Home/>}/>
                <Route path="/game/:difficulty" element={<Game/>}/>
                <Route path="/rule" element={<Rule/>}/>
            </Routes>

        </BrowserRouter>


    );
}

export default App;
