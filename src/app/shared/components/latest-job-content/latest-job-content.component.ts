import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-job-content',
  templateUrl: './latest-job-content.component.html',
  styleUrls: ['./latest-job-content.component.scss']
})
export class LatestJobContentComponent implements OnInit {

  isReadMore = true

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  showText() {
    this.isReadMore = !this.isReadMore
 }

 inquirynow()
 {
    this.router.navigateByUrl('/contactus')
 }
}
