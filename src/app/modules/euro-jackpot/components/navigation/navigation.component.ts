import { Component, EventEmitter, Input, Output } from '@angular/core';

import { initialState } from '../../store/euro-jackpot.reducer';

import { Jackpots } from '../../models/jackpots';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() jackpotResults: Jackpots = initialState.jackpotResults;
  @Output() navigateEmitter: EventEmitter<'last' | 'next'> = new EventEmitter<'last' | 'next'>();

  constructor(
  ) { }

  public setCurrentJackpotResult(key: 'last' | 'next'): void {
    this.navigateEmitter.emit(key);
  }

}
