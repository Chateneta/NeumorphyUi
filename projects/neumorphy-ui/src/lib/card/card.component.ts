import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IButton} from "../button/IButton.interface";
import {IIconButton} from "../icon-button/IIconButton.interface";

@Component({
  selector: 'nui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
  @Input() button1!: IButton;//Button
  @Input() button2!: IButton; //Button
  @Input() buttonItem!: IIconButton; //Button
  @Input() color: 'orangeyellow' | 'raisin' | 'alabaster' | 'rajah' = 'alabaster';
  @Input() borderRadius = '12'; //Choisir le border radius
  @Input() elevation: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() display: 'buttons' | 'image' | 'item' = 'buttons';
  @Input() headerImage = '';
  @Input() imgSrc = '';
  @Input() justify: 'left' | 'right' | 'center' = 'center';
  @Input() align: 'flex-start' | 'flex-end' | 'center' = 'center';
  @Input() textAlign: 'center' | 'start' | 'end' = 'center';
  @Input() itemImage = '';
  @Input() width = '';
  @Input() sense = 'column';
  @Input() imgHeight = '';
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';
  @Input() items: string[] | undefined;
  @Input() ngContent!: string;

  @Output() action = new EventEmitter();

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

    const defaultBoxShadow = `10px 10px 20px ${col[0]}, -10px -10px 20px ${col[1]}`;
    switch (this.elevation) {
      case 'sm':
        return defaultBoxShadow
      case 'md':
        return `15px 15px 30px ${col[0]}, -15px -15px 30px ${col[1]}`
      case 'lg':
        return `24px 24px 48px ${col[0]}, -24px 24px 48px ${col[1]}`
      case 'xl':
        return `32px 32px 64px ${col[0]}, -32px -32px 64px ${col[1]}`
      default:
        return defaultBoxShadow
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
