class Person{
    // protected id:number;
    // protected name:string;
    constructor(protected id:number, protected name:string){}
    // constructor(id:number, name:string){
    //     this.id = id;
    //     this.name = name;
    // }
     print():void{
        console.log(`Id is ${this.id} Name is ${this.name}`)
    }

}
class Student extends Person{
    grade:string; // Instance Variable
constructor(protected course:string, protected duration:number
    ,id:number,  name:string)
{
super(id, name);
}
show(x:number):void{

}
print():void{
    super.print();
    console.log(`Course is ${this.course} Duration is ${this.duration}`);
}
}

//let person:Person  = new Person(1001,"Ram");
//person.print();

let ram:Student = new Student("TS",4,1001, "Ram");
ram.print();
let shyam:Student = new Student("TS",4,1002, "Shyam");
shyam.print();