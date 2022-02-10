import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurTeamInnerComponent } from './our-team-inner/our-team-inner.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'ourteaminner', component:OurTeamInnerComponent}

  // { path:'blog' , component:BlogComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OurTeamComponent { }
