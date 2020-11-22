"use strict";
class Account {
    constructor(id, name) {
        this.aid = id;
        this.aname = name;
    }
    print() {
        console.log('Id is ', this.aid, " Name ", this.aname);
    }
}
class SavingAccount extends Account {
    constructor(balance, aid, aname) {
        super(aid, aname);
        this._balance = balance;
    }
    print() {
        super.print();
        console.log('Balance is ', this._balance);
    }
}
let account = new SavingAccount(9000.00, 1001, "Ram");
account.print();
//console.log('SavingAccount is ',account);
//# sourceMappingURL=isa.js.map