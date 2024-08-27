import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const undo = createAction('[Counter] Undo');
export const incrementBy = createAction(
  '[Counter Component] Increment By',
  props<{ value: number }>()
);
export const setCount = createAction(
  '[Counter Component] Set Count',
  props<{ value: number }>()
);
