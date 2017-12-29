import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { width } from '../../../constants/tileSizes';

const Wrapper = styled.div`
  display: block;
  position: absolute;
  top: ${width / 4}px;
  left: ${width / 10}px;
`;

const InnerFlag = styled.div`
  display: block;
  position: relative;
  .first {
    display: block;
    position: relative;
    background-color: ${props => props.color};
    width: ${props => props.troops * width / 20}px;
    height: ${width / 10}px;
  }
  .second {
    display: block;
    position: relative;
    background-color: white;
    width: ${props => props.troop * width / 20}px;
    height: ${width / 10}px;
  }
`;

const Flag = ({ color, troops }) => {
  return (
    <Wrapper>
      <InnerFlag color={color} troops={troops}>
        <div className="first" />
        <div className="second" />
      </InnerFlag>
    </Wrapper>
  );
};

Flag.propTypes = {
  color: PropTypes.string,
  troops: PropTypes.number,
};

Flag.defaultProps = {
  color: 'blue',
  troops: 10,
};

export default Flag;
