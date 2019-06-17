import React from 'react'
import Root from '../Root'
import { Link } from 'react-router-dom';

import './winner.css'

class Winner extends React.Component {
  componentDidMount() {
    let game = JSON.parse(localStorage.game);

    this.setState({ 
      nameWinner: game[game.winner], 
      gameMatch1: `${game.round1.player1} vs ${game.round1.player2}`,
      gameMatch2: `${game.round2.player1} vs ${game.round2.player2}`,
      gameMatch3: `${game.round3 ? game.round3.player1 : '-'} vs ${ game.round3 ? game.round3.player2 : '-'}`,
      r1Winner  : game.round1.winner,
      r2Winner  : game.round2.winner,
      r3Winner  : game.round3 ? game.round3.winner : '-',
      player1   : game.player1,
      player2   : game.player2,
    });
    this.saveGame();
  }

  saveGame (){
    let URL = "http://localhost:3000/game"

    fetch(URL, {
      method: "POST",
      body: localStorage.game,
      mode: "cors",
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(data =>{
      console.log("Game Saved");
    }).catch(err=>{
      console.error(err);
    });
  }

  render() {
    return(
      <div>
        <Root />
        <div className="Winner">
          <article>
            <h3>We have a WINNER!!</h3>
            <h1><span>{ this.state && this.state.nameWinner ? this.state.nameWinner : "-" }</span> is the new EMPEROR!</h1>

            <table>
              <tbody>
                <tr>
                  <th>Round</th>
                  <th>Game Match</th>
                  <th>Winner</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>{ this.state && this.state.gameMatch1 ? this.state.gameMatch1 : "-" }</td>
                  <td>{ this.state && this.state.r1Winner ? this.state[this.state.r1Winner] : "-" }</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{ this.state && this.state.gameMatch2 ? this.state.gameMatch2 : "-" }</td>
                  <td>{ this.state && this.state.r2Winner ? this.state[this.state.r2Winner] : "-" }</td>
                </tr>
                { JSON.parse(localStorage.game).round3 ?
                  <tr>
                    <td>3</td>
                    <td>{ this.state && this.state.gameMatch3 ? this.state.gameMatch3 : "-" }</td>
                    <td>{ this.state && this.state.r3Winner ? this.state[this.state.r3Winner] : "-" }</td>
                  </tr> : false
                }
              </tbody>
            </table>

            <Link to="/" className="button"> Volver a Jugar </Link>
          </article>
        </div>
      </div>
    );
  }
}

export default Winner;