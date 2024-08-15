import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RumourComponent } from './rumour.component';

describe('RumourComponent', () => {
  let component: RumourComponent;
  let fixture: ComponentFixture<RumourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RumourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RumourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
