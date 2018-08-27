function mul(num1:number, num2:number ){
    console.log(num1 * num2)
}

mul(10,'srk');

interface Point{
    x: number;
    y: string;
    z?: number;
    [key: string]: any
}
let obj:Point = {x:10, y:'ravi'};
//  {
//     x: 10,
//     y: 'srk'
// }
obj.z = 10;
obj.test = function(){
    console.log('test function');
}
interface ArrayInterface{
    [index:number]:string|number ;
}
let arr = ['srk','ravi',20,30,function(){}]
let a:ArrayInterface = arr.slice(0,2);
console.log(a[0]);