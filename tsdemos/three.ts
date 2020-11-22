var arr:number[] = [10,20,30];
var tup:[number, string]= [1001, "Ram"];
const a:string = "Hello";
// Enum
enum Days  {
    SUNDAY=1, MONDAY=2, TUESDAY=3
};
var day:Days = Days.MONDAY;
console.log('Day is ',day);
switch(day as Days){
    case Days.SUNDAY:
        console.log('Funday');
        break;
    case Days.MONDAY:
        console.log('Working day');
        break;
     case Days.TUESDAY:
         console.log('Meeting Day');
        break;
     default:
         console.log('Invalid Day');
}