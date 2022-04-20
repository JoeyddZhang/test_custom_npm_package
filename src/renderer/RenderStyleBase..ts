/**
* @file 
* @author zhangjunyi
* @date 2022/04/19 15:01
*/
export class RenderStyleBase {

}

// 抽象构件
export abstract class Component {
    public abstract operate() : void;
}

// 具体构件
export class ConcreteComponent extends Component {
    public operate() : void {
        console.log('do something');
    }
}

// 装饰角色
abstract class Decorator extends Component {
    private component : Component ;
    constructor(component : Component ) {
        super();
        this.component = component;
    }

    public operate() : void {
        this.component.operate();
    }
}

// 具体装饰者
export class ConcreteDecoratorA extends Decorator {
    constructor(component : Component) {
        super(component);
    }

    // 定义自己的修饰方法
    private methodA() : void {
        console.log('methodA修饰');
    }

    // 重写父类方法
    public operate() : void {
        this.methodA();
        super.operate();
    }
}

export class ConcreteDecoratorB extends Decorator {
    constructor(component : Component) {
        super(component);
    }

    // 定义自己的修饰方法
    private methodB() : void {
        console.log('methodB修饰');
    }

    // 重写父类方法
    public operate() : void {
        this.methodB();
        super.operate();
    }
}
