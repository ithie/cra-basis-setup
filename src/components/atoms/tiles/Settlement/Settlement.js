import React from 'react';
import PropTypes from 'prop-types';
import Source from './Settlement.png';

import Tile from '../Tile';

const Settlement = ({ isActive }) =>
  <Tile background={Source} isActive={isActive}>
    Settlement
  </Tile>;

Settlement.propTypes = {
  isActive: PropTypes.bool,
};

Settlement.defaultProps = {
  isActive: false,
};

Settlement.displayName = 'atoms/Settlement';

export default Settlement;
