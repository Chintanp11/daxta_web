import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { ClinicalSoftwareComponent } from './components/clinical-software/clinical-software.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';  
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxFlagPickerModule } from 'ngx-flag-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import { GqlModule } from '../gql/gql.module';
// import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
// import {HttpLink} from 'apollo-angular/http';
// import { InMemoryCache } from '@apollo/client/core';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule,NgxFlagPickerModule, 
    // ApolloModule,
    // GqlModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    TranslateModule.forRoot({  
        loader: {  
           provide: TranslateLoader,  
           useFactory: httpTranslateLoader,  
           deps: [HttpClient]  
           }  
        }) 
],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ClinicalSoftwareComponent, 
    ChatFormComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ClinicalSoftwareComponent,
    ChatFormComponent

  ],
  providers: [
    // {
    //   provide: APOLLO_OPTIONS,
    //   useFactory: (httpLink: HttpLink) => {
    //     return {
    //       cache: new InMemoryCache(),
    //       link: httpLink.create({
    //         uri: 'URI',
    //       }),
    //     };
    //   },
    //   deps: [HttpLink],
    // },
  ]
})
export class SharedModule { }

export function httpTranslateLoader(http: HttpClient) {  
    return new TranslateHttpLoader(http);
  }
