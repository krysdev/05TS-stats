import fs from 'fs';
import { MatchResult } from './MatchResult';

// defining a tuple (type alias / type definition)
type CSVdata = [Date, string, string, number, number, MatchResult, string];

// <T> is a GENERICS (variable type)
export abstract class CsvFileReader<T> {
  // data: string[][] = []; // initialize 2D array of strings (but not used anymore, just the below)
  data: T[] = []; // 'T' (TypeOfData) is already an array, so it is still a 2D array

  // one line
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

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
      // convert strings to a proper data type
      .map(this.mapRow);
  }
}
