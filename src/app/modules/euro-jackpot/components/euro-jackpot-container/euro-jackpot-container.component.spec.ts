import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { StoreModule } from '@ngrx/store';
import { EuroJackpotContainerComponent } from './euro-jackpot-container.component';
import * as fromEuroJackpot from '../../store/euro-jackpot.reducer';

import { OddsListComponent } from '../odds-list/odds-list.component';

describe('EuroJackpotContainerComponent', () => {
  let component: EuroJackpotContainerComponent;
  let fixture: ComponentFixture<EuroJackpotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromEuroJackpot.euroJackpotFeatureKey, fromEuroJackpot.reducer),
      ],
      declarations: [ EuroJackpotContainerComponent, OddsListComponent ]
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
