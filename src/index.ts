import { CsvFileReader } from './CsvFileReader';

const fileReader = new CsvFileReader('football.csv');
fileReader.read();
const matches = fileReader.data

// TS enumeration - an object that stores closely related values (it's an info to other engineers)
// There are no ':' and no first '=', but it's compiled to a normal object in JS
// It serves as type declaration too (so same like for the normal objects)
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`); // -> Man United won 18 games
