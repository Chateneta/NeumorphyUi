import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() size = 'sm';
  @Input() placeholder = 'Type anything ...';
  @Input() control = '';

  constructor() {
  }

  getSize() {
    return 'input-sm-nui'
  }

  getSizeComponent() {
    switch (this.size) {
      case 'sm':
        return 'input-sm-nui '

      case 'md':
        return 'input-md-nui '

      case 'lg':
        return 'input-lg-nui '

      default:
        throw SyntaxError;
    }
  }
}
