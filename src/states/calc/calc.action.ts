import { Action } from '@ngrx/store';
import { TMode } from '../../declarations/common';

export const calcActionTypes = {
  SET_COUNT: 'SET_COUNT',
  SET_TEXT: 'SET_TEXT',
  CHANGE_MODE: 'CHANGE_MODE'
};

export class CalcSetCountAction implements Action {
  public type: string = calcActionTypes.SET_COUNT;
  constructor (public payload: number) {}
}

export class CalcSetTextAction implements Action {
  public type: string = calcActionTypes.SET_TEXT;
  constructor (public payload: string) {}
}

export class CalcChangeModeAction implements Action {
  public type: string = calcActionTypes.CHANGE_MODE;
  constructor (public payload: TMode) {}
}

export type TCalcActions =
  CalcSetCountAction |
  CalcSetTextAction |
  CalcChangeModeAction
;
