import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';
import { NavigationComponent } from './navigation.component';
import * as fromEuroJackpot from '../../store/euro-jackpot.reducer';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonToggleModule,
        MatIconModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromEuroJackpot.euroJackpotFeatureKey, fromEuroJackpot.reducer),
      ],
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
