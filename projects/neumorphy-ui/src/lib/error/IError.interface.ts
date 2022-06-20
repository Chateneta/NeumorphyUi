import {IButton} from "../button/IButton.interface";

export interface IError {
  display?: string;
  txt: string;
  type?: string;
  button1?: IButton;
  button2?: IButton;
}
