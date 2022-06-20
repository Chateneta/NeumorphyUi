import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {MainComponent} from "./main.component";

export default {
  title: 'Components/Main',
  component: MainComponent,
  decorators: [
    moduleMetadata({
      declarations: [MainComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<MainComponent> = (args: MainComponent) => ({
  component: MainComponent,
  props: args,
});

export const Base = Template.bind({});
Base.args = {}
