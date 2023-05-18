import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuinessComponent } from './buiness.component';

describe('BuinessComponent', () => {
  let component: BuinessComponent;
  let fixture: ComponentFixture<BuinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
