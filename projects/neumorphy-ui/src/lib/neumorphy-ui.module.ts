import { NgModule } from '@angular/core';
import { NeumorphyUIComponent } from './neumorphy-ui.component';

const COMPONENTS = [];

@NgModule({
  declarations: [
    ...COMPONENTS,
    NeumorphyUIComponent
  ],
  imports: [
  ],
  exports: [
    ...COMPONENTS,
    NeumorphyUIComponent
  ]
})
export class NeumorphyUIModule { }
