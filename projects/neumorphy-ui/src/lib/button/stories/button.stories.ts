import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {ButtonComponent} from '../button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
};
