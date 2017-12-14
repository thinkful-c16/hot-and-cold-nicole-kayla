'use strict';

import React from 'react';

import './game.css';

export default function Game(props) {
  return (
    <div className="game-wrapper">
      <h1>HOT or COLD</h1>
      <form>
        <legend>Make Your Guess!</legend>
        <p>
          <input onChange={e => props.onChange(e.target.value)}type="text" placeholder="Enter Your Guess"/>
        </p>
        <p>
          <button onClick={(e) => {
            e.preventDefault();
            props.onSubmit()}} type="submit">SUBMIT</button>
        </p>
        <p className="game-counter">
          Guess # <span className="active-number">0</span> !
        </p>
      </form>
    </div> 
  )
}