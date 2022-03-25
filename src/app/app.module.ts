import { OurTeamModule } from './pages/our-team/our-team.module';
import { BlogModule } from './pages/blog/blog.module';
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
import { InMemoryCache } from '@apollo/client/core';
import { GqlModule } from './gql/gql.module';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
// import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

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

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    OurTeamModule,
    BlogModule,
    FormsModule,
    ApolloModule,
    GqlModule,
    NgxPageScrollCoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({  
      loader: {  
         provide: TranslateLoader,  
         useFactory: httpTranslateLoader,  
         deps: [HttpClient]  
         }  
      }) 
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        // return {
        //   cache: new InMemoryCache(),
        //   link: httpLink.create({
        //     uri: 'URI',
        //   }),
        // };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
export function httpTranslateLoader(http: HttpClient) {  
  return new TranslateHttpLoader(http);
}