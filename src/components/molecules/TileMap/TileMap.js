import React from 'react';
import styled from 'styled-components';

import TileProvider, { tileTypes } from '../../containers/TileProvider/TileProvider';

const Map = styled.div`
  display: block;
  position: relative;
  height: 600px;
  width: 600px;
`;

const Odd = styled.div`
  display: block;
  position: relative;
  top: 4px;
  > div {
    float: left;
  }
  width: 600px;
  clear: left;
`;

const Even = styled.div`
  display: block;
  position: relative;
  width: 600px;
  top: 4px;
  > div {
    float: left;
  }
`;

const TileMap = () =>
  <Map>
    <Odd>
      <TileProvider type={tileTypes.Empty} />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Empty} />
    </Odd>
    <Even>
      <TileProvider type={tileTypes.Empty} halfTile left />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.LightForrest} />
      <TileProvider type={tileTypes.Forrest} />
      <TileProvider type={tileTypes.DarkForrest} />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Empty} halfTile right />
    </Even>
    <Odd>
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Settlement} />
      <TileProvider type={tileTypes.Village} />
      <TileProvider type={tileTypes.Town} />
      <TileProvider type={tileTypes.OpenCountry} />
      <TileProvider type={tileTypes.Sea} />
    </Odd>
    <Even>
      <TileProvider type={tileTypes.Empty} halfTile left />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.LightForrest} />
      <TileProvider type={tileTypes.Forrest} />
      <TileProvider type={tileTypes.DarkForrest} />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Empty} halfTile right />
    </Even>
    <Odd>
      <TileProvider type={tileTypes.Empty} />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Sea} />
      <TileProvider type={tileTypes.Empty} />
    </Odd>
  </Map>;

TileMap.displayName = 'molecules/TileMap';

export default TileMap;
