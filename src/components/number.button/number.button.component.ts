import {Component, Input} from '@angular/core';

@Component({
  selector: 'calc-num-button',
  templateUrl: '../abstract.button/abstract.button.component.html',
  styleUrls: ['../abstract.button/abstract.button.component.scss']
})
export class NumberButtonComponent {
  @Input() public value: number;
  @Input() public calc: any;

  get text () : string {
    return String(this.value);
  }

  public ngOnInit () : void {
    console.log(this.text);
  }

  public onClick () : void {
    this.calc.total += this.value;
  }
}