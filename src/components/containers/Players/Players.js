import { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class Players extends Component {
  static propTypes = {
    players: PropTypes.number,
    children: PropTypes.any,
  };

  static defaultProps = {
    players: 2,
  };

  constructor(props) {
    super(props);

    let players = [];

    for (let i = 0; i < props.players; i++) {
      players.push(_.uniqueId('PLAYER'));
    }

    this.state = {
      players: {
        current: 0,
        list: players,
      },
      round: {},
    };
  }

  nextRound = () => {};

  nextPlayer = () => {
    const players = _.get(this.state.players);
    const currentPlayer = players.current;
    const playersList = players.list;
    if (currentPlayer < playersList.length - 1) {
      players.currentPlayer = currentPlayer + 1;
    } else {
      players.currentPlayer = 0;
    }
    this.setState({ players });
  };

  render() {
    return cloneElement(this.props.children, {
      nextPlayer: this.nextPlayer,
      players: this.state.players,
    });
  }
}
