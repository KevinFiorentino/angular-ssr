import { ActionReducerMap } from '@ngrx/store';
import { StoreStateDarkMode, initStoreStateDarkMode } from './store-state.model';
import { reducerDarkMode } from './reducers/reducer-dark-mode.model';

export interface AppState {
  storeDarkMode: StoreStateDarkMode;
}

export const reducers: ActionReducerMap<AppState> = {
  storeDarkMode: reducerDarkMode,
};

/* export const reducersInitialState = {
  storeDarkMode: initStoreStateDarkMode(),
}; */
