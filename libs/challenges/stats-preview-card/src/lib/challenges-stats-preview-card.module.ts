import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsPreviewCardComponent } from './containers/stats-preview-card/stats-preview-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StatsPreviewCardComponent],
  exports: [StatsPreviewCardComponent],
})
export class ChallengesStatsPreviewCardModule {}
