import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { ClinicalSoftwareComponent } from './components/clinical-software/clinical-software.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';  
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxFlagPickerModule } from 'ngx-flag-picker';


@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule,NgxFlagPickerModule,
    HttpClientModule,
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
    ChatFormComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ClinicalSoftwareComponent,
    ChatFormComponent
  ],
  providers: []
})
export class SharedModule { }

export function httpTranslateLoader(http: HttpClient) {  
    return new TranslateHttpLoader(http);
  }
