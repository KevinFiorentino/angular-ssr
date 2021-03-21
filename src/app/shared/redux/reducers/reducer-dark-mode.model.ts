import { StoreStateDarkMode, initStoreStateDarkMode } from '../store-state.model';
import { StoreStateTypes, ChangeDarkModeAction } from '../actions/action-dark-mode.model';

export type DarkModeActions = ChangeDarkModeAction;

export function reducerDarkMode(state: StoreStateDarkMode, action: DarkModeActions): StoreStateDarkMode {
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
}
