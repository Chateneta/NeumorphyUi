import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() rangeId?:string;
  @Input() label?:string;
  @Input() type?:string;

  constructor() { }

  value:number = 5;
  sizeElement:string = "50% 100%";

  ngOnInit(): void {
  }

  rangeChangeHandle(event:any){
    this.setValue(event.srcElement.value);
    this.sizeElement = event.srcElement.value*10 +'% 100%';
  }

  getValue(){
    return this.value;
  }
  setValue(newV:number){
    this.value = newV;
  }

  getType(){
    return this.type;
  }
}
