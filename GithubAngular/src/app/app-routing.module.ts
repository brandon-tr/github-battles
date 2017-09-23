import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsComponent } from './dashboard/results/results.component';
import { RankingsComponent } from './dashboard/rankings/rankings.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: DashboardComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'rankings', component: RankingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
