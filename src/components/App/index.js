// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page from 'src/components/Page';
import Home from 'src/components/Home';
import ConnectedMainCharacters from 'src/containers/MainCharacters';
import ConnectedGryffindor from 'src/containers/Gryffindor';
import ConnectedSlytherin from 'src/containers/Slytherin';
import ConnectedHufflepuff from 'src/containers/Hufflepuff';
import ConnectedRavenclaw from 'src/containers/Ravenclaw';
import Houses from 'src/components/Houses';

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
    <Route exact path="/houses">
      <Page>
        <Houses />
      </Page>
    </Route>
    <Route exact path="/characters/gryffindor">
      <Page>
        <ConnectedGryffindor />
      </Page>
    </Route>
    <Route exact path="/characters/slytherin">
      <Page>
        <ConnectedSlytherin />
      </Page>
    </Route>
    <Route exact path="/characters/hufflepuff">
      <Page>
        <ConnectedHufflepuff />
      </Page>
    </Route>
    <Route exact path="/characters/ravenclaw">
      <Page>
        <ConnectedRavenclaw />
      </Page>
    </Route>
  </Switch>
);

// == Export
export default App;
