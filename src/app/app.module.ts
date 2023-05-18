import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { HttpClientModule } from '@angular/common/http';
import { BmnewsapiService } from './service/bmnewsapi.service';
import { FooterComponent } from './footer/footer.component';
import { TechComponent } from './tech/tech.component';
import { BuinessComponent } from './buiness/buiness.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    FooterComponent,
    TechComponent,
    BuinessComponent,
    HealthComponent,
    ScienceComponent,
    EntertainmentComponent,
    SportsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [BmnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
