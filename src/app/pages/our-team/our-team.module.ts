import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamRoutingModule } from './our-team-routing.module';
// import { OurTeamInnerComponent } from './our-team-inner';
import { SharedModule } from 'src/app/shared/shared.module';
import { OurDetailsComponent } from './our-details/our-details.component';
import { OurDetails1Component } from './our-details1/our-details1.component';
import { OurDetails2Component } from './our-details2/our-details2.component';


@NgModule({
  declarations: [
    OurDetailsComponent,
    OurDetails1Component,
    OurDetails2Component
  ],
  imports: [
    CommonModule,
    OurTeamRoutingModule,
    SharedModule
  ]
})
export class OurTeamModule { }