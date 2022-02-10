import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';  
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { OurServiceComponent } from './pages/our-service/our-service.component';
import { SoftwareComponent } from './pages/software/software.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { LatestJobContentComponent } from './shared/components/latest-job-content/latest-job-content.component';
import { SharedModule } from './shared/shared.module';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { OurTeamInnerComponent } from './pages/our-team/our-team-inner/our-team-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OurServiceComponent,
    SoftwareComponent,
    CoursesComponent,
    BlogComponent,
    ContactUsComponent,
    OurTeamComponent,
    LatestJobContentComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    OurTeamInnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    TranslateModule.forRoot({  
      loader: {  
         provide: TranslateLoader,  
         useFactory: httpTranslateLoader,  
         deps: [HttpClient]  
         }  
      }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
export function httpTranslateLoader(http: HttpClient) {  
  return new TranslateHttpLoader(http);
}