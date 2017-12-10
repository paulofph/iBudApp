import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavebarLeftComponent } from './side-navebar-left.component';

describe('SideNavebarLeftComponent', () => {
  let component: SideNavebarLeftComponent;
  let fixture: ComponentFixture<SideNavebarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavebarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
