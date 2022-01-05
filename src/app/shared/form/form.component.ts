import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted = false;
  x: any;
  constructor(private formBuilder: FormBuilder ,  private router:Router) {
    this.reactiveForm = this.formBuilder.group({
      Name: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: ['', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      jobtitle: ['', Validators.required],
      companyName: ['', Validators.required]
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
}
