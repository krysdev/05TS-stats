import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface
const fileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(fileReader);
matchReader.load();

// 'Summary' class arguments need to satisfy the 'Analyzer' and 'OutputTarget' interfaces
const summary = new Summary(
  // pass in the name of the team
  new WinsAnalysis('Man United'),
  // new HtmlReport()
  new ConsoleReport()
);

// 'matchReader.matches' is the array of match data tuples
summary.buildAndPrintReport(matchReader.matches); // -> Team Man United won 18 games
