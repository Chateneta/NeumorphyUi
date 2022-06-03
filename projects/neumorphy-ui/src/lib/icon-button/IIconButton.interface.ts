import {EventEmitter, Input, Output} from "@angular/core";

export interface IIconButton {
  pushPull?: boolean;
  size?: string;
  active?: boolean;

  action?(): any;
}
