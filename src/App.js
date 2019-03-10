import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    player_1_guess: undefined,
    player_2_guess: undefined,
    player_1_turn: true,
    player_2_turn: false,
    player_1_name: "",
    player_2_name: "",
    hint: "______________________",
    winner: "? ? ? ? ?"
  };
  random_guess = Math.floor(Math.random() * 100 + 1);

  set_player_1_Guess = new_guess => {
    this.setState({
      [new_guess.target.name]: new_guess.target.value,
      player_1_guess: new_guess.target.value
    });
  };
  set_player_2_Guess = new_guess => {
    this.setState({
      [new_guess.target.name]: new_guess.target.value,
      player_2_guess: new_guess.target.value
    });
  };
  set_player_1_Name = p_name => {
    this.setState({
      [p_name.target.name]: p_name.target.value,
      player_1_name: p_name.target.value
    });
  };
  set_player_2_Name = p_name => {
    this.setState({
      [p_name.target.name]: p_name.target.value,
      player_2_name: p_name.target.value
    });
  };
  changeTurn = () => {
    this.setState({
      player_1_turn: !this.state.player_1_turn,
      player_2_turn: !this.state.player_2_turn
    });
  };

  testGuess = guess => {
    if (guess > this.random_guess) {
      this.setState({ hint: `The answer is less than ${guess} !` });
    } else if (guess < this.random_guess) {
      this.setState({ hint: `The answer is greater than ${guess} !` });
    } else {
      this.setState({ hint: "Great .. You win .." });
      if (this.state.player_1_turn) {
        this.setState({ winner: this.state.player_1_name });
      } else {
        this.setState({ winner: this.state.player_2_name });
      }
    }
    this.changeTurn();
  };
  render() {
    return (
      <div className="App">
        <div className="Banner">
          <h1 style={{ fontSize: "40px" }}>GUESSING GAME</h1>
        </div>
        <div>
          <div className="FirstPlayer">
            <br />
            <h1>Player (1)</h1>
            <input
              style={{ width: "200px" }}
              id="name_1"
              className="NameAndGuessInput"
              placeholder="Name ?"
              onChange={this.set_player_1_Name}
            />
            <input
              style={{ width: "100px" }}
              type="number"
              id="guess_1"
              className="NameAndGuessInput"
              placeholder="1-100"
              onChange={this.set_player_1_Guess}
            />
            <br />
            <button
              style={{
                visibility: this.state.player_1_turn ? "visible" : "hidden"
              }}
              className="GuessButton"
              onClick={() => {
                this.testGuess(this.state.player_1_guess, 1);
              }}
            >
              <h2>GUESS</h2>
            </button>
          </div>
          <div className="SecondPlayer">
            <br />
            <h1>Player (2)</h1>
            <input
              style={{ width: "200px" }}
              id="name_2"
              className="NameAndGuessInput"
              placeholder="Name ?"
              onChange={this.set_player_2_Name}
            />
            <input
              style={{ width: "100px" }}
              type="number"
              id="guess_2"
              className="NameAndGuessInput"
              placeholder="1-100"
              onChange={this.set_player_2_Guess}
            />
            <br />
            <button
              style={{
                visibility: this.state.player_2_turn ? "visible" : "hidden"
              }}
              className="GuessButton"
              onClick={() => {
                this.testGuess(this.state.player_2_guess, 0);
              }}
            >
              <h2>GUESS</h2>
            </button>
          </div>
        </div>
        <div className="HintAndResults">
          <div className="HintDiv">
            <h1
              style={{
                display: "inline-block",
                marginRight: "20px",
                color: "#d79395"
              }}
            >
              HINT
            </h1>
            <h2 style={{ display: "inline-block" }}>{this.state.hint}</h2>
          </div>
          <div className="WinnerDiv">
            <h1 style={{ color: "#d79395" }}>WINNER</h1>
            <h1>{this.state.winner}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
