import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const DarkForrest = ({ isActive, children }) => <Tile color="#458B00" isActive={isActive} children={children} />;

DarkForrest.propTypes = {
  isActive: PropTypes.bool,
};

DarkForrest.defaultProps = {
  isActive: false,
};

DarkForrest.displayName = 'atoms/DarkForrest';
export default DarkForrest;
