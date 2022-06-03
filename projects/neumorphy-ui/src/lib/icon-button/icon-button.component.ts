import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'nui-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() size:string = 'sm';
  @Input() pushPull:boolean = false;
  @Input() active:boolean = false;
  @Output() clic = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    
  }

  onClick() {
    if(this.pushPull){
      this.active = !this.active;
      this.isActive();
      this.clic.emit();
    }
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
    return `${this.getSizeComponent()} ${this.isActive()}`
  }
}
