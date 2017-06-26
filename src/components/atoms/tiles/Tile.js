import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const width = 100;

const Tile = styled.div`
  position: relative;
  display: block;
  
  left: 2px;
  
  box-shadow: inset 0 0 10px ${props => (props.isActive ? '#000' : '#0f0')};
  
  margin-top: 30px;
  width: ${width}px;
  height: 80px;
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
      border-bottom: 30px solid ${props => props.color};
      border-left: ${width / 2}px solid transparent;
      border-right: ${width / 2}px solid transparent;
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
  color: '#6C6',
  isActive: false,
};

export default Tile;
