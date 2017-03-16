import { Component, Input } from '@angular/core';

@Component({
  selector: 'calc-text',
  templateUrl: 'text.component.html',
  styleUrls: ['text.component.scss']
})
export class TextComponent {
  @Input() public calcText: string;
}