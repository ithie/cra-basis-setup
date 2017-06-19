import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import OpenCountry from '../../atoms/tiles/OpenCountry/OpenCountry';
import LightForrest from '../../atoms/tiles/Forrest/LightForrest';
import Forrest from '../../atoms/tiles/Forrest/Forrest';
import DarkForrest from '../../atoms/tiles/Forrest/DarkForrest';
import Settlement from '../../atoms/tiles/Settlement/Settlement';
import Village from '../../atoms/tiles/Village/Village';
import Town from '../../atoms/tiles/Town/Town';
import Sea from '../../atoms/tiles/Sea/Sea';
import Empty from '../../atoms/tiles/Empty/Empty';

const tiles = {
  OpenCountry,
  Forrest,
  LightForrest,
  DarkForrest,
  Settlement,
  Village,
  Town,
  Sea,
  Empty,
};

export const tileTypes = {
  OpenCountry: 'OpenCountry',
  Forrest: 'Forrest',
  LightForrest: 'LightForrest',
  DarkForrest: 'DarkForrest',
  Settlement: 'Settlement',
  Village: 'Village',
  Town: 'Town',
  Sea: 'Sea',
  Empty: 'Empty',
};

export default class TileProvider extends Component {
  static propTypes = {
    type: PropTypes.oneOf(_.keys(tiles)).isRequired,
    halfTile: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    handle: PropTypes.func,
    activeTile: PropTypes.string,
  };

  static defaultProps = {
    halfTile: false,
    left: false,
    right: false,
    handle: () => {},
    activeTile: '',
  };

  static displayName = 'containers/TileProvider';

  constructor(props) {
    super(props);

    this.key = _.uniqueId('tile');
  }

  render() {
    const { handle, activeTile, type, halfTile, left, right } = this.props;
    const elementProps = {
      isActive: activeTile === this.key,
    };

    return (
      <div onClick={() => handle(this.key)}>
        {React.createElement(
          _.get(tiles, type, 'NONE'),
          halfTile ? { ...elementProps, halfTile: true, left, right } : elementProps
        )}
      </div>
    );
  }
}
