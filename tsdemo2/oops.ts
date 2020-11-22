class Parent{
    private _x:number;
    public y:number; //public
    protected z:number;
    constructor(x:number){
        this._x = x;
        this.y = 100;
        this.z = 200;
    }
    set x(x:number){
        this._x = x;
    }
    get x():number{
        return this._x;
    }
    public print():void{
        console.log('X is ',this._x);
        console.log('Y is ',this.y);
        console.log('Z is ',this.z);
    }

}
// class Child extends Parent{

// }
let obj:Parent = new Parent(100);
obj.print();
obj.x = 200; //setter
console.log(obj.x);// getter


//obj.x = 100;