import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flex-div',
  templateUrl: './flex-div.component.html',
  styleUrls: ['./flex-div.component.scss'],
})
export class FlexDivComponent implements OnInit {
  @Input() justifyContent: string = 'start';
  @Input() direction: string = 'row';
  @Input() alignItems: string = 'start';
  @Input() wrap: string = 'nowrap';

  constructor() {}

  ngOnInit(): void {}
}
