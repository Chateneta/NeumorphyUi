import { NgModule } from '@angular/core';
import { NeumorphyUIComponent } from './neumorphy-ui.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { MainComponent } from './main/main.component';
import { RowComponent } from './row/row.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FlexDivComponent } from './flex-div/flex-div.component';

const COMPONENTS = [
  CardComponent,
  ButtonComponent,
  MainComponent,
  RowComponent,
  MenuComponent,
  SliderComponent,
  InputComponent,
  CheckboxComponent,
  ListComponent,
  ListItemComponent,
  FlexDivComponent,
];

@NgModule({
  declarations: [...COMPONENTS, NeumorphyUIComponent],
  imports: [CommonModule],
  exports: [...COMPONENTS, NeumorphyUIComponent],
})
export class NeumorphyUIModule {}
