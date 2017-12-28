import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { black, teal800, blue100 } from '../../../constants/colors/colors';
import { width, borderHeight } from '../../../constants/tileSizes';

export const BaseTile = styled.div`
  position: relative;
  display: block;
  
  left: 2px;
  
  box-shadow: inset 0 0 10px ${props => (props.isActive ? black : teal800)};
  
  font-family: "Arial";
  font-size: ${width / 5}px;
  color: ${black};
  
  margin-top: ${borderHeight}px;
  width: ${width}px;
  height: ${width - borderHeight}px;
  ${props =>
    props.background !== ''
      ? css`
        background-image: url('${props.background}');
        background-size: 100% 100%;
        background-repeat: no-repeat;`
      : ''}
  background-color: ${props => props.color};
  
  :before {
      content: " ";
      width: 0; height: 0;
      border-bottom: ${borderHeight}px solid ${props => props.color};
      border-left: ${width / 2}px solid transparent;
      border-right: ${width / 2}px solid transparent;
      position: absolute;
      top: -${borderHeight}px;
      left: 0;
  }
  
  :after {
      content: "";
      width: 0;
      position: absolute;
      bottom: -${borderHeight}px;
      left: 0;
      border-top: ${borderHeight}px solid ${props => props.color};
      border-left: ${width / 2}px solid transparent;
      border-right: ${width / 2}px solid transparent;
  }
`;

const Tile = ({ isActive, background, color, children }) =>
  <BaseTile isActive={isActive} color={color} background={background}>
    {children}
  </BaseTile>;

Tile.displayName = 'atoms/Tile';

Tile.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.any,
};

Tile.defaultProps = {
  background: '',
  color: blue100,
  isActive: false,
};

export default Tile;
