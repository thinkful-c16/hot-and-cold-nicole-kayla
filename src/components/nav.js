'use strict';

import React from 'react';

import './nav.css';

export default function NavBar(props) {
    function newGame(event) {
        event.preventDefault();
        window.location.reload();
    }
    const links = (
        <ul>
            <li className='nav-item'>
                <a href="#">
                    WHAT?
                </a>
            </li>
            <li className='nav-item'>
                <a href="#" onClick={newGame}>
                    +NEW GAME
                </a>
            </li>
        </ul>
    );

    return (
        <div className="nav-bar">
            <nav className="nav-bar-nav">
                <ul>
                    {links}
                </ul>
            </nav>
        </div>
    )
}