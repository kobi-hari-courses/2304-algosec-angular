"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        set: function (value) {
            var parts = value.split(' ');
            this.firstName = parts[0], this.lastName = parts[1];
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.log = function () {
        console.log("Preson ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map