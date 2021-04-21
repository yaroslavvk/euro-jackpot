import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroJackpotContainerComponent } from './euro-jackpot-container.component';

describe('EuroJackpotContainerComponent', () => {
  let component: EuroJackpotContainerComponent;
  let fixture: ComponentFixture<EuroJackpotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroJackpotContainerComponent ]
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
