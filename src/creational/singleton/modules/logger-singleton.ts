import { LoggerService } from "./logger";

// Perceba que "_instance" não deve ser do tipo da própria classe singleton (LoggerSingleton).
// Ela pode ser ser qualquer classe, nesse exemplo, é a classe LoggerService.
// Isso é o que torna o Singleton flexível, pois você pode usar qualquer classe que desejar.
// Dessa forma, a lógica do objeto _instance fica encapsulada dentro da sua própria classe.
// A classe singleton não lida com a lógica do objeto "_instance", apenas com a lógica de criação dele.
export class LoggerSingleton {
  // singleton instance
  private static _instance?: LoggerService;

  // private constructor to avoid client applications to use constructor
  private constructor() {}

  // singleton implementation
  public static getInstance(): LoggerService {
    if (!LoggerSingleton._instance) {
      LoggerSingleton._instance = new LoggerService();
    }
    return LoggerSingleton._instance;
  }
}
