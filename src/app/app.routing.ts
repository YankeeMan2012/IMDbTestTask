import {Routes, RouterModule} from '@angular/router';

import {TopComponent} from './top/top.component';
import {ChartComponent} from './chart/chart.component';
import {FavoritesComponent} from './favorites/favorites.component';

const appRoutes: Routes = [
    {path: '', component: TopComponent},
    {path: 'chart', component: ChartComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: '**', component: TopComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
