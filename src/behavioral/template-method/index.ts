import { AbstractClass } from "./modules/abstract";
import { ConcreteClass01 } from "./modules/concrete01";
import { ConcreteClass02 } from "./modules/concrete02";

function main(implementation: AbstractClass) {
  const result = implementation.execute();
  console.log(result);
  console.log('---------');
}

const concrete01 = new ConcreteClass01();
main(concrete01);
// method1 from abstract class
// hook from concrete class 01
// method2 from abstract class
// method3 from concrete class 01

const concrete02 = new ConcreteClass02();
main(concrete02);
// method1 from abstract class
// method2 from abstract class
// method3 from concrete class 02
