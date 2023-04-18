/*

1. boolean
2. number
3. string
4. object
5. function
6. undefined

*/

var o = {
    'x': 5,
    'y': 12,
    '5': 2,
    z: 42,
    w: {
        y: 23
    },
    j: undefined,
    log: function () {
        console.log(this.z);
    }
}

var a = [2, 4, 6, 8];



var o2 = {
    z: 'Hello world',
    blabla: o.log
};

function max(a, b) {
    if (a > b) return a;
    return b;
}

var m15 = max(10, 20);
var m16 = max(10);
var m17 = max();
var m18 = max(1, 2, 3);
var m19 = max({x: 50}, 'hello');

function Person(firstName, lastName, innerHeight) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.log = function() {
    console.log('Hi I am a Person');
    console.log(this.firstName, this.lastName);
}

var p1 = new Person('John', 'Smith', '1 meter 80');
var m1 = new max(10, 20);

//var p2 = Person('John', 'Smith', '1 meter 80');
var m2 = max(10, 20);



var original = String.prototype.toUpperCase;
String.prototype.toUpperCase = function() {
    return "*" + original.call(this) + "*";
}






var foo = max;

max(1, 4);
foo(2, 4);

o.log();
o2.blabla();

var o3 = {
    x: 10,
    y: 20,
    z: 30
}

var f1 = o.log;
f1.call(o3);


