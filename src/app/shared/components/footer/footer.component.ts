import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SUBSCRIBE } from '../../../gql/query';
import { Apollo } from 'apollo-angular';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted = false;
  x: any;
  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo,
    private toastr: ToastrService,
    public router: Router,
  ) {
    this.reactiveForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    $("#about-us-footer-h").click(function() {
      $("html, body").animate({ scrollTop: 0, behavior: 'smooth' }, "slow");
      return false;
    });
    $("#ourservice-footer").click(function() {
      $("html, body").animate({ scrollTop: 0, behavior: 'smooth' }, "slow");
      return false;
    });
    $("#software-footer").click(function() {
      $("html, body").animate({ scrollTop: 0, behavior: 'smooth' }, "slow");
      return false;
    });
    $("#contactus-footer").click(function() {
      $("html, body").animate({ scrollTop: 0, behavior: 'smooth' }, "slow");
      return false;
    });
    $("#terms-of-use-footer").click(function() {
      $("html, body").animate({ scrollTop: 0, behavior: 'smooth' }, "slow");
      return false;
    });
    $("#privacy-policy-footer").click(function() {
      $("html, body").animate({ scrollTop: 0, behavior: 'smooth' }, "slow");
      return false;
    });
  }

  get f() {
    return this.reactiveForm.controls;
  }

  onSubmit() {
    //  this.submitted = true;
    // if (this.reactiveForm.valid) {
    //   console.log("Form Submitted!");
    //   this.reactiveForm.reset();
    // }
    this.submitted = true;
    if (this.reactiveForm.status == 'VALID') {
      this.apollo
        .mutate({
          mutation: SUBSCRIBE,
          variables: {
            email: this.reactiveForm.value.email,
          },
        })
        .subscribe(() => {
          this.toastr.success('', 'Thank you for subscribing!', {
            timeOut: 3000,
          });
          this.reactiveForm.reset();
        });
    }
  }
}
