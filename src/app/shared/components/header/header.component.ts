import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared/shared.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showTab2 = false;
  selectedCountryCode = 'us';
  countryCodes = ['us', 'br', 'es'];
  customLabels = {
    'us': 'US',
    'br': 'Brazilian ',
    'es': 'Spain'
  };
  translateService: any;

  constructor(public translate: TranslateService, private router: Router, public myService: SharedService) {
    // window.scroll(0,0)
    // translate.addLangs(['en', 'prtg','span']);
    // translate.setDefaultLang('en');
    translate.addLangs(this.countryCodes);
    translate.setDefaultLang(this.selectedCountryCode);
    
    
  }

  ngOnInit(): void {
    $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });

    localStorage.getItem('language')
  }

  // switchLang(lang: string) {
  //   console.log(lang);
  //   this.translate.use(lang);
  // }


  translateSite(langauge: string) {
    this.translateService.use(langauge);
    localStorage.setItem("lan", langauge);
  }

  changeSelectedCountryCode(value: any): void {
    this.myService.myMethod(value);
    localStorage.setItem('language', JSON.stringify(value));
    this.selectedCountryCode = value;
    this.translate.use(value);
    if (value == 'br') {
      this.showTab2 = true;
    }
    else {
      this.showTab2 = false;
    }
  }

  backToHome() {
    this.router.navigate(['/home']);
  }

  isShown: boolean = false; // hidden by default


  toggleShow() {

    this.isShown = !this.isShown;

  }

  // showTab() {

  // }
}
