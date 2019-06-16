import React from 'react'
import Root  from '../Root'

import './game.css'

function Game () {
  return(
    <div>
      <Root />

      <div className="Game container">
        <article>
          <h3>Enter Player's name</h3>
          <hr/>
          <section className="inputSection">
            <div>
              <label htmlFor="player1">Player 1 : </label>
              <input type="text" name="player1"></input>
            </div>
            <div>
              <label htmlFor="player2">Player 2 : </label>
              <input type="text" name="player2"></input>
            </div>
            <div>
              <button>Start</button>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default Game;