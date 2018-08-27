// lambda function or arrow functions 
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
var multiply = function (num1, num2) {
    console.log(num1 + num2);
    // return 'ravi'
    return num1 * num2;
};
console.log(multiply(10, 'ravi'));
var A = /** @class */ (function () {
    function A(a, b) {
        this.x = a;
        this.y = b;
    }
    Object.defineProperty(A.prototype, "getX", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(A.prototype, "value", {
        set: function (v) {
            this.x = v;
        },
        enumerable: true,
        configurable: true
    });
    A.prototype.getY = function () {
        return this.y;
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.multiply = function () {
        return this.x * this.y;
    };
    return B;
}(A));
var obj_multiply = new B(10, 10);
var objOnA = new A(1, 2);
objOnA.value = 25;
console.log(objOnA.getX);
// private works only inside the defined class 
// protected works in super class and subclass 
// when do i use private ? 
// private properties will work in the same class where they are defined 
// when do i use protected ? 
// protected properties work inside the superclass and sub class
// both private and protected properties are not visible in instances of the classes
