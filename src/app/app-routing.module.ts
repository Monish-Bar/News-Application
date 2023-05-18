import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuinessComponent } from './buiness/buiness.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  { path: '', component: TopheadlineComponent }, //top headlines & Home
  { path: 'tech', component: TechComponent },
  { path: 'buzz', component: BuinessComponent },
  { path: 'hel', component: HealthComponent },
  { path: 'sci', component: ScienceComponent },
  { path: 'ent', component: EntertainmentComponent },
  { path: 'sport', component: SportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
