import { Component, OnDestroy, OnInit } from '@angular/core';
import {ThirdHelper} from './third.helper';
import {Customer} from './third.model';
@Component({
    selector:'brainmentors-third',
    templateUrl:'./third.component.html',
    styleUrls:['./third.component.css']
})
export class ThirdComponent implements OnInit,OnDestroy{
    count:number;
    name:string;
    myClass:string;
    colorCond:object;
    str:string;
    str2:string;
    names:string[];
    myobj:{id:number, name:string,salary:number}=
    {id:1001,name:'Ram',salary:9999};
    customers:Customer[] = [];
    constructor(){
        this.names = ['Amit','Jatin','Apoorv','Pranshul'];
        this.count = 0;
        this.colorCond = {'myclass':this.count>=5,'two':this.count<5};

        this.myClass = 'myclass two';
        this.name = 'My Third Component Message';
        console.log('Cons call');
    }
    ngOnDestroy(): void {
        this.customers = null;
        console.log('Destroy');
        //throw new Error('Method not implemented.');
    }
    ngOnInit(): void {
        this.customers = ThirdHelper.loadCustomers();
        console.log('NgOnInit');
    }
    takeInput(evt:Event){
        console.log('Change Event Call ',evt.target.value);
        this.str = evt.target.value;
    }
    plus(){
        this.count++;
        this.colorCond = {'myclass':this.count>=5,'two':this.count<5};
    }

}