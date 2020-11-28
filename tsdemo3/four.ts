interface Emp{
    name:string;
    id:number;
}
function show(emp:Emp):void{
    console.log('Emp is ',emp);
}
show({id:1001, name:'Ram'});

interface Calculate{
    (firstNumber:number, secondNumber:number):number;
}
let add:Calculate;
add = (x:number,y:number)=>1000;
let result:number = add(10,20);
