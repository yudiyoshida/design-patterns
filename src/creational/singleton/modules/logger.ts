export class LoggerService {
  private _logs: string[] = [];

  public addLog(log: string): void {
    this._logs.push(log);
  }

  public getLogs(): string[] {
    return this._logs;
  }
}
