import { NgModule } from '@angular/core';
import { NeumorphyUIComponent } from './neumorphy-ui.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

const COMPONENTS = [
  CardComponent,
  ButtonComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    NeumorphyUIComponent,
  ],
  imports: [
  ],
  exports: [
    ...COMPONENTS,
    NeumorphyUIComponent
  ]
})
export class NeumorphyUIModule { }
