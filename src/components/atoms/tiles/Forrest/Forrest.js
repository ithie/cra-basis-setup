import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const Forrest = ({ isActive }) => <Tile isActive={isActive}>Forrest</Tile>;

Forrest.propTypes = {
  isActive: PropTypes.bool,
};

Forrest.defaultProps = {
  isActive: false,
};

Forrest.displayName = 'atoms/Forrest';

export default Forrest;
