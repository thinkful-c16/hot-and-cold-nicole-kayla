import React from 'react';
import './app.css';

import NavBar from './nav';
import Game from './game';
import Feedback from './feedback';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomNumber: '',
      currentUserGuess: '',
      guessHistory: [],
      guessFeedback: '',
      feedbackOptions: ['hot', 'cold', 'warm', 'cool', 'Correct!' ]
    };
    this.newGame = this.newGame.bind(this);
  }

  getState(){
    this.setState({
      randomNumber: '',
      currentUserGuess: '',
      guessHistory: [],
      guessFeedback: '',
      feedbackOptions: ['hot', 'cold', 'warm', 'cool', 'Correct!' ]
    })
  }

  newGame(){
    this.generateRandomNumber();
    this.setState({
      randomNumber: '',
      currentUserGuess: '',
      guessHistory: [],
      guessFeedback: '',
      feedbackOptions: ['hot', 'cold', 'warm', 'cool', 'Correct!' ]
    })
  }

  attempts(){
    return this.state.guessHistory.length;
  }

  generateRandomNumber() {
    let number = Math.floor(Math.random() * 100);
    this.setState({
      randomNumber: number
    })
  }

  handleGuess(input) {
    this.setState({
      currentUserGuess: input
    })
  }

  handleSubmit() {
    const guess = this.state.currentUserGuess;
    this.setState({
      guessHistory: [...this.state.guessHistory, guess]
    })
    this.generateFeedback()
    document.getElementById("userInput").value=""
  }

  generateFeedback() {
    let correctAnswer = this.state.randomNumber;
    let userGuess = this.state.currentUserGuess;
    let difference = Math.abs(userGuess - correctAnswer);

    if (difference >= 40) {
      this.setState({guessFeedback: this.state.feedbackOptions[1]});
    }
    else if (difference >= 30) {
      this.setState({guessFeedback: this.state.feedbackOptions[3]});
    }
    else if (difference >= 20) {
      this.setState({guessFeedback: this.state.feedbackOptions[2]});
    }
    else if (difference >= 10) {
      this.setState({guessFeedback: this.state.feedbackOptions[0]});
    }
    else {
      this.setState({guessFeedback: this.state.feedbackOptions[4]});
      
    }
  }

  componentDidMount(props) {
    this.generateRandomNumber();
  }

  render() {
    return (

      <div className="wrapper">
        <NavBar test={this.newGame} />
        <Game onSubmit={() => this.handleSubmit()}
          onChange={(input) => this.handleGuess(input)}
          attempts={() => this.attempts()} />
        <Feedback feedbackResponse={this.state.guessFeedback}/>
      </div>
    )
  }
}