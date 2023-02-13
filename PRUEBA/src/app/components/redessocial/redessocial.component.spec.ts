import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedessocialComponent } from './redessocial.component';

describe('RedessocialComponent', () => {
  let component: RedessocialComponent;
  let fixture: ComponentFixture<RedessocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedessocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedessocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
