import {Story} from '@storybook/angular/types-6-0';
import {CheckboxComponent} from "./checkbox.component";
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Radios = Template.bind({});
Radios.args = {
  id: 'first-radios',
  label: 'radios Button',
  disabled: false,
  checked: false,
};
