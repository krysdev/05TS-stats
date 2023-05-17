import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const fileReader = new CsvFileReader('football.csv');
fileReader.read();
const matches = fileReader.data;

const dateOfMatch = fileReader.data[0][0] // -> 'dateOfMatch' is properly recognized by TS as Date (taken from 'CSVdata' tuple)

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`); // -> Man United won 18 games
