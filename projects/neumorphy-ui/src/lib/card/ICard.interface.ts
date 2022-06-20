import {IButton} from "../button/IButton.interface";

export interface Icard {
  title?: string;
  subtitle?: string;
  description?: string;
  button1?: IButton;
  button2?: IButton;
  buttonItem?: IButton;
  color?: string;
  borderRadius?: string;
  elevation?: string;
  display?: string;
  headerImage?: string;
  imgSrc?: string;
  justify?: string;
  align?: string;
  textAlign?: string;
  itemImage?: string;
  width?: string;
  sense?: string;
  imgHeight?: string;
  padding?: string;
  items?: string[];
  ngContent?: string;
}
