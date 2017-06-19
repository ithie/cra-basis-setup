import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';
import HalfTile from '../HalfTile';

const Empty = ({ halfTile, left, right }) =>
  halfTile ? <HalfTile color="#ffffff" left={left} right={right} /> : <Tile color="#ffffff" />;

Empty.displayName = 'atoms/Empty';

Empty.propTypes = {
  halfTile: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

Empty.defaultProps = {
  halfTile: false,
  left: false,
  right: false,
};

export default Empty;
