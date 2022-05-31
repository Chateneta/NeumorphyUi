import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {InputComponent} from '../input.component';

export default {
  title: 'Components/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [CommonModule],
    }),
  ],
};
// This creates a Story for the component
const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!
