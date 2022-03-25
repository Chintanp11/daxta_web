import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Apollo} from 'apollo-angular';
import { HttpLink} from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class GqlModule {

  private readonly URI1: string = 'http://3.88.68.85:5000/api/web';


  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    const options1: any = { uri: this.URI1 };
    apollo.createDefault({
      link: httpLink.create(options1),
      cache: new InMemoryCache()
    });
  }

 }
