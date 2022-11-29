import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageDetailComponent } from './passage-detail.component';

describe('PassageDetailComponent', () => {
  let component: PassageDetailComponent;
  let fixture: ComponentFixture<PassageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassageDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
