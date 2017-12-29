import React, { Component } from 'react';

import TileMap from '../../molecules/TileMap/TileMap';
import Players from '../../containers/Players/Players';

export default class Interface extends Component {
  render() {
    return (
      <Players>
        <TileMap />
      </Players>
    );
  }
}
