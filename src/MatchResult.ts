// TS enumeration - an object that stores closely related values (it's an info to other engineers)
// There are no ':' and no first '=', but it's compiled to a normal object in JS
// It serves as type declaration too (so same like for the normal objects)
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
