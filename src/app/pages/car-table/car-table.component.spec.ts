import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTableComponent } from './car-table.component';

describe('InicialComponent', () => {
  let component: CarTableComponent;
  let fixture: ComponentFixture<CarTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
