import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {CardComponent} from '../card.component';
import Button from "../../../../../../stories/button.component";

export default {
  title: 'Components/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [CommonModule],
    }),
  ],
};
// This creates a Story for the component
const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
  /*  template: `<nui-card title="title" subtitle="subtitle" description="description" color="raisin" borderRadius="10"
              elevation="md"
              padding="md" sense="row"
              width="20em" align="center"
              [headerImage]="img" imgHeight="8em"></nui-card>`,*/
});

export const RowImage = Template.bind({});
RowImage.args = {
  title: 'Titre',
  subtitle: 'Sous-Titre',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
  color: 'raisin',
  borderRadius: '10',
  elevation: 'md',
  padding: 'md',
  sense: 'row',
  width: '20em',
  align: 'center',
  textAlign: 'center',
  headerImage: 'https://static1.purepeople.com/articles/8/97/25/8/@/809567--950x0-1.jpg',
  imgHeight: '8em',
};

export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!
