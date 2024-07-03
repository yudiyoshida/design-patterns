import { AbstractClass } from "./abstract";

export class ConcreteClass01 extends AbstractClass {
  protected method3(): string {
    return 'method3 from concrete class 01';
  }

  protected hook() {
    console.log('hook from concrete class 01');
  }
}