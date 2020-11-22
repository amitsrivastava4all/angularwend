var Parent = /** @class */ (function () {
    function Parent(x) {
        this.x = x;
        this.y = 100;
        this.z = 200;
    }
    Parent.prototype.print = function () {
        console.log('X is ', this.x);
        console.log('Y is ', this.y);
        console.log('Z is ', this.z);
    };
    return Parent;
}());
// class Child extends Parent{
// }
var obj = new Parent(100);
//obj.x = 100;
