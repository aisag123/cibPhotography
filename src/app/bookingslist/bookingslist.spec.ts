import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookingslist } from './bookingslist';

describe('Bookingslist', () => {
  let component: Bookingslist;
  let fixture: ComponentFixture<Bookingslist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookingslist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookingslist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
