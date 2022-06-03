import {Story} from '@storybook/angular/types-6-0';
import {RadiosComponent} from './radios.component';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";


export default {
  title: 'Components/Radios',
  component: RadiosComponent,
  decorators: [
    moduleMetadata({
      declarations: [RadiosComponent],
      imports: [CommonModule],
    }),
  ],
};

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<RadiosComponent> = (args: RadiosComponent) => ({
  component: RadiosComponent,
  props: args,
});

export const Base = Template.bind({});
Base.args = {
  id: 'first-radios',
  label: 'radios Button',
  disabled: false,
  checked: false,
};
