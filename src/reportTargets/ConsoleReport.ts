import { OutputTarget } from '../Summary';

// implements - to use help of TS to implement the 'OutputTarget' interface (it's optional)
export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
