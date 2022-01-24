import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted = false;
  x:any;
  constructor(private formBuilder: FormBuilder ,  private router:Router) { 

    window.scrollTo(0, 0);

    this.reactiveForm = this.formBuilder.group({
      Name: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: ['',Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      jobtitle: ['',Validators.required],
      companyName :['',Validators.required]
  });
  }

  ngOnInit(): void {
  }
  get f() { return this.reactiveForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.reactiveForm.invalid) {
          return;
      }
  }
  gotocontactus(){
    this.router.navigateByUrl('/contactus');
  }
  gotoourservice(){
    this.router.navigateByUrl('/ourservice')
  }
  gotocoursers(){
    this.router.navigateByUrl('/courses')
  }
  // useLanguage(language: string) {
  //   this.translate.use(language);
  // }
}
