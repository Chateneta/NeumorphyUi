import {Component, Input} from '@angular/core';

/**
 * Composant permettant de créer des boutons personnalisés
 *
 * ## Usage
 *
 * ```ts
 * <nui-button [label]="'label'" [size]="'sm'" [rounded]="false" [active]="false"></nui-button>
 * ```
 */
@Component({
  selector: 'nui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() label = '';
  @Input() size = 'sm';
  @Input() rounded = false;
  @Input() active = false;

  constructor() {
  }

  isRounded() {
    return this.rounded ? 'btn-rounded-nui' : 'btn-rect-nui';
  }

  isActive() {
    return this.active ? 'btn-active-nui' : '';
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

  getBtnClass() {
    return `${this.isRounded()} ${this.getSizeComponent()} ${this.isActive()}`
  }
}
