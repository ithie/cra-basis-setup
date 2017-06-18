import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Village from '../../atoms/tiles/Village/Village';
import Forrest from '../../atoms/tiles/Forrest/Forrest';
import LightForrest from '../../atoms/tiles/Forrest/LightForrest';
import DarkForrest from '../../atoms/tiles/Forrest/DarkForrest';
import Settlement from '../../atoms/tiles/Settlement/Settlement';
import OpenCountry from '../../atoms/tiles/OpenCountry/OpenCountry';

const tiles = {
  Village,
  Forrest,
  LightForrest,
  DarkForrest,
  Settlement,
  OpenCountry,
};

export const tileTypes = {
  [tiles.Village]: 'Village',
  [tiles.Forrest]: 'Forrest',
  [tiles.LightForrest]: 'LightForrest',
  [tiles.DarkForrest]: 'DarkForrest',
  [tiles.Settlement]: 'Settlement',
  [tiles.OpenCountry]: 'OpenCountry',
};

const TileProvider = ({ type }) => React.createElement(tiles[type]);

TileProvider.propTypes = {
  type: PropTypes.oneOf(_.keys(tiles)).isRequired,
};

export default TileProvider;
