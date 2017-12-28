import { E, S, LF, F, DF, OC, SM, T, V } from '../enums/tiles';

const tileMap = [
  [E, S, S, S, S, S, E],
  [E, S, LF, SM, F, DF, S, E],
  [S, OC, OC, LF, OC, OC, S],
  [S, OC, V, S, T, OC, OC, S],
  [S, OC, OC, OC, LF, OC, S],
  [E, S, SM, OC, LF, DF, S, E],
  [E, S, S, S, S, S, E],
];

export default tileMap;
