import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

const fileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(fileReader);
matchReader.load();

const matches = matchReader.matches;

// const dateOfMatch = fileReader.data[0][0] // -> 'dateOfMatch' is properly recognized by TS as Date (taken from 'CSVdata' tuple)
// console.log(dateOfMatch) // -> 10/08/2018

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`); // -> Man United won 18 games
