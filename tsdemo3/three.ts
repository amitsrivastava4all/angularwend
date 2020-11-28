
interface DB{
     add():boolean ;
    delete(id:number):boolean;

}
interface Trans{
    commit():boolean;

}
interface AllOpr extends DB, Trans{

}
abstract class CommonOpr{
    connect():void{

    }
    abstract close():void;
}

//class Oracle extends CommonOpr implements DB, Trans{
    class Oracle extends CommonOpr implements AllOpr{
    close(): void {
        console.log(' DB Connection Close...');
        //throw new Error("Method not implemented.");
    }
    commit(): boolean {
        throw new Error("Method not implemented.");
    }
    add(): boolean {
        console.log('Oracle Add');
        return true;
        //throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        console.log('Oracle Delete');
        return true;
        //throw new Error("Method not implemented.");
    }

}

//var f = 100;
//f = "Hello";