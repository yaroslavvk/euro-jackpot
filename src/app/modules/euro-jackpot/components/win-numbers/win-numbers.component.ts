import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-win-numbers',
  templateUrl: './win-numbers.component.html',
  styleUrls: ['./win-numbers.component.scss']
})
export class WinNumbersComponent {
  @Input() numbers: number[] = [];
  @Input() euroNumbers: number[] = [];
}
