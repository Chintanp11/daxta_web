import { Component, OnInit } from '@angular/core';
import { Country, State, City } from 'country-state-city';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN } from '../../../gql/query';
import { Apollo } from 'apollo-angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted = false;
  x: any;
  selectedCountry: any = '';
  selectedCity: any = '';
  selectedState: any = '';

  dropdownState: any = [];
  dropdownCity: any = [];

  Country: any = [];
  State: any = [];
  City: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apollo: Apollo,
    private toastr: ToastrService
  ) {
    this.reactiveForm = this.formBuilder.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z -']+"),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z -']+"),
      ]),
      // Country:  new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      countryName: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.Country = Country.getAllCountries();
  }

  onContrySelected(value: string) {
    this.dropdownState = State.getStatesOfCountry(value);
  }

  onStateSelected(value: string, value2: string) {
    this.dropdownCity = City.getCitiesOfState(value, value2);
  }
  get f() {
    return this.reactiveForm.controls;
  }

  onsubmit() {
    this.submitted = true;
    console.log(this.reactiveForm.status);
    if (this.reactiveForm.status == 'VALID') {
      this.apollo
        .mutate({
          mutation: LOGIN,
          variables: {
            ContactUsForm: {
              email: this.reactiveForm.value.email,
              firstName: this.reactiveForm.value.firstname,
              lastName: this.reactiveForm.value.lastName,
              message: this.reactiveForm.value.Description,
              numberOfClients: this.reactiveForm.value.numberOfClients,
            },
          },
        })
        .subscribe();
        this.toastr.success('', 'Thank you! A Team Member will be in touch via e-mail shortly!', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
          
        });
         
      this.reactiveForm.reset();
      return;
    }
  }
}
