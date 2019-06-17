import React from 'react';
import Root  from '../Root';
import Move  from '../Move';

import './round.css'

class Round extends React.Component {
  render() {
    return(
      <div>
        <Root />

        <div className="Round container">
          <article>
            <h2> {this.props.title} </h2>
            <hr/>

            <Move title={"[Player1 Name]"} player={"player1"} />
            <Move title={"[Player2 Name]"} player={"player2"} />
          </article>
          { this.props.title === "Round 2" || this.props.title === "Round 3" ? 
          <aside>
            <h2>Score</h2>
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
                { this.props.title === "Round 3" ?
                  <tr>
                    <td>2</td>
                    <td>{JSON.parse(localStorage.game).round2.winner}</td>
                  </tr> : false
                }
              </tbody>
            </table>
          </aside>
          : false }
        </div>
      </div>
    );
  }
}

export default Round;