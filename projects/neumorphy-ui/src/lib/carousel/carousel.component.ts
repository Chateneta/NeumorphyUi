import { Component, Input, OnInit, ViewChildren, ElementRef, QueryList, SimpleChange} from '@angular/core';
import { ImageInterface } from './image-interface';

@Component({
  selector: 'nui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: ImageInterface[] = [];
  @ViewChildren('img') myValue ?:QueryList<ElementRef>;

  constructor() { }
  ngOnInit(): void {
    // console.log(this.toto)
  }

  onSplideMoved(args:any){
    this.myValue?.toArray().forEach(element => {
      if(element.nativeElement.id == args[0]){
        element.nativeElement.style.transform = "scale(1.3)";
      }else{
        element.nativeElement.style.transform = "scale(1)";
      }
    });
  }

  ngOnChanges(args:any){
    console.log('CarouselChange', args.images.currentValue)
    this.images = args.images.currentValue
    console.log('CarouselChange', this.images.slice())
  }
}
