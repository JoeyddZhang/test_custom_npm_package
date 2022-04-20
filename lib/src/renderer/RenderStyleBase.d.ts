/**
* @file
* @author zhangjunyi
* @date 2022/04/19 15:01
*/
export declare class RenderStyleBase {
}
export declare abstract class Component {
    abstract operate(): void;
}
export declare class ConcreteComponent extends Component {
    operate(): void;
}
declare abstract class Decorator extends Component {
    private component;
    constructor(component: Component);
    operate(): void;
}
export declare class ConcreteDecoratorA extends Decorator {
    constructor(component: Component);
    private methodA;
    operate(): void;
}
export declare class ConcreteDecoratorB extends Decorator {
    constructor(component: Component);
    private methodB;
    operate(): void;
}
export {};
