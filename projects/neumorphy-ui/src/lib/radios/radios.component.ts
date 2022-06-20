import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nui-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss']
})
export class RadiosComponent implements OnInit {
  @Input() id: string = '';
  @Input() label: string = 'default label';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
