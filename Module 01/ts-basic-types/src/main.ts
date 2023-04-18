import { Person } from './person';

export interface Printable {
    print(): void;
} 

export interface Scannable {
    scan(): void;
}


function printAndScan(obj: Printable & Scannable) {
    obj.print();
    obj.scan();
}

class Person2 {
    name: string = '';
    age: number = 0;
}

class Dog {
    name: string = '';
    age: number = 0;
}

interface Customer {
    id: string;
    displayName: string;
}

const c: Customer = {
    id: 'asdasda', 
    displayName: 'asdada'
};















type Direction = 'North' | 'South' | 'East' | 'West';
type DyeValue = 1 | 2 | 3 | 4 | 5 | 6;
type SmallEven = 2 | 4 | 6 | 8;

const ichud: DyeValue | SmallEven = 8;
const chituch: DyeValue & SmallEven = 6;

const d: Direction = 'North';

function goInDirection(d: Direction) {
    if (d === 'North') {

        // go north
    } else if (d === 'South') {

    }
}

function doSomethingWithNumber(x: string | null) {
    if (typeof x === 'number') {

    } else {
        
    }
}


console.log('Hello Log');

const p = new Person('John', 'Smith');

p.log();
console.log(p.fullName);

p.fullName = 'Paul McCartney';
p.log();


function doSomething(a: number) {
    if (a > 50) {
        return true;
    } else {
        return 'small number';
    }
}


function throwDye(): DyeValue {
    return 3;
}



let res: boolean | string = doSomething(100);
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
