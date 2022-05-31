import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nui-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }


  @Input() bold = false;
  @Input() italic = false;

  isBold() {
    return this.bold ? 'title-bold-nui' : '';
  }

  isItalic() {
    return this.italic ? 'title-italic-nui' : '';
  }

  getClasses() {
    return `${this.isBold()} ${this.isItalic()}`

  }

  ngOnInit(): void {
  }

}
