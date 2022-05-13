import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  @Input() theme?:string;

  ngOnInit(): void {
  }

  getTheme(){
    return this.theme;
  }

}
