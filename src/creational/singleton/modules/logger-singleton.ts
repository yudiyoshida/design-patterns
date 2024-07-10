export class LoggerSingleton {
  private log: string[] = [];

  public addLog(log: string): void {
    this.log.push(log);
  }

  public showLogs(): void {
    console.log(this.log);
  }

  // singleton instance
  private static _instance?: LoggerSingleton;

  // private constructor to avoid client applications to use constructor
  private constructor() {}

  // singleton implementation
  public static getInstance(): LoggerSingleton {
    if (!LoggerSingleton._instance) {
      LoggerSingleton._instance = new LoggerSingleton();
    }
    return LoggerSingleton._instance
  }
}
