import React from 'react';
import PropTypes from 'prop-types';
import Source from '../../../../images/small_town.jpg';

import Tile from '../Tile';

const Town = ({ isActive }) => <Tile background={Source} isActive={isActive}>Town</Tile>;

Town.displayName = 'atoms/Town';

Town.propTypes = {
  isActive: PropTypes.bool,
};

Town.defaultProps = {
  isActive: false,
};

export default Town;
