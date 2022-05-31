import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nui-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() bold = false;
  @Input() italic = false;
  @Input() size = 'sm';

  constructor() { }

  isBold() {
    return this.bold ? 'text-bold-nui' : '';
  }

  isItalic() {
    return this.italic ? 'text-italic-nui' : '';
  }

  getClasses() {
    return `${this.isBold()} ${this.isItalic()} ${this.getSizeComponent()}`

  }

  getSizeComponent() {
    switch (this.size) {
      case 'sm':
        return 'text-sm-nui '

      case 'md':
        return 'text-md-nui '

      case 'lg':
        return 'text-lg-nui '

      default:
        throw SyntaxError;
    }
  }

  ngOnInit(): void {
  }

}
