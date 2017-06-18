import React, { Component } from 'react';
import Headline from './components/atoms/Headline/Headline';

import TileMap from './components/molecules/TileMap/TileMap';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Headline>Welcome to Reasdfsdfsdfsct</Headline>
        </div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TileMap />
      </div>
    );
  }
}

export default App;
