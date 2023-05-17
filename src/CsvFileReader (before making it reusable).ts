// The file is just for the data structure as in 'football.csv'
// The other file is modified to be reusable

import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// defining a tuple (type alias/definition)
type CSVdata = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  // data: string[][] = []; // initialize 2D array of strings (but not used anymore, just the below)
  data: CSVdata[] = []; // CSVdata is already an array, so it is still a 2D array

  // one line
  constructor(public filename: string) {}

  read(): void {
    // CSV file row: 10/08/2018,Man United,Leicester,2,1,H,A Marriner
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      // split into an array of strings
      .split('\n')
      // and then an array of arrays [['a','b'],['x','y']]
      .map((row: string): string[] => {
        return row.split(',');
      })
      // convert data type from strings
      .map((row: string[]): CSVdata => {
        return [
          dateStringToDate(row[0]), // convert date as a string to a Date object
          row[1], // string
          row[2], // string
          parseInt(row[3]), // number
          parseInt(row[4]), // number
          row[5] as MatchResult, // string that is one of the possible values inside of the 'MatchResult' enum
          row[6], // string
        ];
      });
  }
}
