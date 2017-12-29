import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Source from './Village.png';
import Tile from '../Tile';
import { width } from '../../../../constants/tileSizes';

const Landscape = styled.div`
  display: block;
  position: relative;
  opacity: 1;
  height: ${width / 1.5}px;
  width: ${width}px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0;
  ${props =>
    props.background !== ''
      ? css`
      background-image: url('${props.landscape}');
      background-size: 100% 100%;
      background-repeat: no-repeat;`
      : ''};
`;
const Village = ({ isActive, children }) =>
  <Tile color={'#71ce3b'} landscape={Source} isActive={isActive}>
    <Landscape landscape={Source} />
    {children}
  </Tile>;

Village.propTypes = {
  isActive: PropTypes.bool,
};

Village.defaultProps = {
  isActive: false,
};

Village.displayName = 'atoms/Village';

export default Village;
