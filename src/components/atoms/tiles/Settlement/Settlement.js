import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Source from './Settlement.png';
import Tile from '../Tile';
import { width } from '../../../../constants/tileSizes';

const Landscape = styled.div`
  display: block;
  position: relative;
  opacity: 1;
  height: ${width / 2.5}px;
  width: ${width / 2}px;
  margin-top: ${width / 4}px;
  margin-left: ${width / 8}px;
  ${props =>
    props.background !== ''
      ? css`
      background-image: url('${props.landscape}');
      background-size: 100% 100%;
      background-repeat: no-repeat;`
      : ''};
`;

const Settlement = ({ isActive, children }) =>
  <Tile color={'#71ce3b'} isActive={isActive}>
    <Landscape landscape={Source} />
    {children}
  </Tile>;

Settlement.propTypes = {
  isActive: PropTypes.bool,
};

Settlement.defaultProps = {
  isActive: false,
};

Settlement.displayName = 'atoms/Settlement';

export default Settlement;
