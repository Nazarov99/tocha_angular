import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { SlickCarouselModule } from "ngx-slick-carousel";
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import { ModalRegisterComponent } from './components/modal-register/modal-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SwiperModule} from "swiper/angular";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    ModalLoginComponent,
    ModalRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgbModule,
    SwiperModule,
    NgxMaskModule.forRoot()
  ],
  entryComponents: [
    ModalLoginComponent
  ],
  providers: [
    MatDialogConfig,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
