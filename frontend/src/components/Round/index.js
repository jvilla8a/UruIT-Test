import React from 'react';
import Root  from '../Root';

import './round.css'

function Round () {
  return(
    <div>
      <Root />

      <div className="Round container">
        <article>
          <h2>Round 1</h2>
          <hr/>
          <div>
            <h3>[Playe1 Name]</h3>
            <div>
              <label htmlFor="player1Move">Select Move: </label>
              <select name="player1Move">
                <option value="rock">Rock</option>
                <option value="paper">Paper</option>
                <option value="Scissors">Scissors</option>
              </select>
              <hr/>
              <button>Send Move</button>
            </div>
          </div>

          <div>
            <h3>[Playe2 Name]</h3>
            <div>
              <label htmlFor="player2Move">Select Move: </label>
              <select name="player2Move">
                <option value="rock">Rock</option>
                <option value="paper">Paper</option>
                <option value="scissors">Scissors</option>
              </select>
              <hr/>
              <button>Send Move</button>
            </div>
          </div>
        </article>
        <aside>
          <h2>Score</h2>
          <table>
            <tr>
              <th>Round</th>
              <th>Winner</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Player1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Playe2</td>
            </tr>
          </table>
        </aside>
      </div>
    </div>
  );
}

export default Round;