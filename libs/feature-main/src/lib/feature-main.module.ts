import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChallengesStatsPreviewCardModule } from '@sebastiandg7/challenges/stats-preview-card';
import { ChallengesComponent } from './containers/challenges/challenges.component';
import { FeatureMainComponent } from './containers/feature-main/feature-main.component';
import { FeatureMainRoutingModule } from './feature-main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureMainRoutingModule,
    ChallengesStatsPreviewCardModule,
  ],
  declarations: [FeatureMainComponent, ChallengesComponent],
  exports: [FeatureMainComponent],
})
export class FeatureMainModule {}
