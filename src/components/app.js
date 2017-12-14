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

  handleSubmit() {
    const guess = this.state.currentUserGuess;
    this.setState({
      guessHistory: [...this.state.guessHistory, guess]
      //grab currentUserGuess and push to array
      //create new variable for guess history and use the spreadoperator to add new numbers to the array
    })
  }

  render() {
    return (

      <div className="wrapper">
        <NavBar links={links} />
        <Game onSubmit={() => this.handleSubmit()}
          onChange={(input) => this.handleGuess(input)}/>
      </div>
    )
  }
}