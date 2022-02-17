import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurDetailsComponent } from './our-details/our-details.component';
import { OurDetails1Component } from './our-details1/our-details1.component';
import { OurDetails2Component } from './our-details2/our-details2.component';
// import { BlogComponent } from './blog.component';
import { OurTeamComponent } from './our-team.component';

const routes: Routes = [
  {
    path: '',
    component: OurTeamComponent,
  },
  {
    path: 'our-details',
    component: OurDetailsComponent,
  },
  {
    path: 'our-details1',
    component: OurDetails1Component,
  },
  {
    path: 'our-details2',
    component: OurDetails2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurTeamRoutingModule {}
