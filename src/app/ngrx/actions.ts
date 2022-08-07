import { createAction, props } from '@ngrx/store';

export const installTestTechnique = createAction(
  '[test] Install Test Technique',
  props<{ value: number }>()
);
export const developPhase = createAction(
  '[test] Develop Phase',
  props<{ value: number }>()
);
export const miseEnZero = createAction('[test] Mise En Zero');
