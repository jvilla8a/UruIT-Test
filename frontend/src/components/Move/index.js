import React                    from 'react'
import { createBrowserHistory } from 'history';

import './move.css'

class Move extends React.Component {
  constructor(props) {
    super(props);
    
    this.handlePlayerMove = this.handlePlayerMove.bind(this);
    this.handleMoveChange = this.handleMoveChange.bind(this);
  }

  winConditions (p1Move, p2Move) {
    let winner = "player1";

    switch(p1Move){
      case "rock":
        if (p2Move === "paper") { winner = "player2"; }
        // if (p2Move === "rock") { winner = "tie"; }
        break;
      case "paper":
        if (p2Move === "scissors") { winner = "player2"; }
        // if (p2Move === "paper") { winner = "tie"; }
        break;
      case "scissors":
        if (p2Move === "rock") { winner = "player2"; }
        // if (p2Move === "scissors") { winner = "tie"; }
        break;
      default:
        break;
    }

    return winner;
  }

  handlePlayerMove (event) {
    event.preventDefault();
    
    const history = createBrowserHistory();
    let game  = JSON.parse(localStorage.game);
    
    if(!game.round1 || !game.round1[this.props.player]){
      if(!game.round1)
        game.round1 = {}

      if(!game.round1[this.props.player])
        game.round1[this.props.player] = this.state.move && this.state.move

      if(game.round1.player1 && game.round1.player2){
        game.round1.winner = this.winConditions(game.round1.player1, game.round1.player2);
        history.push('/round2');
        history.go();
      }

      localStorage.game = JSON.stringify(game);
    } else if (!game.round2 || !game.round2[this.props.player]) {
      if(!game.round2)
        game.round2 = {}

      if(!game.round2[this.props.player])
        game.round2[this.props.player] = this.state.move && this.state.move

      if(game.round2.player1 && game.round2.player2)
        game.round2.winner = this.winConditions(game.round2.player1, game.round2.player2);

      if(game.round1.winner === game.round2.winner)
        game.winner = game.round1.winner;

      localStorage.game = JSON.stringify(game);

      if(game.winner){
        history.push('/winner');
        history.go();
      } else if (game.round2.player1 && game.round2.player2){
        history.push('/round3');
        history.go();
      }
    } else if (!game.round3 || !game.round3[this.props.player]) {
      if(!game.round3)
        game.round3 = {}

      if(!game.round3[this.props.player])
        game.round3[this.props.player] = this.state.move && this.state.move

      if(game.round3.player1 && game.round3.player2)
        game.round3.winner = this.winConditions(game.round3.player1, game.round3.player2);

      if(game.round1.winner === game.round2.winner)
        game.winner = game.round1.winner;
      if(game.round1.winner === game.round3.winner)
        game.winner = game.round1.winner;
      if(game.round3.winner === game.round2.winner)
        game.winner = game.round3.winner;

      localStorage.game = JSON.stringify(game);

      if(game.winner){
        history.push('/winner');
        history.go();
      }
    }
  }

  handleMoveChange (event) {
    this.setState({ move: event.target.value });
  }

  render(){
    return(
      <div className="Move">
        <h3> {this.props.title} </h3>
        <form onSubmit={this.handlePlayerMove} onChange={this.handleMoveChange} >
          <div className="inputContainer">
            <label htmlFor="playerMove">Select Move: </label>
            <select name="playerMove">
              <option value="" disabled selected>Pick one...</option>
              <option value="rock">Rock</option>
              <option value="paper">Paper</option>
              <option value="scissors">Scissors</option>
            </select>
          </div>

          <div className="buttonContainer">
            <input className="button" type="submit" value="Send" />
          </div>
        </form>
      </div>
    );
  }
}

export default Move;