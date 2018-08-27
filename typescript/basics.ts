
let num = 10;
console.log(num);
// function cb(i) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }
// for (var i = 0; i < 10; i++) {
//     cb(i);
// }
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

const num1  = 10;
num1 = 30;
console.log(num1 + num);