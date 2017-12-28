import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import tiles from '../../atoms/tiles/tiles';

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
