import { createReducer, on} from '@ngrx/store';
import { StoreStateDarkMode, initStoreStateDarkMode } from '../store-state.model';
import * as DarkModeActions from '../actions/action-dark-mode.model';

/* export type DarkModeActions = ChangeDarkModeAction; */

/* export function reducerDarkMode(state: StoreStateDarkMode, action: DarkModeActions): StoreStateDarkMode {
  switch (action.type) {
    case StoreStateTypes.CHANGE_DARK_MODE: {
      return {
        ...state,
        active: !state.active
      };
    }
    default: {
      return state;
    }
  }
} */

export const reducerDarkMode = createReducer(
  initStoreStateDarkMode,
  on(DarkModeActions.changeDarkModeAction, state => {
    return {
      ...state,
      active: !state.active
    };
  })
);
