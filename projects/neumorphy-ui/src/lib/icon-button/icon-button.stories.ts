import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from "@storybook/angular/types-6-0";
import {IconButtonComponent} from './icon-button.component';


export default {
  title: 'Components/IconButton',
  component: IconButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconButtonComponent],
      imports: [CommonModule],
    }),
  ],
};

// This creates a Story for the component
const Template: Story<IconButtonComponent> = (args: IconButtonComponent) => ({
  component: IconButtonComponent,
  props: args,
  /*  template: `<nui-button [label]="'label'" [size]="'size'" [rounded]="false" [active]="false"></nui-button>`,*/
});

export const Base = Template.bind({});
Base.args = {
  size: 'sm',
  pushPull: false,
  active: false,
};

// export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!
