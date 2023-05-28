// ** refactoring of the code, version 2 **
// MatchReader is a standalone class and it uses an interface 'DataReader' to satisfy the requirements

import fs from 'fs';

export class CsvFileReader {
  data: string[][] = []; // type + initialize 2D array of strings

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
      });
  }
}
