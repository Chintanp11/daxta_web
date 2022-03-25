import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SUBSCRIBE } from '../../../gql/query';
import { Apollo } from 'apollo-angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted = false;
  x: any;
  constructor(private formBuilder: FormBuilder ,private apollo: Apollo,   private toastr: ToastrService) { 

    this.reactiveForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });

  }

  ngOnInit(): void {
  }

  get f() { return this.reactiveForm.controls; }

  
  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.status == "VALID") {
      // console.log(this.reactiveForm.value, 'hyeeeeeee')
      this.apollo
      .mutate({ 
        mutation: SUBSCRIBE,
        variables: {
            email: this.reactiveForm.value.email, 
        },
      })
      .subscribe();
      this.toastr.success('', 'Thank you for subscribing!', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
        
      });
    // this.toastr.success("Thank you! For Subscribe");
    // // this.reactiveForm.reset();  
    return;
    
 
    }
}
}
