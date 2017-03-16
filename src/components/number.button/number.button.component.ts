import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IClickable } from '../abstract.button/abstract.button.component';
import { CalcSetTextAction } from '../../states/calc/calc.action';
import { IStates } from '../../states/root.reducer';

@Component({
  selector: 'calc-num-button',
  templateUrl: '../abstract.button/abstract.button.component.html',
  styleUrls: ['../abstract.button/abstract.button.component.scss']
})
export class NumberButtonComponent implements OnInit, IClickable {
  @Input() public value: number;
  @Input() private text: string;
  @Input() private isFirstPush: boolean;
  public label: string;

  constructor (
    private store: Store<IStates>
  ) {}

  public ngOnInit () : void {
    this.label = String(this.value);
  }

  public onClick () : void {
    this.updateText();
  }

  private updateText () : void {
    let afterText: string;

    if (this.isFirstPush) {
      afterText = this.label;
    } else {
      afterText = this.text + this.label;
    }

    this.store.dispatch(new CalcSetTextAction(afterText));
  }
}
