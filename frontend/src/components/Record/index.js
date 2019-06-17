import React from 'react'
import Root  from '../Root'

import './record.css'

class Record extends React.Component {
  constructor(props) {
    super(props);

    this.showGames = this.showGames.bind(this);
  }

  componentDidMount() {
    let URL = "http://localhost:3000/games"

    fetch(URL).then(response => {
      return response.json();
    }).then(data => {
      this.setState({ games: data });
    });
  }

  showGames(element) {
    return (
      <tr key={element._id}>
        <td>{element.player1}</td>
        <td>{element.player2}</td>
        <td>{element.round1.winner}</td>
        <td>{element.round2.winner}</td>
        <td>{element.round3 ? element.round3.winner : "-"}</td>
        <td>{element.winner}</td>
        <td>{new Date(element.date).toDateString()}</td>
      </tr>
    );
  }

  render() {
    return(
      <div>
        <Root />
        <div className="Record">
          <h1>RECORDS</h1>

          <div>
            <table>
              <tbody>
                <tr>
                  <th>P1 Name</th>
                  <th>P2 Name</th>
                  <th>R1 Winner</th>
                  <th>R2 Winner</th>
                  <th>R3 Winner</th>
                  <th>Winner</th>
                  <th>Date</th>
                </tr>
                { this.state && this.state.games ? this.state.games.map(element => this.showGames(element)) : false }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Record;