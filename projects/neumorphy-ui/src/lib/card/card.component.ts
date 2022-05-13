import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
  @Input() button1 : any;
  @Input() button2 : any;
  @Input() color = "orangeyellow";

  getColor(){
    switch (this.color){
      case 'yellow':
        return 'yellow'
      default:
        throw SyntaxError;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
