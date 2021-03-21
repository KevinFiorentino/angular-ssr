import { Action } from '@ngrx/store';

export enum StoreStateTypes {
  CHANGE_DARK_MODE = '[DarkMode] Change',
}

export class ChangeDarkModeAction implements Action {
  type = StoreStateTypes.CHANGE_DARK_MODE;
  constructor() { }
}
