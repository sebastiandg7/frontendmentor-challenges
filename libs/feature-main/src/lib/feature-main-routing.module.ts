import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StatsPreviewCardComponent } from '@sebastiandg7/challenges/stats-preview-card';
import { ChallengesComponent } from './containers/challenges/challenges.component';

export const featureMainRoutes: Route[] = [
  {
    path: '',
    component: ChallengesComponent,
  },
  {
    path: 'stats-preview-card',
    component: StatsPreviewCardComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureMainRoutes)],
  exports: [RouterModule]
})
export class FeatureMainRoutingModule {}
