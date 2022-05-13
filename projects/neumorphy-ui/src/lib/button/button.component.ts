import {Component, Input} from '@angular/core';

@Component({
  selector: 'nui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() label = '';
  @Input() size = 'sm';
  @Input() rounded = false;
  @Input() active = false;

  constructor() {
  }

  isRounded() {
    if (this.rounded) {
      return 'btn-rounded-nui '
    }
    return 'btn-rect-nui '
  }

  isActive() {
    if (this.active) {
      return 'btn-active-nui '
    }
    return 'btn-default-nui '
  }

  getSizeComponent() {
    switch (this.size) {
      case 'sm':
        return 'btn-sm-nui '

      case 'md':
        return 'btn-md-nui '

      case 'lg':
        return 'btn-lg-nui '

      default:
        throw SyntaxError;
    }
  }


}
