import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from "@storybook/angular/types-6-0";
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

// This creates a Story for the component
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  /*  template: `<nui-button [label]="'label'" [rounded]="false" [active]="false"></nui-button>`,*/
});

export const Base = Template.bind({});
Base.args = {
  label: 'Click me',
  rounded: false,
  active: false,
};

// export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!
