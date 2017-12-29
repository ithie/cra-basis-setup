import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const OpenCountry = ({ isActive, children }) => <Tile color={'#71ce3b'} isActive={isActive} children={children} />;

OpenCountry.displayName = 'atoms/OpenCountry';

OpenCountry.propTypes = {
  isActive: PropTypes.bool,
};

OpenCountry.defaultProps = {
  isActive: false,
};

export default OpenCountry;
