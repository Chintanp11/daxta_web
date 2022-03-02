import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-details',
  templateUrl: './our-details.component.html',
  styleUrls: ['./our-details.component.scss']
})
export class OurDetailsComponent implements OnInit {

  constructor() {
    window.scrollTo(0, 9999);
   }

  ngOnInit(): void {
  }

}
