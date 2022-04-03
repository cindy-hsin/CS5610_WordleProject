import React from 'react';
import { useParams } from 'react-router';

export default function Game(props) {
  const pathParams = useParams();
  const difficulty = pathParams.difficulty;

  /** Conditional rendering - documentation: 
   * https://reactjs.org/docs/conditional-rendering.html#:~:text=isLoggedIn%3B%0A%20%20%20%20let%20button%3B-,if%20(isLoggedIn)%20%7B,%7D,-return%20(%0A%20%20%20%20%20%20%3Cdiv%3E
   */

  return (
    <div>Game Level: {difficulty}</div>
  )
};