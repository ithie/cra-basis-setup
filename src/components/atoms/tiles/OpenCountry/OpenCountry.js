import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const OpenCountry = ({ isActive }) => <Tile isActive={isActive}>Open Country</Tile>;

OpenCountry.displayName = 'atoms/OpenCountry';

OpenCountry.propTypes = {
  isActive: PropTypes.bool,
};

OpenCountry.defaultProps = {
  isActive: false,
};

export default OpenCountry;
