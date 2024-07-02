export class Singleton {
  private static _instance?: Singleton;

  private constructor() {}

  public static getInstance() {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance
  }
}
