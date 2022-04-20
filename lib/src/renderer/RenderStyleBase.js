"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteDecoratorB = exports.ConcreteDecoratorA = exports.ConcreteComponent = exports.Component = exports.RenderStyleBase = void 0;
/**
* @file
* @author zhangjunyi
* @date 2022/04/19 15:01
*/
class RenderStyleBase {
}
exports.RenderStyleBase = RenderStyleBase;
// 抽象构件
class Component {
}
exports.Component = Component;
// 具体构件
class ConcreteComponent extends Component {
    operate() {
        console.log('do something');
    }
}
exports.ConcreteComponent = ConcreteComponent;
// 装饰角色
class Decorator extends Component {
    constructor(component) {
        super();
        this.component = component;
    }
    operate() {
        this.component.operate();
    }
}
// 具体装饰者
class ConcreteDecoratorA extends Decorator {
    constructor(component) {
        super(component);
    }
    // 定义自己的修饰方法
    methodA() {
        console.log('methodA修饰');
    }
    // 重写父类方法
    operate() {
        this.methodA();
        super.operate();
    }
}
exports.ConcreteDecoratorA = ConcreteDecoratorA;
class ConcreteDecoratorB extends Decorator {
    constructor(component) {
        super(component);
    }
    // 定义自己的修饰方法
    methodB() {
        console.log('methodB修饰');
    }
    // 重写父类方法
    operate() {
        this.methodB();
        super.operate();
    }
}
exports.ConcreteDecoratorB = ConcreteDecoratorB;
