// this class is customized specificly to read 'football.csv'

import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// defining a tuple (type alias / type definition)
type CSVdata = [Date, string, string, number, number, MatchResult, string];

// see CsvFileReader for generics (T = CSVdata)
export class MatchReader extends CsvFileReader <CSVdata> {
  mapRow(row: string[]): CSVdata {
    return [
      dateStringToDate(row[0]), // convert date as a string to a Date object
      row[1], // string
      row[2], // string
      parseInt(row[3]), // number
      parseInt(row[4]), // number
      row[5] as MatchResult, // string that is one of the possible values inside of the 'MatchResult' enum
      row[6], // string
    ];
  }
}
