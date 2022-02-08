import { Component, OnInit } from '@angular/core';
import { Country, State, City } from 'country-state-city';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder ,  private router:Router) {
    this.reactiveForm = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required, Validators.pattern('[^-\s][a-zA-Z0-9-_\\s]+$')]),
      Email: new FormControl('', [Validators.required, Validators.pattern('/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/')]),
      lastName:  new FormControl('', [Validators.required, Validators.pattern('[^-\s][a-zA-Z0-9-_\\s]+$')]),
      // Country:  new FormControl('', [Validators.required]),
      Companyname: new FormControl('', [Validators.required]),
      Description:new FormControl('',[Validators.required]),
      countryName: new FormControl('', [Validators.required]),
      stateName: new FormControl('', [Validators.required]),
      cityName: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.Country = Country.getAllCountries();
  }

  onContrySelected(value: string) {
    this.dropdownState = State.getStatesOfCountry(value);
  }

  onStateSelected(value: string, value2: string){
    this.dropdownCity = City.getCitiesOfState(value, value2);
  }
  get f() { return this.reactiveForm.controls; }

  onsubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
    localStorage.setItem('form-data', JSON.stringify(this.reactiveForm.value));
    console.log(this.reactiveForm.value)
   
    this.router.navigate(['/about']);
  }
}
