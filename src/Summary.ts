import { CSVdata } from './CSVdata';

export interface Analyzer {
  run(matches: CSVdata[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  // one line - type and initialize
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: CSVdata[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
