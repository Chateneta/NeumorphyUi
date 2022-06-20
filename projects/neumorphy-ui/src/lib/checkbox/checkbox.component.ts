import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() id: string = '';
  @Input() label: string = 'default label';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
