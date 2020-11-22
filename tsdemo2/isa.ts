class Account{
    protected aid:number;
    protected aname:string;
    constructor(id:number,name:string){
        this.aid  = id;
        this.aname = name;
    }
    print():void{
        console.log('Id is ',this.aid, " Name ",this.aname);
    }
}
class SavingAccount extends Account{
    private _balance:number;
    constructor(balance:number, aid:number, aname:string){
        super(aid, aname);
        this._balance = balance;
    }
    print():void{
        super.print();
        console.log('Balance is ',this._balance);
    }

}
let account:SavingAccount= new SavingAccount(9000.00,1001,"Ram");
account.print();
//console.log('SavingAccount is ',account);