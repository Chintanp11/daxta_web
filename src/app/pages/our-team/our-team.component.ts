import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  isShow = true;

  constructor(private router:Router ,) {
    // window.scrollTo(0, 0);
   }

  ngOnInit(): void {
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }
  
  goToDetails(){
    this.router.navigate(['our-team/Layla']);
  }
  goToDetails1(){
    this.router.navigate(['our-team/Gaby']);
  }
  goToDetails2(){
    this.router.navigate(['our-team/Mari']);
  }
}
