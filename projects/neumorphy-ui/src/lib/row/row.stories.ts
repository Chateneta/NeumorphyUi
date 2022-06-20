import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {RowComponent} from "./row.component";

export default {
  title: 'Components/Row',
  component: RowComponent,
  decorators: [
    moduleMetadata({
      declarations: [RowComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<RowComponent> = (args: RowComponent) => ({
  component: RowComponent,
  props: args,
});

export const Base = Template.bind({});
Base.args = {}
