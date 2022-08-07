import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { developPhase, installTestTechnique, miseEnZero } from './actions';
import { cloneDeep } from 'lodash';

export const key = 'test app';

export class TestState {
  installProgressValue: number = 0;
  developPhaseProgressValue: number = 0;
}
export const initialState = new TestState();

export const testReducer = createReducer(
  initialState,
  on(installTestTechnique, (state, { value }) => {
    let { installProgressValue } = state;
    installProgressValue += 5;
    return {
      ...state,
      installProgressValue: cloneDeep(installProgressValue),
    };
  }),
  on(developPhase, (state, { value }) => {
    let { developPhaseProgressValue } = state;
    developPhaseProgressValue += 10;
    return {
      ...state,
      developPhaseProgressValue: cloneDeep(developPhaseProgressValue),
    };
  }),
  on(miseEnZero, (state) => {
    let { installProgressValue } = state;
    let { developPhaseProgressValue } = state;
    installProgressValue = 0;
    developPhaseProgressValue = 0;
    return {
      ...state,
      installProgressValue: cloneDeep(installProgressValue),
      developPhaseProgressValue: cloneDeep(developPhaseProgressValue),
    };
  })
);
export function reducer(state: TestState, action: any) {
  return testReducer(state, action);
}
export const getTestState = createFeatureSelector<TestState>(key);
export const getInstallProgressValue = createSelector(
  getTestState,
  (state: TestState) => (state && state.installProgressValue) || undefined
);
export const getDevelopPhaseProgressValue = createSelector(
  getTestState,
  (state: TestState) => (state && state.developPhaseProgressValue) || undefined
);
