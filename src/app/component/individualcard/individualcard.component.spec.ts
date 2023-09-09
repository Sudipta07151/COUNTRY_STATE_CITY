import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualcardComponent } from './individualcard.component';

describe('IndividualcardComponent', () => {
  let component: IndividualcardComponent;
  let fixture: ComponentFixture<IndividualcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
