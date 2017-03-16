import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IClickable } from '../abstract.button/abstract.button.component';
import { CalcChangeModeAction, CalcSetCountAction } from '../../states/calc/calc.action';
import { IStates } from '../../states/root.reducer';
import { TMode } from '../../declarations/common';
import { MODE } from '../../consts/common.const';

@Component({
  selector: 'calc-eval-button',
  templateUrl: '../abstract.button/abstract.button.component.html',
  styleUrls: ['../abstract.button/abstract.button.component.scss']
})
export class EvalButtonComponent implements IClickable {
  @Input() public myMode: TMode;
  @Input() public count: number;
  @Input() public calcText: string;
  @Input() private ourMode: TMode;

  constructor (
    private store: Store<IStates>
  ) {}

  get label () : string {
    switch (this.myMode) {
      case MODE.PLUS: {
        return '+';
      }

      case MODE.MINUS: {
        return '-';
      }

      case MODE.TIMES: {
        return '*';
      }

      case MODE.DIVIDE: {
        return '/';
      }

      case MODE.FINISH: {
        return '=';
      }

      default: {
        return '';
      }
    }
  }

  public onClick () : void {
    this.computeCount();
    this.store.dispatch(new CalcChangeModeAction(this.myMode));
  }

  private computeCount () : void {
    const countByText: number = parseInt(this.calcText, 10);
    let computedCount: number;

    switch (this.ourMode) {
      case MODE.MINUS: {
        computedCount = this.count - countByText;
        break;
      }

      case MODE.TIMES: {
        computedCount = this.count * countByText;
        break;
      }

      case MODE.DIVIDE: {
        computedCount = this.count / countByText;
        break;
      }

      case MODE.PLUS:
      default: {
        computedCount = this.count + countByText;
        break;
      }
    }

    this.store.dispatch(new CalcSetCountAction(computedCount));
  }
}