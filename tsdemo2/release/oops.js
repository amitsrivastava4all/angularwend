"use strict";
class Parent {
    constructor(x) {
        this._x = x;
        this.y = 100;
        this.z = 200;
    }
    set x(x) {
        this._x = x;
    }
    get x() {
        return this._x;
    }
    print() {
        console.log('X is ', this._x);
        console.log('Y is ', this.y);
        console.log('Z is ', this.z);
    }
}
// class Child extends Parent{
// }
let obj = new Parent(100);
obj.print();
obj.x = 200; //setter
console.log(obj.x); // getter
//obj.x = 100;
//# sourceMappingURL=oops.js.map