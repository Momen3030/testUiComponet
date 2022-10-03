import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button-ui',
  templateUrl: './button-ui.component.html',
  styleUrls: ['./button-ui.component.scss']
})
export class ButtonUiComponent implements OnInit {
@Input() title:string|undefined;
@Output() clickEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  fireEventClick(event:any){
this.clickEvent.emit(event);
  }

}
