import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapionsComponent } from './chapions.component';

describe('ChapionsComponent', () => {
  let component: ChapionsComponent;
  let fixture: ComponentFixture<ChapionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
