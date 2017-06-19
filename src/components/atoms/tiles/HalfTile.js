import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { width } from './Tile';

const HalfTile = styled.div`
  position: relative;
  display: block;
  
  left: 2px;
  
  box-shadow: inset 0 0 10px #0f0;
  
  margin-top: 30px;
  width: ${width / 2}px;
  height: 80px;
  background-color: ${props => props.color};
  
  :before {
      content: " ";
      width: 0; height: 0;
      border-bottom: 30px solid ${props => props.color};
      ${props => props.right && css`border-left: ${width / 2}px solid transparent;`}
      ${props => props.left && css`border-right: ${width / 2}px solid transparent;`}
      position: absolute;
      top: -30px;
      left: 0;
  }

  :after {
      content: "";
      width: 0;
      position: absolute;
      bottom: -30px;
      left: 0;
      border-top: 30px solid ${props => props.color};
      ${props => props.right && css`border-left: ${width / 2}px solid transparent;`}
      ${props => props.left && css`border-right: ${width / 2}px solid transparent;`}
  }
`;

HalfTile.displayName = 'atoms/HalfTile';

HalfTile.propTypes = {
  color: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

HalfTile.defaultProps = {
  color: '#6C6',
  left: true,
  right: true,
};

export default HalfTile;
