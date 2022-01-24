import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { OurServiceComponent } from './pages/our-service/our-service.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { SoftwareComponent } from './pages/software/software.component';
import { BlogModule } from './pages/blog/blog.module';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'about' , component:AboutComponent},
  { path:'ourservice' , component:OurServiceComponent},
  { path:'ourteam' , component:OurTeamComponent},
  { path:'software' , component:SoftwareComponent},
  { path:'courses' , component:CoursesComponent},
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
  },
  // { path:'blog' , component:BlogComponent},
  { path:'contactus' , component:ContactUsComponent},
  { path:'terms-of-use' , component:TermsOfUseComponent},
  { path:'privacy-policy' , component:PrivacyPolicyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
