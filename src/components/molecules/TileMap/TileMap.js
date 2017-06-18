import React from 'react';
import TileProvider, { tileTypes } from '../../containers/TileProvider/TileProvider';

const TileMap = () =>
  <div>
    <TileProvider type={tileTypes.Village} />
    <TileProvider type={tileTypes.Forrest} />
    <TileProvider type={tileTypes.LightForrest} />
    <TileProvider type={tileTypes.DarkForrest} />
  </div>;

export default TileMap;
