import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nui-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() txt = '';
  @Input() type : 'success' | 'warning' | 'info' | 'error' = 'error';

  getColor(){
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

  dismiss(){
  }

  constructor() { }

  ngOnInit(): void {
  }

}
