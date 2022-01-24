import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  isShow = true;

  constructor() {
    window.scrollTo(0, 0);
   }

  ngOnInit(): void {
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }
}
