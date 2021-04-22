import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EuroJackpotEffects } from './store/euro-jackpot.effects';
import * as fromEuroJackpot from './store/euro-jackpot.reducer';

import { EuroJackpotRoutingModule } from './euro-jackpot-routing.module';

import { EuroJackpotContainerComponent } from './components/euro-jackpot-container/euro-jackpot-container.component';
import { OddsListComponent } from './components/odds-list/odds-list.component';


@NgModule({
  declarations: [EuroJackpotContainerComponent, OddsListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    EuroJackpotRoutingModule,
    StoreModule.forFeature(fromEuroJackpot.euroJackpotFeatureKey, fromEuroJackpot.reducer),
    EffectsModule.forFeature([EuroJackpotEffects]),
  ]
})
export class EuroJackpotModule { }
