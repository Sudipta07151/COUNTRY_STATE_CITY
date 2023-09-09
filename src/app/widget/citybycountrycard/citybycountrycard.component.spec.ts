import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitybycountrycardComponent } from './citybycountrycard.component';

describe('CitybycountrycardComponent', () => {
  let component: CitybycountrycardComponent;
  let fixture: ComponentFixture<CitybycountrycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitybycountrycardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitybycountrycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
