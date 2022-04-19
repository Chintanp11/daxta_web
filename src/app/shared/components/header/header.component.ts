import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageDetectService } from '../../services/language-detect/language-detect.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showTab2 = false;
  selectedCountryCode : any;
  countryCodes = ['us', 'br', 'es'];
  customLabels = {
    'us': 'US',
    'br': 'Brazilian ',
    'es': 'Spain'
  };
  translateService: any;
  lang: any;

  constructor(public translate: TranslateService, private router: Router, public myService: LanguageDetectService) {
    // window.scroll(0,0)
    // translate.addLangs(['en', 'prtg','span']);
    // translate.setDefaultLang('en');
    translate.addLangs(this.countryCodes);
    // translate.setDefaultLang(this.selectedCountryCode);
    this.selectedCountryCode = localStorage.getItem('language');
    console.log(this.selectedCountryCode);
    if(this.selectedCountryCode){
      translate.setDefaultLang(JSON.parse(this.selectedCountryCode));
      this.selectedCountryCode = JSON.parse(this.selectedCountryCode)
    } else {
      this.selectedCountryCode = 'us';
      translate.setDefaultLang(this.selectedCountryCode = 'us');
    }
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
