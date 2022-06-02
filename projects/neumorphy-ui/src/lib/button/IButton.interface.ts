export interface IButton {
  label: string;
  size?: string;
  rounded?: boolean;
  active?: boolean;

  action?(): any;
}
