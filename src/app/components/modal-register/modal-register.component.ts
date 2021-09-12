import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent implements OnInit {

  // @ts-ignore
  registerForm: FormGroup;
  // @ts-ignore
  fieldTextType: boolean;
  // @ts-ignore
  confirmTextType: boolean;
  isValid: boolean;

  constructor(public matDialogRef: MatDialogRef<ModalRegisterComponent>,
              private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initRegister()
  }

  initRegister() {
    this.registerForm = this._fb.group({
      phone: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    });
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleConfirmTextType() {
    this.confirmTextType = !this.confirmTextType;
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


  register() {
    console.log(this.registerForm)
  }
}
