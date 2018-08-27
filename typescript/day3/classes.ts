import { nmSpace } from './module';
// lambda function or arrow functions 

// function multiply (num1 , num2){
//     return num1 * num2 
// }

// console.log(multiply(10,20));
interface multiplicationDef{
    (a:number,b:number) : number;
}

let multiply: multiplicationDef = (num1 , num2 ) =>  {
        console.log(num1 + num2);
        // return 'ravi'
        return num1 * num2;
};


// console.log(multiply(10, 'ravi'));
export class A {
    private x:number;
    protected y : number;
    constructor(a:number, b: number ) {
        this.x = a;
        this.y = b;
    }
    get getX(): number {
        return this.x;
    }
    public set value(v : number) {
        this.x = v;
    }
    getY():number {
        return this.y;
    }
}
class B extends A {
    multiply():number {
        return this.x * this.y
    }
}
let obj_multiply = new B(10,10);
let objOnA = new A(1,2);
objOnA.value = 25;
console.log(objOnA.getX)
let newObjFromNamespace = new nmSpace.name1()
// set value and getX have become a property for the instance of 'A class'
// with the help of set and get we can define the value of private / potected properties  values from the instance of class A

// private works only inside the defined class 
// protected works in super class and subclass 

// when do i use private ? 
// private properties will work in the same class where they are defined 
// when do i use protected ? 
// protected properties work inside the superclass and sub class
// both private and protected properties are not visible in instances of the classes