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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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