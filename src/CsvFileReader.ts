import fs from 'fs';
import { dateStringToDate } from './utils';

export class CsvFileReader {
  data: string[][] = [];

  // one line
  constructor(public filename: string) {}

  read(): void {
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
      .map((row: string[]): any => {
        return [
          dateStringToDate(row[0]), // convert date as a string to a Date object
          row[1], // string
          row[2], // string
          parseInt(row[3]), // number
          parseInt(row[4]), // number
          row[5],
        ];
      });
  }
}
