import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { StoreModule } from '@ngrx/store';
import * as fromEuroJackpot from '../../store/euro-jackpot.reducer';

import { EuroJackpotContainerComponent } from './euro-jackpot-container.component';
import { OddsListComponent } from '../odds-list/odds-list.component';
import { NavigationComponent } from '../navigation/navigation.component';

describe('EuroJackpotContainerComponent', () => {
  let component: EuroJackpotContainerComponent;
  let fixture: ComponentFixture<EuroJackpotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatButtonToggleModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromEuroJackpot.euroJackpotFeatureKey, fromEuroJackpot.reducer),
      ],
      declarations: [ EuroJackpotContainerComponent, OddsListComponent, NavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroJackpotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
