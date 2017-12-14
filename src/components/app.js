import React from 'react';
import './app.css';

import NavBar from './nav';
import Game from './game';
import Feedback from './feedback';
// import feedbackResponse from './feedback';

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
      randomNumber: 10,
      currentUserGuess: '',
      guessHistory: [],
      guessFeedback: '',
      feedbackOptions: ['hot', 'cold', 'warm', 'cool', 'Correct!' ]
      //if they are within 10, say "hot", if they are within 20 say "warm", 
      //within 30 say "cool", anythign else say cold
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
    })
    this.generateFeedback()
  }

  generateFeedback() {
    let correctAnswer = this.state.randomNumber;
    let userGuess = this.state.currentUserGuess;
    if (userGuess === correctAnswer) {
      this.setState({guessFeedback:this.state.feedbackOptions[4]});
    }
    else if (userGuess - correctAnswer <= 10 || userGuess - correctAnswer >= -10 ) {
      this.setState({guessFeedback: this.state.feedbackOptions[0]});
    }
    else if (userGuess - correctAnswer <= 20 || userGuess - correctAnswer >= -20 ) {
      this.setState({guessFeedback: this.state.feedbackOptions[2]});
    }
    else if (userGuess - correctAnswer <= 30 || userGuess - correctAnswer >= -30 ) {
      this.setState({guessFeedback: this.state.feedbackOptions[3]});
    }
    else {
      this.setState({guessFeedback: this.state.feedbackOptions[1]});
    }
  }

  render() {
    return (

      <div className="wrapper">
        <NavBar links={links} />
        <Game onSubmit={() => this.handleSubmit()}
          onChange={(input) => this.handleGuess(input)}/>
        <Feedback feedbackResponse={this.state.guessFeedback}/>
      </div>
    )
  }
}