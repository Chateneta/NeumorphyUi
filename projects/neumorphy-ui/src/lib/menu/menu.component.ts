import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() theme?: string;
  @Input() mode?: string;

  constructor() { }

  ngOnInit(): void {
  }

  getTheme(){
    return this.theme;
  }
  getMode(){
    return this.mode;
  }

}
