import { calcActionTypes, TCalcActions } from './calc.action';
import { ICalc } from '../../declarations/common';

const initialState: ICalc = {
  count: 0,
  text: '0',
  mode: 'PLS',
  isFirstPush: true
};

export const calcReducer = (state = initialState, action: TCalcActions): ICalc => {
  switch (action.type) {
    case calcActionTypes.SET_COUNT: {
      const count = action.payload;

      return Object.assign({}, state, {
        count,
        text: String(count)
      });
    }

    case calcActionTypes.SET_TEXT: {
      const text = action.payload;

      return Object.assign({}, state, {
        text,
        isFirstPush: false
      });
    }

    case calcActionTypes.CHANGE_MODE: {
      const mode = action.payload;

      return Object.assign({}, state, {
        mode,
        isFirstPush: true
      });
    }

    default: {
      return state;
    }
  }
};
