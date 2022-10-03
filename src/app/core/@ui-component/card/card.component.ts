import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardTitle:string|undefined;
  // @Output() clickEvent=new EventEmitter();
  @Input() cardcontent:string|undefined;
  @Input()type:any;
 @Output() clickEventIncard=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  doExcuet(event:any){
// alert(this.cardTitle);
 this.clickEventIncard.emit(event);

  }



  doExcuet2(){
    // alert(this.cardTitle);
    if(this.type=='user'){
      console.log('i am in user componet');

    }else{
       alert(this.cardTitle);
    }
    //  this.clickEventIncard.emit(event);

      }
}
