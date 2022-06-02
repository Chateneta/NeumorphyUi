import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {MenuComponent} from "./menu.component";

export default {
  title: 'Components/Menu',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  component: MenuComponent,
  props: args,
});

export const Base = Template.bind({});
Base.args = {
  theme:'',
  mode:'',
}
