import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {
  isReadMore = true
  constructor() { }

  ngOnInit(): void {
  }
  showText() {
    this.isReadMore = !this.isReadMore
 }
}
