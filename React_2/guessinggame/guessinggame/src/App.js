import React, { Component } from "react";
import "./App.css";
  
class App extends Component {

  state = { 
      number: null,
      highScore: 0,
      standard: 0,
      expert: 0,
      tries: 0,
      maxTries: 10,
    }
  
// Generate a random number between 1 and 10.
  handleScore = () => {
    console.log(this.state.tries); 
    let standard = Math.floor((Math.random() * 10) + 1); 
    this.setState({
      number: standard
    });
    console.log(standard);
    let guess = prompt('I am thinking of a random number between 1 and 10. What is it?');
// Once guess has been submitted, it'll console.log the number of tries each time
    while (guess != standard) {
      this.setState ({
        tries: this.state.tries++
      });
// Recording each guess for (higher or lower), then prompting again if not. If guess is correct, proceed to winning statement
      console.log(this.state.tries); 
      if (guess < standard){
        console.log("Guess higher");
      } else {
        console.log("Guess lower");
      }
      guess = prompt('I am thinking of a random number between 1 and 10. What is it?');
    }
// If guess is correct, display winning message and number of tries
      if (guess == standard){
      console.log("Yay"); // Displays winning message
      this.setState ({
        tries: this.state.tries++
      });
      console.log(this.state.tries); 
    }

// Check to update High Score
    this.state.highScore 
    if (this.state.tries < this.state.highScore || this.state.highScore == 0) {
      this.setState ({highScore: this.state.tries});
    }
  }

// Generate a random number between 1 and 100.
  handleScore2 = () => {
    console.log(this.state.tries);
    let expert = Math.floor((Math.random() * 100) + 1);
    this.setState({
      number: expert
    });
    console.log(expert);
    let guess = prompt('I am thinking of a random number between 1 and 100. What is it?');
// Once guess has been submitted, it'll console.log the number of tries each time
    while (guess != expert) {
      this.setState ({
        tries: this.state.tries++
      });
// Recording each guess for (higher or lower), then prompting again if not. If guess is correct, proceed to winning statement
      console.log(this.state.tries);
      if (guess < expert){
        console.log("Guess higher");
      } else {
        console.log("Guess lower");
      }
      guess = prompt('I am thinking of a random number between 1 and 100. What is it?');
    }
// If guess is correct, display winning message and number of tries 
      if (guess == expert){
      console.log("Yay"); // Displays winning message
      this.setState ({
        tries: this.state.tries++
      });
      console.log(this.state.tries);
    }

// Check to update High Score
      this.state.highScore 
      if (this.state.tries < this.state.highScore || this.state.highScore == 0) {
        this.setState ({highScore: this.state.tries});
      }
    } 

  reset = () => {
    this.setState({
      tries: 0,
    });
    console.log("reset");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Start Game</h1>
        </header>
        <p>Highscore: {this.state.highScore}</p>
        <div className="btn">
          <button className="Standard" 
          onClick={this.handleScore}>
            Standard
          </button>
          <button className="Expert" 
          onClick={this.handleScore2}>
            Expert
          </button>
        </div>
        <p>It took you: {this.state.tries} guesses</p>
        <div className= "resetBtns">
          <button className="Reset" onClick={this.reset}>Reset</button>  
        </div>
    </div>
    );
  };
}

export default App;
