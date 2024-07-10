import { LoggerService } from "./modules/logger";
import { LoggerSingleton } from "./modules/logger-singleton";

export function main() {
  const logger1 = LoggerSingleton.getInstance();
  logger1.addLog('Log 1 from logger 1');

  const logger2 = LoggerSingleton.getInstance();
  logger2.addLog('Log 1 from logger 2');
  logger2.addLog('Log 2 from logger 2');

  logger1.getLogs(); // Output: [ 'Log 1 from logger 1', 'Log 1 from logger 2', 'Log 2 from logger 2' ]
  logger2.getLogs(); // Output: [ 'Log 1 from logger 1', 'Log 1 from logger 2', 'Log 2 from logger 2' ]


  const logger3 = new LoggerService()
  logger3.addLog('Log 1 from logger 3');

  const logger4 = new LoggerService()
  logger4.addLog('Log 1 from logger 4');

  logger3.getLogs(); // Output: [ 'Log 1 from logger 3' ]
  logger4.getLogs(); // Output: [ 'Log 1 from logger 4' ]
}

main()