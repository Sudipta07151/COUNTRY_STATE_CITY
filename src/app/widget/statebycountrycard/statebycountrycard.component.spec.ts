import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebycountrycardComponent } from './statebycountrycard.component';

describe('StatebycountrycardComponent', () => {
  let component: StatebycountrycardComponent;
  let fixture: ComponentFixture<StatebycountrycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatebycountrycardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatebycountrycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
