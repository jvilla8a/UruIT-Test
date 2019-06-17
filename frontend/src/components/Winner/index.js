import React from 'react'
import Root from '../Root'
import { Link } from 'react-router-dom';

class Winner extends React.Component {
  componentDidMount() {
    this.saveGame()
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
        <div>
          <h2>We have a WINNER!!</h2>
          <h1>{JSON.parse(localStorage.game).winner} is the new EMPEROR!</h1>

          <table>
            <tbody>
              <tr>
                <th>Round</th>
                <th>Winner</th>
              </tr>
              <tr>
                <td>1</td>
                <td>{JSON.parse(localStorage.game).round1.winner}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{JSON.parse(localStorage.game).round2.winner}</td>
              </tr>
              { JSON.parse(localStorage.game).round3 ?
                <tr>
                  <td>3</td>
                  <td>{JSON.parse(localStorage.game).round3.winner}</td>
                </tr> : false
              }
            </tbody>
          </table>
          
          <button onClick={this.saveGame}>Save Game</button>
          <Link to="/"> Volver a Jugar </Link>
        </div>
      </div>
    );
  }
}

export default Winner;