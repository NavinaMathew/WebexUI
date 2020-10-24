import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteformpageComponent } from './inviteformpage.component';

describe('InviteformpageComponent', () => {
  let component: InviteformpageComponent;
  let fixture: ComponentFixture<InviteformpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteformpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteformpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
