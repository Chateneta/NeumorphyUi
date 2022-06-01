import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {CardComponent} from "./card.component";
import {ButtonComponent} from "../button/button.component";

export default {
  title: 'Components/Card',
  component: CardComponent,
  subcomponents: {ButtonComponent},
  decorators: [
    moduleMetadata({
      declarations: [CardComponent,ButtonComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
  /*  template: `<nui-card title="title" subtitle="subtitle" description="description" color="raisin" borderRadius="10"
              elevation="md"
              padding="md" sense="row"
              width="20em" align="center"
              [headerImage]="img" imgHeight="8em"></nui-card>`,*/
});

const items = ['Item 1', 'Item 2'];
const img = "https://static.fnac-static.com/multimedia/Images/FR/NR/94/43/d7/14107540/1507-1/tsp20220322173128/Nostalgia.jpg";
const button1 = {
  label: 'Bouton 1',
  active: true,
  size: 'sm',
  action: function () {
    alert('test');
  }
};
const button2 = {
  label: 'Bouton 2',
  active: false,
  size: 'sm',
  action: function () {
    alert('test');
  }
}

export const Base = Template.bind({});
Base.args = {
  title: 'Titre',
  subtitle: 'Sous-Titre',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
  color: 'raisin',
  borderRadius: '10',
  elevation: 'lg',
  padding: 'lg',
  sense: 'row',
  width: '15em',
  align: 'center',
  textAlign: 'start',
  items: items,
  button1: button1,
  button2: button2
}

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
  headerImage: img,
  imgHeight: '8em',
  button1: button1,
  button2: button2
};

export const Item = Template.bind({});
Item.args = {
  display: 'item',
  title: 'Titre',
  subtitle: 'Sous-Titre',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
  color: 'raisin',
  borderRadius: '10',
  elevation: 'md',
  padding: 'sm',
  sense: 'row',
  width: '25em',
  align: 'center',
  itemImage: img,
  buttonItem: {
    label: '+',
    active: true,
    size: 'sm',
    action: function () {
      alert('added');
    }
  }
};

export const ColImage = Template.bind({});
ColImage.args = {
  display: 'buttons',
  title: 'Titre',
  subtitle: 'Sous-Titre',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
  color: 'raisin',
  borderRadius: '10',
  elevation: 'sm',
  padding: 'md',
  width: '15em',
  align: 'center',
  headerImage: img,
  imgHeight: '13em'
};

export const Image = Template.bind({});
Image.args = {
  display: 'image',
  imgSrc: img,
  width: '18em',
};
