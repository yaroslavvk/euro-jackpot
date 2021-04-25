import { Component, OnInit, Input } from '@angular/core';

import { JackpotDate } from '../../models/jackpots';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() date: JackpotDate = { full: '' };

  constructor() {
  }

  ngOnInit(): void {
  }

}
