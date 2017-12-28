import PropTypes from 'prop-types';

import Tile from './Tile';

import { width, borderHeight } from '../../../constants/tileSizes';
import { blue100 } from '../../../constants/colors/colors';

const HalfTile = Tile.extend`
  width: ${width / 2}px;
  
  :before {
      content: " ";
      width: 0;
      height: 0;
      position: absolute;
      top: -${borderHeight}px;
      left: 0;
      border-bottom: 0;
      border-right: ${props => (props.right ? `${width / 2}px solid ${props.color}` : '0')};
      border-left: ${props => (props.left ? `${width / 2}px solid ${props.color}` : '0')};
      border-top: ${borderHeight}px solid transparent;
  }

  :after {
      content: " ";
      width: 0;
      position: absolute;
      bottom: -${borderHeight}px;
      left: 0;
      border-top: ${borderHeight}px solid transparent;
      border-left: ${props => (props.left ? `${width / 2}px solid ${props.color};` : '0')};
      border-right: ${props => (props.right ? `${width / 2}px solid ${props.color};` : '0')};
      border-bottom: 0;
  }
`;

HalfTile.displayName = 'atoms/HalfTile';

HalfTile.propTypes = {
  color: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  isActive: PropTypes.bool,
};

HalfTile.defaultProps = {
  color: blue100,
  left: false,
  right: false,
  isActive: false,
};

export default HalfTile;
