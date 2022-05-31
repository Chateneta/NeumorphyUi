// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {CheckboxComponent} from "../../projects/neumorphy-ui/src/lib/checkbox/checkbox.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Form/Checkbox',
  component: CheckboxComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Radios = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Radios.args = {
  id: 'first-radios',
  label: 'radios Button',
  disabled: false,
  checked: false,
};
