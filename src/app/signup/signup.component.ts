import {Component, ElementRef, OnInit, QueryList, ViewChild, AfterViewInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ToastService, ModalDirective} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {
  @ViewChild('frame') private _frame: ModalDirective;
  @ViewChild('form') private _form: ModalDirective;

  registerForm: FormGroup;
  $frame: any;
  isLoading = false;

  constructor(private formBuilder: FormBuilder,
              private toastService: ToastService,
  ) {
    this.registerForm = formBuilder.group({
      Pseudo: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Pass: ['', [Validators.required, Validators.minLength(8)]],
      PassConf: ['', [Validators.required, Validators.minLength(8)]],
      Terms: ['', Validators.required],
    });
  }

  ngOnInit() {
    console.log(this._form);
  }

  ngAfterViewInit() {

  }


  submitForm() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this._frame.show();
    }, 5000);
  }
}
