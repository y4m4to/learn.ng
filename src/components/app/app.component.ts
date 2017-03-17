import { Component } from '@angular/core';

@Component({
  selector: 'calc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public calc: any = {
    total: 0
  };
}