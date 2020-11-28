class MathOpr{
       static readonly PI:number = 3.14;
       private constructor(){}
      static sin():void{
          console.log('I am Sin');
      }
      static cos():void{
          console.log('I am Cos');
      }
}
//let math:MathOpr = new MathOpr();
MathOpr.sin();
MathOpr.cos();
const w:number = 100;