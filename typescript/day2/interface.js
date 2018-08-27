var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mul_1;
mul_1 = function (num1, num2) {
    console.log(num1 * num2);
};
mul_1(10, 'srk');
var obj1 = { x: 10, y: 'ravi', z: 45 };
//  {
//     x: 10,
//     y: 'srk'
// }
obj1.x = 15;
obj1.z = 10;
obj1.test = function () {
    console.log('test function');
};
function run(nameObj) {
    console.log(nameObj.name);
}
var myObj = {
    age: 10, name: "srikanth "
};
run(myObj);
function createTable(config) {
    config.color = 'dark';
    config.type = 'teak';
    var newTable = {
        color: 'white',
        woodType: 'wood'
    };
    return newTable;
}
var myNewTable = createTable({ color: 'red', type: 'wooden' });
var calculateArea;
calculateArea = function (len, breadth) {
    return true;
};
var newArray;
newArray = ['ravi', 'srk'];
var newArray1;
newArray1 = { num1: 10, num2: 20 };
// enums 
var NEWS;
(function (NEWS) {
    NEWS[NEWS["North"] = 1] = "North";
    NEWS[NEWS["East"] = 2] = "East";
    NEWS[NEWS["West"] = 3] = "West";
    NEWS[NEWS["South"] = 4] = "South";
})(NEWS || (NEWS = {}));
console.log(" East as a key , " + NEWS['East']);
console.log("North , " + NEWS['0']);
var Engine_1 = /** @class */ (function () {
    function Engine_1(engineDetails) {
        this.engineDetails = engineDetails;
        this.engineType = 'test';
    }
    Engine_1.prototype.start = function () {
        console.log(this.engineDetails);
        console.log('start the engine');
    };
    Engine_1.prototype.stop = function () {
        console.log('stop the engine ');
    };
    return Engine_1;
}());
var Engine_2 = /** @class */ (function (_super) {
    __extends(Engine_2, _super);
    function Engine_2() {
        return _super.call(this, 'Desiel engine') || this;
    }
    Engine_2.prototype.engage = function () {
        console.log(this.engineDetails);
    };
    return Engine_2;
}(Engine_1));
function createEngine(cNewEngine) {
    return new cNewEngine('petrolengine');
}
// let carEngine_1 = new Engine_1('pertrol engine');
var myCar1 = createEngine(Engine_1);
var myCar2 = new Engine_2();
myCar2.start();
console.log(myCar1);
console.log(myCar2);
console.log(myCar2.engineDetails);
myCar2.start();
