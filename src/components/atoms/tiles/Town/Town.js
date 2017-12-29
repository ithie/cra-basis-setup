import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Source from './Town.png';
import Tile from '../Tile';
import { width } from '../../../../constants/tileSizes';

const Landscape = styled.div`
  display: block;
  position: relative;
  opacity: 1;
  height: ${width / 2}px;
  width: ${width / 1.5}px;
  margin-top: ${width / 10}px;
  margin-left: ${width / 10}px;
  ${props =>
    props.background !== ''
      ? css`
      background-image: url('${props.landscape}');
      background-size: 100% 100%;
      background-repeat: no-repeat;`
      : ''};
`;
const Town = ({ isActive, children }) =>
  <Tile color={'#71ce3b'} isActive={isActive}>
    <Landscape landscape={Source} />
    {children}
  </Tile>;

Town.displayName = 'atoms/Town';

Town.propTypes = {
  isActive: PropTypes.bool,
};

Town.defaultProps = {
  isActive: false,
};

export default Town;
