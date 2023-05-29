import { Analyzer } from '../Summary';
import { CSVdata } from '../CSVdata';
import { MatchResult } from '../MatchResult';

// implements - to use help of TS to implement the 'Analyzer' interface (it's optional)
export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: CSVdata[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === 'Man United' &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
