import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureDetailsComponent } from './culture-details.component';

describe('CultureDetailsComponent', () => {
  let component: CultureDetailsComponent;
  let fixture: ComponentFixture<CultureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultureDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
