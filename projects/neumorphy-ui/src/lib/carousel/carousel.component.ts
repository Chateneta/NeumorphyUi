import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ImageInterface } from './image-interface';

@Component({
  selector: 'nui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent{

  @Input() images: ImageInterface[] = [];
  @Input() actualIndex: number = 0;
  @Output() changeIndex: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  onSplideMoved(args:any){
   this.actualIndex = args[0];
   this.changeIndex.next(this.actualIndex)
  }
  ngOnChanges(change:any){
    if(change.actualIndex){
      this.actualIndex = change.actualIndex.currentValue
    }
  }
}
