import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const Town = ({ isActive }) => <Tile isActive={isActive}>Town</Tile>;

Town.displayName = 'atoms/Town';

Town.propTypes = {
  isActive: PropTypes.bool,
};

Town.defaultProps = {
  isActive: false,
};

export default Town;
