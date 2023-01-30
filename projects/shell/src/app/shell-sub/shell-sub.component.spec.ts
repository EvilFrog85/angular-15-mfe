import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellSubComponent } from './shell-sub.component';

describe('ShellSubComponent', () => {
  let component: ShellSubComponent;
  let fixture: ComponentFixture<ShellSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
