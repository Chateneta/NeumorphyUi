import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {ErrorComponent} from "./error.component";
import {ButtonComponent} from "../button/button.component";

export default {
  title: 'Components/Error',
  component: ErrorComponent,
  subcomponents: {ButtonComponent},
  decorators: [
    moduleMetadata({
      declarations: [ErrorComponent,ButtonComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<ErrorComponent> = (args: ErrorComponent) => ({
  component: ErrorComponent,
  props: args,
});

const button1 = {
  label: 'OK',
  active: true,
  size: 'sm',
  action: function () {
    console.log('OK');
  }
};
const button2 = {
  label: 'Annuler',
  active: true,
  size: 'sm',
  action: function () {
    console.log('Annulé');
  }
}

export const Error = Template.bind({});
Error.args = {
  txt: 'Erreur 404 : Veuillez réessayer plus tard',
  type: 'error',
}
export const Warning = Template.bind({});
Warning.args = {
  txt: 'Warning: Faites attention',
  type: 'warning',
}
export const Info = Template.bind({});
Info.args = {
  txt: 'Vous avez activé une option',
  type: 'info',
}
export const Success = Template.bind({});
Success.args = {
  txt: 'Bravo !',
  type: 'success',
}
export const InfoPrompt = Template.bind({});
InfoPrompt.args = {
  txt: 'Voulez-vous continuer?',
  type: 'info',
  display: 'block',
  button1: button1,
  button2: button2
}
export const ModalBottom = Template.bind({});
ModalBottom.args = {
  txt: 'Information',
  type: 'info',
  display: 'modal-bottom',
}
