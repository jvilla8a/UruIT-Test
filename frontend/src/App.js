import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Game from './components/Game'
import Record from './components/Record'
import Round from './components/Round'

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route component={ Root } ></Route> */}
        <Route exact path={"/"} component={ Game } />
        <Route path={"/records"} component={ Record } />
        <Route path={"/round1"} component={ Round } />
        <Route path={"/round2"} component={ Round } />
        <Route path={"/round3"} component={ Round } />
      </Switch>
    </Router>
  );
}

export default App;