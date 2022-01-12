import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import { FormComponent } from './shared/form/form.component';
import { DaxtatabComponent } from './shared/daxtatab/daxtatab.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    OurServiceComponent,
    SoftwareComponent,
    CoursesComponent,
    BlogComponent,
    ContactUsComponent,
    OurTeamComponent,
    FormComponent,
    DaxtatabComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    BlogDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PopoverModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
