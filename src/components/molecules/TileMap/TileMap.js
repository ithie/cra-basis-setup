import React, { Component } from 'react';
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

export default class TileMap extends Component {
  static displayName = 'molecules/TileMap';

  constructor(props) {
    super(props);

    this.state = { activeTile: null };
  }

  handle = tile =>
    this.setState({
      activeTile: tile && tile !== this.state.activeTile ? tile : null,
    });

  render() {
    return (
      <Map>
        <Odd>
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Empty} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Empty} />
        </Odd>
        <Even>
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Empty} halfTile left />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.LightForrest} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Forrest} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.DarkForrest} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Empty} halfTile right />
        </Even>
        <Odd>
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Settlement} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Village} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Town} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.OpenCountry} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
        </Odd>
        <Even>
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Empty} halfTile left />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.LightForrest} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Forrest} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.DarkForrest} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Empty} halfTile right />
        </Even>
        <Odd>
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Empty} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Sea} />
          <TileProvider handle={this.handle} activeTile={this.state.activeTile} type={tileTypes.Empty} />
        </Odd>
      </Map>
    );
  }
}
