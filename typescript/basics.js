var num = 10;
console.log(num);
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};
// function cb(i) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }
// for (var i = 0; i < 10; i++) {
//     cb(i);
// }
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var num1 = 10;
num1 = 30;
console.log(num1 + num);
