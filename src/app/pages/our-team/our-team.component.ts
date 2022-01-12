import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  isReadMore = true
  constructor() { }

  ngOnInit(): void {
    
  }

  showText() {
    this.isReadMore = !this.isReadMore
 }
}
