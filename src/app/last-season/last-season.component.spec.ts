import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSeasonComponent } from './last-season.component';

describe('LastSeasonComponent', () => {
  let component: LastSeasonComponent;
  let fixture: ComponentFixture<LastSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastSeasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
