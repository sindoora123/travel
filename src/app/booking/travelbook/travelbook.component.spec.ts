import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelbookComponent } from './travelbook.component';

describe('TravelbookComponent', () => {
  let component: TravelbookComponent;
  let fixture: ComponentFixture<TravelbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
