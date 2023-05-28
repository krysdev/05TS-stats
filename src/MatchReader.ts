import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// defining a tuple (type alias/definition)
type CSVdata = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: CSVdata[] = []; // initialize a variable used below

  // type + initialize
  reader: DataReader;
  constructor(reader: DataReader) {
    this.reader = reader;
  }

  // one line
  // constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data
      // convert data type from strings to what is defined in the 'CSVdata' tuple
      .map((row: string[]): CSVdata => {
        return [
          dateStringToDate(row[0]), // convert date from a string to a Date object
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
