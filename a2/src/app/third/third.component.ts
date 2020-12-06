import { Component } from '@angular/core';

@Component({
    selector:'brainmentors-third',
    templateUrl:'./third.component.html',
    styleUrls:['./third.component.css']
})
export class ThirdComponent{
    count:number;
    name:string;
    myClass:string;
    colorCond:object;
    constructor(){
        this.count = 0;
        this.colorCond = {'myclass':this.count>=5,'two':this.count<5};

        this.myClass = 'myclass two';
        this.name = 'My Third Component Message';
    }
    plus(){
        this.count++;
        this.colorCond = {'myclass':this.count>=5,'two':this.count<5};
    }

}