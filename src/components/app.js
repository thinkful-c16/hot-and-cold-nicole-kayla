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

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomNumber: '',
      currentUserGuess: '',
      guessHistory: [],
      guessFeedback: '',
      feedbackOptions: ''
    }
  }

  handleGuess(input) {
    this.setState({
      currentUserGuess:input
    })
  }

  render() {
    return (
      <div className="wrapper">
        <NavBar links={links} />
        <Game onChange={(input) => this.handleGuess(input)}/>
        <Game onSubmit={() => console.log('grabs the user`/s guess')}/>
      </div>
    )
  }
}