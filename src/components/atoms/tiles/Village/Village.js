import React from 'react';
import PropTypes from 'prop-types';
import Source from './Village.png';

import Tile from '../Tile';

const Village = ({ isActive }) => <Tile background={Source} isActive={isActive}>Village</Tile>;

Village.propTypes = {
  isActive: PropTypes.bool,
};

Village.defaultProps = {
  isActive: false,
};

Village.displayName = 'atoms/Village';

export default Village;
