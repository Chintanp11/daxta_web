import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {

  constructor( public router : Router ) { 
    window.scroll(0, 0);
  }

  ngOnInit(): void {
  }

  gotocontact(){
    this.router.navigateByUrl('/contactus');
  }
}
