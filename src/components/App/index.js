// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page from 'src/components/Page';
import Home from 'src/components/Home';
import ConnectedMainCharacters from 'src/containers/MainCharacters';

// == Import
import './app.scss';

// == Composant
const App = () => (
  <Switch>
    <Route exact path="/">
      <Page>
        <Home />
      </Page>
    </Route>
    <Route exact path="/mainCharacters">
      <Page>
        <ConnectedMainCharacters />
      </Page>
    </Route>
  </Switch>
);

// == Export
export default App;
