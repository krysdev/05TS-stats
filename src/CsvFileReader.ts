import fs from 'fs';

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
      });
  }
}
