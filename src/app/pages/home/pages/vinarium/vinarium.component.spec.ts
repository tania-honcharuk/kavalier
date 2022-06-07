import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinariumComponent } from './vinarium.component';

describe('VinariumComponent', () => {
  let component: VinariumComponent;
  let fixture: ComponentFixture<VinariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinariumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
