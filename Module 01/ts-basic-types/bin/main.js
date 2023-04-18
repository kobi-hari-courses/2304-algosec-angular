"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
function printAndScan(obj) {
    obj.print();
    obj.scan();
}
var Person2 = /** @class */ (function () {
    function Person2() {
        this.name = '';
        this.age = 0;
    }
    return Person2;
}());
var Dog = /** @class */ (function () {
    function Dog() {
        this.name = '';
        this.age = 0;
    }
    return Dog;
}());
var c = {
    id: 'asdasda',
    displayName: 'asdada'
};
var ichud = 8;
var chituch = 6;
var d = 'North';
function goInDirection(d) {
    if (d === 'North') {
        // go north
    }
    else if (d === 'South') {
    }
}
function doSomethingWithNumber(x) {
    if (typeof x === 'number') {
    }
    else {
    }
}
console.log('Hello Log');
var p = new person_1.Person('John', 'Smith');
p.log();
console.log(p.fullName);
p.fullName = 'Paul McCartney';
p.log();
function doSomething(a) {
    if (a > 50) {
        return true;
    }
    else {
        return 'small number';
    }
}
function throwDye() {
    return 3;
}
var res = doSomething(100);
res = true;
res = 'dfsdfasdfa';
// class Person {
//     firstName: string = 'john';
//     log() {
//         console.log('I am a person and my name is ' + this.firstName);
//         setTimeout(() => console.log(this.firstName), 2000);
//     }
// }
// const p = new Person();
// p.log();
// // function doSomething(a: number) {
// //     const i = 50;
// //     if (a > 100) {
// //         const i = 100;
// //         console.log(i);
// //     }
// //     console.log(i);
// // }
// // doSomething(200);
//# sourceMappingURL=main.js.map