import styled from 'styled-components';

const width = 100;

const Tile = styled.div`
  position: relative;
  display: block;
  
  margin-top: 30px;
  width: ${width}px;
  height: 80px;
  background-color: #6C6;
  
  :before {
      content: " ";
      width: 0; height: 0;
      border-bottom: 30px solid #6C6;
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
      border-top: 30px solid #6C6;
      border-left: ${width / 2}px solid transparent;
      border-right: ${width / 2}px solid transparent;
  }
`;

export default Tile;
