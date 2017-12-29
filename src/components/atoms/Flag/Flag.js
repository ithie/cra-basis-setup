import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { width } from '../../../constants/tileSizes';

const Wrapper = styled.div`
  display: block;
  position: absolute;
  top: ${width / 10}px;
  left: ${width / 10}px;
`;

const InnerFlag = styled.div`
  display: block;
  position: relative;
  .first {
    display: block;
    position: relative;
    background-color: ${props => props.color};
    width: ${width / 5}px;
    height: ${width / 10}px;
  }
  .second {
    display: block;
    position: relative;
    background-color: white;
    width: ${width / 5}px;
    height: ${width / 10}px;
  }
`;

const Flag = ({ color }) => {
  return (
    <Wrapper>
      <InnerFlag color={color}>
        <div className="first" />
        <div className="second" />
      </InnerFlag>
    </Wrapper>
  );
};

Flag.propTypes = {
  color: PropTypes.string,
};

Flag.defaultProps = {
  color: 'blue',
};

export default Flag;
