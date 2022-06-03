import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() mode?: string;
  @Input() verticalCenter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getMode(){
    return this.mode;
  }

  isVerticalCenter(){
    return this.verticalCenter ? "verticalCenter" : "";
  }

}
