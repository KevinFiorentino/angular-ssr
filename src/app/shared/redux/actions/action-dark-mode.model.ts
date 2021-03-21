import { Action } from '@ngrx/store';

export enum StoreStateTypes {
  CHANGE_DARK_MODE = '[Buscador] Nueva búsqueda',
}

export class ChangeDarkModeAction implements Action {
  type = StoreStateTypes.CHANGE_DARK_MODE;
  constructor() { }
}
