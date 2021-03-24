import { createAction, props } from '@ngrx/store';

/* export enum StoreStateTypes {
  CHANGE_DARK_MODE = '[DarkMode] Change',
}

export class ChangeDarkModeAction implements Action {
  readonly type = StoreStateTypes.CHANGE_DARK_MODE;
  constructor() { }
} */

export const changeDarkModeAction = createAction('[DarkMode] Change');
