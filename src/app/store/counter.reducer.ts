import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  undo,
  incrementBy,
  setCount,
} from './counter.actions';

export interface CounterState {
  count: number;
  cookie: number[];
}

export const initialState: CounterState = {
  count: 0,
  cookie: [],
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    count: state.count + 1,
    cookie: [...state.cookie, state.count + 1],
  })),
  on(decrement, (state) => ({
    ...state,
    count: state.count > 0 ? state.count - 1 : 0,
    cookie: [...state.cookie, state.count > 0 ? state.count - 1 : 0],
  })),
  on(reset, (state) => ({
    ...state,
    count: 0,
    cookie: [...state.cookie, 0],
  })),
  on(incrementBy, (state, { value }) => ({
    ...state,
    count: state.count + value,
    cookie: [...state.cookie, state.count + value],
  })),
  on(setCount, (state, { value }) => ({
    ...state,
    count: value,
    cookie: [...state.cookie, value],
  })),
  on(undo, (state) => {
    const previousCount = state.cookie[state.cookie.length - 2] || 0;
    return {
      ...state,
      count: previousCount,
      cookie: state.cookie.slice(0, -1),
    };
  })
);
