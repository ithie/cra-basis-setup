import { E, S, LF, F, DF, OC, SM, T, V } from '../enums/tiles';

const tileMap = [
  [E, S, S, S, S, S, E],
  [E, S, LF, F, F, DF, S, E],
  [S, SM, V, LF, T, OC, S],
  [S, SM, V, OC, T, OC, OC, S],
  [S, SM, V, OC, T, OC, S],
  [E, S, LF, OC, F, DF, S, E],
  [E, S, S, S, S, S, E],
];

export default tileMap;
