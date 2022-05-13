import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  sizeElement:string = "50% 100%";
  ngOnInit(): void {
  }

  rangeChangeHandle(event:any){
    this.sizeElement = event.srcElement.value*10 +'% 100%'
  }


}
