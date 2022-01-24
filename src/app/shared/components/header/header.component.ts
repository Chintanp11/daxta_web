import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedCountryCode = 'us';
  countryCodes = ['us', 'pt', 'es'];
  customLabels = {
    'us': 'US',
    'pt': 'Portugal',
    'es': 'Spain'
  };

  constructor(public translate: TranslateService, private router: Router) {
    // translate.addLangs(['en', 'prtg','span']);
    // translate.setDefaultLang('en');
    translate.addLangs(this.countryCodes);
    translate.setDefaultLang(this.selectedCountryCode);
   }

  ngOnInit(): void {
    $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }

  // switchLang(lang: string) {
  //   console.log(lang);
  //   this.translate.use(lang);
  // }

 

  changeSelectedCountryCode(value: string): void {
    console.log(value);
    this.selectedCountryCode = value;
    this.translate.use(value);
  }

  backToHome(){
    this.router.navigate(['/home']);
  }
  
}
