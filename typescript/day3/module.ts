import { A } from './classes';
export namespace nmSpace{
    export class name1{
        constructor() {
            
        }
        x:number = 10;
    }
    class name2 {
        constructor() {

        }
        x:number = 20;
    }
}
let testContent = new A(10,30);
let testName1 = new nmSpace.name1();
let testName2 = new nmSpace.name2();