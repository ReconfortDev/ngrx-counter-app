import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface HistoryState {
  cookie: number[];
}

export const initialHistoryState: HistoryState = {
  cookie: [],
};

export const cookieReducer = createReducer(
  initialHistoryState,
  on(increment, (state) => ({
    ...state,
    cookie: [...state.cookie, state.cookie[state.cookie.length - 1] + 1],
  })),
  on(decrement, (state) => ({
    ...state,
    cookie: [
      ...state.cookie,
      Math.max(state.cookie[state.cookie.length - 1] - 1, 0),
    ],
  })),
  on(reset, (state) => ({
    ...state,
    cookie: [...state.cookie, 0],
  }))
);
