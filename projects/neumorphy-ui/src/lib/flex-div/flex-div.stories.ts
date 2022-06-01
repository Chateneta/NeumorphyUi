import { Story } from '@storybook/angular/types-6-0';
import { FlexDivComponent } from './flex-div.component';

export default {
  title: 'Components/FlexDiv',
  component: FlexDivComponent,
};

const Template: Story<FlexDivComponent> = (args: FlexDivComponent) => ({
  props: args,
  template: `
  <flex-div [justifyContent]="justifyContent" [alignItems]="alignItems" [direction]="direction" [wrap]="wrap">
  <div [style.background]="'blue'">Item 1</div>
  <div [style.background]="'yellow'">Item 2</div>
  <div [style.background]="'red'">Item 3</div>
  <div [style.background]="'green'">Item 4</div>
  <div [style.background]="'brown'">Item 5</div>
  <div [style.background]="'pink'">Item 6</div>
  </flex-div>`,
});

export const Base = Template.bind({});
