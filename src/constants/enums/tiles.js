import tileTypes from './tileTypes';

export const E = 'E';
export const S = 'S';
export const LF = 'LF';
export const F = 'F';
export const DF = 'DF';
export const SM = 'SM';
export const V = 'V';
export const T = 'T';
export const OC = 'OC';

const tiles = {
  [E]: tileTypes.Empty,
  [S]: tileTypes.Sea,
  [LF]: tileTypes.LightForrest,
  [F]: tileTypes.Forrest,
  [DF]: tileTypes.DarkForrest,
  [SM]: tileTypes.Settlement,
  [V]: tileTypes.Village,
  [T]: tileTypes.Town,
  [OC]: tileTypes.OpenCountry,
};

export default tiles;
