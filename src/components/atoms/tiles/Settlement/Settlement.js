import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const Settlement = ({ isActive }) => <Tile isActive={isActive}>Settlement</Tile>;

Settlement.propTypes = {
  isActive: PropTypes.bool,
};

Settlement.defaultProps = {
  isActive: false,
};

Settlement.displayName = 'atoms/Settlement';

export default Settlement;
