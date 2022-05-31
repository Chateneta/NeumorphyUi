import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDivComponent } from './flex-div.component';

describe('FlexDivComponent', () => {
  let component: FlexDivComponent;
  let fixture: ComponentFixture<FlexDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
