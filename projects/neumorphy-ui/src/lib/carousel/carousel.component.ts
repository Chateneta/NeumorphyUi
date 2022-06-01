import { Component, Input, OnInit } from '@angular/core';
import { ImageInterface } from './image-interface';

@Component({
  selector: 'nui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images ?: ImageInterface[];
  constructor() { }
  ngOnInit(): void {
  }
}
