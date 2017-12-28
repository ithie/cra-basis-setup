import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { black, teal800, blue100 } from '../../../constants/colors/colors';
import { width, borderHeight } from '../../../constants/tileSizes';

export const Tile = styled.div`
  position: relative;
  display: block;
  
  left: 2px;
  
  box-shadow: inset 0 0 10px ${props => (props.isActive ? black : teal800)};
  
  font-family: "Arial";
  font-size: ${width / 4}px;
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

Tile.displayName = 'atoms/Tile';

Tile.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  isActive: PropTypes.bool,
};

Tile.defaultProps = {
  background: '',
  color: blue100,
  isActive: false,
};

export default Tile;
