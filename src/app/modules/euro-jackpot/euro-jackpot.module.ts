import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EuroJackpotEffects } from './store/euro-jackpot.effects';
import * as fromEuroJackpot from './store/euro-jackpot.reducer';

import { EuroJackpotContainerComponent } from './components/euro-jackpot-container/euro-jackpot-container.component';
import { EuroJackpotRoutingModule } from './euro-jackpot-routing.module';



@NgModule({
  declarations: [EuroJackpotContainerComponent],
  imports: [
    CommonModule,
    EuroJackpotRoutingModule,
    StoreModule.forFeature(fromEuroJackpot.euroJackpotFeatureKey, fromEuroJackpot.reducer),
    EffectsModule.forFeature([EuroJackpotEffects])
  ]
})
export class EuroJackpotModule { }
