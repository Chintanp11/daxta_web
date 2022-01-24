import { Component, OnInit, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  isShow = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }

}
