import { LoggerService } from "./logger";

describe('Logger', () => {
  it('should not return the same instance', () => {
    // Arrange
    const logger1 = new LoggerService();
    const logger2 = new LoggerService();
    
    // Assert
    expect(logger1 === logger2).not.toBeTruthy();
  });
  
  it('should return separate logs when adding logs to loggers', () => {
    // Arrange
    const logger1 = new LoggerService();
    logger1.addLog('log 1');
    logger1.addLog('log 2');

    const logger2 = new LoggerService()
    logger2.addLog('log 3');

    // Act
    const resultLogger1 = logger1.getLogs();
    const resultLogger2 = logger2.getLogs();
    
    // Assert
    expect(resultLogger1).toEqual(['log 1', 'log 2']);
    expect(resultLogger2).toEqual(['log 3']);
  });
})