import React, { Component } from 'react';
import Headline from './components/atoms/Headline/Headline';

import TileMap from './components/molecules/TileMap/TileMap';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Headline>Hexagon Strategy Game</Headline>
        </div>
        <TileMap />
      </div>
    );
  }
}

export default App;
