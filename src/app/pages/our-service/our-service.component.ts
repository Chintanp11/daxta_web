import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {

  constructor(private scroller: ViewportScroller, public router : Router) { 
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }
  // goDown1() {
  //   this.scroller.scrollToAnchor("targetRed");
  // }
  gotocontact(){
    this.router.navigateByUrl('/contactus');
  }
}
