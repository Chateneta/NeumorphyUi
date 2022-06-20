import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeumorphyUIComponent } from './neumorphy-ui.component';

describe('NeumorphyUIComponent', () => {
  let component: NeumorphyUIComponent;
  let fixture: ComponentFixture<NeumorphyUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeumorphyUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeumorphyUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
