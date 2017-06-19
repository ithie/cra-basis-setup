import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';
import HalfTile from '../HalfTile';

const Sea = ({ halfTile, left, right }) =>
  halfTile ? <HalfTile color="#00BFFF" left={left} right={right}>Sea</HalfTile> : <Tile color="#00BFFF">Sea</Tile>;

Sea.displayName = 'atoms/Sea';

Sea.propTypes = {
  halfTile: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

Sea.defaultProps = {
  halfTile: false,
  left: false,
  right: false,
};

export default Sea;
