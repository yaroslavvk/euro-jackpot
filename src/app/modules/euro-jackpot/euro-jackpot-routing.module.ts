import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EuroJackpotContainerComponent } from './components/euro-jackpot-container/euro-jackpot-container.component';
import {EuroJackpotResolverService} from './resolvers/euro-jackpot-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: EuroJackpotContainerComponent,
    resolve: {
      euroJackpot: EuroJackpotResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuroJackpotRoutingModule {
}
