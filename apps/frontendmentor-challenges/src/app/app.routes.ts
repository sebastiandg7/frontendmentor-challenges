import { Route } from '@angular/router';
import { featureMainRoutes } from '@sebastiandg7/feature-main';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    children: [...featureMainRoutes],
  },
];
