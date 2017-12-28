import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import TileProvider from '../../containers/TileProvider/TileProvider';

import tiles from '../../../constants/enums/tiles';
import tileTypes from '../../../constants/enums/tileTypes';
import defaultMap from '../../../constants/maps/defaultMap';

import { width } from '../../../constants/tileSizes';

const Map = styled.div`
  display: block;
  position: relative;
  height: ${props => (props.rows ? `${props.rows * width + width}px` : '600px')};
  width: ${props => (props.cols ? `${props.cols * width}px` : '600px')};
`;

const Odd = styled.div`
  display: block;
  position: relative;
  top: 4px;
  > div {
    float: left;
  }
  width: ${props => (props.cols ? `${props.cols * width}px` : '600px')};
  clear: left;
`;

const Even = styled.div`
  display: block;
  position: relative;
  width: ${props => (props.cols ? `${(props.cols - 1) * width}px` : '600px')};
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

  getEvenOdd = rowIndex => (rowIndex % 2 === 0 ? Odd : Even);

  getTileType = column => (typeof tiles[column] !== 'undefined' ? tiles[column] : tileTypes.Empty);

  getMapRowCol = (row, rowIndex, column, columnIndex) => {
    return React.createElement(
      TileProvider,
      {
        key: `column:${rowIndex}:${columnIndex}`,
        type: this.getTileType(column),
        handle: this.handle,
        activeTile: this.state.activeTile,
        halfTile: rowIndex % 2 === 1 && (columnIndex === 0 || columnIndex === row.length - 1),
        left: columnIndex === 0,
        right: columnIndex === row.length - 1,
      },
      ''
    );
  };

  getMapRowCols = (row, rowIndex) =>
    _.map(row, (column, columnIndex) => this.getMapRowCol(row, rowIndex, column, columnIndex));

  getMapRow = (row, rowIndex) =>
    React.createElement(
      this.getEvenOdd(rowIndex),
      {
        key: `row:${rowIndex}:`,
        cols: row.length,
      },
      this.getMapRowCols(row, rowIndex)
    );

  getMapRows = mapTiles => _.map(mapTiles, this.getMapRow);

  getMap = mapTiles =>
    React.createElement(
      Map,
      {
        rows: mapTiles.length,
        cols: mapTiles[0].length,
      },
      this.getMapRows(mapTiles)
    );

  handle = tile =>
    this.setState({
      activeTile: tile && tile !== this.state.activeTile ? tile : null,
    });

  render() {
    return this.getMap(defaultMap);
  }
}
