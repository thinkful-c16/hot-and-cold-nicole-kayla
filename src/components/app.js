import React from 'react';
import './app.css';

import NavBar from './nav';
import Game from './game';

const links = [{
    text: 'WHAT?',
    href: '#'
}, {
    text: '+NEW GAME',
    href: '#'
}];

export default function () {
  return (
    <div className="wrapper">
      <NavBar links={links} />
      <Game />
    </div>
  )
}