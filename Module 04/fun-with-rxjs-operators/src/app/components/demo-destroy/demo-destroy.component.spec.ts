import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDestroyComponent } from './demo-destroy.component';

describe('DemoDestroyComponent', () => {
  let component: DemoDestroyComponent;
  let fixture: ComponentFixture<DemoDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDestroyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
