interface TestFn{
    (a:number,b:number):void
}
let mul_1: TestFn;
mul_1 = function(num1: number, num2: number) {
    console.log(num1 * num2)
}

mul_1(10, 'srk');

interface Point1 {
    x: number;
    readonly y: string;
    // z?: number;
    // [key: string]: any
}
let obj1: Point1 = { x: 10, y: 'ravi',z:45 };
//  {
//     x: 10,
//     y: 'srk'
// }
obj1.x = 15;
obj1.z = 10;
obj1.test = function () {
    console.log('test function');
}
// interface ArrayInterface {
//     [index: number]: number | string ;
    
//     // slice(x:number,y:number):number;
// }
// let arr1: ArrayInterface = [20, 30]
// let newarr1 = arr1.slice(0,2);
// let a1: ArrayInterface = arr1;
// console.log(a1[0]);
// let arr2:Array<number | string > = [10, 'ravi'];

interface NameVal {
    name: string;
}

function run (nameObj : NameVal){
    console.log(nameObj.name)
}

let myObj = {
    age:10, name:"srikanth "
};
run(myObj);

interface Table{
    color: string;
    type: string;
}

function createTable(config: Table):{
    color:string, woodType: string}{
        config.color = 'dark';
        config.type = 'teak';
        let newTable = {
            color:'white',
            woodType: 'wood'
        }
        return newTable;
    }

    let myNewTable = createTable({color:'red',type:'wooden' });

// function types 
interface CalcAValue{
    (num1 : number , num2 : number  ):any;
}    

let calculateArea : CalcAValue;
calculateArea = function(len,breadth){
    return true;
}

// Indexable types 
interface StringArray {
    [index:number] :string;
}
let newArray:StringArray;
newArray = ['ravi','srk'];

interface NumberedArray {
    [index:string]:number
}

let newArray1:NumberedArray;

newArray1 = { num1 :10, num2: 20}

// enums 
enum NEWS {
    North = 1, East, West, South
}
console.log(` East as a key , ${NEWS['East']}`);
console.log(`North , ${NEWS['0']}`);

// class types
interface DefineEngine{
    engineType:string;
    start():void;
    stop():void;
}
interface Engine_1Constructor{
    new (engineDetails:string);
}
class Engine_1 implements DefineEngine  {
    engineType;
    constructor(protected engineDetails){
        this.engineType = 'test';
    }
    start(){
        console.log(this.engineDetails);
        console.log('start the engine');
    }
    stop(){
        console.log('stop the engine ');
    }
}
class Engine_2 extends Engine_1 {
    constructor() {
        super('Desiel engine');
    }
    engage(){
        console.log(this.engineDetails)
    }
    
}
function createEngine(cNewEngine: Engine_1Constructor){
    return new cNewEngine('petrolengine');
}
// let carEngine_1 = new Engine_1('pertrol engine');
let myCar1 = createEngine(Engine_1);
let myCar2 = new Engine_2();
myCar2.start();
console.log(myCar1);
console.log(myCar2);
console.log(myCar2.engineDetails);
myCar2.start();



