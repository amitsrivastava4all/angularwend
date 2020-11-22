function add(x:number, y:number):number{
    return x + y;
}
function show(){
    console.log('I am Show ');
}
var z:number  = add(10,20);
console.log('Z is ',z);

var a:number;
var e:(x:number, y:number)=>number;
//e = add;
//e = show;
//var obj2 = {};
/*var obj:{x:string, y:number} ;
obj = {x:'Ram',y:1001};
var obj2:{x:string, y:number} ;
*/
type customObj = {x:string, y:number};
var a1:customObj;
var b1:customObj;
a1 = {x:'Ram',y:1001};
b1 = {x:'Shyam',y:1002};
console.log(typeof e);

// Union
var k:string|number;
k = "Ram";
k = 1001;
//k = true;

var q:any;
q = 1001;
q = "Amit";
