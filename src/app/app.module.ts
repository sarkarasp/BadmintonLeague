import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatchesComponent } from './matches/matches.component';
import { TeamsComponent } from './teams/teams.component';
import { PointTableComponent } from './point-table/point-table.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchesComponent,
    TeamsComponent,
    PointTableComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
