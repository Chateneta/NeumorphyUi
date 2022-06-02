import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {IButton} from "../button/IButton.interface";

@Component({
  selector: 'nui-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ErrorComponent implements OnInit {

  @Input() display: 'modal' | 'block' = 'modal';
  @Input() txt = '';
  @Input() type: 'success' | 'warning' | 'info' | 'error' = 'error';
  @Input() button1!: IButton;
  @Input() button2!: IButton;
  @Output() close = new EventEmitter();

  getColor() {
    switch (this.type) {
      case 'success':
        return '#0ca900'
      case 'warning':
        return '#d4a100'
      case 'info':
        return '#0071b9'
      case 'error':
        return '#cf2832'
      default:
        return '#cf2832'
    }
  }

  dismiss() {
    this.close.emit();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
