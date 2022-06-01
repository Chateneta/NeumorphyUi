import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {ButtonComponent} from "./button.component";

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

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

function test() {
  alert('test');
}

export const Base = Template.bind({});
Base.args = {
  label: 'Bouton 2',
  active: true,
  size: 'sm',
}
