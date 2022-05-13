import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  value:number = 5;
  sizeElement:string = "50% 100%";
  ngOnInit(): void {
  }

  rangeChangeHandle(event:any){
    this.sizeElement = event.srcElement.value*10 +'% 100%'
  }

  getValue(){
    return this.value;
  }
  setValue(newV:number){
    this.value = newV;
  }
}
