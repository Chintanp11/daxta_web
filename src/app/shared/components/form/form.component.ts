import { Component, OnInit } from '@angular/core';
import { Country, State, City } from 'country-state-city';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  selectedCountry: any = '';
  selectedCity: any = '';
  selectedState: any = '';
  
  dropdownState: any = [];
  dropdownCity: any = [];

  Country: any = [];
  State: any = [];
  City: any = [];

  constructor() {
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
}
