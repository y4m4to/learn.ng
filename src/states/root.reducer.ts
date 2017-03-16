import { combineReducers, ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';
import { calcReducer } from './calc/calc.reducer';
import { ICalc } from '../declarations/common';

const reducers = {
  calc: calcReducer
};

export interface IStates {
  calc: ICalc;
}

export const rootReducer = (state: any, action: any) : ActionReducer<any> => {
  return combineReducers(reducers)(state, action);
};

export const getCalcState = (state: IStates) => state.calc;
export const getCalcCount = createSelector(getCalcState, (state: ICalc) => state.count);
export const getCalcText = createSelector(getCalcState, (state: ICalc) => state.text);
export const getCalcMode = createSelector(getCalcState, (state: ICalc) => state.mode);
export const getCalcIsFirstPush = createSelector(getCalcState, (state: ICalc) => state.isFirstPush);
