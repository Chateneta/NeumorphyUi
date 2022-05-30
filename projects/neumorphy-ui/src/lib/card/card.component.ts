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
  @Input() button1: any;//Button
  @Input() button2: any; //Button
  @Input() buttonItem: any; //Button
  @Input() color = 'alabaster'; //orangeyellow / raisin / alabaster / rajah
  @Input() borderRadius = '12'; //Choisir le border radius
  @Input() elevation = 'sm'; //sm / md / lg / xl
  @Input() display = 'buttons'; //buttons / image / item
  @Input() headerImage = '';
  @Input() imgSrc = '';
  @Input() justify = 'left'; //left / right / center
  @Input() align = 'flex-start'; //flex-start / flex-end / center
  @Input() itemImage = '';
  @Input() width = '';
  @Input() sense = 'column';
  @Input() imgHeight = '';
  @Input() padding = 'sm'; //sm / md / lg / xl
  @Input() items : any;

  getBackgroundColor() {
    switch (this.color) {
      case 'orangeyellow':
        return 'linear-gradient(145deg, #ddb863, #ffda76)'
      case 'raisin':
        return 'linear-gradient(145deg, #22201f, #292524)'
      case 'alabaster':
        return 'linear-gradient(145deg, #d4d4cd, #fdfbf4)'
      case 'rajah':
        return 'linear-gradient(145deg, #e19442, #ffaf4e)'
      default:
        return 'linear-gradient(145deg, #d4d4cd, #fdfbf4)'
    }
  }

  getColor() {
    switch (this.color) {
      case 'orangeyellow':
        return 'black'
      case 'raisin':
        return 'white'
      case 'alabaster':
        return 'black'
      case 'rajah':
        return 'black'
      default:
        return 'black'
    }
  }

  getElevation() {
    let col;
    switch (this.color) {
      case 'orangeyellow':
        col = ['#d6b160', '#ffe77c']
        break;
      case 'raisin':
        col = ['#211e1e', '#2b2826']
        break;
      case 'alabaster':
        col = ['#cdccc6', '#ffffff']
        break;
      case 'rajah':
        col = ['#da8f40', '#ffb952']
        break;
      default:
        col = ['#d1d1d1', '#ffffff']
        break;
    }
    switch (this.elevation) {
      case 'sm':
        return '10px 10px 20px ' + col[0] + ',-10px -10px 20px ' + col[1]
      case 'md':
        return '15px 15px 30px ' + col[0] + ',-15px -15px 30px ' + col[1]
      case 'lg':
        return '24px 24px 48px ' + col[0] + ',24px 24px 48px ' + col[1]
      case 'xl':
        return '32px 32px 64px ' + col[0] + ',-32px -32px 64px ' + col[1]
      default:
        return '10px 10px 20px ' + col[0] + ',-10px -10px 20px ' + col[1]
    }
  }

  getPadding() {
    switch (this.padding) {
      case 'none':
        return '0'
      case 'sm':
        return '0.5em 1em'
      case 'md':
        return '1em 2em'
      case 'lg':
        return '1.5em 3em'
      case 'xl':
        return '2em 4em'
      default:
        return '1em 2em'
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
