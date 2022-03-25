
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamRoutingModule } from './our-team-routing.module';
import { OurDetailsComponent } from './our-details/our-details.component';
import { OurDetails1Component } from './our-details1/our-details1.component';
import { OurDetails2Component } from './our-details2/our-details2.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    OurDetailsComponent,
    OurDetails1Component,
    OurDetails2Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    OurTeamRoutingModule,
    HttpClientModule,
  
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ]
})
export class OurTeamModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}