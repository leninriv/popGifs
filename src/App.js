import React from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';

import './App.scss';

import ImagesListScreen from './screens/ImagesListScreen';
import ImageDetailsScreen from './screens/ImageDetailsScreen';

function App(props) {
  return (
    <HashRouter>
      <Route exact path="/">
        <ImagesListScreen props={props} />
      </Route>

      <Route exact path="/view">
        <ImageDetailsScreen props={props} />
      </Route>

    </HashRouter >
  );
}


export default App