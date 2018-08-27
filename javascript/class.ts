//*************************************************************** */
// example 1 
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
//*************************************************************** */
// example 2 
// inheritance 

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

//****************************************************** */
// example 3 
class Animal1 {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake1 extends Animal1 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse1 extends Animal1 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam1 = new Snake1("Sammy the Python");
let tom1: Animal1 = new Horse1("Tommy the Palomino");

sam1.move();
tom1.move(34);

// ***************************************************
// example 4 

class Animal2 {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake2 extends Animal2 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse2 extends Animal2 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam2 = new Snake2("Sammy the Python");
let tom2: Animal2 = new Horse2("Tommy the Palomino");

sam2.move();
tom2.move(34);

// **************************************************
// example 5
// public private and protected modifiers 

class Animal3 {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
// example 6 
class Animal4 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal4("Cat").name; // Error: 'name' is private;

// example 7 
// ************************************************************

class Animal5 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal5 {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal5("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; 

// example 8
// **********************************************
class Person1 {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee1 extends Person1 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error


// example 9 
// ****************************************************
class Person2 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee2 can extend Person2
class Employee2 extends Person2 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard2 = new Employee2("Howard", "Sales");
let john = new Person2("John"); // Error: The 'Person' constructor is protected

// example 10 
// ********************************************************
// readonly modifiers 
class Octopus1 {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus1("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.

// example 11 
// ********************************************************
// parameter properties 
class Octopus2 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}


// example 12 
// ********************************************************
class Octopus3 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}
// example 13 
// accessors 
// ******************************************************
class Employee3 {
    fullName: string;
}

let employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    console.log(employee3.fullName);
}

// example 14
// *****************************************************
let passcode = "secret passcode";

class Employee4 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee4 = new Employee4();
employee4.fullName = "Bob Smith";
if (employee4.fullName) {
    console.log(employee4.fullName);
}
// example 15 
// static properties

class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// abstract classes 
// example 16
abstract class Animal6 {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}


