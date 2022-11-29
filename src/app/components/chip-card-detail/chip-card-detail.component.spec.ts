import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipCardDetailComponent } from './chip-card-detail.component';

describe('ChipCardDetailComponent', () => {
  let component: ChipCardDetailComponent;
  let fixture: ComponentFixture<ChipCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
