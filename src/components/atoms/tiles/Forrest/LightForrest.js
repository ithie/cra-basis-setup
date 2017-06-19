import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const LightForrest = ({ isActive }) => <Tile isActive={isActive}>Forrest</Tile>;

LightForrest.propTypes = {
  isActive: PropTypes.bool,
};

LightForrest.defaultProps = {
  isActive: false,
};

LightForrest.displayName = 'atoms/LightForrest';

export default LightForrest;
