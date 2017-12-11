'use strict';

import React from 'react';

import './game.css';

export default function Game() {
  return (
    <div className="game-wrapper">
      <h1>HOT or COLD</h1>
      <form>
        <legend>Make Your Guess!</legend>
        <p>
          <input type="text" placeholder="Enter Your Guess"/>
        </p>
        <p>
          <button type="submit">SUBMIT</button>
        </p>
        <p className="game-counter">
          Guess # <span className="active-number">0</span> !
        </p>
      </form>
    </div> 
  )
}