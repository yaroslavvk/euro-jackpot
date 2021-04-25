import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';

import { StoreModule } from '@ngrx/store';
import * as fromEuroJackpot from '../../store/euro-jackpot.reducer';
import { initiateStateMock, JackpotsResultsMock, OddsMock, OddsTransformedMock } from '../../mocks/euro-jackpot.store.fixture';
import { selectFeatureCurrentJackpotResult, selectFeatureJackpotResults } from '../../store/euro-jackpot.selectors';

import { EuroJackpotContainerComponent } from './euro-jackpot-container.component';
import { OddsListComponent } from '../../components/odds-list/odds-list.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { WinNumbersComponent } from '../../components/win-numbers/win-numbers.component';
import { DateComponent } from '../../components/date/date.component';

describe('EuroJackpotContainerComponent', () => {
  let component: EuroJackpotContainerComponent;
  let fixture: ComponentFixture<EuroJackpotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatButtonToggleModule,
        MatIconModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromEuroJackpot.euroJackpotFeatureKey, fromEuroJackpot.reducer),
      ],
      declarations: [ EuroJackpotContainerComponent, OddsListComponent, NavigationComponent, WinNumbersComponent, DateComponent ],
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

  it('selector should set jackpotResults data', () => {
    component.jackpotResults$ = of(selectFeatureJackpotResults.projector(initiateStateMock));
    component.jackpotResults$.subscribe({
      next: (jackpotResults) => {
        component.jackpotResults = jackpotResults;
      }
    });
    fixture.detectChanges();
    expect(component.jackpotResults).toEqual(JackpotsResultsMock);
  });

  it('selector should set currentJackpotResult data', () => {
    component.currentJackpotResult$ = of(selectFeatureCurrentJackpotResult.projector(initiateStateMock));
    component.currentJackpotResult$.subscribe({
      next: (currentJackpotResult) => {
        component.currentJackpotResult = currentJackpotResult;
      }
    });
    fixture.detectChanges();
    expect(component.currentJackpotResult).toEqual(JackpotsResultsMock.last);
  });

  it('should return transformed odd', () => {
    const result = component.oddsMapHandler(OddsMock[1], 1);
    expect(result).toEqual(OddsTransformedMock[1]);
  });

  it('selector should set currentJackpotOdds data', () => {
    component.currentJackpotResult$ = of(selectFeatureCurrentJackpotResult.projector(initiateStateMock));
    component.currentJackpotResult$.subscribe({
      next: (currentJackpotResult) => {
        component.currentJackpotOdds = component.transformOddsToRender(currentJackpotResult);
      }
    });
    fixture.detectChanges();
    expect(component.currentJackpotOdds).toEqual(OddsTransformedMock);
  });
});
