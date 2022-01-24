import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {

  constructor() { 
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }

}
