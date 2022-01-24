import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clinical-software',
  templateUrl: './clinical-software.component.html',
  styleUrls: ['./clinical-software.component.scss']
})
export class ClinicalSoftwareComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotocontactus(){
    this.router.navigateByUrl('/contactus');
  }

  gotosoftware(){
    this.router.navigateByUrl('/software');
  }
}
