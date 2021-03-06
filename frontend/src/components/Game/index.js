import React                    from 'react'
import Root                     from '../Root'
import { createBrowserHistory } from 'history';

import './game.css'

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.handleGameStart   = this.handleGameStart.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleGameStart (event) {
    event.preventDefault();

    if(!this.state || !this.state.player1 || !this.state.player2)
      return false;

    let playersNames = this.state.player1 && this.state.player2 && { player1: this.state.player1, player2: this.state.player2 }
    localStorage.setItem("game", JSON.stringify(playersNames));
    
    const history = createBrowserHistory();
    history.push('/round1');
    history.go();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    return(
      <div>
        <Root />

        <div className="Game container">
          <article>
            <h3>Enter Player's name</h3>
            <section className="inputSection">

              <form onSubmit={ this.handleGameStart }>
                <div className="inputContainer">
                  <label htmlFor="player1">Player 1 : </label>
                  <input type="text" name="player1" placeholder="Name" onChange={this.handleInputChange} />
                </div>
                <div className="inputContainer">
                  <label htmlFor="player2">Player 2 : </label>
                  <input type="text" name="player2" placeholder="Name" onChange={this.handleInputChange} />
                </div>
                <div>
                  <input type="submit" value="Start" className="button" />
                </div>
              </form>
            </section>
          </article>
        </div>
      </div>
    )
  }
}

export default Game;