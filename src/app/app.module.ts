import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HarrypotterService } from './harrypotter.service';
import { NavComponent } from './components/nav/nav.component';
import { GryffindorComponent } from './components/pages/gryffindor/gryffindor.component';
import { HufflepuffComponent } from './components/pages/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './components/pages/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './components/pages/slytherin/slytherin.component';
import { AllHouseComponent } from './components/pages/allhouse/allhouse.component';

const routes: Routes = [
  { path: 'allhouse', component: AllHouseComponent },
  { path: 'gryffindor', component: GryffindorComponent },
  { path: 'hufflepuff', component: HufflepuffComponent },
  { path: 'ravenclaw', component: RavenclawComponent },
  { path: 'slytherin', component: SlytherinComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AllHouseComponent,
    NavComponent,
    GryffindorComponent,
    HufflepuffComponent,
    RavenclawComponent,
    SlytherinComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [HarrypotterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
