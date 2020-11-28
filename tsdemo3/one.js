var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // protected id:number;
    // protected name:string;
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    // constructor(id:number, name:string){
    //     this.id = id;
    //     this.name = name;
    // }
    Person.prototype.print = function () {
        console.log("Id is " + this.id + " Name is " + this.name);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(course, duration, id, name) {
        var _this = _super.call(this, id, name) || this;
        _this.course = course;
        _this.duration = duration;
        return _this;
    }
    Student.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("Course is " + this.course + " Duration is " + this.duration);
    };
    return Student;
}(Person));
//let person:Person  = new Person(1001,"Ram");
//person.print();
var student = new Student("TS", 4, 1001, "Ram");
student.print();
