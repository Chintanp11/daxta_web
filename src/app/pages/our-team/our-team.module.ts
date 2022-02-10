import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OurTeamInnerComponent } from './our-team-inner/our-team-inner.component';


@NgModule({
  declarations: [
    OurTeamInnerComponent,
    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: []
})
export class OurTeamComponent {

}
