import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { PointTableComponent } from './point-table/point-table.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path:'match',
    component: MatchesComponent
  },
  {
    path:'teams',
    component: TeamsComponent
  },
  {
    path: 'point-table',
    component: PointTableComponent
  },
  {
    path: 'playerinfo',
    component: PlayerInfoComponent
  },
  {
    path:'',
    redirectTo: 'match',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
