import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private router: Router) {
    window.scrollTo(0, 0);
   }

  ngOnInit(): void {
  }

  goToDetails(){
    this.router.navigate(['blog/blog-details']);
  }

}
