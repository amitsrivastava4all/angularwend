export class Customer{
    // name:string;
    // phone:string;
    // email:string;
    doj:Date;
    constructor(public name:string, public phone:string,
        public email:string ){
            this.doj = new Date();
        }
}