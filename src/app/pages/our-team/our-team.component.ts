import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  isShow = true;

  constructor(private router:Router) {
    window.scrollTo(0, 0);
   }

  ngOnInit(): void {
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }
  
  goToDetails(){
    this.router.navigate(['our-team/our-details']);
  }
  goToDetails1(){
    this.router.navigate(['our-team/our-details1']);
  }
  goToDetails2(){
    this.router.navigate(['our-team/our-details2']);
  }
}
