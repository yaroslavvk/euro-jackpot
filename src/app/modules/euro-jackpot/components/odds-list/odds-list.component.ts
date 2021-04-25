import { Component, Input } from '@angular/core';
import { Odd } from '../../models/jackpots';

@Component({
  selector: 'app-odds-list',
  templateUrl: './odds-list.component.html',
  styleUrls: ['./odds-list.component.scss']
})
export class OddsListComponent {
  @Input() currentJackpotOdds: Odd[] = [];
  public displayedColumns: string[] = ['tier', 'winners', 'prize', 'specialPrize'];
}
