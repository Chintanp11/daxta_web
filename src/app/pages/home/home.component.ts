import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageDetectService } from 'src/app/shared/services/language-detect/language-detect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted = false;
  x: any;
  section3divHide : boolean = false;
  // currentLanguage: string;
  constructor(
    private formBuilder: FormBuilder,
    readonly router: Router,
    public myService : LanguageDetectService,
    private translate: TranslateService,
  ) {

    // this.currentLanguage = localStorage.getItem(this.currentLanguage);

    // window.scroll(0, 1);
    this.reactiveForm = this.formBuilder.group({
      Name: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: [
        '',
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
      jobtitle: ['', Validators.required],
      companyName: ['', Validators.required],
    });
   this.getSection3Value();
  }

  ngOnInit(): void {
    
  }

  get f() {
    return this.reactiveForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
  }
  gotocontactus() {
    this.router.navigateByUrl('/contactus');
  }
  gotoourservice() {
    this.router.navigateByUrl('/ourservice');
  }
  gotocoursers() {
    this.router.navigateByUrl('/courses');
  }
  // useLanguage(language: string) {
  //   this.translate.use(language);
  // }

  getSection3Value(){
    this.myService.myMethod$.subscribe((data: any) => {
      if(data == 'br'){
        this.section3divHide = true;
      } else{
        this.section3divHide = false;
      }
      // else if(data == 'es'){
      //   this.section3divHide = false;
      // }
    });
  }
}
