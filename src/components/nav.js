'use strict';

import React from 'react';

import './nav.css';

export default function NavBar(props) {
    const links = props.links.map((link, index) => (
        <li key={index}>
            <a href={link.href}>
                {link.text}
            </a>
        </li>
    ));

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