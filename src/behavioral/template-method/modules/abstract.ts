export abstract class AbstractClass {
  // arrow function because there's no 'final' keyword in TypeScript to avoid overriding this method
  readonly execute = () => {
    this.method1();
    this.hook();
    this.method2();

    return this.method3();
  }

  // commom logic for all classes, but can also be overridden by the concrete class
  protected method1(): void {
    console.log('method1 from abstract class');
  }

  // commom logic for all classes, but can also be overridden by the concrete class
  protected method2(): void {
    console.log('method2 from abstract class');
  }

  // specific logic for each class (must be implemented by the concrete class)
  protected abstract method3(): string;

  // hook method (optional) (can be overridden by the concrete class)
  protected hook() {}
}