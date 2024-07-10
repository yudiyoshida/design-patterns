import { LoggerSingleton } from "./logger-singleton";

describe('LoggerSingleton', () => {
  it('should return the same instance when calling getInstance multiple times', () => {
    // Arrange
    const logger1 = LoggerSingleton.getInstance();
    const logger2 = LoggerSingleton.getInstance();
    // Assert
    expect(logger1 === logger2).toBeTruthy();
  });
  
  it('should return the same logs when adding logs to the instance', () => {
    // Arrange
    const logger1 = LoggerSingleton.getInstance();
    logger1.addLog('log 1');
    logger1.addLog('log 2');

    const logger2 = LoggerSingleton.getInstance();
    logger2.addLog('log 3');

    // Act
    const resultLogger1 = logger1.getLogs();
    const resultLogger2 = logger2.getLogs();
    
    // Assert
    expect(resultLogger1).toEqual(['log 1', 'log 2', 'log 3']);
    expect(resultLogger2).toEqual(['log 1', 'log 2', 'log 3']);
  });
})