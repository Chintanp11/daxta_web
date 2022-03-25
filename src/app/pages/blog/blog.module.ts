import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogRoutingModule} from './blog-routing.module';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {HttpLink} from 'apollo-angular/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [BlogDetailsComponent],

  exports: [
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BlogRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({  
        loader: {  
           provide: TranslateLoader,  
           useFactory: httpTranslateLoader,  
           deps: [HttpClient]  
           }  
        }) 
  ]
})
export class BlogModule { }

export function httpTranslateLoader(http: HttpClient) {  
  return new TranslateHttpLoader(http);
}
