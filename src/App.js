import React from 'react';
import Header from './components/header';
import SpaceShips from './containers/spaceships';
import ShipDetails from './components/shipDetails';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <Switch>
          <Route path="/" exact component={SpaceShips} />
          <Route path="/details" exact component={ShipDetails} />
        </Switch>
      </div>
    </>
  );
}

export default App;
