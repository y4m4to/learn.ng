import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IStates, getCalcText, getCalcIsFirstPush, getCalcCount, getCalcMode } from '../../states/root.reducer';
import { TMode } from '../../declarations/common';

@Component({
  selector: 'calc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count$: Observable<number>;
  public ourMode$: Observable<TMode>;
  public calcText$: Observable<string>;
  public isFirstPush$: Observable<boolean>;

  constructor (
    private store: Store<IStates>
  ) {
    this.count$ = this.store.select(getCalcCount);
    this.calcText$ = this.store.select(getCalcText);
    this.isFirstPush$ = this.store.select(getCalcIsFirstPush);
    this.ourMode$ = this.store.select(getCalcMode);
  }
}