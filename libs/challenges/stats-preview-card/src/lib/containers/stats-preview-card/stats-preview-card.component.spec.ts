import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPreviewCardComponent } from './stats-preview-card.component';

describe('StatsPreviewCardComponent', () => {
  let component: StatsPreviewCardComponent;
  let fixture: ComponentFixture<StatsPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsPreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
