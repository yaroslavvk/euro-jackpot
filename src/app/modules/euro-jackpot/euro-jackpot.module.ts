import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EuroJackpotEffects } from './store/euro-jackpot.effects';
import * as fromEuroJackpot from './store/euro-jackpot.reducer';

import { EuroJackpotRoutingModule } from './euro-jackpot-routing.module';

import { EuroJackpotContainerComponent } from './containers/euro-jackpot-container/euro-jackpot-container.component';
import { OddsListComponent } from './components/odds-list/odds-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DateComponent } from './components/date/date.component';
import { WinNumbersComponent } from './components/win-numbers/win-numbers.component';


@NgModule({
  declarations: [EuroJackpotContainerComponent, OddsListComponent, NavigationComponent, DateComponent, WinNumbersComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonToggleModule,
    MatIconModule,
    EuroJackpotRoutingModule,
    StoreModule.forFeature(fromEuroJackpot.euroJackpotFeatureKey, fromEuroJackpot.reducer),
    EffectsModule.forFeature([EuroJackpotEffects]),
  ]
})
export class EuroJackpotModule { }
