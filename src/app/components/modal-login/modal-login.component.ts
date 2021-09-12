import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {


  loginForm: FormGroup;
  fieldTextType: boolean;
  isValid: boolean;

  constructor(public matDialogRef: MatDialogRef<ModalLoginComponent>,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initLogin();
  }

  initLogin() {
    this.loginForm = this.fb.group({
      phone: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  login() {
    console.log(this.loginForm)
  }

  closeDialog() {
    this.matDialogRef.close();
  }


  checkPhone(e:any) {
    const checkValue = Number(e);
    if (isNaN(checkValue)) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
    if (e === 0) {
      this.isValid = !this.isValid;
    }
  }
}
