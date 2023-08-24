import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GryffindorComponent } from './components/pages/gryffindor/gryffindor.component';
import { HufflepuffComponent } from './components/pages/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './components/pages/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './components/pages/slytherin/slytherin.component';
import { AllHouseComponent } from './components/pages/allhouse/allhouse.component';

const routes: Routes = [
  { path: 'gryffindor', component: GryffindorComponent },
  { path: 'hufflepuff', component: HufflepuffComponent },
  { path: 'ravenclaw', component: RavenclawComponent },
  { path: 'slytherin', component: SlytherinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
