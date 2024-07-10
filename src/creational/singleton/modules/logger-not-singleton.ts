export class LoggerNotSingleton {
  private log: string[] = [];

  public addLog(log: string): void {
    this.log.push(log);
  }

  public showLogs(): void {
    console.log(this.log);
  }
}
