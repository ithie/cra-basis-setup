import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import OpenCountry from '../../atoms/tiles/OpenCountry/OpenCountry';
import LightForrest from '../../atoms/tiles/Forrest/LightForrest';
import Forrest from '../../atoms/tiles/Forrest/Forrest';
import DarkForrest from '../../atoms/tiles/Forrest/DarkForrest';
import Settlement from '../../atoms/tiles/Settlement/Settlement';
import Village from '../../atoms/tiles/Village/Village';
import Town from '../../atoms/tiles/Town/Town';
import Sea from '../../atoms/tiles/Sea/Sea';
import Empty from '../../atoms/tiles/Empty/Empty';

const tiles = {
  OpenCountry,
  Forrest,
  LightForrest,
  DarkForrest,
  Settlement,
  Village,
  Town,
  Sea,
  Empty,
};

export const tileTypes = {
  OpenCountry: 'OpenCountry',
  Forrest: 'Forrest',
  LightForrest: 'LightForrest',
  DarkForrest: 'DarkForrest',
  Settlement: 'Settlement',
  Village: 'Village',
  Town: 'Town',
  Sea: 'Sea',
  Empty: 'Empty',
};

const TileProvider = ({ type, halfTile, left, right }) =>
  React.createElement(_.get(tiles, type, 'NONE'), halfTile ? { halfTile: true, left, right } : {});

TileProvider.propTypes = {
  type: PropTypes.oneOf(_.keys(tiles)).isRequired,
  halfTile: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

TileProvider.defaultProps = {
  halfTile: false,
  left: false,
  right: false,
};

TileProvider.displayName = 'containers/TileProvider';

export default TileProvider;
