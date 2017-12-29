import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const Forrest = ({ isActive, children }) =>
  <Tile color={'#2BB217'} isActive={isActive}>
    {children}
  </Tile>;

Forrest.propTypes = {
  isActive: PropTypes.bool,
};

Forrest.defaultProps = {
  isActive: false,
};

Forrest.displayName = 'atoms/Forrest';

export default Forrest;
