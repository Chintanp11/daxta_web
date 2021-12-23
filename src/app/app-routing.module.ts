import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { OurServiceComponent } from './pages/our-service/our-service.component';
import { SoftwareComponent } from './pages/software/software.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'about' , component:AboutComponent},
  { path:'ourservice' , component:OurServiceComponent},
  { path:'software' , component:SoftwareComponent},
  { path:'courses' , component:CoursesComponent},
  { path:'blog' , component:BlogComponent},
  { path:'contactus' , component:ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
