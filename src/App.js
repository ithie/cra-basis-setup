import React, { Component } from 'react';
import Headline from './components/atoms/Headline/Headline';

import Interface from './components/organisms/Interface/Interface';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Headline>Hexagon Strategy Game</Headline>
        </div>
        <Interface />
      </div>
    );
  }
}

export default App;
