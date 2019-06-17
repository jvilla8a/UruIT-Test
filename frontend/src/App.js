import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Game from './components/Game'
import Record from './components/Record'
import Round from './components/Round'
import Winner from './components/Winner';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={ Game } />
        <Route path={"/records"} component={ Record } />
        <Route path={"/round1"} render={ props => <Round title="Round 1" /> } />
        <Route path={"/round2"} render={ props => <Round title="Round 2" /> } />
        <Route path={"/round3"} render={ props => <Round title="Round 3" /> } />
        <Route path={"/winner"} component={ Winner } />
      </Switch>
    </Router>
  );
}

export default App;