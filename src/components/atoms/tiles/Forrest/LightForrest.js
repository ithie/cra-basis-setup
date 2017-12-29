import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const LightForrest = ({ isActive, children }) =>
  <Tile color={'#71ce3b'} isActive={isActive}>
    Light Forest
    {children}
  </Tile>;

LightForrest.propTypes = {
  isActive: PropTypes.bool,
};

LightForrest.defaultProps = {
  isActive: false,
};

LightForrest.displayName = 'atoms/LightForrest';

export default LightForrest;
