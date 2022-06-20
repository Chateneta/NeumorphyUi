import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
// @ts-ignore
import {NgxSplideModule} from 'ngx-splide';
import {NeumorphyUIComponent} from './neumorphy-ui.component';
import {CardComponent} from './card/card.component';
import {ButtonComponent} from './button/button.component';
import {MainComponent} from './main/main.component';
import {RowComponent} from './row/row.component';
import {MenuComponent} from './menu/menu.component';
import {SliderComponent} from './slider/slider.component';
import {InputComponent} from './input/input.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {ErrorComponent} from './error/error.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ListComponent} from './list/list.component';
import {ListItemComponent} from './list-item/list-item.component';
import {TextComponent} from './text/text.component';
import {TitleComponent} from './title/title.component';
import {RadiosComponent} from './radios/radios.component';
import {IconButtonComponent} from './icon-button/icon-button.component';
import {ReactiveFormsModule} from "@angular/forms";

const COMPONENTS = [
  CardComponent,
  ButtonComponent,
  MainComponent,
  RowComponent,
  MenuComponent,
  SliderComponent,
  InputComponent,
  CheckboxComponent,
  ErrorComponent,
  RadiosComponent,
  CarouselComponent,
  ListComponent,
  ListItemComponent,
  TextComponent,
  TitleComponent,
  IconButtonComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    NeumorphyUIComponent,
  ],
    imports: [
        CommonModule,
        NgxSplideModule,
        ReactiveFormsModule
    ],
  exports: [
    ...COMPONENTS,
    NeumorphyUIComponent,
    NgxSplideModule
  ]
})
export class NeumorphyUIModule {
}
