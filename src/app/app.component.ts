import { Component,OnInit,ElementRef} from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';
  expression:any=[];
  observer:any;
  valueList:string[]=["hello","hi","anything","can","be","here"];
  i:number=0;
  observable=Observable.create((observer:any)=>{
    observer.next("hello world");
    
    setInterval(()=>{
      if(this.i < this.valueList.length){
        observer.next(this.valueList[this.i]);
        this.i++;
      }
      observer.next("fishing"); 
    },2000);
    //observer.complete();
    observer.next("I am never published");
   
  });

  constructor(private elementRef:ElementRef){
    this.observer=this.observable.subscribe((x:any) =>{
      this.expression.push(x);
      console.log(this.expression);
  });

}

 ngOnInit(){
  setTimeout(() => {
    console.log("observer",this.observer);
    console.log("obse",this.i);
    console.log("length",this.valueList.length);
    if(this.i == this.valueList.length-1){
      console.log("observerable unsubscribed");
      this.observer.unsubscribe();
    }
    //console.log("observer unsubscribed",this.observer);
    //console.log("observerable unsubscribed",this.observable);
  },10000);    
 }

}
