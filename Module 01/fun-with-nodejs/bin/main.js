"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const calculator_1 = require("./calculator");
class Main {
    static run() {
        const i = 5;
        const j = 10;
        const mult = i * j;
        const c = new calculator_1.Calculator();
        console.log('Hello Typescript');
    }
}
exports.Main = Main;
Main.run();
//# sourceMappingURL=main.js.map