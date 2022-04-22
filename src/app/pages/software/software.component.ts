import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {
  isReadMore = true
  constructor(private router : Router) { 
    // window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }
  showText() {
    this.isReadMore = !this.isReadMore
 }

 gotowishlist(){
this.router.navigateByUrl('/contactus')
 }
}
