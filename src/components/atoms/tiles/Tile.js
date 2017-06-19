import styled from 'styled-components';
import PropTypes from 'prop-types';

export const width = 100;

const Tile = styled.div`
  position: relative;
  display: block;
  
  left: 2px;
  
  box-shadow: inset 0 0 10px #0f0;
  
  margin-top: 30px;
  width: ${width}px;
  height: 80px;
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
  color: PropTypes.string,
};

Tile.defaultProps = {
  color: '#6C6',
};

export default Tile;
