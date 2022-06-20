import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'nui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() actual?:string = '0:00';
  @Input() end?:string;
  @Input() withTimeInfo:boolean = false;
  @Input() rangeId?:string;
  @Input() label?:string;
  @Input() type?:string;
  @Input() value:number = 0;
  @Output() changeValue: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  sizeElement:string = "0% 100%";

  ngOnInit(): void {
  }

  rangeChangeHandle(event:any){
   this.changeValue.next(event.srcElement.value)
   this.value = event.srcElement.value
  }

  ngOnChanges(change:any){
    this.sizeElement = this.value+'% 100%';
  }
  
  getType(){
    return this.type;
  }
}
