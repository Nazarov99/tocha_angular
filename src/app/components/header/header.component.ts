import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ModalLoginComponent } from "../modal-login/modal-login.component";
import {ModalRegisterComponent} from "../modal-register/modal-register.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  showMenu?: false;
  loginUser?: false;
  mobileMenu?: boolean;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogin() {
    const ds = document.body.style.overflow = "hidden";
    this.mobileMenu = false;
    const dialogRef = this.matDialog.open(ModalLoginComponent, {
      data: {},
      width: '480px',
      height: '502px',
      panelClass: 'large-window',
    });
    dialogRef.afterClosed().subscribe(close => {
      const ds = document.body.style.overflow = "auto";
    });
  }


  openRegister() {
    this.mobileMenu = false;
    const ds = document.body.style.overflow = "hidden";
    const dialog = this.matDialog.open(ModalRegisterComponent, {
      data: {},
      width: '480px',
      height: '502px',
      panelClass: 'large-window-register',
    });
    dialog.afterClosed().subscribe(close => {
      const ds = document.body.style.overflow = "auto";
    });
  }

  openMenu() {
    this.mobileMenu = true;
  }

  closeMobile() {
    this.mobileMenu = false;
  }

  outSideClose() {
    this.mobileMenu = false;
  }
}
